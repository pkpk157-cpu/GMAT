/* Every text the app shows, typeset through the app's own pipeline.

   verify/notation.js checks the source text; this check renders it. Each
   question stem, choice, hint and explanation record goes through the same
   escape-then-KaTeX path the runner uses, and each concept, trick and flashcard
   block through the HTML path, inside the real page. It fails when KaTeX marks
   a span as an error, when a "\(" delimiter survives to the screen (a span the
   auto-renderer never picked up), or when a caret power reaches the reader as
   text. It also saves a screenshot of a sample of converted items so the
   typesetting can be eyeballed.

   Run: node verify/ui/notation-render.js */
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
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  const problems = [];
  page.on('pageerror', e => problems.push('PAGEERROR ' + e.message));
  await page.goto(`http://127.0.0.1:${port}/index.html`);
  await page.waitForFunction(() => !!window.renderMathInElement && !!window.GMAT_SETS, null, { timeout: 15000 });

  const result = await page.evaluate(() => {
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const rich = s => esc(s == null ? "" : s).replace(/\[\[([\s\S]+?)\]\]/g, '<b class="bf">$1</b>');
    const typeset = el => window.renderMathInElement(el, { delimiters: [{ left: "\\(", right: "\\)", display: false }, { left: "\\[", right: "\\]", display: true }], throwOnError: false });
    const SETS = (window.GMAT_SETS || []).slice();
    (window.GMAT_SETS_EXTRA || []).forEach(x => { const s = SETS.find(a => a.id === x.setId); if (!s) return; let n = s.questions.reduce((m, q) => Math.max(m, q.n || 0), 0); x.add.forEach(q => s.questions.push(Object.assign({ n: ++n }, q))); });
    (window.GMAT_SETS_NEW || []).forEach(s => { if (s && s.questions && s.questions.length && !SETS.some(b => b.id === s.id)) SETS.push(s); });
    const items = [];   // { where, html }
    const q = (where, t) => { if (t != null && String(t).trim()) items.push({ where, html: rich(t) }); };
    const h = (where, t) => { if (t != null && String(t).trim()) items.push({ where, html: String(t) }); };
    SETS.forEach(s => {
      if (s.passage) { (s.passage.paras || []).forEach((p, i) => q(s.id + " para " + (i + 1), p)); (s.passage.tables || []).forEach(t => { (t.head || []).forEach(c => q(s.id + " table", c)); (t.rows || []).forEach(r => r.forEach(c => q(s.id + " table", c))); }); }
      s.questions.forEach(x => { const w = s.id + "#" + x.n; q(w + " text", x.text); (x.choices || []).forEach((c, i) => q(w + " choice " + "ABCDE"[i], c)); q(w + " hint", x.hint); q(w + " expl", x.expl); });
    });
    Object.entries(window.GMAT_EXPL || {}).forEach(([k, r]) => ["steps", "fast", "traps", "take", "hint"].forEach(f => q(k + " " + f, r[f])));
    const blocks = (g, p) => (p.blocks || []).forEach((b, i) => {
      const w = g.id + " › " + p.id + " #" + (i + 1);
      if (b.t === "formula") h(w, "\\(" + b.x + "\\)"); else h(w, b.x);
      (b.items || []).forEach(it => h(w, it)); (b.head || []).forEach(c => h(w, c)); (b.rows || []).forEach(r => r.forEach(c => h(w, c)));
      h(w, b.q); (b.choices || []).forEach(c => h(w, c)); h(w, b.why);
    });
    (window.GMAT_CONCEPTS || []).forEach(g => g.parts.forEach(p => blocks(g, p)));
    (window.GMAT_TRICKS || []).forEach(g => g.parts.forEach(p => blocks(g, p)));
    (window.GMAT_FLASHCARDS || []).forEach(s => s.decks.forEach(d => d.cards.forEach((c, i) => { h("card " + d.id + "#" + (i + 1), c.f); h("card " + d.id + "#" + (i + 1), c.b); })));

    const host = document.createElement("div"); host.style.cssText = "position:absolute;left:0;top:0;width:360px;padding:12px;background:#fff;color:#111;font:15px system-ui;z-index:99999";
    document.body.appendChild(host);
    const bad = []; let mathSpans = 0;
    const sample = [];
    items.forEach(it => {
      const el = document.createElement("div"); el.innerHTML = it.html; host.appendChild(el);
      try { typeset(el); } catch (e) { bad.push(it.where + ": typeset threw " + e.message); }
      const errs = el.querySelectorAll(".katex-error").length;
      const k = el.querySelectorAll(".katex").length; mathSpans += k;
      el.querySelectorAll(".katex-mathml").forEach(m => m.remove());   // the hidden MathML copy echoes the TeX source
      const txt = el.textContent;
      if (errs) bad.push(it.where + ": KaTeX error in " + [...el.querySelectorAll(".katex-error")].map(e => e.textContent).join(" | ").slice(0, 80));
      if (/\\\(|\\\)|\\\[|\\\]/.test(txt)) bad.push(it.where + ": delimiter reached the screen: " + txt.slice(0, 80));
      if (/(?<! )\^|\^(?! )/.test(txt)) bad.push(it.where + ": caret reached the screen: " + txt.slice(0, 80));
      if (/\\(tfrac|frac|sqrt|times|cdot)\b/.test(txt)) bad.push(it.where + ": LaTeX reached the screen: " + txt.slice(0, 80));
      if (k && sample.length < 14 && /tfrac|\^\{|sqrt/.test(it.html) && it.html.length < 140 && /quant-(algebra-core|mixture-ex|exponents-ex|numberline-ex)|di-datasufficiency-ex#10|algebra-core#7[12]/.test(it.where)) { sample.push(it.where); el.dataset.sample = "1"; }
      else el.remove();
    });
    [...host.children].forEach(el => { if (!el.dataset.sample) el.remove(); });
    return { n: items.length, mathSpans, bad, sample };
  });
  result.bad.forEach(b => problems.push(b));
  const shot = path.join(require('os').tmpdir(), 'gmat-notation-sample.png');
  await page.screenshot({ path: shot, fullPage: false });
  console.log(`rendered ${result.n} text fields · ${result.mathSpans} math spans · sample of ${result.sample.length} converted items in ${shot}`);
  console.log(`\n=== NOTATION RENDER PROBLEMS (${problems.length}) ===`);
  console.log(problems.length ? problems.slice(0, 40).map(p => '  ' + p).join('\n') + (problems.length > 40 ? `\n  …and ${problems.length - 40} more` : '') : '  none');
  await browser.close(); server.close();
  process.exit(problems.length ? 1 : 0);
})();
