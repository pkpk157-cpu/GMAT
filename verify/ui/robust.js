/* Resilience checks: corrupt state, backup/restore, double-logging, timer
   leaks, and generator behaviour. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(require('path').join(__dirname, '..', '..', 'node_modules', 'playwright-core'));
const ROOT = require('path').join(__dirname, '..', '..');
const KEY = 'gmat_tracker_v2';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(fs.readFileSync(f));
});

const problems = [];
let step = '';
const note = (k, m) => problems.push(`[${k}] ${step}: ${m}`);

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const url = `http://127.0.0.1:${port}/index.html`;

  /* --- 1. Corrupt / hostile localStorage must not white-screen the app --- */
  const corruptions = {
    'malformed JSON': '{not json',
    'null': 'null',
    'array instead of object': '[1,2,3]',
    'wrong types': JSON.stringify({ name: 42, counts: 'nope', runs: [], daily: null, targets: 'x', collapsed: 7, genSets: {}, subtab: 'str' }),
    'missing everything': '{}',
    'v1 schema': JSON.stringify({ name: 'Old', examDate: '2026-01-01', daily: { '2025-01-01': 5 } }),
    'run pointing at a deleted set': JSON.stringify({ name: 'X', runs: { 'no-such-set': { ans: { 1: 'A' }, submitted: true, score: 1, total: 1 } } }),
    'genSet with no questions': JSON.stringify({ name: 'X', genSets: [{ id: 'gen-broken', section: 'quant', title: 'Broken', questions: [] }] }),
    'subtab set to a bogus pane': JSON.stringify({ name: 'X', subtab: { quant: 'does-not-exist' } }),
  };

  for (const [label, raw] of Object.entries(corruptions)) {
    step = `corrupt state: ${label}`;
    const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
    const errs = [];
    page.on('pageerror', e => errs.push(e.message));
    page.on('console', m => { if (m.type() === 'error' && !/favicon|sw\.js|Failed to load resource/i.test(m.text())) errs.push(m.text()); });
    await page.goto(url);
    await page.evaluate(([k, v]) => localStorage.setItem(k, v), [KEY, raw]);
    await page.reload();
    await page.waitForTimeout(900);
    const alive = await page.evaluate(() => {
      const v = document.getElementById('view');
      return { rendered: !!v && v.textContent.trim().length > 30, nav: document.querySelectorAll('#botnav .bn').length };
    });
    if (!alive.rendered) note('WHITE-SCREEN', 'view did not render');
    if (alive.nav !== 5) note('BROKEN', `bottom nav has ${alive.nav} tabs`);
    // Tabs must still work.
    for (const i of [0, 2, 4]) {
      await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k]?.click(), i);
      await page.waitForTimeout(200);
    }
    if (errs.length) note('ERROR', errs.slice(0, 2).join(' | '));
    await page.close();
  }

  /* --- 2. Backup / restore round trip --- */
  step = 'backup / restore round trip';
  {
    const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
    const errs = [];
    page.on('dialog', d => d.accept());
    page.on('pageerror', e => errs.push(e.message));
    await page.goto(url);
    await page.waitForTimeout(800);
    await page.evaluate(() => {
      const nm = document.querySelector('#onboard input[type="text"]');
      if (nm) { nm.value = 'Restore Test'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
      const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
      if (go) go.click();
    });
    await page.waitForTimeout(400);
    // Log some progress, then capture what a backup would contain.
    await page.evaluate(() => localStorage.setItem('gmat_tracker_v2',
      JSON.stringify(Object.assign(JSON.parse(localStorage.getItem('gmat_tracker_v2')), { daily: { '2026-08-01': 9 } }))));
    const snapshot = await page.evaluate(() => localStorage.getItem('gmat_tracker_v2'));
    // Wipe, then restore through the app's own import path.
    await page.evaluate(() => localStorage.clear());
    await page.reload(); await page.waitForTimeout(800);
    const restored = await page.evaluate(async (snap) => {
      const input = document.getElementById('restore-input');
      if (!input) return 'no restore input';
      const dt = new DataTransfer();
      dt.items.add(new File([snap], 'backup.json', { type: 'application/json' }));
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise(r => setTimeout(r, 700));
      const s = JSON.parse(localStorage.getItem('gmat_tracker_v2') || '{}');
      return s.name === 'Restore Test' && (s.daily || {})['2026-08-01'] === 9 ? 'ok' : 'mismatch: ' + JSON.stringify(s).slice(0, 120);
    }, snapshot);
    if (restored !== 'ok') note('BROKEN', 'restore round trip -> ' + restored);
    if (errs.length) note('ERROR', errs.join(' | '));
    await page.close();
  }

  /* --- 3. Submitting a set must log each question exactly once --- */
  step = 'double-logging on submit';
  {
    const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
    const errs = [];
    page.on('dialog', d => d.accept());
    page.on('pageerror', e => errs.push(e.message));
    await page.goto(url); await page.waitForTimeout(800);
    await page.evaluate(() => {
      const nm = document.querySelector('#onboard input[type="text"]');
      if (nm) { nm.value = 'Log Test'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
      const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
      if (go) go.click();
    });
    await page.waitForTimeout(400);
    const total0 = await page.evaluate(() => Object.values(JSON.parse(localStorage.getItem('gmat_tracker_v2')).daily || {}).reduce((a, b) => a + b, 0));
    // Smallest CR topic, test mode, answer all, submit, then submit again via retake+submit.
    await page.evaluate(() => document.querySelectorAll('#botnav .bn')[4].click());
    await page.waitForTimeout(300);
    await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
    await page.waitForTimeout(300);
    const setId = await page.evaluate(() => {
      const rows = [...document.querySelectorAll('#view .setrow')]
        .map(r => ({ btn: r.querySelector('[data-runset]'), n: parseInt(r.querySelector('.sm span')?.textContent || '999', 10) || 999 }))
        .filter(x => x.btn).sort((a, b) => a.n - b.n);
      rows[0].btn.click();
      return rows[0].btn.getAttribute('data-runset');
    });
    await page.waitForTimeout(400);
    await page.evaluate(() => document.querySelector('#runner [data-mode="test"]')?.click());
    await page.waitForTimeout(300);
    for (let i = 0; i < 60; i++) {
      const picked = await page.evaluate(() => { const b = document.querySelector('#runner [data-pick="A"]'); if (!b) return false; b.click(); return true; });
      if (!picked) break;
      await page.waitForTimeout(120);
      await page.evaluate(() => document.querySelector('#runner [data-confirm]')?.click());
      await page.waitForTimeout(120);
      const nx = await page.evaluate(() => { const b = document.querySelector('#runner [data-next]'); if (!b) return false; b.click(); return true; });
      if (!nx) break;
      await page.waitForTimeout(120);
    }
    const answered = await page.evaluate(id => Object.keys(JSON.parse(localStorage.getItem('gmat_tracker_v2')).runs[id].ans).length, setId);

    await page.evaluate(() => document.querySelector('#runner [data-finish]')?.click());
    await page.waitForTimeout(600);
    const total1 = await page.evaluate(() => Object.values(JSON.parse(localStorage.getItem('gmat_tracker_v2')).daily || {}).reduce((a, b) => a + b, 0));
    if (total1 - total0 !== answered) note('COUNT', `${answered} answered but ${total1 - total0} logged`);
    // Re-render the results a few times: the count must not move.
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => document.querySelector('#runner [data-finish]')?.click());
      await page.waitForTimeout(200);
    }
    const total2 = await page.evaluate(() => Object.values(JSON.parse(localStorage.getItem('gmat_tracker_v2')).daily || {}).reduce((a, b) => a + b, 0));
    if (total2 !== total1) note('COUNT', `re-submitting logged another ${total2 - total1} questions`);
    if (errs.length) note('ERROR', errs.join(' | '));
    await page.close();
  }

  /* --- 4. Timers must not keep running after their overlay closes --- */
  step = 'timer leaks';
  {
    const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
    await page.addInitScript(() => {
      window.__timers = new Set();
      const si = window.setInterval, ci = window.clearInterval;
      window.setInterval = function (...a) { const id = si.apply(this, a); window.__timers.add(id); return id; };
      window.clearInterval = function (id) { window.__timers.delete(id); return ci.call(this, id); };
    });
    await page.goto(url); await page.waitForTimeout(800);
    await page.evaluate(() => {
      const nm = document.querySelector('#onboard input[type="text"]');
      if (nm) { nm.value = 'Timer Test'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
      const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
      if (go) go.click();
    });
    await page.waitForTimeout(400);
    const base = await page.evaluate(() => window.__timers.size);
    // Start and close the focus timer three times.
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => document.querySelectorAll('#botnav .bn')[2].click());
      await page.waitForTimeout(250);
      await page.evaluate(() => document.querySelector('[data-focus-open]')?.click());
      await page.waitForTimeout(300);
      await page.evaluate(() => document.querySelector('#focus [data-fostart]')?.click());
      await page.waitForTimeout(400);
      await page.evaluate(() => { const c = document.querySelector('#focus .pf-close'); if (c) c.click(); else { const e = document.getElementById('focus'); if (e) e.hidden = true; } });
      await page.waitForTimeout(300);
    }
    const after = await page.evaluate(() => window.__timers.size);
    if (after - base > 1) note('LEAK', `${after - base} intervals still live after opening/closing the focus timer 3x`);
    await page.close();
  }

  console.log('\n=== ROBUSTNESS PROBLEMS (' + problems.length + ') ===');
  problems.forEach(p => console.log('  ' + p));
  if (!problems.length) console.log('  none');

  await browser.close(); server.close();
})();
