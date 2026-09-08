/* Render every concept-guide block through the app's own pipeline.

   verify/concepts.js checks the source text; this checks what a reader actually
   sees. It mirrors blockHTML() from index.html and then runs the same KaTeX
   pass the concept reader runs, so the failures it catches are the ones that
   would reach the screen:

     - a backslash outside a \( ... \) span, which KaTeX never touches and the
       reader sees as a literal "\"
     - a formula KaTeX cannot parse — it marks those rather than throwing, so
       they are invisible unless something looks for the class
     - a block that renders to nothing, which is what an unknown block type does
     - a display formula wider than the narrowest supported screen. It scrolls
       rather than clipping, so nothing is lost, but half of it sits off-screen
       until the reader drags it sideways.

   Run: node verify/ui/concept-render.js */
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
  page.on('pageerror', e => problems.push('PAGEERROR ' + e.message));

  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    const nm = document.querySelector('#onboard input[type="text"]');
    if (nm) { nm.value = 'Render Check'; nm.dispatchEvent(new Event('input', { bubbles: true })); }
    const go = [...document.querySelectorAll('#onboard button')].find(b => /start tracking/i.test(b.textContent));
    if (go) go.click();
  });
  await page.waitForTimeout(600);

  const res = await page.evaluate(() => {
    const out = [];
    const LET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    /* Mirrors blockHTML() in index.html, class names included — the real
       classes are what give the width measurement below its real geometry. */
    function blockHTML(b) {
      switch (b.t) {
        case 'h': return `<h3 class="cn-h">${b.x}</h3>`;
        case 'p': return `<p class="cn-p">${b.x}</p>`;
        case 'ul': return `<ul class="cn-ul">${b.items.map(i => `<li class="cn-li">${i}</li>`).join('')}</ul>`;
        case 'ol': return `<ol class="cn-ol">${b.items.map(i => `<li class="cn-li">${i}</li>`).join('')}</ol>`;
        case 'formula': return `<div class="cn-formula">\\[${b.x}\\]</div>`;
        case 'tip': case 'warn': case 'note': return `<div class="cn-call ${b.t}">${b.x}</div>`;
        case 'table': return `<div class="cn-table-wrap"><table class="cn-table"><thead><tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
        case 'eg': {
          const ans = (b.ans || '').toUpperCase();
          const ch = (b.choices || []).map((c, i) => `<div class="cn-eg-op"><span class="cl">${LET[i]}</span><span>${c}</span></div>`).join('');
          return `<div class="cn-eg"><div class="cn-eg-tag">Worked example</div><div class="cn-eg-body"><div class="cn-eg-q">${b.q}</div><div class="cn-eg-ch">${ch}</div><div class="cn-eg-why"><b>Why ${ans}:</b> ${b.why}</div></div></div>`;
        }
        default: return '';
      }
    }
    /* Render inside the reader's own container so the real CSS chain applies —
       that is what makes the width measurement below meaningful. */
    const overlay = document.getElementById('concept');
    const wasHidden = overlay.hidden;
    overlay.hidden = false;
    const body = document.getElementById('cn-body');
    const saved = body.innerHTML;
    body.innerHTML = '<div class="cn-article"><div id="probe"></div></div>';
    const box = document.getElementById('probe');
    let blocks = 0;
    (window.GMAT_CONCEPTS || []).forEach(g => (g.parts || []).forEach(p => {
      (p.blocks || []).forEach((b, i) => {
        blocks++;
        const where = `${g.id} › ${p.id} block ${i + 1} (${b.t})`;
        const html = blockHTML(b);
        if (!html) { out.push(`${where}: renders to nothing`); return; }
        box.innerHTML = html;
        if (window.renderMathInElement) {
          window.renderMathInElement(box, {
            delimiters: [{ left: '\\(', right: '\\)', display: false }, { left: '\\[', right: '\\]', display: true }],
            throwOnError: false,
          });
        }
        const t = box.innerText || '';
        const at = t.indexOf('\\');
        if (at >= 0) out.push(`${where}: a literal backslash reaches the screen — …${t.slice(Math.max(0, at - 40), at + 40).replace(/\s+/g, ' ')}…`);
        if (box.querySelector('.katex-error')) out.push(`${where}: KaTeX could not parse a formula`);
        if (!t.trim() && b.t !== 'formula') out.push(`${where}: renders to empty text`);
        // A display formula wider than the phone viewport is scrollable rather
        // than clipped, so nothing is lost — but the reader has to drag it
        // sideways to see the second half. Split it across lines instead.
        box.querySelectorAll('.cn-formula').forEach(f => {
          const over = f.scrollWidth - f.clientWidth;
          if (over > 1) out.push(`${where}: formula runs ${over}px past the screen — stack it with \\begin{gathered}`);
        });
      });
    }));
    body.innerHTML = saved;
    overlay.hidden = wasHidden;
    return { out, blocks };
  });
  problems.push(...res.out);

  console.log(`rendered ${res.blocks} concept blocks`);
  console.log(`\n=== CONCEPT RENDER PROBLEMS (${problems.length}) ===`);
  console.log(problems.length ? problems.slice(0, 30).map(p => '  ' + p).join('\n') : '  none');
  if (problems.length > 30) console.log(`  …and ${problems.length - 30} more`);
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
