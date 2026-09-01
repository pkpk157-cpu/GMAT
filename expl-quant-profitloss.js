/* Rewritten explanations — profit, loss and discount.

   Everything in this topic is percentage change with the base named for you:
   profit and loss percentages are always on COST, discount is always on the
   MARKED price, and sales tax is on the selling price. Getting the base right
   is the question; the arithmetic rarely is. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-profitloss-ex#1": {
  steps: "Step 1 — Loss \\(= \\text{CP} - \\text{SP} = 1600 - 1400 = \\$200\\).\n" +
    "Step 2 — Loss percent is always measured on the [[cost]] price.\n" +
    "Step 3 — \\(\\dfrac{200}{1600} = \\dfrac18 = 12.5\\%\\).",
  fast: "\\(\\dfrac{200}{1600}\\) reduces to \\(\\dfrac18\\), and \\(\\dfrac18 = 12.5\\%\\) is one of the fraction–percent pairs worth knowing on sight.\n" +
    "Reducing before dividing is almost always faster than long division.",
  traps: "(B) 12% is \\(\\dfrac{200}{1400}\\) rounded — dividing by the selling price instead of the cost.\n" +
    "(C) 14% and (E) 15.5% come from the same wrong base with different rounding.\n" +
    "(D) 10% is the round-number guess.",
  take: "Profit and loss percent are always on cost price. If you divide by the selling price you will land on a nearby wrong answer, which is exactly what the distractors are for."
},

"quant-profitloss-ex#2": {
  steps: "Step 1 — A 10% gain means \\(\\text{SP} = 1.10 \\times \\text{CP}\\).\n" +
    "Step 2 — \\(330 = 1.10 \\times \\text{CP}\\).\n" +
    "Step 3 — \\(\\text{CP} = \\dfrac{330}{1.1} = \\$300\\).",
  fast: "A 10% gain makes the selling price \\(\\dfrac{11}{10}\\) of cost, so cost is \\(\\dfrac{10}{11}\\) of 330 — and \\(330/11 = 30\\), so cost is $300.\n" +
    "Dividing by 11 first keeps everything in whole numbers.",
  traps: "(B) $297 is \\(330 - 10\\%\\ \\text{of}\\ 330\\) — subtracting the percentage from the [[selling]] price rather than undoing a rise on the cost. This is the standard trap and it is always slightly too low.\n" +
    "(C) $303 and (E) $323 are near-misses; (D) $320 is a round guess.",
  take: "To undo a \\(p\\%\\) gain, divide by \\(1 + p/100\\); do not subtract \\(p\\%\\) from the selling price. The two differ by \\(p^2/100\\) percent, which is exactly the gap between (A) and (B) here."
},

"quant-profitloss-ex#3": {
  steps: "Step 1 — Each sale is a multiplier on what the seller paid.\n" +
    "Step 2 — A → B at 20% profit: \\(\\times 1.20\\). B → C at 25% profit: \\(\\times 1.25\\).\n" +
    "Step 3 — Combined: \\(1.20 \\times 1.25 = 1.50\\).\n" +
    "Step 4 — \\(225 = 1.50 \\times \\text{A's cost}\\), so A paid \\(\\dfrac{225}{1.5} = \\$150\\).",
  fast: "\\(1.2 \\times 1.25 = 1.5\\) — the price simply gets one-and-a-half times bigger down the chain. So A paid \\(225 \\div 1.5 = 150\\).\n" +
    "In fractions it is even cleaner: \\(\\dfrac65 \\times \\dfrac54 = \\dfrac64 = \\dfrac32\\); the fives cancel.",
  traps: "(D) $180 is what B paid (\\(225/1.25\\)) — a correct intermediate value one step short of the answer.\n" +
    "(A) $140 and (B) $160 come from adding the percentages (45% total) instead of compounding them.\n" +
    "(E) $190 is a decoy near B's price.",
  take: "Successive markups multiply. Convert them to fractions and look for cancellation — \\(\\tfrac65 \\times \\tfrac54\\) collapsing to \\(\\tfrac32\\) is why the numbers were chosen."
},

"quant-profitloss-ex#4": {
  steps: "Step 1 — Put both prices on a per-article basis.\n" +
    "Step 2 — Cost: 6 for $5, so \\(\\text{CP} = \\dfrac56\\) per article.\n" +
    "Step 3 — Sale: 5 for $6, so \\(\\text{SP} = \\dfrac65\\) per article.\n" +
    "Step 4 — Gain per article: \\(\\dfrac65 - \\dfrac56 = \\dfrac{36 - 25}{30} = \\dfrac{11}{30}\\).\n" +
    "Step 5 — Gain percent on cost: \\(\\dfrac{11/30}{5/6} = \\dfrac{11}{30} \\times \\dfrac65 = \\dfrac{66}{150} = 44\\%\\).",
  fast: "Take 30 articles — the LCM of 6 and 5 — so both prices are whole numbers.\n" +
    "Cost: \\(30/6 = 5\\) lots at $5 \\(= \\$25\\). Sale: \\(30/5 = 6\\) lots at $6 \\(= \\$36\\).\n" +
    "Gain \\(= 11\\) on a cost of 25 \\(= 44\\%\\). No fractions at any point.",
  traps: "(A) 20% is \\(\\dfrac{6-5}{5}\\), comparing the two dollar figures directly and ignoring that they cover different quantities.\n" +
    "(B) 25% and (C) 36% are what appear from mixing up which ratio goes on top.\n" +
    "(E) 52% overshoots. A useful bound: the price per article goes from \\(0.83\\) to \\(1.20\\), which is clearly under a 50% rise.",
  take: "\"\\(a\\) for \\(\\$b\\)\" questions become easy the moment you buy the LCM of the two group sizes. Everything is then whole numbers and the percentage is one division."
},

"quant-profitloss-ex#5": {
  steps: "Step 1 — The two radios share a [[selling]] price, not a cost price — that is what makes this different from question 6.\n" +
    "Step 2 — First radio, 10% gain: \\(\\text{CP} = \\dfrac{792}{1.1} = \\$720\\).\n" +
    "Step 3 — Second radio, 10% loss: \\(\\text{CP} = \\dfrac{792}{0.9} = \\$880\\).\n" +
    "Step 4 — Total cost \\(= 720 + 880 = \\$1{,}600\\); total revenue \\(= 2 \\times 792 = \\$1{,}584\\).\n" +
    "Step 5 — Loss \\(= \\$16\\) on $1,600 \\(= 1\\%\\).",
  fast: "Standing result: two items sold at the same price, one at \\(+x\\%\\) and one at \\(-x\\%\\), always give a net [[loss]] of \\(\\dfrac{x^2}{100}\\) percent.\n" +
    "Here \\(\\dfrac{10^2}{100} = 1\\%\\) loss. The selling price never enters it.\n" +
    "It is always a loss because the item sold at a loss must have cost more, so the loss is taken on a bigger base than the gain.",
  traps: "(A) \"No gain or loss\" is the instinct the question is built to catch — the percentages look symmetric but they sit on different cost prices.\n" +
    "(C) 1% gain has the right size and the wrong sign; the result is never a gain.\n" +
    "(D) 2% loss doubles it, and (E) 10% loss reuses the number from the stem.",
  take: "Equal [[selling]] prices, \\(\\pm x\\%\\): always a loss of \\(x^2/100\\) percent. Equal [[cost]] prices, \\(\\pm x\\%\\): exactly break even. Which price is shared is the entire question."
},

"quant-profitloss-ex#6": {
  steps: "Step 1 — Here the two apartments share a [[cost]] price of $200,000 each.\n" +
    "Step 2 — The gain on one is \\(20\\%\\) of 200,000 \\(= \\$40{,}000\\).\n" +
    "Step 3 — The loss on the other is \\(20\\%\\) of the same 200,000 \\(= \\$40{,}000\\).\n" +
    "Step 4 — Because both percentages act on the same base, they cancel exactly: no gain, no loss.",
  fast: "Same cost price both times means the \\(+20\\%\\) and \\(-20\\%\\) are the same number of dollars. They cancel — no computation needed.\n" +
    "Compare with question 5 in this set, where the [[selling]] prices matched and the answer was a 1% loss. Reading which price is shared decides the answer before any arithmetic.",
  traps: "(B) 4% loss is the answer to the equal-selling-price version of this question (\\(x^2/100\\) with \\(x = 20\\)) — it is right for a question that was not asked.\n" +
    "(C) 4% gain is that same value with the sign flipped.\n" +
    "(D) 2% loss and (E) 20% gain are decoys around the two plausible answers.",
  take: "Same cost price, equal and opposite percentages → exact break-even. The \\(x^2/100\\) loss rule applies only when the [[selling]] prices are equal."
},

"quant-profitloss-ex#7": {
  steps: "Step 1 — Recover the cost price from the loss-making sale.\n" +
    "Step 2 — A 20% loss means \\(\\text{SP} = 0.80 \\times \\text{CP}\\), so \\(\\text{CP} = \\dfrac{1536}{0.8} = \\$1{,}920\\).\n" +
    "Step 3 — Now compare the new price with that cost: \\(2000 - 1920 = \\$80\\) gain.\n" +
    "Step 4 — Gain percent \\(= \\dfrac{80}{1920} = \\dfrac{1}{24}\\).\n" +
    "Step 5 — \\(\\dfrac{1}{24} = 4\\tfrac16\\%\\) gain.",
  fast: "\\(1536 \\div 0.8\\) is \\(1536 \\times \\dfrac54 = 1920\\). Then the gain \\(80/1920\\) reduces to \\(\\dfrac{1}{24}\\), and \\(\\dfrac{1}{24} = 4\\tfrac16\\%\\).\n" +
    "Reducing the fraction before converting is what makes the repeating decimal manageable — \\(1/24\\) is exact, \\(4.1666\\ldots\\) is not.",
  traps: "(D) \\(4\\tfrac16\\%\\) [[loss]] is the right magnitude with the wrong sign — $2,000 is above the $1,920 cost, so it must be a gain.\n" +
    "(B) 5% is \\(\\dfrac{100}{2000}\\), measuring the gain against the selling price.\n" +
    "(A) 4% is \\(\\dfrac{1}{24}\\) truncated, and its presence next to \\(4\\tfrac16\\%\\) tells you the answer is an exact fraction.\n" +
    "(E) \\(3\\tfrac13\\%\\) is \\(\\dfrac{1}{30}\\) — a neighbouring \"nice\" fraction that no route from these numbers produces. Its job is to make \\(\\dfrac{1}{24}\\) feel less certain than it is.",
  take: "Always recover the cost price first — every percentage in this topic is measured against it. Then reduce the gain fraction before converting to a percentage."
},

"quant-profitloss-ex#8": {
  steps: "Step 1 — Successive discounts multiply as surviving fractions of the price.\n" +
    "Step 2 — After 15% off, \\(85\\%\\) remains: \\(\\times 0.85\\).\n" +
    "Step 3 — After a further 20% off [[that]], \\(80\\%\\) remains: \\(\\times 0.80\\).\n" +
    "Step 4 — \\(0.85 \\times 0.80 = 0.68\\).\n" +
    "Step 5 — 68% of the price is paid, so the single equivalent discount is \\(32\\%\\).",
  fast: "Multiply what survives, not what is removed: \\(0.85 \\times 0.8 = 0.68\\) → 32% off.\n" +
    "Or use the formula \\(a + b - \\dfrac{ab}{100} = 15 + 20 - 3 = 32\\).\n" +
    "Either way the answer is always a little [[less]] than the sum, because the second discount applies to an already-reduced price.",
  traps: "(B) 35% is \\(15 + 20\\) — the additive trap, and always an overestimate.\n" +
    "(D) 33% and (E) 37% sit near the two plausible answers to catch estimates.\n" +
    "(C) 30% undershoots. The correct value must lie strictly between the larger single discount (20%) and their sum (35%).",
  take: "Successive discounts: multiply the surviving fractions. The equivalent single discount is \\(a + b - \\dfrac{ab}{100}\\), always below \\(a + b\\)."
},

"quant-profitloss-ex#9": {
  steps: "Step 1 — Discount is always measured on the [[marked]] price.\n" +
    "Step 2 — After 12% off, 88% of the marked price is paid: \\(0.88 \\times \\text{MP} = 880\\).\n" +
    "Step 3 — \\(\\text{MP} = \\dfrac{880}{0.88} = \\$1{,}000\\).",
  fast: "\\(880/0.88\\): both have 88 in them, so this is just \\(1000\\). Spotting that saves the division entirely.\n" +
    "More generally, 88% of 1,000 is 880 — checking forwards is quicker than dividing backwards.",
  traps: "(A) $990 is \\(880 + 12\\%\\ \\text{of}\\ 880\\) — adding the discount back onto the sale price instead of undoing it on the marked price.\n" +
    "(C) $1,024 and (E) $1,048 come from dividing by 0.86 or similar.\n" +
    "(D) $950 undershoots.",
  take: "Undo a discount by dividing by \\((1 - d)\\), never by adding \\(d\\%\\) back. Discount is on the marked price; profit is on the cost price — keep the two bases separate."
},

"quant-profitloss-ex#10": {
  steps: "Step 1 — Find the actual selling price. A 10% discount on $280 gives \\(0.9 \\times 280 = \\$252\\).\n" +
    "Step 2 — That selling price represents a 26% profit on cost: \\(252 = 1.26 \\times \\text{CP}\\).\n" +
    "Step 3 — \\(\\text{CP} = \\dfrac{252}{1.26} = \\$200\\).",
  fast: "Two steps, each on its own base: discount off the marked price (\\(280 \\to 252\\)), then divide out the profit (\\(252/1.26 = 200\\)).\n" +
    "\\(252/1.26\\) is \\(25200/126 = 200\\) — clearing the decimal makes it a clean division.\n" +
    "Checking forwards is faster still: 26% of 200 is 52, and \\(200 + 52 = 252\\) ✓.",
  traps: "(A) $210 comes from taking 25% off 280, or from applying the discount to the cost price.\n" +
    "(C) $220 and (E) $230 bracket the answer.\n" +
    "(D) $190 undershoots. The two percentages here act on [[different]] bases — 10% on the marked price, 26% on the cost — and mixing them is the whole trap.",
  take: "Marked price → discount → selling price → profit → cost price. Walk the chain one base at a time and never combine a discount percentage with a profit percentage."
},

"quant-profitloss-ex#11": {
  steps: "Step 1 — \"CP of 15 = SP of 20\" compares totals, so write it as \\(15\\,\\text{CP} = 20\\,\\text{SP}\\).\n" +
    "Step 2 — Rearrange: \\(\\dfrac{\\text{SP}}{\\text{CP}} = \\dfrac{15}{20} = \\dfrac34\\).\n" +
    "Step 3 — Selling at three-quarters of cost is a loss of one-quarter.\n" +
    "Step 4 — Loss percent \\(= 25\\%\\).",
  fast: "The ratio flips: \\(\\dfrac{\\text{SP}}{\\text{CP}} = \\dfrac{\\text{number bought}}{\\text{number sold}} = \\dfrac{15}{20} = \\dfrac34\\).\n" +
    "Below 1 means a loss, and \\(1 - \\dfrac34 = \\dfrac14 = 25\\%\\).\n" +
    "Direction check first: you need to sell [[more]] articles (20) to raise what 15 cost, so each is going out cheap — a loss.",
  traps: "(A) 20% is \\(\\dfrac{20-15}{20}\\), dividing the gap by the selling count instead of the cost count.\n" +
    "(C) \\(33\\tfrac13\\%\\) is \\(\\dfrac{5}{15}\\) — the gain percent you would get if the counts were reversed.\n" +
    "(D) 30% and (E) 15% are decoys; 15 in particular is lifted straight from the stem.",
  take: "\\(m\\,\\text{CP} = n\\,\\text{SP}\\) gives \\(\\dfrac{\\text{SP}}{\\text{CP}} = \\dfrac{m}{n}\\). If \\(n > m\\) it is a loss; if \\(n < m\\) it is a gain. Decide the direction before computing."
},

"quant-profitloss-ex#12": {
  steps: "Step 1 — \\(6\\,\\text{CP} = 4\\,\\text{SP}\\).\n" +
    "Step 2 — So \\(\\dfrac{\\text{SP}}{\\text{CP}} = \\dfrac64 = \\dfrac32\\).\n" +
    "Step 3 — Selling at 1.5 times cost is a 50% gain.",
  fast: "\\(\\dfrac{\\text{SP}}{\\text{CP}} = \\dfrac{6}{4} = 1.5\\) → 50% gain.\n" +
    "Direction check: only 4 articles need to be sold to recover what 6 cost, so each sells dear — a gain. That alone eliminates any loss-shaped answer.",
  traps: "(A) \\(33\\tfrac13\\%\\) is \\(\\dfrac{2}{6}\\), dividing the gap by the wrong count — it is the loss percent for the mirror-image question.\n" +
    "(D) \\(66\\tfrac23\\%\\) is \\(\\dfrac46\\) misread as a gain.\n" +
    "(C) 40% and (E) 25% are round decoys.\n" +
    "Note this question and question 11 are the same structure with the counts swapped, and the wrong answers are drawn from each other's working.",
  take: "Same rule as question 11: \\(\\dfrac{\\text{SP}}{\\text{CP}} = \\dfrac{\\text{bought}}{\\text{sold}}\\). Fewer sold than bought means a gain."
},

"quant-profitloss-ex#13": {
  steps: "Step 1 — Two things happen on two different bases: the markup is on cost, the discount is on the marked price.\n" +
    "Step 2 — Let \\(\\text{CP} = 100\\). The required selling price is \\(120\\) (a 20% profit).\n" +
    "Step 3 — That selling price is the marked price after a 10% discount: \\(0.9 \\times \\text{MP} = 120\\).\n" +
    "Step 4 — \\(\\text{MP} = \\dfrac{120}{0.9} = 133\\tfrac13\\).\n" +
    "Step 5 — The markup above cost is \\(133\\tfrac13 - 100 = 33\\tfrac13\\%\\).",
  fast: "\\(\\dfrac{\\text{MP}}{\\text{CP}} = \\dfrac{1 + \\text{profit}}{1 - \\text{discount}} = \\dfrac{1.2}{0.9} = \\dfrac43\\).\n" +
    "A factor of \\(\\dfrac43\\) is a \\(33\\tfrac13\\%\\) markup. One division.\n" +
    "The markup must always exceed the profit plus the discount would suggest, because the discount is taken on the [[larger]] marked price.",
  traps: "(A) 30% is \\(20 + 10\\), adding the two percentages across different bases.\n" +
    "(C) 32% is the equivalent-single-discount arithmetic misapplied.\n" +
    "(E) 20% ignores the discount entirely.\n" +
    "(D) 35% overshoots — worth noting that the answer must be above 30%, which already rules out (A), (C) and (E).",
  take: "Markup \\(= \\dfrac{1 + \\text{profit}}{1 - \\text{discount}} - 1\\). Never add a discount percentage to a profit percentage: they sit on different bases."
},

"quant-profitloss-ex#14": {
  steps: "Step 1 — Work backwards from the sale to find the mixture's cost.\n" +
    "Step 2 — Selling at $96 for a 20% profit means \\(96 = 1.2 \\times \\text{CP}\\), so the mixture costs $80 per kg.\n" +
    "Step 3 — Now it is an alligation between $100 (ghee) and $50 (oil) with a mean of $80.\n" +
    "Step 4 — Distances from the mean: ghee is \\(100 - 80 = 20\\) above; oil is \\(80 - 50 = 30\\) below.\n" +
    "Step 5 — The quantities are in the ratio of the [[opposite]] distances: ghee : oil \\(= 30 : 20 = 3 : 2\\).",
  fast: "Find the blend cost first (\\(96/1.2 = 80\\)), then draw the alligation cross: \\(80\\) sits 30 above the oil and 20 below the ghee, so the ratio is \\(30 : 20 = 3 : 2\\).\n" +
    "Sanity check: 80 is nearer 100 than 50, so there must be [[more]] ghee than oil — which alone rules out every choice with oil in the majority.",
  traps: "(A) \\(2 : 3\\) is the correct ratio reversed, and it is the one you get by using the same-side distances instead of the opposite ones.\n" +
    "(C) \\(1 : 1\\) would give a cost of $75, not $80.\n" +
    "(D) \\(2 : 1\\) gives $83.33 and (E) \\(4 : 1\\) gives $90 — both too rich.",
  take: "Alligation ratios come from the [[opposite]] distances. Check the direction with a bound: the blend price sits nearer the ingredient you used more of."
},

"quant-profitloss-ex#15": {
  steps: "Step 1 — Peel the layers back in the order they were applied. Tax was added last, so remove it first.\n" +
    "Step 2 — $616 includes 10% tax on the selling price: \\(\\text{SP} = \\dfrac{616}{1.1} = \\$560\\).\n" +
    "Step 3 — That $560 represents a 12% profit on cost: \\(\\text{CP} = \\dfrac{560}{1.12} = \\$500\\).\n" +
    "Step 4 — The cost price is $500.",
  fast: "Two divisions, outermost layer first: \\(616/1.1 = 560\\), then \\(560/1.12 = 500\\).\n" +
    "\\(560/1.12\\) is \\(56000/112 = 500\\) — clearing decimals keeps it exact.\n" +
    "Checking forwards is quicker than either: \\(500 \\to 560\\) (+12%) \\(\\to 616\\) (+10%) ✓.",
  traps: "(D) $560 is the pre-tax selling price — a correct intermediate value, and the most likely wrong selection.\n" +
    "(B) $550 comes from dividing 616 by 1.12 first, i.e. peeling the layers in the wrong order.\n" +
    "(C) $480 and (E) $580 bracket the plausible answers.",
  take: "Undo the layers in reverse order of how they were applied: tax sits on the selling price, profit sits on the cost. Peel outside-in and each step is one division."
},

"quant-profitloss-ex#16": {
  steps: "Step 1 — Read the markup definition carefully: it is 25% of the [[selling]] price, not of the cost.\n" +
    "Step 2 — So \\(\\text{SP} = 60 + 0.25\\,\\text{SP}\\).\n" +
    "Step 3 — \\(0.75\\,\\text{SP} = 60\\), giving \\(\\text{SP} = \\$80\\).\n" +
    "Step 4 — The sale price is 20% off that: \\(0.8 \\times 80 = \\$64\\).\n" +
    "Step 5 — Gross profit \\(= 64 - 60 = \\$4\\).",
  fast: "A markup that is 25% of the selling price means cost is the other 75%, so \\(\\text{SP} = \\dfrac{60}{0.75} = 80\\).\n" +
    "Then \\(80 \\times 0.8 = 64\\), and the profit is $4.\n" +
    "The single decision in the whole question is whether the 25% sits on 60 or on the unknown — and the words \"of the selling price\" settle it.",
  traps: "(E) $15 is what you get by marking up 25% [[of cost]]: \\(60 \\times 1.25 = 75\\), then \\(75 \\times 0.8 = 60\\), a profit of $0 — which is in fact (A).\n" +
    "(A) $0 is that same misreading carried through, and it is seductive because it looks like a clean cancellation.\n" +
    "(D) $12 is 20% of 60; (B) $3 is a near-miss.",
  take: "\"A markup that is \\(p\\%\\) of the selling price\" makes cost \\((1-p)\\) of the selling price — divide, do not multiply. Percentages of the selling price and of the cost price give different answers, and the test knows it."
}

});
