/* Rewritten explanations — quadratics, factoring, inequalities, absolute value,
   functions and sequences.

   The recurring shortcuts: for a quadratic \(x^2+bx+c\), the roots sum to \(-b\)
   and multiply to \(c\), so you rarely need the formula; an inequality behaves
   exactly like an equation except that multiplying or dividing by a negative
   flips it; an absolute-value equation is two equations; and a function question
   is a substitution question with intimidating notation. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-quadratic-ex#1": {
  steps: "Step 1 — Factor. You need two numbers multiplying to \\(+6\\) and adding to \\(-5\\).\n" +
    "Step 2 — Both must be negative (positive product, negative sum): \\(-2\\) and \\(-3\\).\n" +
    "Step 3 — \\(x^2 - 5x + 6 = (x - 2)(x - 3) = 0\\).\n" +
    "Step 4 — The roots are \\(x = 2\\) and \\(x = 3\\); the larger is 3.",
  fast: "Read the coefficients directly: the roots multiply to 6 and add to 5, so they are 2 and 3. Larger: 3.\n" +
    "For \\(x^2 + bx + c\\), the roots always sum to \\(-b\\) and multiply to \\(c\\). That is faster than factoring and much faster than the quadratic formula.",
  traps: "(A) 2 is the [[smaller]] root — the other half of the correct answer, and the most likely wrong selection.\n" +
    "(C) 5 and (D) 6 are the coefficients themselves: the sum and product of the roots, not the roots.\n" +
    "(E) −2 gets the sign wrong; \\((x-2)\\) gives \\(x = +2\\).",
  take: "Sum of roots \\(= -b\\), product \\(= c\\). Then check whether the question wants the larger root, the smaller, the sum or the product — all four are usually on the list."
},

"quant-quadratic-ex#2": {
  steps: "Step 1 — The sum of the roots of \\(ax^2 + bx + c = 0\\) is \\(-\\dfrac{b}{a}\\).\n" +
    "Step 2 — Here \\(a = 1\\) and \\(b = 7\\), so the sum is \\(-7\\).\n" +
    "Step 3 — Confirm by factoring: \\(x^2 + 7x + 12 = (x + 3)(x + 4)\\), roots \\(-3\\) and \\(-4\\), which sum to \\(-7\\) ✓.",
  fast: "Read \\(-b\\) straight off: \\(-7\\). No factoring needed at all.\n" +
    "Both roots are negative here because the product (\\(+12\\)) is positive while the sum (\\(-7\\)) is negative — a sign check worth doing before anything else.",
  traps: "(A) 7 is \\(+b\\) — the sign dropped, and the trap the question is built on.\n" +
    "(B) 12 is the [[product]] of the roots, not the sum.\n" +
    "(D) −12 is that product with the sign flipped.\n" +
    "(E) 5 has no derivation.",
  take: "Sum of roots \\(= -b/a\\); product \\(= c/a\\). The minus sign in the sum is where nearly every error in this question type comes from."
},

"quant-quadratic-ex#3": {
  steps: "Step 1 — There is no constant term, so factor out the common \\(x\\) rather than reaching for a formula:\n" +
    "\\(x^2 - 4x = x(x - 4) = 0\\).\n" +
    "Step 2 — A product is zero only if a factor is zero: \\(x = 0\\) or \\(x = 4\\).\n" +
    "Step 3 — The question asks for the [[nonzero]] solution: \\(x = 4\\).\n" +
    "Note what you must not do: dividing both sides by \\(x\\) would give \\(x = 4\\) but silently discard the root \\(x = 0\\).",
  fast: "Factor out \\(x\\); the other factor gives the answer immediately: \\(x = 4\\).\n" +
    "Any quadratic with no constant term always has 0 as one root — so the question can only be asking about the other one.",
  traps: "(E) 0 is the root the question explicitly excludes.\n" +
    "(A) −4 flips the sign; \\((x-4)\\) gives \\(x = +4\\).\n" +
    "(C) 2 and (B) −2 are the roots of \\(x^2 - 4 = 0\\), a different equation — the missing \\(x\\) changes everything.",
  take: "No constant term → factor out \\(x\\), and 0 is automatically a root. Never divide an equation by a variable: you lose a solution."
},

"quant-quadratic-ex#4": {
  steps: "Step 1 — Expand using FOIL: first, outer, inner, last.\n" +
    "Step 2 — First: \\(x \\cdot x = x^2\\). Outer: \\(x \\cdot (-5) = -5x\\). Inner: \\(3 \\cdot x = 3x\\). Last: \\(3 \\cdot (-5) = -15\\).\n" +
    "Step 3 — Combine the middle terms: \\(-5x + 3x = -2x\\).\n" +
    "Step 4 — \\((x+3)(x-5) = x^2 - 2x - 15\\).",
  fast: "For \\((x + p)(x + q)\\), the middle coefficient is \\(p + q\\) and the constant is \\(pq\\).\n" +
    "Here \\(p = 3\\), \\(q = -5\\): middle \\(= -2\\), constant \\(= -15\\). Straight to \\(x^2 - 2x - 15\\).\n" +
    "That shortcut also lets you check by inspection — no expansion required.",
  traps: "(B) \\(x^2 + 2x - 15\\) has the middle sign wrong: \\(3 + (-5) = -2\\), not \\(+2\\).\n" +
    "(C) \\(x^2 - 2x + 15\\) has the constant sign wrong: a positive times a negative is negative.\n" +
    "(D) \\(x^2 - 8x - 15\\) subtracts the numbers instead of adding them.\n" +
    "(E) \\(x^2 + 8x + 15\\) is the expansion of \\((x+3)(x+5)\\).",
  take: "\\((x+p)(x+q) = x^2 + (p+q)x + pq\\). Get the two signs right and the question is finished — every wrong answer here is one sign off."
},

"quant-quadratic-ex#5": {
  steps: "Step 1 — Recognise the difference of two squares: \\(x^2 - 9 = (x - 3)(x + 3)\\).\n" +
    "Step 2 — Setting each factor to zero gives \\(x = 3\\) and \\(x = -3\\).\n" +
    "Step 3 — The question asks which listed value [[is]] a solution, and 3 is on the list.\n" +
    "Equivalently: \\(x^2 = 9\\) means \\(x = \\pm\\sqrt9 = \\pm 3\\).",
  fast: "\\(x^2 = 9\\) → \\(x = \\pm 3\\). Scan the choices for either root: 3 is there.\n" +
    "Remember that \\(x^2 = 9\\) has [[two]] solutions — the negative one is often the answer in harder versions of this question.",
  traps: "(A) 9 is the constant from the equation, and the answer if you forget to take the root.\n" +
    "(C) 4.5 is half of 9, treating the square as a doubling.\n" +
    "(B) 6 and (D) 1 have no derivation; substituting either fails immediately.",
  take: "\\(a^2 - b^2 = (a-b)(a+b)\\), and \\(x^2 = k\\) always has two roots, \\(\\pm\\sqrt k\\). Dropping the negative root is the most common oversight in the topic."
},

"quant-quadratic-ex#6": {
  steps: "Step 1 — For \\(x^2 + bx + c = 0\\), the sum of the roots is \\(-b\\) and their product is \\(c\\).\n" +
    "Step 2 — The roots are given as 2 and 6, so their sum is 8.\n" +
    "Step 3 — Therefore \\(-b = 8\\), giving \\(b = -8\\).\n" +
    "Step 4 — Consistency check: the product should equal \\(c\\). \\(2 \\times 6 = 12\\) ✓, which matches the constant term.\n" +
    "Step 5 — Verify by expanding: \\((x-2)(x-6) = x^2 - 8x + 12\\) ✓.",
  fast: "Roots 2 and 6 mean the quadratic is \\((x-2)(x-6)\\), whose middle term is \\(-(2+6)x = -8x\\). So \\(b = -8\\).\n" +
    "Building the factored form and reading off the coefficient is quicker than any formula, and it checks the constant at the same time.",
  traps: "(A) 8 is the sum of the roots without the minus sign — the intended trap.\n" +
    "(B) 12 is \\(c\\), the product, which is already in the equation.\n" +
    "(D) −12 is that product negated; (E) 6 is one of the roots.",
  take: "Roots \\(r\\) and \\(s\\) give \\(x^2 - (r+s)x + rs\\). The middle coefficient carries a minus sign — write the factored form out rather than trusting the sign to memory."
},

"quant-quadratic-ex#7": {
  steps: "Step 1 — Translate. \"3 less than itself\" is \\(n - 3\\), so the product is \\(n(n - 3) = 40\\).\n" +
    "Step 2 — Rearrange: \\(n^2 - 3n - 40 = 0\\).\n" +
    "Step 3 — Factor: two numbers multiplying to \\(-40\\) and adding to \\(-3\\) are \\(-8\\) and \\(+5\\).\n" +
    "\\((n - 8)(n + 5) = 0\\).\n" +
    "Step 4 — \\(n = 8\\) or \\(n = -5\\); the question specifies a [[positive]] number, so \\(n = 8\\).",
  fast: "Look for two numbers 3 apart whose product is 40: \\(5 \\times 8 = 40\\) ✓. The larger is the number itself, so \\(n = 8\\).\n" +
    "Or test the choices — \\(8 \\times 5 = 40\\) lands on the first try if you start from the factor pairs of 40.",
  traps: "(A) 5 is \\(n - 3\\), the smaller factor — a correct intermediate value and the likeliest wrong pick.\n" +
    "(E) 10 pairs with 7 (product 70) and (B) 6 pairs with 3 (product 18).\n" +
    "(C) 7 pairs with 4, giving 28.",
  take: "\"\\(k\\) less than itself\" is \\(n-k\\). With a product given, hunt through factor pairs of that product for two that differ by \\(k\\) — much faster than factoring the quadratic."
},

"quant-quadratic-ex#8": {
  steps: "Step 1 — Find two numbers multiplying to \\(-6\\) and adding to \\(-1\\).\n" +
    "Step 2 — The pairs multiplying to \\(-6\\) are \\((1,-6), (-1,6), (2,-3), (-2,3)\\).\n" +
    "Step 3 — Only \\(2\\) and \\(-3\\) add to \\(-1\\).\n" +
    "Step 4 — So \\(x^2 - x - 6 = (x - 3)(x + 2)\\).\n" +
    "Step 5 — Check by expanding: \\(x^2 + 2x - 3x - 6 = x^2 - x - 6\\) ✓.",
  fast: "The constant is negative, so the two signs differ; the middle coefficient is \\(-1\\), so the larger number carries the minus. That gives \\(-3\\) and \\(+2\\) immediately.\n" +
    "Reading the sign pattern off the two coefficients before hunting for numbers halves the work.",
  traps: "(A) \\((x-2)(x+3)\\) expands to \\(x^2 + x - 6\\) — the signs swapped, giving the wrong middle term.\n" +
    "(C) \\((x-6)(x+1)\\) gives \\(x^2 - 5x - 6\\) and (D) \\((x-1)(x+6)\\) gives \\(x^2 + 5x - 6\\): the right product, the wrong sum.\n" +
    "(E) \\((x-3)(x-2)\\) gives \\(x^2 - 5x + 6\\) — a positive constant, so it cannot be right.",
  take: "Read the signs first: a negative constant means the factors have opposite signs, and the middle coefficient tells you which one is larger. Then expand to check — it takes one line."
},

"quant-quadratic-ex#9": {
  steps: "Step 1 — Let the width be \\(w\\); the length is \\(w + 2\\).\n" +
    "Step 2 — Area: \\(w(w + 2) = 24\\).\n" +
    "Step 3 — Rearrange: \\(w^2 + 2w - 24 = 0\\).\n" +
    "Step 4 — Factor: two numbers multiplying to \\(-24\\) and adding to \\(2\\) are \\(6\\) and \\(-4\\):\n" +
    "\\((w + 6)(w - 4) = 0\\).\n" +
    "Step 5 — \\(w = 4\\) or \\(w = -6\\); a width cannot be negative, so \\(w = 4\\).",
  fast: "Find two numbers 2 apart whose product is 24: \\(4 \\times 6\\) ✓. The width is the [[smaller]] one, 4.\n" +
    "Scanning factor pairs of the area is faster than the quadratic and automatically discards the negative root.",
  traps: "(B) 6 is the [[length]] — the other dimension, and the most likely wrong answer.\n" +
    "(C) 8 pairs with 3 (product 24, but they differ by 5, not 2).\n" +
    "(D) 3 pairs with 5 for a product of 15; (E) 5 pairs with 7 for 35.",
  take: "Geometry word problems with an area and a stated difference are factor-pair puzzles. Reject the negative root on physical grounds, then check which dimension was asked for."
},

"quant-quadratic-ex#10": {
  steps: "Step 1 — Square the given expression, because squaring produces exactly the terms you want plus a constant.\n" +
    "Step 2 — \\(\\left(x + \\dfrac1x\\right)^2 = x^2 + 2 \\cdot x \\cdot \\dfrac1x + \\dfrac{1}{x^2} = x^2 + 2 + \\dfrac{1}{x^2}\\).\n" +
    "Step 3 — The cross-term is exactly 2, because \\(x\\) and \\(\\dfrac1x\\) are reciprocals.\n" +
    "Step 4 — So \\(3^2 = x^2 + \\dfrac{1}{x^2} + 2\\), giving \\(9 = x^2 + \\dfrac{1}{x^2} + 2\\).\n" +
    "Step 5 — \\(x^2 + \\dfrac{1}{x^2} = 7\\).",
  fast: "Standing result: if \\(x + \\dfrac1x = k\\), then \\(x^2 + \\dfrac{1}{x^2} = k^2 - 2\\).\n" +
    "Here \\(9 - 2 = 7\\).\n" +
    "The companion result is worth knowing too: \\(x^3 + \\dfrac{1}{x^3} = k^3 - 3k\\). Both come up in exactly this disguise.",
  traps: "(D) 9 is \\(k^2\\) with the \\(-2\\) forgotten — the trap the question exists for.\n" +
    "(E) 11 is \\(k^2 + 2\\), the correction applied in the wrong direction.\n" +
    "(A) 6 is \\(2k\\) and (B) 8 is a near-miss.\n" +
    "Note that solving for \\(x\\) itself gives an irrational number — the signal that the identity is the intended route.",
  take: "\\(x + \\dfrac1x = k \\Rightarrow x^2 + \\dfrac{1}{x^2} = k^2 - 2\\). Squaring a reciprocal sum always throws off a cross-term of exactly 2."
},

"quant-quadratic-ex#11": {
  steps: "Step 1 — Average cost per calculator: \\(\\dfrac{300}{x}\\).\n" +
    "Step 2 — She sells \\(x - 2\\) of them, each at \\(\\dfrac{300}{x} + 5\\).\n" +
    "Step 3 — Revenue is $120 above the $300 cost, so revenue \\(= 420\\):\n" +
    "\\((x-2)\\left(\\dfrac{300}{x} + 5\\right) = 420\\).\n" +
    "Step 4 — Expand: \\(300 + 5x - \\dfrac{600}{x} - 10 = 420\\), so \\(5x - \\dfrac{600}{x} = 130\\).\n" +
    "Step 5 — Multiply by \\(x\\) and divide by 5: \\(x^2 - 26x - 120 = 0\\).\n" +
    "Step 6 — Factor: \\((x - 30)(x + 4) = 0\\), so \\(x = 30\\).",
  fast: "Backsolve — the choices are small whole numbers and each test is two divisions.\n" +
    "Try \\(x = 30\\): average cost \\(= 300/30 = \\$10\\); she sells 28 at $15 \\(= \\$420\\); that is $120 above $300 ✓.\n" +
    "Start with the choice that divides 300 cleanly — 30 and 25 are the obvious candidates, and 30 lands first.",
  traps: "(E) 24 and (C) 26 do not divide 300 into a whole number of dollars, which makes them poor candidates in a question about an average cost.\n" +
    "(D) 25 gives an average cost of $12, 23 sold at $17 \\(= \\$391\\) — short of 420.\n" +
    "(B) 28 gives $10.71 each, non-round and failing the check.",
  take: "When the choices are integers and the algebra produces a quadratic with awkward coefficients, backsolve. Test the values that make the given total divide cleanly first."
},

"quant-inequalities-ex#1": {
  steps: "Step 1 — Solve the inequality exactly as you would an equation. Add 5 to both sides:\n" +
    "\\(3x > 12\\).\n" +
    "Step 2 — Divide by 3 — a [[positive]] number, so the direction is unchanged:\n" +
    "\\(x > 4\\).\n" +
    "Step 3 — Among the choices, only 5 exceeds 4.",
  fast: "\\(x > 4\\), so scan for a choice above 4: only 5 qualifies.\n" +
    "Or substitute: \\(3(5) - 5 = 10 > 7\\) ✓. With five numeric choices, testing the largest first is efficient for a \"greater than\" question.",
  traps: "(C) 4 is the boundary and fails the strict inequality: \\(3(4) - 5 = 7\\), which is not [[greater]] than 7.\n" +
    "(B) 3 gives 4 and (A) 2 gives 1, both below.\n" +
    "(E) −1 gives \\(-8\\).\n" +
    "The boundary value is always offered in these questions, and strict-versus-inclusive is what separates it from the answer.",
  take: "Solve an inequality like an equation, then check the boundary carefully: \\(>\\) excludes it, \\(\\ge\\) includes it. The boundary is always among the choices."
},

"quant-inequalities-ex#2": {
  steps: "Step 1 — Divide both sides by \\(-2\\).\n" +
    "Step 2 — Dividing by a [[negative]] number reverses the inequality sign — the one rule that makes inequalities different from equations.\n" +
    "Step 3 — \\(\\dfrac{-2x}{-2} > \\dfrac{6}{-2}\\), giving \\(x > -3\\).\n" +
    "Step 4 — Check with a value: \\(x = 0\\) gives \\(0 < 6\\) ✓, and \\(0 > -3\\) ✓. Check outside: \\(x = -4\\) gives \\(8 < 6\\), false ✓.",
  fast: "Avoid dividing by a negative altogether: add \\(2x\\) to both sides to get \\(0 < 6 + 2x\\), then \\(-6 < 2x\\), so \\(x > -3\\).\n" +
    "Moving the term instead of dividing by \\(-2\\) sidesteps the flip entirely — a good habit under time pressure.",
  traps: "(A) \\(x < -3\\) is the answer with the sign not flipped — the single error this question tests.\n" +
    "(B) \\(x < 3\\) and (D) \\(x > 3\\) drop the negative from the \\(-3\\).\n" +
    "(E) \\(x = -3\\) turns a strict inequality into an equation.\n" +
    "Testing \\(x = 0\\) disposes of (A), (D) and (E) in one substitution.",
  take: "Multiplying or dividing an inequality by a negative flips it. Safer still: move the negative term across so you never divide by one — and always test a value at the end."
},

"quant-inequalities-ex#3": {
  steps: "Step 1 — \\(|A| = k\\) means \\(A = k\\) or \\(A = -k\\): an absolute-value equation is two equations.\n" +
    "Step 2 — Case 1: \\(x - 3 = 4\\), so \\(x = 7\\).\n" +
    "Step 3 — Case 2: \\(x - 3 = -4\\), so \\(x = -1\\).\n" +
    "Step 4 — Both check: \\(|7-3| = 4\\) ✓ and \\(|-1-3| = |-4| = 4\\) ✓.",
  fast: "Read it as distance: \\(|x-3| = 4\\) says \\(x\\) is 4 away from 3 on the number line. That gives \\(3 + 4 = 7\\) and \\(3 - 4 = -1\\).\n" +
    "The distance interpretation is faster than casework and makes the two answers obvious.",
  traps: "(A) \"7 only\" and (C) \"−1 only\" each keep one root and drop the other — the standard absolute-value oversight.\n" +
    "(D) \"4 or −4\" solves \\(|x| = 4\\), ignoring the \\(-3\\) inside.\n" +
    "(E) \"1 or 7\" mishandles the negative case (\\(3 - 4 = -1\\), not \\(1\\)).",
  take: "\\(|x - a| = k\\) means \\(x\\) is \\(k\\) away from \\(a\\): the solutions are \\(a + k\\) and \\(a - k\\). There are always two unless \\(k = 0\\)."
},

"quant-inequalities-ex#4": {
  steps: "Step 1 — \\(|x| < 3\\) means \\(x\\) is less than 3 units from zero, i.e. \\(-3 < x < 3\\).\n" +
    "Step 2 — Test each choice against that interval.\n" +
    "Step 3 — \\(-2\\), \\(0\\), \\(2\\) and \\(2.5\\) all lie strictly between \\(-3\\) and \\(3\\).\n" +
    "Step 4 — \\(3\\) does not: \\(|3| = 3\\), which is not [[less]] than 3.",
  fast: "\\(|x| < 3\\) is the open interval \\((-3, 3)\\). Look for the choice on or outside the boundary: 3 is exactly on it, so it fails.\n" +
    "The question asks which is NOT possible — read that word twice, since four of the five choices are perfectly valid.",
  traps: "(D) 2.5 is inside the interval and looks suspicious only because it is not an integer — the inequality says nothing about integers.\n" +
    "(B) 0 satisfies it (\\(|0| = 0 < 3\\)) and is often doubted for the same reason.\n" +
    "(A) −2 is inside; negative values are allowed because absolute value strips the sign — and (C) 2 is its mirror image, included so that neither sign looks special.",
  take: "\\(|x| < k\\) is \\(-k < x < k\\); \\(|x| > k\\) is \\(x < -k\\) or \\(x > k\\). And in a NOT question, the four choices you can quickly confirm are the ones to discard."
},

"quant-inequalities-ex#5": {
  steps: "Step 1 — Subtract 1 from both sides: \\(2x \\le 8\\).\n" +
    "Step 2 — Divide by 2 (positive, so no flip): \\(x \\le 4\\).\n" +
    "Step 3 — The largest integer satisfying \\(x \\le 4\\) is 4 itself, since the inequality is inclusive.\n" +
    "Step 4 — Check: \\(2(4) + 1 = 9 \\le 9\\) ✓, while \\(x = 5\\) gives 11, which fails.",
  fast: "\\(x \\le 4\\), and \\(\\le\\) includes the endpoint — so 4.\n" +
    "The whole question is whether the boundary counts. It does here; had the sign been \\(<\\), the answer would be 3.",
  traps: "(C) 3 is the answer for a strict \\(<\\) — the trap for anyone who assumes the boundary is excluded.\n" +
    "(E) 5 gives 11, over the limit.\n" +
    "(A) 1 and (B) 2 satisfy the inequality but are not the [[largest]] such integer — a reminder to read the superlative.",
  take: "\\(\\le\\) includes the boundary, \\(<\\) does not. For a \"largest integer\" question, solve, then check whether the endpoint itself is admissible."
},

"quant-inequalities-ex#6": {
  steps: "Step 1 — Subtract 4 from both sides: \\(-x > -3\\).\n" +
    "Step 2 — Multiply both sides by \\(-1\\), which [[reverses]] the inequality:\n" +
    "\\(x < 3\\).\n" +
    "Step 3 — Check: \\(x = 0\\) gives \\(4 > 1\\) ✓, and \\(x = 4\\) gives \\(0 > 1\\), false ✓.",
  fast: "Add \\(x\\) to both sides instead: \\(4 > 1 + x\\), so \\(3 > x\\), i.e. \\(x < 3\\). No sign flip to remember.\n" +
    "Rearranging to keep the variable positive is almost always the safer route.",
  traps: "(A) \\(x > 3\\) is the answer without the flip — the error the question is built around.\n" +
    "(C) \\(x > -3\\) and (D) \\(x < -3\\) carry a stray minus sign from the intermediate step.\n" +
    "(E) \\(x = 3\\) is the boundary, which fails a strict inequality.",
  take: "When the variable ends up negative, add it across rather than multiplying by \\(-1\\). Then substitute one value inside and one outside to confirm the direction."
},

"quant-inequalities-ex#7": {
  steps: "Step 1 — Fix the signs: \\(x > 2\\) makes \\(x\\) positive; \\(y < -1\\) makes \\(y\\) negative.\n" +
    "Step 2 — Test each expression for a guaranteed sign.\n" +
    "\\(x + y\\): a positive plus a negative can be either — \\(x = 10, y = -2\\) gives \\(+8\\).\n" +
    "\\(x - y\\): positive minus negative is positive, never negative.\n" +
    "\\(xy\\): positive times negative is [[always]] negative. ✓\n" +
    "\\(x^2 + y\\): \\(x^2 > 4\\) while \\(y\\) could be \\(-1.5\\), giving a positive result.\n" +
    "\\(y^2\\): a square is never negative.\n" +
    "Step 3 — Only \\(xy\\) is always negative.",
  fast: "Sign rules alone answer this: positive × negative is always negative, and no other expression has a forced sign.\n" +
    "For \"must be\" questions, one counterexample kills a choice — so try to break each option rather than to confirm it.",
  traps: "(A) \\(x+y\\) is negative for \\(x = 3, y = -10\\) but positive for \\(x = 10, y = -2\\) — [[sometimes]] negative, which fails a \"always\" question.\n" +
    "(D) \\(x^2 + y\\) is the same story.\n" +
    "(B) \\(x - y\\) is always positive, the exact opposite of what is asked.\n" +
    "(E) \\(y^2\\) is always positive.",
  take: "\"Always\" questions are won by counterexample. Fix the signs, then try to break each option with one extreme choice of values."
},

"quant-inequalities-ex#8": {
  steps: "Step 1 — \\(|2x| = 10\\) splits into two cases: \\(2x = 10\\) or \\(2x = -10\\).\n" +
    "Step 2 — Case 1: \\(x = 5\\). Case 2: \\(x = -5\\).\n" +
    "Step 3 — Both check: \\(|2(5)| = 10\\) ✓ and \\(|2(-5)| = |-10| = 10\\) ✓.\n" +
    "Equivalently, \\(|2x| = 2|x|\\), so \\(|x| = 5\\) and \\(x = \\pm 5\\).",
  fast: "Pull the constant out: \\(|2x| = 2|x| = 10\\), so \\(|x| = 5\\) and \\(x = \\pm5\\).\n" +
    "A positive constant can always come outside an absolute value, which reduces the problem to the simplest possible form.",
  traps: "(C) \"5 only\" and (D) \"−5 only\" each drop a root.\n" +
    "(B) \"10 or −10\" forgets to divide by 2 — it solves \\(|x| = 10\\).\n" +
    "(E) \"2 or 5\" lifts the two numbers out of the equation.",
  take: "\\(|cx| = c|x|\\) for positive \\(c\\). Reduce to \\(|x| = k\\) first, then write both roots — absolute-value equations almost always have two."
},

"quant-inequalities-ex#9": {
  steps: "Step 1 — \\(|x|\\) measures distance from zero, so it is largest at whichever endpoint is furthest from zero.\n" +
    "Step 2 — The interval runs from \\(-3\\) to \\(5\\).\n" +
    "Step 3 — Distances from zero: \\(|-3| = 3\\) and \\(|5| = 5\\).\n" +
    "Step 4 — The maximum is 5, attained at \\(x = 5\\).",
  fast: "Compare the two endpoints' distances from zero and take the bigger: \\(5\\) beats \\(3\\).\n" +
    "An interior point can never win — \\(|x|\\) increases as you move away from zero in either direction, so only the endpoints need checking.",
  traps: "(A) 3 is the left endpoint's absolute value — the answer if you assume the negative end must be the extreme.\n" +
    "(D) 8 is the [[width]] of the interval (\\(5 - (-3)\\)), not a value of \\(|x|\\).\n" +
    "(B) 4 is the midpoint of 3 and 5; (E) 2 is inside the range but not maximal.",
  take: "On a closed interval, \\(|x|\\) is maximised at an endpoint — whichever is further from zero. Check both ends and take the larger absolute value."
},

"quant-inequalities-ex#10": {
  steps: "Step 1 — \\(5 < x < 12\\) is strict at both ends, so the integers available are \\(6, 7, 8, 9, 10, 11\\).\n" +
    "Step 2 — Pick out the multiples of 3: \\(6\\) and \\(9\\).\n" +
    "Step 3 — \\(12\\) is a multiple of 3 but is excluded by the strict inequality.\n" +
    "Step 4 — So there are 2.",
  fast: "List the multiples of 3 near the range: 6, 9, 12. The first two are inside; 12 is on the boundary and excluded.\n" +
    "Listing the multiples directly is quicker than listing every integer, and it makes the boundary question obvious.",
  traps: "(C) 3 counts 12 as well — the error the strict inequality is there to catch.\n" +
    "(A) 1 counts only one of 6 and 9.\n" +
    "(D) 4 would add 3 or 15, both outside the range.\n" +
    "(E) 0 misreads the range entirely.",
  take: "With \\(<\\), the endpoints are out; with \\(\\le\\), they are in. List the multiples rather than every integer, then check each boundary explicitly."
},

"quant-functions-ex#1": {
  steps: "Step 1 — Function notation is an instruction: \\(f(x) = 2x + 3\\) says \"double the input, then add 3\".\n" +
    "Step 2 — \\(f(4)\\) means substitute 4 wherever \\(x\\) appears.\n" +
    "Step 3 — \\(f(4) = 2(4) + 3 = 8 + 3 = 11\\).",
  fast: "Substitute and evaluate: \\(8 + 3 = 11\\).\n" +
    "Order matters — the doubling happens before the addition, exactly as written.",
  traps: "(A) 7 is \\(4 + 3\\), skipping the multiplication.\n" +
    "(D) 14 is \\(2(4 + 3)\\) — adding before doubling, which is what the notation does [[not]] say.\n" +
    "(E) 8 is \\(2 \\times 4\\) with the \\(+3\\) forgotten; (B) 9 is \\(f(3)\\) — the 3 from the rule substituted as the input.",
  take: "\\(f(a)\\) means substitute \\(a\\) for every \\(x\\) and follow the order of operations as written. The bracket in \\(f(4)\\) is notation, not multiplication."
},

"quant-functions-ex#2": {
  steps: "Step 1 — Read the rule as an instruction: \\(f(x) = x^2 - 1\\) says square the input, then subtract 1. The order is fixed by the expression.\n" +
    "Step 2 — Substitute 3 for every \\(x\\): \\(f(3) = 3^2 - 1\\).\n" +
    "Step 3 — Square first: \\(3^2 = 9\\).\n" +
    "Step 4 — Then subtract: \\(9 - 1 = 8\\).",
  fast: "\\(9 - 1 = 8\\). The only decision is squaring before subtracting, which is what the expression says.\n" +
    "Note that \\(f(x) = x^2 - 1\\) also factors as \\((x-1)(x+1)\\), giving \\(2 \\times 4 = 8\\) — a useful alternative when the numbers are larger.",
  traps: "(C) 9 is \\(3^2\\) with the \\(-1\\) forgotten.\n" +
    "(A) 6 is \\(2 \\times 3\\), reading the square as a doubling.\n" +
    "(D) 10 is \\(9 + 1\\), the sign flipped; (E) 5 is \\(2(3) - 1\\) — the square-as-doubling misread carried through the whole rule.",
  take: "Follow the operations in the order written. Where a function factors — \\(x^2 - 1 = (x-1)(x+1)\\) — the factored form can be quicker for large inputs."
},

"quant-functions-ex#3": {
  steps: "Step 1 — \\(f(a) = 14\\) means the output is known and the input is not — so solve rather than substitute.\n" +
    "Step 2 — \\(3a - 1 = 14\\).\n" +
    "Step 3 — Add 1: \\(3a = 15\\).\n" +
    "Step 4 — Divide by 3: \\(a = 5\\).\n" +
    "Step 5 — Check: \\(f(5) = 3(5) - 1 = 14\\) ✓.",
  fast: "Run the machine backwards: undo the \\(-1\\) (giving 15), then undo the \\(\\times 3\\) (giving 5).\n" +
    "Working backwards through the operations in reverse order is exactly what solving an equation is.",
  traps: "(B) 4 gives \\(f(4) = 11\\) and (E) 6 gives 17 — the neighbours.\n" +
    "(C) 4.5 gives \\(f(4.5) = 12.5\\), short of 14 — the non-integer decoy.\n" +
    "(A) 3 is the coefficient reused as the answer.",
  take: "When the output is given, invert the operations in reverse order. Then substitute forwards to check — one line, and it catches every sign error."
},

"quant-functions-ex#4": {
  steps: "Step 1 — A custom symbol is just a definition to follow literally: \\(x \\diamond y = x^2 - y\\).\n" +
    "Step 2 — Match the positions: in \\(3 \\diamond 2\\), \\(x = 3\\) and \\(y = 2\\).\n" +
    "Step 3 — \\(3^2 - 2 = 9 - 2 = 7\\).\n" +
    "Note that the operation is not symmetric: \\(2 \\diamond 3 = 4 - 3 = 1\\), a different answer.",
  fast: "Substitute in order and evaluate: \\(9 - 2 = 7\\).\n" +
    "The only thing that can go wrong is swapping the two inputs, so write \\(x = 3\\), \\(y = 2\\) down before computing.",
  traps: "(D) 1 is \\(2 \\diamond 3\\) — the inputs reversed, which is the trap the asymmetric definition creates.\n" +
    "(E) 9 is \\(x^2\\) with the subtraction dropped.\n" +
    "(B) 5 is \\(3^2 - 2^2\\) and (C) 11 is \\(3^2 + 2\\).",
  take: "Custom-symbol questions test reading, not mathematics. Write down which value is \\(x\\) and which is \\(y\\), and check whether the definition is symmetric."
},

"quant-functions-ex#5": {
  steps: "Step 1 — \\(f(f(1))\\) is a composition: work from the inside out.\n" +
    "Step 2 — Inner: \\(f(1) = 2(1) + 1 = 3\\).\n" +
    "Step 3 — Outer: feed that result back in — \\(f(3) = 2(3) + 1 = 7\\).\n" +
    "Step 4 — So \\(f(f(1)) = 7\\).",
  fast: "Two passes through the same machine: \\(1 \\to 3 \\to 7\\).\n" +
    "Compute the inner value and write it down before starting the outer one — trying to hold both in your head is where composition errors come from.",
  traps: "(A) 3 is \\(f(1)\\), the inner value alone — the most likely wrong pick.\n" +
    "(B) 5 is \\(2 \\times 1 + 3\\)-style arithmetic, or \\(f(2)\\).\n" +
    "(D) 9 applies the function a third time.\n" +
    "(E) 4 is the inner 3 plus 1 — adding once instead of running the full rule again.",
  take: "Composition works inside out. Evaluate the inner function completely, write the number down, then substitute it into the outer one."
},

"quant-functions-ex#6": {
  steps: "Step 1 — Substitute \\(a = 3\\) into both terms.\n" +
    "Step 2 — \\(f(a+1) = f(4) = 4^2 = 16\\).\n" +
    "Step 3 — \\(f(a) = f(3) = 3^2 = 9\\).\n" +
    "Step 4 — Difference: \\(16 - 9 = 7\\).\n" +
    "Algebraically this is \\((a+1)^2 - a^2 = 2a + 1\\), which at \\(a = 3\\) gives 7 — the same answer.",
  fast: "Use the identity: consecutive squares differ by \\(2a + 1\\), so \\(2(3) + 1 = 7\\).\n" +
    "That is also why the odd numbers are exactly the gaps between consecutive squares: \\(1, 4, 9, 16\\) differ by \\(3, 5, 7\\).",
  traps: "(A) 5 is the gap between \\(2^2\\) and \\(3^2\\) — the right identity at the wrong value of \\(a\\).\n" +
    "(D) 16 is \\(f(4)\\) alone, without subtracting.\n" +
    "(C) 9 is \\(f(3)\\) alone; (E) 1 is the difference of the [[inputs]] rather than the outputs.",
  take: "\\((a+1)^2 - a^2 = 2a + 1\\). Consecutive squares differ by consecutive odd numbers — a fact that shortcuts a whole family of questions."
},

"quant-functions-ex#7": {
  steps: "Step 1 — Identify the pattern. \\(3, 7, 11, 15\\) rises by 4 each time, so it is arithmetic with first term \\(a = 3\\) and common difference \\(d = 4\\).\n" +
    "Step 2 — The \\(n\\)-th term is \\(a + (n-1)d\\) — note \\(n - 1\\), because the first term involves no step at all.\n" +
    "Step 3 — \\(a_{10} = 3 + 9(4) = 3 + 36 = 39\\).",
  fast: "From the 1st term to the 10th is [[nine]] steps of 4, so \\(3 + 36 = 39\\).\n" +
    "Counting the gaps rather than the terms is the reliable way to avoid the off-by-one that this formula invites.",
  traps: "(E) 40 is \\(10 \\times 4\\) — ten steps counted instead of nine [[and]] the starting 3 dropped, landing one above the answer.\n" +
    "(A) 36 is \\(9 \\times 4\\), the total step without the starting value.\n" +
    "(B) 37 and (C) 38 are the intermediate near-misses.",
  take: "Arithmetic sequence: \\(a_n = a + (n-1)d\\). Count [[gaps]], not terms — from the 1st to the \\(n\\)-th there are \\(n-1\\) of them."
},

"quant-functions-ex#8": {
  steps: "Step 1 — \\(2, 4, 8, 16\\) doubles each time: geometric with \\(a = 2\\) and ratio \\(r = 2\\).\n" +
    "Step 2 — The \\(n\\)-th term is \\(a r^{\\,n-1}\\).\n" +
    "Step 3 — \\(a_6 = 2 \\times 2^{5} = 2^6 = 64\\).\n" +
    "Step 4 — Or simply continue the list: \\(2, 4, 8, 16, 32, 64\\).",
  fast: "Just keep doubling: \\(16 \\to 32 \\to 64\\). Two steps from the last term shown.\n" +
    "For a short sequence, extending the list is faster and safer than the formula — and it sidesteps the \\(n-1\\) exponent entirely.",
  traps: "(A) 32 is the 5th term — one short, the off-by-one the \\(r^{n-1}\\) exponent invites.\n" +
    "(E) 128 is the 7th term, one too far.\n" +
    "(B) 48 and (D) 96 are not powers of 2 at all and cannot appear in this sequence.",
  take: "Geometric: \\(a_n = a r^{\\,n-1}\\). For six terms or fewer, writing the list out is quicker and removes the exponent's off-by-one risk."
},

"quant-functions-ex#9": {
  steps: "Step 1 — The terms \\(1, 4, 7, 10, 13\\) are evenly spaced with a common difference of 3.\n" +
    "Step 2 — For an evenly spaced list, the sum is (number of terms) × (average), and the average is the [[middle]] term.\n" +
    "Step 3 — The middle term of five is 7.\n" +
    "Step 4 — Sum \\(= 5 \\times 7 = 35\\).\n" +
    "Step 5 — Check by adding: \\(1 + 4 + 7 + 10 + 13 = 35\\) ✓.",
  fast: "Middle term times the count: \\(7 \\times 5 = 35\\).\n" +
    "Equivalently, average the first and last: \\(\\dfrac{1 + 13}{2} = 7\\), then multiply by 5. Both routes avoid adding five numbers.",
  traps: "(B) 30 and (C) 40 are what you get by using 6 or 8 as the average.\n" +
    "(D) 25 is \\(5 \\times 5\\), taking the count as the average.\n" +
    "(E) 45 is \\(3 + 6 + 9 + 12 + 15\\) — the right common difference, but started at 3 instead of 1.",
  take: "Evenly spaced sum = middle term × number of terms = \\(\\dfrac{\\text{first} + \\text{last}}{2} \\times n\\). This scales to long lists where adding is impractical."
},

"quant-functions-ex#10": {
  steps: "Step 1 — The rule \\(2n + 1\\) gives the \\(n\\)-th term directly — no stepping through the sequence is required.\n" +
    "Step 2 — Substitute \\(n = 20\\): \\(2(20) + 1\\).\n" +
    "Step 3 — \\(= 40 + 1 = 41\\).",
  fast: "Substitute straight in: \\(41\\).\n" +
    "This is the key difference from questions 7 and 8: an explicit \\(n\\)-th-term rule has no \\(n-1\\) to worry about, because the formula already accounts for the position.",
  traps: "(D) 40 is \\(2n\\) with the \\(+1\\) dropped.\n" +
    "(A) 39 is the 19th term, an off-by-one imported from the \\(a + (n-1)d\\) formula that does not apply here.\n" +
    "(C) 43 is the 21st term; (E) 42 is a near-miss.",
  take: "When the \\(n\\)-th term is given as a formula, substitute directly — there is no off-by-one. The \\(n-1\\) appears only when you build the term from a first term and a common difference."
}

});
