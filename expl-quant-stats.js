/* Rewritten explanations — statistics, counting, probability and overlapping sets.

   The through-lines: a mean is a total in disguise; a median is a position, not
   a value, so ordering comes first; standard deviation measures spread, so
   adding a constant never changes it while multiplying scales it; counting
   questions turn on whether order matters; and every overlapping-sets question
   is inclusion–exclusion with the overlap subtracted exactly once. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-statistics-ex#1": {
  steps: "Step 1 — The mean is the total divided by how many values there are.\n" +
    "Step 2 — Add them: \\(4 + 8 + 10 + 6 + 12 = 40\\).\n" +
    "Step 3 — Divide by 5: \\(\\dfrac{40}{5} = 8\\).",
  fast: "Pair numbers that make round sums as you go: \\(4 + 6 = 10\\), \\(8 + 12 = 20\\), plus 10 — total 40, so the mean is 8.\n" +
    "You can also guess-and-adjust: 8 looks central, and the deviations from 8 are \\(-4, 0, +2, -2, +4\\), which sum to zero — confirming 8 exactly.",
  traps: "(A) 6 and (E) 10 are values from the list itself, offered for anyone who confuses mean with a member of the set.\n" +
    "(B) 7 and (D) 9 are the neighbours from an addition slip.\n" +
    "The deviation check disposes of all four in one pass.",
  take: "Mean = total ÷ count. The deviations from the true mean always sum to zero — the fastest possible way to confirm an answer."
},

"quant-statistics-ex#2": {
  steps: "Step 1 — The median is a [[position]], so the list must be ordered first.\n" +
    "Step 2 — Sorted: \\(2, 3, 5, 7, 9\\).\n" +
    "Step 3 — With five values, the median is the 3rd.\n" +
    "Step 4 — That is 5.",
  fast: "Sort, then take the middle. With an odd count of \\(n\\), the median sits at position \\(\\dfrac{n+1}{2}\\) — here the 3rd of 5.\n" +
    "The sorting is the step people skip; the numbers are deliberately given out of order.",
  traps: "(C) 7 is the middle value of the list [[as written]], before sorting — exactly the trap the scrambled order creates.\n" +
    "(D) 6 is the mean-ish midpoint of 2 and 9.\n" +
    "(A) 3 and (E) 9 are other members of the list.",
  take: "Always sort before finding a median. For \\(n\\) odd the median is the \\(\\dfrac{n+1}{2}\\)-th value; for \\(n\\) even it is the average of the two middle ones."
},

"quant-statistics-ex#3": {
  steps: "Step 1 — The mode is the value appearing most often.\n" +
    "Step 2 — Count occurrences: 2 appears once; 3 appears three times; 5 once; 7 once.\n" +
    "Step 3 — The most frequent is 3.\n" +
    "Note that a set can have more than one mode, or none at all if every value appears equally often.",
  fast: "Scan for the repeated value: 3 shows up three times and nothing else repeats.\n" +
    "Mode is the only one of the three averages that does not require sorting or arithmetic — just a frequency count.",
  traps: "(B) 5 and (D) 7 are single members of the list.\n" +
    "(E) 4 is roughly the mean (\\(23/6 \\approx 3.8\\)) — the answer to a different question.\n" +
    "(C) 2 is the smallest value, not the most common.",
  take: "Mean, median and mode answer different questions. Mode = most frequent, and it is the only one that need not be a \"middle\" value at all."
},

"quant-statistics-ex#4": {
  steps: "Step 1 — Mean \\(= \\dfrac{\\text{sum}}{\\text{count}}\\), so sum \\(=\\) mean \\(\\times\\) count.\n" +
    "Step 2 — \\(\\text{sum} = 12 \\times 5\\).\n" +
    "Step 3 — \\(= 60\\).",
  fast: "Multiply the mean by the count: \\(12 \\times 5 = 60\\).\n" +
    "This one line is the single most useful move in the whole averages topic — nearly every harder question begins by converting a mean into a total.",
  traps: "(A) 12 is the mean itself, unmultiplied.\n" +
    "(E) 72 is \\(12 \\times 6\\), an off-by-one in the count.\n" +
    "(C) 24 is \\(12 \\times 2\\) and (B) 17 is \\(12 + 5\\) — adding rather than multiplying.",
  take: "Sum = mean × count. Averages cannot be added or compared directly; totals can, so convert first and convert back only at the end."
},

"quant-statistics-ex#5": {
  steps: "Step 1 — Convert the mean into a total: \\(4 \\times 10 = 40\\).\n" +
    "Step 2 — Remove the known value: \\(40 - 16 = 24\\).\n" +
    "Step 3 — Three numbers remain: \\(\\dfrac{24}{3} = 8\\).",
  fast: "The 16 is 6 above the mean of 10. Removing it takes that surplus of 6 away from the three that remain: \\(\\dfrac63 = 2\\) each.\n" +
    "\\(10 - 2 = 8\\). Deviation thinking avoids both the total and the division.",
  traps: "(E) 10 assumes removing a value leaves the mean untouched — true only if that value equalled the mean.\n" +
    "(D) 9 shares the surplus over 4 rather than the 3 remaining.\n" +
    "(A) 6 and (B) 7 overshoot the correction.\n" +
    "Direction is worth checking first: removing an above-average value must pull the mean [[down]].",
  take: "Removing a value \\(v\\) from \\(n\\) items averaging \\(a\\) shifts the mean by \\(\\dfrac{a - v}{n - 1}\\). Note the denominator is what remains, not what you started with."
},

"quant-statistics-ex#6": {
  steps: "Step 1 — Range is the largest value minus the smallest — nothing else in the set matters.\n" +
    "Step 2 — Largest: 23. Smallest: 4.\n" +
    "Step 3 — \\(23 - 4 = 19\\).",
  fast: "Spot the extremes and subtract: \\(23 - 4 = 19\\). No sorting of the middle values is needed.\n" +
    "Range is the crudest measure of spread precisely because it ignores everything between the endpoints.",
  traps: "(C) 23 is the maximum on its own, unsubtracted.\n" +
    "(A) 16 and (D) 15 are members of the list.\n" +
    "(E) 11 is \\(15 - 4\\), using the wrong maximum.",
  take: "Range = max − min. Unlike standard deviation it depends only on the two extremes, so a single outlier can dominate it entirely."
},

"quant-statistics-ex#7": {
  steps: "Step 1 — Convert each group's average into a total.\n" +
    "Step 2 — \\(30 \\times 80 = 2400\\) and \\(20 \\times 90 = 1800\\).\n" +
    "Step 3 — Combined: \\(4200\\) marks across \\(50\\) students.\n" +
    "Step 4 — \\(\\dfrac{4200}{50} = 84\\).",
  fast: "Weighted average: the 30-student group carries \\(\\tfrac35\\) of the weight and the 20-student group \\(\\tfrac25\\).\n" +
    "\\(0.6(80) + 0.4(90) = 48 + 36 = 84\\).\n" +
    "Bounding is quicker still: the answer must lie between 80 and 90 and nearer 80, which leaves only 82, 83, 83.5 and 84 — and the weights are \\(3:2\\), so it sits 40% of the way up, at 84.",
  traps: "(E) 85 is the plain average of 80 and 90, correct only for equal group sizes.\n" +
    "(A) 82, (B) 83 and (C) 83.5 sit between 80 and the midpoint — the direction is right but they under-weight the stronger group.\n" +
    "Note the answer is nearer 80 than 90, as it must be with more students in the 80 group.",
  take: "A weighted average sits between the two values, closer to the heavier group. Compute the fraction of the way across — here \\(\\tfrac25\\) of the 10-point gap — rather than averaging."
},

"quant-statistics-ex#8": {
  steps: "Step 1 — Convert the mean into a total: four numbers averaging 10 sum to 40.\n" +
    "Step 2 — Write the sum: \\(6 + x + 10 + 14 = 40\\).\n" +
    "Step 3 — The knowns total \\(30\\), so \\(x = 10\\).\n" +
    "Step 4 — Check: \\(\\dfrac{6 + 10 + 10 + 14}{4} = \\dfrac{40}{4} = 10\\) ✓.",
  fast: "Use deviations from 10: the knowns are \\(-4\\), \\(0\\) and \\(+4\\), which already cancel. So \\(x\\) must contribute \\(0\\) — meaning \\(x = 10\\).\n" +
    "When the deviations of the known values sum to zero, the missing value is exactly the mean.",
  traps: "(A) 6 and (E) 14 are values already in the list.\n" +
    "(B) 8 and (D) 12 are the near-misses from an arithmetic slip in the total.\n" +
    "The symmetry of 6 and 14 about 10 is the clue: the question is built so the deviations cancel.",
  take: "Deviations from the mean sum to zero. Checking whether the known values already balance tells you the answer instantly."
},

"quant-statistics-ex#9": {
  steps: "Step 1 — Standard deviation measures how far the values sit from their mean.\n" +
    "Step 2 — Set P is \\(\\{5, 5, 5\\}\\): every value equals the mean, so every deviation is zero and the standard deviation is exactly 0.\n" +
    "Step 3 — Set Q is \\(\\{1, 5, 9\\}\\): the mean is also 5, but the deviations are \\(-4, 0, +4\\), which are not all zero.\n" +
    "Step 4 — Any non-zero spread beats zero, so Q has the greater standard deviation.",
  fast: "A set of identical values always has a standard deviation of zero — the smallest it can ever be. So any set with any variation at all wins.\n" +
    "No computation is needed once you notice P is constant.",
  traps: "(C) \"They are equal\" is tempting because both sets share the same [[mean]] of 5 — but the mean says nothing about spread, which is exactly the distinction being tested.\n" +
    "(E) \"Both are zero\" applies P's property to Q.\n" +
    "(D) \"Cannot be determined\" is wrong: both sets are fully specified.\n" +
    "(A) Set P picks the set with [[no]] spread at all — it reads \"greater standard deviation\" as \"greater consistency\", which is the exact opposite of what the statistic measures.",
  take: "Standard deviation is about spread, not centre. Identical values give zero; two sets can share a mean and have wildly different deviations."
},

"quant-statistics-ex#10": {
  steps: "Step 1 — Adding 5 to every value shifts the whole distribution 5 to the right.\n" +
    "Step 2 — The mean shifts with it: every value is 5 larger, so the average is 5 larger.\n" +
    "Step 3 — The [[gaps between]] the values are unchanged, and standard deviation depends only on those gaps.\n" +
    "Step 4 — So the mean increases by 5 and the standard deviation is unchanged.\n" +
    "Concretely: \\(\\{1,2,3\\}\\) and \\(\\{6,7,8\\}\\) are equally spread.",
  fast: "Picture sliding the whole set along the number line. Its position moves; its shape does not.\n" +
    "The companion rule: [[multiplying]] every value by \\(k\\) multiplies both the mean and the standard deviation by \\(k\\). Adding shifts, multiplying scales.",
  traps: "(B) has the standard deviation increasing by 5 — the most common error, treating spread like position.\n" +
    "(C) reverses which one moves.\n" +
    "(D) claims nothing changes, ignoring the shift in the mean.\n" +
    "(E) has the deviation decreasing, which no additive shift can cause.",
  take: "Add a constant: the mean shifts, the spread does not. Multiply by a constant: both scale. These two rules answer every transformation question in the topic."
},

"quant-statistics-ex#11": {
  steps: "Step 1 — Current total: \\(10 \\times 15 = 150\\).\n" +
    "Step 2 — Add the new value: \\(150 + 15 = 165\\), now spread over 11 numbers.\n" +
    "Step 3 — New mean: \\(\\dfrac{165}{11} = 15\\).\n" +
    "Step 4 — Unchanged, because the added value was exactly the old mean.",
  fast: "Adding a value equal to the mean cannot move the mean — its deviation from the mean is zero, so it contributes nothing to shift the balance.\n" +
    "No arithmetic required once you notice 15 is the existing average.",
  traps: "(A) 13.6 is \\(150/11\\) — adding to the count without adding to the total.\n" +
    "(B) 14 and (D) 15.5 assume the mean must move in one direction or the other.\n" +
    "(E) 16.5 comes from a mis-scaled total.",
  take: "A new value equal to the mean leaves the mean unchanged; above it pulls up, below pulls down. Compare the new value with the current mean before computing anything."
},

"quant-statistics-ex#12": {
  steps: "Step 1 — The list \\(4, 6, 8, 10\\) is already in order.\n" +
    "Step 2 — With an [[even]] count there is no single middle value, so the median is the average of the two central ones.\n" +
    "Step 3 — The middle two are 6 and 8.\n" +
    "Step 4 — \\(\\dfrac{6 + 8}{2} = 7\\).",
  fast: "Average the two middle values: \\(\\dfrac{6+8}{2} = 7\\).\n" +
    "Note the median need not be a member of the set — 7 is not in the list, and that is perfectly normal for an even-sized set.",
  traps: "(A) 6 and (B) 8 are the two central values themselves — the trap for anyone who picks one rather than averaging.\n" +
    "(C) 9 averages the wrong pair.\n" +
    "(E) 5 sits below the whole middle of the list.",
  take: "Even count → median is the average of the two middle values, and it may not appear in the set. Odd count → median is an actual member."
},

"quant-statistics-ex#13": {
  steps: "Step 1 — Five numbers with a mean of 6 have a total of \\(5 \\times 6 = 30\\).\n" +
    "Step 2 — Sum the knowns: \\(2 + 5 + 7 + 10 = 24\\).\n" +
    "Step 3 — \\(x = 30 - 24 = 6\\).\n" +
    "Step 4 — Check: \\(\\dfrac{2+5+7+6+10}{5} = \\dfrac{30}{5} = 6\\) ✓.",
  fast: "Deviations from 6: \\(-4, -1, +1, +4\\), which cancel to zero. So \\(x\\) must also be \\(0\\) away from 6 — that is, \\(x = 6\\).\n" +
    "The known values pairing off symmetrically around the mean is the signal that the missing value is the mean itself.",
  traps: "(E) 5 and (A) 4 are near-misses from a slip in the total of 24.\n" +
    "(C) 8 and (D) 12 overshoot — both would push the mean above 6.\n" +
    "That the answer lands exactly on the mean is not a coincidence: the four known values were chosen to pair off symmetrically around it.",
  take: "Total = mean × count, then subtract the knowns. Checking whether the known deviations already balance often gives the answer with no subtraction at all."
},

"quant-statistics-ex#14": {
  steps: "Step 1 — For any evenly spaced list — consecutive integers included — the median equals the middle term.\n" +
    "Step 2 — With 7 terms, the middle is the 4th, so the 4th integer is 20.\n" +
    "Step 3 — Three integers follow it: 21, 22, 23.\n" +
    "Step 4 — The greatest is 23.\n" +
    "The full list is \\(17, 18, 19, 20, 21, 22, 23\\).",
  fast: "Seven consecutive integers centred on 20 run from \\(20 - 3\\) to \\(20 + 3\\). The greatest is \\(20 + 3 = 23\\).\n" +
    "For an odd count \\(n\\), the list extends \\(\\dfrac{n-1}{2}\\) either side of the median — here 3.",
  traps: "(A) 22 counts only two steps up.\n" +
    "(D) 26 counts six — the full span rather than half of it.\n" +
    "(E) 20 is the median itself; (C) 24 overshoots by one.\n" +
    "Counting the [[gaps]] rather than the terms is what prevents the off-by-one.",
  take: "Consecutive integers: median = mean = middle term. An odd-length list reaches \\(\\dfrac{n-1}{2}\\) in each direction from it."
},

"quant-statistics-ex#15": {
  steps: "Step 1 — Standard deviation measures spread, and multiplying every value by 3 triples every gap between values.\n" +
    "Step 2 — The original gaps are all 3; after multiplying, they are all 9 — three times as wide.\n" +
    "Step 3 — Since every deviation from the mean is tripled, so is the standard deviation.\n" +
    "Step 4 — The multiplier is 3.\n" +
    "Formally: if \\(y = 3x\\), then \\(\\sigma_y = |3|\\,\\sigma_x\\).",
  fast: "Multiplying by \\(k\\) multiplies the standard deviation by \\(|k|\\) — here 3.\n" +
    "Contrast with [[adding]] a constant, which leaves the standard deviation alone. Those two rules cover every transformation the test asks about.",
  traps: "(C) 9 is \\(3^2\\) — the multiplier for the [[variance]], which is the square of the standard deviation. That is the most sophisticated trap on the list.\n" +
    "(A) 1 applies the additive rule, where the deviation is unchanged.\n" +
    "(D) \\(\\sqrt3\\) and (E) 6 have no basis.",
  take: "Multiply by \\(k\\): standard deviation × \\(|k|\\), variance × \\(k^2\\). Add a constant: neither changes. Know which of the two measures the question names."
},

"quant-statistics-ex#16": {
  steps: "Step 1 — Count how often each value appears: 4 twice, 6 once, 8 three times, 10 once.\n" +
    "Step 2 — The highest frequency is three, belonging to 8.\n" +
    "Step 3 — The mode is 8.\n" +
    "For contrast, the median of this 7-value set is also 8 (the 4th value), while the mean is \\(\\dfrac{48}{7} \\approx 6.9\\).",
  fast: "Find the most repeated value: 8 appears three times, more than any other.\n" +
    "Sorting is not required for a mode, though this list happens to be sorted already.",
  traps: "(A) 4 appears twice — the second most frequent, and the trap for a hurried count.\n" +
    "(E) 7 is roughly the mean, answering a different question.\n" +
    "(B) 6 and (D) 10 each appear only once.",
  take: "Mode = highest frequency. When a question gives a set with several repeats, count carefully — the runner-up is always among the choices."
},

"quant-probability-ex#1": {
  steps: "Step 1 — Arranging distinct objects in a row is a permutation: order matters and nothing repeats.\n" +
    "Step 2 — There are 4 choices for the first position, 3 for the second, 2 for the third and 1 for the last.\n" +
    "Step 3 — \\(4 \\times 3 \\times 2 \\times 1 = 4! = 24\\).",
  fast: "Arrangements of \\(n\\) distinct items \\(= n!\\). \\(4! = 24\\).\n" +
    "Worth having ready: \\(3! = 6\\), \\(4! = 24\\), \\(5! = 120\\), \\(6! = 720\\). These four cover most of what the test asks.",
  traps: "(D) 48 is \\(2 \\times 4!\\), double-counting somewhere.\n" +
    "(B) 16 is \\(4^2\\) and (A) 12 is \\(4 \\times 3\\) — stopping the product early.\n" +
    "(E) 4 is the number of books.",
  take: "Order matters and no repetition → \\(n!\\). If order does not matter, you are in combination territory and must divide by the arrangements of the chosen group."
},

"quant-probability-ex#2": {
  steps: "Step 1 — \"Order does not matter\" makes this a combination.\n" +
    "Step 2 — \\(\\displaystyle \\binom{5}{2} = \\dfrac{5!}{2!\\,3!}\\).\n" +
    "Step 3 — \\(= \\dfrac{5 \\times 4}{2 \\times 1} = 10\\).\n" +
    "The division by \\(2!\\) is what removes the double-counting: choosing A then B is the same pair as B then A.",
  fast: "\\(\\dbinom{5}{2} = \\dfrac{5 \\times 4}{2} = 10\\).\n" +
    "For choosing 2 from \\(n\\), the answer is always \\(\\dfrac{n(n-1)}{2}\\) — worth knowing on sight, since it is also the handshake formula.",
  traps: "(C) 20 is \\(5 \\times 4\\) — the permutation, which counts each pair twice.\n" +
    "(A) 5 is the group size; (D) 25 is \\(5^2\\), allowing repetition and order.\n" +
    "(E) 15 is \\(\\dbinom{6}{2}\\), an off-by-one in \\(n\\).",
  take: "Combinations divide out the ordering: \\(\\dbinom{n}{2} = \\dfrac{n(n-1)}{2}\\). If swapping two selections gives the same outcome, you need a combination."
},

"quant-probability-ex#3": {
  steps: "Step 1 — The two flips are independent, so multiply their probabilities.\n" +
    "Step 2 — \\(P(\\text{head}) = \\dfrac12\\) on each flip.\n" +
    "Step 3 — \\(P(\\text{two heads}) = \\dfrac12 \\times \\dfrac12 = \\dfrac14\\).\n" +
    "Step 4 — Or list the four equally likely outcomes — HH, HT, TH, TT — of which one qualifies.",
  fast: "Two independent halves multiply to a quarter. Or count outcomes: 1 favourable out of 4.\n" +
    "With only two flips, listing all four outcomes takes about three seconds and removes any doubt.",
  traps: "(A) \\(\\tfrac12\\) is the probability for a single flip.\n" +
    "(C) \\(\\tfrac18\\) is the answer for [[three]] heads.\n" +
    "(B) \\(\\tfrac13\\) treats HH, HT/TH and TT as three equally likely outcomes — they are not, since one head and one tail can happen two ways.\n" +
    "(E) \\(\\tfrac23\\) has no basis.",
  take: "Independent events multiply. With few outcomes, listing them all is the safest check — and it exposes the unequal-outcome error behind \\(\\tfrac13\\)."
},

"quant-probability-ex#4": {
  steps: "Step 1 — A standard die has six equally likely faces: 1 through 6.\n" +
    "Step 2 — The even faces are 2, 4 and 6 — three of them.\n" +
    "Step 3 — \\(P = \\dfrac{3}{6} = \\dfrac12\\).",
  fast: "Half the faces on a die are even, so the answer is \\(\\tfrac12\\) by symmetry.\n" +
    "Probability = favourable outcomes ÷ total outcomes, whenever every outcome is equally likely.",
  traps: "(B) \\(\\tfrac13\\) counts only two favourable faces, or divides 2 by 6.\n" +
    "(C) \\(\\tfrac16\\) is the chance of a single specified face.\n" +
    "(D) \\(\\tfrac23\\) and (E) \\(\\tfrac56\\) overcount the evens.",
  take: "For equally likely outcomes, probability is a simple count ratio. Confirm the total number of outcomes before counting the favourable ones."
},

"quant-probability-ex#5": {
  steps: "Step 1 — Count the total marbles: \\(3 + 2 = 5\\).\n" +
    "Step 2 — Favourable outcomes: the 3 red marbles.\n" +
    "Step 3 — \\(P(\\text{red}) = \\dfrac35\\).",
  fast: "Red over total: \\(\\dfrac{3}{5}\\).\n" +
    "The denominator is always the whole bag, never the other colour — that single point is what the wrong answers here test.",
  traps: "(D) \\(\\tfrac32\\) uses blue as the denominator, giving a \"probability\" above 1 — impossible, and eliminable on sight.\n" +
    "(A) \\(\\tfrac25\\) is the probability of blue.\n" +
    "(B) \\(\\tfrac12\\) and (E) \\(\\tfrac23\\) come from mis-counting the bag.",
  take: "Probability = favourable ÷ total, and the total is everything in the sample space. Any answer above 1 is wrong before you check anything else."
},

"quant-probability-ex#6": {
  steps: "Step 1 — The two roles are [[distinct]], so president-then-vice-president is a different outcome from the reverse. Order matters.\n" +
    "Step 2 — 6 choices for president.\n" +
    "Step 3 — 5 remaining choices for vice-president.\n" +
    "Step 4 — \\(6 \\times 5 = 30\\).",
  fast: "Distinct roles → multiply the choices in order: \\(6 \\times 5 = 30\\).\n" +
    "The tell is whether swapping the two chosen people produces a different outcome. Here it does, so do [[not]] divide by 2.",
  traps: "(B) 15 is \\(\\dbinom62 = 15\\) — the combination, which treats the two roles as interchangeable. That is the central trap.\n" +
    "(D) 36 is \\(6^2\\), allowing the same person to hold both roles.\n" +
    "(C) 20 and (A) 12 come from mis-set products.",
  take: "Distinct roles → permutation (do not divide). Identical roles, such as \"a committee of 2\" → combination (divide by \\(2!\\)). Ask whether swapping changes the outcome."
},

"quant-probability-ex#7": {
  steps: "Step 1 — Repetition is allowed, so each position is chosen independently from the full set of digits.\n" +
    "Step 2 — Each of the three positions has 10 options (0 through 9).\n" +
    "Step 3 — \\(10 \\times 10 \\times 10 = 1000\\).\n" +
    "Step 4 — Sanity check: the codes run from 000 to 999, which is 1,000 values.",
  fast: "\\(10^3 = 1000\\). Repetition allowed means the count never shrinks between positions.\n" +
    "The 000-to-999 check is the fastest confirmation and also explains why the answer is not 999.",
  traps: "(E) 999 is the largest code, not the count — it forgets that 000 is also a valid code. This is the classic fencepost error.\n" +
    "(A) 720 is \\(10 \\times 9 \\times 8\\), the count [[without]] repetition.\n" +
    "(C) 900 excludes codes starting with 0, which the question does not.\n" +
    "(D) 500 has no derivation.",
  take: "Repetition allowed → \\(k^n\\). Repetition forbidden → the choices count down. And when counting a range that starts at zero, remember to include it."
},

"quant-probability-ex#8": {
  steps: "Step 1 — Two dice give \\(6 \\times 6 = 36\\) equally likely ordered outcomes.\n" +
    "Step 2 — Count the pairs summing to 7: \\((1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\) — six of them.\n" +
    "Step 3 — \\(P = \\dfrac{6}{36} = \\dfrac16\\).",
  fast: "7 is the most likely total on two dice, with exactly 6 ways — one for each value of the first die, since the second is then forced.\n" +
    "That is worth memorising: the counts run \\(1,2,3,4,5,6,5,4,3,2,1\\) for totals 2 through 12.",
  traps: "(C) \\(\\tfrac{5}{36}\\) is the probability of a total of 6 or 8 — the neighbours of 7, and the answer to the very next question in this set.\n" +
    "(A) \\(\\tfrac1{12}\\) counts only three unordered pairs, forgetting that \\((1,6)\\) and \\((6,1)\\) are distinct outcomes.\n" +
    "(B) \\(\\tfrac19\\) and (E) \\(\\tfrac14\\) have no basis.",
  take: "Two dice: 36 ordered outcomes. Order counts, so \\((2,5)\\) and \\((5,2)\\) are separate. Learn the frequency ladder for the totals and these become instant."
},

"quant-probability-ex#9": {
  steps: "Step 1 — A handshake involves an unordered pair, so this is a combination.\n" +
    "Step 2 — \\(\\dbinom52 = \\dfrac{5 \\times 4}{2}\\).\n" +
    "Step 3 — \\(= 10\\).\n" +
    "Step 4 — Check by counting: the first person shakes 4 hands, the next 3 new ones, then 2, then 1 — \\(4+3+2+1 = 10\\).",
  fast: "\\(\\dfrac{n(n-1)}{2} = \\dfrac{5 \\times 4}{2} = 10\\).\n" +
    "Handshakes, diagonals and pair-counting are all the same formula. The descending sum \\(4+3+2+1\\) is a good independent check.",
  traps: "(B) 20 is \\(5 \\times 4\\), counting each handshake twice — once from each participant's side.\n" +
    "(D) 25 is \\(5^2\\), which also has people shaking their own hands.\n" +
    "(A) 5 is the number of people; (E) 15 is \\(\\dbinom62\\).",
  take: "Every handshake question is \\(\\dbinom{n}{2} = \\dfrac{n(n-1)}{2}\\). Dividing by 2 is what stops each pair being counted from both ends."
},

"quant-probability-ex#10": {
  steps: "Step 1 — Total people: \\(4 + 3 = 7\\).\n" +
    "Step 2 — Total ways to choose a committee of 2: \\(\\dbinom72 = \\dfrac{7 \\times 6}{2} = 21\\).\n" +
    "Step 3 — Ways to choose 2 women from 3: \\(\\dbinom32 = 3\\).\n" +
    "Step 4 — \\(P = \\dfrac{3}{21} = \\dfrac17\\).",
  fast: "Sequential probabilities are quicker here: the first pick is a woman with probability \\(\\dfrac37\\), and then the second with \\(\\dfrac26\\).\n" +
    "\\(\\dfrac37 \\times \\dfrac26 = \\dfrac{6}{42} = \\dfrac17\\).\n" +
    "Because the committee is unordered, either method works — but the sequential one needs no combination formula.",
  traps: "(B) \\(\\tfrac27\\) doubles the answer, as if the order of the two women mattered in the numerator but not the denominator.\n" +
    "(D) \\(\\tfrac37\\) is the probability the [[first]] pick is a woman — one step short.\n" +
    "(C) \\(\\tfrac13\\) and (E) \\(\\tfrac12\\) are round decoys well above the true value.",
  take: "Two routes work: \\(\\dfrac{\\text{favourable combinations}}{\\text{total combinations}}\\), or sequential probabilities multiplied. Be consistent — do not mix ordered numerators with unordered denominators."
},

"quant-probability-ex#11": {
  steps: "Step 1 — CAT has 3 letters, all different.\n" +
    "Step 2 — Arrangements of 3 distinct letters: \\(3! = 3 \\times 2 \\times 1\\).\n" +
    "Step 3 — \\(= 6\\).\n" +
    "Step 4 — Listing confirms it: CAT, CTA, ACT, ATC, TAC, TCA.",
  fast: "\\(3! = 6\\). With all letters distinct there is no repetition to divide out.\n" +
    "Compare with LEVEL later in this set, where repeated letters force a division — checking for repeats is always the first step in a word-arrangement question.",
  traps: "(A) 3 is the number of letters.\n" +
    "(C) 9 is \\(3^2\\) and (D) 12 is \\(3 \\times 4\\).\n" +
    "(E) 24 is \\(4!\\), for a four-letter word.",
  take: "Distinct letters → \\(n!\\). Always check for repeated letters first; if there are any, divide by the factorial of each repeat count."
},

"quant-probability-ex#12": {
  steps: "Step 1 — \"Without replacement\" means the second draw sees one fewer marble, and one fewer green.\n" +
    "Step 2 — First draw green: \\(\\dfrac{6}{10}\\).\n" +
    "Step 3 — Second draw green, given the first was: \\(\\dfrac{5}{9}\\).\n" +
    "Step 4 — Multiply: \\(\\dfrac{6}{10} \\times \\dfrac59 = \\dfrac{30}{90} = \\dfrac13\\).",
  fast: "Cancel before multiplying: \\(\\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{6 \\times 5}{90} = \\dfrac13\\).\n" +
    "The combination route agrees: \\(\\dfrac{\\binom62}{\\binom{10}{2}} = \\dfrac{15}{45} = \\dfrac13\\).",
  traps: "(A) \\(\\tfrac9{25}\\) is \\(\\left(\\tfrac{6}{10}\\right)^2\\) — the answer [[with]] replacement, which ignores that the bag changes. That is the trap the phrase \"without replacement\" is testing.\n" +
    "(E) \\(\\tfrac35\\) is the probability of a single green draw.\n" +
    "(C) \\(\\tfrac59\\) is the second conditional probability alone.\n" +
    "(D) \\(\\tfrac12\\) is the \"two colours, so fifty-fifty\" guess. No draw sequence produces it: every two-draw probability here is a product of marble counts over 90, and 45 is not such a product.",
  take: "Without replacement, both numerator and denominator drop by one on the second draw. With replacement, the fractions are identical each time — read which one you have."
},

"quant-probability-ex#13": {
  steps: "Step 1 — LEVEL has 5 letters, but L appears twice and E appears twice.\n" +
    "Step 2 — If all were distinct there would be \\(5! = 120\\) arrangements.\n" +
    "Step 3 — Swapping the two Ls produces no new word, and neither does swapping the two Es, so divide by \\(2!\\) for each repeat.\n" +
    "Step 4 — \\(\\dfrac{120}{2! \\times 2!} = \\dfrac{120}{4} = 30\\).",
  fast: "\\(\\dfrac{n!}{\\text{(repeat counts)!}} = \\dfrac{5!}{2!\\,2!} = 30\\).\n" +
    "Count the repeated letters first — L twice, E twice — and the formula writes itself.",
  traps: "(D) 120 is \\(5!\\), treating every letter as distinct.\n" +
    "(E) 60 divides by only one of the two repeats — the most likely partial error.\n" +
    "(A) 20 and (B) 24 over-divide.",
  take: "Repeated letters: divide \\(n!\\) by the factorial of each repetition count. Each pair of identical letters costs a factor of 2."
},

"quant-probability-ex#14": {
  steps: "Step 1 — A committee is unordered, so this is a combination.\n" +
    "Step 2 — \\(\\dbinom83 = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}\\).\n" +
    "Step 3 — Numerator \\(= 336\\); denominator \\(= 6\\).\n" +
    "Step 4 — \\(\\dfrac{336}{6} = 56\\).",
  fast: "Cancel as you go: \\(\\dfrac{8 \\times 7 \\times 6}{6} = 8 \\times 7 = 56\\) — the 6 in the numerator cancels the \\(3!\\) exactly.\n" +
    "Looking for that cancellation before multiplying keeps the numbers small in every combination calculation.",
  traps: "(D) 336 is the [[permutation]] \\(8 \\times 7 \\times 6\\), counting each committee \\(3! = 6\\) times over.\n" +
    "(A) 24 is \\(8 \\times 3\\) and (E) 28 is \\(\\dbinom82\\).\n" +
    "(C) 112 is double the answer.",
  take: "\\(\\dbinom{n}{k} = \\dfrac{n(n-1)\\cdots}{k!}\\). Cancel the denominator into the numerator before multiplying — and remember a committee has no order."
},

"quant-probability-ex#15": {
  steps: "Step 1 — Two dice give 36 equally likely ordered outcomes.\n" +
    "Step 2 — List the pairs summing to 8: \\((2,6), (3,5), (4,4), (5,3), (6,2)\\).\n" +
    "Step 3 — That is 5 outcomes — note \\((4,4)\\) counts once, since both dice show the same face.\n" +
    "Step 4 — \\(P = \\dfrac{5}{36}\\).",
  fast: "The frequency ladder for two dice runs \\(1,2,3,4,5,6,5,4,3,2,1\\) for totals 2 to 12. A total of 8 sits one step past 7, so it has 5 ways.\n" +
    "Knowing the ladder turns every two-dice question into a lookup.",
  traps: "(A) \\(\\tfrac16\\) is \\(\\tfrac{6}{36}\\), the probability of a total of 7 — the previous question's answer.\n" +
    "(E) \\(\\tfrac{7}{36}\\) counts \\((4,4)\\) twice and adds a phantom pair.\n" +
    "(C) \\(\\tfrac19\\) is \\(\\tfrac{4}{36}\\), missing the double.\n" +
    "(D) \\(\\tfrac1{12}\\) counts only three.",
  take: "For two dice, count ordered pairs — but a double like \\((4,4)\\) occurs only one way. The ladder \\(1,2,3,4,5,6,5,4,3,2,1\\) is worth memorising."
},

"quant-probability-ex#16": {
  steps: "Step 1 — Total marbles: \\(4 + 6 = 10\\).\n" +
    "Step 2 — First draw red: \\(\\dfrac{4}{10}\\).\n" +
    "Step 3 — Second draw red without replacement: \\(\\dfrac{3}{9}\\).\n" +
    "Step 4 — \\(\\dfrac{4}{10} \\times \\dfrac39 = \\dfrac{12}{90} = \\dfrac{2}{15}\\).",
  fast: "\\(\\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac25 \\times \\dfrac13 = \\dfrac{2}{15}\\) — cancel first and the multiplication is trivial.\n" +
    "Combination check: \\(\\dfrac{\\binom42}{\\binom{10}{2}} = \\dfrac{6}{45} = \\dfrac{2}{15}\\) ✓.",
  traps: "(C) \\(\\tfrac4{25}\\) is \\(\\left(\\tfrac{4}{10}\\right)^2\\) — the with-replacement answer, ignoring the changed bag.\n" +
    "(D) \\(\\tfrac15\\) is the first draw's probability halved, or a mis-cancellation.\n" +
    "(B) \\(\\tfrac16\\) and (E) \\(\\tfrac3{25}\\) are near-misses just above and below.",
  take: "Same structure as question 12 with the colours swapped. Without replacement both counts fall by one; cancel the fractions before multiplying."
},

"quant-sets-ages-ex#1": {
  steps: "Step 1 — Anyone playing both sports has been counted in the 18 and again in the 15, so a plain sum double-counts them.\n" +
    "Step 2 — Inclusion–exclusion: \\(|S \\cup T| = 18 + 15 - 8 = 25\\) play at least one.\n" +
    "Step 3 — The rest play neither: \\(30 - 25 = 5\\).",
  fast: "Fill the Venn diagram from the middle out: both = 8, soccer only = 10, tennis only = 7. That is 25 accounted for, leaving 5.\n" +
    "Starting with the overlap is the habit that makes every one of these fast and error-free.",
  traps: "(B) 7 is the tennis-only count and (E) 10 is the soccer-only count — regions of the diagram, not the answer.\n" +
    "(C) 3 comes from \\(30 - 18 - 15 + 8 + 2\\)-style arithmetic slips.\n" +
    "(D) 8 is the overlap, handed to you in the stem.",
  take: "\\(|A \\cup B| = |A| + |B| - |A \\cap B|\\), then subtract from the total for \"neither\". Fill the overlap first when drawing the diagram."
},

"quant-sets-ages-ex#2": {
  steps: "Step 1 — \"Coffee only\" means coffee-drinkers excluding those who also like tea.\n" +
    "Step 2 — \\(25 - 10 = 15\\).\n" +
    "Step 3 — The total of 40 and the tea figure are not needed for this particular question — they are there for the other regions.",
  fast: "Subtract the overlap from the coffee total: \\(25 - 10 = 15\\). One step.\n" +
    "\"Only\" always means the group minus the intersection — the most common single operation in the whole topic.",
  traps: "(D) 25 is [[all]] coffee drinkers, including those who also like tea — the trap the word \"only\" creates.\n" +
    "(A) 10 is the overlap itself and (C) 20 is the tea total.\n" +
    "(E) 5 is what you get by subtracting twice.",
  take: "\"A only\" = \\(|A| - |A \\cap B|\\). Read for \"only\", \"both\", \"at least one\" and \"neither\" — each names a different region."
},

"quant-sets-ages-ex#3": {
  steps: "Step 1 — \"Every student studies at least one\" means nobody is outside the two circles, so the union is the whole group of 50.\n" +
    "Step 2 — Inclusion–exclusion: \\(50 = 30 + 25 - \\text{both}\\).\n" +
    "Step 3 — \\(\\text{both} = 55 - 50 = 5\\).",
  fast: "The two subject counts sum to 55, which is 5 more than the 50 students. That excess is exactly the double-counted overlap: 5.\n" +
    "Whenever the union equals the total, the overlap is simply (sum of the groups) − (total).",
  traps: "(A) 10 and (D) 15 come from arithmetic slips in \\(55 - 50\\).\n" +
    "(E) 0 would require the counts to sum to exactly 50, contradicting the given figures.\n" +
    "(B) 3 is a decoy near the answer.",
  take: "When everyone belongs to at least one group, the overlap is the excess of the group totals over the population. The \"at least one\" phrasing is what licenses this."
},

"quant-sets-ages-ex#4": {
  steps: "Step 1 — Find how many read at least one paper: \\(60 + 50 - 20 = 90\\).\n" +
    "Step 2 — Subtract from the total: \\(100 - 90 = 10\\).\n" +
    "Step 3 — So 10 read neither.",
  fast: "\\(60 + 50 = 110\\), which overshoots 100 by 10 — but that overshoot is the double-counted 20, so the union is \\(110 - 20 = 90\\) and 10 are left out.\n" +
    "Union first, then subtract from the total: two operations for any \"neither\" question.",
  traps: "(A) 30 is \\(100 - 60 - 20 + 10\\)-style arithmetic, or the non-A readers minus the overlap.\n" +
    "(B) 20 is the overlap from the stem.\n" +
    "(C) 0 assumes everyone reads something; (E) 40 is the count who do not read A.",
  take: "Neither \\(=\\) total \\(- |A \\cup B|\\), and \\(|A \\cup B| = |A| + |B| - \\text{both}\\). Two steps, always in that order."
},

"quant-sets-ages-ex#5": {
  steps: "Step 1 — \"Car but not bike\" is the car-only region.\n" +
    "Step 2 — Car owners total 120, of whom 40 also own a bike.\n" +
    "Step 3 — \\(120 - 40 = 80\\).\n" +
    "Step 4 — The 200 total and the 90 bike owners are not needed here; they define the other regions.",
  fast: "Car total minus the overlap: \\(120 - 40 = 80\\).\n" +
    "As in question 2, \"but not\" is the same operation as \"only\" — subtract the intersection.",
  traps: "(B) 120 is all car owners, including the 40 who also own bikes.\n" +
    "(A) 40 is the overlap; (D) 90 is the bike total.\n" +
    "(E) 30 has no derivation — though note bike-only is \\(90 - 40 = 50\\), and neither is \\(200 - 170 = 30\\), which is where it comes from.",
  take: "\"A but not B\" = \\(|A| - |A \\cap B|\\). Extra figures in the stem usually exist to support the other regions — identify which region the question names before computing."
},

"quant-sets-ages-ex#6": {
  steps: "Step 1 — Let Ben's age be \\(b\\); Alia is \\(2b\\).\n" +
    "Step 2 — In 5 years they will be \\(b + 5\\) and \\(2b + 5\\).\n" +
    "Step 3 — Their sum then is 40: \\((2b + 5) + (b + 5) = 40\\).\n" +
    "Step 4 — \\(3b + 10 = 40\\), so \\(3b = 30\\) and \\(b = 10\\).\n" +
    "Step 5 — Alia is \\(2b = 20\\) now.",
  fast: "In 5 years the pair will total 40, and each has gained 5 — so 10 years have been added between them. Today they total \\(40 - 10 = 30\\).\n" +
    "With Alia twice Ben, that 30 splits \\(2:1\\) into 20 and 10. Alia is 20.\n" +
    "Rolling the future sum back to today first avoids the algebra entirely.",
  traps: "(A) 10 is Ben's age — correct work reported for the wrong person, and the likeliest error.\n" +
    "(C) 15 is half of 30, the answer if the ages were equal.\n" +
    "(D) 25 and (E) 30 overshoot; 30 is the pair's combined age today.",
  take: "For \"in \\(n\\) years\" problems with a sum, subtract \\(n\\) from each person to get today's figures — the number of people times \\(n\\) comes off the total."
},

"quant-sets-ages-ex#7": {
  steps: "Step 1 — Let the son be \\(s\\); the father is \\(s + 30\\).\n" +
    "Step 2 — In 10 years: son \\(s + 10\\), father \\(s + 40\\).\n" +
    "Step 3 — The father will be twice the son: \\(s + 40 = 2(s + 10)\\).\n" +
    "Step 4 — \\(s + 40 = 2s + 20\\), so \\(s = 20\\).\n" +
    "Step 5 — The father is \\(20 + 30 = 50\\) now.",
  fast: "The age gap of 30 never changes. When the father is exactly twice the son, the gap equals the son's age — so at that moment the son is 30 and the father 60.\n" +
    "That is 10 years from now, so today they are 20 and 50.\n" +
    "The constant-gap insight removes the algebra from every problem of this shape.",
  traps: "(A) 40 and (B) 45 come from applying the doubling at today's ages rather than in 10 years.\n" +
    "(C) 48 and (E) 55 bracket the answer.\n" +
    "The son's age of 20 is deliberately absent — the question asks for the father.",
  take: "An age difference is constant forever. When one person is twice another, the difference equals the younger person's age — often the whole solution in one line."
},

"quant-sets-ages-ex#8": {
  steps: "Step 1 — Let the daughter be \\(d\\); the mother is \\(4d\\).\n" +
    "Step 2 — In 16 years: daughter \\(d + 16\\), mother \\(4d + 16\\).\n" +
    "Step 3 — Then the mother is twice the daughter: \\(4d + 16 = 2(d + 16)\\).\n" +
    "Step 4 — \\(4d + 16 = 2d + 32\\), so \\(2d = 16\\) and \\(d = 8\\).\n" +
    "Step 5 — Check: today 8 and 32; in 16 years 24 and 48, and \\(48 = 2 \\times 24\\) ✓.",
  fast: "The gap is \\(4d - d = 3d\\) and never changes. When the mother is twice the daughter, the gap equals the daughter's age then: \\(3d = d + 16\\), so \\(d = 8\\).\n" +
    "One equation instead of expanding a bracket, and it uses the same constant-gap idea as the previous question.",
  traps: "(D) 16 is the number of years from the stem.\n" +
    "(B) 10 and (C) 12 come from mis-expanding the bracket (e.g. \\(2d + 16\\)).\n" +
    "(E) 6 undershoots; the mother's current age of 32 is not offered.",
  take: "Set up with today's ages, apply the future condition, and use the constant difference as a shortcut. Always check by ageing both people forward."
},

"quant-sets-ages-ex#9": {
  steps: "Step 1 — Born in consecutive years means the ages are consecutive integers: \\(n-1\\), \\(n\\), \\(n+1\\).\n" +
    "Step 2 — Their sum is \\((n-1) + n + (n+1) = 3n\\).\n" +
    "Step 3 — \\(3n = 30\\), so \\(n = 10\\).\n" +
    "Step 4 — The middle child is 10 — and note that the outer two cancel, which is why the sum is exactly three times the middle age.",
  fast: "For any odd number of consecutive integers, the middle one is the average: \\(\\dfrac{30}{3} = 10\\).\n" +
    "No algebra at all — the middle term of an evenly spaced list is always the mean.",
  traps: "(B) 9 and (D) 11 are the other two children's ages — plausible if you set the variable at the youngest or eldest.\n" +
    "(A) 8 and (E) 12 are further out.\n" +
    "The question specifically names the [[middle]] child, so the other two ages are natural distractors.",
  take: "Consecutive integers: the middle one is the mean, so the sum is (count × middle). Setting the variable at the middle is always the tidiest choice."
},

"quant-sets-ages-ex#10": {
  steps: "Step 1 — Write the two relationships. Anya \\(=\\) Bala \\(+ 5\\); Bala \\(=\\) Chetan \\(+ 3\\).\n" +
    "Step 2 — Substitute: Anya \\(=\\) (Chetan \\(+ 3\\)) \\(+ 5\\) \\(=\\) Chetan \\(+ 8\\).\n" +
    "Step 3 — So Anya is 8 years older than Chetan.\n" +
    "No actual ages are needed — the differences chain regardless of the starting point.",
  fast: "Age gaps add along a chain: \\(5 + 3 = 8\\).\n" +
    "Or pick numbers: Chetan 10, Bala 13, Anya 18 — a gap of 8. Picking a value confirms the chaining in three seconds.",
  traps: "(B) 5 and (C) 3 are the individual gaps from the stem.\n" +
    "(A) 2 subtracts them instead of adding — which would be right only if Bala were [[younger]] than Chetan.\n" +
    "(E) 15 multiplies them.",
  take: "Differences chain by addition when the relationships point the same way. Check the direction of each \"older than\" before adding — a reversed link turns a sum into a difference."
},

"quant-sets-ages-ex#11": {
  steps: "Step 1 — Let the total be \\(T\\). Translate each fraction: female students \\(= \\dfrac{T}{6}\\), female \\(= \\dfrac{2T}{3}\\), students \\(= \\dfrac{T}{3}\\).\n" +
    "Step 2 — \"Neither female nor students\" is everyone outside the union, so first find the union.\n" +
    "Step 3 — \\(|F \\cup S| = \\dfrac{2T}{3} + \\dfrac{T}{3} - \\dfrac{T}{6} = T - \\dfrac{T}{6} = \\dfrac{5T}{6}\\).\n" +
    "Step 4 — Neither \\(= T - \\dfrac{5T}{6} = \\dfrac{T}{6}\\).\n" +
    "Step 5 — That equals 150, so \\(T = 900\\).",
  fast: "The two groups sum to \\(\\dfrac{2}{3} + \\dfrac13 = 1\\) of the convention, and the overlap of \\(\\dfrac16\\) has been counted twice — so the union is \\(1 - \\dfrac16 = \\dfrac56\\), leaving \\(\\dfrac16\\) outside.\n" +
    "\\(\\dfrac{T}{6} = 150\\) gives \\(T = 900\\).\n" +
    "Working in fractions of the whole avoids ever choosing a number to test.",
  traps: "(A) 300 and (B) 450 come from setting 150 equal to \\(\\dfrac{T}{2}\\) or \\(\\dfrac{T}{3}\\).\n" +
    "(C) 600 treats 150 as a quarter.\n" +
    "(D) 800 is a round decoy. A check settles it: \\(\\dfrac{900}{6} = 150\\) ✓, with 600 female, 300 students and 150 female students.",
  take: "When every group is given as a fraction of the whole, do the inclusion–exclusion in fractions and solve once at the end. The leftover fraction is what the count attaches to."
},

"quant-sets-ages-ex#12": {
  steps: "Step 1 — Use the three-set counting identity. Adding the three class sizes counts anyone in two classes twice and anyone in three classes three times:\n" +
    "\\(|H| + |M| + |E| = (\\text{exactly one}) + 2(\\text{exactly two}) + 3(\\text{exactly three})\\).\n" +
    "Step 2 — Substitute: \\(25 + 25 + 34 = 84\\), and exactly three \\(= 3\\):\n" +
    "\\(84 = e_1 + 2e_2 + 9\\), so \\(e_1 + 2e_2 = 75\\).\n" +
    "Step 3 — Every student takes at least one class, so the head count gives a second equation:\n" +
    "\\(e_1 + e_2 + 3 = 68\\), i.e. \\(e_1 + e_2 = 65\\).\n" +
    "Step 4 — Subtract: \\(e_2 = 75 - 65 = 10\\).",
  fast: "The registration total 84 exceeds the head count 68 by 16 — that excess is the double-counting.\n" +
    "Each \"exactly two\" student is counted once too many (adding 1) and each \"exactly three\" student twice too many (adding 2). So \\(e_2 + 2(3) = 16\\), giving \\(e_2 = 10\\).\n" +
    "Counting the [[excess]] directly is one line and skips both equations.",
  traps: "(A) 13 is \\(16 - 3\\), subtracting the triple-counted students only once instead of twice.\n" +
    "(C) 9 and (D) 8 come from mis-setting the excess.\n" +
    "(E) 7 undershoots. Note that \"exactly one\" works out to 55, which is not offered — the question asks specifically about exactly two.",
  take: "Three sets: (sum of group sizes) − (total people) = (exactly two) + 2 × (exactly three). Counting the excess registrations is faster than either full formula."
}

});
