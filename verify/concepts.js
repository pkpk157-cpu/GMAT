/* Health check for the concept-guide layer (concepts.js).

   The guides are read-only prose, so nothing here can throw at runtime — which
   is exactly why mistakes in them are invisible until a reader hits one. This
   check catches the ways a guide can be quietly broken:

     - a block whose type the renderer does not know (it renders as nothing)
     - a block missing the field its type needs, or a table row whose length
       does not match its header
     - unbalanced \( \) math, or a display \[ \] inside inline prose, which
       reaches the screen as raw backslashes
     - a worked example whose answer letter is outside its own choice list
     - duplicate guide or part ids (progress is stored per id, so a duplicate
       makes two sections share one "read" tick)
     - a part whose title does not resolve to a practice set, or resolves only
       by a tie-break — the "Ready to practice this topic?" button is wired by
       keyword overlap between the part title and the practice set title, so a
       part that matches nothing loses its button and a part that ties can
       silently point at the wrong topic.

   It does NOT check that the mathematics or the advice is right. */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};

/* Load the data files in the order index.html loads them, not alphabetically.
   sets-rc.js assigns window.GMAT_SETS_NEW rather than concatenating onto it,
   so a different order silently drops whichever sets were registered before it
   — which is how coordinate geometry went missing from an earlier run of this
   check. Reading the order out of the page keeps the two in step. */
const PAGE = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const SET_FILES = [...PAGE.matchAll(/<script src="(sets[^"]*\.js)"><\/script>/g)].map(m => m[1]);
if (!SET_FILES.length) { console.error("no set files found in index.html"); process.exit(2); }
SET_FILES.forEach(f => require(path.join(ROOT, f)));
require(path.join(ROOT, "concepts.js"));
require(path.join(ROOT, "tricks.js"));

/* Mirror the merge index.html performs at load: expansion questions in
   sets-extra.js and whole new sets in GMAT_SETS_NEW only become part of the
   bank afterwards, and some topics (coordinate geometry among them) live
   entirely in those. Reading GMAT_SETS raw would hide them. */
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
/* Concept guides and trick guides are the same shape and share one reader, so
   the structural checks below run over both. They part company in two places:
   a trick's title is not meant to name a practice topic, and topic coverage is
   a promise about the theory guides — a shortcut is not a substitute for the
   section that teaches the topic. */
const CONCEPT_GUIDES = window.GMAT_CONCEPTS || [];
const TRICK_GUIDES = window.GMAT_TRICKS || [];
const GUIDES = [...CONCEPT_GUIDES, ...TRICK_GUIDES];
const problems = [], notes = [];
const bad = (where, msg) => problems.push(`${where}: ${msg}`);
// A strategy section ("Pacing", "How CR works") is not meant to have a practice
// set, so an unmatched title is worth printing but is not a failure.
const note = (where, msg) => notes.push(`${where}: ${msg}`);

/* ---- the app's own keyword matcher, mirrored from index.html ---- */
const CN_STOP = new Set(["the","of","a","an","and","to","in","is","are","for","with","by","on","or",
  "questions","question","argument","arguments","exercise","set","must","true","how","works","work",
  "what","its","concepts","concept","reasoning","data","insights","study","skip"]);
const cnKeywords = s => (String(s).toLowerCase().match(/[a-z]+/g) || [])
  .filter(w => w.length > 2 && !CN_STOP.has(w));

/* Practice is regrouped by question topic, so the titles a concept part is
   matched against are the topic names, not the source-file titles. Aliases
   mirror TOPIC_ALIAS in index.html. */
