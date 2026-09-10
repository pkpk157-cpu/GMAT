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
