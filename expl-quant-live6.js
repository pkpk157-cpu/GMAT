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
