/* Syllabus coverage guard.

   The Practice tab is organised by the syllabus topics declared in SECTIONS in
   index.html. A topic that exists in the syllabus but has almost no questions
   behind it is a promise the app does not keep — the tab shows a heading with
   nothing to drill. This check counts the questions filed under every declared
   topic (through the same aliasing the app uses) and fails when any topic is
   thinner than the floor below, or when a question's topic resolves to
   "Other topics" — which means the syllabus and the data have drifted apart.

   Run: node verify/syllabus.js */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};

const PAGE = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const SET_FILES = [...PAGE.matchAll(/<script src="(sets[^"]*\.js)"><\/script>/g)].map(m => m[1]);
SET_FILES.forEach(f => require(path.join(ROOT, f)));

const SETS = window.GMAT_SETS || [];
(window.GMAT_SETS_EXTRA || []).forEach(x => {
  const set = SETS.find(s => s.id === x.setId);
  if (!set || !Array.isArray(set.questions) || !Array.isArray(x.add)) return;
  let next = set.questions.reduce((m, q) => Math.max(m, q.n || 0), 0);
  x.add.forEach(q => set.questions.push(Object.assign({ n: ++next }, q)));
});
(window.GMAT_SETS_NEW || []).forEach(s => {
  if (s && Array.isArray(s.questions) && s.questions.length && !SETS.some(b => b.id === s.id)) SETS.push(s);
});

/* The syllabus, read out of index.html so this check cannot drift from the app. */
const SYLLABUS = {};   // section -> [{ subject, topics: [...] }]
{
  let sec = null;
  PAGE.split("\n").forEach(line => {
    const m = line.match(/^\s*\{\s*id:"([a-z]+)",\s*nav:/);
    if (m) sec = m[1];
    const s = line.match(/\{\s*name:"([^"]+)",\s*topics:\[([^\]]*)\]/);
    if (s && sec) (SYLLABUS[sec] = SYLLABUS[sec] || []).push({ subject: s[1], topics: [...s[2].matchAll(/"([^"]+)"/g)].map(t => t[1]) });
  });
}
/* Aliases, mirrored from TOPIC_ALIAS in index.html. */
const ALIAS = {};
{
  const block = PAGE.slice(PAGE.indexOf("const TOPIC_ALIAS = {"), PAGE.indexOf("const OTHER_SUBJECT"));
  let sec = null;
  block.split("\n").forEach(line => {
    const h = line.match(/^\s*([a-z]+):\s*\{/); if (h) { sec = h[1]; ALIAS[sec] = {}; return; }
    const a = line.match(/"([^"]+)":\s*"([^"]+)"/); if (a && sec) ALIAS[sec][a[1]] = a[2];
  });
}
function home(sec, raw) {
  const name = ((ALIAS[sec] || {})[raw]) || raw || "Untagged";
  const subjects = SYLLABUS[sec] || [];
  for (const su of subjects) for (const t of su.topics) if (t === name) return t;
  const low = String(name).toLowerCase();
  for (const su of subjects) for (const t of su.topics) {
    const tl = t.toLowerCase();
    if (tl === low || tl.indexOf(low) >= 0 || low.indexOf(tl) >= 0) return t;
  }
  return null;
}

const FLOOR = 8;   // fewer than this and a topic cannot be drilled meaningfully
const counts = {}, orphans = {};
SETS.forEach(s => (s.questions || []).forEach(q => {
  const t = home(s.section, q.topic);
  if (!t) { orphans[s.section + " :: " + q.topic] = (orphans[s.section + " :: " + q.topic] || 0) + 1; return; }
  counts[s.section + " :: " + t] = (counts[s.section + " :: " + t] || 0) + 1;
}));

const problems = [], notes = [];
Object.keys(SYLLABUS).forEach(sec => {
  console.log(`\n--- ${sec} ---`);
  SYLLABUS[sec].forEach(su => su.topics.forEach(t => {
    const n = counts[sec + " :: " + t] || 0;
    const flag = n === 0 ? "  <-- EMPTY" : n < FLOOR ? "  <-- thin" : "";
    console.log(`  ${String(n).padStart(4)}  ${t}${flag}`);
    if (n === 0) problems.push(`${sec} topic "${t}" is in the syllabus but has no questions`);
    else if (n < FLOOR) problems.push(`${sec} topic "${t}" has only ${n} question${n === 1 ? "" : "s"} (floor ${FLOOR})`);
  }));
});
Object.keys(orphans).forEach(k => problems.push(`${orphans[k]} question${orphans[k] === 1 ? "" : "s"} tagged "${k}" resolve to no syllabus topic — they land under "Other topics"`));

console.log(`\n=== SYLLABUS PROBLEMS (${problems.length}) ===`);
console.log(problems.length ? problems.map(p => "  " + p).join("\n") : "  none");
process.exit(problems.length ? 1 : 0);
