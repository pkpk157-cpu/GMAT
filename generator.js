/* GMAT Prep — offline question generator.

   Every generator below builds a question from random parameters and then
   *computes* its own answer, so a generated question can never carry a wrong
   key the way a transcribed one can. Distractors are produced from the
   mistakes the question actually invites — dropping a unit conversion, using
   the wrong base for a percentage, averaging two speeds — rather than from
   random noise, which is what makes them behave like real GMAT traps.

   Exposes window.GMAT_GEN = { TOPICS, makeSet }.
   A generated set has the same shape as a hand-authored one, so it runs
   through the ordinary runner with no special-casing. */
(function () {
  "use strict";

  /* ---------- seeded RNG (mulberry32) so a set is reproducible ---------- */
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const mk = (r) => ({
    int: (lo, hi) => lo + Math.floor(r() * (hi - lo + 1)),
    pick: (arr) => arr[Math.floor(r() * arr.length)],
    shuffle: (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
    raw: r
  });

  const LET = ["A", "B", "C", "D", "E"];
  const money = (n) => "$" + Number(n).toLocaleString("en-US");
  const num = (n) => Number(n).toLocaleString("en-US");
  const pct = (n) => (Math.round(n * 100) / 100) + "%";
  const frac = (a, b) => "\\(\\tfrac{" + a + "}{" + b + "}\\)";
  const g = (a, b) => b ? g(b, a % b) : a;              // gcd
  const reduce = (a, b) => { const d = g(Math.abs(a), Math.abs(b)) || 1; return [a / d, b / d]; };

  /* Build the five choices. `wrong` may contain duplicates or collisions with
     the answer; they are filtered, and any shortfall is topped up with nearby
     values so a question is never emitted with fewer than five options. */
  function mc(R, correct, wrong, fmt, nudge) {
    fmt = fmt || String;
    const key = fmt(correct);
    const seen = new Set([key]);
    const out = [];
    for (const w of wrong) {
      if (w === null || w === undefined || !isFinite(w) && typeof w === "number") continue;
      const s = fmt(w);
      if (seen.has(s)) continue;
      seen.add(s); out.push(s);
      if (out.length === 4) break;
    }
    let step = 1;
    while (out.length < 4) {
      const cand = nudge ? nudge(step) : (typeof correct === "number" ? correct + step * (step % 2 ? 1 : -1) : null);
      step++;
      if (step > 60 || cand === null) break;
      const s = fmt(cand);
      if (seen.has(s)) continue;
      seen.add(s); out.push(s);
    }
    if (out.length < 4) return null;                     // caller re-rolls
    const choices = R.shuffle(out.concat([key]));
    return { choices: choices, correct: LET[choices.indexOf(key)] };
  }

  const Q = (topic, level, text, built, hint, expl) =>
    built && { topic: topic, level: level, options: 5, text: text,
               choices: built.choices, correct: built.correct, hint: hint, expl: expl };

  /* ===================================================================== */
  /* Quant generators                                                       */
  /* ===================================================================== */

  function genPercentChange(R) {
    const base = R.int(4, 40) * 25;
    const up = R.pick([10, 15, 20, 25, 30, 40, 50]);
    const down = R.pick([10, 15, 20, 25, 30]);
    const after = base * (1 + up / 100) * (1 - down / 100);
    const net = Math.round((after / base - 1) * 10000) / 100;
    const built = mc(R, net,
      [up - down, -(down - up), Math.round((up - down - up * down / 100) * -100) / 100, net + 1, net - 1, up + down],
      (v) => (v > 0 ? "+" : "") + (Math.round(v * 100) / 100) + "%");
    return Q("Percentages", "medium",
      "The price of an item is " + money(base) + ". It rises by " + up + " percent and the new price then falls by " + down + " percent. The final price is what percent greater or less than the original price?",
      built,
      "Percent changes multiply — they do not add, because the second one applies to the already-changed price.",
      "Step 1 — Apply the multipliers in order: \\(" + base + " \\times " + (1 + up / 100) + " \\times " + (1 - down / 100) + " = " + (Math.round(after * 100) / 100) + "\\).\n" +
      "Step 2 — Compare with the original: \\(" + (Math.round(after * 100) / 100) + " \\div " + base + " = " + (Math.round(after / base * 10000) / 10000) + "\\).\n" +
      "Step 3 — That is a net change of " + (net > 0 ? "+" : "") + net + "%. (Adding " + up + " and \\(-" + down + "\\) gives " + (up - down) + "%, which is the trap — it ignores that the fall applies to the larger price.)");
  }

  function genProfitLoss(R) {
    const cost = R.int(2, 30) * 20;
    const markup = R.pick([20, 25, 40, 50, 60, 75]);
    const disc = R.pick([10, 20, 25, 30]);
    const list = cost * (1 + markup / 100);
    const sale = list * (1 - disc / 100);
    const profit = Math.round((sale - cost) * 100) / 100;
    const built = mc(R, profit,
      [Math.round((list - cost) * 100) / 100, Math.round((cost * (markup - disc) / 100) * 100) / 100,
       Math.round((sale - list) * 100) / 100, Math.round(sale * 100) / 100, profit + cost * 0.05],
      (v) => (v < 0 ? "\u2212$" : "$") + Number(Math.abs(Math.round(v * 100) / 100)).toLocaleString("en-US"));
    return Q("Profit & loss", "medium",
      "A shopkeeper buys an article for " + money(cost) + " and marks it up by " + markup + " percent. At a sale the marked price is discounted by " + disc + " percent. What is the shopkeeper's profit on the sale?",
      built,
      "Work forward: cost \u2192 marked price \u2192 sale price, then subtract the cost once at the end.",
      "Step 1 — Marked price \\(= " + cost + " \\times " + (1 + markup / 100) + " = " + list + "\\).\n" +
      "Step 2 — Sale price \\(= " + list + " \\times " + (1 - disc / 100) + " = " + (Math.round(sale * 100) / 100) + "\\).\n" +
      "Step 3 — Profit \\(= " + (Math.round(sale * 100) / 100) + " - " + cost + " = " + profit + "\\).");
  }

  function genAvgSpeed(R) {
    const d = R.pick([12, 18, 24, 30, 36, 48, 60]);
    let s1 = R.pick([4, 6, 8, 10, 12, 15, 20]), s2 = R.pick([4, 6, 8, 10, 12, 15, 20]);
    if (s1 === s2) s2 = s1 + 5;
    const avg = 2 * s1 * s2 / (s1 + s2);
    const built = mc(R, avg,
      [(s1 + s2) / 2, Math.min(s1, s2), Math.max(s1, s2), (s1 + s2) / 2 + 1, 2 * d / (d / s1 + d / s2) + 2],
      (v) => (Math.round(v * 100) / 100) + " km/h");
    return Q("Speed, distance & time", "medium",
      "A cyclist rides " + d + " km from town A to town B at " + s1 + " km per hour and returns along the same road at " + s2 + " km per hour. What is the average speed for the whole trip?",
      built,
      "Average speed is total distance over total time — never the average of the two speeds.",
      "Step 1 — Time out \\(= " + d + "/" + s1 + "\\) h; time back \\(= " + d + "/" + s2 + "\\) h.\n" +
      "Step 2 — Total distance \\(= " + (2 * d) + "\\) km over total time \\(= " + (Math.round((d / s1 + d / s2) * 1000) / 1000) + "\\) h.\n" +
      "Step 3 — Average \\(= " + (Math.round(avg * 100) / 100) + "\\) km/h. Note this is the harmonic mean \\(\\tfrac{2s_1s_2}{s_1+s_2}\\), not \\(\\tfrac{s_1+s_2}{2} = " + ((s1 + s2) / 2) + "\\).");
  }

  function genWorkRate(R) {
    const a = R.pick([4, 5, 6, 8, 9, 10, 12, 15]);
    let b = R.pick([6, 8, 10, 12, 15, 18, 20, 24]);
    if (a === b) b = a + 6;
    const t = a * b / (a + b);
    const built = mc(R, t,
      [(a + b) / 2, a + b, Math.abs(b - a), Math.min(a, b) - 1, (a * b) / Math.abs(b - a)],
      (v) => { const x = Math.round(v * 100) / 100; return x + " day" + (x === 1 ? "" : "s"); });
    return Q("Work & time", "medium",
      "Working alone, machine A can complete a job in " + a + " days and machine B can complete the same job in " + b + " days. Working together at their constant rates, how long will the two machines take to complete the job?",
      built,
      "Add the rates (jobs per day), not the times.",
      "Step 1 — Rates: \\(\\tfrac1{" + a + "}\\) and \\(\\tfrac1{" + b + "}\\) of the job per day.\n" +
      "Step 2 — Combined rate \\(= \\tfrac1{" + a + "} + \\tfrac1{" + b + "} = \\tfrac{" + (a + b) + "}{" + (a * b) + "}\\).\n" +
      "Step 3 — Time \\(= \\tfrac{" + (a * b) + "}{" + (a + b) + "} = " + (Math.round(t * 100) / 100) + "\\) days.");
  }

  function genMixture(R) {
    const c1 = R.pick([10, 15, 20, 25, 30]);
    const c2 = R.pick([40, 50, 60, 70, 80]);
    const v1 = R.int(2, 12) * 5, v2 = R.int(2, 12) * 5;
    const res = (c1 * v1 + c2 * v2) / (v1 + v2);
    const built = mc(R, res,
      [(c1 + c2) / 2, c1 + c2 - res, (c1 * v2 + c2 * v1) / (v1 + v2), res + 5, res - 5],
      (v) => (Math.round(v * 100) / 100) + "%");
    return Q("Mixtures & concentration", "medium",
      num(v1) + " litres of a " + c1 + "% acid solution are mixed with " + num(v2) + " litres of a " + c2 + "% acid solution. What is the concentration of acid in the resulting mixture?",
      built,
      "Track the litres of pure acid, then divide by the total volume.",
      "Step 1 — Acid from the first solution: \\(" + v1 + " \\times " + (c1 / 100) + " = " + (Math.round(v1 * c1) / 100) + "\\) L.\n" +
      "Step 2 — Acid from the second: \\(" + v2 + " \\times " + (c2 / 100) + " = " + (Math.round(v2 * c2) / 100) + "\\) L.\n" +
      "Step 3 — Concentration \\(= \\tfrac{" + (Math.round((v1 * c1 + v2 * c2)) / 100) + "}{" + (v1 + v2) + "} = " + (Math.round(res * 100) / 100) + "\\%\\). It lands between " + c1 + "% and " + c2 + "%, closer to the larger volume's strength.");
  }

  function genSimpleCompound(R) {
    const p = R.int(2, 40) * 500;
    const rate = R.pick([5, 8, 10, 12, 15, 20]);
    const si = p * rate * 2 / 100;
    const ci = p * (Math.pow(1 + rate / 100, 2) - 1);
    const diff = Math.round((ci - si) * 100) / 100;
    const built = mc(R, diff,
      [Math.round(si * 100) / 100, Math.round(ci * 100) / 100, Math.round(p * rate / 100 * 100) / 100,
       Math.round(diff * 2 * 100) / 100, Math.round(diff / 2 * 100) / 100],
      (v) => "$" + Number(Math.round(v * 100) / 100).toLocaleString("en-US"));
    return Q("Simple & compound interest", "medium",
      money(p) + " is invested for 2 years at " + rate + " percent per year. By how much does the interest earned under annual compounding exceed the interest earned under simple interest?",
      built,
      "The whole gap is the second year's interest on the first year's interest.",
      "Step 1 — Simple interest \\(= " + p + " \\times " + (rate / 100) + " \\times 2 = " + si + "\\).\n" +
      "Step 2 — Compound amount \\(= " + p + "(1 + " + (rate / 100) + ")^2 = " + (Math.round(p * Math.pow(1 + rate / 100, 2) * 100) / 100) + "\\), so interest \\(= " + (Math.round(ci * 100) / 100) + "\\).\n" +
      "Step 3 — Difference \\(= " + diff + "\\), which is exactly \\(" + p + " \\times " + (rate / 100) + "^2\\) — the interest on the first year's interest.");
  }

  function genRatioShare(R) {
    const total = R.int(6, 40) * 100;
    let a = R.int(1, 7), b = R.int(1, 7), c = R.int(1, 7);
    const d = g(g(a, b), c); a /= d; b /= d; c /= d;
    const sum = a + b + c;
    if (total % sum !== 0) return null;
    const share = total / sum * c;
    const built = mc(R, share,
      [total / sum * a, total / sum * b, total / sum, total - share, share + total / sum],
      (v) => money(Math.round(v)));
    return Q("Ratios & proportions", "easy",
      money(total) + " is divided among three people in the ratio " + a + " : " + b + " : " + c + ". How much does the third person receive?",
      built,
      "Add the ratio parts first — that tells you what one part is worth.",
      "Step 1 — Total parts \\(= " + a + " + " + b + " + " + c + " = " + sum + "\\).\n" +
      "Step 2 — One part \\(= " + total + " \\div " + sum + " = " + (total / sum) + "\\).\n" +
      "Step 3 — The third person gets \\(" + c + " \\times " + (total / sum) + " = " + share + "\\).");
  }

  function genAverageReplace(R) {
    const n = R.int(5, 12);
    const avg = R.int(10, 60);
    const delta = R.pick([2, 3, 4, 5, 6]);
    const dir = R.pick([1, -1]);
    const newAvg = avg + dir * delta;
    const change = n * delta * dir;
    const old = R.int(20, 80);
    const repl = old + change;
    const built = mc(R, repl,
      [old - change, old + delta * dir, old + change * 2, old, newAvg],
      (v) => String(Math.round(v)));
    return Q("Averages & statistics", "medium",
      "The average of " + n + " numbers is " + avg + ". One of the numbers, which equals " + old + ", is replaced by a new number, and the average " + (dir > 0 ? "rises" : "falls") + " to " + newAvg + ". What is the new number?",
      built,
      "Only the sum matters — work out how much the total had to move.",
      "Step 1 — The total changes by \\(" + n + " \\times " + (delta * dir) + " = " + change + "\\).\n" +
      "Step 2 — Since only one number changed, that whole shift is the change in that number.\n" +
      "Step 3 — New number \\(= " + old + " + (" + change + ") = " + repl + "\\).");
  }

  function genRemainder(R) {
    const d = R.pick([3, 4, 5, 6, 7, 8, 9, 11]);
    const r1 = R.int(1, d - 1);
    const k = R.int(2, 9);
    const ans = (r1 * k) % d;
    const built = mc(R, ans, [(r1 + k) % d, r1, k % d, (r1 * k) % (d + 1), (ans + 1) % d],
      String, (s) => (ans + s) % d);
    return Q("Number properties", "medium",
      "When the positive integer n is divided by " + d + ", the remainder is " + r1 + ". What is the remainder when " + k + "n is divided by " + d + "?",
      built,
      "Write n in the form \\(" + d + "q + " + r1 + "\\) and multiply through.",
      "Step 1 — \\(n = " + d + "q + " + r1 + "\\) for some integer q.\n" +
      "Step 2 — \\(" + k + "n = " + (d * k) + "q + " + (k * r1) + "\\). The first term is a multiple of " + d + ", so the remainder comes entirely from \\(" + (k * r1) + "\\).\n" +
      "Step 3 — \\(" + (k * r1) + " \\div " + d + "\\) leaves remainder " + ans + ".");
  }

  function genExponent(R) {
    const b = R.pick([2, 3, 5]);
    const x = R.int(3, 9), y = R.int(2, 6);
    const ans = x + y - R.int(1, 2);
    const sub = x + y - ans;
    const built = mc(R, ans, [x + y, x * y, x - y + sub, x + y + sub, Math.abs(x - y)],
      (v) => "\\(" + b + "^{" + v + "}\\)");
    return Q("Exponents & roots", "medium",
      "If \\(" + b + "^{" + x + "} \\times " + b + "^{" + y + "} \\div " + b + "^{" + sub + "} = " + b + "^{k}\\), what is the value of \\(" + b + "^{k}\\)?",
      built,
      "Same base: add the exponents when multiplying, subtract when dividing.",
      "Step 1 — \\(" + b + "^{" + x + "} \\times " + b + "^{" + y + "} = " + b + "^{" + (x + y) + "}\\).\n" +
      "Step 2 — Dividing by \\(" + b + "^{" + sub + "}\\) subtracts: \\(" + (x + y) + " - " + sub + " = " + ans + "\\).\n" +
      "Step 3 — So the expression equals \\(" + b + "^{" + ans + "}\\). Multiplying the exponents (" + (x * y) + ") is the classic trap.");
  }

  function genAges(R) {
    const yrs = R.pick([4, 5, 6, 8, 10, 12]);
    const mult = R.pick([2, 3, 4]);
    // son now = s, father now = f;  f + yrs = mult*(s + yrs);  f = ratioNow * s
    const ratioNow = mult + R.int(1, 4);
    const s = yrs * (mult - 1) / (ratioNow - mult);
    if (!Number.isInteger(s) || s <= 0) return null;
    const f = ratioNow * s;
    const built = mc(R, s, [f, s + yrs, f - s, Math.round(f / 2), s * 2], String);
    return Q("Algebra & word problems", "medium",
      "A father is " + ratioNow + " times as old as his son today. In " + yrs + " years the father will be " + mult + " times as old as his son. How old is the son today?",
      built,
      "Give the son's age one letter and write both sentences as equations.",
      "Step 1 — Let the son be s, so the father is \\(" + ratioNow + "s\\).\n" +
      "Step 2 — In " + yrs + " years: \\(" + ratioNow + "s + " + yrs + " = " + mult + "(s + " + yrs + ")\\).\n" +
      "Step 3 — \\(" + (ratioNow - mult) + "s = " + (yrs * (mult - 1)) + "\\), so \\(s = " + s + "\\) (and the father is " + f + ").");
  }

  function genQuadratic(R) {
    const r1 = R.int(-9, 9), r2 = R.int(-9, 9);
    if (r1 === r2) return null;
    const b = -(r1 + r2), c = r1 * r2;
    const ans = r1 + r2;
    const built = mc(R, ans, [c, -c, b, r1 * r2 + r1 + r2, Math.abs(r1 - r2)], String);
    const sgn = (v, first) => (v < 0 ? " - " + Math.abs(v) : (first ? "" : " + ") + Math.abs(v));
    return Q("Quadratic equations", "medium",
      "If the roots of \\(x^{2}" + (b === 0 ? "" : sgn(b, false) + "x") + sgn(c, false) + " = 0\\) are p and q, what is the value of \\(p + q\\)?",
      built,
      "For \\(x^2 + bx + c = 0\\) the roots sum to \\(-b\\) and multiply to \\(c\\) — no need to solve.",
      "Step 1 — Comparing with \\(x^{2} + bx + c = 0\\): \\(b = " + b + "\\) and \\(c = " + c + "\\).\n" +
      "Step 2 — Sum of roots \\(= -b = " + ans + "\\); product \\(= c = " + c + "\\).\n" +
      "Step 3 — (Factoring confirms it: the roots are " + r1 + " and " + r2 + ".)");
  }

  function genInequality(R) {
    const a = R.pick([2, 3, 4, 5, -2, -3, -4, -5]);
    const b = R.int(-12, 12);
    const c = R.int(-20, 20);
    // a*x + b < c
    const bound = (c - b) / a;
    if (!Number.isInteger(bound)) return null;
    const flip = a < 0;
    const key = (flip ? "x > " : "x < ") + bound;
    const wrong = [(flip ? "x < " : "x > ") + bound, "x < " + (-bound), "x > " + (-bound),
                   (flip ? "x \\ge " : "x \\le ") + bound, "x < " + (bound + 1)];
    const built = mc(R, key, wrong, (v) => "\\(" + v + "\\)");
    return Q("Inequalities", "medium",
      "If \\(" + a + "x " + (b < 0 ? "- " + Math.abs(b) : "+ " + b) + " < " + c + "\\), which of the following describes all values of x?",
      built,
      "Isolate x — and remember what happens to the sign when you divide by a negative.",
      "Step 1 — Subtract " + b + ": \\(" + a + "x < " + (c - b) + "\\).\n" +
      "Step 2 — Divide by " + a + (flip ? ", which is negative, so the inequality flips" : "") + ".\n" +
      "Step 3 — \\(" + key + "\\).");
  }

  function genAbsValue(R) {
    const a = R.int(2, 12), b = R.int(1, 15);
    const roots = [b + a, b - a].sort((x, y) => x - y);
    const ans = roots[1] - roots[0];
    const built = mc(R, ans, [a, b, roots[0] + roots[1], a * 2 + 1, Math.abs(b - a)], String);
    return Q("Absolute value", "medium",
      "If \\(|x - " + b + "| = " + a + "\\), what is the positive difference between the two possible values of x?",
      built,
      "An absolute-value equation splits into two cases, one on each side of the centre.",
      "Step 1 — \\(x - " + b + " = " + a + "\\) gives \\(x = " + (b + a) + "\\).\n" +
      "Step 2 — \\(x - " + b + " = -" + a + "\\) gives \\(x = " + (b - a) + "\\).\n" +
      "Step 3 — The difference is \\(" + roots[1] + " - (" + roots[0] + ") = " + ans + "\\), i.e. twice the " + a + " on the right-hand side.");
  }

  function genProbMarbles(R) {
    const a = R.int(2, 8), b = R.int(2, 8), c = R.int(1, 6);
    const tot = a + b + c;
    const p = [a * (a - 1), tot * (tot - 1)];
    if (p[0] === 0) return null;
    const red = reduce(p[0], p[1]);
    const built = mc(R, red,
      [reduce(a * a, tot * tot), reduce(a, tot), reduce(a * (a - 1), tot * tot),
       reduce(b * (b - 1), tot * (tot - 1)), reduce(2 * a, tot)],
      (v) => frac(v[0], v[1]));
    return Q("Probability", "medium",
      "A jar contains " + a + " red, " + b + " blue and " + c + " green marbles. If two marbles are drawn at random without replacement, what is the probability that both are red?",
      built,
      "Without replacement means the second draw sees one fewer marble in total.",
      "Step 1 — First draw is red with probability \\(\\tfrac{" + a + "}{" + tot + "}\\).\n" +
      "Step 2 — Given that, the second is red with probability \\(\\tfrac{" + (a - 1) + "}{" + (tot - 1) + "}\\).\n" +
      "Step 3 — Multiply: \\(\\tfrac{" + a + "}{" + tot + "} \\times \\tfrac{" + (a - 1) + "}{" + (tot - 1) + "} = " + frac(red[0], red[1]).replace(/\\[()]/g, "") + "\\).");
  }

  function genCombination(R) {
    const m = R.int(4, 9), w = R.int(3, 8), km = R.int(2, 3), kw = R.int(1, 3);
    if (km > m || kw > w) return null;
    const C = (n, k) => { let x = 1; for (let i = 0; i < k; i++) x = x * (n - i) / (i + 1); return Math.round(x); };
    const ans = C(m, km) * C(w, kw);
    const built = mc(R, ans, [C(m + w, km + kw), C(m, km) + C(w, kw), C(m, kw) * C(w, km), ans * 2, C(m, km)], num);
    return Q("Combinatorics", "medium",
      "A committee of " + (km + kw) + " is to be formed from " + m + " men and " + w + " women, and it must contain exactly " + km + " men and " + kw + " women. In how many ways can the committee be formed?",
      built,
      "Choose each group separately, then multiply — order within a committee does not matter.",
      "Step 1 — Choose the men: \\(\\binom{" + m + "}{" + km + "} = " + C(m, km) + "\\).\n" +
      "Step 2 — Choose the women: \\(\\binom{" + w + "}{" + kw + "} = " + C(w, kw) + "\\).\n" +
      "Step 3 — Multiply: \\(" + C(m, km) + " \\times " + C(w, kw) + " = " + ans + "\\). Choosing all " + (km + kw) + " at once from " + (m + w) + " would ignore the required split.");
  }

  function genTwoSets(R) {
    const tot = R.int(6, 30) * 10;
    const both = R.int(1, Math.floor(tot / 6));
    const nei = R.int(0, Math.floor(tot / 8));
    const a = R.int(both + 1, tot - nei - 1);
    const b = tot - nei - a + both;
    if (b <= both || b >= tot) return null;
    const built = mc(R, b, [tot - a, a - both, b + both, b - both, tot - a - nei], num);
    return Q("Sets & overlapping groups", "medium",
      "In a class of " + tot + " students, " + a + " study French and some study German. If " + both + " study both languages and " + nei + " study neither, how many students study German?",
      built,
      "Use \\(|A \\cup B| = |A| + |B| - |A \\cap B|\\), and remember the \"neither\" group sits outside the union.",
      "Step 1 — Students in at least one language: \\(" + tot + " - " + nei + " = " + (tot - nei) + "\\).\n" +
      "Step 2 — \\(" + (tot - nei) + " = " + a + " + G - " + both + "\\).\n" +
      "Step 3 — \\(G = " + (tot - nei) + " - " + a + " + " + both + " = " + b + "\\).");
  }

  function genCoordinate(R) {
    const x1 = R.int(-8, 8), y1 = R.int(-8, 8);
    const trip = R.pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]]);
    const sx = R.pick([1, -1]), sy = R.pick([1, -1]);
    const x2 = x1 + sx * trip[0], y2 = y1 + sy * trip[1];
    const built = mc(R, trip[2], [trip[0] + trip[1], Math.abs(trip[1] - trip[0]), trip[2] + 1, trip[2] - 1, Math.round(trip[2] * 2)], String);
    return Q("Coordinate geometry", "easy",
      "What is the distance between the points \\((" + x1 + ", " + y1 + ")\\) and \\((" + x2 + ", " + y2 + ")\\) in the coordinate plane?",
      built,
      "The distance formula is just Pythagoras on the horizontal and vertical gaps.",
      "Step 1 — Horizontal gap \\(= |" + x2 + " - (" + x1 + ")| = " + trip[0] + "\\); vertical gap \\(= " + trip[1] + "\\).\n" +
      "Step 2 — \\(d = \\sqrt{" + trip[0] + "^{2} + " + trip[1] + "^{2}} = \\sqrt{" + (trip[0] * trip[0] + trip[1] * trip[1]) + "}\\).\n" +
      "Step 3 — \\(d = " + trip[2] + "\\). Adding the two gaps (" + (trip[0] + trip[1]) + ") is the trap.");
  }

  function genSequence(R) {
    const a1 = R.int(-10, 20), d = R.int(2, 12) * R.pick([1, -1]);
    const n = R.int(8, 40);
    const ans = a1 + (n - 1) * d;
    const built = mc(R, ans, [a1 + n * d, a1 + (n - 1) * d + d, a1 * n, a1 + (n - 2) * d, n * d], String);
    return Q("Sequences & series", "easy",
      "In an arithmetic sequence the first term is " + a1 + " and each term after the first exceeds the previous term by " + d + ". What is the " + n + "th term?",
      built,
      "Getting from the 1st term to the nth takes \\(n-1\\) steps, not n.",
      "Step 1 — \\(a_n = a_1 + (n-1)d\\).\n" +
      "Step 2 — \\(a_{" + n + "} = " + a1 + " + (" + (n - 1) + ")(" + d + ")\\).\n" +
      "Step 3 — \\(= " + a1 + " + " + ((n - 1) * d) + " = " + ans + "\\). Using n instead of \\(n-1\\) gives " + (a1 + n * d) + ", the standard trap.");
  }

  /* ===================================================================== */
  /* Data Insights generators                                               */
  /* ===================================================================== */

  const DS_CHOICES = [
    "(1) ALONE sufficient, (2) alone not",
    "(2) ALONE sufficient, (1) alone not",
    "BOTH together sufficient, neither alone",
    "EACH alone sufficient",
    "Together still NOT sufficient"
  ];

  /* Data Sufficiency on a 2x2 linear system. The answer is decided by whether
     each statement's equation is independent of the other, which the generator
     controls directly — so the key is structural, not guessed. */
  function genDSLinear(R) {
    const x = R.int(2, 15), y = R.int(2, 15);
    const a1 = R.int(1, 5), b1 = R.int(1, 5);
    let a2 = R.int(1, 5), b2 = R.int(1, 5);
    const kind = R.pick(["C", "A", "B", "E"]);
    if (kind === "E") { a2 = a1 * 2; b2 = b1 * 2; }         // statement 2 is (1) scaled — no new information
    else if (a1 * b2 === a2 * b1) { a2 = a1 + 1; b2 = b1; }  // force independence
    const s1 = a1 * x + b1 * y, s2 = a2 * x + b2 * y;
    const term = (c, v) => (c === 1 ? "" : c) + v;
    let st1, st2, ans, why;
    if (kind === "A") {
      st1 = "\\(x = " + x + "\\)"; st2 = "\\(" + term(a2, "x") + " + " + term(b2, "y") + " = " + s2 + "\\)";
      ans = "A"; why = "Statement (1) gives x outright. Statement (2) is one equation in two unknowns, so x could be anything.";
    } else if (kind === "B") {
      st1 = "\\(" + term(a1, "x") + " + " + term(b1, "y") + " = " + s1 + "\\)"; st2 = "\\(x = " + x + "\\)";
      ans = "B"; why = "Statement (2) gives x outright. Statement (1) alone is one equation in two unknowns.";
    } else if (kind === "E") {
      st1 = "\\(" + term(a1, "x") + " + " + term(b1, "y") + " = " + s1 + "\\)";
      st2 = "\\(" + term(a2, "x") + " + " + term(b2, "y") + " = " + s2 + "\\)";
      ans = "E"; why = "Statement (2) is just statement (1) multiplied by 2 — the same line, so together they still describe infinitely many pairs.";
    } else {
      st1 = "\\(" + term(a1, "x") + " + " + term(b1, "y") + " = " + s1 + "\\)";
      st2 = "\\(" + term(a2, "x") + " + " + term(b2, "y") + " = " + s2 + "\\)";
      ans = "C"; why = "Each statement alone is one equation in two unknowns. The two are independent (\\(" + a1 + " \\times " + b2 + " \\ne " + a2 + " \\times " + b1 + "\\)), so together they pin down a single point.";
    }
    return { topic: "Value questions", level: "medium", options: 5, correct: ans, choices: DS_CHOICES,
      text: "What is the value of x?\n(1) " + st1 + "\n(2) " + st2,
      hint: "Count independent equations against unknowns — and check whether the second equation is really new.",
      expl: "Step 1 — " + why + "\nStep 2 — The unique solution is \\(x = " + x + "\\), \\(y = " + y + "\\)" + (kind === "E" ? ", but it is not the only pair consistent with the statements." : ".") + "\nAnswer: " + ans + "." };
  }

  /* Table Analysis — emits a real `tables` payload, so it renders as an actual
     table through the existing diTableHTML renderer. */
  function genTableAnalysis(R) {
    // Five regions, so the four non-winners supply exactly four distractors.
    const regions = R.shuffle(["North", "South", "East", "West", "Central"]);
    const years = [2022, 2023];
    const rows = regions.map((rg) => {
      const a = R.int(20, 90) * 10, b = R.int(20, 90) * 10;
      return [rg, num(a), num(b), (b > a ? "+" : "") + (Math.round((b / a - 1) * 1000) / 10) + "%", a, b];
    });
    let best = 0;
    rows.forEach((r, i) => { if ((r[5] / r[4]) > (rows[best][5] / rows[best][4])) best = i; });
    const ans = rows[best][0];
    const built = mc(R, ans, rows.filter((_, i) => i !== best).map((r) => r[0]), String);
    if (!built) return null;
    return {
      topic: "Table analysis", level: "medium", options: 5, correct: built.correct, choices: built.choices,
      text: "The table shows unit sales by region for two years. Which region had the greatest percent increase in unit sales from " + years[0] + " to " + years[1] + "?",
      passageTable: { head: ["Region", String(years[0]), String(years[1]), "Change"], rows: rows.map((r) => r.slice(0, 4)) },
      hint: "The biggest percent change is not the biggest absolute change — divide, do not subtract.",
      expl: "Step 1 — Percent change is \\(\\tfrac{\\text{new} - \\text{old}}{\\text{old}}\\), so compare ratios rather than differences.\n" +
        "Step 2 — " + rows.map((r) => r[0] + ": " + r[1] + " → " + r[2] + " (" + r[3] + ")").join("; ") + ".\n" +
        "Step 3 — The largest is " + ans + " at " + rows[best][3] + ".\nAnswer: " + built.correct + "."
    };
  }

  /* ===================================================================== */

  const TOPICS = [
    { id: "pct",    label: "Percentages",              section: "quant", gen: genPercentChange },
    { id: "pl",     label: "Profit & loss",            section: "quant", gen: genProfitLoss },
    { id: "speed",  label: "Speed, distance & time",   section: "quant", gen: genAvgSpeed },
    { id: "work",   label: "Work & time",              section: "quant", gen: genWorkRate },
    { id: "mix",    label: "Mixtures & concentration", section: "quant", gen: genMixture },
    { id: "int",    label: "Simple & compound interest", section: "quant", gen: genSimpleCompound },
    { id: "ratio",  label: "Ratios & proportions",     section: "quant", gen: genRatioShare },
    { id: "avg",    label: "Averages & statistics",    section: "quant", gen: genAverageReplace },
    { id: "numprop",label: "Number properties",        section: "quant", gen: genRemainder },
    { id: "exp",    label: "Exponents & roots",        section: "quant", gen: genExponent },
    { id: "alg",    label: "Algebra & word problems",  section: "quant", gen: genAges },
    { id: "quad",   label: "Quadratic equations",      section: "quant", gen: genQuadratic },
    { id: "ineq",   label: "Inequalities",             section: "quant", gen: genInequality },
    { id: "abs",    label: "Absolute value",           section: "quant", gen: genAbsValue },
    { id: "prob",   label: "Probability",              section: "quant", gen: genProbMarbles },
    { id: "comb",   label: "Combinatorics",            section: "quant", gen: genCombination },
    { id: "sets",   label: "Sets & overlapping groups",section: "quant", gen: genTwoSets },
    { id: "coord",  label: "Coordinate geometry",      section: "quant", gen: genCoordinate },
    { id: "seq",    label: "Sequences & series",       section: "quant", gen: genSequence },
    { id: "ds",     label: "Data Sufficiency",         section: "data",  gen: genDSLinear },
    { id: "table",  label: "Table analysis",           section: "data",  gen: genTableAnalysis }
  ];

  /* Build a runnable set. Re-rolls a generator that returns null (its random
     parameters did not produce a clean question) and rejects a question whose
     stem duplicates one already in this set. */
  function makeSet(topicIds, count, seed) {
    const chosen = TOPICS.filter((t) => topicIds.indexOf(t.id) >= 0);
    if (!chosen.length) return null;
    seed = seed || (Date.now() ^ Math.floor(Math.random() * 1e9));
    const R = mk(rng(seed));
    const questions = [], seen = new Set();
    let guard = 0;
    while (questions.length < count && guard < count * 80) {
      guard++;
      const t = chosen[questions.length % chosen.length];
      let q;
      try { q = t.gen(R); } catch (e) { q = null; }
      if (!q || !q.choices || q.choices.length !== 5) continue;
      if (LET.indexOf(q.correct) < 0) continue;
      if (new Set(q.choices).size !== 5) continue;
      // Two questions can share a stem and still differ entirely (a table
      // question's stem is fixed; its data is what changes), so the dedupe key
      // has to include the choices and any attached data.
      const key = q.text.replace(/\s+/g, " ").trim() + "|" + q.choices.join("|") +
                  (q.passageTable ? "|" + JSON.stringify(q.passageTable.rows) : "");
      if (seen.has(key)) continue;
      seen.add(key);
      q.n = questions.length + 1;
      q.genTopic = t.id;
      questions.push(q);
    }
    if (!questions.length) return null;
    const sections = chosen.map((t) => t.section);
    const section = sections.every((s) => s === sections[0]) ? sections[0] : "quant";
    const label = chosen.length === 1 ? chosen[0].label
      : chosen.length === 2 ? chosen[0].label + " & " + chosen[1].label
      : chosen.length + " topics";
    return {
      id: "gen-" + seed.toString(36),
      title: "Generated · " + label,
      section: section,
      generated: true,
      seed: seed,
      topicIds: topicIds.slice(),
      source: "Generated on this device — parameters randomised, answers computed",
      questions: questions
    };
  }

  window.GMAT_GEN = { TOPICS: TOPICS, makeSet: makeSet, _rng: rng };
})();
