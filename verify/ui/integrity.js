/* Static integrity audit of the question bank and set metadata. */
global.window = {};
['./sets.js', './sets-extra.js', './sets-rc.js', './sets-di.js', './sets-di2.js', './sets-di3.js',
 './sets-quant-live.js', './sets-quant-live2.js', './sets-quant-700.js', './sets-cr-2person.js', './sets-cr-700a.js', './sets-cr-700b.js', './sets-cr-700c.js', './sets-cr-700d.js', './sets-rc-700.js'].forEach(f => {
  try { require(require('path').join(__dirname, '..', '..', f.slice(2))); } catch (e) { console.log('LOAD FAIL', f, e.message); }
});

const sets = window.GMAT_SETS;
(window.GMAT_SETS_EXTRA || []).forEach(x => {
  const set = sets.find(s => s.id === x.setId);
  if (!set) return console.log('EXTRA targets unknown set:', x.setId);
  let next = set.questions.reduce((m, q) => Math.max(m, q.n || 0), 0);
  x.add.forEach(q => set.questions.push(Object.assign({ n: ++next }, q)));
});
(window.GMAT_SETS_NEW || []).forEach(s => sets.push(s));

const P = [];
const bad = (m) => P.push(m);
const LETTERS = 'ABCDE';
const SECTIONS = new Set(['quant', 'data', 'rc', 'cr']);

const ids = new Map();
let totalQ = 0;

sets.forEach(s => {
  const where = s.id;
  if (!s.id) bad('set with no id: ' + (s.title || '?'));
  if (ids.has(s.id)) bad('duplicate set id: ' + s.id);
  ids.set(s.id, true);
  if (!s.title) bad(`${where}: no title`);
  if (!SECTIONS.has(s.section)) bad(`${where}: section "${s.section}" is not one of quant/data/rc/cr`);
  if (!Array.isArray(s.questions) || !s.questions.length) { bad(`${where}: no questions`); return; }

  const seenN = new Set();
  const seenStem = new Map();
  s.questions.forEach(q => {
    totalQ++;
    const at = `${where}#${q.n}`;
    if (q.n == null) bad(`${where}: a question has no n`);
    if (seenN.has(q.n)) bad(`${at}: duplicate question number`);
    seenN.add(q.n);

    if (!q.text || !String(q.text).trim()) bad(`${at}: empty text`);
    if (!Array.isArray(q.choices) || q.choices.length < 2) { bad(`${at}: fewer than 2 choices`); return; }
    const n = q.choices.length;
    if (n > 5) bad(`${at}: ${n} choices (max 5)`);
    if (q.options != null && q.options !== n) bad(`${at}: options=${q.options} but ${n} choices`);

    if (!q.correct) bad(`${at}: no correct answer`);
    else {
      const idx = LETTERS.indexOf(q.correct);
      if (idx < 0) bad(`${at}: correct="${q.correct}" is not A-E`);
      else if (idx >= n) bad(`${at}: correct=${q.correct} but only ${n} choices`);
    }

    q.choices.forEach((c, i) => {
      if (c == null || !String(c).trim()) bad(`${at}: choice ${LETTERS[i]} is empty`);
    });
    // Identical choices make a question unanswerable.
    const norm = q.choices.map(c => String(c).trim().toLowerCase().replace(/\s+/g, ' '));
    norm.forEach((c, i) => {
      const j = norm.indexOf(c);
      if (j !== i) bad(`${at}: choices ${LETTERS[j]} and ${LETTERS[i]} are identical`);
    });

    if (!q.expl || !String(q.expl).trim()) bad(`${at}: no explanation`);
    if (q.level && !['easy', 'medium', 'hard'].includes(q.level)) bad(`${at}: level="${q.level}"`);
    if (!q.topic || !String(q.topic).trim()) bad(`${at}: no topic`);

    // A stem repeated verbatim inside one set is a transcription slip.
    const stem = String(q.text).trim().toLowerCase().replace(/\s+/g, ' ');
    if (stem.length > 60) {
      if (seenStem.has(stem)) bad(`${at}: same stem as #${seenStem.get(stem)}`);
      else seenStem.set(stem, q.n);
    }

    // Unbalanced [[ ]] emphasis renders as literal brackets.
    for (const [field, v] of [['text', q.text], ['expl', q.expl], ['hint', q.hint]]) {
      if (v == null) continue;
      const o = (String(v).match(/\[\[/g) || []).length, c2 = (String(v).match(/\]\]/g) || []).length;
      if (o !== c2) bad(`${at}: unbalanced [[ ]] in ${field} (${o} open, ${c2} close)`);
    }
    // Unbalanced KaTeX delimiters throw at typeset time.
    for (const [field, v] of [['text', q.text], ['expl', q.expl], ['hint', q.hint]]) {
      if (v == null) continue;
      const o = (String(v).match(/\\\(/g) || []).length, c2 = (String(v).match(/\\\)/g) || []).length;
      if (o !== c2) bad(`${at}: unbalanced \\( \\) in ${field} (${o} open, ${c2} close)`);
    }
  });

  if (s.passage) {
    if (!Array.isArray(s.passage.paras) || !s.passage.paras.length) bad(`${where}: passage has no paragraphs`);
    else s.passage.paras.forEach((p, i) => { if (!p || !String(p).trim()) bad(`${where}: passage paragraph ${i + 1} is empty`); });
  }
});

// Answer-key spread: a set whose key is overwhelmingly one letter is suspect.
sets.forEach(s => {
  const tally = {};
  s.questions.forEach(q => { tally[q.correct] = (tally[q.correct] || 0) + 1; });
  const n = s.questions.length;
  if (n >= 8) {
    const [letter, c] = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
    if (c / n > 0.6) bad(`${s.id}: ${c}/${n} answers are ${letter} — check the key`);
  }
});

console.log(`sets: ${sets.length}  questions: ${totalQ}`);
console.log('\n=== INTEGRITY PROBLEMS (' + P.length + ') ===');
P.forEach(x => console.log('  ' + x));
if (!P.length) console.log('  none');
