/* GMAT Prep — explanation layer for the 700-800 level Quant second instalment
   (sets-quant-700b.js). Keys are "setId#n"; index.html merges these over the
   questions at load. Every answer was re-derived before the record was written. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {
"quant-700-stats#1": {
  fast: "Skip the division by four altogether: with the same number of quarters, the totals move by the same percent as the averages, and 60 to 72 is a 20% rise.",
  traps: "(C) 25% divides the change by the new total instead of the old. (B) 30% and (E) 28% come from adding a couple of the quarterly rises without a base. (D) 15% is the old average itself, mistaken for the percent.",
  take: "Percent change in an average over the same count is the percent change in the sum."
},
"quant-700-stats#2": {
  fast: "Target total 48 × 6,000 = 288,000; subtract the 24,000 already made in 2005 and 264,000 is left for the other three years.",
  traps: "(E) 288,000 is the four-year total, forgetting that 2005 already counts toward it. (C) 200,000 treats \"200% increase\" as doubling. (B) and (A) are that doubling error combined with subtracting 2005.",
  take: "\"Increase by 200%\" is ×3; \"increase to 200%\" is ×2. Then work with totals, not averages."
},
"quant-700-stats#3": {
  fast: "Total needed 17.5; he has 13.7; the gap of 3.8 is above every grade except A.",
  traps: "(B) A− is 3.7, just under the 3.8 needed — the question is built around that tenth of a point. (C), (D) and (E) all fall further short.",
  take: "Turn an average requirement into a total requirement, then see what is missing."
},
"quant-700-stats#4": {
  fast: "For the total to rise, the 15% riser must be more than \\(\\tfrac{7}{3}\\) of the 35% faller — only 70 and 20 qualify, so the other three stayed put.",
  traps: "Every other choice leaves a riser/faller pair where the 35% loss beats the 15% gain, so the average would fall. (D) $35, $40, $70 comes closest (20 falls, 45 rises: −0.25) but is still a drop.",
  take: "When one item rises by p% and another falls by q%, the total rises only if the riser is more than q/p times the faller."
},
"quant-700-stats#5": {
  fast: "Old average 50 (five people, total 250); new total 6 × 75 = 450; the difference, 200, is John.",
  traps: "(E) $450 is the new total. (B) $150 is 3 × 50, a guess at \"50% more\". (A) $100 subtracts the two averages and doubles.",
  take: "Average problems are total problems: convert both averages to totals and subtract."
},
"quant-700-stats#6": {
  fast: "Sum goes from 10 to 20 with the same five members, so the mean doubles: +100%.",
  traps: "(B) 50% is the new mean expressed as a share of the old one's double, a ratio slip. (E) 200% would need the mean to triple. (A) and (C) come from comparing the wrong pair of sums.",
  take: "\"Minimum increase\" with primes means 2 and 3; then compare sums, since the count is unchanged."
},
"quant-700-stats#7": {
  fast: "The mean stays 11 only if the three added numbers average 11, i.e. sum to 33; only set III does.",
  traps: "(D) accepts set I, whose numbers look symmetric around 11 but sum to 25.5. (E) None misses that III sums exactly to 33 despite its negative member.",
  take: "Numbers added to a set leave the mean alone exactly when their own mean equals it."
},
"quant-700-stats#8": {
  fast: "New total 6 × 10 = 60, so N + K = 28, and the expression is just \\((N + K)^{2} = 784\\).",
  traps: "(A) 28 is N + K, not its square. (C) 64 squares the old mean. (E) 3600 squares the new total.",
  take: "Recognise the perfect-square trinomial and stop looking for N and K separately."
},
"quant-700-stats#9": {
  fast: "Old mean 10 becomes 12 over six numbers, so the new total is 72; subtract the old total 50 to get n = 22.",
  traps: "(B) 12 is the new mean itself. (E) 24 adds 20% to 20 rather than to the mean. (C) 16 is 72 − 56, a miscounted sum.",
  take: "A new member that shifts the mean equals new total minus old total."
},
"quant-700-stats#10": {
  fast: "Now 36 forties and 12 twenties. For an average of 25 the forties must be a quarter of the stock: 4 of them, so 32 go.",
  traps: "(E) 34 leaves 2 forties, average 22.9. (C) 30 leaves 6, average 26.7. (B) 20 and (A) 10 barely move the average.",
  take: "Use the number line: an average of 25 between 20 and 40 means the 40s are outnumbered 3 to 1."
},
"quant-700-stats#11": {
  fast: "Test with small numbers: mean of \\(2^{2}\\) and \\(4^{2}\\) is \\(10 = 3^{2} + 1\\), so the pattern is \\((\\text{middle})^{2} + 1\\).",
  traps: "(A) is the square of the mean, which is smaller than the mean of the squares. (E) has the sign wrong. (B) and (C) put the midpoint in the wrong place.",
  take: "The mean of two squares exceeds the square of their mean by the square of half their gap."
},
"quant-700-stats#12": {
  fast: "Consecutive integers are evenly spaced, so the mean is the middle term of −5 … −1, which is −3.",
  traps: "(D) 3 drops the sign. (C) 0 assumes symmetry about zero. (A) and (E) are the endpoints.",
  take: "Evenly spaced sets: mean = median = average of the endpoints."
},
"quant-700-stats#13": {
  fast: "y = 31 − 2x is always odd; x and z share parity and can be either.",
  traps: "(D) and (E) add a parity claim about x or z that the example x = 4, y = 23, z = 6 kills. (A) and (C) miss that y is forced.",
  take: "For must-be-true parity questions, solve for one variable and test one odd and one even case for the rest."
},
"quant-700-stats#14": {
  fast: "Equal counts below and above 75 make the set symmetric about 75, so x + y = 150 and 3x + 3y = 450.",
  traps: "(A) 225 is 3 × 75, forgetting there are two endpoints. (B) 300 is 4 × 75. (C) and (E) are noise around the answer.",
  take: "For consecutive integers, the endpoints average to the centre: x + y = 2 × middle."
},
"quant-700-stats#15": {
  fast: "Factor 37,128 = 8 · 3 · 7 · 13 · 17; the only choice built from a missing prime is 11.",
  traps: "(E) $51 looks unlikely but is 3 × 17, both factors present. (A), (B), (C) all divide 37,128 outright.",
  take: "\"Cannot be\" with an integer unit count is a divisibility question: factor the total."
},
"quant-700-stats#16": {
  fast: "Ignore the wild outliers; the medians are 9 and the average of 10 and 16, so the gap is 4.",
  traps: "(C) 9 is the median of A itself. (A) 2 takes 10 and 16 as separate medians and subtracts wrongly. (D) 2.5 and (E) 3 come from mis-sorting the decimals.",
  take: "Outliers move the mean but not the median — sort and count to the middle."
},
"quant-700-stats#17": {
  fast: "An odd-sum pair of primes must include 2, which cannot be the third smallest; so the .5 options die and 39 = (37 + 41)/2 survives.",
  traps: "(C) 9.5 and (D) 12.5 look like typical medians of an even-sized set, but each forces the prime 2 into the middle of the list. (A) 2 and (B) 3 are too small to be a median of six primes.",
  take: "For medians of primes, parity is the whole game: an odd average of two primes needs the prime 2."
},
"quant-700-stats#18": {
  fast: "Mean up 21% tells you about the total, not the 11th household — undetermined.",
  traps: "(C) $60,500 applies the 10% twice to the median as if it were the mean. (B) and (D) apply the growth once or add the two years. (A) assumes the median cannot move at all, which is also unwarranted.",
  take: "Mean and median can move independently; a change in one never fixes the other."
},
"quant-700-stats#19": {
  fast: "Subtract 10,000 and test divisibility by 9 with the digit sum; only 18,423 passes, and \\(18{,}423/9 = 2047\\) is odd.",
  traps: "(A) 22,474 leads to 12,474 = 9 × 1386, but 1386 is even — the odd-question condition rules it out. (B), (C), (E) are not multiples of 9 after subtracting the salary.",
  take: "The median of an odd-sized list is a member of the list, so it must satisfy every constraint the members do."
},
"quant-700-stats#20": {
  fast: "Two low values pull the mean below y, while the median sits exactly at y.",
  traps: "(C) forgets that \"ascending\" means x is strictly less than y. (A) has the direction of the pull reversed.",
  take: "Values below the median drag the mean down; with the median pinned at y, the mean must be smaller."
},
"quant-700-stats#21": {
  fast: "The fifth of nine ordered terms is y, so y = 7; the total 6y + 3x = 9 × 9 = 81 then gives x = 13.",
  traps: "(D) 7 is y, not x. (B) 14 and (C) 16 come from miscounting the x's in the sum. (E) 4 solves 6y + 3x = 54, using the mean instead of the total.",
  take: "Count how many copies of each variable appear before summing — the −x and +x cancel, leaving 3x."
},
"quant-700-stats#22": {
  fast: "Every lucky number is odd; the average of two odds is an integer; probability 0.",
  traps: "(B)–(E) treat the median of an even-sized list as randomly integer or not. It is fixed by parity here.",
  take: "The median of an even-sized list is a half-integer only when the two middle values differ in parity."
},
"quant-700-stats#23": {
  fast: "The mean condition forces x = 6; order the six terms using y > 6 and average the middle two: y + 3.",
  traps: "(C) y takes the third term alone. (D) 3y/2 averages y and 2y, mis-ordering 6 + y and 2y. (A) and (E) keep x as a variable although the mean fixes it.",
  take: "When a condition pins a variable down, substitute it before ordering the terms."
},
"quant-700-stats#24": {
  fast: "Each median is the average of the middle two, so x + 8 = y + 9 and y − x = −1.",
  traps: "(D) 1 has the sign backwards. (C) 0 assumes the unknowns are equal. (A) and (E) double the difference.",
  take: "Equal medians of ordered four-element sets equate the sums of the middle pairs."
},
"quant-700-stats#25": {
  fast: "Middle pair must be 3 and 8, so x cannot exceed 3; x = 3, y = 15 checks out.",
  traps: "(E) 4 pushes the median to 6. (A)–(C) are possible values but not the maximum.",
  take: "Fix the median first — it decides which side of the middle each unknown must land on."
},
"quant-700-stats#26": {
  fast: "Six values: average the 3rd and 4th after sorting, (−1 + 5)/2 = 2.",
  traps: "(B) −1 and (E) 5 are the two middle values themselves. (D) 3 averages 1 and 5 after dropping a sign.",
  take: "Even count: the median is the mean of the two middle values, sign and all."
},
"quant-700-stats#27": {
  fast: "Running total 2, 12, 28 — the 37th score is in the 80–89 band.",
  traps: "(B) stops at the 28th score. (D) counts from the top and overshoots. (E) forgets that an interval, not an exact value, is asked for.",
  take: "For grouped data, the median lies in the interval where the cumulative count first reaches (n + 1)/2."
},
"quant-700-stats#28": {
  fast: "The new median 330 has to be Ann's corrected figure: 450 − 120 = 330.",
  traps: "(E) 140 makes Cal's total 330 but leaves Ann at 310, below Cal, contradicting the stem. (C) 90 gives Ann 360 and a median of 360. (A) and (B) barely move the totals.",
  take: "The median of an odd list is a member; find which member can become the stated median and check the other conditions."
},
"quant-700-stats#29": {
  fast: "Mode of A is 4, B is bimodal with −7 and −5, C has no mode; the sum is 4 − 7 − 5 = −8.",
  traps: "(A) −2 picks only −7 from set B plus something wrong; (B) −1 uses 4 and −5 only. (D) 3 and (E) 5 forget the negatives.",
  take: "Count frequencies honestly: a tie for most frequent gives two modes, all-distinct gives none."
},
"quant-700-stats#30": {
  fast: "Both sets share the minimum −21 and the maximum 1000, so their ranges are equal and the difference is 0.",
  traps: "(D) 3 and (E) 5 count how many more elements Y has; (A) −2 subtracts the counts the other way. The clustered values near 1000 in Y are a distraction: the range ignores everything between the extremes.",
  take: "Range = max − min; the interior values are irrelevant."
},
"quant-700-stats#31": {
  fast: "An even product of primes needs the prime 2, so K = 2 and the range is 19 − 2 = 17.",
  traps: "(B) 16 uses 19 − 3, ignoring K. (A) 14 and (E) 26 guess at K = 5 or a prime beyond 19.",
  take: "The only even prime is 2; \"even product\" is a coded way of placing it in the set."
},
"quant-700-stats#32": {
  fast: "Range must be a multiple of 14; only 70 qualifies (e.g. 7 to 77).",
  traps: "(A) 21 and (C) 35 are odd multiples of 7 — the members, not a possible gap between members. (B) 24 and (D) 62 are not multiples of 7 at all.",
  take: "Range of a set of numbers of the form a·odd is a·even."
},
"quant-700-stats#33": {
  fast: "The range counts gaps, not terms: 100 multiples spaced 7 apart span 99 × 7 = 693.",
  traps: "(B) 700 counts 100 gaps. (C) 707 and (D) 777 are the last term minus something wrong. (E) 847 starts from 0.",
  take: "The range of n evenly spaced terms is (n − 1) times the spacing, whatever the starting point."
},
"quant-700-stats#34": {
  fast: "The combined minimum is 5 (from Y) and the maximum is 97 (from X), so the range is 92.",
  traps: "(C) 90 uses 95 − 5, forgetting 97. (E) 95 is the largest member of Y. (A) 84 is 95 − 11, mixing the wrong extremes.",
  take: "Range of a union: take the global minimum and maximum across both sets."
},
"quant-700-stats#35": {
  fast: "Range 80 among negatives means −81 to −1 (81 numbers); with 0 that is 82, leaving 1 to 18 with mean 9.5.",
  traps: "(E) 10 forgets zero and takes 1…19. (C) 9 takes 1…17, miscounting the negatives as 80. (A) and (B) drop more.",
  take: "Range r among consecutive integers means r + 1 members; and zero is neither positive nor negative."
},
"quant-700-stats#36": {
  fast: "Only 6, 7, 8 keep the range and lift the median: 3 of the 10 digits.",
  traps: "(C) 40% counts 5 as an increase. (A) 20% drops 8, thinking it changes the range (it does not — 8 is already there). (D) and (E) ignore the range condition.",
  take: "List the outcomes: single-digit non-negative integers are 0–9, ten of them."
},
"quant-700-stats#37": {
  fast: "Minimum at most 18 (seven distinct values under 25), so the maximum is 18 + 25 = 43.",
  traps: "(E) 50 adds the range to the median. (C) 40 uses a minimum of 15. (A) and (B) underuse the range.",
  take: "To maximise the top of a set with fixed range, maximise the bottom under the median constraint."
},
"quant-700-stats#38": {
  fast: "Deviations from 8.5 are ±1.5 and ±0.5; the mean squared deviation is 1.25, whose root is about 1.12.",
  traps: "(A) and (B) are negative — a standard deviation never is. (D) and (E) misplace the decimal point.",
  take: "SD is a root-mean-square of deviations: always non-negative, and small for tightly packed data."
},
"quant-700-stats#39": {
  fast: "Compare the spacing between terms: B is 2 apart, A alternates 2 and 4, C is 7 apart, so B < A < C in spread.",
  traps: "(B) ranks by the size of the numbers rather than their spread. (A) and (C) put C, the widest, first.",
  take: "For equal-sized sets, standard deviation tracks the spacing between terms, not their magnitude."
},
"quant-700-stats#40": {
  fast: "B is tight and 100 is far from it; C is tighter but 100 is nearer; A is wide and 100 is close: B, C, A.",
  traps: "(B) orders by the sets' original spread. (D) swaps A and C, underrating how much a far outlier shocks a tight set.",
  take: "An added point raises SD by an amount that grows with its distance from the mean and shrinks with the set's existing spread."
},
"quant-700-stats#41": {
  fast: "One counter-example set kills all three: A = {1, 10, 10}, B = {100, 100}.",
  traps: "(C) assumes A's skew survives combination; a heavy B above it flips the mean past the median. (A) and (D) assume a skewed set has a larger spread than a symmetric one, which nothing guarantees.",
  take: "\"Must be true\" about combined statistics: build small extreme examples before trusting an intuition."
},
"quant-700-stats#42": {
  fast: "One standard deviation either side of the mean: 75 − 10 = 65 up to 75 + 10 = 85.",
  traps: "(C) 60 to 70 is a band of width 10 below the mean. (B) and (E) add the SD to the wrong base.",
  take: "\"Within k standard deviations\" is the interval mean − k·SD to mean + k·SD."
},
"quant-700-stats#43": {
  fast: "Two standard deviations below the mean: 60 − 2 × 15 = 30 is the lowest possible score.",
  traps: "(A) 25 and (C) 20 subtract too much; (E) 50 subtracts only 10.",
  take: "The lower end of a k-SD band is mean − k·SD."
},
"quant-700-stats#44": {
  fast: "y = −(a/b)x − c/b: the shift does nothing and the scale factor multiplies the SD by |a/b|.",
  traps: "(B), (C), (E) divide by S, which has the units backwards. (D) adds a constant to the SD, which shifts never do.",
  take: "SD(kx + m) = |k|·SD(x): shifts do nothing, scalings scale."
},
"quant-700-stats#45": {
  fast: "58 to 98 spans 5 standard deviations and 40 points, so one SD is 8; the mean is 58 + 2 × 8 = 74.",
  traps: "(C) 78 is the midpoint of 58 and 98, which would need equal numbers of SDs on each side. (D) 80 and (E) 82 subtract too few SDs from 98.",
  take: "Two points with known SD-distances from the mean fix the SD by their gap."
},
"quant-700-stats#46": {
  fast: "Set II is s minus each term of the original — a mirror image, so same spread; III can shrink the spread.",
  traps: "(A) misses that II is just the original set reflected and shifted. (E) trusts absolute values, which change spread whenever signs differ.",
  take: "SD survives shifts and sign flips; it does not survive absolute values."
},
"quant-700-stats#47": {
  fast: "Within one SD means 9.7 to 10.3; only 9.4 and 10.5 fall outside, so 6 of 8 = 75%.",
  traps: "(B) 85% and (A) 90% keep one of the outliers. (E) 70% drops a value inside the band.",
  take: "Write the band down first, then count — the endpoints are what people misjudge."
},
"quant-700-stats#48": {
  fast: "The times total 1,000 so the mean is 100; one SD below is 77.6, and only 70 and 75 fall under it.",
  traps: "(C) three counts 80, which is above 77.6. (A) one misreads 75 as above the cutoff.",
  take: "\"More than one SD below\" is strictly less than mean − SD; compute the cutoff exactly."
},
"quant-700-stats#49": {
  fast: "Between one and two SDs below 21 is the band from 9 to 15, and 12 is the only choice inside it.",
  traps: "(C) 18 is only half an SD below. (E) 6 is more than two SDs below. (A) and (B) are above or at the mean.",
  take: "Translate \"between 1 and 2 SDs below\" into a numeric interval before looking at the choices."
},
"quant-700-stats#50": {
  fast: "1.5 SD = 0.45, so the band is 7.65 to 8.55; only 7.51 falls outside and the other eleven are inside.",
  traps: "(D) ten also excludes 8.53, which is inside the band (below 8.55). (C) nine drops 7.73 as well.",
  take: "Compute the band edges to two decimals; the near-misses (8.53 vs 8.55) are deliberate."
},
"quant-700-ineq#1": {
  fast: "Odd powers of a negative are negative, even powers are positive fractions that shrink when raised further; all three hold.",
  traps: "(D) drops II, forgetting that 1 − x exceeds 1 for negative x. (B) drops III, the shrinking of a fraction under squaring.",
  take: "For −1 < x < 0: odd powers negative, even powers positive and decreasing in size."
},
"quant-700-ineq#2": {
  fast: "\\(x = 3 \\pm \\tfrac{7}{3}\\), i.e. \\(\\tfrac{16}{3}\\) and \\(\\tfrac{2}{3}\\); product \\(\\tfrac{32}{9}\\). Or use \\((3)^{2} - (\\tfrac{7}{3})^{2} = 9 - \\tfrac{49}{9} = \\tfrac{32}{9}\\) directly.",
  traps: "(D) \\(\\tfrac{16}{9}\\) squares one root. (C) \\(\\tfrac{2}{3}\\) is one of the roots. (A) and (B) come from dividing 7 by 3 twice.",
  take: "|a − x| = k has roots a ± k whose product is \\(a^{2} - k^{2}\\)."
},
"quant-700-ineq#3": {
  fast: "Subtract a from both sides: −b > b means b is negative, and nothing at all is forced on a.",
  traps: "(C) and (D) invent a sign for a; (E) assumes a is positive so that ab is negative.",
  take: "Simplify an inequality before reading anything into its variables."
},
"quant-700-ineq#4": {
  fast: "a is \\(\\pm \\tfrac{1}{3}\\) and b is \\(\\pm \\tfrac{2}{3}\\), so the four possible sums are ±1 and \\(\\pm \\tfrac{1}{3}\\); \\(\\tfrac{2}{3}\\) is not on the list.",
  traps: "(B) and (C) are the mixed-sign sums, (A) and (E) the same-sign sums — all reachable.",
  take: "With absolute values given, enumerate the sign cases; there are few."
},
"quant-700-ineq#5": {
  fast: "Two counter-examples, one with opposite signs and one with the same sign, dispose of all three.",
  traps: "(C) forgets that equal absolute values allow opposite signs. (E) forgets they also allow equal signs.",
  take: "|a| = |b| means a = b or a = −b; a statement true in only one of those cases is not a must."
},
"quant-700-ineq#6": {
  fast: "\\(\\sqrt{u^{2}} = |u|\\), so |x + 4| = 3 gives x = −1 or −7; subtracting 4 makes x − 4 equal to −5 or −11.",
  traps: "(B) −7 is a value of x, not of x − 4. (D) −3 and (E) 5 forget the two-case nature of the absolute value.",
  take: "\\(\\sqrt{(\\text{expression})^{2}} = |\\text{expression}|\\); always solve both cases before applying the final operation."
},
"quant-700-ineq#7": {
  fast: "The equation forces x and y both negative; only the sum's sign is fixed.",
  traps: "(C)/(D) and (E) depend on which negative number is larger in size, which is not given.",
  take: "|t| = −t is the definition of t ≤ 0; read absolute-value equations as sign statements."
},
"quant-700-ineq#8": {
  fast: "Strip the even powers: a and c share a sign; only III uses just a and c (and an even power of d).",
  traps: "(D) and (E) assume d or b is positive; the stem only guarantees they are non-zero.",
  take: "In sign problems, cross out every even-power factor first; what remains is the real condition."
},
"quant-700-ineq#9": {
  fast: "\\(x^{2} - 2xy + y^{2} = (x - y)^{2} = 9\\) with x > y gives x − y = 3; with x + y = 15 that makes x = 9.",
  traps: "(B) 6 is y. (C) 12 uses x − y = −3 with the roles swapped. (A) 3 is the difference itself.",
  take: "Recognise \\((x - y)^{2}\\) and use the ordering to pick the sign of the root."
},
"quant-700-ineq#10": {
  fast: "x = 1 gives 2; anything else gives more (2 and \\(\\tfrac{1}{2}\\) both give 2.5).",
  traps: "(B) 1 and (A) 0.5 are values of x or 1/x alone. (E) 2.5 is what x = 2 gives, not the least.",
  take: "For positive x, x + 1/x ≥ 2 (AM–GM); equality only at x = 1."
},
"quant-700-ineq#11": {
  fast: "\\(y^{4}\\) is at least 0, so \\(x^{4} \\le 100\\) and \\(x \\le ^{4}\\sqrt{100} = \\sqrt{10} \\approx 3.16\\), which falls between 3 and 6.",
  traps: "(A) misjudges 3.16 as below 3. (D) takes the square root once instead of twice.",
  take: "A sum of non-negative terms bounds each term; the fourth root of 100 is \\(\\sqrt{10}\\)."
},
"quant-700-ineq#12": {
  fast: "cd is bigger than c, and c is bigger than b, so b − cd can never be positive.",
  traps: "(A) is possible with all three positive. (B), (D), (E) are possible with a negative b.",
  take: "\"Cannot be true\" with integers: chain the inequalities to find a quantity whose sign is forced."
},
"quant-700-numbers#1": {
  fast: "Test the smallest case 1 + 2 + … + 6 = 21: divisible by 3 but not by 4 or 6, and the sum 6a + 15 is always odd.",
  traps: "(D) assumes six terms make the sum a multiple of 6; the sum of an even number of consecutive integers is never a multiple of that count.",
  take: "Sum of n consecutive integers is divisible by n only when n is odd."
},
"quant-700-numbers#2": {
  fast: "4·5 = 20 is the first product past 15; 13·14 = 182 is the last under 200.",
  traps: "(D) allows 14, whose product 210 breaks the limit. (A) and (B) allow 3, whose product 12 is too small.",
  take: "Check the boundary values on both ends by computing n(n + 1) directly."
},
"quant-700-numbers#3": {
  fast: "You do not know which prime is 5, so take the expression that squares both.",
  traps: "(A) fails when q = 5 (e.g. n = 4 · 5). (B) fails when p = 5 (n = 25 · 2). (C) has only one 5. (E) fails when q = 5.",
  take: "\"Must be\" with an unknown prime placement: cover every case at once."
},
"quant-700-numbers#4": {
  fast: "Test a = b = 1: only f(x) = −3x satisfies f(2) = 2f(1); squares, roots, reciprocals and x + 1 all fail.",
  traps: "(B) looks linear but f(a + b) = a + b + 1 while f(a) + f(b) = a + b + 2.",
  take: "Additivity f(a + b) = f(a) + f(b) is the signature of f(x) = kx."
},
"quant-700-numbers#5": {
  fast: "Write the signs in order, + − + + − −, and count the changes between neighbours: three sign flips.",
  traps: "(D) counts the pair (−4, −6), whose product is positive. (B) misses one of the flips around −3.",
  take: "A variation in sign is a change of sign between neighbours; same-sign neighbours do not count."
},
"quant-700-numbers#6": {
  fast: "Expand and cancel xy from both sides: z = xz, i.e. z(1 − x) = 0, so either z is 0 or x is 1.",
  traps: "(A)–(C) demand two things at once where only one is needed. (D) names y, which cancels out entirely.",
  take: "A product equal to zero means at least one factor is zero — an \"or\", not an \"and\"."
},
"quant-700-numbers#7": {
  fast: "p + q + p = 2p + q, and 2p is always even, so the oddness sits entirely in q: q must be odd.",
  traps: "(C) and (E) depend on p's parity, which is free.",
  take: "Combine like terms first; 2p contributes nothing to parity."
},
"quant-700-numbers#8": {
  fast: "One example with negative b and odd c leaves only statement I standing.",
  traps: "(C) forgets that \\(b^{2}\\) hides the sign of b. (D) assumes the evenness must come from c.",
  take: "\\(b^{2}\\) is positive and even/odd exactly like b; the sign and the parity of the whole fraction say nothing about c."
},
"quant-700-numbers#9": {
  fast: "10k is even for every integer k, so 10k + y is odd exactly when y is odd; k is irrelevant.",
  traps: "(A), (B), (E) attach a condition to k, which any multiple of 10 erases.",
  take: "A term with an even coefficient never affects parity."
},
"quant-700-numbers#10": {
  fast: "2x is even, so 2x + y even needs y even — the larger prime cannot be 2.",
  traps: "(D) looks impossible but y(1 + x) is even whenever x is odd. (A)–(C) all hold for x = 2.",
  take: "The only even prime is 2, and 2 is the smallest prime — so the larger of two primes is odd."
},
"quant-700-numbers#11": {
  fast: "Units digits of powers of 7 cycle 7, 9, 3, 1; 27 = 4 × 6 + 3 picks the third entry, so the answer is 3.",
  traps: "(D) 7 uses remainder 1. (A) 1 treats 27 as a multiple of 4.",
  take: "Units digits of powers repeat with period at most 4; reduce the exponent mod 4 (remainder 0 means the fourth entry)."
},
"quant-700-numbers#12": {
  fast: "Add the ten units digits (47); a number ending in 7 leaves remainder 2 mod 5.",
  traps: "(D) 3 miscomputes \\(7^{7}\\) or \\(9^{9}\\). (A) assumes the sum ends in 0 or 5.",
  take: "Remainder mod 5 depends only on the units digit: \\(\\tfrac{0}{5} \\rightarrow 0\\), \\(\\tfrac{1}{6} \\rightarrow 1\\), \\(\\tfrac{2}{7} \\rightarrow 2\\), \\(\\tfrac{3}{8} \\rightarrow 3\\), \\(\\tfrac{4}{9} \\rightarrow 4\\)."
},
"quant-700-numbers#13": {
  fast: "Only a number ending in 6 keeps its units digit under powering (among even digits): 6 + 3 = 9.",
  traps: "(B) 6 is the units digit of p, not of p + 3. (E) gives up although the even digits can be tested in seconds.",
  take: "Digits 0, 1, 5, 6 reproduce themselves under any positive power."
},
"quant-700-numbers#14": {
  fast: "Units digits: an odd power of 4 gives 4, an even power of 9 gives 1, \\(3^{x+1} \\cdot 7^{x+1} = 21^{x+1}\\) gives 1, and one spare 7 remains: 4 · 1 · 7 = 28, so 8.",
  traps: "(A) 4 forgets the leftover 7. (E) 9 mishandles \\(9^{2x}\\), which always ends in 1.",
  take: "Group bases whose product ends in 1 (3 and 7, 9 and 9, 4 and 4… with matching exponents) to kill the dependence on x."
},
"quant-700-numbers#15": {
  fast: "\\(4^{a}\\) is even, so xy is even and the only even choice is 4; checking 4 × 1 = 4 confirms it can occur.",
  traps: "(E) 9 and (A) 1 are units digits of y alone. (C) 5 and (D) 7 are odd, impossible for a multiple of 4.",
  take: "A power of 4 is even, so the product's units digit must be even — that alone picks the answer."
},
"quant-700-numbers#16": {
  fast: "\\(3^{21}\\) ends in 3 (cycle 3, 9, 7, 1) and any power of 6 ends in 6; 3 × 6 = 18, so the remainder mod 10 is 8.",
  traps: "(B) 3 stops at x. (D) 6 stops at y. (A) 2 takes \\(3^{21}\\) to end in 7.",
  take: "\"Remainder mod 10\" is code for units digit; handle each factor's cycle separately."
},
"quant-700-numbers#17": {
  fast: "\\(7^{12x+3}\\) ends in 3 because 12x + 3 is 3 mod 4; adding 3 gives a number ending in 6, and 6 mod 5 = 1.",
  traps: "(D) 3 stops at the units digit of the power. (A) 0 forgets to add 3 before dividing.",
  take: "12x is a multiple of 4, so the exponent's remainder mod 4 is just 3 regardless of x."
},
"quant-700-numbers#18": {
  fast: "Units digits only: 1 × 6 × 1 = 6 for the first product and 7 × 2 = 14 for the second; 6 + 4 = 10 ends in 0.",
  traps: "(D) 6 and (C) 4 are the two partial results, not their sum.",
  take: "Units digits add just like numbers — reduce each term first, then reduce the sum."
},
"quant-700-numbers#19": {
  fast: "Substituting \\(t = (13!)^{4}\\) turns the monster into t(t − 1); divide by t and you have t − 1, which ends in 9.",
  traps: "(A) 0 is the units digit of a itself, or of t. (B) 1 forgets the subtraction.",
  take: "Substitute one symbol for the repeated block; factorials from 5! up end in 0."
},
"quant-700-numbers#20": {
  fast: "\\(17^{728}\\) ends in 1 (exponent divisible by 4) and \\(13^{323}\\) ends in 7; a borrow makes the units digit 11 − 7 = 4.",
  traps: "(D) 6 subtracts the other way (7 − 1). (E) 9 and (A) 1 misplace the cycles.",
  take: "When the first units digit is smaller, borrow ten before subtracting."
},
"quant-700-numbers#21": {
  fast: "Count factors of 5 in 50!: \\(\\tfrac{50}{5} = 10\\) plus \\(\\tfrac{50}{25} = 2\\) gives 12; twos are plentiful, so m = 12.",
  traps: "(C) 10 forgets that 25 and 50 each carry two 5s. (D) 11 counts only one of them.",
  take: "Trailing zeros of n! = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …"
},
"quant-700-numbers#22": {
  fast: "Count the fives in 200!: \\(\\tfrac{200}{5} = 40\\), \\(\\tfrac{200}{25} = 8\\), \\(\\tfrac{200}{125} = 1\\), total 49 trailing zeroes.",
  traps: "(A) 40 stops at the first term. (B) 48 forgets 125. (D) and (E) overcount.",
  take: "Keep dividing by 5 and adding the quotients until they hit zero."
},
"quant-700-numbers#23": {
  fast: "\\(x = 2^{2} = 4\\) and y is a multiple of 4, so y is even; 4 to an even power always ends in 6.",
  traps: "(B) 4 is for odd exponents. (A), (D), (E) are not units digits of any power of 4.",
  take: "\"Even prime\" always means 2; decode it before anything else."
},
"quant-700-numbers#24": {
  fast: "Each of the three roundings goes up (by .05, .02, .04), so y overshoots x by one tenth.",
  traps: "(A) has the sign backwards. (B) assumes the two procedures agree. (C) 0.05 is a single rounding step.",
  take: "Rounding is not additive: sum of rounded values ≠ rounded sum in general."
},
"quant-700-numbers#25": {
  fast: "\\(S_{n} = 6n\\), so the sum is 6 × (13 + 14 + … + 28) = 6 × 328 = 1,968 (16 terms averaging 20.5).",
  traps: "(A) 1,800 uses 15 terms. (E) 2,016 uses 17. (C) 1,890 miscounts the average.",
  take: "Arithmetic sequence sum = (number of terms) × (first + last)/2; count the terms carefully (28 − 13 + 1 = 16)."
},
"quant-700-numbers#26": {
  fast: "The multiples run 84, 91, …, 140: nine terms whose average is (84 + 140)/2 = 112, so the sum is 9 × 112 = 1,008.",
  traps: "(D) and (E) double or over-count the terms. (B) 896 uses 8 terms.",
  take: "Evenly spaced sum = count × average, with count = (last − first)/step + 1."
},
"quant-700-numbers#27": {
  fast: "Column 11 collects 20 twos (40) plus a carry of 4 from column 10: 44, digit 4.",
  traps: "(B) 2 ignores the carries. (A) and (E) mis-track the carry chain, which shrinks from 6 to 4.",
  take: "Add column by column from the right, tracking the carry — it is the only reliable way with repeated-digit sums."
},
"quant-700-numbers#28": {
  fast: "Each term is about 1 more than the last, so the terms run 201, 202, …, 250 and the sum is about 11,275, safely between 11,000 and 12,000.",
  traps: "(D) forgets the +n growth. (B) and (A) overestimate the 1/X contributions, which total less than a unit.",
  take: "When a recursion adds a large constant and a tiny fraction, estimate with the constant and bound the crumbs."
},
"quant-700-numbers#29": {
  fast: "Write each term as \\((k + 15)^{2}\\): 1,240 + 30·(1 + … + 15) + 15·225 = 1,240 + 3,600 + 3,375 = 8,215.",
  traps: "(A) 2,480 doubles the given sum, ignoring that later squares are far larger. (C) and (E) drop one of the three pieces.",
  take: "Shift identity: \\(\\sum (k + c)^{2} = \\sum k^{2} + 2c\\sum k + nc^{2}\\)."
},
"quant-700-numbers#30": {
  fast: "Nine copies of 1,600 plus twice (1 + 4 + 9 + 16) = 14,400 + 60.",
  traps: "(A) 14,400 ignores the spread around 40. (E) 14,520 doubles the correction.",
  take: "Symmetric sums of squares: \\(n \\cdot (\\text{centre})^{2} + 2 \\cdot (\\text{sum of squared offsets})\\)."
},
"quant-700-numbers#31": {
  fast: "Exponents of 2: 12 + t/5 versus 2 + 3t/10; they meet at t = 100.",
  traps: "(C) 50 halves the answer by using per-5-month growth for both. (B) 40 equates the exponents' growth rates instead of the totals.",
  take: "Rewrite \"increase by 700%\" as \\(\\times 8 = 2^{3}\\) and compare exponents of a common base."
},
"quant-700-numbers#32": {
  fast: "Both are the same 5-term block times a power of x: \\(\\tfrac{x^{n-1}}{x} = x^{5} \\rightarrow n = 7\\).",
  traps: "(C) 6 forgets the leading x in the denominator. (A) 8 divides by \\(x^{2}\\) instead of x.",
  take: "Factor out the lowest power in each sum; matching blocks cancel and only exponents remain."
},
"quant-700-numbers#33": {
  fast: "Even integers from 200 to 400: (400 − 200)/2 + 1 = 101 terms with average 300, so the sum is 30,300.",
  traps: "(B) 30,000 uses 100 terms, dropping an endpoint. (D) and (E) count all integers, not just the even ones.",
  take: "Inclusive counts add 1: (last − first)/step + 1."
},
"quant-700-numbers#34": {
  fast: "(2n)!/n! carries exactly n more factors of 2 than n! removes, so the product has \\(2^{1 + 2 + \\dots + 10} = 2^{55}\\).",
  traps: "(C) \\(2^{45}\\) sums 1 to 9. (D) \\(2^{52}\\) miscounts a term. (A), (B) underestimate badly.",
  take: "The 2-adic content of (2n)!/n! is n — a neat fact worth checking on n = 2: 4!/2! = \\(12 = 2^{2}\\cdot 3\\)."
},
"quant-700-numbers#35": {
  fast: "Tripling x triples the remainder: 3 × 5 = 15, and 15 reduced mod 9 leaves 6.",
  traps: "(C) 3 halves instead of tripling. (A) 0 assumes a multiple of 9 stays one after tripling, which only 27k does.",
  take: "Multiplying a number multiplies its remainder; then reduce the new remainder by the divisor."
},
"quant-700-numbers#36": {
  fast: "A remainder of 1 means y divides 16 − 1 = 15 and y > 1, so y is 3, 5 or 15; the sum is 23.",
  traps: "(D) 24 includes y = 1, which gives remainder 0. (B) 18 forgets 5.",
  take: "\"Remainder r when divided by y\" means y divides (number − r), with y > r."
},
"quant-700-numbers#37": {
  fast: "The decimal part is 60/y: 60 ÷ 0.15 = 400 and 60 ÷ 0.16 = 375 are whole, but 60 ÷ 0.17 is not.",
  traps: "(E) accepts III without checking that \\(\\tfrac{60}{0.17}\\) is not an integer. (A) forgets that \\(\\tfrac{60}{0.16} = 375\\) works.",
  take: "The fractional part of a quotient is remainder ÷ divisor; test whether the divisor comes out whole."
},
"quant-700-numbers#38": {
  fast: "11y is a multiple of 19 and 11 is coprime to 19, so y is a multiple of 19.",
  traps: "(C) 3 carries the shared remainder over to y. (E) 11 confuses divisor and quotient.",
  take: "If a prime divides a product and not one factor, it divides the other."
},
"quant-700-numbers#39": {
  fast: "Numbers ending in 3 or 8 that leave remainder 1 mod 4: 13 works, and the next is 13 + 20 = 33; the sum is 46.",
  traps: "(E) 66 adds 13 and 53, skipping 33. (A) 36 uses 13 and 23, but 23 leaves remainder 3 on division by 4.",
  take: "Solutions to two remainder conditions repeat with period lcm of the divisors — here 20."
},
"quant-700-numbers#40": {
  fast: "Both descriptions give x: 4y + 1 = 7z + 6, so 4y = 7z + 5 and y = (7z + 5)/4.",
  traps: "(E) solves for z instead of y. (B) and (C) mix up the divisors and remainders.",
  take: "Two division statements about the same number give one equation; solve for the asked quotient."
},
"quant-700-numbers#41": {
  fast: "n must be a multiple of 4, so its remainder mod 32 is a multiple of 4.",
  traps: "(A) 2 gives \\(n^{4} = 16k^{4}\\) — only four 2s. (E) 10 is even but not a multiple of 4.",
  take: "\\(p^{k}\\) divides \\(n^{m}\\) exactly when n carries at least ⌈k/m⌉ factors of p."
},
"quant-700-numbers#42": {
  fast: "2x₁ is even and 12k + 4 is even, so y is even; mod 3 the remainders 1 and 1 give 2 + 1 = 3 → divisible by 3.",
  traps: "(C) misses that both pieces of y are even. (E) claims y odd, impossible.",
  take: "Check parity and divisibility separately; an expression 2·(anything) + even is even."
},
"quant-700-numbers#43": {
  fast: "Digit sum 9n − 12 must end in 13 and be a multiple of 9 after adding 12: 225 → n = 25.",
  traps: "(A) 24 gives digit sum 204. (C) 26 gives 222. Only 25 lands on a number of the form x13.",
  take: "\\(10^{n} - k\\) for small k is a string of nines with a short tail; digit sums become linear in n."
},
"quant-700-numbers#44": {
  fast: "3,176,793 is odd, so no positive power of 12 divides it: n = 0 and \\(n^{12} - 12^{n} = 0 - 1 = -1\\).",
  traps: "(D) 0 forgets that \\(12^{0} = 1\\). (B) −11 treats n as 1.",
  take: "\\(12^{n}\\) divides a number only if it is a multiple of 4; parity kills it instantly."
},
"quant-700-numbers#45": {
  fast: "\\(36^{2} = 2^{4} \\cdot 3^{4}\\), so the factor count is (4 + 1)(4 + 1) = 25 by the exponent-plus-one rule.",
  traps: "(A) 9 counts the factors of 36 itself. (B) 16 multiplies the exponents instead of adding 1 to each.",
  take: "Number of factors = product of (exponent + 1) over the prime factorization."
},
"quant-700-numbers#46": {
  fast: "All the factors of 2 in 88,000 must come from purple chips, so x is 8 and \\(2^{6} = 8^{2}\\): two purple chips.",
  traps: "(C) 3 uses x = 4, which is below the green chip's 5. (A) 1 would need x = 64.",
  take: "Factor the product and assign each prime to the only chip that can supply it."
},
"quant-700-numbers#47": {
  fast: "abcabc = abc × 1001, and 1001 = 7 · 11 · 13, so 13 is guaranteed to divide it whatever the digits.",
  traps: "(D) 3 and (C) 5 depend on the digit sum and last digit. (E) misses the 1001 structure.",
  take: "A repeated block of digits is the block times 1001, 10101, etc. — factor those constants."
},
"quant-700-numbers#48": {
  fast: "Multiplying by \\(25 = 5^{2}\\) raises the exponent of 5 by 2, and 5 is tied to the hundreds digit, so n − m = 200.",
  traps: "(A) 20 puts the 5 on the tens digit. (C) 2,000 puts it on the thousands.",
  take: "Match each prime to its digit position before translating a multiplication into a digit change."
},
"quant-700-numbers#49": {
  fast: "Cost per bowl is d/(6vb), so d must be a multiple of 6vb; the smallest two different primes give 6 · 2 · 3 = 36.",
  traps: "(B) 24 uses v = b = 2, but the primes must differ. (A) 15 forgets the 6 pounds.",
  take: "\"Integer per unit\" means the total is a multiple of the unit count; minimise that count."
},
"quant-700-numbers#50": {
  fast: "\\(p^{3}\\) divisible by \\(2^{4} \\cdot 5\\) forces p to be a multiple of \\(20 = 2^{2} \\cdot 5\\), which already has (2 + 1)(1 + 1) = 6 factors.",
  traps: "(B) 3 counts the prime factors with multiplicity. (D) 8 uses 40 instead of 20.",
  take: "Divide each exponent in the divisor by 3 and round up to get the minimum p."
},
"quant-700-numbers#51": {
  fast: "The multiples are 5 × 1 through 5 × 7, so the answer is 5 × lcm(1, …, 7) = 5 × 420 = 2,100.",
  traps: "(B) 1,050 misses the factor 4 (needed for 20). (E) 3,500 uses \\(5^{2}\\) needlessly.",
  take: "lcm(5a, 5b, …) = 5 · lcm(a, b, …) when the 5s are all single."
},
"quant-700-numbers#52": {
  fast: "Unique factorization: only the exponent of 2 (the hundreds digit) differs, by \\(4 \\rightarrow \\tfrac{400}{10}\\).",
  traps: "(A) 16 reports W. (E) misses that prime factorizations are unique.",
  take: "Equal prime-power products must match exponent by exponent."
},
"quant-700-numbers#53": {
  fast: "\\(264{,}600 = 2^{3} \\cdot 3^{3} \\cdot 5^{2} \\cdot 7^{2}\\) has 144 factors; those divisible by 6 are the 81 factors of \\(264{,}600/6\\), leaving 63.",
  traps: "(C) 51 subtracts the multiples of 2 and 3 separately without adding back. (E) 72 halves the total.",
  take: "Factors of N divisible by k ↔ factors of N/k."
},
"quant-700-numbers#54": {
  fast: "Counts are 18, 90, 252, …; only 90 = 5·17 + 5 matches one of the forms.",
  traps: "(C) 6l + 2 is 2 mod 6, but every count is 0 mod 6. (D) 9m + 7 is 7 mod 9, but every count is 0 mod 9.",
  take: "Compute the factor count as a formula in x, then compare residues rather than hunting for values."
},
"quant-700-numbers#55": {
  fast: "Take the highest prime powers: 8, 9, 5 and 11 (12 adds nothing new), so the lcm is 8 · 9 · 5 · 11 = 3,960.",
  traps: "(A) 7,920 doubles unnecessarily. (D) 2,970 drops a factor of 2 and is not divisible by 8.",
  take: "lcm = product of the highest prime powers present, never the plain product."
},
"quant-700-numbers#56": {
  fast: "Every prime ≤ 50 divides h(100), so none divides h(100) + 1.",
  traps: "(E) gives up; the bound is provable without finding the factor. (A)–(C) ignore that all small primes are excluded.",
  take: "N! + 1 (or any multiple of N! plus 1) has no prime factor up to N — Euclid's trick."
},
"quant-700-numbers#57": {
  fast: "Test p = 5: 1, 2, 3, 4 all share no factor with 5, so f(p) = 4 = p − 1, and only that choice fits.",
  traps: "(B) p − 2 wrongly excludes 1, which does share \"no factor other than 1\". (D) halves for no reason.",
  take: "Read the definition literally and test it on p = 5."
},
"quant-700-numbers#58": {
  fast: "Six prime factors: \\(2^{6} = 64\\) and \\(2^{5} \\cdot 3 = 96\\) are the only products under 100, so the count is 2.",
  traps: "(D) counts 128 or 144, which are three digits. (B) forgets 96.",
  take: "\"Length\" counts primes with multiplicity; build from the smallest primes up."
},
"quant-700-numbers#59": {
  fast: "14n/60 = 7n/30 is an integer only when 30 divides n; every multiple of 30 below 200 uses exactly the primes 2, 3, 5.",
  traps: "(A) two forgets one of 2, 3, 5. (C) five counts factors with multiplicity for some multiple.",
  take: "Reduce the fraction first; the surviving denominator is what n must absorb."
},
"quant-700-numbers#60": {
  fast: "\\(4^{17} = 2^{34}\\); factor out \\(2^{28}\\) to leave \\(2^{6} - 1 = 63 = 9 \\cdot 7\\), so the greatest prime factor is 7.",
  traps: "(A) 2 is the most frequent prime, not the greatest. (B) 3 stops at the first factor of 63.",
  take: "Differences of powers factor: pull out the common power, then factor the small leftover."
},
"quant-700-numbers#61": {
  fast: "Even count of consecutive integers ⇒ mean ends in .5 ⇒ x/y is never an integer.",
  traps: "(E) x/z = 2 × (x/y), twice a half-integer, is an integer — possible. (D) is the mean of z integers, an integer whenever z is odd.",
  take: "Mean of n consecutive integers: integer if n is odd, half-integer if n is even."
},
"quant-700-numbers#62": {
  fast: "k must be 2 more than a multiple of 3; −2 is the odd one out.",
  traps: "(A) −4 and (C) −1 look different from 2 and 5 but are all congruent to 2 mod 3.",
  take: "Three integers that are pairwise different mod 3 always include a multiple of 3."
},
"quant-700-numbers#63": {
  fast: "bcd = 2abc cancels to d = 2a; with d = a + 3 that gives a = 3, so b = 4, c = 5 and bc = 20.",
  traps: "(B) 12 is ab. (D) 30 is cd.",
  take: "Cancel the shared factors first; the remaining relation is a one-variable equation."
},
"quant-700-numbers#64": {
  fast: "Inclusive counts add one to the difference: 107 − 51 = 56, plus one gives 57 integers.",
  traps: "(B) 56 forgets the +1. (D) 58 adds it twice.",
  take: "Inclusive count = difference + 1."
},
"quant-700-numbers#65": {
  fast: "Parity: ten consecutive integers sum to an odd number, four sum to an even number.",
  traps: "(E) 10 and 7 look mismatched but 105 works for both. (C) 7 and 9 share 63.",
  take: "Sum of n consecutive integers ≡ n/2 (mod n) for even n; use parity before hunting for examples."
},
"quant-700-numbers#66": {
  fast: "k = 7 makes the hundreds column reach 16; then the tens column gives 16 → p = 6.",
  traps: "(B) 7 reports k instead of p. (D) 9 ignores the carry from the units column.",
  take: "Column addition puzzles: resolve the units column first, then propagate carries."
},
"quant-700-numbers#67": {
  fast: "Each digit lands in each place twice, so the sum is 2(a + b + c)(111) = 222(a + b + c); 222 is forced.",
  traps: "(D) 22 and (C) 11 are factors of 222 but not the largest guaranteed one.",
  take: "Sum of all permutations of n distinct digits = (n − 1)! × (digit sum) × 111…1."
},
"quant-700-numbers#68": {
  fast: "Magic constant = \\(\\tfrac{712}{4} = 178\\), and the centre block of a 4 × 4 magic square shares it.",
  traps: "(B) 153 is the sum of the four smallest-plus-something guesses; (D) and (E) exceed what four cells near the middle can hold.",
  take: "Total of an evenly spaced list = count × average; a 4 × 4 magic square's centre 2 × 2 block equals the magic constant."
},
"quant-700-coord#1": {
  fast: "Each coordinate of the centroid is one third of the sum: the missing y must be 6.",
  traps: "(A) (3, 4) halves instead of tripling the centre's y-coordinate.",
  take: "Centroid = average of the vertices, coordinate by coordinate."
},
"quant-700-coord#2": {
  fast: "|b| = 6 from the area; positive slope through (4, 0) makes it −6.",
  traps: "(E) 6 forgets the sign forced by the positive slope. (C) and (D) halve the intercept.",
  take: "Triangle with the axes: area = \\(\\tfrac{1}{2}\\) |x-intercept| |y-intercept|; the slope's sign fixes the intercepts' signs."
},
"quant-700-coord#3": {
  fast: "l and w have slopes 5 and \\(-\\tfrac{1}{5}\\): perpendicular; k ∥ l, so k ⊥ w.",
  traps: "(E) misses that \"does not intersect\" means parallel, which fixes k's direction completely.",
  take: "Non-intersecting lines in a plane are parallel; perpendicular slopes multiply to −1."
},
"quant-700-coord#4": {
  fast: "The perpendicular bisector idea is overkill: the line through the origin and the midpoint (4, 9) has slope \\(\\tfrac{9}{4}\\).",
  traps: "(E) 3 uses P alone \\((\\tfrac{11}{1}\\) is 11, not 3 — but \\(\\tfrac{7}{7} = 1\\) and \\(\\tfrac{11}{1} = 11\\) average to 6, still wrong). Only the midpoint gives equal distances.",
  take: "Equidistant from two points ⇒ passes through their midpoint (or is parallel to their join)."
},
"quant-700-coord#5": {
  fast: "A line written Ax + By = C has slope −A/B, so x + 2y = 1 has slope \\(-\\tfrac{1}{2}\\) without rearranging.",
  traps: "(E) drops the sign. (B) reads the coefficient of x as the slope.",
  take: "For Ax + By = C the slope is −A/B."
},
"quant-700-coord#6": {
  fast: "L has slope −1/(p − 2), so a perpendicular needs slope p − 2; rearrange each choice and only (A) delivers it.",
  traps: "(D) has slope 1/(p − 2), the reciprocal without the sign flip. (E) and (B) have slope −p − 2.",
  take: "Perpendicular slope = negative reciprocal; compute L's slope symbolically first."
},
"quant-700-coord#7": {
  fast: "PQ is the 5-12-13 distance, so h = 13; an equilateral triangle with height h has area \\(h^{2}/\\sqrt{3} = 169/\\sqrt{3}\\).",
  traps: "(D) \\(169\\sqrt{3}/4\\) treats 13 as the side, not the height. (B) 84.5 is \\(\\tfrac{169}{2}\\).",
  take: "Equilateral triangle: area = \\((\\sqrt{3}/4)s^{2} = h^{2}/\\sqrt{3}\\)."
},
"quant-700-coord#8": {
  fast: "Positive intercepts with a negative slope: quadrants II, I, IV only.",
  traps: "(E) lists two quadrants, but a non-horizontal, non-vertical line misses at most one.",
  take: "A line with negative slope and positive y-intercept avoids quadrant III."
},
"quant-700-coord#9": {
  fast: "AB : BC = 2 : 1 puts B two thirds of the way from A to C: (0 + 2, −3 + 4) = (2, 1).",
  traps: "(B) (1, −1) is one third of the way — BC = 2AB. (D) is the midpoint.",
  take: "A point dividing a segment in ratio m : n is A + m/(m + n) · (C − A)."
},
"quant-700-coord#10": {
  fast: "The line meets the circle again at B = (−4, 3); the sides \\(\\sqrt{10}\\) and \\(\\sqrt{90}\\) multiply to \\(\\sqrt{900} = 30\\), the rectangle's area.",
  traps: "(E) 50 is half the diameter squared — the area of the inscribed square, not this rectangle. (D) 45 is half of 90.",
  take: "A rectangle's diagonal in a circle is a diameter; the line's intersection with the circle gives the next vertex."
},
"quant-700-coord#11": {
  fast: "Foot of the perpendicular is (2, 0); double it and subtract R: (0, −1).",
  traps: "(E) (2, 0) is the midpoint, not P. (C) (0, 1) flips the sign of y.",
  take: "Reflection across a line: find the foot of the perpendicular M, then P = 2M − R."
},
"quant-700-coord#12": {
  fast: "Each step along the line is 7 right and 5 down; from (7, 0) that lands on (14, −5), which is choice (D).",
  traps: "(E) (21, −9) should be (21, −10). (A) (−14, 10) should be (−14, 15).",
  take: "With integer intercepts, walk along the line in steps of (Δx, Δy) = (run, rise)."
},
"quant-700-coord#13": {
  fast: "The given slope is \\(-\\tfrac{3}{4}\\), so a perpendicular needs \\(+\\tfrac{4}{3}\\); only 8x − 6y = 24 rearranges to that slope.",
  traps: "(B) and (C) have slope \\(\\tfrac{3}{4}\\) — reciprocal without the sign change. (D) has \\(-\\tfrac{4}{3}\\) — sign change without the reciprocal.",
  take: "Perpendicular ⇔ product of slopes is −1: both the flip and the sign matter."
},
"quant-700-coord#14": {
  fast: "Horizontal change 3, vertical change 5: the distance is \\(\\sqrt{9 + 25} = \\sqrt{34}\\) by the distance formula.",
  traps: "(B) \\(\\sqrt{26}\\) uses a run of 1. (D) \\(\\sqrt{58}\\) uses a rise of 7.",
  take: "Distance \\(= \\sqrt{(\\Delta x)^{2} + (\\Delta y)^{2}}\\); compute the differences with signs first."
},
"quant-700-coord#15": {
  fast: "Four pairs drop 1 for every 1 across; (2, 5)–(−3, 2) does not.",
  traps: "(C) (−1, 6) and (−4, 9): moving 3 left and 3 up is still slope −1.",
  take: "Compute each pair's slope; only the one that is not −1 fails."
},
"quant-700-pnc#1": {
  fast: "Count the letters (4 and 11) and the repeats (none; M, A, T twice each).",
  traps: "(B) and (E) invent a triple letter. (A) and (D) miscount GMAT.",
  take: "Arrangements of a word = n! divided by the factorial of each letter's multiplicity."
},
"quant-700-pnc#2": {
  fast: "Four ordered chairs filled from 7 people: 7 × 6 × 5 × 4 = 840 arrangements.",
  traps: "(B) 35 is 7C4, ignoring which person sits where. (E) 210 is 7P3.",
  take: "Assigning distinguishable seats is a permutation, not a combination."
},
"quant-700-pnc#3": {
  fast: "Itineraries are ordered, so add the permutations of 2, 3 and 4 cities: 12 + 24 + 24 = 60.",
  traps: "(A) 24 counts only full tours. (B) 6 counts unordered pairs of cities.",
  take: "\"At least two\" means summing over every allowed size; itineraries are ordered."
},
"quant-700-pnc#4": {
  fast: "Four balls in a row with two identical black ones: 4!/2! = 12 distinguishable arrangements.",
  traps: "(B)–(E) come from treating the black balls as distinct or adding extra objects.",
  take: "Divide by k! for each group of k identical items."
},
"quant-700-pnc#5": {
  fast: "Song order matters, so add ordered selections: 10P2 + 10P3 = 90 + 720 = 810 sequences.",
  traps: "(A) uses sizes 1 and 2. (E) uses 4 and 3. (B) and (D) mistype the pool as 100 songs.",
  take: "\"Sequence\" signals permutations; \"either … or\" signals addition."
},
"quant-700-pnc#6": {
  fast: "All 6! = 720 seatings minus the 5! × 2 = 240 with Marcia and Jan glued together: 480.",
  traps: "(A) 240 is the number of arrangements with the pair together. (B) 360 halves the total instead of subtracting the block count.",
  take: "\"Not next to each other\" = total − (glued together)."
},
"quant-700-pnc#7": {
  fast: "A committee is unordered: 7C4 = 7C3 = 35, using the symmetry nCr = nC(n − r).",
  traps: "(C) 60 and (D) 45 are neither 7C4 nor 7P4; (A) 12 is 4 × 3.",
  take: "Committees are combinations."
},
"quant-700-pnc#8": {
  fast: "Distinct students: 8 + 10 − 6 = 12; choosing 9 of 12 is the same as leaving out 3: 12C3 = 220.",
  traps: "(C) 260 uses 18 students (double-counting the overlap) in a rough way. (D) and (E) are not binomial values here.",
  take: "Resolve the overlapping-sets count before the combinatorics."
},
"quant-700-pnc#9": {
  fast: "5P3 = 60 arrangements in total; 12 of them have A and B adjacent (3 third letters × 2 positions × 2 orders), leaving 48.",
  traps: "(D) 37 subtracts 23, miscounting the adjacent cases. (B) 23 is the number of arrangements that contain both A and B in any position, roughly.",
  take: "Arrangements that use only some of the letters still follow total − bad."
},
"quant-700-pnc#10": {
  fast: "Order the four coins with two identical: 4!/2! = 12; the nickel can show either face, so 12 × 2 = 24.",
  traps: "(C) 48 treats the quarters as distinct. (A) 12 forgets the nickel's two faces.",
  take: "Multiply independent choices; divide for identical items."
},
"quant-700-pnc#11": {
  fast: "Unordered sets of 3 colours from 7: 7C3 = 35, and each set can label only one substance.",
  traps: "(E) 210 is 7P3, treating the colors as ordered. (A) 21 is 7C2.",
  take: "\"Unordered combination\" is the literal cue for nCr."
},
"quant-700-pnc#12": {
  fast: "Ranking makes order matter: 7 choices for first, 6 for second, 5 for third, 7 · 6 · 5 = 210.",
  traps: "(B) 35 ignores the ranking. (E) 840 uses four picks.",
  take: "\"Rank\" turns a combination into a permutation."
},
"quant-700-pnc#13": {
  fast: "5! = 120 arrangements of five letters, halved for the two indistinguishable Ts: 60.",
  traps: "(D) 120 treats the T's as different. (B) 24 drops a letter.",
  take: "Repeated letters: divide by the factorial of the repeat count."
},
"quant-700-pnc#14": {
  fast: "Prime digits are 2, 3, 5, 7; three positions without repeats: 4 × 3 × 2 = 24 codes.",
  traps: "(A) 4 is 4C3, ignoring order. (E) 26 sneaks in 1 or 9 as primes.",
  take: "Single-digit primes are exactly 2, 3, 5, 7."
},
"quant-700-pnc#15": {
  fast: "Order the three category blocks (3!) and the books inside each block (3! · 2! · 3!): 6 × 72 = 432.",
  traps: "(C) 72 forgets to order the categories. (D) 216 forgets the 2! for the guides.",
  take: "Grouped arrangements: (ways to order the groups) × (ways to order inside each group)."
},
"quant-700-pnc#16": {
  fast: "Bob and Lisa must take the two end seats (2 ways); the other three fill the middle in 3! = 6 ways: 12.",
  traps: "(B) 10 puts only one of them at an end. (D) 20 forgets the ends can swap.",
  take: "Translate \"next to only one other\" into a seat position before counting."
},
"quant-700-pnc#17": {
  fast: "Lunches: 3 of 5 weekdays (10 ways); dinners: 3 of the 4 non-Friday nights (4 ways); 10 × 4 = 40.",
  traps: "(D) 100 uses 5C3 for both meals. (A) 20 adds instead of multiplying.",
  take: "Independent choices multiply; read the constraint that shrinks one pool."
},
"quant-700-pnc#18": {
  fast: "Glue the President and Vice President into one unit: 5! = 120 orders, times 2 for their order inside: 240.",
  traps: "(A) 120 forgets the pair can swap. (E) 720 ignores the constraint.",
  take: "\"Must sit together\" = block method: (n − 1)! × 2."
},
"quant-700-pnc#19": {
  fast: "Either 3 or 4 of the 5 photos: 5C3 + 5C4 = 10 + 5 = 15 possible envelopes.",
  traps: "(B) 10 counts only the 3-photo option. (E) 50 multiplies instead of adding.",
  take: "\"3 or 4\" means add the two combination counts."
},
"quant-700-pnc#20": {
  fast: "Choose 2 of the 3 east-coast cities (3), the one mid-west city (1) and 2 of the 3 west-coast cities (3): 9.",
  traps: "(C) 18 doubles for order that does not exist. (E) 36 squares the wrong count.",
  take: "Split a placement problem by region and multiply the independent choices."
},
"quant-700-pnc#21": {
  fast: "Treat each couple as a block: 3! block orders times 2 internal orders per couple, 6 × 8 = 48.",
  traps: "(C) 24 uses only one internal swap factor. (E) 96 doubles once too often.",
  take: "Each inseparable pair contributes a factor of 2 on top of the block arrangement."
},
"quant-700-pnc#22": {
  fast: "Two possible drivers, then four passengers placed in order among the six remaining seats: 2 × 6P4 = 720.",
  traps: "(D) 360 forgets the driver choice. (C) 120 seats the four in only four seats.",
  take: "Empty seats matter when seats are distinguishable: use nPr with the seat count."
},
"quant-700-pnc#23": {
  fast: "President then vice-president from n people is n(n − 1); 10 × 9 = 90, so there are 10 students.",
  traps: "(C) 9 uses 9 × 10 the wrong way round in a hurry; (E) 11 gives 110.",
  take: "Two distinct offices from n people: n(n − 1) ordered pairs."
},
"quant-700-pnc#24": {
  fast: "Females fill the front three spots in 3! ways and males the back three in 3! ways: 6 × 6 = 36.",
  traps: "(A) 20 is 6C3, the number of ways to choose which positions are female — already fixed here.",
  take: "Fixed segments: multiply the arrangements within each segment."
},
"quant-700-pnc#25": {
  fast: "9 numbers × 6C2 = 15 button pairs gives 135 possible codes; at 3 seconds each the worst case is 405 s.",
  traps: "(E) 450 uses 150 combinations (ordered pairs of buttons plus a slip). (D) 545 uses 6P2 = 30 pairs.",
  take: "\"Simultaneously\" makes the button pair unordered."
},
"quant-700-pnc#26": {
  fast: "Two alternating patterns (DEDEDE or EDEDED), then 3! orders for dwarves and 3! for elves: 2 × 6 × 6 = 72.",
  traps: "(B) 36 forgets that either species can start. (C) 48 is a stray 2 × 4!.",
  take: "\"No two alike adjacent\" with equal counts forces strict alternation."
},
"quant-700-pnc#27": {
  fast: "All 5!/2! = 60 distributions minus the 4!/2! = 12 that give the youngest niece G.I. Josie: 48.",
  traps: "(E) 60 ignores the restriction. (C) 36 subtracts 24, forgetting the identical dolls.",
  take: "Complement counting with identical items: keep dividing by 2! in both counts."
},
"quant-700-pnc#28": {
  fast: "Only 3 wins in total, so the first five hands have at most 3 wins: 1 + 5 + 10 + 10.",
  traps: "(D) 32 counts all \\(2^{5}\\) win/loss strings, including ones with 4 or 5 wins. (A) 10 counts only the exactly-3-wins strings.",
  take: "Solve for the totals first, then count sequences respecting the cap."
},
"quant-700-pnc#29": {
  fast: "Friday used two of the five guards, so three are free on Saturday and any pair of them works: 3C2 = 3.",
  traps: "(A) 9 and (B) 7 count pairs including guards who worked Friday. (E) 2 forgets that three free guards give three pairs.",
  take: "Trace back only as far as the constraint reaches — here, one night."
},
"quant-700-pnc#30": {
  fast: "Unordered triples of dice: all alike (6) + exactly two alike (6 × 5 = 30) + all different (6C3 = 20) = 56.",
  traps: "(E) 216 counts ordered rolls. (A) 24 and (B) 30 count only one of the three cases.",
  take: "Unordered with repetition: (n + r − 1) choose r, or split into cases by repeats."
},
"quant-700-pnc#31": {
  fast: "Row one is any order of X, Y, Z (6); row two must be a derangement of it (2); row three is then forced: 12.",
  traps: "(E) 18 allows a third-row choice that does not exist. (B) 6 forgets the second-row choice.",
  take: "Build row by row; each later row is a derangement of the earlier ones."
},
"quant-700-pnc#32": {
  fast: "Counting valid front-row rank sets is the ballot problem; for 4 pairs the Catalan number is 14.",
  traps: "(D) 16 and (C) 15 include front sets such as {1, 2, 3, 8} or {1, 4, 5, 6}, which force a taller woman in front of a shorter one.",
  take: "Sorted rows with a front-shorter rule are counted by Catalan numbers: 1, 2, 5, 14, 42, …."
},
"quant-700-pnc#33": {
  fast: "Each office sends exactly one person; pick which 3 of the 6 offices send a man: 6C3 = 20.",
  traps: "(E) 40 double-counts by also choosing the female offices. (C) 15 is 6C2.",
  take: "When each slot is a binary choice with a fixed total, count with a single nCr."
},
"quant-700-pnc#34": {
  fast: "6! = 720 colourings divided by the 24 rotations of a cube gives 30 distinct paint jobs.",
  traps: "(E) 120 divides 720 by 6 instead of by the 24 rotations. (A) 24 is the number of rotations themselves.",
  take: "Distinct colorings up to rotation = all colorings ÷ number of rotations (when all colors differ)."
},
"quant-700-pnc#35": {
  fast: "Committees with Michael: 5C2 = 10; those also with Anthony: 4 (one more from the other 4), and 4 of 10 is 40%.",
  traps: "(A) 20% divides by 20 (all committees). (D) 50% forgets that two seats, not one, are open beside Michael.",
  take: "Condition on the fixed member first, then count the remaining seats."
},
"quant-700-pnc#36": {
  fast: "All 10C3 = 120 groups minus the 6C3 = 20 groups made only of junior partners: 100.",
  traps: "(E) 120 ignores the restriction. (A) 20 is the number of all-junior groups.",
  take: "\"At least one\" = total − none."
},
"quant-700-pnc#37": {
  fast: "Around a circle fix one person to kill rotations; the other four arrange in 4! = 24 ways.",
  traps: "(E) 12 also divides by reflections, which the stem does not identify. (B) 10 is 5C2.",
  take: "Circular table: (n − 1)! when only relative position matters."
},
"quant-700-prob#1": {
  fast: "Exactly two heads in three flips: 3C2 = 3 favourable sequences out of \\(2^{3} = 8\\), so \\(\\tfrac{3}{8}\\).",
  traps: "(A) \\(\\tfrac{1}{8}\\) is exactly three heads. (C) \\(\\tfrac{1}{2}\\) is \"at least two\" heads.",
  take: "Exactly k heads in n flips: nCk \\(/ 2^{n}\\)."
},
"quant-700-prob#2": {
  fast: "One defective (3 ways) with three good cars (17C3 = 680) out of 20C4 = 4845 selections reduces to \\(\\tfrac{8}{19}\\).",
  traps: "(B) \\(\\tfrac{3}{20}\\) is the chance that one specific car is defective. (D) \\(\\tfrac{3}{5}\\) is \\(4 \\times \\tfrac{3}{20}\\), which overcounts overlaps.",
  take: "\"Exactly one\" from a mixed pool: multiply the two combination counts, divide by the total."
},
"quant-700-prob#3": {
  fast: "Medalist sets: 9C3 = 84; sets with two triplets (3 × 6 = 18) or all three (1) give \\(\\tfrac{19}{84}\\).",
  traps: "(A) \\(\\tfrac{3}{14} = \\tfrac{18}{84}\\) forgets the all-three case. (C) \\(\\tfrac{11}{42}\\) miscounts the two-triplet case.",
  take: "When only who wins matters, count unordered sets and ignore medal colours."
},
"quant-700-prob#4": {
  fast: "Of 56 triples only {2, 3, 5} has product below \\(31 (\\tfrac{1}{56})\\); three odd primes give an odd sum \\((\\tfrac{35}{56})\\); difference \\(\\tfrac{34}{56} = \\tfrac{17}{28}\\).",
  traps: "(E) \\(\\tfrac{301}{336}\\) uses ordered triples (336) inconsistently. (B) \\(\\tfrac{1}{2}\\) guesses the odd-sum probability.",
  take: "Sum parity of primes: odd unless the prime 2 is included."
},
"quant-700-prob#5": {
  fast: "q = (p − 5)(p − 8) is negative only between the roots, so p = 6 or 7: two of ten values, \\(\\tfrac{1}{5}\\).",
  traps: "(C) \\(\\tfrac{2}{5}\\) includes the roots 5 and 8, where q = 0. (A) \\(\\tfrac{1}{10}\\) counts only one value.",
  take: "A quadratic is negative strictly between its roots."
},
"quant-700-prob#6": {
  fast: "38 of 120 triples avoid a match; \\(\\tfrac{82}{120} = \\tfrac{41}{60}\\) contain one.",
  traps: "(B) \\(\\tfrac{23}{60}\\) is the complement, the no-match probability rounded. (C) \\(\\tfrac{7}{12}\\) forgets the double-counted all-blue triples.",
  take: "\"At least one match\" is a complement problem; build the no-match set by fixing a hand per colour."
},
"quant-700-prob#7": {
  fast: "Ties have probability \\(\\tfrac{146}{1296}\\); by symmetry Jane wins half of the rest, (1296 − 146)/2 = 575 of 1296.",
  traps: "(E) \\(\\tfrac{1}{2}\\) ignores ties. (D) \\(\\tfrac{583}{1296}\\) adds half the ties instead of removing them.",
  take: "Two symmetric players: P(A beats B) = (1 − P(tie))/2."
},
"quant-700-prob#8": {
  fast: "Kate ends between $10 and $15 with a net gain of 1 or 3, i.e. 3 or 4 tails: 5C3 + 5C4 = 15 of 32 outcomes.",
  traps: "(B) \\(\\tfrac{1}{2}\\) includes the 5-tails case ($15, not less than 15). (A) \\(\\tfrac{5}{16}\\) counts only 3 tails.",
  take: "Translate money into a count of tails; then it is a binomial count."
},
"quant-700-prob#9": {
  fast: "The first traveler picks anywhere; the other y − 1 must copy that choice, so the probability is \\((\\tfrac{1}{n})^{y - 1} = \\tfrac{n}{n^{y}}\\).",
  traps: "(C) 1/nʸ demands a particular destination. (A) and (B) use factorials where there is no ordering.",
  take: "\"All the same\" leaves the first free and constrains the rest."
},
"quant-700-prob#10": {
  fast: "Of the 16 gender sequences, 11 have at least two girls and 6 of those have exactly two: \\(\\tfrac{6}{11}\\).",
  traps: "(B) \\(\\tfrac{3}{8}\\) is \\(\\tfrac{6}{16}\\), ignoring the condition. (D) \\(\\tfrac{1}{2}\\) treats the two unknown children as a fresh coin flip each.",
  take: "Conditional probability: restrict the sample space to the outcomes consistent with what you were told."
},
"quant-700-prob#11": {
  fast: "The 10th card is just as random as the 1st, so the probability it is a heart is \\(\\tfrac{13}{52} = \\tfrac{1}{4}\\).",
  traps: "(E) \\(\\tfrac{13}{42}\\) assumes the first nine cards were all non-hearts. (C) \\(\\tfrac{5}{26}\\) assumes some hearts were already dealt.",
  take: "Without information about earlier cards, the k-th card has the same distribution as the first."
},
"quant-700-prob#12": {
  fast: "No-pair hands: choose 4 of 6 values (15) and a suit for each (16), 240 of 495 hands; at least one pair is \\(\\tfrac{255}{495} = \\tfrac{17}{33}\\).",
  traps: "(A) \\(\\tfrac{8}{33}\\) counts only hands with exactly one specific value paired. (B) \\(\\tfrac{62}{165}\\) mis-multiplies the suit choices.",
  take: "\"At least one pair\" — count the all-distinct hands and take the complement."
},
"quant-700-prob#13": {
  fast: "Both named players in: 7C3 = 35 of 9C5 = 126 teams, or directly \\((\\tfrac{5}{9})(\\tfrac{4}{8}) = \\tfrac{5}{18}\\).",
  traps: "(E) \\(\\tfrac{1}{3}\\) is \\(\\tfrac{5}{9} \\times \\tfrac{3}{5}\\), a slip in the second factor. (C) \\(\\tfrac{2}{9}\\) halves \\(\\tfrac{4}{9}\\).",
  take: "Two specific people both chosen: (k/n) × ((k − 1)/(n − 1))."
},
"quant-700-prob#14": {
  fast: "Exactly 2 women and 2 men: 5C2 × 3C2 = 30 of 8C4 = 70 teams, so \\(\\tfrac{3}{7}\\).",
  traps: "(B) \\(\\tfrac{1}{7}\\) is \\(\\tfrac{10}{70}\\), forgetting the men's combinations. (E) \\(\\tfrac{1}{2}\\) assumes each gender is equally likely to fill each slot.",
  take: "Hypergeometric: multiply the group combinations, divide by the total."
},
"quant-700-prob#15": {
  fast: "Sequential draws without replacement: \\((\\tfrac{4}{12})(\\tfrac{3}{11}) = \\tfrac{1}{11}\\) for two jelly donuts.",
  traps: "(B) \\(\\tfrac{1}{9}\\) replaces the first donut. (C) \\(\\tfrac{1}{3}\\) stops after one pick.",
  take: "Sequential picks without replacement shrink both numerator and denominator."
},
"quant-700-prob#16": {
  fast: "Non-nickels are 9 of 15, then 8 of 14: \\((\\tfrac{9}{15})(\\tfrac{8}{14}) = \\tfrac{12}{35}\\).",
  traps: "(D) \\(\\tfrac{9}{25}\\) replaces the coin. (A) \\(\\tfrac{8}{25}\\) mixes the two denominators.",
  take: "Group the \"not nickel\" coins first; two colours of non-nickel do not matter."
},
"quant-700-prob#17": {
  fast: "Two aces in a row without replacement: \\((\\tfrac{4}{52})(\\tfrac{3}{51}) = \\tfrac{12}{2652} = \\tfrac{1}{221}\\).",
  traps: "(D) \\(\\tfrac{3}{51}\\) is only the second draw. (B) \\(\\tfrac{13}{221}\\) is \\(\\tfrac{1}{17}\\), a mis-reduction.",
  take: "Drawing without replacement: multiply the successive conditional probabilities."
},
"quant-700-prob#18": {
  fast: "Either spouse can win the first drawing \\((\\tfrac{2}{60})\\), then the other must win the second \\((\\tfrac{1}{59})\\): \\(\\tfrac{1}{1770}\\).",
  traps: "(E) \\(\\tfrac{1}{59}\\) is only the second draw. (D) \\(\\tfrac{1}{60}\\) is one specific person winning one draw.",
  take: "\"Both go to the couple\": first draw hits either of them, second hits the remaining one."
},
"quant-700-prob#19": {
  fast: "The yellow urn balances only if both transferred balls are white: \\((\\tfrac{5}{10})(\\tfrac{4}{9}) = \\tfrac{2}{9}\\).",
  traps: "(B) \\(\\tfrac{4}{9}\\) replaces the first ball. (C) \\(\\tfrac{5}{9}\\) is P(at least one white).",
  take: "Work out what transfer produces the target, then compute that transfer's probability."
},
"quant-700-prob#20": {
  fast: "Only a perfect 18 cannot be beaten, so a guaranteed share needs three sixes: \\((\\tfrac{1}{6})^{3} = \\tfrac{1}{216}\\).",
  traps: "(E) \\(\\tfrac{1}{42}\\) and (B) \\(\\tfrac{1}{221}\\) mix in the 21 opponents, who do not affect the probability of Jim's own roll.",
  take: "\"Guarantee\" means the worst case: only the unbeatable maximum qualifies."
},
"quant-700-prob#21": {
  fast: "Two black draws with replacement: \\((\\tfrac{4}{n})^{2} = \\tfrac{1}{36}\\), so \\(\\tfrac{4}{n} = \\tfrac{1}{6}\\), n = 24 pencils, cost 24 × $0.15 = $3.60.",
  traps: "(A) $3 uses 20 pencils, as if without replacement \\((\\tfrac{4}{20} \\times \\tfrac{3}{19}\\) is not \\(\\tfrac{1}{36}\\) either).",
  take: "\"Put it back\" means independent draws: square the single-draw probability."
},
"quant-700-prob#22": {
  fast: "At least one head is the complement of all tails: \\(1 - (\\tfrac{1}{2})^{3} = \\tfrac{7}{8}\\).",
  traps: "(B) \\(\\tfrac{7}{9}\\), (C) \\(\\tfrac{7}{10}\\), (D) \\(\\tfrac{4}{5}\\) and (E) \\(\\tfrac{5}{7}\\) are not multiples of \\(\\tfrac{1}{8}\\) and cannot arise from three fair flips.",
  take: "\"At least once\" = 1 − P(never)."
},
"quant-700-prob#23": {
  fast: "Complement: P(neither interested) = \\((\\tfrac{6}{21})(\\tfrac{5}{20}) = \\tfrac{1}{14}\\), so at least one is \\(\\tfrac{13}{14}\\).",
  traps: "(A) \\(\\tfrac{1}{14}\\) is the complement. (D) \\(\\tfrac{45}{49}\\) replaces the first student.",
  take: "At least one ⇒ 1 − P(none), without replacement here."
},
"quant-700-prob#24": {
  fast: "All four dice different: \\((6 \\cdot 5 \\cdot 4 \\cdot 3)/6^{4} = \\tfrac{5}{18}\\), so at least one pair is \\(1 - \\tfrac{5}{18} = \\tfrac{13}{18}\\).",
  traps: "(B) \\(\\tfrac{5}{18}\\) is the complement. (D) \\(\\tfrac{2}{3}\\) is the three-dice figure.",
  take: "\"At least one pair\" among dice: 1 − (all distinct)."
},
"quant-700-prob#25": {
  fast: "A multiple of 6 is even and a two-digit prime is odd, so the sum is odd and halving it never gives an integer: 0.",
  traps: "(B)–(E) try to count \"lucky\" draws; parity shows there are none.",
  take: "Check parity before probability — some events are impossible."
},
"quant-700-prob#26": {
  fast: "89 is prime (two factors), so N must be prime: 53, 59, 61, 67 are four of the twenty numbers, \\(\\tfrac{1}{5}\\).",
  traps: "(E) \\(\\tfrac{1}{4}\\) counts 20 numbers as 16. (C) 0 misses that 89 is simply a prime.",
  take: "\"Same number of factors as a prime\" is code for \"prime\"."
},
"quant-700-prob#27": {
  fast: "January to April covers three launches; at least one delay is \\(1 - 0.9^{3} = 1 - 0.729 = 0.271\\).",
  traps: "(D) \\(\\tfrac{271}{10}{,}000\\) misplaces the decimal. (E) \\(\\tfrac{21}{100}\\) uses two launches. (A) \\(\\tfrac{12}{10}{,}000\\) is close to P(all three delayed).",
  take: "Count the events inside the window carefully before applying 1 − (none)."
},
"quant-700-prob#28": {
  fast: "Two 5s plus an odd non-5 (3 positions × 2 values = 6) or three 5s (1): 7 of the 216 outcomes.",
  traps: "(E) \\(\\tfrac{3}{8}\\) is just P(odd product). (D) \\(\\tfrac{1}{5}\\) has no 216 in it.",
  take: "Combine the divisibility and parity requirements die by die."
},
"quant-700-prob#29": {
  fast: "8 divides \\(N^{3}\\) exactly when N is even; 0, 2, 4, 6, 8 are five of the ten digits, so \\(\\tfrac{1}{2}\\).",
  traps: "(D) \\(\\tfrac{4}{5}\\) forgets N = 0 counts as even, or uses nine numbers. (B) \\(\\tfrac{3}{4}\\) includes some odd N.",
  take: "Non-negative single digits include 0 — ten numbers, not nine."
},
"quant-700-prob#30": {
  fast: "Admitted first time (15%) or rejected then admitted on re-application (85% × 20% = 17%): 32%.",
  traps: "(D) 35% adds the two rates, ignoring that the second try only happens after a rejection.",
  take: "Sequential chances: the second attempt is weighted by the probability of reaching it."
},
"quant-700-prob#31": {
  fast: "A multiple of 45 needs the 9 and the 5, one pair out of 3 multiples × 8 primes = 24: \\(\\tfrac{1}{24}\\).",
  traps: "(D) \\(\\tfrac{1}{16}\\) counts 6 as supplying a 3 to pair with 9. (E) \\(\\tfrac{1}{14}\\) uses seven primes.",
  take: "Factor the target; each factor must come from one of the choices."
},
"quant-700-prob#32": {
  fast: "Every prime in range is odd, so N + K is odd exactly when K is even: 4 of the 7 multiples of 5, \\(\\tfrac{4}{7}\\).",
  traps: "(A) \\(\\tfrac{1}{2}\\) assumes half the multiples of 5 are even. (E) \\(\\tfrac{5}{8}\\) uses the count of primes.",
  take: "odd + K is odd ⇔ K even; count the multiples of 5 carefully (inclusive endpoints)."
},
"quant-700-prob#33": {
  fast: "The roots are 5, −10 and 2.5; only −10 and 2.5 are in the set, so 2 of \\(12 = \\tfrac{1}{6}\\).",
  traps: "(C) \\(\\tfrac{1}{4}\\) counts 5 as present. (A) \\(\\tfrac{1}{12}\\) misses 2.5.",
  take: "Solve, then check membership — the list deliberately omits one root."
},
"quant-700-words#1": {
  fast: "Divide the total by the minimum gift: \\(\\tfrac{1749}{50} = 34.98\\), and rounding down gives 34 contributors.",
  traps: "(C) 35 rounds up, but 35 × 50 = 1,750 > 1,749.",
  take: "\"Greatest number\" with a minimum per person = floor(total ÷ minimum)."
},
"quant-700-words#2": {
  fast: "The sum is 4K − 6, so sum + 6 must be a multiple of 4; only 42 + 6 = 48 works among the choices.",
  traps: "(A) 36 and (E) 45: 42 and 51 are not multiples of 4.",
  take: "\"Could be\" with one unknown: find the residue pattern, then test the choices."
},
"quant-700-words#3": {
  fast: "Age gap 25 = half of Carol's future age ⇒ Carol will be 50, Janet 25 ⇒ now 19 ⇒ 14.",
  traps: "(C) 19 is Janet's age today, not 5 years ago. (D) 25 is her age in 6 years.",
  take: "Read which time point the question asks about; the gap between ages never changes."
},
"quant-700-words#4": {
  fast: "Three months of the $120 monthly allocation is $360; $300 spent leaves the company $60 under budget.",
  traps: "(D) reverses the comparison.",
  take: "Compare spending with the pro-rated budget for the same period."
},
"quant-700-words#5": {
  fast: "Arithmetic series 3.5x down to 0 in steps of 0.5x: 8 terms, average 1.75x ⇒ 14x.",
  traps: "(C) 4x counts the brooms, not broom-months.",
  take: "Storage cost = sum of (stock × months); the stock falls in an arithmetic sequence."
},
"quant-700-words#6": {
  fast: "The parabola peaks at S = 4, so two stops later is S = 6: P = −2(4) + 32 = 24.",
  traps: "(E) 32 is the maximum itself. (D) 30 uses S = 5.",
  take: "Vertex form \\(-a(S - h)^{2} + k\\): maximum k at S = h."
},
"quant-700-words#7": {
  fast: "John is 27 + 5 = 32 now, and seven eighths of 32 is 28; update the age before applying the ratio.",
  traps: "(A) 24 uses John's marriage age 27 (rounded), not 32.",
  take: "Update every age to \"now\" before applying the ratio."
},
"quant-700-words#8": {
  fast: "Chain the fractions on what remains: \\(360 \\times \\tfrac{3}{4} \\times \\tfrac{4}{5} = 216\\) left, so 360 − 216 = 144 used.",
  traps: "(D) 216 is the paint left. (C) 180 takes \\(\\tfrac{1}{5}\\) of 360 instead of the remainder.",
  take: "\"Of the remaining\" chains fractions multiplicatively."
},
"quant-700-words#9": {
  fast: "Slope \\(\\tfrac{8}{40} = 0.2\\) per million; from (100, 32) add 8 more ⇒ +40 million ⇒ 140.",
  traps: "(B) 120 assumes salary is proportional to gross (no fixed part).",
  take: "Fixed + variable pay is a line; two points determine it."
},
"quant-700-words#10": {
  fast: "Piecewise pay grows faster than linearly, so doubling pay does not need doubling sales; x = 0 forces y ≥ 4.",
  traps: "(E) assumes y > 2x from \"more than twice the pay\"; the $18 tier breaks it.",
  take: "\"Must be true\": try to break each statement with extreme cases before accepting it."
},
"quant-700-words#11": {
  fast: "Give the other 11 players the minimum 7 points each: 100 − 11 × 7 = 23 for the top scorer.",
  traps: "(D) 21 subtracts 12 × 7 = 84 (counting the top scorer's minimum twice).",
  take: "To maximise one value under a fixed total, minimise all the others."
},
"quant-700-words#12": {
  fast: "Pick limits 15 and 30: balances 5 and 6 combine to 11 on the platinum card, leaving \\(\\tfrac{19}{30}\\) unspent.",
  traps: "(A) \\(\\tfrac{11}{30}\\) is the spent portion.",
  take: "Choose a smart number divisible by every denominator (3, 5 and the factor 2)."
},
"quant-700-words#13": {
  fast: "P = 12, M = 24: June+Aug = 7 + 7 = 14 of 36 ⇒ \\(\\tfrac{22}{36} = \\tfrac{11}{18}\\).",
  traps: "(C) \\(\\tfrac{7}{18}\\) is the June-August share.",
  take: "Equal amounts from different fractions fix the ratio of the wholes."
},
"quant-700-words#14": {
  fast: "Multiply by \\(\\tfrac{5}{7}\\) each year: 0.71, 0.51, 0.36, 0.26, then 0.19 in 2080 is the first value under \\(\\tfrac{1}{4}\\).",
  traps: "(C) 2079 stops one year early (0.26 is still above \\(\\tfrac{1}{4}\\)).",
  take: "Repeated fractional loss is a geometric sequence; iterate until the threshold is crossed."
},
"quant-700-words#15": {
  fast: "More than one child minus more than three children: \\(\\tfrac{15}{20} - \\tfrac{8}{20} = \\tfrac{7}{20}\\) have exactly 2 or 3.",
  traps: "(B) \\(\\tfrac{1}{4}\\) is the couples with at most one child.",
  take: "Translate \"more than\" into cumulative shares and subtract."
},
"quant-700-words#16": {
  fast: "Multiples of 40 are easy with dimes and half-dollars; odd prices break by day 3.",
  traps: "(B) 13 works for one and two candies (10+1+1+1, 10+10+5+1) but not three.",
  take: "\"Could be\" questions: test the choices against every condition, not just the first."
},
"quant-700-words#17": {
  fast: "40% blue is midway between 30% and 50%, so the paints mix 1 : 1; 5 g of violet gives 70% × 5 = 3.5 g of red.",
  traps: "(E) 7.0 takes 70% of the whole 10 g.",
  take: "Weighted-average distances give the mixing ratio; then apply the component percentage to the right part."
},
"quant-700-words#18": {
  fast: "r₁ = \\(\\tfrac{70}{14} = 5\\); r₃ = gcd-type overlap of 6 and 14 = 2; \\(\\tfrac{10500}{210} \\times 5 = 250\\).",
  traps: "(A) 50 is the starting workforce. (E) 1,750 is after year two.",
  take: "Chained ratios: products of consecutive factors; a shared factor must divide both products."
},
"quant-700-words#19": {
  fast: "With 45 sheep, pen 1 takes 4 rams and 11 ewes, leaving 16 rams and 14 ewes to split evenly: 8 : 7.",
  traps: "(B) 2 : 3 averages the pen ratios instead of subtracting counts.",
  take: "Ratios in a part are found by subtracting counts from the whole, never by combining ratios directly."
},
"quant-700-words#20": {
  fast: "Gap 260 closes at 5.414x per day ⇒ xd ≈ 48 ⇒ 320 + 240 = 560.",
  traps: "(D) $5.50 rounds \\(\\sqrt{2} - 1\\) to 0.5, which shifts the answer.",
  take: "When x and the day count only appear as a product, solve for the product."
},
"quant-700-words#21": {
  fast: "Pool the counts: 17 defective in 51,000 is 1 in 3,000, so 60,000 chips give 20 expected defects.",
  traps: "(E) 25 averages the four separate rates instead of pooling the counts.",
  take: "A combined ratio comes from summed numerators over summed denominators."
},
"quant-700-words#22": {
  fast: "Apply the smaller option each day: 0.10 → 0.20 (double) → 0.40 (double) → 0.70 (add 30¢).",
  traps: "(C) $0.80 doubles on day 4 although adding 30¢ is smaller then.",
  take: "\"Whichever is lesser\" must be re-evaluated at every step."
},
"quant-700-words#23": {
  fast: "Plug T = 4, S = 2, x = 12: shares 3 → 6, extra 3; only (D) gives 3.",
  traps: "(B) is the whole new share, not the additional amount. (C) omits the T in the denominator.",
  take: "\"Additional amount\" = new per-person cost − old per-person cost; test with numbers."
},
"quant-700-words#24": {
  fast: "Stock after each shipment runs 3.5x down to 0 in steps of 0.5x, 14x rake-months in total, times $0.10 = 1.40x.",
  traps: "(D) 1.60x stores 4x during March before the March 1 shipment.",
  take: "Shipments at the start of a month reduce that month's storage."
},
"quant-700-words#25": {
  fast: "Profit = −(p − 3)(p − 4) is positive only between the roots, a 1-unit window of the 100-unit range: no profit 99%.",
  traps: "(B) \\(\\tfrac{1}{100}\\) is the probability of a profit.",
  take: "Continuous \"random value\" probability = favourable length ÷ total length."
},
"quant-700-words#26": {
  fast: "Days whose only prime factors are 2 and 5, with \\(\\tfrac{1}{16} = 0.0625\\) still fitting: 9 days.",
  traps: "(C) \\(\\tfrac{4}{15}\\) forgets day 1 (0 decimal places) or day 16.",
  take: "A reduced fraction terminates iff its denominator has only 2s and 5s; count decimal places from the larger power."
},
"quant-700-words#27": {
  fast: "Each removal shrinks one dimension by 1; the final block is 7 × 8 × 8 = 448, so 1000 − 448 = 552 were removed.",
  traps: "(D) 722 counts 100 for every layer.",
  take: "Removing a layer from a face shrinks the block; count what remains instead of the pieces."
},
"quant-700-words#28": {
  fast: "Subtract the two conditions: 3r = 90, so r = 30 and b = 1; then p(4) = 120 − 80 + 1 = 41.",
  traps: "(B) 26 copies p(5); (C) 39 and (E) 45 come from slips in r or b. The parabola is symmetric about t = 3, so p(4) = p(2), not p(5).",
  take: "A parabola through two points with equal values is symmetric about their midpoint."
},
"quant-700-words#29": {
  fast: "Only 16 is a perfect square among the choices; 2 · 16 + 17 = 49 is one too.",
  traps: "(E) 18 tempts as 2 · 18 + 17 = 53 looks close to 49.",
  take: "Square-root word problems: expect perfect squares and test the choices."
},
"quant-700-words#30": {
  fast: "Try n = 15: $12/dozen vs 18 donuts at $10/dozen — a $2 drop.",
  traps: "(B) 21 and others: the question asks for the final count, n + 3.",
  take: "\"Per dozen\" prices scale the unit price by 12; set up the difference equation."
},
"quant-700-words#31": {
  fast: "Gap shrinks by 1 per year: +1 now, 0 next year, −2 in three years.",
  traps: "(B) 2 gives the size but not the sign; the boy is younger by then.",
  take: "Two people age twice as fast as one; track the gap's rate of change."
},
"quant-700-words#32": {
  fast: "Let C = 5: x = 3, T = 13. Check: 2 vs 10 (one fifth), 8 vs 16 (double).",
  traps: "(D) 3 : 7 comes from an arithmetic slip when eliminating x.",
  take: "Three unknowns, two equations, one ratio asked: the ratio is still determined."
},
"quant-700-words#33": {
  fast: "A fourth power is never negative, so the minimum comes from making \\((7.5 - x)^{4}\\) zero: x = 7.5.",
  traps: "(A) −7.5 flips the sign; (7.5 − x) is zero at +7.5.",
  take: "An even power of a linear expression is minimised where that expression is zero."
},
"quant-700-algebra#1": {
  fast: "The common difference is \\(5^{13} - 5^{12} = 4\\cdot 5^{12}\\), and A sits six steps below G, so \\(A = (1 - 24)\\cdot 5^{12} = -23\\cdot 5^{12}\\).",
  traps: "(A) \\(-24(5^{12})\\) forgets to add back G itself.",
  take: "Factor powers before subtracting: \\(5^{13} - 5^{12} = 5^{12}(5 - 1)\\)."
},
"quant-700-algebra#2": {
  fast: "Plug x = 0: the product is (1 + 1 + 1)(1 + 1 + 1 + 1) = 12, and only \\(12^{5x+1}\\) equals 12 there.",
  traps: "(B) multiplies exponents as if the sums were products.",
  take: "\\(n\\) copies of \\(a^{k}\\) sum to \\(a^{k + 1}\\) only when \\(n = a\\)."
},
"quant-700-algebra#3": {
  fast: "\\(12 = 2^{2}\\cdot 3\\) adds 2 to the hundreds digit and 1 to the tens digit, so x − y = 200 + 10 = 210.",
  traps: "(A) 21 drops the place values.",
  take: "Unique prime factorisation lets you equate exponents of each prime."
},
"quant-700-algebra#4": {
  fast: "The powers of 2 cancel on their own; collect the exponents of 3 to get 2x + 18 = 0, so x = −9.",
  traps: "(E) 9 drops the sign.",
  take: "A product equal to 1 means every prime's total exponent is 0."
},
"quant-700-algebra#5": {
  fast: "Match exponents base by base: 2x + 1 = 3x gives x = 1 and 2y − 1 = 3y gives y = −1, so the sum is 0.",
  traps: "(D) 1 reports x only.",
  take: "With different prime bases, each base's exponents must match separately."
},
"quant-700-algebra#6": {
  fast: "\\(4^{2x}\\) is the square root of \\(4^{4x} = 1600\\), that is 40; then \\(4^{2x - 2} = \\tfrac{40}{16} = \\tfrac{5}{2}\\) without finding x.",
  traps: "(A) 40 forgets the −2 in the exponent.",
  take: "Rewrite the target as a power of the given base before substituting."
},
"quant-700-algebra#7": {
  fast: "Factor the numerator as \\(15^{x}(1 + 15) = 16\\cdot 15^{x}\\); since \\(16 = 4^{2}\\), the powers of 4 force y = 2 and then x = y = 2.",
  traps: "(E) assumes two unknowns need two equations; prime bases give two conditions from one.",
  take: "Factor the common power first; then match each prime base."
},
"quant-700-algebra#8": {
  fast: "Three copies of \\(3^{m}\\) multiply to \\(3^{3m}\\), and \\(9^{n} = 3^{2n}\\); so 3m = 2n and the ratio m/n is \\(\\tfrac{2}{3}\\).",
  traps: "(D) \\(\\tfrac{3}{2}\\) inverts the ratio.",
  take: "Same base: equate exponents, then read the ratio in the right order."
},
"quant-700-algebra#9": {
  fast: "Treat xy as one unknown u: \\(u^{2} + 3u - 18 = 0\\) gives u = 3 for positive values, so x = 3/y and \\(x^{2} = \\tfrac{9}{y^{2}}\\).",
  traps: "(B) \\(\\tfrac{18}{y^{2}}\\) squares nothing: it uses \\(xy = \\sqrt{18}\\) from dropping the 3xy term.",
  take: "Substitute for a repeated product to reveal a quadratic."
},
"quant-700-algebra#10": {
  fast: "Squaring gives \\(y^{2} - 3y - 4 = 0\\) with roots 4 and −1; a square root is never negative, so only 4 survives.",
  traps: "(A) −4 multiplies both roots, including the extraneous one.",
  take: "Squaring an equation can add false roots; check each against the original."
},
"quant-700-algebra#11": {
  fast: "\\(a^{6} - b^{6} = (a^{3} - b^{3})(a^{3} + b^{3}) = (a^{3} - b^{3})\\cdot 8 = 14\\), so \\(a^{3} - b^{3} = \\tfrac{14}{8} = \\tfrac{7}{4}\\) without ever finding a or b.",
  traps: "(C) \\(\\tfrac{5}{4}\\) subtracts instead of dividing.",
  take: "Look for \\(p^{2} - q^{2} = (p - q)(p + q)\\) with \\(p = a^{3}\\)."
},
"quant-700-algebra#12": {
  fast: "x = 2, y = 1: original 3; reciprocals \\(\\frac{\\tfrac{1}{2} + 1}{\\tfrac{1}{2} - 1} = -3\\).",
  traps: "(C) misses that the denominator flips sign.",
  take: "Plug numbers when the algebra invites sign slips."
},
"quant-700-algebra#13": {
  fast: "Factor the left side as \\((3x^{2} - 2y^{2})(3x^{2} + 2y^{2})\\) and cancel the non-zero right side, leaving \\(3x^{2} - 2y^{2} = 1\\).",
  traps: "(D) \\(2y^{2}\\) and (E) \\(\\tfrac{6y^{2}}{3}\\) (the same thing) come from dropping the 1.",
  take: "When one side factors and contains the other side, cancel and solve the remaining linear piece."
},
"quant-700-algebra#14": {
  fast: "x = z/4 and y = 2z make the sum 13z/4 = 26, so z = 8, y = 16, and y + z = 24 is its own largest factor.",
  traps: "(C) 12 gives the largest proper factor; the question does not say proper.",
  take: "Every positive integer is its own largest factor."
},
"quant-700-algebra#15": {
  fast: "Conjugate gives denominator 1: \\(6 - 3\\sqrt{3} \\approx 0.80\\), and 3/(3.73) ≈ 0.80.",
  traps: "(D) divides by 7 as if the denominator were 4 + 3.",
  take: "\\((a + \\sqrt{b})(a - \\sqrt{b}) = a^{2} - b\\), not \\(a^{2} + b\\)."
},
"quant-700-algebra#16": {
  fast: "The 2s already match \\((2^{-36}\\) on each side), so m only has to match the 35 fives inside \\(10^{35}\\): m = 35.",
  traps: "(E) 36 matches the power of 2 instead of 5.",
  take: "Split \\(10^{n}\\) into \\(2^{n}5^{n}\\) and compare prime by prime."
},
"quant-700-algebra#17": {
  fast: "\\(4^{11} = 2^{22}\\); pairing 21 of those twos with the 21 fives makes \\(10^{21}\\), and the leftover 2 is the factor in front: n = 21.",
  traps: "(C) 22 uses the count of twos, ignoring that only 21 fives are available.",
  take: "A power of 10 needs matched pairs of 2 and 5; the smaller exponent decides."
},
"quant-700-algebra#18": {
  fast: "\\(3^{11}\\) is about \\(1.8 \\times 10^{5}\\), negligible next to \\(5^{28}\\) (about \\(3.7 \\times 10^{19}\\)), so the sum is essentially \\(5^{28}\\) and q ≈ 28.",
  traps: "(E) 39 adds the exponents as if the terms were multiplied.",
  take: "Adding a much smaller power does not change the exponent of the larger one."
},
"quant-700-algebra#19": {
  fast: "Both sides simplify: \\(1/(\\sqrt{x} - \\sqrt{y}) = 2/(\\sqrt{x} + \\sqrt{y})\\), so \\(\\sqrt{x} + \\sqrt{y} = 2\\sqrt{x} - 2\\sqrt{y}\\), hence \\(\\sqrt{x} = 3\\sqrt{y}\\) and x/y = 9.",
  traps: "(D) 3 is the ratio of the square roots.",
  take: "Recognise perfect-square and difference-of-squares patterns in \\(\\sqrt{x}\\) and \\(\\sqrt{y}\\)."
},
"quant-700-algebra#20": {
  fast: "The quotient simplifies to \\((2x - 3y)(4x^{2} + 9y^{2})\\), so 2x − 3y = 3; adding 4x + 3y = 9 gives 6x = 12, x = 2.",
  traps: "(B) 1.5 solves 2x − 3y = 3 with y = 0 and ignores the second equation.",
  take: "Factor \\(a^{4} - b^{4}\\) twice; the quadratic factor cancels against the right side."
},
"quant-700-algebra#21": {
  fast: "Even-power terms and the constant cancel in f(b) − f(−b); only the odd term ax survives, giving 2ab.",
  traps: "(C) is f(b) + f(−b) without the constant handled; (E) is 2ab plus the cancelled terms.",
  take: "f(x) − f(−x) keeps twice the odd part of f."
},
"quant-700-algebra#22": {
  fast: "\\(p^{2} + q^{2} - 2pq\\) is \\((p - q)^{2}\\), which equals \\(p^{2}\\) for every p only when q = 0; any other q fails at p = 1.",
  traps: "(E) 2 works only for p = 1, not for all p.",
  take: "\"For all values\" means the identity must hold symbolically, not for one test number."
},
"quant-700-algebra#23": {
  fast: "Factor a − b as \\((\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b})\\) and cancel the non-zero \\(\\sqrt{a} - \\sqrt{b}\\): \\(\\sqrt{a} + \\sqrt{b} = 1\\), so a = \\((1 - \\sqrt{b})^{2}\\).",
  traps: "(D) squares \\(1 + \\sqrt{b}\\) instead of \\(1 - \\sqrt{b}\\).",
  take: "Factor the difference of squares in the square roots, then square carefully."
},
"quant-700-algebra#24": {
  fast: "Test x = 1: \\(f(5)\\cdot f(\\tfrac{1}{5}) = 1 \\times 15{,}625 = 125^{2} = (f(1))^{2}\\), while \\(f(1^{2}) = 125\\) and \\((f(1))^{3} = 125^{3}\\) do not match.",
  traps: "(B) \\(f(x^{2}) = \\tfrac{125}{x^{6}}\\) lacks the second factor of 125.",
  take: "Compute each piece with the definition; then compare with the candidates at a test value."
},
"quant-700-algebra#25": {
  fast: "The numerator is 3ab(ab + 6)(ab − 3), so ab = 3 or −6; then check each b for an integer a other than 1 or −2.",
  traps: "(C) accepts b = 3 without checking that a = 1 and a = −2 are excluded.",
  take: "A zero fraction needs a zero numerator and a non-zero denominator."
},
"quant-700-algebra#26": {
  fast: "The integers are x − 1 and x; test x = 2: \\(1 + \\tfrac{1}{2} = \\tfrac{3}{2}\\), and only \\(\\frac{2x - 1}{x^{2} - x}\\) returns \\(\\tfrac{3}{2}\\).",
  traps: "(B) uses x and x + 1, making x the smaller integer.",
  take: "\"Greater integer x\" means the pair is x − 1 and x."
},
"quant-700-algebra#27": {
  fast: "With \\(p = \\sqrt{3x}\\) and \\(q = \\sqrt{2y + 2z}\\): \\(p^{2} - q^{2} = 32\\) and p − q = 4 give p + q = 8, so p = 6, q = 2 and x + y + z = 14.",
  traps: "(D) 12 stops at x.",
  take: "Substitute for the square roots to turn the pair into a difference of squares."
},
"quant-700-algebra#28": {
  fast: "From #−7# = 3 the odd part gives 343a + 7b = −4, so #7# = (343a + 7b) − 1 = −5; the constant −1 never flips sign.",
  traps: "(B) −3 negates the whole value, including the constant.",
  take: "Separate the odd part (changes sign) from the constant (does not)."
},
"quant-700-algebra#29": {
  fast: "Vieta: b = −(sum of roots) = −(6 − 3) = −3 and c = product of roots = −18, so b + c = −21 without expanding.",
  traps: "(A) −15 uses b = +3.",
  take: "Vieta: for \\(x^{2} + bx + c\\), roots sum to −b and multiply to c."
},
"di-700-ds-stats#1": {
  steps: "The five known members sum to 60, so \\(M = \\dfrac{60 + Z}{6}\\), and after multiplying, the mean is \\(NM\\): the percent increase is \\((N - 1) \\times 100\\%\\) as long as \\(M > 0\\).\n(1) \\(Z = 60\\) gives \\(M = 20\\) but says nothing about \\(N\\). Not sufficient.\n(2) \\(N = Z/M = \\dfrac{6Z}{60 + Z}\\) still depends on \\(Z\\). Not sufficient.\nTogether: \\(N = 60/20 = 3\\), so the mean triples — a 200% increase. Sufficient.\nAnswer: C.",
  take: "Scaling every member scales the mean; the question is really \"what is N?\""
},
"di-700-ds-stats#2": {
  steps: "Three consecutive positive integers below 5: \\(\\{1, 2, 3\\}\\) or \\(\\{2, 3, 4\\}\\).\n(1) The product of any three consecutive integers is a multiple of 6 — both triples qualify. Not sufficient.\n(2) Both triples contain exactly two primes (2 and 3). Not sufficient.\nTogether nothing changes: the mean could be \\(18/5\\) or \\(21/5\\).\nAnswer: E.",
  take: "When a statement is true of every candidate, it eliminates nothing — a classic C-trap where even both together fail."
},
"di-700-ds-stats#3": {
  steps: "(1) Gives the men's average but not where the overall average falls, so the ratio of men to women is unknown. Not sufficient.\n(2) The overall average is twice as close to the men's average as to the women's, so the distances are in ratio 1 : 2 and the counts are in the inverse ratio: men : women \\(= 2 : 1\\). Women are \\(\\tfrac{1}{3}\\), about 33%. Sufficient.\nAnswer: B.",
  take: "In a weighted average, distance from each group's mean is inversely proportional to that group's size — no actual weights needed."
},
"di-700-ds-stats#4": {
  steps: "Last year's total was 80.\n(1) A 50% rise for three people and a 50% fall for two depends on who had how many days: (30, 30, 10, 5, 5) and (10, 10, 10, 25, 25) give different totals. Not sufficient.\n(2) The total changes by \\(3 \\times 10 - 2 \\times 5 = +20\\) regardless of the individual figures, so this year's average is \\(100/5 = 20\\). Sufficient.\nAnswer: B.",
  take: "Additive changes to members shift the mean by their average; percent changes need the individual values."
},
"di-700-ds-stats#5": {
  steps: "(1) Men : women \\(= 2 : 1\\), so the average is \\(\\dfrac{2 \\times 150 + 120}{3} = 140\\). Sufficient.\n(2) The total headcount says nothing about the split. Not sufficient.\nAnswer: A.",
  take: "For a combined average, the ratio of group sizes is enough; the absolute total is irrelevant."
},
"di-700-ds-stats#6": {
  steps: "Let Sarah's age be \\(s\\); the mean is \\(\\dfrac{42 + s}{7}\\).\n(1) If \\(s = 7\\): order 13, 10, 8, 7 — fourth oldest is 7, mean is 7. Works. If \\(s \\ge 8\\) the fourth oldest is 8, and \\(\\dfrac{42 + s}{7} = 8\\) gives \\(s = 14\\), which also works (order 14, 13, 10, 8). If \\(s \\le 5\\) the fourth oldest is 5, requiring \\(s = -7\\). So \\(s = 7\\) or \\(14\\). Not sufficient.\n(2) Alone, any age under 13 is possible. Not sufficient.\nTogether: \\(s = 14\\) would make Sarah the oldest, so \\(s = 7\\). Sufficient.\nAnswer: C.",
  take: "Test the cases the statement allows; a \"fourth oldest\" clause changes meaning as the unknown moves through the list."
},
"di-700-ds-stats#7": {
  steps: "The overall average sits between the two group averages, at distances inversely proportional to the group sizes.\n(1) Gives only the managers' distance, $5,000. (2) Gives only the directors' distance, $15,000. Neither alone fixes the ratio.\nTogether: directors : managers \\(= 5{,}000 : 15{,}000 = 1 : 3\\), so directors are 25%. Sufficient.\nAnswer: C.",
  take: "Weighted-average distances: the group nearer the overall mean is the larger group, in inverse proportion."
},
"di-700-ds-stats#8": {
  steps: "(1) The $400,000 figure is an unweighted average of ten branch averages; branches with more customers should count more, and their sizes are unknown, so the total cannot be recovered. Not sufficient.\n(2) Ten branches averaging $160 million each hold \\(10 \\times 160 = \\$1{,}600\\) million in total. Sufficient.\nAnswer: B.",
  take: "An average of averages recovers a total only when the groups are the same size — a favourite trap."
},
"di-700-ds-stats#9": {
  steps: "(1) Combined average \\(= \\dfrac{2 \\times 30 + 5 \\times 17 + 3 \\times 25}{10} = \\dfrac{60 + 85 + 75}{10} = 22\\), which is not greater than 22 — a definite NO. Sufficient.\n(2) \"At least 220 runs\" with an unknown number of players gives no average. Not sufficient.\nAnswer: A.",
  take: "A definite NO is sufficient; and a ratio of group sizes is all a weighted average needs."
},
"di-700-ds-stats#10": {
  steps: "The new average is \\(\\dfrac{xy + z}{x + 1}\\). It equals \\(1.5y\\) exactly when \\(xy + z = 1.5xy + 1.5y\\), i.e. \\(2z = xy + 3y\\), i.e. \\(2z - 3y = xy\\).\n(2) states precisely that condition, so the answer is a definite YES. Sufficient.\n(1) relates \\(x\\) and \\(y\\) only and says nothing about \\(z\\). Not sufficient.\nAnswer: B.",
  take: "Rephrase a yes/no question into an equation before reading the statements; one of them may be the equation in disguise."
},
"di-700-ds-stats#11": {
  steps: "Jodie's yearly average is her total divided by 12, and usage is never negative.\n(1) Eight months total \\(8 \\times 1.5q = 12q\\); the other four could add nothing, giving a yearly average of exactly \\(q\\), or more. Not sufficient.\n(2) Nine months total \\(13.5q\\), so the yearly average is at least \\(13.5q / 12 = 1.125q > q\\): Jodie's is greater. Sufficient.\nAnswer: B.",
  take: "Non-negative quantities turn a partial total into a bound — check whether the bound already answers the question."
},
"di-700-ds-stats#12": {
  steps: "The balance is $600 until the payment and $300 after; the average depends only on the payment day.\n(1) 20 days at 600 and 10 at 300: average \\(= (12{,}000 + 3{,}000)/30 = 500\\). Sufficient.\n(2) \\(25 \\times 540 = 13{,}500 = 600k + 300(25 - k)\\) gives \\(300k = 6{,}000\\), \\(k = 20\\): the payment landed on day 21, and the average is again 500. Sufficient.\nAnswer: D.",
  take: "Find the single unknown the answer depends on; a statement that fixes it is sufficient however indirectly."
},
"di-700-ds-stats#13": {
  steps: "(1) alone and (2) alone give one relation between two unknown prices. Not sufficient.\nTogether the prices are fixed: \\(D + C = 0.70\\) and \\(2D = 3C - 0.10\\) give \\(C = 0.30\\), \\(D = 0.40\\). But \\(0.40d + 0.30c = 6.00\\), i.e. \\(4d + 3c = 60\\), has several solutions (\\(d = 12, c = 4\\); \\(d = 9, c = 8\\); \\(d = 6, c = 12\\); \\(d = 3, c = 16\\)). Not sufficient.\nAnswer: E.",
  take: "Knowing unit prices is not knowing quantities; check whether the total equation has more than one integer solution."
},
"di-700-ds-stats#14": {
  steps: "(1) \\(x = 11\\) gives 11, 12, 13, average 12. Sufficient.\n(2) \\(y\\) and \\(z\\) average 12.5, so they are 12 and 13, and \\(x = 11\\): average 12. Sufficient.\nAnswer: D.",
  take: "In a set of consecutive integers, any one anchor determines the whole set."
},
"di-700-ds-stats#15": {
  steps: "(1) \\(N^{6}\\) even means \\(N\\) even; the only even prime is 2. Sorted: \\(-9, -8, 2, 4, 15\\), median 2. Sufficient.\n(2) \\(N < 3\\): \\(N = 2\\) gives median 2, but \\(N = -10\\) gives \\(-10, -9, -8, 4, 15\\), median −8. Not sufficient.\nAnswer: A.",
  take: "\"Prime and even\" pins a number to 2; an inequality alone rarely pins a median."
},
"di-700-ds-stats#16": {
  steps: "Try \\(B = \\{5, 6, 7\\}\\), \\(C = \\{1, 1, 30\\}\\): \\(A = \\{1, 1, 5, 6, 7, 30\\}\\), median 5.5, mean about 8.3. (1) holds (8.3 > 6), (2) holds (5.5 > 1), and the median of B (6) is greater — YES.\nTry \\(B = \\{5, 5, 5\\}\\), \\(C = \\{1, 1, 1, 1, 100, 100\\}\\): \\(A\\) has median 5 and mean about 24. (1) holds, (2) holds, and the median of B (5) is not greater — NO.\nBoth statements together allow both answers.\nAnswer: E.",
  take: "Statements about means say little about medians; when in doubt, construct lopsided sets."
},
"di-700-ds-stats#17": {
  steps: "(1) The sum is 26, mean \\(26/6 \\approx 4.33\\). Possible pairs (1, 6), (2, 5), (3, 4) give sorted sets with medians 5.5, 5 and 4.5 — all above 4.33. Definite NO. Sufficient.\n(2) \\(x = 4, y = 1\\): mean 4, median 4.5 — NO. \\(x = 100, y = 97\\): mean far above the median — YES. Not sufficient.\nAnswer: A.",
  take: "A statement that fixes the sum fixes the mean; then check whether every arrangement gives the same comparison."
},
"di-700-ds-stats#18": {
  steps: "Median \\(= \\dfrac{c + d}{2}\\); mean \\(= \\dfrac{(a + e) + (b + f) + (c + d)}{6}\\).\nTogether: sum \\(= (c + d)\\left(\\tfrac{3}{4} + \\tfrac{4}{3} + 1\\right) = \\tfrac{37}{12}(c + d)\\), so mean \\(= \\tfrac{37}{72}(c + d) > \\tfrac{36}{72}(c + d) = \\) median. Definite NO. Sufficient.\nEach statement alone leaves one pair free: with (1) only, \\(b + f\\) can be tiny or huge relative to \\(c + d\\), so the comparison flips; likewise with (2) only.\nAnswer: C.",
  take: "Write mean and median over a common quantity; a fraction comparison then settles a yes/no question."
},
"di-700-ds-stats#19": {
  steps: "The three scores sum to 234.\n(1) The other two sum to 161: (80, 81) gives median 80; (78, 83) gives median 78. Not sufficient.\n(2) The other two sum to 156, so one is at most 78 and the other at least 78; 78 is the middle value. Median 78. Sufficient.\nAnswer: B.",
  take: "A member equal to the mean of three numbers is automatically the median."
},
"di-700-ds-stats#20": {
  steps: "The median is the third of five values: it equals 1 if \\(n \\le 1\\), \\(n\\) if \\(1 \\le n \\le 5\\), and 5 if \\(n \\ge 5\\).\n(1) Median < 5 means \\(n < 5\\): \\(n = 3\\) (YES) or \\(n = -3\\) (NO). Not sufficient.\n(2) Median > 1 means \\(n > 1\\): \\(n = 3\\) (YES) or \\(n = 100\\) (NO). Not sufficient.\nTogether \\(1 < n < 5\\), so \\(0 < n < 7\\). Sufficient.\nAnswer: C.",
  take: "Turn each statement about the median into a condition on the unknown before combining."
},
"di-700-ds-stats#21": {
  steps: "Let the medians be \\(m\\) (S) and \\(k\\) (T); the sums are \\(5m\\) and \\(7k\\).\n(1) \\(m = 0\\), \\(k\\) unknown. Not sufficient.\n(2) \\(5m = 7k\\): \\(m = 7, k = 5\\) (NO) or \\(m = k = 0\\) (YES). Not sufficient.\nTogether \\(m = 0\\) forces \\(k = 0\\): equal. Sufficient.\nAnswer: C.",
  take: "5m = 7k has the solution m = k = 0 as well as m = 7, k = 5 — check the zero case."
},
"di-700-ds-stats#22": {
  steps: "(1) \\(\\{x, x, x + 1\\}\\) has median \\(x\\) (difference 0); \\(\\{x, x, x + 1, x + 2\\}\\) has median \\(x + 0.5\\). Not sufficient.\n(2) \\(\\{x, x, x\\}\\) gives 0; \\(\\{0, 0, 3, 4, 5, 6\\}\\) has mode 0, mean 3, median 3.5 — difference 3.5. Not sufficient.\nTogether: all values lie within 2 of each other, the mode is \\(x\\), and the mean is \\(x\\), so the values above \\(x\\) exactly balance those below it. Any value more than one step from \\(x\\) needs a matching value on the other side, and \\(x\\) itself is the most frequent value; that leaves \\(x\\) in the middle of the sorted list, so the median is \\(x\\) and the difference is 0. Sufficient.\nAnswer: C.",
  take: "When the mode is also the mean and the spread is tiny, the distribution is balanced around the mode."
},
"di-700-ds-stats#23": {
  steps: "(1) Nine possible ages, but with enough schools every (age, school) pair could be distinct. Not sufficient.\n(2) Ten schools, ages unrestricted. Not sufficient.\nTogether: \\(9 \\times 10 = 90\\) possible age–school combinations for 100 people, so two people must share one. Definite YES. Sufficient.\nAnswer: C.",
  take: "The pigeonhole principle: more people than combinations forces a repeat."
},
"di-700-ds-stats#24": {
  steps: "The median of A is 50; the range of B needs B's largest member.\n(1) All primes: the ten primes could end at 29 or at 1,000,003. Not sufficient.\n(2) \"Exactly two factors\" is the definition of a prime — the same information as (1). Not sufficient, together or apart.\nAnswer: E.",
  take: "Two statements that restate each other can never combine into more than either one alone."
},
"di-700-ds-stats#25": {
  steps: "(1) Smallest 5 means every member is an odd prime, so the range (odd − odd) is even and \\(xy\\) is even. Definite YES. Sufficient.\n(2) \\(\\{2, 3, 5, 7, 11, 13, 17, 101\\}\\): range 99, median \\((7 + 11)/2 = 9\\), product odd — NO. \\(\\{3, 5, 7, 11, 13, 17, 19, 101\\}\\): range 98 — YES. Not sufficient.\nAnswer: A.",
  take: "Parity of a range of primes hinges on whether 2 is present."
},
"di-700-ds-stats#26": {
  steps: "(1) \\(x = y = 15\\) keeps the range at 8 with \\(x + y = 30\\) (NO); \\(x = y = 8\\) gives 16 (YES). Not sufficient.\n(2) \\(\\dfrac{x + y}{2} < \\dfrac{36 + x + y}{6}\\) gives \\(3(x + y) < 36 + (x + y)\\), i.e. \\(x + y < 18\\). Definite YES. Sufficient.\nAnswer: B.",
  take: "A comparison of averages is an inequality in disguise — clear the denominators and read it off."
},
"di-700-ds-stats#27": {
  steps: "(1) The range is 3 or 7 (primes below 11 that do not divide 10), and the set size is unknown, so the sum is unknown. Not sufficient.\n(2) Five different integers, but no value for the mean. Not sufficient.\nTogether: five different positive integers cannot fit in a span of 3 (that needs a range of at least 4), so the range is 7, the mean is 7, and the sum is \\(5 \\times 7 = 35\\). Sufficient.\nAnswer: C.",
  take: "Distinct integers need range ≥ (count − 1); that hidden constraint is what makes the combination work."
},
"di-700-ds-stats#28": {
  steps: "Consecutive evens are evenly spaced, so the median equals the mean: it is even when the count is odd (a member) and odd when the count is even (halfway between two members).\n(1) Mean even, so the median is even. Definite NO. Sufficient.\n(2) Range \\(= 2(n - 1)\\) divisible by 6 means \\(n - 1\\) is a multiple of 3: \\(n = 4\\) (median odd) or \\(n = 7\\) (median even). Not sufficient.\nAnswer: A.",
  take: "Evenly spaced sets: median = mean, so a statement about one is a statement about the other."
},
"di-700-ds-stats#29": {
  steps: "(1) Adams could be 40, 79, 79, 79, 80 (median 79) against Brown 50, 51, 52, 53, 90 (median 52) — YES; or Adams 40, 41, 42, 43, 80 against Brown 50, 89, 89, 89, 90 — NO. Not sufficient.\n(2) Sort both classes. If the third-highest Adams score were at least the third-highest Brown score, the top three Adams students would need three distinct Brown partners above them, but at most two Brown scores exceed that level — impossible. So Brown's median beats Adams' median. Definite NO. Sufficient.\nAnswer: B.",
  take: "A perfect matching where one side always wins forces that side to win at every rank, including the median."
},
"di-700-ds-stats#30": {
  steps: "(1) Mean \\(= \\dfrac{1 + x}{2} = 11\\) gives \\(x = 21\\); the median is also 11. Sufficient.\n(2) Range \\(x - 1 = 20\\) gives \\(x = 21\\), median 11. Sufficient.\nAnswer: D.",
  take: "For 1 to x, mean, median and range are all simple functions of x — any one of them fixes the rest."
},
"di-700-ds-stats#31": {
  steps: "The range depends on whether any of \\(p, q, r\\) falls below 5 or above 29.\n(1) Bounds \\(p\\) below but \\(q\\) can be 12 or 1,000. Not sufficient.\n(2) Bounds \\(r\\) above but says nothing about \\(q\\). Not sufficient.\nTogether \\(q\\) is still unbounded above. Not sufficient.\nAnswer: E.",
  take: "For a range you need both extremes pinned; one uncapped variable is enough to sink both statements."
},
"di-700-ds-stats#32": {
  steps: "10, 15, 20 are evenly spaced 5 apart. The standard deviation of \\(X, Y, Z\\) matches only if their gaps have the same shape.\n(1) \\(Z - X = 10\\) but \\(Y\\) could be anywhere between (or outside). Not sufficient.\n(2) \\(Z - Y = 5\\) with \\(X\\) free. Not sufficient.\nTogether \\(Y - X = 5\\) and \\(Z - Y = 5\\): the set is \\(X, X + 5, X + 10\\), a shift of 10, 15, 20, so the SDs are equal. Definite YES. Sufficient.\nAnswer: C.",
  take: "SD depends on the differences between members, so two gap statements can settle it without any values."
},
"di-700-ds-ineq#1": {
  steps: "(1) \\(-7 < x < 1\\) — \\(x\\) could be \\(-1\\) or \\(\\tfrac12\\). Not sufficient.\n(2) \\(-1 < x < 7\\). Not sufficient.\nTogether \\(-1 < x < 1\\), still either sign. Not sufficient.\nAnswer: E.",
  take: "|x − a| < k is the open interval (a − k, a + k); intersect intervals before judging."
},
"di-700-ds-ineq#2": {
  steps: "(1) \\(n - x > 4\\) says nothing about the sum: \\(x = 0, n = 5\\) (sum 5) or \\(x = -10, n = -5\\) (sum −15). Not sufficient.\n(2) Divide by −2 and flip: \\(x < -n\\), i.e. \\(x + n < 0\\). Definite YES. Sufficient.\nAnswer: B.",
  take: "A statement about a difference cannot settle a sum; look for the one that rearranges into the target."
},
"di-700-ds-ineq#3": {
  steps: "(2) rearranges to \\(b^{2}(a - c) > b - d\\). Alone, the right side can be negative, so \\(a - c\\) could be either sign. Not sufficient. (1) alone involves neither \\(a\\) nor \\(c\\). Not sufficient.\nTogether \\(b - d > 0\\), so \\(b^{2}(a - c) > 0\\); \\(b^{2}\\) is positive, hence \\(a > c\\). Sufficient.\nAnswer: C.",
  take: "Group the terms of a messy inequality around the quantity asked about; the other statement then supplies the missing sign."
},
"di-700-ds-ineq#4": {
  steps: "(1) \\(-2x > 10\\), so \\(x < -5\\). Not sufficient.\n(2) \\(-11x < 77\\), so \\(x > -7\\). Not sufficient.\nTogether \\(-7 < x < -5\\) with \\(x\\) an integer: \\(x = -6\\). Sufficient.\nAnswer: C.",
  take: "Two strict bounds two units apart leave exactly one integer."
},
"di-700-ds-ineq#5": {
  steps: "The stem gives \\(2x > 4\\), so \\(x \\ge 3\\).\n(1) \\(-5x > -19\\), so \\(x < 3.8\\): \\(x = 3\\). Sufficient.\n(2) Left part: \\(3 - 2x < -x + 4\\) gives \\(x > -1\\). Right part: \\(-x + 4 < 7.2 - 2x\\) gives \\(x < 3.2\\). With \\(x \\ge 3\\): \\(x = 3\\). Sufficient.\nAnswer: D.",
  take: "Read the stem's own inequality first — it often does half the work of each statement."
},
"di-700-ds-ineq#6": {
  steps: "Each statement alone leaves the other pair free, so neither is sufficient.\nTogether: \\(a > c\\) and \\(b > d\\) add to \\(a + b > c + d\\). Sufficient.\nAnswer: C.",
  take: "You may add inequalities pointing the same way; you may never subtract them."
},
"di-700-ds-ineq#7": {
  steps: "\\(\\sqrt{xy} = xy\\) forces \\(xy = 0\\) or \\(xy = 1\\).\n(1) \\(x = -\\tfrac12\\): \\(y = 0\\) (sum \\(-\\tfrac12\\)) or \\(y = -2\\) (sum \\(-\\tfrac52\\)). Not sufficient.\n(2) Rules out \\(y = 0\\) but leaves \\(x\\) free. Not sufficient.\nTogether \\(xy = 1\\) with \\(x = -\\tfrac12\\), so \\(y = -2\\) and \\(x + y = -\\tfrac52\\). Sufficient.\nAnswer: C.",
  take: "\\(\\sqrt{t} = t\\) has exactly two solutions, 0 and 1; keep both until a statement removes one."
},
"di-700-ds-ineq#8": {
  steps: "(1) \\(x = 2, y = 1\\) gives YES; \\(x = -2, y = 1\\) gives NO. Not sufficient.\n(2) \\(x = 4, y = 3\\) gives YES; \\(x = \\tfrac14, y = 1\\) gives NO. Not sufficient.\nTogether: \\(x = 4\\) allows \\(2 < y < 16\\) — \\(y = 3\\) (YES) or \\(y = 10\\) (NO). Not sufficient.\nAnswer: E.",
  take: "Squares and roots compare badly with the number itself across 0 to 1 versus above 1; test both zones."
},
"di-700-ds-ineq#9": {
  steps: "\\(x^{2}y - 6xy + 9y = y(x - 3)^{2} = 0\\), so \\(y = 0\\) or \\(x = 3\\).\n(1) \\(y = 0, x = -3\\) gives \\(xy = 0\\); \\(x = 3, y = 6\\) gives \\(xy = 18\\). Not sufficient.\n(2) \\(x < 0\\), so \\(x \\ne 3\\) and \\(y = 0\\): \\(xy = 0\\). Sufficient.\nAnswer: B.",
  take: "Never divide an equation by a variable; factor it and keep the zero case."
},
"di-700-ds-ineq#10": {
  steps: "(1) \\((x - 2)(x - 3) = 0\\): \\(x = 2\\) or 3. Not sufficient.\n(2) Alone, nothing. Together, both roots are positive, so \\(x\\) is still 2 or 3. Not sufficient.\nAnswer: E.",
  take: "A sign condition only helps when the two roots have different signs."
},
"di-700-ds-ineq#11": {
  steps: "(1) \\((x + 1)(x + 2) = 0\\): \\(x = -1\\) or \\(-2\\). Not sufficient.\n(2) Both roots are already negative, so combining changes nothing. Not sufficient.\nAnswer: E.",
  take: "Check the signs of both roots before assuming a sign statement will choose between them."
},
"di-700-ds-ineq#12": {
  steps: "(1) \\(a^{2} > 0\\), so \\(b^{3} > 0\\), i.e. \\(b > 0\\); the sign of \\(a\\) is hidden. Not sufficient.\n(2) \\(b^{4} > 0\\), so \\(a < 0\\); \\(b\\) unknown. Not sufficient.\nTogether \\(a < 0 < b\\), so \\(a/b < 0\\). Sufficient.\nAnswer: C.",
  take: "Each statement reveals one sign through an odd power; you need both signs for a quotient."
},
"di-700-ds-ineq#13": {
  steps: "Neither statement alone fixes the sign of \\(d\\).\nTogether: \\(e = -12 - d\\), so \\(-12 - 2d < -12\\), i.e. \\(d > 0\\). Definite NO. Sufficient.\nAnswer: C.",
  take: "An equation plus an inequality in the same two variables usually collapses to a bound on one of them."
},
"di-700-ds-ineq#14": {
  steps: "(1) \\(x = 2\\): \\(n = 1\\) gives 2, \\(n = -1\\) gives \\(\\tfrac12\\). Not sufficient.\n(2) \\(n = 1\\): \\(x = 2\\) gives 2, \\(x = \\tfrac12\\) gives \\(\\tfrac12\\). Not sufficient.\nTogether \\(x > 1\\) and \\(n \\ge 1\\), so \\(x^{n} \\ge x > 1\\). Definite NO. Sufficient.\nAnswer: C.",
  take: "Powers need both the base's size relative to 1 and the exponent's sign."
},
"di-700-ds-ineq#15": {
  steps: "(1) \\(\\tfrac14 \\cdot 4^{x} < 4^{x} - 120\\), so \\(\\tfrac34 \\cdot 4^{x} > 120\\) and \\(4^{x} > 160\\): \\(x \\ge 4\\). \\(x = 4\\) gives \\(3^{4} = 81\\) (YES) but \\(x = 6\\) gives 729 (NO). Not sufficient.\n(2) \\(x = \\pm 6\\): \\(3^{-6}\\) is tiny (YES), \\(3^{6} = 729\\) (NO). Not sufficient.\nTogether \\(x = 6\\), \\(3^{6} = 729\\). Definite NO. Sufficient.\nAnswer: C.",
  take: "Rewrite \\(4^{x-1}\\) as \\(\\tfrac{4^{x}}{4}\\) and treat \\(4^{x}\\) as the unknown."
},
"di-700-ds-ineq#16": {
  steps: "\\(x^{3} > 1\\) exactly when \\(x > 1\\).\n(1) \\(x > -2\\): \\(x = 0\\) (NO) or \\(x = 2\\) (YES). Not sufficient.\n(2) \\(2x - b + c < c - b + 2\\) simplifies to \\(2x < 2\\), i.e. \\(x < 1\\). Definite NO. Sufficient.\nAnswer: B.",
  take: "Extra variables that cancel are decoration; simplify before deciding a statement is useless."
},
"di-700-ds-ineq#17": {
  steps: "\\(2^{34} = 2^{4} \\times (2^{10})^{3} \\approx 16 \\times 10^{9} = 1.6 \\times 10^{10} > 10^{10}\\).\n(1) \\(x > 2^{34} > 10^{10}\\). Definite YES. Sufficient.\n(2) \\(2^{35}\\) is larger still. Sufficient.\nAnswer: D.",
  take: "Memorise \\(2^{10} = 1024 \\approx 10^{3}\\) to compare powers of 2 with powers of 10."
},
"di-700-ds-ineq#18": {
  steps: "Each statement alone allows either sign for the product.\nTogether: \\(X > Y - 2\\) and \\(X < 2Y - 6\\) give \\(Y - 2 < 2Y - 6\\), so \\(Y > 4\\); then \\(X > Y - 2 > 2\\). Both positive, so \\(XY > 0\\). Sufficient.\nAnswer: C.",
  take: "Sandwich one variable between two expressions of the other to extract a lower bound."
},
"di-700-ds-ineq#19": {
  steps: "(1) \\(y = x^{3}(x - 1)\\): \\(x = 2\\) gives \\(y = 8\\) (NO); \\(x = -1\\) gives \\(y = 2\\) (YES). Not sufficient.\n(2) \\(y^{2}(x^{2} - x - 12) > 0\\) means \\(x > 4\\) or \\(x < -3\\); \\(y\\) is free. Not sufficient.\nTogether: \\(x = 5\\) gives \\(y = 500 > 0\\) (NO); \\(x = -4\\) gives \\(y = (-64)(-5) = 320 > 0\\), so \\(xy < 0\\) (YES). Not sufficient.\nAnswer: E.",
  take: "Even after combining, test one value from each allowed zone."
},
"di-700-ds-ineq#20": {
  steps: "(1) says only \\(x \\ne 0\\). Not sufficient.\n(2) \\(x|y| \\le 0\\): either \\(x \\le 0\\), or \\(y = 0\\) with \\(x\\) anything. Not sufficient.\nTogether: \\(x \\ne 0\\) and (\\(x < 0\\) or \\(y = 0\\)); with \\(y = 0\\), \\(x = 5\\) is allowed. Not sufficient.\nAnswer: E.",
  take: "A product being non-positive includes the zero case — and a zero factor tells you nothing about the other."
},
"di-700-ds-ineq#21": {
  steps: "(1) \\(x = 3, y = 1\\): \\(3 > 1\\) YES; \\(x = 0, y = -1\\): \\(0 > 1\\) NO. Not sufficient.\n(2) \\(y = 1\\): \\(x = 3\\) YES, \\(x = 0\\) NO. Not sufficient.\nTogether \\(y > 0\\), so \\(|y| = y\\) and the question is \\(xy > y^{2}\\), i.e. \\(x > y\\) — which (1) gives. Definite YES. Sufficient.\nAnswer: C.",
  take: "With a sign known, absolute values disappear and the question becomes a plain inequality."
},
"di-700-ds-ineq#22": {
  steps: "(1) Any number between −2 and 2. Not sufficient.\n(2) If \\(x \\ge 0\\): \\(x = 3x - 2\\), \\(x = 1\\) ✓. If \\(x < 0\\): \\(-x = 3x - 2\\), \\(x = \\tfrac12\\), which is not negative — rejected. So \\(x = 1\\). Sufficient.\nAnswer: B.",
  take: "An absolute-value equation can have a single solution once the invalid case is thrown out."
},
"di-700-ds-ineq#23": {
  steps: "(1) \\(x = 4, y = 1\\) YES; \\(x = \\tfrac14, y = 0.4\\) (\\(\\sqrt{x} = 0.5\\)) NO. Not sufficient.\n(2) \\(x = 2, y = 1\\) YES; \\(x = 2, y = 3\\) (\\(x^{3} = 8 > 3\\)) NO. Not sufficient.\nTogether: for \\(x \\ge 1\\), \\(\\sqrt{x} \\le x\\), so \\(y < \\sqrt{x} \\le x\\); for \\(0 \\le x < 1\\), \\(x^{3} \\le x\\), so \\(y < x^{3} \\le x\\). Either way \\(x > y\\). Sufficient.\nAnswer: C.",
  take: "\\(\\sqrt{x}\\) and \\(x^{3}\\) straddle x: one is below x when x < 1, the other when x > 1 — together they cover both zones."
},
"di-700-ds-ineq#24": {
  steps: "(1) If \\(x > 0\\): \\(1 < x\\). If \\(x < 0\\): \\(-1 < x\\). So \\(x > 1\\) or \\(-1 < x < 0\\) — YES or NO. Not sufficient.\n(2) \\(x < 0\\). Not sufficient.\nTogether \\(-1 < x < 0\\), so \\(|x| < 1\\). Definite YES. Sufficient.\nAnswer: C.",
  take: "x/|x| is the sign of x; split on it and the statement becomes two plain inequalities."
},
"di-700-ds-ineq#25": {
  steps: "The stem says \\(\\tfrac{r + s}{2} > t\\): the average of \\(r\\) and \\(s\\) is above \\(t\\), so at least one of them is above \\(t\\).\n(1) \\(t > s\\): then \\(r > 2t - s > 2t - t = t\\). YES. Sufficient.\n(2) \\(r > s\\): \\(r\\) is the larger of the pair, and the larger of two numbers is at least their average, which exceeds \\(t\\). YES. Sufficient.\nAnswer: D.",
  take: "Read a + b > 2c as \"the average of a and b beats c\" — then the larger of a, b beats c too."
},
"di-700-ds-ineq#26": {
  steps: "(1) \\(a = -3, b = 2\\): \\(-6 < -5\\) YES. \\(a = -3, b = 0\\): \\(0 < -3\\) NO. Not sufficient.\n(2) \\(a = 3, b = 2\\): \\(6 < 1\\) NO. \\(a = -3, b = -2\\): \\(-6 < -1\\) YES. Not sufficient.\nTogether \\(a < 0\\) and \\(b \\le 0\\): \\(b = -2\\) gives YES, \\(b = 0\\) gives NO. Not sufficient.\nAnswer: E.",
  take: "ab ≥ 0 includes b = 0; zero is the case that breaks most sign arguments."
},
"di-700-ds-ineq#27": {
  steps: "(1) \\(pq < 0\\) with \\(p < q\\) means \\(p < 0 < q\\). Then \\(pqr < p\\) is equivalent (dividing by negative \\(p\\)) to \\(qr > 1\\), and \\(r\\) is unknown. Not sufficient.\n(2) Similarly \\(p < 0 < r\\) with \\(q\\) unknown. Not sufficient.\nTogether \\(q, r > 0\\) but \\(qr\\) could be \\(\\tfrac14\\) or 4. Not sufficient.\nAnswer: E.",
  take: "Dividing by a negative flips the inequality; the leftover condition qr > 1 is not settled by signs alone."
},
"di-700-ds-ineq#28": {
  steps: "(1) \\(y \\le -1\\) gives \\(|x| < 9/|y| \\le 9\\), so \\(|x| \\le 8\\): \\(x = 7\\) (NO) or \\(x = 0\\) (YES). Not sufficient.\n(2) \\(y = 0\\): the condition is always true and \\(x\\) is unrestricted. Not sufficient.\nTogether: no integer \\(y\\) is both negative and zero, so the statements cannot both hold — nothing is gained. Not sufficient.\nAnswer: E.",
  take: "|y| < 1 for an integer y means y = 0; a zero factor makes the whole inequality vacuous."
},
"di-700-ds-ineq#29": {
  steps: "(1) \\(n^{2} > 16\\) means \\(|n| > 4\\). Definite NO. Sufficient.\n(2) True for all \\(n < 0\\) (positive left side, negative right) and for \\(0 < n < 1\\): \\(n = -10\\) NO, \\(n = \\tfrac12\\) YES. Not sufficient.\nAnswer: A.",
  take: "\\(n^{2} > k^{2}\\) is |n| > k; and a statement satisfied by every negative number rarely bounds |n|."
},
"di-700-ds-ineq#30": {
  steps: "(1) \\(x = -3y\\): \\(3|y| + |y| = 32\\) gives \\(|y| = 8\\), so \\((x, y) = (-24, 8)\\) or \\((24, -8)\\); either way \\(xy = -192\\). Sufficient.\n(2) \\(|x| = 24, |y| = 8\\) but the signs are free: \\(xy = \\pm 192\\). Not sufficient.\nAnswer: A.",
  take: "A linear relation between x and y carries their relative sign; an absolute-value relation does not."
},
"di-700-ds-ineq#31": {
  steps: "(1) \\(y = 2 + 3|x^{2} - 4| \\ge 2\\), but \\(x\\) is unknown. Not sufficient.\n(2) \\(y = 14\\) or \\(y = -8\\). Not sufficient.\nTogether \\(y \\ge 2\\) rules out \\(-8\\): \\(y = 14\\). Sufficient.\nAnswer: C.",
  take: "A statement that only bounds a variable can still be the tiebreaker between two candidates."
},
"di-700-ds-ineq#32": {
  steps: "(1) The right side must be non-negative, so \\(x \\ge \\tfrac34 > 0\\). (Solving: \\(x + 3 = 4x - 3\\) gives \\(x = 2\\); the other case gives \\(x = 0\\), rejected since \\(4(0) - 3 < 0\\).) Definite YES. Sufficient.\n(2) \\(x - 3 = 2x - 3\\) gives \\(x = 0\\); \\(x - 3 = -(2x - 3)\\) gives \\(x = 2\\). Not sufficient.\nAnswer: A.",
  take: "|expression| = (something) forces that something to be non-negative — often that alone answers a sign question."
},
"di-700-ds-ineq#33": {
  steps: "(1) \\(x^{2} + 16 = 32\\), so \\(x^{2} = 16\\) and \\(|x| = 4\\). Sufficient.\n(2) \\(x^{2} - 8x + 16 = (x - 4)^{2} = 0\\), so \\(x = 4\\), \\(|x| = 4\\). Sufficient.\nAnswer: D.",
  take: "The question asks for |x|, so x = ±4 is one answer, not two."
},
"di-700-ds-ineq#34": {
  steps: "(1) alone: the exponent is unknown. Not sufficient.\n(2) gives \\(x = -\\tfrac12\\) and nothing about \\(n\\). Not sufficient.\nTogether: \\(n^{-1/2} < n\\) requires \\(n > 0\\) and \\(\\dfrac{1}{\\sqrt{n}} < n\\), i.e. \\(n^{3/2} > 1\\), i.e. \\(n > 1\\). Definite NO. Sufficient.\nAnswer: C.",
  take: "A negative fractional exponent is a reciprocal root; compare it with n on either side of 1."
},
"di-700-ds-ineq#35": {
  steps: "\\(5^{n} < 5^{-2}\\) exactly when \\(n < -2\\).\n(1) \\(5^{-n} > 5^{2}\\), so \\(-n > 2\\), \\(n < -2\\). Definite YES. Sufficient.\n(2) \\(n^{2}(n - 1) < 0\\) means \\(n < 1\\), \\(n \\ne 0\\): \\(n = -3\\) YES, \\(n = \\tfrac12\\) NO. Not sufficient.\nAnswer: A.",
  take: "Write every number as a power of the same base; \\(0.04 = \\tfrac{1}{25} = 5^{-2}\\)."
},
"di-700-ds-ineq#36": {
  steps: "(1) \\(\\left(\\tfrac{x}{y}\\right)^{2} = \\tfrac{36}{25}\\), so \\(\\tfrac{x}{y} = \\pm\\tfrac65\\). Not sufficient.\n(2) \\(\\left(\\tfrac{x}{y}\\right)^{5} > 1\\), so \\(\\tfrac{x}{y} > 1\\), but its value is unknown. Not sufficient.\nTogether \\(\\tfrac{x}{y} = \\tfrac65\\), so \\(\\dfrac{2x}{3y} = \\tfrac{2}{3} \\cdot \\tfrac{6}{5} = \\tfrac{4}{5}\\). Sufficient.\nAnswer: C.",
  take: "A squared ratio gives two values; a sign clue from an odd power picks one."
},
"di-700-ds-ineq#37": {
  steps: "Each statement alone leaves \\(x^{2} + y^{2}\\) undetermined.\nTogether: adding gives \\(2x^{2} + 2y^{2} = 10a\\), so \\(x^{2} + y^{2} = 5a\\). Is \\(5a > 4a\\)? Yes if \\(a > 0\\), but \\(a = 0\\) (with \\(x = y = 0\\)) gives \\(0 > 0\\), false. Not sufficient.\nAnswer: E.",
  take: "\"Nonnegative\" includes zero; an inequality that holds for positive a can fail at a = 0."
},
"di-700-ds-ineq#38": {
  steps: "\\(\\dfrac{r^{2}}{|r|} = |r|\\), so the question is whether \\(-1 < r < 1\\).\n(1) alone allows \\(r = 5\\). (2) alone allows \\(r = -5\\). Together \\(-1 < r < 1\\) (and \\(r \\ne 0\\)): YES. Sufficient.\nAnswer: C.",
  take: "Simplify the expression first; \\(r^{2}/|r|\\) collapses to |r|."
},
"di-700-ds-ineq#39": {
  steps: "(1) The signs matter: \\(a = 1, b = 2, c = 3\\) gives \\(\\tfrac{36}{6} = 6\\); \\(a = -1, b = 2, c = 3\\) gives \\(\\tfrac{34}{-6}\\). Not sufficient.\n(2) The identity \\(a^{3} + b^{3} + c^{3} - 3abc = (a + b + c)(a^{2} + b^{2} + c^{2} - ab - bc - ca)\\) gives \\(a^{3} + b^{3} + c^{3} = 3abc\\), so the value is 3. Sufficient.\nAnswer: B.",
  take: "\\(a + b + c = 0\\) forces \\(a^{3} + b^{3} + c^{3} = 3abc\\), an identity worth memorising."
},
"di-700-ds-ineq#40": {
  steps: "(1) If \\(y \\ge 0\\) the average is \\(\\tfrac{x + y}{2} = 10\\); if \\(y < 0\\) it is \\(\\tfrac{x - y}{2} = \\tfrac{20 - 2y}{2} = 10 - y\\), which varies. Not sufficient.\n(2) Weaker than (1). Not sufficient, and together no better than (1).\nAnswer: E.",
  take: "A sum fixes the average of x and y, not of x and |y|; the sign of y matters."
},
"di-700-ds-ineq#41": {
  steps: "The question is: is \\(\\dfrac{xy}{x + y} > xy\\)?\n(1) \\(x = 2y\\): left \\(= \\dfrac{2y^{2}}{3y} = \\dfrac{2y}{3}\\), right \\(= 2y^{2}\\). Is \\(\\dfrac{2y}{3} > 2y^{2}\\), i.e. \\(\\dfrac{y}{3} > y^{2}\\)? For a nonzero integer \\(y\\), \\(y^{2} \\ge |y| > \\dfrac{y}{3}\\) — never. Definite NO. Sufficient.\n(2) \\(x = y = 1\\): \\(\\tfrac12 > 1\\) NO. \\(x = 5, y = -1\\): \\(-\\tfrac54 > -5\\) YES. Not sufficient.\nAnswer: A.",
  take: "Simplify negative exponents into one fraction before testing; the algebra turns the question into \\(\\tfrac{y}{3} > y^{2}\\)."
},
"di-700-ds-ineq#42": {
  steps: "(1) \\(n - m > -2\\): \\(n - m\\) could be \\(-1\\) (YES) or 1 (NO). Not sufficient.\n(2) \\(n - m > 2\\), so \\(n > m\\). Definite NO. Sufficient.\nAnswer: B.",
  take: "Rewrite both statements in terms of the same difference; only a bound on the right side of zero decides."
},
"di-700-ds-ineq#43": {
  steps: "The question is whether \\(pq(p - q) > 0\\).\n(1) \\(pq < 0\\): the answer is YES exactly when \\(p < q\\), i.e. \\(p < 0 < q\\); but \\(q < 0 < p\\) gives NO. Not sufficient.\n(2) \\(p < 0\\) alone: \\(q\\) unknown. Not sufficient.\nTogether \\(p < 0 < q\\): \\(pq < 0\\) and \\(p - q < 0\\), product positive. YES. Sufficient.\nAnswer: C.",
  take: "Factor a two-variable inequality into signed pieces; each statement then fixes one sign."
},
"di-700-ds-ineq#44": {
  steps: "(1) \\(m > 0\\), but \\(p\\) could be \\(\\tfrac12\\) (NO) or 2 with \\(m = 3\\) (YES). Not sufficient.\n(2) \\(p < 1\\) makes \\(p - 1 < 0\\), but the sign of \\(m\\) is unknown. Not sufficient.\nTogether \\(m > 0\\) and \\(p - 1 < 0\\), so \\(m(p - 1) < 0\\). Definite NO. Sufficient.\nAnswer: C.",
  take: "Move everything to one side and factor; a product's sign needs the sign of each factor."
},
"di-700-ds-ineq#45": {
  steps: "Together: \\(w = 1.301\\), \\(y = 1.31\\) gives YES; \\(w = 1.31\\), \\(y = 1.3034\\) gives NO. Not sufficient (and each alone is worse).\nAnswer: E.",
  take: "Two overlapping ranges never settle which number is bigger."
},
"di-700-ds-ineq#46": {
  steps: "\\(|a|^{b}\\) is positive whenever \\(|a| > 0\\); it is 0 (or undefined) only when \\(a = 0\\).\n(1) \\(|ab| > 0\\) means \\(a \\ne 0\\), so \\(|a| \\ge 1\\) and \\(|a|^{b} > 0\\). YES. Sufficient.\n(2) A non-zero value of \\(|a|^{b}\\) cannot be negative, so it is positive. YES. Sufficient.\nAnswer: D.",
  take: "\\(|a|^{b}\\) can never be negative; \"non-zero\" is therefore the same as \"positive\" here."
},
"di-700-ds-ineq#47": {
  steps: "\\(450 \\le X < 550\\) and \\(350 \\le Y < 450\\), so \\(800 \\le X + Y < 1000\\).\nTogether: \\(450 \\le X < 500\\) and \\(350 \\le Y < 400\\), so \\(800 \\le X + Y < 900\\): a sum of 820 is closest to 800, a sum of 880 to 900. Not sufficient.\nAnswer: E.",
  take: "Rounding ranges add up to a wider range; the sum's rounding is not determined by the parts'."
},
"di-700-ds-ineq#48": {
  steps: "(1) Digit sets with product 30: \\(\\{1, 5, 6\\}\\) and \\(\\{2, 3, 5\\}\\); 156 (YES) and 651 (NO). Not sufficient.\n(2) 190 (YES) and 910 (NO). Not sufficient.\nTogether: only \\(\\{2, 3, 5\\}\\) sums to 10; every arrangement (235, 253, 325, 352, 523, 532) is below 550. Definite YES. Sufficient.\nAnswer: C.",
  take: "Enumerate digit sets from the product, then filter by the sum — the survivors decide the question."
},
"di-700-ds-ineq#49": {
  steps: "(1) The left side is \\(-2\\) and \\(X^{2} \\ge 0 > -2\\). Definite YES. Sufficient.\n(2) \\(X > 2\\) gives \\(X^{2} > 2X\\), and \\(Y > 0\\) gives \\(2X - 3Y < 2X\\); so \\(2X - 3Y < 2X < X^{2}\\). YES. Sufficient.\nAnswer: D.",
  take: "Chain inequalities: bound the left side above by something the right side is known to exceed."
},
"di-700-ds-ineq#50": {
  steps: "After 60 minutes: Missile 1 at \\(x \\cdot (\\sqrt{x})^{6} = x^{4}\\); Missile 2 at \\(64y\\). The question is whether \\(x^{4} > 64y\\).\n(1) \\(y = x^{2}\\): is \\(x^{4} > 64x^{2}\\), i.e. \\(x^{2} > 64\\), i.e. \\(x > 8\\)? Unknown. Not sufficient.\n(2) \\(x > 8\\) with \\(y\\) unknown. Not sufficient.\nTogether: \\(y = x^{2}\\) and \\(x > 8\\), so \\(x^{2} > 64\\) and the answer is YES. Sufficient.\nAnswer: C.",
  take: "Translate the growth rules into closed forms first; the statements then combine cleanly."
},
"di-700-ds-numbers#1": {
  steps: "(1) \\(y\\) is unknown; \\(n\\) could be 4 (digit sum 4) or 9. Not sufficient.\n(2) \\(y^{4}\\) two-digit and odd: \\(3^{4} = 81\\) (2 gives 16, even; 5 gives 625). So \\(y = 3\\), but nothing links \\(y\\) to \\(n\\) here. Not sufficient.\nTogether \\(n\\) is a multiple of \\(9\\) below 99, and every such multiple (9, 18, …, 90) has digit sum 9. Sufficient.\nAnswer: C.",
  take: "Every multiple of 9 up to 90 has digit sum 9; the trap is 99, which the stem excludes."
},
"di-700-ds-numbers#2": {
  steps: "\\(x = 2\\): \\(2 + 3 = 5\\), prime. \\(x = 8\\): \\(40{,}320 + 9 = 40{,}329 = 3 \\times 13{,}443\\), not prime. Both satisfy both statements, so even together they cannot decide.\nAnswer: E.",
  take: "For prime-testing DS, one composite example inside the allowed range ends the discussion."
},
"di-700-ds-numbers#3": {
  steps: "(1) \\(x = 4\\), \\(y\\) unknown. Not sufficient.\n(2) \\(y = x^{2} + 3\\), \\(x\\) unknown (\\(x = 1\\) gives \\(x + y = 5\\); \\(x = 6\\) gives 45; \\(x = 2\\) gives 9, a square). Not sufficient.\nTogether \\(x = 4\\), \\(y = 19\\), \\(x + y = 23\\), not a perfect square. Definite NO. Sufficient.\nAnswer: C.",
  take: "A cube equation with a real unknown has one real root; combine it with the relation to get a definite number."
},
"di-700-ds-numbers#4": {
  steps: "(1) \\(2x + 2 = 8\\) gives \\(x = 3\\); \\(2x + 2 = 64\\) gives \\(x = 31\\); both prime. Not sufficient.\n(2) The average of \\(x\\) consecutive integers is an integer exactly when \\(x\\) is odd — any odd prime. Not sufficient.\nTogether: 3 and 31 are both odd. Not sufficient.\nAnswer: E.",
  take: "Check the next cube, not just the first; 64 works as well as 8."
},
"di-700-ds-numbers#5": {
  steps: "(1) \\(64 = 2^{6} = 4^{3} = 8^{2}\\): \\(a\\) could be 2, 4 or 8. Not sufficient.\n(2) \\(a^{6}\\) must divide \\(8! = 2^{7} \\cdot 3^{2} \\cdot 5 \\cdot 7\\); the only prime power available to the sixth is \\(2^{6}\\), so \\(a = 2\\). Sufficient.\nAnswer: B.",
  take: "Factor the factorial; a sixth power dividing it must come from the prime with exponent at least 6."
},
"di-700-ds-numbers#6": {
  steps: "(1) \\(p = 4 \\times \\text{prime}\\): 8, 12, 20, …. Not sufficient.\n(2) Any multiple of 3. Not sufficient.\nTogether \\(p/4\\) is a prime divisible by 3, so \\(p/4 = 3\\) and \\(p = 12\\). Sufficient.\nAnswer: C.",
  take: "The only prime divisible by 3 is 3 itself."
},
"di-700-ds-numbers#7": {
  steps: "\\(\\dfrac{ab}{cd}\\) has the same sign as \\(abcd\\).\n(1) \\(ad = -bc\\), so \\(abcd = (ad)(bc) = -(bc)^{2} < 0\\). Definite NO. Sufficient.\n(2) \\(abcd < 0\\) directly. Definite NO. Sufficient.\nAnswer: D.",
  take: "Multiplying numerator and denominator by \\((cd)^{2}\\) shows the sign of a fraction equals the sign of the product of all its factors."
},
"di-700-ds-numbers#8": {
  steps: "(1) \\(J\\) has at least the primes 2, 3, 5; \\(K\\) unknown. Not sufficient.\n(2) \\(K = 2^{3} \\cdot 5^{3}\\) has exactly two distinct primes; \\(J\\) unknown. Not sufficient.\nTogether \\(J\\) has at least three, \\(K\\) exactly two. Definite YES. Sufficient.\nAnswer: C.",
  take: "\"Different prime numbers\" counts distinct primes, not their multiplicities."
},
"di-700-ds-numbers#9": {
  steps: "(1) \\(C\\) is the midpoint of \\(AB\\), 9 from \\(B\\); \\(D\\) is 8 from \\(C\\), so \\(BD = 1\\) or \\(17\\). Not sufficient.\n(2) Says nothing about \\(C\\) or the distances. Not sufficient.\nTogether: with \\(A = 0, B = 18, C = 9\\), \\(D\\) is 1 or 17 — both to the right of \\(A\\), so (2) does not choose. Not sufficient.\nAnswer: E.",
  take: "Draw it with coordinates; a \"to the left of\" clause that both candidates satisfy adds nothing."
},
"di-700-ds-numbers#10": {
  steps: "(1) Greatest × smallest positive means both have the same sign, so every integer in the list does (and none is 0). All positive gives a positive product, but all negative depends on the count. Not sufficient.\n(2) An even count with an unknown mix of signs. Not sufficient.\nTogether: same sign, even count — an even number of negatives (or none) gives a positive product. Definite YES. Sufficient.\nAnswer: C.",
  take: "Sign of a product = parity of the number of negative factors; you need both the sign pattern and the count."
},
"di-700-ds-numbers#11": {
  steps: "(1) \\(2y + 1 = 77\\): \\(y = 38, x = 39\\), \\(xy = 1{,}482\\). Sufficient.\n(2) Same tens digit \\(t\\): both lie between \\(10t\\) and \\(10t + 9\\), so their sum is between \\(20t\\) and \\(20t + 18\\); 77 forces \\(t = 3\\), and the only pair in the thirties summing to 77 is 38 and 39. Sufficient.\nAnswer: D.",
  take: "\"Same tens digit\" is a tight constraint: bound the sum by the decade and see which decade fits."
},
"di-700-ds-numbers#12": {
  steps: "(1) A list like \\(0, 0, 5\\) has every pairwise product 0 but is not all zeros. Not sufficient.\n(2) For any three members \\(a + b = 0\\), \\(a + c = 0\\), so \\(b = c\\); with \\(b + c = 0\\) that forces \\(b = c = 0\\), and then \\(a = 0\\). Every number is 0. Sufficient.\nAnswer: B.",
  take: "\"Any two\" statements apply to every pair; with three or more items, that can pin everything."
},
"di-700-ds-numbers#13": {
  steps: "(2) \\(m + r = 24\\). (1) \\(r = \\pm 3m\\).\nTogether: \\(r = 3m\\) gives \\(m = 6, r = 18\\); \\(r = -3m\\) gives \\(m = -12, r = 36\\). Two values. Not sufficient.\nAnswer: E.",
  take: "A distance statement is an absolute-value equation with two cases; check both before combining."
},
"di-700-ds-numbers#14": {
  steps: "\\(y = 10, z = 6\\): \\(y + z = 16\\), \\(z\\) even, \\(w = 4\\) — YES. \\(y = 14, z = 2\\): \\(y + z = 16\\), \\(z\\) even, \\(w = 12\\) — NO. Both statements hold in both cases.\nAnswer: E.",
  take: "Two examples that satisfy everything and answer differently settle E."
},
"di-700-ds-numbers#15": {
  steps: "(1) \\(z/2\\) even means \\(z = 2 \\times (\\text{even integer})\\), an integer multiple of 4 — even. Sufficient.\n(2) \\(3z\\) even allows \\(z = \\tfrac23\\), which is not an integer at all, as well as \\(z = 2\\). Not sufficient.\nAnswer: A.",
  take: "Parity applies to integers; when the stem does not say integer, a fractional counter-example may exist."
},
"di-700-ds-numbers#16": {
  steps: "(1) alone leaves \\(n\\) free; (2) alone leaves \\(m\\) free (\\(m + n = p^{2} + 3m + 1\\), parity depends on \\(m\\) and \\(p\\)). Neither sufficient.\nTogether \\(m + n = (p + 2)^{2} + p^{2} + 2m + 1\\). \\((p + 2)^{2}\\) and \\(p^{2}\\) have the same parity, so their sum is even; \\(2m\\) is even; the \\(+1\\) makes the total odd. Definite YES. Sufficient.\nAnswer: C.",
  take: "\\(p^{2}\\) and \\((p + 2)^{2}\\) always share parity — their sum is even whatever p is."
},
"di-700-ds-numbers#17": {
  steps: "The expression is \\(b(b^{a} - a^{b})\\).\n(1) \\(5a - 8\\) odd means \\(a\\) is odd. If \\(b\\) is even the whole thing is even; if \\(b\\) is odd, \\(b^{a}\\) and \\(a^{b}\\) are both odd and their difference is even. Either way even: definite NO. Sufficient.\n(2) For even \\(b\\) the sum is even + even + even + 7 = odd ✓; for odd \\(b\\) it is odd + odd + odd + odd = even. So \\(b\\) is even, and the expression is even: definite NO. Sufficient.\nAnswer: D.",
  take: "Factor out the common b first; parity of a difference of powers follows the parity of the bases."
},
"di-700-ds-numbers#18": {
  steps: "(1) \\(y = 1\\): \\(1 + 4 + 6 = 11\\) odd; \\(y = 2\\): \\(4 + 8 + 6 = 18\\) even. Not sufficient.\n(2) \\(z\\) odd: odd + odd − even = even; \\(z\\) even: even + even − even = even. Always even: definite NO. Sufficient.\nAnswer: B.",
  take: "\\(9z^{2} + 7z = z(9z + 7)\\) is a product of numbers of opposite parity, hence always even."
},
"di-700-ds-numbers#19": {
  steps: "\\(2x < 6\\), so \\(x = 1\\) or \\(2\\): the question is whether \\(x = 2\\).\n(1) \\(x + y\\) even: \\(x = 2, y = 2\\) (YES) or \\(x = 1, y = 1\\) (NO). Not sufficient.\n(2) \\(xy\\) odd means \\(x\\) is odd, so \\(x = 1\\), which is not prime. Definite NO. Sufficient.\nAnswer: B.",
  take: "Solve the stem's inequality first; a two-value question is decided by parity."
},
"di-700-ds-numbers#20": {
  steps: "(1) \\(p(p + 1)\\) is the product of consecutive integers — always even. No information.\n(2) \\(4p + 2\\) is always even. No information. Together, still nothing.\nAnswer: E.",
  take: "A statement that holds for every value is a statement about nothing."
},
"di-700-ds-numbers#21": {
  steps: "\\(t_{n} = 3 + 1 + 2 + \\dots + n = 3 + \\dfrac{n(n+1)}{2}\\).\n(1) \\(n = 2\\): \\(3 + 3 = 6\\) even; \\(n = 8\\): \\(3 + 36 = 39\\) odd. Not sufficient.\n(2) \\(n = 4k + 1\\): \\(\\dfrac{n(n+1)}{2} = (4k + 1)(2k + 1)\\), odd × odd = odd, so \\(t_{n} = 3 + \\text{odd} = \\text{even}\\). Definite YES. Sufficient.\nAnswer: B.",
  take: "Sum the recursion into a closed form, then argue parity from the form."
},
"di-700-ds-numbers#22": {
  steps: "\\((y + z)^{2}\\) is even exactly when \\(y + z\\) is even.\n(1) \\(y - z\\) odd means \\(y\\) and \\(z\\) have opposite parity, so \\(y + z\\) is odd. Definite NO. Sufficient.\n(2) \\(yz\\) even: \\(y = 2, z = 4\\) (sum even) or \\(y = 2, z = 3\\) (sum odd). Not sufficient.\nAnswer: A.",
  take: "y + z and y − z differ by 2z, so they share parity."
},
"di-700-ds-numbers#23": {
  steps: "(1) \\(4y\\) is even, so \\(5x\\) is even, so \\(x\\) is even and \\(xy\\) is even. Sufficient.\n(2) \\(6x\\) is even, so \\(7y\\) is even, so \\(y\\) is even and \\(xy\\) is even. Sufficient.\nAnswer: D.",
  take: "Terms with even coefficients vanish from parity; the odd-coefficient variable inherits the parity of the whole."
},
"di-700-ds-numbers#24": {
  steps: "(1) \\(x = 3, y = 2\\): \\(3 \\times 3 = 9\\) odd; \\(x = 2, y = 3\\): even. Not sufficient.\n(2) \\(x = 1, y = 8\\): 9 odd; \\(x = 2, y = 8\\): even. Not sufficient.\nTogether \\(y\\) is a prime greater than 7, hence odd, so \\(y + 1\\) is even and the product is even. Definite YES. Sufficient.\nAnswer: C.",
  take: "The only even prime is 2; \"prime and greater than 7\" is a way of saying odd."
},
"di-700-ds-numbers#25": {
  steps: "(1) \\(m\\) and \\(n\\) have opposite parity; either could be the odd one. Not sufficient.\n(2) \\(m = n(n - 1) + 5\\); \\(n(n - 1)\\) is a product of consecutive integers, always even, so \\(m\\) is even + 5 = odd. Definite YES. Sufficient.\nAnswer: B.",
  take: "n(n − 1) and n(n + 1) are always even — a fact that settles many parity questions."
},
"di-700-ds-numbers#26": {
  steps: "(1) \\(c\\) even, or \\(d\\) odd. Not sufficient.\n(2) \\(c + 2\\) has \\(c\\)'s parity: \\(c\\) even, or \\(d\\) even. Not sufficient.\nTogether: if \\(c\\) were odd, (1) needs \\(d\\) odd and (2) needs \\(d\\) even — impossible. So \\(c\\) is even. Definite YES. Sufficient.\nAnswer: C.",
  take: "When each statement says \"c even OR something about d\", contradictory demands on d force c even."
},
"di-700-ds-numbers#27": {
  steps: "(1) \\(x\\) odd: \\(x^{2} + 1\\) is even, so the product is even. Sufficient.\n(2) No prime factor of 2 means \\(x\\) is odd, and the same argument applies. Sufficient.\nAnswer: D.",
  take: "\"Every prime factor exceeds 7\" excludes the prime 2 — it is a parity statement in disguise."
},
"di-700-ds-numbers#28": {
  steps: "The remainder is the units digit of \\(2^{p}\\), which cycles 2, 4, 8, 6.\n(1) \\(p\\) even: units digit 4 or 6. Not sufficient.\n(2) \\(p\\) is a multiple of 4: units digit 6. Sufficient.\nAnswer: B.",
  take: "For a units-digit cycle of length 4, knowing the exponent mod 4 is what counts; \"even\" is not enough."
},
"di-700-ds-numbers#29": {
  steps: "\\(5^{x}\\) ends in 5 and \\(15\\) ends in 5, so \\(n\\) ends in the units digit of \\(7^{y}\\) (which cycles 7, 9, 3, 1).\n(1) \\(y = 2x - 15\\) is odd, so \\(7^{y}\\) ends in 7 or 3. Not sufficient.\n(2) \\(y = 1\\) or \\(y = 5\\); both give \\(7^{y}\\) ending in 7, so \\(n\\) ends in 7. Sufficient.\nAnswer: B.",
  take: "Two candidate exponents that agree mod 4 give the same units digit — sufficient without a unique y."
},
"di-700-ds-numbers#30": {
  steps: "The units digit of \\(n\\) is that of \\(3^{x} \\cdot 3^{y} = 3^{x+y}\\).\n(1) \\(3^{7}\\) ends in 7. Sufficient.\n(2) \\(y\\) unknown. Not sufficient.\nAnswer: A.",
  take: "Bases with the same units digit combine: only the total exponent matters."
},
"di-700-ds-numbers#31": {
  steps: "(1) \\(x\\) ending in 1, 3, 7 or 9 all give \\(x^{4}\\) ending in 1; their squares end in 1, 9, 9, 1. Not sufficient.\n(2) \\(3^{2} = 9\\): units digit 9. Sufficient.\nAnswer: B.",
  take: "Work backwards from a power's units digit only as far as it goes — four digits share \\(x^{4}\\) ending in 1."
},
"di-700-ds-numbers#32": {
  steps: "\\(\\dfrac{p}{q} = 2^{a-c} \\cdot 3^{b-d} \\cdot 5^{-e}\\). Powers of 2 and 5 in the denominator are harmless; a 3 in the denominator (\\(b < d\\)) makes it repeat.\n(1) says nothing about the 3s. Not sufficient.\n(2) \\(b > d\\): no 3 survives in the denominator. Definite YES. Sufficient.\nAnswer: B.",
  take: "Terminating ⇔ denominator (in lowest terms) = \\(2^{m} 5^{n}\\); watch the 3s, not the 2s."
},
"di-700-ds-numbers#33": {
  steps: "(1) \\(d = \\tfrac18 = 0.125\\): exactly three nonzero digits. Definite NO. Sufficient.\n(2) \\(0.5\\) (NO) and \\(0.0625\\) (YES) are both non-repeating. Not sufficient.\nAnswer: A.",
  take: "A ratio of numerator to denominator fixes the fraction's value completely."
},
"di-700-ds-numbers#34": {
  steps: "The product is \\(\\dfrac{5 \\cdot 302 \\cdot 9 \\cdot x}{28 \\cdot 100 \\cdot 10}\\); after cancelling, the denominator keeps a factor 7 unless \\(x\\) supplies one. The other factors are 2s and 5s.\n(1) \\(x = 101\\) leaves the 7 (repeating); \\(x = 140\\) cancels it. Not sufficient.\n(2) \\(21 \\mid x\\) gives a factor 7 to cancel. Definite YES. Sufficient.\nAnswer: B.",
  take: "Track the one awkward prime in the denominator; a statement that guarantees it cancels is sufficient."
},
"di-700-ds-numbers#35": {
  steps: "The decimal rounds to 0.4 if \\(d \\le 4\\) and to 0.5 if \\(d \\ge 5\\).\n(1) \\(d = 4, e = 0\\) (difference 4) rounds to 0.4; \\(d = 5, e = 1\\) (difference 4) rounds to 0.5. Not sufficient.\n(2) \\(d = 4, e = 1\\) and \\(d = 5, e = 1\\) both satisfy it. Not sufficient.\nTogether: \\((4, 0)\\) and \\((5, 1)\\) satisfy both statements and round differently. Not sufficient.\nAnswer: E.",
  take: "Find two digit pairs on either side of the rounding threshold that meet every condition."
},
"di-700-ds-numbers#36": {
  steps: "(2) \\(54.45 \\le x < 54.55\\): tenths digit 4 or 5. Not sufficient. (1) alone says nothing about tenths. Not sufficient.\nTogether: hundredths digit 5 means \\(x = 54.45\\ldots\\) (rounds up to 54.5, tenths 4) or \\(x = 54.55\\ldots\\) (rounds to 54.6, excluded). So the tenths digit is 4. Sufficient.\nAnswer: C.",
  take: "A rounded value covers two tenths digits; the hundredths digit decides which one survives."
},
"di-700-ds-numbers#37": {
  steps: "(1) \\(x = 5\\): \\(8.35y \\ge 8.35\\) rounds up to 8.4. Definite NO. Sufficient.\n(2) \\(8.309\\) rounds to 8.3 but \\(8.359\\) rounds to 8.4. Not sufficient.\nAnswer: A.",
  take: "To round to tenths look one place further — at the hundredths — and no further."
},
"di-700-ds-numbers#38": {
  steps: "(1) \\(j\\) could be 4 (\\(y \\approx 2.4\\)) or 7 (\\(y \\approx 2.7\\)). Not sufficient.\n(2) \\(2.j3k\\) rounds to 2.74 only if \\(j = 7\\) and \\(k \\ge 5\\): \\(y = 2.73k\\), which rounds to 2.7. Sufficient.\nAnswer: B.",
  take: "Work back from the rounded figure to the exact digits; the tenths digit is then fixed."
},
"di-700-ds-numbers#39": {
  steps: "The terms are 10, 13, 16, …, evenly spaced, so the median is fixed once \\(x\\) is known.\n(1) Sum \\(= \\dfrac{3x(x+1)}{2} + 7x = 275\\), i.e. \\(3x^{2} + 17x - 550 = 0\\), whose positive root is \\(x = 11\\) (median \\(A_{6} = 25\\)). Sufficient.\n(2) Range \\(= 3(x - 1) = 30\\), so \\(x = 11\\). Sufficient.\nAnswer: D.",
  take: "For an arithmetic sequence, sum, range and median are all functions of the term count."
},
"di-700-ds-numbers#40": {
  steps: "The average is \\(a + \\dfrac{n-1}{2}\\), where \\(a\\) is the first term.\n(1) \\(n\\) odd makes the average an integer, but not necessarily a multiple of 3 (1, 2, 3 averages 2). Not sufficient.\n(2) States exactly that the average is an integer divisible by 3. Definite YES. Sufficient.\nAnswer: B.",
  take: "Recognise the statement as the rephrased question — a sign of a sufficient statement."
},
"di-700-ds-numbers#41": {
  steps: "Divisors of 24 above 2 with quotient above 2: \\(n \\in \\{3, 4, 6, 8\\}\\).\n(1) 36 players split evenly: \\(n \\mid 36\\), so \\(n \\in \\{3, 4, 6\\}\\). Not sufficient.\n(2) 30 split evenly: \\(n \\mid 30\\), so \\(n \\in \\{3, 6\\}\\). Not sufficient.\nTogether \\(n \\in \\{3, 6\\}\\). Not sufficient.\nAnswer: E.",
  take: "List the candidates from the stem first; each statement then just filters the list."
},
"di-700-ds-numbers#42": {
  steps: "(1) \\(x/3\\) is an odd integer, so \\(x = 3(2k + 1) = 6k + 3\\): \\(x = 3\\) (remainder 3) or \\(x = 9\\) (remainder 1). Not sufficient.\n(2) \\(x = 5\\) or 15. Not sufficient.\nTogether \\(x = 15\\) (remainder 3) or \\(x = 45\\) (remainder 1). Not sufficient.\nAnswer: E.",
  take: "x = 6k + 3 alternates between remainders 3 and 1 mod 4; a factor of 5 does not break the alternation."
},
"di-700-ds-numbers#43": {
  steps: "(1) Range 6 only says the remainders include 0 and 6; the other five are free (0, 0, 0, 0, 0, 0, 6 or 6, 6, 6, 6, 6, 6, 0). Not sufficient.\n(2) Seven consecutive integers have remainders 0, 1, 2, 3, 4, 5, 6 in some order: sum \\(= 21\\). Sufficient.\nAnswer: B.",
  take: "n consecutive integers hit every residue mod n exactly once."
},
"di-700-ds-numbers#44": {
  steps: "(1) If \\(j > 5\\) the remainder is 5, but \\(j = 3\\), \\(k = 3m + 5 = 3(m + 1) + 2\\) gives remainder 2. Not sufficient.\n(2) Alone says nothing about \\(k\\). Not sufficient.\nTogether the remainder is 5. Sufficient.\nAnswer: C.",
  take: "A remainder must be smaller than the divisor; \"k = jm + 5\" is a remainder statement only when j > 5."
},
"di-700-ds-numbers#45": {
  steps: "Call the middle integer \\(m\\) (odd); the largest is \\(m + 2\\).\n(1) \\(m = 3\\): largest 5, remainder 1. \\(m = 5\\): largest 7, remainder 3. Not sufficient.\n(2) \\(m - 1\\) is a perfect square and even, so \\(m - 1 = (2t)^{2} = 4t^{2}\\) and \\(m + 2 = 4t^{2} + 3\\): remainder 3. Sufficient.\nAnswer: B.",
  take: "An even perfect square is a multiple of 4 — that fixes the residue class of everything nearby."
},
"di-700-ds-numbers#46": {
  steps: "(1) The count is 1 more than a multiple of 3: 4 (even) or 7 (odd). Not sufficient.\n(2) Count minus 3 is even, so the count is odd: it cannot be split evenly. Definite NO. Sufficient.\nAnswer: B.",
  take: "Translate the story into parity: \"n − 3 is even\" is \"n is odd\"."
},
"di-700-ds-numbers#47": {
  steps: "(1) 18 divides \\(5n\\) and shares no factor with 5, so 18 divides \\(n\\). Definite YES. Sufficient.\n(2) \\(3n/18 = n/6\\) is an integer: \\(n = 6\\) (NO) or \\(n = 18\\) (YES). Not sufficient.\nAnswer: A.",
  take: "A coprime multiplier can be cancelled from a divisibility statement; a shared factor cannot."
},
"di-700-ds-numbers#48": {
  steps: "(1) A number is a multiple of 3 exactly when its digit sum is, so \\(a + b\\) is a multiple of 3. Sufficient.\n(2) \\(a + b = (a - 2b) + 3b\\), a multiple of 3 plus a multiple of 3. Sufficient.\nAnswer: D.",
  take: "Adding or subtracting a multiple of 3 never changes divisibility by 3."
},
"di-700-ds-numbers#49": {
  steps: "\\(y = 9^{x}(1 + 9 + 81 + 729 + 6561 + 59049) = 9^{x} \\times 66{,}430\\), and 66,430 is a multiple of 5. So whenever \\(x\\) is a non-negative integer, \\(y\\) is an integer multiple of 5.\n(1) 5 is a factor of \\(x\\), so \\(x\\) is an integer. YES. Sufficient.\n(2) \\(x\\) is an integer. YES. Sufficient.\nAnswer: D.",
  take: "Factor the smallest power out of a geometric string; the constant bracket carries the divisibility."
},
"di-700-ds-numbers#50": {
  steps: "(1) \\(12k + 6 = 4(3k + 1) + 2\\) leaves remainder 2 on division by 4; squares leave remainder 0 or 1. Definite NO. Sufficient.\n(2) \\(q = 1\\) gives 12 (NO); \\(q = 9\\) gives 36 (YES). Not sufficient.\nAnswer: A.",
  take: "Squares are 0 or 1 mod 4 (and 0, 1, 4 mod 9 … ); a residue argument can rule out a whole family."
},
"di-700-ds-numbers#51": {
  steps: "(1) \\(r\\) is a multiple of 3 but \\(s\\) is free: \\(s = 1\\) gives \\(r - s\\) not divisible by 3. Not sufficient.\n(2) \\(r - s = (r + s) - 2s\\): divisible by 3 only if \\(s\\) is. Not sufficient.\nTogether \\(r\\) and \\(r + s\\) are multiples of 3, so \\(s\\) is, so \\(r - s\\) is and \\(p\\) is an integer. Sufficient.\nAnswer: C.",
  take: "Track divisibility by 3 of each variable; two multiples of 3 force the third."
},
"di-700-ds-numbers#52": {
  steps: "(1) \\(n = 2\\) gives 3 (NO); \\(n = 5\\) gives 24 (YES). Not sufficient.\n(2) \\(n = 192\\) gives an odd number minus… \\(192^{2} - 1\\) is odd (NO); \\(n = 193\\) is a prime above 3 (YES). Not sufficient.\nTogether \\(n\\) is a prime greater than 3, so it is coprime to 6; then \\((n - 1)(n + 1)\\) is a product of two consecutive evens (one a multiple of 4) and one of \\(n - 1, n, n + 1\\) is a multiple of 3 — divisible by 24. Sufficient.\nAnswer: C.",
  take: "For any n coprime to 6, \\(n^{2}\\) ≡ 1 (mod 24)."
},
"di-700-ds-numbers#53": {
  steps: "(1) Depends on \\(x\\): with \\(x = 2\\) the remainders are 0, 1, 0 (sum 1); with \\(x = 5\\) they are 3, 4, 0 (sum 7). Not sufficient.\n(2) With \\(x = 2\\): 1, 0, 1 (sum 2); with \\(x = 5\\): 1, 2, 3 (sum 6). Not sufficient.\nTogether the least is \\(1 \\bmod x\\) and the least \\(+ 2\\) is \\(0 \\bmod x\\), so \\(x\\) divides 3; \\(x = 1\\) is impossible (no remainder 1), so \\(x = 3\\) and the remainders are 1, 2, 0 — sum 3. Sufficient.\nAnswer: C.",
  take: "Two remainder statements about numbers a fixed distance apart pin the divisor to a factor of that distance."
},
"di-700-ds-numbers#54": {
  steps: "\\(y = 3x - 3 - x = 2x - 3\\), an odd number for every integer \\(x\\). An odd number is never divisible by 6, so the answer is NO before either statement is read — each statement is therefore sufficient.\nAnswer: D.",
  take: "When the stem alone settles the question, both statements count as sufficient: D, not E."
},
"di-700-ds-numbers#55": {
  steps: "(1) \\(m = 1, n = 2\\): \\(2m = 2\\) is divisible by 2 but \\(m/n = \\tfrac12\\) (NO); \\(m = 2, n = 2\\) (YES). Not sufficient.\n(2) \\(m = 2nk\\), so \\(m/n = 2k\\), an integer. Definite YES. Sufficient.\nAnswer: B.",
  take: "\"m divisible by 2n\" is stronger than \"m divisible by n\"; \"2m divisible by n\" is weaker."
},
"di-700-ds-numbers#56": {
  steps: "(1) \\(n \\equiv 2\\) mod 3 and mod 5, so \\(n \\equiv 2 \\pmod{15}\\); but \\(t\\) mod 3 is unknown: \\(t = 3\\) gives \\(nt \\equiv 6\\), \\(t = 8\\) gives \\(16 \\equiv 1\\). Not sufficient.\n(2) \\(t \\equiv 3 \\pmod{15}\\), but \\(n\\) mod 5 is unknown: \\(n = 2\\) gives 6, \\(n = 5\\) gives \\(15 \\equiv 0\\). Not sufficient.\nTogether \\(nt \\equiv 2 \\times 3 = 6 \\pmod{15}\\). Sufficient.\nAnswer: C.",
  take: "A remainder mod 15 needs both the mod-3 and mod-5 information for each factor."
},
"di-700-ds-numbers#57": {
  steps: "(1) \\(n\\) odd: \\(n - 1\\) and \\(n + 1\\) are consecutive evens, so their product is a multiple of 8; but \\(n = 3\\) gives 8 (r = 8) and \\(n = 5\\) gives 24 (r = 0). Not sufficient.\n(2) \\(n = 2\\) gives 3, \\(n = 4\\) gives 15. Not sufficient.\nTogether \\(n\\) is coprime to 6: the product is a multiple of 8 and of 3, hence of 24: \\(r = 0\\). Sufficient.\nAnswer: C.",
  take: "Split 24 into 8 and 3 and see which statement supplies each."
},
"di-700-ds-numbers#58": {
  steps: "(1) \\(n\\) odd: \\(n^{2} - 1 = (n - 1)(n + 1)\\) is a product of consecutive even numbers, one of them a multiple of 4, so it is a multiple of 8: \\(r = 0\\). Sufficient.\n(2) \\(n = 2\\) gives 3, \\(n = 3\\) gives 0. Not sufficient.\nAnswer: A.",
  take: "\\(\\text{odd}^{2} \\equiv 1 \\pmod 8\\) is a fact worth keeping."
},
"di-700-ds-numbers#59": {
  steps: "\\(4 + 7n \\equiv 1 + n \\pmod 3\\).\n(1) \\(n + 1\\) is a multiple of 3, so \\(r = 0\\). Sufficient.\n(2) \\(n = 21\\) gives \\(r = 1\\), \\(n = 22\\) gives 2. Not sufficient.\nAnswer: A.",
  take: "Reduce coefficients mod the divisor before reading the statements: 7n behaves like n."
},
"di-700-ds-numbers#60": {
  steps: "(1) Remainder mod 21 could be 1 or 3, giving \\(r = 1\\) or 3. Not sufficient.\n(2) \\(n = 28k + 3\\), and 28 is a multiple of 7, so \\(r = 3\\). Sufficient.\nAnswer: B.",
  take: "A remainder modulo a multiple of d determines the remainder modulo d."
},
"di-700-ds-numbers#61": {
  steps: "(1) \\(x\\) is an odd multiple of 3: 3, 9, 15, … — all leave remainder 3 on division by 6. Sufficient.\n(2) \\(x = 12k + 3\\) leaves remainder 3 on division by 6. Sufficient.\nAnswer: D.",
  take: "Combine remainders mod 2 and mod 3 to get the remainder mod 6 (Chinese remainder idea)."
},
"di-700-ds-numbers#62": {
  steps: "(1) \\(x = 3\\) gives 2 (a factor); \\(x = 6\\) gives 5 (not). Not sufficient.\n(2) \\(x \\in \\{1, 3, 9, 27\\}\\) gives \\(x - 1 \\in \\{0, 2, 8, 26\\}\\); 0 is not a factor of anything, while 2, 8, 26 divide 104. Not sufficient.\nTogether \\(x \\in \\{3, 9, 27\\}\\) and \\(x - 1 \\in \\{2, 8, 26\\}\\), all factors of 104. Definite YES. Sufficient.\nAnswer: C.",
  take: "List the finite candidates a divisibility statement allows and check each one."
},
"di-700-ds-numbers#63": {
  steps: "(1) Any common divisor of \\(a\\) and \\(b\\) divides \\(a - 2b = 6\\), so the gcd is at most 6; and 6 divides both. So the gcd is exactly 6. Definite YES. Sufficient.\n(2) \\(\\gcd(3b, b) = b\\): 6 if \\(b = 6\\), 12 if \\(b = 12\\). Not sufficient.\nAnswer: A.",
  take: "gcd(a, b) = gcd(a − kb, b): subtract multiples to shrink the problem."
},
"di-700-ds-numbers#64": {
  steps: "\\(PS = QR\\).\n(1) 5 divides \\(P\\), hence \\(QR\\); but it might sit in \\(Q\\) (\\(P = 140, Q = 5, R = 28, S = 1\\)). Not sufficient.\n(2) \\(Q\\) is a power of 7, so 5 never divides \\(Q\\); but \\(P\\) may have no 5 either. Not sufficient.\nTogether 5 divides \\(QR\\) and not \\(Q\\), so it divides \\(R\\). Definite YES. Sufficient.\nAnswer: C.",
  take: "In PS = QR, a prime in P must appear in Q or R; rule out Q and it lands in R."
},
"di-700-ds-numbers#65": {
  steps: "(1) Substituting \\(r\\): \\((a + b)(c + d) = (a + b)^{2}(c - d)^{2}\\), so \\(c + d = (a + b)(c - d)^{2}\\). Then \\(\\sqrt{c + d} = |c - d|\\sqrt{a + b}\\), an integer only if \\(a + b\\) is a perfect square — unknown. Not sufficient.\n(2) \\(a + b = (x^{2}y^{3}z)^{2}\\) is a perfect square, but says nothing about \\(c + d\\). Not sufficient.\nTogether \\(\\sqrt{c + d} = |c - d| \\cdot x^{2}y^{3}z\\), an integer. Definite YES. Sufficient.\nAnswer: C.",
  take: "Substitute the stem's definition of r into a statement; the algebra often collapses to one missing fact."
},
"di-700-ds-numbers#66": {
  steps: "\\(pq\\) could be \\(6 = 2 \\times 3\\), \\(10 = 2 \\times 5\\), \\(14\\), … with \\(p\\) being either factor.\n(1) \\(p + q\\) odd: \\((p, q) = (3, 2)\\) or \\((5, 2)\\). Not sufficient.\n(2) \\(q < p\\): same pairs. Not sufficient.\nTogether \\(p = 3\\) or \\(p = 5\\) both work. Not sufficient.\nAnswer: E.",
  take: "Generate two concrete pairs that meet every condition with different p — that is a complete proof of E."
},
"di-700-ds-numbers#67": {
  steps: "(1) Two distinct primes summing to 3, 19 or 57: 3 is impossible (1 is not prime), 57 and 3 are odd so one prime would be 2 — \\(2 + 17 = 19\\) works, \\(2 + 55\\) does not. So \\(x = 2\\), and 2 is not a factor of the odd integer \\(z\\). Definite NO. Sufficient.\n(2) \\(z \\in \\{3, 19, 57\\}\\) but \\(x\\) could be 1 (YES) or 2 (NO). Not sufficient.\nAnswer: A.",
  take: "An odd sum of two primes forces one of them to be 2; then parity answers the divisibility question."
},
"di-700-ds-numbers#68": {
  steps: "(1) Perfect numbers: 6 (1 + 2 + 3), 28 (1 + 2 + 4 + 7 + 14), 496, …. Not sufficient.\n(2) Alone, any of 29 values. Not sufficient.\nTogether 6 or 28. Not sufficient.\nAnswer: E.",
  take: "Know the two small perfect numbers, 6 and 28; both sit below 30."
},
"di-700-ds-numbers#69": {
  steps: "Factors pair up \\((d, p/d)\\) except when \\(d = \\sqrt{p}\\), so the count is odd exactly for perfect squares.\n(1) \\(p\\) is a perfect square. Definite YES. Sufficient.\n(2) \\(p = 9\\) (3 factors) or \\(p = 3\\) (2 factors). Not sufficient.\nAnswer: A.",
  take: "Odd number of factors ⇔ perfect square."
},
"di-700-ds-numbers#70": {
  steps: "(1) The product of \\(n + 1\\) consecutive integers is always divisible by \\((n + 1)!\\); 16 divides \\(6!\\) but not \\(5!\\), and \\(m = 1\\) shows \\(n + 1 \\ge 6\\) is needed. So any \\(n \\ge 5\\). Not sufficient.\n(2) \\((n - 4)(n - 5) = 0\\): \\(n = 4\\) or 5. Not sufficient.\nTogether \\(n = 5\\). Sufficient.\nAnswer: C.",
  take: "A statement that holds for a whole range of n narrows without fixing; pair it with a two-root quadratic."
},
"di-700-ds-numbers#71": {
  steps: "(1) The gcd divides \\(a - b = 4\\): it is 1, 2 or 4 depending on \\(b\\). Not sufficient.\n(2) \\(b\\) is a multiple of 4; \\(a\\) unknown. Not sufficient.\nTogether \\(\\gcd(4, b) = 4\\). Sufficient.\nAnswer: C.",
  take: "gcd(a, b) divides a − b; when a − b = 4, the gcd is a divisor of 4."
},
"di-700-ds-numbers#72": {
  steps: "(1) is the definition of the factorial, true for every positive \\(n\\). (2) \\(n(n + 1)(n + 2)\\) is a product of three consecutive integers, always divisible by 3. Neither statement excludes anything.\nAnswer: E.",
  take: "Recognise identities disguised as information."
},
"di-700-ds-numbers#73": {
  steps: "\\(n\\) is a positive integer. 30 needs the primes 2, 3, 5.\n(1) \\(20 = 2^{2} \\cdot 5\\) divides \\(n^{2}\\), so \\(n\\) is divisible by 2 and 5, i.e. by 10; \\(n = 10\\) (NO) or 30 (YES). Not sufficient.\n(2) \\(12 = 2^{2} \\cdot 3\\) divides \\(n^{3}\\), so \\(n\\) is divisible by 2 and 3, i.e. by 6; \\(n = 6\\) or 30. Not sufficient.\nTogether \\(n\\) has 2, 3 and 5: divisible by 30. Sufficient.\nAnswer: C.",
  take: "If a prime divides \\(n^{k}\\) it divides n; collect the primes from both statements."
},
"di-700-ds-numbers#74": {
  steps: "(1) \\(y^{2}\\) with \\(y \\ge 3\\) has an odd number of factors, at least 3, so \\(x\\) has at least 3 factors and is not prime. Definite NO. Sufficient.\n(2) \\(z\\) could be a prime (giving \\(x\\) two factors) or 4 (three factors). Not sufficient.\nAnswer: A.",
  take: "\"Same number of factors as a square\" means an odd count above 1 — never a prime."
},
"di-700-ds-numbers#75": {
  steps: "\\(30!\\) contains \\(\\lfloor 30/5 \\rfloor + \\lfloor 30/25 \\rfloor = 7\\) factors of 5 (and plenty of 2s), so \\(10^{7}\\) divides it and \\(10^{8}\\) does not.\n(1) \\(d \\in \\{1, \\dots, 7\\}\\). Not sufficient.\n(2) \\(d \\ge 7\\). Not sufficient.\nTogether \\(d = 7\\). Sufficient.\nAnswer: C.",
  take: "Count 5s in a factorial to bound the power of 10 that divides it."
},
"di-700-ds-numbers#76": {
  steps: "The question asks whether \\(k\\) is composite.\n(1) \\(k > 24\\) could be prime (29) or composite (30). Not sufficient.\n(2) For \\(2 \\le j \\le 13\\), \\(j\\) divides both \\(13!\\) and \\(j\\), so \\(13! + j\\) is divisible by \\(j\\), with \\(1 < j < k\\). Every such \\(k\\) is composite. Definite YES. Sufficient.\nAnswer: B.",
  take: "n! + j for 2 ≤ j ≤ n is always composite — a classic block of consecutive composites."
},
"di-700-ds-numbers#77": {
  steps: "(1) \\(x = y(3y + 7)\\), a multiple of \\(y\\). Definite YES. Sufficient.\n(2) \\(x(x - 1)\\) is a multiple of \\(y\\): \\(x = 3, y = 2\\) (NO) or \\(x = 4, y = 2\\) (YES). Not sufficient.\nAnswer: A.",
  take: "y dividing x(x − 1) says nothing about x alone; y may sit entirely in x − 1."
},
"di-700-ds-numbers#78": {
  steps: "(1) \\(\\text{lcm}(y, 3) = 6\\) gives \\(y = 2\\) or \\(y = 6\\). Not sufficient.\n(2) Says nothing about \\(y\\). Not sufficient.\nTogether \\(\\tfrac12\\) and \\(\\tfrac16\\) both fit. Not sufficient.\nAnswer: E.",
  take: "lcm(y, 3) = 6 has two solutions; the numerator cannot separate them."
},
"di-700-ds-numbers#79": {
  steps: "(1) \\(n = 5, t = 5\\) gives 5; \\(n = 5, t = 35\\) gives 7. Not sufficient.\n(2) The lcm \\(105 = 3 \\times 5 \\times 7\\) contains every prime factor of \\(n\\) and of \\(t\\), so the greatest prime factor of \\(nt\\) is 7. Sufficient.\nAnswer: B.",
  take: "The set of primes dividing nt is exactly the set of primes dividing lcm(n, t)."
},
"di-700-ds-numbers#80": {
  steps: "(1) \\(xz\\) even means \\(x\\) or \\(z\\) is even; if \\(x\\) is even then so is \\(z\\) (a multiple of \\(x\\)). Either way \\(z\\) is even. Sufficient.\n(2) \\(z\\) is a multiple of the even number \\(y\\). Sufficient.\nAnswer: D.",
  take: "Evenness propagates from a factor to its multiples."
},
"di-700-ds-numbers#81": {
  steps: "(1) \\(k = 2\\): \\(40 = 2^{3} \\cdot 5\\) has 8 factors; \\(k = 3\\): \\(60 = 2^{2} \\cdot 3 \\cdot 5\\) has 12. Not sufficient.\n(2) \\(140 = 2^{2} \\cdot 5 \\cdot 7\\) has \\(3 \\times 2 \\times 2 = 12\\) factors. Sufficient.\nAnswer: B.",
  take: "A prime that is already in 20 (2 or 5) changes the count differently from a new prime."
},
"di-700-ds-numbers#82": {
  steps: "The gcd equals \\(\\gcd(12, y)\\).\n(1) \\(8y + 12 = 12u\\) means \\(y\\) is a multiple of 3: \\(y = 3\\) gives gcd 3, \\(y = 6\\) gives 6. Not sufficient.\n(2) \\(y\\) is a multiple of 12, so \\(\\gcd(12, y) = 12\\). Sufficient.\nAnswer: B.",
  take: "Reduce gcd(x, y) with x = 8y + 12 to gcd(12, y) — then only y's relation to 12 matters."
},
"di-700-ds-numbers#83": {
  steps: "(1) If \\(n\\) is odd, \\(2n\\) adds the prime 2, so \\(n\\) has 3; if \\(n\\) is even, \\(n\\) has 4. Not sufficient.\n(2) \\(n^{2}\\) has exactly the primes of \\(n\\): four. Sufficient.\nAnswer: B.",
  take: "The prime set of \\(n^{k}\\) equals that of n; the prime set of 2n may gain a 2."
},
"di-700-ds-numbers#84": {
  steps: "The expression factors as \\((k + 1)(k + 2)(k + 3)\\).\n(1) \\(k = 8m\\): \\(k + 1\\) and \\(k + 3\\) are odd and \\(k + 2 = 8m + 2\\) has exactly one factor of 2. Not divisible by 4 — definite NO. Sufficient.\n(2) \\(k + 1\\) is 3 × odd, so \\(k\\) is even: \\(k = 2\\) gives \\(3 \\cdot 4 \\cdot 5 = 60\\) (YES); \\(k = 8\\) gives \\(9 \\cdot 10 \\cdot 11 = 990\\) (NO). Not sufficient.\nAnswer: A.",
  take: "With three consecutive integers, only the even one(s) supply factors of 2; count them exactly."
},
"di-700-ds-numbers#85": {
  steps: "(1) \\((n - 1)n(n + 1)\\) is a product of three consecutive integers — always a multiple of 3. No information. Not sufficient.\n(2) \\(n(n + 1)^{2}\\) is a multiple of 3 exactly when \\(n\\) or \\(n + 1\\) is, i.e. \\(n - 1\\) is not. Definite NO. Sufficient.\nAnswer: B.",
  take: "Among n − 1, n, n + 1 exactly one is a multiple of 3; knowing it is n or n + 1 rules out n − 1."
},
"di-700-ds-numbers#86": {
  steps: "(1) \\(xz\\) even means \\(x\\) or \\(z\\) is even; since \\(z = x + 2\\), both are even, and consecutive even numbers include a multiple of 4: \\(xz\\) is divisible by 8, remainder 0. Sufficient.\n(2) \\(y\\) odd, so \\(x\\) and \\(z\\) are even — the same argument, remainder 0. Sufficient.\nAnswer: D.",
  take: "Two consecutive even numbers multiply to a multiple of 8."
},
"di-700-ds-numbers#87": {
  steps: "(1) \\(3x\\) odd means \\(x\\) odd, so \\(x - 1\\) and \\(x + 1\\) are consecutive evens, product divisible by 8. Definite YES. Sufficient.\n(2) \\(x = 4y + 1\\) is odd — same conclusion. Sufficient.\nAnswer: D.",
  take: "For odd x, \\(x^{3} - x\\) is always a multiple of 24."
},
"di-700-ds-numbers#88": {
  steps: "(1) \\(m^{3} - m\\) is always a multiple of 6 but not always of 5 (\\(m = 12\\) gives 1,716); with \\(k = 10\\) the product is a multiple of 30, with \\(k = 11\\) it need not be. Not sufficient.\n(2) \\(n^{5} - n = n(n - 1)(n + 1)(n^{2} + 1)\\): divisible by 2 and 3 from the consecutive triple, and by 5 because whenever \\(n \\equiv \\pm 2 \\pmod 5\\), \\(n^{2} + 1\\) is a multiple of 5. Definite YES. Sufficient.\nAnswer: B.",
  take: "\\(n^{5} - n\\) is divisible by 30 for every integer n (Fermat's little theorem in disguise)."
},
"di-700-ds-numbers#89": {
  steps: "\\(x = z^{2}\\).\n(1) \\(y = 8z + 1 - z^{2}\\): \\(z = 5\\) gives \\(y = 16\\) (consecutive squares 25, 16 — YES); \\(z = 8\\) gives \\(y = 1\\) (64 and 1 — NO). Not sufficient.\n(2) \\(y = z^{2} - 2z + 1 = (z - 1)^{2}\\): \\(x\\) and \\(y\\) are consecutive perfect squares. Definite YES. Sufficient.\nAnswer: B.",
  take: "\\(z^{2} - (z - 1)^{2} = 2z - 1\\): a difference of 2z − 1 from a square lands exactly on the previous square."
},
"di-700-ds-numbers#90": {
  steps: "Two-digit numbers with digit sum 4: 13, 22, 31 and 40.\n(1) Odd: 13 or 31. Not sufficient.\n(2) \\(2x < 44\\) means \\(x < 22\\): only 13 qualifies. Sufficient.\nAnswer: B.",
  take: "Enumerate the handful of numbers a digit condition allows, then apply each statement."
},
"di-700-ds-numbers#91": {
  steps: "(1) \\(b = 1.5c\\) needs \\(c\\) even; \\(a = 1.5b\\) needs \\(b\\) even and at most 6. \\(c = 4\\), \\(b = 6\\), \\(a = 9\\) is the only fit (\\(c = 2\\) gives \\(b = 3\\), \\(a = 4.5\\); \\(c = 6\\) gives \\(a = 13.5\\)). The number is 964. Sufficient.\n(2) \\(x = 2\\), \\(c = 1\\) gives 731; \\(x = 2\\), \\(c = 2\\) gives 842. Not sufficient.\nAnswer: A.",
  take: "Digit constraints (integer, 1–9) can turn a ratio chain into a unique answer."
},
"di-700-ds-numbers#92": {
  steps: "(1) \\(x\\) rounds to 1.44: \\(a = 4\\) with \\(b < 5\\), or \\(a = 3\\) with \\(b \\ge 5\\) — many values. Not sufficient.\n(2) \\(x\\) rounds to 1.436: the thousandths digit becomes 6 only from 1.4355 (the final 5 rounds up), so \\(a = 3, b = 5\\), \\(x = 1.4355\\) and \\(10 - x = 8.5645\\). Sufficient.\nAnswer: B.",
  take: "A fixed final digit of 5 makes the rounding direction certain, which can pin the earlier digits."
},
"di-700-ds-coord#1": {
  steps: "Same quadrant means \\(-a\\) and \\(-b\\) share a sign and so do \\(b\\) and \\(a\\): \\(a\\) and \\(b\\) have the same sign. \\((-x, y)\\) joins them if \\(x\\) has the sign of \\(a\\) and \\(y\\) has the sign of \\(a\\) too.\n(1) \\(x, y\\) share a sign, but which? Not sufficient.\n(2) \\(x\\) has the sign of \\(a\\); \\(y\\) unknown. Not sufficient.\nTogether \\(x\\) and \\(y\\) both have the sign of \\(a\\). Definite YES. Sufficient.\nAnswer: C.",
  take: "Quadrant questions are sign questions; write down which signs each coordinate needs."
},
"di-700-ds-coord#2": {
  steps: "The \\(x\\)-intercepts are \\((-a, 0)\\) and \\((-b, 0)\\).\n(1) Only the sum is known. Not sufficient.\n(2) \\(ab = -6\\); only the product. Not sufficient.\nTogether \\(a, b\\) are the roots of \\(t^{2} + t - 6 = 0\\): 2 and \\(-3\\) in some order, so the intercepts are \\((-2, 0)\\) and \\((3, 0)\\) either way. Sufficient.\nAnswer: C.",
  take: "Sum and product of two numbers determine the pair (unordered) — enough when the answer is a set of points."
},
"di-700-ds-coord#3": {
  steps: "(1) A steep line through \\((1.5, 0)\\) misses the circle; a nearly flat one hits it. Not sufficient.\n(2) Slope alone says nothing about position. Not sufficient.\nTogether: \\(y = -\\tfrac{1}{10}(x - c)\\) with \\(c > 1\\). Its distance from the origin is \\(\\dfrac{c/10}{\\sqrt{1 + 1/100}} \\approx 0.0995c\\): less than 1 for \\(c = 2\\) (intersects), more than 1 for \\(c = 100\\) (misses). Not sufficient.\nAnswer: E.",
  take: "Intersection with a circle depends on the line's distance from the centre; test a near and a far intercept."
},
"di-700-ds-coord#4": {
  steps: "(1) Says nothing about \\((u, v)\\). Not sufficient.\n(2) \\(u^{2} + v^{2} = (1 - r)^{2} + (1 - s)^{2} = r^{2} + s^{2} + 2 - 2(r + s)\\), equal to \\(r^{2} + s^{2}\\) exactly when \\(r + s = 1\\) — unknown. Not sufficient.\nTogether \\(r + s = 1\\), so the distances are equal. Definite YES. Sufficient.\nAnswer: C.",
  take: "Equidistant from the origin ⇔ equal sums of squares; expand and see what condition is missing."
},
"di-700-ds-coord#5": {
  steps: "Let \\(y = mx + b\\).\n(1) \\(m = 3b\\): infinitely many lines. Not sufficient.\n(2) \\(0 = -\\tfrac13 m + b\\), i.e. \\(m = 3b\\) — the identical condition. Not sufficient, together or apart.\nAnswer: E.",
  take: "An x-intercept of \\(-\\tfrac{1}{3}\\) is exactly \"slope = 3 × y-intercept\"; two restatements never combine into more."
},
"di-700-ds-coord#6": {
  steps: "(1) \\((p, q) = (2, -4)\\) YES; \\((1, -8)\\) NO. Not sufficient.\n(2) \\(p + q = -2\\): \\((2, -4)\\) YES; \\((0, -2)\\) NO. Not sufficient.\nTogether \\(p + q = -2\\), \\(pq = -8\\): the pair is \\(\\{2, -4\\}\\), so the graph passes through \\((2, 0)\\). Definite YES. Sufficient.\nAnswer: C.",
  take: "Sum and product pin the roots; check whether the target value is one of them."
},
"di-700-ds-coord#7": {
  steps: "(1) \\(A\\) is unknown, so the side is unknown. Not sufficient.\n(2) The height from \\(C\\) to side \\(AB\\) (on the \\(y\\)-axis) is 6. For an equilateral triangle the height fixes the side (\\(s = 12/\\sqrt{3}\\)) and hence the area (\\(36/\\sqrt{3} = 12\\sqrt{3}\\)). Sufficient.\nAnswer: B.",
  take: "One length of an equilateral triangle — side or height — determines everything."
},
"di-700-ds-coord#8": {
  steps: "(1) \\(p > 0, q < 0\\), so \\(p - q > 0\\): quadrant I. Sufficient.\n(2) \\(q < 0\\) and \\(-p < 0\\) (so \\(p > 0\\)): again quadrant I. Sufficient.\nAnswer: D.",
  take: "positive − negative is positive; both statements fix the same two signs."
},
"di-700-ds-coord#9": {
  steps: "(1) \\(n\\) passes through the origin and \\((-a, -a)\\), so its slope is 1; \\(-1 \\times 1 = -1\\). Definite YES. Sufficient.\n(2) \\(xy = -1\\) is the perpendicularity condition. Definite YES. Sufficient.\nAnswer: D.",
  take: "A line through the origin and (−a, −a) is y = x whatever a is."
},
"di-700-ds-counting#1": {
  steps: "The number of panels is \\(\\binom{x}{3}\\binom{y}{2}\\).\n(1) \\(\\binom{x + 2}{3} = 56 = \\binom{8}{3}\\), so \\(x = 6\\); \\(y\\) unknown. Not sufficient.\n(2) Relates \\(x\\) and \\(y\\) without fixing either. Not sufficient.\nTogether \\(x = 6, y = 5\\): \\(\\binom{6}{3}\\binom{5}{2} = 20 \\times 10 = 200\\). Sufficient.\nAnswer: C.",
  take: "A binomial value pins its argument (nC3 = 56 ⇒ n = 8); then a linear relation finishes the job."
},
"di-700-ds-counting#2": {
  steps: "There are \\(\\binom{8}{2} = 28\\) pairs.\n(1) \\(\\binom{a}{2} > 14\\) means \\(a(a - 1) > 28\\): \\(a = 6, 7\\) or 8, giving banana-pair probabilities \\(\\tfrac{1}{28}, 0, 0\\). Not sufficient.\n(2) \\(a(8 - a) > \\tfrac{28}{3}\\): \\(a\\) from 2 to 6. Not sufficient.\nTogether \\(a = 6\\), two bananas: probability \\(\\dfrac{1}{28}\\). Sufficient.\nAnswer: C.",
  take: "Probability inequalities become integer inequalities in the count; intersect the allowed ranges."
},
"di-700-ds-counting#3": {
  steps: "(1) Applies to every city, Memphis included: \\(\\tfrac78\\). Sufficient.\n(2) \\(1 - \\tfrac18 = \\tfrac78\\). Sufficient.\nAnswer: D.",
  take: "Complementary events: knowing either probability gives the other."
},
"di-700-ds-counting#4": {
  steps: "Only red and green balls exist, so P(red) + P(green) = 1.\n(1) Red is two-thirds of the balls, so P(red) \\(= \\tfrac23\\). Sufficient.\n(2) P(green) \\(= \\tfrac13\\), so P(red) \\(= 1 - \\tfrac13 = \\tfrac23\\). Sufficient.\nAnswer: D.",
  take: "With two exhaustive colours, each statement determines the other's probability."
},
"di-700-ds-counting#5": {
  steps: "(1) The number of red pencils is unknown. Not sufficient.\n(2) Red : others \\(= 3 : 1\\), so P(red) \\(= \\tfrac34\\). Sufficient.\nAnswer: B.",
  take: "Probability needs the target's share of the whole; a ratio gives that, a partial count does not."
},
"di-700-ds-counting#6": {
  steps: "(1) White : others \\(= 2 : 1\\), so P(white) \\(= \\tfrac23\\). Sufficient.\n(2) 40 white and 10 others gives \\(\\tfrac45\\); 60 and 30 gives \\(\\tfrac23\\). Not sufficient.\nAnswer: A.",
  take: "\"Twice as many\" is a ratio (sufficient); \"30 more\" is a difference (not)."
},
"di-700-ds-counting#7": {
  steps: "(1) 10 gyms have squash courts, but nothing about pools. Not sufficient.\n(2) Exactly 9 gyms have both, so the probability is \\(\\tfrac{9}{12} = \\tfrac34\\). Sufficient.\nAnswer: B.",
  take: "\"Each of the 9 with a pool has a squash court\" is the intersection count in disguise."
},
"di-700-ds-counting#8": {
  steps: "(1) Half the marbles are black, but \\(\\dfrac{b}{n} \\cdot \\dfrac{b - 1}{n - 1}\\) depends on \\(n\\) (2 of 4 gives \\(\\tfrac16\\); 8 of 16 gives \\(\\tfrac{7}{30}\\)). Not sufficient.\n(2) 8 black marbles in a jar of unknown size. Not sufficient.\nTogether 8 black is 50%, so 16 marbles: \\(\\dfrac{8}{16} \\cdot \\dfrac{7}{15} = \\dfrac{7}{30}\\). Sufficient.\nAnswer: C.",
  take: "Draws without replacement need absolute counts; a percentage alone is not enough."
},
"di-700-ds-counting#9": {
  steps: "(1) \\((1 - p)^{2} = 0.36\\), so \\(p = 0.4\\) and P(three rainy days) \\(= 0.4^{3} = 0.064\\). Sufficient.\n(2) \\(p = 0.4\\) directly. Sufficient.\nAnswer: D.",
  take: "With identical independent days, one value of p answers every such question."
},
"di-700-ds-words#1": {
  steps: "Science \\(= \\tfrac{H}{3}\\), math \\(= \\tfrac{2H}{3}\\), so \\(H + \\tfrac{H}{3} + \\tfrac{2H}{3} + L = 2000\\), i.e. \\(2H + L = 2000\\).\n(1) \\(L = \\tfrac{2H}{3}\\): \\(2H + \\tfrac{2H}{3} = 2000\\), \\(H = 750\\), \\(L = 500\\). Sufficient.\n(2) \\(\\tfrac{2H}{3} - \\tfrac{H}{3} = 250\\), \\(H = 750\\), \\(L = 500\\). Sufficient.\nAnswer: D.",
  take: "Reduce the setup to one equation in two unknowns; any statement that fixes one of them is sufficient."
},
"di-700-ds-words#2": {
  steps: "Let the green bucket hold \\(G\\) and the blue \\(K\\). Green contributes \\(0.2G\\) of A and B; blue contributes \\(0.1K\\) of C, but might also contain A or B.\n(1) Total A, B, C \\(= 1.25(0.2G) = 0.25G\\). If blue has no A or B, \\(0.2G + 0.1K = 0.25G\\) gives \\(K = 0.5G\\); but blue could hold some A or B, changing \\(K\\). Not sufficient.\n(2) Rules out shared liquids but gives no sizes. Not sufficient.\nTogether: \\(K = 0.5G\\), red holds \\(1.5G\\), of which \\(0.25G\\) is A, B or C: \\(\\tfrac{1.25}{1.5} = 83\\tfrac13\\%\\) is not. Sufficient.\nAnswer: C.",
  take: "Read for the hidden assumption; a statement that only closes a loophole can still be needed."
},
"di-700-ds-words#3": {
  steps: "The jacket costs \\(4x = 5y\\), so \\(y = 0.8x\\) is built into the question.\n(1) Repeats \\(y = 0.8x\\). Not sufficient.\n(2) \\(x + 0.8x = 43.75\\), \\(x = 24.31\\), jacket \\(= 4x \\approx \\$97.22\\). Sufficient.\nAnswer: B.",
  take: "A statement that restates the stem is never sufficient on its own."
},
"di-700-ds-words#4": {
  steps: "Let the bills be \\(10k, 5k, k\\).\n(1) \\(10k \\cdot 1 = k \\cdot 10\\) holds for every \\(k\\). Not sufficient.\n(2) \\(10k + 25k + 10k = 45k = 225\\), \\(k = 5\\). Sufficient.\nAnswer: B.",
  take: "Check whether a statement is a consequence of the stem before crediting it."
},
"di-700-ds-words#5": {
  steps: "With \\(b\\) baskets (a divisor of 20) the minimum is \\(b\\) apples, one each.\n(1) Halving the baskets always doubles the oranges per basket; it only tells us \\(b\\) is even. Not sufficient.\n(2) 10 oranges cannot reach every basket, so \\(b > 10\\): \\(b = 20\\), minimum 20 apples. Sufficient.\nAnswer: B.",
  take: "Rephrase the question first; then a tautological statement is easy to spot."
},
"di-700-ds-words#6": {
  steps: "(1) \\(20(2p - c) = 2400\\): \\(2p - c = 120\\), which does not fix \\(p - c\\). Not sufficient.\n(2) \\(20(p + 2 - c) = 440\\): \\(p - c = 20\\), profit \\(= 400\\). Sufficient.\nAnswer: B.",
  take: "Adding a constant to the price shifts profit by a known amount; doubling it does not."
},
"di-700-ds-words#7": {
  steps: "(1) \\(n(n - 1) = 72\\) gives \\(n = 9\\) (the negative root is impossible). Sufficient.\n(2) \\(2n - 1 = 17\\), \\(n = 9\\). Sufficient.\nAnswer: D.",
  take: "A quadratic with one positive root is as good as a linear equation."
},
"di-700-ds-words#8": {
  steps: "(1) Thursday 8 leaves 82 for six days; Friday 11 with 10, 9, 7, 6 and Saturday 39 works, and so does Friday 12. Not sufficient.\n(2) The other six days total 52 with Friday the largest. If Friday were at most 11, the six distinct days could total at most \\(11 + 10 + 9 + 8 + 7 + 6 = 51 < 52\\). So Friday exceeds 11. Sufficient.\nAnswer: B.",
  take: "For \"distinct values\" questions, compute the maximum total the cap allows."
},
"di-700-ds-words#9": {
  steps: "(1) \\((f - 0.75)(n + 100) = fn\\) simplifies to \\(100f - 0.75n = 75\\). Not sufficient.\n(2) \\((f + 1.5)(n - 100) = fn\\) simplifies to \\(-100f + 1.5n = 150\\). Not sufficient.\nTogether, adding: \\(0.75n = 225\\), \\(n = 300\\). Sufficient.\nAnswer: C.",
  take: "Products that stay equal expand to linear equations once fn cancels."
},
"di-700-ds-words#10": {
  steps: "(1) Six tickets among three people: someone sold at least 2. Sufficient.\n(2) Three different non-negative counts: the largest is at least 2. Sufficient.\nAnswer: D.",
  take: "\"At least\" questions often yield to a pigeonhole or a smallest-distinct-values argument."
},
"di-700-ds-words#11": {
  steps: "(1) \\(X = 1 - Y < 0.85\\); \\(X\\) could be 0.82 or 0.7. Not sufficient.\n(2) \\(C = 6.5X + 8.5(1 - X) = 8.5 - 2X \\ge 7.3\\) gives \\(X \\le 0.6\\), so yes. Sufficient.\nAnswer: B.",
  take: "A cost constraint on a two-part mix is a bound on one component once the total is fixed."
},
"di-700-ds-words#12": {
  steps: "(1) \\(25h \\ge 150\\), \\(h \\ge 6\\). Not sufficient.\n(2) \\(8p + 25h < 260\\) with \\(p \\ge 11\\): \\(25h < 172\\), \\(h \\le 6\\). Not sufficient.\nTogether \\(h = 6\\). Sufficient.\nAnswer: C.",
  take: "Two opposite inequalities on an integer can pin it to one value."
},
"di-700-ds-words#13": {
  steps: "Revenue \\(= 1000(k + 60) = 1000k + 60000\\); cost \\(= 1000k + t\\); profit \\(= 60000 - t\\). Only \\(t\\) matters.\n(1) \\(1000k + 60000 = 150000\\) gives \\(k = 90\\), not \\(t\\). Not sufficient.\n(2) \\(1000k + t - (500k + t) = 500k = 45000\\) gives \\(k = 90\\) again. Not sufficient.\nBoth statements give the same \\(k\\) and nothing about \\(t\\).\nAnswer: E.",
  take: "Simplify the target first: two statements that both fix the wrong constant are jointly useless."
},
"di-700-ds-words#14": {
  steps: "(1) The first minus the second is 2 gallons; with unknown sizes, 4 gallons may or may not be reachable (containers of 3 and 1 gallon cannot hold 4). Not sufficient.\n(2) Same reasoning. Not sufficient.\nTogether the first container exceeds the third by exactly 4 gallons: fill the first, pour into the third until it is full, and exactly 4 gallons remain. Sufficient.\nAnswer: C.",
  take: "Differences of capacities are measurable; combine the two statements to build the needed difference."
},
"di-700-ds-words#15": {
  steps: "(1) Says nothing about how many people are between or beyond them. Not sufficient.\n(2) No total. Not sufficient.\nTogether: if Chandra is ahead, the line is 3 + Chandra + 2 + Ken + 3 = 10 people (20 ft). If Ken is ahead, the three in front of Chandra are Ken and the two between, and the three behind Ken are the two between and Chandra: 4 people (8 ft). Two answers.\nAnswer: E.",
  take: "Positions in a line are not ordered until the question says who is ahead."
},
"di-700-ds-words#16": {
  steps: "The lower sum wins.\n(1) If Teri's sum is 0 and Nina's first die is 1, her second die could be −6 (sum −5, Nina wins) or 0 (sum 1, Teri wins). Not sufficient.\n(2) Symmetric. Not sufficient.\nTogether: Teri's sum −4, Nina rolls −3 and −3 (sum −6, Nina wins) or 5 and 5 (sum 10, Teri wins). Still two outcomes.\nAnswer: E.",
  take: "Negative dice values break the intuition that \"greater than the sum\" settles the comparison."
},
"di-700-ds-words#17": {
  steps: "Ticks × clicks \\(= 77\\): (7, 11) gives \\(A = 21\\text{–}23, B = 44\\text{–}47\\); (11, 7) gives \\(A = 33\\text{–}35, B = 28\\text{–}31\\); (1, 77) and (77, 1) put the counts hundreds apart.\n(1) A difference of 7 is possible only for \\(A = 35, B = 28\\). Sufficient.\n(2) \\(A\\) could be 4 (with 308 Berks) or 232. Not sufficient.\nAnswer: A.",
  take: "Floor functions turn one equation into ranges; a second condition may intersect them in a single point."
},
"di-700-ds-words#18": {
  steps: "(1) \\(x^{6} < 60\\): \\(2^{6} = 64\\) is too big, so \\(x = 1\\). Sufficient.\n(2) Describes the structure already assumed; no count. Not sufficient.\nAnswer: A.",
  take: "Sixth powers grow so fast that a small bound pins x to 1."
},
"di-700-ds-words#19": {
  steps: "With gap \\(d = B - J\\): when Johnny was \\(\\tfrac{B}{2}\\), Bobby was \\(\\tfrac{B}{2} + d\\), so \\(J = \\tfrac{B}{2} + d = \\tfrac{B}{2} + B - J\\), giving \\(J = \\tfrac{3B}{4}\\) and \\(d = \\tfrac{B}{4}\\).\n(1) \\(B = 4d\\) is the same relation. Not sufficient.\n(2) \\(d = 6\\), so \\(B = 24\\). Sufficient.\nAnswer: B.",
  take: "Translate the stem fully; a statement that repeats it is a trap."
},
"di-700-ds-words#20": {
  steps: "(1) \\(c + m \\le 50\\) and \\(3c + m \\le 100\\). Corners: (0, 50) gives $1,750; (25, 25) gives $1,875; (33, 0) gives $1,320. Maximum at 25 of each. Sufficient.\n(2) Cloth prices do not change the stated profits or hours. Not sufficient.\nAnswer: A.",
  take: "Linear constraints with a linear objective: the optimum sits at a corner of the feasible region."
},
"di-700-ds-words#21": {
  steps: "The predicted date is \\(t - 10\\) years from now.\n(1) Gives the actual date but says nothing about the accuracy of the prediction. Not sufficient.\n(2) \\(|t - 7 - \\text{actual}| = 2\\) with the actual date unknown. Not sufficient.\nTogether: \\(|t - 7 + 4| = 2\\), so \\(t = 5\\) or \\(t = 1\\). Two values.\nAnswer: E.",
  take: "An absolute-value condition leaves two candidates unless something else eliminates one."
},
"di-700-ds-algebra#1": {
  steps: "The expression is \\(2^{3a - 2b}\\).\n(1) \\(3a - 2(1.5a) = 0\\), so the value is \\(2^{0} = 1\\). Sufficient.\n(2) \\(64 \\cdot (\\tfrac14)^{b}\\) depends on \\(b\\). Not sufficient.\nAnswer: A.",
  take: "A relation between exponents can fix a value without fixing either variable."
},
"di-700-ds-algebra#2": {
  steps: "\\(2^{34} = 16 \\cdot (2^{10})^{3} > 16 \\cdot 10^{9} > 10^{10}\\).\n(1) \\(x > 2^{34} > 10^{10}\\): yes. Sufficient.\n(2) \\(x = 2^{35} > 10^{10}\\): yes. Sufficient.\nAnswer: D.",
  take: "Benchmark \\(2^{10} \\approx 10^{3}\\) to compare powers of 2 with powers of 10."
},
"di-700-ds-algebra#3": {
  steps: "(1) \\(a + 2b = 0\\), so the value is \\(2^{0} = 1\\). Sufficient.\n(2) \\(2^{a} \\cdot 256\\) depends on \\(a\\). Not sufficient.\nAnswer: A.",
  take: "Combine to one base; the exponent is what the statements must fix."
},
"di-700-ds-algebra#4": {
  steps: "(1) \\(y = \\pm 25\\), but \\(y = 5^{x} > 0\\), so \\(y = 25\\) and \\(x = 2\\). Sufficient.\n(2) \\(y = 25\\), \\(x = 2\\). Sufficient.\nAnswer: D.",
  take: "A positive base to any real power is positive; use it to discard sign ambiguity."
},
"di-700-ds-algebra#5": {
  steps: "(1) \\(W = 3J\\), \\(4J + P = 24\\): \\(J\\) could be 1 to 6. Not sufficient.\n(2) \\(P = 12\\), so \\(W + J = 12\\). Not sufficient.\nTogether \\(4J = 12\\), \\(J = 3\\). Sufficient.\nAnswer: C.",
  take: "Three unknowns with one equation in the stem need two more independent facts."
},
"di-700-ds-algebra#6": {
  steps: "\\(3^{27} 5^{10} 7^{10} z = 5^{8} 7^{10} 3^{28} x^{y}\\) simplifies to \\(25z = 3x^{y}\\).\n(1) \\(z\\) prime with \\(3 \\mid 25z\\) forces \\(z = 3\\), so \\(x^{y} = 25\\) and, with \\(y \\ge 2\\), \\(x = 5\\). Sufficient.\n(2) \\(x\\) prime: \\(x^{y} = \\tfrac{25z}{3}\\) is a prime power divisible by 25, so \\(x = 5\\). Sufficient.\nAnswer: D.",
  take: "Strip shared factors first; what remains is a small Diophantine equation."
},
"di-700-ds-algebra#7": {
  steps: "(1) The other factor is \\(12 \\div 6 = 2\\); adding, \\(\\tfrac{2x}{3} = 8\\), \\(x = 12\\). Sufficient.\n(2) The other factor is 6; again \\(x = 12\\). Sufficient.\nAnswer: D.",
  take: "When the stem factors into the two statements' expressions, either one closes the system."
},
"di-700-ds-algebra#8": {
  steps: "(1) \\(ab = 15\\) alone leaves \\(a + b\\) free. Not sufficient.\n(2) \\((a - b)^{2} = 4\\) alone leaves \\(ab\\) free. Not sufficient.\nTogether \\((a + b)^{2} = 4 + 4(15) = 64\\). Sufficient.\nAnswer: C.",
  take: "Memorise \\((a + b)^{2} - (a - b)^{2} = 4ab\\); it links the three symmetric quantities."
},
"di-700-ds-algebra#9": {
  steps: "(1) One linear equation. Not sufficient.\n(2) One equation in two unknowns. Not sufficient.\nTogether \\(r - s = 1\\) and \\(r + s = 7\\): \\(r = 4\\), \\(s = 3\\), ratio \\(\\tfrac43\\). Sufficient.\nAnswer: C.",
  take: "A product statement and a sum statement combine through the difference-of-squares factorisation."
},
"di-700-ds-algebra#10": {
  steps: "(1) \\(a + c\\) is not a multiple of \\(10a - 6c\\). Not sufficient.\n(2) \\(20a - 12c = 4\\), so \\(10a - 6c = 2\\) and \\(b = 6\\). Sufficient.\nAnswer: B.",
  take: "Ask what combination of the unknowns the target needs, then see which statement supplies exactly that."
},
"di-700-ds-algebra#11": {
  steps: "(1) \\(2(x + y) = 3xy\\): \\(x = y = \\tfrac43\\) gives \\(\\tfrac{16}{9}\\); \\(x = 1, y = 2\\) gives 2. Not sufficient.\n(2) \\(x^{3} = (2/y)^{3}\\) means \\(x = 2/y\\), so \\(xy = 2\\). Sufficient.\nAnswer: B.",
  take: "Odd powers preserve order, so \\(a^{3} = b^{3}\\) implies a = b with no sign ambiguity."
},
"di-700-ds-algebra#12": {
  steps: "(1) \\(x + 1 - y = 9\\): the value is \\(2^{9}\\). Sufficient.\n(2) \\(x = -3y\\) gives \\(2^{1 - 4y}\\), which varies. Not sufficient.\nAnswer: A.",
  take: "Simplify the target to one exponent; a difference statement fixes it, a ratio statement does not."
},
"di-700-ds-algebra#13": {
  steps: "The condition is \\((100 - p)(100 + q) = 10000\\), so \\(100 - p\\) is a divisor of 10,000 below 100: 1, 2, 4, 5, 8, 10, 16, 20, 25, 40, 50, 80, giving \\(p = 99, 98, 96, 95, 92, 90, 84, 80, 75, 60, 50, 20\\) with \\(q = 9900, 4900, 2400, 1900, 1150, 900, 525, 400, 300, 150, 100, 25\\).\n(1) Many values of \\(p\\) are not multiples of 10. Not sufficient.\n(2) \\(q\\) not a multiple of 10 leaves \\(q = 525\\) (\\(p = 84\\)) or \\(q = 25\\) (\\(p = 80\\)). Not sufficient.\nTogether \\(p = 84\\). Sufficient.\nAnswer: C.",
  take: "\"Decrease then increase back to the start\" is a divisor-pair problem on \\(100^{2}\\)."
},
"di-700-ds-algebra#14": {
  steps: "\\(\\tfrac{7}{11} \\approx 0.636\\).\n(1) \\(Y\\) ranges from 0.2 to 0.917, either side of 0.636. Not sufficient.\n(2) \\(Y < \\tfrac{8}{13} \\approx 0.615 < \\tfrac{7}{11}\\): the answer is a definite no. Sufficient.\nAnswer: B.",
  take: "A definite \"no\" is sufficient; compare fractions by cross-multiplication."
},
"di-700-ds-algebra#15": {
  steps: "(1) \\(p(pq - 1) = 0\\): \\(p = 0\\) (then \\(pq = 0\\)) or \\(pq = 1\\). Not sufficient.\n(2) \\(q(pq - 1) = 0\\): \\(q = 0\\) or \\(pq = 1\\). Not sufficient.\nTogether \\(p = q = 0\\) satisfies both with \\(pq = 0\\), while \\(p = q = 1\\) gives \\(pq = 1\\). Still two answers.\nAnswer: E.",
  take: "Cancelling a variable silently assumes it is non-zero; factor instead."
},
"di-700-ds-algebra#16": {
  steps: "(1) \\(t^{3}u^{2} = 36\\). \\(t = 1\\) gives \\(u = 6\\); \\(t = 2\\) or 3 would need \\(u^{2} = 4.5\\) or \\(\\tfrac43\\). So \\(t = 1, u = 6\\) and \\(t^{-2}u^{-3} = \\tfrac{1}{216}\\). Sufficient.\n(2) \\(u = 6t\\): \\(t^{-2}(6t)^{-3} = \\dfrac{1}{216t^{5}}\\) varies. Not sufficient.\nAnswer: A.",
  take: "Integer constraints can make a single equation in two unknowns sufficient."
},
"di-700-ds-algebra#17": {
  steps: "(1) \\(b! = 4a!\\) forces \\(b = 4, a = 3\\), but \\(c\\) and \\(d\\) are free. Not sufficient.\n(2) \\(d! = 60c!\\): \\((c, d) = (2, 5)\\) or \\((59, 60)\\); \\(a, b\\) unknown. Not sufficient.\nTogether \\(a = 3, b = 4\\) but \\((c, d)\\) still has two options giving different products.\nAnswer: E.",
  take: "A ratio of factorials can be a product of consecutive integers of more than one length."
},
"di-700-ds-algebra#18": {
  steps: "(1) \\(y + x^{3} + x = 2x^{3} - 8x\\) varies. Not sufficient.\n(2) \\(x^{3} - 4x\\) varies. Not sufficient.\nTogether \\(x^{3} - 9x = -5x\\), so \\(x(x^{2} - 4) = 0\\): \\(x = 0, 2, -2\\). For each, \\(y + x^{3} + x = x^{3} - 4x = 0\\). One value. Sufficient.\nAnswer: C.",
  take: "Several solutions for x can still give one value for the expression asked about."
},
"di-700-ds-algebra#19": {
  steps: "\\(0.00064 = 2^{6} \\cdot 2^{-5} \\cdot 5^{-5} = 2 \\cdot 5^{-5}\\).\n(1) \\(z = 20 = 2^{2} \\cdot 5\\): \\(2^{x + 2}5^{y + 1} = 2^{1}5^{-5}\\), so \\(x = -1, y = -6\\), \\(xy = 6\\). Sufficient.\n(2) \\(5^{y}z = 4 \\cdot 5^{-5}\\): \\(z = 4, y = -5\\) or \\(z = 20, y = -6\\). Not sufficient.\nAnswer: A.",
  take: "Convert the decimal to a prime factorisation, then match exponents."
},
"di-700-ds-algebra#20": {
  steps: "The rule links consecutive terms, so one known term fixes the whole sequence in both directions.\n(1) \\(f(4) = f(3) - 4 = 10\\). Sufficient.\n(2) Running the rule backwards: \\(f(5) = f(6) + 6 = 5\\), then \\(f(4) = f(5) + 5 = 10\\). Sufficient.\nAnswer: D.",
  take: "A first-order recursion plus any single term determines every term, earlier or later."
},
"di-700-ds-algebra#21": {
  steps: "The stem gives \\(y(x^{2} - 6x + 9) = y(x - 3)^{2} = 0\\), so \\(y = 0\\) or \\(x = 3\\).\n(1) \\(y = 0, x = -3\\) gives \\(xy = 0\\); \\(x = 3, y = 6\\) gives 18. Not sufficient.\n(2) \\(x < 0\\), so \\(x \\ne 3\\) and \\(y = 0\\): \\(xy = 0\\). Sufficient.\nAnswer: B.",
  take: "Factor the stem completely before reading the statements; a sign condition can kill one branch."
},
});
