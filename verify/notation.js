/* Notation audit: every power, root, fraction and operator should reach the
   screen as a typeset symbol, not as the ASCII a reader would type.

   Scans every piece of text the app shows — question stems, choices, hints,
   explanations and their fast/traps/take records, passages, concept and trick
   blocks, flashcards — and reports, outside \( \) / \[ \] math:

     - a caret power (x^2, 2^10)                     -> should be \(x^{2}\)
     - sqrt / cbrt written as words, or √ with an argument in brackets
     - a LaTeX command outside math (\frac, \times…) -> reaches the screen as text
     - an asterisk used as a multiplication sign
     - ASCII comparisons (<=, >=, !=)

   and inside math:

     - an exponent or subscript of two or more digits without braces (x^10
       typesets as x¹0), a negative exponent without braces (10^-3)
     - sqrt or frac without the backslash

   Plain numeric fractions (3/4), unicode superscripts (x²) and roots (√2) in
   prose are flagged too: the app typesets those with KaTeX, and every math span
   is parsed with the app's own KaTeX build to catch anything it cannot render.

   Run: node verify/notation.js  [--all to list every hit] */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
const PAGE = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
[...PAGE.matchAll(/<script src="(sets[^"]*\.js)"><\/script>/g)].map(m => m[1]).forEach(f => require(path.join(ROOT, f)));
fs.readdirSync(ROOT).filter(f => /^expl-.*\.js$/.test(f)).forEach(f => require(path.join(ROOT, f)));
require(path.join(ROOT, "concepts.js")); require(path.join(ROOT, "tricks.js")); require(path.join(ROOT, "flashcards.js"));

const SETS = window.GMAT_SETS || [];
(window.GMAT_SETS_EXTRA || []).forEach(x => { const s = SETS.find(a => a.id === x.setId); if (!s) return; let n = s.questions.reduce((m, q) => Math.max(m, q.n || 0), 0); x.add.forEach(q => s.questions.push(Object.assign({ n: ++n }, q))); });
(window.GMAT_SETS_NEW || []).forEach(s => { if (s && s.questions && s.questions.length && !SETS.some(b => b.id === s.id)) SETS.push(s); });

/* ---- gather every (where, field, text) ---- */
const texts = [];
// Concept, trick and flashcard text is set as HTML, so &lt; reaches KaTeX as "<"; question and explanation text is escaped first, so an entity there stays literal.
let asHtml = false;
const decode = t => t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const add = (where, field, t) => { if (t != null && String(t).trim()) texts.push({ where, field, t: asHtml ? decode(String(t)) : String(t) }); };
SETS.forEach(s => {
  if (s.passage) { (s.passage.paras || []).forEach((p, i) => add(s.id + " passage", "para " + (i + 1), p)); (s.passage.tables || []).forEach((t, ti) => { (t.head || []).forEach(h => add(s.id + " table " + (ti + 1), "head", h)); (t.rows || []).forEach(r => r.forEach(c => add(s.id + " table " + (ti + 1), "cell", c))); }); }
  s.questions.forEach(q => {
    const w = s.id + "#" + q.n;
    add(w, "text", q.text); (q.choices || []).forEach((c, i) => add(w, "choice " + "ABCDE"[i], c));
    add(w, "hint", q.hint); add(w, "expl", q.expl);
    if (q.passage) (q.passage.paras || []).forEach((p, i) => add(w + " passage", "para " + (i + 1), p));
  });
});
Object.entries(window.GMAT_EXPL || {}).forEach(([k, r]) => ["steps", "fast", "traps", "take", "hint"].forEach(f => add(k, f, r[f])));
const blocks = (g, p) => (p.blocks || []).forEach((b, i) => {
  const w = g.id + " › " + p.id + " block " + (i + 1);
  add(w, b.t, b.x); (b.items || []).forEach(it => add(w, "item", it));
  (b.head || []).forEach(h => add(w, "head", h)); (b.rows || []).forEach(r => r.forEach(c => add(w, "cell", c)));
  add(w, "eg q", b.q); (b.choices || []).forEach((c, j) => add(w, "eg choice " + "ABCDE"[j], c)); add(w, "eg why", b.why);
});
asHtml = true;
(window.GMAT_CONCEPTS || []).forEach(g => g.parts.forEach(p => blocks(g, p)));
(window.GMAT_TRICKS || []).forEach(g => g.parts.forEach(p => blocks(g, p)));
(window.GMAT_FLASHCARDS || []).forEach(s => s.decks.forEach(d => d.cards.forEach((c, i) => { add("flashcard " + d.id + "#" + (i + 1), "front", c.f); add("flashcard " + d.id + "#" + (i + 1), "back", c.b); })));

/* ---- split into math spans and prose ---- */
function split(t) {
  const math = [], prose = [];
  let last = 0;
  const re = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g; let m;
  while ((m = re.exec(t))) { prose.push(t.slice(last, m.index)); math.push(m[1] != null ? m[1] : m[2]); last = m.index + m[0].length; }
  prose.push(t.slice(last));
  return { math, prose: prose.join(" ") };
}
// A formula block is raw LaTeX with no delimiters of its own.
const isFormula = x => x.field === "formula";