const TOPIC_ALIAS = {
  quant: { "Combinatorics":"Permutations & combinations", "Inequalities":"Inequalities & absolute value",
    "Number properties":"Integers, factors & multiples", "Interest & growth":"Simple & compound interest",
    "Functions & symbols":"Functions & custom symbols", "Percentages":"Percentages & percent change",
    "Statistics":"Mean, median & mode", "Sets & overlapping groups":"Overlapping sets (Venn)",
    "Algebra & word problems":"Linear equations", "Mixtures & concentration":"Mixtures & solutions" },
  rc: { "Function / purpose of detail":"Function of a detail or paragraph",
    "Tone / attitude":"Author's tone & attitude" }
};
// Topic sets in first-appearance order, which is the order the app builds them in.
const topicSets = [];
const seenTopic = new Set();
SETS.forEach(set => (set.questions || []).forEach(q => {
  const name = ((TOPIC_ALIAS[set.section] || {})[q.topic]) || q.topic || "Untagged";
  const key = set.section + "::" + name;
  if (!seenTopic.has(key)) { seenTopic.add(key); topicSets.push({ section: set.section, title: name, n: 0 }); }
  topicSets.find(t => t.section === set.section && t.title === name).n++;
}));

function practiceMatch(partTitle, section) {
  const pw = cnKeywords(partTitle);
  let best = null, score = 0, ties = 0;
  topicSets.filter(t => t.section === section).forEach(t => {
    const sw = new Set(cnKeywords(t.title));
    let sc = 0; pw.forEach(w => { if (sw.has(w)) sc++; });
    if (sc > score) { score = sc; best = t; ties = 1; }
    else if (sc === score && sc > 0) ties++;
  });
  return { best, score, ties };
}

/* ---- block validation ---- */
const KNOWN = new Set(["h","p","ul","ol","formula","tip","warn","note","table","eg"]);
const LET = ["A","B","C","D","E","F","G","H"];

/* Roughly how long a section takes to study, not to skim: prose at about 110
   words a minute, with a formula, a table and a worked example each costing
   more than the words they contain. */
function blockWords(b) {
  let s = "";
  if (b.x) s += b.x;
  if (b.items) s += b.items.join(" ");
  if (b.head) s += b.head.join(" ") + (b.rows || []).map(r => r.join(" ")).join(" ");
  if (b.q) s += b.q + (b.choices || []).join(" ") + (b.why || "");
  return s.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
}
function estimateMins(part) {
  let w = 0, f = 0, t = 0, e = 0;
  part.blocks.forEach(b => { w += blockWords(b); if (b.t === "formula") f++; if (b.t === "table") t++; if (b.t === "eg") e++; });
  return Math.max(2, Math.min(8, Math.round((w + 25 * f + 30 * t + 60 * e) / 110)));
}

/* Block text is injected with innerHTML, so a bare "<" opens a tag and the
   browser swallows whatever follows — which quietly eats the rest of a math
   span. Inequalities have to be written &lt; and &gt;. */
const INLINE_TAG = /<\/?(?:b|i|br)\s*\/?>/g;
function checkHtml(where, text) {
  const rest = String(text == null ? "" : text).replace(INLINE_TAG, "");
  if (rest.indexOf("<") >= 0 || rest.indexOf(">") >= 0)
    bad(where, `raw "<" or ">" outside an inline tag — write &lt; / &gt; or the browser eats the rest of the span`);
}

function checkMath(where, text) {
  const s = String(text == null ? "" : text);
  checkHtml(where, s);
  const open = (s.match(/\\\(/g) || []).length, close = (s.match(/\\\)/g) || []).length;
  if (open !== close) bad(where, `unbalanced inline math — ${open} "\\(" vs ${close} "\\)"`);
  if (/\\\[|\\\]/.test(s)) bad(where, `display math \\[ \\] inside prose — use a "formula" block instead`);
  // Inside \( \) a backslash is LaTeX and KaTeX consumes it; outside, it reaches
  // the screen as a literal. So strip the math spans and inspect what is left.
  const prose = s.replace(/\\\([\s\S]*?\\\)/g, "");
  if (prose.indexOf("\\") >= 0) bad(where, `a literal backslash outside math reaches the screen — ${s.slice(0, 90)}`);
}

