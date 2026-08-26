/* Which questions does verify/answers.js actually cover? */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
["sets.js","sets-extra.js","sets-rc.js","sets-di.js","sets-di2.js","sets-di3.js","sets-quant-live.js","sets-quant-live2.js","sets-quant-700.js","sets-cr-2person.js","sets-cr-700a.js","sets-cr-700b.js","sets-cr-700c.js","sets-cr-700d.js"]
  .forEach(f => eval(fs.readFileSync(path.join(ROOT, f), "utf8")));
const b = window.GMAT_SETS;
(window.GMAT_SETS_EXTRA||[]).forEach(x=>{const s=b.find(y=>y.id===x.setId); if(s) {let nx=s.questions.reduce((m,q)=>Math.max(m,q.n||0),0); x.add.forEach(q=>s.questions.push(Object.assign({n:++nx},q)));}});
(window.GMAT_SETS_NEW||[]).forEach(s=>{ if(!b.some(y=>y.id===s.id)) b.push(s); });
const { CASES } = require("./answers.js");
const have = new Set(CASES.map(c => c[0] + "#" + c[1]));

let tot = 0, cov = 0; const gaps = {};
b.forEach(s => s.questions.forEach(q => {
  tot++;
  const computational = s.section === "quant" || s.section === "data";
  if (!computational) return;
  if (have.has(s.id + "#" + q.n)) cov++;
  else (gaps[s.id] = gaps[s.id] || []).push(q.n);
}));
const compTotal = b.filter(s => s.section==="quant"||s.section==="data").reduce((a,s)=>a+s.questions.length,0);
console.log("bank total:", tot, "| quant+data:", compTotal, "| covered by verify/:", cov, "| uncovered:", compTotal - cov);
console.log("\nuncovered:");
Object.keys(gaps).forEach(k => console.log("  " + k.padEnd(26) + gaps[k].length + "  " + (gaps[k].length > 14 ? gaps[k].slice(0,14).join(",")+"…" : gaps[k].join(","))));
