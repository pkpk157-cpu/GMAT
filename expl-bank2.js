/* GMAT Prep — explanation layer for sets-bank2.js. Keys are "setId#n". */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {
"di-ds-arith-class#1": {
  steps: "If each member sold fewer than 2 tickets, each sold 0 or 1.\n(1) Three such numbers total at most 3, not 6, so at least one member sold 2 or more. Definite no. Sufficient.\n(2) Three distinct non-negative integers must include a number of at least 2. Definite no. Sufficient.\nAnswer: D.",
  take: "A definite no answers a yes/no question just as well as a definite yes."
},
"di-ds-arith-class#2": {
  steps: "(1) \\(b = \\tfrac{5a}{4}\\), so \\(a\\) is a multiple of 4: \\(a = 4\\) gives \\(b = 5\\), and \\(a = 8\\) gives \\(b = 10\\), which is not a single digit. So \\(b = 5\\). Sufficient.\n(2) Half of \\(b\\) is not an integer, so \\(b\\) is odd: 1, 3, 5, 7 or 9. Not sufficient.\nAnswer: A.",
  take: "Digit restrictions in the stem can turn a percentage relation into a single case; check every candidate."
},
"quant-arith-class#1": {
  fast: "Divide 126 by 0.7: \\(\\tfrac{126}{0.7} = 180\\), since the money left is the 70% that was not spent.",
  traps: "(B) 168 adds 30% of 126 back, which is 30% of the wrong base. (E) 420 divides by 0.3, the part spent.",
  take: "\"Has left\" is the complement percentage of the original."
},
"quant-arith-class#2": {
  fast: "Multiply the factors 1.4 and 0.8 to get 1.12, a 12% rise; never add 40 and −20.",
  traps: "(D) 20% adds the percentages. (E) 32% is 40 − 8, a wrong shortcut.",
  take: "Successive percent changes multiply: (1 + a)(1 + b) − 1."
},
"quant-arith-class#3": {
  fast: "\\(\\tfrac{441}{400}\\) is a perfect square ratio: \\(\\tfrac{21}{20}\\) per year, so 5%.",
  traps: "(D) 10% is the total two-year growth, roughly, not the annual rate. (E) 10.25% is \\((1.05)^{2} - 1\\) misread as annual.",
  take: "Two years of the same rate is a square; take the square root of the ratio."
},
"quant-arith-class#4": {
  fast: "1.5 × 0.8 = 1.2, so the trader keeps a 20% margin after the discount.",
  traps: "(C) 30% subtracts 20 from 50, ignoring that the discount is taken on the marked price.",
  take: "Discounts apply to the marked price; profit is measured on cost."
},
"quant-arith-class#5": {
  fast: "A 20% price cut buys \\(\\tfrac{1}{0.8} = 1.25\\) times as many, so 120 is a quarter of 480 apples; \\(\\tfrac{1440}{480} = 3\\).",
  traps: "(B) 2.40 is the reduced price, not the original.",
  take: "Fixed spending: quantity scales by the reciprocal of the price factor."
},
"quant-arith-class#6": {
  fast: "Multiply the two factors: 1.25 × 1.2 = 1.5, so earnings rise by half.",
  traps: "(A) 45% adds the percentages and forgets the cross term 0.25 × 0.2 = 0.05.",
  take: "Percent changes in factors combine multiplicatively."
},
"quant-arith-class#7": {
  fast: "\\(\\tfrac{119}{0.85} = 140\\) is the marked price, so the mark-up is 40% of the cost price.",
  traps: "(A) 34% adds 15 and 19, ignoring that the discount is taken on the larger marked price.",
  take: "Work backwards from the sale price: marked price = sale price ÷ (1 − discount)."
},
"quant-arith-class#8": {
  fast: "\\(\\tfrac{160}{340} = \\tfrac{8}{17}\\), just under a half, so 47%.",
  traps: "(A) 32% divides by the new value 500, which is the percent decrease going the other way.",
  take: "Percent change is measured against the starting value."
},
"quant-arith-class#9": {
  fast: "1.2 × 1.25 = 1.5 for each pair of years, and 1.5 × 1.5 = 2.25; then 160 × 2.25 = 360.",
  traps: "(A) 312 adds the percentages (95%) to 160 as if they applied to the same base.",
  take: "Chain the multipliers; each percent applies to the previous year's value."
},
"quant-arith-class#10": {
  fast: "The four factors multiply to 0.99, so the start was \\(\\tfrac{990}{0.99} = 1{,}000\\).",
  traps: "(C) 990 assumes the changes cancel exactly; they leave a 1% net drop.",
  take: "Multiply all the factors first, then divide once."
},
"quant-arith-class#11": {
  fast: "The reciprocal of \\(\\tfrac{3}{4}\\) is \\(\\tfrac{4}{3}\\), one third more.",
  traps: "(B) 25% assumes the increase matches the decrease; equal percents do not cancel.",
  take: "Fixed product: one factor's change is the reciprocal of the other's."
},
"quant-arith-class#12": {
  fast: "Four thirds of the speed means three quarters of the time, so the saving is one quarter of the usual time.",
  traps: "(D) repeats the speed percentage; the time change is the reciprocal.",
  take: "Speed and time are inversely proportional over a fixed distance."
},
"quant-arith-class#13": {
  fast: "Five quarters up means four fifths down, so consumption must fall by one fifth, which is 20%.",
  traps: "(B) 25% mirrors the increase; the compensating decrease is always smaller.",
  take: "To undo a rise of p%, drop by p/(100 + p) of the new value."
},
"quant-arith-class#14": {
  fast: "Use 10 by 10 as the start: 6 by 13 gives 78, which is down 22 from 100, a 22% decrease.",
  traps: "(A) 10% adds −40 and +30. (C) gets the size right but the direction wrong.",
  take: "Assume 100 for the area and multiply the factors."
},
"quant-arith-class#15": {
  fast: "Hardwood 60 = 50 (windows) + 0.25x, so x = 40 no-window units, 60 with windows; 50 of 60 is 83.33%.",
  traps: "(D) 50% reads \"50% of all apartments\" as the answer; the question asks a percent of the windowed ones only.",
  take: "\"Percent of the apartments with windows\" changes the denominator; fill the matrix first."
},
"quant-arith-class#16": {
  fast: "77 − 6 − 59 = 12 counts the triple members twice, so 6 of them.",
  traps: "(E) 12 forgets that the triple overlap is subtracted twice.",
  take: "Three sets with no \"neither\": T = A + B + C − (exactly two) − 2(all three)."
},
"quant-arith-class#17": {
  fast: "The cheaper tea is 3 away from 30 and the dearer is 5 away; the ratio dear : cheap is 3 : 5.",
  traps: "(B) 5 : 3 reverses the alligation cross; the mixture price is nearer the cheap tea, so more of it.",
  take: "The mixture sits closer to the ingredient used in greater quantity."
},
"quant-arith-class#18": {
  fast: "Take 90 as the shared value of the three products: a = 15, b = 10, c = 9, so a : b : c = 15 : 10 : 9.",
  traps: "(A) copies the coefficients; the variables are inversely related to them.",
  take: "Equal products: the variables are in the ratio of the reciprocals of their coefficients."
},
"quant-arith-class#19": {
  fast: "Cross-multiply the 20-years-ago ratio: 20x = 140, x = 7, A = 56.",
  traps: "(A) 40 is 8 × 5, using the wrong multiplier.",
  take: "Ratios of ages give a multiplier; a past or future condition fixes it."
},
"quant-arith-class#20": {
  fast: "24 + x = 48 + 0.48x, so 0.52x = 24 and x is about 46; pick the closest option.",
  traps: "(A) 24 doubles the tin but forgets that the total also grows.",
  take: "Adding pure substance changes both numerator and denominator."
},
"quant-arith-class#21": {
  fast: "Each block of 50 guests adds $300, so 300 guests cost 1600 + 300 = 1900.",
  traps: "(D) 1,950 scales 1,300 by \\(\\tfrac{3}{2}\\), ignoring the fixed part.",
  take: "Linear cost: slope from two points, then extend."
},
"quant-arith-class#22": {
  fast: "The target is \\(\\tfrac{5}{16}\\) wheat, close to B's \\(\\tfrac{3}{10}\\), so almost all comes from B; x = 2 checks.",
  traps: "(E) 14 is the amount from tin B.",
  take: "Equate one ingredient across the mixtures; the other ingredient follows."
},
"quant-arith-class#23": {
  fast: "Multiply through by 66: 48x + 55(35 − x) = 1848, so 7x = 77 and x = 11.",
  traps: "(E) 24 is the amount from the second vessel.",
  take: "Convert every ratio to a fraction of the whole before mixing."
},
"quant-arith-class#24": {
  fast: "Value per set of 3 + 4 + 12 coins is $8, so 75 sets and 900 quarters.",
  traps: "(A) 225 is the dollar value of the quarters, not their number.",
  take: "Count ratio and value ratio differ; convert counts to value before using the total."
},
"quant-arith-class#25": {
  fast: "Water doubled its share from 1 part to 2 parts, so the 5 litres added equal one part: milk is 5 parts, 25 L.",
  traps: "(A) 5 litres is the water, not the milk.",
  take: "Keep the unchanged ingredient fixed and let the added one move."
},
"quant-arith-class#26": {
  fast: "Girls become 240, so boys must reach 360 to keep the 3 : 2 ratio, and 360 − 312 = 48 boys join.",
  traps: "(A) 36 uses 234 girls instead of 240.",
  take: "Compute the actual counts before adjusting a ratio."
},
"quant-arith-class#27": {
  fast: "Cross-multiply the ratio of the numbers to get x = 5; the larger number is then 4x = 20.",
  traps: "(B) 15 is the smaller number.",
  take: "Subtracting the same amount lowers a ratio below 1 further; solve with a multiplier."
},
"quant-arith-class#28": {
  fast: "B does half the joint rate, so A does the other half: 20 days as well.",
  traps: "(A) 10 forgets to subtract B's rate.",
  take: "Rates add; subtract the known rate from the joint rate."
},
"quant-arith-class#29": {
  fast: "2.75 effective men instead of 4 means \\(\\tfrac{4}{2.75}\\) times as long: \\(11 \\times \\tfrac{16}{11} = 16\\) days.",
  traps: "(E) 22 doubles the time as if half the men were missing entirely.",
  take: "Convert part-time workers into fractions of a full worker and add."
},
"quant-arith-class#30": {
  fast: "Blocks of 4 days contribute 80, 60, 40, 20 man-days, reaching 200 exactly at day 16.",
  traps: "(A) 12 stops when 180 man-days are done, 20 short.",
  take: "Track cumulative man-days block by block."
},
"quant-arith-class#31": {
  fast: "Over 90: 9 + 6 − 10 = 5 parts per minute, so \\(\\tfrac{90}{5} = 18\\) minutes.",
  traps: "(A) 6 adds all three rates, treating the drain as a filler.",
  take: "A drain is a negative rate."
},
"quant-arith-class#32": {
  fast: "\\(\\tfrac{3}{20}\\) per minute for 5 minutes is \\(\\tfrac{3}{4}\\); a quarter tank at C's rate is 7.5 minutes; 12.5 in all.",
  traps: "(A) 10 forgets that C is much slower than the trio.",
  take: "Split the job into phases with different active rates."
},
"quant-arith-class#33": {
  fast: "Over 24: 14 + 12 − 21 = 5 twenty-fourths filled, so \\(\\tfrac{19}{24}\\) remains.",
  traps: "(A) \\(\\tfrac{5}{24}\\) is the part filled, not the part unfilled.",
  take: "Read the last line: filled or unfilled?"
},
"quant-arith-class#34": {
  fast: "880 m/h closes 176 m in a fifth of an hour, which is 12 minutes.",
  traps: "(A) 6 uses the sum of the speeds, which applies to approaching runners, not a chase.",
  take: "Same direction: divide the gap by the difference of speeds."
},
"quant-arith-class#35": {
  fast: "The two trips differ by one hour; at 4 and 5 km/h the times are 5 and 4 hours for 20 km.",
  traps: "(D) 24 comes from a slip in solving 4t + 2 = 5t − 2.5.",
  take: "Late-and-early problems: equate the distance at both speeds."
},
"quant-arith-class#36": {
  fast: "Half the difference of the two speeds, 4.5 and 1.5, gives the stream speed of 1.5 km/h.",
  traps: "(D) 3 is the still-water speed, half the sum.",
  take: "Still water = average of the two speeds; stream = half their difference."
},
"quant-arith-class#37": {
  fast: "The time difference is 16 minutes; 1.5 km takes 36 minutes at 2.5 km/h and 20 at 4.5 km/h.",
  traps: "(D) 2 km gives times of 48 and 26.7 minutes, a 21-minute gap, too large.",
  take: "Convert minutes to hours before writing the distance equation."
},
"quant-arith-class#38": {
  fast: "The current adds 3 km/h, so upstream is 9 km/h and 4 km takes \\(\\tfrac{4}{9}\\) of an hour.",
  traps: "(B) 24 subtracts 4 minutes as the current added 4; speeds, not times, are symmetric.",
  take: "Work in speeds: upstream = still − current."
},
"quant-arith-class#39": {
  fast: "The difference of squares of numbers 2 apart is twice their sum: sum 148, numbers 73 and 75.",
  traps: "(C) 75 is the larger number. (E) 147 is the sum minus 1.",
  take: "\\(a^{2} - b^{2} = (a - b)(a + b)\\); with a − b = 2 the sum is the difference divided by 2."
},
"quant-arith-class#40": {
  fast: "Express everyone through D, add two years, and solve x + 36 = 6x + 26 for x = 2.",
  traps: "(C) 34 is A's age relative to D without the solved value of x.",
  take: "Age chains: name the youngest x and write everyone else from x."
},
"quant-arith-class#41": {
  fast: "Test (A) directly: 432 − 234 = 198 = 22 × 9, and the digit sum 9 gives the divisibility.",
  traps: "(B) to (E) all reverse to a difference of 198, but their digit sums are not 9.",
  take: "Reversing a three-digit number changes it by 99 × (first digit − last digit)."
},
"quant-arith-class#42": {
  fast: "Four times the time means a quarter of the speed: 5 − x = (5 + x)/4, so x = 3.",
  traps: "(D) 4 makes the upstream speed 1 mph and downstream 9, a ratio of 9, not 4.",
  take: "Time ratio inverts to speed ratio over the same distance."
},
"quant-arith-class#43": {
  fast: "Expand both products, drop xy, and add the two linear equations: 2x = 56, so the length is 28.",
  traps: "(E) 35 is the constant in the second equation, not x.",
  take: "Products that stay equal to xy reduce to linear equations after expanding."
},
"quant-arith-class#44": {
  fast: "Eliminate y: 27x − 12y = 600 and 28x − 12y = 800 give x = 200, income 1,800.",
  traps: "(A) 1,400 is the second person's income.",
  take: "Two ratios with a common absolute (savings) become two linear equations."
},
"quant-arith-class#45": {
  fast: "Multiply by 30: 5(n + 2) − 3n = 870 with n the smaller, so n = 430 and the greater is 432.",
  traps: "(A) 430 is the smaller number.",
  take: "Clear denominators with the LCM before solving."
},
"quant-arith-class#46": {
  fast: "The digits are in ratio 3 : 1 and sum to 12, so 9 and 3: the number is 93.",
  traps: "(A) 39 reverses the digits.",
  take: "Name the smaller digit and build the other from it."
},
"quant-arith-class#47": {
  fast: "Add the linear equations to get 2x = 60, so x = 30, y = 24 and the distance is 720.",
  traps: "(A) 600 uses y = 20, a slip in the second equation.",
  take: "Speed-time products that stay constant give linear equations once expanded."
},
"quant-arith-class#48": {
  fast: "Add the two linear equations: 2s = 10, so each got $5 and there were 24 people; $120.",
  traps: "(E) 144 uses n = 24 with s = 6.",
  take: "\"Six more people, one dollar less each\" is a product kept constant: expand and cancel."
},
"quant-arith-class#49": {
  fast: "Two quarters at 2% each is roughly 4% of x, and 4% of x must exceed $100, so x is about $2,500.",
  traps: "(C) 2,000 earns only about $81 in six months.",
  take: "Short-period compounding is close to simple interest; approximate first."
},
"quant-arith-class#50": {
  fast: "The hourly factor is the cube root of 125, which is 5, so 3 p.m. is 2,000 × 25.",
  traps: "(B) 62,500 divides 250,000 by 4, assuming linear growth over the hours.",
  take: "Constant-rate growth is geometric; count the number of periods."
},
"quant-arith-class#51": {
  fast: "4,000 needs a factor of 62.5, so six doublings (64), each two hours: 12 hours.",
  traps: "(B) 8 counts doublings from 1,000 but forgets to add the two hours per doubling correctly.",
  take: "Doubling problems: list the population at each period from now."
},
"quant-arith-class#52": {
  fast: "The population is 5,000 now and quadruples twice more in four hours: 5,000 × 16 = 80,000.",
  traps: "(A) 20,000 applies only one quadrupling.",
  take: "Find the current value first, then project forward by the same factor."
},
"quant-arith-class#53": {
  fast: "Closing speed 15 km/h times one sixtieth of an hour gives a quarter of a kilometre.",
  traps: "(B) uses only the 10 km/h boat and (A) only the 5 km/h boat; the gap closes at the sum of the two speeds.",
  take: "Objects moving towards each other: work with the relative speed and ignore the starting distance."
},
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
"cr-assume-latest#1": {
  fast: "They switched recently, which is after they won, so the club cannot be credited with the wins.",
  traps: "(A) is the tempting pick because it sounds like the strongest claim in the advertisement, but 'add power to your swing and distance to your drives' states it plainly. The exception is the one claim the timing rules out.",
  take: "In advertisement questions, the order of events in the endorsement is usually where the answer hides."
},
"cr-assume-latest#2": {
  fast: "A predictable loss can be corrected for, so the argument needs the loss to be unpredictable.",
  traps: "(C) tempts because it sounds like a precise mechanism, but how quickly a ring is lost does not matter; what matters is whether the count can be repaired. (B) compares the Brazilian ash with other species, which the conclusion never does.",
  take: "A source of error only ruins a measurement when you cannot quantify and correct for it."
},
"cr-assume-latest#3": {
  fast: "Calling something un-American needs a premise about what American tradition actually is.",
  traps: "(B) and (A) are far more extreme than anything the author claims; the argument says other limits could <i>in time</i> become acceptable, not that a crackdown is imminent. (E) turns a specific objection into blanket opposition to all regulation.",
  take: "When an argument leans on a loaded label, the assumption is usually the definition behind it."
},
"cr-assume-latest#4": {
  fast: "The covers reveal the publisher's priorities only if the publisher actually chooses the covers.",
  traps: "(E) looks like support because it explains why the change boosts sales, but it strengthens rather than being required, and the argument is about the publisher's intent, not the sales figures. (C) concerns what a magazine could do, not what this publisher chose to do.",
  take: "When an argument attributes a motive to a person, check that the person controls the thing being cited."
},
"cr-assume-latest#5": {
  fast: "Evidence about one product, conclusion about another: the bridge is that tastes carry over.",
  traps: "(A) is the negation of the assumption, so it destroys the argument rather than supporting it. (D) is true of the world but harmless to the reasoning, and (B) and (C) describe subgroups the argument never uses.",
  take: "When the evidence and the conclusion cover different things, the assumption is the bridge between them."
},
"cr-assume-latest#6": {
  fast: "Two brushstrokes are dated, not the finish; only a short working period makes those the same thing.",
  traps: "(A) is the tempting one: it seems to shore up the 1509 boundary. But the premise is about Michelangelo abandoning the pigment, which is a fact about his own practice, so whether stocks survived elsewhere changes nothing. (D) and (E) raise other dating methods and style, neither of which the argument uses.",
  take: "Evidence that dates part of a work does not date the whole of it unless the work was made quickly."
},
"cr-assume-latest#7": {
  fast: "Gas plants cost more and oil plants cost less, so the gas share has to be the larger one.",
  traps: "(E) is the classic misread: a spike in oil prices would push costs <i>up</i>, which helps the conclusion rather than being required by it. (A) and (B) are about paying for the increase, not about whether it happens.",
  take: "When only part of an operation is affected, the assumption is usually about how big that part is."
},
"cr-assume-latest#8": {
  fast: "The promise of seeing rare species needs the reader to go where rare species are.",
  traps: "(D) restates a premise rather than supplying one; the advertisement already says the price is comparable. (A) sharpens 'lightweight' into a comparison the argument never needs.",
  take: "A claim that a product delivers a result assumes the other conditions for that result are already met."
},
"cr-assume-latest#9": {
  fast: "The advice only works if the damp causes the mold rather than the mold causing the damp.",
  traps: "(C) is far stronger than needed: the passage says mold is <i>almost always</i> found in damp places, so the argument survives mold growing in a dry spot occasionally. (D) and (E) address harmlessness and filtering, neither of which the recommendation relies on.",
  take: "A recommendation built on a correlation assumes the causation runs the way the recommendation needs."
},
"cr-assume-latest#10": {
  fast: "Reading opinion off the law requires the law to reflect opinion.",
  traps: "(C) overstates the case: the argument needs a majority, and a majority can coexist with strong opposition. (E) compares sentencing standards, which has nothing to do with what the public believes.",
  take: "Institutional facts do not automatically reveal popular opinion; the argument must assume they do."
},
"cr-assume-latest#11": {
  fast: "The survey is a correlation; the conclusion is causal, so the reverse direction must be excluded.",
  traps: "(A) is about the consequences of anxiety, which the argument never reaches. (C) attacks the study's design, and a lopsided sample would not by itself explain a difference in rates.",
  take: "For a causal conclusion drawn from a correlation, the required assumption is usually that the causation does not run backwards."
},
"cr-assume-latest#12": {
  fast: "Appreciation requires the good news to be news; the price must not already contain it.",
  traps: "(C) is word-for-word a stated premise, not an assumption; the stimulus already says the growth is likely to persist. (E) compares Company X with its peers, which the conclusion never does.",
  take: "Predicting a price rise from known good news assumes the price has not already absorbed it."
},
"cr-assume-latest#13": {
  fast: "She borrows the adult benchmark, so children's use must be comparable to adults' use.",
  traps: "(B) is a claim about what is always true, far stronger than Lucy's single comparison. (D) is about Antoine's honesty, which Lucy never questions, and (A) concerns how often norms are exceeded rather than whether the norm transfers.",
  take: "When a speaker judges one group by another group's benchmark, the assumption is that the benchmark carries over."
},
"cr-assume-latest#14": {
  fast: "The complaint needs the non-liberal-arts degrees to be the less rigorous ones.",
  traps: "(D) ranks rigour against other goals, which the reader never does; the lament only needs rigour to be declining, not to be paramount. (B) is a recommendation rather than a premise the argument requires.",
  take: "When a shift from A to B is called a decline, the assumption is that B is worse than A on the stated measure."
},
"cr-assume-latest#15": {
  fast: "A 10 percent price rise gives 10 percent more revenue only if the volume sold does not fall.",
  traps: "(D) is about cost, which affects profit rather than revenue, and the projection is a revenue projection. (B) makes the same slip from revenue to profit, and (C) concerns other business lines the projection excludes.",
  take: "Any revenue projection from a price change assumes something about quantity; find that assumption first."
},
"cr-assume-latest#16": {
  fast: "A false report can come from an honest bad method or an accurate method reported dishonestly.",
  traps: "(A) looks necessary because someone must be right about the size, but the stimulus already treats the company's finding as what was actually there, and no third-party ruling is needed. (C) is about commercial viability, which the conclusion never touches.",
  take: "Blaming a method for a wrong result assumes the result was reported in good faith."
},
"cr-assume-latest#17": {
  fast: "The example only works if phones in school are a mere annoyance, not an important problem.",
  traps: "(B) runs against the parent, who wants students to keep their phones until one actually disrupts a class. (E) ranks a leader's attributes, which the parent never does.",
  take: "When an argument rests on an example, the assumption is usually that the example really is an instance of the claim."
},
"cr-assume-latest#18": {
  fast: "Treating only existing sufferers is optimal only if earlier treatment would not have prevented the problem.",
  traps: "(A) suggests other treatments also help, which does not bear on where chiropractic care should be aimed. (D) is about how the treatment is scheduled, and (B) and (E) are about insurance and lost workdays, none of which touch the goal of minimising the suffering population.",
  take: "A policy aimed at treatment assumes prevention would not have done the job better."
},
"cr-assume-latest#19": {
  fast: "Aid indicates need only if nobody is collecting aid they do not need.",
  traps: "(C) compares raw numbers, but the argument is about proportions, and the stimulus says for-profits serve far fewer students. (D) and (E) concern educational quality and loan defaults, neither of which bears on who is financially disadvantaged.",
  take: "When a proxy stands in for a fact, the assumption is that nothing corrupts the proxy."
},
"cr-assume-latest#20": {
  fast: "Marriage causes the difference only if healthier, happier people are not simply the ones who marry.",
  traps: "(C) is far too extreme; the conclusion needs an average benefit, not immunity from depression. (A) is about duration and (E) about harmony, neither of which the commentators' claim requires.",
  take: "For 'X causes Y' drawn from a comparison of groups, rule out that Y-ish people were the ones who ended up in group X."
},
"cr-assume-latest#21": {
  fast: "Building a factory to serve Country X assumes Country X will keep buying.",
  traps: "(E) is a business advantage, not a requirement: the tariff saving alone can justify the move even if labour costs more. (D) concerns the home country's own tariffs, which do not affect goods sold in Country X.",
  take: "A plan justified by long-term profit assumes the demand it depends on lasts that long."
},
"cr-assume-latest#22": {
  fast: "Facts about consumer harm become advice to companies only through a duty to consumers.",
  traps: "(A) would strengthen the claim that consumers have no alternative, but the argument already says the patent holder faces no direct competition. (E) trades price against quality, a comparison the argument never makes.",
  take: "When evidence about one party's welfare produces advice to another, the bridge is an obligation."
},
"cr-assume-latest#23": {
  fast: "A clean surface means a safe fruit only if nothing gets through the skin.",
  traps: "(C) is tempting because mixed use would muddle the two categories, but the conclusion is already restricted to farms that use only organic pesticides. (B) reverses the timing: organic pesticide dissipates within hours, so a longer journey is safer, not riskier.",
  take: "Watch for an argument that establishes something about a surface and concludes something about the whole object."
},
"cr-assume-latest#24": {
  fast: "Flat savings accounts prove nothing unless other savings vehicles are flat as well.",
  traps: "(E) concerns the people who lost their jobs, but the prediction was about people whose jobs were secure. (A), (C) and (D) describe the state of the economy, not where the unspent money went.",
  take: "When one indicator stands in for a behaviour, the assumption is that no other outlet absorbed it."
},
"cr-assume-latest#25": {
  fast: "Asking nurses to triage assumes nurses can judge how severe a case is.",
  traps: "(D) overstates what is needed: the plan requires nurses to be available, not for every hospital to be fully staffed at all times. (B) attacks a rival plan, and refuting an alternative is not an assumption of this one.",
  take: "A proposal that assigns a task always assumes the assignee can perform it."
},
"cr-assume-latest#26": {
  fast: "Daytime camouflage forces a night discovery only if nothing else could reveal the butterfly by day.",
  traps: "(D) sharpens the camouflage claim, but even perfect green foliage leaves non-visual methods open, so it does not rescue the conclusion. (A), (C) and (E) concern the species' relatives and range, none of which bear on when it was found.",
  take: "'It could not be seen' is not 'it could not be found'; watch for arguments that treat them as the same."
},
"cr-boldface-addon#1": {
  fast: "The 'Thus' sentence supports the boldface one, not the other way round, so the boldface is the main conclusion.",
  traps: "(B) describes a premise that defends the argument from attack, which fits the second sentence. (C) describes a premise supporting a sub-conclusion, again the second sentence. (D) describes the last sentence, not the first.",
  take: "An argument can state its main conclusion first; use the therefore test rather than trusting 'thus' and 'clearly'."
},
"cr-boldface-addon#2": {
  fast: "Supported by the evolution claim and supporting the final 'Thus' sentence: that is an intermediate conclusion.",
  traps: "(A) names the wrong support: the backing is the evolution claim, not the chronic-illness observation. (B) says no justification is provided, but the 'Because' clause provides it. (E) reverses the direction of support between the boldface and the evolution claim.",
  take: "Label every statement as premise, intermediate conclusion or main conclusion before reading a single choice."
},
"cr-boldface-addon#3": {
  fast: "The timber facts explain why it must have been a major center, so the first boldface is the conclusion.",
  traps: "(A) reverses the two roles. (C) makes the conclusion a premise. (E) says the conclusion is inferred and then the premise is inferred from it, which inverts the flow of support entirely.",
  take: "A conclusion placed in the middle of a stimulus is still the conclusion; position tells you nothing."
},
"cr-boldface-addon#4": {
  fast: "Two sources of jobs, one boldface against each, both feeding the same prediction.",
  traps: "(A) and (B) call the first boldface a claim the argument challenges, but the argument accepts and uses it. (C) calls the second an objection, though nothing in the stimulus disputes the conclusion. (E) has both supporting an opposed position that does not exist here.",
  take: "No contradiction word in the stimulus usually means no opposing position for a boldface to belong to."
},
"cr-boldface-addon#5": {
  fast: "'So clearly' marks the main conclusion; the other boldface is the unargued framework it rests on.",
  traps: "(D) and (E) say the argument seeks to establish the first statement, but no evidence anywhere is offered for it. (B) demotes the final sentence to an intermediate conclusion. (C) makes the conclusion a piece of evidence.",
  take: "'Seeks to establish' is false whenever the stimulus offers no support at all for that statement."
},
"cr-boldface-addon#6": {
  fast: "The second boldface is about what will happen and the argument endorses it, so it is supporting prediction, not conclusion.",
  traps: "(C) misidentifies the main conclusion, which is the final 'So clearly' sentence. (B) and (D) treat the second boldface as opposed by the argument, but it is one of the argument's own reasons. (E) again claims the first statement is being established.",
  take: "When several choices share a description of the first boldface, spend all your time on the second."
},
"cr-boldface-addon#7": {
  fast: "A view attributed to others, then attacked as hasty because the evidence does not settle it.",
  traps: "(D) calls the boldface evidence when it is a conclusion others drew. (E) makes it a needed premise for the author, the opposite of the author's stance. (B) reverses the author's position entirely, and (A) claims an unrelatedness the argument never asserts.",
  take: "'Overly hasty' means the evidence is insufficient, not that the claim is false: choose the undermining language carefully."
},
"cr-boldface-addon#8": {
  fast: "Double the area but also double the crabs and the density holds, which is what the birdwatcher assumed away.",
  traps: "(D) gives the birds more space, which was never the problem; the problem was food. (A) removes crabs and makes things worse. (C) and (E) are about tourist spending and migration routes, neither of which touches whether the birds will find eggs.",
  take: "To answer a density objection, change the numerator as well as the denominator."
},
"cr-club-conclusion#1": {
  fast: "Four candidate causes were removed and the difference stayed, so the cause is something else.",
  traps: "(C) is the popular answer but treats health outcomes as a direct measure of how well money is spent, which the passage never establishes. (B) reads a causal link into a bare correlation between spending and disease rates.",
  take: "When a study controls for a list of factors and the effect persists, the safe inference is that the cause is off that list."
},
"cr-club-conclusion#2": {
  fast: "Fifty-five percent female makes forty-five percent male, and nobody aged 18 to 70 is 75.",
  traps: "(C) fails on the arithmetic: two-thirds support leaves a third of the votes, and a single rival could take all 33 percent of it, which exceeds 30. (A) fails too: if every male backed the incumbent, the female share of that two-thirds could fall below half of all women.",
  take: "On must-be-true questions, the unexciting restatement often beats the interesting inference."
},
"cr-club-conclusion#3": {
  fast: "Overhead is the leftover: 30 percent for Making Hits against 20 percent for Song Factory.",
  traps: "(B) compares amounts of money from percentages of two unknown budgets, so a larger share of a smaller budget could be less. (E) asserts that marketing caused the sales difference, which two data points cannot establish.",
  take: "Percentages of different totals compare only as percentages unless the totals are given."
},
"cr-club-conclusion#4": {
  fast: "Proposing it as a profit measure commits them to the revenue exceeding the safety compliance cost.",
  traps: "(B) confuses seeking approval with expecting it; a company can apply without being sure. (D) and (E) read a ranking of safety against revenue into a proposal that simply goes through the safety process.",
  take: "A proposal made to raise profit commits its author to the benefit exceeding the cost, nothing more."
},
"cr-club-conclusion#5": {
  fast: "The complaint that foreign words test phonetics implies spelling them requires knowing the language's sounds.",
  traps: "(B) says foreign words are harder for all contestants, but the columnist objects to the kind of skill tested, not the difficulty. (C) is the reverse of the columnist's position, which is that language facility in general is beside the point.",
  take: "An objection that something tests the wrong skill tells you what skill the speaker thinks it tests."
},
"cr-club-conclusion#6": {
  fast: "An IQ of 130 clears the 120 bar, so nothing forbids this person from being a TopNotch graduate.",
  traps: "(A) and (E) both hinge on an IQ of exactly 150, which is not 'over 150', so the 'all' rule never applies. (B) says such a person could not have been a <i>student</i>, but the premise covers only those who graduated.",
  take: "A choice claiming mere possibility needs only to be consistent with the premises, so check it first."
},
"cr-club-conclusion#7": {
  fast: "A third of 80 percent is 26.7 percent, which is less than the 33.3 percent with financial responsibilities.",
  traps: "(D) reverses the definition: the passage lists those contributions as examples of significant responsibilities, not as a sufficient condition for having them. (A) is a recommendation, and recommendations never follow from statistics alone.",
  take: "A percentage of a subgroup must be converted to a percentage of the whole before any comparison."
},
"cr-club-conclusion#8": {
  fast: "'Rarely' concedes that the pairing happens sometimes, and those cases are what (B) describes.",
  traps: "(A) and (C) convert 'rarely' into 'never', which is precisely the word the analyst avoided. (D) compares every non-creative worker with every creative one, where the analyst compared most creatives with an average.",
  take: "Hedge words like rarely, often and most concede the other side; the inference usually lives in that concession."
},
"cr-club-conclusion#9": {
  fast: "Those priced out of the accounts lose their vaccinations, which makes infection likelier.",
  traps: "(A) is contradicted by the argument's logic: infectious disease spreading among the unvaccinated reaches the wealthy too. (C) is far stronger than the claim that serious illness will go undetected in many cases.",
  take: "The safest inference is usually one short step from a sentence the argument already asserts."
},
"cr-club-conclusion#10": {
  fast: "Missing melanin goes with more sun damage, so melanin protects against it.",
  traps: "(B) overshoots badly: having plenty of melanin does not make sun damage something a person can ignore. (A) and (E) invent facts about compensating biology and sunscreen that the passage never mentions.",
  take: "A deficiency causing harm licenses only the modest conclusion that the missing thing helps."
},
"cr-club-conclusion#11": {
  fast: "Attacking a harmless protein as if it were a pathogen is a failure to recognise it.",
  traps: "(C) reverses the symptom relationship: cramps, bloating and anemia have many other causes. (A) treats a list of symptoms the disease 'includes' as symptoms every sufferer must have.",
  take: "Watch for 'as if', which flags a mistaken identification the passage is quietly asserting."
},
"cr-club-conclusion#12": {
  fast: "Mayville is 6 higher overall and 5 lower without weather, so weather accounts for 11 more delays per 100.",
  traps: "(B) jumps from more weather delays to worse weather, but an airport can be worse at coping with the same weather. (C) names mechanical problems specifically, where the data only cover non-weather delays as a whole.",
  take: "When a total splits into two parts and you know the total and one part, the other part is forced."
},
"cr-club-conclusion#13": {
  fast: "A ten percent discount that survives shipping means shipping is under ten percent of the local price.",
  traps: "(D) measures the same fee against Isadore's price instead of Larry's; ten percent of the smaller figure is a different threshold, and the stimulus does not settle it. (A) and (E) are about production costs and efficiency, where the passage gives only prices.",
  take: "Percentages need a stated base; the same fee can be above one threshold and below another."
},
"cr-club-conclusion#14": {
  fast: "More total receipts from fewer than half as many films forces a higher average per film.",
  traps: "(E) converts receipts into ticket buyers, which requires knowing the ticket price the passage never gives. (A) predicts the second half's takings, and nothing guarantees those films will earn anything.",
  take: "Receipts are money, not people; converting between them needs a price you have not been given."
},
"cr-club-conclusion#15": {
  fast: "Twenty-five plus ninety exceeds a hundred by fifteen, so at least that many are in both groups.",
  traps: "(B) mishandles 'over 90 percent': the remainder is under 10 percent, and those people need not believe they are less productive, only not more. (E) declares the employees' beliefs false, which no evidence here establishes.",
  take: "Two overlapping percentages force a minimum overlap of their sum minus one hundred."
},
"cr-club-conclusion#16": {
  fast: "Cost is revenue minus profit, and both stands reported the same revenue and the same profit.",
  traps: "(A) reverses the arithmetic: equal revenue at a lower price per cup means Daisy's sold <b>more</b> cups, not fewer. (B), (D) and (E) speculate about quality, preference and pricing strategy, none of which appear in the passage.",
  take: "Whenever two of revenue, cost and profit are pinned down, the third is determined."
},
"cr-club-conclusion#17": {
  fast: "Scientists left because of the restrictions, so their new employers must face lighter ones.",
  traps: "(E) predicts that scientists will break long-term contracts, which the passage gives no reason to expect. (D) forecasts the loss of American leadership, a much larger claim than the facts support.",
  take: "A move made to escape a constraint implies the destination is less constrained."
},
"cr-club-conclusion#18": {
  fast: "More than 100,000 lives saved means more than 100,000 who would otherwise have died.",
  traps: "(B) fails on the arithmetic: 98,000 deaths a year is about 147,000 over eighteen months, so saving 100,000 leaves many unsaved. (C) and (E) forecast the future, which no completed study can establish.",
  take: "'Lives saved' translates directly into 'deaths that would otherwise have occurred' and no further."
},
"cr-club-conclusion#19": {
  fast: "Revising a previous estimate of the divergence date means earlier analysis had already found the link.",
  traps: "(C) promises exact characteristics from future research, well beyond a passage that offers only a startling hypothesis. (A) and (E) make claims about hybrids and DNA complexity that appear nowhere in the text.",
  take: "When a passage revises a prior estimate, the existence and subject of that prior work is fair game."
},
"cr-club-conclusion#20": {
  fast: "Eighty percent of ten billion wasted leaves about two billion that is not.",
  traps: "(B) confuses wasting the most energy with spending the most on it; another industry could spend far more and waste less. (A) invents a 30 percent saving that no figure in the passage produces.",
  take: "When a percentage of a stated total is described one way, the complement is always available."
},
"cr-club-conclusion#21": {
  fast: "Self-monitoring plus a predicted increase is exactly 'the opposite of the intended consequence'.",
  traps: "(A) sweeps in every chemical company, where the author carefully wrote 'certain polluters'. (D) turns a point about this proposal into a universal rule about all government proposals.",
  take: "Restate the author's point in the author's own scope; watch for choices that widen 'certain' into 'all'."
},
"cr-club-conclusion#22": {
  fast: "Honour the signed terms and set no precedent for reopening them is exactly 'don't change the rules mid-game'.",
  traps: "(A) treats the windfall as a lucky break to be seized, which is the government's characterisation rather than the executives' stated reasoning. (C) concedes the gain comes at the public's expense, which no executive claims.",
  take: "Match a proverb to the speaker's stated reasons, not to the outcome that happens to favour them."
},
"cr-club-conclusion#23": {
  fast: "The conclusion is the claim about Amy, and (D) restates it using the same minimum the rule sets.",
  traps: "(A) restates the premise, which is the rule the argument uses rather than the point it makes. (E) turns the conclusion into a counterfactual about the captaincy that the argument never draws.",
  take: "The main point is the claim being supported, never the rule doing the supporting."
},
"cr-club-conclusion#24": {
  fast: "One specialised service, one customer base, and a shock to that base forcing layoffs.",
  traps: "(B) loses a single client from what is presumably a roster of them, so no over-reliance is shown. (C) and (E) describe firms diversifying, which is the opposite of the tension, and (D) is about labour costs entirely.",
  take: "To complete a sentence about a tension, pick the case that displays both sides of it."
},
"cr-club-conclusion#25": {
  fast: "Talking about those with the greatest percentage change presupposes the reductions varied above the 25 percent floor.",
  traps: "(B) predicts longer lives from a six-month study of insulin and temperature, two steps beyond the evidence. (A) generalises the rodent results to humans, which the study was designed to test rather than assume.",
  take: "A comparison among a group presupposes variation within it; that presupposition is often the inference."
},
"cr-club-conclusion#26": {
  fast: "Spelling out that no other infraction is needed implies one used to be.",
  traps: "(D) says the previous laws saved no lives, but the passage claims only that the new one will save <i>additional</i> lives. (B) and (C) assert a constitutional violation and results from other states, neither of which the passage mentions.",
  take: "A newly stated exception tells you what the old rule required."
},
"cr-club-conclusion#27": {
  fast: "Six years ago is outside the five-year window, so the course must be retaken.",
  traps: "(D) reads naturally but says 'isn't 18 years old', which is literally true of a 40-year-old who can certainly hold a permit. (B) invents an exemption the passage never grants and adds a claim about drinking laws.",
  take: "Prefer the choice whose wording survives a literal reading over the one that only works loosely."
},
"cr-club-conclusion#28": {
  fast: "The protest brings the regulation that brings the prices the public then complains about.",
  traps: "(A) is a recommendation, and the passage weighs costs on both sides without recommending anything. (E) turns the passage's 'leading to' into 'always', and (C) claims only unregulated services draw protest, which the passage contradicts.",
  take: "When a passage traces a cycle, the safe inference describes the cycle rather than judging it."
},
"cr-club-conclusion#29": {
  fast: "Incomplete binding is given as the reason effectiveness drops, so full effect needs proper binding.",
  traps: "(A) is the mistaken negation of the stated timing: the passage covers the within-one-hour case and says nothing about later. (E) rules out future drug design, well beyond anything the researchers claim.",
  take: "When a passage explains a failure by a mechanism, the inference is that the mechanism is needed for success."
},
"cr-club-conclusion#30": {
  fast: "A latent talent in children who showed no early aptitude is a talent that was not yet visible.",
  traps: "(B) and (E) push to 'everyone' and 'all children', where the educator writes only of children directed away from music. (A) recommends withdrawing attention from talented students, which the educator never proposes.",
  take: "Words like 'latent', 'potential' and 'undeveloped' signal that something real is present but unobserved."
},
"cr-club-conclusion#31": {
  fast: "Best equipment plus poor training still means high risk, so preparation can cancel the gear's benefit.",
  traps: "(A) ranks training above equipment, but the passage says both matter without weighing them. (B) claims trained people are never injured, far stronger than a reduced risk.",
  take: "'Even if' sentences establish that one factor can override another, not that it is the more important one."
},
"cr-club-conclusion#32": {
  fast: "Treatment for harmless findings is unnecessary treatment, which is harm arriving indirectly.",
  traps: "(B) tells patients not to worry, but the passage says only that some findings are harmless, not that all are. (D) and (E) rank the two procedures and compare their prices, neither of which the passage supports.",
  take: "A test that produces false alarms harms patients through the treatment that follows, not through the test."
},
"cr-club-eval-paradox#1": {
  fast: "The study has no control group, so ask what the same programme achieves without the pill.",
  traps: "(B) asks about the best single result, which tells you nothing about the average or the cause. (A) and (D) fill in details of the study without separating the supplement from the exercise.",
  take: "When a study applies two treatments together, the evaluating question is always what the other one does alone."
},
"cr-club-eval-paradox#2": {
  fast: "A few prosecutions can still deter thousands, so ask whether the threat changes behaviour.",
  traps: "(B) is about the number of downloads, but the conclusion is about the number of people downloading. (D) speeds up identification without addressing the stated limit, which is the resources to prosecute.",
  take: "When an argument counts only those directly affected, the deterrent or ripple effect is the thing to evaluate."
},
"cr-club-eval-paradox#3": {
  fast: "The claimed loss of cultural contact only bites if there is no other source of that contact.",
  traps: "(C) measures how large the drop was, not whether the drop produces the consequences the author names. (A) and (E) are about fixing the problem, which the author already says is easy, rather than about its impact.",
  take: "To evaluate a claimed harm, ask whether the thing supposedly lost is available elsewhere."
},
"cr-club-eval-paradox#4": {
  fast: "If the rebound came from a special rescue effort, it cannot be generalised to species that get none.",
  traps: "(C) attacks the zoologists' credentials rather than their claim, which is never how a GMAT argument is evaluated. (A) and (D) concern non-native species and migration, neither of which explains the recovery.",
  take: "Before generalising from a success story, ask what made that particular case succeed."
},
"cr-club-eval-paradox#5": {
  fast: "The bundle wins only if people still buy many channels; ask whether they would cut back sharply.",
  traps: "(A) is about programming diversity, which is a different objective from the stated one of reducing consumer costs. (B) and (E) concern the companies' revenue and equipment rather than what subscribers pay.",
  take: "Judge a policy against the goal actually stated, and check whether the opposing claim covers the relevant case."
},
"cr-club-eval-paradox#6": {
  fast: "Check whether the counterweighting runs both ways or only against liberal hires.",
  traps: "(C) is about where the new personality came from, which does not test the network's own practice. (D) reports one person's feeling, and (E) reports ratings, neither of which measures balance.",
  take: "A claim of even-handedness is tested by looking for the mirror-image case."
},
"cr-club-eval-paradox#7": {
  fast: "The measure is parent-judged, so the two groups may be judged by different yardsticks.",
  traps: "(D) raises family income, but the recommendation still operates through the allowance itself, so a wealth difference does not break the link. (C) attacks the specialists' credentials rather than their finding.",
  take: "When a study's key term is defined by the subjects themselves, check that everyone is using it the same way."
},
"cr-club-eval-paradox#8": {
  fast: "A dearer input raises the retail price only if the other inputs have not got cheaper.",
  traps: "(E) asks about eliminating the fungus, but the stimulus already says the wholesale price is not expected to fall, so that route is closed. (D) quantifies the damage without telling you what happens to the retail price.",
  take: "When one input's price rises, check the other inputs before concluding the finished good gets dearer."
},
"cr-club-eval-paradox#9": {
  fast: "A patent lets the firm charge ten times variable cost, well above the five times it needs.",
  traps: "(D) and (E) both make profits less likely, deepening the puzzle instead of resolving it. (B) restates that development is expensive, which is the part of the stimulus we already accept.",
  take: "A paradox about a price being too high is usually resolved by whatever lets the seller charge more."
},
"cr-club-eval-paradox#10": {
  fast: "Renting specialists part-time gives the hospital high-margin work without the salary it cannot pay.",
  traps: "(A) and (B) presuppose the specialty care the hospital does not yet have: better rates and advertising are worth nothing with no specialists to deliver the service. (D) informs the public without changing any of the hospital's economics.",
  take: "To break a vicious circle, attack the link that the rest of the circle depends on, not its symptoms."
},
"cr-club-eval-paradox#11": {
  fast: "Better weather sent far more people into the death-zone, so a lower risk each still meant more deaths.",
  traps: "(C) makes the death-zone milder, which makes the record toll harder to explain rather than easier. (D) says equipment protects climbers in bad weather, which again predicts fewer deaths in a good year, not more.",
  take: "When a total rises while the per-person risk falls, the resolution is almost always a larger exposed population."
},
"cr-club-eval-paradox#12": {
  fast: "Services are consumed in Country X; goods must be imported home and taxed on the way.",
  traps: "(B) explains a preference for newer stock but leaves the price gap unexplained, and the stimulus frames the puzzle in purely monetary terms, taking care to rule out sales taxes. (C) and (E) describe attitudes and third currencies that change nothing about what the shopper pays.",
  take: "Goods and services behave differently across a border; a good has to be brought home."
},
"cr-club-eval-paradox#13": {
  fast: "The new restaurant enlarges the town's pool of diners and overflows its own seating into Andrew's.",
  traps: "(A) explains why Andrew's might hold its customers but not why it gained a significant number. (B) covers only Sundays, too narrow to lift the daily average significantly, and (C) and (E) compare profit and weekday patterns rather than volume.",
  take: "A new entrant can grow the market; do not assume competitors only divide a fixed one."
},
"cr-club-eval-paradox#14": {
  fast: "City Y families carry heavy private-school costs, an expense outside the housing figure.",
  traps: "(B) would make City X cheaper still, widening rather than closing the gap, and the stimulus already says fuel and insurance are exorbitant in both. (C) is about the price of a house rather than the share of income spent, and (D) describes optional luxuries.",
  take: "When one cost category contradicts an overall ranking, look for a large cost outside that category."
},
"cr-club-eval-paradox#15": {
  fast: "They attack severity research and fund technology research, which are two different things.",
  traps: "(C) explains their motive for opposing regulation but leaves the funding of climate science entirely unexplained. (E) says they see no benefit in any climate research, which contradicts the fact that they are paying for some.",
  take: "When one actor seems to both attack and support a thing, check whether it is really the same thing."
},
"cr-club-eval-paradox#16": {
  fast: "The power is generated and then sold abroad, so it never reaches the citizens.",
  traps: "(B) describes demand, but the stimulus has already told us generation exceeds the country's needs, appliances included. (E) and (C) point to unused capacity, which only sharpens the puzzle of why the existing surplus is not reaching people.",
  take: "When supply exceeds demand yet shortages occur, follow where the supply actually goes."
},
"cr-club-eval-paradox#17": {
  fast: "Supply grew, but demand grew faster, so the price did not fall.",
  traps: "(B) makes ostriches hard to breed, which contradicts the stated quadrupling of farms and flooded markets. (E) puts the meat in more shops, which increases availability and would push the price down further.",
  take: "A price that will not move when supply jumps means demand moved too."
},
"cr-club-eval-paradox#18": {
  fast: "Regular worship attendance builds community that spread-out housing otherwise would not.",
  traps: "(D) makes exurbia safer, but feeling safe is not the same as feeling connected to a community. (A) and (C) concern cost of living and school spending, neither of which brings people into contact with one another.",
  take: "Feeling connected comes from shared institutions and repeated contact, not from physical density."
},
"cr-club-eval-paradox#19": {
  fast: "More people joining the workforce than leaving it would raise the number of employee returns, which is the one thing that stayed flat.",
  traps: "(E) looks like a repeat of the stimulus, but higher pay per person raises revenue with the same number of filers, which is exactly an explanation. (B), (C) and (D) each route the extra revenue around employees entirely.",
  take: "In an EXCEPT paradox, the answer often contradicts a stated fact instead of merely failing to explain it."
},
"cr-club-eval-paradox#20": {
  fast: "A new shopping centre drawing outsiders enlarges the sales base the four percent is levied on.",
  traps: "(E) brings weekend visitors, but a magazine listing is vague about volume where the shopping centre is concrete and local. (B) has residents leaving, which shrinks both tax bases, and (D) is about other towns' rates rather than Amtown's revenue.",
  take: "To complete an argument, supply the fact that closes the specific numerical gap the stimulus states."
},
"cr-club-eval-paradox#21": {
  fast: "The James Street riders all moved to Green Street, where the loading delay is now bigger than the stop that was cut.",
  traps: "(D) describes congestion that existed before and after the change, so it cannot explain an increase. (E) reports the same outcome on another line without explaining either, and (B) moves only a small percentage away.",
  take: "Removing a bottleneck often just relocates it; ask where the load went."
},
"cr-club-eval-paradox#22": {
  fast: "Residents voted for the hotel; the survey asked prospective newcomers, a different group.",
  traps: "(A) tries to resolve the conflict by ranking the two preferences, but that leaves the same people holding both views and does not explain the vote. (D) questions whether the revenue reaches the schools, which is about the controller's reasoning rather than the clash of opinions.",
  take: "When two pieces of evidence about 'what people think' conflict, first check that they surveyed the same people."
},
"cr-club-eval-paradox#23": {
  fast: "The patients were released but the outpatient treatment was never funded, so only half the plan happened.",
  traps: "(C) says the budget merely kept pace with inflation, which is a much weaker claim than funding never arriving at all and does not account for a plight worse than ever. (A) and (E) add diagnoses and addiction histories without connecting them to the released patients' care.",
  take: "When a two-part plan produces a bad outcome, check whether both parts were actually carried out."
},
"cr-club-strengthen#1": {
  fast: "A second, different group wrongly classed as poor turns one anecdote into a systematic defect.",
  traps: "(A) is the reverse: if cash income is nearly all of disposable income for 99% of those counted, the flaw is negligible and no change is needed. (C) reports that other methods give a different number, which says nothing about which method is correct.",
  take: "To support 'the method must change', show the error is systematic, not that someone else got a different figure."
},
"cr-club-strengthen#2": {
  fast: "The gatekeeper argument holds only if patients cannot pressure doctors into prescribing.",
  traps: "(C) has physicians seeing the same advertisements, which makes the gatekeeper more susceptible to influence, not less. (B) limits how many consumers see the ads without addressing what happens when one of them asks.",
  take: "When an argument relies on a gatekeeper, the support it needs is that the gatekeeper cannot be swayed."
},
"cr-club-strengthen#3": {
  fast: "Incentives have already delivered conservation gains once, so recommending them again is grounded.",
  traps: "(E) says the clean-technology market is small, which undercuts the promised commercial payoff rather than supporting the recommendation. (D) ranks the two problems against each other without touching whether incentives help with either.",
  take: "When a conclusion recommends a particular means, a precedent for that means is the strongest support."
},
"cr-club-strengthen#4": {
  fast: "Same number of overdue books and same number of overdue days means the higher rate really does collect more.",
  traps: "(A) is the opposite: far fewer books borrowed means fewer books to become overdue, cutting the revenue base. (D) confirms the statistics are accurate without addressing the missing second factor.",
  take: "When revenue is a rate times a quantity, a strengthener usually pins down the quantity the argument left open."
},
"cr-club-strengthen#5": {
  fast: "Beach-front prices only transfer to old industrial docks if buyers will pay up in such districts.",
  traps: "(E) says interior properties cost significantly more than waterfront ones, which argues against the waterfront being the profitable place to build. (C) confirms lots are available without saying anyone will buy the homes.",
  take: "Check whether the evidence's setting matches the recommendation's setting before anything else."
},
"cr-club-strengthen#6": {
  fast: "Charters can experiment, and experimenting with writing curricula raises writing scores.",
  traps: "(C) gives charter schools more time on writing but never says more time produces better results. (B) concerns only the very top of the distribution, which says nothing about the average.",
  take: "To support a claim about average performance, link the group's distinguishing feature to performance itself."
},
"cr-club-strengthen#7": {
  fast: "A suspension permanently bars a player from the All-Star team that most of them are chasing.",
  traps: "(D) points to another league with the policy and fewer fouls, but that is a correlation between two leagues that may differ in many ways, and it never shows the suspensions caused the difference. (A) and (C) establish that fouls are harmful and that parents approve, neither of which deters a player.",
  take: "To show a penalty will work, show the penalty takes away something the target values."
},
"cr-club-strengthen#8": {
  fast: "Their leap needs absolute safety to be the criterion, and (C) supplies that principle.",
  traps: "(D) is fatal rather than helpful: if no appliance is ever completely safe, the advocates' standard disqualifies everything and becomes useless. (B) adds more injuries but leaves the leap from 'some risk' to 'not standard' unsupported.",
  take: "When an argument applies an absolute standard, the strengthener is the principle that establishes that standard."
},
"cr-club-strengthen#9": {
  fast: "The cherry trade buys trading relationships that deliver cheaper goods elsewhere.",
  traps: "(B) and (E) offer diplomatic and cultural benefits, and the conclusion specifically claims an economic rationale. (D) says growers could charge a premium at home, which is a reason not to export at all.",
  take: "Match the kind of justification the conclusion names: economic, political or moral."
},
"cr-club-strengthen#10": {
  fast: "The rural evidence carries over only if cities pose no extra problems.",
  traps: "(B) and (D) both say the opposite: wireless works best at low density and costs more among large buildings, which are urban conditions. (C) piles on more rural evidence, which is the kind the argument already has too much of.",
  take: "When evidence and conclusion sit in different settings, the strengthener says the settings are comparable."
},
"cr-club-strengthen#11": {
  fast: "Spoilage costs more than mini-bar sales bring in, so the mini-bar is losing money already.",
  traps: "(E) shows the empty fridge is cheaper to maintain but ignores the sales revenue given up, so it cannot establish a net gain on its own. (C) notes that some guests buy nothing, which is consistent with the mini-bar still being profitable overall.",
  take: "To support dropping a revenue-generating line, show the line costs more than it earns."
},
"cr-club-strengthen#12": {
  fast: "Six in ten drivers make the same daily cross-county trip, exactly the traffic a commuter train absorbs.",
  traps: "(E) is the opposite case: transcontinental trucks cannot use a commuter train and would stay on the freeway. (A) adds a large extra cost, undercutting the claim that the tunnel is the cheaper option.",
  take: "Before backing a transport plan, check that the traffic it targets is the kind it can carry."
},
"cr-club-strengthen#13": {
  fast: "Fast Fries grew faster than everything else on the menu, so the new oil did not hold them back.",
  traps: "(D) is exactly the objection the argument needs to rule out: more than twenty percent more customers buying only ten percent more fries means each visitor bought fewer. (C) states a taste preference for the old oil, which supports the company's claim rather than the argument against it.",
  take: "A growth figure supports a claim only once you know the baseline the rest of the business set."
},
"cr-club-strengthen#14": {
  fast: "Every manatee swims within reach of boat propellers, which matches the claim that none is safe.",
  traps: "(A) covers several animals and (E) an unknown number of unreported deaths, neither of which reaches every manatee. (D) speaks to the survival of the population rather than the safety of each individual.",
  take: "Match the scope of the support to the scope of the conclusion; a universal claim needs universal evidence."
},
"cr-club-strengthen#15": {
  fast: "Sports betting is gambling, and (D) forbids officers to gamble, which completes the syllogism.",
  traps: "(A) says gambling is illegal in many places, which leaves open the many places where it is not and never reaches 'never'. (E) and (C) offer moral and financial misgivings that fall well short of an absolute prohibition.",
  take: "When a premise sorts something into a category, the strengthener is the rule governing that category."
},
"cr-club-strengthen#16": {
  fast: "Ethanol wins on carbon monoxide and (A) guarantees it loses on no other pollutant.",
  traps: "(B) and (D) concern price and manufacturing capability, which bear on practicality rather than on which fuel is environmentally better. (C) addresses supply, which the claim never rests on.",
  take: "When a comparison rests on one measure, the strengthener closes off the measures left unmentioned."
},
"cr-club-strengthen#17": {
  fast: "Alex is calm when he gets the gesture he asked for, so the aggression tracks the meaning of his request.",
  traps: "(B) is about gorillas, which are primates and therefore already covered by the conclusion rather than an exception to it. (A), (C) and (D) describe trainable or emotional behaviour in other animals without any use of language.",
  take: "A single case becomes evidence once you know the behaviour disappears when the condition is removed."
},
"cr-club-strengthen#18": {
  fast: "A limit on buildings is not a limit on residents when each building can be an apartment block.",
  traps: "(A) reports mixed results elsewhere, which is too vague to show this plan will fail. (B) and (E) describe the town's existing schools and rubbish arrangements without bearing on whether the cap works.",
  take: "When a policy regulates a proxy, attack it by showing the proxy and the real target can move apart."
},
"cr-club-strengthen#19": {
  fast: "Three times the housing stock at more than twice the share means far more homes actually listed.",
  traps: "(A) and (B) make Florida homes cheaper and easier to finance, which is about affordability rather than the size of the selection. (C) reports Texas construction growth, which if anything narrows Florida's advantage.",
  take: "A conclusion about counts drawn from percentages always needs the sizes of the two bases."
},
"cr-conditional-class#1": {
  fast: "Heavy rain forces above-average height, and half of an above-average height beats half of the average.",
  traps: "(B) is the mistaken reversal: a long taproot could come from other causes. (C) is the mistaken negation: rain is not the only thing that makes the plant grow. (A) and (D) both assume rainfall is the sole determinant of height, which the stimulus never says.",
  take: "A fixed ratio between two quantities lets you transfer any conclusion from one to the other."
},
"cr-conditional-class#2": {
  fast: "Socialist to influenced to not totalitarian is the whole chain, and (A) is its endpoint.",
  traps: "(B) and (E) reverse the chain, treating 'did not advocate a totalitarian state' as the trigger rather than the result. (C) invents an exclusivity claim about who influenced whom. (D) invents a socialist-or-communist split among the influenced that the premises never establish.",
  take: "Two conditionals that share a term chain in one direction only; the reverse is never guaranteed."
},
"cr-conditional-class#3": {
  fast: "Popular with faculty forces unpopular with students, which forces the new policy.",
  traps: "(D) swaps the two groups: popularity among students forces unpopularity with the faculty, which calls for modification, not a new policy. (B) and (C) add conditions about reducing popularity that nothing in the stimulus supports. (A) recommends an action the stimulus never mentions.",
  take: "An 'A or B' premise is a conditional in disguise: not A gives B."
},
"cr-conditional-class#4": {
  fast: "Contrapositive of 'financial problems block happiness' is 'happy means no financial problems'.",
  traps: "(B) and (C) treat the absence of financial problems as enough for happiness, but the passage makes it only necessary. (D) reverses the conditional: plenty of other things can make people unhappy. (A) makes a sweeping claim about all unhappiness.",
  take: "'Only if' marks a necessary condition; do not read it as a guarantee."
},
"cr-conditional-class#5": {
  fast: "Reverse and negate the whole chain: writing essays implies using a computer implies some skills.",
  traps: "(A) and (D) run the chain forwards from a negated term, which proves nothing: skills and computer access are necessary, not sufficient. (B) and (E) are mistaken reversals, treating the inability to word-process as evidence of the earlier failures.",
  take: "Negative conditionals chain just like positive ones; take the contrapositive of the whole chain in one step."
},
"cr-conditional-class#6": {
  fast: "The rule has two halves; the argument uses one, so the unused half is the inference.",
  traps: "(B) is the mistaken negation: removing the scandal removes the guarantee of defeat, not the possibility of it. (C) reverses the rule, making scandal necessary for censure. (D) and (E) add facts about benefits and detection that the stimulus never supplies.",
  take: "When a rule states two consequences, the one the argument ignores is usually the answer."
},
"cr-conditional-class#7": {
  fast: "No police to no enforcement needs police to be the only possible enforcer.",
  traps: "(B) is the mistaken negation turned into a promise, and an assumption need not make the conclusion reversible. (A) is far too broad, covering all commands and all obedience. (C) and (D) describe differences and purposes the argument never relies on.",
  take: "When an argument rules out one means to an end, its assumption is that no other means exists."
},
"cr-conditional-class#8": {
  fast: "Passing the test means knowing the city at least as well as she does.",
  traps: "(A) turns increased enjoyment of a good novel into enjoyment of virtually anything. (B) and (D) reverse her conditional, treating knowing the city as necessary for trust rather than as the setting in which the test applies. (C) assumes the first novel shared the second one's setting, which the passage never says.",
  take: "Read a stated criterion literally and the inference is usually just the criterion applied."
},
"cr-conditional-class#9": {
  fast: "Inspired to good show to sophisticated listeners; contrapose and you have (A).",
  traps: "(C) and (E) run the chain backwards, treating the necessary conditions as sufficient to produce inspired performances. (B) and (D) turn the understanding of musical roots into something that guarantees or blocks a good show, but it is only necessary for being a sophisticated listener.",
  take: "Necessary conditions chain forward with the argument and only the contrapositive runs backward."
},
"cr-conditional-class#10": {
  fast: "Consequent denied, so the antecedent fails: some Puerta segment does not back Quintana.",
  traps: "(C), (D) and (E) are sweeping 'each segment' claims that neither speaker comes close to supporting. (A) concerns a segment backing neither man, which nothing in the exchange establishes.",
  take: "When a speaker's data contradicts a conditional's consequent, the inference is the negated antecedent."
},
"cr-conditional-class#11": {
  fast: "Having everything a garden needs is not the same as having everything it takes.",
  traps: "(B) and (C) name causal errors, but the argument is purely conditional and asserts no correlation. (A) quibbles with a word that does no work in the flaw. (E) invokes sampling, though only one garden is discussed and no generalisation is drawn.",
  take: "'Without X it will not happen' makes X necessary; concluding success from X alone is the classic flaw."
},
"cr-guide-inference#1": {
  fast: "More molecules held means more effective, so three beats one: (C).",
  traps: "(A) is the most tempting: greater effectiveness is not a guarantee of success. (B) adds the word 'only', which the passage never supports.",
  take: "Inference answers restate a comparison already in the text; anything with 'will', 'only' or 'each' needs explicit support."
},
"cr-guide-inference#2": {
  fast: "Runoff gives phosphorus, phosphorus gives plankton, so runoff contributes to plankton: (E).",
  traps: "(A) is the classic over-generalisation from one region to every body of water. (D) treats a doubled concentration as a doubled volume.",
  take: "Chain two adjacent facts and keep the scope (this river, this region) exactly as given."
},
"cr-guide-inference#3": {
  fast: "'Helps make more vulnerable' becomes 'depends at least in part': (B).",
  traps: "(A) is the strength trap: 'helps' is not 'main factor'. (E) sounds like the last sentence but adds 'whenever' and 'are able', turning a tendency into a guarantee.",
  take: "Match the strength of the answer to the strength of the text; hedged answers win inference questions."
},
"cr-guide-inference#4": {
  fast: "Managers hire only very large firms, so small award-winners cannot dent Baxe's monopoly: (E).",
  traps: "(D) invents a reason (unawareness) when the passage already supplies one (bankruptcy fears). (C) turns 'won awards' into 'superior for the most part'.",
  take: "When the passage gives the mechanism, the inference is what that mechanism implies, not an alternative story."
},
"cr-guide-inference#5": {
  fast: "(C) is the forbidden combination from the last sentence: prominent, science-devoted, no affection for animals.",
  traps: "(A) sounds like a contradiction but 'greater love for science' still allows love for animals. (D) concerns motives at research centres, which the passage leaves open.",
  take: "For CANNOT-be-true questions, find the one choice that directly negates a stated fact; the rest merely go beyond it."
},
"cr-guide-inference#6": {
  fast: "Most lose their voices, and the cause is strain, so most strain their cords: (E).",
  traps: "(B) quotes the explanation the author explicitly dismisses. (A) misreads 'most likely to ruin' as 'the only ones who ruin'.",
  take: "When a passage rejects one explanation and offers another, inferences follow from the author's explanation, not the rejected one."
},
"cr-guide-inference#7": {
  fast: "No intervention means not the full complement, so at least one species lost, for most forests: (A).",
  traps: "(B) is tempting because endangered species are mentioned, but losing 'at least one species' is far weaker than 'many endangered species will not survive'.",
  take: "'X requires Y' gives 'no Y, no X'; the inference is the contrapositive, applied only to the group the passage covers."
},
"cr-guide-inference#8": {
  fast: "Incapable of emotion means no deep emotion expressed, so no great art: (D).",
  traps: "(A) is the wording trap: capability is not actual experience. (C) is the necessary-versus-sufficient flip.",
  take: "Chain two conditionals and then read the contrapositive; the correct answer is usually stated in that negative form."
},
"cr-guide-inference#9": {
  fast: "Liberties done; add economic success and the rule fires: (C).",
  traps: "(E) swaps in the environment, which the second sentence says is irrelevant to overall success. (B) assumes the missing condition fails.",
  take: "With a two-part sufficient condition and one part satisfied, the valid inference is conditional on the other part."
},
"cr-guide-inference#10": {
  fast: "Interest is irrelevant to most customers, so companies will not sell on rates: (B).",
  traps: "(D) is close in topic but concerns the length of the grace period, about which nothing is said. (E) adds an idea (websites) foreign to the passage.",
  take: "Complete-the-argument stems are inference questions: combine the two premises and stay inside their vocabulary."
},
"cr-guide-inference#11": {
  fast: "A shift toward half-paying students lowers average revenue unless fees rose: (E).",
  traps: "(C) is the number-versus-percentage trap: a smaller share can still be a larger number if total enrolment grew. (B) reads two facts placed side by side as cause and effect.",
  take: "Percentage shifts between groups paying different amounts change the average; hold the average fixed and something else must move."
},
"cr-guide-inference#12": {
  fast: "'Distinctively his' answers whether the works are derivative: (E), answered no.",
  traps: "(C) is tempting because the passage sounds approving, but reputation is never mentioned. (D) confuses Glass reviving a practice with others following him.",
  take: "A 'helps answer which question' item is an inference item: the passage must contain the answer, even if the answer is no."
},
"cr-guide-inference#13": {
  fast: "Each child's 'rolling pin' was his own distinct pin, so no shared referent: (B).",
  traps: "(E) says the opposite of what happened: the children distinguished their own pins perfectly. (D) generalises from rolling pins to every utensil.",
  take: "Read the experimental result literally and state only what it shows about each subject."
},
"cr-guide-inference#14": {
  fast: "Clues sufficient for the detective are in the story, so some stories give enough clues: (C).",
  traps: "(A) is the 'often' to 'most' upgrade. (E) misassigns the diverting role: the companion's wrong inference diverts, not clues he uncovers.",
  take: "'Often' supports 'some', never 'most'; pick the weakest claim the facts guarantee."
},
"cr-guide-inference#15": {
  fast: "Three tiers above a floor of 12 put the top ten at 14 or more: (D).",
  traps: "(A) is the number trap: only 30 of 200 students are described. (C) jumps from a study to all young adults.",
  take: "With 'fewest', 'greatest' and a floor, count the tiers; must-be-true answers are often arithmetic."
},
"cr-guide-inference#16": {
  fast: "130 is over 120, so a Topnotch graduate with 130 is possible: (D).",
  traps: "(A) fails on the boundary (150 is not over 150) and on the missing application. (E) confuses being accepted with attending.",
  take: "In threshold logic, 'over' excludes the boundary; 'possible' answers need only be consistent with the facts."
},
"cr-guide-inference#17": {
  fast: "Obese is defined as the top 15 percent; a larger 15 percent means a larger whole and a larger 85 percent: (C).",
  traps: "(B) supplies a plausible cause, but the passage gives none. (E) confuses change over 15 years with change as children age.",
  take: "When a category is defined as a fixed percentile, a change in its count is really a change in the whole population."
},
"cr-guide-inference#18": {
  fast: "Constant sales with a falling share means a bigger market, so rivals sold more, not less: (A) is impossible.",
  traps: "(B) looks contradictory but describes the earlier period, when Marvel's share rose and others' share therefore fell.",
  take: "Share = own sales ÷ total; hold own sales fixed and a falling share forces the total, hence the others, upward."
},
"cr-guide-inference#19": {
  fast: "Different eras, radically different beliefs, unique meanings: the same interpretation across eras is impossible, (B).",
  traps: "(D) may look like it conflicts, but the critic says different eras give different beliefs, not that the same era gives identical ones.",
  take: "'Could be true EXCEPT' asks for the one choice that contradicts the statements; a shared interpretation across eras does."
},
"cr-guide-inference#20": {
  fast: "9 percent more poultry over 6 percent more people means more poultry per head: (C).",
  traps: "(B) misreads '9 percent versus 4.5 percent' as 'twice as much', but those are growth rates, not amounts. (A) guesses about the newcomers.",
  take: "Only ratios of percentages are inferable from percentages; absolute comparisons need absolute numbers."
},
"cr-guide-inference#21": {
  fast: "More money from fewer films gives a higher average per film: (D).",
  traps: "(E) assumes revenue growth came from more viewers rather than higher prices. (A) treats a schedule as a revenue forecast.",
  take: "Revenue and film counts determine averages; attendance and prices need separate data."
},
"cr-guide-inference#22": {
  fast: "Faster growth than the total means a bigger share of the total: (C).",
  traps: "(B) is the number trap: a 50 percent rise in a small component can fit within a 10 percent rise in the total without any other component falling.",
  take: "A component growing faster than the whole gains share; whether other components shrank depends on the unknown starting split."
},
"cr-guide-inference#23": {
  fast: "Share down, population up: some other region must have grown faster in percentage terms, (E).",
  traps: "(C) over-claims: one fast-growing region is enough to shrink Korva's share. (D) confuses numerical increase with percentage growth.",
  take: "A falling share of a growing total means someone else grew faster; 'at least one' is all the arithmetic guarantees."
},
"cr-live-infer#1": {
  fast: "Percentage fell, number concluded: the flaw is ignoring that the total base may have grown.",
  traps: "(A) attacks the data rather than the inference from it; the question accepts the percentage as given. (B), (C) and (E) are about complaints and customer beliefs, which the argument never uses as evidence for its numerical conclusion.",
  take: "Whenever a CR argument moves from a percent to a count, check the base before anything else."
},
"cr-live-infer#2": {
  fast: "A rising share can come from a shrinking total; (D) shrinks the non-plastic waste.",
  traps: "(A) moves plastic between landfill and incinerator, which changes nothing about the total plastic. (E) is about manufacturing, not about what reaches waste companies, and manufacturing could stay flat while discarded plastic rises. (B) and (C) do not touch the percentage-to-amount step.",
  take: "To weaken a percent-to-number conclusion, show the denominator moved, not that the numerator is doubtful."
},
"cr-live-infer#3": {
  fast: "Three points less of a much larger total can be more retirees, not fewer; (C) says the total grew.",
  traps: "(A) says Florida still leads, but a leading share can still shrink in absolute terms, so it does not address the decline. (B) makes things worse for Florida. (D) and (E) are about distance and another state and leave the numbers untouched.",
  take: "Percentage points down does not mean people down; ask what happened to the whole group."
},
"cr-live-infer#4": {
  fast: "Constant fraction with a rising numerator forces a rising denominator, so total eating rises.",
  traps: "(A) and (C) compare with groups the statements never mention. (E) is tempting as a health guess but weight is not the same as amount eaten, and more food would if anything suggest the reverse. (D) confuses more food with more kinds of food.",
  take: "A percentage plus one absolute number lets you deduce the other absolute number."
},
"cr-live-infer#5": {
  fast: "A 4.50 dollar card used under 45 copies earns more than 10 cents a copy, so revenue rises.",
  traps: "(E) sounds like a revenue claim but if cards are fully used the library earns 9 cents a copy instead of 10, so revenue can fall. (A), (B) and (D) predict patron behaviour that nothing in the passage determines.",
  take: "When a CR stem has prices and quantities, do the sums; the supported inference is the one the arithmetic forces."
},
"cr-live-infer#6": {
  fast: "Two majorities of one population overlap, so some no-research investors profit.",
  traps: "(A) upgrades some broker-followers and some hunch-players to most, which the passage never states. (B) and (D) claim all, far stronger than any premise. (C) quantifies a subgroup whose profit rate is unknown.",
  take: "Most plus most on the same group yields some overlap; that is the strongest inference such premises allow."
},
"cr-live-infer#7": {
  fast: "Refined gold was not Senegalese, and only Senegalese gold reached 92 percent, so it started lower.",
  traps: "(D) contradicts the passage, since the refined coins were much purer than 92 percent. (E) reverses the facts: Senegalese gold was the gold minted unrefined. (B) and (C) are about weight and value, which are never discussed.",
  take: "Chain the superlative (purest known) with the exclusion (never refined) and the inference falls out."
},
"cr-live-infer#8": {
  fast: "Apartments lead to residents, congestion, new roads and then taxes: that is (B).",
  traps: "(A) and (C) assume that if the first step is blocked nothing downstream can happen, but apartments or tax rises could arise another way. (D) and (E) are mistaken negations: no apartments does not mean no congestion or no taxes.",
  take: "In a conditional chain, only forward travel and the contrapositive are valid; negating the front end proves nothing."
},
"cr-live-infer#9": {
  fast: "The conclusion needs police to be the only possible enforcer of international law, which is (E).",
  traps: "(B) is the mistaken reversal: police are necessary for effective law, not guaranteed to be sufficient. (A) is about obedience, not about laws being effective. (C) and (D) go far beyond what is claimed.",
  take: "When an argument treats one missing item as fatal, it is assuming that item is the only way to satisfy the requirement."
},
"cr-live-infer#10": {
  fast: "More reports, not more poisoning: banquet groups notice a shared illness and report it.",
  traps: "(A) deepens the paradox, since more restaurant diners should mean more restaurant cases. (B) also makes caterers look safer and explains nothing about the reports. (C) and (D) remove side issues without touching the gap.",
  take: "When the data are reported cases, a difference in reporting is the first explanation to test."
},
"cr-live-infer#11": {
  fast: "Clients audit only when profit rises with cost, so fixed-profit jobs go unwatched and overrun.",
  traps: "(E) is the classic trap: exaggerated estimates would make overruns less likely under fixed profit, the opposite of what needs explaining. (B) and (C) apply equally to both kinds of contract. (A) is about whether a contract is signed, not about overruns.",
  take: "To resolve a paradox, find a factor that differs between the two cases and pushes in the observed direction."
},
"cr-live-infer#12": {
  fast: "Past success proves nothing if patients are now sicker and the decisions harder, which is (B).",
  traps: "(A) strengthens Quincy by saying nothing has changed. (C) and (E) are reasons to keep long shifts, so they help Quincy. (D) is about variation between specialties, not about whether past records still apply.",
  take: "Against a precedent argument, look for the choice that says the present case differs in a relevant way."
},
"cr-live-infer#13": {
  fast: "Knowing Mary likes violets does not force sending violets; (B) frees the sender to choose roses.",
  traps: "(C) makes the stranger branch less likely and so supports the conclusion rather than weakening it. (D) is about the florist's record and is at best a mild point. (A) and (E) leave both conditionals intact.",
  take: "A dilemma argument is weakened by showing one horn can be satisfied without the mistake it blames."
},
"cr-live-infer#14": {
  fast: "If a few birds answer the toxin question, the industry has no reason to hand over the rest.",
  traps: "(C) and (E) describe benefits of the program and do nothing to undermine the count. (A) and (D) concern which toxins are present and are irrelevant to how many birds get handed in.",
  take: "Plan questions: ask whether the incentive offered is enough to produce all of the behaviour the plan needs."
},
"cr-live-infer#15": {
  fast: "Out of context, the opening argument against oneself becomes a damaging sound bite, which is (A).",
  traps: "(D) supports the recommendation. (B) and (C) say some voters are unmoved by character or by politicians' arguments, which limits the technique only slightly and applies to any technique. (E) is irrelevant to whether the technique works.",
  take: "Check whether the setting in which a recommendation will be applied matches the setting in which the evidence was gathered."
},
"cr-live-infer#16": {
  fast: "Older cohorts are mostly women, and women are less often left-handed, so the share falls with age.",
  traps: "(B) removes one possible explanation (accidents) and so deepens the puzzle. (C) does not say ambidexterity increased or decreased over time. (D) is about how many were born, not about handedness, and (E) is a ceiling that explains no variation.",
  take: "Age-band differences can come from who survives into each band, not only from how each generation was raised."
},
"cr-live-infer#17": {
  fast: "Contamination would have aged the top sample too, and it dates to the present, so (A) refutes it.",
  traps: "(D) confirms the internal consistency of the series, but uniform contamination could still leave the order intact, so it does not answer the skeptics. (B) and (E) help the skeptics. (C) is about people burning coal, which was never the skeptics' claim.",
  take: "Attack a proposed mechanism by showing a case where it should have acted and demonstrably did not."
},
"cr-live-infer#18": {
  fast: "If low birth weight itself triggers the 'inadequate care' label, the correlation is circular.",
  traps: "(E) strengthens the argument by supplying a mechanism. (A) and (D) give a few exceptions, which a statistical claim tolerates. (C) is about premature classification and does not touch the care comparison.",
  take: "Before accepting a correlation, ask how the categories were assigned; labels defined by the outcome prove nothing."
},
"cr-live-assume#1": {
  fast: "Plausible parts do not make a plausible whole; that is the composition error in (D).",
  traps: "(A) and (C) accuse the argument of attacking the critic, but the argument only addresses the incidents. (B) is about agreement, which nobody appeals to. (E) alleges circularity, yet the reason given is independent of the conclusion.",
  take: "Watch for arguments that pass a property from every member to the group; parts and wholes can differ."
},
"cr-live-assume#2": {
  fast: "Better feed means fewer cows are needed for the same meat, so total methane drops twice over.",
  traps: "(A) is about whether farmers would adopt the diet, not about what happens if they do, which is what the conclusion states. (D) and (E) are chemistry and climate facts that leave the quantity of methane unchanged. (B) redistributes methane across cow types without reducing it.",
  take: "For a 'total' conclusion, strengthen by attacking both factors of the product: amount per unit and number of units."
},
"cr-live-assume#3": {
  fast: "If Homer's texts were available, non-translation can only mean no demand, which is (A).",
  traps: "(E) weakens by suggesting Arabs had reason to be interested in the Poetics. (B) and (C) are about other literature and other languages. (D) is about modern poets and says nothing about medieval ones.",
  take: "When an argument reads absence as lack of interest, strengthen it by ruling out lack of opportunity."
},
"cr-live-assume#4": {
  fast: "The drug works, but the argument guesses which of its effects did the work: that is (B).",
  traps: "(A) is about safety, not about what caused the benefit. (D) tells the arguer to study a different question instead of pointing out a flaw in this one. (C) and (E) describe things the argument did not do wrongly.",
  take: "A treatment with several effects cannot be used to prove which effect produced the outcome."
},
"cr-live-assume#5": {
  fast: "A was sufficient, not necessary; denying it proves nothing, which is the flaw in (B).",
  traps: "(A) and (D) describe statements that would actually support the argument's conclusion, not flaws. (C) is about grading importance, which is irrelevant to the logic. (E) concerns students with A's, while Joan has none.",
  take: "If X then Y never yields if not X then not Y; spot the negated conditional and the flaw is named."
},
"cr-live-assume#6": {
  fast: "If all errors are false positives, no real case is missed and needless surgeries drop: (B).",
  traps: "(C) says every positive is correct, which guarantees no unnecessary surgery but leaves open that real cases were missed, the opposite of what is needed. (A), (D) and (E) describe the patients rather than the direction of the errors.",
  take: "For accuracy arguments, separate false positives from false negatives and ask which one the conclusion must exclude."
},
"cr-live-assume#7": {
  fast: "Everybody uses phones tells us nothing about these patients; (D) adds no support.",
  traps: "(B) can look irrelevant, but it eliminates alternative one-sided causes, which strengthens a causal claim. (C) and (E) are easy to dismiss as obvious, yet they show the dose-response pattern that supports causation.",
  take: "In a strengthen-EXCEPT question, the odd one out is often a general fact with no link to the specific cases."
},
"cr-live-assume#8": {
  fast: "Salt kills wheat but not barley, so salination explains the swap between the two crops: (B).",
  traps: "(D) gives a competing explanation, blights, and so undermines the historians. (A) is about water, and irrigation was excessive rather than scarce. (C) and (E) restate the shift without explaining it.",
  take: "The best strengthener for a causal story is a fact that makes the cause predict every part of the observed data."
},
"cr-live-assume#9": {
  fast: "Phony signatures on minor works are exactly how misattributions arise, so (D) strengthens.",
  traps: "(C) is the strongest trap: it explains the equal survival numbers without any misattribution, so it weakens. (A) makes imitation harder and weakens. (B) and (E) are neutral background.",
  take: "Strengthen an inference-to-the-best-explanation by supplying the mechanism and by not offering a rival one."
},
"cr-live-assume#10": {
  fast: "Non-viewers can learn who won from reports and shift their votes; the argument forgets them, which is (B).",
  traps: "(E) is consistent with the argument and does not challenge it. (A) is about turnout, not about whom people vote for. (C) and (D) raise vagueness and unpredictability without showing that winning helps.",
  take: "When premises describe one group and the conclusion covers a larger one, ask who was left out."
},
"cr-live-assume#11": {
  fast: "If the site decays before the technology arrives, waiting loses everything, so ask (A).",
  traps: "(B) is already given as a premise, so it is not open to question. (C) is about what the team does meanwhile, not about this site's knowledge. (D) and (E) do not bear on whether waiting beats studying now.",
  take: "To evaluate a wait-and-see plan, test whether the thing being preserved will still be there at the end of the wait."
},
"cr-live-assume#12": {
  fast: "Rising domestic supply cuts imports only if demand is not rising faster, so ask (D).",
  traps: "(E) is about the timing of conversions and does not affect whether the trend leads to less reliance. (A) compares two domestic sources, which is irrelevant to imports. (B) and (C) are context, not a test of the reasoning.",
  take: "Evaluate questions about self-sufficiency: check the demand side when the argument only cites supply."
},
"cr-live-assume#13": {
  fast: "Hurt versus helped is decided by the share of farmers who are fair-trade, so ask (B).",
  traps: "(A) and (E) ask about remedies, which do not tell us whether the harm described occurs. (C) is about other income and does not change who is hurt. (D) asks a value question the argument does not raise.",
  take: "When a conclusion says a higher percentage, evaluate it by asking for the sizes of the two groups."
},
"cr-live-assume#14": {
  fast: "If the damaging use is at home, classroom monitoring cannot cut injuries much; ask (C).",
  traps: "(E) is tempting but a large share already using correct posture would only mean fewer children to correct, not that the plan fails. (A) and (B) are about other injuries and other causes. (D) is speculative and about the future curriculum.",
  take: "Evaluate a plan by asking whether the plan's reach covers the cause it is meant to remove."
},
"cr-live-assume#15": {
  fast: "Clean chicken that tastes wrong will not sell, so the taste question in (A) decides usefulness.",
  traps: "(B) mixes up capsaicin eaten by people with capsaicin fed to chickens. (D) is about cooking contaminated chicken, but the feed produces uncontaminated chicken. (C) and (E) are background comparisons.",
  take: "Read the stated goal exactly; a plan can meet its technical aim and still fail the commercial one."
},
"cr-live-assume#16": {
  fast: "If the others were just following one fly, no memory is involved; the hypothesis needs (B).",
  traps: "(A) contradicts the hypothesis, which relies on an alarm signal. (C) is compatible with the data but not required. (D) and (E) concern the odor's pleasantness and the shock's strength, neither of which the hypothesis depends on.",
  take: "For a hypothesis assumption, negate the choice and see whether a simpler explanation of the same data survives."
},
"cr-live-assume#17": {
  fast: "Merit explains the pattern only if the qualified pool was itself mostly acquaintances: (B).",
  traps: "(E) is tempting but a policy of requiring surpassing the criteria does not address why acquaintances were preferred among those who surpass. (A) and (C) are about outcomes and volumes, not about bias. (D) says nothing about acquaintance.",
  take: "When an argument explains a suspicious pattern by merit, it assumes merit was not equally present outside the favoured group."
},
"cr-live-assume#18": {
  fast: "All-male schools cannot win; the comparison assumes District 2 is not full of them: (D).",
  traps: "(C) is the strong trap, but larger District 2 schools would make reaching ten girls easier, so it would not explain the lower rate. (B) is about district population, which does not affect a percentage of schools. (A) and (E) are not required.",
  take: "Before comparing success rates, check that every unit in each group was actually eligible to succeed."
},
"cr-live-assume#19": {
  fast: "If bankruptcy just became easier, more filings prove nothing, so the argument needs (C).",
  traps: "(A) and (B) are too strong: the argument need only claim its evidence outweighs the media's, not that their indicators are useless. (D) reverses the direction: more lawyers would not make the reported busyness meaningless. (E) is a generalisation about the media the argument does not rely on.",
  take: "An indicator supports a conclusion only if the argument assumes no alternative cause moved the indicator."
},
"cr-live-assume#20": {
  fast: "Fewer accidents per driver means safer only if the miles driven are comparable: (A).",
  traps: "(C) would weaken the argument by giving another reason for fewer accidents, so it cannot be an assumption. (B) concerns the share of drivers, which does not affect a percentage within each group. (D) and (E) go beyond what is needed.",
  take: "A rate per person supports a claim about behaviour only when exposure per person is assumed equal."
},
"cr-live-assume#21": {
  fast: "Purchase history predicts the buyer's taste only if the buyer was not shopping for others: (C).",
  traps: "(B) contradicts the argument, which relies on similarity appealing. (D) is about privacy and might matter for the plan's acceptability but not for whether the suggestions appeal. (A) and (E) are irrelevant.",
  take: "Recommendation arguments assume that past behaviour reflects the person's own preferences."
},
"cr-live-assume#22": {
  fast: "Same arrests can hide fewer crimes if monitoring catches more of them; the argument needs (C).",
  traps: "(E) is about group sizes, which do not matter for percentages. (A) would introduce a confounder rather than being assumed. (B) and (D) are far stronger than anything the argument needs.",
  take: "When the evidence is a detection statistic, assume equal detection before comparing underlying behaviour."
},
"cr-live-assume#23": {
  fast: "A 10 percent share tops the list only if more than ten varieties divide the rest: (A).",
  traps: "(B), (C), (D) and (E) all wander off to North America, other nurseries and gardeners, none of which the claim about Nursery X depends on.",
  take: "A small percentage can be the largest share only when the number of competing categories is large enough."
},
"cr-live-assume#24": {
  fast: "First: current practice the author opposes. Second: evidence for the author's remedy. That is (B).",
  traps: "(C) calls the first a fact that contradicts the author, but a description of what manufacturers do is not a counter-argument, and the second is evidence rather than the position itself. (D) and (E) wrongly make the second boldface weigh against the author.",
  take: "In boldface questions, locate the main conclusion, then classify each portion as for it, against it, or the thing it opposes."
},
"cr-live-assume#25": {
  fast: "Blocking one method per trial proves nothing if she can switch methods between trials: (A).",
  traps: "(C) is the mirror image: needing two methods at once would make the trials more, not less, conclusive. (E) is far-fetched given three successes and does not describe a reasoning error. (D) is not a flaw at all.",
  take: "Testing alternatives one at a time only works if the same explanation must hold across all the tests."
},
"cr-live-assume#26": {
  fast: "Existing owners buying extra machines would raise the total; the argument assumes they will not, which is (C).",
  traps: "(B) and (D) concern replacement purchases and competitors' prices, neither of which changes how many computers are in homes. (A) and (E) are background facts the conclusion does not depend on.",
  take: "When the evidence covers one group and the conclusion covers a total, the assumption is about the group left out."
},
"cr-live-assume#27": {
  fast: "The conclusion needs the found fossils to be the oldest that exist; (C) says no older ones are buried.",
  traps: "(A) is about living descendants, irrelevant to ancestry of birds. (D) and (E) add detail about which species or features are involved, which the timing argument never uses. (B) concerns flightless dinosaurs and does not affect the age comparison.",
  take: "Arguments from 'the record shows no X' assume the record is complete; absence of evidence is the usual gap."
},
"cr-tp100#1": {
  fast: "She grants the premise and attacks the leap from enabling safe driving to getting safer driving.",
  traps: "(A) and (D) have her disputing the clear view or its relevance, but she accepts both. (B) offers an alternative method, which she never does. (E) reverses her position: her evidence supports, rather than undermines, the idea that better visibility need not mean fewer accidents.",
  take: "When an argument says a measure makes good behaviour possible, the assumption is always that people will behave that way."
},
"cr-tp100#2": {
  fast: "Red in a copy made right after his death means red was the look at the end of his life.",
  traps: "(E) overreaches: the critic addresses how the painting looked at Veronese's death, not what Veronese originally intended, and the tests still say the red went on after completion. (A) generalises from one detail of the copy to the whole copy. (B) and (D) are about restoration policy and artistic value, neither of which the exchange touches.",
  take: "An inference from a rebuttal must stay inside the narrow fact the rebuttal establishes."
},
"cr-tp100#3": {
  fast: "'Little' versus 'sufficient' leverage under the same ban: that is the disagreement.",
  traps: "(B) and (D) are about how much leverage companies should have, a normative question neither speaker addresses. (A) puts a view about temporary replacements into David's mouth; he never mentions them. (E) states David's position, and Lin's remark suggests she would not call the ban unfair.",
  take: "In a point-at-issue question, check that both speakers actually spoke to the issue the choice names."
},
"cr-tp100#4": {
  fast: "He accepts the observation and relocates its cause: it is scepticism about clairvoyance, not a flaw in the definition.",
  traps: "(B) and (C) both reverse him: he never claims clairvoyance yields knowledge as things stand, nor defends its reliability. (D) reframes the definition as personal taste, which would abandon the defence rather than make it. (E) has him rule clairvoyance out of the definition, but he says the opposite would follow if we believed in it.",
  take: "One way to defend a definition is to explain a counterexample by a factor outside the definition."
},
"di-ds-basics-guide#1": {
  steps: "(1) Expanding, \\(x^{2} + (m + n)x + mn = x^{2} + 5x + mn\\), so \\((m + n)x = 5x\\), and since \\(x \\ne 0\\), \\(m + n = 5\\). Sufficient.\n(2) \\(mn = 4\\) allows \\((1, 4)\\), \\((2, 2)\\), \\((-1, -4)\\), with sums 5, 4 and \\(-5\\). Not sufficient.\nAnswer: A.",
  take: "A value question about a combination does not need the individual variables."
},
"di-ds-basics-guide#2": {
  steps: "Cross-multiplying, \\(ab - b = ab + a\\), so the question asks whether \\(a + b = 0\\).\n(1) \\(b = 5\\), \\(a = 1\\) gives no; \\(b = 2\\), \\(a = -2\\) gives yes. Not sufficient.\n(2) \\(a = -b\\) is exactly \\(a + b = 0\\). Definite yes. Sufficient.\nAnswer: B.",
  take: "Simplify the question stem to its bare condition before reading the statements."
},
"di-ds-basics-guide#3": {
  steps: "(1) \\(30y = 900\\) gives \\(y = 30\\), but \\(x\\) is unknown. Not sufficient.\n(2) \\(35 \\cdot 90 = 3.5 \\cdot 30y\\) gives \\(y = 30\\), and \\(x = 90\\), so the total is \\(3150 + 900 = 4050\\). Sufficient.\nAnswer: B.",
  take: "The statements never contradict: (2) must yield the same y as (1), and it does."
},
"di-ds-basics-guide#4": {
  steps: "(1) $16, $16, $16 total 48, not less; $10, $9, $8 total 27. Not sufficient.\n(2) The most expensive book is unbounded. Not sufficient.\nTogether the most expensive is under 17, so the second is under 17 and the cheapest is under 14; the total is under 48. Definite yes. Sufficient.\nAnswer: C.",
  take: "For bound questions, build a case at the boundary to test whether the inequality can fail."
},
"di-ds-basics-guide#5": {
  steps: "(1) Units digit 4 times 1 gives 4 (no), times 2 gives 8 (yes). Not sufficient.\n(2) 7 times 1 gives 7 (yes), 7 times 0 gives 0 (no). Not sufficient.\nTogether \\(4 \\times 7 = 28\\), units digit 8, greater than 5. Sufficient.\nAnswer: C.",
  take: "The units digit of a product depends only on the units digits of the factors."
},
"di-ds-basics-guide#6": {
  steps: "\\(\\tfrac{5^{x+2}}{25} = 5^{x}\\), so the question is whether \\(5^{x} < 1\\), that is whether \\(x < 0\\).\n(1) States exactly that. Sufficient.\n(2) Negative \\(x\\) makes \\(5^{x}\\) a positive fraction below 1. Sufficient.\nAnswer: D.",
  take: "Cancel constants in the stem; both statements may then read as the question itself."
},
"di-ds-basics-guide#7": {
  steps: "(1) \\(n \\times k = 0\\) with \\(k \\ne 0\\) forces \\(n = 0\\). Sufficient.\n(2) \\(n + 0 = 0\\) gives \\(n = 0\\) directly. Sufficient.\nAnswer: D.",
  take: "The zero-product rule is a sufficiency tool: a nonzero cofactor pins the other factor at zero."
},
"di-ds-basics-guide#8": {
  steps: "Let the four cells be red spheres, green spheres, red cubes and green cubes.\n(1) Cubes total 6 and green objects total 5, but the overlap (green cubes) is unknown, so the total is not fixed. Not sufficient.\n(2) One cell only. Not sufficient.\nTogether red spheres 2, cubes 6, green 5: total is \\(2 + 6 + 5 - \\text{green cubes}\\), still open. Not sufficient.\nAnswer: E.",
  take: "Two-set matrix: a total needs the overlap cell, not just the row and column totals."
},
"di-ds-basics-guide#9": {
  steps: "(1) \\(z^{4} > 0\\), so \\(p < 0\\) and \\(z \\ne 0\\), but \\(z\\) can be positive (\\(zp < 0\\), yes) or negative (no). Not sufficient.\n(2) \\(z = 1\\), \\(p = 13\\) gives positive; \\(z = -4\\), \\(p = -2\\) gives positive too, but \\(z = 4\\), \\(p = -2\\) gives negative. Not sufficient.\nTogether \\(p < 0\\) and \\(z = \\pm 4\\) both fit, with opposite answers. Not sufficient.\nAnswer: E.",
  take: "A statement with z squared or z to the fourth never tells you the sign of z."
},
"di-ds-basics-guide#10": {
  steps: "(1) \\(x = 6\\) or \\(x = -6\\). Not sufficient.\n(2) Any negative number. Not sufficient.\nTogether \\(x = -6\\). Sufficient.\nAnswer: C.",
  take: "Squares give two candidates; the A-trap is forgetting the negative root."
},
"di-ds-basics-guide#11": {
  steps: "(1) Without the interest rate the year-end amount is unknown. Not sufficient.\n(2) Without the extra deposits the amount is unknown. Not sufficient.\nTogether the $4,000 could have arrived in January, earning nearly a full year of interest, or on December 31st, earning none, so the total differs. Not sufficient.\nAnswer: E.",
  take: "Timing is a hidden variable in interest problems; two numbers do not make a value unique if a date is missing."
},
"di-ds-basics-guide#12": {
  steps: "\\(M - J = 2(M - K)\\) gives \\(M + J = 2K\\), so the average \\(\\tfrac{M + J + K}{3} = \\tfrac{3K}{3} = K\\).\n(1) Jim's salary alone does not give \\(K\\). Not sufficient.\n(2) The average equals Kate's salary, $40,000. Sufficient.\nAnswer: B.",
  take: "C-trap: simplify the stem relation first; one statement may already answer the question."
},
"di-ds-basics-guide#13": {
  steps: "\\(a^{2} - b^{2} = (a - b)(a + b)\\).\n(1) \\(a - b\\) is unknown. Not sufficient.\n(2) \\(a - b = 0\\) makes the product 0 whatever \\(a + b\\) is. Sufficient.\nAnswer: B.",
  take: "C-trap: when one factor is zero, the other factor does not matter."
},
"di-ds-basics-guide#14": {
  steps: "(1) Consecutive odd integers with a negative product must straddle zero: \\(-1\\) and 1, sum 0. Sufficient.\n(2) The pair could be \\(-3, -1\\) (sum \\(-4\\)) or \\(-1, 1\\) (sum 0). Not sufficient.\nAnswer: A.",
  take: "C-trap: a sign condition can pin integers completely when they are consecutive."
},
"di-ds-basics-guide#15": {
  steps: "(1) One equation, two unknowns. Not sufficient.\n(2) Likewise. Not sufficient.\nTogether both simplify to \\(3a = 7b + 5\\), the same line, so \\(a\\) is still free. Not sufficient.\nAnswer: E.",
  take: "Two equations in two unknowns are sufficient only if they are independent; check for a disguised repeat."
},
"di-ds-basics-guide#16": {
  steps: "The prices total 45.\n(1) 13, 14, 18 has median 14; 12, 13, 20 has median 13. Not sufficient.\n(2) With one book at 15, the other two total 30, so one is at most 15 and the other at least 15: the 15 is always the middle value. Sufficient.\nAnswer: B.",
  take: "A value equal to the mean of three numbers is automatically their median."
},
"di-ds-basics-guide#17": {
  steps: "(1) One equation in two unknowns: \\(a = 11 - 2b\\), so \\(a - b = 11 - 3b\\) takes a different value for every \\(b\\). Not sufficient.\n(2) Collecting terms, \\(4a - 4b = 8\\), so \\(a - b = 2\\) without knowing either variable. Sufficient.\nAnswer: B.",
  take: "The question asks for a combination; a single statement may deliver it after simplification."
},
"di-ds-basics-guide#18": {
  steps: "The units digit of \\(n\\) is that of \\(3^{x} \\cdot 3^{y} = 3^{x+y}\\).\n(1) \\(3^{7}\\) ends in 7 whatever the split. Sufficient.\n(2) \\(y\\) unknown, so the exponent is unknown. Not sufficient.\nAnswer: A.",
  take: "C-trap: the sum of the exponents was enough; individual values were never needed."
},
"di-ds-basics-guide#19": {
  steps: "(1) A ratio gives no counts. Not sufficient.\n(2) One person could have received everything, or two people half each. Not sufficient.\nTogether the per-person amounts are \\(3k, 4k, 5k\\) with \\(3k \\cdot n = 24\\): \\(n = 8\\) (\\(k = 1\\)), \\(n = 4\\) (\\(k = 2\\)), \\(n = 2\\) or \\(n = 1\\). Not sufficient.\nAnswer: E.",
  take: "A ratio and a total fix a product, not the number of people; watch for the C-trap."
},
"di-ds-basics-guide#20": {
  steps: "(1) \\(7x = 2\\) gives \\(x = \\tfrac{2}{7}\\), not an integer; \\(x = 2\\) works too. Not sufficient.\n(2) Same problem with \\(5x = 2\\). Not sufficient.\nTogether \\(7x - 5x = 2x\\) is the difference of two even integers, so it is an even integer and \\(x\\) is an integer; then \\(7x\\) even forces \\(x\\) even. Sufficient.\nAnswer: C.",
  take: "D-trap: parity facts about multiples of x do not make x an integer until they are combined."
},
"di-ds-basics-guide#21": {
  steps: "Let the cost be \\(C\\); the asking price was \\(1.4C\\).\n(1) Sold at \\(0.9 \\cdot 1.4C = 1.26C\\) with profit 403: \\(0.26C = 403\\), \\(C = 1550\\). Sufficient.\n(2) The selling price of $1,953 is not tied to the asking price; the dealer may have discounted by any amount, so \\(C\\) is unknown. Not sufficient.\nAnswer: A.",
  take: "D-trap: read 'initially offered' literally; the final sale need not be at the marked price."
},
"di-ds-basics-guide#22": {
  steps: "(1) Rearranging: \\(b < a\\). Definite yes. Sufficient.\n(2) With \\(c = 2\\) it gives \\(a > b\\); with \\(c = -2\\) dividing flips the sign to \\(a < b\\). Not sufficient.\nAnswer: A.",
  take: "D-trap: cancelling a variable of unknown sign from an inequality is not allowed."
},
"di-ds-basics-guide#23": {
  steps: "(1) \\(a = 5.5\\) gives yes, \\(a = 3\\) gives no. Not sufficient.\n(2) Every value below 4 is below 5. Definite no. Sufficient.\nAnswer: B.",
  take: "D-trap: unless told otherwise, variables can be fractions; test values between the integers."
},
"di-ds-basics-extra#1": {
  steps: "(1) Page size says nothing about the count. Not sufficient.\n(2) An average per page without a total. Not sufficient.\nTogether still no total word count. Not sufficient.\nAnswer: E.",
  take: "Average per unit needs a total to give the number of units."
},
"di-ds-basics-extra#2": {
  steps: "(1) \\(r = 4t\\), scale unknown. Not sufficient.\n(2) \\(r + t = 20\\). Not sufficient.\nTogether \\(5t = 20\\), \\(t = 4\\). Sufficient.\nAnswer: C.",
  take: "A ratio and a total are the standard pair for two unknowns."
},
"di-ds-basics-extra#3": {
  steps: "(1) \\(10a + 4 = 12\\), \\(a = 0.80\\). Sufficient.\n(2) \\(2a < g = 6 - 5a\\) gives \\(a < \\tfrac67\\), a range. Not sufficient.\nAnswer: A.",
  take: "An inequality between the unknowns cannot replace a second equation."
},
"di-ds-basics-extra#4": {
  steps: "(1) The median is the 15th salary, value unknown. Not sufficient.\n(2) Twelve equal salaries do not fix the middle one. Not sufficient.\nTogether: if the 12 are the lowest, the 15th is unknown and larger; if they sit in the middle, the median is 24,000. Not sufficient.\nAnswer: E.",
  take: "A block of equal values fixes the median only if it is known to straddle the middle position."
},
"di-ds-basics-extra#5": {
  steps: "(1) Divide by 25: \\(4X = 25Y\\), so \\(250Y\\) (ten times 25Y) equals \\(40X\\). Sufficient.\n(2) Divide by 50: \\(40X = 250Y\\) directly. Sufficient.\nAnswer: D.",
  take: "Any pair of equivalent amounts fixes a proportional conversion."
},
"di-ds-basics-extra#6": {
  steps: "(1) One equation with unknown printer prices. Not sufficient.\n(2) A ratio only. Not sufficient.\nTogether \\(12s + s = 1300\\), \\(s = 100\\). Sufficient.\nAnswer: C.",
  take: "Ratio plus total."
},
"di-ds-basics-extra#7": {
  steps: "(1) \\(g = 4b\\); purple free. Not sufficient.\n(2) \\(b + p = 64\\), split unknown. Not sufficient.\nTogether \\(b = 48\\), \\(p = 16\\), ratio 3 : 1. Sufficient.\nAnswer: C.",
  take: "Three colours with a total need two more facts."
},
"di-ds-basics-extra#8": {
  steps: "(1) 10 quarts of yellow are needed; supply unknown. Not sufficient.\n(2) 10 available; need unknown. Not sufficient.\nTogether exactly enough. Sufficient.\nAnswer: C.",
  take: "\"Enough?\" needs both the requirement and the supply."
},
"di-ds-basics-extra#9": {
  steps: "(1) Sizes only. Not sufficient.\n(2) One high B score and one low A score leave the averages open either way. Not sufficient.\nTogether still open. Not sufficient.\nAnswer: E.",
  take: "A single maximum or minimum says little about a mean."
},
"di-ds-basics-extra#10": {
  steps: "(1) Total without count. Not sufficient.\n(2) \\(c = s + 40\\), one equation. Not sufficient.\nTogether \\(s = 16\\), average 3.5. Sufficient.\nAnswer: C.",
  take: "Average = total ÷ count; find both."
},
"di-ds-basics-extra#11": {
  steps: "(1) \\(n = 29\\), values unknown. Not sufficient.\n(2) A sum. Not sufficient.\nTogether the 29 different salaries can sum to 913,500 with many different 15th values. Not sufficient.\nAnswer: E.",
  take: "Sum and count give the mean, never the median."
},
"di-ds-basics-extra#12": {
  steps: "(1) Blue unknown. Not sufficient.\n(2) No total. Not sufficient.\nTogether white 12, blue \\(24 - 8 - 12 = 4\\), probability \\(\\tfrac16\\). Sufficient.\nAnswer: C.",
  take: "Probabilities of the complementary colours must be pinned to get the third."
},
"di-ds-basics-extra#13": {
  steps: "(1) \\(7a + 5b = 85\\): \\((a, b) = (5, 10)\\) or \\((10, 3)\\). Not sufficient.\n(2) \\(b = 10\\), no link to \\(a\\). Not sufficient.\nTogether \\(a = 5\\). Sufficient.\nAnswer: C.",
  take: "Check the integer solutions of a single equation before calling it sufficient."
},
"di-ds-basics-extra#14": {
  steps: "(1) A ratio of times only. Not sufficient.\n(2) A joint time only. Not sufficient.\nTogether \\(\\tfrac1R + \\tfrac{4}{3R} = \\tfrac{1}{12}\\), \\(\\tfrac{7}{3R} = \\tfrac{1}{12}\\), \\(R = 28\\) minutes. Sufficient.\nAnswer: C.",
  take: "Joint rate plus the ratio of the two rates fixes each rate."
},
"di-ds-basics-extra#15": {
  steps: "(1) Ten wallets at $24; the extremes are unknown. Not sufficient.\n(2) \\(L = \\tfrac13 H\\), no values. Not sufficient.\nTogether \\(L = 8, H = 24\\) or \\(L = 24, H = 72\\) both fit. Not sufficient.\nAnswer: E.",
  take: "A ratio between the extremes is not a range."
},
"di-ds-basics-extra#16": {
  steps: "(1) At least one person owns neither; how many is open. Not sufficient.\n(2) The overlap alone. Not sufficient.\nTogether the \"only\" groups are still free. Not sufficient.\nAnswer: E.",
  take: "Neither = total − (A or B); an inequality on (A or B) leaves it undetermined."
},
"di-ds-basics-extra#17": {
  steps: "(1) \\(1.04A = 4160\\), \\(A = 4000\\); the difference is \\(0.04A(1.04^{2} - 1)\\), computable. Sufficient.\n(2) \\(1.04^{2}A = 4326.40\\), \\(A = 4000\\). Sufficient.\nAnswer: D.",
  take: "With the rate known, any one balance fixes the whole compound-interest schedule."
},
"di-ds-basics-extra#18": {
  steps: "(1) \\(0.06L = 9.60\\), \\(L = 160\\), total \\(1.06(50 + 160) = 222.60\\). Sufficient.\n(2) \\(0.06(50 + L) = 12.60\\) gives the same \\(L\\). Sufficient.\nAnswer: D.",
  take: "Tax on a known rate reveals the base."
},
"di-ds-basics-extra#19": {
  steps: "(1) \\(p = 0.5\\%\\); last year's profit unknown. Not sufficient.\n(2) Profit without the rate. Not sufficient.\nTogether \\(0.005 \\times 2{,}500{,}000 = 12{,}500 > 10{,}000\\). Yes. Sufficient.\nAnswer: C.",
  take: "A constant rate learned from one year applies to another."
},
"di-ds-basics-extra#20": {
  steps: "(1) \\(a + b + z + 2 = 32\\) gives \\(b = 12\\); \\(z\\) unknown. Not sufficient.\n(2) \\(b + 1 + z = 23\\), \\(b + z = 22\\). Not sufficient.\nTogether \\(z = 10\\). Sufficient.\nAnswer: C.",
  take: "Name each segment of the line and write the two counts as equations."
},
"di-ds-basics-extra#21": {
  steps: "(1) Both = 4, but the only-cat and only-dog groups still share an unknown total. Not sufficient.\n(2) Neither = 14, same problem. Not sufficient.\nTogether \\(50 - 4 - 14 = 32\\) households have exactly one kind of pet. Sufficient.\nAnswer: C.",
  take: "The four regions of a two-set diagram sum to the total."
},
"di-ds-basics-extra#22": {
  steps: "(1) \\(f/n = \\tfrac23\\). Not sufficient.\n(2) \\(x/f = \\tfrac12\\). Not sufficient.\nTogether \\((n, f, x) = (3, 2, 1)\\) or \\((6, 4, 2)\\). Not sufficient.\nAnswer: E.",
  take: "Probabilities are ratios; without a count, n floats."
},
"di-ds-basics-extra#23": {
  steps: "(1) One short job; the other could be 3 hours ($92) or 5 hours ($115). Not sufficient.\n(2) \\(138 = 23 \\times 6\\): a 6-hour job, leaving a 1-hour job at $92, total $230. Sufficient.\nAnswer: B.",
  take: "A charge above the flat fee reveals the hours; the total time then fixes the other job."
},
"di-ds-basics-extra#24": {
  steps: "\\(y(x + 1) > x(y + 1)\\) reduces to \\(y > x\\).\n(1) No relation to \\(y\\). Not sufficient.\n(2) \\(x < y\\). Yes. Sufficient.\nAnswer: B.",
  take: "Adding 1 to numerator and denominator moves a fraction toward 1; it rises only if it was below 1."
},
"di-ds-basics-extra#25": {
  steps: "(1) \\(v^{2} = \\tfrac{10800}{3} = 3600\\), \\(v = 60\\). Sufficient.\n(2) \\(\\tfrac{1}{12} + 900k = \\tfrac16\\) gives \\(k = \\tfrac{1}{10800}\\), then \\(v = 60\\). Sufficient.\nAnswer: D.",
  take: "One data point determines the single unknown constant in the formula."
},
"di-ds-basics-extra#26": {
  steps: "(1) 4,500 square metres of offices, sizes unknown. Not sufficient.\n(2) A ratio of sizes. Not sufficient.\nTogether the average size of the remaining offices is still free. Not sufficient.\nAnswer: E.",
  take: "Area over count needs a per-office area."
},
"di-ds-basics-extra#27": {
  steps: "(1) J returns \\(115/1000 = 11.5\\%\\) and K returns \\(300/2500 = 12\\%\\), so K's rate is greater. Sufficient.\n(2) K's rate alone, nothing about J. Not sufficient.\nAnswer: A.",
  take: "Convert each return to a percent before comparing."
},
"di-ds-basics-extra#28": {
  steps: "(1) \\(t_X = t_Y - 1\\), \\(t_Y\\) unknown. Not sufficient.\n(2) \\(t_Y = \\tfrac{0.5}{30}\\) hour \\(= 60\\) seconds; \\(t_X\\) unknown. Not sufficient.\nTogether \\(t_X = 59\\) seconds. Sufficient.\nAnswer: C.",
  take: "Entry and exit offsets give a difference of crossing times."
},
"di-ds-basics-extra#29": {
  steps: "Kept \\(= 76 - 4y - 3t \\ge 0\\).\n(1) \\(t = 2\\), \\(y \\in \\{15, 16, 17\\}\\): kept 10, 6 or 2. Not sufficient.\n(2) \\(y = 17\\), \\(t \\in \\{1, 2\\}\\): kept 5 or 2. Not sufficient.\nTogether \\(y = 17, t = 2\\): kept 2. Sufficient.\nAnswer: C.",
  take: "The non-negativity of the remainder caps the variables; list the survivors."
},
"di-ds-basics-extra#30": {
  steps: "(1) \\(0.9r + 0.8(21.5 - r) = 18.45\\) gives \\(0.1r = 1.25\\), \\(r = 12.50\\). Sufficient.\n(2) \\(r = d + 3.5\\), \\(2r = 25\\), \\(r = 12.50\\). Sufficient.\nAnswer: D.",
  take: "Each statement is an independent second equation."
},
"di-ds-basics-extra#31": {
  steps: "(1) Green is 1 part of 4 in the whole mixture: \\(\\tfrac14 \\times 12 = 3\\) quarts. Sufficient.\n(2) Yellow : green \\(= 3 : 2\\) leaves the white amount free, so green could be 2 or 4 quarts. Not sufficient.\nAnswer: A.",
  take: "A part-to-rest ratio fixes the part's share of the whole."
},
"di-ds-basics-extra#32": {
  steps: "The fraction of green toys that are large equals the fraction of all toys that are large.\n(1) 800 small toys; large unknown. Not sufficient.\n(2) Large is \\(\\tfrac13\\). Sufficient.\nAnswer: B.",
  take: "Equal colour splits within each size make colour irrelevant."
},
"di-ds-basics-extra#33": {
  steps: "(1) A lower bound only. Not sufficient.\n(2) \\(200 \\times 4 = 800\\) attendances; \\(800 / 8 = 100\\) per performance. Sufficient.\nAnswer: B.",
  take: "Total attendances can be counted from either side (students or performances)."
},
"di-ds-basics-extra#34": {
  steps: "(1) 750 wool jackets; cotton use unknown. Not sufficient.\n(2) 333 cotton jackets; wool use unknown. Not sufficient.\nTogether \\(750 + 333 > 1000\\). Yes. Sufficient.\nAnswer: C.",
  take: "\"At least\" questions can be settled by exhibiting one feasible plan."
},
"di-ds-basics-extra#35": {
  steps: "(1) \\(P = 1.25S\\), so \\(S = 0.8P\\): a 20% discount. Sufficient.\n(2) $60 off an unknown price. Not sufficient.\nAnswer: A.",
  take: "A percent relation in either direction fixes the discount percent."
},
"di-ds-basics-extra#36": {
  steps: "(1) Equal percents mean equal volumes: green 1 gallon. Sufficient.\n(2) \\(\\dfrac{3}{4 + g} = 0.6\\) gives \\(g = 1\\). Sufficient.\nAnswer: D.",
  take: "Percent of the mixture converts to volume once two volumes are known."
},
"di-ds-basics-extra#37": {
  steps: "(1) \\(F + 30M = 13755\\), two unknowns. Not sufficient.\n(2) 400 minutes is within the allowance, so \\(F = 13125\\). Sufficient.\nAnswer: B.",
  take: "Read the plan: a month with no extra minutes reveals the base fee."
},
"di-ds-basics-extra#38": {
  steps: "Profit \\(= 2p + 3.5q = 2(834) + 1.5q = 1668 + 1.5q\\); the question is whether \\(q > 221\\).\n(1) \\(q < 417\\): 100 says no, 300 says yes. Not sufficient.\n(2) \\(q \\ge 100\\): same examples. Not sufficient.\nTogether \\(100 \\le q < 417\\) still allows both. Not sufficient.\nAnswer: E.",
  take: "Reduce the profit to one variable, then see whether the statements bound it past the threshold."
},
"di-ds-basics-extra#39": {
  steps: "(1) or (2) alone: one of three parts. Not sufficient.\nTogether \\(P(\\text{both}) = 1 - 0.3 - 0.5 = 0.2\\). Sufficient.\nAnswer: C.",
  take: "Partition the outcomes; the missing piece is 1 minus the others."
},
"di-ds-basics-extra#40": {
  steps: "9,000 cm takes 75 seconds.\n(1) Under 72 seconds means under 8,640 cm: yes. Sufficient.\n(2) Over 66 seconds: 70 s (yes) or 80 s (no). Not sufficient.\nAnswer: A.",
  take: "Convert the distance threshold into a time threshold, then compare bounds."
},
"di-ds-traps-extra#1": {
  fast: "The question is just 'does r equal minus s', and only the two statements together pin that down.",
  traps: "(B) is the trap: statement (2) looks decisive because the equation is symmetric, but \\(t\\) can be the midpoint of \\(r\\) and \\(-s\\) instead, and that is the case statement (1) rules out.",
  take: "Translate 'zero is halfway between' into r = -s before touching the statements."
},
"di-ds-traps-extra#2": {
  fast: "It factors to \\(y^{x}\\) times (y - 1), a product of consecutive integers' powers, so it is always even.",
  traps: "(C) is the trap: testing values instead of factoring makes each statement look like half the story. The expression's parity never depends on either statement.",
  take: "Consecutive integers always include an even one, so y(y-1) and its relatives are never odd."
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
"di-ds-guide-s1#1": {
  steps: "(1) \\(\\tfrac{15k}{100} - \\tfrac{15n}{100} = 0.30\\), so \\(k - n = 2\\). Sufficient.\n(2) \\(k = 1.4n\\) gives \\(k - n = 0.4n\\), which depends on \\(n\\). Not sufficient.\nAnswer: A.",
  take: "A statement about a difference in dollars is a statement about the difference in rates."
},
"di-ds-guide-s1#2": {
  steps: "Cows \\(c\\) and pigs \\(p\\) satisfy \\(c + p = 40\\).\n(1) \\(c > 2(40 - c)\\) gives \\(c > 26.7\\), so \\(c \\ge 27\\): many values. Not sufficient.\n(2) \\(p \\ge 13\\) gives \\(c \\le 27\\): many values. Not sufficient.\nTogether \\(c \\ge 27\\) and \\(c \\le 27\\), so \\(c = 27\\). Sufficient.\nAnswer: C.",
  take: "Two inequalities on integers can pin a single value; check whether the bounds touch."
},
"di-ds-guide-s1#3": {
  steps: "The question asks whether the speed exceeded \\(\\tfrac{6 \\times 5280}{1800} = 17.6\\) feet per second.\n(1) Speed above 16: could be 17 (no) or 18 (yes). Not sufficient.\n(2) Speed below 18: could be 17.8 (yes) or 15 (no). Not sufficient.\nTogether the speed is between 16 and 18, and 17.6 lies inside that range, so both answers remain possible. Not sufficient.\nAnswer: E.",
  take: "Convert the question to the same units as the statements before judging the bounds."
},
"di-ds-guide-s1#4": {
  steps: "(1) Joint time is 4.8 hours, so \\(\\tfrac{1}{a} + \\tfrac{1}{b} = \\tfrac{5}{24}\\). Equal rates would need \\(\\tfrac{2}{a} = \\tfrac{5}{24}\\), \\(a = 9.6\\), not an even integer. So the rates differ (for example \\(a = 8\\), \\(b = 12\\)). Definite no. Sufficient.\n(2) \\(a + b = 20\\): \\(a = b = 10\\) (yes) or \\(a = 8\\), \\(b = 12\\) (no). Not sufficient.\nAnswer: A.",
  take: "A statement can settle a yes/no question by ruling out the 'yes' case entirely; you never need the actual values."
},
"quant-guide-s1#1": {
  fast: "Neither of the first two: 100 − (56 + 48 − 30) = 26% of 1,200 = 312; that caps the answer.",
  traps: "(E) 420 assumes bargain prices does not overlap the others at all, but only 26% of people are outside the first two circles. (C) and (D) are shares of 1,200 unrelated to the question.",
  take: "'Only this factor' is bounded by the people outside the other sets; compute that region first."
},
"quant-guide-s1#2": {
  fast: "Profit up 10% and margin down 10% means sales are 1.1/0.9 of last year's, about 122%.",
  traps: "(B) 90% reads the margin change as a sales change. (C) 110% confuses profit growth with sales growth. (E) adds the two percentages.",
  take: "A ratio falling while its numerator rises means the denominator rose by more; divide the multipliers."
},
"quant-guide-s1#3": {
  fast: "Each lamp costs 2.50 and sells for 15, so the 12.50 profit is five sixths of the selling price, about 83%.",
  traps: "(E) 500% is the profit as a percent of cost. (D) 100% would need the lamp to be free. (B) 50% is a guess from 15 versus 30 per dozen.",
  take: "Read which base the percent is taken on: selling price and cost price give very different numbers."
},
"quant-guide-s1#4": {
  fast: "With list price 100 at N, N sells at 50 and W sells at 0.4 × 120 = 48, which is 4% below 50.",
  traps: "(A) 10% less subtracts the discount percentages. (D) forgets the deeper discount at W and only sees the higher list price.",
  take: "Successive percentage changes multiply; plug in 100 and compute both endpoints."
},
"quant-guide-s1#5": {
  fast: "Selling price 80 (since 60 is 75% of it); 80% of 80 is 64; profit 4.",
  traps: "(A) $0 comes from marking up 25% of cost (75) and discounting 20% (60). (E) $15 is the markup itself, ignoring the discount.",
  take: "Markup 'of the selling price' means cost is the remaining fraction of the selling price."
},
"quant-guide-s1#6": {
  fast: "12 min + 20 min = 32 min for 4 miles: one eighth of a mile per minute.",
  traps: "(B) \\(\\tfrac{2}{15}\\) mile per minute is 8 mph, the plain average of 10 and 6, which overweights the faster leg. (D) is the running rate alone in miles per minute.",
  take: "Equal distances at different speeds: the average speed is the harmonic mean, always below the arithmetic mean."
},
"quant-guide-s1#7": {
  fast: "Gap at restart: 20 − 10 = 10 miles; closing speed 3 mph; \\(\\tfrac{10}{3}\\) hours.",
  traps: "(D) 4 hours comes from a 12-mile gap, forgetting John's 2-mile lead before the stop. (A) 3 uses a 9-mile gap.",
  take: "Catch-up time = gap ÷ (difference of speeds); compute the gap at the moment the chase starts."
},
"quant-guide-s1#8": {
  fast: "Gap 16 mph × 5 min, closed at 4 mph: 4 times as long, 20 minutes.",
  traps: "(D) 25 counts the 5 minutes of riding as waiting too. (B) 15 uses the cyclist's full 20 mph for the gap without subtracting the hiker's progress.",
  take: "The gap opens at the speed difference and closes at the hiker's speed; the ratio of those two gives the ratio of times."
},
"quant-guide-s1#9": {
  fast: "\\(540/(v^{2} - 9) = \\tfrac{1}{2}\\) gives v = 33; 90 ÷ 36 = 2.5 hours.",
  traps: "(E) 2.1 and (D) 2.2 come from guessing v = 40 or so; the equation forces \\(v^{2} = 1089\\) exactly. Testing choices also works: 2.5 h downstream means 36 mph, so upstream 30 mph takes 3 h, half an hour more.",
  take: "Difference of two reciprocals collapses to a single fraction; recognise 1089 as 33 squared."
},
"quant-guide-s1#10": {
  fast: "Set up gallons: x/4.5 + (500 − x)/3.5 = 120, multiply through by 31.5 and solve to get x = 360.",
  traps: "(A) 140 is the distance at 60 mph, the other part of the trip. (C) 250 assumes an even split, which uses 126.98 gallons, not 120.",
  take: "Fuel questions are rate questions with gallons as the 'time'; the speed figures only label the two rates."
},
"quant-guide-s1#11": {
  fast: "Extra A-rate = \\(\\tfrac{1}{2} - \\tfrac{1}{3} = \\tfrac{1}{6}\\) widget per hour, so 6 hours.",
  traps: "(C) 3 and (B) 2 are the combined times given in the stem, not A's own time. (D) 5 is the sum of the two given times.",
  take: "Two combined-rate scenarios that differ by one machine's rate subtract to that machine's rate."
},
"quant-guide-s1#12": {
  fast: "Sum of the pair rates is 2, so all three together run at 1 tank per hour.",
  traps: "(B) \\(\\tfrac{1}{2}\\) is the combined rate divided by 2 by mistake, or the sum of pair rates read as a time. (A) \\(\\tfrac{1}{3}\\) comes from averaging the three times.",
  take: "Symmetric pair data: add everything and halve; each rate appears exactly twice."
},
"di-ds-guide-s2#1": {
  steps: "(1) Two averages with no sizes. Not sufficient.\n(2) The combined average without the parts. Not sufficient.\nTogether 26.6 is 0.9 from 25.7 and 2.7 from 29.3, so X is three times the size of Y and has more members. Sufficient.\nAnswer: C.",
  take: "Weighted averages: the distances from the combined mean are in inverse ratio to the group sizes."
},
"di-ds-guide-s2#2": {
  steps: "(1) A total alone gives no split. Not sufficient.\n(2) \\(72m + 80f = 75(m + f)\\) gives \\(3m = 5f\\), so \\(m : f = 5 : 3\\) and males are \\(\\tfrac{5}{8}\\) of the class. Sufficient.\nAnswer: B.",
  take: "A combined rate between two group rates determines the mix without any headcount."
},
"di-ds-guide-s2#3": {
  steps: "(1) The number of males without the number of females gives no ratio. Not sufficient.\n(2) \\(9.8m + 9.1f = 9.3(m + f)\\) gives \\(0.5m = 0.2f\\), so \\(m : f = 2 : 5\\). Sufficient.\nAnswer: B.",
  take: "Combined average known: ratio of sizes = (distance of the other group) : (distance of this group)."
},
"di-ds-guide-s2#4": {
  steps: "(1) The other two total 250,000: 120,000 and 130,000 give median 120,000, while 100,000 and 150,000 give median 110,000. Not sufficient.\n(2) Jane's price equals the mean, so the other two sum to 240,000, one at most 120,000 and the other at least 120,000; the median is 120,000. Sufficient.\nAnswer: B.",
  take: "A value equal to the mean of three numbers is automatically the median."
},
"di-ds-guide-s2#5": {
  steps: "(1) With \\(k\\) unknown, the terms could all stay above 10 or fall below it. Not sufficient.\n(2) \\(a_{8}\\) is the middle term. If \\(k > 0\\) the seven terms after it exceed 10; if \\(k < 0\\) the seven before it do. Either way exactly 7. Sufficient.\nAnswer: B.",
  take: "In an arithmetic sequence the middle term splits the rest symmetrically, whatever the sign of the difference."
},
"di-ds-guide-s2#6": {
  steps: "(1) 75 percent of projects have 3 or fewer employees, so the median is at most 3, but it could be 0, 1, 2 or 3. Not sufficient.\n(2) 65 percent have 3 or more, so the median is at least 3. Not sufficient.\nTogether the median is at most 3 and at least 3, so it is 3. Sufficient.\nAnswer: C.",
  take: "A percentile statement is a one-sided bound on the median; two opposite bounds can meet."
},
"di-ds-guide-s2#7": {
  steps: "(1) Twenty-one consecutive integers always have the same standard deviation, whatever the starting value. Sufficient.\n(2) The median says where the set sits, not how many members it has: 19, 20, 21 and 10 to 30 have different spreads. Not sufficient.\nAnswer: A.",
  take: "For evenly spaced sets the standard deviation depends only on the count and the spacing."
},
"di-ds-guide-s2#8": {
  steps: "(1) \\(y\\) odd gives \\(y^{2} \\equiv 1 \\pmod 8\\), so \\(x^{2} \\equiv 4 \\pmod 8\\), which happens only when \\(x\\) is 2 more than a multiple of 4. So \\(x\\) is not divisible by 4. Definite no. Sufficient.\n(2) \\(x = y + 3\\) is even: \\(y = 1\\) gives \\(x = 4\\) (yes), \\(y = 3\\) gives \\(x = 6\\) (no). Not sufficient.\nAnswer: A.",
  take: "Squares mod 8 are 0, 1 or 4; the remainder of a sum of squares reveals the parity structure of each term."
},
"di-ds-guide-s2#9": {
  steps: "\\(30!\\) contains \\(6 + 1 = 7\\) factors of 5 (and more than enough 2s), so it ends in exactly 7 zeros.\n(1) \\(10^{d}\\) divides \\(30!\\) for \\(d = 1, 2, \\dots, 7\\). Not sufficient.\n(2) Any integer above 6. Not sufficient.\nTogether \\(d = 7\\). Sufficient.\nAnswer: C.",
  take: "Trailing zeros of n! come from the power of 5; a divisibility statement gives an upper bound, not a value."
},
"di-ds-guide-s2#10": {
  steps: "Write \\(d = 0.abc\\ldots\\) with \\(b\\) the hundredths digit.\n(1) \\(10d = a.bc\\ldots\\), whose tenths digit is \\(b\\); so \\(b = 7 > 5\\). Sufficient.\n(2) \\(\\tfrac{d}{10} = 0.0abc\\ldots\\), whose thousandths digit is \\(b\\); again \\(b = 7\\). Sufficient.\nAnswer: D.",
  take: "Scaling by powers of ten moves digits without changing them; track which place each digit lands in."
},
"quant-guide-s2#1": {
  fast: "Extra 350 a day on average over 600 per training day means 140 training days; 240 − 140 = 100.",
  traps: "(E) 140 is the number of weight-training days, not the cardio-only days the question asks for.",
  take: "Weighted average: the excess over the base, divided by the extra per special day, counts the special days."
},
"quant-guide-s2#2": {
  fast: "0, 0, 0, 50, 50, 200: adding 100 raises the median, adding −50 lowers it.",
  traps: "(C) assumes the median is 50 because two entries are 50 and the mean is 50, which is not forced. (E) fails too: adding 40 to the example list also raises the median (to 40).",
  take: "Mean and a couple of repeated values do not pin the median; build a skewed example before concluding."
},
"quant-guide-s2#3": {
  fast: "The cheapest model is below the median, which forces m > 830.8, so 1.25m exceeds 1,038.",
  traps: "(E) $1,125 assumes the median is exactly 900, but the median of three distinct numbers need not equal the mean. (D) gives up too early: an inequality is a conclusion.",
  take: "When values are ordered, express everything in one variable and use the ordering as an inequality."
},
"quant-guide-s2#4": {
  fast: "16, 16, 16, 16 use 64; the remaining 44 split evenly gives 22.",
  traps: "(B) 20 forgets that the fifth number cannot exceed the sixth. (C) 21 leaves the first numbers below 16, which pushes the largest up, not down.",
  take: "Min-max with a fixed sum: raise everything else to its ceiling, then split what is left evenly."
},
"quant-guide-s2#5": {
  fast: "Passers can all be 86 (median 86) or mostly 100 (median 100); averages do not fix a median.",
  traps: "(B) and (C) each fit one construction only. (A) treats the two averages as if they pinned every score.",
  take: "Averages of subgroups constrain sums, never the position of the middle value."
},
"quant-guide-s2#6": {
  fast: "The median of five ordered values is the middle one, r, and changing t alone never moves it.",
  traps: "(D) may look suspicious because r is the median, but any single decrease lowers the sum and hence the mean.",
  take: "Range and mean respond to any endpoint change; the median responds only to the middle."
},
"quant-guide-s2#7": {
  fast: "Shift keeps the spread (factor 1), multiplying scales it by 1.5, dividing by −4 scales it by one quarter: Y, X, Z.",
  traps: "(E) treats the negative divisor as increasing spread; only the magnitude counts. (A) assumes a shift changes the spread.",
  take: "SD ignores shifts and follows |k| under multiplication by k."
},
"quant-guide-s2#8": {
  fast: "The value farthest from the mean of 4.5 stretches the spread most, and 14 is 9.5 away.",
  traps: "(A) 1 is the farthest below the mean but only 3.5 away; distance, not direction, matters.",
  take: "Adding an outlier raises SD in proportion to its distance from the mean."
},
"quant-guide-s2#9": {
  fast: "Only values at the mean are guaranteed to shrink the spread: 6 and 6.",
  traps: "(C) 0 and 6 shifts the mean and adds a deviation of about 6, which raises the standard deviation when d is tiny. (B) 0 and 0 likewise adds two large deviations.",
  take: "'Must reduce SD' means values at the mean; anything else depends on the current spread."
},
"quant-guide-s2#10": {
  fast: "The extra number is the mean; same spread over more items means a smaller SD for B.",
  traps: "(E) describes an impossible exception: the fifth number always equals the mean here. (C) forgets that the count in the denominator changed.",
  take: "Equal means before and after an insertion identify the inserted value as the mean, which always lowers SD."
},
"quant-guide-s2#11": {
  fast: "Every prime ≤ 50 divides h(100), so none divides h(100) + 1; the smallest factor exceeds 50.",
  traps: "(A) assumes a large even-looking number must have a small factor; the +1 breaks every small divisor.",
  take: "N! + 1 style numbers: consecutive integers share no prime factor, so the small primes are all excluded."
},
"di-ds-ineq-batch#1": {
  steps: "(1) For \\(y = 1\\), any \\(x\\) with \\(|x - 3| \\ge 1\\) works. Not sufficient.\n(2) \\(|x - 3|\\) is at least 0 and \\(-y\\) is at most 0, so both must be 0: \\(y = 0\\) and \\(x = 3\\). Sufficient.\nAnswer: B.",
  take: "Squeezing a non-negative quantity below a non-positive one forces both to be zero."
},
"di-ds-ineq-batch#2": {
  steps: "(1) The left side is at least 0, so \\(2 - y > 0\\) and the positive integer \\(y\\) is 1. Then \\(|x - 2| < 1\\) forces \\(x = 2\\), a prime. Sufficient.\n(2) If \\(y = 1\\): \\(x - 2 = 0\\), \\(x = 2\\). If \\(y \\ge 2\\): \\(x + y - 3 = y - 1\\), so \\(x = 2\\). Either way \\(x = 2\\). Sufficient.\nAnswer: D.",
  take: "Use the non-negativity of an absolute value to bound the other side before solving."
},
"di-ds-ineq-batch#3": {
  steps: "(1) Taking square roots: \\(|x - 1| \\le 1\\), which allows equality (\\(x = 2\\) gives no) or strict inequality (\\(x = 1.5\\) gives yes). Not sufficient.\n(2) \\(|x| > 1\\): \\(x = 1.5\\) yes, \\(x = 2\\) no. Not sufficient.\nTogether \\(x = 1.5\\) and \\(x = 2\\) both satisfy both statements with different answers. Not sufficient.\nAnswer: E.",
  take: "Watch the boundary: a non-strict inequality in a statement cannot prove a strict inequality in the question."
},
"di-ds-ineq-batch#4": {
  steps: "\\(|a| > a\\) exactly when \\(a\\) is negative.\n(1) \\(a^{2} < a\\) holds only for \\(0 < a < 1\\), so \\(a\\) is positive: definite no. Sufficient.\n(2) \\(a = 3\\) works (1.5 > 0.67) and \\(a = -1\\) works (−0.5 > −2), one positive and one negative. Not sufficient.\nAnswer: A.",
  take: "Translate absolute-value questions into sign questions before touching the statements."
},
"di-ds-ineq-batch#5": {
  steps: "(1) \\(\\tfrac{y}{|y|}\\) is 1 for positive \\(y\\) and \\(-1\\) for negative \\(y\\), so \\(|x| = 1\\). Sufficient.\n(2) \\(|x| = -x\\) only says \\(x \\le 0\\); \\(x = -1\\) gives yes, \\(x = -2\\) no. Not sufficient.\nAnswer: A.",
  take: "y over |y| is a sign function: it can only be plus or minus one."
},
"di-ds-ineq-batch#6": {
  steps: "\\(x^{3} < x^{2}\\) holds for every negative \\(x\\) and for \\(0 < x < 1\\); it fails at 0 and for \\(x \\ge 1\\).\n(1) \\(x = -1\\) or \\(x = \\tfrac{1}{2}\\) both fit. Not sufficient.\n(2) Integers above \\(-2\\) that are negative or strictly between 0 and 1: only \\(x = -1\\). Sufficient.\nAnswer: B.",
  take: "Translate the stem inequality into a region of the number line first; then the statements become filters."
},
"di-ds-ineq-batch#7": {
  steps: "(1) \\(x^{2} = 9 - y^{2} \\le 9\\), so \\(|x| \\le 3\\). Definite yes. Sufficient.\n(2) \\(x = 0\\), \\(y = 0\\) gives yes, but \\(x = 4\\), \\(y = -10\\) satisfies \\(16 - 10 \\le 9\\) and gives no. Not sufficient.\nAnswer: A.",
  take: "A square bounded by a constant bounds the variable; a linear term with unknown sign does not."
},
"di-ds-ineq-batch#8": {
  steps: "\\(|a| \\cdot b > 0\\) needs \\(a \\ne 0\\) and \\(b > 0\\).\n(1) \\(a\\) is nonzero, but \\(b\\) could be negative. Not sufficient.\n(2) \\(a \\ne 0\\), but with \\(|a| = 1\\) the power is 1 for any \\(b\\), including \\(b = -2\\) or \\(b = 0\\). Not sufficient.\nTogether \\(a = 1\\), \\(b = -2\\) satisfies both and gives no; \\(a = 2\\), \\(b = 1\\) gives yes. Not sufficient.\nAnswer: E.",
  take: "When testing powers, always try a base of 1 or −1: they make exponents invisible."
},
"di-ds-ineq-batch#9": {
  steps: "For \\(a \\ge 1\\) or \\(a = 0\\) a larger power is never smaller, so both statements force \\(a\\) negative.\n(1) Of \\(n - 1\\) and \\(n\\) one is even (positive power) and one odd (negative power). The larger side, \\(a^{n-1}\\), must be the positive one, so \\(n - 1\\) is even and \\(n\\) is odd. Sufficient.\n(2) \\(n\\) and \\(3n\\) share parity. If \\(n\\) were even both powers would be positive and \\(a^{3n}\\) larger; so \\(n\\) is odd, where both are negative and \\(a^{3n}\\) is further from zero. Sufficient.\nAnswer: D.",
  take: "Powers of a negative base alternate in sign; comparisons between them are parity statements in disguise."
},
"di-ds-ineq-batch#10": {
  steps: "(1) The sign chart gives \\(1 < x < 2\\) or \\(x > 3\\); \\(x = 1.5\\) says no, \\(x = 4\\) says yes. Not sufficient.\n(2) \\(x = 1.5\\) or \\(x = 4\\) again. Not sufficient.\nTogether both examples still satisfy both statements. Not sufficient.\nAnswer: E.",
  take: "A cubic product changes sign at each root; list the intervals rather than assuming 'positive means large'."
},
"di-ds-ineq-batch#11": {
  steps: "(1) \\(x(x - 9) = 0\\), so \\(x = 0\\) (no) or \\(x = 9\\) (yes). Not sufficient.\n(2) \\(|x| = -x\\) means \\(x \\le 0\\), so \\(x\\) is never positive. Definite no. Sufficient.\nAnswer: B.",
  take: "Dividing both sides by a variable silently discards the root zero."
},
"di-ds-ineq-batch#12": {
  steps: "(1) \\(p = 2\\), \\(j = 1\\) makes Paul the owner of more; \\(p = 3\\), \\(j = 4\\) (27 > 16) makes Joanie. Not sufficient.\n(2) Nothing about \\(p\\). Not sufficient.\nTogether \\(p^{3} > 9\\) forces \\(p \\ge 3\\), and \\(p \\ne 3\\), so \\(p \\ge 4 > 3\\): Paul. Sufficient.\nAnswer: C.",
  take: "An inequality between different powers does not order the bases; pin one value and then compare."
},
"di-ds-ineq-batch#13": {
  steps: "\\(\\tfrac{|x|}{x}\\) is \\(\\pm 1\\); \\(a^{6}\\) cannot be negative, so it equals 1 and \\(a = \\pm 1\\), \\(b^{3} = 1\\), \\(b = 1\\). The question is whether \\(a\\) is 1 or \\(-1\\).\n(1) \\(b^{7} > 0\\), so \\(a^{3} > 0\\) and \\(a = 1\\): \\(a - b = 0\\). Sufficient.\n(2) \\(a + 1 > 0\\) rules out \\(a = -1\\), so \\(a = 1\\) and \\(a - b = 0\\). Sufficient.\nAnswer: D.",
  take: "Work the stem down to the few candidate values before reading the statements."
},
"di-ds-ineq-batch#14": {
  steps: "(1) \\(x - y < -1\\), so \\(x < y\\). Sufficient.\n(2) \\(x - y < 1\\) allows \\(x = y + \\tfrac{1}{2}\\) (no) and \\(x = y - 1\\) (yes). Not sufficient.\nAnswer: A.",
  take: "Isolate the same combination the question asks about; the direction of the bound is everything."
},
"di-ds-ineq-batch#15": {
  steps: "(1) The sign of \\(v\\) is unknown, so cross-multiplying is illegal. \\(w = 2\\), \\(v = 3\\) gives yes; \\(w = -5\\), \\(v = 3\\) also satisfies the statement and gives no. Not sufficient.\n(2) \\(v^{2}\\) is positive, so \\(w^{2} < v^{2}\\), and taking positive square roots, \\(|w| < |v|\\). Sufficient.\nAnswer: B.",
  take: "Squared denominators are safe to clear; plain variable denominators hide a sign."
},
"di-ds-ineq-batch#16": {
  steps: "(1) \\(2^{2}\\), \\((-2)^{2}\\) and \\(4^{1}\\) give 4; only \\(x = -2\\), \\(y = 2\\) has \\(x < y\\), so \\(x + y = 0\\). Sufficient.\n(2) Equal absolute values with \\(x < y\\) means \\(x = -y\\) with \\(y\\) positive, so \\(x + y = 0\\). Sufficient.\nAnswer: D.",
  take: "Constraints in the stem (x < y) often turn a many-solution statement into a single case."
},
"di-ds-ineq-batch#17": {
  steps: "(1) The right side is the total distance from \\(q\\) to \\(s\\) and from \\(s\\) to \\(t\\); it equals \\(t - q\\) only if \\(t - q\\) is positive and \\(s\\) lies between \\(q\\) and \\(t\\). With all three distinct, that is exactly \\(q < s < t\\). Definite yes. Sufficient.\n(2) \\(t > q\\) says nothing about where \\(s\\) is. Not sufficient.\nAnswer: A. (Quant Class Sessions Guide, Session 3.)",
  take: "A sum of two absolute distances equalling the end-to-end distance pins the middle point between the ends."
},
"quant-ineq-batch#1": {
  fast: "p(p + 1) is always even, so II holds; x = 2 kills I and x = 7 with odd y and p kills III.",
  traps: "(D) accepts III, but x, y and p can all be odd at once. (C) keeps I even though x = 2 is a valid root of the absolute-value equation.",
  take: "Products of consecutive integers are even; that single fact decides most parity 'must be true' statements."
},
"quant-ineq-batch#2": {
  fast: "The expression is r(8 − r); plug even r: 0, 12, 16, 12, 0, −20 appear, 8 never does.",
  traps: "(A) −20 looks impossible because squares are positive, but r = 10 gives 10 × (−2). (B) 0 comes from r = 0, where q is negative and s positive, still consecutive evens.",
  take: "Parametrise consecutive integers around the middle one; the algebra collapses to one variable."
},
"quant-ineq-batch#3": {
  fast: "Only |x + 2| = 16 survives; of x = 14 and x = −18, one is non-negative.",
  traps: "(C) counts both roots of |x + 2| = 16 and ignores the non-negative condition. (E) also keeps the impossible branch |x + 2| = −4.",
  take: "Nested absolute values: unwrap from the outside, discard negative right-hand sides, then apply the domain restriction."
},
"di-ds-ineq-class#1": {
  steps: "\\(x - y + 1 > x + y - 1\\) simplifies to \\(2 > 2y\\), i.e. \\(y < 1\\).\n(1) Nothing about \\(y\\). Not sufficient.\n(2) \\(y < 0 < 1\\). Yes. Sufficient.\nAnswer: B.",
  take: "Addition and subtraction cancel freely across an inequality; simplify before judging."
},
"di-ds-ineq-class#2": {
  steps: "(1) \\(x = 1, y = 5, z = 3\\) says yes; \\(x = 1, y = 3, z = 5\\) says no. Not sufficient.\n(2) With \\(y = z\\), the sorted list has \\(z\\) in the middle whatever \\(x\\) is. Yes. Sufficient.\nAnswer: B.",
  take: "A repeated value in a three-element list is always the median."
},
"di-ds-ineq-class#3": {
  steps: "(1) \\(2^{2} = 4\\) but \\(2^{-2} = \\tfrac14\\). Not sufficient.\n(2) \\(2^{1} = 2\\) but \\(\\left(\\tfrac12\\right)^{1} = \\tfrac12\\). Not sufficient.\nTogether \\(x > 1\\) and \\(n \\ge 1\\) give \\(x^{n} \\ge x > 1\\): definite no. Sufficient.\nAnswer: C.",
  take: "Powers need both the base's size and the exponent's sign."
},
"di-ds-ineq-class#4": {
  steps: "(1) \\(\\tfrac14 \\cdot 4^{x} < 4^{x} - 120\\) gives \\(\\tfrac34 \\cdot 4^{x} > 120\\), \\(4^{x} > 160\\), \\(x \\ge 4\\): \\(3^{4} = 81\\) (yes) or \\(3^{6} = 729\\) (no). Not sufficient.\n(2) \\(x = 6\\) gives 729 (no); \\(x = -6\\) gives a tiny fraction (yes). Not sufficient.\nTogether \\(x = 6\\): no. Sufficient.\nAnswer: C.",
  take: "Rewrite 4 to the power x − 1 as one quarter of 4 to the power x, so the inequality becomes a bound on x."
},
"di-ds-ineq-class#5": {
  steps: "\\(2^{34} = (2^{10})^{3} \\cdot 2^{4} > (10^{3})^{3} \\cdot 16 > 10^{10}\\).\n(1) \\(x > 2^{34} > 10^{10}\\). Yes. Sufficient.\n(2) \\(2^{35}\\) is larger still. Yes. Sufficient.\nAnswer: D.",
  take: "Compare powers of 2 with powers of 10 through \\(2^{10} \\approx 10^{3}\\)."
},
"di-ds-ineq-class#6": {
  steps: "(1) \\(y = x^{3}(x - 1)\\): \\(x = 2\\) gives \\(y = 8\\) (no); \\(x = -1\\) gives \\(y = 2\\) (yes). Not sufficient.\n(2) \\(y^{2}(x - 4)(x + 3) > 0\\) means \\(x > 4\\) or \\(x < -3\\); \\(y\\)'s sign is free. Not sufficient.\nTogether: \\(x = 5\\) gives \\(y = 500\\), \\(xy > 0\\); \\(x = -4\\) gives \\(y = 320\\), \\(xy < 0\\). Not sufficient.\nAnswer: E.",
  take: "Factor a messy statement; a positive square factor can be dropped without changing the sign."
},
"di-ds-ineq-class#7": {
  steps: "(1) Adding \\(r + s > 2t\\) and \\(t > s\\) gives \\(r + s + t > 2t + s\\), so \\(r > t\\). Sufficient.\n(2) \\(2r > r + s > 2t\\), so \\(r > t\\). Sufficient.\nAnswer: D.",
  take: "Same-direction inequalities can be added; the unwanted variable cancels."
},
"di-ds-ineq-class#8": {
  steps: "The question is whether \\(p(qr - 1) < 0\\).\n(1) or (2) alone leaves one of \\(q, r\\) unknown. Not sufficient.\nTogether \\(p < 0\\) and \\(q, r > 0\\), so the question is whether \\(qr > 1\\): \\(q = r = 2\\) yes, \\(q = r = \\tfrac12\\) no. Not sufficient.\nAnswer: E.",
  take: "Signs alone do not decide a product against 1; magnitudes matter."
},
"di-ds-ineq-class#9": {
  steps: "(1) \\(5^{-n} > 5^{2}\\) gives \\(-n > 2\\), \\(n < -2\\). Yes. Sufficient.\n(2) \\(n^{2}(n - 1) < 0\\) gives \\(n < 1\\), \\(n \\ne 0\\): \\(n = -1\\) says no, \\(n = -3\\) says yes. Not sufficient.\nAnswer: A.",
  take: "Write every quantity as a power of the same base."
},
"di-ds-ineq-class#10": {
  steps: "(1) \\(pq < 0\\): need \\(p - q < 0\\), unknown. Not sufficient.\n(2) \\(p < 0\\), \\(q\\) unknown. Not sufficient.\nTogether \\(p < 0 < q\\), so \\(pq < 0\\) and \\(p - q < 0\\): product positive. Yes. Sufficient.\nAnswer: C.",
  take: "Move everything to one side and factor; then track the sign of each factor."
},
"di-ds-ineq-class#11": {
  steps: "(1) \\(m - n < 2\\): could be 1 (yes) or \\(-1\\) (no). Not sufficient.\n(2) \\(n > m + 2\\), so \\(m < n\\): definite no. Sufficient.\nAnswer: B.",
  take: "A definite no is sufficient."
},
"di-ds-ineq-class#12": {
  steps: "(1) \\(2^{2p} = 4^{p}\\): for \\(p > 0\\), \\(3^{p} < 4^{p}\\); for \\(p < 0\\), \\(3^{p} > 4^{p}\\). Not sufficient.\n(2) \\(p\\) unknown. Not sufficient.\nTogether \\(p = q/2 > 0\\), so \\(3^{p} < 4^{p}\\): definite no. Sufficient.\nAnswer: C.",
  take: "Match the bases \\((2^{2p} = 4^{p})\\) and then compare exponents with the sign in mind."
},
"di-ds-ineq-class#13": {
  steps: "(1) \\(m = 3, p = 2\\) says yes; \\(m = 3, p = \\tfrac12\\) says no. Not sufficient.\n(2) \\(p < 1\\): \\(m = 3\\) says no, \\(m = -3\\) says yes. Not sufficient.\nTogether \\(m > 0\\) and \\(p - 1 < 0\\): \\(mp < m\\), definite no. Sufficient.\nAnswer: C.",
  take: "Multiplying by a number below 1 shrinks a positive number and enlarges a negative one."
},
"di-ds-ineq-class#14": {
  steps: "(1) \\((10, 10)\\) gives 10; \\((25, -5)\\) gives 15. Not sufficient.\n(2) The same pairs. Not sufficient.\nTogether the same pairs. Not sufficient.\nAnswer: E.",
  take: "A sum of x and y says nothing about x and |y| once y may be negative."
},
"di-ds-ineq-class#15": {
  steps: "(1) \\(x + 1 = 2(x - 1)\\) gives \\(x = 3\\); \\(x + 1 = -2(x - 1)\\) gives \\(x = \\tfrac13\\). Not sufficient.\n(2) \\(x \\ne 3\\). Not sufficient.\nTogether \\(x = \\tfrac13\\), so \\(|x| < 1\\). Sufficient.\nAnswer: C.",
  take: "|a| = |b| means a = b or a = −b; a second statement may kill one root."
},
"di-ds-ineq-class#16": {
  steps: "The question asks whether \\(a\\) and \\(b\\) have opposite signs.\n(1) Magnitudes only. Not sufficient.\n(2) \\(b < 0\\); \\(a\\) unknown. Not sufficient.\nTogether \\(b = -4\\) with \\(a = 5\\) (yes) or \\(a = -5\\) (no). Not sufficient.\nAnswer: E.",
  take: "|a| + |b| > |a + b| is the same question as \"opposite signs?\"."
},
"di-ds-ineq-class#17": {
  steps: "For \\(y \\ne 0\\) divide by \\(|y|\\): is \\(x > |y|\\)?\n(1) \\(x = 1, y = -5\\) says no; \\(x = 6, y = 5\\) says yes. Not sufficient.\n(2) \\(x\\) unknown. Not sufficient.\nTogether \\(y > 0\\) and \\(x > y = |y|\\). Yes. Sufficient.\nAnswer: C.",
  take: "Dividing by |y| is safe when y is nonzero; it turns the question into a plain comparison."
},
"di-ds-ineq-class#18": {
  steps: "\\(\\left(\\left|\\tfrac{1}{xy}\\right|\\right)^{-1} = |xy|\\); \\(|xy| > xy\\) exactly when \\(xy < 0\\).\n(1) \\(xy > 1 > 0\\): definite no. Sufficient.\n(2) Magnitudes only. Not sufficient.\nAnswer: A.",
  take: "|z| > z is just \"z is negative\"."
},
"di-ds-ineq-class#19": {
  steps: "(1) Positive \\(x\\): \\(x > 1\\). Negative \\(x\\): \\(x > -1\\), so \\(-1 < x < 0\\). Both branches allowed. Not sufficient.\n(2) \\(x < 0\\), any size. Not sufficient.\nTogether \\(-1 < x < 0\\), so \\(|x| < 1\\). Sufficient.\nAnswer: C.",
  take: "Split on the sign of x whenever x/|x| appears."
},
"di-ds-ineq-class#20": {
  steps: "(1) \\(|n| > 4\\): definite no. Sufficient.\n(2) True for every negative \\(n\\), which could be \\(-1\\) or \\(-10\\). Not sufficient.\nAnswer: A.",
  take: "A definite no is sufficient; do not skip a statement because it answers \"no\"."
},
"di-ds-ineq-class#21": {
  steps: "(1) \\(x + 3 = 4x - 3\\) gives \\(x = 2\\) (valid); \\(-(x + 3) = 4x - 3\\) gives \\(x = 0\\), but then the right side is \\(-3 < 0\\), invalid. So \\(x = 2 > 0\\). Sufficient.\n(2) \\(x - 3 = 2x - 3\\) gives 0; \\(x - 3 = -(2x - 3)\\) gives 2. Both valid; 0 is not positive. Not sufficient.\nAnswer: A.",
  take: "Always plug candidate roots back into the absolute-value equation; the right side must be non-negative."
},
"di-ds-ineq-class#22": {
  steps: "(1) \\(x^{2} + 16 - 5 = 27\\) gives \\(x^{2} = 16\\), \\(x = \\pm 4\\), \\(|x| = 4\\). Sufficient.\n(2) \\((x - 4)^{2} = 0\\), \\(x = 4\\), \\(|x| = 4\\). Sufficient.\nAnswer: D.",
  take: "The question asks for |x|; two roots of opposite sign still give one answer."
},
"di-ds-ineq-class#23": {
  steps: "\\(r^{2} = |r|^{2}\\), so the expression equals \\(|r|\\).\n(1) \\(r = \\tfrac12\\) yes, \\(r = 10\\) no. Not sufficient.\n(2) \\(r = \\tfrac12\\) yes, \\(r = -10\\) no. Not sufficient.\nTogether \\(-1 < r < 1\\), \\(|r| < 1\\). Sufficient.\nAnswer: C.",
  take: "Simplify \\(r^{2}/|r|\\) to |r| before reading the statements."
},
"di-ds-ineq-class#24": {
  steps: "(1) \\(-7 < x < 1\\). Not sufficient.\n(2) \\(-1 < x < 7\\). Not sufficient.\nTogether \\(-1 < x < 1\\), still both signs. Not sufficient.\nAnswer: E.",
  take: "Intersect the intervals; if the intersection crosses 0 the sign is undecided."
},
"di-ds-ineq-class#25": {
  steps: "(1) \\(3x - 7 = 2x + 2\\) gives \\(x = 9\\) (\\(x/3 = 3\\), prime); \\(3x - 7 = -(2x + 2)\\) gives \\(x = 1\\) (\\(\\tfrac13\\), not prime). Not sufficient.\n(2) \\(x = 0\\) or \\(9\\): 0 is not prime, 3 is. Not sufficient.\nTogether \\(x = 9\\). Yes. Sufficient.\nAnswer: C.",
  take: "Solve each statement completely, then intersect the solution sets."
},
"di-ds-ineq-class#26": {
  steps: "(1) \\((a, b) = (2, 1)\\): \\(1 > 2\\)? No. \\((-2, 1)\\): \\(-\\tfrac13 > -2\\)? Yes. Not sufficient.\n(2) \\((-1, 1)\\) yes; \\((1, 2)\\): \\(-1 > 2\\)? No. Not sufficient.\nTogether \\((-3, 1)\\): \\(-\\tfrac14 > -3\\), yes; \\((-3, -1)\\): \\(-\\tfrac12 > 3\\), no. Not sufficient.\nAnswer: E.",
  take: "Pick numbers that satisfy both statements with b of each sign."
},
"quant-ineq-class#1": {
  fast: "Plug \\(x = \\tfrac{1}{2} (I\\) works), x = 0.9 (II works); III forces x > 2 where 1/x is smallest.",
  traps: "(B) misses II because 0.9 is an unusual test value. (E) accepts III without checking that 1/x must then be the smallest.",
  take: "\"Could be\" orderings: test the nine standard values (−2, −1, −0.9, \\(-\\tfrac{1}{2}\\), 0, \\(\\tfrac{1}{2}\\), 0.9, 1, 2)."
},
"quant-ineq-class#2": {
  fast: "Large numbers give I; numbers between 0 and 1 give II; a negative y gives III.",
  traps: "(A) assumes powers preserve order, which fails below 1 and for negatives.",
  take: "Squares and fourth powers reorder numbers below 1 and hide signs; test all three zones."
},
"quant-ineq-class#3": {
  fast: "Each bracket is negative for negative z, so flip all three: (5 − 4z) + (3 − 2z) − z = 8 − 7z.",
  traps: "(B) 7z − 8 keeps the signs unflipped. (C) −8 forgets the z terms.",
  take: "|expression| = −(expression) whenever the expression is negative."
},
"quant-ineq-class#4": {
  fast: "Multiply through by 3 to get |x| > 3, which splits into the two rays x > 3 or x < −3.",
  traps: "(A) and (E) each keep only one ray; neither is forced on its own.",
  take: "|x| > a (a positive) means x > a or x < −a."
},
"quant-ineq-class#5": {
  fast: "Try x = −5: the radicand is −(−5)(5) = 25 and its square root is 5, which equals −x.",
  traps: "(D) x is negative, and a square root is never negative. (E) \\(\\sqrt{x}\\) is undefined for negative x.",
  take: "A square root is non-negative; when x < 0 the positive quantity is −x."
},
"quant-ineq-class#6": {
  fast: "\\((x - 4)^{2} = |x - 4|\\) gives x − 4 ∈ {−1, 0, 1}: sides 3, 4, 5.",
  traps: "(D) is tempting if you find only two roots; the third root 4 completes 3-4-5.",
  take: "\\(t^{2} = |t|\\) has exactly the solutions 0, 1 and −1."
},
"quant-ineq-class#7": {
  fast: "Only (E) is a plain double inequality in x itself; every other choice has a power or an absolute value.",
  traps: "(D) looks bounded but the absolute value splits it into two segments.",
  take: "A bounded absolute value between two positive numbers is two intervals, not one."
},
"quant-ineq-class#8": {
  fast: "|ab| > ab is exactly the statement that ab is negative; it says nothing about a or b alone.",
  traps: "(D) and (E) pick a sign for one factor that the condition does not force.",
  take: "|t| > t if and only if t < 0."
},
"quant-ineq-class#9": {
  fast: "The equation forces |x| = −x and |y| = −y, so both are negative and their sum is negative.",
  traps: "(C), (D), (E) compare x with y, which is not determined.",
  take: "|t| = −t means t ≤ 0; with t ≠ 0, t is negative."
},
"quant-ineq-class#10": {
  fast: "Write 625 as \\(5^{4}\\), \\(25^{2}\\), \\(625^{1}\\); the prime exponent 2 gives x = 25.",
  traps: "(A) 5 pairs with k = −4, and 4 is not prime. (D) 625 pairs with k = −1, and 1 is not prime.",
  take: "List every base-exponent form of the number, then apply the side conditions."
},
"quant-ineq-class#11": {
  fast: "x = −2 fails (y would be −3); \\(x = -\\tfrac{1}{2}\\) survives.",
  traps: "(A) \\(-\\tfrac{5}{2}\\) adds the rejected root −2.",
  take: "Every root of an absolute-value equation must be checked against the sign of the other side."
},
"quant-ineq-class#12": {
  fast: "x is an integer only when 12 − y is even, so count the even y from −12 to 12: 13 values.",
  traps: "(A) 17 counts the odd y too, wrongly; the correct total of integers from −12 to 12 is 25 anyway.",
  take: "An integer condition on x becomes a parity condition on y."
},
"di-ds-pnc-class#1": {
  steps: "(1) One question gives 0.9 (yes); ten give \\(0.9^{10} \\approx 0.35\\) (no). Not sufficient.\n(2) No success rate. Not sufficient.\nTogether: 6 questions give \\(0.9^{6} \\approx 0.53\\) (yes), 7 give \\(0.9^{7} \\approx 0.48\\) (no). Not sufficient.\nAnswer: E.",
  take: "Repeated independent trials: \\(p^{n}\\) falls fast; test the boundary values the statement allows."
},
"di-ds-pnc-class#2": {
  steps: "The question asks whether \\(R > W\\).\n(1) \\(R(B + R) > W(B + W)\\) gives \\((R - W)(R + W + B) > 0\\); the second factor is positive, so \\(R > W\\). Yes. Sufficient.\n(2) \\(B\\) large with \\(R = 1, W = 2\\) or \\(R = 2, W = 1\\). Not sufficient.\nAnswer: A.",
  take: "Cross-multiplying positive quantities and factoring turns a ratio comparison into a sign."
},
"di-ds-pnc-class#3": {
  steps: "(1) The overlap is 0, so the answer is \\(P(W) + P(E)\\), unknown. Not sufficient.\n(2) A difference. Not sufficient.\nTogether \\(P(W) = 0.4, P(E) = 0.2\\) gives 0.6; \\(P(W) = 0.6, P(E) = 0.4\\) gives 1.0. Not sufficient.\nAnswer: E.",
  take: "A difference of two probabilities does not fix their sum."
},
"di-ds-pnc-class#4": {
  steps: "\\(p = \\dfrac{w(w - 1)}{90}\\), and \\(p > \\tfrac12\\) needs \\(w \\ge 8\\).\n(1) \\(w \\ge 6\\): 6 says no, 9 says yes. Not sufficient.\n(2) \\(\\dfrac{m(m - 1)}{90} < \\tfrac{1}{10}\\) gives \\(m \\le 3\\), so \\(w \\ge 7\\): 7 says no, 8 says yes. Not sufficient.\nTogether still \\(w \\ge 7\\). Not sufficient.\nAnswer: E.",
  take: "Translate each statement into a bound on the count, then test the boundary."
},
"di-ds-pnc-class#5": {
  steps: "(1) \\(\\dfrac{n(n - 1)}{90} = \\tfrac{1}{15}\\) gives \\(n(n - 1) = 6\\), \\(n = 3\\). Sufficient.\n(2) \\(\\dfrac{n(10 - n)}{45} = \\tfrac{7}{15}\\) gives \\(n(10 - n) = 21\\), \\(n = 3\\) or 7; \\(n < 5\\) leaves 3. Sufficient.\nAnswer: D.",
  take: "Use the stem's restriction to discard the second root of a quadratic."
},
"di-ds-pnc-class#6": {
  steps: "(1) 30 brown-haired, sex unknown. Not sufficient.\n(2) 20 males, hair unknown. Not sufficient.\nTogether the overlap could be anywhere from 0 to 20. Not sufficient.\nAnswer: E.",
  take: "\"A and B\" needs the intersection; separate totals never fix it."
},
"di-ds-pnc-class#7": {
  steps: "(1) \\(P(A \\text{ and } B) = 0.25 \\cdot P(B) \\le 0.25 < 0.3\\). Definite no. Sufficient.\n(2) \\(P(B) = 0.29\\), so the product is at most 0.29. Definite no. Sufficient.\nAnswer: D.",
  take: "An upper bound below the threshold answers a \"greater than\" question with a definite no."
},
"di-ds-pnc-class#8": {
  steps: "(1) 5 chips (1 green) gives 0; 10 chips (2 green) gives \\(\\tfrac{2}{10} \\cdot \\tfrac19\\). Not sufficient.\n(2) The same 4 : 1 information. Not sufficient.\nTogether nothing new. Not sufficient.\nAnswer: E.",
  take: "Draws without replacement need absolute counts; a ratio is enough only with replacement."
},
"quant-pnc-class#1": {
  fast: "Vowels: 4P3 = 24; consonants in the leftover four slots: 4! = 24; multiply to 576.",
  traps: "(A) 288 halves the count by treating the vowels as unordered. (C) 5040 ignores the restriction entirely. (D) 48 places the vowels but forgets to arrange the consonants.",
  take: "Place the restricted items first, then fill the rest; multiply."
},
"quant-pnc-class#2": {
  fast: "20C16 = 20C4 = 4,845; the four rejected men define the batch.",
  traps: "(A) 3,876 is 19C4, the number of batches containing one particular man. (D) 15,504 is 20C5. (C) and (E) are unrelated products.",
  take: "nCr = nC(n − r); count whichever side is smaller."
},
"quant-pnc-class#3": {
  fast: "Arrange all seven digits, 7!/(2! 3!) = 420, then drop the 60 arrangements that begin with 0.",
  traps: "(C) 480 forgets to divide by the repeated 2s. (B) 240 subtracts too much. (D) and (E) are near misses with no counting basis.",
  take: "With a 0 among the digits, subtract the arrangements that put 0 in front."
},
"quant-pnc-class#4": {
  fast: "Each letter has 4 boxes, 4 × 4 × 4 = 64; remove the 4 ways that put all three in one box: 60.",
  traps: "(D) 64 forgets the restriction. (B) 24 treats it as 4P3, which forbids sharing a box at all. (E) 81 uses \\(3^{4}\\).",
  take: "Repetition allowed means a power; \"not all the same\" means subtract the few bad cases."
},
"quant-pnc-class#5": {
  fast: "Take the complement: no 6 on either die is \\((\\tfrac{5}{6})(\\tfrac{5}{6}) = \\tfrac{25}{36}\\), so at least one 6 is \\(\\tfrac{11}{36}\\).",
  traps: "(B) \\(\\tfrac{1}{3}\\) double counts the (6, 6) outcome by adding \\(\\tfrac{6}{36} + \\tfrac{6}{36}\\). (A) \\(\\tfrac{1}{6}\\) counts one die only. (D) \\(\\tfrac{5}{18}\\) is \\(\\tfrac{10}{36}\\), one short.",
  take: "\"At least one\" is nearly always fastest through the complement."
},
"quant-pnc-class#6": {
  fast: "Cube each colour's chance and add: \\((8 + 27 + 64)/729 = \\tfrac{99}{729}\\), which reduces to \\(\\tfrac{11}{81}\\).",
  traps: "(A) \\(\\tfrac{1}{27}\\) is only the all-yellow case. (D) \\(\\tfrac{5}{84}\\) is the answer without replacement. (C) and (E) are arithmetic slips.",
  take: "\"Same colour\" is an OR of the colours: add the separate probabilities."
},
"quant-pnc-class#7": {
  fast: "Red cannot come up three times; yellow gives \\(\\tfrac{1}{84}\\) and blue \\(\\tfrac{4}{84}\\), so the total is \\(\\tfrac{5}{84}\\).",
  traps: "(D) \\(\\tfrac{11}{81}\\) is the with-replacement answer. (A) \\(\\tfrac{1}{84}\\) is only the yellow case. (E) \\(\\tfrac{5}{21}\\) is the none-yellow probability.",
  take: "Without replacement, shrink both numerator and denominator after every draw."
},
"quant-pnc-class#8": {
  fast: "The book must move \\((\\tfrac{1}{8})\\) and then be the one picked from six \\((\\tfrac{1}{6})\\): \\(\\tfrac{1}{8} \\times \\tfrac{1}{6} = \\tfrac{1}{48}\\).",
  traps: "(C) \\(\\tfrac{5}{48}\\) is the probability it is moved but not picked. (B) and (D) each stop after one stage.",
  take: "Sequential events: multiply the conditional probabilities along the path."
},
"quant-pnc-class#9": {
  fast: "Weight each class: \\((\\tfrac{2}{3})(\\tfrac{3}{4}) + (\\tfrac{1}{3})(\\tfrac{2}{7}) = \\tfrac{1}{2} + \\tfrac{2}{21} = \\tfrac{25}{42}\\) for a boy chairman.",
  traps: "(A) \\(\\tfrac{1}{2}\\) forgets X-B. (B) \\(\\tfrac{2}{21}\\) forgets X-A. (E) \\(\\tfrac{3}{4}\\) uses X-A's ratio alone.",
  take: "Total probability: weight each class's boy fraction by the chance of choosing that class."
},
"quant-pnc-class#10": {
  fast: "At least one alive is 1 minus both dead: \\(1 - (\\tfrac{2}{5})(\\tfrac{1}{3}) = 1 - \\tfrac{2}{15} = \\tfrac{13}{15}\\).",
  traps: "(E) \\(\\tfrac{19}{15}\\) adds the two probabilities, which exceeds 1. (A) \\(\\tfrac{2}{5}\\) is P(both alive). (B) \\(\\tfrac{2}{15}\\) is P(both dead).",
  take: "Never add probabilities of events that can both happen; use 1 − P(neither)."
},
"quant-pnc-class#11": {
  fast: "Millions of arrangements at 12 s each cannot be seconds; (E).",
  traps: "(A) to (D) treat the count as 1 to 4 combinations. Estimate the size before looking at the choices.",
  take: "\"At least 8 distinct digits\" is three cases (8, 9, 10) added together."
},
"quant-pnc-class#12": {
  fast: "Manager 2, leader 3, consultants 7C4 − 5C2 = 25; multiply: 2 × 3 × 25 = 150 teams.",
  traps: "(D) 200 comes from 2 × 3 × 35 with no restriction (210) rounded, or from miscounting the bad groups. (B) 120 uses 20 consultant groups.",
  take: "\"Never together\" = total − (groups that include both)."
},
"quant-pnc-class#13": {
  fast: "Four flavours times four topping states (none, cheese, mushrooms, both) gives 16 varieties.",
  traps: "(A) 12 forgets the plain pizza. (C) 20 or (D) 24 add extra combinations that do not exist.",
  take: "Each optional extra doubles the count; two extras give \\(2^{2} = 4\\) states."
},
"quant-pnc-class#14": {
  fast: "A block of three tails slides through six slots: 6 − 3 + 1 = 4 possible positions.",
  traps: "(D) 6 counts positions for a single tail. (C) 5 is a block of two.",
  take: "A block of length k in n slots has n − k + 1 positions."
},
"quant-pnc-class#15": {
  fast: "All 27 codes minus the single all-odd code 555 leaves 26 codes with an even product.",
  traps: "(C) 27 forgets the restriction. (A) 25 removes two codes.",
  take: "\"Product even\" = complement of \"all digits odd\"."
},
"quant-pnc-class#16": {
  fast: "Michael's two partners come from five people; 4 of those 10 pairs include Anthony: 40%.",
  traps: "(A) 20% is \\(\\tfrac{1}{5}\\), the chance a single named partner is Anthony. (D) 50% ignores the third member.",
  take: "Fix the person mentioned and count only the remaining seats."
},
"quant-pnc-class#17": {
  fast: "Woman moves: \\((\\tfrac{10}{13})(\\tfrac{4}{9}) = \\tfrac{40}{117}\\); man moves: \\((\\tfrac{3}{13})(\\tfrac{3}{9}) = \\tfrac{9}{117}\\); sum \\(\\tfrac{49}{117}\\).",
  traps: "(E) \\(\\tfrac{40}{117}\\) is only the woman-moves branch. (D) \\(\\tfrac{5}{18}\\) is the man-moves branch alone. (A) \\(\\tfrac{13}{21}\\) mixes the room sizes.",
  take: "Two-stage draws: split on the first stage and add the weighted second-stage probabilities."
},
"quant-pnc-class#18": {
  fast: "Twenty-five equally likely endings and two distinct guesses: \\(\\tfrac{2}{25}\\) chance of success.",
  traps: "(C) \\(\\tfrac{1}{25}\\) is one attempt only. (A) and (B) use 5 candidates instead of 25.",
  take: "Sampling without replacement: k attempts among N equally likely keys succeed with probability k/N."
},
"quant-pnc-class#19": {
  fast: "Pick the one correct letter (4 ways) and derange the other three (2 ways): 8 of \\(24 = \\tfrac{1}{3}\\).",
  traps: "(B) \\(\\tfrac{2}{5}\\) and the rest do not have denominator dividing 24; a quick sanity check on the denominator kills them.",
  take: "\"Exactly one correct\" = (choose it) × (derange the rest); three items have 2 derangements."
},
"quant-pnc-class#20": {
  fast: "All committees 10C3 = 120 minus the 6C3 = 20 with no French teacher leaves 100.",
  traps: "(D) 80 comes from 4 × 6C2 = 60 plus a partial count, or from 4 × 20. (A) 40 is 4 × 10.",
  take: "\"At least one\" in counting: subtract the \"none\" case from the total."
},
"quant-pnc-class#21": {
  fast: "From 000 to 999 each of the three places shows a 7 exactly 100 times: 300 sevens.",
  traps: "(A) 280 drops the 7s that appear twice in numbers such as 77. (E) 360 double counts them.",
  take: "Count digit appearances by position, not by number."
},
"quant-pnc-class#22": {
  fast: "Choose 3 of the 4 couples (4 ways) and one spouse from each (2 × 2 × 2): 32 committees.",
  traps: "(B) 24 is 4 × 3 × 2, arranging couples instead of selecting. (A) 16 forgets one factor of 2.",
  take: "Couple restrictions: choose couples first, then a representative from each."
},
"quant-pnc-class#23": {
  fast: "Each digit lands in each place 24 times: 24 × 15 × 11,111 is just under 4 million.",
  traps: "(C) 3 million or (E) 5 million come from using 20 or 30 appearances per place.",
  take: "Sum of all arrangements = (appearances per place) × (digit sum) × 111…1."
},
"quant-pnc-class#24": {
  fast: "Three-dice sums are symmetric about 10.5, so beating 10 happens exactly half the time.",
  traps: "(C) \\(\\tfrac{1}{3}\\) guesses at three equal outcomes (less, equal, more) that are not equally likely.",
  take: "Dice sums are symmetric; a threshold at the centre splits the outcomes evenly."
},
"quant-pnc-class#25": {
  fast: "26 + 676 + 17,576 = 18,278; the units digit 8 already singles out choice (E).",
  traps: "(C) 15,600 is 26 × 25 × 24, which forbids repeats. (D) 16,302 uses \\(26^{3} - 26^{2}\\) − … arithmetic slips.",
  take: "Codes of several lengths: add the counts for each length."
},
"quant-pnc-class#26": {
  fast: "Per size: 4 single-colour packs plus 4C3 = 4 mixed packs; two sizes double it to 16.",
  traps: "(E) 32 counts colour orders. (B) 8 forgets the two sizes.",
  take: "Unordered colour sets are combinations; multiply by the independent size choice."
},
"quant-pnc-class#27": {
  fast: "60 favourable pairs out of 1,000 × 800 = 800,000 possible pairs gives \\(\\tfrac{3}{40}{,}000\\).",
  traps: "(D) \\(\\tfrac{1}{60}\\) inverts the count. (C) \\(\\tfrac{9}{2}{,}000\\) multiplies the two per-class chances \\((\\tfrac{60}{1000} \\times \\tfrac{60}{800})\\), which double counts pairs.",
  take: "Favourable pairs over total pairs; do not multiply per-class fractions."
},
"quant-pnc-class#28": {
  fast: "Numbers ending in 13 run from 324,713 to 458,513 in steps of 100: 1,338 + 1 = 1,339.",
  traps: "(D) 1,352 and (C) 1,353 use the wrong endpoints (…700 and …600). (A) and (B) are the raw span divided by 10.",
  take: "Arithmetic sequence count: (last − first)/step + 1, with the actual first and last terms."
},
"quant-pnc-class#29": {
  fast: "Leo misses only if all three stations fail: 1 − 0.7 × 0.7 × 0.7 = 1 − 0.343 = 0.657.",
  traps: "(E) 0.9 adds 0.3 three times. (A) 0.027 is \\(0.3^{3}\\), all three liked. (C) 0.417 is 0.3 + 0.7(0.3) − …, a partial sum.",
  take: "\"Eventually succeeds\" = 1 − (fails every time)."
},
"quant-pnc-class#30": {
  fast: "Four colours give 4 + 6 = 10 codes, one short; five colours give 5 + 10 = 15, enough.",
  traps: "(A) 4 stops one short. (D) 12 assigns one colour per centre.",
  take: "Test the smallest candidate against n + n(n − 1)/2."
},
"quant-pnc-class#31": {
  fast: "Halving nine times gives \\(\\tfrac{1}{512}\\), still above \\(\\tfrac{1}{1000}\\); ten times gives \\(\\tfrac{1}{1024}\\), below it.",
  traps: "(B) 9 gives \\(\\tfrac{1}{512}\\), still more than \\(\\tfrac{1}{1000}\\).",
  take: "Know \\(2^{10} \\approx 1000\\)."
},
"quant-pnc-class#32": {
  fast: "No fashion magazine means all three are sports: \\(\\tfrac{4}{56} = \\tfrac{1}{14}\\), so at least one is \\(\\tfrac{13}{14}\\).",
  traps: "(C) \\(\\tfrac{32}{35}\\) comes from using 4 magazines. (A) \\(\\tfrac{1}{2}\\) is a guess based on equal halves.",
  take: "\"At least one\" via the complement, with combinations for simultaneous draws."
},
"quant-pnc-class#33": {
  fast: "The first digit is 1, so the middle must be 0 and the last 1: only 101 of the 100 numbers.",
  traps: "(B) \\(\\tfrac{1}{111}\\) and (C) \\(\\tfrac{1}{110}\\) use a wrong count of integers from 100 to 199; there are 100.",
  take: "Inclusive count: 199 − 100 + 1 = 100."
},
"quant-pnc-class#34": {
  fast: "Add the two lengths and factor the smaller power: \\(26^{4} + 26^{5} = 26^{4} (1 + 26) = 27 \\times 26^{4}\\).",
  traps: "(B) \\(26 \\times 26^{4}\\) is \\(26^{5}\\) alone. (E) \\(27 \\times 26^{5}\\) factors the wrong power.",
  take: "Add the two lengths and factor the smaller power."
},
"quant-pnc-class#35": {
  fast: "One of each gives 6 × 2 = 12 platters; two of each gives 6C2 × 1 = 15; total 27.",
  traps: "(B) 12 and (C) 15 are the two cases alone. (D) 21 is 6 + 15.",
  take: "\"Equal numbers\" splits into cases by how many of each; add the cases."
},
"quant-pnc-class#36": {
  fast: "The three named riders take one of 3! = 6 relative orders, so 8!/6 = 6,720, near 7,000.",
  traps: "(C) 6,000 is a careless rounding of 6,720 downward; the nearest thousand is 7,000.",
  take: "A fixed relative order of k people divides the total by k!."
},
"quant-pnc-class#37": {
  fast: "Exactly two of three: 3 ways × 0.3 × 0.3 × 0.7 = 0.189, which rounds to 0.2.",
  traps: "(A) 0.1 forgets the factor 3 for which two visitors buy. (C) 0.3 is the single-visitor rate.",
  take: "Exactly r successes in n independent trials: nCr times p to the r times (1 − p) to the n − r."
},
"quant-pnc-class#38": {
  fast: "The five-letter words are the four-letter words with one of 6 unused letters added: 6 to 1.",
  traps: "(A) 5 to 4 compares the lengths, not the counts.",
  take: "Adding one more slot multiplies by the number of letters still unused."
},
"quant-pnc-class#39": {
  fast: "Every even n works (48 values); odd n works only when n + 1 is a multiple of 8 (12 values).",
  traps: "(C) \\(\\tfrac{1}{2}\\) counts only the even n. (E) \\(\\tfrac{3}{4}\\) overcounts the odd case.",
  take: "Split by parity; consecutive evens carry a factor of 8."
},
"quant-pnc-class#40": {
  fast: "The six colour patterns of RRWW are equally likely and only WRRW puts both reds in the middle.",
  traps: "(A) \\(\\tfrac{1}{12}\\) treats the identical bushes as distinct in the numerator only. (E) \\(\\tfrac{1}{2}\\) guesses.",
  take: "Probability with identical items: count colour patterns, which are equally likely."
},
"quant-pnc-class#41": {
  fast: "No repeated digit means 8 × 7 × 6 = 336 codes; 336 − 330 leaves 6 unassigned.",
  traps: "(D) 182 uses \\(8^{3} = 512\\) (repeats allowed). (B) 58 subtracts from 8C3 × 6 with an arithmetic slip.",
  take: "\"No digit repeats\" makes it a permutation, 8P3."
},
"quant-pnc-class#42": {
  fast: "Dry Saturday, dry Sunday, then rain on Monday: 0.8 × 0.8 × 0.2 = 0.128.",
  traps: "(D) 0.512 is three dry days. (C) 0.488 is \"rains at least once\". (A) 0.008 is rain on all three days.",
  take: "\"First occurrence on day k\" = failures before × success on day k."
},
"quant-pnc-class#43": {
  fast: "The leading digit has 4 even options (not 0) and each other place has 5: 4 × 125 = 500.",
  traps: "(A) 625 allows a leading 0. (E) 256 uses 4 choices in every place.",
  take: "Leading digit restrictions come first."
},
"quant-pnc-class#44": {
  fast: "The string works only if every bulb works, 0.94 to the tenth, so it fails with \\(1 - 0.94^{10}\\).",
  traps: "(B) \\((0.06)^{10}\\) is all ten failing. (D) \\((0.94)^{10}\\) is the survival probability. (C) is the complement of the wrong event.",
  take: "Series systems fail when any part fails: use 1 − P(all survive)."
},
"quant-pnc-class#45": {
  fast: "Pick the repeated digit (9 ways), the odd digit (8 ways) and its position (3 ways): 216.",
  traps: "(C) 72 forgets the 3 positions. (D) 144 uses 2 positions.",
  take: "Pattern counting: choose the values, then the positions."
},
"quant-pnc-class#46": {
  fast: "8 × 2 × 10 = 160 codes before the last rule; the 8 codes of the form _00 are removed: 152.",
  traps: "(C) 160 skips the last constraint. (A) 144 subtracts 16, treating both 00 and 01 as forbidden.",
  take: "Apply simple constraints by multiplication, then subtract the joint forbidden case."
},
"quant-pnc-class#47": {
  fast: "Eighteen people each shake 15 hands; halve the double count: 18 × 15 / 2 = 135.",
  traps: "(D) 270 forgets to halve. (C) 144 is 18C2 − 9, a wrong subtraction; the right one is 153 − 18.",
  take: "Handshakes = (people × partners each)/2, or total pairs minus excluded pairs."
},
"quant-pnc-class#48": {
  fast: "Twelve brother–sister–sister–brother blocks, then 6 units round a table in 5! ways: 1,440.",
  traps: "(C) 1,200 uses 6 × 200; (A) to (D) are round numbers with no factorial structure.",
  take: "Glue the constrained people into one unit, then use (n − 1)! for the circle."
},
"quant-pnc-class#49": {
  fast: "Seat Anna; of Bill's 9 possible seats only 2 are beside her, so \\(\\tfrac{7}{9}\\) keeps them apart.",
  traps: "(D) \\(\\tfrac{6}{9}\\) uses 3 forbidden seats. (A) \\(\\tfrac{3}{9}\\) inverts the question.",
  take: "Circular adjacency: fix one person and count the other's seats."
},
"quant-pnc-class#50": {
  fast: "Only three colours exist, so any four socks must repeat a colour: probability 1.",
  traps: "(A) to (D) compute something; the event is certain.",
  take: "Check for a pigeonhole certainty before computing."
},
"quant-pnc-class#51": {
  fast: "Hundreds digit 8 ways, tens digit 9 ways, odd units digit avoiding 5 gives 4 ways: 288.",
  traps: "(D) 300 forgets to remove 5 from the hundreds place. (E) 312 keeps 5 as a possible units digit.",
  take: "Digit-by-digit counting with the excluded digit removed from every place."
},
"quant-pnc-class#52": {
  fast: "Drop 0 (sum 15): 5! = 120; drop 3 (sum 12): 5! − 4! = 96 since 0 cannot lead; total 216.",
  traps: "(E) 320 forgets that 0 cannot lead. (A) 120 counts one case only.",
  take: "Divisibility by 3 is a digit-sum condition; choose the digit set first."
},
"quant-pnc-class#53": {
  fast: "Hundreds 8 allows 5 odd units and 8 tens (40); hundreds 9 allows 4 odd units (32): 72.",
  traps: "(B) 40 and (A) 32 are the two cases alone. (D) 90 ignores the distinct-digit rule.",
  take: "Split on the hundreds digit when it interacts with the units restriction."
},
"quant-pnc-class#54": {
  fast: "Three hundreds with distinct digits give 3 × 72 = 216; remove 701 to 710 (9 numbers): 207.",
  traps: "(E) 216 forgets the lower bound. (C) 206 removes 710 twice or miscounts 707.",
  take: "Count a clean range, then subtract the small edge case explicitly."
},
"quant-pnc-class#55": {
  fast: "5C3 × 9 × 9 = 810 favourable passwords out of 100,000 is about 0.008, well under 0.1.",
  traps: "(B) 0.1 treats the chance as 1 in 10.",
  take: "Exactly k of n positions: nCk × (favourable per position) × (other per position)."
},
"quant-pnc-class#56": {
  fast: "Digit sets {5,6}, {1,5,6}, {2,3,5}, {1,1,5,6}, {1,2,3,5} give 2 + 6 + 6 + 12 + 24 = 50.",
  traps: "(C) 30 forgets the four-digit numbers with a repeated 1.",
  take: "Factor the product into digit sets, then arrange each set with padding 1s."
},
"quant-pnc-class#57": {
  fast: "Six letters with a repeated C give 6!/2! = 360; glue the Cs for 5! = 120; 360 − 120 = 240.",
  traps: "(A) 120 is the together count. (B) 180 halves the total for no reason.",
  take: "\"Not together\" = total − together; identical letters divide the total, not the block."
},
"di-ds-pnc-live#1": {
  steps: "The question needs \\(x\\).\n(1) \\({}^{n}C_{5} = 126\\) has the single solution \\(n = 9\\), so \\(x = 7\\). Sufficient.\n(2) \\({}^{n}C_{3} = 56\\) gives \\(n = 8\\), \\(x = 7\\). Sufficient.\nAnswer: D.",
  take: "nCr increases with n for fixed r, so a given value pins n; you need not compute it in the exam."
},
"di-ds-pnc-live#2": {
  steps: "(1) Eight integers, unknown values. Not sufficient.\n(2) Any subset of 1 to 25. Not sufficient.\nTogether \\(T\\) could be \\(\\{1, \\dots, 8\\}\\) (probability \\(\\tfrac58\\)) or \\(\\{10, \\dots, 17\\}\\) (0). Not sufficient.\nAnswer: E.",
  take: "A probability from a set needs the count of favourable members, not just the size and range."
},
"di-ds-pnc-live#3": {
  steps: "(1) \\({}^{x - y - 2}C_{10} = 3003\\) has the single solution \\(x - y - 2 = 15\\), so \\(x - y = 17\\). Sufficient.\n(2) \\(x - y = 17\\) directly. Sufficient.\nAnswer: D.",
  take: "Rephrase to the quantity that matters (remaining flavours); a combination count then pins it."
},
"di-ds-pnc-live#4": {
  steps: "\\(3p^{2}(1 - p) + p^{3} > p\\) simplifies to \\((2p - 1)(p - 1) < 0\\), i.e. \\(\\tfrac12 < p < 1\\). Since \\(p < 1\\), the question is whether \\(p > \\tfrac12\\).\n(1) \\(p < 0.7\\): could be 0.4 or 0.6. Not sufficient.\n(2) \\(p > 0.6 > 0.5\\). Yes. Sufficient.\nAnswer: B.",
  take: "Best-of-three helps the better-than-even shooter and hurts the worse one; find the threshold first."
},
"quant-pnc-live#1": {
  fast: "Nest the smaller event inside the larger: neither can be at most 1 − 0.68 = 0.32.",
  traps: "(A) 0.22 assumes independence, which is not stated and does not maximise \"neither\".",
  take: "Max of P(neither) = 1 − max(P(A), P(B)) when the events can overlap fully."
},
"quant-pnc-live#2": {
  fast: "Place the right-angle vertex P (110 spots), then R on P's row (9 ways) and Q on P's column (10 ways): 9,900.",
  traps: "(E) 12,100 lets R and Q coincide with P. (B) 1,100 forgets one of the two legs.",
  take: "Fix the vertex with the right angle first; the legs are then independent choices."
},
"quant-pnc-live#3": {
  fast: "Pairs: 3 dove pairs + 1 rabbit pair out of 10 pairs = \\(\\tfrac{2}{5}\\).",
  traps: "(B) \\(\\tfrac{3}{5}\\) is the complement, a mixed pair. (E) exceeds 1.",
  take: "\"Matched pair\" is an OR of the colours; add the two cases."
},
"quant-pnc-live#4": {
  fast: "Only the conjugate pair (x + y)(x − y) works, one of the 6 possible pairs: \\(\\tfrac{1}{6}\\).",
  traps: "(B) \\(\\tfrac{1}{3}\\) also counts (x + 5y)(5x − y), whose product has an xy term.",
  take: "A difference of squares needs conjugates a + b and a − b."
},
"quant-pnc-live#5": {
  fast: "In every block of four consecutive integers exactly two values of n (n = 3 and n = 4 mod 4) work: \\(\\tfrac{1}{2}\\).",
  traps: "(E) \\(\\tfrac{3}{4}\\) counts n ≡ 1 too, but 2 × 2 = 4 needs both factors even, impossible for consecutive integers.",
  take: "For consecutive integers, a prime power must sit entirely in one factor."
},
"quant-pnc-live#6": {
  fast: "6 ways to fill the front row, minus the one (4, 5) that puts a shorter person behind.",
  traps: "(B) 6 forgets the failing pair. (E) 36 allows orderings within rows.",
  take: "Once the members of each row are chosen, the increasing order fixes the positions."
},
"quant-pnc-live#7": {
  fast: "9 × 10 × 10 = 900; the last two digits mirror the first two.",
  traps: "(A) 720 forbids repeated digits, which palindromes require anyway.",
  take: "Count only the independent positions."
},
"quant-pnc-live#8": {
  fast: "Hundreds 7 gives 28, hundreds 8 gives 35, hundreds 9 gives 28: 28 + 35 + 28 = 91.",
  traps: "(D) 105 gives every hundred 35, ignoring that 7 and 9 are odd.",
  take: "When the leading digit can collide with the units restriction, split the cases."
},
"quant-pnc-live#9": {
  fast: "299 numbers above 700, minus 216 with all digits distinct, minus 3 with all digits equal: 80.",
  traps: "(B) 82 includes 700, which is not greater than 700 (and would count anyway as a two-equal number: 700 has two 0s, so check the bound).",
  take: "Three digit patterns partition the range; count the easy two and subtract."
},
"quant-pnc-live#10": {
  fast: "Sixteen prime-digit endings per hundred over 16 hundreds is 256; drop the four above 1570: 252.",
  traps: "(C) 236 removes a whole block of 16 instead of the four beyond 1570.",
  take: "Count per hundred, multiply, then trim the partial last block."
},
"quant-pnc-live#11": {
  fast: "Third digit 3 ways, fourth digit 3 ways, fifth-and-sixth pair 3 ways: 3 × 3 × 3 = 27.",
  traps: "(C) 72 lets the sixth digit vary freely after fixing the fifth.",
  take: "A dependent pair of digits counts as one slot."
},
"quant-pnc-live#12": {
  fast: "Choose 3 of the 5 couples and one spouse from each: 10 × 8 = 80 (or 120 total minus 40 with a couple).",
  traps: "(E) 120 ignores the restriction. (B) 40 is the number of bad committees.",
  take: "Couple problems: couples first, spouses second."
},
"quant-pnc-live#13": {
  fast: "First digit 9 ways (no 0), second 9 ways (0 back, first digit gone), then 8 and 7: 4,536.",
  traps: "(C) 5,040 allows a leading 0 (10P4). (A) 3,024 removes 0 entirely.",
  take: "The zero returns as an option from the second digit on."
},
"quant-pnc-live#14": {
  fast: "Each apple appears in 2 of the 5 possible partners' pairs, so the spoiled one is drawn with probability \\(\\tfrac{2}{5}\\).",
  traps: "(A) \\(\\tfrac{1}{5}\\) is the chance for a single draw.",
  take: "Picking k of n includes a given item with probability k/n."
},
"quant-pnc-live#15": {
  fast: "Of the 720 orders, Frankie is behind Joey in exactly half by symmetry: 360.",
  traps: "(C) 120 fixes Frankie directly behind Joey (5! with a block), a stronger condition.",
  take: "\"Somewhere behind\" halves the total; \"immediately behind\" needs a block."
},
"quant-pnc-live#16": {
  fast: "Five days, choose the 3 rainy ones: 10 patterns out of 2 to the fifth = 32, so \\(\\tfrac{5}{16}\\).",
  traps: "(A) \\(\\tfrac{1}{32}\\) is one specific pattern. (B) uses 4 days.",
  take: "Count the days inclusively; then binomial with \\(p = \\tfrac{1}{2}\\) is patterns over \\(2^{n}\\)."
},
"quant-pnc-live#17": {
  fast: "Over a common denominator of 24 the crash cases weigh 1 + 3 + 2 + 1 = 7, so \\(\\tfrac{7}{24}\\).",
  traps: "(E) \\(\\tfrac{17}{24}\\) is the survival probability.",
  take: "\"At least two of three\" is four disjoint cases; list them."
},
"quant-pnc-live#18": {
  fast: "Forty cars have AC and only one convertible lacks it, so 41 of the 50 cars qualify.",
  traps: "(E) \\(\\tfrac{47}{50}\\) adds 40 and 15 minus a wrong overlap.",
  take: "Inclusion-exclusion: |A or B| = |A| + |B| − |A and B|."
},
"quant-pnc-live#19": {
  fast: "Thirty of the 64 ordered draws violate the triangle inequality, so the probability is \\(\\tfrac{15}{32}\\).",
  traps: "(D) \\(\\tfrac{17}{32}\\) is the probability that a triangle can be formed.",
  take: "Triangle test: the longest side must be less than the sum of the other two; count ordered outcomes."
},
"quant-pnc-live#20": {
  fast: "Sums are even half the time, products three quarters of the time; average the two: \\(\\tfrac{5}{8}\\).",
  traps: "(B) \\(\\tfrac{1}{2}\\) forgets that products are usually even.",
  take: "Average the two operations' probabilities, each weighted \\(\\tfrac{1}{2}\\)."
},
"quant-pnc-live#21": {
  fast: "Subtract the bad cases: three fail (0.008) plus exactly two fail (0.096) is about 0.1, leaving 0.9.",
  traps: "(B) 80% is the chance a single investment survives.",
  take: "\"No more than one third lost\" means at most one of three fails."
},
"quant-pnc-live#22": {
  fast: "Four up days and one down day: the down day can be any of the 5 days, so 5 of 32 sequences.",
  traps: "(E) \\(\\tfrac{3}{8}\\) is the chance of ending up exactly $1 (10 sequences of 32).",
  take: "Translate the net change into a count of ups and downs first."
},
"quant-pnc-live#23": {
  fast: "Three consonant slots give 27 choices and two vowel slots give 4; multiply to get 108 nouns.",
  traps: "(B) 12 forbids repeats (3 · 2 · 1 · 1 · 2 is not even consistent).",
  take: "Unless told otherwise, letters can repeat: multiply the options per slot."
},
"quant-pnc-live#24": {
  fast: "Choose the two correct keys (6 ways); the other two must swap (1 way): 6 of \\(24 = \\tfrac{1}{4}\\).",
  traps: "(D) \\(\\tfrac{3}{8}\\) is the chance of exactly one correct key \\((\\tfrac{8}{24})\\).",
  take: "Exactly k fixed points: choose them, then derange the rest (2 items have 1 derangement)."
},
"quant-pnc-live#25": {
  fast: "Whichever four leave first, only 1 of their 4! = 24 orders is increasing: \\(\\tfrac{1}{24}\\).",
  traps: "(A) and (E) involve 99 or 4 in the wrong way; the roster size is irrelevant.",
  take: "A random order of k distinct items is increasing with probability 1/k!."
},
"quant-pnc-live#26": {
  fast: "Total 7! minus the block count 5! × 3! (men glued, then ordered inside the block).",
  traps: "(B) 4!3! treats the block as replacing all three men without adding it back as a unit.",
  take: "\"Not all together\" = total − (all together as one block)."
},
"quant-pnc-live#27": {
  fast: "Place the first I; 2 of the 9 remaining slots are adjacent... averaged over positions this gives \\(\\tfrac{1}{5}\\).",
  traps: "(A) \\(\\tfrac{1}{10}\\) forgets the factor 2! in the total count of distinct codes.",
  take: "Adjacent-pair probability = (n − 1)!·2 / n! = 2/n for distinct letters; with identical letters, 2/n still after cancelling 2!."
},
"quant-pnc-live#28": {
  fast: "9 gems fit the diamond probability; rubies: \\(\\tfrac{3}{9} \\times \\tfrac{2}{8} = \\tfrac{1}{12}\\).",
  traps: "(A) \\(\\tfrac{5}{36}\\) squares the ruby fraction, ignoring \"without replacement\".",
  take: "Without replacement, the count matters; find the count from the given probability."
},
"quant-pnc-live#29": {
  fast: "q = (p − 5)(p − 8) is negative only for p = 6 and 7, two of the ten values: \\(\\tfrac{1}{5}\\).",
  traps: "(C) \\(\\tfrac{2}{5}\\) includes the roots 5 and 8, where q = 0.",
  take: "A quadratic is negative between its roots, not at them."
},
"quant-pnc-live#30": {
  fast: "Snow 90%, closed 80%; the overlap is at most the smaller one, 80%.",
  traps: "(D) 72% assumes independence, which minimises nothing and is not given.",
  take: "Max of P(A and B) is min(P(A), P(B))."
},
"quant-pnc-live#31": {
  fast: "\"Neither\" ranges from 0 (all non-blue-eyed have brown hair) to 30% (none do): a 0.3 spread.",
  traps: "(A) 0.2 is (1 − 0.4 − 0.7) misread; percentages of overlapping groups do not subtract like that.",
  take: "Use a 2 × 2 table and push the cell to its extremes."
},
"quant-pnc-live#32": {
  fast: "60 is 80% of the dessert group, so dessert is 75% and no dessert 25%.",
  traps: "(C) 40% subtracts 60 from 100 as if everyone else skipped dessert.",
  take: "\"20% of those who order dessert\" is a percent of a subgroup, not of everyone."
},
"quant-pnc-live#33": {
  fast: "210 has 16 factors and only 42 and 210 are multiples of 42: \\(\\tfrac{2}{16} = \\tfrac{1}{8}\\).",
  traps: "(A) \\(\\tfrac{1}{16}\\) counts only 42 and forgets 210 itself.",
  take: "Factors of n that are multiples of d correspond to factors of n/d."
},
"quant-pnc-live#34": {
  fast: "The only failing jury is 7 men and all 5 women: 120 of 455, so \\(1 - \\tfrac{24}{91} = \\tfrac{67}{91}\\).",
  traps: "(A) \\(\\tfrac{24}{91}\\) is the complement.",
  take: "Identify the single failing composition and subtract it."
},
"quant-pnc-live#35": {
  fast: "Parent driving gives 48 arrangements; the 16 with the daughters adjacent in the back are removed: 32.",
  traps: "(C) 48 ignores the daughters' restriction.",
  take: "Handle restrictions one at a time: multiply for the easy one, subtract for the \"not together\" one."
},
"quant-pnc-live#36": {
  fast: "Two sibling pairs and one triple make 5 sibling pairs out of 21, so not siblings is \\(\\tfrac{16}{21}\\).",
  traps: "(A) \\(\\tfrac{5}{21}\\) is the sibling probability.",
  take: "Translate \"exactly k siblings\" into family groups, then count pairs within groups."
},
"quant-pnc-live#37": {
  fast: "All 6 to the fourth (1,296) passwords minus the 6 × 5 × 4 × 3 = 360 with no repeated letter leaves 936.",
  traps: "(E) 1,296 is the total. (A) 720 is 6!, a wrong count of the no-repeat case.",
  take: "\"At least one repeat\" = total − all distinct."
},
"quant-pnc-live#38": {
  fast: "Glue Jeong and Leila (240 arrangements), then remove the 96 in which Gita and Inge are also adjacent: 144.",
  traps: "(B) 240 forgets the Gita-Inge restriction. (E) 96 is the subtracted count.",
  take: "Combine a \"must be together\" block with a \"not together\" subtraction."
},
"quant-pnc-live#39": {
  fast: "Day 22 is a Wednesday, so day 24 is Friday and Saturday runs out.",
  traps: "(D) Friday is the last day with a new outfit, not the first without one.",
  take: "Count combinations, then walk the calendar carefully from the first wearing day."
},
"quant-pnc-live#40": {
  fast: "Prime sums 2, 3, 5, 7, 11 happen in 1 + 2 + 4 + 6 + 2 = 15 of the 36 rolls: \\(\\tfrac{5}{12}\\).",
  traps: "(D) \\(\\tfrac{7}{18}\\) forgets the sum 11.",
  take: "List target sums, then count ordered rolls for each."
},
"quant-pnc-live#41": {
  fast: "Exactly three hits give \\(\\tfrac{16}{625}\\) and four hits give \\(\\tfrac{1}{625}\\); add them for \\(\\tfrac{17}{625}\\).",
  traps: "(C) \\(\\tfrac{16}{625}\\) forgets the all-four case. (A) is that case alone.",
  take: "\"At least 3 of 4\" = exactly 3 plus exactly 4."
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
"quant-intricacies#1": {
  fast: "Only (E) survives parity: 3, 5 and 11 sum to the prime 19 and are all prime themselves.",
  traps: "(D) is the tempting one because \\(a + b = c\\) looks unconstrained, but it makes the sum even. (C) tempts anyone who forgets that a prime divisible by 3 must be 3 itself.",
  take: "A prime sum above 2 is odd, so start every one of these by counting odd terms."
},
"quant-intricacies#2": {
  fast: "Push one passer down to 47 and level the rest: the fifth and sixth scores both reach 92.",
  traps: "(D) is where you land by forgetting that a passer must outscore every failer, which lets the lowest passer sit at 46. Averaging the whole group instead of tracking the fifth and sixth scores gives 74 and no choice at all.",
  take: "To maximise a median, push everything below it as low as the constraints allow and level everything above it."
},
"quant-intricacies#3": {
  fast: "Small fractions give I, a value just under 1 gives II, and III needs x above 2 and below 1 at once.",
  traps: "(A) is where a single test value lands you: pick 2 or 3 and I and II die alongside III. Each ordering needs its own region of x.",
  take: "For orderings of \\(x^{2}\\), \\(2x\\) and \\(\\tfrac{1}{x}\\), split the positive line at \\(\\tfrac{1}{\\sqrt{2}}\\), 1 and 2 and test one value from each piece."
},
"di-ds-stats-class#1": {
  steps: "The balance is $600 up to the withdrawal and $300 after it, so the monthly average depends only on the withdrawal day.\n(1) Twenty end-of-day balances of 600 and ten of 300: average \\(\\tfrac{20 \\cdot 600 + 10 \\cdot 300}{30} = 500\\). Sufficient.\n(2) If \\(x\\) of the first 25 days ended at 600 and \\(25 - x\\) at 300, then \\(600x + 300(25 - x) = 25 \\cdot 540\\), so \\(x = 20\\): the withdrawal was on day 21, the same situation as (1). Sufficient.\nAnswer: D.",
  take: "A weighted-average statement about part of a period can fix the switch date just as well as the date itself."
},
"di-ds-stats-class#2": {
  steps: "Each term is the previous term plus 3, so \\(R\\) is an arithmetic progression, and in an arithmetic progression the median equals the mean.\n(1) Knowing the first term without the number of terms leaves the median open. Not sufficient.\n(2) Mean 36 means median 36. Sufficient.\nAnswer: B.",
  take: "Evenly spaced set: mean = median = average of the first and last terms; a mean statement is a median statement."
},
"di-ds-stats-class#3": {
  steps: "The mean is \\(\\tfrac{24 + x}{5}\\).\n(1) \\(x = 7\\): median 7, mean 6.2, yes. \\(x = 100\\): median 8, mean 24.8, no. Not sufficient.\n(2) \\(x\\) above the median forces \\(x \\ge 9\\) and median 8; \\(x = 9\\) gives mean 6.6 (yes), \\(x = 100\\) gives no. Not sufficient.\nTogether (2) already implies (1), so the same pair of examples survives. Not sufficient.\nAnswer: E.",
  take: "When one statement implies the other, combining them adds nothing; test the stronger one alone."
},
"di-ds-stats-class#4": {
  steps: "By symmetry the share above \\(m + d\\) equals the share below \\(m - d\\).\n(1) The two tails together hold \\(100 - 68 = 32\\) percent, so each holds 16 percent. Sufficient.\n(2) The lower tail is 16 percent, so the upper tail is 16 percent. Sufficient.\nAnswer: D.",
  take: "Symmetric distribution: one tail, the middle band, or the other tail each determine the rest."
},
"di-ds-stats-class#5": {
  steps: "(1) alone says nothing about \\(b\\); (2) alone says nothing about \\(a\\). Each is insufficient.\nTogether \\(a - b = c^{3} - (c - 2)^{3} = 6c^{2} - 12c + 8\\). Since \\(6c^{2} - 12c\\) is a multiple of 6, the remainder is the remainder of 8, namely 2, for every integer \\(c\\). Sufficient.\nAnswer: C.",
  take: "Two equations in three unknowns can still fix a combination such as a remainder; expand and look for the multiple."
},
"di-ds-stats-class#6": {
  steps: "(1) \\(z = 2 \\times\\) (even integer), so \\(z\\) is an even integer. Sufficient.\n(2) \\(3z\\) even gives \\(z = \\tfrac{\\text{even}}{3}\\): \\(z = 2\\) is even, \\(z = \\tfrac{2}{3}\\) is not even an integer. Not sufficient.\nAnswer: A.",
  take: "Even and odd rules apply to integers only; a statement about 3z does not make z an integer."
},
"di-ds-stats-class#7": {
  steps: "(1) \\(m\\) has the parity of \\(p^{2}\\), so of \\(p\\); nothing about \\(n\\). Not sufficient.\n(2) \\(n = p^{2} + \\text{even} + 1\\) has the opposite parity to \\(p\\); nothing about \\(m\\). Not sufficient.\nTogether \\(m\\) matches \\(p\\) and \\(n\\) is opposite to \\(p\\), so one of them is odd and the other even, and \\(m + n\\) is odd. Sufficient.\nAnswer: C.",
  take: "Parity questions: reduce every expression to 'same as p' or 'opposite to p' and the sum's parity follows."
},
"di-ds-stats-class#8": {
  steps: "\\(5^{x}\\) ends in 5 for every positive \\(x\\), so only the exponent \\(y + 15\\) matters, through its remainder on division by 4.\n(1) \\(x = 8\\) gives \\(y = 1\\) and \\(7^{16}\\) ends in 1; \\(x = 9\\) gives \\(y = 3\\) and \\(7^{18}\\) ends in 9. Different units digits. Not sufficient.\n(2) \\(y = 1\\) or \\(y = 5\\), exponents 16 and 20, both multiples of 4, so \\(7^{y+15}\\) ends in 1 either way and \\(n\\) ends in 6. Sufficient.\nAnswer: B.",
  take: "A statement can fail to fix a variable yet fix the units digit; test what the question actually asks."
},
"di-ds-stats-class#9": {
  steps: "\\(64 = 2^{6}\\), so the greatest common factor is 1 if \\(n\\) is odd and at least 2 if \\(n\\) is even.\n(1) If \\(n\\) were even, its factors 1 and 2 would sum to the prime 3. So \\(n\\) is odd and the answer is 1. Sufficient.\n(2) \\(2310 = 2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11\\) and the common factor \\(165 = 3 \\cdot 5 \\cdot 11\\) omits 2, so \\(n\\) is odd. Answer 1. Sufficient.\nAnswer: D.",
  take: "Rephrase first: a GCF with a prime power only asks whether that prime divides n."
},
"di-ds-stats-class#10": {
  steps: "The average of \\(n\\) consecutive integers starting at \\(f\\) is \\(f + \\tfrac{n - 1}{2}\\).\n(1) Odd \\(n\\) makes the average an integer, but 1, 2, 3 (average 2) and 2, 3, 4 (average 3) answer differently. Not sufficient.\n(2) This is exactly the statement that the average is an integer divisible by 3. Sufficient.\nAnswer: B.",
  take: "Write the average of an evenly spaced set in closed form; a statement may simply restate the question."
},
"di-ds-stats-class#11": {
  steps: "(1) \\(ab\\) contains 3, 7, 5 and 7, but \\(a = 21\\), \\(b = 35\\) gives 735, not a multiple of 30, while \\(a = 42\\), \\(b = 35\\) works. Not sufficient.\n(2) Evenness alone: \\(a = 2\\), \\(b = 1\\) fails, \\(a = 30\\), \\(b = 2\\) works. Not sufficient.\nTogether \\(ab\\) has factors 2, 3 and 5, so 30 divides \\(ab\\) and \\(x\\) is an integer. Sufficient.\nAnswer: C.",
  take: "Divisibility by a composite: collect one prime at a time from the statements."
},
"di-ds-stats-class#12": {
  steps: "(1) \\(n\\) is 2 more or 2 less than a multiple of 5, so its units digit is 2, 3, 7 or 8, and no perfect square ends that way. Definite no. Sufficient.\n(2) \\(n\\) is 2 away from a multiple of 7: \\(n = 5\\) is not a square but \\(n = 9\\) is. Not sufficient.\nAnswer: A.",
  take: "Squares leave only 0, 1 or 4 as remainders on division by 5; a remainder test can settle a yes/no question."
},
"di-ds-stats-class#13": {
  steps: "A fraction terminates when its lowest-terms denominator has only the primes 2 and 5.\n(1) \\(x = \\tfrac{1}{2}\\) terminates, \\(x = \\tfrac{1}{3}\\) does not, and both make \\(24x\\) an integer. Not sufficient.\n(2) \\(x = \\tfrac{1}{2}\\) versus \\(x = \\tfrac{1}{7}\\). Not sufficient.\nTogether \\(28x - 24x = 4x\\) is an integer, so \\(x\\) is a quarter, a half or three quarters, all terminating. Sufficient.\nAnswer: C.",
  take: "Two 'kx is an integer' facts combine by subtraction to a smaller multiplier, which pins the denominator."
},
"quant-stats-class#1": {
  fast: "Median of consecutive integers = (first + last)/2; chain the two given medians to express a in terms of c.",
  traps: "(A) is \\(a\\) itself, not the median of \\(R\\). (E) is \\(b\\) in terms of \\(c\\), the median of nothing asked. (B) would be right only if \\(a\\) were 0.",
  take: "Evenly spaced sets: median = mean = average of the extremes, which turns median questions into two-line algebra."
},
"quant-stats-class#2": {
  fast: "Uniqueness forces a ≤ 7 and b ≤ 5, so the maximum is 35 + 35 = 70; verify 74 has two pairs.",
  traps: "(E) 74 is the largest number with any solution, but it has two of them: (12, 2) and (5, 7). (C) 69 is smaller than 70 and the question asks for the largest such value.",
  take: "For ax + by = k with coprime a, b, solutions come in families spaced by (b, −a); uniqueness caps how large x and y can be."
},
"quant-stats-class#3": {
  fast: "Perfect squares have odd factor counts and all-even exponents; p itself can be a square (p = 4), killing III.",
  traps: "(E) accepts III, but p can itself be a perfect square with an odd number of factors. (A) forgets that squaring doubles exponents, which is exactly what II says.",
  take: "Odd number of factors is the fingerprint of a perfect square; a non-square always has an even count."
},
"quant-stats-class#4": {
  fast: "x = 512 (length 9) and y = 128 (length 7) satisfy 512 + 384 < 1000, total 16.",
  traps: "(C) 15 comes from maximising y first (256 and 128); the asymmetric constraint rewards putting the budget on x. (E) 18 would need 2 to the 9th and 2 to the 9th, which breaks the sum limit.",
  take: "Length questions are about small primes: 2 gives the most factors per unit of size, so build from powers of 2 and compare both allocations."
},
});
