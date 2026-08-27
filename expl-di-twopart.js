/* GMAT Prep — in-depth explanations for the Data Insights two-part sets.
   Every answer was independently re-derived before the explanation was
   written; no stored key was changed. Keys are "setId#n"; index.html merges
   these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-twopart-ex#1": {
  steps: "Step 1 — Let \\(p\\) be pens and \\(n\\) notebooks. The order has \\(p + n = 20\\) items.\n" +
    "Step 2 — The cost is \\(3p + 5n = 76\\).\n" +
    "Step 3 — Substitute \\(n = 20 - p\\): \\(3p + 5(20 - p) = 100 - 2p\\).\n" +
    "Step 4 — Set that equal to 76: \\(100 - 2p = 76\\), so \\(2p = 24\\) and \\(p = 12\\).\n" +
    "Step 5 — Then \\(n = 8\\), giving the pair \\((12, 8)\\).\n" +
    "Step 6 — Check: \\(3(12) + 5(8) = 36 + 40 = 76\\) ✓.",
  fast: "Price everything at the cheaper rate first: 20 pens would cost 60, and the actual bill is 76 — an excess of 16. Each notebook substituted for a pen adds 2 dollars, so there are \\(16 \\div 2 = 8\\) notebooks and 12 pens.\n" +
    "That \"baseline plus excess\" method skips the algebra entirely and generalises to every two-price mixture question.",
  traps: "(B) \\((10, 10)\\) splits the order evenly, which would cost \\(30 + 50 = 80\\) — too much.\n" +
    "(A) \\((8, 12)\\) is the correct pair with the two components swapped; since notebooks cost more, more pens than notebooks is required to keep the bill down.\n" +
    "(D) \\((14, 6)\\) and (E) \\((16, 4)\\) tilt too far toward pens, costing 72 and 68.\n" +
    "On two-part questions the order of the pair is part of the answer — read which quantity is asked for first.",
  take: "Price the whole order at the cheaper rate, then divide the excess by the price difference to get the count of the dearer item. Watch the order of the pair."
},

"di-twopart-ex#2": {
  steps: "Step 1 — Two numbers with sum \\(S\\) and difference \\(D\\) satisfy: larger \\(= \\dfrac{S+D}{2}\\), smaller \\(= \\dfrac{S-D}{2}\\).\n" +
    "Step 2 — Larger \\(= \\dfrac{30 + 8}{2} = 19\\).\n" +
    "Step 3 — Smaller \\(= \\dfrac{30 - 8}{2} = 11\\).\n" +
    "Step 4 — The pair is \\((19, 11)\\).\n" +
    "Step 5 — Check: \\(19 + 11 = 30\\) ✓ and \\(19 - 11 = 8\\) ✓.",
  fast: "Both numbers sit half the difference away from the average. The average is 15, half the difference is 4, so the numbers are \\(15 \\pm 4\\).\n" +
    "That framing is quicker than the formulas and makes the check automatic — the two answers are symmetric about the mean.",
  traps: "(A) \\((20, 10)\\) has the right sum but a difference of 10.\n" +
    "(C) \\((18, 12)\\) has a difference of 6, and (E) \\((21, 9)\\) a difference of 12 — both keep the sum at 30, so only the difference distinguishes them.\n" +
    "(D) \\((22, 8)\\) also sums to 30, with a difference of 14.\n" +
    "Every distractor satisfies one condition and fails the other, which is the standard construction: always verify both.",
  take: "Two numbers with sum \\(S\\) and difference \\(D\\) are \\(\\frac S2 \\pm \\frac D2\\). Verify both conditions, since distractors usually satisfy one."
},

"di-twopart-ex#3": {
  steps: "Step 1 — Hotel A charges 80 per night with no fee, so the budget covers \\(300 \\div 80 = 3.75\\) nights.\n" +
    "Step 2 — Nights must be whole, and the traveller cannot exceed the budget, so the maximum is 3 nights (costing 240).\n" +
    "Step 3 — Hotel B charges a one-time 40 fee, leaving \\(300 - 40 = 260\\) for rooms.\n" +
    "Step 4 — At 50 per night that covers \\(260 \\div 50 = 5.2\\) nights, so the maximum is 5 nights (costing \\(40 + 250 = 290\\)).\n" +
    "Step 5 — The pair is \\((3, 5)\\).",
  fast: "Subtract the fixed fee before dividing — that is the only structural step. Then floor both quotients, because a partial night cannot be bought.\n" +
    "A quick sanity check: Hotel B is cheaper per night despite the fee, so it must allow strictly more nights, which rules out any pair whose second entry does not exceed the first by a clear margin.",
  traps: "(B) \\((4, 4)\\) rounds \\(3.75\\) up to 4, which would cost 320 and break the budget. Maximisation under a budget always rounds *down*.\n" +
    "(D) \\((4, 5)\\) makes the same rounding error on the first entry only.\n" +
    "(C) \\((3, 4)\\) subtracts the fee twice, or floors \\(260/50\\) as if it were \\(220/50\\).\n" +
    "(E) \\((3, 3)\\) ignores the fee structure altogether and divides 300 by 80 and by 50 without the fee, then under-counts.\n" +
    "The two disciplines are: subtract fixed costs first, and floor rather than round.",
  take: "Subtract one-time fees before dividing by the per-unit cost, then floor — a budget maximisation never rounds up."
},

"di-twopart-ex#4": {
  steps: "Step 1 — The ratio \\(5 : 2\\) means the mixture divides into \\(5 + 2 = 7\\) equal parts.\n" +
    "Step 2 — The total is 2,100 g, so one part weighs \\(2100 \\div 7 = 300\\) g.\n" +
    "Step 3 — Flour is 5 parts: \\(5 \\times 300 = 1500\\) g.\n" +
    "Step 4 — Sugar is 2 parts: \\(2 \\times 300 = 600\\) g.\n" +
    "Step 5 — The pair is \\((1500, 600)\\), and \\(1500 + 600 = 2100\\) ✓.",
  fast: "Add the ratio terms to get the number of parts, divide the total by that, then scale. One division and two multiplications.\n" +
    "A faster screen: flour must be \\(\\tfrac57\\) of 2,100, which is clearly more than 1,400 and less than 1,750 — that alone isolates the answer among the choices.",
  traps: "(B) \\((1400, 700)\\) is a \\(2 : 1\\) split, which corresponds to a ratio of \\(4 : 2\\) rather than \\(5 : 2\\).\n" +
    "(C) \\((1200, 900)\\) is \\(4 : 3\\).\n" +
    "(D) \\((1600, 500)\\) does not divide into 7 equal parts.\n" +
    "(E) \\((1050, 1050)\\) splits evenly, ignoring the ratio entirely.\n" +
    "Every distractor sums to 2,100, so the total is no help — only the ratio distinguishes them.",
  take: "Convert a ratio into parts, find the value of one part from the total, then scale each component. Check that the components still sum to the total."
},

"di-twopart-ex#5": {
  steps: "Step 1 — The committee makes two separate claims: costs went down, and service improved. Each half of the answer must support one of them.\n" +
    "Step 2 — The cost claim is supported by evidence that costs *fell*. A rise in costs contradicts it.\n" +
    "Step 3 — The service claim is supported by evidence that service improved, and falling complaints is the natural proxy. Rising complaints contradicts it.\n" +
    "Step 4 — So the correct pair must contain a cost decrease and a complaint decrease.\n" +
    "Step 5 — \"Costs fell 10%; complaints fell 20%\" is the only option where both halves point the right way.",
  fast: "Test each half independently against its own claim, and reject an option as soon as either half fails. Most options break on the first half.\n" +
    "The one modelling assumption is that falling complaints indicates improved service — a reasonable proxy, and the only service evidence any option offers.",
  traps: "(A) has costs *rising*, which refutes rather than supports the cost claim, even though its second half is fine.\n" +
    "(B) has the cost half right and the service half backwards — rising complaints suggests service got worse.\n" +
    "(D) offers two facts that both bear on costs, with nothing about service, and one of them points the wrong way.\n" +
    "(E) again pairs a service improvement with a cost increase.\n" +
    "The structure of these questions is that most distractors get one half right; only a pair that satisfies *both* roles can be correct.",
  take: "Evaluate each half of a two-part answer against its own claim independently. Reject the pair the moment either half fails."
},

"di-twopart-ex#6": {
  steps: "Step 1 — Convert each pipe's time into a rate. Pipe X fills the tank in 6 hours, so its rate is \\(\\tfrac16\\) of the tank per hour. Pipe Y takes 12 hours, so its rate is \\(\\tfrac1{12}\\).\n" +
    "Step 2 — Rates add: \\(\\tfrac16 + \\tfrac1{12} = \\tfrac2{12} + \\tfrac1{12} = \\tfrac3{12} = \\tfrac14\\) of the tank per hour.\n" +
    "Step 3 — The time to fill is the reciprocal of the combined rate: \\(1 \\div \\tfrac14 = 4\\) hours.\n" +
    "Step 4 — The pair is \\(\\left(\\tfrac14,\\ 4\\right)\\).",
  fast: "Add the rates, then invert. The two halves of the answer are reciprocals of each other, so once you have one the other is free — and that relationship screens the choices immediately.\n" +
    "A sanity check: two pipes together must be faster than the faster pipe alone, so the answer must be under 6 hours.",
  traps: "(A) \\(\\left(\\tfrac16, 6\\right)\\) uses pipe X's rate alone, as if pipe Y contributed nothing.\n" +
    "(E) \\(\\left(\\tfrac1{12}, 12\\right)\\) uses pipe Y alone.\n" +
    "(C) \\(\\left(\\tfrac13, 3\\right)\\) and (D) \\(\\left(\\tfrac18, 8\\right)\\) come from mis-adding the fractions — \\(\\tfrac16 + \\tfrac1{12}\\) is not \\(\\tfrac13\\), and averaging the times to get 9 or 8 hours is invalid.\n" +
    "The recurring error is adding *times* rather than rates: \\(6 + 12\\) or their average has no meaning here.",
  take: "Rates add, times do not. Combined time is the reciprocal of the summed rates, and must be shorter than either individual time."
},

"di-twopart-ex#7": {
  steps: "Step 1 — Line 1 makes 200 units a day, so 600 units take \\(600 \\div 200 = 3\\) days.\n" +
    "Step 2 — At 500 dollars a day, that costs \\(3 \\times 500 = 1500\\).\n" +
    "Step 3 — Line 2 makes 150 units a day, so 600 units take \\(600 \\div 150 = 4\\) days.\n" +
    "Step 4 — At 300 dollars a day, that costs \\(4 \\times 300 = 1200\\).\n" +
    "Step 5 — The pair is \\((3\\text{ days}/1500,\\ 4\\text{ days}/1200)\\).",
  fast: "Both divisions are exact, which is the signal that no rounding question is hiding here. Compute days first, then multiply by the daily cost — four small operations.\n" +
    "The trade-off worth noticing: Line 2 is slower but cheaper overall, at 2 dollars per unit against Line 1's 2.50 — which is the point the question is really making.",
  traps: "(A) gets Line 1 right but gives Line 2 three days, which would produce only 450 units.\n" +
    "(B) gives both lines four days, ignoring their different output rates.\n" +
    "(C) has the right days but prices Line 2 at 1,200 for five days, an inconsistent pairing.\n" +
    "(D) halves Line 1's requirement to two days, producing only 400 units.\n" +
    "Each distractor breaks the link between days and cost, so check that every cost equals days times the daily rate.",
  take: "Days = required output ÷ daily output; cost = days × daily cost. Verify each half of the pair against its own arithmetic."
},

"di-twopart-ex#8": {
  steps: "Step 1 — A \\(20\\%\\) discount means the sale price is \\(80\\%\\) of the original, so \\(0.80 \\times \\text{original} = 96\\).\n" +
    "Step 2 — Original \\(= 96 \\div 0.80 = 120\\).\n" +
    "Step 3 — Tax is added to the *discounted* price, not the original: \\(96 \\times 1.10 = 105.60\\).\n" +
    "Step 4 — The pair is \\((120,\\ 105.60)\\).",
  fast: "Two conversions in opposite directions: divide by \\(0.8\\) to undo the discount, multiply by \\(1.1\\) to apply the tax. Neither touches the other.\n" +
    "Recognising \\(0.8 = \\tfrac45\\) makes the first step mental: \\(96 \\times \\tfrac54 = 120\\).",
  traps: "(C) \\((120, 96.00)\\) gets the original price right but reports the pre-tax price as the final one — the tax was never applied.\n" +
    "(B) \\((115, 105.60)\\) computes the original as \\(96 \\times 1.2 = 115.2\\), applying the discount percentage in the wrong direction.\n" +
    "(D) \\((116, 105.60)\\) is a similar reversal.\n" +
    "(E) \\((120, 96.60)\\) applies the tax to only part of the price.\n" +
    "The direction of the discount is the classic trap: reversing a \\(20\\%\\) cut means dividing by 0.8, not adding \\(20\\%\\) back.",
  take: "Undo a \\(p\\%\\) discount by dividing by \\((1 - p/100)\\), never by multiplying by \\((1 + p/100)\\). Note which price the tax applies to."
},

"di-twopart-ex#9": {
  steps: "Step 1 — Let \\(a\\) be apples at 2 dollars and \\(m\\) mangoes at 3 dollars, with \\(a + m = 12\\).\n" +
    "Step 2 — The bill is \\(2a + 3m = 29\\).\n" +
    "Step 3 — Substitute \\(m = 12 - a\\): \\(2a + 3(12 - a) = 36 - a\\).\n" +
    "Step 4 — Set that equal to 29: \\(36 - a = 29\\), so \\(a = 7\\).\n" +
    "Step 5 — Then \\(m = 5\\), giving \\((7, 5)\\). Check: \\(14 + 15 = 29\\) ✓.",
  fast: "Price all twelve as mangoes: \\(12 \\times 3 = 36\\). The bill is 7 less, and each apple substituted saves exactly 1 dollar — so there are 7 apples.\n" +
    "Working from the *dearer* baseline makes the substitution count fall out directly with no algebra.",
  traps: "(B) \\((6, 6)\\) splits evenly and costs \\(12 + 18 = 30\\) — one dollar too much.\n" +
    "(A) \\((5, 7)\\) is the pair reversed; more mangoes would raise the bill to 31.\n" +
    "(D) \\((8, 4)\\) costs 28 and (E) \\((9, 3)\\) costs 27.\n" +
    "The prices differ by only 1 dollar, so each distractor is exactly one dollar from its neighbour — the arithmetic must be exact, and checking the bill takes five seconds.",
  take: "Price the whole basket at one rate, then divide the discrepancy by the price difference. Verify the total before answering."
},

"di-twopart-ex#10": {
  steps: "Step 1 — Let \\(c\\) be chairs (3 kg each) and \\(t\\) tables (8 kg each), with \\(c + t = 20\\).\n" +
    "Step 2 — The wood used is \\(3c + 8t = 95\\).\n" +
    "Step 3 — Substitute \\(t = 20 - c\\): \\(3c + 8(20 - c) = 160 - 5c\\).\n" +
    "Step 4 — Set that equal to 95: \\(160 - 5c = 95\\), so \\(5c = 65\\) and \\(c = 13\\).\n" +
    "Step 5 — Then \\(t = 7\\), giving \\((13, 7)\\). Check: \\(39 + 56 = 95\\) ✓.",
  fast: "Twenty tables would use 160 kg; the batch used 95, a saving of 65. Each chair substituted for a table saves 5 kg, so \\(65 \\div 5 = 13\\) chairs.\n" +
    "The larger price gap (5 kg rather than 1 or 2) makes this version of the substitution method especially quick.",
  traps: "(A) \\((12, 8)\\) uses \\(36 + 64 = 100\\) kg, (C) \\((14, 6)\\) uses 90, (D) \\((15, 5)\\) uses 85 and (E) \\((11, 9)\\) uses 105.\n" +
    "Each distractor is off by exactly 5 kg from its neighbour, mirroring the difference between a chair and a table — so a single mis-step in the substitution count lands on one of them.\n" +
    "The reliable guard is to compute the wood total for your answer before selecting it; the arithmetic is two multiplications.",
  take: "Baseline everything at one rate, divide the discrepancy by the per-item difference, and verify the total afterwards."
},

"di-twopart-ex#11": {
  steps: "Step 1 — Let \\(x\\) be the amount at \\(6\\%\\), so \\(10{,}000 - x\\) is at \\(9\\%\\).\n" +
    "Step 2 — The combined interest is \\(0.06x + 0.09(10{,}000 - x) = 750\\).\n" +
    "Step 3 — Expand: \\(0.06x + 900 - 0.09x = 900 - 0.03x\\).\n" +
    "Step 4 — Set that equal to 750: \\(0.03x = 150\\), so \\(x = 5{,}000\\).\n" +
    "Step 5 — The other amount is also \\(5{,}000\\), giving \\((5000, 5000)\\). Check: \\(300 + 450 = 750\\) ✓.",
  fast: "Use the weighted-average lever. The blended rate is \\(750/10{,}000 = 7.5\\%\\), which sits exactly midway between \\(6\\%\\) and \\(9\\%\\)... in fact \\(7.5\\) is \\(1.5\\) from each, so the two amounts are equal.\n" +
    "That observation answers the question in one line, with no algebra at all.",
  traps: "(A) \\((3000, 7000)\\) gives \\(180 + 630 = 810\\) — too much interest.\n" +
    "(B) \\((4000, 6000)\\) gives \\(240 + 540 = 780\\), and (C) \\((4500, 5500)\\) gives \\(270 + 495 = 765\\).\n" +
    "(E) \\((6000, 4000)\\) gives \\(360 + 360 = 720\\) — too little.\n" +
    "The interest changes by 30 dollars for each 1,000 shifted, so the distractors march in even steps and only exact arithmetic separates them.\n" +
    "Note also that the blended rate of \\(7.5\\%\\) is the midpoint of 6 and 9, which is the tell for an equal split.",
  take: "Compute the blended rate and locate it between the two component rates; the amounts are inversely proportional to the distances. A midpoint rate means equal amounts."
},

"di-700-twopart#1": {
  steps: "Step 1 — Each day exactly three sequences fly and exactly 10 flights occur. The sequences have 3, 3, 3, 4 and 4 flights, and the only way three of them total 10 is \\(3 + 3 + 4\\).\n" +
    "Step 2 — So every day uses two of Sequences 1–3 and exactly one of Sequences 4–5.\n" +
    "Step 3 — City A: every sequence starts and ends at A, so each sequence flown contributes exactly one arrival in A. Three sequences a day means 3 arrivals a day, or \\(9\\) over three days.\n" +
    "Step 4 — City D: Sequence 1 (A-B-C-A) never reaches D. Each of Sequences 2, 3, 4 and 5 reaches D exactly once.\n" +
    "Step 5 — The sequence chosen from 4–5 always contributes one D arrival, every day.\n" +
    "Step 6 — Among Sequences 1–3, one sits idle each day. No sequence may be used more than 2 consecutive days, so across any 3 days each of the three must be idle at least once — and with only three idle slots, each is idle exactly once.\n" +
    "Step 7 — So Sequence 1 flies on two of the three days. On those days the 1–3 pair contributes 1 D arrival (from the non-Sequence-1 member); on the remaining day Sequences 2 and 3 both fly, contributing 2.\n" +
    "Step 8 — D totals \\((1+1) + (1+1) + (2+1) = 7\\), giving the pair \\((9, 7)\\).",
  fast: "Two structural facts do everything. First, \\(3+3+4\\) is the only way to reach 10 flights, which fixes the daily composition. Second, every sequence returns to A, so A's count is simply three per day.\n" +
    "For D, the only sequence that misses it is Sequence 1, so count how often Sequence 1 flies: the idle-rotation rule forces it to fly on exactly two of the three days.",
  traps: "(A) \\((9,9)\\) and (C) \\((9,6)\\) get City A right — that half is the easy one — but treat every day as identical for D. The days are not identical: which of Sequences 1–3 is idle changes D's count.\n" +
    "(B) \\((10,6)\\) and (E) \\((10,7)\\) give A ten arrivals, which would require four sequences in a day; only three fly.\n" +
    "The rule people under-use is \"no sequence idle 2 consecutive days\" combined with \"none used more than 2 consecutive days\" — together they force a clean rotation over any three-day window.",
  take: "Find the unique composition that satisfies the totals, then use scheduling rules to count how often each element appears. Days that look interchangeable often are not."
},

"di-700-twopart#2": {
  steps: "Step 1 — Employees are equally likely to use either payment method, so of the 400 beverages, 200 were paid with 3 small tokens and 200 with 1 large token.\n" +
    "Step 2 — Small tokens in: the 200 small-token purchases deposited \\(200 \\times 3 = 600\\).\n" +
    "Step 3 — Small tokens out: each large-token purchase returns 2 small tokens as change, so \\(200 \\times 2 = 400\\) left the machine.\n" +
    "Step 4 — Starting from the 50 small tokens left at servicing: \\(50 + 600 - 400 = 250\\) small tokens.\n" +
    "Step 5 — Large tokens: the machine started with none and received one per large-token purchase, with none ever returned — so 200.\n" +
    "Step 6 — The pair is \\((250, 200)\\).",
  fast: "Track each token type as a separate running balance, and remember that the large-token route moves tokens in *both* directions: one large in, two small out.\n" +
    "The 50-token starting balance applies only to the small tokens, and the large-token balance starts at zero — keeping those two ledgers separate is the whole discipline.",
  traps: "(A) \\((150, 400)\\) assumes all 400 purchases used large tokens.\n" +
    "(C) \\((650, 200)\\) adds the 600 small tokens deposited without subtracting the 400 paid out in change.\n" +
    "(D) \\((250, 400)\\) gets the small tokens right but doubles the large-token count, again treating all 400 sales as large-token payments.\n" +
    "(E) \\((450, 200)\\) miscounts the change, using 1 small token returned instead of 2.\n" +
    "The phrase \"equally likely\" is what splits 400 into 200 and 200 — without it the whole calculation would be indeterminate.",
  take: "Keep a separate ledger for each item type, and account for flows in both directions. Note which starting balance belongs to which ledger."
},

"di-700-twopart#3": {
  steps: "Step 1 — Let Segment A have length \\(L\\). Segment C is three times as long, so its length is \\(3L\\).\n" +
    "Step 2 — Time on A: \\(\\dfrac{L}{140}\\) hours. Time on C: \\(\\dfrac{3L}{70} = \\dfrac{6L}{140}\\) hours.\n" +
    "Step 3 — So Segment C takes six times as long as Segment A — three times the distance at half the speed.\n" +
    "Step 4 — Total: \\(\\dfrac{7L}{140} = \\dfrac{L}{20}\\) hours, and this equals 42 minutes \\(= 0.7\\) hours.\n" +
    "Step 5 — \\(L = 14\\) km, so Segment C is \\(42\\) km.\n" +
    "Step 6 — Check: \\(14/140 = 0.1\\) h \\(= 6\\) min; \\(42/70 = 0.6\\) h \\(= 36\\) min; total 42 min ✓.",
  fast: "Skip the algebra with a ratio argument: half the speed doubles the time per kilometre, and three times the distance triples it again — so Segment C takes \\(2 \\times 3 = 6\\) times as long as Segment A.\n" +
    "The 42 minutes therefore split \\(1 : 6\\), giving 6 minutes and 36 minutes, and the distances follow from each segment's speed.\n" +
    "Note that Segment B is a red herring — the question asks only about A and C, and their combined time is given directly.",
  traps: "(B), (C), (D) and (E) all preserve the \\(1 : 3\\) length ratio, so that condition eliminates nothing — only the 42-minute total separates them.\n" +
    "(B) \\((7, 21)\\) totals 21 minutes, (C) \\((21, 63)\\) totals 63, (D) \\((10, 30)\\) totals 30 and (E) \\((12, 36)\\) totals 36.\n" +
    "The trap is checking the ratio and stopping; every option passes that test by design.\n" +
    "Watch the units too: 42 *minutes* must become 0.7 hours before it meets speeds in km/h.",
  take: "Time scales as distance ÷ speed, so a longer, slower leg compounds both factors. When every option satisfies one condition, the other condition is the whole question."
},

"di-700-twopart#4": {
  steps: "Step 1 — In Fall 1999, \\(R\\) is students per faculty member, so \\(R = \\dfrac{5500}{\\text{faculty}}\\) and therefore faculty \\(= \\dfrac{5500}{R}\\).\n" +
    "Step 2 — Over five years students changed by \\(S\\) percent, so Spring 2004 students \\(= 5500 \\cdot \\dfrac{100 + S}{100}\\).\n" +
    "Step 3 — Faculty changed by \\(F\\) percent, so Spring 2004 faculty \\(= \\dfrac{5500}{R} \\cdot \\dfrac{100 + F}{100}\\).\n" +
    "Step 4 — Students per faculty member in Spring 2004 is the quotient: \\(\\dfrac{5500(100+S)/100}{(5500/R)(100+F)/100}\\).\n" +
    "Step 5 — The 5,500 and the 100 cancel, and dividing by \\(1/R\\) brings \\(R\\) into the numerator: \\(\\dfrac{R(100+S)}{100+F}\\).\n" +
    "Step 6 — The pair is \\(\\left(\\dfrac{5500}{R},\\ \\dfrac{R(100+S)}{100+F}\\right)\\).",
  fast: "Two checks decide this without algebra. First, \\(R\\) is students *per faculty*, so faculty is the total divided by \\(R\\) — not multiplied.\n" +
    "Second, a ratio of students to faculty grows when students grow and shrinks when faculty grow, so the student factor \\((100+S)\\) belongs on top and the faculty factor \\((100+F)\\) underneath.\n" +
    "Those two orientation checks eliminate every wrong option.",
  traps: "(A) and (C) multiply 5,500 by \\(R\\) instead of dividing — that would give students times students-per-faculty, which has no meaning.\n" +
    "(B) has the first expression right but inverts the ratio, putting the faculty change on top.\n" +
    "(D) inverts the first expression *and* drops the leading \\(R\\) from the second.\n" +
    "The reliable technique for expression questions is to test with numbers: set \\(R = 10\\), \\(S = 0\\), \\(F = 0\\) and confirm faculty is 550 and the 2004 ratio is 10.",
  take: "\"Per\" means divide: \\(R = \\text{students}/\\text{faculty}\\) gives faculty \\(= \\text{students}/R\\). In a ratio's growth factor, the numerator's change goes on top."
},

"di-700-twopart#5": {
  steps: "Step 1 — The statement to complete is \"Of those phones that ___, fewer than half ___\". Both blanks must refer to a group the passage actually describes.\n" +
    "Step 2 — The passage gives facts *within* two groups: dial pad phones and touch-screen-only phones. It gives nothing about the composition of groups defined by screen size, accessories or discount status.\n" +
    "Step 3 — Of the touch-screen-only phones, most are packaged with two or more accessories. \"Most\" means more than half.\n" +
    "Step 4 — If more than half of that group has two or more accessories, then fewer than half of the same group has fewer than two.\n" +
    "Step 5 — So \"Of those phones that are touch-screen-only, fewer than half are packaged with fewer than two accessories\" follows directly.",
  fast: "The passage describes each phone type from the inside out — it tells you how dial pad phones split, and how touch-screen-only phones split, but never how a screen-size or accessory group splits by type.\n" +
    "So the answer's first blank must name one of the two phone types, and the second blank must be the complement of a stated \"most\". That pattern identifies the answer almost mechanically.",
  traps: "(A) reverses a given: most dial pad phones *do* have two or more accessories, so more than half do, not fewer.\n" +
    "(B) asks how the discount group splits by phone type, which the passage never addresses — it only says most phones overall are discounted.\n" +
    "(D) asks how the large-screen group splits by phone type. The passage runs the other way: it tells you how each phone type splits by screen size, which does not invert.\n" +
    "(E) asks how the two-or-more-accessories group splits by screen size — again a reversal of the stated direction.\n" +
    "The recurring error is treating \"most of X are Y\" as though it implied \"most of Y are X\". It does not, because the groups can be very different sizes.",
  take: "\"Most of X are Y\" never implies \"most of Y are X\". Convert a stated \"most\" into \"fewer than half\" for its complement within the *same* group."
},

"di-700-twopart#6": {
  steps: "Step 1 — Identify the official's argument: because road salt loads soil with chloride and sodium at levels that inhibit bacterial and hence plant growth, sand should replace salt and salt yards should be eliminated.\n" +
    "Step 2 — To strengthen it, connect the documented soil damage to something that matters. Runoff from roads being absorbed by farmland does exactly that — it ties salt contamination to crop production, which is the harm the proposal would avert.\n" +
    "Step 3 — To weaken it, attack the proposed replacement rather than the evidence. If sand is much less effective than salt at making roads safe in winter, the proposal trades a soil problem for a safety problem it never accounts for.\n" +
    "Step 4 — So the strengthener is the farmland runoff and the weakener is sand's inferior performance, in that order.",
  fast: "Separate the argument's two vulnerable joints: the evidence-to-harm link, and the proposed alternative. A strengthener usually reinforces the first; a weakener usually attacks the second.\n" +
    "Then check the *order* the question asks for — strengthen first, weaken second — because the same two facts appear in reversed roles among the options.",
  traps: "(C) contains exactly the right two facts but assigns them to the wrong roles. On a two-part question, order is part of the answer, and this is the single most common way to lose the point.\n" +
    "(B) offers salt-yard cleanup costs as a strengthener — relevant only with extra assumptions — and accidents on *untreated* roads as a weakener, which misses the proposal entirely, since it treats roads with sand.\n" +
    "(D) brings in drinking-water contamination, which is never linked to the agricultural argument being made.\n" +
    "(E) assigns both facts to roles neither fits.\n" +
    "Reading the option pairs as unordered sets is fatal here; two options contain the same content in opposite orders.",
  take: "Strengtheners reinforce the evidence-to-conclusion link; weakeners attack the proposed remedy. On two-part questions the order of the pair is part of the answer."
},

"di-700-twopart#7": {
  steps: "Step 1 — The argument: each porcelain centre used a unique recipe, therefore compositional analysis will reveal where the next recovered cup was made.\n" +
    "Step 2 — The recipes distinguish *porcelain* centres, so the method identifies an origin only if the object analysed is porcelain.\n" +
    "Step 3 — The required assumption is therefore that the next cup recovered will be porcelain. Without it the conclusion simply does not follow — a cup of some other material matches no recipe.\n" +
    "Step 4 — Now, what would make that assumption more secure? A track record: if every cup recovered at this site so far has been porcelain, the next one probably will be too.\n" +
    "Step 5 — So the pair is (the next cup will be porcelain; all cups previously recovered here were porcelain), in that order.",
  fast: "Apply the negation test to find the assumption: if the next cup is *not* porcelain, the conclusion collapses — so that is the assumption the argument requires.\n" +
    "Then ask what evidence would support that particular claim, not the conclusion in general. Past composition at the same site is the natural support, which distinguishes the supporting fact from the assumption itself.",
  traps: "(A) contains the same two items with the roles swapped: the past record is the supporting fact, not the assumption. The assumption must be about the *next* cup, since that is what the conclusion is about.\n" +
    "(C) offers cost and sample size, which bear on feasibility rather than on whether the method can identify an origin.\n" +
    "(D) restates a premise — the passage already says the recipes are unique — and adds documentation, a separate requirement the argument does not depend on.\n" +
    "(E) names the right assumption but pairs it with a fact about the technique's resolution, which supports the *method*, not the assumption about the cup.\n" +
    "Two options contain the correct assumption, so the second half decides the question.",
  take: "Find a required assumption by negating a candidate and checking whether the conclusion fails. A supporting fact must support that assumption specifically, not the argument in general."
}

});
