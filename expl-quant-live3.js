/* GMAT Prep — in-depth explanations for the live-exam Quant set 3.
   Every answer was independently re-derived before the explanation was
   written; no stored key was changed. Keys are "setId#n"; index.html merges
   these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-3#1": {
  steps: "Step 1 — The mean is always \\(\\dfrac{4 + 8 + 12 + 16 + x}{5} = \\dfrac{40 + x}{5}\\). The median depends on where \\(x\\) lands, so split into cases.\n" +
    "Step 2 — Case \\(x \\le 8\\): the ordering puts 8 in the middle, so the median is 8. Solve \\(\\dfrac{40+x}{5} = 8\\) to get \\(x = 0\\). That satisfies \\(x \\le 8\\) and is a non-negative integer ✓.\n" +
    "Step 3 — Case \\(8 \\le x \\le 12\\): \\(x\\) itself is the middle value. Solve \\(\\dfrac{40+x}{5} = x\\), giving \\(40 + x = 5x\\) and \\(x = 10\\). That lies in the range ✓.\n" +
    "Step 4 — Case \\(x \\ge 12\\): 12 is the middle value. Solve \\(\\dfrac{40+x}{5} = 12\\) to get \\(x = 20\\), which satisfies \\(x \\ge 12\\) ✓.\n" +
    "Step 5 — Three values work: \\(x = 0, 10, 20\\).",
  fast: "Do not hunt for values — set up the three positions \\(x\\) can occupy relative to the fixed numbers, solve one linear equation in each, and check the solution falls inside its own case. That is three quick equations, and the structure guarantees you have found them all.\n" +
    "The verification step is not optional: an equation can produce a value that contradicts the case it came from, and such a value must be discarded.",
  traps: "(B) One and (C) Two are what you get by stopping after the cases that feel natural — most people find \\(x = 10\\) immediately and one other, then move on.\n" +
    "(A) Zero comes from assuming the median is fixed at 12 (the middle of the four given numbers) and finding the resulting \\(x\\) inconsistent.\n" +
    "(E) Every integer misreads the question as asking when the mean *can* equal the median rather than for how many \\(x\\).\n" +
    "Note that \\(x\\) is only required to be a non-negative integer, so \\(x = 0\\) is legitimate — excluding it is a common way to land on (C).",
  take: "When an unknown can sit anywhere in an ordered set, enumerate its positions as cases, solve each, and discard solutions that fall outside their own case."
},

"quant-live-3#2": {
  steps: "Step 1 — The five prices total \\(20 + 35 + 40 + 45 + 70 = 210\\).\n" +
    "Step 2 — The average rose \\(2\\%\\), and with a fixed count of five stocks that means the total rose \\(2\\%\\) too: \\(0.02 \\times 210 = 4.20\\).\n" +
    "Step 3 — One price rose \\(16\\%\\) and another fell \\(35\\%\\), so \\(0.16a - 0.35b = 4.20\\) for two of the listed prices.\n" +
    "Step 4 — Test the largest riser first. With \\(a = 70\\): \\(0.16 \\times 70 = 11.20\\), so \\(0.35b = 7.00\\) and \\(b = 20\\) — a price on the list ✓.\n" +
    "Step 5 — No other pairing works: \\(a = 45\\) needs \\(b \\approx 8.57\\), \\(a = 40\\) needs \\(b \\approx 6.29\\), \\(a = 35\\) needs \\(b = 4\\), and \\(a = 20\\) gives a negative \\(b\\).\n" +
    "Step 6 — So the movers were 70 and 20, leaving 35, 40 and 45 unchanged.",
  fast: "Convert the percentage change of the average into a dollar change of the total — with a fixed number of stocks the two percentages are identical, so the total must rise by \\(4.20\\).\n" +
    "Then start from the largest candidate riser: a \\(16\\%\\) gain is small, so only a big price can offset a \\(35\\%\\) loss and still net a gain. That reasoning points at 70 immediately.",
  traps: "(B), (C), (D) and (E) each keep 70 or 20 fixed, which the arithmetic forbids — those are exactly the two prices that had to move.\n" +
    "(C) is the most attractive of them because it keeps 20 and 70 together, the pair people identify as \"special\" without checking which side of the transaction each is on.\n" +
    "(E) keeps 70 constant and would require the riser to be 45 or below, none of which can offset a \\(35\\%\\) fall on any listed price.\n" +
    "The setup error to avoid is applying the \\(2\\%\\) to a single stock rather than to the portfolio total.",
  take: "A percentage change in the average of a fixed-size group equals the same percentage change in the total. Convert to an absolute change, then test the few pairings that could produce it."
},

"quant-live-3#3": {
  steps: "Step 1 — The set holds \\(y\\) integers with \\(0 < y < 7\\), so \\(y\\) is one of \\(1, 2, 3, 4, 5, 6\\).\n" +
    "Step 2 — The median of a set of integers is either an integer (odd count) or the average of two integers (even count), which is an integer or a half-integer. Nothing else is reachable.\n" +
    "Step 3 — Check each choice against that. \\(0\\) is an integer — reachable, e.g. \\(\\{-1, 0, 4\\}\\) has mean 1 and median 0.\n" +
    "Step 4 — \\(x\\) is an integer — reachable, e.g. \\(\\{x, x, x\\}\\).\n" +
    "Step 5 — \\(-x\\) is an integer — reachable, e.g. with \\(x = 1\\), the set \\(\\{-2, -1, 6\\}\\) has mean 1 and median \\(-1\\).\n" +
    "Step 6 — \\(y/3\\) is an integer whenever \\(y = 3\\) or \\(y = 6\\) — reachable.\n" +
    "Step 7 — \\(2y/7\\) for \\(y = 1\\) to \\(6\\) gives \\(\\tfrac27, \\tfrac47, \\tfrac67, \\tfrac87, \\tfrac{10}7, \\tfrac{12}7\\) — never an integer and never a half-integer, since 7 never divides \\(2y\\) in that range. Not reachable.",
  fast: "Ignore the mean entirely at first — the question is really about what values a median of integers *can take*. Only integers and half-integers qualify, so scan the choices for one that can be neither.\n" +
    "\\(2y/7\\) has a denominator of 7 that cannot cancel for any \\(y\\) from 1 to 6, which settles it without constructing a single example set.",
  traps: "(C) \\(-x\\) looks impossible because \\(x\\) is a positive integer and the average is positive — but a median can sit far below the mean when the set is skewed, so a negative median is perfectly compatible with a positive average.\n" +
    "(A) 0 attracts the same false intuition.\n" +
    "(D) \\(y/3\\) looks fractional, but \\(y\\) can be 3 or 6, and \"could NOT be\" requires impossibility for *every* admissible \\(y\\).\n" +
    "(B) \\(x\\) is trivially reachable.\n" +
    "On \"could NOT be\" questions, one working example per choice is enough to eliminate it — the burden is impossibility, not typicality.",
  take: "The median of a set of integers is an integer or a half-integer, nothing else. On \"could NOT be\" questions, eliminate a choice with a single valid example."
},

"quant-live-3#4": {
  steps: "Step 1 — For a set of consecutive integers, the median equals the average of the endpoints.\n" +
    "Step 2 — Set \\(S\\) runs from \\(a\\) to \\(b\\), so its median is \\(\\dfrac{a+b}{2}\\). We are told that equals \\(\\dfrac{3b}{4}\\).\n" +
    "Step 3 — Solve: \\(2a + 2b = 3b\\), so \\(2a = b\\), i.e. \\(a = \\dfrac{b}{2}\\).\n" +
    "Step 4 — Set \\(Q\\) runs from \\(b\\) to \\(c\\), so its median is \\(\\dfrac{b+c}{2} = \\dfrac{7c}{8}\\).\n" +
    "Step 5 — Solve: \\(4b + 4c = 7c\\), so \\(4b = 3c\\) and \\(b = \\dfrac{3c}{4}\\).\n" +
    "Step 6 — Then \\(a = \\dfrac{b}{2} = \\dfrac{3c}{8}\\).\n" +
    "Step 7 — Set \\(R\\) runs from \\(a\\) to \\(c\\), so its median is \\(\\dfrac{a+c}{2} = \\dfrac{\\tfrac{3c}{8} + c}{2} = \\dfrac{\\tfrac{11c}{8}}{2} = \\dfrac{11c}{16}\\).",
  fast: "One fact does everything: for consecutive integers, median = average of the endpoints. Apply it three times, expressing each variable in terms of \\(c\\) as you go — \\(b = \\tfrac{3c}{4}\\), then \\(a = \\tfrac{3c}{8}\\), then the answer.\n" +
    "A concrete check is quick too: take \\(c = 16\\), so \\(b = 12\\) and \\(a = 6\\). The median of 6 to 16 is 11, and \\(\\tfrac{11 \\times 16}{16} = 11\\) ✓.",
  traps: "(A) \\(\\tfrac{3c}{8}\\) is \\(a\\) itself — the value you derive on the way, mistaken for the answer.\n" +
    "(E) \\(\\tfrac{3c}{4}\\) is \\(b\\), the other intermediate.\n" +
    "(B) \\(\\tfrac c2\\) comes from averaging \\(a\\) and \\(c\\) as though \\(a\\) were 0, or from averaging the two given medians.\n" +
    "(D) \\(\\tfrac{5c}{7}\\) is the average of \\(\\tfrac34\\) and \\(\\tfrac78\\)-flavoured arithmetic — but the median of the combined range is not the average of the two sub-medians, because the ranges have different lengths.\n" +
    "Substituting a concrete \\(c\\) at the end is the fastest way to catch any of these.",
  take: "For consecutive integers, median = mean = average of the first and last terms. Express every variable in terms of one of them, then substitute a number to check."
},

"quant-live-3#5": {
  steps: "Step 1 — The rule \\(R_n = R_{n-1} + 3\\) makes \\(R\\) an arithmetic sequence with common difference 3 — an evenly spaced set.\n" +
    "Step 2 — For any evenly spaced set, the median equals the mean. That is the whole question.\n" +
    "Step 3 — Statement (2) gives the mean as 36, so the median is 36 — [[sufficient]], and note that you never need to know how many terms there are or where the sequence starts.\n" +
    "Step 4 — Statement (1) gives the first term as 15 but no term count. With three terms the set is \\(\\{15, 18, 21\\}\\) and the median is 18; with five terms it is \\(\\{15, \\dots, 27\\}\\) and the median is 21 — [[not sufficient]].",
  fast: "Recognise the recurrence as \"evenly spaced\" and the identity median = mean does the rest. Statement (2) hands you the mean directly, so it hands you the median.\n" +
    "Statement (1) fails on a count, not on a value — a starting point says nothing about the middle without knowing how far the list runs.",
  traps: "(A) picks the statement that gives a concrete term of the sequence, which feels more informative than an average but determines nothing about the middle.\n" +
    "(C) is the answer of someone who tries to reconstruct the actual sequence. With both statements you could find the term count, but that is far more work than the question requires.\n" +
    "(D) would need the first term alone to work.\n" +
    "(E) understates (2).\n" +
    "The property being tested is symmetry: an evenly spaced set is balanced about its centre, so its mean and median coincide regardless of length.",
  take: "In any evenly spaced set, mean = median. A Data Sufficiency statement giving one of them gives the other for free."
},

"quant-live-3#6": {
  steps: "Step 1 — Five pieces with an average of 124 have a total length of \\(5 \\times 124 = 620\\).\n" +
    "Step 2 — The median of five values is the third when sorted, so the middle piece is 140.\n" +
    "Step 3 — To make the shortest piece as long as possible, make everything above it as short as possible.\n" +
    "Step 4 — The two pieces above the median must each be at least 140, so set both to exactly 140. With the median they account for \\(3 \\times 140 = 420\\).\n" +
    "Step 5 — That leaves \\(620 - 420 = 200\\) for the two shortest pieces.\n" +
    "Step 6 — The shortest cannot exceed the second-shortest, so the best case is an even split: \\(100\\) each.\n" +
    "Step 7 — Maximum possible length of the shortest piece: 100.",
  fast: "Maximising one value in a fixed-total set means minimising every other value, subject to the ordering rules. Here the three pieces at or above the median are each pinned to their floor of 140, which frees exactly 200 for the bottom two — and the shortest tops out when the two are equal.\n" +
    "The whole calculation is \\(620 - 420 = 200\\), then halve.",
  traps: "(C) 110 and (D) 130 come from letting the shortest exceed the second-shortest, which contradicts the sorting — if the shortest were 110, the second would have to be 90.\n" +
    "(E) 140 sets everything equal, which would give a total of 700, well above 620.\n" +
    "(A) 90 is a valid length for the shortest piece but not the maximum — the question asks for the largest it *could* be.\n" +
    "The constraint that does the work is that the two pieces above the median are each at least 140; forgetting that floor lets the shortest grow without bound.",
  take: "To maximise one element of a fixed sum, drive every other element to its minimum allowed value. With a median constraint, the values above it are floored at the median."
},

"quant-live-3#7": {
  steps: "Step 1 — Percentile counts how many grades fall below. In her own class, the 90th percentile of 80 grades means \\(0.90 \\times 80 = 72\\) grades below Amy's.\n" +
    "Step 2 — In the other class of 100 grades, 19 were higher and none equalled hers, so \\(100 - 19 = 81\\) were lower.\n" +
    "Step 3 — Combined, \\(72 + 81 = 153\\) grades fall below Amy's.\n" +
    "Step 4 — The combined group has \\(80 + 100 = 180\\) grades.\n" +
    "Step 5 — \\(\\dfrac{153}{180} = 0.85\\), so Amy's grade is in the 85th percentile.",
  fast: "Convert both percentile statements into raw counts of grades below her, add, and divide by the combined total. The whole question is a caution against averaging the two percentiles.\n" +
    "\\(\\tfrac{153}{180}\\) simplifies to \\(\\tfrac{17}{20}\\), which is \\(85\\%\\) — worth spotting rather than long-dividing.",
  traps: "(C) 81st is the other class's percentile taken alone.\n" +
    "(E) 92nd is bait for guessing high from the stem's flattering figures (90th percentile, only 19 above her); combining groups honestly runs through raw counts, and those give exactly 85.\n" +
    "(B) 80th and (A) 72nd repeat the raw count 72 or the class size 80 as a percentile.\n" +
    "Watch the wording \"19 were higher\": that gives the count *above*, so the count below needs the subtraction.",
  take: "Percentile means the share of the group scoring below. Combine groups by adding counts, never by averaging percentiles."
},

"quant-live-3#8": {
  steps: "Step 1 — \"Within one standard deviation of the mean\" is the interval from \\(m - d\\) to \\(m + d\\), here \\(10 - 0.3 = 9.7\\) to \\(10 + 0.3 = 10.3\\).\n" +
    "Step 2 — Test each of the eight values against that band.\n" +
    "Step 3 — Inside: \\(9.9, 9.9, 9.9, 10.0, 10.2, 10.2\\) — six values.\n" +
    "Step 4 — Outside: \\(9.4\\) (below 9.7) and \\(10.5\\) (above 10.3) — two values.\n" +
    "Step 5 — \\(\\dfrac68 = 0.75\\), i.e. \\(75\\%\\).",
  fast: "Build the interval first and then sort the list against it — do not compute anything. Only the extreme values can fall outside, so scan from each end inward and stop as soon as a value is inside the band.\n" +
    "Here that means checking 9.4 and 9.9 at the bottom, 10.5 and 10.2 at the top: two exclusions, six inclusions.",
  traps: "(E) 70% and (C) 80% correspond to counts of 5.6 and 6.4 out of eight, which are not whole numbers — with eight values the only possible percentages are multiples of 12.5, so 70, 80, 85 and 90 are all impossible. That observation alone identifies the answer.\n" +
    "(A) 90% is the figure people half-remember from the normal distribution (68–95–99.7), but this is a small explicit list, not a normal curve — count, do not recall.\n" +
    "(B) 85% is the same recall error.\n" +
    "The other slip is treating the band as \\(m \\pm 1\\) rather than \\(m \\pm d\\).",
  take: "\"Within one standard deviation\" means the interval \\([m-d,\\ m+d]\\) — count the values inside it. With \\(n\\) values, the answer must be a multiple of \\(100/n\\)."
},

"quant-live-3#9": {
  steps: "Step 1 — The distribution is perfectly symmetric about \\(m\\), so the region above \\(m + d\\) and the region below \\(m - d\\) are mirror images and hold equal shares.\n" +
    "Step 2 — Statement (1): \\(68\\%\\) lies between \\(m-d\\) and \\(m+d\\), leaving \\(32\\%\\) in the two tails combined. By symmetry each tail is \\(16\\%\\) — [[sufficient]].\n" +
    "Step 3 — Statement (2): the lower tail is \\(16\\%\\). By the same symmetry, the upper tail is also \\(16\\%\\) — [[sufficient]].\n" +
    "Step 4 — Each statement alone determines the answer.",
  fast: "Symmetry is given in the stem, and it is what makes both statements work. The centre and the two tails must account for \\(100\\%\\), and the tails are equal — so knowing any one of the three pieces determines the other two.\n" +
    "That framing settles both statements at once without any calculation.",
  traps: "(A) and (B) each dismiss one statement, usually because the other is more familiar — the \\(68\\%\\) figure is the recognisable one and (2)'s \\(16\\%\\) looks like it describes the wrong side.\n" +
    "(C) is the reflex answer when two statements happen to be consistent with the same well-known distribution; but sufficiency is about each statement alone, and each is enough.\n" +
    "(E) ignores the symmetry the stem grants.\n" +
    "Note that the stem's word \"symmetrically\" is doing essential work — without it, a lower tail of \\(16\\%\\) would say nothing about the upper tail.",
  take: "For a symmetric distribution, centre plus two equal tails make \\(100\\%\\). Any one of those three quantities determines the rest — check each statement on its own."
},

"quant-live-3#10": {
  steps: "Step 1 — Set \\(B = \\{1, 2, 3\\}\\) has mean 2 and deviations \\(-1, 0, 1\\), so its variance is \\(\\tfrac{1 + 0 + 1}{3} = \\tfrac23\\).\n" +
    "Step 2 — Set \\(A = \\{1, 2, x\\}\\) matches \\(B\\) exactly when \\(x = 3\\); moving \\(x\\) away from 3 in either direction spreads the set out.\n" +
    "Step 3 — Statement (1): \\(x > 3\\). The third point sits further from the other two than 3 did, so the spread strictly exceeds \\(B\\)'s. For instance \\(x = 4\\) gives mean \\(\\tfrac73\\) and variance \\(\\tfrac{14}9\\), well above \\(\\tfrac23\\), and it only grows from there — a definite [[yes]], so [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(x < 1\\). Take \\(x = 0\\): the set is \\(\\{0, 1, 2\\}\\), which is just \\(B\\) shifted down by 1 and has exactly the same standard deviation — answer no. Take \\(x = -10\\): the spread is far larger — answer yes.\n" +
    "Step 5 — Two opposite answers, so (2) is [[not sufficient]].",
  fast: "Standard deviation is unchanged by shifting every value by a constant, and \\(x = 0\\) turns \\(A\\) into a shifted copy of \\(B\\) — that single example kills statement (2) instantly.\n" +
    "For statement (1), note that \\(x = 3\\) is the break-even point, so any \\(x\\) strictly above 3 strictly increases the spread. There is no need to compute a variance at all.",
  traps: "(B) inverts the two statements. Statement (2)'s range looks like it moves \\(x\\) further from the cluster \\(\\{1,2\\}\\), but \\(x = 0\\) is actually *closer* to that cluster than 3 was.\n" +
    "(D) treats both one-sided bounds as symmetric, missing that 3 is the break-even value on one side while the break-even on the other side is \\(x = 0\\).\n" +
    "(E) dismisses statement (1), which is decisive.\n" +
    "(C) adds the statements together, but they contradict each other — \\(x\\) cannot be both greater than 3 and less than 1, so combining them is meaningless here.",
  take: "Standard deviation is invariant under adding a constant to every element. Find the break-even value where two sets have equal spread, then test each side of it."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-3#11": {
  steps: "Step 1 — Fifteen homes averaging 150,000 total \\(15 \\times 150{,}000 = 2{,}250{,}000\\). The median of 15 values is the 8th, so the 8th home sold for 130,000.\n" +
    "Step 2 — Statement I. Suppose no home exceeded 165,000. The seven homes below the median are at most 130,000 each, and the 8th is exactly 130,000, so those eight total at most \\(1{,}040{,}000\\). The seven above are at most 165,000 each, totalling at most \\(1{,}155{,}000\\).\n" +
    "Step 3 — That caps the whole town at \\(2{,}195{,}000\\), short of the required \\(2{,}250{,}000\\). So some home must have exceeded 165,000 — [[I must be true]].\n" +
    "Step 4 — Statement II. Take eight homes at exactly 130,000 and seven at \\(\\tfrac{1{,}210{,}000}{7} \\approx 172{,}857\\). The average is 150,000 and the median 130,000, yet no price lies strictly between 130,000 and 150,000 — [[II can fail]].\n" +
    "Step 5 — Statement III. The same example has no home below 130,000 — [[III can fail]].\n" +
    "Step 6 — Only I must be true.",
  fast: "For \"must be true\", the productive move is to try to break each statement with an extreme construction. Push all eight lower homes up to the median and all seven upper homes as high as the total allows — that single configuration kills II and III at once.\n" +
    "Statement I resists because the arithmetic forbids it: capping every home at 165,000 cannot reach the required total, and that upper-bound check is the whole proof.",
  traps: "(D) and (E) each add a statement that survives only under the assumption that prices are spread out \"naturally\". Nothing in the question forbids ties, and ties are what break II and III.\n" +
    "(B) and (C) reject statement I, usually because 165,000 looks like an arbitrary threshold rather than a computable bound.\n" +
    "The mean being well above the median already tells you the distribution is skewed upward, which is a hint that the top values must be far above 150,000 — the formal version of that intuition is statement I.",
  take: "For \"must be true\", attempt a counterexample first; allow ties and extremes. To prove a statement, bound the total under the opposite assumption and show it falls short."
},

"quant-live-3#12": {
  steps: "Step 1 — Five numbers averaging 50 total \\(250\\). The median equals the mean, so the middle value is 50.\n" +
    "Step 2 — Write the sorted set as \\(a \\le b \\le 50 \\le d \\le e\\), with \\(e = 3a + 5\\).\n" +
    "Step 3 — The sum gives \\(a + b + 50 + d + e = 250\\), so \\(a + b + d + e = 200\\).\n" +
    "Step 4 — Substitute \\(e = 3a + 5\\): \\(a + b + d + 3a + 5 = 200\\), i.e. \\(4a + b + d = 195\\).\n" +
    "Step 5 — Maximising \\(e\\) means maximising \\(a\\). The binding constraints are \\(b \\ge a\\) and \\(d \\ge 50\\), so \\(4a + a + 50 \\le 195\\), giving \\(5a \\le 145\\) and \\(a \\le 29\\).\n" +
    "Step 6 — Take \\(a = 29\\): then \\(b + d = 79\\) with \\(b \\ge 29\\) and \\(d \\ge 50\\), so \\(b = 29\\) and \\(d = 50\\).\n" +
    "Step 7 — The set is \\(\\{29, 29, 50, 50, 92\\}\\) — sum 250 ✓, median 50 ✓ — and \\(e = 3(29) + 5 = 92\\).",
  fast: "Since \\(e\\) is tied to \\(a\\) by \\(e = 3a+5\\), maximising the largest value means maximising the *smallest* one — a nice inversion worth noticing.\n" +
    "Then push \\(b\\) and \\(d\\) to their floors (\\(b = a\\) and \\(d = 50\\)) and read \\(a\\) off the resulting inequality. The answer choices are all of the form \\(3a+5\\), so you can also work backwards: 92 needs \\(a = 29\\), 89 needs \\(a = 28\\), and the largest workable \\(a\\) wins.",
  traps: "(A) 80 through (D) 89 are all achievable values for the largest element — the question asks for the *maximum*, so a merely valid answer is not enough.\n" +
    "(D) 89 corresponds to \\(a = 28\\), which works but leaves slack in the sum; that slack is exactly what the constraint \\(a \\le 29\\) squeezes out.\n" +
    "The frequent setup error is forgetting that the median being 50 pins the third value, not the average of two values — with five elements the median is a single term.\n" +
    "The other is letting \\(b\\) drop below \\(a\\) or \\(d\\) below 50, which breaks the sorted order the problem assumes.",
  take: "When the extremes are linked by an equation, maximising one means maximising the other. Push every free value to its constraint boundary, then solve the resulting inequality."
},

"quant-live-3#13": {
  steps: "Step 1 — Six numbers averaging 18 total \\(108\\). With six values the median is the average of the 3rd and 4th, so \\(a_3 + a_4 = 32\\).\n" +
    "Step 2 — To minimise the largest value \\(a_6\\), make the first four as large as the ordering permits, leaving as little as possible for the top two.\n" +
    "Step 3 — Since \\(a_3 \\le a_4\\) and they sum to 32, the largest \\(a_3\\) can be is 16, which forces \\(a_4 = 16\\).\n" +
    "Step 4 — Then \\(a_1\\) and \\(a_2\\) can be at most \\(a_3 = 16\\) each, so the first four total at most \\(64\\).\n" +
    "Step 5 — That leaves \\(108 - 64 = 44\\) for \\(a_5 + a_6\\).\n" +
    "Step 6 — With \\(a_5 \\le a_6\\), the smallest possible \\(a_6\\) comes from splitting evenly: \\(a_5 = a_6 = 22\\).\n" +
    "Step 7 — The set \\(\\{16, 16, 16, 16, 22, 22\\}\\) has total 108, median 16 and greatest value 22 ✓.",
  fast: "Minimising a maximum is the mirror of maximising a minimum: push everything *else* as high as it can go, then split what remains as evenly as possible.\n" +
    "The median constraint caps the first four at 16 apiece, so \\(108 - 64 = 44\\) must be shared by two values — and an even split minimises the larger of them.",
  traps: "(A) 19, (B) 20 and (C) 21 all come from splitting the remaining 44 unevenly in the wrong direction, or from allowing the first four to exceed 16 — which the median forbids.\n" +
    "(E) 23 comes from an uneven split such as \\(21 + 23\\); that is valid, but not minimal.\n" +
    "The most common structural error is treating the median of six values as a single term. With an even count it is the average of the two middle values, so \\(a_3\\) and \\(a_4\\) need only *sum* to 32 — they need not both be 16 in general, though here that is what maximises them.",
  take: "To minimise the greatest value in a fixed-sum list, maximise all the others within the constraints, then divide the remainder as evenly as the ordering allows."
},

"quant-live-3#14": {
  steps: "Step 1 — Take 100 students. Seventy passed with an average of 86, contributing \\(70 \\times 86 = 6020\\) points.\n" +
    "Step 2 — The whole group averaged 74, so the total is \\(7400\\), leaving \\(1380\\) points for the 30 who failed — an average of 46.\n" +
    "Step 3 — Since 70 students passed, the 50th and 51st scores both sit inside the passing group, so the median is some passing score.\n" +
    "Step 4 — But the passing scores are only constrained by their average of 86; their individual spread is free.\n" +
    "Step 5 — They could be tightly bunched near 86, giving a median near 86. Or 19 passes could sit near 70 while the other 51 sit just above 92 (\\(19 \\times 70 + 51 \\times 92 \\approx 6020\\)) — then both middle scores of the whole group exceed 92.\n" +
    "Step 6 — Since the median can land on either side of every threshold the choices offer, [[nothing can be conclusively said]].",
  fast: "Compute the failing average if you like — it is 46 — but notice it does not constrain the median at all. The median sits among the passing scores, and an average alone never pins a median.\n" +
    "The decisive test is whether you can build two admissible groups with medians on opposite sides of a proposed bound. Here you can, for every bound offered.",
  traps: "(B) less than 92 is the most seductive: since the passing average is 86, the median \"ought\" to be below 92. But the 70 passes averaging 86 can be split as 19 scores near 70 and 51 just above 92, which lifts both middle scores — and so the median — above 92.\n" +
    "(C) greater than 92 fails just as easily with all passes at exactly 86.\n" +
    "(D) exactly 86 confuses the group's average with its median.\n" +
    "(A) a unique value assumes averages determine medians, which they never do without further structure.\n" +
    "The general lesson: an average constrains a total, not the arrangement of the values inside it.",
  take: "An average fixes the sum, never the median. To answer \"must be true\" here, construct two valid distributions whose medians straddle the proposed bound."
},

"quant-live-3#15": {
  steps: "Step 1 — Fifteen different integers have a single middle value, the 8th, which is the median: \\(25\\).\n" +
    "Step 2 — Let the greatest be \\(M\\). The range is 25, so the least is \\(M - 25\\).\n" +
    "Step 3 — Positions 1 through 7 must be seven *distinct* integers lying between \\(M - 25\\) and 24 inclusive.\n" +
    "Step 4 — That interval contains \\(24 - (M - 25) + 1 = 50 - M\\) integers, and we need at least 7 of them: \\(50 - M \\ge 7\\), so \\(M \\le 43\\).\n" +
    "Step 5 — Check that \\(M = 43\\) is achievable. The least is \\(18\\), and the seven below the median can be \\(18, 19, 20, 21, 22, 23, 24\\) — exactly seven distinct integers.\n" +
    "Step 6 — The seven above the median must be distinct integers from 26 to 43 and must include 43 itself: for example \\(26, 27, 28, 29, 30, 31, 43\\).\n" +
    "Step 7 — That set has median 25, range \\(43 - 18 = 25\\) ✓, and greatest element 43.",
  fast: "The binding constraint is on the *lower* half, not the upper one: seven distinct integers must squeeze between the minimum and the median. Raising \\(M\\) raises the minimum too (the range is fixed), which squeezes that gap — so \\(M\\) is capped by how many integers fit below 25.\n" +
    "With the minimum at \\(M-25\\), the gap holds \\(50 - M\\) integers, and needing seven gives \\(M \\le 43\\) in one line.",
  traps: "(E) 50 ignores the distinctness requirement — with repeats allowed, the minimum could be 25 and everything would collapse, but the integers must differ.\n" +
    "(C) 40 and (B) 37 come from imposing the count constraint on the upper half instead, which is far less restrictive because the interval from 26 to \\(M\\) grows as \\(M\\) grows.\n" +
    "(A) 32 is the *smallest* workable maximum (needing seven distinct integers above 25), which is the answer to the opposite question.\n" +
    "The word \"different\" is what makes this problem non-trivial; without it every choice would be reachable.",
  take: "With distinct integers, a count constraint becomes an interval-width constraint. When the range is fixed, raising the maximum raises the minimum and squeezes the lower half."
},

"quant-live-3#16": {
  steps: "Step 1 — The negative elements of a set of consecutive integers are themselves consecutive. A range of 80 among consecutive integers means \\(80 + 1 = 81\\) of them.\n" +
    "Step 2 — Because the set also contains non-negative values (the question asks about its positives), the largest negative in the set is \\(-1\\).\n" +
    "Step 3 — So the negatives run from \\(-81\\) to \\(-1\\).\n" +
    "Step 4 — The set has 100 consecutive integers in total, so the remaining \\(100 - 81 = 19\\) terms are \\(0, 1, 2, \\dots, 18\\).\n" +
    "Step 5 — The positive elements are \\(1\\) through \\(18\\).\n" +
    "Step 6 — Being evenly spaced, their average is \\(\\dfrac{1 + 18}{2} = 9.5\\).",
  fast: "Two counting facts carry the whole problem: a range of 80 among consecutive integers means 81 terms, and the average of an evenly spaced list is the average of its endpoints.\n" +
    "Once you place the negatives as \\(-81\\) to \\(-1\\), everything else is forced — and remember that 0 is neither positive nor negative, which is why 19 remaining terms give only 18 positives.",
  traps: "(E) 10 is what you get by counting 19 positive terms (including 0) and averaging \\(\\tfrac{0 + 19}{2}\\)-style, or by treating the positives as running to 19.\n" +
    "(C) 9 comes from taking the positives as \\(0\\) through \\(18\\) and averaging those, which includes a non-positive value.\n" +
    "(A) 8 and (B) 8.5 come from an off-by-one on the negative count — using 80 negatives instead of 81, which shifts the whole set.\n" +
    "The two places to be careful are the range-to-count conversion (\\(+1\\)) and the status of zero.",
  take: "Among consecutive integers, count = range + 1. Zero is neither positive nor negative. The mean of an evenly spaced list is the average of its endpoints."
},

"quant-live-3#17": {
  steps: "Step 1 — Write the four distinct positive integers in order as \\(a < b < c < d\\). The range is \\(d - a\\).\n" +
    "Step 2 — The stated condition is \\((d - a) + (a + b + c + d) = a + 3d\\).\n" +
    "Step 3 — Simplify the left side: \\(d - a + a + b + c + d = b + c + 2d\\).\n" +
    "Step 4 — So \\(b + c + 2d = a + 3d\\), which gives \\(b + c = a + d\\).\n" +
    "Step 5 — Now the mean: \\(a + b + c + d = (a + d) + (b + c) = 2(a + d)\\), so the mean is \\(\\dfrac{2(a+d)}{4} = \\dfrac{a+d}{2}\\).\n" +
    "Step 6 — And the median of four values is \\(\\dfrac{b+c}{2} = \\dfrac{a+d}{2}\\).\n" +
    "Step 7 — The two expressions are identical, so the mean equals the median.\n" +
    "Step 8 — A concrete instance: \\(\\{1, 2, 4, 5\\}\\) has \\(b + c = 6 = a + d\\), mean 3 and median 3 ✓.",
  fast: "The algebra collapses in one line once you cancel: the range \\(d - a\\) and the \\(a\\) inside the sum annihilate, leaving \\(b + c = a + d\\). That condition says the inner pair and the outer pair have equal sums — which is exactly the statement that the set is balanced, so its mean and median coincide.\n" +
    "If the manipulation feels risky, test \\(\\{1,2,4,5\\}\\): it satisfies the condition and has mean = median.",
  traps: "(E) is the answer of anyone who does not simplify — the condition looks opaque until the cancellation happens.\n" +
    "(B) and (C) assume the set must be skewed one way; the derived condition rules out both, since it forces exact balance.\n" +
    "(D) comes from mis-deriving the mean as \\(a + d\\) rather than \\(\\tfrac{a+d}{2}\\) — a factor-of-two slip in dividing the sum by 4.\n" +
    "Be careful in Step 3 that the range is \\(d - a\\), not \\(a - d\\); reversing it changes the derived condition entirely.",
  take: "Expand and cancel before interpreting. \\(b + c = a + d\\) in a four-element set means the inner and outer pairs balance, which forces mean = median."
},

"quant-live-3#18": {
  steps: "Step 1 — Standard deviation is defined as the square root of an average of squared deviations, so it can never be negative.\n" +
    "Step 2 — That immediately rules out I (\\(-1.5\\)) and II (\\(-2\\)), whatever \\(m\\) and \\(K\\) turn out to be.\n" +
    "Step 3 — Standard deviation is zero only when every element equals the mean, i.e. when all the values are identical.\n" +
    "Step 4 — This set already contains \\(-7\\) and \\(7\\), which differ, so the spread is strictly positive and III is impossible too.\n" +
    "Step 5 — None of the three values is possible.",
  fast: "Two properties settle everything without touching \\(m\\) or \\(K\\): a standard deviation is never negative, and it is zero only for a constant list. The set visibly contains two different numbers, so the deviation is strictly positive.\n" +
    "The constraints on \\(m\\) and \\(K\\) are entirely decorative here — recognising an irrelevant given is part of the skill.",
  traps: "(A), (B) and (D) each admit a negative value, which no standard deviation can take. The minus signs are the trap, and they work because the set contains negative *elements*, inviting the false link between negative data and a negative spread.\n" +
    "(C) treats zero as attainable, which would require all nine values to be equal — impossible given \\(-7\\) and \\(7\\) are both fixed members.\n" +
    "Note that variance and standard deviation are both non-negative by construction; only the individual deviations can be negative, and they are squared before averaging.",
  take: "Standard deviation is always \\(\\ge 0\\), and equals 0 only when every value is identical. Negative data does not produce a negative spread."
},

"quant-live-3#19": {
  steps: "Step 1 — The transformation \\(y = ax + b\\) does two things: it scales every value by \\(a\\) and then shifts every value by \\(b\\).\n" +
    "Step 2 — Adding the same constant \\(b\\) to every value moves the mean by \\(b\\) as well, so every deviation from the mean is unchanged. The shift has no effect on the spread.\n" +
    "Step 3 — Multiplying every value by \\(a\\) multiplies every deviation by \\(a\\), so the squared deviations are multiplied by \\(a^2\\) and the standard deviation by \\(\\sqrt{a^2} = |a|\\).\n" +
    "Step 4 — So the standard deviation of the \\(y\\) series is \\(|a| \\times S\\).\n" +
    "Step 5 — The absolute value matters: if \\(a\\) were \\(-2\\), the data would be reflected and doubled in spread, and a spread of \\(-2S\\) would be meaningless.",
  fast: "Split the transformation into its two parts and handle each with a one-word rule: shifts do nothing, scales multiply. Then remember that a standard deviation cannot be negative, which forces the absolute value.\n" +
    "A quick sanity test: take \\(x \\in \\{1,2,3\\}\\) and \\(a = -2\\). Then \\(y \\in \\{-2,-4,-6\\}\\), whose spread is clearly twice that of \\(x\\), not \\(-2\\) times it.",
  traps: "(A) \\(a \\times S\\) is right in every respect except sign, and it is the intended trap — it fails precisely when \\(a\\) is negative, which the question never excludes.\n" +
    "(C) \\(b \\times S\\) and (D) \\(S/b\\) give the shift a role it does not have; adding a constant never changes spread.\n" +
    "(B) \\(S/a\\) inverts the scaling.\n" +
    "The two facts to keep separate: the *mean* transforms as \\(am + b\\), while the standard deviation transforms as \\(|a|S\\) with no \\(b\\) at all.",
  take: "Under \\(y = ax + b\\): mean becomes \\(a\\bar{x} + b\\); standard deviation becomes \\(|a|S\\). Shifts never change spread, and the absolute value is not optional."
},

"quant-live-3#20": {
  steps: "Step 1 — Adding a value to a set increases the standard deviation most when that value sits furthest from the set's mean.\n" +
    "Step 2 — The mean of \\(P = \\{2, 4, 5, 7\\}\\) is \\(\\dfrac{2 + 4 + 5 + 7}{4} = 4.5\\).\n" +
    "Step 3 — Measure each candidate's distance from 4.5: \\(|1 - 4.5| = 3.5\\); \\(|3 - 4.5| = 1.5\\); \\(|6 - 4.5| = 1.5\\); \\(|8 - 4.5| = 3.5\\); \\(|14 - 4.5| = 9.5\\).\n" +
    "Step 4 — 14 is far and away the most distant.\n" +
    "Step 5 — So adding 14 increases the standard deviation most.",
  fast: "Compute the mean, then compare absolute distances — no variance calculation is ever needed, because the added point's contribution to the sum of squared deviations grows with its distance from the centre.\n" +
    "Here 14 is nearly three times as far from 4.5 as any other candidate, so the comparison is not close.",
  traps: "(A) 1 and (D) 8 are tied for second at a distance of 3.5, and they attract anyone who looks only at values that fall outside the existing range \\(\\{2, \\dots, 7\\}\\). Being outside the range is not the criterion; distance from the mean is.\n" +
    "(B) 3 and (C) 6 sit inside the data and would *reduce* the standard deviation, since they are closer to the mean than the typical element.\n" +
    "One more subtlety: adding a point also shifts the mean, so a fully rigorous comparison recomputes the deviation. Here the distances are so lopsided that the ranking cannot change.",
  take: "Adding a value moves the standard deviation up or down according to its distance from the mean, not its position relative to the range."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-3#21": {
  steps: "Step 1 — Consecutive integers are evenly spaced with a gap of 1, so the pattern of deviations from the mean depends only on how many terms there are.\n" +
    "Step 2 — Shifting the whole set — starting at 5 instead of 100 — adds a constant to every element, which never changes the standard deviation.\n" +
    "Step 3 — Statement (1) gives the count, 21. That fixes the shape of the set completely up to a shift, so the standard deviation is determined — [[sufficient]].\n" +
    "Step 4 — Statement (2) gives the median, 20, which locates the set but says nothing about its size. Three consecutive integers around 20 and 101 of them have very different spreads — [[not sufficient]].",
  fast: "For a set of consecutive integers, the standard deviation is a function of the count alone. Once you state that principle, statement (1) is obviously sufficient and statement (2) obviously is not — no computation required.\n" +
    "The underlying reason is that adding a constant to every value leaves all deviations unchanged.",
  traps: "(B) picks the statement that names a concrete value, a persistent Data Sufficiency temptation. A median tells you where the set sits, not how far it stretches.\n" +
    "(C) is the answer of someone who thinks you need to know the actual members. You do not — spread is shift-invariant.\n" +
    "(D) would require the median alone to work.\n" +
    "(E) understates (1).\n" +
    "Compare with the mean: the mean of these sets *would* need statement (2), and the mean of an evenly spaced set equals its median. Different quantities need different information.",
  take: "Standard deviation is unchanged by shifting all values. For consecutive integers it depends only on the number of terms; the mean depends only on the centre."
},

"quant-live-3#22": {
  steps: "Step 1 — Let \\(x\\) be the number of 40-ounce bottles, so \\(48 - x\\) are 20-ounce bottles.\n" +
    "Step 2 — The total volume is \\(20(48 - x) + 40x\\).\n" +
    "Step 3 — The average is 35 ounces across 48 bottles, so the total is \\(35 \\times 48 = 1680\\).\n" +
    "Step 4 — \\(960 - 20x + 40x = 1680\\), so \\(20x = 720\\).\n" +
    "Step 5 — \\(x = 36\\).",
  fast: "Use the weighted-average lever. The average of 35 sits 15 above the 20-ounce size and 5 below the 40-ounce size, so the two groups are in the ratio \\(5 : 15 = 1 : 3\\) — one small bottle for every three large ones.\n" +
    "With 48 bottles in a \\(1 : 3\\) split, the large group is \\(\\tfrac34 \\times 48 = 36\\). No equation needed.",
  traps: "(A) 12 is the number of *20-ounce* bottles — the complement, and the most likely wrong answer since the lever ratio produces it just as readily.\n" +
    "(C) 24 splits the stock evenly, which would give an average of 30, not 35.\n" +
    "(B) 18 and (D) 30 come from inverting the lever arms — using \\(15 : 5\\) instead of \\(5 : 15\\), which puts the larger group on the wrong side.\n" +
    "The check that catches all of these: 35 is much closer to 40 than to 20, so most bottles must be the 40-ounce ones.",
  take: "In a two-value weighted average, the group sizes are inversely proportional to their distances from the average. The larger group sits nearer the average."
},

"quant-live-3#23": {
  steps: "Step 1 — Read the constraint precisely: \\(y^4\\) is a two-digit positive odd integer. Nothing says \\(y\\) itself is an integer — only \\(n\\) is declared to be one.\n" +
    "Step 2 — Since \\(n\\) is divisible by \\(y^2\\), the quantity \\(y^2\\) must be a positive integer. And \\(y^4 = (y^2)^2\\), so \\(y^4\\) is the square of that integer.\n" +
    "Step 3 — So we need integers whose squares are two-digit and odd: \\(5^2 = 25\\), \\(7^2 = 49\\), \\(9^2 = 81\\). Hence \\(y^2 \\in \\{5, 7, 9\\}\\).\n" +
    "Step 4 — Now test each digit sum, free to choose whichever \\(y^2\\) helps. I, digit sum 1: take \\(y^2 = 5\\) and \\(n = 10\\), which is divisible by 5 ✓.\n" +
    "Step 5 — II, digit sum 9: take \\(y^2 = 9\\) and \\(n = 9\\) ✓ (or \\(y^2 = 5\\), \\(n = 45\\)).\n" +
    "Step 6 — III, digit sum 17: take \\(y^2 = 5\\) and \\(n = 890 = 5 \\times 178\\), whose digits sum to \\(8 + 9 + 0 = 17\\) ✓.\n" +
    "Step 7 — All three sums are achievable.",
  fast: "The whole question turns on one reading: \\(y\\) is never said to be an integer. Squaring backwards from \\(y^4\\), the admissible values of \\(y^2\\) are 5, 7 and 9 — and once 5 and 7 are on the table, the digit-sum restriction that comes with 9 disappears.\n" +
    "Then each statement needs only one example, and multiples of 5 are the easiest to build digit sums with.",
  traps: "(B) II only is where you land by assuming \\(y\\) must be an integer. That forces \\(y^4 = 81\\) and \\(y^2 = 9\\), and multiples of 9 have digit sums that are multiples of 9 — so 1 and 17 would both be impossible. It is a coherent chain of reasoning built on an assumption the question never made.\n" +
    "(A) and (D) admit one of the two \"non-multiple-of-9\" sums but not the other, which no consistent reading produces.\n" +
    "(C) rules out a digit sum of 1, perhaps on the feeling that only powers of 10 have that sum — which is true, and \\(10\\) itself is a multiple of 5.\n" +
    "The habit worth building: list exactly which quantities a question declares to be integers.",
  take: "Only assume integrality where the question states it. \"\\(n\\) is divisible by \\(y^2\\)\" makes \\(y^2\\) an integer, not \\(y\\)."
},

"quant-live-3#24": {
  steps: "Step 1 — \"Even\" applies only to integers, and the question never says \\(x\\) is one. That is the crux.\n" +
    "Step 2 — Statement (1): \\(7x\\) is even. Take \\(x = 2\\): \\(7x = 14\\), even, and \\(x\\) is even. Take \\(x = \\tfrac27\\): \\(7x = 2\\), even, but \\(x\\) is not an integer at all — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(5x\\) is even. Take \\(x = 2\\) or \\(x = \\tfrac25\\), by the same argument — [[not sufficient]].\n" +
    "Step 4 — Together: both \\(7x\\) and \\(5x\\) are even integers, so their difference \\(7x - 5x = 2x\\) is an even integer. An even integer \\(2x\\) means \\(x\\) is an integer.\n" +
    "Step 5 — Now \\(5x\\) even with \\(x\\) an integer forces \\(x\\) to be even, because 5 is odd and an odd number times an odd number is odd.\n" +
    "Step 6 — So together the answer is a definite yes — [[sufficient]].",
  fast: "Ask first whether \\(x\\) is even guaranteed to be an integer. It is not, and a single fractional counterexample — \\(x = \\tfrac27\\) — dispatches statement (1) instantly, with \\(\\tfrac25\\) doing the same for (2).\n" +
    "Combining them, subtract to get \\(2x\\) as an even integer, which forces integrality; then the odd multiplier 5 preserves parity.",
  traps: "(D) is the trap for anyone who silently assumes \\(x\\) is an integer. Under that assumption each statement alone *would* be sufficient, since 7 and 5 are both odd — which is exactly why the assumption has to be checked.\n" +
    "(A) and (B) make the same assumption for one statement only.\n" +
    "(E) misses that the two statements together pin \\(x\\) down completely.\n" +
    "The general caution: parity, divisibility and \"even/odd\" language all presuppose integers, and GMAT Data Sufficiency questions routinely omit that word on purpose.",
  take: "Parity arguments require integers. If the question does not state that a variable is an integer, test a fraction before concluding anything."
},

"quant-live-3#25": {
  steps: "Step 1 — Apply the definition to each input. \\(9\\) is odd, so \\([9] = 3 \\times 9 = 27\\).\n" +
    "Step 2 — \\(6\\) is even, so \\([6] = \\tfrac12 \\times 6 = 3\\).\n" +
    "Step 3 — The product is \\(27 \\times 3 = 81\\).\n" +
    "Step 4 — Now evaluate each choice and look for 81. \\([81] = 3 \\times 81 = 243\\) (81 is odd). \\([54] = \\tfrac12 \\times 54 = 27\\). \\([36] = 18\\). \\([27] = 3 \\times 27 = 81\\) ✓. \\([18] = 9\\).\n" +
    "Step 5 — So \\([9] \\times [6] = [27]\\).",
  fast: "Compute the target value first — 81 — then run down the choices applying the rule, and stop at the first match. Each evaluation is a single multiplication or halving.\n" +
    "The parity check is the only place to slip: 27 and 81 are both odd (so they triple), while 54, 36 and 18 are even (so they halve).",
  traps: "(A) \\([81]\\) is the trap of matching the *value* 81 to the symbol's input rather than its output. The bracket must be applied, and \\([81] = 243\\).\n" +
    "(B) \\([54]\\) equals 27, which is \\([9]\\) — the first factor, not the product.\n" +
    "(E) \\([18]\\) equals 9, the original input.\n" +
    "(C) \\([36]\\) equals 18.\n" +
    "Custom-symbol questions almost always place the untransformed number among the choices; always evaluate before matching.",
  take: "With a custom operator, evaluate both sides fully before comparing. A choice containing your target number is usually the trap, not the answer."
},

"quant-live-3#26": {
  steps: "Step 1 — \"To the left of 0\" means \\(n < 0\\).\n" +
    "Step 2 — \\(n^2 < \\tfrac1{100}\\) means \\(|n| < \\tfrac1{10}\\).\n" +
    "Step 3 — Combining, \\(-\\tfrac1{10} < n < 0\\): \\(n\\) is a small negative number.\n" +
    "Step 4 — Taking reciprocals reverses the inequality for negatives. Since \\(n\\) is between \\(-\\tfrac1{10}\\) and 0, its reciprocal is more negative than \\(-10\\).\n" +
    "Step 5 — So \\(\\dfrac1n < -10\\).\n" +
    "Step 6 — Check with a value: \\(n = -0.05\\) gives \\(\\tfrac1n = -20\\), which is indeed less than \\(-10\\) ✓.",
  fast: "Test one number rather than manipulating inequalities. Pick \\(n = -0.01\\): it is negative and its square is \\(0.0001 < 0.01\\) ✓, and its reciprocal is \\(-100\\). Any choice not containing \\(-100\\) is out, and only one survives.\n" +
    "The principle behind it: the reciprocal of a number close to zero is large in magnitude, and it keeps the sign.",
  traps: "(E) greater than 10 gets the magnitude right and the sign wrong — the reciprocal of a negative number is negative.\n" +
    "(B) and (C) place the reciprocal *between* small values, which is backwards: it is \\(n\\) that lies near zero, and its reciprocal that flies out to large magnitude.\n" +
    "(D) is stated as \"between 0 and \\(-\\tfrac1{30}\\)\", a range that is not even ordered consistently and in any case describes a number near zero.\n" +
    "The reliable defence on inequality questions is to substitute an actual value that satisfies every stated condition.",
  take: "Squaring and reciprocals both distort ranges: \\(n^2 < c\\) bounds \\(|n|\\), and for \\(n\\) near zero the reciprocal is large in magnitude with the same sign. Test a concrete value."
},

"quant-live-3#27": {
  steps: "Step 1 — Put every tick on a common denominator. Fifths and sevenths both fit into thirty-fifths.\n" +
    "Step 2 — The fifths land at \\(\\tfrac7{35}, \\tfrac{14}{35}, \\tfrac{21}{35}, \\tfrac{28}{35}\\).\n" +
    "Step 3 — The sevenths land at \\(\\tfrac5{35}, \\tfrac{10}{35}, \\tfrac{15}{35}, \\tfrac{20}{35}, \\tfrac{25}{35}, \\tfrac{30}{35}\\).\n" +
    "Step 4 — Merge and sort the numerators: \\(5, 7, 10, 14, 15, 20, 21, 25, 28, 30\\).\n" +
    "Step 5 — Look for the smallest consecutive difference: \\(14\\) and \\(15\\) differ by 1, as do \\(20\\) and \\(21\\).\n" +
    "Step 6 — So the least distance is \\(\\tfrac1{35}\\).",
  fast: "Converting to a common denominator turns a geometry question into a list of integers, and the answer is the smallest gap in that list.\n" +
    "You can shortcut further: \\(\\tfrac25\\) and \\(\\tfrac37\\) are \\(\\tfrac{14}{35}\\) and \\(\\tfrac{15}{35}\\), a difference of \\(\\tfrac1{35}\\) — and since 35 is the common denominator, no two distinct ticks can be closer than that.",
  traps: "(C) \\(\\tfrac2{35}\\) is the next gap up (for instance between \\(\\tfrac5{35}\\) and \\(\\tfrac7{35}\\)) and is what you get by checking only the ticks near the ends of the segment.\n" +
    "(A) \\(\\tfrac17\\), (D) \\(\\tfrac27\\) and (E) \\(\\tfrac37\\) are spacings within a single subdivision, ignoring that the two systems interleave.\n" +
    "The insight the question is testing is that \\(\\tfrac1{35}\\) is the finest resolution available once both denominators are present — a fact that generalises to any pair of coprime divisions.",
  take: "Convert competing subdivisions to their least common denominator; the minimum gap between distinct ticks is one unit of that denominator when the two divisors are coprime."
},

"quant-live-3#28": {
  steps: "Step 1 — \\(\\sqrt{p^2}\\) is an integer greater than 1 means \\(|p|\\) is an integer at least 2.\n" +
    "Step 2 — Statement I. \\(p^2\\) is a perfect square, and a perfect square is precisely a number with an odd number of positive factors (every divisor pairs with its cofactor except the square root, which pairs with itself). So I [[must be true]].\n" +
    "Step 3 — Statement II. If \\(p\\) has \\(k\\) prime factors counted with multiplicity, then \\(p^2\\) has exactly \\(2k\\) — always an even number. So II is not merely unreliable, it is never true. Example: \\(36 = 2 \\times 2 \\times 3 \\times 3\\), four prime factors.\n" +
    "Step 4 — Statement III. \\(p\\) has an even number of factors unless \\(p\\) is itself a perfect square. Take \\(p = 4\\), whose factors are \\(1, 2, 4\\) — three of them, an odd count. So III [[can fail]].\n" +
    "Step 5 — Only I must be true.",
  fast: "One fact settles statement I: a positive integer has an odd number of factors exactly when it is a perfect square, and \\(p^2\\) always is.\n" +
    "The same fact dispatches statement III from the other direction — \\(p\\) itself may be a perfect square, and then its factor count is odd.\n" +
    "Statement II falls to the counting argument: squaring doubles the multiplicity of every prime, so the total is always even.",
  traps: "(D) accepts II, which is tempting because the word \"always\" in the statement invites a quick nod — but doubling every exponent guarantees an *even* total, so II is never true rather than sometimes true.\n" +
    "(C) and (E) accept III by assuming that \\(p\\), not being a square by hypothesis, must have an even factor count. Nothing forbids \\(p = 4\\) or \\(p = 9\\).\n" +
    "(B) rejects I, usually by conflating \"number of factors\" with \"number of prime factors\".\n" +
    "Keep the two counts distinct: 36 has 9 divisors but 4 prime factors with multiplicity.",
  take: "A positive integer has an odd number of divisors iff it is a perfect square. Squaring a number doubles its count of prime factors with multiplicity, so that count is always even."
},

"quant-live-3#29": {
  steps: "Step 1 — A greatest common divisor of two numbers must divide both of them. That is the test to apply to each choice.\n" +
    "Step 2 — Consider \\(20x\\). For it to be a common divisor it would have to divide \\(35x\\), but \\(\\dfrac{35x}{20x} = \\dfrac{7}{4}\\), which is never an integer for any positive \\(x\\).\n" +
    "Step 3 — So \\(20x\\) cannot even be a common divisor, let alone the greatest one.\n" +
    "Step 4 — Each of the others is achievable. With \\(x = y = 1\\), \\(\\gcd(35, 20) = 5\\) ✓.\n" +
    "Step 5 — With \\(x = 3, y = 2\\): \\(\\gcd(105, 40) = 5 = 5(x - y)\\) ✓.\n" +
    "Step 6 — With \\(x = 4y\\): \\(\\gcd(140y, 20y) = 20y\\) ✓. And with \\(x = 4, y = 7\\): \\(\\gcd(140, 140) = 140 = 35x\\) ✓.",
  fast: "Do not compute any gcd — just ask whether each expression can divide both numbers. \\(20x\\) fails on \\(35x\\) because the ratio \\(\\tfrac74\\) is fixed and non-integral, independently of \\(x\\).\n" +
    "That is the tell: an expression whose ratio to one of the two numbers is a constant non-integer can never be a common divisor, no matter how the variables are chosen.",
  traps: "(D) \\(20y\\) and (E) \\(35x\\) look structurally identical to the impossible one, and that resemblance is the trap — each of them divides its own number automatically and can be made to divide the other by choosing the variables appropriately.\n" +
    "(B) \\(5(x-y)\\) looks unlikely because it can be zero or negative, but for suitable \\(x > y\\) it is a genuine value.\n" +
    "(A) 5 is the easiest to realise and is rarely chosen.\n" +
    "The question asks what CANNOT be — so a single valid example eliminates a choice, and only an impossibility argument selects one.",
  take: "A gcd must divide both numbers. If an expression's ratio to one of them reduces to a constant non-integer, it can never be a common divisor."
},

"quant-live-3#30": {
  steps: "Step 1 — \"Length\" counts prime factors with multiplicity, so it is maximised by using the smallest prime, 2, as many times as possible. Any \\(x\\) of the form \\(2^a\\) has length \\(a\\).\n" +
    "Step 2 — The constraint is \\(x + 3y < 1000\\). Note that \\(y\\) costs three times as much room as \\(x\\) does, so there is a trade-off.\n" +
    "Step 3 — Take \\(x = 2^a\\) and \\(y = 2^b\\) and test the useful values of \\(b\\).\n" +
    "Step 4 — \\(b = 6\\) gives \\(y = 64\\) and \\(3y = 192\\), leaving \\(x < 808\\), so \\(a = 9\\) (\\(512\\)). Total length \\(15\\).\n" +
    "Step 5 — \\(b = 7\\) gives \\(y = 128\\) and \\(3y = 384\\), leaving \\(x < 616\\), and \\(512 < 616\\) so \\(a = 9\\) still fits. Total length \\(16\\).\n" +
    "Step 6 — \\(b = 8\\) gives \\(3y = 768\\), leaving \\(x < 232\\), so \\(a = 7\\) only. Total length \\(15\\) — worse.\n" +
    "Step 7 — The maximum is \\(16\\), achieved by \\(x = 512\\), \\(y = 128\\): \\(512 + 384 = 896 < 1000\\) ✓.",
  fast: "Two observations do the work. First, only powers of 2 matter, since any other prime buys fewer factors per unit of size. Second, \\(y\\) is charged triple, so pushing \\(y\\) up is worthwhile only while \\(x\\) can stay at \\(2^9 = 512\\).\n" +
    "That gives a single question: how large can \\(y\\) be while \\(3y < 1000 - 512 = 488\\)? The answer is \\(y = 128\\), and \\(9 + 7 = 16\\).",
  traps: "(C) 15 is what you get by stopping at \\(y = 64\\), the first configuration that feels balanced — it is a real total, just not the maximum.\n" +
    "(E) 18 comes from ignoring the factor of 3 on \\(y\\) and treating the constraint as \\(x + y < 1000\\), which would allow \\(512 + 256\\) and a length of 17, or from double-counting a power.\n" +
    "(A) 5 and (B) 6 treat \"length\" as the number of *distinct* prime factors rather than the count with multiplicity — the definition in the stem is explicit that repeats count.\n" +
    "The trade-off is the whole problem: it is not enough to maximise \\(x\\) alone or \\(y\\) alone.",
  take: "To maximise a count of prime factors under a size budget, use powers of 2. When variables carry different coefficients in the constraint, test the boundary configurations rather than assuming symmetry."
}

});
