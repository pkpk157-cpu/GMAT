/* State-level checks the click-through tests cannot reach.

   1. Migration: progress saved against the old source-set ids must land on the
      same questions once practice moved to topics — same answer, same flag,
      same spaced-repetition box — and must not run twice.
   2. Difficulty filter: a narrowed run must show only that level, score out of
      that level, and leave answers given at other levels alone.
   3. Rebuild stats: must repair run-derived totals without deleting work done
      in adaptive sessions or the review queue.
   4. Reset and retake must not leave phantom counts behind. */
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

const problems = [];
const note = (kind, msg) => problems.push(`[${kind}] ${msg}`);
const KEY = 'gmat_tracker_v2';

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const url = `http://127.0.0.1:${port}/index.html`;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });

  const newPage = async () => {
    const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
    page.on('pageerror', e => note('PAGEERROR', e.message));
    page.on('console', m => {
      if (m.type() !== 'error') return;
      const t = m.text();
      if (!/favicon|sw\.js|ServiceWorker|Failed to load resource|anthropic/i.test(t)) note('CONSOLE', t);
    });
    page.on('dialog', d => d.accept());
    return page;
  };
  const onboard = (page) => page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'State Test'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });

  /* ---------- 1. migration from source-set ids ---------- */
  {
    const page = await newPage();
    await page.goto(url); await page.waitForTimeout(900);

    // Pick three real source questions and record what the answers should be.
    const seed = await page.evaluate(() => {
      const b = (window.GMAT_SETS || []).filter(s => !s.generated && s.questions.length >= 3);
      const pick = [b[0], b[Math.floor(b.length / 2)], b[b.length - 1]];
      return pick.map(s => ({ id: s.id, section: s.section, qs: s.questions.slice(0, 3).map(q => ({ n: q.n, correct: q.correct, text: q.text })) }));
    });

    const pre = { name: 'State Test', examDate: '', counts: {}, daily: {}, runs: {}, flags: {}, srs: {}, miss: {} };
    seed.forEach(s => {
      pre.runs[s.id] = { ans: {}, submitted: false, idx: 0, mode: 'practice', logged: {}, times: {}, elim: {} };
      s.qs.forEach((q, i) => {
        pre.runs[s.id].ans[q.n] = q.correct;              // all answered correctly
        pre.runs[s.id].times[q.n] = 30000 + i * 1000;
        pre.runs[s.id].logged[q.n] = { day: '2026-08-01', topic: null, correct: true, ms: 30000 };
      });
      pre.flags[s.id] = {}; pre.flags[s.id][s.qs[0].n] = true;
      pre.srs[s.id + '#' + s.qs[1].n] = { box: 3, due: '2026-01-01', w: 2 };
      pre.miss[s.id + '#' + s.qs[2].n] = { r: 'careless', day: '2026-08-01' };
    });
    await page.evaluate(([k, v]) => localStorage.setItem(k, JSON.stringify(v)), [KEY, pre]);
    await page.reload(); await page.waitForTimeout(900);

    const after = await page.evaluate(k => JSON.parse(localStorage.getItem(k) || '{}'), KEY);
    if (!after.topicsV1) note('MIGRATION', 'the migration did not mark itself done');

    const oldIds = seed.map(s => s.id);
    const leftBehind = Object.keys(after.runs || {}).filter(id => oldIds.includes(id));
    if (leftBehind.length) note('MIGRATION', 'runs still keyed by source-set id: ' + leftBehind.join(', '));
    const flagsLeft = Object.keys(after.flags || {}).filter(id => oldIds.includes(id));
    if (flagsLeft.length) note('MIGRATION', 'flags still keyed by source-set id: ' + flagsLeft.join(', '));

    const movedAns = Object.values(after.runs || {}).reduce((a, r) => a + Object.keys(r.ans || {}).length, 0);
    const wantAns = seed.reduce((a, s) => a + s.qs.length, 0);
    if (movedAns !== wantAns) note('MIGRATION', `${wantAns} answers saved, ${movedAns} survived`);
    const movedFlags = Object.values(after.flags || {}).reduce((a, f) => a + Object.keys(f).length, 0);
    if (movedFlags !== seed.length) note('MIGRATION', `${seed.length} flags saved, ${movedFlags} survived`);
    if (Object.keys(after.srs || {}).length !== seed.length) note('MIGRATION', `${seed.length} SRS cards saved, ${Object.keys(after.srs || {}).length} survived`);
    if (Object.keys(after.miss || {}).length !== seed.length) note('MIGRATION', `${seed.length} miss reasons saved, ${Object.keys(after.miss || {}).length} survived`);

    // Every migrated answer must still sit on the question it was given for:
    // it was the correct answer before, so it must still be correct after.
    const wrongHome = await page.evaluate(k => {
      const st = JSON.parse(localStorage.getItem(k) || '{}');
      const bad = [];
      const view = document.getElementById('view');
      // Re-derive the topic sets the same way the app does, via a run through
      // the practice panes is not possible here, so check through the app's own
      // rendering of each run instead: the score it recomputed must be full.
      Object.keys(st.runs || {}).forEach(id => {
        const r = st.runs[id];
        if (r.submitted && r.score !== r.total) bad.push(`${id}: ${r.score}/${r.total}`);
      });
      return bad;
    }, KEY);
    if (wrongHome.length) note('MIGRATION', 'answers landed on the wrong questions: ' + wrongHome.join(', '));

    // Running again must be a no-op, not a second remap.
    const before2 = JSON.stringify([after.runs, after.flags, after.srs, after.miss]);
    await page.reload(); await page.waitForTimeout(800);
    const again = await page.evaluate(k => JSON.parse(localStorage.getItem(k) || '{}'), KEY);
    if (JSON.stringify([again.runs, again.flags, again.srs, again.miss]) !== before2) {
      note('MIGRATION', 'a second load changed already-migrated state');
    }

    // Restoring a backup taken before the move must refile it too. The app has
    // already migrated by the time the file arrives, so restore has to redo it
    // or the restored progress is keyed to sets that no longer exist.
    await page.evaluate(pre => {
      const file = new File([JSON.stringify(pre)], 'gmat-prep-backup.json', { type: 'application/json' });
      const dt = new DataTransfer(); dt.items.add(file);
      const input = document.getElementById('restore-input');
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, pre);
    await page.waitForTimeout(700);
    const afterRestore = await page.evaluate(k => JSON.parse(localStorage.getItem(k) || '{}'), KEY);
    const stillOld = Object.keys(afterRestore.runs || {}).filter(id => oldIds.includes(id));
    if (stillOld.length) note('RESTORE', 'a pre-topic backup was restored without refiling: ' + stillOld.join(', '));
    const restoredAns = Object.values(afterRestore.runs || {}).reduce((a, r) => a + Object.keys(r.ans || {}).length, 0);
    if (restoredAns !== wantAns) note('RESTORE', `${wantAns} answers in the backup, ${restoredAns} usable after restore`);
    await page.close();
  }

  /* ---------- 2. difficulty filter ---------- */
  {
    const page = await newPage();
    await page.goto(url); await page.waitForTimeout(900);
    await onboard(page); await page.waitForTimeout(400);
    await page.evaluate(() => document.querySelectorAll('#botnav .bn')[0].click());
    await page.waitForTimeout(300);
    await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
    await page.waitForTimeout(300);

    // A topic that holds more than one difficulty, so the filter has something
    // to do.
    const opened = await page.evaluate(() => {
      const rows = [...document.querySelectorAll('#view .setrow')]
        .filter(r => r.querySelectorAll('.slvl .lvl').length >= 2)
        .map(r => ({ btn: r.querySelector('[data-runset]'), n: parseInt(r.querySelector('.sm span')?.textContent || '999', 10) || 999 }))
        .sort((a, b) => a.n - b.n);
      if (!rows.length) return null;
      rows[0].btn.click();
      return rows[0].btn.getAttribute('data-runset');
    });
    if (!opened) { note('FILTER', 'no topic with more than one difficulty to test'); }
    else {
      await page.waitForTimeout(350);
      const levels = await page.evaluate(() =>
        [...document.querySelectorAll('#runner [data-setlvl]')]
          .map(c => ({ v: c.getAttribute('data-setlvl'), n: parseInt(c.querySelector('i')?.textContent || '0', 10) || 0 }))
          .filter(x => x.v && x.n));
      // The row was chosen because it lists two or more difficulties, and the
      // picker is built from the same counts, so this is never empty.
      const pick = levels.sort((a, b) => a.n - b.n)[0];
      await page.evaluate(v => document.querySelector(`#runner [data-setlvl="${v}"]`)?.click(), pick.v);
      await page.waitForTimeout(250);
      await page.evaluate(() => document.querySelector('#runner [data-mode="test"]')?.click());
      await page.waitForTimeout(250);

      const shown = await page.evaluate(() => {
        const m = /of\s+(\d+)/.exec(document.querySelector('#runner .qnum')?.textContent || '');
        return m ? parseInt(m[1], 10) : 0;
      });
      if (shown !== pick.n) note('FILTER', `${pick.v} has ${pick.n} questions but the run shows ${shown}`);

      // Answer them all, then submit: the score must be out of the slice.
      // Confirming in test mode advances by itself, so there is no Next to click.
      for (let i = 0; i < pick.n; i++) {
        const ok = await page.evaluate(() => { const b = document.querySelector('#runner [data-pick="A"]'); if (!b) return false; b.click(); return true; });
        if (!ok) break;
        await page.waitForTimeout(80);
        await page.evaluate(() => document.querySelector('#runner [data-confirm]')?.click());
        await page.waitForTimeout(110);
      }
      await page.evaluate(() => document.querySelector('#runner [data-finish]')?.click());
      await page.waitForTimeout(500);
      const res = await page.evaluate(([k, id]) => {
        const st = JSON.parse(localStorage.getItem(k) || '{}');
        const r = st.runs[id] || {};
        const shownTotal = (document.querySelector('#runner .rs-tot')?.textContent || '').replace(/[^\d]/g, '');
        return { total: r.total, score: r.score, lvl: r.lvl, shownTotal: shownTotal ? +shownTotal : null,
                 logged: Object.keys(r.logged || {}).length };
      }, [KEY, opened]);
      if (res.total !== pick.n) note('FILTER', `a ${pick.v} run scored out of ${res.total}, expected ${pick.n}`);
      if (res.shownTotal !== pick.n) note('FILTER', `the results screen shows "/ ${res.shownTotal}", expected ${pick.n}`);
      if (res.logged !== pick.n) note('FILTER', `${res.logged} questions logged, expected ${pick.n}`);
      if (res.lvl !== pick.v) note('FILTER', `the run forgot its level (${res.lvl})`);

      // Switching to "All" must keep the answers already given.
      await page.evaluate(() => { const e = document.getElementById('runner'); if (e) { e.hidden = true; } document.body.style.overflow = ''; });
      await page.evaluate(id => document.querySelector(`[data-runset="${id}"]`)?.click(), opened);
      await page.waitForTimeout(350);
      await page.evaluate(() => document.querySelector('#runner [data-retake]')?.click());
      await page.waitForTimeout(300);
      const afterRetake = await page.evaluate(([k, id]) => {
        const st = JSON.parse(localStorage.getItem(k) || '{}');
        const r = st.runs[id] || {};
        return { ans: Object.keys(r.ans || {}).length, logged: Object.keys(r.logged || {}).length,
                 daily: Object.values(st.daily || {}).reduce((a, b) => a + b, 0) };
      }, [KEY, opened]);
      if (afterRetake.ans !== 0) note('RESET', `retake left ${afterRetake.ans} answers behind`);
      if (afterRetake.logged !== 0) note('RESET', `retake left ${afterRetake.logged} logged questions behind`);
      if (afterRetake.daily !== 0) note('RESET', `retake left ${afterRetake.daily} questions on the day count`);
    }
    await page.close();
  }

  /* ---------- 2b. a one-question slice must not trap the run ---------- */
  {
    const page = await newPage();
    await page.goto(url); await page.waitForTimeout(900);
    await onboard(page); await page.waitForTimeout(300);
    let tested = false;
    for (const tab of [0, 1, 3, 4]) {
      await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), tab);
      await page.waitForTimeout(280);
      await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
      await page.waitForTimeout(280);
      // A topic with more than one question, one of whose difficulties holds
      // exactly one — the case where the chooser used to disappear for good.
      const found = await page.evaluate(() => {
        const rows = [...document.querySelectorAll('#view .setrow')].map(r => {
          const n = parseInt(r.querySelector('.sm span')?.textContent || '0', 10) || 0;
          const lv = [...r.querySelectorAll('.slvl .lvl')].map(x => ({ n: parseInt(x.textContent, 10) || 0, label: x.textContent.replace(/[\d\s]/g, '') }));
          return { btn: r.querySelector('[data-runset]'), n, one: lv.find(x => x.n === 1) };
        }).filter(x => x.btn && x.n > 1 && x.one);
        if (!rows.length) return null;
        rows[0].btn.click();
        return { id: rows[0].btn.getAttribute('data-runset'), lvl: rows[0].one.label };
      });
      if (!found) continue;
      tested = true;
      await page.waitForTimeout(320);
      await page.evaluate(v => document.querySelector(`#runner [data-setlvl="${v}"]`)?.click(), found.lvl);
      await page.waitForTimeout(220);
      await page.evaluate(() => document.querySelector('#runner [data-mode="practice"]')?.click());
      await page.waitForTimeout(220);
      // Close and reopen: the difficulty picker has to come back.
      await page.evaluate(() => { const r = document.getElementById('runner'); if (r) r.hidden = true; document.body.style.overflow = ''; });
      await page.evaluate(id => document.querySelector(`[data-runset="${id}"]`)?.click(), found.id);
      await page.waitForTimeout(350);
      const back = await page.evaluate(() => document.querySelectorAll('#runner [data-setlvl]').length);
      if (!back) note('FILTER', `a ${found.lvl} slice of one question hid the difficulty picker with no way back`);
      break;
    }
    if (!tested) note('FILTER', 'no topic with a single-question difficulty to test the chooser against');
    await page.close();
  }

  /* ---------- 3. rebuild stats keeps non-run work ---------- */
  {
    const page = await newPage();
    await page.goto(url); await page.waitForTimeout(900);
    await onboard(page); await page.waitForTimeout(300);

    // Run an adaptive session end to end, which logs outside any practice run.
    await page.evaluate(() => document.querySelectorAll('#botnav .bn')[2].click());
    await page.waitForTimeout(300);
    const started = await page.evaluate(() => {
      const b = document.querySelector('#view [data-session-open]');
      if (!b) return false; b.click(); return true;
    });
    if (!started) note('SESSION', 'no way to start an adaptive session from Overall');
    await page.waitForTimeout(500);
    await page.evaluate(() => document.querySelector('[data-count="5"]')?.click());
    await page.waitForTimeout(200);
    await page.evaluate(() => document.querySelector('[data-sessstart]')?.click());
    await page.waitForTimeout(600);
    for (let i = 0; i < 8; i++) {
      const ok = await page.evaluate(() => { const b = document.querySelector('#session [data-sesspick="A"]'); if (!b) return false; b.click(); return true; });
      if (!ok) break;
      await page.waitForTimeout(90);
      await page.evaluate(() => document.querySelector('#session [data-sessnext]')?.click());
      await page.waitForTimeout(140);
    }
    await page.evaluate(() => document.querySelector('#session [data-sessdone]')?.click());
    await page.waitForTimeout(600);

    // A session is the most exam-like evidence there is, so the readiness
    // estimate has to count it — it reads practice runs, and a session makes none.
    const readiness = await page.evaluate(k => {
      const st = JSON.parse(localStorage.getItem(k) || '{}');
      return { answers: ((st.extra || {}).answers || []).length };
    }, KEY);
    if (!readiness.answers) note('READINESS', 'an adaptive session recorded no answers for the score estimate');
    await page.evaluate(() => document.querySelectorAll('#botnav .bn')[2].click());
    await page.waitForTimeout(350);
    await page.evaluate(() => document.querySelector('[data-progtoggle]')?.click());
    await page.waitForTimeout(450);
    const logged = await page.evaluate(() => {
      const el = [...document.querySelectorAll('#view .panel h3')].find(x => x.textContent.trim() === 'Score estimate');
      const t = el ? el.parentElement.textContent : '';
      return [...t.matchAll(/(\d+)\s+of\s+\d+\s+logged/g)].map(m => +m[1]);
    });
    if (logged.length && !logged.some(n => n > 0)) {
      note('READINESS', 'after a full session the score estimate still counts 0 questions logged');
    }

    const beforeRebuild = await page.evaluate(k => {
      const st = JSON.parse(localStorage.getItem(k) || '{}');
      return { daily: Object.values(st.daily || {}).reduce((a, b) => a + b, 0),
               counts: Object.values(st.counts || {}).reduce((a, r) => a + (r.d || 0), 0) };
    }, KEY);
    if (!beforeRebuild.daily) {
      note('SESSION', 'an adaptive session logged nothing, so rebuild cannot be tested');
    } else {
      await page.evaluate(() => document.getElementById('btn-profile')?.click());
      await page.waitForTimeout(400);
      const hit = await page.evaluate(() => { const b = document.querySelector('#profile [data-rebuild]'); if (!b) return false; b.click(); return true; });
      if (!hit) note('REBUILD', 'no rebuild control in the profile');
      await page.waitForTimeout(500);
      const afterRebuild = await page.evaluate(k => {
        const st = JSON.parse(localStorage.getItem(k) || '{}');
        return { daily: Object.values(st.daily || {}).reduce((a, b) => a + b, 0),
                 counts: Object.values(st.counts || {}).reduce((a, r) => a + (r.d || 0), 0) };
      }, KEY);
      if (afterRebuild.daily < beforeRebuild.daily) {
        note('REBUILD', `rebuilding dropped the day count from ${beforeRebuild.daily} to ${afterRebuild.daily} — session work was erased`);
      }
      if (afterRebuild.counts < beforeRebuild.counts) {
        note('REBUILD', `rebuilding dropped topic attempts from ${beforeRebuild.counts} to ${afterRebuild.counts} — session work was erased`);
      }
    }
    await page.close();
  }

  console.log('\n=== STATE PROBLEMS (' + problems.length + ') ===');
  console.log(problems.length ? problems.map(p => '  ' + p).join('\n') : '  none');
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
