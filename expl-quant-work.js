/* Rewritten explanations — work and rate.

   One habit removes most of the pain: work in RATES (job per day), not days.
   Rates add; days do not. The second habit is to pick a total-work number that
   all the given days divide into — then everyone's rate is a whole number of
   "units per day" and the fractions disappear entirely. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-timework-ex#1": {
  steps: "Step 1 — Convert every statement into a rate (job per day). Rates add; days never do.\n" +
    "Step 2 — A: \\(\\dfrac{1}{12}\\) per day.\n" +
    "Step 3 — B is half as efficient as A, so B works at half A's [[rate]]: \\(\\dfrac{1}{24}\\) per day.\n" +
    "Step 4 — All three together: \\(\\dfrac16\\) per day.\n" +
    "Step 5 — C's rate is what is left: \\(\\dfrac16 - \\dfrac{1}{12} - \\dfrac{1}{24} = \\dfrac{4 - 2 - 1}{24} = \\dfrac{1}{24}\\).\n" +
    "Step 6 — C alone therefore needs 24 days.",
  fast: "Let the job be 24 units. A does 2 units a day, B (half as efficient) does 1, and the three together do 4.\n" +
    "So C does \\(4 - 2 - 1 = 1\\) unit a day → 24 days.\n" +
    "Choosing 24 — the LCM of the days in the problem — makes every rate a whole number and removes all the fractions.",
  traps: "(A) 12 is A's time, handed to you in the stem.\n" +
    "(B) 16 and (D) 18 are mid-range decoys. The real danger is reading \"half as efficient\" as \"half the days\" (B = 6): that makes C's computed rate [[negative]] (\\(\\tfrac16 - \\tfrac1{12} - \\tfrac16 < 0\\)), and the absurdity is your cue that efficiency halves the rate, doubling B's days to 24.\n" +
    "(E) 28 exceeds anything consistent with the three finishing in 6 days.",
  take: "Work in rates and pick the job size as the LCM of the given days. \"Half as efficient\" halves the rate and [[doubles]] the days — the inversion is where most errors start."
},

"quant-timework-ex#2": {
  steps: "Step 1 — Write each pair as a rate: \\(A+B = \\dfrac{1}{12}\\), \\(B+C = \\dfrac{1}{16}\\), \\(A+C = \\dfrac{1}{24}\\).\n" +
    "Step 2 — Adding all three counts every person exactly twice: the sum is \\(2(A+B+C)\\).\n" +
    "Step 3 — \\(\\dfrac{1}{12} + \\dfrac{1}{16} + \\dfrac{1}{24}\\). Over 48: \\(\\dfrac{4 + 3 + 2}{48} = \\dfrac{9}{48} = \\dfrac{3}{16}\\).\n" +
    "Step 4 — So \\(A+B+C = \\dfrac{3}{32}\\) per day.\n" +
    "Step 5 — Time \\(= \\dfrac{32}{3} = 10\\tfrac23\\) days.",
  fast: "Let the job be 48 units. The pairs do 4, 3 and 2 units a day. Adding gives 9 units a day for [[two]] of each worker, so one of each does 4.5 units a day.\n" +
    "\\(48 \\div 4.5 = 10\\tfrac23\\) days.\n" +
    "The \"add all the pairs, then halve\" move is the standard trick whenever you are given every pair but no individual.",
  traps: "(C) 12 is the fastest pair's time — the answer must be [[less]] than that, since adding a third worker can only speed things up. The bound kills (C) on sight; (A) \\(10\\tfrac13\\) survives it and sits just below the true \\(10\\tfrac23\\) to punish a slip in the ninths.\n" +
    "(E) \\(5\\tfrac13\\) forgets to halve, doubling the team's rate.\n" +
    "(D) 9 is a round decoy just below the answer.",
  take: "Given every pair, add all the pair rates and halve: that is the whole team. And sanity-check against the fastest pair — the trio must always be quicker."
},

"quant-timework-ex#3": {
  steps: "Step 1 — Efficiency is rate, so \"1.5 times as efficient\" multiplies the rate by 1.5.\n" +
    "Step 2 — A: \\(\\dfrac{1}{36}\\). B: \\(1.5 \\times \\dfrac{1}{36} = \\dfrac{1}{24}\\). C: \\(2 \\times \\dfrac{1}{36} = \\dfrac{1}{18}\\).\n" +
    "Step 3 — Add: over 72, \\(\\dfrac{2 + 3 + 4}{72} = \\dfrac{9}{72} = \\dfrac18\\).\n" +
    "Step 4 — Together: 8 days.",
  fast: "Work in multiples of A. The three efficiencies are \\(1, 1.5, 2\\), a total of 4.5 A-units.\n" +
    "A alone takes 36 days, so 4.5 A's take \\(36 \\div 4.5 = 8\\) days.\n" +
    "Counting everything in \"A-equivalents\" avoids the common denominator completely.",
  traps: "(E) 18 is C's solo time; (A) 15 is roughly B's.\n" +
    "(C) 12 comes from adding the efficiencies as \\(1 + 1.5 + 2 = 4.5\\) and then dividing 36 by 3 instead — using the count of people rather than their combined efficiency.\n" +
    "(B) 9 is the near-miss you land on by rounding 4.5 down to 4.",
  take: "Express every worker as a multiple of the slowest, add the multiples, and divide the slowest worker's time by that total. No LCM needed."
},

"quant-timework-ex#4": {
  steps: "Step 1 — A: \\(\\dfrac{1}{24}\\) per day. B: \\(\\dfrac{1}{36}\\) per day.\n" +
    "Step 2 — Together: over 72, \\(\\dfrac{3 + 2}{72} = \\dfrac{5}{72}\\).\n" +
    "Step 3 — C is twice as efficient as that pair, so C's rate is \\(2 \\times \\dfrac{5}{72} = \\dfrac{10}{72} = \\dfrac{5}{36}\\).\n" +
    "Step 4 — C's time is the reciprocal: \\(\\dfrac{36}{5} = 7\\tfrac15\\) days.",
  fast: "Let the job be 72 units: A does 3 a day, B does 2, so together 5. C does 10 a day.\n" +
    "\\(72 \\div 10 = 7.2 = 7\\tfrac15\\) days.\n" +
    "Twice as efficient means [[half]] the time of the pair, and the pair takes \\(72/5 = 14.4\\) days — so 7.2, which is also a quick check.",
  traps: "(E) \\(14\\tfrac25\\) is the [[pair's]] time, before doubling C's efficiency — the value you compute one step before the answer.\n" +
    "(A) \\(4\\tfrac15\\) and (C) \\(5\\tfrac15\\) borrow the answer's fifth so the fraction alone cannot identify it; only \\(72 \\div 10\\) lands on the right whole part.\n" +
    "(D) \\(6\\tfrac15\\) is a decoy just below the answer.",
  take: "Twice as efficient = twice the rate = half the time. Compute the pair first, then apply the doubling to the [[rate]], and take the reciprocal only at the very end."
},

"quant-timework-ex#5": {
  steps: "Step 1 — C works against the others, so C's rate is [[negative]]: \\(-\\dfrac{1}{120}\\).\n" +
    "Step 2 — Given: \\(A + B = \\dfrac{1}{30}\\) and \\(B + C = \\dfrac{1}{240}\\).\n" +
    "Step 3 — From the second: \\(B = \\dfrac{1}{240} + \\dfrac{1}{120} = \\dfrac{1 + 2}{240} = \\dfrac{3}{240} = \\dfrac{1}{80}\\).\n" +
    "Step 4 — Then \\(A = \\dfrac{1}{30} - \\dfrac{1}{80}\\). Over 240: \\(\\dfrac{8 - 3}{240} = \\dfrac{5}{240} = \\dfrac{1}{48}\\).\n" +
    "Step 5 — A alone takes 48 days.",
  fast: "Let the job be 240 units. \\(A+B = 8\\) units a day; \\(C = -2\\); \\(B + C = 1\\), so \\(B = 3\\).\n" +
    "Then \\(A = 8 - 3 = 5\\) units a day → \\(240/5 = 48\\) days.\n" +
    "Taking the LCM as the job size turns the negative rate into a plain \\(-2\\) and the whole question into three subtractions.",
  traps: "The trap this question exists for is treating C as a helper. If you set \\(C = +\\dfrac{1}{120}\\), you get \\(B\\) negative (\\(\\tfrac1{240} - \\tfrac1{120} < 0\\)) and the arithmetic falls apart — that collapse is the signal you have the sign wrong.\n" +
    "(C) 60 and (E) 66 are far-side decoys that no consistent working produces, and (B) 36 and (D) 42 bracket the answer for estimators — all four fall to the forward check \\(240 \\div 48 = 5\\) units a day.",
  take: "A worker who undoes the job has a negative rate. Rates still simply add — the sign does all the work, and there is no separate formula to remember."
},

"quant-timework-ex#6": {
  steps: "Step 1 — Pay is proportional to work done, and work done is proportional to rate.\n" +
    "Step 2 — Rates: \\(\\dfrac{1}{12}, \\dfrac{1}{15}, \\dfrac{1}{20}\\).\n" +
    "Step 3 — Put them over 60: \\(5, 4, 3\\) units a day — a ratio of \\(5 : 4 : 3\\), totalling 12 parts.\n" +
    "Step 4 — P and Q hold \\(5 + 4 = 9\\) of the 12 parts.\n" +
    "Step 5 — \\(\\dfrac{9}{12} \\times 84{,}000 = \\dfrac34 \\times 84{,}000 = \\$63{,}000\\).",
  fast: "Take the LCM of 12, 15 and 20 — that is 60 — and read off the rates: \\(5 : 4 : 3\\). P and Q are 9 parts of 12, i.e. three-quarters.\n" +
    "Three-quarters of 84,000 is 63,000.\n" +
    "The pay ratio is always the [[rate]] ratio, which is the reciprocal of the days ratio — never split the money in the ratio 12 : 15 : 20.",
  traps: "(C) $42,000 is half the pot — a naive even split between \"P and Q\" and everything else.\n" +
    "(B) $56,000 is doubly tempting: it is the head-count split (P and Q as two workers of three) [[and]] the true combined share of P and R.\n" +
    "(D) $49,000 sits beside the days-ratio split (\\(\\tfrac{27}{47}\\) of the pot \\(\\approx \\$48{,}300\\)) — the inversion error, rounded. (E) $70,000 overshoots; R's own $21,000 is deliberately absent.",
  take: "Pay follows rate, and rate is the reciprocal of time. Convert days to rates over their LCM first — the ratio you get is what the money splits by."
},

"quant-timework-ex#7": {
  steps: "Step 1 — Efficiencies are already a ratio: \\(4 : 5 : 7\\), totalling 16 parts.\n" +
    "Step 2 — Pay follows efficiency, so B receives \\(\\dfrac{5}{16}\\) of $480 \\(= \\$150\\).\n" +
    "Step 3 — That $150 is for the whole job, which took 6 days.\n" +
    "Step 4 — B's daily pay: \\(\\dfrac{150}{6} = \\$25\\).",
  fast: "\\(480 \\div 16 = 30\\) per part for the job, so \\(30 \\div 6 = \\$5\\) per part per day.\n" +
    "B is 5 parts → \\(5 \\times 5 = \\$25\\) a day.\n" +
    "Dividing by both the parts and the days up front means each worker's daily pay is one multiplication.",
  traps: "(B) $30 is one part's pay for the whole job, and also the value you compute first.\n" +
    "(D) $40 is \\(480/12\\), splitting by a wrong parts count.\n" +
    "(C) $20 is A's daily pay and (E) $45 is close to C's ($35) — the question names B specifically.",
  take: "When efficiencies are given as a ratio, no rates need computing at all: the money splits in that ratio directly. Then check whether the question wants the total or the [[daily]] figure."
},

"quant-timework-ex#8": {
  steps: "Step 1 — Measure the job in man-days.\n" +
    "Step 2 — In 20 days, 24 men supply \\(24 \\times 20 = 480\\) man-days, and that produced 50% of the job.\n" +
    "Step 3 — So the whole job is \\(960\\) man-days, and the remaining half is another 480.\n" +
    "Step 4 — Days left: \\(35 - 20 = 15\\).\n" +
    "Step 5 — Men needed: \\(\\dfrac{480}{15} = 32\\).\n" +
    "Step 6 — Extra men: \\(32 - 24 = 8\\).",
  fast: "Half the job took 20 days at 24 men; the other half must be done in 15 days. Time is cut by a factor of \\(\\dfrac{15}{20} = \\dfrac34\\), so the crew must grow by \\(\\dfrac43\\).\n" +
    "\\(24 \\times \\dfrac43 = 32\\) men, i.e. 8 more.\n" +
    "Scaling the crew by the inverse of the time ratio skips the man-days entirely.",
  traps: "(C) 12 and (D) 11 come from using the total 35 days somewhere instead of the 15 remaining.\n" +
    "(B) 10 and (E) 13 bracket the answer.\n" +
    "Note the question asks for the [[extra]] men, not the new crew size — 32 is not on the list precisely because that would be too easy to pick.",
  take: "Man-days are conserved: men × days = work. Halve the time available and you must multiply the crew by two. Then re-read whether the answer wanted is the new total or the increase."
},

"quant-timework-ex#9": {
  steps: "Step 1 — Find each individual rate. 10 men take 18 days, so one man does \\(\\dfrac{1}{180}\\) of the job per day.\n" +
    "Step 2 — 15 women take 24 days, so one woman does \\(\\dfrac{1}{360}\\) per day.\n" +
    "Step 3 — First phase: 5 men and 6 women for 10 days.\n" +
    "\\(5 \\times 10 \\times \\dfrac{1}{180} = \\dfrac{50}{180} = \\dfrac{5}{18}\\) and \\(6 \\times 10 \\times \\dfrac{1}{360} = \\dfrac{60}{360} = \\dfrac16\\).\n" +
    "Step 4 — Done so far: \\(\\dfrac{5}{18} + \\dfrac{3}{18} = \\dfrac{8}{18} = \\dfrac49\\). Remaining: \\(\\dfrac59\\).\n" +
    "Step 5 — 5 men work at \\(\\dfrac{5}{180} = \\dfrac{1}{36}\\) per day, so they need \\(\\dfrac59 \\times 36 = 20\\) days.\n" +
    "Step 6 — Total: \\(10 + 20 = 30\\) days.",
  fast: "Let the job be 360 units. A man does 2 a day (\\(10 \\times 18 = 180\\) man-days for 360 units); a woman does 1.\n" +
    "Phase one: \\((5 \\times 2 + 6 \\times 1) \\times 10 = 160\\) units. Remaining: 200 units.\n" +
    "Five men do 10 units a day → 20 days. Total 30.\n" +
    "Picking 360 makes both rates whole numbers, and the whole question becomes arithmetic.",
  traps: "(B) 20 days is the [[second phase]] alone — the question asks for the total, and 20 is the number you compute last.\n" +
    "(D) 13 comes from treating men and women as equally productive.\n" +
    "(C) 26 and (E) 36 come from a slip in the phase-one total.",
  take: "Set the job size to a number all the man-day and woman-day totals divide into. Then every phase is a whole-number count of units, and the final answer is a sum you cannot lose track of."
},

"quant-timework-ex#10": {
  steps: "Step 1 — One man needs 11 days for one job, so one man-day is \\(\\dfrac{1}{11}\\) of a job.\n" +
    "Step 2 — Four jobs therefore need \\(4 \\times 11 = 44\\) man-days.\n" +
    "Step 3 — Count the men working each day: 1, 2, 3, … up to 8 on day 8, then 8 every day after.\n" +
    "Step 4 — Man-days after 8 days: \\(1+2+\\cdots+8 = \\dfrac{8 \\times 9}{2} = 36\\).\n" +
    "Step 5 — 8 short of 44, and day 9 supplies exactly 8 more.\n" +
    "Step 6 — So the work finishes on day 9.",
  fast: "Convert the target to man-days first: 4 jobs \\(\\times\\) 11 = 44 man-days needed.\n" +
    "The triangular number \\(1+2+\\cdots+8 = 36\\), and the next day adds 8 → 44 exactly.\n" +
    "Recognising \\(\\dfrac{n(n+1)}{2}\\) for the running total turns the whole schedule into one formula.",
  traps: "(D) 8 stops at 36 man-days — short of the 44 required.\n" +
    "(A) 11 is the one-man time from the stem.\n" +
    "(B) 10 and (E) 12 come from continuing to add men past day 8, which the stem explicitly rules out — the phrase \"after the 8th day no more are added\" is the pivot of the question.",
  take: "Turn everything into man-days before touching the schedule. A crew that grows by one each day gives triangular running totals, \\(\\dfrac{n(n+1)}{2}\\)."
},

"quant-timework-ex#11": {
  steps: "Step 1 — Write the rates. Together: \\(\\dfrac1x\\). Rashmi alone: \\(\\dfrac{1}{x+3}\\). Pallavi alone: \\(\\dfrac{1}{x+12}\\).\n" +
    "Step 2 — Their individual rates sum to the joint rate:\n" +
    "\\(\\dfrac{1}{x+3} + \\dfrac{1}{x+12} = \\dfrac1x\\).\n" +
    "Step 3 — Multiply through by \\(x(x+3)(x+12)\\):\n" +
    "\\(x(x+12) + x(x+3) = (x+3)(x+12)\\).\n" +
    "Step 4 — \\(2x^2 + 15x = x^2 + 15x + 36\\), so \\(x^2 = 36\\) and \\(x = 6\\).\n" +
    "Step 5 — Rashmi alone takes \\(x + 3 = 9\\) days.",
  fast: "There is a standing result for this exact setup: if the two solo times exceed the joint time by \\(a\\) and \\(b\\), then \\(x = \\sqrt{ab}\\).\n" +
    "\\(x = \\sqrt{3 \\times 12} = \\sqrt{36} = 6\\), so Rashmi takes \\(6 + 3 = 9\\) days.\n" +
    "The geometric mean showing up is why the numbers 3 and 12 were chosen — their product is a perfect square.",
  traps: "(B) 6 is \\(x\\), the [[joint]] time — the value you find first and the most likely thing to select by mistake.\n" +
    "(C) 12 is the other offset from the stem, and (D) 8 is a decoy between the two.\n" +
    "(E) 14 would make Pallavi's time 23, which fails the check.",
  take: "Solo times \\(x+a\\) and \\(x+b\\) against a joint time \\(x\\) give \\(x = \\sqrt{ab}\\). Worth memorising — it converts a messy quadratic into a square root."
},

"quant-timework-ex#12": {
  steps: "Step 1 — A does half the job in 35 days, so A does the whole job in 70 days: rate \\(\\dfrac{1}{70}\\).\n" +
    "Step 2 — A does a quarter of the job in \\(\\dfrac{70}{4} = 17.5\\) days.\n" +
    "Step 3 — B takes that same 17.5 days to do one-[[third]] of the job.\n" +
    "Step 4 — So B does the whole job in \\(3 \\times 17.5 = 52.5\\) days: rate \\(\\dfrac{1}{52.5} = \\dfrac{2}{105}\\).\n" +
    "Step 5 — Together: \\(\\dfrac{1}{70} + \\dfrac{2}{105}\\). Over 210: \\(\\dfrac{3 + 4}{210} = \\dfrac{7}{210} = \\dfrac{1}{30}\\).\n" +
    "Step 6 — 30 days.",
  fast: "Let the job be 210 units. A: 70 days → 3 units a day. B: 52.5 days → 4 units a day.\n" +
    "Together 7 units a day → \\(210/7 = 30\\) days.\n" +
    "B being faster than A is worth noticing early: B does a third in the time A does a quarter, so B must finish sooner.",
  traps: "(A) 35 is the stem's number reused — and exactly what two copies of A would manage (\\(\\tfrac1{70} + \\tfrac1{70} = \\tfrac1{35}\\)): the slip of treating B as A's equal.\n" +
    "(D) 60 and (E) 65 exceed B's solo 52.5 days, impossible once anyone helps.\n" +
    "(B) 40 fails the forward check: it would need 5.25 units a day against the true 7.",
  take: "Scale part-jobs to whole jobs before comparing anyone. And bound the answer: two workers together are always faster than the faster one alone."
},

"quant-timework-ex#13": {
  steps: "Step 1 — Let the combined rate be \\(T = A + B + C = \\dfrac{1}{20}\\) per day.\n" +
    "Step 2 — \"B takes 4 times as long as A and C together\" means B's rate is a quarter of theirs: \\(B = \\dfrac{A + C}{4}\\).\n" +
    "Step 3 — But \\(A + C = T - B\\), so \\(B = \\dfrac{T - B}{4}\\).\n" +
    "Step 4 — \\(4B = T - B\\), so \\(5B = T\\) and \\(B = \\dfrac{T}{5}\\).\n" +
    "Step 5 — \\(B = \\dfrac{1}{20} \\times \\dfrac15 = \\dfrac{1}{100}\\), so B alone takes 100 days.",
  fast: "\"Takes \\(k\\) times as long as the rest of the team\" means that worker is \\(\\dfrac{1}{k+1}\\) of the whole team's rate.\n" +
    "Here \\(k = 4\\), so B is \\(\\dfrac15\\) of the team → B alone takes \\(5 \\times 20 = 100\\) days.\n" +
    "The condition about C is never needed — it is there to make the problem look like a system of equations.",
  traps: "(B) 80 is \\(4 \\times 20\\), using \\(k\\) instead of \\(k+1\\) — the error the question is built around.\n" +
    "(D) 90 and (A) 110 bracket the answer for anyone estimating.\n" +
    "(E) 120 applies the \\(k+1\\) rule to C's condition (\\(3+1 = 4\\)) and multiplies wrongly; C actually takes \\(4 \\times 20 = 80\\) days, which is why 80 is on the list.",
  take: "If X takes \\(k\\) times as long as everyone else combined, X supplies \\(\\dfrac{1}{k+1}\\) of the team's rate, so X alone takes \\((k+1)\\) times the team's time."
},

"quant-timework-ex#14": {
  steps: "Step 1 — \\(166\\tfrac23\\% = \\dfrac53\\), so \\(A = \\dfrac53 B\\) in rate terms.\n" +
    "Step 2 — \\(88\\tfrac89\\% = \\dfrac89\\), so in 10 days the pair completes \\(\\dfrac89\\) of the job.\n" +
    "Step 3 — Their combined rate is \\(\\dfrac{8/9}{10} = \\dfrac{8}{90} = \\dfrac{4}{45}\\) per day.\n" +
    "Step 4 — That combined rate is \\(A + B = \\dfrac53 B + B = \\dfrac83 B\\).\n" +
    "Step 5 — \\(\\dfrac83 B = \\dfrac{4}{45}\\), so \\(B = \\dfrac{4}{45} \\times \\dfrac38 = \\dfrac{12}{360} = \\dfrac{1}{30}\\).\n" +
    "Step 6 — B alone takes 30 days.",
  fast: "Both awkward percentages are friendly fractions: \\(166\\tfrac23\\% = \\dfrac53\\) and \\(88\\tfrac89\\% = \\dfrac89\\).\n" +
    "Rates are then \\(A : B = 5 : 3\\), so the pair is 8 parts. Eight parts do \\(\\dfrac89\\) of the job in 10 days, so [[one part]] does \\(\\dfrac19\\) of the job in 10 days.\n" +
    "B is 3 parts → \\(\\dfrac39 = \\dfrac13\\) of the job in 10 days → 30 days for the whole thing.",
  traps: "(A) 40 fails the forward check: B at 40 days puts A at 24, the pair at \\(\\tfrac1{15}\\) a day — ten days would finish only \\(\\tfrac23\\) of the job, not \\(\\tfrac89\\).\n" +
    "(E) 45 fails the same check further out (ten days would give \\(\\tfrac{16}{27}\\)).\n" +
    "(B) 25 and (D) 35 bracket the answer; A alone takes 18 days, which is deliberately absent.",
  take: "Convert every ugly percentage to a fraction first: \\(166\\tfrac23\\% = \\tfrac53\\), \\(88\\tfrac89\\% = \\tfrac89\\), \\(133\\tfrac13\\% = \\tfrac43\\). The arithmetic then stays in small whole numbers."
},

"quant-timework-ex#15": {
  steps: "Step 1 — Sunder cuts 112 onions in 15 minutes.\n" +
    "Step 2 — Subhash is 125% as efficient: \\(1.25 \\times 112 = 140\\) onions in the same 15 minutes.\n" +
    "Step 3 — Together: \\(112 + 140 = 252\\) onions per 15 minutes.\n" +
    "Step 4 — Number of 15-minute blocks needed: \\(\\dfrac{4200}{252} = \\dfrac{50}{3}\\).\n" +
    "Step 5 — Time \\(= \\dfrac{50}{3} \\times 15 = 250\\) minutes \\(= 4\\) h 10 min.",
  fast: "Work in onions per minute: \\(252/15 = 16.8\\) a minute. \\(4200 \\div 16.8 = 250\\) minutes.\n" +
    "\\(4200/16.8\\) is easier as \\(42000/168 = 250\\).\n" +
    "Then convert once at the end: 250 minutes is 4 hours 10 minutes.",
  traps: "(D) 4 h 15 min and (B) 4 h 20 min are what you get by rounding 16.8 down to 16.5 or 16.\n" +
    "(C) 4 h 50 min and (E) 5 h 10 min come from using only Sunder's rate for part of the work.\n" +
    "The conversion at the end is its own trap: 250 minutes is 4 h 10 min, not 4 h 50 — divide by 60 rather than reading the digits.",
  take: "Percentage efficiency scales the [[output]], so 125% as efficient means 25% more onions in the same time. Convert to a per-minute rate, divide once, and convert units only at the very end."
},

"quant-timework-ex#16": {
  steps: "Step 1 — Rates: A \\(= \\dfrac{1}{12}\\), B \\(= \\dfrac{1}{18}\\).\n" +
    "Step 2 — Together: over 36, \\(\\dfrac{3 + 2}{36} = \\dfrac{5}{36}\\).\n" +
    "Step 3 — Time is the reciprocal: \\(\\dfrac{36}{5} = 7.2\\) days.",
  fast: "Let the job be 36 units: A does 3 a day, B does 2, together 5. \\(36/5 = 7.2\\).\n" +
    "Alternatively use the two-worker formula \\(\\dfrac{ab}{a+b} = \\dfrac{12 \\times 18}{30} = \\dfrac{216}{30} = 7.2\\).",
  traps: "(C) 9 is the average of 12 and 18 — the instinct that two workers take the average of their times. They never do; the joint time is always [[below the faster]] worker's, here below 12.\n" +
    "(A) 6 is half the faster time, which would need the two to be equally fast.\n" +
    "(D) 15 and (E) 30 exceed A's solo time, which is impossible when help arrives.",
  take: "Two workers: \\(\\dfrac{ab}{a+b}\\). The result is always less than the smaller of \\(a\\) and \\(b\\) — a bound that eliminates most wrong choices instantly."
},

"quant-timework-ex#17": {
  steps: "Step 1 — The work is fixed, so worker-days are conserved.\n" +
    "Step 2 — \\(15 \\times 8 = 120\\) worker-days.\n" +
    "Step 3 — With 10 workers: \\(\\dfrac{120}{10} = 12\\) days.",
  fast: "Workers and days are inversely proportional. The crew shrinks by a factor of \\(\\dfrac{10}{15} = \\dfrac23\\), so the time grows by \\(\\dfrac32\\): \\(8 \\times \\dfrac32 = 12\\).\n" +
    "Scaling by the inverse ratio is one multiplication and skips the 120 entirely.",
  traps: "(C) \\(5\\tfrac13\\) days applies the ratio the wrong way round — fewer workers must take [[longer]], so any answer below 8 is wrong before you compute it.\n" +
    "(A) 10 days splits the difference; (D) 16 and (E) 20 overshoot by using the ratio twice.",
  take: "Fixed work: workers × days is constant. Fewer workers → more days. Check the direction before the arithmetic and half the choices disappear."
},

"quant-timework-ex#18": {
  steps: "Step 1 — Let B's rate be \\(r\\). A works twice as fast, so A's rate is \\(2r\\).\n" +
    "Step 2 — Together they do \\(3r\\) per day and finish in 8 days, so \\(3r = \\dfrac18\\).\n" +
    "Step 3 — \\(r = \\dfrac{1}{24}\\).\n" +
    "Step 4 — B alone takes 24 days.",
  fast: "A counts as two B's, so the team is worth 3 B's. Three B's take 8 days, so one B takes \\(3 \\times 8 = 24\\) days.\n" +
    "Counting the team in units of the slower worker is the fastest route to any \"twice as fast\" question.",
  traps: "(B) 16 is \\(2 \\times 8\\), treating the team as two B's rather than three — it ignores that A is worth two on his own.\n" +
    "(A) 12 is A's solo time.\n" +
    "(E) 48 doubles the answer, as though A were worth five B's.\n" +
    "(D) 36 would make B [[three]] times slower than A (36 days against A's 12). \"Twice as fast\" fixes the solo times in the ratio 1 : 2 — the 3 in the combined rate \\(3r\\) is a rate sum, not a time ratio.",
  take: "Count everyone in units of the slowest worker. \"A is twice as fast\" makes the pair worth 3 slow-workers, so the slow worker alone takes 3× the joint time."
},

"quant-timework-ex#19": {
  steps: "Step 1 — The outlet works against the inlet, so its rate is negative.\n" +
    "Step 2 — Inlet: \\(+\\dfrac16\\) of the tank per hour. Outlet: \\(-\\dfrac19\\) per hour.\n" +
    "Step 3 — Net: \\(\\dfrac16 - \\dfrac19 = \\dfrac{3 - 2}{18} = \\dfrac{1}{18}\\) per hour.\n" +
    "Step 4 — The tank fills in 18 hours.",
  fast: "Let the tank be 18 units. In fills 3 units an hour, out removes 2 — a net of 1 unit an hour, so 18 hours.\n" +
    "Because the inlet is faster the tank does fill; if the outlet were faster the net would be negative and the tank would never fill at all, which is always worth checking first.",
  traps: "(D) 3.6 hours is \\(\\dfrac{6 \\times 9}{6 + 9}\\) — the two-worker formula applied as though both pipes were [[filling]]. That is the trap: the formula is right, the sign is not.\n" +
    "(A) 12 and (B) 15 come from a slip in the common denominator.\n" +
    "(E) 9 is the outlet's own time.",
  take: "Pipes are workers with signs: filling is positive, draining negative. Add the rates as they come — the only decision is the sign, and everything else is the same arithmetic."
}

});
