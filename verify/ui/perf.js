/* Load timing, payload and re-render cost. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(require('path').join(__dirname, '..', '..', 'node_modules', 'playwright-core'));
const ROOT = require('path').join(__dirname, '..', '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
let bytes = 0, reqs = [];
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  const body = fs.readFileSync(f);
  bytes += body.length; reqs.push([p, body.length]);
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(body);
});
(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
  const t0 = Date.now();
  await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'load' });
  const loadMs = Date.now() - t0;
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Perf'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(400);

  const nav = await page.evaluate(() => {
    const e = performance.getEntriesByType('navigation')[0] || {};
    return { domContentLoaded: Math.round(e.domContentLoadedEventEnd || 0), load: Math.round(e.loadEventEnd || 0) };
  });

  // Cost of switching tabs (a full innerHTML re-render each time).
  const switchMs = await page.evaluate(async () => {
    const btns = document.querySelectorAll('#botnav .bn');
    const t = [];
    for (const i of [0, 1, 3, 4, 2, 0, 3]) {
      const a = performance.now();
      btns[i].click();
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      t.push(performance.now() - a);
    }
    return t.map(x => Math.round(x));
  });

  const heap = await page.evaluate(() => performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : null);
  const domNodes = await page.evaluate(() => document.querySelectorAll('*').length);

  console.log('payload:', (bytes / 1024).toFixed(0) + ' KB over ' + reqs.length + ' requests');
  reqs.sort((a, b) => b[1] - a[1]).slice(0, 6).forEach(([p, n]) => console.log('   ', p.padEnd(24), (n / 1024).toFixed(0) + ' KB'));
  console.log('goto->load:', loadMs + ' ms   DOMContentLoaded:', nav.domContentLoaded + ' ms');
  console.log('tab switch ms:', switchMs.join(', '));
  console.log('DOM nodes on a subject tab:', domNodes, ' heap:', heap ? heap + ' MB' : 'n/a');
  await browser.close(); server.close();
})();