function checkBlock(where, b) {
  if (!b || typeof b !== "object") return bad(where, "block is not an object");
  if (!KNOWN.has(b.t)) return bad(where, `unknown block type "${b.t}" — the renderer drops it silently`);
  const needsX = ["h","p","formula","tip","warn","note"];
  if (needsX.includes(b.t)) {
    if (!b.x || !String(b.x).trim()) return bad(where, `"${b.t}" block has no text`);
    if (b.t === "formula") { // a formula is raw LaTeX; delimiters are added by the renderer
      // "\\[4pt]" is a row separator with spacing, not a display delimiter.
      const noRowBreaks = b.x.replace(/\\\\\[[^\]]*\]/g, "");
      if (/\\\(|\\\)|\\\[|\\\]/.test(noRowBreaks)) bad(where, `"formula" block carries its own delimiters — the renderer adds \\[ \\]`);
      checkHtml(where, b.x);
    } else checkMath(where, b.x);
  }
  if (b.t === "ul" || b.t === "ol") {
    if (!Array.isArray(b.items) || !b.items.length) return bad(where, `"${b.t}" block has no items`);
    b.items.forEach((it, i) => { if (!String(it || "").trim()) bad(where, `item ${i + 1} is empty`); else checkMath(`${where} item ${i + 1}`, it); });
  }
  if (b.t === "table") {
    if (!Array.isArray(b.head) || !b.head.length) return bad(where, "table has no header");
    if (!Array.isArray(b.rows) || !b.rows.length) return bad(where, "table has no rows");
    b.rows.forEach((r, i) => {
      if (!Array.isArray(r) || r.length !== b.head.length)
        bad(where, `table row ${i + 1} has ${Array.isArray(r) ? r.length : "?"} cells, header has ${b.head.length}`);
      else r.forEach(c => checkMath(`${where} row ${i + 1}`, c));
    });
  }
  if (b.t === "eg") {
    if (!b.q || !String(b.q).trim()) bad(where, "worked example has no question");
    if (!Array.isArray(b.choices) || b.choices.length < 2) bad(where, "worked example needs at least two choices");
    if (!b.why || !String(b.why).trim()) bad(where, "worked example has no explanation");
    const ans = String(b.ans || "").toUpperCase();
    const idx = LET.indexOf(ans);
    if (!ans) bad(where, "worked example has no answer letter");
    else if (idx < 0 || (Array.isArray(b.choices) && idx >= b.choices.length))
      bad(where, `worked example answer "${ans}" is outside its own ${(b.choices || []).length} choices`);
    checkMath(where + " (q)", b.q); checkMath(where + " (why)", b.why);
    (b.choices || []).forEach((c, i) => checkMath(`${where} choice ${LET[i]}`, c));
  }
}

/* ---- walk the guides ---- */
const guideIds = new Set();
GUIDES.forEach(g => {
  const gw = `guide "${g.id}"`;
  if (!g.id) return bad("a guide", "has no id");
  if (guideIds.has(g.id)) bad(gw, "duplicate guide id — read progress is stored per id");
  guideIds.add(g.id);
  if (!g.section) bad(gw, "has no section, so it appears on no tab");
  if (!g.title || !String(g.title).trim()) bad(gw, "has no title");
  if (!Array.isArray(g.parts) || !g.parts.length) return bad(gw, "has no parts, so the app filters it out");

  const partIds = new Set();
  g.parts.forEach((p, pi) => {
    const pw = `${g.id} › ${p.id || "part " + (pi + 1)}`;
    if (!p.id) bad(pw, "part has no id");
    else if (partIds.has(p.id)) bad(pw, "duplicate part id within the guide");
    partIds.add(p.id);
    if (!p.title || !String(p.title).trim()) bad(pw, "part has no title");
    if (p.mins != null && !(Number.isInteger(p.mins) && p.mins > 0)) bad(pw, `"mins" should be a positive integer, got ${p.mins}`);
    // The "N min read" label goes stale silently when a section is extended.
    if (p.mins != null && Array.isArray(p.blocks)) {
      const want = estimateMins(p);
      if (Math.abs(p.mins - want) > 1) note(pw, `"${p.mins} min" looks off for this much content — about ${want} would fit`);
    }
    if (!Array.isArray(p.blocks) || !p.blocks.length) return bad(pw, "part has no blocks");
    p.blocks.forEach((b, bi) => checkBlock(`${pw} block ${bi + 1}`, b));

    // The practice button is wired by title keywords; report where each part
    // lands. A trick is a technique, not a topic, so its title is not expected
    // to match a practice set and an unmatched one is not worth reporting.
    if (g.kind === "trick") return;
    const m = practiceMatch(p.title, g.section);
    if (!m.best) note(pw, `no practice topic matches the title — no "Ready to practice" button (fine for a strategy section)`);
    else if (m.ties > 1) note(pw, `title ties ${m.ties} practice topics at score ${m.score} ("${m.best.title}" wins on load order)`);
  });
});

