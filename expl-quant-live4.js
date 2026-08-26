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
  traps: "(E) II and IV over-excludes: quadrant II has \\(x < 0\\), where \\(2x + 1\\) can be very negative, so plenty of points with positive \\(y\\) satisfy both inequalities.\n" +
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
    "(C) 252 comes from summing an arithmetic rather than geometric progression.\n" +
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
    "(B) \\((-4, 5)\\) is \\(B\\) shifted by one unit, the answer if you treat \\(AB\\) as a side of length 1.\n" +
    "The safeguard is the closure check in Step 5: a wrong \\(D\\) will fail to make \\(CD\\) parallel to \\(AB\\).",
  take: "In parallelogram \\(ABCD\\) (a rectangle included), \\(A + C = B + D\\). Confirm adjacency with a dot product, and verify the fourth vertex closes the figure."
}

});
