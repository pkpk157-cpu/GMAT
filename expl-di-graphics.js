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
