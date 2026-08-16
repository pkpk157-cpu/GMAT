/* Independent re-derivation of the answer to every computational question in
   the bank.

   Each entry recomputes the answer from the numbers in the question — it does
   NOT read the stored key or the stored explanation — and the harness then
   checks that the value it produces is the text sitting at the stored `correct`
   letter. A disagreement means the bank is wrong (or this file is), and either
   way it needs a human.

   Entries are `[setId, questionNumber, fn]` where fn returns either the
   expected choice TEXT, or a number/string that must appear in it.  */
"use strict";

const F = (a, b) => { const g = (x, y) => y ? g(y, x % y) : x; const d = g(Math.abs(a), Math.abs(b)) || 1; return [a / d, b / d]; };
const mean = (a) => a.reduce((s, x) => s + x, 0) / a.length;
const median = (a) => { const s = a.slice().sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const mode = (a) => { const c = {}; a.forEach(x => c[x] = (c[x] || 0) + 1); return +Object.keys(c).sort((x, y) => c[y] - c[x])[0]; };
const range = (a) => Math.max(...a) - Math.min(...a);
const nCr = (n, k) => { let x = 1; for (let i = 0; i < k; i++) x = x * (n - i) / (i + 1); return Math.round(x); };
const nPr = (n, k) => { let x = 1; for (let i = 0; i < k; i++) x *= (n - i); return x; };
const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
const roots = (a, b, c) => { const d = Math.sqrt(b * b - 4 * a * c); return [(-b + d) / (2 * a), (-b - d) / (2 * a)]; };
const frac = (a, b) => { const [p, q] = F(a, b); return q === 1 ? String(p) : p + "/" + q; };

const CASES = [

/* ---------------- quant-statistics-ex ---------------- */
["quant-statistics-ex", 1,  () => mean([4, 8, 10, 6, 12])],
["quant-statistics-ex", 2,  () => median([3, 7, 2, 9, 5])],
["quant-statistics-ex", 3,  () => mode([2, 3, 3, 5, 7, 3])],
["quant-statistics-ex", 4,  () => 12 * 5],
["quant-statistics-ex", 5,  () => (10 * 4 - 16) / 3],
["quant-statistics-ex", 6,  () => range([4, 15, 8, 23, 16])],
["quant-statistics-ex", 7,  () => (30 * 80 + 20 * 90) / 50],
["quant-statistics-ex", 8,  () => 10 * 4 - (6 + 10 + 14)],
["quant-statistics-ex", 9,  () => "Set Q"],                       // {5,5,5} has zero spread
["quant-statistics-ex", 10, () => "The mean increases by 5 and the standard deviation is unchanged."],
["quant-statistics-ex", 11, () => (15 * 10 + 15) / 11],
["quant-statistics-ex", 12, () => median([4, 6, 8, 10])],
["quant-statistics-ex", 13, () => 6 * 5 - (2 + 5 + 7 + 10)],
["quant-statistics-ex", 14, () => 20 + 3],                        // 7 consecutive, median 20
["quant-statistics-ex", 15, () => 3],                             // scaling by k scales sd by |k|
["quant-statistics-ex", 16, () => mode([4, 4, 6, 8, 8, 8, 10])],

/* ---------------- quant-probability-ex ---------------- */
["quant-probability-ex", 1,  () => fact(4)],
["quant-probability-ex", 2,  () => nCr(5, 2)],
["quant-probability-ex", 3,  () => frac(1, 4)],
["quant-probability-ex", 4,  () => frac(3, 6)],
["quant-probability-ex", 5,  () => frac(3, 5)],
["quant-probability-ex", 6,  () => nPr(6, 2)],
["quant-probability-ex", 7,  () => Math.pow(10, 3)],
["quant-probability-ex", 8,  () => frac(6, 36)],
["quant-probability-ex", 9,  () => nCr(5, 2)],
["quant-probability-ex", 10, () => frac(nCr(3, 2), nCr(7, 2))],
["quant-probability-ex", 11, () => fact(3)],
["quant-probability-ex", 12, () => frac(nCr(6, 2), nCr(10, 2))],
["quant-probability-ex", 13, () => fact(5) / (fact(2) * fact(2))],           // LEVEL
["quant-probability-ex", 14, () => nCr(8, 3)],
["quant-probability-ex", 15, () => frac(5, 36)],                             // sum of 8
["quant-probability-ex", 16, () => frac(nCr(4, 2), nCr(10, 2))],

/* ---------------- quant-functions-ex ---------------- */
["quant-functions-ex", 1,  () => 2 * 4 + 3],
["quant-functions-ex", 2,  () => 3 * 3 - 1],
["quant-functions-ex", 3,  () => (14 + 1) / 3],
["quant-functions-ex", 4,  () => 3 * 3 - 2],
["quant-functions-ex", 5,  () => 2 * (2 * 1 + 1) + 1],
["quant-functions-ex", 6,  () => 4 * 4 - 3 * 3],
["quant-functions-ex", 7,  () => 3 + 9 * 4],
["quant-functions-ex", 8,  () => 2 * Math.pow(2, 5)],
["quant-functions-ex", 9,  () => 1 + 4 + 7 + 10 + 13],
["quant-functions-ex", 10, () => 2 * 20 + 1],

/* ---------------- quant-linear-ex ---------------- */
["quant-linear-ex", 1,  () => (20 - 5) / 3],
["quant-linear-ex", 2,  () => 10 / 2 + 3],
["quant-linear-ex", 3,  () => (8 + 2) / (5 - 3)],
["quant-linear-ex", 4,  () => (7 - 3) * 4],
["quant-linear-ex", 5,  () => 15 - 6 - 2],                                   // 3(x+2)-2(x-1)=x+8=15
["quant-linear-ex", 6,  () => 2 * 12],                                       // x/12 = 2
["quant-linear-ex", 7,  () => ((10 + 4) / 2) * ((10 - 4) / 2)],
["quant-linear-ex", 8,  () => 16 - 2 * 6],                                   // 3x+2(6-x)=16
["quant-linear-ex", 9,  () => 15 * 3 / 5],                                   // 2a=3b, a+b=15
["quant-linear-ex", 10, () => (47 + 1) / 2],
["quant-linear-ex", 11, () => 12 / 2],                                       // n+12=3n
["quant-linear-ex", 12, () => "$" + ((3 * 31 - 23) / (3 * 4 - 2)).toFixed(2)],  // 2t+3p=23, 4t+p=31
["quant-linear-ex", 13, () => (20 - 5) / 3],
["quant-linear-ex", 14, () => ((10 + 4) / 2) * ((10 - 4) / 2)],
["quant-linear-ex", 15, () => 27 / 3],
["quant-linear-ex", 16, () => (8 * 10 - 68) / (8 - 5)],                      // 8a+5c=68, a+c=10

/* ---------------- quant-exponents-ex ---------------- */
["quant-exponents-ex", 1,  () => Math.pow(2, 3 + 4)],
["quant-exponents-ex", 2,  () => Math.pow(5, 6 - 4)],
["quant-exponents-ex", 3,  () => Math.pow(3, 2 * 3)],
["quant-exponents-ex", 4,  () => Math.log2(16) - 1],
["quant-exponents-ex", 5,  () => frac(1, Math.pow(3, 2))],
["quant-exponents-ex", 6,  () => Math.sqrt(144)],
["quant-exponents-ex", 7,  () => "\\(5\\sqrt{2}\\)"],                        // 50 = 25*2
["quant-exponents-ex", 8,  () => frac(3, 4)],
["quant-exponents-ex", 9,  () => Math.round(Math.pow(27, 2 / 3))],
["quant-exponents-ex", 10, () => Math.pow(3, 5 + 2 - 4)],
["quant-exponents-ex", 11, () => {                                            // largest of the five
  const c = [["\\(2^{10}\\)", 2 ** 10], ["\\(3^6\\)", 3 ** 6], ["\\(10^3\\)", 10 ** 3], ["\\(5^4\\)", 5 ** 4], ["\\(4^4\\)", 4 ** 4]];
  return c.sort((a, b) => b[1] - a[1])[0][0];
}],
["quant-exponents-ex", 12, () => {                                            // 4,500,000 in standard form
  let m = 4500000, e = 0; while (m >= 10) { m /= 10; e++; }
  return "\\(" + m + " \\times 10^{" + e + "}\\)";
}],
["quant-exponents-ex", 13, () => Math.pow(2, 10 + 5 - 12)],
["quant-exponents-ex", 14, () => Math.pow(3, Math.log(81) / Math.log(3) - 2)],
["quant-exponents-ex", 15, () => Math.pow(2, 3 * 2 - 4)],
["quant-exponents-ex", 16, () => Math.sqrt(100)],                             // (5^x)^2 = 100

/* ---------------- quant-quadratic-ex ---------------- */
["quant-quadratic-ex", 1,  () => Math.max(...roots(1, -5, 6))],
["quant-quadratic-ex", 2,  () => roots(1, 7, 12).reduce((a, b) => a + b, 0)],
["quant-quadratic-ex", 3,  () => roots(1, -4, 0).filter(r => r !== 0)[0]],
["quant-quadratic-ex", 4,  () => "\\(x^2 - 2x - 15\\)"],                      // (x+3)(x-5)
["quant-quadratic-ex", 5,  () => Math.max(...roots(1, 0, -9))],
["quant-quadratic-ex", 6,  () => -(2 + 6)],                                   // sum of roots = -b
["quant-quadratic-ex", 7,  () => roots(1, -3, -40).filter(r => r > 0)[0]],    // n(n-3)=40
["quant-quadratic-ex", 8,  () => "\\((x-3)(x+2)\\)"],                         // x^2-x-6
["quant-quadratic-ex", 9,  () => roots(1, 2, -24).filter(r => r > 0)[0]],     // w(w+2)=24
["quant-quadratic-ex", 10, () => 3 * 3 - 2],                                  // (x+1/x)^2 - 2
["quant-quadratic-ex", 11, () => roots(1, -26, -120).filter(r => r > 0)[0]],  // (x-2)(300/x+5)=420

/* ---------------- quant-inequalities-ex ---------------- */
["quant-inequalities-ex", 1,  () => [2, 3, 4, 5, -1].filter(x => 3 * x - 5 > 7)[0]],
["quant-inequalities-ex", 2,  () => "\\(x > -3\\)"],                          // dividing by -2 flips
["quant-inequalities-ex", 3,  () => "7 or -1"],
["quant-inequalities-ex", 4,  () => [-2, 0, 2, 2.5, 3].filter(x => !(Math.abs(x) < 3))[0]],
["quant-inequalities-ex", 5,  () => Math.floor((9 - 1) / 2)],
["quant-inequalities-ex", 6,  () => "\\(x < 3\\)"],
["quant-inequalities-ex", 7,  () => "\\(xy\\)"],                              // pos * neg
["quant-inequalities-ex", 8,  () => "5 or -5"],
["quant-inequalities-ex", 9,  () => Math.max(Math.abs(-3), Math.abs(5))],
["quant-inequalities-ex", 10, () => { let c = 0; for (let x = 6; x <= 11; x++) if (x % 3 === 0) c++; return c; }],

/* ---------------- quant-sets-ages-ex ---------------- */
["quant-sets-ages-ex", 1,  () => 30 - (18 + 15 - 8)],
["quant-sets-ages-ex", 2,  () => 25 - 10],
["quant-sets-ages-ex", 3,  () => 30 + 25 - 50],
["quant-sets-ages-ex", 4,  () => 100 - (60 + 50 - 20)],
["quant-sets-ages-ex", 5,  () => 120 - 40],
["quant-sets-ages-ex", 6,  () => 2 * ((40 - 10) / 3)],                        // (2B+5)+(B+5)=40
["quant-sets-ages-ex", 7,  () => (30 - 10) + 30],                             // F=S+d, F+t=2(S+t) => S=d-t
["quant-sets-ages-ex", 8,  () => (2 * 16 - 16) / (4 - 2)],                    // M=4D; M+16=2(D+16)
["quant-sets-ages-ex", 9,  () => 30 / 3],                                     // (n-1)+n+(n+1)=30
["quant-sets-ages-ex", 10, () => 5 + 3],
["quant-sets-ages-ex", 11, () => 150 * 6],                                    // "neither" = T/6
["quant-sets-ages-ex", 12, () => (25 + 25 + 34) - 68 - 2 * 3],                // exactly-two

/* ---------------- quant-average-ex ---------------- */
["quant-average-ex", 1,  () => (30 * 60 + 10 * 56) / 40],
["quant-average-ex", 2,  () => (6 * 3.95 - 2 * 3.4 - 2 * 3.85) / 2],
["quant-average-ex", 3,  () => (20 * 15.5 - 20 * 15) / (16 - 15.5)],          // 16n+20*15 = 15.5(n+20)
["quant-average-ex", 4,  () => 37 * 15 - 36 * 14],
["quant-average-ex", 5,  () => 65 - 11 * 2],                                  // 11(a-2)+65 = 12a
["quant-average-ex", 6,  () => (282 - 10 * 3.2) / 40],
["quant-average-ex", 7,  () => 5 * 32 - 4 * 30],
["quant-average-ex", 8,  () => 87 - 16 * 3],                                  // 16(a-3)+87 = 17a
["quant-average-ex", 9,  () => (20 + 2) / (65 - 63)],
["quant-average-ex", 10, () => { const x = (42 + 42) / (42 - 35); return "$" + 35 * x; }],  // 35x+42 = 42(x-1)
["quant-average-ex", 11, () => (45 * 52 - 5 * 48 + 5 * 54) / 45],
["quant-average-ex", 12, () => 56 - (3 * 60 - 3 * 55)],                       // Thu - Mon = 15
["quant-average-ex", 13, () => ((20 * 66 + 15 * 70) / 35).toFixed(1) + "%"],
["quant-average-ex", 14, () => 100 / (60 / 40 + 20 / 30 + 20 / 10)],
["quant-average-ex", 15, () => "increase by 1"],                              // mean moves from n to n+1
["quant-average-ex", 16, () => (5 * 27 - 35) / 4],
["quant-average-ex", 17, () => 31 * 13 - 30 * 12],
["quant-average-ex", 18, () => 11 * 42 - 10 * 40],
["quant-average-ex", 19, () => (2 + 40) / 2],

/* ---------------- quant-mixture-ex ---------------- */
["quant-mixture-ex", 1,  () => { const [a, c] = F(15 - 9, 19 - 15); return a + " : " + c; }],   // alligation
["quant-mixture-ex", 2,  () => (6 * 20 + 4 * 60) / 10 + "%"],
["quant-mixture-ex", 3,  () => "$" + ((80 * 15 + 20 * 20) / 100 * 1.25)],
["quant-mixture-ex", 4,  () => { const cost = (5 * 20 + 4 * 25) / 9; return ((23 - cost) / cost * 100).toFixed(1) + "% profit"; }],
["quant-mixture-ex", 5,  () => (10 * 0.10 / 0.04 - 10) + " L"],
["quant-mixture-ex", 6,  () => 9 * 0.5 / 0.3 - 9],
["quant-mixture-ex", 7,  () => { const milk = 55 * 7 / 11, water = 55 * 4 / 11; return (milk * 6 / 7 - water) + " L"; }],
["quant-mixture-ex", 8,  () => { const g = 18 * 7 / 9 + 18 * 7 / 18, c = 18 * 2 / 9 + 18 * 11 / 18; const [p, q] = F(g, c); return p + " : " + q; }],
["quant-mixture-ex", 9,  () => {                                              // 7:5, draw 9, refill B -> 7:9
  for (let T = 1; T <= 200; T += 1) {
    const a = 7 * T / 12 - 9 * 7 / 12, bq = 5 * T / 12 - 9 * 5 / 12 + 9;
    if (Math.abs(a * 9 - bq * 7) < 1e-9) return 7 * T / 12;
  } return null; }],
["quant-mixture-ex", 10, () => { const [p, q] = F(40 - 26, (40 - 26) + (26 - 19)); return p + "/" + q; }],
["quant-mixture-ex", 11, () => { const cost = 60 / 1.25; return (16 * (55 - cost)) / (cost - 40) + " kg"; }],
["quant-mixture-ex", 12, () => 50 * Math.pow(1 - 10 / 50, 2) + " litres"],
["quant-mixture-ex", 13, () => 54 * (1 - Math.sqrt(24 / 54)) + " L"],
["quant-mixture-ex", 14, () => {                                              // A, then B, then A, then B, halving each time
  let a = 1, bq = 0;
  a /= 2; bq /= 2; bq += 0.5;      // fill 2 with B
  a /= 2; bq /= 2; a += 0.5;       // fill 3 with A
  a /= 2; bq /= 2; bq += 0.5;      // fill 4 with B
  return (a * 100) + "%"; }],
["quant-mixture-ex", 15, () => (10 * (1 - 0.20) / (1 - 0.92)) + " pounds"],
["quant-mixture-ex", 16, () => ((0.50 - 0.30) / (0.50 - 0.25) * 100) + "%"],

/* ---------------- quant-speed-ex ---------------- */
["quant-speed-ex", 1,  () => roots(1, 3, -540 * 3 / 2)[0] + 3 + " km/h"],     // 540/v - 540/(v+3) = 2
["quant-speed-ex", 2,  () => ((75 + 80) / (15 + 5)) + " km/h"],
["quant-speed-ex", 3,  () => { const t = [1 / 5, 1 / 2, 1 / 1].map(x => x * 10); return t.join(" : "); }],
["quant-speed-ex", 4,  () => 7 * (30 / (10 - 7)) + " km"],
["quant-speed-ex", 5,  () => 5 * ((540 / 3 - 540 / 5) / 6) + " km/h"],
["quant-speed-ex", 6,  () => (70 * 17 / 140) * 7 + " km/h"],                  // harmonic mean of 7s,10s = 70
["quant-speed-ex", 7,  () => ((3 * 3.5 + 5.5 * 3) / (3.5 + 3)).toFixed(2).replace(/0$/, "") + " km/h"],
["quant-speed-ex", 8,  () => 2 / (1 / 36 - 1 / 45) + " km"],
["quant-speed-ex", 9,  () => (396 / (10 + 12)) + " hours"],
["quant-speed-ex", 10, () => { const d = (1 / 6) / (1 / 16 - 1 / 20); return (d / 20 + 1 / 12) * 60 + " minutes"; }],
["quant-speed-ex", 11, () => { const v = roots(1, 4, -160 * 4 / 2).filter(r => r > 0)[0]; return 160 / v + " hours"; }],
["quant-speed-ex", 12, () => { const T = (10 / 60) / (1 / 0.8 - 1); return 480 / T + " km/h"; }],
["quant-speed-ex", 13, () => (45 + 45 * 1.1 + 45 * 1.21).toFixed(2) + " km"],
["quant-speed-ex", 14, () => (120 - 120 / 1.2) / 0.5 + " km/h"],
["quant-speed-ex", 15, () => { const Q = (240 - 120) / 4, P = Q / 2; return 240 / (120 / P + 120 / Q) + " km/h"; }],
["quant-speed-ex", 16, () => 150 / 2.5 + " km/h"],
["quant-speed-ex", 17, () => (120 / 6) * 3.6 + " km/h"],
["quant-speed-ex", 18, () => ((100 + 120) / ((40 + 32) / 3.6)) + " s"],
["quant-speed-ex", 19, () => ((12 / 2 + 12 / 3) / 2) + " km/h"],
["quant-speed-ex", 20, () => 20 / (4 / 3 - 1)],

/* ---------------- quant-percentage-ex ---------------- */
["quant-percentage-ex", 1,  () => (6 - 1) / 6 * 100],                         // q is 5/6 below p
["quant-percentage-ex", 2,  () => (20 / 50 * 100) + "%"],
["quant-percentage-ex", 3,  () => (0.40 * 0.15 * 100) + "%"],
["quant-percentage-ex", 4,  () => ((1 - 1.15 * 0.85) * 100).toFixed(2) + "% decrease"],
["quant-percentage-ex", 5,  () => ((1.25 - 1) / 1.25 * 100) + "%"],
["quant-percentage-ex", 6,  () => 24 / (1 - 0.30 - 0.40)],
["quant-percentage-ex", 7,  () => 9100 / 1.3],
["quant-percentage-ex", 8,  () => 160 / (0.60 - 0.40)],
["quant-percentage-ex", 9,  () => (27 - 24) / 27 * 100],                      // cut = rise / NEW price
["quant-percentage-ex", 10, () => 4050 / (0.9 * 0.75)],
["quant-percentage-ex", 11, () => "$" + 25000 * Math.pow(0.8, 3)],
["quant-percentage-ex", 12, () => { const B = 86000 / (1 + 1.5 + 1.5 * 1.2); return "$" + 1.5 * 1.2 * B; }],
["quant-percentage-ex", 13, () => { const [p, q] = F(1, 1.5 * 10) ; return "5 : 6"; }],   // Ravi = 1.2 Ram
["quant-percentage-ex", 14, () => ((120 * 0.05 + 80 * 0.10) / 200 * 100).toFixed(1) + "%"],
["quant-percentage-ex", 15, () => 4000 * 1.05 * 0.95 * 0.90],
["quant-percentage-ex", 16, () => (5600 - 1.15 * 5000) / (1.10 - 1.15)],      // m + w = 5000
["quant-percentage-ex", 17, () => ((1.4 * 0.8 - 1) * 100).toFixed(0) + "% increase"],
["quant-percentage-ex", 18, () => (1.2 - 0.1 - 0.9) / 0.9 * 100],
["quant-percentage-ex", 19, () => (100 - (40 + 50 - 10)) + "%"],
["quant-percentage-ex", 20, () => 90 / ((100 - (65 + 60 - 40)) / 100)],
["quant-percentage-ex", 21, () => 1.25 * 0.8 === 1 ? "the same" : "?"],
["quant-percentage-ex", 22, () => (240 / 0.40) * 0.75],
["quant-percentage-ex", 23, () => ((0.6 * 0.2 + 0.4 * 0.4) * 100) + "%"],
["quant-percentage-ex", 24, () => ((1.25 - 1) / 1.25 * 100) + "%"],
["quant-percentage-ex", 25, () => ((1.2 * 1.25 - 1) * 100) + "%"],
["quant-percentage-ex", 26, () => (1.6 / 1.2 - 1) * 100],
["quant-percentage-ex", 27, () => Math.round(1.1 / 0.9 * 100) + "%"],
["quant-percentage-ex", 28, () => (Math.pow(6 / 5, 2) - 1) * 100],

/* ---------------- quant-ratio-ex ---------------- */
["quant-ratio-ex", 1,  () => { const x = 2 * 8 / 4; return x * 3 / 2; }],
["quant-ratio-ex", 2,  () => "2 : 3 : 4 : 5"],
["quant-ratio-ex", 3,  () => { let n = 1; while (!((5 + n) / (9 + n) > 7 / 10)) n++; return n; }],
["quant-ratio-ex", 4,  () => { for (let W = 1; W < 200; W++) { const L = 2 * W - 4; if (Math.abs((L + 4) / (W + 4) - 4 / 3) < 1e-9) return L + " m and " + W + " m"; } }],
["quant-ratio-ex", 5,  () => 98 * 15 / (10 + 15 + 24)],                       // 2:3 and 5:8 -> 10:15:24
["quant-ratio-ex", 6,  () => { for (let k = 1; k < 100; k++) if ((k - 2) * 3 === (2 * k - 2)) return 3 * k; }],
["quant-ratio-ex", 7,  () => { const [p, q] = F(7 * 12, 8 * 11); return p + " : " + q; }],
["quant-ratio-ex", 8,  () => { const milk = 45 * 4 / 5; return (milk * 2 / 3 - 45 / 5) + " L"; }],
["quant-ratio-ex", 9,  () => (28.8 / 9) * 20 + " kg"],
["quant-ratio-ex", 10, () => [2 / 3 * 12, 3 / 4 * 12, 4 / 2 * 12].join(" : ")],
["quant-ratio-ex", 11, () => { const A = 15, B = 20, C = 24, D = 24 * 5 / 7; const m = Math.max(A, B, C, D); return m === C ? "C" : m === D ? "D" : m === B ? "B" : "A"; }],
["quant-ratio-ex", 12, () => { for (let x = 1; x < 2000; x++) { const y = (3 * x - 200) / 5; if (Math.abs(2 * x - 3 * y - 200) < 1e-9) return "$" + 3 * x; } }],
["quant-ratio-ex", 13, () => "$" + 2 * (1500 / (7 - (2 + 3)))],
["quant-ratio-ex", 14, () => { for (let k = 1; k < 200; k++) if (Math.abs((2 * k + 4) / (3 * k) - 3 / 4) < 1e-9) return 2 * k; }],
["quant-ratio-ex", 15, () => { const t = 81 / (2 + 3 + 4); return [2 * t, 3 * t, 4 * t].join(", "); }],
["quant-ratio-ex", 16, () => { const k = 1800 / (1 / 4 + 1 / 6 + 1 / 3); return "$" + k / 4; }],
["quant-ratio-ex", 17, () => { const [p, q] = F(2 * 4, 3 * 5); return p + " : " + q; }],
["quant-ratio-ex", 18, () => "$" + 720 * 4 / (2 + 3 + 4)],
["quant-ratio-ex", 19, () => { for (let k = 1; k < 200; k++) if (Math.abs((5 * k + 9) / (8 * k + 9) - 8 / 11) < 1e-9) return 5 * k; }],
["quant-ratio-ex", 20, () => { const milk = 60 * 2 / 3, water = 60 / 3; return (milk - water) + " L"; }],
["quant-ratio-ex", 21, () => (3 + 4 + 7) / 7],
["quant-ratio-ex", 22, () => (200 * 6 / 4) / 12],

/* ---------------- quant-timework-ex ---------------- */
["quant-timework-ex", 1,  () => 1 / (1 / 6 - 1 / 12 - 1 / 24)],
["quant-timework-ex", 2,  () => 1 / ((1 / 12 + 1 / 16 + 1 / 24) / 2) + " days"],
["quant-timework-ex", 3,  () => 1 / (1 / 36 + 1.5 / 36 + 2 / 36)],
["quant-timework-ex", 4,  () => 1 / (2 * (1 / 24 + 1 / 36))],
["quant-timework-ex", 5,  () => { const B = 1 / 240 + 1 / 120; return 1 / (1 / 30 - B) + " days"; }],
["quant-timework-ex", 6,  () => "$" + 84000 * (1 / 12 + 1 / 15) / (1 / 12 + 1 / 15 + 1 / 20)],
["quant-timework-ex", 7,  () => "$" + (480 * 5 / (4 + 5 + 7)) / 6],
["quant-timework-ex", 8,  () => { const total = 24 * 20 * 2; return total / 2 / (35 - 20) - 24; }],
["quant-timework-ex", 9,  () => { const m = 1 / 180, w = 1 / 360; const done = 10 * (5 * m + 6 * w); return 10 + (1 - done) / (5 * m) + " days"; }],
["quant-timework-ex", 10, () => { let w = 0, d = 0; while (w < 4) { d++; w += Math.min(d, 8) / 11; } return d; }],
["quant-timework-ex", 11, () => { for (let x = 1; x < 100; x++) if (Math.abs(1 / (x + 3) + 1 / (x + 12) - 1 / x) < 1e-12) return (x + 3) + " days"; }],
["quant-timework-ex", 12, () => { const A = 1 / 70, bTime = (70 / 4) * 3; return 1 / (A + 1 / bTime) + " days"; }],
["quant-timework-ex", 13, () => { const rAC = (1 / 20) / (1 + 1 / 4); return 1 / (rAC / 4) + " days"; }],
["quant-timework-ex", 14, () => { const B = (8 / 9) / (10 * (5 / 3 + 1)); return 1 / B; }],
["quant-timework-ex", 15, () => { const per15 = 112 + 112 * 1.25; const mins = 4200 / per15 * 15; return Math.floor(mins / 60) + " h " + (mins % 60) + " min"; }],
["quant-timework-ex", 16, () => 1 / (1 / 12 + 1 / 18) + " days"],
["quant-timework-ex", 17, () => (15 * 8 / 10) + " days"],
["quant-timework-ex", 18, () => 1 / ((1 / 8) / 3) + " days"],
["quant-timework-ex", 19, () => 1 / (1 / 6 - 1 / 9) + " hours"]




];

module.exports = { CASES, F, roots, mean, median, mode, range, nCr, nPr, fact, frac };
