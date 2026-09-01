/* Rewritten explanations — percentages, ratios and overlapping sets.

   Keyed "setId#n" and merged over the transcribed questions at load, so the
   question files stay exactly as verified. Four parts each:

     steps — the full method, including why each move is legal
     fast  — the route that fits inside GMAT time
     traps — what each wrong choice was built to catch
     take  — the transferable rule

   Nothing here changes an answer. Every fast route was checked against the
   stored key before it was written down. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-percentage-ex#1": {
  steps: "Step 1 — Write the relationship. \"\\(p\\) is six times as large as \\(q\\)\" means \\(p = 6q\\).\n" +
    "Step 2 — Decide the base. The question asks the percent that \\(q\\) is [[less than \\(p\\)]], so the comparison is against \\(p\\): the denominator is \\(p\\), not \\(q\\).\n" +
    "Step 3 — Find the shortfall. \\(p - q = 6q - q = 5q\\).\n" +
    "Step 4 — Divide by the base. \\(\\dfrac{5q}{6q} = \\dfrac56\\).\n" +
    "Step 5 — Convert. \\(\\dfrac56 = 0.8333\\ldots = 83\\tfrac13\\%\\).",
  fast: "Set \\(q = 1\\) and \\(p = 6\\). The gap is 5 out of 6, and \\(5/6\\) is one of the fraction–percent pairs worth knowing cold: \\(1/6 = 16\\tfrac23\\%\\), so \\(5/6 = 83\\tfrac13\\%\\).\n" +
    "Ten seconds, no algebra.",
  traps: "(A) \\(16\\tfrac23\\%\\) is \\(1/6\\) — the fraction \\(q\\) [[is]] of \\(p\\), not the percent it falls short by.\n" +
    "(E) 500% is the same comparison run backwards: \\(p\\) is 500% greater than \\(q\\). Correct arithmetic, wrong base — this is the choice the question is really hunting for.\n" +
    "(B) and (D) are round numbers with no derivation behind them; they exist for anyone guessing by feel.",
  take: "\"Percent less than \\(X\\)\" always divides by \\(X\\). Swapping the base does not give you a slightly different answer — here it gives 500% instead of \\(83\\tfrac13\\%\\)."
},

"quant-percentage-ex#2": {
  steps: "Step 1 — Name the third number \\(T\\). The first number is \\(0.2T\\); the second is \\(0.5T\\).\n" +
    "Step 2 — Read the question's grammar. \"The first is [[what percent of]] the second\" puts the second number after \"of\", so the second is the base.\n" +
    "Step 3 — Divide. \\(\\dfrac{0.2T}{0.5T} = \\dfrac{0.2}{0.5} = 0.4\\). The \\(T\\) cancels, which is why the third number never needed a value.\n" +
    "Step 4 — Convert. \\(0.4 = 40\\%\\).",
  fast: "Let the third number be 100. The two numbers are 20 and 50. \\(20/50 = 40\\%\\).\n" +
    "Picking 100 for \"a third number\" turns every one of these into a two-second division.",
  traps: "(B) 20% and (E) 50% are the two numbers' own percentages — handed to you in the stem, and both are answers to a question that was not asked.\n" +
    "(C) 30% is the difference \\(50 - 20\\), which would be the answer if the question compared them to the third number rather than to each other.\n" +
    "(A) 10% is \\(0.2 \\times 0.5\\) — multiplying when the comparison calls for dividing.",
  take: "In \"A is what percent of B\", whatever follows [[of]] is the denominator. Most errors on this question type are grammar errors, not arithmetic ones."
},

"quant-percentage-ex#3": {
  steps: "Step 1 — Notice this is a chain, not a sum. The 15% is taken [[of those]] who purchase — a subset of a subset.\n" +
    "Step 2 — Convert each stage to a multiplier: 40% of customers purchase → \\(0.40\\); of those, 15% buy hats → \\(0.15\\).\n" +
    "Step 3 — Multiply along the chain. \\(0.40 \\times 0.15 = 0.06\\).\n" +
    "Step 4 — The base for the final answer is \"the store's customers\", which is where the chain started, so \\(0.06 = 6\\%\\).",
  fast: "Take 100 customers. 40 of them buy something. 15% of 40 is 6.\n" +
    "Ask \"15% of what?\" — the answer is always the group named just before, and with 100 at the top the arithmetic stays in whole numbers.",
  traps: "(C) 15% is the second rate copied out unchanged — it ignores that only 40% of customers ever reach that stage.\n" +
    "(A) 4% is 10% of 40, the slip you make reaching for an easier percentage.\n" +
    "(D) 24% is \\(0.40 \\times 0.60\\): the buyers who did [[not]] pick a hat.\n" +
    "(E) 33% is far too large — no chain that starts by discarding 60% of customers can end above 40%.",
  take: "Chained percentages multiply. Before computing, bound the answer: the result can never exceed the smallest rate in the chain."
},

"quant-percentage-ex#4": {
  steps: "Step 1 — Revenue = price × quantity, so a change in each becomes a multiplier on revenue.\n" +
    "Step 2 — Price up 15% → \\(\\times 1.15\\). Quantity down 15% → \\(\\times 0.85\\).\n" +
    "Step 3 — Combine. \\(1.15 \\times 0.85 = 0.9775\\).\n" +
    "Step 4 — Interpret. Revenue is 97.75% of what it was, i.e. a [[2.25% decrease]].\n" +
    "Note why it falls rather than holding steady: the 15% rise is taken on the old price, but the 15% fall is taken on the [[new, larger]] figure, so the fall removes more than the rise added.",
  fast: "There is a standing result here: up \\(a\\%\\) then down \\(a\\%\\) always lands at \\(1 - (a/100)^2\\).\n" +
    "\\((0.15)^2 = 0.0225\\), so the net effect is a 2.25% decrease — no multiplication needed. Same rule gives 1% down for a 10% pair, 4% down for a 20% pair.",
  traps: "(B) \"No effect\" is the whole point of the question — the intuition that the percentages cancel. They never do.\n" +
    "(C) 2.25% increase has the right magnitude and the wrong sign; the result of this pairing is always a loss, whichever change comes first.\n" +
    "(A) and (E) 15% treat the two changes as though only one of them happened.",
  take: "Up \\(x\\%\\) then down \\(x\\%\\) is never a wash — it is always exactly \\(x^2/100\\) percent [[down]], and the order does not matter."
},

"quant-percentage-ex#5": {
  steps: "Step 1 — Translate. \"A's salary is 25% higher than B's\" sets B as the base: \\(A = 1.25B\\).\n" +
    "Step 2 — The question flips the base. \"By what percent is B lower than A\" now measures against A.\n" +
    "Step 3 — Find the gap. \\(A - B = 1.25B - B = 0.25B\\).\n" +
    "Step 4 — Divide by the new base. \\(\\dfrac{0.25B}{1.25B} = \\dfrac{0.25}{1.25} = \\dfrac15 = 20\\%\\).",
  fast: "Let \\(B = 4\\), so \\(A = 5\\). B is 1 below A, and \\(1/5 = 20\\%\\).\n" +
    "Choosing \\(B = 4\\) rather than 100 is deliberate: 25% is \\(1/4\\), so a multiple of 4 keeps everything whole.",
  traps: "(C) 25% is the number from the stem reused with the base swapped — the error the question is built around.\n" +
    "(E) 80% is B expressed [[as]] a percent of A, not the percent by which it is lower.\n" +
    "(D) \\(33\\tfrac13\\%\\) is the answer to the mirror-image question where A is 50% higher.\n" +
    "(A) \\(16\\tfrac13\\%\\) is a near-miss on \\(16\\tfrac23\\%\\), itself the answer for a 20% gap.",
  take: "If A is \\(p\\%\\) above B, then B is \\(\\dfrac{p}{100+p}\\) below A. Here \\(25/125 = 20\\%\\). The two percentages are never equal."
},

"quant-percentage-ex#6": {
  steps: "Step 1 — Add the stated groups. Men over 18 and women over 18 account for \\(30\\% + 40\\% = 70\\%\\).\n" +
    "Step 2 — Everyone else is a child, so children are \\(100\\% - 70\\% = 30\\%\\) of the residents.\n" +
    "Step 3 — That 30% is the group you were given a count for: \\(0.30 \\times \\text{total} = 24\\).\n" +
    "Step 4 — Solve. \\(\\text{total} = \\dfrac{24}{0.30} = 80\\).",
  fast: "30% is 24, so 10% is 8, so 100% is 80.\n" +
    "Stepping through 10% is almost always faster than dividing by a decimal, and it keeps the arithmetic mental.",
  traps: "(A) 32 is \\(24 \\div 0.75\\) — what you get by treating the children as 75% instead of 30%.\n" +
    "(C) 94, (D) 112 and (E) 130 are what appear if you attach the 24 to the wrong slice; none of them makes 30% and 40% come out as whole numbers of people, which is a quick disqualifier.",
  take: "When a problem gives you percentages for some groups and a [[count]] for the rest, find the leftover percentage first — the count always belongs to it."
},

"quant-percentage-ex#7": {
  steps: "Step 1 — Identify which figure is which. \"Rose 30% [[to]] 9,100\" means 9,100 is the [[new]] value; the unknown is the old one.\n" +
    "Step 2 — Write the relationship. \\(\\text{old} \\times 1.30 = 9{,}100\\).\n" +
    "Step 3 — Solve by dividing, not multiplying. \\(\\text{old} = \\dfrac{9{,}100}{1.30} = 7{,}000\\).\n" +
    "Step 4 — Check. \\(7{,}000 + 30\\% \\text{ of } 7{,}000 = 7{,}000 + 2{,}100 = 9{,}100\\). ✓",
  fast: "\\(1.3 = 13/10\\), so dividing by 1.3 is \\(\\times 10/13\\). \\(9{,}100/13 = 700\\), then \\(\\times 10 = 7{,}000\\).\n" +
    "Spotting that 9,100 is a clean multiple of 13 is the whole trick — test writers choose numbers that divide.",
  traps: "(A) 10,000 and (E) 11,000 are both [[larger]] than 9,100. A quantity that rose to 9,100 must have started below it, so these two can be eliminated before any arithmetic.\n" +
    "(B) 9,000 is the round number just under 9,100 — a guess, not a computation; it fails the Step 4 check at once (\\(9{,}000 \\times 1.3 = 11{,}700\\)).\n" +
    "(C) 8,000 is the answer to \"fell 30% from 8,000\"-style eyeballing; it does not survive the check in Step 4.",
  take: "\"Rose \\(p\\%\\) to \\(X\\)\" means divide by \\(1 + p/100\\); \"rose \\(p\\%\\) from \\(X\\)\" means multiply. Reading which one you have is worth more than the arithmetic — and a direction check kills half the choices for free."
},

"quant-percentage-ex#8": {
  steps: "Step 1 — Two candidates, so the shares must total 100%: the loser has 40%, the winner has 60%.\n" +
    "Step 2 — \"Defeated by 160 votes\" is the [[difference]] between them, not either candidate's total.\n" +
    "Step 3 — That difference is \\(60\\% - 40\\% = 20\\%\\) of all votes polled.\n" +
    "Step 4 — Solve. \\(0.20 \\times \\text{total} = 160 \\Rightarrow \\text{total} = 800\\).\n" +
    "Step 5 — Check. \\(40\\%\\) of 800 = 320, \\(60\\%\\) = 480, and \\(480 - 320 = 160\\). ✓",
  fast: "The margin between the two shares is 20 percentage points, and 20% of the total is 160 → total \\(= 800\\).\n" +
    "One subtraction and one division. The moment you see a two-candidate election, write down the margin as a percentage before anything else.",
  traps: "The error this question exists to catch is attaching 160 to a candidate rather than to the gap: setting \\(0.40 \\times \\text{total} = 160\\) gives 400, and setting \\(0.60 \\times \\text{total} = 160\\) gives about 267 — neither is offered, which is itself a signal you have misread the stem.\n" +
    "(A) 900, (C) 700, (D) 600 and (E) 1,000 are round decoys; only 800 makes both shares whole numbers that differ by exactly 160.",
  take: "\"Won by\" and \"defeated by\" describe a [[difference]]. In a two-way race, that difference is \\((\\text{winner}\\% - \\text{loser}\\%)\\) of the total."
},

"quant-percentage-ex#9": {
  steps: "Step 1 — Expenditure = price × quantity. To hold expenditure fixed while price rises, quantity must fall by exactly the reciprocal factor.\n" +
    "Step 2 — The price factor is \\(\\dfrac{27}{24} = \\dfrac98\\).\n" +
    "Step 3 — So consumption must be multiplied by \\(\\dfrac89\\).\n" +
    "Step 4 — The cut is \\(1 - \\dfrac89 = \\dfrac19\\).\n" +
    "Step 5 — Convert. \\(\\dfrac19 = 11\\tfrac19\\%\\).",
  fast: "The reduction is always \\(\\dfrac{\\text{rise}}{\\text{new price}}\\). The price rose 3, and the new price is 27, so the cut is \\(3/27 = 1/9 = 11\\tfrac19\\%\\).\n" +
    "Note that the [[new]] price is the denominator — that single choice is what separates the right answer from the trap.",
  traps: "(E) \\(12\\tfrac12\\%\\) is \\(3/24\\) — the same two numbers with the [[old]] price as the base. That is the percentage the price rose by, not the percentage consumption must fall by, and it is the intended trap.\n" +
    "(B) \\(11\\tfrac{1}{11}\\%\\), (C) \\(11\\tfrac{1}{10}\\%\\) and (D) \\(9\\tfrac{1}{10}\\%\\) sit close to the right answer to punish anyone who computes \\(1/9\\) as a decimal and rounds.",
  take: "Price up \\(p\\%\\) → cut consumption by \\(\\dfrac{p}{100+p}\\). The rise is measured on the old price; the cut is measured on the new one, so the two percentages never match."
},

"quant-percentage-ex#10": {
  steps: "Step 1 — The two losses happen in sequence, so they multiply rather than add. The second is taken \"of the remainder\", which names its base explicitly.\n" +
    "Step 2 — After cholera, \\(90\\%\\) remain: \\(\\times 0.90\\).\n" +
    "Step 3 — Then 25% of [[those]] leave, so 75% of them stay: \\(\\times 0.75\\).\n" +
    "Step 4 — Combined survival factor: \\(0.90 \\times 0.75 = 0.675\\).\n" +
    "Step 5 — Solve. \\(\\text{original} = \\dfrac{4{,}050}{0.675} = 6{,}000\\).",
  fast: "Undo the changes one at a time, newest first, using fractions.\n" +
    "4,050 is \\(3/4\\) of the post-cholera population → \\(4{,}050 \\times \\dfrac43 = 5{,}400\\).\n" +
    "5,400 is \\(9/10\\) of the original → \\(5{,}400 \\times \\dfrac{10}{9} = 6{,}000\\).\n" +
    "Two clean fraction multiplications beat one division by 0.675.",
  traps: "Adding the losses — \\(10\\% + 25\\% = 35\\%\\) gone, so \\(4{,}050/0.65\\) — gives about 6,231, which is not on the list. That absence is the tell: the changes compound.\n" +
    "(A) 5,000 and (C) 7,000 are the neighbouring round numbers you land on after rounding a wrong division; neither survives a forward check.\n" +
    "(D) 8,000 and (E) 9,000 fail the same forward check even faster: \\(8{,}000 \\times 0.675 = 5{,}400\\) and \\(9{,}000 \\times 0.675 = 6{,}075\\), both far above the 4,050 who remain. They catch anyone who divides by the loss factor 0.325 instead of the survival factor 0.675.",
  take: "Successive percentage changes multiply. To reverse them, work backwards from the final figure, undoing the [[last]] change first."
},

"quant-percentage-ex#11": {
  steps: "Step 1 — \"Its value is 80% of its value at the start of that year\" is a multiplier applied once per year, always to the [[current]] value.\n" +
    "Step 2 — After three years the value is \\(25{,}000 \\times (0.80)^3\\).\n" +
    "Step 3 — \\((0.8)^3 = 0.512\\).\n" +
    "Step 4 — \\(25{,}000 \\times 0.512 = 12{,}800\\).",
  fast: "Do not compute \\(0.8^3\\). Just take 80% three times, which is easy on round numbers:\n" +
    "\\(25{,}000 \\to 20{,}000 \\to 16{,}000 \\to 12{,}800\\).\n" +
    "Three mental steps, and each one is a sanity check on the last.",
  traps: "(A) 10,000 is \\(25{,}000\\) minus 60% — the additive error of treating three 20% drops as one 60% drop. It is always too small, because each later drop is taken on a smaller base.\n" +
    "(D) 12,000 and (B) 12,500 bracket the right answer to catch rounding; (E) 13,300 catches anyone who stops after a mis-multiplied second year.",
  take: "Depreciation and growth compound. Chaining \\(\\times 0.8\\) three times is faster and safer than raising a decimal to a power — and never, ever add the percentages."
},

"quant-percentage-ex#12": {
  steps: "Step 1 — Everything is expressed relative to B, so let B \\(= x\\).\n" +
    "Step 2 — A is 150% of B: \\(A = 1.5x\\).\n" +
    "Step 3 — C is 120% of [[A]] — not of B — so \\(C = 1.2 \\times 1.5x = 1.8x\\).\n" +
    "Step 4 — Add them. \\(x + 1.5x + 1.8x = 4.3x = 86{,}000\\).\n" +
    "Step 5 — \\(x = 20{,}000\\), so \\(C = 1.8 \\times 20{,}000 = 36{,}000\\).",
  fast: "Turn the chain into whole-number parts: \\(B : A : C = 1 : 1.5 : 1.8 = 10 : 15 : 18\\), which is 43 parts in total.\n" +
    "\\(86{,}000 \\div 43 = 2{,}000\\) per part, so \\(C = 18 \\times 2{,}000 = 36{,}000\\).\n" +
    "The 43 is worth spotting early — 86,000 was chosen to divide by it cleanly.",
  traps: "(A) $30,000 is A's income and (C) $20,000 is B's. Both come from doing the work correctly and then reporting the wrong person — the most common way to lose this question.\n" +
    "(B) $32,000 and (E) $40,000 fail the forward check: C = 1.8 parts means the total is \\(86{,}000 = 43 \\times 2{,}000\\), and neither 32,000 nor 40,000 is \\(18 \\times 2{,}000\\). Each would force a total different from $86,000.",
  take: "Chained percentages become a ratio with whole-number parts; dividing the total by the number of parts is one step. Then re-read the question to check [[whose]] figure it wants."
},

"quant-percentage-ex#13": {
  steps: "Step 1 — Set the base at the end of the chain that everything else refers back to. Ram is that base.\n" +
    "Step 2 — Amit is 80% of Ram: \\(\\text{Amit} = 0.8\\,\\text{Ram}\\).\n" +
    "Step 3 — Ravi is 150% of Amit: \\(\\text{Ravi} = 1.5 \\times 0.8\\,\\text{Ram} = 1.2\\,\\text{Ram}\\).\n" +
    "Step 4 — The question asks for Ram : Ravi, in that order: \\(1 : 1.2\\).\n" +
    "Step 5 — Clear the decimal by multiplying both sides by 5: \\(5 : 6\\).",
  fast: "Let Ram \\(= 100\\). Amit \\(= 80\\). Ravi \\(= 1.5 \\times 80 = 120\\).\n" +
    "Ram : Ravi \\(= 100 : 120 = 5 : 6\\).\n" +
    "Setting the base to 100 and walking the chain forward removes every fraction.",
  traps: "(D) 6 : 5 is the correct ratio written backwards. The question asks for Ram : [[Ravi]], and Ram is the smaller of the two — so the first number must be the smaller one.\n" +
    "(E) 8 : 15 is the two given percentages placed side by side; it is not a ratio of anyone's salary.\n" +
    "(B) 2 : 3 is Amit : Ravi, the right method applied to the wrong pair.\n" +
    "(A) 1 : 2 comes from reading \"150% of\" as \"150% [[more]] than\": that would make Ravi \\(2.5 \\times 0.8 = 2\\) times Ram. \"Of\" means multiply by 1.5, not by 2.5.",
  take: "Set the base to 100, walk the chain, then read the ratio in the [[order the question asks]]. Reversal is the single most common error in ratio questions."
},

"quant-percentage-ex#14": {
  steps: "Step 1 — A combined percentage needs a combined count, so convert each rate into defective parts.\n" +
    "Step 2 — First shipment: \\(5\\%\\) of 120 = 6 defective.\n" +
    "Step 3 — Second shipment: \\(10\\%\\) of 80 = 8 defective.\n" +
    "Step 4 — Combine. \\(6 + 8 = 14\\) defective out of \\(120 + 80 = 200\\) parts.\n" +
    "Step 5 — \\(\\dfrac{14}{200} = 0.07 = 7.0\\%\\).",
  fast: "Count the defective units, not the percentages: 6 and 8 make 14 out of 200, and 14/200 doubles to 28/400 — or just halve 200 to see that 14 out of 200 is 7 per 100.\n" +
    "Whenever two groups with different sizes are merged, go to counts immediately.",
  traps: "(C) 7.5% is the plain average of 5% and 10%. It is wrong because the shipments are different sizes: the 120-part shipment carries more weight, which pulls the true answer [[below]] the midpoint.\n" +
    "That relationship is a check in itself — the answer must lie strictly between 5% and 10%, and nearer 5%, which alone identifies 7.0% and rules out (D) and (E).\n" +
    "(A) 6.5% would require 13 defective parts out of 200; the true counts are \\(6 + 8 = 14\\). It sits one part below the answer to punish a slip in either count.",
  take: "Percentages of different-sized groups cannot be averaged. Convert to counts, add, then divide once by the combined total."
},

"quant-percentage-ex#15": {
  steps: "Step 1 — Three sequential changes, so three multipliers applied to the running total.\n" +
    "Step 2 — February: \\(4{,}000 \\times 1.05 = 4{,}200\\).\n" +
    "Step 3 — March: \\(4{,}200 \\times 0.95 = 3{,}990\\).\n" +
    "Step 4 — April: \\(3{,}990 \\times 0.90 = 3{,}591\\).\n" +
    "Each month's percentage applies to the [[previous month's]] figure, which is why the +5% and −5% do not cancel.",
  fast: "Pair the +5% and −5% first: by the \\(1 - (a/100)^2\\) rule that is \\(\\times 0.9975\\), giving \\(4{,}000 \\times 0.9975 = 3{,}990\\). Then take 10% off: \\(3{,}990 - 399 = 3{,}591\\).\n" +
    "Taking 10% off is always subtraction of a shifted decimal — never reach for a calculator-style multiplication.",
  traps: "Cancelling the +5% against the −5% gives \\(4{,}000 \\times 0.9 = 3{,}600\\). That number is deliberately [[not]] among the choices — its absence is the signal that the two changes have different bases.\n" +
    "(C) 3,575 sits just below the right answer to catch a mis-rounded middle step. (A) 3,125 and (B) 3,255 are the deep-low decoys — the territory you reach by over-applying the cuts (a second 10% cut on 3,591 gives about 3,232, in their neighbourhood).\n" +
    "(E) 3,721 is the only choice [[above]] the answer: it would need the three months to lose just 7% overall, when the factors \\(1.05 \\times 0.95 \\times 0.90\\) lose 10.2%. It catches an under-applied April cut.",
  take: "+5% followed by −5% is a 0.25% loss, not zero. On the GMAT that difference is exactly the gap between two answer choices."
},

"quant-percentage-ex#16": {
  steps: "Step 1 — Let \\(m\\) be the number of men, so women number \\(5{,}000 - m\\).\n" +
    "Step 2 — Write the new population. \\(1.10m + 1.15(5{,}000 - m) = 5{,}600\\).\n" +
    "Step 3 — Expand. \\(1.10m + 5{,}750 - 1.15m = 5{,}600\\).\n" +
    "Step 4 — Collect. \\(-0.05m = -150\\).\n" +
    "Step 5 — \\(m = 3{,}000\\). Check: \\(3{,}000 \\to 3{,}300\\) and \\(2{,}000 \\to 2{,}300\\), total \\(5{,}600\\). ✓",
  fast: "Alligation. Suppose [[everyone]] grew at the higher rate of 15%: the population would be \\(5{,}000 \\times 1.15 = 5{,}750\\). It is actually 5,600, so growth fell 150 short.\n" +
    "Every man contributes 5 percentage points less than a woman, i.e. \\(0.05\\) of a person short each.\n" +
    "\\(150 \\div 0.05 = 3{,}000\\) men. No equation, no expansion.",
  traps: "(A) 2,000 is the number of [[women]] — the right method, the wrong group. Re-read the last line of the stem before selecting.\n" +
    "(B) 2,500 is the even split, which would be right only if the two growth rates were equal.\n" +
    "(D) 4,000 and (E) 4,500 push the men's share so high that the total growth would fall below 5,600.",
  take: "Alligation turns a two-variable mixture into one subtraction and one division: assume the whole population grew at one rate, then charge the entire shortfall to the other group."
},

"quant-percentage-ex#17": {
  steps: "Step 1 — Expenditure = price × consumption, so each change becomes a multiplier.\n" +
    "Step 2 — Price up 40% → \\(\\times 1.40\\). Consumption down 20% → \\(\\times 0.80\\).\n" +
    "Step 3 — Multiply. \\(1.40 \\times 0.80 = 1.12\\).\n" +
    "Step 4 — Expenditure is 112% of what it was, a [[12% increase]].",
  fast: "Work in whole numbers: \\(140 \\times 80 = 11{,}200\\), and the two original hundreds give \\(100 \\times 100 = 10{,}000\\). The ratio is \\(1.12\\).\n" +
    "Dropping the decimals and comparing to 10,000 is quicker and less error-prone than multiplying 1.4 by 0.8 under time pressure.",
  traps: "(A) 20% increase is \\(40 - 20\\) — the additive trap. It is wrong because the 40% is a percentage of the price and the 20% is a percentage of the consumption; they are percentages of different things and cannot be combined by subtraction.\n" +
    "(D) 40% ignores the consumption cut entirely.\n" +
    "(E) 44% has no sign attached, and 44 is what you would get from two 20% rises — a different question.\n" +
    "(B) 16% sits between the additive 20% and the true 12%, catching anyone who senses that \\(40 - 20\\) is too high and shaves it by guesswork instead of multiplying \\(1.40 \\times 0.80\\).",
  take: "When two different quantities each change, multiply their factors: \\(1.40 \\times 0.80\\). Percentages of different bases are never additive."
},

"quant-percentage-ex#18": {
  steps: "Step 1 — Split income into its two parts. Saving 10% means expenditure is the other 90%.\n" +
    "Step 2 — Let income be \\(I\\). Originally: saves \\(0.1I\\), spends \\(0.9I\\).\n" +
    "Step 3 — Two years later income is \\(1.2I\\), and savings are unchanged at \\(0.1I\\).\n" +
    "Step 4 — New expenditure is what is left: \\(1.2I - 0.1I = 1.1I\\).\n" +
    "Step 5 — Percent increase in expenditure, based on the [[old]] expenditure: \\(\\dfrac{1.1I - 0.9I}{0.9I} = \\dfrac{0.2}{0.9} = \\dfrac29 = 22\\tfrac29\\%\\).",
  fast: "Set income to 100. He spends 90. Later income is 120 and he still saves 10, so he spends 110.\n" +
    "The rise is 20 on a base of 90: \\(20/90 = 2/9 = 22\\tfrac29\\%\\).\n" +
    "Any percentage question with no numbers in it should start with \"let it be 100\".",
  traps: "(A) 22% is \\(2/9\\) truncated. The presence of both 22% and \\(22\\tfrac29\\%\\) is the giveaway that the answer is a repeating fraction and that rounding will be punished.\n" +
    "(E) 20% is the rise in [[income]], not in expenditure — right number, wrong quantity.\n" +
    "(D) 24% is the income rise scaled up by itself (\\(1.2 \\times 20\\)) — a slip that never re-bases the rise on the 90 he used to spend.\n" +
    "(C) \\(23\\tfrac13\\%\\) is the matching decoy just [[above]] the answer — it pairs with (A) below it so that computing \\(2/9\\) loosely as \"about 22 or 23 percent\" cannot settle the question. Only the exact fraction does.",
  take: "Percent increase always divides by the [[original]] value. And when two answer choices differ only by a fraction, the exact fraction is the answer — do not convert to a decimal and round."
},

"quant-percentage-ex#19": {
  steps: "Step 1 — Anyone who reads both papers has been counted in the 40% and again in the 50%, so a straight sum double-counts them.\n" +
    "Step 2 — Inclusion–exclusion: \\(|X \\cup Y| = |X| + |Y| - |X \\cap Y|\\).\n" +
    "Step 3 — \\(40\\% + 50\\% - 10\\% = 80\\%\\) read at least one paper.\n" +
    "Step 4 — Everyone else reads neither: \\(100\\% - 80\\% = 20\\%\\).",
  fast: "Draw the two circles and fill the middle first: both = 10, X only = 30, Y only = 40. That is 80 accounted for, so 20 are outside.\n" +
    "Filling the overlap before the outer regions is the habit that makes every Venn question fast.",
  traps: "(A) 10% is \\(100 - (40 + 50)\\) — forgetting to add the overlap back. It is also, not coincidentally, the \"both\" figure handed to you in the stem.\n" +
    "(B) 15%, (D) 25% and (E) 30% are spaced around the answer to catch anyone who subtracts the 10% instead of adding it, or halves it.",
  take: "\\(|A \\cup B| = A + B - \\text{both}\\). If two percentages sum past 100, the overlap must be subtracted exactly once — subtracting it twice is the classic slip."
},

"quant-percentage-ex#20": {
  steps: "Step 1 — Apply inclusion–exclusion to find who passed at least one subject: \\(65\\% + 60\\% - 40\\% = 85\\%\\).\n" +
    "Step 2 — The rest failed both: \\(100\\% - 85\\% = 15\\%\\).\n" +
    "Step 3 — That 15% is the group with a count attached: \\(0.15 \\times \\text{total} = 90\\).\n" +
    "Step 4 — \\(\\text{total} = \\dfrac{90}{0.15} = 600\\).\n" +
    "Step 5 — Check: 15% of 600 = 90. ✓",
  fast: "Failed both \\(= 100 - (65 + 60 - 40) = 15\\%\\). Then 15% is 90, so 5% is 30, so 100% is 600.\n" +
    "Stepping down to a convenient sub-unit — here 5% — beats dividing by 0.15.",
  traps: "Skipping the overlap gives \\(100 - 125 = -25\\%\\). A negative percentage is impossible, and noticing that is the fastest possible confirmation that the 40% must be added back.\n" +
    "(B) 650, (C) 700, (D) 750 and (E) 800 all come from attaching the 90 to a different slice; only 600 makes 65%, 60% and 40% all whole numbers of students.",
  take: "Two overlapping groups summing past 100% always need the overlap subtracted once. If your \"neither\" comes out negative, that subtraction is what you missed."
},

"quant-percentage-ex#21": {
  steps: "Step 1 — Two sequential changes on the same quantity, so multiply the factors.\n" +
    "Step 2 — Up 25%: \\(\\times 1.25\\). Down 20% [[on the new price]]: \\(\\times 0.80\\).\n" +
    "Step 3 — \\(1.25 \\times 0.80 = 1.00\\).\n" +
    "Step 4 — The final price equals the original — no change.",
  fast: "In fractions, \\(+25\\%\\) is \\(\\times \\dfrac54\\) and \\(-20\\%\\) is \\(\\times \\dfrac45\\). They are exact reciprocals, so they cancel to 1 by inspection.\n" +
    "Recognise the reciprocal pairs and this is a five-second question.",
  traps: "(A) 5% lower is \\(25 - 20\\) — the additive instinct. The percentages are taken on different bases, so they never subtract.\n" +
    "(C) 5% higher and (D) 4% higher are the same slip with the sign flipped, or the residue of computing \\(1.25 \\times 0.8\\) carelessly.\n" +
    "(E) 10% higher is the far decoy: no reading of \"20% off the new price\" produces a factor of 1.10, so it survives only pure guessing.\n" +
    "That an exact cancellation is even on offer is the hint: the numbers were chosen for it.",
  take: "Memorise the reciprocal pairs: \\(+25\\%/-20\\%\\), \\(+50\\%/-33\\tfrac13\\%\\), \\(+100\\%/-50\\%\\), \\(+\\tfrac13/-25\\%\\). Each pair returns you exactly to the start."
},

"quant-percentage-ex#22": {
  steps: "Step 1 — Find the whole from the part. \\(0.40 \\times N = 240\\), so \\(N = 600\\).\n" +
    "Step 2 — Take the percentage asked for. \\(0.75 \\times 600 = 450\\).",
  fast: "Work in 1% units. \\(240 \\div 40 = 6\\) per percent, so \\(75\\% = 75 \\times 6 = 450\\).\n" +
    "Finding the value of 1% turns any \"\\(x\\%\\) is \\(A\\), what is \\(y\\%\\)\" question into a single multiplication, and you never need the whole number at all.",
  traps: "(A) 360 is \\(240 \\times 1.5\\) — scaling by \\(60/40\\) instead of the correct \\(75/40 = 1.875\\).\n" +
    "(D) 480 is \\(240 \\times 2\\), the scaling you would use for 80%.\n" +
    "(E) 180 is 75% of 240 itself, applying the percentage to the part rather than to the whole.\n" +
    "(B) 420 is \\(240 \\times 1.75\\) — increasing the part [[by]] 75% instead of taking 75% [[of]] the whole. \"Of\" and \"more than\" are different instructions.",
  take: "Convert to a per-1% unit immediately. It removes the intermediate step of finding the whole and eliminates the wrong-base errors that all three traps here depend on."
},

"quant-percentage-ex#23": {
  steps: "Step 1 — Take 100 students so the percentages become counts: 60 boys and 40 girls.\n" +
    "Step 2 — Boys with glasses: \\(20\\%\\) of 60 = 12.\n" +
    "Step 3 — Girls with glasses: \\(40\\%\\) of 40 = 16.\n" +
    "Step 4 — Total wearing glasses: \\(12 + 16 = 28\\) out of 100, i.e. \\(28\\%\\).",
  fast: "This is a weighted average of 20% and 40% with weights 60 and 40 — so the answer must sit strictly between 20% and 40%, and closer to 20% because the boys outnumber the girls.\n" +
    "That alone leaves only 28% and 30% in play, and the exact count \\(12 + 16 = 28\\) settles it.",
  traps: "(C) 30% is the plain average of 20% and 40%, which would be correct only if the class were an even split. Since there are more boys, the answer must be pulled below 30%.\n" +
    "(A) 24% is \\(0.60 \\times 0.40\\) — pairing the boys' share with the girls' rate.\n" +
    "(E) 20% is the boys' rate alone.\n" +
    "(D) 32% swaps the two rates — \\(40\\%\\) of the 60 boys plus \\(20\\%\\) of the 40 girls gives \\(24 + 8 = 32\\). Right method, rates attached to the wrong groups.",
  take: "A weighted average always lands strictly between the two rates, nearer the one with the bigger weight. Using that to bound the answer often eliminates three choices before you compute."
},

"quant-percentage-ex#24": {
  steps: "Step 1 — Spending = price × quantity. Holding spending constant means the two factors are reciprocals.\n" +
    "Step 2 — Price rises 25%, so the price factor is \\(\\dfrac54\\).\n" +
    "Step 3 — Consumption must be multiplied by \\(\\dfrac45\\).\n" +
    "Step 4 — The cut is \\(1 - \\dfrac45 = \\dfrac15 = 20\\%\\).",
  fast: "Use the formula \\(\\dfrac{p}{100+p}\\): here \\(\\dfrac{25}{125} = \\dfrac15 = 20\\%\\).\n" +
    "Or note that 25% is \\(1/4\\): the price goes from 4 to 5, so consumption goes from 5 to 4 — a drop of 1 in 5.",
  traps: "(B) 25% reuses the number from the stem. It is the answer only if you measure the cut against the [[old]] price, and the whole question is that the cut is measured against the new one.\n" +
    "(D) \\(33\\tfrac13\\%\\) is the answer for a 50% price rise; (C) 15% and (E) 30% bracket the correct value for anyone estimating.",
  take: "Price up \\(p\\%\\) → cut \\(\\dfrac{p}{100+p}\\). Price down \\(p\\%\\) → you may raise consumption by \\(\\dfrac{p}{100-p}\\). The two are not the same number."
},

"quant-percentage-ex#25": {
  steps: "Step 1 — The 2024 growth applies to the population [[after]] 2023's growth, so the factors multiply.\n" +
    "Step 2 — \\(\\times 1.20\\) then \\(\\times 1.25\\).\n" +
    "Step 3 — \\(1.20 \\times 1.25 = 1.50\\).\n" +
    "Step 4 — The population is 150% of what it was, a 50% increase.",
  fast: "In fractions: \\(\\times \\dfrac65\\) then \\(\\times \\dfrac54\\). The fives cancel, leaving \\(\\dfrac64 = \\dfrac32\\) — a 50% rise, by inspection.\n" +
    "Converting percentages to fractions before multiplying is almost always the fastest route when the percentages are 20%, 25%, \\(33\\tfrac13\\%\\) or 50%.",
  traps: "(A) 45% is \\(20 + 25\\), the additive trap. It is always an [[under]]estimate for two rises, because the second rise applies to a larger base.\n" +
    "(D) 22.5% is the average of the two rates, which answers no question here.\n" +
    "(C) 55% and (E) 60% overshoot; the compounding bonus on two modest rises is small, only 5 points here.",
  take: "Two successive rises of \\(a\\%\\) and \\(b\\%\\) give \\(a + b + \\dfrac{ab}{100}\\) percent. Here \\(20 + 25 + 5 = 50\\) — the extra 5 is the compounding you would lose by adding."
},

"quant-percentage-ex#26": {
  steps: "Step 1 — Number of computers = budget ÷ price per computer.\n" +
    "Step 2 — Budget is multiplied by 1.60; price is multiplied by 1.20.\n" +
    "Step 3 — So quantity is multiplied by \\(\\dfrac{1.60}{1.20} = \\dfrac43\\).\n" +
    "Step 4 — A factor of \\(\\dfrac43\\) is a \\(\\dfrac13\\) increase, i.e. \\(33\\tfrac13\\%\\) greater.",
  fast: "Put numbers in: last year, budget 100 and price 10 → 10 computers. This year, budget 160 and price 12 → \\(160/12 = 13\\tfrac13\\) computers.\n" +
    "The rise is \\(3\\tfrac13\\) on 10, i.e. \\(33\\tfrac13\\%\\). Choosing a price of 10 keeps the division trivial.",
  traps: "(B) 40% is \\(60 - 20\\), the additive error. When one factor divides another, their percentage changes do not subtract.\n" +
    "(E) 60% ignores the price rise and reports the budget increase.\n" +
    "(D) 48% is the budget rise shaved by a fifth (\\(0.8 \\times 60\\)) — treating the price rise as a haircut on the 60% rather than dividing the factors. (C) 42% sits beside it so that a loose estimate has nowhere safe to land: only the exact \\(4/3\\) is offered.",
  take: "When a quantity is the ratio of two things that both change, [[divide]] the multipliers. \\(1.6/1.2 = 4/3\\) is exact; \\(60\\% - 20\\%\\) is not an operation."
},

"quant-percentage-ex#27": {
  steps: "Step 1 — Name the relationship. Profit as a percent of sales is the margin: \\(\\text{margin} = \\dfrac{\\text{profit}}{\\text{sales}}\\), so \\(\\text{sales} = \\dfrac{\\text{profit}}{\\text{margin}}\\).\n" +
    "Step 2 — Profits up 10% → profit factor \\(1.10\\).\n" +
    "Step 3 — Margin down 10% → margin factor \\(0.90\\).\n" +
    "Step 4 — Sales factor \\(= \\dfrac{1.10}{0.90} = 1.222\\ldots\\)\n" +
    "Step 5 — Sales were about 122% of the previous year's.",
  fast: "\\(\\dfrac{1.1}{0.9} = \\dfrac{11}{9}\\), and \\(11/9\\) is just over \\(1.22\\).\n" +
    "The direction alone nearly settles it: profit rose while the margin fell, so sales must have risen by [[more]] than 10% — which leaves only (D) and (E), and 190% is far too large for a 10/10 pair.",
  traps: "(C) 110% is the profit change reported as the sales change — it ignores the margin entirely.\n" +
    "(B) 90% is the margin change alone, and points the wrong way.\n" +
    "(E) 190% adds the two effects; (A) 78% is \\(0.9/1.15\\)-style arithmetic with the fraction inverted.",
  take: "Sales = profit ÷ margin. Dividing by 0.9 rather than multiplying by 0.9 is what pushes the answer past 110% — get the direction right and the arithmetic barely matters."
},

"quant-percentage-ex#28": {
  steps: "Step 1 — Translate each change into a multiplier on the running premium.\n" +
    "Step 2 — 1998: up \\(p\\%\\) → \\(\\times \\left(1 + \\dfrac{p}{100}\\right)\\).\n" +
    "Step 3 — 1999 and 2000: \"decreased by \\(\\tfrac16\\) from the previous year's figure\" → \\(\\times \\dfrac56\\) each time.\n" +
    "Step 4 — The 2000 premium equals the 1997 premium, so the multipliers must come to exactly 1:\n" +
    "\\(\\left(1 + \\dfrac{p}{100}\\right) \\times \\dfrac56 \\times \\dfrac56 = 1\\).\n" +
    "Step 5 — \\(\\left(1 + \\dfrac{p}{100}\\right) = \\dfrac{36}{25} = 1.44\\), so \\(p = 44\\).",
  fast: "Two cuts of \\(\\tfrac16\\) leave \\(\\left(\\dfrac56\\right)^2 = \\dfrac{25}{36}\\). To undo that you need the reciprocal, \\(\\dfrac{36}{25} = 1.44\\) — a 44% rise.\n" +
    "The whole question is one reciprocal. Note also that \\(n\\) never mattered: it cancels, which is why no dollar figure was ever given.",
  traps: "(D) 36 is \\(\\dfrac{36}{25}\\) misread as \"36 percent\" — the number is right there in the working, which is exactly why it is offered.\n" +
    "(B) 12 is the distant lowball; the size check below rules it out before any algebra.\n" +
    "(C) 40 and (E) 50 bracket the answer for estimators. A useful check: the falls remove \\(11/36 \\approx 31\\%\\), yet they act on the [[raised]] premium, so the rise that precedes them must be larger than 31% — which already rules out (B).",
  take: "\"Decreased by \\(\\tfrac16\\)\" means \\(\\times \\dfrac56\\); reversing it needs \\(\\times \\dfrac65\\), never \"+\\(\\tfrac16\\)\". A rise and a fall of the same fraction never cancel, and the rise required is always the bigger number."
}

});
