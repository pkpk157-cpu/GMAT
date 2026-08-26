/* Compare the bank's stored answers against the keys printed in the sources. */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
["sets.js","sets-extra.js","sets-rc.js","sets-di.js","sets-di2.js","sets-di3.js","sets-quant-live.js","sets-quant-live2.js","sets-quant-700.js","sets-cr-2person.js","sets-cr-700a.js","sets-cr-700b.js","sets-cr-700c.js"]
  .forEach(f => eval(fs.readFileSync(path.join(ROOT, f), "utf8")));
const b = window.GMAT_SETS;
(window.GMAT_SETS_NEW||[]).forEach(s => { if (!b.some(y => y.id === s.id)) b.push(s); });
const KEYS = require("./source-keys.js");

let checked = 0, skipped = 0; const bad = [];
Object.keys(KEYS).forEach(id => {
  const set = b.find(s => s.id === id);
  if (!set) { bad.push(id + ": set not found"); return; }
  const keys = KEYS[id];
  if (keys === null) { skipped += set.questions.length; return; }
  if (keys.length !== set.questions.length) {
    bad.push(id + ": source key has " + keys.length + " entries but the set has " + set.questions.length);
    return;
  }
  set.questions.forEach((q, i) => {
    checked++;
    if (q.correct !== keys[i]) bad.push(id + " #" + q.n + ": stored " + q.correct + ", source key " + keys[i]);
  });
});
console.log("checked against printed source keys:", checked, "| agree:", checked - bad.length, "| disagree:", bad.length,
            "| no printed key to compare:", skipped);
bad.forEach(x => console.log("  " + x));
process.exit(bad.length ? 1 : 0);
