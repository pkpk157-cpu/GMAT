/* Repeated questions.

   A question that appears twice — in the same set or in two sets that the app
   later files under the same topic — is drilled twice, scored twice and
   reviewed twice. This check normalises every stem (case, spacing, KaTeX
   delimiters, punctuation) and reports any two questions that share one, or
   whose stems are near-identical (one is a prefix of the other, or they differ
   only in a handful of characters) with the same answer choices.

   Run: node verify/dupes.js  [--all] */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
const PAGE = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
[...PAGE.matchAll(/<script src="(sets[^"]*\.js)"><\/script>/g)].map(m => m[1]).forEach(f => require(path.join(ROOT, f)));
const SETS = window.GMAT_SETS || [];
(window.GMAT_SETS_EXTRA || []).forEach(x => { const s = SETS.find(a => a.id === x.setId); if (!s) return; let n = s.questions.reduce((m, q) => Math.max(m, q.n || 0), 0); x.add.forEach(q => s.questions.push(Object.assign({ n: ++n }, q))); });
(window.GMAT_SETS_NEW || []).forEach(s => { if (s && s.questions && s.questions.length && !SETS.some(b => b.id === s.id)) SETS.push(s); });

const problems0 = [];
const norm = s => String(s || "").toLowerCase()
  .replace(/\\[()\[\]]/g, " ").replace(/\\(dfrac|tfrac|frac)/g, "frac").replace(/\\[a-z]+/g, " ")
  .replace(/[{}$^_]/g, "").replace(/[−–—]/g, "-").replace(/[×·]/g, "*")
  .replace(/[^a-z0-9%+*/=<>.,()-]+/g, "").trim();
const choicesKey = q => (q.choices || []).map(norm).join("|");

/* A question flagged dup:"setId#n" is a source repeat the app does not serve;
   the flag must point at a question that exists and is itself served. */
const all = [], flagged = [];
const served = new Set();
SETS.forEach(s => (s.questions || []).forEach(q => { if (!q.dup) served.add(s.id + "#" + q.n); }));
SETS.forEach(s => (s.questions || []).forEach(q => {
  if (q.dup) { flagged.push(s.id + "#" + q.n + " → " + q.dup); if (!served.has(q.dup)) problems0.push(`${s.id}#${q.n} is flagged as a duplicate of ${q.dup}, which is not a served question`); return; }
  // RC and Data Insights stems repeat across passages ("The primary purpose of the passage is to"); key those by their passage
  const pas = q.passage ? q.passage.paras : s.passage ? s.passage.paras : null;
  const pk = pas ? norm(pas[0]).slice(0, 80) + "::" : "";
  all.push({ set: s.id, section: s.section, n: q.n, text: q.text || "", stem: pk + norm(q.text), ch: choicesKey(q), correct: q.correct });
}));

const problems = problems0, notes = [];
const seen = new Map();
all.forEach(q => {
  if (!q.stem) return;
  const k = q.section + "::" + q.stem;
  // a short generic stem ("Which of the following is greatest?") repeats legitimately over different choices
  if (seen.has(k) && (q.stem.length > 50 || seen.get(k).ch === q.ch)) { const o = seen.get(k); problems.push(`identical stem: ${o.set}#${o.n} and ${q.set}#${q.n} — "${q.text.slice(0, 70).replace(/\s+/g, " ")}"`); }
  else if (!seen.has(k)) seen.set(k, q);
});
// near-duplicates: same section, same choices, stems within a small edit distance
const dist = (a, b) => { if (Math.abs(a.length - b.length) > 12) return 99; const m = a.length, n = b.length; let prev = new Array(n + 1).fill(0).map((_, i) => i); for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; } return prev[n]; };
const byCh = new Map();
all.forEach(q => { if (!q.ch || q.ch.length < 8) return; const k = q.section + "::" + q.ch; (byCh.get(k) || byCh.set(k, []).get(k)).push(q); });
byCh.forEach(list => {
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const a = list[i], b = list[j];
    if (a.stem === b.stem) continue;   // already reported
    const d = dist(a.stem, b.stem);
    if (d <= Math.max(2, Math.floor(Math.min(a.stem.length, b.stem.length) * 0.06))) problems.push(`near-identical (${d} edits, same choices): ${a.set}#${a.n} and ${b.set}#${b.n} — "${a.text.slice(0, 70).replace(/\s+/g, " ")}"`);
    else if (a.stem.length > 40 && (a.stem.startsWith(b.stem) || b.stem.startsWith(a.stem))) notes.push(`one stem extends the other, same choices: ${a.set}#${a.n} and ${b.set}#${b.n}`);
  }
});
// same-set: identical choices and identical answer with a stem sharing its first 60 characters
SETS.forEach(s => { const qs = (s.questions || []); for (let i = 0; i < qs.length; i++) for (let j = i + 1; j < qs.length; j++) { const a = norm(qs[i].text), b = norm(qs[j].text); if (a.length > 60 && a.slice(0, 60) === b.slice(0, 60) && choicesKey(qs[i]) === choicesKey(qs[j]) && a !== b) notes.push(`${s.id}#${qs[i].n} and #${qs[j].n} open with the same 60 characters and share choices`); } });

console.log(`${all.length} questions served in ${SETS.length} sets · ${flagged.length} source repeats flagged dup and not served`);
console.log(`\n=== DUPLICATE PROBLEMS (${problems.length}) ===`);
console.log(problems.length ? problems.map(p => "  " + p).join("\n") : "  none");
if (notes.length) { console.log(`\n--- notes (${notes.length}) ---`); notes.slice(0, process.argv.includes("--all") ? 1e9 : 20).forEach(n => console.log("  " + n)); }
process.exit(problems.length ? 1 : 0);
