/* Full-app smoke test. Walks every major surface, capturing page errors,
   console errors and unhandled rejections, and reports which step produced
   each one. Any step that throws is recorded and the walk continues. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(require('path').join(__dirname, '..', '..', 'node_modules', 'playwright-core'));

const ROOT = require('path').join(__dirname, '..', '..');
const OUT = require('os').tmpdir();
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };

const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0];
  if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' });
  res.end(fs.readFileSync(f));
});

let step = '(boot)';
const problems = [];
const skipped = [];
const note = (kind, msg) => problems.push(`[${kind}] during "${step}": ${msg}`);

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });

  page.on('pageerror', e => note('PAGEERROR', e.message));
  page.on('console', m => {
    if (m.type() !== 'error') return;
    const t = m.text();
    // The service worker and favicon are not served in this harness.
    if (/favicon|sw\.js|ServiceWorker|Failed to load resource/i.test(t)) return;
    note('CONSOLE', t);
  });

  const P = page;
  const wait = ms => P.waitForTimeout(ms);
  const $ = sel => P.evaluate(s => !!document.querySelector(s), sel);
  const click = async (sel, opts) => {
    const ok = await P.evaluate(s => {
      const el = document.querySelector(s);
      if (!el) return false;
      el.scrollIntoView({ block: 'center' }); el.click(); return true;
    }, sel);
    if (!ok) { if (opts && opts.optional) skipped.push(step + ' :: ' + sel); else note('MISSING', 'selector not found: ' + sel); }
    await wait((opts && opts.wait) || 260);
    return ok;
  };
  const text = sel => P.evaluate(s => document.querySelector(s)?.textContent?.trim() || null, sel);
  const count = sel => P.evaluate(s => document.querySelectorAll(s).length, sel);
  const visible = id => P.evaluate(i => { const el = document.getElementById(i); return !!el && !el.hidden; }, id);

  const run = async (name, fn) => { step = name; try { await fn(); } catch (e) { note('THREW', e.message); } };

  await P.goto(`http://127.0.0.1:${port}/index.html`);
  await wait(1000);

  await run('onboarding', async () => {
    await P.evaluate(() => {
      const nm = document.querySelector('#onboard input[type="text"]');
      if (nm) { nm.value = 'Pranav'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
      const dt = document.querySelector('#onboard input[type="date"]');
      if (dt) { dt.value = '2026-11-15'; dt.dispatchEvent(new Event('input', { bubbles: true })); }
      const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
      if (go) go.click();
    });
    await wait(500);
    if (await visible('onboard')) note('STUCK', 'onboarding did not close');
  });

  /* ---- tabs and panes ---- */
  const tab = async i => { await P.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), i); await wait(320); };

  for (const [i, label] of [[0, 'Quant'], [1, 'Data'], [3, 'RC'], [4, 'CR']]) {
    await run(`tab ${label}: all panes`, async () => {
      await tab(i);
      const panes = await P.evaluate(() => [...document.querySelectorAll('[data-subtab]')].map(b => b.getAttribute('data-subtab')));
      if (panes.length !== 5) note('SHAPE', `${label} has ${panes.length} panes, expected 5`);
      for (const p of panes) {
        step = `tab ${label} / pane ${p}`;
        await click(`[data-subtab="${p}"]`);
        const words = await P.evaluate(() => document.getElementById('view').textContent.trim().split(/\s+/).length);
        if (words < 20) note('EMPTY', `${label}/${p} rendered ${words} words`);
      }
    });
  }

  /* ---- practice runner, practice mode ---- */
  await run('runner: practice mode full pass', async () => {
    await tab(4);
    await click('[data-subtab="practice"]');
    await click('[data-runset="cr-conditional"]');       // 3 questions — quick full pass
    if (!(await visible('runner'))) throw new Error('runner did not open');
    await click('#runner [data-mode="practice"]');
    // hint
    await click('#runner .hint-box summary', { optional: true });
    // eliminate then restore
    await click('#runner [data-elim="A"]', { optional: true });
    await click('#runner [data-elim="A"]', { optional: true });
    for (let q = 0; q < 3; q++) {
      step = `runner practice Q${q + 1}`;
      const picked = await click('#runner [data-pick="B"]', { optional: true });
      if (!picked) await click('#runner [data-pick="A"]', { optional: true });
      await click('#runner [data-confirm]');
      if (!(await $('#runner .expl'))) note('MISSING', 'no explanation after confirm');
      await click('#runner [data-flag]', { optional: true });
      const nx = await click('#runner [data-next]', { optional: true });
      if (!nx) { await click('#runner [data-finish]', { optional: true }); break; }
    }
    await wait(400);
  });

  await run('runner: results screen', async () => {
    if (!(await $('#runner [data-retake]')) && !(await $('#runner .rn-results'))) {
      const fin = await click('#runner [data-finish]', { optional: true });
      if (fin) await wait(400);
    }
    const t = await text('#runner');
    if (t && !/score|correct|result|%/i.test(t)) note('SHAPE', 'results screen has no score text');
  });

  await run('runner: reset question and set', async () => {
    await click('#runner [data-resetq]', { optional: true });
    await click('#runner [data-retake]', { optional: true });
    await click('#runner [data-close-runner]', { optional: true });
    await P.evaluate(() => { const r = document.getElementById('runner'); if (r && !r.hidden) { r.hidden = true; document.body.style.overflow = ''; } });
    await wait(250);
  });

  /* ---- test mode + jumper ---- */
  await run('runner: test mode + jumper', async () => {
    await tab(4);
    await click('[data-runset="cr-flaw"]');
    await click('#runner [data-mode="test"]');
    await click('#runner [data-pick="A"]', { optional: true });
    await click('#runner [data-confirm]', { optional: true });
    await click('#runner [data-openjump]');
    if (!(await visible('jumper'))) note('MISSING', 'jumper did not open');
    await click('#jumper [data-levelfilter]', { optional: true });
    await click('#jumper [data-flagfilter]', { optional: true });
    await click('#jumper [data-jump]', { optional: true });
    await click('#jumper [data-closejump]', { optional: true });
    await P.evaluate(() => { const j = document.getElementById('jumper'); if (j) j.hidden = true; });
    await click('#runner [data-next]', { optional: true });
    await click('#runner [data-prev]', { optional: true });
    await click('#runner [data-finish]', { optional: true, wait: 500 });
    await P.evaluate(() => { const r = document.getElementById('runner'); if (r) { r.hidden = true; document.body.style.overflow = ''; } });
    await wait(200);
  });

  /* ---- RC passage toggle ---- */
  await run('runner: RC passage toggle', async () => {
    await tab(3);
    await click('[data-subtab="practice"]');
    await click('[data-runset="rc-science-lichen"]');
    await click('#runner [data-mode="practice"]', { optional: true });
    await click('#runner [data-passtoggle]', { optional: true });
    await click('#runner [data-passtoggle]', { optional: true });
    await P.evaluate(() => { const r = document.getElementById('runner'); if (r) { r.hidden = true; document.body.style.overflow = ''; } });
    await wait(200);
  });

  /* ---- concepts ---- */
  await run('concepts reader', async () => {
    await tab(0);
    await click('[data-subtab="concepts"]');
    const opened = await click('[data-openconcept]', { optional: true });
    if (opened) {
      if (!(await visible('concept'))) note('MISSING', 'concept reader did not open');
      await click('#concept [data-cnpart]', { optional: true });
      await click('#concept [data-practicerun]', { optional: true, wait: 400 });
      await P.evaluate(() => { for (const id of ['runner', 'concept']) { const e = document.getElementById(id); if (e) e.hidden = true; } document.body.style.overflow = ''; });
    }
    await wait(200);
  });

  /* ---- flashcards ---- */
  await run('flashcards', async () => {
    await tab(0);
    await click('[data-subtab="cards"]');
    const opened = await click('[data-flashdeck]', { optional: true });
    if (!opened) { note('MISSING', 'no flash deck to open'); return; }
    if (!(await visible('flash'))) note('MISSING', 'flash overlay did not open');
    await click('#flash [data-fcflip]', { optional: true });
    await click('#flash [data-fcgrade]', { optional: true });
    await click('#flash [data-fcnext]', { optional: true });
    await click('#flash [data-fcprev]', { optional: true });
    await click('#flash [data-fcshuffle]', { optional: true });
    await click('#flash [data-fcmode]', { optional: true });
    await click('#fc-close');
    if (await visible('flash')) note('STUCK', 'flash overlay did not close');
    await P.evaluate(() => { const e = document.getElementById('flash'); if (e) e.hidden = true; document.body.style.overflow = ''; });
    await wait(200);
  });

  /* ---- generator ---- */
  await run('generator: build a set', async () => {
    await tab(0);
    await click('[data-subtab="build"]');
    const chips = await count('[data-gentopic]');
    if (!chips) { note('MISSING', 'no generator topic chips'); return; }
    await P.evaluate(() => {
      const c = [...document.querySelectorAll('[data-gentopic]')].slice(0, 2);
      c.forEach(x => x.click());
    });
    await wait(250);
    await click('[data-gencount]', { optional: true });
    await click('[data-gengo]', { wait: 900 });
    const made = await P.evaluate(() => JSON.parse(localStorage.getItem('gmat_tracker_v2') || '{}').genSets?.length || 0);
    if (!made) note('BROKEN', 'generate produced no set');
    // it should now be listed and runnable
    await click('[data-subtab="practice"]');
    const gid = await P.evaluate(() => JSON.parse(localStorage.getItem('gmat_tracker_v2') || '{}').genSets?.[0]?.id || null);
    if (gid) {
      await click(`[data-runset="${gid}"]`, { optional: true });
      await click('#runner [data-mode="practice"]', { optional: true });
      await click('#runner [data-pick="A"]', { optional: true });
      await click('#runner [data-confirm]', { optional: true });
      await P.evaluate(() => { const r = document.getElementById('runner'); if (r) { r.hidden = true; document.body.style.overflow = ''; } });
      await wait(200);
      await click('[data-subtab="build"]');
      await click(`[data-gendel="${gid}"]`, { optional: true });
    }
  });

  await run('generator: AI panel without a key', async () => {
    await tab(0);
    await click('[data-subtab="build"]');
    if (await $('[data-genai]')) note('SHAPE', 'AI generate button offered with no key saved');
    // RC/CR have no offline templates, so their Build pane must explain the AI path.
    await tab(4);
    await click('[data-subtab="build"]');
    const cue = await P.evaluate(() => /api key/i.test(document.getElementById('view').textContent));
    if (!cue) note('SHAPE', 'CR Build pane offers neither templates nor an API-key cue');
  });

  /* ---- log pane: logging, filters, sheet ---- */
  await run('log pane: mark and edit', async () => {
    await tab(0);
    await click('[data-subtab="log"]');
    await click('[data-mk]', { optional: true });
    await click('[data-collapse]', { optional: true });
    const ed = await click('[data-edit]', { optional: true });
    if (ed) {
      if (!(await visible('logsheet'))) note('MISSING', 'log sheet did not open');
      await click('#logsheet [data-sa]', { optional: true });
      await click('#logsheet [data-sc]', { optional: true });
      await click('#logsheet [data-ssave]', { optional: true });
      await P.evaluate(() => { const e = document.getElementById('logsheet'); if (e) e.hidden = true; });
    }
    await wait(200);
  });

  /* ---- adaptive session ---- */
  await run('adaptive session', async () => {
    await tab(2);
    await click('[data-session-open]');
    if (!(await visible('sess-config'))) { note('MISSING', 'session config did not open'); return; }
    await click('#sess-config [data-sectoggle]');
    await click('#sess-config [data-settoggle]', { optional: true });
    await click('#sess-config [data-count]');
    await click('#sess-config [data-time]');
    await click('#sess-config [data-sessstart]', { wait: 800 });
    if (!(await visible('session'))) { note('MISSING', 'session did not start'); return; }
    // Answer until the results screen appears (bounded so a stuck session fails loudly).
    let guard = 0;
    while (guard++ < 40) {
      if (await $('#session [data-sessclose]')) break;
      await click('#session [data-sesselim="E"]', { optional: true });
      const picked = await click('#session [data-sesspick="A"]', { optional: true });
      const nx = await click('#session [data-sessnext]', { optional: true });
      if (!picked && !nx) break;
    }
    if (guard >= 40) note('STUCK', 'session never reached its results screen');
    if (!(await $('#session [data-sessclose]'))) note('MISSING', 'session results screen never appeared');
    await click('#session [data-sessclose]', { optional: true });
    await P.evaluate(() => { for (const id of ['session', 'sess-config']) { const e = document.getElementById(id); if (e) e.hidden = true; } document.body.style.overflow = ''; });
    await wait(250);
  });

  /* ---- review queue ---- */
  await run('review queue', async () => {
    await tab(2);
    const opened = await click('[data-review-open]', { optional: true });
    if (!opened) return;           // nothing due is a valid state
    await click('#review [data-rvelim="E"]', { optional: true });
    await click('#review [data-rvpick="A"]', { optional: true });
    await click('#review [data-rvcheck]', { optional: true });
    await click('#review [data-rvmore]', { optional: true });
    await click('#review [data-rvnext]', { optional: true });
    await click('#review [data-rvclose]', { optional: true });
    await P.evaluate(() => { const e = document.getElementById('review'); if (e) e.hidden = true; document.body.style.overflow = ''; });
    await wait(200);
  });

  /* ---- focus timer ---- */
  await run('focus timer', async () => {
    await tab(2);
    await click('[data-focus-open]');
    if (!(await visible('focus'))) { note('MISSING', 'focus timer did not open'); return; }
    await click('#focus [data-fomin]', { optional: true });
    await click('#focus [data-fostart]', { optional: true, wait: 600 });
    await click('#focus [data-fostart]', { optional: true });
    await click('#focus [data-foreset]', { optional: true });
    await P.evaluate(() => { const e = document.getElementById('focus'); if (e) e.hidden = true; document.body.style.overflow = ''; });
    await wait(200);
  });

  /* ---- overall: progress toggle ---- */
  await run('overall: progress toggle', async () => {
    await tab(2);
    await click('[data-progtoggle]');
    if (!(await $('#view .stat'))) note('MISSING', 'stats did not appear when expanded');
    await click('[data-progtoggle]');
    if (await $('#view .stat')) note('SHAPE', 'stats still present when collapsed');
  });

  /* ---- profile ---- */
  await run('profile: settings', async () => {
    await click('#btn-profile');
    if (!(await visible('profile'))) { note('MISSING', 'profile did not open'); return; }
    for (const t of ['light', 'dark', 'system']) await click(`#profile [data-theme-set="${t}"]`, { optional: true });
    await click('#profile [data-tgt]', { optional: true });
    await click('#profile [data-save-details]', { optional: true });
    await click('#profile [data-rem-test]', { optional: true });
    await click('#profile [data-cal]', { optional: true });
    await click('#profile [data-backup]', { optional: true });
    await click('#profile [data-sync-link]', { optional: true, wait: 500 });
    await click('#profile [data-refresh]', { optional: true, wait: 400 });
  });

  await run('profile: close', async () => {
    await P.evaluate(() => { const e = document.getElementById('profile'); if (e) e.hidden = true; document.body.style.overflow = ''; });
    await wait(200);
  });

  await run('achievements', async () => {
    await click('#btn-achv');
    if (!(await visible('achv'))) note('MISSING', 'achievements did not open');
    await P.evaluate(() => { const e = document.getElementById('achv'); if (e) e.hidden = true; document.body.style.overflow = ''; });
    await wait(200);
  });

  /* ---- persistence ---- */
  await run('reload persistence', async () => {
    const before = await P.evaluate(() => localStorage.getItem('gmat_tracker_v2'));
    await P.reload();
    await wait(1200);
    const after = await P.evaluate(() => localStorage.getItem('gmat_tracker_v2'));
    if (!after) note('BROKEN', 'state lost on reload');
    if (await visible('onboard')) note('BROKEN', 'onboarding reappeared after reload');
    const b = JSON.parse(before || '{}'), a = JSON.parse(after || '{}');
    if (b.name !== a.name) note('BROKEN', 'name not persisted');
  });

  /* ---- narrow + wide viewports ---- */
  for (const [w, h, label] of [[320, 640, 'small phone'], [768, 1024, 'tablet'], [1280, 900, 'desktop']]) {
    await run(`layout at ${label} (${w}x${h})`, async () => {
      await P.setViewportSize({ width: w, height: h });
      for (const i of [0, 1, 2, 3, 4]) {
        await tab(i);
        const over = await P.evaluate(() => {
          const d = document.documentElement;
          return d.scrollWidth - d.clientWidth;
        });
        if (over > 2) note('OVERFLOW', `horizontal overflow of ${over}px on tab ${i}`);
      }
    });
  }
  await P.setViewportSize({ width: 430, height: 930 });

  step = '(done)';
  console.log('\n=== NOT EXERCISED (optional selector absent) ===');
  skipped.forEach(x => console.log('  ' + x));
  console.log('\n=== PROBLEMS (' + problems.length + ') ===');
  problems.forEach(p => console.log('  ' + p));
  if (!problems.length) console.log('  none');

  await browser.close();
  server.close();
})();
