/* Rewritten explanations — quant-700-rates (700-level rates, growth and clocks).

   These are the hardest questions in the bank on rate and growth. The recurring
   wins: add rates rather than times; convert a compound-growth question into a
   per-period multiplier and find it by taking a root; and on clock questions,
   work with the minute hand's gain of 5.5 degrees per minute over the hour hand. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-700-rates#1": {
  steps: "Step 1 — Rates add when machines work at the same time: \\(35 + 55 = 90\\) copies per minute.\n" +
    "Step 2 — Convert the time to the same unit: half an hour is 30 minutes.\n" +
    "Step 3 — \\(90 \\times 30 = 2{,}700\\) copies.",
  fast: "Add the rates, multiply by the minutes: \\(90 \\times 30 = 2{,}700\\).\n" +
    "The only real hazard is the unit — \"half an hour\" must become 30 minutes because the rates are per minute.",
  traps: "(A) 90 is the combined rate, not the output — the answer if you never multiply by the time.\n" +
    "(D) 5,400 uses 60 minutes instead of 30, reading \"half an hour\" as a full one.\n" +
    "(E) 324,000 multiplies by 3,600 seconds, mixing minutes and seconds.\n" +
    "(C) 4,500 comes from a mis-set rate.",
  take: "Rates add; times do not. Then check that the rate's time unit matches the period you are multiplying by — most errors in this topic are unit errors, not arithmetic ones."
},

"quant-700-rates#2": {
  steps: "Step 1 — Convert to rates: Tom \\(\\dfrac16\\), Peter \\(\\dfrac13\\), John \\(\\dfrac12\\) of the room per hour.\n" +
    "Step 2 — Hour 1, Tom alone: \\(\\dfrac16\\) done. Remaining \\(\\dfrac56\\).\n" +
    "Step 3 — Hour 2, Tom and Peter: \\(\\dfrac16 + \\dfrac13 = \\dfrac12\\). Total done \\(= \\dfrac16 + \\dfrac12 = \\dfrac23\\). Remaining \\(\\dfrac13\\).\n" +
    "Step 4 — All three together work at \\(\\dfrac16 + \\dfrac13 + \\dfrac12 = 1\\) room per hour, so the last \\(\\dfrac13\\) takes \\(\\dfrac13\\) of an hour.\n" +
    "Step 5 — Now total only [[Peter's]] contribution. Hour 2: \\(\\dfrac13 \\times 1 = \\dfrac13\\). Final phase: \\(\\dfrac13 \\times \\dfrac13 = \\dfrac19\\).\n" +
    "Step 6 — Peter's share \\(= \\dfrac13 + \\dfrac19 = \\dfrac49\\).",
  fast: "Track the phases to find how long Peter actually works — 1 hour plus \\(\\tfrac13\\) of an hour — then multiply by his rate: \\(\\dfrac43 \\times \\dfrac13 = \\dfrac49\\).\n" +
    "That the three together do exactly 1 room per hour is the gift in this question: the last phase's length falls out with no division.\n" +
    "Notice you never need the whole timeline, only Peter's working time.",
  traps: "(C) \\(\\tfrac13\\) is Peter's hour-2 contribution alone, stopping before the final phase.\n" +
    "(A) \\(\\tfrac19\\) is the final phase alone.\n" +
    "(D) \\(\\tfrac7{18}\\) is a plausible-looking near-miss for anyone mis-timing the last stretch.\n" +
    "(B) \\(\\tfrac16\\) is Tom's rate, lifted from the setup.",
  take: "In multi-phase work problems, identify whose contribution is asked for and total only that person's time × rate. Rates that sum to exactly 1 are deliberate — they make the final phase trivial."
},

"quant-700-rates#3": {
  steps: "Step 1 — Let \\(s\\), \\(e\\), \\(f\\) be the hourly rates of a smurf, elf and fairy.\n" +
    "Step 2 — Translate each sentence:\n" +
    "\\(s + e = \\dfrac12\\); \\(s + 2f = \\dfrac12\\); \\(e + f = \\dfrac14\\).\n" +
    "Step 3 — The first two have the same right-hand side, so \\(e = 2f\\).\n" +
    "Step 4 — Substitute into the third: \\(2f + f = \\dfrac14\\), so \\(f = \\dfrac{1}{12}\\) and \\(e = \\dfrac16\\).\n" +
    "Step 5 — Then \\(s = \\dfrac12 - \\dfrac16 = \\dfrac13\\).\n" +
    "Step 6 — Together: \\(\\dfrac13 + \\dfrac16 + \\dfrac{1}{12} = \\dfrac{4 + 2 + 1}{12} = \\dfrac{7}{12}\\).\n" +
    "Step 7 — Time \\(= \\dfrac{12}{7}\\) hours.",
  fast: "The shortcut is spotting that the first two conditions share a right-hand side, so \\(e = 2f\\) immediately — no elimination needed.\n" +
    "From there the third equation gives \\(f\\) in one line.\n" +
    "Sanity check at the end: the trio is faster than any pair, so the answer must be under 2 hours — which eliminates (E) at once.",
  traps: "(E) \\(\\tfrac{22}{7}\\) is longer than the two-hour pair time, impossible when a third worker joins.\n" +
    "(C) \\(\\tfrac{10}{7}\\) and (A) \\(\\tfrac57\\) come from a slip in combining the three rates.\n" +
    "(B) 1 hour is the round decoy — it would need a combined rate of exactly 1.",
  take: "Two equations with the same right-hand side give a direct relationship between their differing terms. And always bound the answer: adding a worker must reduce the time below any pair's."
},

"quant-700-rates#4": {
  steps: "Step 1 — Time at the original rate for the whole job: \\(\\dfrac{80}{x}\\) weeks. That is the denominator of the fraction asked for.\n" +
    "Step 2 — Actual time, phase 1: \\(y\\) houses at \\(x\\) per week \\(= \\dfrac{y}{x}\\).\n" +
    "Step 3 — Phase 2: \\(80 - y\\) houses at \\(1.25x\\) per week \\(= \\dfrac{80-y}{1.25x} = \\dfrac{0.8(80-y)}{x}\\).\n" +
    "Step 4 — Total actual time \\(= \\dfrac{y + 0.8(80-y)}{x} = \\dfrac{y + 64 - 0.8y}{x} = \\dfrac{0.2y + 64}{x}\\).\n" +
    "Step 5 — The fraction: \\(\\dfrac{(0.2y + 64)/x}{80/x} = \\dfrac{0.2y + 64}{80}\\).\n" +
    "Step 6 — Divide through: \\(0.0025y + 0.8\\).",
  fast: "The \\(x\\) cancels — so set \\(x = 1\\) to remove it from sight, and test a convenient \\(y\\).\n" +
    "Take \\(y = 80\\) (all houses at the original rate): the fraction must be exactly 1. Check the choices: (B) gives \\(0.8 + 0.2 = 1\\) ✓, while (A) gives 0, (C) gives \\(-0.25\\), (D) gives 0.8 and (E) gives 60.\n" +
    "One well-chosen extreme value eliminates four choices instantly.",
  traps: "(D) \\(\\dfrac{80}{1.25y}\\) is the answer if you imagine [[all]] the houses done at the faster rate.\n" +
    "(A) \\(0.8(80-y)\\) is the phase-2 time without dividing by the original total.\n" +
    "(C) and (E) are dimensionally wrong — a fraction of a time cannot grow without bound as \\(y\\) changes.",
  take: "For algebraic-answer questions, plug in an extreme value that makes the answer obvious — here \\(y = 80\\) forces the fraction to 1. Testing beats deriving, and it catches sign errors."
},

"quant-700-rates#5": {
  steps: "Step 1 — Find Lexy's average speed for the round trip. Average speed is total distance over total time, never the average of the two speeds.\n" +
    "Step 2 — Out: 5 miles in 1 hour. Back: 5 miles at 15 mph \\(= \\dfrac13\\) hour.\n" +
    "Step 3 — Total: 10 miles in \\(\\dfrac43\\) hours, so Lexy averages \\(10 \\div \\dfrac43 = 7.5\\) mph.\n" +
    "Step 4 — Ben's average is half of that: \\(3.75\\) mph.\n" +
    "Step 5 — Ben's time for the same 10 miles: \\(\\dfrac{10}{3.75} = \\dfrac83\\) hours.\n" +
    "Step 6 — In minutes: \\(\\dfrac83 \\times 60 = 160\\).",
  fast: "Halving the average speed exactly doubles the time, so Ben takes twice Lexy's \\(\\dfrac43\\) hours \\(= \\dfrac83\\) hours \\(= 160\\) minutes.\n" +
    "You never need Ben's speed as a number. Recognising the inverse relationship turns the last three steps into one.",
  traps: "(B) 80 minutes is Lexy's own round-trip time (\\(\\tfrac43\\) hours) — the value computed on the way.\n" +
    "(C) 120 minutes comes from averaging 5 and 15 to get 10 mph, then halving to 5 mph — the arithmetic-mean error that this question exists to punish.\n" +
    "(E) 180 and (A) 40 are round decoys.",
  take: "Round-trip average speed is the harmonic mean, always below the arithmetic mean. And half the speed means exactly double the time — no need to compute the halved speed itself."
},

"quant-700-rates#6": {
  steps: "Step 1 — Set the clock from the moment [[Tom]] starts. Let \\(T\\) be Tom's elapsed time in hours.\n" +
    "Step 2 — Linda started an hour earlier, so she has been walking for \\(T + 1\\) hours: her distance is \\(2(T+1)\\).\n" +
    "Step 3 — Tom's distance is \\(6T\\).\n" +
    "Step 4 — First condition, Tom covers half Linda's distance:\n" +
    "\\(6T = \\dfrac{2(T+1)}{2} = T + 1\\), so \\(5T = 1\\) and \\(T = \\dfrac15\\) hour \\(= 12\\) minutes.\n" +
    "Step 5 — Second condition, Tom covers twice Linda's distance:\n" +
    "\\(6T = 2 \\cdot 2(T+1) = 4T + 4\\), so \\(2T = 4\\) and \\(T = 2\\) hours \\(= 120\\) minutes.\n" +
    "Step 6 — Positive difference: \\(120 - 12 = 108\\) minutes.",
  fast: "Both conditions are the same equation with a different multiplier, so set it up once: \\(6T = k \\cdot 2(T+1)\\) with \\(k = \\tfrac12\\) and \\(k = 2\\).\n" +
    "That gives \\(T = \\dfrac{2k}{6 - 2k}\\), so \\(T = \\dfrac15\\) and \\(T = 2\\).\n" +
    "The head start is the whole difficulty — Linda's time is always Tom's plus one, and the opposite directions never matter because only distances are compared.",
  traps: "(A) 60 is the head start itself, a number sitting in the stem.\n" +
    "(B) 72 is the first crossing measured from [[Linda's]] start: \\(12 + 60\\).\n" +
    "(C) 84 and (D) 90 are fillers between the plausible mis-clockings — any mishandled \\(T+1\\) lands nearby.",
  take: "With a staggered start, write both distances in terms of one person's clock. And note that \"opposite directions\" is scenery here — the question compares distances, not the gap between them."
},

"quant-700-rates#7": {
  steps: "Step 1 — Find the driving distance. 45 minutes is \\(\\dfrac34\\) hour at 40 mph: \\(40 \\times \\dfrac34 = 30\\) miles.\n" +
    "Step 2 — The bike route is 20% shorter: \\(30 \\times 0.8 = 24\\) miles.\n" +
    "Step 3 — Biking time depends on her speed, which is between 12 and 16 mph:\n" +
    "at 16 mph, \\(\\dfrac{24}{16} = 1.5\\) hours \\(= 90\\) minutes;\n" +
    "at 12 mph, \\(\\dfrac{24}{12} = 2\\) hours \\(= 120\\) minutes.\n" +
    "Step 4 — To [[ensure]] she arrives on time she must plan for the slowest case, 120 minutes.\n" +
    "Step 5 — She currently allows 45 minutes, so she must leave \\(120 - 45 = 75\\) minutes earlier.",
  fast: "Two shortcuts. First, the word \"ensure\" means take the worst case — the slowest speed, 12 mph. Second, the answer is the [[difference]] between the two journey times, not the biking time itself.\n" +
    "\\(24/12 = 2\\) hours; \\(120 - 45 = 75\\) minutes.\n" +
    "Getting either of those two readings wrong lands you on a specific wrong choice, which is exactly how the list is built.",
  traps: "(B) 105 uses the full 30-mile distance: 30 miles at 12 mph is 150 minutes, and \\(150 - 45 = 105\\). (A) 135 pushes the same slip one step further.\n" +
    "(E) 45 is the fast-case answer, \\(90 - 45\\) — planning around 16 mph cannot [[ensure]] anything. (C) 95 is a filler.\n" +
    "Choosing 16 mph gives \\(90 - 45 = 45\\) minutes — choice (E) — which is why the fast case is on the list.",
  take: "\"To ensure\" always means plan for the worst case. And check whether the question wants the new duration or the [[extra]] time — both will be among the choices."
},

"quant-700-rates#8": {
  steps: "Step 1 — Let the total distance be \\(D\\). She covers \\(\\dfrac{xD}{100}\\) at 60 mph and \\(\\dfrac{(100-x)D}{100}\\) at 50 mph.\n" +
    "Step 2 — Total time \\(= \\dfrac{xD}{6000} + \\dfrac{(100-x)D}{5000}\\).\n" +
    "Step 3 — Put over 30,000: \\(\\dfrac{5xD + 6(100-x)D}{30000} = \\dfrac{D(600 - x)}{30000}\\).\n" +
    "Step 4 — Average speed \\(= \\dfrac{D}{\\text{time}} = \\dfrac{30000}{600 - x}\\).\n" +
    "Step 5 — The numerator is 30,000.",
  fast: "The \\(D\\) always cancels, so set \\(D = 100\\) to make the percentages into miles.\n" +
    "Time \\(= \\dfrac{x}{60} + \\dfrac{100-x}{50}\\). The common denominator is 300, giving \\(\\dfrac{5x + 600 - 6x}{300} = \\dfrac{600-x}{300}\\), so the average speed is \\(\\dfrac{100 \\times 300}{600-x} = \\dfrac{30000}{600-x}\\).\n" +
    "A sanity check: at \\(x = 0\\) this gives 50 and at \\(x = 100\\) it gives 60 — both correct, which confirms the expression.",
  traps: "(C) 1,100 and (A) 110 come from adding the two speeds somewhere — the arithmetic-mean instinct.\n" +
    "(B) 300 and (D) 3,000 are the intermediate denominators from the working, off by a factor of 10 or 100.\n" +
    "The endpoint check disposes of all four: only \\(30{,}000/(600-x)\\) returns 50 and 60 at the extremes.",
  take: "When a variable cancels, substitute a convenient value for it. And test any algebraic answer at its extremes — here \\(x = 0\\) and \\(x = 100\\) must return the two given speeds."
},

"quant-700-rates#9": {
  steps: "Step 1 — Convert every clock into a rate relative to [[real]] time, one at a time.\n" +
    "Step 2 — Clock 1 loses 15 minutes an hour, so it runs at \\(\\dfrac{45}{60} = 0.75\\) of real time.\n" +
    "Step 3 — Clock 2 gains 15 minutes per hour of Clock 1, so it runs at \\(\\dfrac{75}{60}\\) of Clock 1: \\(1.25 \\times 0.75 = 0.9375\\) of real time.\n" +
    "Step 4 — Clock 3 loses 20 minutes per hour of Clock 2: \\(\\dfrac{40}{60} \\times 0.9375 = \\dfrac23 \\times 0.9375 = 0.625\\).\n" +
    "Step 5 — Clock 4 gains 20 minutes per hour of Clock 3: \\(\\dfrac{80}{60} \\times 0.625 = \\dfrac43 \\times 0.625 = 0.8333\\).\n" +
    "Step 6 — After 6 real hours Clock 4 shows \\(6 \\times 0.8333 = 5\\) hours, i.e. 5:00.",
  fast: "Multiply the four factors in one line: \\(\\dfrac{45}{60} \\times \\dfrac{75}{60} \\times \\dfrac{40}{60} \\times \\dfrac{80}{60}\\).\n" +
    "In fractions that is \\(\\dfrac34 \\times \\dfrac54 \\times \\dfrac23 \\times \\dfrac43 = \\dfrac{5}{6}\\), and \\(6 \\times \\dfrac56 = 5\\) hours.\n" +
    "The cancellation is dramatic because each clock's rate is defined [[relative to the previous one]] — so the factors chain, and reading that correctly is the entire question.",
  traps: "(D) 6:00 assumes the gains and losses cancel — they nearly look symmetric, but they are percentages of different bases.\n" +
    "(B) 5:34 and (C) 5:42 are near-miss fillers — chains with only some of the four factors applied correctly land between 5:00 and 6:00.\n" +
    "(E) 6:24 has Clock 4 running fast, which the chain does not support.",
  take: "\"Gains \\(m\\) minutes per hour [[relative to]] another clock\" means multiply that clock's rate by \\(\\dfrac{60+m}{60}\\). Chain the factors and cancel — never add and subtract the minutes."
},

"quant-700-rates#10": {
  steps: "Step 1 — Set up angles from 12 o'clock. At 7:00 the hour hand is at \\(7 \\times 30 = 210°\\) and the minute hand at \\(0°\\).\n" +
    "Step 2 — Per minute, the minute hand moves \\(6°\\) and the hour hand \\(0.5°\\).\n" +
    "Step 3 — After \\(t\\) minutes: hour hand at \\(210 + 0.5t\\), minute hand at \\(6t\\).\n" +
    "Step 4 — The first perpendicular after 7:00 has the hour hand still ahead by \\(90°\\):\n" +
    "\\((210 + 0.5t) - 6t = 90\\).\n" +
    "Step 5 — \\(210 - 5.5t = 90\\), so \\(5.5t = 120\\).\n" +
    "Step 6 — \\(t = \\dfrac{120}{5.5} = \\dfrac{240}{11} = 21\\tfrac{9}{11}\\) minutes.",
  fast: "The minute hand gains on the hour hand at exactly \\(5.5°\\) per minute. It starts \\(210°\\) behind and must close the gap to \\(90°\\) — a gain of \\(120°\\).\n" +
    "\\(t = \\dfrac{120}{5.5} = \\dfrac{240}{11}\\).\n" +
    "Every clock-angle question reduces to \"gap to close ÷ 5.5\". The \\(\\tfrac{9}{11}\\) in the answer is the signature of that division by 11.",
  traps: "Dividing a whole number of degrees by \\(5.5 = \\tfrac{11}{2}\\) can only leave a denominator of 11 (or a factor of it), so every choice built on some other denominator is decoration.\n" +
    "(A) \\(20\\tfrac{13}{21}\\) and (B) \\(20\\tfrac{13}{17}\\) sit just below the true value with denominators no clock calculation produces.\n" +
    "(C) \\(21\\tfrac{3}{23}\\) is close enough in size to look tempting if you estimated instead of computing.\n" +
    "(E) \\(22\\tfrac49\\) overshoots, and its denominator of 9 — like every non-11 denominator here — is one that dividing degrees by \\(5.5\\) can never produce.",
  take: "Relative speed of the hands is \\(5.5°\\) per minute. Time \\(=\\) (degrees to close) \\(\\div\\, 5.5\\), and the answer always has 11 in the denominator."
},

"quant-700-rates#11": {
  steps: "Step 1 — Each interest payment is reinvested, so the payments compound: multiply the factors rather than adding the percentages.\n" +
    "Step 2 — After 6 months: \\(10{,}000 \\times 1.02 = 10{,}200\\).\n" +
    "Step 3 — After 12 months: \\(10{,}200 \\times 1.03 = 10{,}506\\).\n" +
    "Step 4 — After 18 months: \\(10{,}506 \\times 1.04 = 10{,}926.24\\).\n" +
    "Step 5 — Total interest \\(= 10{,}926.24 - 10{,}000 = \\$926.24\\).",
  fast: "Step through the three multiplications on the running balance — each one is easy because the rates are small: \\(+204\\), then \\(+306\\), then \\(+420.24\\).\n" +
    "Before computing, bound it: simple interest would be \\(2 + 3 + 4 = 9\\%\\), or $900. Compounding must beat that, so the answer is just above $900 — which leaves only (D) and (E).\n" +
    "That bound does most of the work.",
  traps: "(C) $900.00 is exactly the non-compounded total — the trap for anyone who adds the percentages.\n" +
    "(D) $920.24 is a near-miss just below the answer, for a slip in the middle step.\n" +
    "(A) $506.00 is the first two payments only (\\(200 + 306\\)), dropping the final 4%. (B) $726.24 is the last two (\\(306 + 420.24\\)), dropping the first.",
  take: "\"Reinvested\" means compounded. Compute the simple-interest total first as a floor — the compounded answer must exceed it, usually by only a little, which brackets the answer immediately."
},

"quant-700-rates#12": {
  steps: "Step 1 — A constant multiplication rate means the hourly factor \\(k\\) is the same each hour.\n" +
    "Step 2 — From 1 p.m. to 4 p.m. is three hours: \\(2{,}000 \\times k^3 = 250{,}000\\).\n" +
    "Step 3 — \\(k^3 = 125\\), so \\(k = 5\\).\n" +
    "Step 4 — 3 p.m. is two hours after 1 p.m.: \\(2{,}000 \\times 5^2 = 50{,}000\\).\n" +
    "Step 5 — Check the sequence: \\(2{,}000 \\to 10{,}000 \\to 50{,}000 \\to 250{,}000\\) ✓.",
  fast: "\\(\\dfrac{250{,}000}{2{,}000} = 125 = 5^3\\), so the population multiplies by 5 each hour.\n" +
    "Then 3 p.m. is simply one step [[back]] from 4 p.m.: \\(250{,}000 \\div 5 = 50{,}000\\).\n" +
    "Working backwards from the known endpoint is one division instead of two multiplications.",
  traps: "(E) 125,000 halves the 4 p.m. figure — treating growth as linear rather than multiplicative. That is the central trap.\n" +
    "(B) 62,500 divides by 4; (C) 65,000 and (D) 86,666 come from interpolating linearly between 2,000 and 250,000.\n" +
    "The tell that growth is geometric: the ratio 125 is a perfect cube.",
  take: "Constant-rate growth is geometric. Take the ratio over the whole interval, then the appropriate root. Going back one period is a division, not a subtraction."
},

"quant-700-rates#13": {
  steps: "Step 1 — Anchor the timeline at now. Four hours ago there were 1,000 locusts, and the population doubles every two hours.\n" +
    "Step 2 — Four hours is two doublings, so now there are \\(1{,}000 \\times 2^2 = 4{,}000\\).\n" +
    "Step 3 — Let \\(t\\) be hours from now. The population is \\(4{,}000 \\times 2^{t/2}\\).\n" +
    "Step 4 — Require \\(4{,}000 \\times 2^{t/2} > 250{,}000\\), i.e. \\(2^{t/2} > 62.5\\).\n" +
    "Step 5 — \\(2^5 = 32\\) and \\(2^6 = 64\\), so \\(\\dfrac{t}{2}\\) must exceed 5 and a little: about 5.97.\n" +
    "Step 6 — \\(t \\approx 11.9\\), and among the choices the first that works is 12.",
  fast: "Double from 4,000 and count: \\(8{,}000, 16{,}000, 32{,}000, 64{,}000, 128{,}000, 256{,}000\\) — that is six doublings, and 256,000 is the first figure above 250,000.\n" +
    "Six doublings at two hours each is 12 hours.\n" +
    "Listing the doublings is faster than any logarithm and makes the \"first exceeds\" boundary obvious.",
  traps: "(C) 10 hours reaches only 128,000 — five doublings, just short.\n" +
    "(B) 8 and (A) 6 fall further short.\n" +
    "(E) 14 overshoots by a full doubling.\n" +
    "The most common error is forgetting the [[four hours already elapsed]] and starting the count from 1,000, which shifts every answer by two doublings.",
  take: "Anchor the timeline at \"now\" before counting periods. Then double repeatedly and stop at the first value past the threshold — listing beats logarithms when the numbers are this friendly."
},

"quant-700-rates#14": {
  steps: "Step 1 — Interest is charged on the outstanding balance each month, and a payment \\(P\\) is made at the end of each month.\n" +
    "Step 2 — After month 1: \\(1000(1.1) - P = 1100 - P\\).\n" +
    "Step 3 — After month 2: \\((1100 - P)(1.1) - P = 1210 - 1.1P - P\\).\n" +
    "Step 4 — After month 3: \\((1210 - 2.1P)(1.1) - P = 1331 - 2.31P - P = 1331 - 3.31P\\).\n" +
    "Step 5 — The loan is cleared, so \\(1331 - 3.31P = 0\\).\n" +
    "Step 6 — \\(P = \\dfrac{1331}{3.31} \\approx \\$402\\).",
  fast: "The balance grows to \\(1000(1.1)^3 = 1331\\) if nothing is repaid, and the three payments accumulate to \\(P(1.1^2 + 1.1 + 1) = 3.31P\\).\n" +
    "Setting them equal: \\(P = \\dfrac{1331}{3.31} \\approx 402\\).\n" +
    "Bounding is quicker still: \\(\\dfrac{1331}{3} \\approx 444\\) is too generous and \\(\\dfrac{1331}{3.31}\\) must be a little above 400 — which leaves only (C).",
  traps: "(A) 333 is \\(\\dfrac{1000}{3}\\), ignoring interest entirely.\n" +
    "(D) 433 is \\(\\dfrac{1300}{3}\\), adding simple interest and splitting three ways.\n" +
    "(B) 383 and (E) 483 bracket the plausible range.\n" +
    "The subtlety is that each payment stops earning interest for the lender from the month it is made, which is why the divisor is 3.31 rather than 3.",
  take: "An instalment loan balances the compounded principal against the compounded payments: \\(P \\times (1 + r + r^2\\text{-style factors}) = \\text{principal} \\times (1+r)^n\\). Bound the answer between the no-interest and simple-interest splits."
},

"quant-700-rates#15": {
  steps: "Step 1 — \"8% compounded quarterly\" means 2% per quarter.\n" +
    "Step 2 — Six months is two quarters, so the growth factor is \\((1.02)^2 = 1.0404\\).\n" +
    "Step 3 — Interest earned is \\(0.0404x\\).\n" +
    "Step 4 — Require \\(0.0404x > 100\\), so \\(x > \\dfrac{100}{0.0404} \\approx 2{,}475\\).\n" +
    "Step 5 — The smallest listed amount above that is $2,500.",
  fast: "Two quarters at 2% is a shade over 4%, so you need roughly \\(\\dfrac{100}{0.04} = \\$2{,}500\\) — and because the true rate is slightly [[above]] 4%, the threshold is slightly below 2,500, which 2,500 clears.\n" +
    "Test the neighbour to be sure: at $2,000 the interest is $80.80, short of $100. So 2,500 it is.",
  traps: "(C) $2,000 gives only $80.80 — the most likely wrong pick for anyone estimating 4% loosely.\n" +
    "(B) $1,750 and (A) $1,500 fall further short.\n" +
    "(E) $3,000 works but is not the [[minimum]] — the question's word \"minimum\" is what separates it from the answer.\n" +
    "Using 8% for the six months rather than 4% would give $1,250 and point at (A).",
  take: "Compounded \\(k\\) times a year: divide the rate by \\(k\\), count the periods. For a \"minimum that satisfies\" question, verify the choice below yours fails — that is what proves minimality."
}

});
