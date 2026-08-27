/* GMAT Prep — Data Insights additions.
   Source: the "GMAT Focus Edition" folder in the user's Drive —
   "Data Insights 5 - Data Sufficiency.pdf" (real-exam Data Sufficiency questions).
   That document prints the questions without an answer key, so every answer here
   was derived by full case analysis and then re-checked computationally
   (see the verification script accompanying this commit). Two questions from the
   source were dropped because OCR mangled their algebra beyond safe recovery.

   Correction applied while writing the in-depth explanations:
     - di-ds-realexam #11: the stem never said q was an integer, yet the stored
       key C depends on it (a non-integer q with q^2 = 5 or 7 also satisfies
       "q^4 is a two-digit odd number" and destroys the answer). "q is a
       positive integer" added to the stem; the key is unchanged.
       Contrast quant-numbersystem/quant-live y-versions of this construction,
       where the stem deliberately omits integrality and the answer differs.
   Appends to window.GMAT_SETS_NEW, which index.html merges into GMAT_SETS. */
(function () {
  var DS = [
    "(1) ALONE sufficient, (2) alone not",
    "(2) ALONE sufficient, (1) alone not",
    "BOTH together sufficient, neither alone",
    "EACH alone sufficient",
    "Together still NOT sufficient"
  ];
  var Q = function (n, correct, text, hint, expl, level) {
    return { n: n, topic: "Value questions", correct: correct, options: 5, level: level || "hard",
             text: text, choices: DS, hint: hint, expl: expl };
  };

  var sets = [
    {
      id: "di-ds-realexam",
      title: "Data Sufficiency — Real Exam Set",
      section: "data",
      source: "GMAT Focus Edition · Data Insights session (answers verified independently)",
      questions: [
        Q(1, "C",
          "What is the value of x, given that x is a positive number?\n(1) \\(x^{3}\\) is a two-digit positive odd integer.\n(2) \\(x^{4}\\) is a two-digit odd integer.",
          "x need not be an integer — but if both powers are integers, their ratio pins x down.",
          "Step 1 — (1) alone: \\(x^3\\) could be 27 (x = 3) or 11 (x = \\(\\sqrt[3]{11}\\)) — many values, insufficient.\nStep 2 — (2) alone: likewise \\(x^4 = 81\\) gives x = 3, but \\(x^4 = 11\\) gives another value — insufficient.\nStep 3 — Together: \\(x = x^4 / x^3\\), and searching every two-digit odd pair leaves only \\(x^3 = 27,\\ x^4 = 81\\), so x = 3 uniquely.\nAnswer: C.", "hard"),
        Q(2, "E",
          "If z is a non-negative integer, is \\(z! + (z + 1)\\) a prime number?\n(1) z is even.\n(2) \\(z < 10\\)",
          "Just test the small even values — one of them breaks the pattern.",
          "Step 1 — Test even z: z=0 → 2 (prime), z=2 → 5 (prime), z=4 → 29 (prime), z=6 → 727 (prime), but z=8 → 40,329 = 9 × 4,481, not prime.\nStep 2 — So (1) gives both yes and no; (2) alone is even weaker (z=3 → 10, not prime).\nStep 3 — Together, z even and under 10 still spans z=0 (yes) and z=8 (no).\nAnswer: E.", "hard"),
        Q(3, "B",
          "A sequence has 15 terms \\(a_1\\) to \\(a_{15}\\), where \\(a_n = a_{n-1} + k\\) and k is a non-zero constant. How many terms in the sequence are greater than 10?\n(1) \\(a_1 = 24\\)\n(2) \\(a_8 = 10\\)",
          "\\(a_8\\) is the middle term of 15 — think about symmetry rather than the value of k.",
          "Step 1 — (1): with \\(a_1 = 24\\), if k > 0 all 15 terms exceed 10; if k = −1 only 14 do — insufficient.\nStep 2 — (2): \\(a_8 = 10\\) is the 8th of 15, the exact middle. If k > 0 the seven terms after it exceed 10; if k < 0 the seven before it do. Either way the answer is 7.\nAnswer: B.", "hard"),
        Q(4, "D",
          "If y is an integer and \\(y = x + |x|\\), is \\(y = 0\\)?\n(1) \\(x < 0\\)\n(2) \\(y < 1\\)",
          "Split \\(x + |x|\\) into the two sign cases first.",
          "Step 1 — If \\(x \\ge 0\\), \\(y = 2x\\); if \\(x < 0\\), \\(y = 0\\). Note y is never negative.\nStep 2 — (1) \\(x<0\\) forces y = 0 — sufficient.\nStep 3 — (2) y ≥ 0 always, so \\(0 \\le y < 1\\) with y an integer forces y = 0 — sufficient.\nAnswer: D.", "medium"),
        Q(5, "A",
          "If list S contains nine distinct integers, at least one of which is negative, is the median of the integers in list S positive?\n(1) The product of the nine integers in S equals the median of S.\n(2) The sum of the nine integers in S equals the median of S.",
          "For (1), ask what would have to be true of the other eight numbers if zero were not in the list.",
          "Step 1 — (1): if 0 ∉ S, then product = median forces the other eight numbers to multiply to ±1, impossible for eight distinct integers. So 0 ∈ S, the product is 0, hence the median is 0 — a definite \"no\". Sufficient.\nStep 2 — (2): {−6,−5,−3,0,1,2,3,4,5} sums to 1 with median 1 (positive), while {−4,−3,−2,−1,0,1,2,3,4} sums to 0 with median 0. Both fit — insufficient.\nAnswer: A.", "hard"),
        Q(6, "E",
          "The sum of n consecutive positive integers is 45. What is the value of n?\n(1) n is even.\n(2) \\(n < 9\\)",
          "List every n that can work before testing the statements.",
          "Step 1 — Solving \\(na + \\tfrac{n(n-1)}{2} = 45\\) over positive starting values gives n ∈ {1, 2, 3, 5, 6, 9}.\nStep 2 — (1) even leaves {2, 6}; (2) under 9 leaves {1, 2, 3, 5, 6}.\nStep 3 — Together they still leave {2, 6} — two possibilities.\nAnswer: E.", "hard"),
        Q(7, "E",
          "Is \\(x^{4} + y^{4} > z^{4}\\)?\n(1) \\(x^{2} + y^{2} > z^{2}\\)\n(2) \\(x + y > z\\)",
          "Nothing says these are integers — try values just above and well below.",
          "Step 1 — Take x = y = 1, z = 1: both statements hold and \\(2 > 1\\) — yes.\nStep 2 — Take x = y = 1, z = 1.3: \\(x^2+y^2 = 2 > 1.69\\) and \\(x+y = 2 > 1.3\\), so both statements still hold, yet \\(x^4+y^4 = 2\\) while \\(z^4 \\approx 2.86\\) — no.\nStep 3 — The same pair of cases defeats each statement alone and both together.\nAnswer: E.", "hard"),
        Q(8, "E",
          "Is x a negative number?\n(1) \\(x^{2}\\) is a positive number.\n(2) \\(x \\cdot |y|\\) is not a positive number.",
          "What if y is zero?",
          "Step 1 — (1) only tells you x ≠ 0 — insufficient.\nStep 2 — (2) if y = 0 then \\(x|y| = 0\\), which is \"not positive\" for any x at all — insufficient.\nStep 3 — Together: if y = 0 the condition holds even for positive x, so x need not be negative; if y ≠ 0 then x < 0. Both outcomes remain possible.\nAnswer: E.", "hard"),
        Q(9, "A",
          "What is the percentage of staff-workers in a company, if each employee is either a line-worker or a staff-worker only?\n(1) The mean salary for line-workers is $10,000 less than the overall mean salary, and the mean salary for staff-workers is $30,000 more than the overall mean salary.\n(2) The number of line-workers is 500 more than the number of staff-workers.",
          "A weighted average balances: the two deviations from the mean must cancel out.",
          "Step 1 — (1): let L and S be the head counts and m the overall mean. Balancing deviations, \\(-10000L + 30000S = 0\\), so \\(L = 3S\\) and staff are \\(S/(L+S) = 25\\%\\) — sufficient.\nStep 2 — (2) gives only a difference in head count, not a ratio — insufficient.\nAnswer: A.", "medium"),
        Q(10, "B",
          "What is the value of z?\n(1) \\(|z| < 2\\)\n(2) \\(|z| = 3z - 2\\)",
          "Solve the absolute-value equation in both sign cases and discard the impossible one.",
          "Step 1 — (1) only bounds z between −2 and 2 — insufficient.\nStep 2 — (2) if z ≥ 0: \\(z = 3z-2 \\Rightarrow z = 1\\) ✓. If z < 0: \\(-z = 3z-2 \\Rightarrow z = 0.5\\), which contradicts z < 0.\nStep 3 — So z = 1 uniquely — sufficient.\nAnswer: B.", "medium"),
        Q(11, "C",
          "If p is a two-digit positive integer less than 99 and q is a positive integer, what is the sum of the digits of p?\n(1) p is divisible by \\(q^{2}\\).\n(2) \\(q^{4}\\) is a two-digit odd number.",
          "Statement (2) pins down q — then ask what all the qualifying values of p have in common.",
          "Step 1 — (2): the only q with \\(q^4\\) a two-digit odd number is q = 3 (81), so \\(q^2 = 9\\). Alone this says nothing about p.\nStep 2 — (1) alone leaves q unknown — insufficient.\nStep 3 — Together p is a two-digit multiple of 9 below 99: 18, 27, 36, 45, 54, 63, 72, 81, 90 — every one has digit sum 9.\nAnswer: C.", "hard"),
        Q(12, "D",
          "If the average (arithmetic mean) of four distinct positive integers is 60, how many of these four integers are less than 50?\n(1) The median of the three largest integers is 51 and the sum of the two largest integers is 190.\n(2) The median of the four integers is 50.",
          "The four sum to 240 — write them as \\(a<b<c<d\\) and see how much each statement fixes.",
          "Step 1 — The four sum to \\(4 \\times 60 = 240\\).\nStep 2 — (1): the middle of the top three is c = 51, and \\(c + d = 190\\) gives d = 139, leaving \\(a + b = 50\\) with \\(a < b < 51\\). Both a and b must fall below 50, so exactly 2 — sufficient.\nStep 3 — (2): \\(b + c = 100\\) with b < c forces b < 50 < c, and a < b, so again exactly 2 — sufficient.\nAnswer: D.", "hard")
      ]
    }
  ];

  window.GMAT_SETS_NEW = (window.GMAT_SETS_NEW || []).concat(sets);
})();
