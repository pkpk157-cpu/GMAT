/* Runs verify/answers.js against the live bank. */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
["sets.js","sets-extra.js","sets-rc.js","sets-di.js","sets-di2.js","sets-di3.js","sets-quant-live.js","sets-quant-live2.js","sets-quant-700.js"]
  .forEach(f => eval(fs.readFileSync(path.join(ROOT, f), "utf8")));
const b = window.GMAT_SETS;
(window.GMAT_SETS_EXTRA||[]).forEach(x=>{const s=b.find(y=>y.id===x.setId); if(s) {let nx=s.questions.reduce((m,q)=>Math.max(m,q.n||0),0); x.add.forEach(q=>s.questions.push(Object.assign({n:++nx},q)));}});
(window.GMAT_SETS_NEW||[]).forEach(s=>{ if(!b.some(y=>y.id===s.id)) b.push(s); });
const LET = ["A","B","C","D","E"];
const { CASES } = require("./answers.js");

/* Normalise a choice for comparison: strip LaTeX wrappers, commas, currency
   spacing and unit words, and turn \tfrac{a}{b} into a/b. */
function norm(s) {
  return String(s)
    .replace(/[\u00bc\u00bd\u00be\u2153\u2154\u2155\u2156\u2157\u2158\u2159\u215a\u215b]/g,
             (ch) => " " + ({ "\u00bc": "1/4", "\u00bd": "1/2", "\u00be": "3/4", "\u2153": "1/3", "\u2154": "2/3",
                              "\u2155": "1/5", "\u2156": "2/5", "\u2157": "3/5", "\u2158": "4/5",
                              "\u2159": "1/6", "\u215a": "5/6", "\u215b": "1/8" }[ch]))
    .replace(/\\[dt]?frac\{(-?\d+)\}\{(-?\d+)\}/g, " $1/$2")
    .replace(/\\[dt]?frac(\d)\{(-?\d+)\}/g, " $1/$2")
    .replace(/\\[dt]?frac\{(-?\d+)\}(\d)/g, " $1/$2")
    .replace(/\\[dt]?frac(\d)(\d)/g, " $1/$2")
    .replace(/\\(?:left|right|,|;|!|\s)/g, "")
    .replace(/[\\{}$]/g, "")
    .replace(/\(|\)/g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
/* Numeric value of a normalised string, understanding "a/b" and mixed "n a/b". */
function val(s) {
  let m = s.match(/^(-?\d+)\s+(\d+)\/(\d+)/);          // 52 2/3 (mixed number)
  if (m) return (+m[1] >= 0 ? 1 : -1) * (Math.abs(+m[1]) + (+m[2]) / (+m[3]));
  m = s.match(/^(-?\d+)\/(-?\d+)/);                      // 2/3
  if (m) return (+m[1]) / (+m[2]);
  const f = parseFloat(s);
  return isFinite(f) ? f : NaN;
}
function matches(expected, choiceText) {
  const e = norm(expected), c = norm(choiceText);
  if (e === c) return true;
  if (c.startsWith(e + " ") || c === e) return true;              // "24 days"
  const en = val(e), cn = val(c);
  if (isFinite(en) && isFinite(cn) && Math.abs(en - cn) < 1e-6) return true;
  return false;
}

let ok = 0; const bad = [], missing = [];
for (const [sid, n, fn] of CASES) {
  const set = b.find(s => s.id === sid);
  if (!set) { missing.push(sid + " (set not found)"); continue; }
  const q = set.questions.find(x => x.n === n);
  if (!q) { missing.push(sid + " #" + n + " (question not found)"); continue; }
  const keyed = q.choices[LET.indexOf(q.correct)];
  let expected;
  try { expected = fn(); } catch (e) { bad.push([sid, n, "computation threw: " + e.message]); continue; }
  if (expected && typeof expected === "object" && expected.letter) {
    if (expected.letter === q.correct) { ok++; continue; }
    bad.push([sid, n, `derived ${expected.letter} (${expected.why || "sufficiency"}), key is ${q.correct}`]);
    continue;
  }
  if (matches(expected, keyed)) { ok++; continue; }
  const alt = q.choices.findIndex(c => matches(expected, c));
  bad.push([sid, n, `computed ${JSON.stringify(String(expected))}, key ${q.correct}=${JSON.stringify(keyed)}` +
    (alt >= 0 ? ` — the computed value is choice ${LET[alt]}` : " — computed value matches NO choice")]);
}
console.log("re-derived:", CASES.length, "| agree:", ok, "| disagree:", bad.length, "| missing:", missing.length);
bad.forEach(r => console.log("  MISMATCH " + r[0] + " #" + r[1] + " :: " + r[2]));
missing.forEach(m => console.log("  MISSING " + m));
process.exit(bad.length || missing.length ? 1 : 0);
