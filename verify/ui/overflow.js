/* Find which elements stick out past the viewport at a narrow width. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(require('path').join(__dirname, '..', '..', 'node_modules', 'playwright-core'));
const ROOT = require('path').join(__dirname, '..', '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
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
  const page = await browser.newPage({ viewport: { width: 320, height: 640 } });
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Pranav'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(600);

  for (const [i, label] of [[0,'Quant'],[1,'Data'],[2,'Overall'],[3,'RC'],[4,'CR']]) {
    await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), i);
    await page.waitForTimeout(350);
    const bad = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth, out = [];
      document.querySelectorAll('body *').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (r.right > vw + 0.5 || r.left < -0.5) {
          out.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || '').toString().slice(0, 60),
            id: el.id || '',
            left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width),
            txt: (el.textContent || '').trim().slice(0, 40),
          });
        }
      });
      // Report only the outermost offenders.
      return out.filter(o => !out.some(p => p !== o && o.left >= p.left && o.right <= p.right && p.w > o.w)).slice(0, 8);
    });
    if (bad.length) { console.log('== ' + label + ' (vw=320)'); bad.forEach(b => console.log('   ', JSON.stringify(b))); }
  }

  // The difficulty picker and a live question are the widest things the app
  // draws, and neither is on a tab, so check them explicitly.
  const overflowing = () => page.evaluate(() => {
    const vw = document.documentElement.clientWidth, out = [];
    document.querySelectorAll('#runner *').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (r.right > vw + 0.5 || r.left < -0.5) out.push({ tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 50), w: Math.round(r.width), txt: (el.textContent || '').trim().slice(0, 34) });
    });
    return out.filter(o => !out.some(p => p !== o && p.w > o.w && o.txt && p.txt.includes(o.txt))).slice(0, 6);
  });
  for (const [i, label] of [[0, 'Quant'], [1, 'Data'], [3, 'RC'], [4, 'CR']]) {
    await page.evaluate(k => document.querySelectorAll('#botnav .bn')[k].click(), i);
    await page.waitForTimeout(300);
    await page.evaluate(() => document.querySelector('[data-subtab="practice"]')?.click());
    await page.waitForTimeout(300);
    const ok = await page.evaluate(() => { const b = document.querySelector('#view [data-runset]'); if (!b) return false; b.click(); return true; });
    if (!ok) continue;
    await page.waitForTimeout(350);
    let bad = await overflowing();
    if (bad.length) { console.log('== ' + label + ' difficulty picker (vw=320)'); bad.forEach(b => console.log('   ', JSON.stringify(b))); }
    await page.evaluate(() => document.querySelector('#runner [data-mode="practice"]')?.click());
    await page.waitForTimeout(300);
    bad = await overflowing();
    if (bad.length) { console.log('== ' + label + ' question (vw=320)'); bad.forEach(b => console.log('   ', JSON.stringify(b))); }
    await page.evaluate(() => { const r = document.getElementById('runner'); if (r) { r.hidden = true; document.body.style.overflow = ''; } });
    await page.waitForTimeout(150);
  }
  await browser.close(); server.close();
})();
