/* Render every rewritten explanation through the app's own pipeline.

   verify/explain.js checks the source text; this checks what a reader actually
   sees. The two failures it exists to catch, both of which have happened:

     - "\$" written outside a \( ... \) span. Inside math it is the correct way
       to write a dollar sign; outside it there is nothing to interpret the
       escape, so the reader sees a literal backslash.
     - a formula KaTeX cannot parse. It marks those rather than throwing, so
       they are invisible unless something looks for the class.

   It renders each block with the same escape → [[bold]] → KaTeX sequence the
   runner uses, so anything that survives here survives on screen. */
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
  const page = await browser.newPage({ viewport: { width: 430, height: 930 } });
  const problems = [];
  page.on('pageerror', e => problems.push('PAGEERROR ' + e.message));

  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Render Check'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(400);

  const keys = await page.evaluate(() => Object.keys(window.GMAT_EXPL || {}));

  /* One evaluate per batch rather than one for the whole bank. Rendering every
     block in a single call builds thousands of KaTeX nodes inside one task; as
     the bank grew that started crashing the renderer under parallel load, which
     looks like "Target page has been closed" and tells you nothing. */
  const BATCH = 20;
  for (let i = 0; i < keys.length; i += BATCH) {
    const slice = keys.slice(i, i + BATCH);
    const found = await page.evaluate(ks => {
      const out = [];
      const ex = window.GMAT_EXPL || {};
      const box = document.createElement('div');
      box.style.position = 'absolute'; box.style.left = '-9999px';
      document.body.appendChild(box);
      const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
      ks.forEach(k => {
        ['steps', 'fast', 'traps', 'take', 'hint'].forEach(part => {
          const v = (ex[k] || {})[part]; if (!v) return;
          box.innerHTML = '<div class="ex"></div>';
          const el = box.firstChild;
          el.innerHTML = esc(v).replace(/\[\[([\s\S]+?)\]\]/g, '<b class="bf">$1</b>');
          if (window.renderMathInElement) {
            window.renderMathInElement(el, {
              delimiters: [{ left: '\\(', right: '\\)', display: false }, { left: '\\[', right: '\\]', display: true }],
              throwOnError: false,
            });
          }
          const t = el.innerText || '';
          const at = t.indexOf('\\');
          if (at >= 0) out.push(`${k}.${part}: a literal backslash reaches the screen — …${t.slice(Math.max(0, at - 40), at + 40).replace(/\s+/g, ' ')}…`);
          if (el.querySelector('.katex-error')) out.push(`${k}.${part}: KaTeX could not parse a formula`);
          if (/\[\[|\]\]/.test(t)) out.push(`${k}.${part}: an unconverted [[bold]] marker reaches the screen`);
        });
      });
      box.remove();
      return out;
    }, slice);
    problems.push(...found);
  }

  console.log(`rendered ${keys.length} rewritten explanations`);
  console.log(`\n=== EXPLANATION RENDER PROBLEMS (${problems.length}) ===`);
  console.log(problems.length ? problems.slice(0, 30).map(p => '  ' + p).join('\n') : '  none');
  if (problems.length > 30) console.log(`  …and ${problems.length - 30} more`);
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