/* ---- topic coverage ----
   The point of the topic guides is that every topic a reader can practise has
   a concept section behind it. A topic counts as covered when a concept part's
   title matches the topic itself, or matches the syllabus subject the topic
   sits under — a Data Insights section called "Table Analysis" really does
   teach "Sorting & filtering", even though the two titles share no word. */
const SUBJECT_OF = {};   // "section::topic" -> subject name
{
  let sec = null;
  PAGE.split("\n").forEach(line => {
    const m = line.match(/^\s*\{\s*id:"([a-z]+)",\s*nav:/);
    if (m) sec = m[1];
    const s = line.match(/\{\s*name:"([^"]+)",\s*topics:\[([^\]]*)\]/);
    if (s && sec) [...s[2].matchAll(/"([^"]+)"/g)].forEach(t => { SUBJECT_OF[sec + "::" + t[1]] = s[1]; });
  });
}
const coverage = {};
[...new Set(topicSets.map(t => t.section))].forEach(sec => {
  const partWords = [];
  CONCEPT_GUIDES.filter(g => g.section === sec).forEach(g => g.parts.forEach(p => partWords.push(new Set(cnKeywords(p.title)))));
  if (!partWords.length) return;
  const hit = words => words.some(w => partWords.some(s => s.has(w)));
  const mine = topicSets.filter(t => t.section === sec);
  const uncovered = mine.filter(t =>
    !hit(cnKeywords(t.title)) && !hit(cnKeywords(SUBJECT_OF[sec + "::" + t.title] || "")));
  coverage[sec] = { total: mine.length, uncovered };
});

/* ---- report ---- */
console.log(`\nchecked ${GUIDES.length} guides (${CONCEPT_GUIDES.length} concept, ${TRICK_GUIDES.length} trick), ${GUIDES.reduce((a, g) => a + (g.parts || []).length, 0)} sections`);
Object.entries(coverage).forEach(([sec, c]) => {
  console.log(`  ${sec}: ${c.total - c.uncovered.length}/${c.total} practice topics have a concept section` +
    (c.uncovered.length ? ` — missing: ${c.uncovered.map(t => `${t.title} (${t.n}q)`).join(", ")}` : ""));
  c.uncovered.forEach(t => note(`${sec} topic "${t.title}"`, `${t.n} question${t.n === 1 ? "" : "s"} to practise, but no concept section title matches it or its subject`));
});
const secs = [...new Set(GUIDES.map(g => g.section))];
secs.forEach(s => {
  const gs = GUIDES.filter(g => g.section === s);
  console.log(`  ${s}: ${gs.length} guide${gs.length === 1 ? "" : "s"}, ${gs.reduce((a, g) => a + g.parts.length, 0)} sections`);
});
if (process.argv.includes("--links")) {
  console.log("\npractice links:");
  GUIDES.forEach(g => g.parts.forEach(p => {
    const m = practiceMatch(p.title, g.section);
    console.log(`  ${(g.id + " › " + p.title).padEnd(56)} -> ${m.best ? m.best.title + " (" + m.best.n + "q)" : "— none —"}`);
  }));
}
if (notes.length) {
  console.log(`\n--- notes (${notes.length}) ---`);
  notes.forEach(n => console.log("  " + n));
}
console.log(`\n=== CONCEPT GUIDE PROBLEMS (${problems.length}) ===`);
if (!problems.length) console.log("  none");
else problems.forEach(p => console.log("  " + p));
process.exit(problems.length ? 1 : 0);
