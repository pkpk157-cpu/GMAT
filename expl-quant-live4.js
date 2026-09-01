/* GMAT Prep — in-depth explanations for the live-exam Quant set 4.
   Every answer was independently re-derived before the explanation was
   written; no stored key was changed. Keys are "setId#n"; index.html merges
   these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-4#1": {
  steps: "Step 1 — Quadrant IV is where \\(x > 0\\) and \\(y < 0\\).\n" +
    "Step 2 — Take the first inequality, \\(y \\ge 2x + 1\\). If \\(x > 0\\), then \\(2x + 1 > 1\\), so \\(y > 1\\).\n" +
    "Step 3 — But quadrant IV requires \\(y < 0\\). The two cannot hold at once, so no point of quadrant IV satisfies the system.\n" +
    "Step 4 — Confirm every other quadrant does contain a solution. Quadrant I: \\((0.1, 2)\\) gives \\(2 \\ge 1.2\\) ✓ and \\(2 > -0.95\\) ✓.\n" +
    "Step 5 — Quadrant II: \\((-1, 1)\\) gives \\(1 \\ge -1\\) ✓ and \\(1 > -1.5\\) ✓.\n" +
    "Step 6 — Quadrant III: \\((-2, -1)\\) gives \\(-1 \\ge -3\\) ✓ and \\(-1 > -2\\) ✓.",
  fast: "Only the steeper constraint matters. \\(y \\ge 2x + 1\\) already forces \\(y > 1\\) for any positive \\(x\\), so the whole of quadrant IV is excluded before the second inequality is even read.\n" +
    "The second inequality, \\(y > \\tfrac12 x - 1\\), is the weaker of the two on the right-hand side and never becomes the binding constraint there.",
  traps: "(B) II — and with it the pairing in (E) — over-excludes: quadrant II has \\(x < 0\\), where \\(2x + 1\\) can be very negative, so plenty of points with positive \\(y\\) satisfy both inequalities.\n" +
    "(C) III looks plausible because both \\(x\\) and \\(y\\) are negative there, but the line \\(y = 2x+1\\) drops steeply into that quadrant, leaving a wedge of solutions above it.\n" +
    "(A) I is the region where both inequalities are easiest to satisfy.\n" +
    "The reliable method here is not sketching but substitution: one test point per quadrant settles the whole question.",
  take: "To show a region is empty, find one inequality that contradicts the quadrant's sign conditions. To show a region is non-empty, produce a single point."
},

"quant-live-4#2": {
  steps: "Step 1 — Week 1: he receives 1, so the running total is 1.\n" +
    "Step 2 — Week 2: he receives \\(1 + (\\text{everything so far}) = 1 + 1 = 2\\). Running total \\(3\\).\n" +
    "Step 3 — Week 3: \\(1 + 3 = 4\\). Running total \\(7\\).\n" +
    "Step 4 — Week 4: \\(1 + 7 = 8\\). Running total \\(15\\). The pattern is clear: each payment is \\(2^{n-1}\\) and each running total is \\(2^n - 1\\).\n" +
    "Step 5 — Why: if the total after week \\(n\\) is \\(T\\), the next payment is \\(1 + T\\), so the new total is \\(T + 1 + T = 2T + 1\\) — which doubles-and-adds-one, exactly the recursion that generates \\(2^n - 1\\).\n" +
    "Step 6 — After 8 weeks the total is \\(2^8 - 1 = 255\\).",
  fast: "Write the running totals rather than the payments: \\(1, 3, 7, 15, 31, \\dots\\) — one less than a power of two every time. After eight weeks that is \\(2^8 - 1 = 255\\).\n" +
    "Recognising the \"one less than a power of 2\" pattern after three terms saves you from listing all eight.",
  traps: "(D) 254 is the total of the *payments after the first*, or \\(2^8 - 2\\) — an off-by-one from dropping week 1.\n" +
    "(B) 127 is \\(2^7 - 1\\), the total after seven weeks: the classic off-by-one on the exponent.\n" +
    "(A) 126 combines both errors.\n" +
    "(C) 252 is \\(2^8 - 4\\) — the payment series \\(4 + 8 + \\dots + 128\\) with the first two weeks dropped.\n" +
    "The distinction to hold onto: the eighth *payment* is 128, while the eight-week *total* is 255.",
  take: "When each term equals one plus the sum of all previous terms, the running totals follow \\(2^n - 1\\) and the payments follow \\(2^{n-1}\\)."
},

"quant-live-4#3": {
  steps: "Step 1 — The sequence is geometric with an integer ratio \\(r > 1\\), so the fifth term is \\(a \\cdot r^4\\), where \\(a\\) is the first term.\n" +
    "Step 2 — The condition is \\(a r^4 < 1000\\), and we want to maximise how many positive integer values \\(a\\) can take.\n" +
    "Step 3 — Larger \\(r\\) shrinks the room for \\(a\\), so take the smallest allowed ratio, \\(r = 2\\).\n" +
    "Step 4 — Then \\(16a < 1000\\), so \\(a < 62.5\\).\n" +
    "Step 5 — The positive integers satisfying that are \\(1\\) through \\(62\\) — 62 values.\n" +
    "Step 6 — Check that no larger \\(r\\) helps: \\(r = 3\\) gives \\(81a < 1000\\), so \\(a \\le 12\\) — a strict subset. The maximum count is 62.",
  fast: "Two decisions and one division. The ratio must be at least 2 (it is an integer greater than 1), and smaller ratios leave more room, so \\(r = 2\\) is optimal. Then \\(1000 / 16 = 62.5\\), and the count of positive integers below it is 62.\n" +
    "The trap-avoiding step is the strict inequality: 62.5 is not attained, so 62 is the last valid value.",
  traps: "(D) 63 counts \\(a = 63\\), which gives a fifth term of \\(63 \\times 16 = 1008\\) — above 1000, so it fails.\n" +
    "(B) 61 drops one end of the range, usually by starting the count at 2 rather than 1.\n" +
    "(E) 64 comes from rounding \\(62.5\\) up to 63 and then adding one for inclusivity — a double error.\n" +
    "(A) 60 comes from taking \\(r^4\\) as some other power, most often \\(r^5\\) (treating the fifth term as five multiplications rather than four).\n" +
    "The exponent is the other place to be careful: from the first term to the fifth is four steps, so \\(r^4\\), not \\(r^5\\).",
  take: "The \\(n\\)th term of a geometric sequence is \\(ar^{n-1}\\). To maximise the count of admissible first terms, minimise the ratio — then count integers strictly below the bound."
},

"quant-live-4#4": {
  steps: "Step 1 — The line passes through \\((0, 4)\\), a point above the origin on the \\(y\\)-axis.\n" +
    "Step 2 — Its slope is negative, so as \\(x\\) increases the line falls.\n" +
    "Step 3 — Starting at height 4 and falling, the line reaches \\(y = 0\\) somewhere to the *right* of the \\(y\\)-axis. So the \\(x\\)-intercept is positive.\n" +
    "Step 4 — Algebraically: \\(y = mx + 4\\) gives an \\(x\\)-intercept of \\(-\\tfrac4m\\), and with \\(m < 0\\) that is positive.\n" +
    "Step 5 — I, \\(-1\\): negative, so impossible.\n" +
    "Step 6 — II, \\(0\\): an \\(x\\)-intercept of 0 would mean the line passes through the origin, contradicting a \\(y\\)-intercept of 4.\n" +
    "Step 7 — III, \\(6\\): the slope would be \\(\\dfrac{0 - 4}{6 - 0} = -\\dfrac23\\), which is negative ✓.",
  fast: "The \\(x\\)-intercept of \\(y = mx + 4\\) is \\(-4/m\\), and a negative \\(m\\) makes that positive. One expression settles all three statements at once — only the positive candidate survives.\n" +
    "A sketch does the same work: from a point above the origin, a downward-sloping line can only cross the \\(x\\)-axis to the right.",
  traps: "(E) accepts an \\(x\\)-intercept of 0, which would put the line through the origin — impossible when the \\(y\\)-intercept is 4. A line has one \\(y\\)-intercept, and it is not 0 here.\n" +
    "(A) and (D) accept \\(-1\\), which corresponds to a *positive* slope of 4: from \\((-1, 0)\\) up to \\((0, 4)\\) the line rises.\n" +
    "(B) accepts only 0, the impossible one.\n" +
    "The single check that resolves everything: compute the slope each candidate intercept would imply, and test its sign.",
  take: "For \\(y = mx + b\\), the \\(x\\)-intercept is \\(-b/m\\). With \\(b > 0\\) and \\(m < 0\\) it is positive; a zero \\(x\\)-intercept requires a zero \\(y\\)-intercept."
},

"quant-live-4#5": {
  steps: "Step 1 — Describe the boundary. \\(y = |x|\\) consists of the ray \\(y = x\\) for \\(x \\ge 0\\) and the ray \\(y = -x\\) for \\(x \\le 0\\) — a V opening upward from the origin.\n" +
    "Step 2 — The condition \\(y \\ge |x|\\) is the region on or above that V: the wedge between the two rays.\n" +
    "Step 3 — Those rays make \\(45^\\circ\\) with the \\(y\\)-axis on each side, so the wedge subtends \\(45 + 45 = 90^\\circ\\) at the origin.\n" +
    "Step 4 — The full plane around the origin is \\(360^\\circ\\).\n" +
    "Step 5 — The probability is \\(\\dfrac{90}{360} = \\dfrac14\\).",
  fast: "Both boundary lines pass through the origin, so the region is a wedge and its share of the plane is just its angle over \\(360^\\circ\\). The two rays have slopes \\(1\\) and \\(-1\\), which are perpendicular — a right angle, hence a quarter.\n" +
    "Symmetry gives the same answer instantly: the four congruent wedges (above, below, left, right of the V-pair) tile the plane, so each is one quarter.",
  traps: "(B) \\(\\tfrac18\\) halves the answer, from counting only the half of the wedge with \\(x \\ge 0\\) — the region includes both sides of the \\(y\\)-axis.\n" +
    "(C) \\(\\tfrac16\\) and (A) \\(\\tfrac1{10}\\) come from mis-measuring the wedge angle as \\(60^\\circ\\) or \\(36^\\circ\\); the slopes of \\(\\pm 1\\) fix it at \\(90^\\circ\\).\n" +
    "(D) \\(\\tfrac15\\) has no geometric basis and is there to catch estimation.\n" +
    "The one modelling point: because every boundary passes through the origin, the region's *area* is infinite, so the probability must be read as an angular share.",
  take: "When all boundaries pass through the origin, a region's share of the plane is its angle divided by \\(360^\\circ\\). Slopes of \\(1\\) and \\(-1\\) always make a right angle."
},

"quant-live-4#6": {
  steps: "Step 1 — Give the generic point of line 2 the coordinates \\((X, Y)\\).\n" +
    "Step 2 — The rule says \\((X, Y) = (b, -a)\\) for some point \\((a, b)\\) on line 1. So \\(X = b\\) and \\(Y = -a\\), which means \\(b = X\\) and \\(a = -Y\\).\n" +
    "Step 3 — Every point of line 1 satisfies \\(b = 2a + 1\\).\n" +
    "Step 4 — Substitute: \\(X = 2(-Y) + 1 = 1 - 2Y\\).\n" +
    "Step 5 — Rearrange into the form of the choices: \\(2Y = 1 - X\\), i.e. \\(2y = 1 - x\\).\n" +
    "Step 6 — Check with a concrete point. \\((0, 1)\\) is on line 1, so \\((1, 0)\\) must be on line 2: \\(2(0) = 1 - 1\\) ✓. And \\((1, 3)\\) on line 1 sends \\((3, -1)\\): \\(2(-1) = 1 - 3\\) ✓.",
  fast: "Do not reason about the geometry of the rotation — just invert the substitution. Write the new coordinates in terms of the old, solve for the old, and substitute into line 1's equation. That mechanical procedure works for any coordinate transformation.\n" +
    "Then verify with one concrete point; it catches sign errors, which are the only realistic failure mode here.",
  traps: "(A) and (D) both have slope \\(+\\tfrac12\\), the reciprocal of line 1's slope without the sign flip. The map \\((a,b) \\mapsto (b,-a)\\) is a rotation by \\(-90^\\circ\\), which turns a slope of \\(2\\) into \\(-\\tfrac12\\), not \\(+\\tfrac12\\).\n" +
    "(E) \\(x = 2y + 1\\) is what you get by swapping \\(x\\) and \\(y\\) without negating — that is a reflection, not the given map.\n" +
    "(C) \\(\\tfrac{x+y}{2} = -1\\) has slope \\(-1\\) and does not pass through \\((1, 0)\\).\n" +
    "Testing one transformed point rules out every wrong choice in seconds.",
  take: "For a coordinate map, express the old variables in terms of the new and substitute into the original equation. Verify with one transformed point."
},

"quant-live-4#7": {
  steps: "Step 1 — Generate the terms: \\(3\\), then \\(2(3) + 2 = 8\\), then \\(2(8) + 2 = 18\\), then \\(38\\), \\(78\\), \\(158\\), \\(318\\), \\(638\\), \\(1278\\), \\(2558\\).\n" +
    "Step 2 — Read off the units digits: \\(3, 8, 8, 8, 8, 8, 8, 8, 8, 8\\).\n" +
    "Step 3 — Understand why it locks: if a term ends in 8, doubling gives a number ending in 6, and adding 2 gives one ending in 8. So 8 is a fixed point of the units-digit rule.\n" +
    "Step 4 — The first term ends in 3, and \\(2(3) + 2 = 8\\) enters the fixed point at the second term.\n" +
    "Step 5 — Terms 2 through 10 all end in 8: that is \\(9\\) terms.",
  fast: "Work only with units digits, never the full numbers. Starting at 3, the map \\(d \\mapsto (2d + 2) \\bmod 10\\) sends \\(3 \\to 8\\) and then \\(8 \\to 8\\) forever.\n" +
    "Once you see 8 is a fixed point, the count is simply \"all terms except the first\" — nine of the ten.",
  traps: "(C) 8 is the off-by-one from counting terms 3 through 10, or from thinking the pattern only begins once it is confirmed stable.\n" +
    "(B) 7 and (A) 6 come from stopping the list early or from listing terms 1 through 8.\n" +
    "(E) 4 comes from expecting a cycle of length 4 in the units digits, which is the usual behaviour for pure doubling — the \"add 2\" is what collapses it to a fixed point.\n" +
    "Generating three or four terms is enough to spot the fixed point; generating all ten invites arithmetic slips in the larger numbers.",
  take: "For units-digit questions, iterate the rule on the units digit alone. Watch for fixed points, where the digit stops changing entirely."
},

"quant-live-4#8": {
  steps: "Step 1 — For even \\(y\\), write \\(m = y/2\\). Then \\(G(y) = 2 \\cdot 4 \\cdot 6 \\cdots y = (2 \\cdot 1)(2 \\cdot 2) \\cdots (2 \\cdot m) = 2^m \\cdot m!\\).\n" +
    "Step 2 — \\(4^{11} = 2^{22}\\), so we need the power of 2 in \\(G(y)\\) to be at least 22.\n" +
    "Step 3 — That power is \\(m\\) (from the \\(2^m\\)) plus the power of 2 inside \\(m!\\), which is \\(\\lfloor m/2 \\rfloor + \\lfloor m/4 \\rfloor + \\lfloor m/8 \\rfloor + \\dots\\).\n" +
    "Step 4 — Try \\(y = 22\\), so \\(m = 11\\): \\(11 + (5 + 2 + 1) = 11 + 8 = 19\\) — short of 22.\n" +
    "Step 5 — Try \\(y = 24\\), so \\(m = 12\\): \\(12 + (6 + 3 + 1) = 12 + 10 = 22\\) — exactly enough ✓.\n" +
    "Step 6 — The smallest \\(y\\) is 24.",
  fast: "The identity \\(G(y) = 2^{y/2} \\cdot (y/2)!\\) converts the whole problem into a familiar factorial exponent count. From there it is one Legendre sum per candidate, and the choices are few enough to test upward from the smallest.\n" +
    "Testing 22 first and finding 19 tells you 24 is the next even candidate — and it lands on 22 exactly, which is the signature of a well-constructed question.",
  traps: "(A) 22 is the near-miss the question is built around: it produces \\(2^{19}\\), just three short. Testing only one candidate and accepting it is the failure mode.\n" +
    "(C) 28, (D) 32 and (E) 44 all work but are not the smallest — the question asks for the minimum, so testing must proceed upward from the bottom.\n" +
    "The other frequent error is forgetting the \\(2^m\\) factor entirely and counting only the powers of 2 inside \\(m!\\), which badly undercounts and pushes the answer toward the larger choices.",
  take: "The product of the even integers up to \\(y\\) is \\(2^{y/2}(y/2)!\\). Count prime powers with Legendre's floor sum, and test candidates from the smallest when asked for a minimum."
},

"quant-live-4#9": {
  steps: "Step 1 — Let \\(x\\) terms equal 7 and \\(y\\) terms equal 77, so \\(7x + 77y = 350\\).\n" +
    "Step 2 — Divide through by 7: \\(x + 11y = 50\\).\n" +
    "Step 3 — The number of terms is \\(n = x + y\\). Substitute \\(x = 50 - 11y\\): \\(n = 50 - 11y + y = 50 - 10y\\).\n" +
    "Step 4 — With \\(y\\) a non-negative integer and \\(x \\ge 0\\), \\(y\\) can be \\(0, 1, 2, 3\\) or \\(4\\).\n" +
    "Step 5 — The possible values of \\(n\\) are \\(50, 40, 30, 20, 10\\) — all multiples of 10.\n" +
    "Step 6 — Only \\(40\\) appears among the choices.",
  fast: "Replacing eleven 7s with a single 77 keeps the sum the same and reduces the count by 10, so \\(n\\) drops in steps of 10 from its maximum of 50. Every attainable \\(n\\) is therefore a multiple of 10, and only one choice is.\n" +
    "That swap argument is quicker than the algebra and explains the structure.",
  traps: "(A) 38, (B) 39, (D) 41 and (E) 42 are all clustered around 40 to punish a near-miss rather than a wrong method — but none is a multiple of 10, so none is reachable.\n" +
    "The most common wrong route is dividing 350 by 7 to get 50 and stopping, then adjusting by a small amount for the 77s. The adjustment is not small: each 77 replaces eleven 7s.\n" +
    "Note also that \\(y = 5\\) would need \\(x = -5\\), which is impossible — the range of \\(y\\) is bounded.",
  take: "Reduce a two-value sum equation by its common factor, then express the count in terms of one variable. Look for the step size the substitution creates."
},

"quant-live-4#10": {
  steps: "Step 1 — Clear the fractions: multiplying \\(\\left|\\tfrac{x}{2}\\right| + \\left|\\tfrac{y}{2}\\right| = 5\\) by 2 gives \\(|x| + |y| = 10\\).\n" +
    "Step 2 — In the first quadrant this is the line \\(x + y = 10\\); the absolute values reflect it into all four quadrants.\n" +
    "Step 3 — The result is a square standing on its corner, with vertices at \\((10, 0)\\), \\((0, 10)\\), \\((-10, 0)\\) and \\((0, -10)\\).\n" +
    "Step 4 — Both diagonals run the full \\(20\\) units.\n" +
    "Step 5 — Area of a rhombus is \\(\\tfrac12 d_1 d_2 = \\tfrac12 (20)(20) = 200\\).",
  fast: "Recognise \\(|x| + |y| = k\\) as a tilted square with diagonals \\(2k\\), giving area \\(2k^2\\). Here \\(k = 10\\), so the area is \\(200\\) — one substitution.\n" +
    "If you prefer to derive it: the first-quadrant piece is a right triangle with legs 10, area 50, and there are four congruent copies.",
  traps: "(E) 400 treats the figure as a square of side 20 — but 20 is the diagonal, not the side. The actual side is \\(10\\sqrt2\\), and \\((10\\sqrt2)^2 = 200\\).\n" +
    "(C) 100 is \\(k^2\\), the answer for a square with the diagonal mistaken for something else, or four triangles of area 25.\n" +
    "(B) 50 is the area of the single first-quadrant triangle, with the other three quadrants forgotten.\n" +
    "(A) 20 comes from not clearing the fractions and working with \\(|x| + |y| = 5\\)-scale numbers.\n" +
    "The first move — multiplying through by 2 — is where the factor-of-four errors are avoided.",
  take: "\\(|x| + |y| = k\\) is a square rotated \\(45^\\circ\\) with diagonals \\(2k\\) and area \\(2k^2\\). Clear fractions before identifying the shape."
},

"quant-live-4#11": {
  steps: "Step 1 — First confirm which vertices are adjacent. \\(\\vec{AB} = (-4 - (-5),\\ 4 - 1) = (1, 3)\\) and \\(\\vec{BC} = (8 - (-4),\\ 0 - 4) = (12, -4)\\).\n" +
    "Step 2 — Their dot product is \\(1(12) + 3(-4) = 12 - 12 = 0\\), so the angle at \\(B\\) is a right angle ✓ — consistent with the labelling \\(ABCD\\).\n" +
    "Step 3 — In rectangle \\(ABCD\\), the side \\(AD\\) is parallel and equal to \\(BC\\).\n" +
    "Step 4 — So \\(D = A + \\vec{BC} = (-5 + 12,\\ 1 - 4) = (7, -3)\\).\n" +
    "Step 5 — Check: \\(\\vec{CD} = (7 - 8,\\ -3 - 0) = (-1, -3) = -\\vec{AB}\\) ✓, so \\(CD\\) is parallel and equal to \\(AB\\) — the figure closes as a rectangle.",
  fast: "Use the parallelogram property: in \\(ABCD\\), \\(A + C = B + D\\), so \\(D = A + C - B = (-5 + 8 - (-4),\\ 1 + 0 - 4) = (7, -3)\\). One line of arithmetic, and it works for any parallelogram, rectangle included.\n" +
    "The dot-product check at \\(B\\) is worth ten seconds to confirm the vertices really are in adjacency order.",
  traps: "(A) \\((-4.5, 2.5)\\) is the midpoint of \\(AB\\) — a point inside the figure, not a vertex.\n" +
    "(E) \\((10, 1)\\) comes from adding \\(\\vec{AB}\\) to \\(C\\) instead of \\(\\vec{BC}\\) to \\(A\\), which walks the wrong way around the rectangle.\n" +
    "(C) \\((6, -2)\\) is a near-miss from an arithmetic slip in the vector addition.\n" +
    "(B) \\((-4, 5)\\) merely shifts \\(B\\) up one unit — no construction from the three given vertices lands there.\n" +
    "The safeguard is the closure check in Step 5: a wrong \\(D\\) will fail to make \\(CD\\) parallel to \\(AB\\).",
  take: "In parallelogram \\(ABCD\\) (a rectangle included), \\(A + C = B + D\\). Confirm adjacency with a dot product, and verify the fourth vertex closes the figure."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-4#12": {
  steps: "Step 1 — The square runs from \\(x = -2\\) to \\(x = 6\\) and \\(y = -2\\) to \\(y = 6\\): side 8, area 64. The pivot point \\((0, 4)\\) lies inside it.\n" +
    "Step 2 — Every admissible line passes through that pivot, so the shaded area is a function of the slope alone. Find its extremes.\n" +
    "Step 3 — The upper end. As the slope becomes steeply negative, the line plunges from high on the left to low on the right, and the shaded region approaches the whole part of the square with \\(x > 0\\) — a \\(6 \\times 8\\) rectangle of area 48. That limit is approached but never reached by any finite slope, so \\(A < 48\\).\n" +
    "Step 4 — The lower end. For positive slopes the shaded region is a triangle in the top-left corner. With slope \\(m\\) between \\(\\tfrac13\\) and 3 its legs are \\(2 + 2m\\) and \\(2 + \\tfrac2m\\), giving area \\(\\dfrac{2(1+m)^2}{m}\\).\n" +
    "Step 5 — That expression is minimised at \\(m = 1\\), where it equals \\(8\\) — the triangle with vertices \\((-2, 2)\\), \\((-2, 6)\\), \\((2, 6)\\). Since \\(m = 1\\) is a legitimate slope, this minimum is attained.\n" +
    "Step 6 — The area varies continuously with the slope, so it takes every value from 8 up to (but not including) 48: \\(8 \\le A < 48\\).",
  fast: "Test the extremes rather than the middle. Two limiting behaviours bracket the answer: near-vertical with a negative slope gives almost the whole right half (48), and the balanced slope \\(m = 1\\) cuts the smallest corner triangle (8).\n" +
    "Then decide the endpoints: 48 needs an actual vertical line, which is excluded, so it is open; 8 comes from a real slope, so it is closed. That endpoint reasoning is what separates the choices.",
  traps: "(C) \\(24 \\le A < 48\\) and (E) \\(24 < A \\le 32\\) both take 24 or 32 as the floor — those are the areas at slope \\(-\\tfrac12\\) and slope \\(-1\\), and they are genuine values, just not the smallest.\n" +
    "(A) \\(8 \\le A \\le 16\\) treats 16 (the horizontal-line case) as the ceiling, missing that negative slopes push the area far higher.\n" +
    "(D) \\(8 < A \\le 32\\) makes the lower endpoint open, but slope 1 is an allowed line and delivers exactly 8.\n" +
    "The two endpoint decisions — open at 48, closed at 8 — are the whole question; the choices differ mainly in those brackets.",
  take: "For a pivot-line problem, find the extreme configurations and then decide each endpoint separately: attained values give closed brackets, limits of excluded cases give open ones."
},

"quant-live-4#13": {
  steps: "Step 1 — Rearrange: \\(4|y| = 55 - 5x = 5(11 - x)\\).\n" +
    "Step 2 — The left side is a non-negative multiple of 4, so \\(5(11-x)\\) must be divisible by 4. Since 5 and 4 share no factor, \\(11 - x\\) itself must be a multiple of 4.\n" +
    "Step 3 — Also \\(4|y| \\ge 0\\) forces \\(x \\le 11\\), and the stem gives \\(x > 0\\).\n" +
    "Step 4 — So \\(11 - x \\in \\{0, 4, 8\\}\\), giving \\(x = 11, 7, 3\\).\n" +
    "Step 5 — \\(x = 3\\): \\(4|y| = 40\\), so \\(|y| = 10\\) and \\(y = \\pm 10\\) — two pairs.\n" +
    "Step 6 — \\(x = 7\\): \\(4|y| = 20\\), so \\(|y| = 5\\) and \\(y = \\pm 5\\) — two pairs.\n" +
    "Step 7 — \\(x = 11\\): \\(4|y| = 0\\), so \\(y = 0\\) — one pair only, since \\(+0\\) and \\(-0\\) are the same integer.\n" +
    "Step 8 — Total: \\(2 + 2 + 1 = 5\\) pairs.",
  fast: "Two constraints do all the filtering: \\(11 - x\\) must be a multiple of 4, and \\(x\\) must be positive and at most 11. That leaves three values of \\(x\\) to check.\n" +
    "Then count *pairs*, not \\(x\\) values — each non-zero \\(|y|\\) supplies two, and \\(y = 0\\) supplies one. That asymmetry at zero is the crux.",
  traps: "(A) 3 counts the values of \\(x\\) and forgets that each non-zero \\(|y|\\) yields two ordered pairs.\n" +
    "(B) 6 counts \\(y = 0\\) twice, treating \\(+0\\) and \\(-0\\) as distinct — the single most common error on absolute-value counting questions.\n" +
    "(D) 4 drops one of the three \\(x\\) values, usually \\(x = 11\\) because it makes \\(y\\) vanish.\n" +
    "(E) Infinitely many ignores that the equation pins \\(x\\) to a short list.\n" +
    "The habit worth keeping: after solving \\(|y| = k\\), ask whether \\(k\\) is zero before doubling.",
  take: "\\(|y| = k\\) gives two solutions when \\(k > 0\\) and one when \\(k = 0\\). Use coprimality to turn a divisibility condition into a short list of candidates."
},

"quant-live-4#14": {
  steps: "Step 1 — The question \\((6 \\wedge 2) \\wedge 4 = 6 \\wedge (2 \\wedge 4)\\) is asking whether the operation is associative.\n" +
    "Step 2 — Addition and multiplication are associative. Subtraction and division are not: \\((6-2)-4 = 0\\) but \\(6-(2-4) = 8\\); \\((6 \\div 2) \\div 4 = 0.75\\) but \\(6 \\div (2 \\div 4) = 12\\).\n" +
    "Step 3 — So the answer is yes exactly when the operation is \\(+\\) or \\(\\times\\).\n" +
    "Step 4 — Statement (1): \\(3 \\wedge 2 > 3\\). Addition gives 5 ✓, multiplication gives 6 ✓, subtraction gives 1 ✗, division gives 1.5 ✗. So the operation is \\(+\\) or \\(\\times\\) — a definite yes, [[sufficient]].\n" +
    "Step 5 — Statement (2): \\(3 \\wedge 1 = 3\\). Addition gives 4 ✗, subtraction gives 2 ✗, multiplication gives 3 ✓, division gives 3 ✓. So the operation is \\(\\times\\) or \\(\\div\\) — the first gives yes, the second gives no, [[not sufficient]].",
  fast: "Reframe the question as \"is the operation associative?\" and the two associative operations are \\(+\\) and \\(\\times\\). Then each statement is just a filter: run all four operations through it and see whether the survivors agree on the answer.\n" +
    "Statement (1) leaves exactly the associative pair; statement (2) leaves one from each camp.",
  traps: "(D) treats statement (2) as decisive because it pins the operation down to two candidates — but sufficiency requires the surviving candidates to give the *same* answer, not merely to be few.\n" +
    "(B) inverts the two statements.\n" +
    "(C) misses that (1) alone already settles it.\n" +
    "(E) dismisses both.\n" +
    "The general technique for \"the symbol is one of these operations\" questions: tabulate all four against each statement, then check whether the survivors agree.",
  take: "Reduce the question to a property (here associativity), then use each statement to filter the candidate operations. Sufficiency means all survivors give the same answer."
},

"quant-live-4#15": {
  steps: "Step 1 — Statement I, commutativity: \\(a * b = a + b - ab\\) and \\(b * a = b + a - ba\\). Both addition and multiplication are commutative, so the two expressions are identical. [[True]].\n" +
    "Step 2 — Statement II, identity: \\(a * 0 = a + 0 - a(0) = a\\). [[True]] for every integer \\(a\\).\n" +
    "Step 3 — Statement III, associativity: expand the left side. \\((a * b) * c = (a + b - ab) + c - (a + b - ab)c\\).\n" +
    "Step 4 — That is \\(a + b - ab + c - ac - bc + abc = a + b + c - ab - ac - bc + abc\\).\n" +
    "Step 5 — Now the right side: \\(a * (b * c) = a + (b + c - bc) - a(b + c - bc) = a + b + c - bc - ab - ac + abc\\).\n" +
    "Step 6 — The two expansions are the same expression, so [[III is true]].\n" +
    "Step 7 — All three statements hold.",
  fast: "Expand one side of III and notice the result is fully symmetric in \\(a\\), \\(b\\) and \\(c\\): \\(a+b+c-ab-ac-bc+abc\\). A symmetric expression cannot change when the grouping changes, so associativity follows without expanding the second side.\n" +
    "The elegant reason: \\(a * b = 1 - (1-a)(1-b)\\), so \\(1 - (a*b*c) = (1-a)(1-b)(1-c)\\) — ordinary multiplication in disguise, which is both commutative and associative.",
  traps: "(D) I and III only rejects the identity property, perhaps expecting the identity element to be 1 rather than 0 — but the \\(-ab\\) term vanishes at \\(b = 0\\), leaving \\(a\\).\n" +
    "(A) and (B) accept only the properties that can be checked at a glance and reject III without expanding it. Associativity looks unlikely for an operation with a product term, which is exactly why it is worth the thirty seconds of algebra.\n" +
    "(C) III only rejects the two easy ones.\n" +
    "Test with numbers if the algebra feels risky: \\(a=2, b=3, c=4\\) gives \\((2*3)*4 = (-1)*4 = -1+4+4 = 7\\) and \\(2*(3*4) = 2*(-5) = 2-5+10 = 7\\) ✓.",
  take: "For custom operations, expand fully and look for symmetry. \\(a + b - ab = 1-(1-a)(1-b)\\) is multiplication in disguise, hence commutative and associative."
},

"quant-live-4#16": {
  steps: "Step 1 — Set the operation to zero: \\(a + b - ab = 0\\).\n" +
    "Step 2 — Solve for \\(a\\): group the \\(a\\) terms as \\(a(1 - b) = -b\\).\n" +
    "Step 3 — So \\(a = \\dfrac{-b}{1 - b} = \\dfrac{b}{b - 1}\\), which is defined for every \\(b\\) except \\(b = 1\\).\n" +
    "Step 4 — Check \\(b = 1\\) directly: the equation becomes \\(a + 1 - a = 0\\), i.e. \\(1 = 0\\), which is false for every \\(a\\). So \\(b = 1\\) is impossible.\n" +
    "Step 5 — Confirm the others are reachable: \\(b = 2 \\Rightarrow a = 2\\); \\(b = 0 \\Rightarrow a = 0\\); \\(b = -1 \\Rightarrow a = \\tfrac12\\); \\(b = 3 \\Rightarrow a = \\tfrac32\\).",
  fast: "Isolating \\(a\\) exposes the answer immediately: the coefficient of \\(a\\) is \\(1 - b\\), and the only way to lose a solution is for that coefficient to vanish while the constant term does not. That happens exactly at \\(b = 1\\).\n" +
    "Substituting \\(b = 1\\) makes the \\(a\\) terms cancel and leaves \\(1 = 0\\) — a contradiction you can see in one line.",
  traps: "(C) 0 looks suspicious because zero often breaks formulas, but here \\(a = 0, b = 0\\) satisfies the equation perfectly.\n" +
    "(D) \\(-1\\) attracts the same instinct; it gives \\(a = \\tfrac12\\), and the stem says \"for any numbers\", so non-integers are allowed.\n" +
    "(A) 2 and (E) 3 both produce clean values of \\(a\\).\n" +
    "The reason \\(b = 1\\) is special: it is the value that makes the operation collapse, since \\(a * 1 = a + 1 - a = 1\\) for every \\(a\\) — the operation always returns 1, never 0.",
  take: "When solving for one variable, watch for values that make its coefficient zero. If the constant term survives, that value admits no solution at all."
},

"quant-live-4#17": {
  steps: "Step 1 — The perpendicular bisector meets \\(RP\\) at right angles and passes through its midpoint. Use both facts.\n" +
    "Step 2 — The given line \\(y = 4 - 2x\\) has slope \\(-2\\), so \\(RP\\) has slope \\(\\tfrac12\\) (the negative reciprocal).\n" +
    "Step 3 — Through \\(R(4, 1)\\) with slope \\(\\tfrac12\\): \\(y - 1 = \\tfrac12(x - 4)\\), i.e. \\(y = \\tfrac12 x - 1\\).\n" +
    "Step 4 — Find where the two lines meet: \\(\\tfrac12 x - 1 = 4 - 2x\\), so \\(\\tfrac52 x = 5\\) and \\(x = 2\\), giving \\(y = 0\\). The midpoint is \\(M(2, 0)\\).\n" +
    "Step 5 — \\(M\\) is the midpoint of \\(RP\\), so \\(P = 2M - R = (4 - 4,\\ 0 - 1) = (0, -1)\\).\n" +
    "Step 6 — Check: the midpoint of \\((4,1)\\) and \\((0,-1)\\) is \\((2, 0)\\) ✓, which lies on \\(y = 4 - 2x\\) since \\(4 - 4 = 0\\) ✓.",
  fast: "Three moves, each mechanical: negative reciprocal for the slope, solve two equations for the midpoint, then reflect using \\(P = 2M - R\\).\n" +
    "The reflection formula is worth memorising — it saves you from re-deriving the midpoint relation every time, and it is the step people most often get backwards.",
  traps: "(C) \\((0, 1)\\) has the right \\(x\\) but reflects only the \\(x\\)-coordinate, leaving \\(y\\) unchanged.\n" +
    "(D) \\((-4, 1)\\) reflects across the \\(y\\)-axis rather than across the given line.\n" +
    "(B) \\((-2, 2)\\) and (E) \\((2, 7)\\) fail the midpoint test outright: their midpoints with \\(R\\) are \\((1, 1.5)\\) and \\((3, 4)\\), and neither lies on \\(y = 4 - 2x\\).\n" +
    "The quickest check on any candidate: its midpoint with \\(R\\) must lie on \\(y = 4 - 2x\\). Only one choice passes.",
  take: "Reflecting a point across a line: drop a perpendicular, find the intersection \\(M\\), then use \\(P = 2M - R\\). Verify by checking the midpoint lies on the line."
},

"quant-live-4#18": {
  steps: "Step 1 — The question \\((5 * 6) * 2 = 5 * (6 * 2)\\) asks whether the operation is associative — true for \\(+\\) and \\(\\times\\), false for \\(-\\) and \\(\\div\\).\n" +
    "Step 2 — Statement (1): \\(5 * 6 = 6 * 5\\), i.e. the operation is commutative on this pair. Addition gives \\(11 = 11\\) ✓; multiplication gives \\(30 = 30\\) ✓; subtraction gives \\(-1\\) versus \\(1\\) ✗; division gives \\(\\tfrac56\\) versus \\(\\tfrac65\\) ✗.\n" +
    "Step 3 — So the operation is \\(+\\) or \\(\\times\\), and both are associative — a definite yes, [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(2 * 0 = 2\\). Addition gives 2 ✓; subtraction gives 2 ✓; multiplication gives 0 ✗; division by zero is undefined ✗.\n" +
    "Step 5 — So the operation is \\(+\\) or \\(-\\). Addition is associative (yes), subtraction is not: \\((5-6)-2 = -3\\) while \\(5-(6-2) = 1\\) (no) — [[not sufficient]].",
  fast: "Both statements are filters; the only question is whether the survivors agree. Commutativity and associativity happen to select the same two operations among these four, which is why (1) works.\n" +
    "Statement (2) is engineered to leave one operation from each camp — addition and subtraction — so it cannot decide.",
  traps: "(D) is the trap for anyone who stops once a statement narrows the field to two operations. Two candidates are fine if they agree, fatal if they disagree.\n" +
    "(B) picks the statement that eliminates multiplication and division, which feels like more progress but leaves the crucial ambiguity intact.\n" +
    "(C) misses that (1) alone is decisive, and (E) goes further still: even together the statements narrow the field to addition alone, which certainly answers the question.\n" +
    "Note the subtlety in statement (2): division is excluded not because \\(2 \\div 0 \\ne 2\\) but because it is undefined — a legitimate elimination.",
  take: "Among \\(+, -, \\times, \\div\\), commutativity and associativity both hold for exactly \\(+\\) and \\(\\times\\). A statement is sufficient only if every surviving operation gives the same answer."
},

"quant-live-4#19": {
  steps: "Step 1 — Write \\(d\\) with its digits: tenths, hundredths, thousandths, and so on. The question asks about the hundredths digit.\n" +
    "Step 2 — Statement (1): the tenths digit of \\(10d\\) is 7. Multiplying by 10 slides every digit one place to the left, so what was the hundredths digit of \\(d\\) becomes the tenths digit of \\(10d\\).\n" +
    "Step 3 — Therefore the hundredths digit of \\(d\\) is 7, which is greater than 5 — a definite yes, [[sufficient]].\n" +
    "Step 4 — Statement (2): the thousandths digit of \\(d/10\\) is 7. Dividing by 10 slides every digit one place to the right, so the hundredths digit of \\(d\\) becomes the thousandths digit of \\(d/10\\).\n" +
    "Step 5 — Again the hundredths digit of \\(d\\) is 7 — [[sufficient]].\n" +
    "Step 6 — Each statement alone answers the question.",
  fast: "Both statements say exactly the same thing in different disguises. Track the direction of the slide: multiplying by 10 moves a digit one place *left* in the place-value names (hundredths becomes tenths), dividing by 10 moves it one place *right* (hundredths becomes thousandths).\n" +
    "Write \\(d = 0.a\\,b\\,c\\) and the identification is immediate: \\(10d = a.b\\,c\\) and \\(d/10 = 0.0\\,a\\,b\\,c\\), so \\(b\\) is the digit named in both cases.",
  traps: "(A) and (B) each accept one statement and reject the other, usually by getting the direction of one slide backwards — the two operations move digits in opposite directions, so it is easy to check one correctly and mirror the other.\n" +
    "(C) treats the two statements as partial information that must be combined, when each is already complete.\n" +
    "(E) rejects both, typically from the worry that \\(d\\) might have digits beyond the thousandths place. It may — but those digits never affect which digit sits in the hundredths position.\n" +
    "The safe method is to write a concrete example, say \\(d = 0.373\\), and confirm both statements hold.",
  take: "Multiplying by 10 shifts each digit one place-value to the left, dividing by 10 one place to the right. Write \\(d = 0.abc\\) and read the digits off directly."
},

"quant-live-4#20": {
  steps: "Step 1 — Write \\(r\\) with digit places: \\(\\dots\\) thousands, hundreds, tens, units. The question asks for the tens digit.\n" +
    "Step 2 — Statement (1): the tens digit of \\(r/10\\) is 3. Dividing by 10 shifts every digit one place to the right, so the tens digit of \\(r/10\\) is the *hundreds* digit of \\(r\\).\n" +
    "Step 3 — That tells us \\(r\\)'s hundreds digit is 3 and says nothing about its tens digit — \\(r = 1{,}340\\) and \\(r = 1{,}350\\) both qualify with different tens digits — [[not sufficient]].\n" +
    "Step 4 — Statement (2): the hundreds digit of \\(10r\\) is 6. Multiplying by 10 shifts every digit one place to the left, so the hundreds digit of \\(10r\\) is the *tens* digit of \\(r\\).\n" +
    "Step 5 — Therefore \\(r\\)'s tens digit is 6 — [[sufficient]].",
  fast: "Same slide rule as the previous question, applied to whole numbers: \\(\\times 10\\) moves a digit one place up in significance, \\(\\div 10\\) one place down.\n" +
    "Take \\(r = \\overline{\\dots h\\,t\\,u}\\). Then \\(10r = \\overline{\\dots h\\,t\\,u\\,0}\\), whose hundreds digit is \\(t\\) — the digit asked for. And \\(r/10 = \\overline{\\dots h\\,t}.u\\), whose tens digit is \\(h\\) — the wrong one.",
  traps: "(D) accepts both, which requires getting one of the two shifts backwards.\n" +
    "(A) accepts only the statement that describes the hundreds digit — an easy slip, because \"tens digit of \\(r/10\\)\" contains the words \"tens digit\" and looks like it is talking about the right place.\n" +
    "(C) tries to combine them; but (1) constrains a different digit entirely and adds nothing.\n" +
    "(E) rejects (2), which is decisive.\n" +
    "Writing out a concrete number such as \\(r = 1{,}364\\) and computing \\(10r = 13{,}640\\) and \\(r/10 = 136.4\\) settles the directions in seconds.",
  take: "Multiplying by 10 promotes each digit one place; dividing by 10 demotes it. Name the place a statement refers to in terms of the *original* number before judging sufficiency."
},

"quant-live-4#21": {
  steps: "Step 1 — Statement (1): rounding \\(x\\) to the nearest thousandth gives 0.455, so \\(x\\) lies in \\([0.4545,\\ 0.4555)\\).\n" +
    "Step 2 — Round that range to the nearest hundredth. Values from \\(0.4545\\) up to \\(0.45499\\dots\\) round to \\(0.45\\); values from \\(0.455\\) up round to \\(0.46\\).\n" +
    "Step 3 — Two different results are possible, so (1) alone is [[not sufficient]].\n" +
    "Step 4 — Statement (2): the thousandths digit of \\(x\\) is 5. That says nothing about the tenths or hundredths digits — \\(x\\) could be \\(0.115\\) or \\(0.995\\) — [[not sufficient]].\n" +
    "Step 5 — Together: within \\([0.4545,\\ 0.4555)\\), the thousandths digit is 4 for \\(x < 0.455\\) and 5 for \\(x \\ge 0.455\\). Statement (2) therefore restricts \\(x\\) to \\([0.455,\\ 0.4555)\\).\n" +
    "Step 6 — Every value in that interval rounds to \\(0.46\\) at the hundredth — [[sufficient]].",
  fast: "Convert each statement into an interval and see whether the interval sits entirely on one side of the rounding boundary, which here is \\(0.455\\).\n" +
    "Statement (1) gives an interval straddling that boundary; statement (2) trims away the part below it. The combination lands wholly above, so the rounding is determined.",
  traps: "(A) is the most common wrong answer: 0.455 \"looks like\" it rounds to 0.46, and it does — but the statement says \\(x\\) *rounds to* 0.455, not that \\(x\\) equals it, and the pre-image of that rounding straddles the next boundary.\n" +
    "(B) treats a single digit as informative about the whole number.\n" +
    "(D) accepts both individually.\n" +
    "(E) misses that the two intervals intersect in a region entirely above 0.455.\n" +
    "The habit that resolves all rounding questions: write the exact interval a rounding statement implies, endpoints included or excluded as appropriate.",
  take: "Translate \"rounds to \\(v\\)\" into the half-open interval it implies, then check whether that interval lies wholly on one side of the next rounding boundary."
}

});
