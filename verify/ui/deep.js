/* Exhaustive crawl. Where audit.js walks a scripted path, this one clicks every
   control it can find on every surface and, after each click, checks the render
   for the signatures of a broken template: "undefined", "NaN", "[object
   Object]", an empty panel, a stray "$1" from a bad replace. It also reports
   page errors, console errors and unhandled rejections against the click that
   produced them.

   Overlays are closed between surfaces so one stuck overlay does not hide the
   rest of the app. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(path.join(__dirname, '..', '..', 'node_modules', 'playwright-core'));

const ROOT = path.join(__dirname, '..', '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(fs.readFileSync(f));
});

let step = '(boot)';
const problems = [];
const note = (kind, msg) => {
  const line = `[${kind}] during "${step}": ${msg}`;
  if (!problems.includes(line)) problems.push(line);
};

/* Text that should never reach the screen. "null" is left out: it appears
   legitimately inside question text about null sets. */
const ROT = [
  [/\bundefined\b/, 'undefined'],
  [/\bNaN\b/, 'NaN'],
  [/\[object Object\]/, '[object Object]'],
  [/\$\{/, 'unexpanded ${ template'],
  [/&lt;(b|span|div|i)\b/, 'escaped markup shown as text'],
];

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });

  page.on('pageerror', e => note('PAGEERROR', e.message));
  page.on('console', m => {
    if (m.type() !== 'error') return;
    const t = m.text();
    if (/favicon|sw\.js|ServiceWorker|Failed to load resource|anthropic/i.test(t)) return;
    note('CONSOLE', t);
  });
  page.on('dialog', d => d.accept());

  const wait = ms => page.waitForTimeout(ms);
  const visibleText = () => page.evaluate(() => {
    // Only what the user can actually see: the open overlay, or the page.
    const overlay = ['runner', 'review', 'session', 'flash', 'concept', 'profile', 'jumper', 'onboard']
      .map(id => document.getElementById(id)).find(e => e && !e.hidden);
    const el = overlay || document.getElementById('view');
    return el ? el.innerText : '';
  });

  const scan = async (where) => {
    // KaTeX marks a formula it could not parse rather than throwing, so a
    // broken formula is invisible unless the class is looked for.
    const mathErrors = await page.evaluate(() =>
      [...document.querySelectorAll('.katex-error')].map(e => (e.textContent || '').slice(0, 60)).slice(0, 3));
    mathErrors.forEach(m => note('MATH', `KaTeX could not render "${m}" in ${where}`));
    const t = await visibleText();
    for (const [re, label] of ROT) {
      if (re.test(t)) {
        const m = re.exec(t);
        const at = Math.max(0, m.index - 60);
        note('ROT', `${label} in ${where}: …${t.slice(at, m.index + 60).replace(/\s+/g, ' ')}…`);
      }
    }
    return t;
  };

  const closeOverlays = () => page.evaluate(() => {
    ['runner', 'review', 'session', 'flash', 'concept', 'profile', 'jumper'].forEach(id => {
      const e = document.getElementById(id); if (e) e.hidden = true;
    });
    document.body.style.overflow = '';
  });

  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await wait(1000);

  step = 'onboarding';
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Deep Crawl'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const dt = document.querySelector('#onboard input[type="date"]');
    if (dt) { dt.value = '2026-11-15'; dt.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await wait(500);

  /* ---- every pane of every tab, with every control on it clicked ---- */
  const tabs = await page.evaluate(() => [...document.querySelectorAll('#botnav .bn')].map(b => b.textContent.trim()));
  for (let i = 0; i < tabs.length; i++) {
    await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), i);
    await wait(320);
    const panes = await page.evaluate(() => [...document.querySelectorAll('[data-subtab]')].map(b => b.getAttribute('data-subtab')));
    const list = panes.length ? panes : [null];
    for (const p of list) {
      step = `tab ${tabs[i]}${p ? ' / ' + p : ''}`;
      if (p) { await page.evaluate(x => document.querySelector(`[data-subtab="${x}"]`)?.click(), p); await wait(280); }
      const txt = await scan(step);
      const words = txt.trim().split(/\s+/).filter(Boolean).length;
      if (words < 12) note('EMPTY', `${words} words rendered`);

      // Click every control in the pane that does not navigate away, one at a
      // time, re-rendering between clicks so stale handles are never reused.
      const sels = await page.evaluate(() => {
        const skip = /subtab|runset|resetset|gendel|practicerun|flashdeck|openconcept|nav|tab$/i;
        const out = [];
        [...document.querySelectorAll('#view button, #view [role="button"], #view summary')].forEach((el, k) => {
          const attrs = [...el.attributes].map(a => a.name).filter(n => n.startsWith('data-'));
          if (!attrs.length) return;
          if (attrs.some(a => skip.test(a))) return;
          out.push(k);
        });
        return out;
      });
      for (const k of sels.slice(0, 26)) {
        const before = step;
        step = `${before} :: control #${k}`;
        await page.evaluate(idx => {
          const el = [...document.querySelectorAll('#view button, #view [role="button"], #view summary')][idx];
          if (el) { el.scrollIntoView({ block: 'center' }); el.click(); }
        }, k);
        await wait(140);
        await scan(step);
        // A click must never leave the main view empty.
        const w = await page.evaluate(() => (document.getElementById('view')?.innerText || '').trim().split(/\s+/).filter(Boolean).length);
        if (w < 8) note('EMPTY', 'view collapsed to ' + w + ' words after this click');
        await closeOverlays();
        step = before;
      }
    }
  }

  /* ---- open a topic on each subject tab and drive the runner ---- */
  for (const [tabIdx, label] of [[0, 'Quant'], [1, 'Data'], [3, 'RC'], [4, 'CR']]) {
    step = `runner on ${label}`;
    await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), tabIdx);
    await wait(300);
    await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
    await wait(300);

    // Every difficulty of the smallest topic, so the level filter is exercised
    // against real data rather than only the default "All".
    for (const lvl of ['', 'easy', 'medium', 'hard']) {
      step = `runner on ${label} :: ${lvl || 'all'}`;
      const opened = await page.evaluate(() => {
        const rows = [...document.querySelectorAll('#view .setrow')]
          .map(r => ({ btn: r.querySelector('[data-runset]'), n: parseInt(r.querySelector('.sm span')?.textContent || '999', 10) || 999 }))
          .filter(x => x.btn).sort((a, b) => a.n - b.n);
        if (!rows.length) return false;
        rows[0].btn.click(); return true;
      });
      if (!opened) { note('MISSING', `no topic to open on ${label}`); break; }
      await wait(320);
      const picked = await page.evaluate(v => {
        const c = document.querySelector(`#runner [data-setlvl="${v}"]`);
        if (!c) return false; c.click(); return true;
      }, lvl);
      if (!picked) { await closeOverlays(); continue; }   // that level has no questions here
      await wait(200);
      await scan(step + ' :: chooser');

      // The header count and the run must agree.
      await page.evaluate(() => document.querySelector('#runner [data-mode="practice"]')?.click());
      await wait(250);
      const shape = await page.evaluate(() => {
        const m = /of\s+(\d+)/.exec(document.querySelector('#runner .qnum')?.textContent || '');
        return { total: m ? parseInt(m[1], 10) : 0, picks: document.querySelectorAll('#runner [data-pick]').length };
      });
      if (!shape.total) note('SHAPE', 'runner shows no "Question 1 of N"');
      if (shape.picks < 2) note('SHAPE', `only ${shape.picks} answer choices rendered`);
      await scan(step + ' :: question');

      // Answer two, checking the explanation renders each time.
      for (let q = 0; q < 2; q++) {
        await page.evaluate(() => document.querySelector('#runner [data-pick="A"]')?.click());
        await wait(90);
        await page.evaluate(() => document.querySelector('#runner [data-confirm]')?.click());
        await wait(180);
        const ex = await page.evaluate(() => document.querySelector('#runner .expl')?.innerText || '');
        if (!ex.trim()) note('MISSING', 'no explanation after confirming an answer');
        await scan(step + ` :: answered Q${q + 1}`);
        const nx = await page.evaluate(() => { const n = document.querySelector('#runner [data-next]'); if (!n) return false; n.click(); return true; });
        if (!nx) break;
        await wait(140);
      }
      // Every question in this slice must actually carry the level asked for.
      if (lvl) {
        const bad = await page.evaluate(v => {
          // A recalibrated badge deliberately shows a different level from the
          // one stored on the question, so it says nothing about the filter.
          return [...document.querySelectorAll('#runner .lvl')]
            .filter(b => !b.classList.contains('lvl-recal'))
            .map(b => b.textContent.trim().toLowerCase())
            .filter(b => b && b !== v).length;
        }, lvl);
        if (bad) note('FILTER', `a ${lvl} run showed ${bad} question(s) of another level`);
      }
      await closeOverlays();
      await wait(150);
      // Reset so the next level starts from the chooser rather than a resume.
      await page.evaluate(() => {
        const st = JSON.parse(localStorage.getItem('gmat_tracker_v2') || '{}');
        st.runs = {}; localStorage.setItem('gmat_tracker_v2', JSON.stringify(st));
      });
      await page.reload(); await wait(700);
      await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), tabIdx);
      await wait(250);
      await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
      await wait(250);
    }
  }

  /* ---- the topic filing itself, read off the practice panes ---- */
  let filedTotal = 0;
  for (const [tabIdx, label] of [[0, 'Quant'], [1, 'Data'], [3, 'RC'], [4, 'CR']]) {
    step = `topic filing on ${label}`;
    await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), tabIdx);
    await wait(280);
    await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
    await wait(280);
    const f = await page.evaluate(() => {
      // Sets generated on the device sit under their own heading and are not
      // part of the syllabus count in the header, so stop at that heading.
      const all = [...document.querySelectorAll('#view .tsub, #view .setrow')];
      const cut = all.findIndex(e => e.classList.contains('tsub') && /generated on this device/i.test(e.textContent));
      const rows = (cut < 0 ? all : all.slice(0, cut)).filter(e => e.classList.contains('setrow')).map(r => ({
        title: r.querySelector('.st')?.textContent.trim() || '',
        n: parseInt(r.querySelector('.sm span')?.textContent || '0', 10) || 0,
        lvls: [...r.querySelectorAll('.slvl .lvl')].map(x => parseInt(x.textContent, 10) || 0).reduce((a, b) => a + b, 0),
      }));
      const head = /(\d+)\s+topics?\s+·\s+(\d+)\s+Qs/.exec(document.querySelector('#tab-practice .tabsec-head')?.textContent
        || document.querySelector('#tab-practice')?.textContent || '');
      const seen = {}, dup = [];
      rows.forEach(r => { if (seen[r.title]) dup.push(r.title); seen[r.title] = 1; });
      return { rows, dup, headTopics: head ? +head[1] : null, headQs: head ? +head[2] : null,
               sum: rows.reduce((a, r) => a + r.n, 0), empty: rows.filter(r => !r.n).map(r => r.title),
               overCounted: rows.filter(r => r.lvls > r.n).map(r => r.title) };
    });
    if (f.dup.length) note('FILING', `${label}: the same topic is listed twice: ${f.dup.join(', ')}`);
    if (f.empty.length) note('FILING', `${label}: topic with no questions listed: ${f.empty.join(', ')}`);
    if (f.overCounted.length) note('FILING', `${label}: level counts exceed the topic total: ${f.overCounted.join(', ')}`);
    if (f.headTopics != null && f.headTopics !== f.rows.length) note('FILING', `${label}: header says ${f.headTopics} topics, ${f.rows.length} rows shown`);
    if (f.headQs != null && f.headQs !== f.sum) note('FILING', `${label}: header says ${f.headQs} Qs, rows add to ${f.sum}`);
    filedTotal += f.sum;
  }
  const authored = await page.evaluate(() => {
    const b = (window.GMAT_SETS || []).slice();
    return b.filter(s => !s.generated).reduce((a, s) => a + s.questions.length, 0);
  });
  // Filing drops second copies of a question that appears in two source
  // documents, so a small shortfall is correct; a surplus never is.
  if (filedTotal > authored) note('FILING', `${filedTotal} questions filed into topics but only ${authored} authored`);
  if (filedTotal < authored - 25) note('FILING', `only ${filedTotal} of ${authored} authored questions reachable through topics`);

  /* ---- flashcards, concepts, generator, review queue, session ---- */
  const surfaces = [
    ['flash deck', 0, 'cards', '[data-flashdeck]', 'flash'],
    ['concept reader', 0, 'concepts', '[data-openconcept]', 'concept'],
  ];
  for (const [name, tabIdx, pane, opener, overlayId] of surfaces) {
    step = name;
    await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), tabIdx);
    await wait(280);
    await page.evaluate(x => document.querySelector(`[data-subtab="${x}"]`)?.click(), pane);
    await wait(280);
    const ok = await page.evaluate(s => { const b = document.querySelector(s); if (!b) return false; b.click(); return true; }, opener);
    if (!ok) { note('MISSING', 'nothing to open on ' + name); continue; }
    await wait(400);
    const open = await page.evaluate(id => { const e = document.getElementById(id); return !!e && !e.hidden; }, overlayId);
    if (!open) note('MISSING', name + ' did not open');
    await scan(name);
    // Click through its controls.
    const ctrls = await page.evaluate(id => {
      const e = document.getElementById(id); if (!e) return [];
      return [...e.querySelectorAll('button')].map((b, k) => k).slice(0, 14);
    }, overlayId);
    for (const k of ctrls) {
      await page.evaluate(([id, idx]) => {
        const e = document.getElementById(id); if (!e) return;
        const b = [...e.querySelectorAll('button')][idx]; if (b) b.click();
      }, [overlayId, k]);
      await wait(110);
      await scan(name + ' :: control ' + k);
    }
    await closeOverlays();
  }

  console.log('\n=== DEEP CRAWL PROBLEMS (' + problems.length + ') ===');
  console.log(problems.length ? problems.map(p => '  ' + p).join('\n') : '  none');
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
