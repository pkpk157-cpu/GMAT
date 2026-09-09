/* A concept section is read when its estimated time has been spent on it —
   not when it is opened.

   Opening a section used to mark it read on the spot, so the guide progress
   rings could be filled by tapping through a guide in ten seconds. Now a clock
   runs while the section is on screen and the tab is visible, and the tick
   appears only once the section's "N min" estimate has actually elapsed. This
   drives the real reader and checks:

     - opening and immediately closing a section marks nothing
     - the badge counts down from the section's estimate
     - once the estimate has elapsed (the page clock is advanced), the section
       is read, and stays read after a reload
     - time with the tab hidden does not count

   Run: node verify/ui/read-timer.js */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(path.join(__dirname, '..', '..', 'node_modules', 'playwright-core'));

const ROOT = path.join(__dirname, '..', '..');
const KEY = 'gmat_tracker_v2';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(fs.readFileSync(f));
});

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 390, height: 930 } });
  const problems = [];
  page.on('pageerror', e => problems.push('PAGEERROR ' + e.message));

  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Timer Check'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(500);

  const readState = () => page.evaluate(k => {
    const st = JSON.parse(localStorage.getItem(k) || '{}');
    return { read: st.read || {}, prog: st.readProg || {}, act: (st.activity || {}) };
  }, KEY);
  const openFirstSection = async () => {
    await page.evaluate(() => document.querySelectorAll('#botnav .bn')[0].click());
    await page.waitForTimeout(250);
    await page.evaluate(() => document.querySelector('[data-subtab="concepts"]').click());
    await page.waitForTimeout(250);
    await page.evaluate(() => document.querySelector('[data-openconcept]').click());
    await page.waitForTimeout(250);
    await page.evaluate(() => document.querySelector('#cn-body [data-cnpart]').click());
    await page.waitForTimeout(400);
    return page.evaluate(() => ({
      title: (document.querySelector('#cn-body .cn-h1') || {}).textContent || '',
      badge: (document.getElementById('cn-readtimer') || {}).textContent || '',
      mins: parseInt((/(\d+) min/.exec(document.querySelector('#cn-body .cn-eyebrow')?.textContent || '') || [])[1] || '0', 10)
    }));
  };
  const readCount = st => Object.values(st.read).reduce((a, g) => a + Object.keys(g).length, 0);

  // 1. open and close straight away: nothing is read
  const first = await openFirstSection();
  if (!/to count as read/.test(first.badge)) problems.push(`no countdown badge on open (badge: "${first.badge}")`);
  if (!first.mins) problems.push('section shows no reading-time estimate to count down from');
  await page.evaluate(() => document.getElementById('cn-close').click());
  await page.waitForTimeout(300);
  let st = await readState();
  if (readCount(st) !== 0) problems.push(`opening and closing a section marked ${readCount(st)} section(s) read`);
  if (st.act[Object.keys(st.act)[0]]?.concept) problems.push('opening a section already counted as today\'s concept study');

  // 2. stay on it: the clock counts down at wall-clock rate
  const again = await openFirstSection();
  await page.waitForTimeout(2300);
  const badge2 = await page.evaluate(() => document.getElementById('cn-readtimer').textContent);
  const secs = b => { const m = /(\d+):(\d\d)/.exec(b); return m ? +m[1] * 60 + +m[2] : NaN; };
  const dropped = secs(again.badge) - secs(badge2);
  if (!(dropped >= 1 && dropped <= 4)) problems.push(`badge moved ${dropped}s in ~2s of reading (from "${again.badge}" to "${badge2}")`);

  // 3. hidden tab: no credit
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  const before = await page.evaluate(() => document.getElementById('cn-readtimer').textContent);
  await page.waitForTimeout(2300);
  const during = await page.evaluate(() => document.getElementById('cn-readtimer').textContent);
  if (secs(before) !== secs(during)) problems.push(`clock kept running with the tab hidden ("${before}" → "${during}")`);
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' });
    document.dispatchEvent(new Event('visibilitychange'));
  });

  // 4. run the page clock 60x faster: each one-second tick now sees a minute
  //    elapse (the most a tick may credit), so the estimate passes in as many
  //    real seconds as it has minutes. A single jump would credit one capped
  //    minute only — that cap is what stops a slept tab banking an hour.
  await page.evaluate(() => { const real = Date.now.bind(Date), start = real(); Date.now = () => start + (real() - start) * 60; });
  await page.waitForTimeout((first.mins + 4) * 1100);
  const after = await page.evaluate(() => document.getElementById('cn-readtimer').textContent);
  st = await readState();
  if (!/Read/.test(after)) problems.push(`section not marked read after its estimate elapsed (badge: "${after}")`);
  if (readCount(st) !== 1) problems.push(`expected exactly 1 section read, found ${readCount(st)}`);
  if (!Object.values(st.act).some(a => a.concept)) problems.push('a completed read did not count as today\'s concept study');

  // 5. survives a reload
  await page.evaluate(() => document.getElementById('cn-close').click());
  await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(900);
  st = await readState();
  if (readCount(st) !== 1) problems.push(`read mark lost on reload (${readCount(st)} read)`);

  console.log(`section "${first.title}" · estimate ${first.mins} min · badge on open "${first.badge}" · after estimate "${after}"`);
  console.log(`\n=== READ TIMER PROBLEMS (${problems.length}) ===`);
  console.log(problems.length ? problems.map(p => '  ' + p).join('\n') : '  none');
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
