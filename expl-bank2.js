/* GMAT Prep — explanation layer for sets-bank2.js. Keys are "setId#n". */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {
"di-ds-coord-recent#1": {
  steps: "The curve meets the \\(x\\)-axis at \\(x = p\\) and \\(x = q\\).\n(1) \\(pq = -8\\): \\((2, -4)\\) says yes, \\((1, -8)\\) says no. Not sufficient.\n(2) \\(p + q = -2\\): \\((2, -4)\\) yes, \\((0, -2)\\) no. Not sufficient.\nTogether \\(p\\) and \\(q\\) are the roots of \\(t^{2} + 2t - 8 = 0\\), i.e. \\(2\\) and \\(-4\\): one of them is 2. Sufficient.\nAnswer: C.",
  take: "A product and a sum together pin the pair as the roots of one quadratic."
},
"di-ds-coord-recent#2": {
  steps: "(1) Quadrant IV means \\(p > 0\\) and \\(q < 0\\), so \\(p - q > 0\\): the point is in quadrant I. Sufficient.\n(2) Quadrant III means \\(q < 0\\) and \\(-p < 0\\), i.e. \\(p > 0\\): the same information. Sufficient.\nAnswer: D.",
  take: "A quadrant is just a pair of signs; translate each statement into signs of p and q."
},
"di-ds-coord-recent#3": {
  steps: "The point is on the line exactly when \\(s = 3r + 2\\).\n(1) \\(s = 3r + 2\\) or \\(s = 4r + 9\\). Not sufficient.\n(2) \\(s = 4r - 6\\) or \\(s = 3r + 2\\). Not sufficient.\nTogether: the lines \\(s = 4r + 9\\) and \\(s = 4r - 6\\) are parallel and never meet, so both statements can hold only if \\(s = 3r + 2\\). Sufficient.\nAnswer: C.",
  take: "A zero product is an OR; two ORs combine to a definite answer only if the other branches are incompatible."
},
"di-ds-coord-recent#4": {
  steps: "(1) \\(K\\) passes through \\((1, 1)\\) and \\((1, -1)\\): the vertical line \\(x = 1\\). \\(M\\) is any line through \\((1, -1)\\). Not sufficient.\n(2) Again fixes \\(K\\) as \\(x = 1\\) and says nothing about \\(M\\). Not sufficient.\nTogether \\(K\\) is known and \\(M\\) is still free: it could be horizontal (perpendicular) or diagonal (not).\nAnswer: E.",
  take: "Perpendicularity needs both slopes; two facts about the same line are one fact."
},
"di-ds-coord-recent#5": {
  steps: "(1) \\(2b = mb + b\\) gives \\(b(m - 1) = 0\\): \\(m = 1\\) or \\(b = 0\\) with any \\(m\\). Not sufficient.\n(2) \\(2 = 2m + b\\), one equation in two unknowns. Not sufficient.\nTogether: if \\(b = 0\\) then \\(2 = 2m\\), \\(m = 1\\); otherwise \\(m = 1\\) directly. Either way \\(m = 1\\). Sufficient.\nAnswer: C.",
  take: "Do not divide by a variable that might be zero; keep the b = 0 branch and let the other statement close it."
},
"di-ds-coord-recent#6": {
  steps: "(1) Lines of either slope pass through the first quadrant. Not sufficient.\n(2) Without the point's position relative to the axis, nothing follows. Not sufficient.\nTogether: \\((p, q)\\) is above the \\(x\\)-axis. On a line with positive slope, points above the axis sit to the right of the \\(x\\)-intercept, so we would need \\(p > k\\); but \\(k > p\\). The slope is therefore not positive. Sufficient (the answer is No).\nAnswer: C.",
  take: "A definite No is sufficient; use where the point sits relative to the intercept."
},
"di-ds-coord-recent#7": {
  steps: "(1) \\(ad = bc\\) means \\(\\dfrac{b}{a} = \\dfrac{d}{c}\\): the two points are on the same line through the origin, so \\(L\\) passes through \\((0, 0)\\) and its \\(x\\)-intercept is 0. Sufficient.\n(2) The midpoint of \\((m, n)\\) and \\((-m, -n)\\) is the origin, which lies on \\(L\\): intercept 0. Sufficient.\nAnswer: D.",
  take: "ad = bc for two points is the origin-line condition; symmetric points put the midpoint on the line."
},
"di-ds-coord-recent#8": {
  steps: "The right angle at \\(A\\) puts \\(A\\) on the circle with diameter \\(OB\\): \\(x(x - 15) + y^{2} = 0\\).\n(1) Integer solutions with \\(y > 0\\): \\((3, 6)\\) and \\((12, 6)\\). Both have height 6, so the area is \\(\\tfrac12 \\cdot 15 \\cdot 6 = 45\\) either way. Sufficient.\n(2) Any non-isosceles right triangle on this hypotenuse qualifies; heights vary. Not sufficient.\nAnswer: A.",
  take: "Two candidate points can still give one answer if they share the quantity asked for."
},
"di-ds-coord-recent#9": {
  steps: "(1) The centre is in quadrant I, but a huge radius spreads the circle almost equally over all four quadrants. Not sufficient.\n(2) \\(x > r\\) keeps the whole circle to the right of the \\(y\\)-axis, so it lies in quadrants I and IV only; one of them holds at least half. Sufficient.\nAnswer: B.",
  take: "Bound the circle by an axis and the pigeonhole principle finishes the argument."
},
"di-ds-coord-recent#10": {
  steps: "(1) The circle is to the right of the \\(y\\)-axis, but its centre can be high (slope > 1) or low. Not sufficient.\n(2) The centre could be on the \\(x\\)-axis (slope 0) or well above it with a large radius. Not sufficient.\nTogether: \\(a \\ge r\\) (right of the \\(y\\)-axis) and \\(|b| < r\\) (two \\(x\\)-intercepts), so \\(b < r \\le a\\) and the slope \\(b/a < 1\\). Sufficient.\nAnswer: C.",
  take: "Turn each statement into an inequality on the centre and radius, then compare."
},
"di-ds-coord-recent#11": {
  steps: "(1) The lines may cross (distance 0) or be parallel. Not sufficient.\n(2) Slopes could be 2 and 2 (parallel), −2 and −2 (parallel) or 2 and −2 (crossing). Not sufficient.\nTogether: slopes 2 and −2 with intercepts 4 apart cross, distance 0; slopes both 2 with intercepts 4 apart never meet, positive distance. Two answers.\nAnswer: E.",
  take: "Absolute values of slopes hide the sign, and the sign decides whether lines meet."
},
"di-ds-coord-recent#12": {
  steps: "(1) \\(x\\) can be any positive number larger than \\(y\\). Not sufficient.\n(2) \\(x^{2} + y^{2} > 25\\) allows tiny \\(x\\) with large \\(y\\). Not sufficient.\nTogether: \\(x = 6, y = 1\\) gives yes; \\(x = 4, y = 3.5\\) satisfies \\(x > y\\) and \\(16 + 12.25 > 25\\) and gives no.\nAnswer: E.",
  take: "Look for a counterexample at the boundary value; non-integers are allowed unless stated."
},
"di-ds-coord-recent#13": {
  steps: "(1) \\((7, 7)\\) has \\(98 \\le 100\\), inside; \\((14, 0)\\) has \\(196\\), outside. Not sufficient.\n(2) \\((1, 0)\\) is inside, \\((101, 100)\\) outside. Not sufficient.\nTogether: \\((8, 6)\\) satisfies both and is on the boundary (inside); \\((14, 0)\\) satisfies both and is outside.\nAnswer: E.",
  take: "A line through a disc has points inside and outside it; an inequality on a and b rarely fixes which."
},
"di-ds-coord-recent#14": {
  steps: "(1) \\(k\\) has a positive \\(x\\)-intercept and a negative \\(y\\)-intercept, so it runs through quadrants I, III and IV; \\(m\\) (negative \\(x\\)-intercept, positive \\(y\\)-intercept) runs through I, II and III. They can meet only in I or III, where \\(ab > 0\\). Sufficient.\n(2) A positive slope with a positive \\(x\\)-intercept forces a negative \\(y\\)-intercept, and a positive slope with a positive \\(y\\)-intercept forces a negative \\(x\\)-intercept: the same picture as (1). Sufficient.\nAnswer: D.",
  take: "Intercept signs tell you which three quadrants a line crosses; two lines meet only where their sets overlap."
},
"di-ds-coord-recent#15": {
  steps: "(1) \\(k\\) passes through \\((0, 0)\\) or \\((b, 0)\\), one point only. Not sufficient.\n(2) \\(k\\) passes through \\((0, -c)\\), one point only. Not sufficient.\nTogether: through \\((0, -c)\\) and \\((b, 0)\\) the slope is positive, but through \\((0, -c)\\) and \\((0, 0)\\) the line is vertical with undefined slope. Two outcomes.\nAnswer: E.",
  take: "Watch for the vertical-line case whenever two known points can share an x-coordinate."
},
"quant-coord-recent#1": {
  fast: "Area = \\(\\tfrac{1}{2} \\times 4 \\times |b| = 12\\) gives |b| = 6; a rising line through (4, 0) meets the y-axis below zero, so b = −6.",
  traps: "(B) −4 and (E) −12 use the wrong leg; (A) −2 halves 4 instead of \\(\\tfrac{12}{2}\\).",
  take: "Intercept triangles: area = \\(\\tfrac{1}{2}\\) × |x-intercept| × |y-intercept|, and the slope's sign fixes the signs."
},
"quant-coord-recent#2": {
  fast: "Slopes 5 and \\(-\\tfrac{1}{5}\\) are negative reciprocals, so w ⊥ l; k ∥ l, so k ⊥ w: 90°.",
  traps: "(E) forgets that \"does not intersect\" pins k's direction completely.",
  take: "Parallel lines share a slope; perpendicular slopes multiply to −1."
},
"quant-coord-recent#3": {
  fast: "Negative slope, positive intercept: quadrants II, I, IV; never III.",
  traps: "(E) is impossible: a non-vertical, non-horizontal line always crosses three quadrants.",
  take: "Slope sign and intercept sign together decide which three quadrants a line visits."
},
"quant-coord-recent#4": {
  fast: "Midpoint on the bisector is (2, 0); reflect R(4, 1) through it: (0, −1).",
  traps: "(C) (0, 1) forgets to reflect the y-coordinate; (D) reflects across a vertical line instead.",
  take: "A perpendicular bisector gives you both the slope of the segment and its midpoint."
},
"quant-coord-recent#5": {
  fast: "Slope −1 means x and y change by opposite amounts; only (2, 5) → (−3, 2) fails that.",
  traps: "Reading \"does NOT\" as \"does\" picks (A), (B), (C) or (E), each a pair of points with slope 1 that do sit on the line.",
  take: "Check each pair's slope against the negative reciprocal; EXCEPT questions want the odd one out."
},
"quant-coord-recent#6": {
  fast: "Slope AB simplifies to −2 for every k, so slope BC must be −2: (6 − 4k)/(−5) = −2 gives k = −1.",
  traps: "(C) 1 makes A and B coincide, which is not collinearity in the intended sense.",
  take: "Equal slopes between consecutive points is the test for three collinear points."
},
"quant-coord-recent#7": {
  fast: "Opposite vertices of a parallelogram share a midpoint, so D = A + C − B = (−5 + 8 + 4, 1 + 0 − 4) = (7, −3).",
  traps: "(A) is the midpoint of AB, not a vertex.",
  take: "In any parallelogram the fourth vertex is the sum of the two neighbours minus the opposite one."
},
"quant-coord-recent#8": {
  fast: "Shoelace: \\(|7(8 - 10) + 0(10 - 0) + 20(0 - 8)|/2 = \\tfrac{174}{2} = 87\\).",
  traps: "(E) 100 is half the rectangle, which assumes the triangle fills half of it.",
  take: "With no horizontal or vertical side, use the bounding box or the shoelace formula."
},
"quant-coord-recent#9": {
  fast: "Take a = −1, b = 2 so (a, b) is in quadrant II; then (−b, −a) = (−2, 1) lands in the same quadrant.",
  traps: "(B) (−a, −b) is always the opposite quadrant; (D) always flips the y sign.",
  take: "\"Could\" questions: one working example is a proof."
},
"quant-coord-recent#10": {
  fast: "Cube roots are one-to-one, so x + y = x − y, which forces y = 0 with x free.",
  traps: "(C) (0, 2) sets x = 0, which gives 8 versus −8, not equal.",
  take: "An odd power is injective: equal cubes mean equal bases, no ± cases."
},
"quant-coord-recent#11": {
  fast: "Each axis is a chord at 90°; the two segments outside total about 18%, so about 82% is inside.",
  traps: "(B) 50% guesses from the centre lying on the diagonal.",
  take: "A chord at distance \\(r/\\sqrt{2}\\) from the centre spans a right angle; segment = quarter circle − right triangle."
},
"di-ds-436-1#1": {
  steps: "Cost \\(= 14s + 9r\\).\n(1) \\(s = 2k, r = 3k\\): cost \\(= 55k\\), any \\(k\\). Not sufficient.\n(2) \\(s + r = 50\\) with the split unknown. Not sufficient.\nTogether \\(5k = 50\\), \\(k = 10\\): 20 shovels, 30 rakes, $550. Sufficient.\nAnswer: C.",
  take: "Ratio plus total is the standard C pattern; check that neither alone pins the count."
},
"di-ds-436-1#2": {
  steps: "The group asked about is \\(\\tfrac25\\) of the \\(\\tfrac23\\) who dislike lima beans, i.e. \\(\\tfrac{4}{15}\\) of all students.\n(1) Total 120: \\(32\\). Sufficient.\n(2) 40 like lima beans, so \\(\\tfrac13\\) of the total is 40 and the total is 120: \\(32\\). Sufficient.\nAnswer: D.",
  take: "When the stem fixes every fraction, any statement that gives the total (directly or through a part) is sufficient."
},
"di-ds-436-1#3": {
  steps: "(1) If \\(n\\) is odd, \\(n\\) has 3 distinct primes; if \\(n\\) is even, it has 4. Not sufficient.\n(2) \\(n^{2}\\) has exactly the primes of \\(n\\), so \\(n\\) has 4. Sufficient.\nAnswer: B.",
  take: "Powers keep the same set of prime factors; a new factor may or may not be new."
},
"di-ds-436-1#4": {
  steps: "(1) An odd sum needs one even and one odd integer, so the product is even. Sufficient.\n(2) States the same directly. Sufficient.\nAnswer: D.",
  take: "Odd + even is the only way to get an odd sum; the product then contains the even factor."
},
"di-ds-436-1#5": {
  steps: "(1) \\(k \\in \\{3, 5, 6\\}\\). Not sufficient.\n(2) \\(k \\in \\{3, 4, 6\\}\\). Not sufficient.\nTogether \\(k \\in \\{3, 6\\}\\), still two values.\nAnswer: E.",
  take: "Intersect the candidate lists; two survivors means E."
},
"di-ds-436-1#6": {
  steps: "(1) \\(y\\) odd, but \\(z + 1\\) could be even. Not sufficient.\n(2) \\(z + 1\\) odd, but \\(y\\) could be even. Not sufficient.\nTogether both factors are odd, so the product is odd. Sufficient.\nAnswer: C.",
  take: "Odd product needs every factor odd; each statement controls one factor."
},
"di-ds-436-1#7": {
  steps: "The units digit of \\(3^{k}\\) cycles 3, 9, 7, 1 with period 4, so \\(3^{4n + 2 + m}\\) has the same units digit as \\(3^{2 + m}\\).\n(1) \\(m\\) unknown. Not sufficient.\n(2) \\(3^{3}\\) ends in 7 whatever \\(n\\) is. Sufficient.\nAnswer: B.",
  take: "Multiples of the cycle length are invisible to the units digit."
},
"di-ds-436-1#8": {
  steps: "(1) \\(x < 5.5\\), and every number below 5.5 is certainly below 16. Definite yes. Sufficient.\n(2) \\(x\\) could be 9 (yes) or 25 (no), so the statement leaves both answers open. Not sufficient.\nAnswer: A.",
  take: "Compute the number hidden in the statement; a bound below 16 settles it."
},
"di-ds-436-1#9": {
  steps: "(1) 160 students are 20 or younger, split between on and off campus unknown. Not sufficient.\n(2) 60 young students live off campus, but the young total is unknown. Not sufficient.\nTogether \\(160 - 60 = 100\\) young students live on campus. Sufficient.\nAnswer: C.",
  take: "Double-set matrix: a row total plus one cell gives the other cell."
},
"di-ds-436-1#10": {
  steps: "(1) \\(p = 8k + 5 = 4(2k + 1) + 1\\): remainder 1. Sufficient.\n(2) An odd sum of two squares must be \\(\\text{odd}^{2} + \\text{even}^{2}\\); odd squares are 1 mod 4 and even squares 0 mod 4, so \\(p \\equiv 1 \\pmod 4\\). Sufficient.\nAnswer: D.",
  take: "Squares are 0 or 1 mod 4; that single fact settles many remainder questions."
},
"di-ds-436-1#11": {
  steps: "(1) The brakes group sits inside the automatic group, but no sizes are given. Not sufficient.\n(2) 23 cars have at least one feature, split unknown. Not sufficient.\nTogether: 23 cars have automatic transmission (all with brakes are automatic, and 2 have neither), but how many of them have brakes is unknown.\nAnswer: E.",
  take: "A containment relation plus a \"neither\" count still leaves the overlap free."
},
"di-ds-436-1#12": {
  steps: "(1) \\(x > -7\\): \\(x = -6\\) says no, \\(x = 0\\) says yes. Not sufficient.\n(2) \\(-4 < x < -3\\), so \\(x > -5\\). Sufficient.\nAnswer: B.",
  take: "A bound that lies entirely on one side of the target answers the question."
},
"di-ds-436-1#13": {
  steps: "(1) \\(y > -1\\): \\(y = 0\\) yes, \\(y = 5\\) no. Not sufficient.\n(2) \\(y < 2\\): \\(y = 0\\) yes, \\(y = -3\\) no. Not sufficient.\nTogether \\(-1 < y < 2\\): \\(y = 0\\) yes, \\(y = 1.5\\) no.\nAnswer: E.",
  take: "Combine the intervals and see whether the result is inside the target interval."
},
"di-ds-436-1#14": {
  steps: "(1) \\(-4 < r < -1\\): the whole interval sits to the right of \\(-6\\), so \\(r > -6\\) for every allowed \\(r\\). Sufficient.\n(2) \\(-3 < r < 1\\): again entirely to the right of \\(-6\\). Sufficient.\nAnswer: D.",
  take: "Each statement alone gives a definite yes: D."
},
"di-ds-436-1#15": {
  steps: "(1) Nothing about direction. Not sufficient.\n(2) Nothing about where the lines are. Not sufficient.\nTogether: both pass through \\((5, 1)\\); from the \\(y\\)-axis to \\(x = 5\\), line \\(n\\) starts higher and ends at the same height, so it falls more (or rises less): slope of \\(n\\) is smaller. Sufficient.\nAnswer: C.",
  take: "Slope = (1 − intercept)/5 for each line; a bigger intercept gives a smaller slope."
},
"di-ds-436-1#16": {
  steps: "(1) The other five countries share 34 with distinct counts: 4, 6, 7, 8, 9 makes A = 9 (no); 1, 2, 3, 4, 24 makes A = 24 (yes). Not sufficient.\n(2) A could be 9 or 11. Not sufficient.\nTogether: 4, 6, 7, 8, 9, 41 gives 9; 2, 6, 7, 8, 11, 41 gives 11. Still both answers.\nAnswer: E.",
  take: "Build two explicit distributions, one for each answer, before choosing E."
},
"di-ds-436-1#17": {
  steps: "Let \\(z = \\dots a.bcd\\dots\\). Then \\(100z = \\dots abc.d\\) and \\(1000z = \\dots abcd\\).\n(1) The tenths digit of \\(100z\\) is the thousandths digit \\(d\\) of \\(z\\). Not sufficient.\n(2) The units digit of \\(1000z\\) is also \\(d\\). Not sufficient.\nTogether they repeat the same fact about the thousandths digit.\nAnswer: E.",
  take: "Track exactly which digit each multiplication moves into which place."
},
"di-ds-436-1#18": {
  steps: "(1) \\(1 < 2 + 3\\) with \\(z = 3\\) (not the median) or \\(z = 2\\) (the median). Not sufficient.\n(2) \\(y = z\\): whatever \\(x\\) is, the middle value is \\(z\\). Sufficient.\nAnswer: B.",
  take: "Equal pair in a triple: the repeated value is always the median."
},
"di-ds-436-1#19": {
  steps: "(1) Both = 43, but the afternoon total is unknown. Not sufficient.\n(2) Everyone not in the afternoon session was in the morning only: \\(128 - 87 = 41\\). Sufficient.\nAnswer: B.",
  take: "With \"neither\" ruled out, \"only A\" is simply total minus B."
},
"di-ds-436-1#20": {
  steps: "(1) Books = 144, so videos + games = 216, split unknown. Not sufficient.\n(2) Books \\(= \\tfrac23\\)(videos + games) with the total 360 gives books = 144 again. Not sufficient.\nTogether nothing new.\nAnswer: E.",
  take: "Two statements that are algebraically the same cannot combine to anything more."
},
"di-ds-436-1#21": {
  steps: "(1) Says nothing about the 150 red sweaters' composition. Not sufficient.\n(2) \\(150 - 100 = 50\\) red wool sweaters. Sufficient.\nAnswer: B.",
  take: "Read which cell of the matrix each statement fills; only (2) touches the red row."
},
"di-ds-436-1#22": {
  steps: "(1) \\(0.04F = 16\\), so \\(F = 400\\); \\(J \\ge 100\\) could be 200 (yes) or 500 (no). Not sufficient.\n(2) \\(0.04F = 0.10J\\), so \\(F = 2.5J > J\\). Sufficient.\nAnswer: B.",
  take: "Expressing one overlap two ways links the two totals."
},
"di-ds-436-1#23": {
  steps: "(1) \\(3h \\times 1.06 = 4.77\\), so \\(h = 1.50\\). Sufficient.\n(2) \\(4.24h < 6.50\\) only bounds \\(h\\). Not sufficient.\nAnswer: A.",
  take: "An exact total is sufficient; an upper bound is not."
},
"di-ds-436-1#24": {
  steps: "(1) A fraction between 0 and 1 has infinitely many candidates, so \\(n\\) is not fixed. Not sufficient.\n(2) The equation solves directly: \\(n = 167 - 83 = 84\\). Sufficient.\nAnswer: B.",
  take: "A statement contradicting another is not your problem; judge each on its own."
},
"di-ds-436-1#25": {
  steps: "(1) \\(n(n - 1) = 72\\) with \\(n\\) a positive integer: \\(9 \\times 8 = 72\\) and the product grows with \\(n\\), so \\(n = 9\\) only. Sufficient.\n(2) \\(2n - 1 = 17\\) gives \\(n = 9\\). Sufficient.\nAnswer: D.",
  take: "A quadratic with one positive root is as decisive as a linear equation."
},
"di-ds-436-1#26": {
  steps: "(1) Meal + tax + tip = 10.84 with two unknown rates. Not sufficient.\n(2) The tax rate alone gives no amount. Not sufficient.\nTogether \\(1.06P + G = 10.84\\) still has two unknowns.\nAnswer: E.",
  take: "Count the unknowns: the tip is a third quantity nobody pins down."
},
"di-ds-436-1#27": {
  steps: "(1) Expenses only. Not sufficient.\n(2) Revenues only. Not sufficient.\nTogether \\(P_Y - P_X = 6 - \\tfrac16 E_Y\\), positive if \\(E_Y < 36\\) million and negative if \\(E_Y > 36\\) million.\nAnswer: E.",
  take: "A fixed revenue gap against a proportional expense gap: the winner depends on the size of the numbers."
},
"di-ds-436-1#28": {
  steps: "(1) \\(3x - 5 = 16\\) doubles to \\(6x - 10 = 32\\). Sufficient.\n(2) \\(12x = 84\\), \\(x = 7\\), \\(6x - 10 = 32\\). Sufficient.\nAnswer: D.",
  take: "One linear equation in one unknown is always sufficient."
},
"di-ds-436-1#29": {
  steps: "(1) \\(w > -2\\): could be 0 or 5. Not sufficient.\n(2) \\(w > 1\\) or \\(w < -1\\). Not sufficient.\nTogether \\(w > 1\\) or \\(-2 < w < -1\\): \\(w = -1.5\\) still fits and says no.\nAnswer: E.",
  take: "Square inequalities have two branches; check whether the other statement removes the second branch entirely."
},
"di-ds-436-1#30": {
  steps: "(1) \\(s + c = 3\\). Not sufficient.\n(2) \\(3s + 2c = 8\\). Not sufficient.\nTogether \\(s = 2, c = 1\\): \\(2s + 3c = 7\\). Sufficient.\nAnswer: C.",
  take: "Check whether the target combination is a multiple of a statement before defaulting to C."
},
"di-ds-436-1#31": {
  steps: "(1) \\((t + 1)(r - 5)\\) versus \\(tr\\): the comparison depends on \\(t\\) and \\(r\\). Not sufficient.\n(2) Marsha drove 450; the other 1,050 miles are split unknown. Not sufficient.\nTogether: Pablo 10 h at 55 (550) and Al 11 h at 50 (550) tie; other combinations give either a lead.\nAnswer: E.",
  take: "\"Longer but slower\" does not decide distance; the product can go either way."
},
"di-ds-436-1#32": {
  steps: "(1) \\(y^{2} \\cdot 1 = 1\\), so \\(y = \\pm 1\\). Not sufficient.\n(2) \\(y \\cdot 0 = 1 - y\\), so \\(y = 1\\). Sufficient.\nAnswer: B.",
  take: "A square gives two roots; a linear relation gives one."
},
"di-ds-436-1#33": {
  steps: "(1) Every volume becomes 70% of itself, so the standard deviation becomes \\(0.7 \\times 10 = 7\\). Sufficient.\n(2) The mean says nothing about spread. Not sufficient.\nAnswer: A.",
  take: "Scaling a data set scales its standard deviation; the mean is irrelevant to spread."
},
"di-ds-436-1#34": {
  steps: "(1) \\(p + n \\equiv 1 \\pmod 5\\) leaves \\(p - n\\) free. Not sufficient.\n(2) Symmetric. Not sufficient.\nTogether: \\(p = 4, n = 2\\) gives 12 (remainder 12); \\(p = 9, n = 2\\) gives 77 (remainder 2).\nAnswer: E.",
  take: "Knowing each factor modulo a different number does not give the product modulo 15."
},
"di-ds-436-1#35": {
  steps: "(1) \\(x - 1 > 2\\) or \\(x - 1 < -2\\): \\(x > 3\\) or \\(x < -1\\); positivity leaves \\(x > 3\\). Sufficient.\n(2) \\(x > 5\\) or \\(x < -1\\); positivity leaves \\(x > 5 > 3\\). Sufficient.\nAnswer: D.",
  take: "A sign restriction in the stem can delete one branch of a square inequality."
},
"di-ds-436-1#36": {
  steps: "(1) 120 children had at least one symptom. Not sufficient.\n(2) 20 had fever. Not sufficient.\nTogether: everyone with a symptom but no fever had inflammation only: \\(120 - 20 = 100\\). Sufficient.\nAnswer: C.",
  take: "\"At least one\" minus \"has B\" equals \"A only\"."
},
"di-ds-436-1#37": {
  steps: "(1) \\(s\\) itself is a factor of \\(s\\), so \\(s\\) divides \\(r\\). Sufficient.\n(2) \\(s = 4, r = 2\\): same primes, but \\(\\tfrac24\\) is not an integer; \\(s = 2, r = 4\\) works. Not sufficient.\nAnswer: A.",
  take: "Divisibility needs the primes with their multiplicities, not just the set of primes."
},
"di-ds-436-1#38": {
  steps: "The question is: is \\(g - r > h - s\\)?\n(1) A smaller range with unknown tops. Not sufficient.\n(2) A higher top with unknown ranges. Not sufficient.\nTogether \\(g > h\\) and \\(-r > -s\\) add to \\(g - r > h - s\\). Sufficient.\nAnswer: C.",
  take: "Rewrite the question as an inequality; inequalities in the same direction can be added."
},
"di-ds-436-1#39": {
  steps: "(1) Withdrawals without the balance or deposits. Not sufficient.\n(2) A starting balance without activity. Not sufficient.\nTogether: $1,000 withdrawn from $500 could be covered by a $2,000 deposit made first (no fee) or not (fee).\nAnswer: E.",
  take: "Look for the unmentioned quantity (here deposits) before concluding C."
},
"di-ds-436-1#40": {
  steps: "(1) \\(\\tfrac1x + \\tfrac1y = \\tfrac{3}{2x}\\) gives \\(y = 2x\\), a ratio only. Not sufficient.\n(2) \\(y = 2x\\) directly. Not sufficient.\nTogether still only \\(y = 2x\\); the difference \\(x\\) is unknown.\nAnswer: E.",
  take: "A difference in hours needs an absolute time; two ratio statements are one ratio."
},
"di-ds-436-1#41": {
  steps: "(1) Nothing about John. Not sufficient.\n(2) \\(J = 2M - 400\\): \\(J > M\\) iff \\(M > 400\\); \\(M = 300\\) says no, \\(M = 600\\) yes. Not sufficient.\nTogether \\(M > 500 > 400\\), so \\(J > M\\). Sufficient.\nAnswer: C.",
  take: "Turn the relation into a threshold on one variable, then see if the other statement clears it."
},
"di-ds-436-1#42": {
  steps: "(1) A percentage of an unknown group. Not sufficient.\n(2) 22 of the T supporters, but the R supporters' number is unknown. Not sufficient.\nTogether: \\(0.58 \\times 0.45N + 22\\) still depends on \\(N\\).\nAnswer: E.",
  take: "Percentages need a base; without the group size the count is open."
},
"di-ds-436-1#43": {
  steps: "(1) Sum only. Not sufficient.\n(2) \\(ab = -6\\), product only. Not sufficient.\nTogether \\(a, b\\) are the roots of \\(t^{2} + t - 6 = 0\\): \\(2\\) and \\(-3\\), so the intercepts are \\(-2\\) and \\(3\\) (as a set). Sufficient.\nAnswer: C.",
  take: "Sum and product determine the pair; the two intercepts are asked as a set, so order does not matter."
},
"di-ds-436-1#44": {
  steps: "(1) Employed 29, students unknown. Not sufficient.\n(2) Students 24. Not sufficient.\nTogether the overlap is anywhere from \\(29 + 24 - 42 = 11\\) to 24.\nAnswer: E.",
  take: "Overlap = A + B − (A or B); without the union, C fails."
},
"di-ds-436-1#45": {
  steps: "(1) Speed without distance. Not sufficient.\n(2) \\(\\tfrac{d}{v} - \\tfrac{d}{v + 8} = 1\\), one equation in two unknowns. Not sufficient.\nTogether \\(\\tfrac{d}{72} - \\tfrac{d}{80} = 1\\), \\(d = 720\\), time 10 hours. Sufficient.\nAnswer: C.",
  take: "\"Faster by 8 km/h, quicker by 1 h\" links distance and speed; the actual speed closes it."
},
"di-ds-436-1#46": {
  steps: "(1) \\(m = n = -1\\) says no; \\(m = -3, n = 1\\) says yes. Not sufficient.\n(2) Opposite signs, so \\(m \\ne n\\). Sufficient.\nAnswer: B.",
  take: "mn < 0 forces different signs, hence different numbers."
},
"di-ds-436-1#47": {
  steps: "(1) 90 pets, split unknown. Not sufficient.\n(2) 32 double-treat pets, total unknown. Not sufficient.\nTogether \\(90 + 32 = 122\\) treats. Sufficient.\nAnswer: C.",
  take: "Each pet gets 1, plus 1 extra for each double; two counts are needed."
},
"di-ds-436-1#48": {
  steps: "(1) One line. Not sufficient.\n(2) One line. Not sufficient.\nTogether adding gives \\(5(x + y) = 25\\), so \\(x + y = 5\\). Sufficient.\nAnswer: C.",
  take: "Symmetric equations often add or subtract straight to the combination asked for."
},
"di-ds-436-1#49": {
  steps: "(1) \\(C = 3M\\), so \\(L = 2M\\); no amounts. Not sufficient.\n(2) \\(P > L\\) with unknown sizes. Not sufficient.\nTogether \\(P > L = \\tfrac23 C\\) and \\(P + C = 500{,}000\\): \\(P > \\tfrac23(500{,}000 - P)\\) gives \\(P > 200{,}000\\). Sufficient.\nAnswer: C.",
  take: "Chain the inequalities into the single unknown asked about."
},
"di-ds-436-1#50": {
  steps: "(1) A fraction without a value. Not sufficient.\n(2) Q's value without Q's fraction. Not sufficient.\nTogether nothing links P's share to Q's value.\nAnswer: E.",
  take: "A fraction of one thing and the value of another do not combine."
},
"di-ds-436-1#51": {
  steps: "(1) 29, 29.5, 30.5, 31 has two above 30; 10, 20, 30, 60 has one. Not sufficient.\n(2) The other two sum to 101: 50 and 51 (two above), or 100 and 1 (one above). Not sufficient.\nTogether: two numbers summing to 101, each at most 60, so each at least 41: both exceed 30. Sufficient.\nAnswer: C.",
  take: "A cap on the maximum forces a floor on the partner when the sum is fixed."
},
"di-ds-436-1#52": {
  steps: "\\(xy = x \\cdot wx = wx^{2}\\).\n(1) \\(wx^{2} = 16\\), so \\(xy = 16\\). Sufficient.\n(2) \\(y = 4\\) leaves \\(x\\) free. Not sufficient.\nAnswer: A.",
  take: "Substitute the stem into the target before judging the statements."
},
"di-ds-436-1#53": {
  steps: "\\(x - y + 1 > x + y - 1\\) simplifies to \\(y < 1\\).\n(1) \\(x\\) is irrelevant. Not sufficient.\n(2) \\(y < 0 < 1\\). Sufficient.\nAnswer: B.",
  take: "Simplify the question first; variables that cancel are decoys."
},
"di-ds-436-1#54": {
  steps: "(1) Half of an unknown amount. Not sufficient.\n(2) Last time 6 cups (16 servings); next time unknown. Not sufficient.\nTogether next time is 3 cups. Sufficient.\nAnswer: C.",
  take: "Proportional recipes: a known past amount plus the scaling factor."
},
"di-ds-436-1#55": {
  steps: "(1) \\(\\dfrac{15s + 25w}{s + w} = 21\\) gives \\(4w = 6s\\), so \\(w = 1.5s > s\\). Sufficient.\n(2) \\(15s + 25w = 420\\), i.e. \\(3s + 5w = 84\\): \\((s, w) = (23, 3)\\) says no while \\((3, 15)\\) says yes. Not sufficient.\nAnswer: A.",
  take: "A weighted mean fixes the ratio of the weights; a total fixes only one equation with many integer solutions."
},
"di-ds-436-1#56": {
  steps: "Each pair (one full, one half) costs \\(1.5p\\).\n(1) \\(p = 21.50\\), no total. Not sufficient.\n(2) Total 129, no price. Not sufficient.\nTogether: a pair costs 32.25 and \\(129 / 32.25 = 4\\) pairs, so 8 shirts. Sufficient.\nAnswer: C.",
  take: "Count in the natural unit (here, a pair of shirts); then a price and a total together give the count."
},
"di-ds-436-1#57": {
  steps: "(1) \\(x = 6k + 2\\), and \\(6k\\) is a multiple of 3, so the remainder is 2. Sufficient.\n(2) \\(x = 15k + 2\\); same reasoning, remainder 2. Sufficient.\nAnswer: D.",
  take: "A remainder modulo a multiple of m determines the remainder modulo m."
},
"di-ds-436-1#58": {
  steps: "Target: \\(0.08b - 0.05a\\).\n(1) \\(b = a + 200\\) gives \\(0.03a + 16\\), which depends on \\(a\\). Not sufficient.\n(2) \\(0.05a + 0.08b = 120\\), one equation. Not sufficient.\nTogether: \\(0.05a + 0.08(a + 200) = 120\\), \\(0.13a = 104\\), \\(a = 800\\), \\(b = 1000\\); difference \\(80 - 40 = 40\\). Sufficient.\nAnswer: C.",
  take: "Two independent linear equations in two unknowns pin both deposits; check that neither statement alone fixes the target combination."
},
"di-ds-436-1#59": {
  steps: "(1) Only 1970 is given. Not sufficient.\n(2) With 1970 population \\(P\\): 1980 is \\(1.2P\\), 1990 is \\(1.3P\\); increase \\(= \\dfrac{1.3}{1.2} - 1 = 8\\tfrac13\\%\\). Sufficient.\nAnswer: B.",
  take: "Two percent changes measured from the same base give the ratio between the two later values."
},
"di-ds-436-1#60": {
  steps: "Pigs and cows total 40.\n(1) \\(c > 2p = 2(40 - c)\\) gives \\(c > 26\\tfrac23\\), so \\(c \\ge 27\\). Not sufficient.\n(2) \\(p > 12\\) gives \\(c < 28\\), so \\(c \\le 27\\). Not sufficient.\nTogether \\(c = 27\\). Sufficient.\nAnswer: C.",
  take: "Two strict inequalities on an integer can leave exactly one value; always compute the integer bounds."
},
"di-ds-436-1#61": {
  steps: "Cost \\(= 10 + (n - 1) = n + 9\\).\n(1) \\(n + 9 > 30\\) gives \\(n > 21\\): 22 says no, 30 says yes. Not sufficient.\n(2) \\(\\dfrac{n + 9}{n} = 1.36\\) gives \\(9 = 0.36n\\), \\(n = 25 > 24\\). Sufficient.\nAnswer: B.",
  take: "An average per unit is an equation, not an inequality; it pins n exactly."
},
"di-ds-436-1#62": {
  steps: "(1) Says nothing about employment. Not sufficient.\n(2) The employment rate of the group is a weighted average of 20% (men) and 10% (women), so it lies between 10% and 20% inclusive: at least 10%. Sufficient.\nAnswer: B.",
  take: "A mixture of two rates lies between them, whatever the weights."
},
"di-ds-436-1#63": {
  steps: "The average of \\(x\\) and 10 is the midpoint of \\(x\\) and 10.\n(1) Closer to 10 than to \\(x\\) means \\(z\\) lies on the 10 side of the midpoint: \\(z\\) exceeds the midpoint. Sufficient.\n(2) \\(x = 1\\) gives \\(z = 5 < 5.5\\); \\(x = 2\\) gives \\(z = 10 > 6\\). Not sufficient.\nAnswer: A.",
  take: "Translate \"closer to\" statements into midpoint language; the midpoint is the mean."
},
"di-ds-436-1#64": {
  steps: "(1) \\(K_4 = 11, K_5 = 18\\) give \\(K_6 = 29, K_7 = 47, K_8 = 76, K_9 = 123\\). Sufficient.\n(2) \\(K_6 = 29\\) with \\(K_5 = 18\\) gives the same chain: \\(K_9 = 123\\). Sufficient.\nAnswer: D.",
  take: "In a two-term recurrence, any two consecutive terms fix every term after them."
},
"di-ds-436-1#65": {
  steps: "(1) \\(y\\) is unknown. Not sufficient.\n(2) \\(x\\) is unknown. Not sufficient.\nTogether: \\(-1 + 2 > 0\\) but \\(-3 + 2 < 0\\). Not sufficient.\nAnswer: E.",
  take: "Signs of the parts do not determine the sign of a sum unless both signs agree."
},
"di-ds-436-1#66": {
  steps: "(1) The tens digit of \\(10r\\) is the units digit of \\(r\\). Not sufficient.\n(2) The hundreds digit of \\(10r\\) is the tens digit of \\(r\\): 6. Sufficient.\nAnswer: B.",
  take: "Track which digit moves where; a factor of 10 shifts places, it does not change digits."
},
"di-ds-436-1#67": {
  steps: "(1) \\(x + 3\\) divisible by 3 means \\(x\\) divisible by 3; parity unknown. Not sufficient.\n(2) \\(x + 3\\) odd means \\(x\\) even; divisibility by 3 unknown. Not sufficient.\nTogether \\(x\\) is a multiple of 2 and 3, hence of 6. Sufficient.\nAnswer: C.",
  take: "Split a composite divisor into coprime parts and see which statement supplies each part."
},
"di-ds-436-1#68": {
  steps: "(1) \\(2p + 3h = 12.5\\), one equation in two unknowns. Not sufficient.\n(2) \\(4p + 6h = 25\\) is the same equation. Not sufficient.\nTogether there is still one equation, and \\(p + h\\) is not a multiple of it. Not sufficient.\nAnswer: E.",
  take: "Two equations that are multiples of each other count as one."
},
"di-ds-436-1#69": {
  steps: "(1) The first nine average 7, so they are 3 through 11; the eleven are 3 through 13, average 8. Sufficient.\n(2) The last nine average 9, so they are 5 through 13; the eleven are 3 through 13, average 8. Sufficient.\nAnswer: D.",
  take: "For consecutive integers, the average of any sub-run fixes the whole run."
},
"di-ds-436-1#70": {
  steps: "(1) \\(x, y\\) are two of 691 to 695 in order; many sums. Not sufficient.\n(2) Only 693 and 694 lie strictly between 692 and 695, so \\(x = 693, y = 694\\) and \\(x + y = 1387\\). Sufficient.\nAnswer: B.",
  take: "Strict inequalities on integers can leave exactly as many slots as variables."
},
"di-ds-436-1#71": {
  steps: "(1) \\(y\\) could be very negative. Not sufficient.\n(2) Says nothing about \\(x\\). Not sufficient.\nTogether: \\(x = 1, y = 1\\) says yes; \\(x = 30, y = -20\\) satisfies both and says no. Not sufficient.\nAnswer: E.",
  take: "Inequalities in the same direction cannot be subtracted; test extreme values."
},
"di-ds-436-1#72": {
  steps: "(1) \\(8k = 16m\\) means \\(k = 2m\\): even, not necessarily a multiple of 4. Not sufficient.\n(2) \\(9k = 12m\\) means \\(3k = 4m\\); since 3 and 4 share no factor, \\(k\\) is a multiple of 4. Sufficient.\nAnswer: B.",
  take: "When a multiple of k is divisible by n, strip the shared factors before concluding anything about k."
},
"di-ds-436-1#73": {
  steps: "(1) 29 (sum 11) says yes, 83 (sum 11) says no. Not sufficient.\n(2) The tens digit is one of 2, 3, 5, 7, so \\(n \\le 77 < 80\\). Sufficient.\nAnswer: B.",
  take: "A constraint on each digit bounds the number; a constraint on the digit sum does not."
},
"di-ds-436-1#74": {
  steps: "(1) \\(\\dfrac{p + q}{2} = 0.9p\\) gives \\(q = 0.8p\\); no amount. Not sufficient.\n(2) \\(p + 5q = 10\\), one equation. Not sufficient.\nTogether \\(p + 4p = 10\\), \\(p = 2\\). Sufficient.\nAnswer: C.",
  take: "A percent relation supplies a ratio; a total supplies the scale."
},
"di-ds-436-1#75": {
  steps: "(1) Sum alone. Not sufficient.\n(2) Average alone. Not sufficient.\nTogether \\(n = 3124 / 4 = 781\\). Sufficient.\nAnswer: C.",
  take: "Sum, average and count: any two give the third."
},
"di-ds-436-1#76": {
  steps: "(1) \\(x = \\pm 1\\); negative forces \\(x = -1\\). Sufficient.\n(2) \\((x + 1)(x + 2) = 0\\): \\(x = -1\\) or \\(-2\\), both negative. Not sufficient.\nAnswer: A.",
  take: "A quadratic with two negative roots is not rescued by \"x is negative\"."
},
"di-ds-436-1#77": {
  steps: "(1) A square is never negative, so \\(v^{2} \\ge 0\\) and \\(u = v^{2} + 1 \\ge 1 > 0\\). Definite yes. Sufficient.\n(2) A fourth power is never negative either, so \\(u = w^{4} + 1 \\ge 1\\). Sufficient.\nAnswer: D.",
  take: "Even powers plus a positive constant are always positive."
},
"di-ds-436-1#78": {
  steps: "(1) \\(p + 1\\) is even and greater than 2, so it is not prime; \\(p\\) itself is the 100th prime. A definite value. Sufficient.\n(2) The number of primes below 3,912 is a fixed number, and \\(p\\) equals it. Sufficient.\nAnswer: D.",
  take: "You do not need to know the value, only that exactly one value fits."
},
"di-ds-436-1#79": {
  steps: "(1) The interval from \\(-2\\) to 3 crosses zero: \\(k = -1\\) says no and \\(k = 1\\) says yes. Not sufficient.\n(2) Every number between 1 and 2 is positive, so the answer is a definite yes. Sufficient.\nAnswer: B.",
  take: "Check whether the interval crosses zero."
},
"di-ds-436-1#80": {
  steps: "(1) The P group is 40% female; other groups unknown. Not sufficient.\n(2) The F-or-I group is 20% female. Not sufficient.\nTogether: the overall percent is a weighted average of 40% and 20%, and the weights are unknown. Not sufficient.\nAnswer: E.",
  take: "Combining percentages of subgroups needs their relative sizes."
},
"di-ds-436-1#81": {
  steps: "(1) The GCD is 1 or \\(m\\). Not sufficient.\n(2) \\(m = 2k, n = 7k\\), GCD \\(= k\\). Not sufficient.\n Together: \\(m\\) is an even prime, so \\(m = 2, n = 7\\), GCD 1. Sufficient.\nAnswer: C.",
  take: "Parametrise a ratio statement (m = 2k, n = 7k); the other statement then fixes k."
},
"di-ds-436-1#82": {
  steps: "(1) Retail is wholesale plus $2, but the wholesale price is never given, so retail could be anything. Not sufficient.\n(2) Retail \\(= 1.5 \\times 4 = 6\\) dollars. Sufficient.\nAnswer: B.",
  take: "A relation without a base amount cannot give a value."
},
"di-ds-436-1#83": {
  steps: "Let the payment be credited on day \\(d\\): days 1 to \\(d - 1\\) end at 600, days \\(d\\) to 30 end at 300.\n(1) \\(d = 21\\): \\(\\dfrac{20(600) + 10(300)}{30} = 500\\). Sufficient.\n(2) \\(600(d - 1) + 300(26 - d) = 25 \\times 540 = 13{,}500\\) gives \\(300d = 6{,}300\\), \\(d = 21\\); then the average is 500 as above. Sufficient.\nAnswer: D.",
  take: "Identify the single unknown in a long setup; any statement that pins it is sufficient."
},
"di-ds-436-1#84": {
  steps: "(1) 5 leaves 5, 30 leaves 0. Not sufficient.\n(2) Multiples of 12 are multiples of 6, remainder 0. Sufficient.\nAnswer: B.",
  take: "A multiple of a multiple of 6 has remainder 0 on division by 6."
},
"di-ds-436-1#85": {
  steps: "(1) Among four consecutive integers one is a multiple of 3, so the product is. Sufficient.\n(2) \\(r = 3\\) yes, \\(r = 4\\) no. Not sufficient.\nAnswer: A.",
  take: "The product of k consecutive integers is divisible by k!."
},
"di-ds-436-1#86": {
  steps: "(1) \\(n\\) is prime: 2 or 3. Not sufficient.\n(2) \\(n - 1\\) must be odd, so \\(n\\) is even; if \\(n \\ge 4\\) then 2 and \\(n\\) are both factors with even difference. So \\(n = 2\\). Sufficient.\nAnswer: B.",
  take: "Test the statement on the smallest candidates and on a general even number."
},
"di-ds-436-1#87": {
  steps: "(1) 29, 31 or 33. Not sufficient.\n(2) Any real number in the interval. Not sufficient.\nTogether: the only odd integer between 28 and 34 that exceeds 31 is 33. Sufficient.\nAnswer: C.",
  take: "Do not assume integers unless a statement says so."
},
"di-ds-436-1#88": {
  steps: "(1) \\(a - b < 0\\), so \\(\\dfrac{1}{a - b} < 0 < b - a\\). Yes. Sufficient.\n(2) \\(a - b = 2\\): is \\(\\tfrac12 < -2\\)? No. \\(a - b = -2\\): is \\(-\\tfrac12 < 2\\)? Yes. Not sufficient.\nAnswer: A.",
  take: "Compare signs first; a sign split often answers an inequality without algebra."
},
"di-ds-436-1#89": {
  steps: "(1) \\(x = y(3y + 7)\\), a multiple of \\(y\\). Sufficient.\n(2) \\(x(x - 1)\\) is a multiple of \\(y\\): \\(x = 4, y = 2\\) says yes; \\(x = 3, y = 2\\) (6 is a multiple of 2) says no. Not sufficient.\nAnswer: A.",
  take: "Factoring a statement can reveal the divisibility the question asks about."
},
"di-ds-436-1#90": {
  steps: "(1) \\(x = 0\\) gives \\(-1\\); \\(x = -2\\) gives \\(20 - 8 - 1 = 11\\). Not sufficient.\n(2) \\(x = 0\\) gives \\(-1\\). Sufficient.\nAnswer: B.",
  take: "Two candidate values are only a problem if they give different answers; here they do."
},
"di-ds-436-1#91": {
  steps: "(1) With \\(x > 0\\) the fraction moves toward 1 (up, since \\(m/n < 1\\)); with a small negative \\(x\\) it moves away (down). Not sufficient.\n(2) If \\(m < n\\) the fraction rises; if \\(m > n\\) it falls. Not sufficient.\nTogether: \\(m/n < 1\\) and \\(x > 0\\) push it up. Sufficient.\nAnswer: C.",
  take: "(m + x)/(n + x) lies between m/n and 1 when x is positive."
},
"di-ds-436-1#92": {
  steps: "(1) A line with negative slope goes up as \\(x\\) goes to the left, so it passes through quadrant II wherever it sits. Sufficient.\n(2) \\(y = mx - 6\\): with \\(m > 0\\) the line stays below the axis for \\(x < 0\\) (no); with \\(m < 0\\) it enters quadrant II (yes). Not sufficient.\nAnswer: A.",
  take: "Negative slope: quadrants II and IV always; positive slope: I and III always. The intercept decides the other two."
},
"di-ds-436-1#93": {
  steps: "(1) Smallest \\(s\\), largest \\(2s\\), middle \\(54 - 3s\\); any \\(s\\) between 10.8 and 13.5 works. Not sufficient.\n(2) Largest \\(= 54 - 30 = 24\\). Sufficient.\nAnswer: B.",
  take: "Ask what the question really needs: here, the sum of the other two."
},
"di-ds-436-1#94": {
  steps: "(1) All elements are odd; the count is unknown. Not sufficient.\n(2) A product of negative numbers is negative only for an odd count. Sufficient.\nAnswer: B.",
  take: "Sign of a product counts negative factors; parity of a product looks at even factors."
},
"di-ds-436-1#95": {
  steps: "(1) \\(b = 2g\\), nothing about red. Not sufficient.\n(2) \\(b = 3r\\), nothing about green. Not sufficient.\nTogether \\(2g = 3r\\), so \\(g : r = 3 : 2\\). Sufficient.\nAnswer: C.",
  take: "Two ratios sharing a common part combine into the ratio of the other two parts."
},
"di-ds-436-1#96": {
  steps: "(1) \\(y - x = y - 6\\): subtract \\(y\\) from both sides and \\(-x = -6\\), so \\(x = 6\\). The \\(y\\) was a distraction. Sufficient.\n(2) \\(x + 2y = 10\\) is one equation in two unknowns. Not sufficient.\nAnswer: A.",
  take: "A two-variable equation may collapse to one variable; simplify before judging."
},
"di-ds-436-1#97": {
  steps: "(1) Total unknown. Not sufficient.\n(2) Total \\(= 64 / 0.4 = 160\\), age split unknown. Not sufficient.\nTogether \\(160 - 43 = 117\\). Sufficient.\nAnswer: C.",
  take: "\"At least 35\" is the complement of \"under 35\"; you need the total."
},
"di-ds-436-1#98": {
  steps: "(1) A ratio only. Not sufficient.\n(2) 20% more is the same ratio \\(6 : 5\\). Not sufficient.\nTogether there is still no amount. Not sufficient.\nAnswer: E.",
  take: "A ratio restated as a percent adds no information."
},
"di-ds-436-1#99": {
  steps: "The second box holds 5 broken bulbs, so its unbroken count is its total minus 5.\n(1) First box: \\(30 + 2 = 32\\) bulbs, second box \\(23\\), unbroken \\(18\\). Sufficient.\n(2) \\(b_1 = b_2 + 9\\) and \\(b_1 + b_2 = 55\\) give \\(b_2 = 23\\), unbroken 18. Sufficient.\nAnswer: D.",
  take: "Reduce the question to a single unknown (the second box's total) before reading the statements."
},
"di-ds-436-1#100": {
  steps: "(1) A rate ratio, no amount. Not sufficient.\n(2) \\(\\dfrac{C}{3} - \\dfrac{C}{4} = 15\\), so \\(\\dfrac{C}{12} = 15\\) and \\(C = 180\\). Sufficient.\nAnswer: B.",
  take: "\"Would have saved $15 each\" is an equation in the total cost."
},
"di-ds-436-1#101": {
  steps: "\\(R = (1 + xy)^{2}\\).\n(1) \\((1 + xy)^{2} = 0\\) gives \\(xy = -1\\). Sufficient.\n(2) Nothing about \\(y\\). Not sufficient.\nAnswer: A.",
  take: "Recognise perfect-square trinomials; a square equal to zero has one root."
},
"di-ds-436-1#102": {
  steps: "(1) \\(z = 1\\), or \\(z = -1\\) with \\(n\\) even. Not sufficient.\n(2) If \\(n = 0\\), any positive \\(z\\) works. Not sufficient.\nTogether: \\(n \\ne 0\\) and \\(z > 0\\) leave only \\(z = 1\\). Sufficient.\nAnswer: C.",
  take: "\\(z^{n} = 1\\) has three sources: z = 1, z = −1 with even n, or n = 0."
},
"di-ds-436-1#103": {
  steps: "The expression is not a three-digit number: \\(x, y, z\\) can be any positive integers.\n(1) and (2) fix \\(y\\) and \\(z\\) but not \\(x\\).\nTogether: \\(x = 1\\) gives 163, remainder 2; \\(x = 2\\) gives 263, remainder 4. Not sufficient.\nAnswer: E.",
  take: "Do not read 100x + 10y + z as \"the number xyz\" unless the digits are restricted to 0 to 9."
},
"di-ds-436-1#104": {
  steps: "Fee \\(f\\), people \\(n\\).\n(1) \\((f - 0.75)(n + 100) = fn\\) gives \\(100f - 0.75n = 75\\). Not sufficient.\n(2) \\((f + 1.5)(n - 100) = fn\\) gives \\(1.5n - 100f = 150\\). Not sufficient.\nTogether, adding: \\(0.75n = 225\\), \\(n = 300\\). Sufficient.\nAnswer: C.",
  take: "\"Would have received the same amount\" equations lose the fn term and become linear."
},
"di-ds-436-1#105": {
  steps: "(1) Equal gaps make the set evenly spaced, so mean equals median. Sufficient.\n(2) \\(\\{1, 3, 5\\}\\) has range 4 and mean = median; \\(\\{1, 2, 5\\}\\) has range 4 and mean \\(\\ne\\) median. Not sufficient.\nAnswer: A.",
  take: "Range is compatible with any interior arrangement."
},
"di-ds-436-1#106": {
  steps: "The question is whether \\(0.2a + 0.1b + 0.1c > 0.15(a + b + c)\\), i.e. \\(a > b + c\\).\n(1) \\(a = 50, b = 20\\) and \\(c \\le 20\\), so \\(b + c \\le 40 < 50\\). Yes. Sufficient.\n(2) Only \\(c = 15\\). Not sufficient.\nAnswer: A.",
  take: "Simplify a percent comparison to a plain inequality before touching the statements."
},
"di-ds-436-1#107": {
  steps: "(1) \\(x < 0\\) forces \\(y > 0\\), so \\(x < y\\). Sufficient.\n(2) \\(y = 3, x = -6\\) says yes; \\(y = -3, x = 6\\) says no. Not sufficient.\nAnswer: A.",
  take: "With a negative product, the sign of one variable orders the pair."
},
"di-ds-436-1#108": {
  steps: "(1) Paying 20% of the bill means the contract discount is \\(100\\% - 20\\% = 80\\%\\). Sufficient.\n(2) \\(46 / 230 = 0.2\\), so 20% is paid and the discount is again 80%. Sufficient.\nAnswer: D.",
  take: "When the base amount is in the stem, an amount and a percent are interchangeable."
},
"di-ds-436-1#109": {
  steps: "(1) No lengths. Not sufficient.\n(2) \\(PQ = 5\\), nothing about \\(R\\). Not sufficient.\nTogether \\(PR = 5 + QR\\) with \\(QR\\) unknown. Not sufficient.\nAnswer: E.",
  take: "Betweenness turns the distance into a sum, but a sum with an unknown part is still unknown."
},
"di-ds-436-1#110": {
  steps: "(1) \\(x = 3\\), no \\(y\\). Not sufficient.\n(2) \\(y(x + 1) = 18\\), one equation. Not sufficient.\nTogether \\(4y = 18\\), \\(y = 4.5\\). Sufficient.\nAnswer: C.",
  take: "Statement (1) alone fixing x does not fix y; you need the link in (2)."
},
"di-ds-436-1#111": {
  steps: "\\(0.10x + 0.02y = 0.05(x + y)\\) gives \\(0.05x = 0.03y\\), \\(x = 0.6y\\), and \\(z = 1.6y\\).\n(1) \\(y = 10\\): \\(x = 6\\). Sufficient.\n(2) \\(z = 16\\): \\(y = 10\\), \\(x = 6\\). Sufficient.\nAnswer: D.",
  take: "A mixture stem already contains a ratio; one absolute amount then determines all of them."
},
"di-ds-436-1#112": {
  steps: "(1) and (2) give the two group sizes.\nTogether: with 120 students there could be no overlap; with 100 students the overlap is at least 20. Not sufficient.\nAnswer: E.",
  take: "Two-set overlap needs three of: total, group A, group B, neither, both."
},
"di-ds-436-1#113": {
  steps: "(1) A difference of $0.50 with unknown prices gives different answers. Not sufficient.\n(2) Pears cost 1.5 times as much, so the same money buys \\(5 / 1.5 = 3\\tfrac13\\) pounds. Sufficient.\nAnswer: B.",
  take: "Same money: quantity is inversely proportional to unit price."
},
"di-ds-436-1#114": {
  steps: "Actual time \\(= \\dfrac{y}{x} + \\dfrac{40 - y}{1.25x}\\); baseline \\(\\dfrac{40}{x}\\). The ratio is \\(\\dfrac{y + 0.8(40 - y)}{40}\\), which depends only on \\(y\\).\n(1) \\(x\\) cancels; \\(y\\) unknown. Not sufficient.\n(2) \\(y = 20\\): \\(\\dfrac{20 + 16}{40} = 90\\%\\). Sufficient.\nAnswer: B.",
  take: "Set up the ratio first; the variable that cancels is the one the wrong statement supplies."
},
"di-ds-436-1#115": {
  steps: "(1) 3 is prime, 9 is not. Not sufficient.\n(2) Exactly the factors 1 and \\(p\\) means \\(p\\) is prime. Sufficient.\nAnswer: B.",
  take: "A statement that restates the definition answers the question."
},
"di-ds-436-1#116": {
  steps: "(1) \\(8k - 3k = 18{,}750\\), \\(k = 3{,}750\\), radio \\(= 26{,}250\\). Sufficient.\n(2) \\(2k = 7{,}500\\), \\(k = 3{,}750\\). Sufficient.\nAnswer: D.",
  take: "Any absolute amount tied to the ratio parts fixes the multiplier."
},
"di-ds-436-1#117": {
  steps: "Terms pair off as \\(k, -k\\), so the sum is 0 for even \\(n\\) and \\(n\\) (positive) for odd \\(n\\).\n(1) \\(n\\) odd: sum \\(= n > 0\\). Sufficient.\n(2) \\(a_n > 0\\) means \\(n\\) is odd; same. Sufficient.\nAnswer: D.",
  take: "Write out the first few terms of a defined sequence; the pattern usually decides the question."
},
"di-ds-436-1#118": {
  steps: "(1) An odd number of negatives; the total is unknown. Not sufficient.\n(2) No signs. Not sufficient.\nTogether: 1 negative and 5 positive (no) or 5 negative and 1 positive (yes). Not sufficient.\nAnswer: E.",
  take: "Odd count of negatives plus a fixed set size still allows several splits."
},
"di-ds-436-1#119": {
  steps: "Given \\(k < t\\).\n(1) \\(t < 0\\) makes \\(k < 0\\) too; \\(kt > 0 > t\\). Yes. Sufficient.\n(2) \\(k = 0, t = 5\\): \\(0 > 5\\)? No. \\(k = -2, t = -1\\): \\(2 > -1\\)? Yes. Not sufficient.\nAnswer: A.",
  take: "\"Left of\" and \"right of\" are just < and >; translate and test signs."
},
"di-ds-436-1#120": {
  steps: "(1) \\(C\\) is the midpoint of \\(AB\\), 9 from \\(B\\); \\(D\\) is 8 from \\(C\\), so \\(BD = 1\\) or 17. Not sufficient.\n(2) No distances. Not sufficient.\nTogether: \\(A = 0, B = 18, C = 9\\); \\(D = 17\\) or \\(D = 1\\), both right of \\(A\\). \\(BD = 1\\) or 17. Not sufficient.\nAnswer: E.",
  take: "Place points with actual coordinates and try both sides of every unresolved distance."
},
"di-ds-436-1#121": {
  steps: "The quotient is negative when the factors have opposite signs: \\(-1 < x < 3\\).\n(1) Inside that interval. Yes. Sufficient.\n(2) \\(-2 < x < 2\\): \\(x = -1.5\\) gives a positive quotient, \\(x = 0\\) a negative one. Not sufficient.\nAnswer: A.",
  take: "Solve the sign question first, then see whether each statement's interval fits inside."
},
"di-ds-436-1#122": {
  steps: "\\(k = 3^{a}7^{b}\\) with \\((a + 1)(b + 1) = 6\\), so \\(k = 3 \\cdot 49 = 147\\) or \\(9 \\cdot 7 = 63\\).\n(1) 9 divides \\(k\\): 63. Sufficient.\n(2) 49 does not divide \\(k\\): 63. Sufficient.\nAnswer: D.",
  take: "The factor-count formula narrows k to a short list; then each statement picks one."
},
"di-ds-436-1#123": {
  steps: "(1) Slope of \\(l\\) is 2; \\(k\\) unknown. Not sufficient.\n(2) Slope of \\(k\\) is \\(-2/4 = -\\tfrac12\\); \\(l\\) unknown. Not sufficient.\nTogether \\(2 \\times (-\\tfrac12) = -1\\). Yes. Sufficient.\nAnswer: C.",
  take: "Perpendicularity needs both slopes; intercepts give a slope as −(y-int)/(x-int)."
},
"di-ds-436-1#124": {
  steps: "(1) Only the male count. Not sufficient.\n(2) \\(9.8m + 9.1f = 9.3(m + f)\\) gives \\(0.5m = 0.2f\\), \\(m : f = 2 : 5\\). Sufficient.\nAnswer: B.",
  take: "A combined average of two groups determines their ratio (alligation)."
},
"di-ds-436-1#125": {
  steps: "(1) Value only. Not sufficient.\n(2) Fee only. Not sufficient.\nTogether \\(2400 / 1{,}200{,}000 = 0.2\\%\\). Sufficient.\nAnswer: C.",
  take: "Percent = part ÷ whole; two amounts are required unless one statement gives the ratio."
},
"di-ds-436-1#126": {
  steps: "(1) Revenue without a unit price. Not sufficient.\n(2) \\(0.5c = 30\\), so cost 60 and price 90; no revenue. Not sufficient.\nTogether \\(270 / 90 = 3\\). Sufficient.\nAnswer: C.",
  take: "A markup given both in dollars and in percent pins the price; then revenue gives the count."
},
"di-ds-436-1#127": {
  steps: "(1) Let \\(n = 10t + u\\) with \\(t \\ge 2\\). If \\(t\\) divides \\(u\\) then \\(t\\) divides \\(n\\), and \\(1 < t < n\\), so \\(n\\) is composite. Sufficient.\n(2) 23 is prime, 24 is not. Not sufficient.\nAnswer: A.",
  take: "A digit that divides the number is a proper factor; that settles compositeness."
},
"di-ds-436-1#128": {
  steps: "(1) \\(x\\) odd gives \\(x^{2} + 1\\) even. Yes. Sufficient.\n(2) 2 is not a prime factor of \\(x^{2}\\), so \\(x\\) is odd; same conclusion (and \\(x = \\pm 1\\) also gives an even product). Sufficient.\nAnswer: D.",
  take: "Parity of a product: one even factor is enough."
},
"di-ds-436-1#129": {
  steps: "384 balcony seats.\n(1) \\(500(2b) + 384b = 34{,}600\\), \\(b = 25\\), orchestra 50; attendance unknown. Not sufficient.\n(2) Attendance known, prices unknown. Not sufficient.\nTogether \\(384 \\times 25 + 400 \\times 50 = 29{,}600\\). Sufficient.\nAnswer: C.",
  take: "Revenue = price × quantity for each category; each statement supplies one factor."
},
"di-ds-436-1#130": {
  steps: "6 miles in 1,800 s needs \\(31{,}680 / 1{,}800 = 17.6\\) ft/s.\n(1) Speed above 16: could be 17 (no) or 18 (yes). Not sufficient.\n(2) Speed below 18: 17.8 (yes) or 10 (no). Not sufficient.\nTogether 16 to 18 still straddles 17.6. Not sufficient.\nAnswer: E.",
  take: "Convert the threshold into the statements' units before comparing bounds."
},
"di-ds-436-1#131": {
  steps: "(1) \\(\\tfrac15 T = 30\\), \\(T = 150\\), dogs 50. Sufficient.\n(2) \\(\\tfrac13 T - \\tfrac15 T = 20\\), \\(\\tfrac{2}{15}T = 20\\), \\(T = 150\\), dogs 50. Sufficient.\nAnswer: D.",
  take: "Fractions of a total plus any one absolute count give the total."
},
"di-ds-436-1#132": {
  steps: "(1) A shortfall of 2,000 tools; \\(n\\) unknown. Not sufficient.\n(2) An extra 2,000 tools in the last 4 days; \\(n\\) unknown. Not sufficient.\nTogether: \\(3000 + 1000(n - 9) + 6000 = 1000n\\) is true for every \\(n\\). Not sufficient.\nAnswer: E.",
  take: "When the combined equation reduces to an identity, the statements were consistent but not informative."
},
"di-ds-436-1#133": {
  steps: "(1) \\(x \\in \\{5, 10, 15, 30\\}\\); with 18 each gives lcm 90. Sufficient.\n(2) \\(x \\in \\{5, 15, 45\\}\\); each gives lcm 90. Sufficient.\nAnswer: D.",
  take: "Several values of x may still give one answer to the question; test all candidates."
},
"di-ds-436-1#134": {
  steps: "(1) \\((1 + r/100)^{2} = 1.21\\), \\(r = 10 > 8\\). Sufficient.\n(2) \\(1 + r/100 > \\sqrt{1.15} \\approx 1.072\\), so \\(r > 7.2\\): 7.5 says no, 10 says yes. Not sufficient.\nAnswer: A.",
  take: "Compare the threshold's square (1.1664) with the bound (1.15) instead of taking a root."
},
"di-ds-436-1#135": {
  steps: "(1) Two booths 25 apart says nothing about spacing. Not sufficient.\n(2) Four booths, no distances. Not sufficient.\nTogether: three consecutive gaps sum to 25; if all were at least 10 the sum would be at least 30. So one gap is under 10. Sufficient.\nAnswer: C.",
  take: "Pigeonhole: n gaps with total less than 10n force one gap below 10."
},
"di-ds-436-1#136": {
  steps: "(1) Addition and multiplication are both commutative. Not sufficient.\n(2) \\(a(b - c) = ab - ac\\) holds; \\(a + (b - c) = (a + b) - (a + c)\\) fails (it gives \\(b - c\\)). So multiplication. Sufficient.\nAnswer: B.",
  take: "Test each candidate operation against the property with small numbers."
},
"di-ds-436-1#137": {
  steps: "(1) One deviation only. Not sufficient.\n(2) One deviation only. Not sufficient.\nTogether \\(m(-5000) + d(15000) = 0\\), so \\(m = 3d\\) and directors are \\(\\dfrac{d}{4d} = 25\\%\\). Sufficient.\nAnswer: C.",
  take: "Group deviations from the combined mean, weighted by counts, cancel; that gives the ratio."
},
"di-ds-436-1#138": {
  steps: "The question asks whether \\(s = 3r + 2\\).\n(1) \\(s = 3r + 2\\) or \\(s = 4r + 9\\). Not sufficient.\n(2) \\(s = 3r + 2\\) or \\(s = 4r - 6\\). Not sufficient.\nTogether: if \\(s \\ne 3r + 2\\) then \\(4r + 9 = s = 4r - 6\\), impossible. So \\(s = 3r + 2\\). Sufficient.\nAnswer: C.",
  take: "A product equal to zero is an OR; combine two ORs by eliminating the impossible pair."
},
"di-ds-436-1#139": {
  steps: "Question: is \\(my = rx\\)?\n(1) \\(mr = xy\\), a different product. \\(m = 1, r = 4, x = 2, y = 2\\) says no; \\(m = x = r = y\\) says yes. Not sufficient.\n(2) \\((m + x)y = x(r + y)\\) gives \\(my + xy = xr + xy\\), so \\(my = xr\\). Yes. Sufficient.\nAnswer: B.",
  take: "Convert every ratio statement into a cross-product and compare with the target product."
},
"di-ds-436-1#140": {
  steps: "(1) \\(a = 2, b = 4, k = 3, m = 1\\): 8 does not divide 4; \\(a = b\\) works. Not sufficient.\n(2) \\(a = 3, b = 2\\) fails. Not sufficient.\nTogether \\(a^{k}\\) divides \\(b^{k}\\), which divides \\(b^{m}\\). Yes. Sufficient.\nAnswer: C.",
  take: "Divisibility of powers needs both the base relation and the exponent order."
},
"di-ds-436-1#141": {
  steps: "(1) \\(\\tfrac{3}{40} = 0.075\\), so \\(x > 0.075 > 0.05\\): definite yes. Sufficient.\n(2) 3 percent of 50 is 1.5, so \\(x > 1.5 > 0.05\\): definite yes. Sufficient.\nAnswer: D.",
  take: "A lower bound above the threshold answers the question yes."
},
"di-ds-436-1#142": {
  steps: "(1) \\(z > 0\\); \\(x, y\\) could both be negative. Not sufficient.\n(2) \\(y > 0\\); \\(x, z\\) could both be negative. Not sufficient.\nTogether \\(y > 0\\) and \\(z > 0\\), so \\(xyz > 0\\) forces \\(x > 0\\). Sufficient.\nAnswer: C.",
  take: "Sign questions: each product statement fixes the sign of the missing variable."
},
"di-ds-436-1#143": {
  steps: "(1) \\(L - S = 20\\). Not sufficient.\n(2) \\(S = L/3\\). Not sufficient.\nTogether \\(L - L/3 = 20\\), \\(L = 30\\). Sufficient.\nAnswer: C.",
  take: "Difference plus ratio is the classic two-equation pair."
},
"di-ds-436-1#144": {
  steps: "(1) \\(2y + 1 = 77\\), \\(y = 38, x = 39\\), product 1,482. Sufficient.\n(2) Same tens digit \\(t\\): both lie in \\([10t, 10t + 9]\\), so the sum lies in \\([20t, 20t + 18]\\); 77 needs \\(t = 3\\), and \\(30 + 47\\) style pairs fail, leaving \\(38 + 39\\). Product 1,482. Sufficient.\nAnswer: D.",
  take: "A digit condition can be as restrictive as an equation; enumerate the few pairs."
},
"di-ds-436-1#145": {
  steps: "The walk is 16 km.\n(1) Slower than 6.4 km/h means more than \\(16 / 6.4 = 2.5\\) hours. Yes. Sufficient.\n(2) More than 9 min/km means more than 144 minutes, over 2 hours. Yes. Sufficient.\nAnswer: D.",
  take: "Convert the threshold to the units used by each statement; a bound on the far side of it is sufficient."
},
"di-ds-436-1#146": {
  steps: "(1) 120 quarter cartons, 180 half cartons: \\(30 + 90 = 120\\) gallons. Sufficient.\n(2) 90 gallons in halves means 180 half cartons, so 120 quarter cartons: 120 gallons. Sufficient.\nAnswer: D.",
  take: "With a fixed total count, one category's count (or volume) determines the rest."
},
"di-ds-436-1#147": {
  steps: "\\(4 + 7n = 3 + 6n + (1 + n)\\), so \\(r\\) is the remainder of \\(n + 1\\) on division by 3.\n(1) \\(n + 1\\) divisible by 3 gives \\(r = 0\\). Sufficient.\n(2) \\(n = 21\\) gives 1, \\(n = 22\\) gives 2. Not sufficient.\nAnswer: A.",
  take: "Reduce coefficients modulo the divisor before reading the statements."
},
"di-ds-436-1#148": {
  steps: "(1) The overlap is 0, so the answer is \\(P(W) + P(E)\\), unknown. Not sufficient.\n(2) A difference, not a sum. Not sufficient.\nTogether: \\(P(W) = 0.4, P(E) = 0.2\\) gives 0.6; \\(P(W) = 0.6, P(E) = 0.4\\) gives 1.0 (both possible with no overlap). Not sufficient.\nAnswer: E.",
  take: "Sum versus difference: a difference of two probabilities does not fix their sum."
},
"di-ds-436-1#149": {
  steps: "(1) \\(n\\) odd makes \\(n^{2} - 1\\) a multiple of 8: \\(n = 3\\) gives 8, \\(n = 5\\) gives 0. Not sufficient.\n(2) \\(n\\) not a multiple of 3 makes \\(n^{2} - 1\\) a multiple of 3: \\(n = 2\\) gives 3, \\(n = 5\\) gives 0. Not sufficient.\nTogether \\(n^{2} - 1\\) is a multiple of 8 and of 3, so \\(r = 0\\). Sufficient.\nAnswer: C.",
  take: "For n coprime to 6, \\(n^{2} - 1\\) is a multiple of 24."
},
"di-ds-436-1#150": {
  steps: "(1) \\(c_M = c_N\\), so \\(p_N = p_M + 10\\); no count. Not sufficient.\n(2) \\(p_N = p_M + 10\\), which forces \\(c_M = c_N\\): the same statement. Not sufficient.\nTogether nothing new. Not sufficient.\nAnswer: E.",
  take: "Check whether a statement is merely the other one rephrased through the totals."
},
"di-ds-436-1#151": {
  steps: "(1) \\(x\\) lies between 7 and 11, so it is the median; \\(\\dfrac{36 + x}{5} = x\\) gives \\(x = 9\\). Sufficient.\n(2) Directly the same equation, \\(x = 9\\). Sufficient.\nAnswer: D.",
  take: "Locate x among the sorted fixed numbers; once its position is known the mean equation solves it."
},
"di-ds-436-1#152": {
  steps: "(1) Two group rates, no weights. Not sufficient.\n(2) Combined rate only. Not sufficient.\nTogether \\(0.33m + 0.20f = 0.25(m + f)\\), so \\(0.08m = 0.05f\\), \\(m : f = 5 : 8\\); males are \\(\\tfrac{5}{13}\\). Sufficient.\nAnswer: C.",
  take: "Weighted-average setups need the two parts and the whole."
},
"di-ds-436-1#153": {
  steps: "(1) \\(ar = 50\\) and \\(b(1.5r) = 150\\) give \\(br = 100\\), so \\(b = 2a\\); \\(r\\) unknown. Not sufficient.\n(2) \\(b = 2a\\), no amounts. Not sufficient.\nTogether still \\(ar = 50\\) with \\(r\\) unknown. Not sufficient.\nAnswer: E.",
  take: "Interest amounts without a rate cannot give a principal."
},
"di-ds-436-1#154": {
  steps: "(1) A head count, no attendance information. Not sufficient.\n(2) 80% on day two; the overlap with day one is unknown. Not sufficient.\nTogether: the 80% could all be day-one attendees (10% missed both) or include the other 10% (0% missed both). Not sufficient.\nAnswer: E.",
  take: "Two-set percentages need the overlap (or the neither) to finish."
},
"di-ds-436-1#155": {
  steps: "588 teachers said yes.\n(1) \\(0.36m + 0.50w = 588\\) with \\(m + w = 1400\\): \\(0.36(1400 - w) + 0.5w = 588\\), \\(0.14w = 84\\), \\(w = 600\\). Sufficient.\n(2) 288 men said yes, so 300 women did; the rates are unknown. Not sufficient.\nAnswer: A.",
  take: "A count within a subgroup needs that subgroup's rate to give its size."
},
"di-ds-436-1#156": {
  steps: "(1) \\(y - 4 = \\tfrac34(x - 4)\\); at \\(x = -\\tfrac32\\), \\(y = 4 - \\tfrac{33}{8} = -\\tfrac18 \\ne \\tfrac12\\). Definite no. Sufficient.\n(2) \\(y + 2 = \\tfrac34(x + 4)\\); at \\(x = -\\tfrac32\\), \\(y = -2 + \\tfrac{15}{8} = -\\tfrac18\\). Definite no. Sufficient.\nAnswer: D.",
  take: "A definite \"no\" is sufficient; do not confuse \"the point is not on the line\" with \"not sufficient\"."
},
"di-ds-436-1#157": {
  steps: "(1) \\(x(y + z)\\) even. If \\(x\\) were odd, \\(y + z\\) would be even and then \\(xy + z \\equiv y + z\\) would be even, contradicting the stem. So \\(x\\) is even. Sufficient.\n(2) \\(x = 2, y = 1, z = 1\\) fits everything (x even); \\(x = 1, y = 1, z = 2\\) also fits (x odd). Not sufficient.\nAnswer: A.",
  take: "Parity questions: assume the opposite and check the stem for a contradiction."
},
"di-ds-436-1#158": {
  steps: "The stem only says \\(z\\) is closer to \\(x\\) than \\(y\\) is.\n(1) and (2) together: \\(x = -1, y = 4, z = 1\\) puts \\(z\\) between (yes); \\(x = 1, y = -4, z = 2\\) does not (no), and both satisfy \\(xyz < 0\\), \\(xy < 0\\). Not sufficient.\nAnswer: E.",
  take: "Sign conditions rarely fix order on a number line; test a point on each side of x."
},
"di-ds-436-1#159": {
  steps: "\\(8! = 2^{7} \\cdot 3^{2} \\cdot 5 \\cdot 7\\).\n(1) \\(64 = 2^{6} = 4^{3} = 8^{2}\\), so \\(a\\) is 2, 4 or 8. Not sufficient.\n(2) \\(a^{6}\\) divides \\(8!\\) only for \\(a = 2\\). Sufficient.\nAnswer: B.",
  take: "Factor the factorial; a high exponent leaves only the smallest prime as a base."
},
"di-ds-436-1#160": {
  steps: "(1) \\(n = t = 5\\) gives 5; \\(n = 5, t = 35\\) gives 7. Not sufficient.\n(2) Every prime factor of \\(n\\) or \\(t\\) divides the LCM, \\(105 = 3 \\cdot 5 \\cdot 7\\), so the greatest is 7. Sufficient.\nAnswer: B.",
  take: "GCD and LCM have the same set of primes as the product; the LCM carries the full set."
},
"di-ds-436-1#161": {
  steps: "(1) \\(x = 3, y = 1\\): \\(2 > 2\\)? No. \\(x = 1, y = -3\\): \\(4 > -2\\)? Yes. Not sufficient.\n(2) Opposite signs: \\(|x - y| = |x| + |y| > |x| - |y|\\) because \\(|y| > 0\\). Yes. Sufficient.\nAnswer: B.",
  take: "|x − y| ≥ |x| − |y| always; strictness fails only when x, y share a sign with |x| ≥ |y|."
},
"di-ds-436-1#162": {
  steps: "\\(mx + ky - kx - my = (m - k)(x - y)\\).\n(1) Sign of \\(x - y\\) unknown. Not sufficient.\n(2) Sign of \\(m - k\\) unknown. Not sufficient.\nTogether both factors are positive. Yes. Sufficient.\nAnswer: C.",
  take: "Move everything to one side and factor; the question becomes a sign product."
},
"di-ds-436-1#163": {
  steps: "(1) 14 supplies a factor 2, 35 supplies 5, so 10 divides \\(N\\). Yes. Sufficient.\n(2) Contains \\(2 \\cdot 5\\). Yes. Sufficient.\nAnswer: D.",
  take: "Look for a 2 and a 5 among the factors; that is all \"ends in 0\" means."
},
"di-ds-436-1#164": {
  steps: "Line \\(y = mx + b\\).\n(1) \\(m = 3b\\). Not sufficient.\n(2) \\(0 = -\\tfrac{m}{3} + b\\), i.e. \\(m = 3b\\), the same fact. Not sufficient.\nTogether nothing new. Not sufficient.\nAnswer: E.",
  take: "x-intercept = −b/m; check whether a stated intercept merely restates a slope relation."
},
"di-ds-436-1#165": {
  steps: "(1) \\(4y\\) is even, so \\(5x\\) is even, so \\(x\\) is even; \\(xy\\) even. Sufficient.\n(2) \\(6x\\) is even, so \\(7y\\) is even, so \\(y\\) is even. Sufficient.\nAnswer: D.",
  take: "In parity arguments drop every term with an even coefficient."
},
"di-ds-436-1#166": {
  steps: "(1) GCF alone. Not sufficient.\n(2) LCM alone. Not sufficient.\nTogether \\(xy = 10 \\times 180 = 1{,}800\\). Sufficient.\nAnswer: C.",
  take: "For two positive integers the product equals GCF times LCM."
},
"di-ds-436-1#167": {
  steps: "(1) \\(\\{0, 0, 5\\}\\): every pair multiplies to 0, yet not all are 0. Not sufficient.\n(2) \\(a + b = 0, a + c = 0, b + c = 0\\) give \\(b = c = -a\\) and \\(b + c = -2a = 0\\), so all are 0. Sufficient.\nAnswer: B.",
  take: "With three or more numbers, pairwise-zero sums collapse everything to zero; pairwise-zero products do not."
},
"di-ds-436-1#168": {
  steps: "Everyone who buys at least one product is either in \"P only\" or in \"Q\".\n(1) or (2) alone leaves a gap. Not sufficient.\nTogether neither \\(= 1 - \\tfrac13 - \\tfrac12 = \\tfrac16\\). Sufficient.\nAnswer: C.",
  take: "\"P but not Q\" and \"Q\" are disjoint and together equal \"P or Q\"."
},
"di-ds-436-1#169": {
  steps: "(1) \\(x = y + \\tfrac12\\): \\((1, \\tfrac12)\\) yes, \\((-1, -\\tfrac32)\\) no. Not sufficient.\n(2) Same sign and \\(|x| > |y|\\); could both be negative. Not sufficient.\nTogether: if both were negative, \\(x = y + \\tfrac12\\) would make \\(|x| < |y|\\), contradicting (2). So both positive. Sufficient.\nAnswer: C.",
  take: "x/y > 1 does not mean x > y; it means x and y share a sign and x is farther from 0."
},
"di-ds-436-1#170": {
  steps: "\\(M - J = 2(M - K)\\) gives \\(M = 2K - J\\), so \\(M + J + K = 3K\\) and the average is \\(K\\).\n(1) \\(J\\) alone. Not sufficient.\n(2) \\(K = 40{,}000\\), average 40,000. Sufficient.\nAnswer: B.",
  take: "Simplify the stem relation before reading the statements; the average may already be one variable."
},
"di-ds-436-1#171": {
  steps: "(1) \\(x\\) or \\(z\\) is even; if \\(x\\) is even then \\(z\\), a multiple of \\(x\\), is even too. Yes. Sufficient.\n(2) \\(z\\) is a multiple of the even number \\(y\\). Yes. Sufficient.\nAnswer: D.",
  take: "If a divides b, every prime of a is a prime of b."
},
"di-ds-436-1#172": {
  steps: "(1) The difference becomes \\(1.06 \\times 5 = 5.30\\). Sufficient.\n(2) A ratio gives no dollar amount. Not sufficient.\nAnswer: A.",
  take: "Equal percent changes multiply differences as well as values."
},
"di-ds-436-1#173": {
  steps: "(1) \\(x = -\\tfrac14\\) says no, \\(x = \\tfrac12\\) says yes. Not sufficient.\n(2) \\(x = \\tfrac34 - \\tfrac14 = \\tfrac12\\), which is between 0 and 1. Sufficient.\nAnswer: B.",
  take: "An interval that spills outside the target range is not sufficient; a single value is."
},
"di-ds-436-1#174": {
  steps: "(1) Numerator \\(= 3xy + 2xy = 5xy\\), denominator \\(= 3xy - 2xy = xy\\); ratio 5. Sufficient.\n(2) \\(x = 1, y = 3\\) gives \\(16/4 = 4\\); \\(x = \\tfrac12, y = 6\\) gives a different value. Not sufficient.\nAnswer: A.",
  take: "A relation between \\(x^{2} + y^{2}\\) and xy is exactly what a ratio of \\((x \\pm y)^{2}\\) needs."
},
"di-ds-436-1#175": {
  steps: "(1) \\(70 = 2 \\cdot 5 \\cdot 7\\) and each of \\(x, y, z\\) exceeds 1, so they are 2, 5, 7 in some order: sum 14. Sufficient.\n(2) \\(x = 7, yz = 10\\) gives 14, but \\(x = 14, yz = 20\\) (4 and 5) gives 23. Not sufficient.\nAnswer: A.",
  take: "A product with a \"greater than 1\" restriction can pin a set; a ratio only pins proportions."
},
"di-ds-436-1#176": {
  steps: "Subtract \\(p\\) from both sides: \\(p + pz = p\\) is the same as \\(pz = 0\\), which holds exactly when \\(p = 0\\) or \\(z = 0\\).\n(1) \\(p = 0\\): definite yes. Sufficient.\n(2) \\(z = 0\\): definite yes. Sufficient.\nAnswer: D.",
  take: "Simplify the question to its core before evaluating statements."
},
"di-ds-436-1#177": {
  steps: "(1) \\(3 + 2 = 5\\) and \\(3 \\times 2 = 6\\) exceed 3; \\(3 - 2\\) and \\(3 \\div 2\\) do not. So the operation is + or ×, both associative: yes. Sufficient.\n(2) \\(3 \\times 1 = 3\\) (associative) or \\(3 \\div 1 = 3\\) (not). Not sufficient.\nAnswer: A.",
  take: "Test each candidate operation against the statement, then check the property for the survivors."
},
"di-ds-436-1#178": {
  steps: "Digits 1, 2, 7: six arrangements.\n(1) Odd: 127, 217, 271, 721. Not sufficient.\n(2) Below 700: 127, 172, 217, 271. Not sufficient.\nTogether: 127, 217, 271. Not sufficient.\nAnswer: E.",
  take: "List the arrangements explicitly; both filters leave several."
},
"di-ds-436-1#179": {
  steps: "27 houses have no patio.\n(1) 10 have both; the pools among the 27 no-patio houses are unknown. Not sufficient.\n(2) Pool \\(=\\) both \\(+\\) (pool, no patio) \\(=\\) both \\(+ (27 -\\) neither\\() = 27\\) since both \\(=\\) neither. Sufficient.\nAnswer: B.",
  take: "In a 2×2 table, \"both = neither\" makes the diagonal cancel; try writing the target in table cells."
},
"di-ds-436-1#180": {
  steps: "(1) Head count only. Not sufficient.\n(2) Averages only. Not sufficient.\nTogether \\(3m + 5f = 15{,}000\\) and \\(m + f = 4{,}000\\) give \\(2f = 3{,}000\\), \\(f = 1{,}500\\). Sufficient.\nAnswer: C.",
  take: "Total quantity plus per-group averages plus total count is a standard two-equation system."
},
"di-ds-436-1#181": {
  steps: "(1) Unique factorisation: \\(x = 3, y = 2\\), sum 5. Sufficient.\n(2) \\(2^{x + y} = 2^{5}\\), so \\(x + y = 5\\). Sufficient.\nAnswer: D.",
  take: "Match prime exponents; a product of like bases adds exponents."
},
"di-ds-436-1#182": {
  steps: "(1) \\(h^{2} = 36\\) gives \\(h = 6\\) or \\(h = -6\\), two values. Not sufficient.\n(2) Move everything to one side: \\(h^{2} + 12h + 36 = 0\\), which is \\((h + 6)^{2} = 0\\), so \\(h = -6\\) is the only root. Sufficient.\nAnswer: B.",
  take: "A perfect-square quadratic has one root, so it is sufficient on its own."
},
"di-ds-436-1#183": {
  steps: "(1) The run strictly between \\(x\\) and \\(y\\) could have 23, 24 or 25 integers: 11, 12 or 13 odds. Not sufficient.\n(2) 24 consecutive integers contain exactly 12 odd. Sufficient.\nAnswer: B.",
  take: "An even-length run of consecutive integers is half odd; an odd-length run depends on where it starts."
},
"di-ds-436-1#184": {
  steps: "(1) or (2) alone gives one difference. Not sufficient.\nTogether \\(2000(1 + p/100) = 2440\\), so \\(p = 22\\). Sufficient.\nAnswer: C.",
  take: "Equal percent growth on two amounts is the same growth on their difference."
},
"di-ds-436-1#185": {
  steps: "(1) Total 6 among 3 people: if all sold at most 1 the total would be at most 3. Yes. Sufficient.\n(2) Three different non-negative integers: the largest is at least 2. Yes. Sufficient.\nAnswer: D.",
  take: "\"At least one is at least the average\" and \"distinct values spread out\" are both pigeonhole facts."
},
"di-ds-436-1#186": {
  steps: "(1) \\(|s| = |t|\\) and \\(s \\ne t\\) give \\(t = -s\\), so \\(s + t = 0\\). Sufficient.\n(2) \\(s = -1, t = 2\\) says no; \\(s = -1, t = 1\\) says yes. Not sufficient.\nAnswer: A.",
  take: "Use the \"different numbers\" clause; it kills the s = t branch of |s| = |t|."
},
"di-ds-436-1#187": {
  steps: "(1) \\(1000 - 200 = 800\\) companies had a plan: \\(800 / 1000 = 80\\%\\). Sufficient.\n(2) With \\(n\\) companies lacking a plan, \\(4n + n = 1000\\), so \\(n = 200\\) and 800 had a plan: 80%. Sufficient.\nAnswer: D.",
  take: "With the total given, a ratio between the two parts is as good as a count."
},
"di-ds-436-1#188": {
  steps: "(1) or (2) alone: one side of the profit only. Not sufficient.\nTogether: table cost \\(c\\), sale \\(s\\); armchair profit \\(1.2s - 1.1c\\), table profit \\(s - c\\). With \\(c = 100, s = 200\\) the ratio is \\(130/100\\); with \\(c = 100, s = 150\\) it is \\(70/50\\). Not sufficient.\nAnswer: E.",
  take: "Percent changes on two quantities do not combine into a percent change of their difference."
},
"di-ds-436-1#189": {
  steps: "The company's ratio is a mediant of the two divisions' ratios, so it lies between them.\n(1) Y is below the company, so X is above it. Yes. Sufficient.\n(2) X has more than half the full-timers and less than half the part-timers, so \\(F_X / P_X > (F/2)/(P/2) = F/P\\). Yes. Sufficient.\nAnswer: D.",
  take: "A combined ratio sits between the parts' ratios; knowing one side tells you the other."
},
"di-ds-436-1#190": {
  steps: "(1) \\(x\\) is an odd multiple of 3: 3, 9, 15, …, all leaving remainder 3. Sufficient.\n(2) \\(x = 12k + 3\\), remainder 3. Sufficient.\nAnswer: D.",
  take: "Remainders mod 2 and mod 3 together determine the remainder mod 6."
},
"di-ds-436-1#191": {
  steps: "(1) Women : children : men \\(= 25 : 10 : 22\\), any multiple. Not sufficient.\n(2) Nothing about men. Not sufficient.\nTogether \\(25k < 30\\) forces \\(k = 1\\): 22 men. Sufficient.\nAnswer: C.",
  take: "An upper bound on one ratio part can pin the whole ratio's multiplier."
},
"di-ds-436-1#192": {
  steps: "Is \\(1.06p > q\\), i.e. \\(0.06p > q - p\\)?\n(1) \\(p = 1000, q = 1040\\): yes; \\(p = 100, q = 140\\): no. Not sufficient.\n(2) \\(p\\) unknown. Not sufficient.\nTogether \\(p > 1100\\), so \\(0.06p > 66 > 50 > q - p\\). Yes. Sufficient.\nAnswer: C.",
  take: "Turn the comparison into \"tax versus price gap\"; a lower bound on p then decides it."
},
"di-ds-436-1#193": {
  steps: "(1) \\(p = 8, 12, 20, 28, \\dots\\). Not sufficient.\n(2) Any multiple of 3. Not sufficient.\nTogether \\(4 \\times\\) prime divisible by 3 means the prime is 3: \\(p = 12\\). Sufficient.\nAnswer: C.",
  take: "\"Divisible by 3\" on 4 × (prime) forces the prime itself to be 3."
},
"di-ds-436-1#194": {
  steps: "(1) \\(x = -1, y = -2\\) yes; \\(x = -2, y = -1\\) no. Not sufficient.\n(2) \\(x - y > 0\\) is exactly \\(x > y\\). Sufficient.\nAnswer: B.",
  take: "The sum's sign says nothing about order; the difference's sign is the order."
},
"di-ds-436-1#195": {
  steps: "(1) March \\(= 310{,}000 - 9x\\), \\(x\\) unknown. Not sufficient.\n(2) \\(3x = 30{,}000\\), \\(x = 10{,}000\\); no anchor. Not sufficient.\nTogether March \\(= 310{,}000 - 90{,}000 = 220{,}000\\). Sufficient.\nAnswer: C.",
  take: "An arithmetic sequence needs one term and the common difference."
},
"di-ds-436-1#196": {
  steps: "(1) \\(m = 1, z = 0\\) yes; \\(m = -1, z = -1\\) no. Not sufficient.\n(2) \\(m = 0, z = 1\\) yes; \\(m = -5, z = 0\\) no. Not sufficient.\nTogether adding gives \\(z > 0\\); then \\(m > 3z > 0\\), so \\(m + z > 0\\). Sufficient.\nAnswer: C.",
  take: "Inequalities in the same direction can be added; that often exposes a sign."
},
"di-ds-436-1#197": {
  steps: "(1) \\(k = 2\\): \\(40 = 2^{3}5\\) has 8 divisors; \\(k = 3\\): 60 has 12. Not sufficient.\n(2) \\(140 = 2^{2} \\cdot 5 \\cdot 7\\): \\((2+1)(1+1)(1+1) = 12\\). Sufficient.\nAnswer: B.",
  take: "\"Prime\" is not enough when the prime might already divide the number."
},
"di-ds-436-1#198": {
  steps: "(1) \\(1.3R = F\\), so \\(R = \\tfrac{10}{13}F\\) and the decrease is \\(\\tfrac{3}{13} \\approx 23\\%\\). Sufficient.\n(2) Six cups of an unknown total. Not sufficient.\nAnswer: A.",
  take: "A percent increase back to the original fixes the percent decrease (they are not equal)."
},
"di-ds-436-1#199": {
  steps: "(1) or (2) alone: one endpoint. Not sufficient.\nTogether midpoint \\(= \\left(\\dfrac{a + 1 - a}{2}, \\dfrac{1 - b + b}{2}\\right) = \\left(\\tfrac12, \\tfrac12\\right)\\). Sufficient.\nAnswer: C.",
  take: "Unknown parameters can cancel; compute before deciding the answer is E."
},
"di-ds-436-1#200": {
  steps: "Cost \\(= c\\,t\\,L^{2}\\); target \\(= 0.9c\\).\n(1) \\(0.8c - 0.4c = 160\\), \\(c = 400\\), target 360. Sufficient.\n(2) \\(0.9c - 0.4c = 200\\), \\(c = 400\\), target 360. Sufficient.\nAnswer: D.",
  take: "Joint proportionality has one constant; any one numeric comparison determines it."
},
"di-ds-436-1#201": {
  steps: "(1) Unknown rate. Not sufficient.\n(2) Two extra items earned $30 more; the rate is still unknown. Not sufficient.\nTogether: if both weeks stayed at or under 36, \\(x = 15\\) and \\(15n = 480\\) gives \\(n = 32\\); if both were over 36, \\(1.5x \\cdot 2 = 30\\) gives \\(x = 10\\) and \\(360 + 15(n - 36) = 480\\) gives \\(n = 44\\). Two answers. Not sufficient.\nAnswer: E.",
  take: "Piecewise pay: test both branches; each may yield a consistent solution."
},
"di-ds-436-1#202": {
  steps: "(1) \\(x = y = 1\\) satisfies \\(2 < 3\\) and says no; \\(x = 1, y = 2\\) says yes. Not sufficient.\n(2) \\(xy > 0\\) only says the signs agree. Not sufficient.\nTogether: both examples above have \\(xy > 0\\) and \\(2x < 3y\\), one answering no and one yes. Not sufficient.\nAnswer: E.",
  take: "Always test the equality case when a statement is an inequality with different coefficients."
},
"di-ds-436-1#203": {
  steps: "(1) \\(k = -1\\) gives 24 down to 10: fourteen terms above 10; \\(k = 1\\) gives fifteen. Not sufficient.\n(2) \\(a_8 = 10\\) with 7 terms before and 7 after; one side is above 10 and the other below, whatever the sign of \\(k\\). Exactly 7. Sufficient.\nAnswer: B.",
  take: "In an arithmetic sequence, a term equal to the threshold splits the rest symmetrically."
},
"di-ds-436-1#204": {
  steps: "The question \\(4z > -6\\) is \\(z > -1.5\\).\n(1) \\(z < 7\\): \\(z = 0\\) says yes, \\(z = -10\\) says no. Not sufficient.\n(2) \\(z > -1\\), and \\(-1 > -1.5\\), so every allowed \\(z\\) exceeds \\(-1.5\\). Definite yes. Sufficient.\nAnswer: B.",
  take: "Rewrite the question as a bound on z, then compare with each statement's bound."
},
"di-ds-436-2#1": {
  steps: "(1) Divide both sides by 3, a positive number, so the direction is kept: \\(m > k\\). Yes. Sufficient.\n(2) Divide both sides by 2, again positive: \\(m > k\\). Yes. Sufficient.\nAnswer: D.",
  take: "Scaling an inequality by a positive constant changes nothing."
},
"di-ds-436-2#2": {
  steps: "(1) 4 is a square, 8 is not. Not sufficient.\n(2) \\(2 \\cdot 3 \\cdot 5 \\cdot 7\\) is not a square; \\((2 \\cdot 3 \\cdot 5 \\cdot 7)^{2}\\) is. Not sufficient.\nTogether: \\(4 \\cdot 3 \\cdot 5 \\cdot 7 = 420\\) (no) and \\(210^{2}\\) (yes) both satisfy both statements. Not sufficient.\nAnswer: E.",
  take: "A square needs every prime exponent even; neither statement controls the exponents."
},
"di-ds-436-2#3": {
  steps: "(1) \\(w < z\\) with \\(z > 0\\) gives \\(w/z < 1\\). Yes. Sufficient.\n(2) \\(z = 2\\): \\(w = 1\\) yes, \\(w = 3\\) no. Not sufficient.\nAnswer: A.",
  take: "With positive denominators, a fraction compared with 1 is just numerator compared with denominator."
},
"di-ds-436-2#4": {
  steps: "(1) \\(0.85J - 0.9S = 83\\), one equation. Not sufficient.\n(2) \\(J = 140\\), no \\(S\\). Not sufficient.\nTogether \\(119 - 0.9S = 83\\), \\(S = 40\\), difference \\(100\\). Sufficient.\nAnswer: C.",
  take: "Different discount rates mean the sale-price gap does not translate into the original-price gap by itself."
},
"di-ds-436-2#5": {
  steps: "The question reduces to: is \\(x + y\\) even?\n(1) \\(x\\) has the parity of \\(z\\); \\(y\\) unknown. Not sufficient.\n(2) \\(y\\) has the parity of \\(z\\); \\(x\\) unknown. Not sufficient.\nTogether \\(x\\) and \\(y\\) share \\(z\\)'s parity, so \\(x + y\\) is even. Sufficient.\nAnswer: C.",
  take: "Drop even terms first; then chain parities through the shared variable."
},
"di-ds-436-2#6": {
  steps: "(1) \\(0 + 2 = 2\\) works, \\(0 - 2\\) and \\(0 \\times 2\\) do not: addition, so \\(1 \\,@\\, 0 = 1\\). Sufficient.\n(2) \\(2 + 0 = 2\\) and \\(2 - 0 = 2\\) both work, but \\(1 + 0 = 1 - 0 = 1\\) either way. Sufficient.\nAnswer: D.",
  take: "Two surviving operations are fine if they agree on the value asked."
},
"di-ds-436-2#7": {
  steps: "\\(x + y = 1\\), so \\(C = 8.5 - 2x\\).\n(1) \\(x < 0.85\\): could be 0.82 (no) or 0.5 (yes). Not sufficient.\n(2) \\(8.5 - 2x \\ge 7.3\\) gives \\(x \\le 0.6 < 0.8\\). Yes. Sufficient.\nAnswer: B.",
  take: "Use the hidden constraint x + y = 1 to turn the cost into a one-variable bound."
},
"di-ds-436-2#8": {
  steps: "(1) Nothing about \\(p\\). Not sufficient.\n(2) \\(n\\) and \\(p\\) have the same sign, unknown which. Not sufficient.\nTogether \\(n \\ge 0\\) and \\(n \\ne 0\\), so \\(n > 0\\) and hence \\(p > 0\\). Sufficient.\nAnswer: C.",
  take: "\"Integer\" turns n + 1 > 0 into n ≥ 0; a product condition then removes zero."
},
"di-ds-436-2#9": {
  steps: "(1) or (2) alone leaves one class unconstrained. Not sufficient.\nTogether \\(f : s : j = 1 : 2 : 4\\), \\(7k = 105\\), \\(k = 15\\), sophomores 30. Sufficient.\nAnswer: C.",
  take: "Two ratios sharing a part combine into a three-way ratio; the total then fixes the scale."
},
"di-ds-436-2#10": {
  steps: "(1) \\(25h \\ge 150\\), \\(h \\ge 6\\). Not sufficient.\n(2) \\(8p + 25h < 260\\) with \\(p \\ge 11\\): \\(25h < 172\\), \\(h \\le 6\\). Not sufficient.\nTogether \\(h = 6\\). Sufficient.\nAnswer: C.",
  take: "Push the given lower bound on one variable into the total to squeeze the other."
},
"di-ds-436-2#11": {
  steps: "(1) \\(m = 3, 9, 15, \\dots\\) Not sufficient.\n(2) \\(m\\) divides \\(15 - 6 = 9\\) and exceeds the remainder 6, so \\(m = 9\\). Sufficient.\nAnswer: B.",
  take: "\"15 divided by m leaves 6\" means m is a divisor of 9 larger than 6."
},
"di-ds-436-2#12": {
  steps: "(1) The elements in \\(A\\), \\(B\\) and \\(C\\) are exactly those of \\(A \\cap B\\) that are also in \\(C\\): 9. Sufficient.\n(2) Set sizes do not fix the triple overlap. Not sufficient.\nAnswer: A.",
  take: "The triple overlap is a subset of every pairwise overlap; read (1) literally."
},
"di-ds-436-2#13": {
  steps: "(1) 120 teachers, split unknown. Not sufficient.\n(2) 72 non-language-arts teachers, total unknown. Not sufficient.\nTogether \\(120 - 72 = 48\\), and \\(48 / 200 = 24\\%\\). Sufficient.\nAnswer: C.",
  take: "A percent of the whole needs the whole; a raw count needs the group size."
},
"di-ds-436-2#14": {
  steps: "(1) Total time \\(4 / 3.2 = 1.25\\) hours, split unknown. Not sufficient.\n(2) A difference in times, no total. Not sufficient.\nTogether \\(t_1 + (t_1 + 0.25) = 1.25\\), \\(t_1 = 0.5\\) h, speed \\(4\\) mph. Sufficient.\nAnswer: C.",
  take: "Total time plus a time difference is two equations in the two half-times."
},
"di-ds-436-2#15": {
  steps: "\\(xy + xz = x(y + z)\\).\n(1) \\(x = 0\\) makes the product 0. Sufficient.\n(2) \\(y + z = 0\\) makes it 0. Sufficient.\nAnswer: D.",
  take: "Factor the question expression; each statement kills one factor."
},
"di-ds-436-2#16": {
  steps: "(1) \\(k^{2} = 4\\) gives \\(k = 2\\) or \\(k = -2\\); both have absolute value 2, so the answer is a definite yes. Sufficient.\n(2) \\(k = -2\\) and \\(|-2| = 2\\). Yes. Sufficient.\nAnswer: D.",
  take: "Two candidate values are fine when the question treats them alike."
},
"di-ds-436-2#17": {
  steps: "(1) Friday 11, Saturday 39, others 10, 9, 8, 7, 6 sums to 90 (no); Friday 20, Saturday 30, others 40 (yes). Not sufficient.\n(2) Saturday 38 leaves 52 for Friday plus five smaller distinct days. If Friday were at most 11 the others would be at most \\(10 + 9 + 8 + 7 + 6 = 40\\), total at most 51. So Friday is at least 12. Sufficient.\nAnswer: B.",
  take: "\"Distinct\" plus \"maximum\" problems: maximise the other values and see if the total can still be reached."
},
"di-ds-436-2#18": {
  steps: "(1) \\(y = -x\\) with \\(x \\ne 0\\): opposite signs. Yes. Sufficient.\n(2) A negative product means opposite signs. Yes. Sufficient.\nAnswer: D.",
  take: "Sum zero (nonzero numbers) or product negative each pins opposite signs."
},
"di-ds-436-2#19": {
  steps: "(1) Median of \\(T\\) unknown. Not sufficient.\n(2) \\(5m_S = 7m_T\\): equal only if both are 0, but \\(m_S = 7, m_T = 5\\) also works. Not sufficient.\nTogether \\(m_S = 0\\) forces \\(m_T = 0\\). Yes. Sufficient.\nAnswer: C.",
  take: "For consecutive integers the sum is the median times the count."
},
"di-ds-436-2#20": {
  steps: "(1) \\(-2x > 3y > 0\\), so \\(x < 0\\). Sufficient.\n(2) \\(5y = 20 - 2x\\), so \\(-10x > 3(20 - 2x) = 60 - 6x\\), giving \\(-4x > 60\\), \\(x < -15\\). Sufficient.\nAnswer: D.",
  take: "An equation in the statement can be substituted into the stem's inequality."
},
"di-ds-436-2#21": {
  steps: "(1) 3 is odd, 6 is even. Not sufficient.\n(2) If \\(n\\) is odd, \\(2n\\) has exactly twice as many divisors (each divisor \\(d\\) gives \\(d\\) and \\(2d\\)). If \\(n = 2^{a}m\\) with \\(a \\ge 1\\), the count goes from \\((a + 1)k\\) to \\((a + 2)k\\), less than double. So \\(n\\) is odd. Sufficient.\nAnswer: B.",
  take: "The divisor-count formula (exponent + 1 products) explains why doubling doubles only for odd n."
},
"di-ds-436-2#22": {
  steps: "(1) \\(p = r\\): for \\(r > 0\\), \\(\\dfrac{1}{r} > \\dfrac{r}{r^{2} + 2}\\) because \\(r^{2} + 2 > r^{2}\\); for \\(r < 0\\) both sides are negative and the inequality reverses. Not sufficient.\n(2) \\(p\\) unknown. Not sufficient.\nTogether \\(r > 0\\) and \\(p = r\\): yes. Sufficient.\nAnswer: C.",
  take: "Cross-multiplying needs the sign of the product of the denominators; a statement giving the sign is what makes it work."
},
"di-ds-436-2#23": {
  steps: "(1) \\(\\tfrac{7}{12}\\) of 12 is 7 women, so 5 men remain: \\(\\tfrac{5}{12}\\). Sufficient.\n(2) A woman left, so 5 of 12 are men: \\(\\tfrac{5}{12}\\). Sufficient.\nAnswer: D.",
  take: "One departure changes only one count; identify which."
},
"di-ds-436-2#24": {
  steps: "(1) \\(x = y\\), any positive value. Not sufficient.\n(2) \\(x = 2, y = \\tfrac12\\) says no. Not sufficient.\nTogether \\(x^{2} = 1\\), \\(x = 1\\) (positive). Sufficient.\nAnswer: C.",
  take: "Combine a ratio and a product to isolate a square."
},
"di-ds-436-2#25": {
  steps: "(1) \\(x = 2\\) gives even; \\(x = 3, y = 2\\) gives 9. Not sufficient.\n(2) \\(x = 1, y = 8\\) gives 9. Not sufficient.\nTogether \\(y\\) is a prime greater than 7, hence odd, so \\(y + 1\\) is even. Yes. Sufficient.\nAnswer: C.",
  take: "\"Prime\" alone allows 2; \"prime and large\" forces odd."
},
"di-ds-436-2#26": {
  steps: "(1) \\(\\{6\\}\\) yes, \\(\\{9\\}\\) no. Not sufficient.\n(2) Same examples. Not sufficient.\nTogether the same two sets satisfy both. Not sufficient.\nAnswer: E.",
  take: "Find one number that dodges both restrictions and is even, and one that is odd."
},
"di-ds-436-2#27": {
  steps: "(1) \\(28x = 560{,}000\\), \\(x = 20{,}000\\), D pays 60,000. Sufficient.\n(2) \\(7x - 4x = 60{,}000\\), \\(x = 20{,}000\\). Sufficient.\nAnswer: D.",
  take: "With one unknown rate, any dollar figure tied to known scene counts is enough."
},
"di-ds-436-2#28": {
  steps: "(1) \\(2k + 1\\) is odd. Yes. Sufficient.\n(2) True for every integer \\(n\\), so it says nothing. Not sufficient.\nAnswer: A.",
  take: "A statement that is always true carries no information."
},
"di-ds-436-2#29": {
  steps: "(1) 7 divides \\(3n\\); since 7 is prime and does not divide 3, it must divide \\(n\\). Yes. Sufficient.\n(2) 7 divides \\(5n\\) and not 5, so it divides \\(n\\). Yes. Sufficient.\nAnswer: D.",
  take: "A prime dividing a product divides one of the factors."
},
"di-ds-436-2#30": {
  steps: "(1) Shortest \\(s\\), longest \\(2s\\), middle \\(27 - 3s\\); any \\(s\\) between 5.4 and 6.75 works. Not sufficient.\n(2) Longest \\(= 27 - 15 = 12\\). Sufficient.\nAnswer: B.",
  take: "A ratio between two pieces leaves the third free; a sum of the other two is direct."
},
"di-ds-436-2#31": {
  steps: "(1) 36 divides \\(n^{2}\\), so 9 divides \\(n^{2}\\) and 3 divides \\(n\\). Yes. Sufficient.\n(2) \\(n^{2}\\) divides 144: \\(n = 2\\) says no, \\(n = 3\\) says yes. Not sufficient.\nAnswer: A.",
  take: "A prime dividing \\(n^{2}\\) divides n; a divisor list must be checked case by case."
},
"di-ds-436-2#32": {
  steps: "(1) \\(2b = 2c\\), so \\(b = c\\). Yes. Sufficient.\n(2) \\(c^{2} = b^{2}\\), and both are positive, so \\(b = c\\). Yes. Sufficient.\nAnswer: D.",
  take: "Positivity lets you take square roots without a sign split."
},
"di-ds-436-2#33": {
  steps: "(1) \\(p = 5, q = 1, n = 3\\) says no; \\(n = -10\\) says yes. Not sufficient.\n(2) Nothing about \\(n\\). Not sufficient.\nTogether \\(q > p\\) makes \\(p - q < 0\\), so \\(n < p - q < 0\\) and both positive integers exceed \\(n\\). Sufficient.\nAnswer: C.",
  take: "A bound on a difference becomes a bound on n once the sign of the difference is known."
},
"di-ds-436-2#34": {
  steps: "(1) or (2) alone: one relation, many products. Not sufficient.\nTogether \\(x + 1 = x^{2} + 1\\) gives \\(x = 0\\) or \\(x = 1\\): \\(xy = 0\\) or \\(2\\). Not sufficient.\nAnswer: E.",
  take: "Two equations can still leave two solutions when one of them is quadratic."
},
"di-ds-436-2#35": {
  steps: "\\(x = -b/a\\), positive exactly when \\(a\\) and \\(b\\) have opposite signs.\n(1) \\((2, 1)\\) gives \\(x < 0\\); \\((2, -1)\\) gives \\(x > 0\\). Not sufficient.\n(2) The same pairs satisfy \\(a - b > 0\\). Not sufficient.\nTogether the same two pairs still fit. Not sufficient.\nAnswer: E.",
  take: "Sum and difference conditions only bound a; the sign of b stays free."
},
"di-ds-436-2#36": {
  steps: "(1) Same sign, could both be negative. Not sufficient.\n(2) \\(5 + (-1)\\) is positive with a negative member. Not sufficient.\nTogether the shared sign must be positive. Yes. Sufficient.\nAnswer: C.",
  take: "Product fixes \"same sign\"; sum then picks which sign."
},
"di-ds-436-2#37": {
  steps: "(1) An increase of 50 on an unknown base. Not sufficient.\n(2) The total's growth says nothing about the full-time part. Not sufficient.\nTogether the 1999 full-time count is still unknown. Not sufficient.\nAnswer: E.",
  take: "Percent change of a subgroup needs that subgroup's starting size."
},
"di-ds-436-2#38": {
  steps: "(1) \\(c\\) even, or \\(d\\) odd. Not sufficient.\n(2) \\(c\\) even, or \\(d\\) even. Not sufficient.\nTogether: if \\(c\\) were odd, (1) needs \\(d\\) odd and (2) needs \\(d\\) even, impossible. So \\(c\\) is even. Sufficient.\nAnswer: C.",
  take: "Two \"or\" conditions can combine into a certainty by contradiction."
},
"di-ds-436-2#39": {
  steps: "(1) Median below 5 means \\(n < 5\\): \\(n = -3\\) says no, \\(n = 2\\) says yes. Not sufficient.\n(2) Median above 1 means \\(n > 1\\): \\(n = 10\\) says no. Not sufficient.\nTogether \\(1 < n < 5\\), inside \\((0, 7)\\). Sufficient.\nAnswer: C.",
  take: "Work out the median as a function of the unknown before reading the statements."
},
"di-ds-436-2#40": {
  steps: "John worked \\(j\\) hours, Larry \\(7 - j\\).\n(1) \\(3j + 4(7 - j) = 25\\), \\(j = 3\\), John made 9 chairs. Sufficient.\n(2) \\(4(7 - j) > 3j\\) gives \\(j < 4\\): 6 or 9 chairs, for instance. Not sufficient.\nAnswer: A.",
  take: "A total plus a fixed hour split is one linear equation in one unknown."
},
"di-ds-436-2#41": {
  steps: "(1) A steep line through \\((2, 0)\\) misses; a nearly flat one through \\((2, 0)\\) hits. Not sufficient.\n(2) Slope alone says nothing about position. Not sufficient.\nTogether: slope \\(-\\tfrac{1}{10}\\) through \\((1.01, 0)\\) passes within 0.1 of the origin (hits); through \\((100, 0)\\) it stays about 10 away (misses). Not sufficient.\nAnswer: E.",
  take: "Intersection depends on the line's distance from the centre; intercept and slope together still leave that free."
},
"di-ds-436-2#42": {
  steps: "(1) A rate without a count. Not sufficient.\n(2) A count without a rate. Not sufficient.\nTogether \\(0.6N = 42\\), \\(N = 70\\). Sufficient.\nAnswer: C.",
  take: "Part = rate × whole; two of the three are needed."
},
"di-ds-436-2#43": {
  steps: "(1) An odd sum means one of \\(x, z\\) is even and the other odd, so at least one is even. Yes. Sufficient.\n(2) An odd difference means the same thing: different parity, so one is even. Yes. Sufficient.\nAnswer: D.",
  take: "x + z and x − z always share parity; an odd one means mixed parity."
},
"di-ds-436-2#44": {
  steps: "(1) 20 families have no car; televisions unknown. Not sufficient.\n(2) The overlap alone. Not sufficient.\nTogether: 10 car owners lack a TV, and the 20 car-less families could own anywhere from 0 to 20 televisions. Not sufficient.\nAnswer: E.",
  take: "Neither = no-car families without TV; the TV count among the car-less is never given."
},
"di-ds-436-2#45": {
  steps: "(1) \\(y\\) could be 2 or 6 (and \\(x/y\\) need not even be in lowest terms). Not sufficient.\n(2) \\(x = 1\\), \\(y\\) free. Not sufficient.\nTogether \\(\\tfrac12\\) and \\(\\tfrac16\\) both fit. Not sufficient.\nAnswer: E.",
  take: "An LCD pins the denominator only up to the divisors it shares."
},
"di-ds-436-2#46": {
  steps: "(1) \\(s = k, p = 5k\\). Not sufficient.\n(2) \\(p - s = 16\\). Not sufficient.\nTogether \\(4k = 16\\), \\(k = 4\\), total 24. Sufficient.\nAnswer: C.",
  take: "Ratio plus difference is the standard pair for two unknowns."
},
"di-ds-436-2#47": {
  steps: "Let \\(d = \\dots a.bc\\dots\\) with \\(c\\) the hundredths digit.\n(1) \\(10d = \\dots ab.c\\dots\\), so its tenths digit is \\(c = 7 > 5\\). Sufficient.\n(2) \\(d/10 = \\dots 0.abc\\dots\\), so its thousandths digit is \\(c = 7\\). Sufficient.\nAnswer: D.",
  take: "Track one named digit through the shift; both statements point at the same digit."
},
"di-ds-436-2#48": {
  steps: "(1) or (2) alone: one equation. Not sufficient.\nTogether adding gives \\(8(x + y) = 128\\), so \\(x + y = 16\\) and \\(2x + 2y = 32\\). Sufficient.\nAnswer: C.",
  take: "Symmetric coefficients add straight to the combination asked for."
},
"di-ds-436-2#49": {
  steps: "(1) Bill 15 gives tip 2 (13%, no); bill 20 gives tip 4 (20%, yes). Not sufficient.\n(2) Tens digit 4, bill 40 to 49; \\(8/49 \\approx 16.3\\% > 15\\%\\). Yes. Sufficient.\nAnswer: B.",
  take: "Check the worst case in the range the statement allows."
},
"di-ds-436-2#50": {
  steps: "Profit \\(= 60{,}000 - t\\).\n(1) \\(1000(k + 60) = 150{,}000\\) gives \\(k = 90\\); \\(t\\) unknown. Not sufficient.\n(2) \\(500k = 45{,}000\\) gives \\(k = 90\\); \\(t\\) unknown. Not sufficient.\nTogether still no \\(t\\). Not sufficient.\nAnswer: E.",
  take: "Simplify the target first; the variable that survives (t) is the one to look for in the statements."
},
"di-ds-436-2#51": {
  steps: "(1) Only addition and multiplication commute, and both are associative. Yes. Sufficient.\n(2) \\(2 + 0 = 2\\) (associative) and \\(2 - 0 = 2\\) (not). Not sufficient.\nAnswer: A.",
  take: "Narrow the operation set with the statement, then test the property on every survivor."
},
"di-ds-436-2#52": {
  steps: "(1) \\(x < 0\\) gives \\(|x| = -x\\), so \\(y = 0\\). Sufficient.\n(2) \\(y \\ge 0\\) always; an integer below 1 that is at least 0 is 0. Sufficient.\nAnswer: D.",
  take: "Know the shape of |x| + x: it is 0 on the left and 2x on the right."
},
"di-ds-436-2#53": {
  steps: "(1) \\(n + 4 \\ge 5\\); the only even prime is 2, so \\(n + 4\\) is odd and \\(n\\) is odd. Sufficient.\n(2) \\(n = 1\\) (4 not prime) is odd; \\(n = 6\\) (9 not prime) is even. Not sufficient.\nAnswer: A.",
  take: "\"Prime and at least 3\" means odd."
},
"di-ds-436-2#54": {
  steps: "(1) Greatest and smallest share a sign, so every integer does and none is 0. All positive gives yes; an odd number of negatives gives no. Not sufficient.\n(2) \\(\\{-1, 2\\}\\) no, \\(\\{1, 2\\}\\) yes. Not sufficient.\nTogether: all positive, or an even number of negatives; either way positive. Sufficient.\nAnswer: C.",
  take: "Sign of a product: count negatives and check for zero; (1) removes zero and mixed signs."
},
"di-ds-436-2#55": {
  steps: "(1) \\(S = 0.9 \\times 6p = 5.4p\\). Not sufficient.\n(2) \\(S = 5p + 20\\). Not sufficient.\nTogether \\(5.4p = 5p + 20\\), \\(p = 50\\), \\(S = 270\\). Sufficient.\nAnswer: C.",
  take: "Each statement links the set price to the single price; two links solve both."
},
"di-ds-436-2#56": {
  steps: "The question asks whether \\(k > 0\\).\n(1) \\(k - 1 > 0\\), so \\(k > 1 > 0\\). Yes. Sufficient.\n(2) \\(k > -1\\): \\(k = -\\tfrac12\\) says no, \\(k = 2\\) says yes. Not sufficient.\nAnswer: A.",
  take: "A reciprocal is positive exactly when its denominator is."
},
"di-ds-436-2#57": {
  steps: "The question asks whether \\(k\\) is composite.\n(1) 25 is composite, 29 is prime. Not sufficient.\n(2) \\(k = 13! + j\\) with \\(2 \\le j \\le 13\\); \\(j\\) divides both terms, so \\(j\\) is a proper factor. Yes. Sufficient.\nAnswer: B.",
  take: "n! + j is a multiple of j for 2 ≤ j ≤ n: a run of guaranteed composites."
},
"di-ds-436-2#58": {
  steps: "\\(n = 13, 38, 63, 88, 113, \\dots\\)\n(1) Four candidates. Not sufficient.\n(2) \\(n \\equiv 3 \\pmod{20}\\): 63, 163, 263, … Not sufficient.\nTogether \\(n = 63\\). Sufficient.\nAnswer: C.",
  take: "Two remainder conditions fix n modulo the LCM (100); a size cap then picks one."
},
"di-ds-436-2#59": {
  steps: "(1) \\(y = 0\\) allows any \\(x\\). Not sufficient.\n(2) \\(0 \\le |x - 3| \\le -y \\le 0\\), so \\(|x - 3| = 0\\) and \\(x = 3\\). Sufficient.\nAnswer: B.",
  take: "|expression| ≤ (something ≤ 0) forces the expression to be zero."
},
"di-ds-436-2#60": {
  steps: "(1) Evenly spaced, so mean = median, but no number. Not sufficient.\n(2) Median 33, spacing unknown. Not sufficient.\nTogether mean = median = 33. Sufficient.\nAnswer: C.",
  take: "For an evenly spaced set the median is the mean; either statement alone lacks half of that."
},
"di-ds-436-2#61": {
  steps: "With the order given, \\(|y - a| = y - a\\) and \\(|y - b| = b - y\\).\n(1) \\(z\\) is closer to \\(a\\) than to \\(b\\); \\(y\\) is even further left, so \\(y\\) is too. Yes. Sufficient.\n(2) \\(y - a < b - z < b - y\\) because \\(z > y\\). Yes. Sufficient.\nAnswer: D.",
  take: "Draw the four points; absolute values drop once the order is known."
},
"di-ds-436-2#62": {
  steps: "Same quadrant means \\(-a, -b\\) share a sign and \\(b, a\\) share a sign: \\(a\\) and \\(b\\) have the same sign. \\((-x, y)\\) is in that quadrant exactly when \\(x\\) and \\(y\\) both have the sign of \\(a\\).\n(1) \\(x, y\\) share a sign, unknown which. Not sufficient.\n(2) \\(x\\) has the sign of \\(a\\); \\(y\\) unknown. Not sufficient.\nTogether both match. Sufficient.\nAnswer: C.",
  take: "Translate quadrant membership into sign conditions on each coordinate."
},
"di-ds-436-2#63": {
  steps: "(1) \\(q = 11\\) gives 6, \\(q = 12\\) gives 5. Not sufficient.\n(2) \\(q \\in \\{2, 4, 8, 16\\}\\); \\(17 = 16 + 1\\) leaves remainder 1 for each. Sufficient.\nAnswer: B.",
  take: "One more than a power of 2 leaves remainder 1 on division by any smaller power of 2."
},
"di-ds-436-2#64": {
  steps: "(1) \\(F = 2.5S\\), ratio \\(5 : 2\\). Sufficient.\n(2) \\(F = S + 1.5\\): \\(S = 1\\) gives \\(5 : 2\\), \\(S = 3\\) gives \\(3 : 2\\). Not sufficient.\nAnswer: A.",
  take: "\"Percent of\" gives the ratio directly; \"more than\" needs an absolute amount to become a ratio."
},
"di-ds-436-2#65": {
  steps: "(1) \\(P = E/3\\), so \\(R = E + E/3 = 4E/3\\) and \\(P/R = \\tfrac14 = 25\\%\\). Sufficient.\n(2) \\(E = \\tfrac34 R\\), so \\(P = \\tfrac14 R\\): 25%. Sufficient.\nAnswer: D.",
  take: "Three quantities linked by one equation: a ratio of any two fixes all ratios."
},
"di-ds-436-2#66": {
  steps: "(1) \\(2d = 3c - 0.10\\). Not sufficient.\n(2) \\(d + c = 0.70\\). Not sufficient.\nTogether \\(d = 0.40, c = 0.30\\) and \\(0.4x + 0.3y = 6\\), i.e. \\(4x + 3y = 60\\): \\((x, y) = (12, 4), (9, 8), (6, 12), (3, 16)\\). Not sufficient.\nAnswer: E.",
  take: "Knowing the prices is not the same as knowing the counts; check the integer solutions."
},
"di-ds-436-2#67": {
  steps: "(1) First nine average 7, so they are 3 to 11 and the eleven are 3 to 13: average 8. Sufficient.\n(2) Last nine average 9, so 5 to 13; the eleven are 3 to 13: average 8. Sufficient.\nAnswer: D.",
  take: "Any sub-run's average locates the whole run."
},
"di-ds-436-2#68": {
  steps: "(1) \\(t = \\tfrac94 = 2.25\\), so the greatest integer below \\(t\\) is 2. Sufficient.\n(2) Squaring removes the sign: \\(t = \\tfrac94 = 2.25\\) again, greatest integer below it 2. Sufficient.\nAnswer: D.",
  take: "A statement that pins t pins any function of t."
},
"di-ds-436-2#69": {
  steps: "(1) Supporters: \\(1350\\) Democrats, \\(2000\\) Republicans; sex unknown. Not sufficient.\n(2) Fractions without counts. Not sufficient.\nTogether \\(450 + 1000 = 1450\\). Sufficient.\nAnswer: C.",
  take: "Layered fractions: each layer needs the count from the layer above."
},
"di-ds-436-2#70": {
  steps: "(1) \\(n\\) odd: \\(n - 1\\) and \\(n + 1\\) are consecutive even numbers, product divisible by 8. Yes. Sufficient.\n(2) \\(n = 2\\): \\(n^{2} + n = 6\\) but \\(n^{3} - n = 6\\) (no); \\(n = 3\\): 12 and 24 (yes). Not sufficient.\nAnswer: A.",
  take: "Factor first; consecutive integers carry guaranteed factors."
},
"di-ds-436-2#71": {
  steps: "(1) or (2) alone leaves the other variable free. Not sufficient.\nTogether \\(x = 1, y = -\\tfrac12\\): \\(\\tfrac{1.5}{0.5} = 3 > 1\\) (yes); \\(x = 1, y = -2\\): \\(\\tfrac{3}{-1} = -3\\) (no). Not sufficient.\nAnswer: E.",
  take: "The sign of x + y matters; opposite-signed x and y do not fix it."
},
"di-ds-436-2#72": {
  steps: "(1) 500 cars, \\(x\\) unknown. Not sufficient.\n(2) \\((E + 60)x = 28{,}000\\), two unknowns. Not sufficient.\nTogether \\(560x = 28{,}000\\), \\(x = 50\\), expected \\(500 \\times 50 = 25{,}000\\). Sufficient.\nAnswer: C.",
  take: "\"More than expected\" statements need the expected count to become an equation in x."
},
"di-ds-436-2#73": {
  steps: "(1) A larger share of a possibly smaller total. Not sufficient.\n(2) A larger total, possibly all bonds. Not sufficient.\nTogether stock shares = ratio × total, and both increased. Yes. Sufficient.\nAnswer: C.",
  take: "A product of two increasing positive quantities increases."
},
"di-ds-436-2#74": {
  steps: "(1) \\(y - z = -x\\); \\(|x| = -x\\) holds only for \\(x \\le 0\\), unknown. Not sufficient.\n(2) \\(y, z\\) unknown. Not sufficient.\nTogether \\(x < 0\\) gives \\(|x| = -x = y - z\\). Yes. Sufficient.\nAnswer: C.",
  take: "Rewrite the target with the statement's equation; the remaining condition is a sign."
},
"di-ds-436-2#75": {
  steps: "(1) \\(x < 0\\): even \\(n\\) gives \\(x^{n} > 0\\) (no), odd \\(n\\) gives yes. Not sufficient.\n(2) \\(n\\) odd: sign of \\(x\\) unknown. Not sufficient.\nTogether \\(x^{n} < 0\\), so \\(-3x^{n} > 0\\). Sufficient.\nAnswer: C.",
  take: "A power is negative only for a negative base and an odd exponent."
},
"di-ds-436-2#76": {
  steps: "Squares: 4, 9, 16, 25, 36, 49, 64, 81.\n(1) Even: 4, 16, 36, 64. Not sufficient.\n(2) Also a perfect cube: only 64 (a sixth power). Sufficient.\nAnswer: B.",
  take: "Square and cube together means a sixth power; 64 is the only one in range."
},
"di-ds-436-2#77": {
  steps: "\\(\\gcd(x, y) = \\gcd(8y + 12, y) = \\gcd(12, y)\\).\n(1) \\(y = 3\\) gives \\(x = 36\\), GCD 3; \\(y = 6\\) gives \\(x = 60\\), GCD 6. Not sufficient.\n(2) \\(y\\) is a multiple of 12, so \\(\\gcd(12, y) = 12\\). Sufficient.\nAnswer: B.",
  take: "Euclid: gcd(ay + b, y) = gcd(b, y)."
},
"di-ds-436-2#78": {
  steps: "(1) \\(8r + 6d = 500\\). Not sufficient.\n(2) \\(16r + 12d = 1000\\), the same equation. Not sufficient.\nTogether nothing new. Not sufficient.\nAnswer: E.",
  take: "Proportional equations are one equation."
},
"di-ds-436-2#79": {
  steps: "(1) Same sign, unknown which. Not sufficient.\n(2) \\(x = -1, y = 5\\) says no. Not sufficient.\nTogether the common sign must be positive. Yes. Sufficient.\nAnswer: C.",
  take: "Product fixes agreement of signs; sum picks the sign."
},
"di-ds-436-2#80": {
  steps: "(1) The second half's speed is unknown. Not sufficient.\n(2) \\(\\dfrac{400}{v} - \\dfrac{400}{v + 20} = 1\\) gives \\(v^{2} + 20v - 8000 = 0\\), \\(v = 80\\), time 5 hours. Sufficient.\nAnswer: B.",
  take: "A \"would have taken one hour less\" clause is a complete equation in the speed."
},
"di-ds-436-2#81": {
  steps: "(1) Many mixes reach 9,500. Not sufficient.\n(2) Ten offices, the rest unknown. Not sufficient.\nTogether 6,000 square feet remain: 20 offices of 300 or 30 of 200 (or mixes). Not sufficient.\nAnswer: E.",
  take: "An area total does not fix a count when sizes differ."
},
"di-ds-436-2#82": {
  steps: "(1) 6 says no, 12 says yes. Not sufficient.\n(2) 4 says no, 12 says yes. Not sufficient.\nTogether \\(n\\) is a multiple of \\(\\text{lcm}(6, 4) = 12\\). Yes. Sufficient.\nAnswer: C.",
  take: "Divisible by both a and b means divisible by their LCM, not their product."
},
"di-ds-436-2#83": {
  steps: "(1) Girls unknown. Not sufficient.\n(2) Boys unknown. Not sufficient.\nTogether: boys half the group gives \\(35\\% + 30\\% = 65\\%\\) (yes); boys a tenth gives \\(7\\% + 30\\% = 37\\%\\) (no). Not sufficient.\nAnswer: E.",
  take: "A percent of a subgroup and a percent of the whole cannot be added without the subgroup's size."
},
"di-ds-436-2#84": {
  steps: "(1) 20 says no, 60 says yes. Not sufficient.\n(2) \\(n\\) is a multiple of 3: 3 says no, 15 says yes. Not sufficient.\nTogether multiples of 5 and 3, hence of 15. Sufficient.\nAnswer: C.",
  take: "Split 15 into 3 and 5 and collect one from each statement."
},
"di-ds-436-2#85": {
  steps: "Factor the numerator: \\(\\dfrac{a(x + y)}{x + y} = a\\), because \\(x + y \\ne 0\\) lets the common factor cancel.\n(1) \\(x\\) and \\(y\\) are irrelevant and \\(a\\) is unknown. Not sufficient.\n(2) \\(a = 6\\), so the expression is 6. Sufficient.\nAnswer: B.",
  take: "Simplify the expression before judging which variables matter."
},
"di-ds-436-2#86": {
  steps: "(1) \\(\\dfrac{p}{3r} = \\dfrac59\\), so \\(\\dfrac{p}{r} = \\dfrac{15}{9} = \\dfrac53\\). Sufficient.\n(2) A sum gives no ratio. Not sufficient.\nAnswer: A.",
  take: "A ratio to a multiple of r is still a ratio to r."
},
"di-ds-436-2#87": {
  steps: "(1) \\(a^{2} + b^{2}\\) still unknown. Not sufficient.\n(2) One equation. Not sufficient.\nTogether \\((a - b)(a + b) = 16\\) gives \\(a - b = 2\\), so \\(a = 5, b = 3\\) and \\(a^{4} - b^{4} = 625 - 81 = 544\\). Sufficient.\nAnswer: C.",
  take: "Difference of squares twice; the two statements pin a and b."
},
"di-ds-436-2#88": {
  steps: "(1) Nothing about \\((u, v)\\). Not sufficient.\n(2) \\(u^{2} + v^{2} = r^{2} + s^{2} + 2 - 2(r + s)\\); equal exactly when \\(r + s = 1\\), unknown. Not sufficient.\nTogether \\(r + s = 1\\) makes the distances equal. Yes. Sufficient.\nAnswer: C.",
  take: "Equidistant from the origin means equal sums of squares; expand and compare."
},
"di-ds-436-2#89": {
  steps: "(1) or (2) alone describes one set only. Not sufficient.\nTogether \\(X = \\{1, 3, 5, 7, 9\\}\\) against \\(Y = \\{10, 12, 14\\}\\) says no; \\(X = \\{11, \\dots, 19\\}\\) says yes. Not sufficient.\nAnswer: E.",
  take: "Upper bounds on both sets do not order their maxima."
},
"di-ds-436-2#90": {
  steps: "(1) 32% lies outside, split evenly by symmetry: 16% above \\(m + d\\). Sufficient.\n(2) The lower tail is 16%, so the upper tail is 16%. Sufficient.\nAnswer: D.",
  take: "Symmetric distribution: one tail, or the central band, determines the other tail."
},
"di-ds-436-2#91": {
  steps: "\\(x = 2\\) or \\(x = -6\\).\n(1) \\(x^{2} \\ne 4\\) rules out 2: \\(x = -6\\). Sufficient.\n(2) \\(x^{2} = 36\\) rules out 2: \\(x = -6\\). Sufficient.\nAnswer: D.",
  take: "Solve the stem's absolute value first; then each statement only has to pick between two values."
},
"di-ds-436-2#92": {
  steps: "(1) \\(vw - v^{2} = v(w - v) = 0\\); since \\(w \\ne v\\), \\(v = 0\\). Yes. Sufficient.\n(2) \\(v\\) could be 0 or 5. Not sufficient.\nAnswer: A.",
  take: "Do not divide by v; factor and use the \"different\" condition."
},
"di-ds-436-2#93": {
  steps: "The left side is \\(|5 - x|\\), equal to \\(5 - x\\) exactly when \\(x \\le 5\\).\n(1) \\(-x|x| > 0\\) forces \\(x < 0\\), so \\(x \\le 5\\). Yes. Sufficient.\n(2) \\(x < 5\\). Yes. Sufficient.\nAnswer: D.",
  take: "The square root of a square is an absolute value; the question is a sign question."
},
"di-ds-436-2#94": {
  steps: "(1) or (2) alone: no value. Not sufficient.\nTogether the three smallest are below 10 and the other four above, so the median (4th) is some number above 10: 11 or 50. Not sufficient.\nAnswer: E.",
  take: "Knowing which side of 10 the median lies on is not knowing the median."
},
"di-ds-436-2#95": {
  steps: "(1) or (2) alone: the other variable is free. Not sufficient.\nTogether \\(x + y < \\tfrac89 + \\tfrac18 = \\tfrac{73}{72}\\), which exceeds 1, so \\(x = 0.88, y = 0.12\\) gives a sum of exactly 1 (no) while small values give yes. Not sufficient.\nAnswer: E.",
  take: "Add the bounds; if the combined bound passes the target, both answers survive."
},
"di-ds-436-2#96": {
  steps: "(1) The new home's price is unknown. Not sufficient.\n(2) A ratio, no amount. Not sufficient.\nTogether \\(0.005(169{,}500 + 203{,}400) = 1{,}864.50\\). Sufficient.\nAnswer: C.",
  take: "Identify every payment the person makes, then check which statements price each one."
},
"di-ds-436-2#97": {
  steps: "(1) No activity given. Not sufficient.\n(2) Starting balance and deposits unknown. Not sufficient.\nTogether: withdrawing 2,000 from 1,500 with no deposits drops below 1,000 (yes); depositing 5,000 first keeps it above (no). Not sufficient.\nAnswer: E.",
  take: "\"At any time during the month\" depends on the order of deposits and withdrawals."
},
"di-ds-436-2#98": {
  steps: "(1) A rate only. Not sufficient.\n(2) An amount only. Not sufficient.\nTogether \\(0.15F = 6\\), \\(F = 40\\). Sufficient.\nAnswer: C.",
  take: "Percent and amount of the same tip together give the base."
},
"di-ds-436-2#99": {
  steps: "(1) Many numbers. Not sufficient.\n(2) Many numbers. Not sufficient.\nTogether 127, 136, 145, 235 all qualify. Not sufficient.\nAnswer: E.",
  take: "Enumerate; a digit-sum plus an ordering still leaves several candidates."
},
"di-ds-436-2#100": {
  steps: "The question is whether \\(a > 0\\).\n(1) \\(a \\ne 0\\), sign unknown. Not sufficient.\n(2) \\(a = \\pm\\sqrt{13 - b}\\). Not sufficient.\nTogether \\(a = 3, b = 4\\) (yes) and \\(a = -3, b = 4\\) (no). Not sufficient.\nAnswer: E.",
  take: "Statements built on \\(a^{2}\\) never reveal the sign of a."
},
"di-ds-436-2#101": {
  steps: "(1) Equal interest, but X's rate is unknown. Not sufficient.\n(2) X's rate only. Not sufficient.\nTogether \\(0.07Y = 0.05(24{,}000 - Y)\\), \\(0.12Y = 1{,}200\\), \\(Y = 10{,}000\\). Sufficient.\nAnswer: C.",
  take: "\"Same interest\" is an equation only once both rates are known."
},
"di-ds-436-2#102": {
  steps: "(1) The left side is \\(-2\\) and \\(x^{2} \\ge 0\\). Yes. Sufficient.\n(2) \\(x > 2\\) gives \\(x^{2} > 2x\\), and \\(y > 0\\) gives \\(2x - 3y < 2x\\). Yes. Sufficient.\nAnswer: D.",
  take: "Bound each side separately; a chain of inequalities often settles a yes/no question."
},
"di-ds-436-2#103": {
  steps: "\\(xy = 6\\), so \\(x = 6/y\\).\n(1) \\(y \\ge 3\\) gives \\(x \\le 2 < y\\). Yes. Sufficient.\n(2) \\(y = 1\\) gives \\(x = 6\\) (no); \\(y = 3\\) gives \\(x = 2\\) (yes). Not sufficient.\nAnswer: A.",
  take: "Cross-multiply the stem, then express the compared variable in terms of the bounded one."
},
"di-ds-436-2#104": {
  steps: "(1) Six pencils in any mix. Not sufficient.\n(2) \\(23x + 21y = 130\\): \\(x = 2\\) gives \\(21y = 84\\), \\(y = 4\\); no other \\(x\\) from 0 to 5 leaves a multiple of 21. Sufficient.\nAnswer: B.",
  take: "Enumerate small integer solutions before dismissing a single equation."
},
"di-ds-436-2#105": {
  steps: "(1) \\(y < 3.5x\\): \\(y\\) can be negative. Not sufficient.\n(2) \\(y > -x\\): \\(y = -1, x = 2\\) fits. Not sufficient.\nTogether \\(x = 2, y = -1\\) (no) and \\(x = 2, y = 1\\) (yes) both fit. Not sufficient.\nAnswer: E.",
  take: "Bounds that leave a window around zero for y cannot decide its sign."
},
"di-ds-436-2#106": {
  steps: "\\(m + n = mn + 1\\) is the same as \\((m - 1)(n - 1) = 0\\): one of them is 1.\n(1) \\(m = 1\\). Yes. Sufficient.\n(2) A prime factors only as \\(1 \\times k\\), so one of \\(m, n\\) is 1. Yes. Sufficient.\nAnswer: D.",
  take: "Rearrange the question into a factored form before reading the statements."
},
"di-ds-436-2#107": {
  steps: "(1) X is not in the top 4; it could be 5th or 50th. Not sufficient.\n(2) 4.8% could be 6th or outside. Not sufficient.\nTogether the 5th and 6th paid \\(67.8 - 56 = 11.8\\%\\). X as 6th with the 5th at 7% works; X as 7th with 5th and 6th at 6% and 5.8% also works. Not sufficient.\nAnswer: E.",
  take: "Construct both rankings explicitly; a share of the total does not fix a rank."
},
"di-ds-436-2#108": {
  steps: "\\(x = y(-2 - z)\\).\n(1) \\(z = -3\\) gives \\(x = y\\), either sign. Not sufficient.\n(2) \\(y > 0\\): \\(z = -3\\) gives \\(x > 0\\), \\(z = 0\\) gives \\(x < 0\\). Not sufficient.\nTogether \\(z = -3, y = 1\\) says yes; \\(z = -1, y = 1\\) says no. Not sufficient.\nAnswer: E.",
  take: "\"Negative\" is not a magnitude; −2 − z changes sign at z = −2."
},
"di-ds-436-2#109": {
  steps: "In each list the two remaining integers sum to 80.\n(1) \\(S = \\{25, 30, 40, 50, 55\\}\\); \\(T\\) could be \\(\\{30, 40, 40, 40, 50\\}\\) (smaller spread) or \\(\\{10, 30, 40, 50, 70\\}\\) (larger). Not sufficient.\n(2) \\(T = \\{30, 35, 40, 45, 50\\}\\); \\(S\\) unknown. Not sufficient.\nTogether \\(S\\) has deviations 15, 10, 0, 10, 15 and \\(T\\) has 10, 5, 0, 5, 10: \\(S\\) is more spread. Yes. Sufficient.\nAnswer: C.",
  take: "Same mean: compare spreads by the deviations, no formula needed."
},
"di-ds-436-2#110": {
  steps: "Distance \\(= |3x - 2x| = |x|\\).\n(1) \\(|x - (-x)| = 2|x| = 16\\), so \\(|x| = 8\\). Sufficient.\n(2) \\(|3x - x| = 2|x| = 16\\), \\(|x| = 8\\). Sufficient.\nAnswer: D.",
  take: "Distances are absolute values; the sign of x never matters here."
},
"di-ds-436-2#111": {
  steps: "(1) \\(n = k^{3} + 3k^{2} + 3k + 1\\) leaves remainder 1 (since \\(k > 1\\)). Sufficient.\n(2) \\(n\\) unknown. Not sufficient.\nAnswer: A.",
  take: "(k + 1) to any power is 1 more than a multiple of k."
},
"di-ds-436-2#112": {
  steps: "(1) \\(x = 3\\) yes, \\(x = -3\\) no. Not sufficient.\n(2) Wide open. Not sufficient.\nTogether both \\(\\pm 3\\) are below 10. Not sufficient.\nAnswer: E.",
  take: "Never forget the negative root of a squared equation."
},
"di-ds-436-2#113": {
  steps: "(1) \\(\\tfrac14 R = 25{,}000\\), so 75,000 voted; the winner's share is unknown. Not sufficient.\n(2) A percentage without a count. Not sufficient.\nTogether \\(0.55 \\times 75{,}000 = 41{,}250\\). Sufficient.\nAnswer: C.",
  take: "The complement count gives the total; the percentage then gives the part."
},
"di-ds-436-2#114": {
  steps: "(1) Greatest 20 means 15 to 20: \\(n = 300\\). Sufficient.\n(2) Mean 17.5 is the midpoint of 15 to 20: \\(n = 300\\). Sufficient.\nAnswer: D.",
  take: "For consecutive integers, one anchor (an endpoint or the mean) fixes the whole run."
},
"di-ds-436-2#115": {
  steps: "(1) 19 vs 21 says no, 29 vs 21 says yes. Not sufficient.\n(2) A larger tens digit means a larger number whatever the units digits. Yes. Sufficient.\nAnswer: B.",
  take: "Compare place values from the left; the first difference decides."
},
"di-ds-436-2#116": {
  steps: "(1) \\(n\\) odd: \\(n^{2} - 1\\) is a multiple of 8; \\(n = 3\\) gives 8, \\(n = 5\\) gives 0. Not sufficient.\n(2) \\(n = 2\\) gives 3, \\(n = 5\\) gives 0. Not sufficient.\nTogether \\(n^{2} - 1\\) is a multiple of 24: \\(r = 0\\). Sufficient.\nAnswer: C.",
  take: "\\(n^{2} - 1\\) is divisible by 24 for every n coprime to 6."
},
"di-ds-436-2#117": {
  steps: "(1) \\(n \\equiv 2 \\pmod{15}\\); \\(t\\) is 3, 8 or 13 mod 15, giving products 6, 1, 11. Not sufficient.\n(2) \\(t \\equiv 3 \\pmod{15}\\); \\(n\\) is 2, 5 or 8 mod 15, giving 6, 0, 9. Not sufficient.\nTogether \\(nt \\equiv 2 \\times 3 = 6\\). Sufficient.\nAnswer: C.",
  take: "A remainder mod 15 needs remainders mod 3 and mod 5 for each factor."
},
"di-ds-436-2#118": {
  steps: "(1) 180 four-person units, occupancy unknown. Not sufficient.\n(2) 80% full, count unknown. Not sufficient.\nTogether \\(0.8 \\times 180 \\times 4 = 576\\). Sufficient.\nAnswer: C.",
  take: "Count × occupancy rate × capacity; each statement supplies one missing factor."
},
"di-ds-436-2#119": {
  steps: "(1) \\(2 + k = 3\\) gives \\(k = 1\\); \\(2k = 3\\) is impossible for an integer. So \\(3 + 1 = 4\\). Sufficient.\n(2) Addition gives \\(k = 1\\), \\(3 + 1 = 4\\); multiplication gives \\(k = 0\\), \\(3 \\times 0 = 0\\). Not sufficient.\nAnswer: A.",
  take: "Use the integer restriction to eliminate an operation."
},
"di-ds-436-2#120": {
  steps: "(1) Different parity, so one is even and the product is even. Sufficient.\n(2) \\(r = 3, t = 1\\) gives an odd quotient and odd product; \\(r = 6, t = 2\\) gives quotient 3 and even product. Not sufficient.\nAnswer: A.",
  take: "Parity of a quotient does not transfer to the numbers themselves."
},
"di-ds-436-2#121": {
  steps: "(1) The overall rate equals the male rate, so the female rate is also \\(\\tfrac25\\); no count. Not sufficient.\n(2) 200 female business majors, rate unknown. Not sufficient.\nTogether \\(\\tfrac25 F = 200\\), \\(F = 500\\). Sufficient.\nAnswer: C.",
  take: "A weighted average equal to one group's rate forces the other group to the same rate."
},
"di-ds-436-2#122": {
  steps: "The question is whether \\(2y < x + z\\).\n(1) \\(2y < x + z\\) directly. Yes. Sufficient.\n(2) \\(2z - 2y > z - x\\) gives \\(z + x > 2y\\). Yes. Sufficient.\nAnswer: D.",
  take: "Clear fractions and collect terms; a statement may be the question in disguise."
},
"di-ds-436-2#123": {
  steps: "(1) \\(t \\equiv 6\\): \\((t + 2)(t + 3) \\equiv 1 \\times 2 = 2\\). Sufficient.\n(2) \\(t^{2} \\equiv 1\\) allows \\(t \\equiv 1\\) (giving \\(3 \\times 4 = 12 \\equiv 5\\)) or \\(t \\equiv 6\\) (giving 2). Not sufficient.\nAnswer: A.",
  take: "A remainder for \\(t^{2}\\) leaves two residues for t; check both."
},
"di-ds-436-2#124": {
  steps: "(1) \\(20 - 10 = 10\\) odd. Sufficient.\n(2) The other 10 could be odd, or even non-multiples of 4. Not sufficient.\nAnswer: A.",
  take: "\"Multiple of 4\" is a subset of even; the complement is not \"odd\"."
},
"di-ds-436-2#125": {
  steps: "(1) \\(w = -5, x = 1, y = -2\\) says no; \\(w = 1, x = -2, y = -3\\) says yes. Not sufficient.\n(2) \\(y < w\\), so \\(w - y > 0\\). Yes. Sufficient.\nAnswer: B.",
  take: "A chain of inequalities answers any comparison between its members."
},
"di-ds-436-2#126": {
  steps: "(1) or (2) alone: one club only. Not sufficient.\nTogether: with no overlap, \\(25/36\\); if the 10 male musicians are all also in drama, the combined club has 26 members, 15 male. Not sufficient.\nAnswer: E.",
  take: "\"Combined\" groups can overlap; without the overlap the union's size is unknown."
},
"di-ds-436-2#127": {
  steps: "(1) Mean \\(= \\tfrac13(74.5) + \\tfrac23(70) = 71.5\\) inches, i.e. 5 feet \\(11\\tfrac12\\) inches. Sufficient.\n(2) A sum without \\(n\\). Not sufficient.\nAnswer: A.",
  take: "Group fractions are enough for a weighted mean; a total is not enough without the count."
},
"di-ds-436-2#128": {
  steps: "(1) \\(n\\) unknown. Not sufficient.\n(2) \\(m = n^{2} - n + 5 = n(n - 1) + 5\\); \\(n(n - 1)\\) is even, so \\(m\\) is odd. Yes. Sufficient.\nAnswer: B.",
  take: "n(n − 1) is a product of consecutive integers, hence even."
},
"di-ds-436-2#129": {
  steps: "(1) \\(P + Q + R + S = 1{,}553{,}000\\). Not sufficient.\n(2) \\(Q + R + S + T = 1{,}532{,}000\\). Not sufficient.\nTogether \\(P - T = 21{,}000\\). Sufficient.\nAnswer: C.",
  take: "Overlapping averages: their difference isolates the non-shared terms."
},
"di-ds-436-2#130": {
  steps: "The mean is \\((24 + x)/5\\); the median is 3, \\(x\\) or 8 depending on where \\(x\\) falls.\n(1) \\(x = 7\\): median 7, mean 6.2 (yes); \\(x = 20\\): median 8, mean 8.8 (no). Not sufficient.\n(2) \\(x > 8\\): \\(x = 9\\) yes, \\(x = 20\\) no. Not sufficient.\nTogether the same pair. Not sufficient.\nAnswer: E.",
  take: "A large x drags the mean past the median; test a moderate and an extreme value."
},
"di-ds-436-2#131": {
  steps: "(1) \\(x = y = 10\\) says no, \\(x = 10, y = 40\\) says yes. Not sufficient.\n(2) \\(x = 4, y = 25\\) says no, \\(x = 20, y = 100\\) says yes. Not sufficient.\nTogether \\(xy = 10 \\times 100 = 1{,}000 = 8 \\times 125\\). Yes. Sufficient.\nAnswer: C.",
  take: "GCD times LCM is the product; that settles any divisibility question about xy."
},
"di-ds-436-2#132": {
  steps: "The equation holds exactly when \\(x\\) lies between 0 and \\(z\\). Dividing the stem by \\(y\\): if \\(y > 0\\) then \\(z < x < 0\\); if \\(y < 0\\) then \\(z > x > 0\\). Either way \\(x\\) is between 0 and \\(z\\), so the answer is yes before any statement is used.\n(1) Sufficient. (2) Sufficient.\nAnswer: D.",
  take: "When the stem alone answers the question, every statement is sufficient: D, not E."
},
"di-ds-436-2#133": {
  steps: "J wraps 30 per minute.\n(1) K is slower than 12 per minute; no exact rate. Not sufficient.\n(2) Together 40 per minute, so K wraps 10 per minute and needs 12 minutes for 120. Sufficient.\nAnswer: B.",
  take: "Rates add; a combined time plus one rate gives the other rate."
},
"di-ds-436-2#134": {
  steps: "1995 output \\(= 1000\\left(1 + \\tfrac{x}{100}\\right)\\left(1 + \\tfrac{y}{100}\\right) = 1000 + 10\\left(x + y + \\tfrac{xy}{100}\\right)\\).\n(1) \\(xy = 20\\) leaves \\(x + y\\) open. Not sufficient.\n(2) The bracket is 9.2, so \\(1{,}092\\). Sufficient.\nAnswer: B.",
  take: "Successive percent changes combine as x + y + xy/100."
},
"di-ds-436-2#135": {
  steps: "(1) or (2) alone leaves two groups unknown. Not sufficient.\nTogether 6 used both: \\(12 + 10 = 22\\) of 40 tickets, 55%. Sufficient.\nAnswer: C.",
  take: "With a fixed total, knowing two of three categories fixes the third."
},
"di-ds-436-2#136": {
  steps: "(1) \\(s + 2d = 3.15\\). Not sufficient.\n(2) \\(3s + d = 5.70\\). Not sufficient.\nTogether \\(s = 1.65\\), \\(d = 0.75\\). Sufficient.\nAnswer: C.",
  take: "Check the equations are not multiples of each other; then two unknowns need both."
},
"di-ds-436-2#137": {
  steps: "(1) \\(250 \\le K \\le 349\\): hundreds digit 2 or 3. Not sufficient.\n(2) \\(K\\) ends in 45 to 54; hundreds digit free. Not sufficient.\nTogether 250 to 254 (2) or 345 to 349 (3). Not sufficient.\nAnswer: E.",
  take: "Adding a constant can carry into the hundreds; translate each statement into a range of K."
},
"di-ds-436-2#138": {
  steps: "(1) Vertical gap only. Not sufficient.\n(2) Horizontal gap only. Not sufficient.\nTogether \\(\\sqrt{3^{2} + 4^{2}} = 5\\). Sufficient.\nAnswer: C.",
  take: "Distance is the square root of the sum of the squared horizontal and vertical gaps; each statement gives one gap."
},
"di-ds-436-2#139": {
  steps: "(1) \\(a < b\\) and \\(b < c\\). Yes. Sufficient.\n(2) \\(b = c - 5\\) and \\(a = c - 8\\), so \\(a < b < c\\). Yes. Sufficient.\nAnswer: D.",
  take: "Translate each \"greater than by\" into an ordering."
},
"di-ds-436-2#140": {
  steps: "(1) \\(5s < 2h\\) is an inequality with no amounts. Not sufficient.\n(2) \\(9h + 6s = 21\\) is three times the target combination: \\(3h + 2s = 7\\). Sufficient.\nAnswer: B.",
  take: "Look for the target combination as a multiple of a given one."
},
"di-ds-436-2#141": {
  steps: "(1) No amounts. Not sufficient.\n(2) \\(20c + 3p = 150\\): \\((c, p) = (6, 10), (3, 30), (0, 50)\\). Not sufficient.\nTogether all three have more than three printers. Not sufficient.\nAnswer: E.",
  take: "List the integer solutions; a weak lower bound may not remove any."
},
"di-ds-436-2#142": {
  steps: "(1) \\(6 > 15 + k\\) depends on \\(k\\). Not sufficient.\n(2) \\(6 > 3n - 10\\) depends on \\(n\\). Not sufficient.\nTogether \\(6 > 5\\). Yes. Sufficient.\nAnswer: C.",
  take: "Substitute the stem's numbers first; two unknowns remain."
},
"di-ds-436-2#143": {
  steps: "Subtract \\(c\\) from both sides: the question asks whether \\(x = y\\).\n(1) \\(x = y\\). Yes. Sufficient.\n(2) \\(x = c\\) says nothing about \\(y\\): \\(y = c\\) gives yes, \\(y = c + 1\\) gives no. Not sufficient.\nAnswer: A.",
  take: "Cancel identical terms from both sides before reading the statements."
},
"di-ds-436-2#144": {
  steps: "(1) \\(\\tfrac23 \\times 6 = 4\\), so \\(n = 7\\) (or \\(-1\\), excluded). Sufficient.\n(2) \\(-3 + 10 = 7\\). Sufficient.\nAnswer: D.",
  take: "Use the stem's range to discard the extra solution of a distance statement."
},
"di-ds-436-2#145": {
  steps: "(1) The least possible set is 10, 20, 30, 40, 50 with mean exactly 30; any other set is larger. Yes. Sufficient.\n(2) Mean \\(= 160 / 5 = 32\\). Yes. Sufficient.\nAnswer: D.",
  take: "\"Different\" plus \"multiples of 10\" gives a hard floor; compute the minimum case."
},
"di-ds-436-2#146": {
  steps: "The question is whether \\(r > w\\).\n(1) \\(r(b + r) > w(b + w)\\) gives \\((r - w)(r + w + b) > 0\\), and the second factor is positive, so \\(r > w\\). Yes. Sufficient.\n(2) \\(b\\) large with \\(r = 1, w = 2\\) or \\(r = 2, w = 1\\). Not sufficient.\nAnswer: A.",
  take: "Cross-multiplying positive quantities and factoring turns a ratio comparison into a sign."
},
"di-ds-436-2#147": {
  steps: "(1) \\(\\dfrac{x}{50} + \\dfrac{530 - x}{60} = 10\\) gives \\(6x + 2650 - 5x = 3000\\), \\(x = 350\\), time 7 hours. Sufficient.\n(2) A difference of times with the total distance unknown. Not sufficient.\nAnswer: A.",
  take: "Total time and total distance give one equation in x; a time difference alone has two unknowns."
},
"di-ds-436-2#148": {
  steps: "(1) \\(30 + 60 = 90\\). Sufficient.\n(2) \\(\\dfrac{30 + 20n}{n} = 30\\) gives \\(30 = 10n\\), \\(n = 3\\), charge 90. Sufficient.\nAnswer: D.",
  take: "An average per outlet is an equation in the outlet count."
},
"di-ds-436-2#149": {
  steps: "\\(450 < x < 550\\) and \\(350 < y < 450\\), so \\(800 < x + y < 1000\\).\n(1) or (2) alone: still a wide range. Not sufficient.\nTogether \\(800 < x + y < 900\\): 810 is closest to 800, 880 to 900. Not sufficient.\nAnswer: E.",
  take: "Rounding errors add; the sum's nearest hundred is not the sum of the nearest hundreds."
},
"di-ds-436-2#150": {
  steps: "(1) Both of the two greatest exceed the median 70, so their average exceeds 70. Sufficient.\n(2) Sum 350. If the two greatest averaged 70 or less, the largest would be at most 70, and five different integers at most 70 sum to at most \\(70 + 69 + 68 + 67 + 66 = 340 < 350\\). So yes. Sufficient.\nAnswer: D.",
  take: "Assume the opposite and push every value to its extreme; a sum contradiction settles it."
},
"di-ds-436-2#151": {
  steps: "Profit \\(= 20(p - c)\\).\n(1) \\(20(2p - c) = 2400\\), one equation in two unknowns. Not sufficient.\n(2) \\(20(p + 2 - c) = 440\\) gives \\(20(p - c) = 400\\). Sufficient.\nAnswer: B.",
  take: "A fixed change per unit shifts profit by a known amount; a proportional change does not."
},
"di-ds-436-2#152": {
  steps: "(1) Beth's salary is unknown. Not sufficient.\n(2) Jim earned less than Beth, so the same percent gives Beth more dollars. Yes. Sufficient.\nAnswer: B.",
  take: "Equal percent increases compare like the bases."
},
"di-ds-436-2#153": {
  steps: "(1) Beginning \\(12k\\), new \\(k\\), end \\(13k\\): ratio \\(13 : 12\\). Sufficient.\n(2) No information about new clients. Not sufficient.\nAnswer: A.",
  take: "A ratio between the parts gives the ratio of whole to part."
},
"di-ds-436-2#154": {
  steps: "For slope \\(s\\) through \\((4, 3)\\): \\(y\\)-intercept \\(3 - 4s\\), \\(x\\)-intercept \\(\\dfrac{4s - 3}{s}\\).\n(1) Slopes \\(1, 2\\) give positive product; \\(1, -1\\)? \\(x\\)-intercepts 1 and 7, product positive, slope product negative. Not sufficient.\n(2) One slope above \\(\\tfrac34\\), one below; signs still open. Not sufficient.\nTogether: by (2) \\((4s_1 - 3)(4s_2 - 3) < 0\\); the product of \\(x\\)-intercepts is that negative number divided by \\(s_1 s_2\\), and it is positive, so \\(s_1 s_2 < 0\\). Yes. Sufficient.\nAnswer: C.",
  take: "Write both intercepts in terms of the slope; the sign conditions then combine algebraically."
},
"di-ds-436-2#155": {
  steps: "(1) \\(n\\) odd: \\(n - 1\\) and \\(n + 1\\) are consecutive evens, one a multiple of 4, so the product is a multiple of 8: \\(r = 0\\). Sufficient.\n(2) \\(n = 2\\) gives 3, \\(n = 3\\) gives 0. Not sufficient.\nAnswer: A.",
  take: "Odd squares are 1 mod 8."
},
"di-ds-436-2#156": {
  steps: "(1) A ratio without a count. Not sufficient.\n(2) \\(0.3M = 240\\) and \\(0.4W = 280\\) give 800 men and 700 women, total 1,500. Sufficient.\nAnswer: B.",
  take: "A count and its percentage give the whole for each group separately."
},
"di-ds-436-2#157": {
  steps: "(1) \\(mv < pv\\) means \\((m - p)v < 0\\); with \\(m - p < 0\\), \\(v > 0\\). Sufficient.\n(2) \\(mv < 0\\) with \\(m < 0\\) forces \\(v > 0\\). Sufficient.\nAnswer: D.",
  take: "A product's sign plus one factor's sign gives the other factor's sign."
},
"di-ds-436-2#158": {
  steps: "(1) The midpoint of \\(x\\) and \\(y\\) is \\(\\dfrac{x + y}{2} = 6\\), so \\(x + y = 12\\). Sufficient.\n(2) \\(x + y = 3x\\), which depends on \\(x\\). Not sufficient.\nAnswer: A.",
  take: "\"Halfway between\" is the midpoint formula, which is a sum."
},
"di-ds-436-2#159": {
  steps: "\\(m = p^{a}t^{b}\\) with \\(a, b \\ge 1\\); the question is whether \\(a \\ge 2\\).\n(1) \\((a + 1)(b + 1) > 9\\): \\(a = 1, b = 4\\) (no) or \\(a = 4, b = 1\\) (yes). Not sufficient.\n(2) \\(a \\ge 3\\), so \\(a \\ge 2\\). Yes. Sufficient.\nAnswer: B.",
  take: "A factor count bounds the exponents jointly, not one at a time."
},
"di-ds-436-2#160": {
  steps: "(1) Says nothing about \\(Y\\). Not sufficient.\n(2) Says nothing about where \\(X\\) is. Not sufficient.\nTogether \\(PY \\ge XY - PX = 4.5 > 4\\), so \\(Y\\) is outside. Sufficient.\nAnswer: C.",
  take: "Distances chain through the triangle inequality; a lower bound above the radius settles \"outside\"."
},
"di-ds-436-2#161": {
  steps: "(1) Head count only. Not sufficient.\n(2) \\(0.72m + 0.80f = 0.75(m + f)\\) gives \\(0.05f = 0.03m\\), \\(m : f = 5 : 3\\), males \\(\\tfrac58\\). Sufficient.\nAnswer: B.",
  take: "Alligation: the combined rate fixes the ratio of the groups."
},
"di-ds-436-2#162": {
  steps: "(1) \\(G + R = 85\\), one equation in two unknowns. Not sufficient.\n(2) \\(G = R + 15\\), again one equation. Not sufficient.\nTogether \\(R + (R + 15) = 85\\), \\(R = 35\\). Sufficient.\nAnswer: C.",
  take: "Sum plus difference is the standard two-equation pair."
},
"di-ds-436-2#163": {
  steps: "(1) \\(z = 5, t = -1\\) says no; \\(z = 1, t = -4\\) says yes. Not sufficient.\n(2) \\(z = 5, t = -5\\) says no; \\(z = 1, t = -5\\) says yes. Not sufficient.\nTogether the same pairs fit. Not sufficient.\nAnswer: E.",
  take: "A product bound with an unbounded factor rarely pins the other factor."
},
"di-ds-436-2#164": {
  steps: "\\(35 \\le k \\le 44\\).\n(1) 36 to 44: tens digit 3 or 4. Not sufficient.\n(2) Units digit 6 to 9 means \\(k\\) is 36 to 39: tens digit 3. Sufficient.\nAnswer: B.",
  take: "Translate the digit condition into a range, then filter."
},
"di-ds-436-2#165": {
  steps: "(1) \\(|a| > |b|\\) says nothing about signs. Not sufficient.\n(2) \\(|a| + |b| > |a + b|\\) fails for same-sign numbers and holds for opposite signs, so 0 is between them. Yes. Sufficient.\nAnswer: B.",
  take: "Strict triangle inequality means opposite signs."
},
"di-ds-436-2#166": {
  steps: "(1) \\(k\\) passes through \\((1, 1)\\) and \\((1, -1)\\): vertical. \\(m\\) could be horizontal (yes) or slanted (no). Not sufficient.\n(2) \\(k\\) through \\((1, 1)\\) and \\((1, 0)\\): vertical again; same problem. Not sufficient.\nTogether still nothing about \\(m\\). Not sufficient.\nAnswer: E.",
  take: "Two statements that both describe the same line add nothing about the other."
},
"di-ds-436-2#167": {
  steps: "(1) Commission \\(= 1200 - 500 = 700\\), so \\(0.2(S - 1500) = 700\\), \\(S = 5{,}000\\). Sufficient.\n(2) The same equation. Sufficient.\nAnswer: D.",
  take: "A fixed base plus a known total is the same information as the commission alone."
},
"di-ds-436-2#168": {
  steps: "Oranges \\(o\\), apples \\(2o\\), pears \\(3o\\): total \\(6o + m + b\\).\n(1) or (2) alone leaves two unknowns. Not sufficient.\nTogether \\(6o + m = 13\\): \\(o = 2, m = 1\\) gives pears \\(6/18\\); \\(o = 1, m = 7\\) gives \\(3/18\\). Not sufficient.\nAnswer: E.",
  take: "Write the total in one variable plus the free counts; check whether integers pin it."
},
"di-ds-436-2#169": {
  steps: "(1) The combined rate needs B's customer count. Not sufficient.\n(2) B's customers without B's errors. Not sufficient.\nTogether \\(14{,}200 \\times 0.015 = 213\\) errors, so B had 127 over 9,350 customers, about 1.36 per 100. Sufficient.\nAnswer: C.",
  take: "A combined rate plus both group sizes gives the other group's count."
},
"di-ds-436-2#170": {
  steps: "(1) \\(y\\) odd makes \\(y + 5\\) even for any \\(x\\). Not sufficient.\n(2) \\(41y + 25\\) even means \\(y\\) odd; nothing about \\(x\\). Not sufficient.\nTogether \\(y\\) is odd, so (1) holds for every \\(x\\). Not sufficient.\nAnswer: E.",
  take: "When one statement makes the other automatically true, the pair is no stronger than one."
},
"di-ds-436-2#171": {
  steps: "(1) X contributed \\(48/80 = \\tfrac35\\). Sufficient.\n(2) Y contributed \\(48/120 = \\tfrac25\\), so X contributed \\(\\tfrac35\\). Sufficient.\nAnswer: D.",
  take: "Shares of joint work are (joint time) ÷ (solo time); the two shares are complementary."
},
"di-ds-436-2#172": {
  steps: "(1) Signs only. Not sufficient.\n(2) \\(v^{3} - k^{3} = (v - k)(v^{2} + vk + k^{2})\\), and the second factor varies. Not sufficient.\nTogether \\((7, 1)\\) gives 342 and \\((8, 2)\\) gives 504. Not sufficient.\nAnswer: E.",
  take: "A difference of cubes is not determined by the difference of the numbers."
},
"di-ds-436-2#173": {
  steps: "Packages \\(c\\) and \\(t\\): bars \\(2c\\) and \\(2t\\).\n(1) \\(c = t - 1\\). Not sufficient.\n(2) \\(\\tfrac23(2c) = \\tfrac35(2t)\\) gives \\(10c = 9t\\), so \\(c = 9k, t = 10k\\). Not sufficient.\nTogether \\(9k = 10k - 1\\), \\(k = 1\\), \\(c = 9\\). Sufficient.\nAnswer: C.",
  take: "A ratio and a difference between the same two counts pin both."
},
"di-ds-436-2#174": {
  steps: "(1) \\(|r| = 3|m|\\). Not sufficient.\n(2) \\(m + r = 24\\). Not sufficient.\nTogether \\(r = 3m\\) gives \\(m = 6, r = 18\\); \\(r = -3m\\) gives \\(m = -12, r = 36\\). Not sufficient.\nAnswer: E.",
  take: "A distance ratio hides a sign choice; test both branches."
},
"di-ds-436-2#175": {
  steps: "(1) Candidates 5, 7, 11, 13, 17, 19, 23, 25, 29; each is a prime or a prime power, so exactly one prime. Sufficient.\n(2) 7 has one prime, 21 has two. Not sufficient.\nAnswer: A.",
  take: "Enumerate a small range; the smallest odd composite with two different primes is 15, then 21."
},
"di-ds-436-2#176": {
  steps: "(1) 64 is a power of 2; \\(64 \\times 3\\) is not. Not sufficient.\n(2) Every prime factor of \\(k\\) is even, so it is 2, and \\(k\\) is a power of 2. Yes. Sufficient.\nAnswer: B.",
  take: "\"Power of 2\" means no odd prime factor; divisibility by a power of 2 does not exclude odd factors."
},
"di-ds-436-2#177": {
  steps: "German speakers also speak English, so \"only German\" is empty and \"all three\" is empty.\n(1) or (2) alone leaves a group unknown. Not sufficient.\nTogether \\(200 - 70 - 60 - 20 = 50\\) members speak exactly two languages. Sufficient.\nAnswer: C.",
  take: "List every region of the three-set diagram; the stem empties two of them."
},
"di-ds-436-2#178": {
  steps: "(1) One of \\(a, b, c\\) equals 7. Not sufficient.\n(2) Nothing about \\(a\\). Not sufficient.\nTogether \\(b\\) and \\(c\\) divide 18, so neither is 7; hence \\(a = 7\\). Sufficient.\nAnswer: C.",
  take: "Eliminate the other factors of a zero product using the second statement."
},
"di-ds-436-2#179": {
  steps: "(1) Cost only. Not sufficient.\n(2) A percent of an unknown price. Not sufficient.\nTogether \\(S - 340 = 0.15S\\), \\(S = 400\\). Sufficient.\nAnswer: C.",
  take: "Profit as a percent of selling price: cost = 85% of selling price."
},
"di-ds-436-2#180": {
  steps: "(1) \\(x = y = 1, z = 1.4\\): \\(2 > 1.96\\) but \\(2 < 3.84\\) (no); \\(x = 2, y = 0, z = 1\\) (yes). Not sufficient.\n(2) The same pairs. Not sufficient.\nTogether the same pairs still fit. Not sufficient.\nAnswer: E.",
  take: "Inequalities do not survive squaring term by term."
},
"di-ds-436-2#181": {
  steps: "(1) \\(b/a < 0\\): opposite signs, either could be positive. Not sufficient.\n(2) \\((-2, -1)\\) says no, \\((1, 2)\\) says yes. Not sufficient.\nTogether opposite signs with \\(a < b\\) means \\(a < 0 < b\\). Yes. Sufficient.\nAnswer: C.",
  take: "Slope sign plus an ordering of the coordinates fixes both signs."
},
"di-ds-436-2#182": {
  steps: "(1) \\(q\\) could be 25 or 100. Not sufficient.\n(2) \\(q\\) is unrestricted. Not sufficient.\nTogether \\(q\\) is still free above \\(p\\). Not sufficient.\nAnswer: E.",
  take: "Range needs both the minimum and the maximum pinned; check every unknown against both."
},
"di-ds-436-2#183": {
  steps: "(1) \\(j\\) has at least the primes 2, 3, 5; \\(k\\) unknown. Not sufficient.\n(2) \\(k = 2^{3}5^{3}\\) has two primes; \\(j\\) unknown. Not sufficient.\nTogether at least 3 versus exactly 2. Yes. Sufficient.\nAnswer: C.",
  take: "Count distinct primes, not factors or size."
},
"di-ds-436-2#184": {
  steps: "(1) or (2) alone leaves signs open. Not sufficient.\nTogether: \\((x - y) - (x - 2y) = y > -2 - (-6) = 4\\), so \\(y > 4\\) and \\(x > y - 2 > 2\\). Both positive. Sufficient.\nAnswer: C.",
  take: "Subtracting inequalities that face opposite ways (after flipping one) isolates a variable."
},
"di-ds-436-2#185": {
  steps: "\\(x - y > x + y\\) is \\(y < 0\\).\n(1) \\(x = 8\\) and \\(x - y > 10\\) give \\(y < -2\\). Yes. Sufficient.\n(2) \\(y = -20 < 0\\). Yes. Sufficient.\nAnswer: D.",
  take: "Simplify the question first; the stem's inequality then does the work with (1)."
},
"di-ds-436-2#186": {
  steps: "(1) Remainder 1 or 3 mod 21 gives \\(r = 1\\) or 3. Not sufficient.\n(2) \\(n = 28q + 3\\): \\(r = 3\\). Sufficient.\nAnswer: B.",
  take: "A remainder modulo a multiple of 7 determines the remainder modulo 7."
},
"di-ds-436-2#187": {
  steps: "Let \\(w = ax\\), \\(y = bz\\); the question is whether \\(a + b\\) is odd.\n(1) \\(ax^{2} + bz^{2}\\) odd: \\(a = 1, x = 1, b = 1, z = 2\\) gives 5 (odd) with \\(a + b\\) even; \\(a = 1, x = 1, b = 2, z = 1\\) gives 3 with \\(a + b\\) odd. Not sufficient.\n(2) \\(wz + xy = xz(a + b)\\) odd forces \\(a + b\\) odd. Yes. Sufficient.\nAnswer: B.",
  take: "Substitute the integer quotients as new variables; the products then factor."
},
"di-ds-436-2#188": {
  steps: "(1) \\(m + g = 20\\), one equation. Not sufficient.\n(2) \\(4m + 8g = 92\\), i.e. \\(m + 2g = 23\\): several integer solutions. Not sufficient.\nTogether \\(4m + 8(20 - m) = 92\\), \\(m = 17\\). Sufficient.\nAnswer: C.",
  take: "Head count plus money total is the classic pair; check (2) alone has several integer solutions."
},
"di-ds-436-2#189": {
  steps: "(1) The remainder shares the GCD: \\(\\gcd(m, r) = \\gcd(m, p) = 2\\), so \\(r\\) is even and nonzero, hence \\(r \\ge 2\\). Yes. Sufficient.\n(2) \\((m, p) = (3, 10)\\) gives \\(r = 1\\); \\((6, 10)\\) gives \\(r = 4\\). Not sufficient.\nAnswer: A.",
  take: "Euclid's step: the remainder inherits the GCD of the pair."
},
"di-ds-436-2#190": {
  steps: "(1) \\(n + 0 = n\\) and \\(n - 0 = n\\): addition gives 3, subtraction gives \\(-1\\). Not sufficient.\n(2) \\(n - n = 0\\) only (\\(n \\div n = 1\\), \\(n + n = 2n\\), \\(n \\times n = n^{2}\\)): \\(1 - 2 = -1\\). Sufficient.\nAnswer: B.",
  take: "Test each operation against the identity; keep only survivors."
},
"di-ds-436-2#191": {
  steps: "(1) Quantity up 10%, price unknown. Not sufficient.\n(2) A $30 rise on an unknown price. Not sufficient.\nTogether revenue ratio \\(= 1.1 \\times \\dfrac{p + 30}{p}\\), which depends on \\(p\\). Not sufficient.\nAnswer: E.",
  take: "Percent change of a product needs percent changes of both factors."
},
"di-ds-436-2#192": {
  steps: "(1) \\(30!\\) contains \\(5^{7}\\) (and more than seven 2s), so \\(10^{d}\\) divides it for \\(d \\le 7\\). Not sufficient.\n(2) \\(d \\ge 7\\). Not sufficient.\nTogether \\(d = 7\\). Sufficient.\nAnswer: C.",
  take: "Trailing zeros of n! come from the factors of 5: n/5 + n/25 + …."
},
"di-ds-436-2#193": {
  steps: "(1) or (2) alone: one point. Not sufficient.\nTogether slope \\(= \\dfrac{3 - 0}{0 - 2} = -\\tfrac32\\). Sufficient.\nAnswer: C.",
  take: "Both intercepts are two points on the line."
},
"di-ds-436-2#194": {
  steps: "(1) \\(3.5 \\le x + y < 4.5\\). Not sufficient.\n(2) \\(0.5 \\le x - y < 1.5\\). Not sufficient.\nTogether \\(4 \\le 2x < 6\\), \\(2 \\le x < 3\\): \\(x = 2.3\\) rounds to 2, \\(x = 2.7\\) to 3. Not sufficient.\nAnswer: E.",
  take: "Rounding ranges add up to a range wider than one integer."
},
"di-ds-436-2#195": {
  steps: "(1) \\(0.4545 \\le x < 0.4555\\): rounds to 0.45 or 0.46. Not sufficient.\n(2) The hundredths digit is unknown. Not sufficient.\nTogether \\(0.455 \\le x < 0.4555\\), which rounds to 0.46. Sufficient.\nAnswer: C.",
  take: "A rounded value is an interval; a digit condition can cut the interval."
},
"di-ds-436-2#196": {
  steps: "(1) Thursday only. Not sufficient.\n(2) A speed ratio, no time. Not sufficient.\nTogether Friday's time \\(= 1.25 \\times 20 = 25\\) minutes. Sufficient.\nAnswer: C.",
  take: "Over a fixed distance, time is inversely proportional to speed."
},
"di-ds-436-2#197": {
  steps: "(1) Profit only. Not sufficient.\n(2) A ratio only. Not sufficient.\nTogether \\(0.5E = 4{,}100\\), \\(E = 8{,}200\\), \\(R = 12{,}300\\). Sufficient.\nAnswer: C.",
  take: "Revenue, expenses and profit: one amount plus one ratio fixes all three."
},
"di-ds-436-2#198": {
  steps: "(1) Equal increases of 781 on bases 15,600 and then 16,381: the first percent is larger. Yes. Sufficient.\n(2) The same numbers stated as totals. Yes. Sufficient.\nAnswer: D.",
  take: "Compare percent changes by comparing the bases when the absolute changes are equal."
},
"di-ds-436-2#199": {
  steps: "(1) Children : adults \\(= 3 : 2\\), so the average is \\(\\dfrac{3(2) + 2(5)}{5} = 3.20\\) dollars. Sufficient.\n(2) 80 adults with an unknown number of children; the average could be anything from 2 to 5. Not sufficient.\nAnswer: A.",
  take: "Averages depend on proportions, not absolute counts."
},
"di-ds-436-2#200": {
  steps: "Given \\(5x + 3y \\le 10\\); is \\(4x + 4y \\le 10\\)?\n(1) \\(x = 0.5, y = 2.5\\): \\(5x + 3y = 10\\) but \\(4x + 4y = 12\\) (no); \\(x = y = 1\\) (yes). Not sufficient.\n(2) \\(x \\le 10/11\\): the same pairs. Not sufficient.\nTogether the same pairs fit. Not sufficient.\nAnswer: E.",
  take: "Swapping one notepad for one marker costs y − x; both statements bound x only."
},
"di-ds-436-2#201": {
  steps: "(1) For every adult ticket there are two children's tickets: \\(\\dfrac{30 + 2(24)}{3} = 26\\) dollars. Sufficient.\n(2) Four children's tickets with an unknown number of adults' tickets. Not sufficient.\nAnswer: A.",
  take: "A ratio of counts is enough for an average price."
},
"di-ds-436-2#202": {
  steps: "Total \\(= 5p + 15s\\).\n(1) \\(2s = 1\\), \\(s = 0.50\\); \\(p\\) unknown. Not sufficient.\n(2) \\(15s = 7.50\\), the same fact. Not sufficient.\nTogether \\(p\\) is still unknown. Not sufficient.\nAnswer: E.",
  take: "Two statements that determine the same variable leave the other one free."
},
"di-ds-436-2#203": {
  steps: "(1) 20 women; men unknown. Not sufficient.\n(2) 40 in total; split unknown. Not sufficient.\nTogether \\(40 - 20 = 20\\) men. Sufficient.\nAnswer: C.",
  take: "Total minus the known subgroup gives the other subgroup."
},
"di-ds-436-2#204": {
  steps: "(1) \\(12a + 8c = 5040\\), many solutions. Not sufficient.\n(2) \\(c = 2a\\), no total. Not sufficient.\nTogether \\(28a = 5040\\), \\(a = 180\\), \\(c = 360\\). Sufficient.\nAnswer: C.",
  take: "A fraction of the total is a ratio between the two counts."
},
"di-ds-436-2#205": {
  steps: "(1) Robert and Pat share 70%, split unknown. Not sufficient.\n(2) A difference without a total. Not sufficient.\nTogether: total 100 gives 40 : 30; total 200 gives 75 : 65. Not sufficient.\nAnswer: E.",
  take: "A percent share and an absolute difference need the total to combine."
},
"di-ds-436-2#206": {
  steps: "(1) \\(25 = 5 + 20\\), so \\(C\\) is between. Yes. Sufficient.\n(2) \\(A = 0, C = 5, B = 25\\) says yes; \\(A = 0, C = -5, B = 15\\) says no. Not sufficient.\nAnswer: A.",
  take: "Betweenness on a line is an equation in distances."
},
"di-ds-436-2#207": {
  steps: "(1) Digits \\(\\{1, 5, 6\\}\\) or \\(\\{2, 3, 5\\}\\): 651 says no, 235 says yes. Not sufficient.\n(2) Many. Not sufficient.\nTogether only \\(\\{2, 3, 5\\}\\) fits; every arrangement is at most 532 < 550. Yes. Sufficient.\nAnswer: C.",
  take: "Enumerate digit sets; a second condition can eliminate the troublesome set."
},
"di-ds-436-2#208": {
  steps: "(1) Hundreds 3, 6 or 9 with tens free. Not sufficient.\n(2) Units free. Not sufficient.\nTogether 301 (sum 4) and 632 (sum 11). Not sufficient.\nAnswer: E.",
  take: "Two digit relations for three digits still leave a free choice."
},
"di-ds-436-2#209": {
  steps: "(1) Retail \\(320\\), difference \\(120\\). Sufficient.\n(2) Wholesale \\(320 / 1.6 = 200\\), difference \\(120\\). Sufficient.\nAnswer: D.",
  take: "With a fixed ratio, one amount is as good as both."
},
"di-ds-qa1-arith#1": {
  steps: "(1) \\(1000[(1 + r/100)^{2} - 1] = 210\\), so \\((1 + r/100)^{2} = 1.21\\), \\(1 + r/100 = 1.1\\), \\(r = 10 > 8\\). Sufficient.\n(2) The same equation directly: \\(r = 10\\). Sufficient.\nAnswer: D.",
  take: "A statement that determines r uniquely is sufficient for any question about r, whatever the answer turns out to be."
},
"di-ds-qa1-arith#2": {
  steps: "(1) Any equal pair works. Not sufficient.\n(2) \\(15x + 29y = 440\\). Since \\(15x\\) and 440 are multiples of 5, \\(29y\\) must be too, so \\(y\\) is a multiple of 5: \\(y = 5\\) gives \\(295/15\\), not whole; \\(y = 10\\) gives \\(x = 10\\); \\(y = 15\\) exceeds 440. One solution. Sufficient.\nAnswer: B.",
  take: "One equation in two integer unknowns can be sufficient; check divisibility before assuming it is not."
},
"di-ds-qa1-arith#3": {
  steps: "(1) Six pencils in any mix. Not sufficient.\n(2) \\(23x + 21y = 130\\). \\(x = 2\\) gives \\(21y = 84\\), \\(y = 4\\); no other \\(x\\) from 0 to 5 leaves a multiple of 21. Sufficient.\nAnswer: B.",
  take: "Small totals with awkward prices usually admit exactly one integer split; enumerate."
},
"di-ds-qa1-arith#4": {
  steps: "The question asks for \\(4t + 2v\\).\n(1) \\(6t + 3v = 42\\) means \\(2t + v = 14\\), so \\(4t + 2v = 28\\). Sufficient.\n(2) \\(5t + 7v = 53\\) with positive integers: \\(7v\\) must end in 3 or 8, so \\(v = 4\\) and \\(t = 5\\); \\(4t + 2v = 28\\). Sufficient.\nAnswer: D.",
  take: "Ask for the combination, not the variables; and integer constraints can make one equation enough."
},
"di-ds-qa1-arith#5": {
  steps: "(1) With one-way distance \\(D\\): out \\(\\tfrac{D}{40}\\), back \\(1.5\\cdot\\tfrac{D}{40}\\); average \\(= \\dfrac{2D}{2.5D/40} = 32\\) mph. Sufficient.\n(2) The return speed is unknown. Not sufficient.\nAnswer: A.",
  take: "Equal distances: the average speed depends only on the two speeds (or their time ratio), never on the distance."
},
"di-ds-qa1-arith#6": {
  steps: "(1) The second half's speed is unknown. Not sufficient.\n(2) \\(\\dfrac{400}{v} - \\dfrac{400}{v + 20} = 1\\) gives \\(v^{2} + 20v - 8000 = 0\\), \\(v = 80\\), time 5 hours. Sufficient.\nAnswer: B.",
  take: "A \"would have taken one hour less\" statement is a full equation in the speed."
},
"di-ds-qa1-arith#7": {
  steps: "(1) Women : children : men \\(= 25 : 10 : 22\\), any multiple. Not sufficient.\n(2) Nothing about men. Not sufficient.\nTogether: women \\(= 25k < 30\\) forces \\(k = 1\\), so 22 men. Sufficient.\nAnswer: C.",
  take: "Ratios give a scale factor; an upper bound on one part can fix that factor."
},
"di-ds-qa1-arith#8": {
  steps: "(1) \\(b = \\tfrac54 a\\), so \\(a\\) is 4 or 8; \\(a = 8\\) gives \\(b = 10\\), not a single digit, so \\(a = 4, b = 5\\). Sufficient.\n(2) \\(b\\) is odd: 1, 3, 5, 7 or 9. Not sufficient.\nAnswer: A.",
  take: "\"Single-digit\" is a constraint; use it to kill the second candidate."
},
"quant-qa1-arith#1": {
  fast: "Equate the non-water part: 0.08G = 0.8 × 10, so G = 100 pounds.",
  traps: "(C) 46 splits the difference in percentages; (D) 92 reports the grapes' water share, not a weight.",
  take: "In evaporation problems the invariant is the solid mass; set the two solid amounts equal."
},
"quant-qa1-arith#2": {
  fast: "30% sits 20 points from 50% and 5 points from 25%: the new solution outweighs the old 4 : 1, so 80% was replaced.",
  traps: "(D) 20% is the part that stayed.",
  take: "Replacement is a weighted average of the retained part and the added part; alligation gives the ratio at once."
},
"quant-qa1-arith#3": {
  fast: "Test 600: A does 10 per minute, together 25 per minute, so B does 15, exactly 5 more.",
  traps: "(D) 1200 doubles the rate difference by using \\(\\tfrac{1}{60} - \\tfrac{1}{120}\\).",
  take: "Rates subtract when times are known; the page count is the unit that turns a rate difference into a number."
},
"quant-qa1-arith#4": {
  fast: "The boats close at 15 km/h, which is \\(\\tfrac{1}{4} km\\) per minute; one minute before meeting they are \\(\\tfrac{1}{4} km\\) apart.",
  traps: "(B) \\(\\tfrac{1}{6}\\) uses only the faster boat; (A) \\(\\tfrac{1}{12}\\) only the slower.",
  take: "Head-on motion: add the speeds and work backwards from the meeting time."
},
"quant-qa1-arith#5": {
  fast: "Start at 100: two sixth-cuts from 144 give 120 then 100, so the rise was 44%.",
  traps: "(D) 36 and (C) 40 come from adding the two 16.7% cuts and rounding.",
  take: "Successive percentage changes multiply; undoing them means dividing, not adding."
},
"quant-qa1-arith#6": {
  fast: "\"Fewer than 168\" means at most 167 red-and-blue bags, so at most 216 + 167 = 383 bags contain red.",
  traps: "(C) 384 takes 168 males, but the condition is strict; (D) 416 forgets the female floor.",
  take: "Strict inequalities with integer counts lose one; build the double-set matrix at the extremes."
},
"quant-qa1-arith#7": {
  fast: "Outside the almond circle: 45y = 225 gives y = 5; single-item bags are 64y = 320.",
  traps: "(B) 260 forgets the only-almonds group; (E) 350 adds the raisins-and-peanuts bags too.",
  take: "Subtract one circle's total from the grand total to isolate the regions outside it."
},
"quant-qa1-arith#8": {
  fast: "0.4p = 40 makes p = 100, and 1.08 × 100 = 108; it is the only choice above $100.",
  traps: "(B) 100 is the original cost; (E) 80 is the buy-back price plus a slip.",
  take: "Write every price as a multiple of one base amount before using the given difference."
},
"quant-qa1-arith#9": {
  fast: "95 is odd and 6p is even, so 7c is odd: c = 1, 3, 5, and only c = 5 leaves a multiple of 6.",
  traps: "(A) 4 and (B) 14 are not multiples of 7, so they cannot be whole batches.",
  take: "Linear Diophantine word problems: use parity and divisibility to skip most trial values."
},
"quant-qa1-arith#10": {
  fast: "Plug the choices: J = 6 and T = 4 give \\(\\tfrac{10}{3} + 5 = \\tfrac{25}{3}\\) pages per hour.",
  traps: "(E) 5 gives Tom 3 hours and a combined rate of 10.67, too fast.",
  take: "Work-rate questions with numeric choices are fastest by substitution."
},
"quant-qa1-arith#11": {
  fast: "45 km at 1.8 min/km is 25 km/h; doubling gives 50 km/h, and the gap to the target speed is 5.",
  traps: "(D) 4 applies 20% of 20 instead of finding the cost.",
  take: "Markups are always on the cost; recover the cost before changing the markup."
},
"quant-qa1-arith#12": {
  fast: "v + 6 = 62 gives v = 56 mph; a quarter hour of that is 14 miles.",
  traps: "(E) 8 is the speed difference, not a distance.",
  take: "Different start times: give each car its own time, then add distances to the total."
},
"quant-qa1-arith#13": {
  fast: "(9, 12) and (8, 10) differ by one boy and two girls and combine to 17 : 22.",
  traps: "(A) 8 is the number of boys in Class B.",
  take: "Small ratios with small answer choices: enumerate multiples instead of solving algebraically."
},
"quant-qa1-arith#14": {
  fast: "White in bag A must be 6 or 18 to keep the ratios whole; red is a third of that, so 2 or 6.",
  traps: "(B) 3 and (E) 8 are not a third of a valid white count.",
  take: "Combine two ratios through their shared quantity; divisibility then limits the cases."
},
"quant-qa1-arith#15": {
  fast: "Test k = 3: $80 each; drop to $60 and four pairs also make $240.",
  traps: "(B) 4 is the hypothetical count, not the real one.",
  take: "\"One more unit at a lower price for the same revenue\" gives a quadratic; test the choices."
},
"quant-qa1-arith#16": {
  fast: "Set the pipe rate v = 8 and the tank needs 24 − 8 = 16 hours when both run at once.",
  traps: "(C) 12 gives 12 − 5.33, far from 16.",
  take: "Speed-change comparisons are quickest by substituting the answer choices."
},
"quant-qa1-arith#17": {
  fast: "Solids double their share (1% to 2%), so the total halves: 50 kg.",
  traps: "(E) 98 assumes one percentage point of water is one kilogram.",
  take: "The classic \"potato paradox\": work with the non-water share."
},
"quant-qa1-arith#18": {
  fast: "60 − 36 = 24 = 7 + 8 + 9, exactly three more hours after 5 PM.",
  traps: "(B) 7:00 PM stops after 7 + 8 = 15 of the remaining 24.",
  take: "Measure work in worker-hours and add the changing crew hour by hour."
},
});