const katex = require(path.join(ROOT, "katex", "katex.min.js"));
const cats = { split: [], caret: [], subscript: [], rootword: [], latexOut: [], star: [], ascii: [], braces: [], inMath: [], uniMath: [], katexErr: [], fraction: [], uniSup: [] };
const ex = (arr, x, snippet) => arr.push(`${x.where} [${x.field}]: …${snippet.replace(/\s+/g, " ").slice(0, 90)}…`);
const around = (s, i) => s.slice(Math.max(0, i - 35), i + 45);

texts.forEach(x => {
  const { math, prose } = isFormula(x) ? { math: [x.t], prose: "" } : split(x.t);
  // prose checks
  let m;
  const P = prose;
  const re1 = /(?<! )\^|\^(?! )/g; while ((m = re1.exec(P))) ex(cats.caret, x, around(P, m.index));   // a lone " ^ " is a defined-operation symbol, not a power
  const re1b = /[A-Za-z]_[A-Za-z0-9]/g; while ((m = re1b.exec(P))) ex(cats.subscript, x, around(P, m.index));
  const re7 = /[²³¹⁰⁴⁵⁶⁷⁸⁹⁻ⁿ]/g; while ((m = re7.exec(P))) ex(cats.uniSup, x, around(P, m.index));
  const re2 = /\b(sqrt|cbrt)\s*\(|√\s*\(|∛\s*\(/g; while ((m = re2.exec(P))) ex(cats.rootword, x, around(P, m.index));
  const re3 = /\\(frac|dfrac|tfrac|sqrt|times|div|le|ge|ne|cdot|pi|pm|infty|leq|geq|neq|text|left|right|begin|end)\b/g; while ((m = re3.exec(P))) ex(cats.latexOut, x, around(P, m.index));
  const re4 = /[0-9A-Za-z)]\s\*\s[0-9A-Za-z(]/g; while ((m = re4.exec(P))) ex(cats.star, x, around(P, m.index));
  const re5 = /(<=|>=|!=|=<|=>)/g; while ((m = re5.exec(P))) { if (!/&[lg]t;=/.test(P.slice(Math.max(0, m.index - 4), m.index + 3))) ex(cats.ascii, x, around(P, m.index)); }
  const re6 = /(?<![\d.,])\d+(?:\/|\s\/|\/\s)\d+(?![\d.,%])/g; while ((m = re6.exec(P))) ex(cats.fraction, x, around(P, m.index));
  // a maths expression half in, half out of the delimiters: "\\(x^{2}\\) = 36", "3 × \\(2^{7}\\)"
  const T = isFormula(x) ? "" : x.t;
  const rs = /\\\)\s*[=+−×·÷<>≤≥≈±]\s*(\d|\\\()|\d\s*[=+−×·÷<>≤≥≈±]\s*\\\(/g; while ((m = rs.exec(T))) ex(cats.split, x, around(T, m.index));
  // math checks
  math.forEach(M => {
    let k;
    // x^10 → x¹0, 10^-3 → 10⁻3, 2^(n-1) → 2⁽n-1), x^ab → xᵃb: the exponent needs braces
    const rb = /[\^_]\s*(-\s*[\dA-Za-z]|\d{2,}|\()/g; while ((k = rb.exec(M))) ex(cats.braces, x, around(M, k.index));
    const rm = /(^|[^\\A-Za-z])(sqrt|frac|times|cdot|le|ge|neq)\b/g; while ((k = rm.exec(M))) ex(cats.inMath, x, around(M, k.index));
    const ru = /[√∛²³¹⁰⁴⁵⁶⁷⁸⁹⁻ⁿ]/g; while ((k = ru.exec(M))) ex(cats.uniMath, x, around(M, k.index));
    try { katex.renderToString(M, { throwOnError: true, strict: "error", displayMode: false }); }
    catch (e) { ex(cats.katexErr, x, (String(e.message).replace(/^KaTeX parse error: /, "").slice(0, 60) + " ⟵ " + M)); }
  });
});

const ALL = process.argv.includes("--all");
const labels = {
  split: "expression split across the math delimiters (\\(x^{2}\\) = 36)",
  caret: "caret power outside math (x^2)", rootword: "sqrt/cbrt or √( ) outside math", latexOut: "LaTeX command outside math (literal backslash)",
  star: "asterisk as a multiplication sign", ascii: "ASCII comparison (<=, >=, !=)", braces: "inside math: exponent/subscript needs braces (x^10, 10^-3)",
  inMath: "inside math: sqrt/frac/times missing its backslash", fraction: "plain numeric fraction in prose (3/4) -> \\(\\tfrac{3}{4}\\)",
  subscript: "underscore subscript outside math (a_n)", uniMath: "inside math: unicode √ ∛ or superscript digit (KaTeX prints it as plain text)",
  katexErr: "inside math: KaTeX cannot parse it", uniSup: "unicode superscript in prose (x²) -> \\(x^{2}\\)"
};
let problems = 0;
console.log(`scanned ${texts.length} text fields`);
Object.keys(cats).forEach(k => {
  const arr = cats[k];
  const isNote = false;
  if (!isNote) problems += arr.length;
  console.log(`\n--- ${labels[k]}: ${arr.length}${isNote ? " (informational)" : ""} ---`);
  (ALL ? arr : arr.slice(0, isNote ? 5 : 25)).forEach(l => console.log("  " + l));
  if (!ALL && arr.length > (isNote ? 5 : 25)) console.log(`  …and ${arr.length - (isNote ? 5 : 25)} more (run with --all)`);
});
console.log(`\n=== NOTATION PROBLEMS (${problems}) ===`);
process.exit(problems ? 1 : 0);
