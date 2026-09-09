/* A service-worker update must never reload the page out from under a reader.

   The app registers sw.js, the worker calls skipWaiting() on install and
   clients.claim() on activate, and the page reloads on "controllerchange". Put
   together, a deploy that lands while someone is mid-question or mid-concept
   used to reload the page instantly. Saved state survives that, but the open
   overlay does not — the concept reader's place is a variable, not state — so
   the reader was dumped back on the tab page. It looks exactly like a crash,
   and it looks random, because it depends on whether an update happened to be
   ready while you were reading.

   This drives the real controllerchange path with an overlay open and asserts
   the reload is deferred, then asserts it still happens once the overlay is
   closed — a deferred update that never arrives would be its own bug.

   Run: node verify/ui/sw-reload.js */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(path.join(__dirname, '..', '..', 'node_modules', 'playwright-core'));

const ROOT = path.join(__dirname, '..', '..');
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
  let loads = 0;
  page.on('load', () => loads++);

  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'SW Check'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(500);

  if (!(await page.evaluate(() => typeof window.__gmatPendingReload === 'function'))) {
    problems.push('the update guard did not install — controllerchange is still an unconditional reload');
    console.log(`\n=== SW RELOAD PROBLEMS (${problems.length}) ===`);
    problems.forEach(p => console.log('  ' + p));
    await browser.close(); server.close();
    process.exit(1);
  }

  // Open a concept section, the way a reader would.
  await page.evaluate(() => document.querySelectorAll('#botnav .bn')[0].click());
  await page.waitForTimeout(250);
  await page.evaluate(() => document.querySelector('[data-subtab="concepts"]').click());
  await page.waitForTimeout(250);
  await page.evaluate(() => document.querySelector('[data-openconcept]').click());
  await page.waitForTimeout(250);
  await page.evaluate(() => document.querySelector('#cn-body [data-cnpart]').click());
  await page.waitForTimeout(300);

  const reading = await page.evaluate(() => ({
    open: !document.getElementById('concept').hidden,
    where: (document.querySelector('#cn-body .cn-h1') || {}).textContent || ''
  }));
  if (!reading.open) problems.push('could not open a concept section to test against');

  const before = loads;
  // Exactly what a new worker taking over fires in the page.
  await page.evaluate(() => navigator.serviceWorker.dispatchEvent(new Event('controllerchange')));
  await page.waitForTimeout(700);

  const during = await page.evaluate(() => ({
    open: !document.getElementById('concept').hidden,
    pending: window.__gmatPendingReload(),
    where: (document.querySelector('#cn-body .cn-h1') || {}).textContent || ''
  }));
  const duringRead = loads - before;
  if (duringRead) problems.push('the page reloaded while a concept section was open');
  if (!during.open) problems.push('the concept reader closed when the update landed');
  if (during.where !== reading.where) problems.push(`the reader lost its place: was "${reading.where}", now "${during.where}"`);
  if (!during.pending) problems.push('the update was dropped instead of deferred — it would never be applied');

  // ...and it must actually land once there is nothing to lose.
  await page.evaluate(() => document.getElementById('cn-close').click());
  await page.waitForTimeout(900);
  if (loads === before) problems.push('the deferred update never applied after the reader closed');

  console.log(`reading "${reading.where}" · reloads during the read: ${duringRead} · update deferred: ${during.pending} · applied after closing: ${loads > before}`);
  console.log(`\n=== SW RELOAD PROBLEMS (${problems.length}) ===`);
  console.log(problems.length ? problems.map(p => '  ' + p).join('\n') : '  none');
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
