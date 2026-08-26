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
    "(E) 92nd averages the two percentiles (90 and 81 would give 85.5, but taking 90 and 100 − 19 differently produces 92-flavoured figures) — in any case, percentiles from groups of different sizes cannot be averaged.\n" +
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
