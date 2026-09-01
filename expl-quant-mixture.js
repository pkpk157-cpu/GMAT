/* Rewritten explanations — mixtures and solutions.

   Two tools cover the whole topic. Alligation, for blending two things into a
   known average: the quantities are in the ratio of the OPPOSITE distances from
   the blend. And the replacement rule, for draw-off-and-refill: after n rounds
   of removing a fraction f, what remains of the original is (1-f)^n of the
   whole. The third habit that saves the most time is anchoring on whatever does
   not change — usually the solute, or the solid content. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-mixture-ex#1": {
  steps: "Step 1 — Densities behave like prices in an alligation: gold 19, copper 9, blend 15.\n" +
    "Step 2 — Find each ingredient's distance from the blend. Gold: \\(19 - 15 = 4\\) above. Copper: \\(15 - 9 = 6\\) below.\n" +
    "Step 3 — The quantities are in the ratio of the [[opposite]] distances, so gold : copper \\(= 6 : 4\\).\n" +
    "Step 4 — Reduce: \\(3 : 2\\).",
  fast: "Draw the alligation cross: the blend at 15 sits 6 above copper and 4 below gold, so the ratio is \\(6 : 4 = 3 : 2\\).\n" +
    "Sanity check before you even compute: 15 is closer to 19 than to 9, so there must be [[more]] gold than copper — which eliminates every choice where copper leads.",
  traps: "(A) \\(2 : 3\\) is the answer reversed, and it is what you get by using the same-side distances instead of the opposite ones. It is the only serious trap here.\n" +
    "(C) \\(1 : 3\\) puts even more copper in, pushing the blend down toward 11.\n" +
    "(D) \\(2 : 1\\) gives a density of \\(15\\tfrac23\\) and (E) \\(5 : 4\\) gives \\(14\\tfrac59\\) — both close, neither exact.",
  take: "Alligation: quantities are in the ratio of the opposite distances from the blend. Always check direction first — the blend sits nearer whichever ingredient you used more of."
},

"quant-mixture-ex#2": {
  steps: "Step 1 — Convert each solution into an amount of pure alcohol.\n" +
    "Step 2 — \\(6\\) L at 20%: \\(6 \\times 0.20 = 1.2\\) L of alcohol.\n" +
    "Step 3 — \\(4\\) L at 60%: \\(4 \\times 0.60 = 2.4\\) L of alcohol.\n" +
    "Step 4 — Total alcohol \\(= 3.6\\) L in \\(6 + 4 = 10\\) L of solution.\n" +
    "Step 5 — Strength \\(= \\dfrac{3.6}{10} = 36\\%\\).",
  fast: "This is a weighted average of 20% and 60% with weights 6 and 4, so the answer must lie between them and nearer 20% — that alone leaves only 36%.\n" +
    "The arithmetic confirms it: \\(1.2 + 2.4 = 3.6\\) out of 10.",
  traps: "(B) 40% is the plain average of 20 and 60, correct only if the volumes were equal. There is more of the weak solution, so the answer must fall below 40.\n" +
    "(A) 80% and (E) 88% are the two percentages added — impossible, since no blend can be stronger than its strongest ingredient.\n" +
    "(D) 48% overshoots the midpoint in the wrong direction.",
  take: "Blend strength is a weighted average: convert to amounts of solute, add, divide by the total volume. The result is always between the two strengths."
},

"quant-mixture-ex#3": {
  steps: "Step 1 — Find the cost of the blend per kg.\n" +
    "Step 2 — \\(80 \\times 15 = \\$1{,}200\\) and \\(20 \\times 20 = \\$400\\), totalling $1,600 for 100 kg.\n" +
    "Step 3 — Blend cost \\(= \\dfrac{1600}{100} = \\$16\\) per kg.\n" +
    "Step 4 — A 25% profit means selling at \\(1.25 \\times 16 = \\$20\\) per kg.",
  fast: "The blend is \\(\\tfrac45\\) cheap tea and \\(\\tfrac15\\) dear tea, so the cost is \\(0.8(15) + 0.2(20) = 12 + 4 = \\$16\\).\n" +
    "Then add a quarter: \\(16 + 4 = \\$20\\).\n" +
    "25% is \\(\\tfrac14\\), so \"add a quarter\" is always faster than multiplying by 1.25.",
  traps: "(D) $19.20 is \\(16 \\times 1.2\\) — a 20% markup instead of 25%.\n" +
    "(A) $23.75 is 25% on top of the [[dearer]] tea's price (\\(19 \\times 1.25\\)) rather than on the blend cost.\n" +
    "(B) $22 and (E) $25.50 overshoot. Note that $16 itself is not offered — the question asks for the selling price, not the cost.",
  take: "Blend cost first, markup second. Keep the two steps separate: the profit percentage applies to the blended cost, never to either ingredient's price."
},

"quant-mixture-ex#4": {
  steps: "Step 1 — Blend cost per kg, weighting by the \\(5 : 4\\) ratio:\n" +
    "\\(\\dfrac{5(20) + 4(25)}{9} = \\dfrac{100 + 100}{9} = \\dfrac{200}{9} = 22\\tfrac29\\).\n" +
    "Step 2 — Selling price is $23, which is above cost, so there is a profit.\n" +
    "Step 3 — Profit per kg \\(= 23 - \\dfrac{200}{9} = \\dfrac{207 - 200}{9} = \\dfrac79\\).\n" +
    "Step 4 — Profit percent on cost \\(= \\dfrac{7/9}{200/9} = \\dfrac{7}{200} = 3.5\\%\\).",
  fast: "The nines cancel: profit percent \\(= \\dfrac{23 \\times 9 - 200}{200} = \\dfrac{207 - 200}{200} = \\dfrac{7}{200} = 3.5\\%\\).\n" +
    "Multiplying the selling price by the parts count before comparing avoids the recurring decimal entirely.",
  traps: "(B) 3.5% loss is the right magnitude with the wrong sign — $23 exceeds the blend cost of $22.22, so it is a profit. Checking the direction first disposes of it.\n" +
    "(D) \"No profit, no loss\" would require a blend cost of exactly $23, i.e. a different ratio.\n" +
    "(A) 5% and (E) 2% bracket the answer for anyone estimating rather than computing.",
  take: "Compute the blend cost as a fraction and keep it as one. Comparing \\(23\\) with \\(\\tfrac{200}{9}\\) by cross-multiplying is exact; converting to \\(22.22\\) invites a rounding error the choices are built to catch."
},

"quant-mixture-ex#5": {
  steps: "Step 1 — Anchor on what does not change. Adding water leaves the [[acid]] untouched.\n" +
    "Step 2 — Acid present: \\(10 \\times 0.10 = 1\\) litre.\n" +
    "Step 3 — After adding \\(w\\) litres of water the total is \\(10 + w\\), and the acid must be 4% of it:\n" +
    "\\(\\dfrac{1}{10 + w} = 0.04\\).\n" +
    "Step 4 — \\(10 + w = 25\\), so \\(w = 15\\) litres.",
  fast: "One litre of acid has to end up as 4% of the whole, so the whole must be \\(\\dfrac{1}{0.04} = 25\\) litres. It is currently 10, so add 15.\n" +
    "Another route: the strength falls from 10% to 4%, a factor of \\(\\tfrac{10}{4} = 2.5\\), so the volume must grow by 2.5× — from 10 to 25.",
  traps: "(D) 25 L is the [[final volume]], not the amount added — the single most likely wrong selection here.\n" +
    "(B) 20 L would give \\(\\tfrac{1}{30} = 3.3\\%\\); (C) 18 L gives 3.6%.\n" +
    "(E) 28 L overshoots further.",
  take: "Dilution holds the solute constant. Find the final volume the solute forces, then subtract what you started with — the question almost always asks for the amount [[added]]."
},

"quant-mixture-ex#6": {
  steps: "Step 1 — The alcohol is unchanged by adding water: \\(9 \\times 0.50 = 4.5\\) ml.\n" +
    "Step 2 — That 4.5 ml must become 30% of the new total: \\(\\dfrac{4.5}{9 + w} = 0.30\\).\n" +
    "Step 3 — \\(9 + w = \\dfrac{4.5}{0.3} = 15\\).\n" +
    "Step 4 — \\(w = 6\\) ml.",
  fast: "Strength falls from 50% to 30%, a factor of \\(\\dfrac{50}{30} = \\dfrac53\\), so the volume grows by \\(\\dfrac53\\): \\(9 \\to 15\\). Add 6 ml.\n" +
    "The strength-and-volume inverse relationship handles every dilution question in one step.",
  traps: "(A) 3 ml would give \\(4.5/12 = 37.5\\%\\) — not dilute enough.\n" +
    "(C) 5 ml gives \\(32\\%\\) and (E) 7 ml gives \\(28\\%\\), both close, which is why the choices step by one.\n" +
    "(B) 4 ml is the amount of alcohol rounded, a number that appears in the working.",
  take: "In a dilution, strength × volume is constant (both equal the solute). Halve the strength and you double the volume."
},

"quant-mixture-ex#7": {
  steps: "Step 1 — Split the 55 litres by \\(7 : 4\\): 11 parts of 5 litres each.\n" +
    "Step 2 — Milk \\(= 35\\) L; water \\(= 20\\) L.\n" +
    "Step 3 — Adding water leaves the [[milk]] fixed at 35 L.\n" +
    "Step 4 — In the new \\(7 : 6\\) ratio, milk is 7 parts \\(= 35\\), so one part is 5 L.\n" +
    "Step 5 — Water must become \\(6 \\times 5 = 30\\) L, and it is currently 20 L.\n" +
    "Step 6 — Add \\(30 - 20 = 10\\) litres.",
  fast: "Milk is 7 parts before and after, and it never changes — so the part size never changes either: 5 litres.\n" +
    "Water goes from 4 parts to 6 parts, a rise of 2 parts \\(= 10\\) litres.\n" +
    "When the fixed ingredient keeps the same number of parts in both ratios, the answer is just the change in the other ingredient's parts.",
  traps: "(E) 30 L is the [[final]] water volume, not the amount added.\n" +
    "(A) 5 L is one part; (C) 15 L and (D) 25 L come from mis-sizing the part.\n" +
    "A check that costs nothing: after adding, milk : water should read \\(35 : 30 = 7 : 6\\) ✓.",
  take: "Anchor on the ingredient that is not being added. If its parts count is the same in both ratios, the part size is unchanged and the answer follows immediately."
},

"quant-mixture-ex#8": {
  steps: "Step 1 — \"Equal quantities\" means equal [[total]] amounts of each alloy, so put both on a common total.\n" +
    "Step 2 — Alloy A is \\(7 : 2\\), i.e. 9 parts; alloy B is \\(7 : 11\\), i.e. 18 parts. Use 18 units of each.\n" +
    "Step 3 — Alloy A, 18 units: gold \\(= 14\\), copper \\(= 4\\).\n" +
    "Step 4 — Alloy B, 18 units: gold \\(= 7\\), copper \\(= 11\\).\n" +
    "Step 5 — Combined: gold \\(= 21\\), copper \\(= 15\\).\n" +
    "Step 6 — \\(21 : 15 = 7 : 5\\).",
  fast: "Scale both alloys to the same total, 18 — the LCM of 9 and 18. Then just add the golds and the coppers: \\(14 + 7 = 21\\) and \\(4 + 11 = 15\\), giving \\(7 : 5\\).\n" +
    "The whole trick is scaling to a common [[total]] rather than a common first term; \"equal quantities\" is a statement about totals.",
  traps: "(E) \\(14 : 11\\) adds the two ratios term by term without scaling — the standard error, and it silently assumes 9 units of A against 18 of B.\n" +
    "(A) \\(5 : 7\\) and (B) \\(5 : 9\\) are the answer reversed or mis-reduced.\n" +
    "(D) \\(9 : 5\\) overstates the gold. A check: alloy A is \\(78\\%\\) gold and B is \\(39\\%\\), so the blend should be about \\(58\\%\\) — and \\(7/12 = 58\\%\\) ✓.",
  take: "Ratios can only be added once they describe the same total. Scale each to the LCM of their parts-sums, then add the components."
},

"quant-mixture-ex#9": {
  steps: "Step 1 — Let the can hold \\(7k\\) litres of A and \\(5k\\) of B, so \\(12k\\) in total.\n" +
    "Step 2 — Drawing off 9 litres removes A and B in their current proportion: \\(\\dfrac{7}{12}(9) = 5.25\\) of A and \\(\\dfrac{5}{12}(9) = 3.75\\) of B.\n" +
    "Step 3 — Refilling with 9 litres of B: A becomes \\(7k - 5.25\\); B becomes \\(5k - 3.75 + 9 = 5k + 5.25\\).\n" +
    "Step 4 — The new ratio is \\(7 : 9\\):\n" +
    "\\(9(7k - 5.25) = 7(5k + 5.25)\\).\n" +
    "Step 5 — \\(63k - 47.25 = 35k + 36.75\\), so \\(28k = 84\\) and \\(k = 3\\).\n" +
    "Step 6 — A originally \\(= 7k = 21\\) litres.",
  fast: "Use the replacement rule on A alone. The total never changes, and only A is removed and never replaced, so A survives in the proportion \\(\\left(1 - \\dfrac{9}{12k}\\right)\\).\n" +
    "A's share falls from \\(\\dfrac{7}{12}\\) to \\(\\dfrac{7}{16}\\), a factor of \\(\\dfrac{7/16}{7/12} = \\dfrac{12}{16} = \\dfrac34\\).\n" +
    "So \\(1 - \\dfrac{9}{12k} = \\dfrac34\\), giving \\(\\dfrac{9}{12k} = \\dfrac14\\) and \\(12k = 36\\). A \\(= \\dfrac{7}{12}(36) = 21\\).",
  traps: "(B) 20 and (D) 25 are round decoys; only 21 makes both ratios come out in whole litres.\n" +
    "(A) 10 is close to the amount of B originally (15) and to the 9 drawn off.\n" +
    "(E) 29 exceeds what a 36-litre can split \\(7 : 5\\) could hold as A. Note the can's total is 36 litres, deliberately not offered.",
  take: "In draw-off-and-refill, the replaced liquid's [[share]] shrinks by the factor \\(\\left(1 - \\dfrac{\\text{drawn}}{\\text{total}}\\right)\\) each round. Comparing the before and after shares gives that factor directly."
},

"quant-mixture-ex#10": {
  steps: "Step 1 — Let the fraction replaced be \\(f\\). What remains of the original is \\(1 - f\\) at 40% alcohol, and the added portion is \\(f\\) at 19%.\n" +
    "Step 2 — The blend must be 26%: \\(40(1 - f) + 19f = 26\\).\n" +
    "Step 3 — \\(40 - 40f + 19f = 26\\), so \\(40 - 21f = 26\\).\n" +
    "Step 4 — \\(21f = 14\\), giving \\(f = \\dfrac{14}{21} = \\dfrac23\\).",
  fast: "Alligation on the strengths: 40 and 19 blending to 26. Distances are \\(40 - 26 = 14\\) and \\(26 - 19 = 7\\).\n" +
    "Quantities are in the ratio of the opposite distances: original : replacement \\(= 7 : 14 = 1 : 2\\).\n" +
    "So two of every three parts were replaced: \\(\\dfrac23\\).",
  traps: "(A) \\(\\tfrac13\\) is the fraction [[kept]], not the fraction replaced — the ratio read off the wrong way.\n" +
    "(C) \\(\\tfrac25\\) and (D) \\(\\tfrac35\\) come from using the same-side distances in the alligation.\n" +
    "(E) \\(\\tfrac43\\) exceeds 1 and can be discarded on sight — you cannot replace more than the whole jar.",
  take: "Replacement questions are alligation questions: the old and new liquids blend to the final strength. Then check whether the answer wanted is the part replaced or the part kept."
},

"quant-mixture-ex#11": {
  steps: "Step 1 — Work backwards from the sale to the blend's cost.\n" +
    "Step 2 — Selling at $60 for a 25% profit means \\(60 = 1.25 \\times \\text{cost}\\), so the blend costs $48 per kg.\n" +
    "Step 3 — Alligation between $40 and $55 with a mean of $48. Distances: \\(48 - 40 = 8\\) and \\(55 - 48 = 7\\).\n" +
    "Step 4 — Quantities are in the ratio of the opposite distances: cheap : dear \\(= 7 : 8\\).\n" +
    "Step 5 — The dear powder is 16 kg, which is 8 parts, so one part is 2 kg.\n" +
    "Step 6 — The cheap powder is 7 parts \\(= 14\\) kg.",
  fast: "Blend cost \\(= 60/1.25 = 48\\). The cross gives \\(7 : 8\\), and the known 16 kg is the 8 — so a part is 2 kg and the answer is \\(7 \\times 2 = 14\\) kg.\n" +
    "Sanity check on direction: 48 is nearer 55 than 40, so there should be [[more]] dear powder than cheap. 16 > 14 ✓.",
  traps: "(C) 12 kg and (A) 11 kg come from getting the alligation ratio backwards (\\(8 : 7\\)) or from a slip in the blend cost.\n" +
    "(D) 20 kg and (E) 22 kg would pull the blend below $48, giving less than 25% profit at $60.\n" +
    "The $48 itself is the step most often skipped — the profit has to be removed before any alligation.",
  take: "Undo the profit first to get the blend cost, then run the alligation. Use the direction check — the blend sits nearer the ingredient you used more of — to catch a reversed ratio."
},

"quant-mixture-ex#12": {
  steps: "Step 1 — Each round removes \\(\\dfrac{10}{50} = \\dfrac15\\) of whatever is in the cask, so \\(\\dfrac45\\) of the milk survives each time.\n" +
    "Step 2 — Crucially, the second draw removes milk [[and]] water in proportion, which is why the survival is multiplicative rather than a flat 10 litres.\n" +
    "Step 3 — After two rounds: \\(50 \\times \\left(\\dfrac45\\right)^2\\).\n" +
    "Step 4 — \\(= 50 \\times \\dfrac{16}{25} = 32\\) litres.",
  fast: "Replacement rule: milk left \\(= \\text{total} \\times \\left(1 - \\dfrac{\\text{drawn}}{\\text{total}}\\right)^n = 50(0.8)^2 = 32\\).\n" +
    "Or step through it: \\(50 \\to 40 \\to 32\\). Two easy multiplications by \\(\\tfrac45\\).",
  traps: "(D) 30 litres is \\(50 - 10 - 10\\), treating the second draw as removing 10 litres of pure milk. It cannot — after the first refill the cask is already 20% water.\n" +
    "(A) 20 litres compounds too far; (C) 25 halves the cask.\n" +
    "(E) 37 litres removes too little. Note the answer must sit strictly between 30 and 40, which alone identifies 32.",
  take: "Draw off and replace \\(n\\) times: the original liquid left is \\(V\\left(1 - \\dfrac{d}{V}\\right)^n\\). Never subtract the drawn amount twice — after the first refill you are removing a mixture."
},

"quant-mixture-ex#13": {
  steps: "Step 1 — Apply the replacement rule with an unknown draw \\(x\\), twice:\n" +
    "\\(54\\left(1 - \\dfrac{x}{54}\\right)^2 = 24\\).\n" +
    "Step 2 — Divide: \\(\\left(1 - \\dfrac{x}{54}\\right)^2 = \\dfrac{24}{54} = \\dfrac49\\).\n" +
    "Step 3 — Take the square root: \\(1 - \\dfrac{x}{54} = \\dfrac23\\).\n" +
    "Step 4 — \\(\\dfrac{x}{54} = \\dfrac13\\), so \\(x = 18\\) litres.",
  fast: "The acid falls from 54 to 24, a factor of \\(\\dfrac{24}{54} = \\dfrac49\\), over two rounds. So each round multiplies by \\(\\sqrt{\\dfrac49} = \\dfrac23\\).\n" +
    "Keeping two-thirds means drawing off one-third: \\(\\dfrac{54}{3} = 18\\) litres.\n" +
    "That \\(\\tfrac{24}{54}\\) reduces to a perfect square is the signal the numbers were chosen for this route.",
  traps: "(A) 12 L and (B) 16 L leave \\(54 \\times \\left(\\tfrac{42}{54}\\right)^2 \\approx 32.7\\) and \\(54 \\times \\left(\\tfrac{38}{54}\\right)^2 \\approx 26.7\\) litres — both too much acid.\n" +
    "(D) 24 L is the [[acid remaining]], lifted from the stem.\n" +
    "(E) 28 L draws off more than a third and leaves under 20 litres.",
  take: "Same replacement rule, solved backwards: take the \\(n\\)-th root of the surviving fraction to get the per-round factor. The fraction will always be a perfect power when the question is solvable this way."
},

"quant-mixture-ex#14": {
  steps: "Step 1 — Track the A-fraction through each stage. Emptying to half preserves the proportions and halves both amounts; refilling adds half a tank of one liquid.\n" +
    "Step 2 — Fill 1 (A): the tank is \\(1.0\\) A.\n" +
    "Step 3 — Half empties → \\(0.5\\) A. Refill with B (fill 2) → \\(0.5\\) A, \\(0.5\\) B.\n" +
    "Step 4 — Half empties → \\(0.25\\) A, \\(0.25\\) B. Refill with A (fill 3) → \\(0.75\\) A, \\(0.25\\) B.\n" +
    "Step 5 — Half empties → \\(0.375\\) A, \\(0.125\\) B. Refill with B (fill 4) → \\(0.375\\) A, \\(0.625\\) B.\n" +
    "Step 6 — A is \\(37.5\\%\\) of the tank.",
  fast: "Only A needs tracking, and each half-emptying halves it while each A-refill adds \\(0.5\\).\n" +
    "\\(1 \\to 0.5 \\to 0.25 \\to 0.75 \\to 0.375\\). The last refill is B, so A stays at \\(0.375 = 37.5\\%\\).\n" +
    "Following one liquid rather than both halves the bookkeeping and removes any chance of the two drifting out of step.",
  traps: "(D) 50% is the instinct that alternating fills must even out. They do not: the tank ends on a B refill, so B leads.\n" +
    "(C) 40% and (A) 33.5% are near-misses for anyone dropping a stage.\n" +
    "(E) 54.0% would require A to lead, which cannot happen when the final fill is B.",
  take: "Track a single component through the sequence. Emptying scales it; refilling with the other liquid leaves it alone. The last refill always tips the balance."
},

"quant-mixture-ex#15": {
  steps: "Step 1 — Anchor on the quantity that does not change: the [[solid]] content. Only water evaporates.\n" +
    "Step 2 — Raisins are 20% water, so 80% solid: \\(10 \\times 0.80 = 8\\) pounds of solid.\n" +
    "Step 3 — Grapes are 92% water, so 8% solid.\n" +
    "Step 4 — The same 8 pounds of solid was 8% of the original weight: \\(0.08 W = 8\\).\n" +
    "Step 5 — \\(W = 100\\) pounds.",
  fast: "Work with the solids, never the water. Solids: 8 lb, which is 8% of the grapes — so the grapes weighed \\(8 \\div 0.08 = 100\\) lb.\n" +
    "The percentages are chosen so the arithmetic is trivial once you look at the right component; working with the water instead gives \\(2\\) lb and \\(92\\%\\), which leads nowhere directly.",
  traps: "(C) 46 pounds comes from applying the percentages to the water content.\n" +
    "(D) 92 pounds and (B) 25 pounds lift figures from the stem.\n" +
    "(E) 146 pounds overshoots. A useful bound: the solid share rises from 8% to 80%, a factor of 10, so the weight must fall by a factor of 10 — from 100 to 10 ✓.",
  take: "In any evaporation or drying question, the non-evaporating component is constant. Compute it once and use it as the bridge between the two states."
},

"quant-mixture-ex#16": {
  steps: "Step 1 — Let the portion replaced be \\(p\\). What survives is \\(1 - p\\) of the 50% solution; the addition is \\(p\\) of the 25% solution.\n" +
    "Step 2 — The result is 30%: \\(50(1 - p) + 25p = 30\\).\n" +
    "Step 3 — \\(50 - 50p + 25p = 30\\), so \\(50 - 25p = 30\\).\n" +
    "Step 4 — \\(25p = 20\\), giving \\(p = 0.8 = 80\\%\\).",
  fast: "Alligation: 50 and 25 blending to 30. Distances are \\(50 - 30 = 20\\) and \\(30 - 25 = 5\\).\n" +
    "Opposite distances give original : replacement \\(= 5 : 20 = 1 : 4\\), so 4 parts of every 5 were replaced — \\(80\\%\\).\n" +
    "Direction check: 30 is much nearer 25 than 50, so most of the jar must be the weaker solution.",
  traps: "(D) 20% is the fraction [[kept]] — the ratio read the wrong way round, and the most likely error.\n" +
    "(B) 75% and (C) 66% come from dividing by the wrong number: \\(\\tfrac{5}{20} = 25\\%\\) kept (the 5 should sit over the full 25-point spread) leaves 75% replaced, and \\(\\tfrac{20}{30} \\approx 66\\%\\) puts the 20-point drop over the new strength instead of the spread.\n" +
    "(E) 3% is far too small to move the strength from 50% to 30%.",
  take: "Same structure as question 10 in this set. Set the alligation up, then read carefully whether the question asks for the portion replaced or the portion remaining — both are always on the list."
}

});
