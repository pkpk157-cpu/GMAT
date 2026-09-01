/* Rewritten explanations — simple and compound interest.

   Two ideas carry almost every question here. Under simple interest, the yearly
   interest is a constant, so two amounts at two dates give it by subtraction.
   Under compound interest, each year multiplies by the same factor, so ratios
   between consecutive years are the fastest way in. See expl-quant-percent.js
   for the format. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-interest-ex#1": {
  steps: "Step 1 — Under simple interest the same amount of interest is added every year, so the amount grows in a straight line.\n" +
    "Step 2 — Between year 2 and year 3½ — a span of 1.5 years — the amount rises by \\(1164 - 1008 = \\$156\\).\n" +
    "Step 3 — So one year's interest is \\(\\dfrac{156}{1.5} = \\$104\\).\n" +
    "Step 4 — Work back to the principal: at year 2 the amount included 2 years of interest, so \\(P = 1008 - 2(104) = \\$800\\).\n" +
    "Step 5 — Rate \\(= \\dfrac{104}{800} = 0.13 = 13\\%\\).",
  fast: "Two amounts at two dates give the annual interest by subtraction: \\(\\dfrac{1164 - 1008}{3.5 - 2} = 104\\) per year. Strip 2 years of it off 1,008 to get \\(P = 800\\), then \\(104/800 = 13\\%\\).\n" +
    "The whole method is \"difference in amounts ÷ difference in years\". It works only because simple interest is linear — never try it on compound interest.",
  traps: "(C) \\(12\\tfrac12\\%\\) is \\(100/800\\), what you get by rounding the annual interest to $100.\n" +
    "(E) \\(13\\tfrac12\\%\\) and (B) 14% are near-misses for anyone dividing 156 by 1.5 imprecisely or using 3½ years as the whole span.\n" +
    "(D) 15% would need $120 a year, which contradicts the $156 over 1.5 years.",
  take: "Simple interest is linear. Two amounts at two times give the annual interest by subtraction, and the principal is then the amount minus however many years of it have accrued."
},

"quant-interest-ex#2": {
  steps: "Step 1 — \"After a further 5 years\" puts the second reading at year 7, not year 5.\n" +
    "Step 2 — Interest earned over those 5 years: \\(1020 - 720 = \\$300\\).\n" +
    "Step 3 — Annual interest \\(= \\dfrac{300}{5} = \\$60\\).\n" +
    "Step 4 — At year 2 the amount was principal plus 2 years of interest: \\(P = 720 - 2(60) = \\$600\\).\n" +
    "Step 5 — Rate \\(= \\dfrac{60}{600} = 10\\%\\).",
  fast: "\\(\\dfrac{1020 - 720}{5} = 60\\) a year → \\(P = 720 - 120 = 600\\) → \\(60/600 = 10\\%\\).\n" +
    "Read \"a further 5 years\" carefully — it is the gap, and the gap is all the subtraction method needs.",
  traps: "(A) $500, 10% has the right rate with a principal that would make the year-2 amount $600, not $720.\n" +
    "(C) and (D) pair a principal with 12%, which is what you get if you treat the second reading as year 5 and divide 300 by 3.\n" +
    "(E) \"$700%\" is malformed and can be discarded on sight — a reminder to read the choices, not just the numbers.",
  take: "Watch the wording of the second date: \"after a further \\(n\\) years\" means \\(n\\) years [[more]], so the span between readings is \\(n\\), not the difference from zero."
},

"quant-interest-ex#3": {
  steps: "Step 1 — Simple interest is \\(\\dfrac{P \\cdot r \\cdot t}{100}\\), so a change in the rate changes the interest proportionally.\n" +
    "Step 2 — Raising the rate by 2 percentage points for 4 years adds \\(\\dfrac{P \\times 2 \\times 4}{100} = 0.08P\\).\n" +
    "Step 3 — That extra is $56: \\(0.08P = 56\\).\n" +
    "Step 4 — \\(P = \\dfrac{56}{0.08} = \\$700\\).",
  fast: "The extra interest is \\(P \\times 2\\% \\times 4 = 8\\%\\) of \\(P\\). \\(8\\%\\) of \\(P\\) is 56, so \\(1\\%\\) is 7 and \\(P = 700\\).\n" +
    "Notice what never mattered: the actual rate. Only the [[difference]] of 2 points appears, which is why the question can withhold the rate entirely.",
  traps: "(A) $500 and (B) $600 come from dividing 56 by \\(0.1\\) or by a mis-set multiplier.\n" +
    "(D) $800 is \\(56 \\div 0.07\\), i.e. using 7 years or a 1.75-point gap.\n" +
    "(E) $900 is the round-number decoy at the end of the list.\n" +
    "If you tried to find the original rate first, you would find it is not determinable — that impasse is the signal that only the difference is needed.",
  take: "A change in the simple-interest rate produces extra interest of \\(P \\times \\Delta r \\times t / 100\\). The original rate cancels out, so a question that omits it is telling you the difference is enough."
},

"quant-interest-ex#4": {
  steps: "Step 1 — Write the simple-interest formula: \\(SI = \\dfrac{P r t}{100}\\).\n" +
    "Step 2 — The question sets \\(SI = \\dfrac{16}{25}P\\) and tells you \\(r = t\\).\n" +
    "Step 3 — Substitute: \\(\\dfrac{P r^2}{100} = \\dfrac{16}{25}P\\).\n" +
    "Step 4 — \\(P\\) cancels: \\(\\dfrac{r^2}{100} = \\dfrac{16}{25}\\), so \\(r^2 = 64\\).\n" +
    "Step 5 — \\(r = 8\\), and since \\(r = t\\), that is 8% for 8 years.",
  fast: "With \\(r = t\\) the formula becomes \\(SI = \\dfrac{P r^2}{100}\\), so \\(\\dfrac{r}{10}\\) squared equals the fraction: \\(\\left(\\dfrac{r}{10}\\right)^2 = \\dfrac{16}{25}\\), giving \\(\\dfrac{r}{10} = \\dfrac45\\) and \\(r = 8\\).\n" +
    "Recognising \\(16/25\\) as \\((4/5)^2\\) is the whole shortcut — the fraction was chosen to be a perfect square.",
  traps: "(C) 10% for 10 years gives \\(SI = P\\), far more than \\(\\tfrac{16}{25}P\\); (D) 12% for 12 years gives \\(1.44P\\).\n" +
    "(B) 6% for 6 years gives \\(0.36P = \\tfrac{9}{25}P\\) — the square of \\(\\tfrac35\\), which is the trap for anyone who guesses at the square root.\n" +
    "(E) \"14%\" gives no number of years, so it cannot satisfy \\(r = t\\).\n" +
    "Backsolving works cleanly here: square each rate, divide by 100, and compare with \\(0.64\\).",
  take: "When rate and time are equal, \\(SI/P = (r/10)^2\\). Any fraction of the principal given in this question type will be a perfect square — spot it and the answer is immediate."
},

"quant-interest-ex#5": {
  steps: "Step 1 — Let \\(x\\) be the amount borrowed at 7%; then \\(2500 - x\\) is at 5%.\n" +
    "Step 2 — Over 2 years the total simple interest is \\(2\\left[0.07x + 0.05(2500 - x)\\right] = 275\\).\n" +
    "Step 3 — Divide by 2: \\(0.07x + 0.05(2500 - x) = 137.5\\).\n" +
    "Step 4 — Expand: \\(0.07x + 125 - 0.05x = 137.5\\), so \\(0.02x = 12.5\\).\n" +
    "Step 5 — \\(x = \\$625\\).",
  fast: "Alligation. If the whole $2,500 were at 5%, two years' interest would be \\(2 \\times 125 = \\$250\\). The actual interest is $275, i.e. $25 more.\n" +
    "Each dollar moved from 5% to 7% earns 2% extra per year, or 4% over two years. So the amount moved is \\(25 \\div 0.04 = \\$625\\).\n" +
    "One subtraction and one division, with no equation to expand.",
  traps: "(A) $600 and (C) $650 sit either side of the answer for anyone estimating; only $625 makes the interest come out to exactly $275.\n" +
    "(E) $700 would give \\(2[0.07(700) + 0.05(1800)] = \\$278\\) — close, which is precisely why the choices are tightly spaced.\n" +
    "(D) $675 gives \\(2[0.07(675) + 0.05(1825)] = \\$277\\). Each $50 moved from the 5% loan to the 7% loan adds exactly $2 of two-year interest, so every $25 step in the choices moves the interest by $1 — only $625 lands on $275.\n" +
    "The amount at 5% is $1,875, deliberately not offered: the question names the 7% portion in its last line.",
  take: "Alligation: assume everything sits at the lower rate, then divide the shortfall by the [[extra]] each dollar earns at the higher rate. It replaces a two-variable system with one division."
},

"quant-interest-ex#6": {
  steps: "Step 1 — Simple interest is \\(\\dfrac{P r t}{100}\\). With \\(P\\) and \\(r\\) fixed, \\(SI\\) is directly proportional to \\(t\\).\n" +
    "Step 2 — So the ratio of the interests is just the ratio of the times: \\(6 : 9\\).\n" +
    "Step 3 — Simplify by 3: \\(2 : 3\\).",
  fast: "Simple interest is linear in time, so the ratio is \\(6 : 9 = 2 : 3\\). One cancellation.\n" +
    "The principal and the rate are never given — and never needed — which is the clue that everything else cancels.",
  traps: "(E) \"Cannot be determined\" is the trap for anyone who thinks the missing principal and rate matter. They cancel in the ratio, so the answer is fully determined.\n" +
    "(A) 1 : 3 and (B) 1 : 4 come from comparing 6 to 18 or reading the years as a difference.\n" +
    "(D) 3 : 2 is the ratio reversed — the question asks for 6 years [[to]] 9 years, so the smaller number comes first.",
  take: "Under simple interest, doubling the time doubles the interest. Under [[compound]] interest it more than doubles — which is why this shortcut is one you must check the question type before using."
},

"quant-interest-ex#7": {
  steps: "Step 1 — Both loans carry the same rate \\(r\\), so add their interests.\n" +
    "Step 2 — \\(\\dfrac{5000 \\times r \\times 2}{100} + \\dfrac{3000 \\times r \\times 4}{100} = 2200\\).\n" +
    "Step 3 — \\(100r + 120r = 2200\\).\n" +
    "Step 4 — \\(220r = 2200\\), so \\(r = 10\\%\\).",
  fast: "Work in \"dollar-years\": \\(5000 \\times 2 = 10{,}000\\) and \\(3000 \\times 4 = 12{,}000\\), totalling 22,000 dollar-years.\n" +
    "Then \\(r = \\dfrac{2200}{22{,}000} = 10\\%\\).\n" +
    "Collapsing every loan to principal × time first turns any number of loans at a shared rate into a single division.",
  traps: "(A) 5% halves the answer — the result of using only one of the two loans.\n" +
    "(E) 8% and (C) \\(7\\tfrac18\\%\\) come from mixing up which principal goes with which duration (\\(5000 \\times 4\\) and \\(3000 \\times 2\\) gives 26,000 dollar-years and about 8.5%).\n" +
    "(B) 7% is the midpoint decoy.",
  take: "Several simple-interest loans at one rate: sum the principal × time products, then divide the total interest by that sum. The rate falls out in a single step."
},

"quant-interest-ex#8": {
  steps: "Step 1 — Let \\(b\\) be the amount in scheme B (11%); scheme A holds \\(13900 - b\\) at 14%.\n" +
    "Step 2 — Two years of simple interest: \\(2\\left[0.14(13900 - b) + 0.11b\\right] = 3508\\).\n" +
    "Step 3 — Divide by 2: \\(0.14(13900 - b) + 0.11b = 1754\\).\n" +
    "Step 4 — Expand: \\(1946 - 0.14b + 0.11b = 1754\\), so \\(0.03b = 192\\).\n" +
    "Step 5 — \\(b = \\$6{,}400\\).",
  fast: "Alligation again. All of it at 14% would give \\(0.14 \\times 13900 = \\$1{,}946\\) per year. Actual interest per year is \\(3508/2 = \\$1{,}754\\), which is $192 short.\n" +
    "Each dollar moved to scheme B costs 3 cents a year (14% − 11%), so \\(192 \\div 0.03 = \\$6{,}400\\) sits in B.\n" +
    "Halving the two-year total first is what keeps the numbers small enough to do mentally.",
  traps: "(D) $7,500 and (C) $7,200 are the amounts in [[scheme A]] under slightly wrong workings; scheme A actually holds \\(13900 - 6400 = \\$7{,}500\\), so (D) is the right arithmetic reported for the wrong scheme — the most likely way to lose this question.\n" +
    "(B) $6,500 is a rounded near-miss designed to catch anyone who divides 192 by 0.03 loosely.\n" +
    "(E) $7,800 fails a forward check: it would leave $6,100 in scheme A, and \\(2[0.14(6100) + 0.11(7800)] = \\$3{,}424\\) — eighty-four dollars short of the stated $3,508.",
  take: "Split-investment questions are alligation problems. And when both parts of the split appear among the choices — here 6,400 and 7,500 — re-read which one the question names before selecting."
},

"quant-interest-ex#9": {
  steps: "Step 1 — Equal interest from each part means \\(P_1 r_1 = P_2 r_2 = P_3 r_3\\) (the time is one year for all three).\n" +
    "Step 2 — So the principals are inversely proportional to the rates: \\(\\dfrac14 : \\dfrac16 : \\dfrac18\\).\n" +
    "Step 3 — Multiply through by 24 (the LCM) to clear fractions: \\(6 : 4 : 3\\).\n" +
    "Step 4 — Total parts \\(= 6 + 4 + 3 = 13\\), and \\(\\dfrac{2600}{13} = 200\\) per part.\n" +
    "Step 5 — The 4% portion is the largest: \\(6 \\times 200 = \\$1{,}200\\).",
  fast: "Equal interest → principals inverse to rates → \\(\\tfrac14 : \\tfrac16 : \\tfrac18 = 6 : 4 : 3\\), 13 parts in all.\n" +
    "\\(2600/13 = 200\\), so the 4% share is \\(6 \\times 200 = 1200\\).\n" +
    "That 2,600 divides by 13 is not a coincidence — spotting the 13 confirms you have the ratio right.",
  traps: "(B) $600 is the 8% portion (\\(3 \\times 200\\)) and (C) $800 is the 6% portion (\\(4 \\times 200\\)). Both are correct amounts for the wrong rate — the lowest rate needs the [[largest]] principal to keep the interest equal.\n" +
    "(A) $200 is one part.\n" +
    "(E) $1,600 overshoots; check by computing the interest: \\(4\\%\\) of 1,200 is $48, and \\(6\\%\\) of 800 and \\(8\\%\\) of 600 are both $48 too. ✓",
  take: "\"Equal interest from each part\" means principals inverse to rates. Invert, clear denominators, count parts — and remember the smallest rate takes the biggest slice."
},

"quant-interest-ex#10": {
  steps: "Step 1 — The blended rate is a weighted average of 10% and 20%, with the invested amounts as weights.\n" +
    "Step 2 — Let the amount at 20% be \\(y\\). Then \\(\\dfrac{0.10(12000) + 0.20y}{12000 + y} = 0.14\\).\n" +
    "Step 3 — Multiply out: \\(1200 + 0.2y = 0.14(12000 + y) = 1680 + 0.14y\\).\n" +
    "Step 4 — \\(0.06y = 480\\), so \\(y = \\$8{,}000\\).\n" +
    "Step 5 — The question asks for the [[total]]: \\(12{,}000 + 8{,}000 = \\$20{,}000\\).",
  fast: "Alligation on the rates. The blend at 14% sits 4 points above 10% and 6 points below 20%, so the amounts are in the ratio \\(6 : 4 = 3 : 2\\) (the distances swap sides).\n" +
    "The 10% investment is 3 parts \\(= \\$12{,}000\\), so one part is $4,000 and the total is 5 parts \\(= \\$20{,}000\\).\n" +
    "Drawing the alligation cross takes ten seconds and skips the algebra entirely.",
  traps: "(C) $24,000 comes from splitting the money evenly, which would give a blended rate of 15%, not 14%.\n" +
    "(B) $22,000 and (D) $25,000 are round decoys.\n" +
    "(E) $27,000 would put $15,000 at 20% and lift the blend to \\(\\dfrac{1200 + 3000}{27{,}000} \\approx 15.6\\%\\), overshooting the stated 14%.\n" +
    "$8,000 — the amount at 20% — is deliberately absent from the list, because the question asks for the total and answering with the part is the natural slip.",
  take: "Alligation: the weights are in the ratio of the [[opposite]] distances from the blend. A blend nearer the low rate means more money at the low rate."
},

"quant-interest-ex#11": {
  steps: "Step 1 — Over 2 years, compound interest exceeds simple interest by exactly the interest earned in year 2 on year 1's interest.\n" +
    "Step 2 — Year 1 interest is \\(Pr\\); the extra earned on it in year 2 is \\(Pr \\times r = Pr^2\\), where \\(r\\) is written as a decimal.\n" +
    "Step 3 — So \\(\\text{difference} = P r^2\\).\n" +
    "Step 4 — Substitute: \\(P(0.05)^2 = P(0.0025) = 6\\).\n" +
    "Step 5 — \\(P = \\dfrac{6}{0.0025} = \\$2{,}400\\).",
  fast: "For 2 years the gap is always \\(P\\left(\\dfrac{r}{100}\\right)^2\\). Here that is \\(P/400\\), so \\(P = 6 \\times 400 = 2{,}400\\).\n" +
    "Memorise the two-year forms: at 5% the difference is \\(P/400\\); at 10% it is \\(P/100\\). They turn this entire question type into one multiplication.",
  traps: "(D) $2,000 would give a difference of $5, and (C) $2,600 gives $6.50 — the choices are spaced to punish anyone who rounds \\(0.0025\\).\n" +
    "(A) $2,200 and (E) $2,800 bracket the answer.\n" +
    "A common error is using \\(r\\) as 5 rather than 0.05 and getting \\(P = 6/25\\), a number so small it flags itself.",
  take: "Two-year CI − SI \\(= P(r/100)^2\\); three-year is \\(P(r/100)^2\\left(3 + \\dfrac{r}{100}\\right)\\). The two-year formula is worth knowing cold — it appears constantly."
},

"quant-interest-ex#12": {
  steps: "Step 1 — Use the two-year difference formula: \\(\\text{CI} - \\text{SI} = P\\left(\\dfrac{r}{100}\\right)^2\\).\n" +
    "Step 2 — Substitute \\(P = 4000\\) and \\(r = 5\\): \\(4000 \\times (0.05)^2 = 4000 \\times 0.0025\\).\n" +
    "Step 3 — \\(= \\$10\\).\n" +
    "Step 4 — Confirm the long way: SI \\(= 4000 \\times 0.05 \\times 2 = \\$400\\); CI \\(= 4000(1.05)^2 - 4000 = 4410 - 4000 = \\$410\\). The gap is $10. ✓",
  fast: "\\(P/400 = 4000/400 = \\$10\\).\n" +
    "This is the same relationship as the previous question run forwards instead of backwards — recognising that saves the entire compound calculation.",
  traps: "(A) $20 doubles the answer, as though the second-year interest-on-interest happened twice.\n" +
    "(C) $50 is 5% of $1,000, a stray application of the rate.\n" +
    "(D) $60 and (E) $70 are there for anyone guessing that the gap should be \"a bit more\" without computing.\n" +
    "The gap over two years is always small — roughly \\(r\\%\\) of one year's interest — so any large-looking choice is suspect.",
  take: "The two-year CI–SI gap is one year's interest earned on the first year's interest: small, and exactly \\(P(r/100)^2\\)."
},

"quant-interest-ex#13": {
  steps: "Step 1 — Compound growth multiplies by the same factor each year, so doubling times stack multiplicatively.\n" +
    "Step 2 — In 5 years the sum becomes \\(2 \\times\\) itself.\n" +
    "Step 3 — In another 5 years it doubles again: \\(4 \\times\\) after 10 years.\n" +
    "Step 4 — In another 5: \\(8 \\times\\) after 15 years.\n" +
    "Step 5 — So 15 years.",
  fast: "\\(8 = 2^3\\), so you need three doubling periods: \\(3 \\times 5 = 15\\) years.\n" +
    "Any \"doubles in \\(n\\) years, when does it become \\(2^k\\)\" question is answered by \\(k \\times n\\). No rate, no formula.",
  traps: "(B) 20 years and (C) 25 years come from treating the growth as [[simple]], where becoming 8 times takes far longer and the periods do not stack this way.\n" +
    "(D) 30 and (E) 35 extend the same error.\n" +
    "Note the contrast with question 17 in this set, which asks the same shape of question under simple interest and has a completely different answer — the test writers rely on you not checking which regime you are in.",
  take: "Compound: multiples multiply, so \\(2^k\\) times takes \\(k\\) doubling periods. Simple: interest adds, so \\(k\\) times the principal takes a proportional number of years. Always check which one you are given."
},

"quant-interest-ex#14": {
  steps: "Step 1 — Doubling means the interest earned equals the principal: \\(SI = P\\).\n" +
    "Step 2 — Simple interest formula: \\(P = \\dfrac{P \\times r \\times 8}{100}\\).\n" +
    "Step 3 — \\(P\\) cancels: \\(1 = \\dfrac{8r}{100}\\).\n" +
    "Step 4 — \\(r = \\dfrac{100}{8} = 12.5\\%\\).",
  fast: "Under simple interest, doubling in \\(n\\) years means \\(r = \\dfrac{100}{n}\\). Here \\(100/8 = 12.5\\%\\).\n" +
    "The principal always cancels, which is why the question never gives you one.",
  traps: "(A) 10% would double the sum in 10 years, not 8.\n" +
    "(D) 20% doubles it in 5 years — a good check on whether you have the relationship the right way up: [[fewer]] years needs a [[higher]] rate.\n" +
    "(C) 15% and (E) 23% are spaced to catch estimates; note that a compound rate doubling in 8 years would be about 9%, so if you accidentally used compounding you would land nowhere near the list.",
  take: "Simple interest, doubling in \\(n\\) years → \\(r = 100/n\\); tripling → \\(r = 200/n\\). Rate and time are inversely proportional here."
},

"quant-interest-ex#15": {
  steps: "Step 1 — Under compound interest each year's balance is \\(1.08\\) times the previous year's.\n" +
    "Step 2 — The interest earned in a year is 8% of that year's opening balance, so successive years' interest amounts are also in the ratio \\(1.08\\).\n" +
    "Step 3 — Therefore \\(\\text{CI}_{4} = 1.08 \\times \\text{CI}_{3}\\).\n" +
    "Step 4 — \\(486 = 1.08 \\times \\text{CI}_3\\), so \\(\\text{CI}_3 = \\dfrac{486}{1.08} = \\$450\\).",
  fast: "Each year's interest is the previous year's interest grown by the same 8%, so just divide: \\(486 \\div 1.08 = 450\\).\n" +
    "\\(486/1.08 = 48600/108 = 450\\) — clearing the decimal makes it a one-line division.\n" +
    "The principal is never needed, and is not recoverable from what you are given, which tells you the ratio route is the intended one.",
  traps: "(C) $456 is \\(486 - 30\\), the result of subtracting a rough 8% of the wrong base — subtracting 8% of 486 gives about 447, close enough to 450 to be dangerous.\n" +
    "(E) $519 is \\(486 \\times 1.08\\), the right operation in the wrong direction: the [[earlier]] year has the smaller interest.\n" +
    "(B) $475 and (D) $500 are round decoys.",
  take: "Under compound interest, consecutive years' interest amounts form a geometric sequence with the same ratio as the balances. Going back a year means dividing by \\(1 + r\\), not subtracting \\(r\\%\\)."
},

"quant-interest-ex#16": {
  steps: "Step 1 — Simple interest is \\(SI = \\dfrac{P \\cdot r \\cdot t}{100}\\), with no compounding: each year earns the same amount.\n" +
    "Step 2 — One year's interest: \\(5\\%\\) of $2,000 \\(= \\$100\\).\n" +
    "Step 3 — Three years: \\(3 \\times 100 = \\$300\\).",
  fast: "5% of 2,000 is 100, so three years is 300. Find one year's interest and multiply — under simple interest that is always valid.\n" +
    "Note that compound interest here would be \\(2000(1.05)^3 - 2000 = \\$315.25\\), which is why (C) $315 is on the list.",
  traps: "(C) $315 is very close to the [[compound]] interest for the same terms ($315.25). It is the choice for anyone who reaches for \\((1.05)^3\\) out of habit.\n" +
    "(A) $250 is two and a half years' worth; (D) $330 and (E) $350 overshoot.\n" +
    "Reading which regime you are in is the only real decision in this question.",
  take: "Simple interest: one year's interest × number of years. Compound interest on the same numbers is always a little more — and the \"little more\" is usually sitting in the answer choices."
},

"quant-interest-ex#17": {
  steps: "Step 1 — Doubling under simple interest means the interest earned equals the principal, i.e. \\(SI = P\\) in 8 years.\n" +
    "Step 2 — So each year earns \\(\\dfrac{P}{8}\\).\n" +
    "Step 3 — Tripling means the interest earned equals \\(2P\\).\n" +
    "Step 4 — Time needed: \\(2P \\div \\dfrac{P}{8} = 16\\) years.",
  fast: "Under simple interest the interest accumulates in equal annual slices. It took 8 years to add one principal; adding a second takes another 8. Total 16 years.\n" +
    "The mental model is a straight line, not a curve — which is exactly the difference from question 13 in this set.",
  traps: "(A) 12 is what you get by scaling 8 by \\(3/2\\), treating \"triple\" as half again as much work rather than twice as much.\n" +
    "(D) 24 is \\(3 \\times 8\\), forgetting that the original principal is already there at time zero — you need two more principals, not three.\n" +
    "(C) 20 sits between the two errors; (E) 8 ignores the question.",
  take: "Simple interest, \\(k\\) times the principal: the interest needed is \\((k-1)P\\), so the time is \\((k-1)\\) doubling-equivalents. Doubling in 8 → tripling in 16, quadrupling in 24."
},

"quant-interest-ex#18": {
  steps: "Step 1 — Compound interest for 2 years: \\(A = P(1 + r)^2\\), and \\(CI = A - P\\).\n" +
    "Step 2 — \\(A = 10{,}000 \\times (1.1)^2 = 10{,}000 \\times 1.21 = \\$12{,}100\\).\n" +
    "Step 3 — \\(CI = 12{,}100 - 10{,}000 = \\$2{,}100\\).",
  fast: "Year by year: \\(10{,}000 \\to 11{,}000 \\to 12{,}100\\). The interest is $1,000 then $1,100, totalling $2,100.\n" +
    "Doing it year by year takes the same time as squaring 1.1 and shows you the structure — the second year earns $100 more precisely because it is charged on the first year's interest.",
  traps: "(A) $2,000 is the [[simple]] interest for the same terms; the $100 gap between it and the right answer is the entire point of the question, and matches the \\(P(r/100)^2 = 10{,}000/100 = \\$100\\) formula.\n" +
    "(D) $1,100 is the second year's interest alone; (E) $1,000 is the first year's.\n" +
    "(C) $2,200 doubles the second-year bonus.",
  take: "\\((1.1)^2 = 1.21\\) is worth memorising, along with \\((1.1)^3 = 1.331\\). And the CI–SI gap over two years at 10% is always exactly \\(P/100\\)."
},

"quant-interest-ex#19": {
  steps: "Step 1 — Use the two-year difference formula: \\(\\text{CI} - \\text{SI} = P\\left(\\dfrac{r}{100}\\right)^2\\).\n" +
    "Step 2 — At \\(r = 10\\): \\(P(0.1)^2 = 0.01P\\).\n" +
    "Step 3 — Set equal to the given gap: \\(0.01P = 50\\).\n" +
    "Step 4 — \\(P = \\$5{,}000\\).\n" +
    "Step 5 — Check: SI \\(= \\$1{,}000\\); CI \\(= 5000(1.21) - 5000 = \\$1{,}050\\). The gap is $50. ✓",
  fast: "At 10%, the two-year gap is exactly \\(P/100\\) — one percent of the principal. So \\(P = 100 \\times 50 = \\$5{,}000\\).\n" +
    "This is the cleanest case of the formula and is worth holding in memory: [[at 10%, the two-year CI–SI difference is 1% of the principal]].",
  traps: "(B) $2,500 halves the answer; (E) $2,000 comes from using \\(r = 0.05\\).\n" +
    "(C) $10,000 doubles it — the error of taking the gap as \\(0.005P\\).\n" +
    "(D) $4,000 is a near-miss that gives a $40 gap, which a quick forward check disposes of.",
  take: "Recognise the CI–SI two-year gap on sight. At 5% it is \\(P/400\\); at 10%, \\(P/100\\); at 20%, \\(P/25\\). Each one turns the question into a single multiplication."
},

"quant-interest-ex#20": {
  steps: "Step 1 — \"8% compounded quarterly\" means the rate per [[quarter]] is \\(\\dfrac{8\\%}{4} = 2\\%\\), so each quarter multiplies by \\(1.02\\).\n" +
    "Step 2 — In \\(x\\) years there are \\(4x\\) quarters, so the growth factor is \\((1.02)^{4x}\\).\n" +
    "Step 3 — Increasing by a factor of 16 means \\(16 = (1.02)^{4x}\\).\n" +
    "Step 4 — That exact form is not among the choices, so simplify. Take the fourth root of both sides: \\(16^{1/4} = 2\\) and \\(\\left[(1.02)^{4x}\\right]^{1/4} = (1.02)^{x}\\).\n" +
    "Step 5 — So \\(2 = (1.02)^{x}\\), which is choice (B).",
  fast: "Write the honest equation first — \\(16 = (1.02)^{4x}\\) — then notice \\(16 = 2^4\\). Taking the fourth root of both sides gives \\(2 = (1.02)^x\\) immediately.\n" +
    "This question is really testing two things: that quarterly compounding divides the rate by 4 and multiplies the periods by 4, and that you will keep looking when your equation is not on the list.",
  traps: "(C) \\(16 = (1.08)^{4x}\\) keeps the annual rate while quadrupling the periods — it compounds 8% four times a year and overstates the growth badly.\n" +
    "(A) and (D) use \\(x/4\\) instead of \\(4x\\), inverting the relationship between years and quarters.\n" +
    "(E) inverts the growth factor to \\(\\tfrac{1}{16}\\), describing a decline.\n" +
    "Only two of the five even have the periods pointing the right way, and (C) is the one of those with the wrong rate — so the field narrows fast.",
  take: "Compounded \\(k\\) times a year: divide the rate by \\(k\\), multiply the periods by \\(k\\). If your equation is not among the choices, look for a root or a power that transforms it — the test often lists an equivalent form rather than yours."
}

});
