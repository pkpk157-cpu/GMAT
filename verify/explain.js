/* Health check for the rewritten-explanation layer (expl-*.js).

   The explanations are keyed "setId#n" and merged over the question bank at
   load, so a typo in a key silently does nothing — the app keeps the old
   explanation and never complains. This check catches that, plus the ways a
   rewritten explanation can be wrong in a way the reader would notice:

     - a key that matches no question in the bank
     - an explanation that names a letter the question does not have, or that
       announces a different answer from the verified key
     - unbalanced LaTeX or [[bold]] markers, which render as raw text
     - a [[bold]] marker nested inside a \( \) math span, which stops KaTeX
       from rendering that span at all
     - a section that is empty, or so short it cannot be doing its job
     - a "traps" block that never mentions any of the wrong choices

   It does NOT check that the mathematics is right — that is what verify/run.js
   and the printed source keys are for. */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};

const SET_FILES = ["sets.js", "sets-extra.js", "sets-rc.js", "sets-di.js", "sets-di2.js", "sets-di3.js",
  "sets-quant-live.js", "sets-quant-live2.js", "sets-quant-700.js", "sets-cr-2person.js",
  "sets-cr-700a.js", "sets-cr-700b.js", "sets-cr-700c.js", "sets-cr-700d.js", "sets-rc-700.js", "sets-di4.js"];
SET_FILES.forEach(f => eval(fs.readFileSync(path.join(ROOT, f), "utf8")));

const base = window.GMAT_SETS;
(window.GMAT_SETS_EXTRA || []).forEach(x => {
  const s = base.find(y => y.id === x.setId); if (!s) return;
  let nx = s.questions.reduce((m, q) => Math.max(m, q.n || 0), 0);
  x.add.forEach(q => s.questions.push(Object.assign({ n: ++nx }, q)));
});
(window.GMAT_SETS_NEW || []).forEach(s => { if (!base.some(y => y.id === s.id)) base.push(s); });

// Every expl-*.js in the repo root, so a new file is covered the moment it exists.
const EXPL_FILES = fs.readdirSync(ROOT).filter(f => /^expl-.*\.js$/.test(f)).sort();
EXPL_FILES.forEach(f => eval(fs.readFileSync(path.join(ROOT, f), "utf8")));
const EXPL = window.GMAT_EXPL || {};

const index = {};
base.forEach(s => s.questions.forEach(q => { index[s.id + "#" + q.n] = { set: s, q }; }));

const LET = ["A", "B", "C", "D", "E", "F", "G", "H"];
const problems = [];
const bad = (k, msg) => problems.push(`${k}: ${msg}`);

const balanced = (text, open, close) =>
  (text.split(open).length - 1) === (text.split(close).length - 1);

Object.keys(EXPL).forEach(k => {
  const rec = EXPL[k], hit = index[k];
  if (!hit) { bad(k, "no question with this key — the rewrite is being silently ignored"); return; }
  const { q } = hit;
  const nOpt = q.options || 5, letters = LET.slice(0, nOpt);

  const parts = { steps: rec.steps, fast: rec.fast, traps: rec.traps, take: rec.take, hint: rec.hint };
  Object.keys(parts).forEach(name => {
    const v = parts[name];
    if (v === undefined) return;
    if (typeof v !== "string" || !v.trim()) { bad(k, `${name} is empty`); return; }
    if (!balanced(v, "\\(", "\\)")) bad(k, `${name} has unbalanced \\( \\) — KaTeX will show raw text`);
    if (!balanced(v, "[[", "]]")) bad(k, `${name} has an unclosed [[bold]] marker`);
    // Inside a math span a dollar sign must be written \$ — a bare one is a
    // delimiter to some renderers and swallows the rest of the line.
    const spans = v.match(/\\\([\s\S]*?\\\)/g) || [];
    spans.forEach(sp => { if (/(^|[^\\])\$/.test(sp)) bad(k, `${name} has a bare $ inside math`); });
    // A [[bold]] marker inside a math span becomes a <b> element before KaTeX
    // runs, which splits the \( \) across element boundaries — KaTeX then skips
    // the span and the raw backslashes end up on screen.
    spans.forEach(sp => {
      if (sp.includes("[[") || sp.includes("]]")) bad(k, `${name} has a [[bold]] marker inside a math span — move it outside \\( \\)`);
    });
  });

  if (!rec.steps) bad(k, "no steps — a rewrite with no worked solution");
  if (rec.steps && rec.steps.length < 120) bad(k, `steps is only ${rec.steps.length} chars, shorter than the explanation it replaces`);
  if (rec.fast && rec.fast.length < 60) bad(k, `fast is only ${rec.fast.length} chars`);

  // Any answer letter announced in the text must be the verified one.
  if (rec.steps) {
    const claims = [...rec.steps.matchAll(/\bAnswer(?: is)?[:\s]+\(?([A-H])\)?\b/g)].map(m => m[1]);
    claims.forEach(c => { if (c !== q.correct) bad(k, `steps announces answer ${c} but the verified key is ${q.correct}`); });
  }

  // The traps block should be about the wrong choices, and must not call the
  // right one a trap.
  if (rec.traps) {
    const named = letters.filter(L => new RegExp("\\(" + L + "\\)").test(rec.traps));
    if (!named.length) bad(k, "traps names no answer choice");
    if (named.includes(q.correct)) bad(k, `traps discusses (${q.correct}), which is the correct answer`);
    named.forEach(L => { if (!letters.includes(L)) bad(k, `traps names (${L}) but the question has only ${nOpt} choices`); });
  }
});

const covered = Object.keys(EXPL).filter(k => index[k]).length;
const tot = Object.keys(index).length;
const withFast = Object.keys(EXPL).filter(k => index[k] && EXPL[k].fast).length;

console.log(`explanation files: ${EXPL_FILES.length ? EXPL_FILES.join(", ") : "(none)"}`);
console.log(`rewritten: ${covered} of ${tot} questions | with a fast route: ${withFast}`);
console.log(`\n=== EXPLANATION PROBLEMS (${problems.length}) ===`);
console.log(problems.length ? problems.map(p => "  " + p).join("\n") : "  none");
process.exit(problems.length ? 1 : 0);
