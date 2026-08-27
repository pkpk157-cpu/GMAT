/* GMAT Prep — in-depth explanations for the Data Insights table, graphics and
   multi-source sets. Every answer was independently re-derived before the
   explanation was written; no stored key was changed. Keys are "setId#n";
   index.html merges these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-table-sales#1": {
  steps: "Step 1 — The question asks for the highest *annual* total, so read the Year column rather than adding quarters by hand.\n" +
    "Step 2 — North 600, South 400, East 800, West 300.\n" +
    "Step 3 — The largest is East at 800.\n" +
    "Step 4 — Sanity-check East's row: \\(200 + 180 + 220 + 200 = 800\\) ✓, and no other region's quarters approach that.",
  fast: "The table already carries a Year column — use it. Scanning four numbers beats summing sixteen.\n" +
    "A useful habit with any data table is to look for the totals row and column first; they usually answer a third of the questions outright.",
  traps: "(A) North is the region with the largest single-quarter *growth*, and the highest Q4 figure ties with East — so anyone reading the last column instead of the Year column can land here.\n" +
    "(E) \"North and East tied\" would require both to total 800; North totals 600.\n" +
    "(B) South and (D) West are the two smallest.\n" +
    "The recurring table error is answering from the wrong column — always confirm which aggregate the question names.",
  take: "Read the totals column when a question asks for an annual figure. Confirm which column the question actually names before scanning."
},

"di-table-sales#2": {
  steps: "Step 1 — \"Average sales per region\" divides the company total by the number of regions.\n" +
    "Step 2 — The company total for the year is 2,100 (thousand dollars), given in the totals row.\n" +
    "Step 3 — There are four regions.\n" +
    "Step 4 — \\(2100 \\div 4 = 525\\).",
  fast: "One division, provided you take the total from the table rather than re-adding the four annual figures. \\(2100/4\\) is easiest as \\(2000/4 + 100/4 = 500 + 25\\).\n" +
    "Check the units: the table is already in thousands, so the answer stays in thousands and needs no conversion.",
  traps: "(C) 600 is North's annual total, a figure that appears in the table and is easy to grab.\n" +
    "(A) 500 rounds the average down, or comes from dividing 2,000 by 4.\n" +
    "(D) 540 is the company's Q3 total — a totals-row figure read from the wrong cell.\n" +
    "(E) 480 has no basis in the table.\n" +
    "Two of the distractors are real numbers from the table, which is the standard construction: verify that the value you select answers the question rather than merely appearing in the data.",
  take: "Average per group = total ÷ number of groups. Take the total from the totals row, and confirm the units the table already uses."
},

"di-table-sales#3": {
  steps: "Step 1 — Read down the Q4 column: North 200, South 110, East 200, West 100.\n" +
    "Step 2 — The threshold is \"at least 150\", so the comparison is inclusive but no region sits exactly at 150.\n" +
    "Step 3 — North 200 ✓, South 110 ✗, East 200 ✓, West 100 ✗.\n" +
    "Step 4 — Two regions qualify.",
  fast: "Scan a single column against a single threshold — no arithmetic at all. The whole task is reading the right column and counting.\n" +
    "Before counting, note that only four values exist, so the answer must be between 0 and 4; that alone makes a miscount easy to catch.",
  traps: "(C) 3 counts South's 110 as qualifying, which happens if the threshold is misremembered as 100.\n" +
    "(E) 4 counts every region.\n" +
    "(B) 1 counts only one of the two 200s, an easy slip when identical values appear in non-adjacent rows.\n" +
    "(A) 0 misreads the column entirely.\n" +
    "The two identical values of 200 are the deliberate feature here — they are easy to conflate into a single qualifying region.",
  take: "Filtering questions need one column and one threshold. Note whether the comparison is inclusive, and count carefully when values repeat."
},

"di-table-sales#4": {
  steps: "Step 1 — East's annual sales are 800 and the company total is 2,100.\n" +
    "Step 2 — The share is \\(\\dfrac{800}{2100}\\).\n" +
    "Step 3 — Simplify: \\(\\dfrac{8}{21} \\approx 0.381\\).\n" +
    "Step 4 — That is about \\(38\\%\\).",
  fast: "Estimate rather than divide precisely. East's 800 is a little more than a third of 2,100 (which would be 700) and well under half (1,050), so the share sits between \\(33\\%\\) and \\(50\\%\\) — closer to the bottom of that range.\n" +
    "That bracket alone leaves only one plausible choice, and \\(8/21\\) confirms it at \\(38.1\\%\\).",
  traps: "(C) About 42% is the closest rival and would correspond to roughly 880 — it catches anyone who rounds 2,100 down to 1,900 or East up.\n" +
    "(E) About 50% would need East to be half the company, or 1,050.\n" +
    "(B) About 30% corresponds to 630 and (D) About 25% to 525 — the latter is the *average* per region, a real number from the previous question.\n" +
    "The word \"about\" signals that estimation is intended; computing to three decimals wastes time the exam does not give you.",
  take: "For \"about what percent\", bracket the answer against easy landmarks — a third, a half — before dividing. The word \"about\" licenses estimation."
},

"di-table-sales#5": {
  steps: "Step 1 — The question compares each region's Q1 figure with its own Q4 figure, so work row by row.\n" +
    "Step 2 — North: \\(200 - 120 = 80\\).\n" +
    "Step 3 — South: \\(110 - 90 = 20\\).\n" +
    "Step 4 — East: \\(200 - 200 = 0\\).\n" +
    "Step 5 — West: \\(100 - 50 = 50\\).\n" +
    "Step 6 — The largest increase is North's 80.",
  fast: "Four subtractions, one per row, comparing only the first and last quarter columns — the middle two are irrelevant.\n" +
    "Note that the question asks for the largest *increase* in absolute terms, not the largest percentage growth. West doubled its sales (a \\(100\\%\\) rise) but gained only 50; North gained 80.",
  traps: "(C) East is the largest region overall and its Q4 figure ties for the highest, but its Q1 and Q4 are identical — zero growth.\n" +
    "(D) West is the answer to \"largest *percentage* increase\", since 50 to 100 is a doubling. The question asks for the largest increase, which is absolute.\n" +
    "(B) South grew by only 20.\n" +
    "(E) a tie between South and West would require equal increases; they are 20 and 50.\n" +
    "Absolute versus relative change is the standard trap in table questions — read which the question names.",
  take: "\"Largest increase\" is absolute; \"largest percent increase\" is relative, and they often point to different rows. Compare only the two columns the question names."
},

"di-graphics-temp#1": {
  steps: "Step 1 — Graph 1 plots average monthly high temperature across the twelve months.\n" +
    "Step 2 — The curve rises from January through the middle of the year and falls after.\n" +
    "Step 3 — The peak sits at July, at \\(30^\\circ\\)C, with August just below at \\(29^\\circ\\).\n" +
    "Step 4 — So July has the greatest average high.",
  fast: "Read the maximum of the curve directly — this is a locate-the-peak question, not a calculation.\n" +
    "The only care needed is that August is very close behind, so check the two adjacent points rather than eyeballing the general shape.",
  traps: "(A) January and (C) December are the two troughs, at \\(5^\\circ\\) and \\(6^\\circ\\) — the answer to \"lowest\", not \"greatest\".\n" +
    "(D) April and (E) October both sit at \\(18^\\circ\\), the mid-slope values on either side of the peak; they are equal, which makes either attractive to a hurried scan.\n" +
    "The near-miss is August at \\(29^\\circ\\), not offered as a choice — but its closeness to July is why the peak must be read carefully rather than estimated.",
  take: "Locate the extreme point directly on the graph, and check its immediate neighbours when the curve is flat near the top."
},

"di-graphics-temp#2": {
  steps: "Step 1 — Graph 2 plots each shop's ice-cream sales against the day's high temperature.\n" +
    "Step 2 — The points run from around \\((7, 90)\\) at the lower left to around \\((32, 610)\\) at the upper right.\n" +
    "Step 3 — As temperature increases, sales increase consistently across the whole range.\n" +
    "Step 4 — That upward-sloping band is the definition of a positive correlation.",
  fast: "Read the direction of the cloud: lower-left to upper-right is positive, upper-left to lower-right is negative. Nothing else needs computing.\n" +
    "Here the band is unusually tight, which indicates a strong positive correlation — but strength and direction are separate questions, and only direction is asked.",
  traps: "(B) and (E) both describe a downward relationship, which is the opposite of what the plot shows.\n" +
    "(C) \"no relationship\" would mean a shapeless cloud with no directional tendency.\n" +
    "(D) \"a perfectly horizontal trend\" would mean sales are the same at every temperature — the points would form a flat line.\n" +
    "Note that (B) and (E) say the same thing in different words, which is itself a signal: two options that are logically identical cannot both be right, so neither is.",
  take: "Correlation direction is read from the slope of the point cloud: lower-left to upper-right is positive. Two options that mean the same thing are both wrong."
},

"di-graphics-temp#3": {
  steps: "Step 1 — A scatter plot shows how two variables move together. It records association, not mechanism.\n" +
    "Step 2 — Nothing in the plot rules out a third factor driving both, or the direction of influence running either way.\n" +
    "Step 3 — So any statement asserting that one variable *causes* the other goes beyond the evidence.\n" +
    "Step 4 — The claim the plot does support is the associational one: days with higher temperatures tend to have higher sales.\n" +
    "Step 5 — That is exactly what the upward-sloping band shows, with no causal claim attached.",
  fast: "Scan the options for causal verbs — \"cause\", \"lead to\", \"result in\" — and eliminate them. A scatter plot can never establish causation on its own.\n" +
    "Of the remaining options, pick the one that describes a *tendency* rather than a universal rule, since scattered data admits exceptions.",
  traps: "(A) is the intended trap because the causal story is genuinely plausible — warm weather really does drive ice-cream sales. But plausibility is not evidence: the plot alone cannot distinguish causation from correlation.\n" +
    "(B) reverses the causal direction, which is implausible but no less supported by the plot than (A) — and that symmetry is precisely why neither is warranted.\n" +
    "(D) contradicts the visible upward band.\n" +
    "(E) reverses the observed relationship entirely.\n" +
    "The word \"tend\" in the correct statement is doing real work: it claims a general pattern, not a rule without exceptions.",
  take: "Correlation is not causation. A scatter plot supports \"tends to\" statements; it never supports \"causes\" statements without further evidence."
},

"di-graphics-temp#4": {
  steps: "Step 1 — Read the relevant temperatures from Graph 1: Jan \\(5\\), Apr \\(18\\), Jul \\(30\\), Aug \\(29\\), Sep \\(24\\), Oct \\(18\\).\n" +
    "Step 2 — Compute each offered gap. Jan to Apr: \\(18 - 5 = 13\\).\n" +
    "Step 3 — Apr to Jul: \\(30 - 18 = 12\\).\n" +
    "Step 4 — Jul to Aug: \\(30 - 29 = 1\\).\n" +
    "Step 5 — Aug to Sep: \\(29 - 24 = 5\\).\n" +
    "Step 6 — Sep to Oct: \\(24 - 18 = 6\\).\n" +
    "Step 7 — The smallest change is the single degree between July and August.",
  fast: "Look for the flattest part of the curve rather than computing every gap — a curve is always flattest at its peak, and the peak here is July–August.\n" +
    "That visual shortcut identifies the answer immediately; the arithmetic is only confirmation.",
  traps: "(C) Aug to Sep is the next-flattest pair at 5 degrees and is the natural second guess if you look just past the peak.\n" +
    "(E) Sep to Oct at 6 degrees is on the steepening autumn slope.\n" +
    "(A) and (B) span three months each and give the two largest changes — they are the answer to \"greatest change\", not \"closest to zero\".\n" +
    "Note that those two options are not consecutive months at all, so a careful reading eliminates them before any arithmetic.",
  take: "The change between adjacent points is smallest where the curve is flattest — at its maximum or minimum. Check that the pairs offered are actually adjacent."
},

"di-graphics-temp#5": {
  steps: "Step 1 — Locate the region described. In Graph 2 the horizontal axis is temperature and the vertical axis is sales, so the upper-left corner is low temperature with high sales.\n" +
    "Step 2 — That corner contains no points.\n" +
    "Step 3 — An empty region means no observed day had that combination — here, no cold day produced very high sales.\n" +
    "Step 4 — So the absence indicates that very high sales did not occur on cold days.",
  fast: "Translate the corner into words using the two axis labels, then state what an *absence* of points means: that combination never occurred in the data.\n" +
    "The discipline is to describe only what is missing, not to infer anything about the corners that do contain points.",
  traps: "(A) says the opposite of what an empty corner means — points there would indicate cold days with high sales, and there are none.\n" +
    "(C) describes the lower-*right* corner (hot days, no sales), a different region entirely, and that corner is also empty but is not what the question asks about.\n" +
    "(D) invents a labelling error the plot gives no reason to suspect.\n" +
    "(E) contradicts the clear upward band.\n" +
    "The whole question is axis orientation: mixing up which axis is which turns the upper-left into the lower-right and reverses the meaning.",
  take: "Translate a region of a scatter plot into words using both axis labels. An empty region means that combination was never observed — nothing more."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-msr-startup#1": {
  steps: "Step 1 — Source 1 sets three requirements: at most 10 weeks, at most 80,000 dollars, and Tier-2 certification. All three must hold, and Source 3 says none will be waived.\n" +
    "Step 2 — Vendor A: 8 weeks ✓, 85,000 ✗ (above the ceiling), Tier-2 ✓ — fails on cost.\n" +
    "Step 3 — Vendor B: 9 weeks ✓, 78,000 ✓, Tier-1 ✗ — fails on certification, since Source 3 says Tier-1 does not satisfy a Tier-2 requirement.\n" +
    "Step 4 — Vendor C: 10 weeks ✓ (the limit is inclusive), 75,000 ✓, Tier-2 ✓ — meets all three.\n" +
    "Step 5 — Vendor D: 12 weeks ✗, 70,000 ✓, Tier-2 ✓ — fails on time.\n" +
    "Step 6 — Only Vendor C qualifies.",
  fast: "Build a three-column checklist and eliminate on the first failure — most vendors fall on one criterion, so you rarely check all three.\n" +
    "Start with the criterion that eliminates most: the cost ceiling and the time limit each knock out one vendor, and the certification rule knocks out another.",
  traps: "(D) Vendor D has the lowest bid at 70,000, which makes it attractive if you scan for price first — but 12 weeks breaks the deadline outright.\n" +
    "(B) Vendor B is comfortably within both numeric limits and fails only on the certification rule buried in Source 3.\n" +
    "(A) Vendor A is the fastest at 8 weeks.\n" +
    "(E) \"None of them\" tempts anyone who misreads 10 weeks as a strict limit; Vendor C sits exactly at 10, which the wording \"within 10 weeks\" permits.\n" +
    "The boundary case is deliberate — the qualifying vendor is exactly at one limit.",
  take: "Multi-source questions reward a checklist. Eliminate on first failure, and read boundary conditions exactly — \"within 10 weeks\" includes 10."
},

"di-msr-startup#2": {
  steps: "Step 1 — Check Vendor A against each requirement in turn.\n" +
    "Step 2 — Time: 8 weeks against a limit of 10 — passes.\n" +
    "Step 3 — Cost: 85,000 against a ceiling of 80,000 — fails.\n" +
    "Step 4 — Certification: Tier-2, which is exactly what is required — passes.\n" +
    "Step 5 — Exactly one requirement fails, and it is the cost.",
  fast: "The word \"solely\" tells you the answer is a single criterion, so the job is to confirm the other two pass rather than to hunt for failures.\n" +
    "Vendor A is the fastest bidder and already holds the required certification, which makes the cost the only candidate.",
  traps: "(D) and (E) each pair cost with a second failure, but Vendor A's 8 weeks is well inside the deadline and its Tier-2 certification is exactly what is asked.\n" +
    "(C) certification confuses Vendor A with Vendor B, the Tier-1 bidder.\n" +
    "(B) completion time confuses it with Vendor D, the 12-week bidder.\n" +
    "Each distractor imports another vendor's failing, which is the standard multi-source trap — keep the rows separate.",
  take: "\"Solely because of\" means exactly one criterion fails. Verify the others pass rather than stopping at the first failure you find."
},

"di-msr-startup#3": {
  steps: "Step 1 — Change only the cost ceiling to 86,000; the 10-week limit and the Tier-2 requirement stand.\n" +
    "Step 2 — Vendor A: 8 weeks ✓, 85,000 now ✓ (under 86,000), Tier-2 ✓ — qualifies.\n" +
    "Step 3 — Vendor B: 78,000 ✓ and 9 weeks ✓, but Tier-1 still fails the certification requirement — does not qualify.\n" +
    "Step 4 — Vendor C: 10 weeks ✓, 75,000 ✓, Tier-2 ✓ — still qualifies.\n" +
    "Step 5 — Vendor D: 12 weeks ✗ — still fails.\n" +
    "Step 6 — Exactly two vendors qualify, so the statement is true.",
  fast: "Only one criterion moved, so re-check only that column: which vendors were failing on cost alone? Vendor A was, and 85,000 now clears 86,000.\n" +
    "Everything else is unchanged, so the new qualifying set is the old one plus Vendor A — two vendors.",
  traps: "(B) three vendors would require Vendor B or D to newly qualify, but neither was failing on cost — B fails certification and D fails time, and neither changed.\n" +
    "(A) one vendor forgets that Vendor A's only failing was the cost.\n" +
    "(C) no vendor contradicts Vendor C, which qualified even under the tighter ceiling.\n" +
    "(E) treats a hypothetical as undeterminable, but every figure needed is given.\n" +
    "The efficient method — re-examine only the criterion that changed — is what prevents re-deriving the whole table and making a slip.",
  take: "When a hypothetical changes one condition, re-check only the entries that were failing on that condition. Everything else keeps its previous verdict."
},

"di-msr-startup#4": {
  steps: "Step 1 — Source 3 states the rule precisely: a Tier-2 certification also satisfies any Tier-1 requirement, but not the reverse.\n" +
    "Step 2 — \"Not the reverse\" means a Tier-1 certification does *not* satisfy a Tier-2 requirement.\n" +
    "Step 3 — Vendor B holds Tier-1 and the client requires Tier-2.\n" +
    "Step 4 — Therefore Vendor B does not satisfy the certification requirement.",
  fast: "The rule is one-directional, so the whole question is reading which direction it runs. Tier-2 is the stronger credential: it covers Tier-1 needs, but Tier-1 does not cover Tier-2 needs.\n" +
    "Picture it as a hierarchy — the higher tier substitutes downward, never upward.",
  traps: "(A) reads the rule backwards, applying the substitution in the direction Source 3 explicitly excludes.\n" +
    "(C) \"exceeds\" would be true of a Tier-2 vendor facing a Tier-1 requirement — the reverse situation.\n" +
    "(D) invents an exemption; Source 3 says the client will not waive any requirement.\n" +
    "(E) invents a trade-off between price and certification, which no source offers.\n" +
    "Two of the distractors describe the mirror-image case, which is the standard way a one-directional rule is tested.",
  take: "A one-directional substitution rule runs only the way it is written. \"A satisfies B, but not the reverse\" means B never satisfies A."
},

"di-msr-startup#5": {
  steps: "Step 1 — The hypothetical drops the cost ceiling but keeps the time and certification requirements, then asks for the cheapest qualifying bid.\n" +
    "Step 2 — Filter on time (≤10 weeks) and certification (Tier-2). Vendor A: 8 weeks ✓, Tier-2 ✓ — qualifies.\n" +
    "Step 3 — Vendor B: Tier-1 ✗ — excluded.\n" +
    "Step 4 — Vendor C: 10 weeks ✓, Tier-2 ✓ — qualifies.\n" +
    "Step 5 — Vendor D: 12 weeks ✗ — excluded.\n" +
    "Step 6 — Between the two survivors, Vendor A bids 85,000 and Vendor C bids 75,000. The cheaper is Vendor C.",
  fast: "Filter first, then optimise. The two surviving criteria eliminate half the field immediately, and only then does price matter.\n" +
    "Note that removing the cost ceiling does not remove cost from the decision — it changes cost from a filter into the ranking criterion.",
  traps: "(C) Vendor D is the cheapest bid overall at 70,000, and it is the trap for anyone who optimises before filtering. Its 12 weeks disqualify it regardless of price.\n" +
    "(B) Vendor B is the second cheapest but fails the certification rule.\n" +
    "(A) Vendor A survives the filter but is 10,000 dearer than the answer.\n" +
    "(D) \"Vendor A or C\" treats the choice as undetermined, but the two prices differ, so the cheapest is unique.\n" +
    "The ordering of operations is the whole question: filter on the hard requirements, then rank the survivors.",
  take: "Apply the hard filters before optimising. Relaxing a criterion as a *ceiling* often keeps it active as a *ranking* rule."
},

"di-700-enrolment#1": {
  steps: "Step 1 — Note what the table contains: percentages of women only, with no enrollment counts anywhere. That immediately limits what can be concluded.\n" +
    "Step 2 — Test (D): does each university show at least one fall-to-fall decline in its percentage?\n" +
    "Step 3 — University X falls from 53.6 in 2002 to 53.3 in 2003 ✓. University Y falls from 44.2 in 2000 to 44.1 in 2001 ✓. University Z falls from 58.9 in 2001 to 55.8 in 2002 ✓.\n" +
    "Step 4 — All three qualify, so (D) must be true.\n" +
    "Step 5 — The others fail because they require counts. (A) compares total enrollments; (B) compares numbers of women across years; (C) compares numbers of women across universities; (E) compares combined enrollment.\n" +
    "Step 6 — None of those quantities appears in the table, and a percentage cannot supply them.",
  fast: "Read the second paragraph of the source first: \"The table gives percentages only. It reports no enrollment counts.\" That sentence eliminates four of the five options before you look at a single number.\n" +
    "Then verify the survivor by scanning each university's column for any downward step — one suffices per column.",
  traps: "(C) is the most seductive: University Z's percentage exceeds University X's in every single year, which looks conclusive. But a higher *proportion* of women says nothing about a higher *number* — X could be five times the size.\n" +
    "(B) makes the same error across time: Province A's percentage fell from 50.6 to 49.7, yet if total enrollment grew, the number of women could still have risen.\n" +
    "(A) infers size from a percentage, which is impossible in either direction.\n" +
    "(E) asserts a trend in combined enrollment, a quantity the table never reports.\n" +
    "The single discipline that answers this question: a percentage is a ratio, and a ratio alone never yields a count.",
  take: "A table of percentages supports conclusions about percentages only. Comparing counts across groups or years requires the totals, which a proportion never supplies."
},

"di-700-enrolment#2": {
  steps: "Step 1 — The question asks for the largest change between two *consecutive* falls, so compare adjacent rows within each column.\n" +
    "Step 2 — University X's year-on-year moves are at most 0.6 points (52.0 to 51.4, in 2007–08).\n" +
    "Step 3 — University Y's are at most 0.6 points (43.8 to 43.2, in 2006–07, and back up in 2007–08).\n" +
    "Step 4 — University Z moves from 58.9 in 2001 to 55.8 in 2002 — a drop of 3.1 points.\n" +
    "Step 5 — Z then rebounds from 55.8 to 58.6 in 2003, a rise of 2.8 points — large, but smaller than the drop before it.\n" +
    "Step 6 — So the largest single-year change anywhere in the table is University Z's 3.1 points.",
  fast: "Scan for the visually obvious outlier: University Z's 55.8 in 2002 breaks a column that otherwise sits between 57.8 and 58.9. The two changes bracketing that dip are the only candidates.\n" +
    "Then compare just those two — 3.1 down and 2.8 up — rather than differencing every adjacent pair in the table.",
  traps: "(D) 2.8 points is University Z's rebound the following year — a genuine change, and the closest rival, but smaller than the drop that preceded it.\n" +
    "(A) 1.4 points is University X's change across the entire nine years (52.8 to 51.4), not a one-year move.\n" +
    "(C) 1.0 point is University Y's full-period range (44.2 down to 43.2); its largest single-year move is only 0.6.\n" +
    "(E) 2.2 points is University X's full range (53.6 down to 51.4), again a multi-year figure.\n" +
    "Three of the four distractors substitute a whole-period range for a one-year change — the word \"from one fall to the next\" is what rules them out.",
  take: "\"From one year to the next\" means adjacent rows only. Look for the value that breaks its column's pattern, then check the changes on either side of it."
},

"di-700-enrolment#3": {
  steps: "Step 1 — Read the definition of the Province A column: women at all three universities divided by total enrollment at all three.\n" +
    "Step 2 — That is not a plain average of the three percentages; it is an average weighted by each university's enrollment.\n" +
    "Step 3 — A weighted average of several numbers always lies between the smallest and the largest of them, whatever the weights are — because it is a blend, and no blend can escape the range of its ingredients.\n" +
    "Step 4 — So the Province A figure is mathematically guaranteed to sit between the lowest and highest university figure each year.\n" +
    "Step 5 — That is exactly what choice (E) states.",
  fast: "Ask what kind of quantity the combined column *is*. Once you identify it as a weighted average, the between-ness is a theorem rather than a coincidence, and no data needs checking.\n" +
    "The give-away is the phrase \"combined ... as a percent of the combined total\" — a ratio of sums is always a weighted average of the component ratios.",
  traps: "(A) equal enrollments would make the combined figure the *plain* average, which is one particular point between the extremes — but the between-ness holds for any sizes, so equality is not needed.\n" +
    "(C) describes year-to-year movement, which has nothing to do with where a figure sits within a single year.\n" +
    "(D) is true of this table — University Y is lowest every year — but it explains which figure is the lower bound, not why the combined value stays inside the bounds.\n" +
    "(B) is irrelevant: the column is defined as these three universities combined, so other institutions cannot affect it.\n" +
    "The question asks why the pattern *had* to happen, so a true-but-incidental observation like (D) is not an explanation.",
  take: "A ratio of sums is a weighted average of the component ratios, and a weighted average always lies between the smallest and largest component. \"Had to happen\" calls for a guarantee, not a coincidence."
},

"di-700-enrolment#4": {
  steps: "Step 1 — There are nine years, so eight fall-to-fall intervals. Record the sign of each university's change in each.\n" +
    "Step 2 — 2000→2001: X \\(+0.3\\), Y \\(-0.1\\), Z \\(+0.4\\) — mixed.\n" +
    "Step 3 — 2001→2002: \\(+0.5, -0.1, -3.1\\) — mixed. 2002→2003: \\(-0.3, -0.4, +2.8\\) — mixed.\n" +
    "Step 4 — 2003→2004: \\(-0.3, +0.3, -0.5\\) — mixed. 2004→2005: \\(-0.5, -0.2, +0.2\\) — mixed.\n" +
    "Step 5 — 2005→2006: \\(-0.3, +0.1, -0.2\\) — mixed.\n" +
    "Step 6 — 2006→2007: \\(-0.2, -0.6, -0.3\\) — all three fall ✓.\n" +
    "Step 7 — 2007→2008: \\(-0.6, +0.6, +0.5\\) — mixed.\n" +
    "Step 8 — Exactly one interval has all three moving together.",
  fast: "Record only signs, not magnitudes — the question asks about direction. Write three symbols per interval and stop as soon as a mixed pair appears.\n" +
    "University Y is the usual dissenter: it rises in several intervals where X and Z fall, so checking Y against X first often settles an interval in one comparison.",
  traps: "(A) None misses 2006→2007, where the changes are small (0.2, 0.6 and 0.3) and easy to overlook — small moves still count as moves.\n" +
    "(C), (D) and (E) over-count, usually by treating an interval as uniform after checking only two of the three columns.\n" +
    "Note there are eight intervals, not nine — a nine-row table has eight gaps, and mis-counting that is the other common slip.\n" +
    "No interval here has a zero change, so every entry is genuinely up or down and no tie-breaking is needed.",
  take: "For direction questions, record signs only and stop at the first disagreement. A table with \\(n\\) rows has \\(n-1\\) intervals."
}

});
