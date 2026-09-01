/* GMAT Prep — in-depth explanations for the live-exam Quant sets 6a and 6b.
   Every answer was independently re-derived before the explanation was
   written; no stored key was changed. Keys are "setId#n"; index.html merges
   these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-6a#1": {
  steps: "Step 1 — Factor rather than expand: \\(x^3 - 4x^5 = x^3(1 - 4x^2) = x^3(1 - 2x)(1 + 2x)\\).\n" +
    "Step 2 — The roots are \\(x = -\\tfrac12,\\ 0,\\ \\tfrac12\\), which split the number line into four intervals.\n" +
    "Step 3 — Test a point in each. \\(x = -1\\): \\((-1)(1 - 4) = 3 > 0\\).\n" +
    "Step 4 — \\(x = -0.25\\): \\(x^3 = -0.0156\\) and \\(1 - 4(0.0625) = 0.75\\), giving \\(-0.0117 < 0\\) ✓.\n" +
    "Step 5 — \\(x = 0.25\\): \\(+0.0117 > 0\\).\n" +
    "Step 6 — \\(x = 1\\): \\(1(1 - 4) = -3 < 0\\) ✓.\n" +
    "Step 7 — So the expression is negative on \\(-\\tfrac12 < x < 0\\) and on \\(x > \\tfrac12\\).",
  fast: "Factor to find the roots, then test one point per interval — four quick sign checks settle everything. The odd power \\(x^3\\) means the sign flips at 0, which is what makes the answer two disjoint intervals rather than one.\n" +
    "A single well-chosen test also screens the choices: \\(x = 1\\) makes the expression negative, so any answer excluding \\(x = 1\\) is wrong. That alone removes several options.",
  traps: "(A) \\(0 < |x| < \\tfrac12\\) and (B) \\(|x| > \\tfrac12\\) are stated in absolute values, which forces symmetry about zero — but the expression is *odd*, so it cannot be negative at both \\(x\\) and \\(-x\\).\n" +
    "(D) is the mirror image of the correct set, obtained by getting the sign of \\(x^3\\) backwards.\n" +
    "(E) \\(x < -\\tfrac12\\) or \\(x > 0\\) fails at \\(x = 0.25\\), where the expression is positive.\n" +
    "The symmetry observation is the quickest filter: an odd function's negative set is never symmetric about the origin.",
  take: "Factor a polynomial inequality completely, mark the roots, and test one point per interval. Odd-degree factors flip the sign at their root; even-degree ones do not."
},

"quant-live-6a#2": {
  steps: "Step 1 — Deduce the signs. Suppose \\(y \\ge 0\\). Then \\(y < z\\) with both non-negative would give \\(y^2 < z^2\\), contradicting \\(y^2 > z^2\\). So \\(y < 0\\).\n" +
    "Step 2 — And \\(x < y < 0\\), so \\(x < 0\\) too.\n" +
    "Step 3 — But \\(z\\) is not determined. It can be negative (with \\(|z| < |y|\\)) or positive (with \\(z < |y|\\)); both are consistent with all the givens.\n" +
    "Step 4 — For an expression to be *guaranteed* positive, \\(z\\) must appear to an even power, so its unknown sign cannot matter.\n" +
    "Step 5 — Only \\(x^3 y^5 z^4\\) has an even exponent on \\(z\\).\n" +
    "Step 6 — Check it: \\(z^4 > 0\\); \\(x^3 < 0\\) and \\(y^5 < 0\\), and the product of two negatives is positive. So the whole expression is positive.",
  fast: "Two deductions carry the question. First, \\(y\\) must be negative — otherwise \\(y < z\\) and \\(y^2 > z^2\\) contradict each other. Second, \\(z\\)'s sign is genuinely unknown.\n" +
    "Then scan the exponents on \\(z\\): four of the five are odd, so those expressions can flip sign with \\(z\\). Only one survives, and confirming its sign takes a moment.",
  traps: "(A), (C), (D) and (E) all carry an odd power of \\(z\\), so each changes sign as \\(z\\) does — none can be guaranteed positive. Testing \\(z\\) both ways eliminates four choices at once.\n" +
    "The tempting shortcut is to assume all three variables are negative, which makes several expressions look positive. But \\(z\\) is only constrained by \\(z^2 > 0\\) and \\(y^2 > z^2\\), and a small positive \\(z\\) satisfies both.\n" +
    "The deduction about \\(y\\) is where the question is won: many people conclude only that \\(x\\) is negative.",
  take: "When a squared inequality runs opposite to a plain inequality, the variables must be negative. A variable of unknown sign is safe only under an even exponent."
},

"quant-live-6a#3": {
  steps: "Step 1 — For \\(x^{3.5}\\), \\(y^{2.5}\\) and \\(z^{1.5}\\) to be defined, all three variables must be non-negative.\n" +
    "Step 2 — So the given chain \\(x^{3.5} > y^{2.5} > z^{1.5}\\) is a chain of non-negative numbers.\n" +
    "Step 3 — Raising a chain of non-negative numbers to any positive power preserves its order. Squaring gives \\((x^{3.5})^2 > (y^{2.5})^2 > (z^{1.5})^2\\), i.e. \\(x^7 > y^5 > z^3\\).\n" +
    "Step 4 — Choice (D) asserts \\(x^7 < y^5 < z^3\\), the exact reverse of a relation that must hold. It can never be true.\n" +
    "Step 5 — For contrast, cubing the original chain gives \\(x^{10.5} > y^{7.5} > z^{4.5}\\), which is choice (E) — always true.\n" +
    "Step 6 — Choices (A), (B) and (C) are merely possible: \\(x=2, y=1.5, z=1\\) satisfies the given and (A); \\(x=4, y=5, z=6\\) satisfies the given and (B).",
  fast: "Notice that the exponents \\(3.5, 2.5, 1.5\\) double to \\(7, 5, 3\\). So squaring the given chain produces exactly the relation in one of the choices — and the choice that reverses it is the impossible one.\n" +
    "Looking for a choice that is the *negation* of an operation applied to the premise is the standard way to attack \"CANNOT be true\".",
  traps: "(B) \\(x < y < z\\) looks impossible because the chain runs the other way — but the exponents differ, so larger bases with smaller exponents can still produce smaller values. Try \\(x = 4, y = 5, z = 6\\): the powers are 128, 55.9 and 14.7, which satisfy the given while the bases increase.\n" +
    "(A) is the reverse intuition and is also merely possible.\n" +
    "(C) mixes powers and a bare variable; with values just below 1 it can be arranged.\n" +
    "(E) is guaranteed true, which is the opposite of what the question asks for.\n" +
    "The trap throughout is comparing bases when the exponents differ — only after equalising can you compare.",
  take: "Raising a chain of non-negative numbers to a positive power preserves its order. On \"CANNOT be true\", look for the choice that contradicts a consequence of the premise."
},

"quant-live-6a#4": {
  steps: "Step 1 — \\(x^3 = 25\\) has one real solution, \\(x = 25^{1/3} \\approx 2.924\\), and it is positive.\n" +
    "Step 2 — \\(y^4 = 64\\) has two real solutions, \\(y = \\pm 64^{1/4} = \\pm 2\\sqrt2 \\approx \\pm 2.828\\). The condition \\(xy > 0\\) with \\(x > 0\\) forces \\(y > 0\\), so \\(y \\approx 2.828\\).\n" +
    "Step 3 — \\(z^5 = 216\\) gives \\(z = 216^{1/5} \\approx 2.930\\).\n" +
    "Step 4 — Compare: \\(2.930 > 2.924 > 2.828\\).\n" +
    "Step 5 — So \\(z > x > y\\).",
  fast: "All three values sit just under 3, so this is really a precision question. Raise everything to the power 60 (the lcm of 3, 4 and 5) if you want exactness — \\(x^{60} = 25^{20}\\), \\(y^{60} = 64^{15}\\), \\(z^{60} = 216^{12}\\) — but decimals are faster here.\n" +
    "\\(y\\) is easiest: \\(64^{1/4} = 2\\sqrt2 \\approx 2.83\\), clearly the smallest. Then \\(x\\) and \\(z\\) need one more decimal place each, and \\(z\\) edges ahead.",
  traps: "(A), (B) and (C) all place \\(y\\) above \\(x\\) or \\(z\\), which is wrong — \\(2\\sqrt2 \\approx 2.83\\) is the smallest of the three.\n" +
    "(D) \\(z > y > x\\) gets \\(z\\) right at the top but reverses \\(x\\) and \\(y\\).\n" +
    "The condition \\(xy > 0\\) is not decoration: without it \\(y\\) could be \\(-2\\sqrt2\\) and the ordering would change entirely. Even powers always admit two real roots.\n" +
    "The other trap is comparing the right-hand sides — 25, 64, 216 — as though the largest constant implied the largest variable. The exponents differ, so that reasoning fails.",
  take: "An even power admits two real roots; use any sign condition given to pick one. To compare \\(a^{1/m}\\) values, raise all to the lcm of the exponents or estimate carefully."
},

"quant-live-6a#5": {
  steps: "Step 1 — The given is \\((a - b)c < 0\\).\n" +
    "Step 2 — Examine choice (D): \\(ac > bc\\) rearranges to \\(ac - bc > 0\\), i.e. \\((a - b)c > 0\\).\n" +
    "Step 3 — That is the direct negation of the given, so it can never be true.\n" +
    "Step 4 — Confirm each other choice is achievable. \\(a = 1, b = 2, c = 1\\) gives \\((a-b)c = -1 < 0\\) ✓ and satisfies (A) \\(a < b\\).\n" +
    "Step 5 — \\(a = 2, b = 1, c = -1\\) gives \\(-1 < 0\\) ✓ and satisfies (B) \\(c < 0\\) and also (E) \\(a^2 - b^2 = 3 > 0\\).\n" +
    "Step 6 — \\(a = 1, b = 2, c = 0.5\\) gives \\(-0.5 < 0\\) ✓ and satisfies (C) \\(|c| < 1\\).",
  fast: "Rearrange each choice into the form \\((a-b)c\\) and compare with the premise. Only one becomes the premise with the inequality reversed, and that is the impossible one — no test values needed.\n" +
    "Factoring \\(ac - bc\\) as \\((a-b)c\\) is the single step the question is testing.",
  traps: "(A) and (B) each describe one of the two ways the premise can be satisfied — \\(a < b\\) with \\(c > 0\\), or \\(a > b\\) with \\(c < 0\\). Both are perfectly possible, and neither is forced.\n" +
    "(C) constrains only the size of \\(c\\), which the premise says nothing about.\n" +
    "(E) \\(a^2 - b^2 > 0\\) means \\(|a| > |b|\\), achievable in the second scenario above.\n" +
    "The mistake to avoid is trying to determine the signs of \\(a\\), \\(b\\) and \\(c\\) individually — the premise constrains only their combination.",
  take: "Rewrite each answer choice in the same algebraic form as the premise. A choice that is the premise with a flipped inequality can never be true."
},

"quant-live-6a#6": {
  steps: "Step 1 — We are told \\(b < c < d\\) with \\(c > 0\\), and all three are integers.\n" +
    "Step 2 — So \\(c \\ge 1\\), and since \\(d > c\\) is an integer, \\(d \\ge 2\\).\n" +
    "Step 3 — Therefore \\(cd \\ge 2c\\), and since \\(c \\ge 1\\), \\(2c > c\\). So \\(cd > c\\).\n" +
    "Step 4 — Combining with \\(b < c\\): \\(b < c < cd\\), so \\(b < cd\\) always.\n" +
    "Step 5 — Choice (C) asserts \\(b - cd > 0\\), i.e. \\(b > cd\\). That contradicts Step 4, so it can never be true.\n" +
    "Step 6 — The others are all achievable: \\(b=1, c=2, d=3\\) gives (A) \\(bcd = 6 > 0\\); \\(b=-10, c=1, d=2\\) gives (B) \\(b + cd = -8 < 0\\) and (D) \\(\\tfrac{b}{cd} = -5 < 0\\); \\(b=-1, c=1, d=2\\) gives (E) \\(b^3cd = -2 < 0\\).",
  fast: "The integrality is what makes the argument work: \\(d\\) must be at least 2, which forces \\(cd\\) strictly above \\(c\\), which is already above \\(b\\). Chain those three facts and (C) is impossible.\n" +
    "For the other choices, one example each suffices — and a large negative \\(b\\) handles most of them at once.",
  traps: "(B) \\(b + cd < 0\\) looks impossible at first, since \\(cd\\) is positive; but \\(b\\) is unbounded below, so a sufficiently negative \\(b\\) makes the sum negative.\n" +
    "(A) \\(bcd > 0\\) requires \\(b > 0\\), which is allowed as long as \\(b < c\\).\n" +
    "(D) and (E) both hinge on \\(b\\) being negative, which the premise permits.\n" +
    "The step people skip is Step 2: without integrality, \\(d\\) could be \\(1.01\\) and \\(cd\\) could be barely above \\(c\\) — the conclusion would still hold here, but the reasoning is cleanest with the integer floor.",
  take: "Use integrality to convert a strict inequality into a numerical floor (\\(d > c \\ge 1\\) means \\(d \\ge 2\\)). Chain the resulting bounds to rule a choice out."
},

"quant-live-6a#7": {
  steps: "Step 1 — Note that \\(x^2 = |x|^2\\), so the condition \\(|x| < x^2\\) is the same as \\(|x| < |x|^2\\).\n" +
    "Step 2 — Rearrange: \\(|x|^2 - |x| > 0\\), i.e. \\(|x|(|x| - 1) > 0\\).\n" +
    "Step 3 — Since \\(|x| \\ge 0\\), the product is positive only when \\(|x| > 0\\) and \\(|x| - 1 > 0\\), that is \\(|x| > 1\\).\n" +
    "Step 4 — \\(|x| > 1\\) is exactly equivalent to \\(x^2 > 1\\), which is choice (E).\n" +
    "Step 5 — Both signs remain possible: \\(x = 2\\) and \\(x = -2\\) each satisfy the original condition, so nothing about the sign of \\(x\\) is forced.",
  fast: "Rewriting \\(x^2\\) as \\(|x|^2\\) turns the inequality into a statement about a single non-negative quantity, and then it says only that \\(|x| > 1\\).\n" +
    "Two test values finish the job: \\(x = 2\\) and \\(x = -2\\) both satisfy the premise, which immediately kills every choice that pins down the sign of \\(x\\).",
  traps: "(A) \\(x > 0\\) and (B) \\(x < 0\\) are each eliminated by the other's test value — the condition is symmetric in \\(x\\) and \\(-x\\).\n" +
    "(C) \\(x > 1\\) is true for some solutions but not all, since \\(x = -2\\) also works. \"Must be true\" requires it for every solution.\n" +
    "(D) \\(-1 < x < 1\\) is exactly the range where the condition *fails*: there \\(x^2 < |x|\\).\n" +
    "The instinct that \\(x^2 > |x|\\) means \"\\(x\\) is big\" is right; the error is assuming big means positive.",
  take: "Replace \\(x^2\\) with \\(|x|^2\\) to make an inequality symmetric in sign. \"Must be true\" fails to any single counterexample, so test both signs."
},

"quant-live-6a#8": {
  steps: "Step 1 — All four variables are positive, so cross-multiplying inequalities is safe and preserves direction.\n" +
    "Step 2 — Take choice (C): \\(\\dfrac bc < \\dfrac da\\). Multiply both sides by \\(ac > 0\\): \\(ab < cd\\).\n" +
    "Step 3 — That contradicts the given \\(ab > cd\\), so (C) can never be true.\n" +
    "Step 4 — Check the others. Choice (D) \\(\\dfrac ac > \\dfrac db\\) cross-multiplies to \\(ab > cd\\) — which is exactly the premise, so it is always true and certainly can be.\n" +
    "Step 5 — Choice (E) \\((cd)^2 < (ab)^2\\) follows from squaring \\(ab > cd > 0\\), so it is also always true.\n" +
    "Step 6 — Choices (A) and (B) constrain individual variables. With \\(a = 10, b = 1, c = 2, d = 1\\), \\(ab = 10 > 2 = cd\\) ✓ and \\(c > b\\) ✓. With \\(a = 1, b = 10, c = 1, d = 2\\), \\(ab = 10 > 2\\) ✓ and \\(d > a\\) ✓.",
  fast: "Cross-multiply every fractional choice into a product comparison and match it against the premise. Positivity is stated explicitly, which is what licenses the manipulation without sign case-work.\n" +
    "Two of the choices reduce to the premise or a consequence of it, and one reduces to its negation — that one is the answer.",
  traps: "(D) is the mirror image of the impossible choice and looks equally suspicious, but its cross-multiplication lands the other way: \\(ab > cd\\), the premise itself.\n" +
    "(A) and (B) tempt anyone who reads \\(ab > cd\\) as implying \\(a > c\\) and \\(b > d\\). A product inequality says nothing about the individual factors — one can be far larger while the other is smaller.\n" +
    "(E) is a consequence, not a contradiction.\n" +
    "The discipline is to convert everything to the same form before comparing, rather than reasoning about the fractions directly.",
  take: "With all quantities positive, cross-multiplication is safe. A product inequality constrains only the products — never the individual factors."
},

"quant-live-6a#9": {
  steps: "Step 1 — Write the three consecutive even integers as \\(q = 2n\\), \\(r = 2n+2\\), \\(s = 2n+4\\) for an integer \\(n\\).\n" +
    "Step 2 — Expand: \\(s^2 = 4n^2 + 16n + 16\\), \\(r^2 = 4n^2 + 8n + 4\\), \\(q^2 = 4n^2\\).\n" +
    "Step 3 — So \\(s^2 - r^2 - q^2 = (4n^2 + 16n + 16) - (4n^2 + 8n + 4) - 4n^2 = -4n^2 + 8n + 12\\).\n" +
    "Step 4 — Factor: \\(-4(n^2 - 2n - 3) = -4(n - 3)(n + 1)\\).\n" +
    "Step 5 — Evaluate at integers: \\(n = 0\\) gives 12; \\(n = 1\\) gives 16; \\(n = 2\\) gives 12; \\(n = 3\\) and \\(n = -1\\) give 0; \\(n = 4\\) and \\(n = -2\\) give \\(-20\\).\n" +
    "Step 6 — Can it equal 8? Set \\(-4n^2 + 8n + 12 = 8\\), i.e. \\(n^2 - 2n - 1 = 0\\), whose roots are \\(1 \\pm \\sqrt2\\) — not integers.\n" +
    "Step 7 — So 8 is the one value that cannot occur.",
  fast: "The parametrisation collapses the whole expression to \\(-4(n-3)(n+1)\\), a downward parabola in \\(n\\) with maximum 16 at \\(n = 1\\).\n" +
    "Every value it takes is \\(16\\) minus a multiple of 4 — the outputs run 16, 12, 0, \\(-20\\), and so on. Since 8 differs from 16 by 8, which is not of the form \\(4k^2\\), it is unreachable.",
  traps: "(E) 16 is the maximum value, attained at \\(n = 1\\), and looks like the natural \"impossible\" candidate because it is extreme. It is achievable.\n" +
    "(B) 0 and (D) 12 are each achieved at two different \\(n\\), which makes them look suspiciously common — again, achievable.\n" +
    "(A) \\(-20\\) is a large negative value that seems out of reach, but the parabola opens downward and eventually passes through it.\n" +
    "The safe method is to tabulate the expression for \\(n = -2\\) through \\(n = 4\\); the one choice missing from that list is the answer.",
  take: "Parametrise consecutive terms with a single variable, simplify, and tabulate. A quadratic in \\(n\\) takes only a sparse set of integer values."
},

"quant-live-6a#10": {
  steps: "Step 1 — Solve the first condition: \\(-9 + x^2 \\le 0\\) means \\(x^2 \\le 9\\), i.e. \\(-3 \\le x \\le 3\\).\n" +
    "Step 2 — Since \\(x\\) is an integer, the sample space is \\(\\{-3, -2, -1, 0, 1, 2, 3\\}\\) — seven values.\n" +
    "Step 3 — Now the event: \\(x \\cdot |x| < 0\\). Since \\(|x| \\ge 0\\), the product is negative exactly when \\(x < 0\\) (and \\(|x| \\ne 0\\), which follows).\n" +
    "Step 4 — The negative values in the sample space are \\(-3, -2, -1\\) — three of them.\n" +
    "Step 5 — Probability \\(= \\dfrac37\\).",
  fast: "\\(x|x|\\) has the same sign as \\(x\\) always, so the event is just \\(x < 0\\). And \\(x^2 \\le 9\\) is just \\(|x| \\le 3\\). Two translations and the counting is immediate: 3 negatives out of 7 integers.\n" +
    "The endpoints matter: the inequality is \\(\\le\\), so \\(-3\\) and \\(3\\) are both included, giving seven values rather than five.",
  traps: "(B) \\(\\tfrac12\\) comes from counting \\(-3, -2, -1\\) against \\(1, 2, 3\\) and forgetting that 0 is also in the sample space — the denominator is 7, not 6.\n" +
    "(E) \\(\\tfrac34\\) and (D) \\(\\tfrac14\\) use a denominator of 4, from restricting to one side of zero.\n" +
    "(C) \\(\\tfrac23\\) comes from a sample space of 6 with 4 favourable.\n" +
    "Zero is the pivot: it satisfies \\(x^2 \\le 9\\) so it belongs in the denominator, but \\(0 \\cdot |0| = 0\\) is not less than zero, so it does not belong in the numerator.",
  take: "\\(x|x|\\) always shares the sign of \\(x\\). Include the endpoints when an inequality is non-strict, and remember zero belongs to the sample space but rarely to the event."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-6a#11": {
  steps: "Step 1 — An absolute-value inequality needs both cases, split at the point where the inside changes sign — here \\(x = 3\\).\n" +
    "Step 2 — Case \\(x \\le 3\\): \\(|3 - x| = 3 - x\\), so the inequality is \\(3 - x < x + 5\\), giving \\(-2 < 2x\\) and \\(x > -1\\). Combined with the case condition: \\(-1 < x \\le 3\\).\n" +
    "Step 3 — Case \\(x > 3\\): \\(|3 - x| = x - 3\\), so the inequality is \\(x - 3 < x + 5\\), i.e. \\(-3 < 5\\) — true for every \\(x\\). So all \\(x > 3\\) qualify.\n" +
    "Step 4 — Union of the two cases: \\(x > -1\\).\n" +
    "Step 5 — I says \\(x > -1\\) — exactly the solution set, so it must be true.\n" +
    "Step 6 — II says \\(x < 2\\), but \\(x = 10\\) satisfies the original inequality (\\(7 < 15\\)) — not necessary.\n" +
    "Step 7 — III says \\(x > 0\\), but \\(x = -0.5\\) works (\\(3.5 < 4.5\\)) — not necessary.",
  fast: "Solve the inequality once and compare the solution set to each statement; do not test statements individually.\n" +
    "The second case resolves to a tautology, which is the tell that the solution set is an unbounded ray — and an unbounded set immediately kills any statement imposing an upper bound.",
  traps: "(E) and (B) accept the upper bound \\(x < 2\\), which comes from solving only the first case and forgetting that large \\(x\\) satisfies the inequality trivially.\n" +
    "(D) and (C) accept \\(x > 0\\), tightening the true bound of \\(-1\\) — a value between \\(-1\\) and 0 is a legitimate solution.\n" +
    "The other frequent error is squaring both sides without checking that the right-hand side is non-negative; here \\(x + 5\\) can be negative for \\(x < -5\\), and those values must be excluded, though the final answer happens to exclude them anyway.",
  take: "Split an absolute-value inequality at its sign change and solve each case with its own domain restriction. A case that reduces to a tautology signals an unbounded solution set."
},

"quant-live-6a#12": {
  steps: "Step 1 — With \\(-1 < x < 0\\), record the basic facts: \\(x\\) is negative, and \\(|x| < 1\\), so odd powers are negative and even powers are positive but shrinking.\n" +
    "Step 2 — I: \\(x^3\\) is negative (odd power of a negative), while \\(x^2\\) is positive. A negative is always less than a positive, so \\(x^3 < x^2\\) — [[true]].\n" +
    "Step 3 — II: \\(x^5\\) is negative. And \\(1 - x\\) is \\(1\\) minus a negative, hence greater than 1. So \\(x^5 < 0 < 1 < 1 - x\\) — [[true]].\n" +
    "Step 4 — III: since \\(0 < x^2 < 1\\), squaring shrinks it further: \\(x^4 = (x^2)^2 < x^2\\) — [[true]].\n" +
    "Step 5 — All three must hold.",
  fast: "Test \\(x = -0.5\\) and all three fall out in one line each: \\(x^3 = -0.125 < 0.25 = x^2\\) ✓; \\(x^5 = -0.031 < 1.5 = 1-x\\) ✓; \\(x^4 = 0.0625 < 0.25 = x^2\\) ✓.\n" +
    "Then confirm with the two structural rules rather than more test values: odd powers keep the sign, and on \\((0,1)\\) higher powers are smaller.",
  traps: "(A), (B), (C) and (D) each reject at least one statement, usually III — the intuition that \"higher power means bigger\" is correct only for \\(|x| > 1\\), and here \\(|x| < 1\\) reverses it.\n" +
    "Statement II can also be doubted because it mixes a fifth power with a linear expression, but the sign argument alone settles it: the left side is negative and the right side exceeds 1.\n" +
    "Note that the interval excludes both endpoints, so no equality cases arise.",
  take: "On \\(-1 < x < 0\\): odd powers are negative, even powers are positive and shrink as the exponent grows. Higher powers grow only when \\(|x| > 1\\)."
},

"quant-live-6a#13": {
  steps: "Step 1 — The question asks for a solution set that is one connected piece of finite length — not two pieces, not an infinite ray.\n" +
    "Step 2 — (A) \\(x^4 \\ge 1\\) means \\(|x| \\ge 1\\): two infinite rays.\n" +
    "Step 3 — (B) \\(x^3 \\le 27\\) means \\(x \\le 3\\): one infinite ray.\n" +
    "Step 4 — (C) \\(x^2 \\ge 16\\) means \\(|x| \\ge 4\\): two infinite rays.\n" +
    "Step 5 — (D) \\(2 \\le |x| \\le 5\\) means \\(x \\in [-5, -2]\\) or \\(x \\in [2, 5]\\): two finite segments, not one.\n" +
    "Step 6 — (E) \\(2 \\le 3x + 4 \\le 6\\): subtract 4 to get \\(-2 \\le 3x \\le 2\\), then divide by 3 to get \\(-\\tfrac23 \\le x \\le \\tfrac23\\) — a single finite segment ✓.",
  fast: "Sort the choices by structure rather than solving each fully. An inequality of the form \\(|x| \\ge k\\) always gives two rays; \\(k \\le |x| \\le m\\) always gives two segments; only a two-sided bound on a *linear* expression gives one finite piece.\n" +
    "That classification identifies the answer without any algebra, and the algebra is then just a confirmation.",
  traps: "(D) is the closest call and the intended trap: it is bounded on both sides, so it feels finite — but the absolute value splits it into two disjoint segments, and \"a single segment\" rules it out.\n" +
    "(A) and (C) are bounded below in absolute value, which sends them outward to infinity rather than inward.\n" +
    "(B) is a single piece but unbounded.\n" +
    "The two properties to check separately are connectedness and finiteness; each distractor fails exactly one of them.",
  take: "\\(|x| \\ge k\\) gives two rays; \\(|x| \\le k\\) gives one segment; \\(k \\le |x| \\le m\\) gives two segments. Only a two-sided bound on a linear expression yields a single finite interval."
},

"quant-live-6a#14": {
  steps: "Step 1 — The premise \\(x > y^2 > z^4\\) says nothing about the signs of \\(y\\) and \\(z\\), and nothing forces the values to exceed 1. Both freedoms are needed.\n" +
    "Step 2 — I, \\(x > y > z\\): take \\(x = 4\\), \\(y = 1.5\\), \\(z = 1\\). Then \\(4 > 2.25 > 1\\) ✓ and \\(4 > 1.5 > 1\\) ✓ — [[possible]].\n" +
    "Step 3 — II, \\(z > y > x\\): work between 0 and 1, where higher powers shrink. Take \\(x = 0.3\\), \\(y = 0.5\\), \\(z = 0.6\\). Then \\(0.3 > 0.25 > 0.1296\\) ✓ and \\(0.6 > 0.5 > 0.3\\) ✓ — [[possible]].\n" +
    "Step 4 — III, \\(x > z > y\\): use a negative \\(y\\). Take \\(x = 4\\), \\(y = -1.5\\), \\(z = 1\\). Then \\(4 > 2.25 > 1\\) ✓ and \\(4 > 1 > -1.5\\) ✓ — [[possible]].\n" +
    "Step 5 — All three orderings can occur.",
  fast: "\"Could be true\" needs one example each, and the three examples come from three different tricks: ordinary values above 1 for I, fractions between 0 and 1 for II (where \\(y^2 < y\\)), and a negative \\(y\\) for III.\n" +
    "Recognising that the premise involves only *even* powers of \\(y\\) and \\(z\\) — which erase sign information — is what opens up the third case.",
  traps: "(A) and (D) reject II, on the intuition that \\(x > y^2\\) should force \\(x\\) to be the largest. On \\((0,1)\\) squaring shrinks, so a small \\(x\\) can still exceed \\(y^2\\) while \\(y\\) exceeds \\(x\\).\n" +
    "(C) and (B) reject I or III by assuming everything is positive or everything is greater than 1.\n" +
    "The two habits that solve this family: always try values in \\((0,1)\\), and always try a negative value under an even power.",
  take: "Even powers erase signs and shrink values on \\((0,1)\\). For \"could be true\", search deliberately among fractions and negatives, not just among integers above 1."
},

"quant-live-6a#15": {
  steps: "Step 1 — With \\(x > 0\\), compare the three expressions by finding where each ordering can hold.\n" +
    "Step 2 — I, \\(x^2 < 2x < \\tfrac1x\\): try \\(x = 0.5\\). Then \\(x^2 = 0.25\\), \\(2x = 1\\), \\(\\tfrac1x = 2\\), and \\(0.25 < 1 < 2\\) ✓ — [[possible]].\n" +
    "Step 3 — II, \\(x^2 < \\tfrac1x < 2x\\): the first part needs \\(x^3 < 1\\), so \\(x < 1\\); the second needs \\(1 < 2x^2\\), so \\(x > \\tfrac1{\\sqrt2} \\approx 0.707\\). Any \\(x\\) in \\((0.707,\\ 1)\\) works.\n" +
    "Step 4 — Take \\(x = 0.9\\): \\(x^2 = 0.81\\), \\(\\tfrac1x = 1.111\\), \\(2x = 1.8\\), and \\(0.81 < 1.111 < 1.8\\) ✓ — [[possible]].\n" +
    "Step 5 — III, \\(2x < x^2 < \\tfrac1x\\): the first part needs \\(x^2 > 2x\\), i.e. \\(x > 2\\).\n" +
    "Step 6 — But then \\(x^2 > 4\\) while \\(\\tfrac1x < \\tfrac12\\), so \\(x^2 < \\tfrac1x\\) is impossible. The chain breaks — [[impossible]].\n" +
    "Step 7 — So I and II can hold, and III cannot.",
  fast: "Each ordering pins \\(x\\) to a range, so find the range instead of hunting values. \\(x^2 < 2x\\) means \\(x < 2\\); \\(2x < \\tfrac1x\\) means \\(x^2 < \\tfrac12\\); \\(x^2 < \\tfrac1x\\) means \\(x < 1\\).\n" +
    "Statement III demands \\(x > 2\\) and \\(x < 1\\) simultaneously, which is visibly contradictory — no test values needed.",
  traps: "(E) accepts III, usually by testing a large \\(x\\) for the first inequality and never checking that it breaks the second.\n" +
    "(A) rejects II, which is the subtlest of the three: it holds only on the narrow window \\(0.707 < x < 1\\), so a test at \\(x = 0.5\\) or \\(x = 2\\) misses it entirely.\n" +
    "(B) and (C) accept only one statement.\n" +
    "The lesson is to translate each inequality into a condition on \\(x\\) and then intersect the conditions — testing scattered values can easily miss a narrow window.",
  take: "Convert each proposed ordering into a range for the variable and intersect them. An empty intersection proves impossibility; a narrow one is easy to miss by sampling."
},

"quant-live-6a#16": {
  steps: "Step 1 — Deal with the negative base first. \\((-3)^{-4n} = \\left((-3)^{-4}\\right)^{n}\\), and \\(-4n\\) is even for every integer \\(n\\), so the result is positive: \\((-3)^{-4n} = 3^{-4n}\\).\n" +
    "Step 2 — Now both sides share the base 3: \\(3^{-4n} > 3^{6-n}\\).\n" +
    "Step 3 — Since \\(3 > 1\\), the exponential is increasing, so the inequality between the values matches the inequality between the exponents: \\(-4n > 6 - n\\).\n" +
    "Step 4 — Solve: \\(-3n > 6\\), so \\(n < -2\\) (dividing by \\(-3\\) reverses the inequality).\n" +
    "Step 5 — Of the choices, only \\(-5\\) satisfies \\(n < -2\\).",
  fast: "Two moves: kill the minus sign using the even exponent, then compare exponents directly because the base exceeds 1.\n" +
    "The sign flip when dividing by \\(-3\\) is the last place to slip; a quick check with \\(n = -5\\) confirms — \\(3^{20}\\) against \\(3^{11}\\), and the left side is indeed larger.",
  traps: "(B) \\(-1\\) satisfies \\(n < 0\\) but not \\(n < -2\\) — it comes from forgetting the sign reversal on the final division, which would give \\(n > -2\\).\n" +
    "(C), (D) and (E) are positive values, chosen if the base's negativity is mishandled so that the inequality flips direction.\n" +
    "The core danger is treating \\((-3)^{-4n}\\) as negative. It is not: \\(-4n\\) is even whatever the sign of \\(n\\), so the expression is always positive.",
  take: "\\((-a)^{\\text{even}} = a^{\\text{even}}\\). With a common base above 1, compare exponents directly — and reverse the inequality when dividing by a negative."
},

"quant-live-6a#17": {
  steps: "Step 1 — Clear the denominator: \\(\\dfrac{3^{1-k}}{3000} < 1\\) is equivalent to \\(3^{1-k} < 3000\\).\n" +
    "Step 2 — Find the largest power of 3 below 3000. \\(3^7 = 2187\\) and \\(3^8 = 6561\\).\n" +
    "Step 3 — So the condition is \\(1 - k \\le 7\\).\n" +
    "Step 4 — Rearrange: \\(-k \\le 6\\), so \\(k \\ge -6\\).\n" +
    "Step 5 — The smallest integer satisfying \\(k \\ge -6\\) is \\(-6\\).\n" +
    "Step 6 — Check: \\(k = -6\\) gives \\(3^{7} = 2187 < 3000\\) ✓, while \\(k = -7\\) gives \\(3^{8} = 6561 > 3000\\) ✗.",
  fast: "Note that \\(k\\) appears with a minus sign in the exponent, so *smaller* \\(k\\) means a *larger* power of 3 — the direction is inverted, and that inversion is the whole question.\n" +
    "Knowing \\(3^7 = 2187\\) and \\(3^8 = 6561\\) makes the rest immediate; those two values bracket 3000.",
  traps: "(A) through (D) are all larger than \\(-6\\) and do satisfy the inequality — they are valid values of \\(k\\), just not the smallest. The question asks for the minimum, so the answer sits at the boundary.\n" +
    "The commonest error is solving for the largest \\(k\\) instead, or forgetting to reverse the direction when multiplying by \\(-1\\).\n" +
    "Verifying the boundary from both sides (\\(k = -6\\) works, \\(k = -7\\) fails) is the check that confirms you have the right end of the range.",
  take: "A negative coefficient on the variable in an exponent inverts the direction of the inequality. Verify a boundary answer by testing one step beyond it."
},

"quant-live-6a#18": {
  steps: "Step 1 — Given \\(0 < a < 1 < b\\), size up each choice.\n" +
    "Step 2 — (A) \\(\\dfrac ab\\): the numerator is below 1 and the denominator above it, so this is less than 1.\n" +
    "Step 3 — (C) \\(1 - b\\) is negative, since \\(b > 1\\).\n" +
    "Step 4 — (D) \\(\\left(\\dfrac ba\\right)^2\\): dividing by \\(a < 1\\) makes \\(\\dfrac ba > b > 1\\), and squaring a number above 1 makes it larger still, so \\(\\left(\\dfrac ba\\right)^2 > b^2\\).\n" +
    "Step 5 — (B) \\(b - a\\) is less than \\(b\\), and \\(b < b^2\\) because \\(b > 1\\). So (D) exceeds (B) as well.\n" +
    "Step 6 — (D) beats every other option for all admissible \\(a\\) and \\(b\\), so it is determinable and it is the greatest.",
  fast: "One chain settles it: \\(\\left(\\tfrac ba\\right)^2 > b^2 > b > b - a\\), and the other two choices are below 1 or negative.\n" +
    "The key structural observation is that dividing by a number in \\((0,1)\\) *magnifies*, and squaring then magnifies again — so (D) grows without bound as \\(a\\) approaches 0, while every rival stays modest.",
  traps: "(B) \\(b - a\\) is the most plausible rival because \\(b\\) is unbounded above — but \\(\\tfrac ba\\) is unbounded too and always exceeds \\(b\\), so squaring keeps it comfortably ahead of \\(b - a\\).\n" +
    "(E) tempts anyone who tries a few values and finds the comparisons close. They are not close in general: the inequality chain holds for every legal pair.\n" +
    "(A) and (C) are eliminated by sign and size in one glance.\n" +
    "Test extreme values if unsure — \\(a = 0.99, b = 1.01\\) makes everything nearly 1, yet the ratio-squared term still comes out on top at about 1.04.",
  take: "Dividing by a value in \\((0,1)\\) magnifies; squaring a value above 1 magnifies further. Build one inequality chain covering every choice rather than testing values."
},

"quant-live-6a#19": {
  steps: "Step 1 — Note that \\((x+2)^2 \\ge 0\\) always, so it never flips the sign — it only contributes a zero at \\(x = -2\\).\n" +
    "Step 2 — At \\(x = -2\\) the whole product is 0, which satisfies \\(\\le 0\\). So \\(x = -2\\) is a solution.\n" +
    "Step 3 — For every other \\(x\\), the sign of the product matches the sign of \\((x+3)(x-1)\\).\n" +
    "Step 4 — \\((x+3)(x-1) \\le 0\\) holds between the roots: \\(-3 \\le x \\le 1\\).\n" +
    "Step 5 — The integers in that range are \\(-3, -2, -1, 0, 1\\).\n" +
    "Step 6 — Of those, the ones less than 0 are \\(-3, -2, -1\\) — three integers.",
  fast: "A squared factor is a sign-neutral factor: strip it out, remembering that it adds its own root as a solution when the inequality allows equality.\n" +
    "That leaves an ordinary quadratic inequality with roots \\(-3\\) and \\(1\\), and the answer is a count of negative integers in \\([-3, 1]\\).",
  traps: "(D) Four and (E) Five count all the integer solutions rather than only those below zero — the question's final clause is easy to skip.\n" +
    "(B) Two drops \\(x = -2\\), which is a genuine solution precisely because the inequality is \\(\\le\\) rather than \\(<\\). With a strict inequality the answer would indeed be two.\n" +
    "(A) One counts only one endpoint.\n" +
    "Two details decide this question: the squared factor contributes a solution at equality, and zero itself is not \"less than 0\".",
  take: "An even-power factor never changes sign; it only supplies a root where the expression equals zero. Check whether the inequality is strict before including that root."
},

"quant-live-6a#20": {
  steps: "Step 1 — When both variables range over intervals, the extreme products always occur at the endpoints, so evaluate all four corner combinations.\n" +
    "Step 2 — \\((-8)(-4) = 32\\).\n" +
    "Step 3 — \\((-8)(10) = -80\\).\n" +
    "Step 4 — \\((2)(-4) = -8\\).\n" +
    "Step 5 — \\((2)(10) = 20\\).\n" +
    "Step 6 — The largest is 32 and the smallest is \\(-80\\). Because \\(x\\) and \\(y\\) vary continuously, every value between those extremes is attainable.\n" +
    "Step 7 — So \\(-80 \\le xy \\le 32\\).",
  fast: "Four multiplications, then take the max and the min. The only insight needed is that a product of two intervals is extremised at the corners — the interior never beats them.\n" +
    "A sanity check on the signs: the most negative product pairs the most negative \\(x\\) with the most positive \\(y\\), while the most positive pairs the two most negative values.",
  traps: "(E) \\(-80 \\le xy \\le 80\\) assumes symmetry, taking \\(80\\) as an upper bound — but \\((-8)(-10)\\) is not available, since \\(y\\) never reaches \\(-10\\).\n" +
    "(B) \\(-32 \\le xy \\le 20\\) uses \\(32\\) with the wrong sign and misses the \\(-80\\) corner entirely.\n" +
    "(A) and (D) come from pairing only same-signed or only opposite-signed endpoints, computing two corners instead of four.\n" +
    "All four corners must be evaluated, because which one gives the maximum depends on the signs present in each interval.",
  take: "The range of a product of two intervals is bounded by the four endpoint products. Compute all four, then take the smallest and largest."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-6b#1": {
  steps: "Step 1 — Look at the sign of each term on the left. \\(x^2 \\ge 0\\) for every real \\(x\\).\n" +
    "Step 2 — \\(5|x| \\ge 0\\), since an absolute value is never negative.\n" +
    "Step 3 — The constant is \\(+6\\).\n" +
    "Step 4 — So the left side is at least \\(0 + 0 + 6 = 6\\) for every real \\(x\\), with the minimum reached at \\(x = 0\\).\n" +
    "Step 5 — A quantity that is always at least 6 can never equal 0, so there are no solutions — integer or otherwise.",
  fast: "Scan the signs before doing any algebra. Every term is non-negative and one of them is a positive constant, so the sum is bounded below by 6 and the equation is unsatisfiable.\n" +
    "The trap is to reach for the quadratic formula: \\(x^2 + 5x + 6 = (x+2)(x+3)\\) has roots \\(-2\\) and \\(-3\\), but the absolute value makes the middle term non-negative, so those roots do not survive.",
  traps: "(B) 2 is what you get by dropping the absolute value bars and factoring \\(x^2 + 5x + 6 = 0\\) to find \\(x = -2\\) and \\(x = -3\\). Substituting either back into the original gives \\(4 + 10 + 6 = 20 \\ne 0\\).\n" +
    "(A) 4 comes from also solving \\(x^2 - 5x + 6 = 0\\) for the negative branch and collecting all four roots without checking any of them.\n" +
    "(C) 3 and (D) 1 are partial versions of the same error.\n" +
    "Always substitute candidate roots back when absolute values are present — the case analysis produces extraneous solutions.",
  take: "Check the sign of every term first. A sum of non-negative terms plus a positive constant can never be zero, whatever the algebra suggests."
},

"quant-live-6b#2": {
  steps: "Step 1 — The right-hand side is \\(x\\), and the left is an absolute value, hence non-negative. So any root must satisfy \\(x \\ge 0\\).\n" +
    "Step 2 — Case \\(x^2 - 2 \\ge 0\\): the equation is \\(x^2 - 2 = x\\), i.e. \\(x^2 - x - 2 = 0\\), which factors as \\((x-2)(x+1) = 0\\).\n" +
    "Step 3 — That gives \\(x = 2\\) or \\(x = -1\\). Only \\(x = 2\\) survives the sign condition and the case condition.\n" +
    "Step 4 — Case \\(x^2 - 2 < 0\\): the equation is \\(2 - x^2 = x\\), i.e. \\(x^2 + x - 2 = 0\\), which factors as \\((x+2)(x-1) = 0\\).\n" +
    "Step 5 — That gives \\(x = 1\\) or \\(x = -2\\). Only \\(x = 1\\) survives (and \\(1^2 = 1 < 2\\) ✓).\n" +
    "Step 6 — The roots are 1 and 2, so their range is \\(2 - 1 = 1\\).",
  fast: "The observation that saves the most time is \\(x \\ge 0\\), which comes free from the equation's shape and discards half the candidate roots immediately.\n" +
    "Then two small quadratics, each factoring cleanly, and the answer is the spread of the survivors — not their count, not their sum.",
  traps: "(C) 2 is the *number* of roots rather than their range — a natural confusion when both quantities are small integers.\n" +
    "(A) 4 is the range of all four candidate roots \\(-2, -1, 1, 2\\), obtained by never checking them against the case conditions.\n" +
    "(B) 3 is the range \\(2 - (-1)\\), keeping one extraneous negative root.\n" +
    "(E) 0 would mean a single root.\n" +
    "Every wrong choice here comes from skipping the verification step, which is exactly what absolute-value case analysis requires.",
  take: "An equation \\(|f(x)| = x\\) forces \\(x \\ge 0\\). Solve both cases, discard roots that violate their own case condition, then answer the question actually asked."
},

"quant-live-6b#3": {
  steps: "Step 1 — \\(|x| + |y| \\le 2\\) is the filled diamond with vertices \\((\\pm 2, 0)\\) and \\((0, \\pm 2)\\). Its diagonals are 4 each, so its area is \\(\\tfrac12(4)(4) = 8\\).\n" +
    "Step 2 — The second condition \\(|x| \\ge 1\\) keeps only the parts with \\(x \\ge 1\\) or \\(x \\le -1\\), cutting away the central band.\n" +
    "Step 3 — Take the right-hand piece. At \\(x = 1\\) the diamond allows \\(|y| \\le 1\\), and at \\(x = 2\\) it narrows to the single point \\((2, 0)\\).\n" +
    "Step 4 — So the piece is a triangle with vertices \\((1, 1)\\), \\((1, -1)\\) and \\((2, 0)\\): a base of 2 running along \\(x = 1\\) and a height of 1.\n" +
    "Step 5 — Its area is \\(\\tfrac12(2)(1) = 1\\).\n" +
    "Step 6 — By symmetry the left-hand piece is congruent, so the total area is \\(2\\).",
  fast: "Sketch the diamond and the two vertical cut lines; the leftover pieces are the two end-caps, each an obvious triangle.\n" +
    "Reading the triangle's base off the diamond is the only computation: at \\(x = 1\\), \\(|y| \\le 2 - 1 = 1\\), so the base is 2 and the apex sits one unit away at \\((2,0)\\).",
  traps: "(B) 1 counts only one of the two end-caps — the condition \\(|x| \\ge 1\\) is symmetric and keeps both.\n" +
    "(E) 4 comes from computing the area of the removed middle band (which is 6) incorrectly, or from treating each cap as a square.\n" +
    "(D) 3 and (A) \\(\\tfrac12\\) come from mis-reading the triangle's dimensions — the base is 2, not 1, because \\(y\\) runs from \\(-1\\) to \\(1\\).\n" +
    "The absolute value on \\(x\\) is what doubles the answer; treating \\(|x| \\ge 1\\) as \\(x \\ge 1\\) halves it.",
  take: "\\(|x| + |y| \\le k\\) is a filled diamond of area \\(2k^2\\). A condition \\(|x| \\ge c\\) keeps two symmetric pieces, not one."
},

"quant-live-6b#4": {
  steps: "Step 1 — Substitute \\(X = x - 1\\) and \\(Y = y + 2\\). The equation becomes \\(|X| + |Y| = 3\\).\n" +
    "Step 2 — That is the standard diamond centred at the origin in \\((X, Y)\\), with vertices 3 units out along each axis.\n" +
    "Step 3 — Translating back simply moves the centre to \\((1, -2)\\); a translation never changes area.\n" +
    "Step 4 — Both diagonals measure \\(2 \\times 3 = 6\\).\n" +
    "Step 5 — Area of a rhombus \\(= \\tfrac12 d_1 d_2 = \\tfrac12(6)(6) = 18\\).",
  fast: "Recognise the family: \\(|x - h| + |y - k| = r\\) is always a square rotated \\(45^\\circ\\), centred at \\((h, k)\\), with diagonals \\(2r\\) and area \\(2r^2\\). Here \\(r = 3\\), so the area is \\(2(9) = 18\\).\n" +
    "The shifts \\(h\\) and \\(k\\) are pure decoration for an area question — they move the figure without resizing it.",
  traps: "(D) 36 treats 6 as the side length rather than the diagonal. The actual side is \\(3\\sqrt2\\), and \\((3\\sqrt2)^2 = 18\\).\n" +
    "(B) 9 is \\(r^2\\), the area of one quadrant's triangle times two, or simply the square of the constant.\n" +
    "(A) 4.5 is the area of a single quadrant triangle (\\(\\tfrac12 \\cdot 3 \\cdot 3\\)), with the other three forgotten.\n" +
    "(E) 42 has no geometric basis.\n" +
    "The recurring confusion is diagonal versus side — for a tilted square, the axis-aligned measurements are the diagonals.",
  take: "\\(|x-h| + |y-k| = r\\) is a tilted square centred at \\((h,k)\\) with diagonals \\(2r\\) and area \\(2r^2\\). Translations never change area."
},

"quant-live-6b#5": {
  steps: "Step 1 — With only seven candidates, direct substitution is faster than case analysis. Test each integer.\n" +
    "Step 2 — \\(x = 2\\): \\(|0| - |{-1}| = -1\\), while \\(|{-3}| = 3\\) ✗.\n" +
    "Step 3 — \\(x = 3\\): \\(1 - 0 = 1\\), while \\(|{-2}| = 2\\) ✗.\n" +
    "Step 4 — \\(x = 4\\): \\(2 - 1 = 1\\), while \\(|{-1}| = 1\\) ✓.\n" +
    "Step 5 — \\(x = 5\\): \\(3 - 2 = 1\\), while \\(|0| = 0\\) ✗.\n" +
    "Step 6 — \\(x = 6\\): \\(4 - 3 = 1\\), while \\(|1| = 1\\) ✓.\n" +
    "Step 7 — \\(x = 7\\): \\(5 - 4 = 1\\) versus 2 ✗; \\(x = 8\\): \\(6 - 5 = 1\\) versus 3 ✗.\n" +
    "Step 8 — Two integers work: 4 and 6.",
  fast: "Notice the structure: for \\(x \\ge 3\\) the left side is always exactly 1, because \\(|x-2| - |x-3| = (x-2) - (x-3) = 1\\). So the equation reduces to \\(|x - 5| = 1\\), giving \\(x = 4\\) and \\(x = 6\\) at once.\n" +
    "That observation replaces seven substitutions with one line, and it also explains why the answer is a symmetric pair around 5.",
  traps: "(C) 3 and (D) 4 come from testing sloppily and accepting \\(x = 5\\) or \\(x = 3\\), where the two sides differ.\n" +
    "(A) 1 stops after finding the first solution.\n" +
    "(E) 5 counts every integer where the left side equals 1, forgetting that the right side must match it.\n" +
    "The \"between 2 and 8\" wording does not affect the count here, since both solutions sit strictly inside the range either way.",
  take: "For \\(x\\) beyond both breakpoints, \\(|x-a| - |x-b|\\) is the constant \\(b - a\\). Spotting that collapses the equation to a single absolute value."
},

"quant-live-6b#6": {
  steps: "Step 1 — Solve for \\(x\\): \\(x - \\tfrac92 = \\pm\\tfrac52\\) gives \\(x = 7\\) or \\(x = 2\\). One is odd and one is even, so \\(x\\)'s parity is not fixed.\n" +
    "Step 2 — \\(p\\) is odd, so a set of \\(p\\) consecutive integers has a middle element, and \\(y\\) is that element — an integer, but of unspecified parity.\n" +
    "Step 3 — Statement I, \\(xyp\\) odd: this requires all three factors to be odd. Taking \\(x = 2\\) makes the product even, so I is [[not guaranteed]].\n" +
    "Step 4 — Statement II, \\(xy(p^2 + p)\\) even: factor \\(p^2 + p = p(p+1)\\). That is a product of two consecutive integers, so it is always even.\n" +
    "Step 5 — Any integer multiplied by an even number is even, so \\(xy \\cdot p(p+1)\\) is even regardless of \\(x\\), \\(y\\) and \\(p\\) — II is [[always true]].\n" +
    "Step 6 — Statement III, \\(x^2y^2p^2\\) even: this requires at least one of \\(x, y, p\\) to be even. Take \\(x = 7\\), \\(p = 3\\), and the set \\(\\{2,3,4\\}\\) so \\(y = 3\\). Then \\(49 \\times 9 \\times 9\\) is odd — III is [[not guaranteed]].\n" +
    "Step 7 — Only statement II must be true.",
  fast: "The whole question rests on one identity: \\(p^2 + p = p(p+1)\\) is a product of consecutive integers and therefore always even. That single factor makes statement II unconditional.\n" +
    "For the other two, one counterexample each suffices — and the two values of \\(x\\) (7 and 2) conveniently supply opposite parities, so each statement can be broken by choosing the unhelpful one.",
  traps: "(A) I only is the natural answer if you notice that \\(x\\) can be odd and stop there — but \"must be true\" requires it for *both* values of \\(x\\), and \\(x = 2\\) breaks it.\n" +
    "(D) and (E) accept statement III, usually by assuming the median \\(y\\) of consecutive integers must be even. It need not be: any integer can be a median.\n" +
    "(C) III only rejects the one statement that actually holds.\n" +
    "The source document's printed key for this question is \"I only\", which contradicts its own reasoning; the stored answer is the derived one.",
  take: "\\(n^2 + n = n(n+1)\\) is always even. \"Must be true\" fails to a single counterexample, so test every value a variable can take."
},

"quant-live-6b#7": {
  steps: "Step 1 — Decode the two conditions into signs. \\(|a| = -a\\) means \\(a \\le 0\\), and since \\(a\\) is non-zero, \\(a < 0\\).\n" +
    "Step 2 — \\(|ab| = ab\\) means \\(ab \\ge 0\\), and since both are non-zero, \\(ab > 0\\).\n" +
    "Step 3 — With \\(a < 0\\) and \\(ab > 0\\), it follows that \\(b < 0\\).\n" +
    "Step 4 — Now remove the first absolute value. Since \\(b < 0\\), \\(b - 4 < 0\\), so \\(|b - 4| = 4 - b\\).\n" +
    "Step 5 — And the second: \\(ab > 0\\) while \\(-b > 0\\), so \\(ab - b > 0\\) and \\(|ab - b| = ab - b\\).\n" +
    "Step 6 — Add: \\((4 - b) + (ab - b) = ab - 2b + 4\\).",
  fast: "Establish both signs first — that is the entire difficulty — and then each absolute value unwraps mechanically.\n" +
    "A concrete check is quicker than trusting the algebra: take \\(a = -1\\), \\(b = -2\\). Then \\(|b-4| = 6\\) and \\(|ab - b| = |2 + 2| = 4\\), summing to 10. And \\(ab - 2b + 4 = 2 + 4 + 4 = 10\\) ✓. Only one choice matches.",
  traps: "(E) \\(4 - ab\\) and (A) \\(ab - 4\\) drop the \\(b\\) terms entirely, which happens if you unwrap \\(|b - 4|\\) as \\(b - 4\\).\n" +
    "(B) \\(2b - ab - 4\\) is the negative of the answer, from getting both signs backwards.\n" +
    "(C) \\(ab + 4\\) unwraps \\(|ab - b|\\) as \\(ab + b\\) or loses a term.\n" +
    "Substituting a legal pair of values eliminates all four in about fifteen seconds — always worth doing when the choices are algebraic expressions.",
  take: "\\(|u| = -u\\) means \\(u \\le 0\\); \\(|u| = u\\) means \\(u \\ge 0\\). Fix every sign first, then unwrap. Verify with concrete legal values."
},

"quant-live-6b#8": {
  steps: "Step 1 — Work outward. \\(\\big||x-3| - 5\\big| = 3\\) means \\(|x - 3| - 5 = 3\\) or \\(|x - 3| - 5 = -3\\).\n" +
    "Step 2 — So \\(|x - 3| = 8\\) or \\(|x - 3| = 2\\). Both are non-negative, so both are legitimate.\n" +
    "Step 3 — \\(|x - 3| = 8\\) gives \\(x = 11\\) or \\(x = -5\\).\n" +
    "Step 4 — \\(|x - 3| = 2\\) gives \\(x = 5\\) or \\(x = 1\\).\n" +
    "Step 5 — Sort the four roots: \\(-5, 1, 5, 11\\).\n" +
    "Step 6 — With an even count, the median is the average of the two middle values: \\(\\dfrac{1 + 5}{2} = 3\\).",
  fast: "Peel the absolute values one layer at a time and expect four roots from a doubly nested equation.\n" +
    "There is also a symmetry shortcut: every root satisfies \\(|x - 3| \\in \\{2, 8\\}\\), so the roots are symmetric about 3 — and a symmetric set has its median at the centre of symmetry, which is 3.",
  traps: "(D) 5 and (A) 1 are individual roots mistaken for the median.\n" +
    "(E) 6 is the average of \\(1\\) and \\(11\\), or the mean of all four roots computed carelessly — the actual mean is \\(\\tfrac{-5+1+5+11}{4} = 3\\), which happens to agree, but the arithmetic must still be done.\n" +
    "(B) 2 reads like a count — two roots per branch — rather than a median; no averaging of the actual roots lands on it.\n" +
    "The commonest structural error is solving only \\(|x-3| = 8\\) and stopping, since the \\(-3\\) branch is easy to overlook.",
  take: "A nested absolute value splits twice, giving up to four roots. Roots of \\(|x - c| = k\\) are symmetric about \\(c\\), so their median is \\(c\\)."
},

"quant-live-6b#9": {
  steps: "Step 1 — Two absolute values mean four sign cases, but the equations themselves narrow it quickly.\n" +
    "Step 2 — Suppose \\(y \\ge 0\\). Then \\(|y| = y\\) and the second equation becomes \\(x + y - y = x = 6\\).\n" +
    "Step 3 — Substituting into the first: \\(6 + |6| + y = 7\\), so \\(12 + y = 7\\) and \\(y = -5\\) — contradicting \\(y \\ge 0\\). So \\(y < 0\\).\n" +
    "Step 4 — With \\(y < 0\\), \\(|y| = -y\\) and the second equation becomes \\(x - 2y = 6\\).\n" +
    "Step 5 — Now suppose \\(x < 0\\). Then \\(|x| = -x\\) and the first equation becomes \\(x - x + y = y = 7\\), contradicting \\(y < 0\\). So \\(x \\ge 0\\).\n" +
    "Step 6 — With \\(x \\ge 0\\), the first equation is \\(2x + y = 7\\). Solving alongside \\(x - 2y = 6\\): substitute \\(y = 7 - 2x\\) to get \\(x - 14 + 4x = 6\\), so \\(5x = 20\\) and \\(x = 4\\), \\(y = -1\\).\n" +
    "Step 7 — Both sign assumptions hold (\\(x = 4 \\ge 0\\), \\(y = -1 < 0\\)), so \\(x + y = 3\\).",
  fast: "Each equation is engineered to collapse under one sign assumption: if \\(y \\ge 0\\) the second reduces to \\(x = 6\\), and if \\(x < 0\\) the first reduces to \\(y = 7\\). Testing those two assumptions first eliminates two of the four cases in a line each.\n" +
    "What remains is an ordinary two-by-two linear system.",
  traps: "(D) 6 is the value of \\(x\\) from the discarded case \\(y \\ge 0\\) — a real intermediate result that fails its own assumption.\n" +
    "(C) 5 is \\(x + |y| = 4 + 1\\) — the sign of \\(y\\) lost at the very last step.\n" +
    "(B) 4 is \\(x\\) alone. (E) 9 is a filler beyond the plausible range.\n" +
    "The essential discipline is to check the solution against the sign assumptions that produced it — a case can yield clean numbers and still be invalid.",
  take: "Split on the sign of each absolute value, and prefer the assumption that makes an equation collapse. Always verify the solution satisfies the assumptions of its own case."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-6b#10": {
  steps: "Step 1 — In a geometric progression the middle term squared equals the product of its neighbours: \\(b^2 = ac\\). With \\(b = 10\\), that gives \\(ac = 100\\).\n" +
    "Step 2 — The sum condition \\(|a + 10 + c| = 15\\) means \\(a + c = 5\\) or \\(a + c = -25\\).\n" +
    "Step 3 — Test \\(a + c = 5\\) with \\(ac = 100\\): the quadratic \\(t^2 - 5t + 100 = 0\\) has discriminant \\(25 - 400 < 0\\), so there are no real values. Reject.\n" +
    "Step 4 — Test \\(a + c = -25\\): \\(t^2 + 25t + 100 = 0\\) gives \\(t = \\dfrac{-25 \\pm 15}{2}\\), i.e. \\(-5\\) and \\(-20\\).\n" +
    "Step 5 — Since \\(a > c\\), we have \\(a = -5\\) and \\(c = -20\\). Check the median: sorted, the three terms are \\(-20, -5, 10\\), so the median is \\(-5 = a\\) ✓.\n" +
    "Step 6 — The progression is \\(-5, 10, -20\\), with common ratio \\(-2\\), so the fourth term is \\(40\\).\n" +
    "Step 7 — Product: \\((-5)(10)(-20)(40) = 40{,}000\\).",
  fast: "Two relations pin everything: \\(ac = b^2 = 100\\) and \\(a + c\\) from the absolute value. That turns the problem into a quadratic whose roots are \\(a\\) and \\(c\\), and only one of the two sign branches has real roots.\n" +
    "For the final product, note that the four terms are \\(a, ar, ar^2, ar^3\\), so their product is \\(a^4 r^6\\) — but here multiplying the four numbers directly is quicker.",
  traps: "(A) 8,000 is \\(20^3\\) — three terms sized at 20 apiece, stopping before the fourth term.\n" +
    "(C) 32,000 and (E) 48,000 come from a wrong common ratio, usually \\(+2\\), which would break the sum condition.\n" +
    "(B) 16,000 arises from taking the fourth term as \\(20\\) rather than \\(40\\).\n" +
    "The two conditions people skip are the median check (which confirms \\(a = -5\\) rather than \\(-20\\)) and the sign of the ratio — a negative ratio is what makes the terms alternate and the sum come out to \\(-15\\).",
  take: "For three consecutive geometric terms, \\(b^2 = ac\\). Combine with the sum to get a quadratic in the outer terms, and check which sign branch has real roots."
},

"quant-live-6b#11": {
  steps: "Step 1 — Peel the outer absolute value: \\(6 - |x+2| = 10\\) or \\(6 - |x+2| = -10\\).\n" +
    "Step 2 — First branch: \\(|x + 2| = -4\\). An absolute value is never negative, so this branch has no solutions at all.\n" +
    "Step 3 — Second branch: \\(|x + 2| = 16\\), which gives \\(x + 2 = 16\\) or \\(x + 2 = -16\\).\n" +
    "Step 4 — So \\(x = 14\\) or \\(x = -18\\).\n" +
    "Step 5 — The stem requires \\(x\\) to be a non-negative integer, so \\(x = -18\\) is excluded.\n" +
    "Step 6 — Exactly one value works: \\(x = 14\\).",
  fast: "Check each branch for feasibility before solving it. One branch demands a negative absolute value and dies immediately, which halves the work.\n" +
    "Then apply the domain restriction — \"non-negative integer\" — as the last filter. Nested absolute values normally produce four candidates; here the structure and the domain cut it to one.",
  traps: "(C) 2 keeps \\(x = -18\\), ignoring the non-negativity requirement stated in the stem.\n" +
    "(E) 4 comes from solving both branches as though \\(|x+2| = -4\\) had solutions \\(x = 2\\) and \\(x = -6\\) — it has none.\n" +
    "(A) 0 concludes the whole equation is unsatisfiable, which happens if you drop the \\(-10\\) branch.\n" +
    "(D) 3 mixes the errors.\n" +
    "The two filters that matter are feasibility of each branch and the stated domain, applied in that order.",
  take: "Discard any branch requiring an absolute value to be negative. Apply domain restrictions such as \"non-negative integer\" only after finding all algebraic roots."
},

"quant-live-6b#12": {
  steps: "Step 1 — Simplify the expression: \\(|-1 - x| = |-(1 + x)| = |x + 1|\\).\n" +
    "Step 2 — So the condition is \\(|x + 1| \\le 3\\), which unfolds to \\(-3 \\le x + 1 \\le 3\\).\n" +
    "Step 3 — Subtract 1 throughout: \\(-4 \\le x \\le 2\\).\n" +
    "Step 4 — The stem says \\(x\\) is a positive integer, so the candidates are \\(1\\) and \\(2\\).\n" +
    "Step 5 — The smallest is \\(1\\).",
  fast: "The absolute value of a negation is the absolute value, so \\(|-1-x|\\) is just \\(|x+1|\\) — that rewrite removes all the sign confusion in one step.\n" +
    "Then the inequality gives a range, and the words \"positive integer\" pick the answer off its left end.",
  traps: "(A) \\(-5\\) is not even in the solution range, and (B) \\(-4\\) is the smallest value satisfying the *inequality* — but neither is a positive integer, which the stem explicitly requires.\n" +
    "(D) 3 and (E) 4 sit outside the range entirely: \\(|3 + 1| = 4 > 3\\).\n" +
    "The distractors are built so that solving the inequality correctly but ignoring the domain lands you on (B). Read the constraint on \\(x\\) before scanning the choices.",
  take: "\\(|-a| = |a|\\), so rewrite \\(|-1-x|\\) as \\(|x+1|\\) immediately. Then apply the stated domain — \"positive integer\" excludes zero and every negative."
},

"quant-live-6b#13": {
  steps: "Step 1 — Examine choice (A): \\(a^2 + b^2 - 2|ab|\\). Since \\(a^2 = |a|^2\\) and \\(b^2 = |b|^2\\) and \\(|ab| = |a||b|\\), this is \\(|a|^2 - 2|a||b| + |b|^2\\).\n" +
    "Step 2 — That factors as \\((|a| - |b|)^2\\), a perfect square, which is never negative. So (A) cannot be negative ✓.\n" +
    "Step 3 — Now confirm the others can be. (B) \\(|a+b| - |a-b|\\) at \\(a = 1, b = -1\\): \\(0 - 2 = -2\\).\n" +
    "Step 4 — (C) \\(|a+b| - |a|\\) at \\(a = 2, b = -2\\): \\(0 - 2 = -2\\).\n" +
    "Step 5 — (D) \\(|2a+b| - |a+b|\\) at \\(a = -1, b = 3\\): \\(|1| - |2| = -1\\).\n" +
    "Step 6 — (E) \\(|a^3 + b^3| - a - b\\) at \\(a = b = 0.5\\): \\(0.25 - 1 = -0.75\\).",
  fast: "Look for a hidden perfect square. Rewriting \\(a^2 + b^2 - 2|ab|\\) with \\(|a|\\) and \\(|b|\\) exposes \\((|a| - |b|)^2\\), and a square settles the question with no test values at all.\n" +
    "For the remaining choices, opposite-signed values are the productive test: they collapse \\(|a+b|\\) to zero while leaving the subtracted term large.",
  traps: "(B) is the most tempting rival, because \\(|a+b|\\) and \\(|a-b|\\) look symmetric — but they are not: when \\(a\\) and \\(b\\) have opposite signs, \\(|a-b|\\) is the larger of the two.\n" +
    "(E) looks safe because the leading term is an absolute value, but the trailing \\(-a - b\\) is not inside it and can dominate for small positive values.\n" +
    "(C) and (D) both subtract an unprotected absolute value, so opposite signs break them easily.\n" +
    "The general method: recognise a square if one exists, otherwise hunt for a counterexample with mixed signs or with values inside \\((0,1)\\).",
  take: "\\(a^2 + b^2 - 2|ab| = (|a| - |b|)^2 \\ge 0\\). To break an expression involving \\(|a+b|\\), give \\(a\\) and \\(b\\) opposite signs."
},

"quant-live-6b#14": {
  steps: "Step 1 — The equation is \\(|n|^n = n^2\\), with \\(n\\) a non-zero integer.\n" +
    "Step 2 — \\(n = 1\\): \\(1^1 = 1\\) and \\(1^2 = 1\\) ✓.\n" +
    "Step 3 — \\(n = 2\\): \\(2^2 = 4\\) and \\(2^2 = 4\\) ✓.\n" +
    "Step 4 — \\(n = -1\\): \\(|-1|^{-1} = 1^{-1} = 1\\) and \\((-1)^2 = 1\\) ✓.\n" +
    "Step 5 — \\(n = 3\\): \\(3^3 = 27\\) but \\(3^2 = 9\\) ✗, and for larger \\(n\\) the gap only widens, since \\(n^n\\) outgrows \\(n^2\\).\n" +
    "Step 6 — \\(n \\le -2\\): a negative exponent makes \\(|n|^n\\) a fraction below 1, while \\(n^2 \\ge 4\\) ✗.\n" +
    "Step 7 — Exactly three integers work: \\(-1\\), \\(1\\) and \\(2\\).",
  fast: "Only a handful of small integers can possibly work, so test them and then argue that the two sides separate permanently. For \\(n \\ge 3\\) the left side grows far faster; for \\(n \\le -2\\) the left side collapses below 1.\n" +
    "The case worth pausing on is \\(n = -1\\): the base becomes \\(|-1| = 1\\), and 1 raised to any power stays 1, matching \\((-1)^2\\).",
  traps: "(C) 2 misses \\(n = -1\\), which is easy to overlook because a negative exponent usually kills a solution — here the base is 1, so it does not.\n" +
    "(B) 1 finds only \\(n = 2\\), treating \\(n = 1\\) as trivial or excluded.\n" +
    "(A) 0 would mean no integer works at all, when \\(n = 1\\) checks in one line: \\(1^1 = 1 = 1 \\times 1\\).\n" +
    "(E) more than 3 comes from expecting a family of negative solutions by symmetry; \\(n = -2\\) already fails, since \\(2^{-2} = \\tfrac14 \\ne 4\\).\n" +
    "The structural point is that \\(n\\) appears both as an exponent and inside the base, so the two sides scale completely differently and can only agree at small values.",
  take: "When the variable appears in both the base and the exponent, test small integers and then argue divergence. A base of 1 makes any exponent harmless."
},

"quant-live-6b#15": {
  steps: "Step 1 — Look at the denominator: \\(-x^2 - 3 = -(x^2 + 3)\\). Since \\(x^2 \\ge 0\\), this is at most \\(-3\\), so it is always negative and never zero.\n" +
    "Step 2 — The numerator \\(|3x - 5|\\) is always non-negative.\n" +
    "Step 3 — A non-negative number divided by a negative number is non-positive, so \\(y \\le 0\\) for every \\(x\\).\n" +
    "Step 4 — The greatest possible value of \\(y\\) is therefore \\(0\\), and it is achieved exactly when the numerator vanishes.\n" +
    "Step 5 — \\(|3x - 5| = 0\\) when \\(3x = 5\\), i.e. \\(x = \\tfrac53\\).",
  fast: "Establish the sign of the whole expression before computing anything: the denominator can never be positive, so \\(y\\) can never be positive either. Maximising a non-positive quantity means driving it to zero.\n" +
    "Then the only question is where the numerator vanishes — one linear equation.",
  traps: "(C) 0 is the value of \\(x\\) that minimises the denominator's magnitude, which feels like it should extremise \\(y\\). It gives \\(y = \\tfrac{5}{-3} \\approx -1.67\\), not the maximum.\n" +
    "(A) \\(-5\\) makes the numerator large, which pushes \\(y\\) far *below* zero — the opposite of what is wanted.\n" +
    "(D) \\(\\tfrac35\\) is the reciprocal of the answer's fraction, a transposition slip on \\(3x = 5\\).\n" +
    "(B) \\(-\\tfrac35\\) adds a sign error to that.\n" +
    "The instinct to fight is treating \"greatest\" as \"largest in magnitude\" — for a non-positive quantity the greatest value is the one closest to zero.",
  take: "Determine the sign of an expression before optimising it. To maximise a quantity that is never positive, make it zero — set the numerator to zero."
},

"quant-live-6b#16": {
  steps: "Step 1 — Since \\(x^2 = |x|^2\\), substitute \\(t = |x|\\), where \\(t \\ge 0\\). The equation becomes \\(t^2 - 11t - 60 = 0\\).\n" +
    "Step 2 — Factor: we need two numbers multiplying to \\(-60\\) and summing to \\(-11\\), namely \\(-15\\) and \\(+4\\). So \\((t - 15)(t + 4) = 0\\).\n" +
    "Step 3 — The roots are \\(t = 15\\) and \\(t = -4\\).\n" +
    "Step 4 — But \\(t = |x| \\ge 0\\), so \\(t = -4\\) is inadmissible.\n" +
    "Step 5 — \\(|x| = 15\\) gives \\(x = 15\\) and \\(x = -15\\).\n" +
    "Step 6 — Exactly 2 real solutions.",
  fast: "The substitution \\(t = |x|\\) works because \\(x^2 = |x|^2\\) — it turns an absolute-value equation into an ordinary quadratic in one move.\n" +
    "Then each admissible positive \\(t\\) contributes two values of \\(x\\), and each negative \\(t\\) contributes none. One root survives, so the answer is 2.",
  traps: "(A) 4 counts two \\(x\\) values for each root of the quadratic, forgetting that \\(t = -4\\) is impossible for an absolute value.\n" +
    "(D) 1 counts only the positive \\(x\\), overlooking \\(x = -15\\).\n" +
    "(B) 3 mixes the two errors.\n" +
    "(E) 0 comes from mis-factoring and finding no non-negative root.\n" +
    "The count of solutions follows a fixed rule: a positive \\(t\\) gives two \\(x\\), \\(t = 0\\) gives one, and a negative \\(t\\) gives none.",
  take: "Substitute \\(t = |x|\\) with \\(t \\ge 0\\) to linearise an \\(x^2\\)-and-\\(|x|\\) equation. Discard negative roots, then double each surviving positive one."
},

"quant-live-6b#17": {
  steps: "Step 1 — Solve the linear equation for \\(y\\): \\(y = 12 - 2x\\).\n" +
    "Step 2 — Substitute into the constraint: \\(|12 - 2x| \\le 12\\).\n" +
    "Step 3 — Unfold: \\(-12 \\le 12 - 2x \\le 12\\).\n" +
    "Step 4 — Subtract 12 throughout: \\(-24 \\le -2x \\le 0\\).\n" +
    "Step 5 — Divide by \\(-2\\), reversing both inequalities: \\(0 \\le x \\le 12\\).\n" +
    "Step 6 — Every integer \\(x\\) in that range gives \\(y = 12 - 2x\\), automatically an integer. The integers from 0 to 12 inclusive number \\(12 - 0 + 1 = 13\\).",
  fast: "Reduce to a single variable first, then the whole question is an integer count on an interval. The \\(+1\\) in \\(12 - 0 + 1\\) is where this question is usually lost.\n" +
    "Note also that \\(y = 12 - 2x\\) is an integer whenever \\(x\\) is, so no extra divisibility check is needed.",
  traps: "(C) 12 forgets the \\(+1\\) in the inclusive count — the classic fencepost error.\n" +
    "(A) 17 comes from switching to counting \\(y\\)-values over a wrongly widened range — the valid \\(y\\) are exactly the 13 even numbers in \\([-12, 12]\\), the same count as \\(x\\).\n" +
    "(E) 14 adds an endpoint that is not there, and (B) 10 drops several.\n" +
    "Watch the sign reversal in Step 5 too: dividing an inequality chain by \\(-2\\) flips both comparisons.",
  take: "Substitute to reduce to one variable, solve the inequality (reversing when dividing by a negative), then count inclusively with \\(b - a + 1\\)."
},

"quant-live-6b#18": {
  steps: "Step 1 — Setting the two expressions for \\(y\\) equal gives \\(|x - 1| = 3x + 3\\).\n" +
    "Step 2 — Branch \\(x \\ge 1\\): the equation is \\(x - 1 = 3x + 3\\), so \\(-4 = 2x\\) and \\(x = -2\\). That contradicts \\(x \\ge 1\\), so reject it.\n" +
    "Step 3 — Branch \\(x < 1\\): the equation is \\(1 - x = 3x + 3\\), so \\(-2 = 4x\\) and \\(x = -\\tfrac12\\). That satisfies \\(x < 1\\) ✓.\n" +
    "Step 4 — Check the right-hand side is non-negative, as it must be to equal an absolute value: \\(3(-\\tfrac12) + 3 = 1.5 \\ge 0\\) ✓.\n" +
    "Step 5 — Only one value survives, so the sum of all possible values is \\(-\\tfrac12\\).",
  fast: "Two branches, each a one-line solve, followed by the check that each root satisfies its own branch condition. Half the candidate roots typically fail that check.\n" +
    "The extra safeguard for \\(|f(x)| = g(x)\\) is that \\(g(x)\\) must be non-negative — worth confirming even when the branch check already passed.",
  traps: "(A) \\(-\\tfrac52\\) is the sum of both candidate roots, \\(-2\\) and \\(-\\tfrac12\\), obtained by never checking them against their branch conditions. The phrase \"sum of all possible values\" is designed to reward that shortcut.\n" +
    "(B) \\(-2\\) is the rejected root on its own.\n" +
    "(D) \\(\\tfrac12\\) and (E) 2 come from sign slips in solving either branch.\n" +
    "Note that \\(x = -2\\) genuinely fails: \\(|-2 - 1| = 3\\) but \\(3(-2) + 3 = -3\\), and an absolute value cannot be negative.",
  take: "Solve both branches of \\(|f(x)| = g(x)\\), then discard roots that violate their branch condition or make \\(g(x)\\) negative. \"Sum of all values\" rewards checking, not collecting."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-6b#19": {
  steps: "Step 1 — For any real \\(k\\), \\(|k| > k\\) holds exactly when \\(k < 0\\). (If \\(k \\ge 0\\) then \\(|k| = k\\), so the strict inequality fails.)\n" +
    "Step 2 — Applying that with \\(k = ab\\), the given condition is precisely \\(ab < 0\\). So statement III must be true.\n" +
    "Step 3 — But \\(ab < 0\\) only says \\(a\\) and \\(b\\) have opposite signs; it does not name which one is negative.\n" +
    "Step 4 — Statement I, \\(a < 0\\): take \\(a = 1\\), \\(b = -1\\). Then \\(ab = -1 < 0\\) ✓ while \\(a > 0\\) — [[not necessary]].\n" +
    "Step 5 — Statement II, \\(b < 0\\): take \\(a = -1\\), \\(b = 1\\). Same conclusion — [[not necessary]].\n" +
    "Step 6 — Only III must hold.",
  fast: "Translate the premise once: \\(|k| > k\\) is just a disguised way of writing \\(k < 0\\). The condition therefore *is* statement III, restated.\n" +
    "Then a single symmetric pair of counterexamples — \\((1, -1)\\) and \\((-1, 1)\\) — kills the two statements about individual signs.",
  traps: "(E) and (D) accept a claim about \\(a\\) individually, which the premise cannot support: the product's sign says nothing about which factor is negative.\n" +
    "(A) and (B) each pick one factor, and the symmetry of the situation makes both equally unjustified.\n" +
    "The observation that unlocks the question is recognising \\(|k| > k\\) as a sign condition rather than a magnitude condition — many people start testing values instead.",
  take: "\\(|k| > k\\) is equivalent to \\(k < 0\\); \\(|k| = k\\) to \\(k \\ge 0\\). A product's sign constrains the pair, never an individual factor."
},

"quant-live-6b#20": {
  steps: "Step 1 — Complete the square on the left: \\(x^2 - 8x + 21 = (x^2 - 8x + 16) + 5 = (x-4)^2 + 5\\).\n" +
    "Step 2 — Substitute \\(t = x - 4\\). The equation becomes \\(t^2 + 5 = |t| + 5\\), i.e. \\(t^2 = |t|\\).\n" +
    "Step 3 — Since \\(t^2 = |t|^2\\), this is \\(|t|^2 - |t| = 0\\), i.e. \\(|t|\\big(|t| - 1\\big) = 0\\).\n" +
    "Step 4 — So \\(|t| = 0\\) or \\(|t| = 1\\), giving \\(t = 0, 1, -1\\).\n" +
    "Step 5 — Back-substitute: \\(x = 4, 5, 3\\).\n" +
    "Step 6 — Those three values as side lengths make a 3–4–5 triangle, and \\(3^2 + 4^2 = 9 + 16 = 25 = 5^2\\).\n" +
    "Step 7 — So the triangle is right-angled.",
  fast: "Spot that \\(x^2 - 8x + 21\\) is \\((x-4)^2 + 5\\) and the \\(+5\\) on each side cancels, leaving the clean equation \\(t^2 = |t|\\). Everything else follows in one line.\n" +
    "And once the sides come out as 3, 4, 5, the answer is the most familiar Pythagorean triple on the exam.",
  traps: "(D) isosceles and (E) equilateral require repeated side lengths, but the three roots are distinct.\n" +
    "(A) acute and (B) obtuse are the alternatives if you mis-solve and get sides that fail the Pythagorean relation — for example, missing \\(t = 0\\) and working with only two values.\n" +
    "The step most often botched is \\(t^2 = |t|\\): it has three roots, not two, because \\(t = 0\\) satisfies it as well as \\(t = \\pm 1\\).\n" +
    "Missing \\(x = 4\\) leaves only sides 3 and 5, and no triangle at all.",
  take: "Complete the square to expose a substitution. \\(t^2 = |t|\\) has three solutions: \\(0\\), \\(1\\) and \\(-1\\)."
},

"quant-live-6b#21": {
  steps: "Step 1 — Simplify the constant: \\(|3| = 3\\), so the condition is \\(\\dfrac{|x|}{3} > 1\\), i.e. \\(|x| > 3\\).\n" +
    "Step 2 — That means \\(x > 3\\) or \\(x < -3\\) — two disjoint rays.\n" +
    "Step 3 — Test each choice against *both* rays. (A) \\(x > 3\\) fails on the left ray (e.g. \\(x = -5\\)).\n" +
    "Step 4 — (B) \\(x < 3\\) fails on the right ray (e.g. \\(x = 5\\)).\n" +
    "Step 5 — (C) \\(x = 3\\) fails everywhere, since \\(|3| > 3\\) is false.\n" +
    "Step 6 — (E) \\(x < -3\\) fails on the right ray.\n" +
    "Step 7 — (D) \\(x \\ne 3\\) holds on both rays, since neither contains 3.",
  fast: "\"Must be true\" means true for every solution, so the answer has to cover both rays. Only the weakest statement can do that — and \\(x \\ne 3\\) is deliberately weak.\n" +
    "Testing one value from each ray, say \\(x = 5\\) and \\(x = -5\\), eliminates every other choice in two passes.",
  traps: "(A) \\(x > 3\\) is the intuitive answer, and it describes half the solution set — but half is not all, and \"must be true\" tolerates no exceptions.\n" +
    "(E) \\(x < -3\\) is the mirror-image half.\n" +
    "(B) \\(x < 3\\) is true on the left ray only.\n" +
    "The distractors reward solving the inequality correctly and then failing to check the statement against the *whole* solution set.\n" +
    "A weak-looking choice like \\(x \\ne 3\\) is often the right answer to a \"must be true\" question precisely because it demands so little.",
  take: "\"Must be true\" requires the statement to hold at every solution. When the solution set is two rays, only a statement covering both qualifies — often a deliberately weak one."
},

"quant-live-6b#22": {
  steps: "Step 1 — The square root of a square is the absolute value: \\(\\sqrt{(x+4)^2} = |x + 4|\\).\n" +
    "Step 2 — So the equation is \\(|x + 4| = 3\\), giving \\(x + 4 = 3\\) or \\(x + 4 = -3\\).\n" +
    "Step 3 — Therefore \\(x = -1\\) or \\(x = -7\\).\n" +
    "Step 4 — The question asks for \\(x - 4\\), not \\(x\\). Those values are \\(-1 - 4 = -5\\) and \\(-7 - 4 = -11\\).\n" +
    "Step 5 — Of the two, only \\(-11\\) appears among the choices.",
  fast: "The identity \\(\\sqrt{u^2} = |u|\\) is the whole first step — writing \\(\\sqrt{(x+4)^2} = x + 4\\) loses one of the two roots.\n" +
    "Then subtract 4 from each root and scan the list. Since the question asks for \\(x - 4\\) rather than \\(x\\), doing the subtraction is not optional.",
  traps: "(B) \\(-7\\) is a value of \\(x\\), not of \\(x - 4\\) — the trap for anyone who stops one step early.\n" +
    "(D) \\(-3\\) is the right-hand side negated, and (E) 5 is the other legitimate value \\(-5\\) with its sign lost.\n" +
    "(C) \\(-4\\) is the constant inside the parentheses.\n" +
    "Note that the other legitimate answer, \\(-5\\), is deliberately absent from the choices — so finding only the root \\(x = -1\\) leaves you with nothing to pick and invites a guess.",
  take: "\\(\\sqrt{u^2} = |u|\\), which yields two roots. Then re-read what expression the question wants evaluated — it is often not \\(x\\) itself."
},

"quant-live-6b#23": {
  steps: "Step 1 — Solve the first equation: \\(|1 - x| = 6\\) gives \\(1 - x = 6\\) or \\(1 - x = -6\\), so \\(x = -5\\) or \\(x = 7\\).\n" +
    "Step 2 — Solve the second: \\(|2y - 6| = 10\\) gives \\(2y - 6 = 10\\) or \\(2y - 6 = -10\\), so \\(2y = 16\\) or \\(2y = -4\\), i.e. \\(y = 8\\) or \\(y = -2\\).\n" +
    "Step 3 — Form all four products: \\((-5)(8) = -40\\); \\((-5)(-2) = 10\\); \\((7)(8) = 56\\); \\((7)(-2) = -14\\).\n" +
    "Step 4 — Compare with the choices: \\(-40\\), \\(-14\\), \\(10\\) and \\(56\\) are exactly the four listed values.\n" +
    "Step 5 — Every listed value is achievable, so none of them is impossible — the answer is \"none of these\".",
  fast: "Two absolute values give two roots each, so build the full \\(2 \\times 2\\) grid of products — four numbers — and check them against the list.\n" +
    "The moment all four choices turn out to be reachable, the \"none of these\" option is forced. Computing every product is faster than testing each choice individually.",
  traps: "(A) through (D) each look like plausible \"impossible\" values because the products are scattered in sign and size, and checking only two of the four combinations will make one of them look unreachable.\n" +
    "The commonest incomplete approach is pairing only \\(x = -5\\) with \\(y = -2\\) and \\(x = 7\\) with \\(y = 8\\) — the \"matching sign\" pairs — which produces only 10 and 56 and makes \\(-40\\) and \\(-14\\) look impossible.\n" +
    "All four cross-combinations are legitimate: the two equations are independent.",
  take: "Independent absolute-value equations give a full grid of combinations. Enumerate all of them before deciding a value is unreachable."
},

"quant-live-6b#24": {
  steps: "Step 1 — (A) \\(x|x| = 2x\\) rearranges to \\(x(|x| - 2) = 0\\), so \\(x = 0\\), \\(x = 2\\) or \\(x = -2\\) — three solutions.\n" +
    "Step 2 — (B) \\(x + |x| = 2x\\) simplifies to \\(|x| = x\\), which holds for every \\(x \\ge 0\\) — infinitely many.\n" +
    "Step 3 — (C) \\(2|x| = 2x\\) is the same condition \\(|x| = x\\) — infinitely many.\n" +
    "Step 4 — (D) \\(2|x| = 2x - 1\\) becomes \\(|x| = x - \\tfrac12\\), which requires \\(|x| < x\\) — impossible, so no solutions.\n" +
    "Step 5 — (E) \\(|x + 2| = -x\\): the right side must be non-negative, so \\(x \\le 0\\). The branch \\(x + 2 = -x\\) gives \\(x = -1\\), which satisfies \\(x \\le 0\\) ✓. The branch \\(-(x+2) = -x\\) reduces to \\(-2 = 0\\), impossible.\n" +
    "Step 6 — So (E) has exactly one solution.",
  fast: "Simplify each equation to a standard form before counting. Two of them collapse to \\(|x| = x\\), which is a whole ray rather than a point, and one collapses to an impossibility.\n" +
    "Equations of the form \\(|f(x)| = -x\\) are the ones that typically yield a single solution, because the non-negativity requirement cuts the domain in half before the branches are even solved.",
  traps: "(A) is the most attractive wrong answer: factoring \\(x(|x| - 2) = 0\\) is easy to do carelessly, and dropping the \\(x = 0\\) root leaves two solutions — still not one, but the miscount is common.\n" +
    "(B) and (C) look like they should have isolated solutions because they are equations rather than inequalities; in fact each is satisfied by an entire half-line.\n" +
    "(D) has none, which is easy to confuse with \"exactly one\" if the impossibility is not checked.\n" +
    "The habit that resolves all five: reduce, then ask whether the solution set is a point, a ray or empty.",
  take: "Reduce each absolute-value equation to standard form first. \\(|x| = x\\) is a ray, not a point; \\(|f(x)| = -x\\) restricts the domain before you solve."
},

"quant-live-6b#25": {
  steps: "Step 1 — Split the double inequality into its two halves.\n" +
    "Step 2 — \\(|5 - z| > 2\\) means \\(5 - z > 2\\) or \\(5 - z < -2\\), i.e. \\(z < 3\\) or \\(z > 7\\).\n" +
    "Step 3 — \\(|5 - z| < 5\\) means \\(-5 < 5 - z < 5\\), i.e. \\(0 < z < 10\\).\n" +
    "Step 4 — Intersect the two: \\(0 < z < 3\\) or \\(7 < z < 10\\).\n" +
    "Step 5 — Test the choices. \\(z = 1\\) lies in \\((0, 3)\\) ✓.\n" +
    "Step 6 — \\(z = 3\\) gives \\(|5-3| = 2\\), which is not strictly greater than 2 ✗. \\(z = 5\\) gives 0 ✗. \\(z = 7\\) gives 2 ✗. \\(z = 11\\) gives 6, not less than 5 ✗.",
  fast: "Read \\(|5 - z|\\) as the distance from \\(z\\) to 5. The condition says that distance is more than 2 but less than 5 — so \\(z\\) sits in a ring around 5, between 2 and 5 units away on either side.\n" +
    "That gives \\((0, 3)\\) and \\((7, 10)\\) at a glance, and testing the five choices takes seconds.",
  traps: "(B) 3 and (D) 7 are exactly 2 units from 5, and the inequality is strict — they are the boundary values the question is built to catch.\n" +
    "(C) 5 is the centre, where the distance is 0, failing the lower bound badly.\n" +
    "(E) 11 is 6 units away, failing the upper bound.\n" +
    "Every distractor is a boundary or centre value, so checking strictness is the entire exercise: the endpoints of both intervals are excluded.",
  take: "\\(|a - z|\\) is the distance from \\(z\\) to \\(a\\); a two-sided bound describes an annulus of two intervals. Strict inequalities exclude the endpoints."
}

});
