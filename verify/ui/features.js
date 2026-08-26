/* Drive the new features with real answered questions and check they render. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(require('path').join(__dirname, '..', '..', 'node_modules', 'playwright-core'));
const ROOT = require('path').join(__dirname, '..', '..');
const OUT = require('os').tmpdir();
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(fs.readFileSync(f));
});
const problems = [];
(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
  page.on('dialog', d => d.accept());
  page.on('pageerror', e => problems.push('PAGEERROR ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/favicon|sw\.js|Failed to load/i.test(m.text())) problems.push('CONSOLE ' + m.text()); });
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Pranav'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const dt = document.querySelector('#onboard input[type="date"]');
    if (dt) { dt.value = '2026-11-15'; dt.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(500);

  // Answer through several topic sets so the score estimate clears its
  // threshold. Sets are picked by position on the tab rather than by id —
  // practice is filed by syllabus topic, so the ids depend on the taxonomy.
  const sets = [[4, 0], [4, 1], [0, 0], [1, 0]];
  for (const [tab, nth] of sets) {
    await page.evaluate(i => document.querySelectorAll('#botnav .bn')[i].click(), tab);
    await page.waitForTimeout(300);
    await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
    await page.waitForTimeout(300);
    const ok = await page.evaluate(k => { const b = document.querySelectorAll('#view [data-runset]')[k]; if (!b) return false; b.click(); return true; }, nth);
    if (!ok) { problems.push('no topic set at position ' + nth + ' on tab ' + tab); continue; }
    await page.waitForTimeout(400);
    await page.evaluate(() => document.querySelector('#runner [data-mode="practice"]')?.click());
    await page.waitForTimeout(300);
    for (let i = 0; i < 30; i++) {
      // Alternate right and wrong so both branches of the quadrant fill.
      const picked = await page.evaluate(k => {
        const btns = [...document.querySelectorAll('#runner [data-pick]')];
        if (!btns.length) return false;
        btns[k % 2 === 0 ? 0 : Math.min(2, btns.length - 1)].click(); return true;
      }, i);
      if (!picked) break;
      await page.evaluate(() => document.querySelector('#runner [data-confirm]')?.click());
      await page.waitForTimeout(120);
      // Tag a miss reason when the reason chips appear.
      await page.evaluate(k => {
        const chips = [...document.querySelectorAll('#runner [data-miss]')];
        if (chips.length) chips[k % chips.length].click();
      }, i);
      await page.waitForTimeout(90);
      await page.evaluate(() => document.querySelector('#runner [data-flag]')?.click());
      await page.waitForTimeout(60);
      const nx = await page.evaluate(() => { const n = document.querySelector('#runner [data-next]'); if (!n) return false; n.click(); return true; });
      if (!nx) break;
      await page.waitForTimeout(120);
    }
    await page.evaluate(() => { const r = document.getElementById('runner'); if (r) { r.hidden = true; document.body.style.overflow = ''; } });
    await page.waitForTimeout(200);
  }

  // Set a target score through the profile.
  await page.evaluate(() => document.getElementById('btn-profile').click());
  await page.waitForTimeout(400);
  for (let i = 0; i < 6; i++) {
    await page.evaluate(() => document.querySelector('#profile [data-tgt="score"][data-d="10"]')?.click());
    await page.waitForTimeout(80);
  }
  const targetShown = await page.evaluate(() => document.querySelector('#profile [data-tgt="score"]')?.parentElement?.querySelector('.tgt-val')?.textContent);
  await page.evaluate(() => { const e = document.getElementById('profile'); if (e) e.hidden = true; document.body.style.overflow = ''; });
  await page.waitForTimeout(300);

  // Overall -> expand progress and inspect the new panels.
  await page.evaluate(() => document.querySelectorAll('#botnav .bn')[2].click());
  await page.waitForTimeout(400);
  await page.evaluate(() => document.querySelector('[data-progtoggle]')?.click());
  await page.waitForTimeout(500);
  const m = await page.evaluate(() => {
    const txt = document.getElementById('view').textContent;
    const grab = (h) => { const el = [...document.querySelectorAll('#view .panel h3')].find(x => x.textContent.trim() === h); return el ? el.parentElement.textContent.replace(/\s+/g, ' ').trim().slice(0, 190) : null; };
    return {
      score: grab('Score estimate'),
      quad: grab('Time vs. accuracy'),
      errlog: grab('Why you are missing them'),
      flags: grab('Flagged questions'),
      quadCells: document.querySelectorAll('#view .qd').length,
      mlogRows: document.querySelectorAll('#view .mlog-row').length,
      scoreBig: document.querySelector('#view .scorebig .sv')?.textContent || null,
    };
  });
  console.log('target score set to:', targetShown);
  console.log('score panel   :', m.score);
  console.log('  big number  :', m.scoreBig);
  console.log('quadrant      :', m.quad);
  console.log('  cells       :', m.quadCells);
  console.log('error log     :', m.errlog);
  console.log('  rows        :', m.mlogRows);
  console.log('flagged       :', m.flags);
  if (m.quadCells !== 4) problems.push('quadrant rendered ' + m.quadCells + ' cells');
  if (!m.mlogRows) problems.push('error log rendered no rows');
  if (!m.scoreBig) problems.push('score estimate produced no number');
  await page.screenshot({ path: path.join(OUT, 'features.png'), fullPage: true });

  console.log('\nproblems:', problems.length ? problems.join(' | ') : 'none');
  process.exitCode = problems.length ? 1 : 0;
  await browser.close(); server.close();
})();
