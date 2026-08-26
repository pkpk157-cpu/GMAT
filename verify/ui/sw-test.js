/* Verify the service worker: first load populates the cache, a second load
   serves the bank from cache, and the app still works offline. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(require('path').join(__dirname, '..', '..', 'node_modules', 'playwright-core'));
const ROOT = require('path').join(__dirname, '..', '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.woff2': 'font/woff2' };
let log = [];
const server = http.createServer((req, res) => {
  let p = req.url.split('?')[0]; if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  const body = fs.readFileSync(f);
  log.push([p, body.length]);
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' }); res.end(body);
});
const kb = n => (n / 1024).toFixed(0) + ' KB';
const totalOf = rows => rows.reduce((a, r) => a + r[1], 0);

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const ctx = await browser.newContext({ viewport: { width: 430, height: 930 } });
  const page = await ctx.newPage();
  const url = `http://127.0.0.1:${port}/index.html`;

  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(2500);   // let the SW install and precache
  const first = log.slice(); log = [];
  console.log('first load + precache:', kb(totalOf(first)), 'over', first.length, 'requests');

  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(1500);
  const second = log.slice(); log = [];
  console.log('second load        :', kb(totalOf(second)), 'over', second.length, 'requests');
  second.forEach(([p, n]) => console.log('     ', p.padEnd(22), kb(n)));

  const banked = second.filter(([p]) => /sets.*\.js$/.test(p));
  if (banked.length) console.log('  !! question bank still re-fetched on reload:', banked.map(b => b[0]).join(', '));

  // Offline.
  await ctx.setOffline(true);
  await page.reload({ waitUntil: 'load' }).catch(() => {});
  await page.waitForTimeout(1500);
  const offline = await page.evaluate(() => {
    const v = document.getElementById('view');
    return {
      rendered: !!v && v.textContent.trim().length > 30,
      sets: (window.GMAT_SETS || []).length,
      nav: document.querySelectorAll('#botnav .bn').length,
    };
  });
  console.log('offline reload    :', JSON.stringify(offline));
  if (!offline.rendered || offline.sets < 50) console.log('  !! app does not work offline');
  await ctx.setOffline(false);

  await browser.close(); server.close();
})();
