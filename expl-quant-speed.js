/* Rewritten explanations — speed, distance and time.

   The recurring idea in this topic: when the distance is fixed, speed and time
   are inversely proportional, so a speed ratio can be flipped into a time ratio
   and the whole question becomes one subtraction. Most of the "fast" routes
   below are that move. See expl-quant-percent.js for the format. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-speed-ex#1": {
  steps: "Step 1 — Let the original speed be \\(v\\), so the new speed is \\(v + 3\\).\n" +
    "Step 2 — Time is distance ÷ speed, and the slower trip takes 2 hours longer:\n" +
    "\\(\\dfrac{540}{v} - \\dfrac{540}{v+3} = 2\\).\n" +
    "Step 3 — Combine the fractions: \\(\\dfrac{540(v+3) - 540v}{v(v+3)} = \\dfrac{1620}{v(v+3)} = 2\\).\n" +
    "Step 4 — So \\(v(v+3) = 810\\), i.e. \\(v^2 + 3v - 810 = 0\\).\n" +
    "Step 5 — Factor: \\((v + 30)(v - 27) = 0\\), so \\(v = 27\\) (a speed cannot be negative).\n" +
    "Step 6 — The question asks for the [[increased]] speed: \\(27 + 3 = 30\\) km/h.",
  fast: "Do not solve the quadratic — the answer choices are the new speed, so test them.\n" +
    "Try 30: the old speed was 27. \\(540/27 = 20\\) hours and \\(540/30 = 18\\) hours. That is exactly the 2 hours saved. Done.\n" +
    "Backsolving works here because 540 was chosen to divide cleanly by the candidate speeds — start with a choice that divides 540, and you will usually land on it first or second.",
  traps: "(D) 45 and (C) 50 divide 540 cleanly too, which is why they are here — but 540/42 and 540/47 are not whole hours, so the 2-hour gap fails.\n" +
    "(B) 40 is what you get if you solve for \\(v\\) correctly and then forget to add the 3.\n" +
    "(E) 55 fails the forward check immediately: at 52 versus 55 km/h the trip times are 10.4 and 9.8 hours — a gap of barely half an hour. The faster the speeds, the less a +3 km/h boost saves, so the large choices die first.\n" +
    "Note that 27 itself is deliberately absent: the question asks for the new speed, and the set-up hands you the old one.",
  take: "Fixed distance, two speeds, a time difference: either solve the quadratic or backsolve. Backsolving is almost always faster, and the last line of the stem tells you whether the answer is the old speed or the new one."
},

"quant-speed-ex#2": {
  steps: "Step 1 — Average speed is never the average of the speeds. It is total distance ÷ total time.\n" +
    "Step 2 — Total distance: \\(75 + 80 = 155\\) km.\n" +
    "Step 3 — Total time: \\(15 + 5 = 20\\) hours.\n" +
    "Step 4 — \\(\\dfrac{155}{20} = 7.75\\) km/h.",
  fast: "Both totals are handed to you already — add and divide. \\(155/20\\) is \\(31/4\\), which is \\(7.75\\).\n" +
    "The instant you see \"average speed\", write \"total distance over total time\" before reading anything else. It is the entire topic.",
  traps: "(E) 10.5 km/h is the plain average of the two speeds (5 km/h and 16 km/h). It is wrong because the journey spends 15 hours at the slow speed and only 5 at the fast one, so the answer must sit much closer to 5.\n" +
    "(D) 8 km/h is a rounded version of the same instinct.\n" +
    "(A) 7 and (C) 6.65 bracket the answer to punish arithmetic done in a hurry.",
  take: "Average speed = total distance ÷ total time. Averaging the two speeds is only correct when the two [[times]] are equal — and here they are 15 and 5."
},

"quant-speed-ex#3": {
  steps: "Step 1 — The distance is the same for all three, so \\(t = d/v\\) makes time inversely proportional to speed.\n" +
    "Step 2 — Speeds are \\(5 : 2 : 1\\), so times are \\(\\dfrac15 : \\dfrac12 : \\dfrac11\\).\n" +
    "Step 3 — Clear the fractions by multiplying every term by 10 (the LCM of the denominators):\n" +
    "\\(\\dfrac{10}{5} : \\dfrac{10}{2} : \\dfrac{10}{1} = 2 : 5 : 10\\).",
  fast: "Invert each term and scale. \\(5 : 2 : 1 \\to \\tfrac15 : \\tfrac12 : 1 \\to 2 : 5 : 10\\).\n" +
    "A sanity check that takes one second: the fastest traveller must have the [[smallest]] time, so the first number in the answer has to be the smallest of the three. Only (D) and (A) survive that, and (A) does not preserve the ratio.",
  traps: "(E) \\(5 : 2 : 1\\) is the speed ratio copied straight down — it says the fastest person takes the longest, which is backwards.\n" +
    "(B) \\(2 : 5 : 1\\) inverts the first two terms but leaves the third alone.\n" +
    "(C) \\(2 : 1 : 10\\) inverts the outer terms and forgets the middle one.\n" +
    "(A) \\(2 : 15 : 1\\) is a hybrid of two scalings: via the LCM 30 the times are \\(6 : 15 : 30\\), which reduces to \\(2 : 5 : 10\\) — keeping the raw 15 while reducing the other terms produces this mismatch.",
  take: "Same distance → time and speed are inverses. Flip each term of the speed ratio and clear denominators; then check that the fastest has the smallest time."
},

"quant-speed-ex#4": {
  steps: "Step 1 — The phrase that matters is \"[[in the same time]]\": the duration is identical in both scenarios.\n" +
    "Step 2 — Let that common time be \\(t\\). At 10 km/h he covers \\(10t\\); at 7 km/h he covers \\(7t\\).\n" +
    "Step 3 — The extra distance is 30 km: \\(10t - 7t = 30\\).\n" +
    "Step 4 — \\(3t = 30\\), so \\(t = 10\\) hours.\n" +
    "Step 5 — The question asks for the distance actually travelled, at 7 km/h: \\(7 \\times 10 = 70\\) km.",
  fast: "The speed gap is 3 km/h and the distance gap is 30 km, so the time is \\(30 \\div 3 = 10\\) hours. Multiply by the [[actual]] speed: \\(7 \\times 10 = 70\\).\n" +
    "Whenever two speeds share a time, the extra distance divided by the extra speed is that time — one division.",
  traps: "(A) 50 km and (B) 60 km come from using a time of 5 or 6 hours, i.e. dividing 30 by the wrong gap.\n" +
    "(D) 80 km is a plausible-looking near-miss; (E) 90 km is \\(9 \\times 10\\), pairing the right time with a speed that appears nowhere in the problem.\n" +
    "The distance at 10 km/h would be 100 km — not offered, because the question deliberately asks for the slower, actual journey.",
  take: "\"Same time\" makes time the shared unknown: divide the distance difference by the speed difference. \"Same distance\" makes distance shared, and then you work with time ratios instead."
},

"quant-speed-ex#5": {
  steps: "Step 1 — Both cars cover the same 540 km, so time is inversely proportional to speed.\n" +
    "Step 2 — Speeds are \\(3 : 5\\), so times are \\(5 : 3\\).\n" +
    "Step 3 — Write the times as \\(5k\\) and \\(3k\\). Car A (the slower one, speed 3) takes the longer time \\(5k\\).\n" +
    "Step 4 — The difference is 6 hours: \\(5k - 3k = 2k = 6\\), so \\(k = 3\\).\n" +
    "Step 5 — Car B's time is \\(3k = 9\\) hours, so its speed is \\(\\dfrac{540}{9} = 60\\) km/h.",
  fast: "Flip the ratio: times are \\(5 : 3\\), a gap of 2 parts. The gap is 6 hours, so one part is 3 hours → B takes 9 hours → \\(540/9 = 60\\) km/h.\n" +
    "No variables, no equation. Flipping the ratio and pricing one \"part\" handles almost every same-distance question in this topic.",
  traps: "(A) 80 km/h and (E) 90 km/h come from assigning the longer time to the [[faster]] car — always check that the bigger speed gets the smaller time.\n" +
    "(C) 50 km/h is Car A's speed rounded; Car A actually travels at \\(540/15 = 36\\) km/h.\n" +
    "(D) 70 km/h sits between the two real speeds as a decoy for anyone estimating.",
  take: "Same distance: invert the speed ratio to get the time ratio, then let the stated time difference price one part of that ratio."
},

"quant-speed-ex#6": {
  steps: "Step 1 — \"30% less than a bus's\" gives the truck's speed as \\(0.7b\\), where \\(b\\) is the bus's speed.\n" +
    "Step 2 — Average speed over [[equal distances]] is the harmonic mean, not the arithmetic mean:\n" +
    "\\(\\text{average} = \\dfrac{2 v_1 v_2}{v_1 + v_2}\\).\n" +
    "Step 3 — Substitute: \\(\\dfrac{2 \\cdot b \\cdot 0.7b}{b + 0.7b} = \\dfrac{1.4b^2}{1.7b} = \\dfrac{1.4b}{1.7}\\).\n" +
    "Step 4 — Set equal to 70: \\(\\dfrac{1.4b}{1.7} = 70 \\Rightarrow b = \\dfrac{70 \\times 1.7}{1.4} = 85\\).\n" +
    "Step 5 — The truck's speed is \\(0.7 \\times 85 = 59.5\\) km/h.",
  fast: "Work in ratio. Truck : bus \\(= 7 : 10\\). The harmonic mean of \\(7x\\) and \\(10x\\) is \\(\\dfrac{2 \\cdot 70x^2}{17x} = \\dfrac{140x}{17}\\).\n" +
    "Set that to 70: \\(x = 8.5\\), so the truck is \\(7 \\times 8.5 = 59.5\\).\n" +
    "Bounding alone nearly finishes it: the average must lie between the two speeds, so the truck is below 70 and the bus above it — and since the truck is only 30% slower, its speed has to be in the high 50s or 60s.",
  traps: "(C) 31.5 and (D) 25.7 are far too small. The harmonic mean of two speeds always lies between them, so a truck averaging into 70 km/h cannot be doing 30.\n" +
    "(B) 60 is the round number just above the answer, for anyone estimating rather than computing.\n" +
    "(E) 65.8 is what appears if you use the arithmetic mean \\((b + 0.7b)/2 = 70\\) somewhere in the working.",
  take: "Equal distances → harmonic mean \\(\\dfrac{2v_1v_2}{v_1+v_2}\\). Equal times → arithmetic mean. Reading which one the question describes is the whole question."
},

"quant-speed-ex#7": {
  steps: "Step 1 — Convert each leg to a distance.\n" +
    "Step 2 — First leg: \\(3 \\times 3.5 = 10.5\\) km.\n" +
    "Step 3 — Second leg: \\(5.5 \\times 3 = 16.5\\) km.\n" +
    "Step 4 — Totals: \\(10.5 + 16.5 = 27\\) km over \\(3.5 + 3 = 6.5\\) hours.\n" +
    "Step 5 — \\(\\dfrac{27}{6.5} = 4.1538\\ldots \\approx 4.15\\) km/h.",
  fast: "\\(27/6.5\\) is easier as \\(54/13\\), which is just over 4.15.\n" +
    "Before computing, bound it: he spends slightly [[more]] time at 3 km/h than at 5.5, so the answer must be a little below the midpoint of 4.25. Only 4.15 fits.",
  traps: "The plain average of 3 and 5.5 is 4.25 — deliberately not offered, because its absence forces you to notice the times are unequal.\n" +
    "(A) 3.5 is the first leg's duration masquerading as a speed.\n" +
    "(B) 7.15 and (D) 6.35 exceed the faster leg's speed of 5.5 km/h, which is impossible for an average — and (E) 8.0, close to the raw [[sum]] of the two speeds, fails the same test even more badly.",
  take: "An average speed must always lie strictly between the slowest and fastest speeds in the journey. That check kills two or three choices before you compute anything."
},

"quant-speed-ex#8": {
  steps: "Step 1 — The distance is the same in both scenarios; call it \\(d\\).\n" +
    "Step 2 — The slower trip takes 2 hours longer: \\(\\dfrac{d}{36} - \\dfrac{d}{45} = 2\\).\n" +
    "Step 3 — Use a common denominator of 180: \\(\\dfrac{5d}{180} - \\dfrac{4d}{180} = \\dfrac{d}{180}\\).\n" +
    "Step 4 — So \\(\\dfrac{d}{180} = 2\\), giving \\(d = 360\\) km.\n" +
    "Step 5 — Check: \\(360/36 = 10\\) hours and \\(360/45 = 8\\) hours — a 2-hour difference. ✓",
  fast: "\\(\\dfrac{1}{36} - \\dfrac{1}{45} = \\dfrac{1}{180}\\), because \\(180\\) is the LCM and the numerators differ by 1. So \\(d = 2 \\times 180 = 360\\).\n" +
    "The reciprocal difference collapsing to \\(1/\\text{LCM}\\) happens whenever the two speeds are \\(4k\\) and \\(5k\\) — here \\(k = 9\\).",
  traps: "(E) 540 and (B) 450 are both divisible by 36 and 45, so they look inviting — but they give time gaps of 3 and 2.5 hours, not 2.\n" +
    "(C) 180 is the LCM itself, which appears mid-working and is exactly half the answer.\n" +
    "(D) 330 is not divisible by either speed, and a distance question with whole-hour differences will not do that to you.",
  take: "Two speeds over one fixed distance: \\(d\\left(\\dfrac{1}{v_{\\text{slow}}} - \\dfrac{1}{v_{\\text{fast}}}\\right) = \\Delta t\\). Take the LCM first and the fractions almost always collapse to a single unit."
},

"quant-speed-ex#9": {
  steps: "Step 1 — Moving toward each other, the gap closes at the [[sum]] of the speeds.\n" +
    "Step 2 — Closing speed: \\(10 + 12 = 22\\) km/h.\n" +
    "Step 3 — Time to close 396 km: \\(\\dfrac{396}{22} = 18\\) hours.",
  fast: "Add the speeds, divide the gap. \\(396/22\\): note \\(22 \\times 18 = 396\\), so 18.\n" +
    "The only decision in the whole question is add-or-subtract, and \"toward each other\" always means add.",
  traps: "If you had subtracted the speeds — the setup for two objects moving in the [[same]] direction — you would get \\(396/2 = 198\\) hours, which is not offered.\n" +
    "(C) 16, (D) 17 and (E) 19 sit either side of 18 for anyone dividing carelessly; (A) 10 comes from using only the slower bike's speed.",
  take: "Toward each other → add the speeds. Same direction (one catching the other) → subtract them. Everything else in relative-speed questions follows from that one choice."
},

"quant-speed-ex#10": {
  steps: "Step 1 — The two journeys cover the same distance, so times are inversely proportional to speeds.\n" +
    "Step 2 — Speeds \\(20 : 16 = 5 : 4\\), so times are \\(4 : 5\\).\n" +
    "Step 3 — One arrival is 5 minutes early and the other 5 minutes late, so the two times differ by 10 minutes.\n" +
    "Step 4 — In the ratio \\(4 : 5\\) the difference is 1 part, so 1 part = 10 minutes: the times are 40 and 50 minutes.\n" +
    "Step 5 — The 40-minute trip arrives 5 minutes early, so the on-time duration is \\(40 + 5 = 45\\) minutes. (Check: the 50-minute trip is 5 minutes late — also 45. ✓)",
  fast: "\\(20 : 16\\) flips to times \\(4 : 5\\); the 1-part difference is 10 minutes, so the times are 40 and 50 and the target sits exactly between them: 45 minutes.\n" +
    "The distance is never needed — and it is genuinely awkward (\\(13\\tfrac13\\) km), which is the signal that the ratio route is the intended one.",
  traps: "(C) 40 and (E) 50 are the two actual travel times; the question asks for the [[on-time]] duration, which is neither.\n" +
    "(A) 15 minutes is the 5 + 5 + 5 arithmetic of someone adding the penalties.\n" +
    "(B) 35 minutes overshoots in the wrong direction — the on-time time must lie between the early trip and the late one.",
  take: "Early-and-late questions: the total swing (early + late) is the time difference. Flip the speed ratio, price one part with that swing, then step back to the scheduled time."
},

"quant-speed-ex#11": {
  steps: "Step 1 — Let the original speed be \\(v\\); the faster speed is \\(v + 4\\).\n" +
    "Step 2 — \\(\\dfrac{160}{v} - \\dfrac{160}{v+4} = 2\\).\n" +
    "Step 3 — Combine: \\(\\dfrac{160 \\times 4}{v(v+4)} = 2\\), so \\(v(v+4) = 320\\).\n" +
    "Step 4 — \\(v^2 + 4v - 320 = 0 \\Rightarrow (v + 20)(v - 16) = 0 \\Rightarrow v = 16\\).\n" +
    "Step 5 — The question asks for the original [[time]]: \\(\\dfrac{160}{16} = 10\\) hours.",
  fast: "The choices are times, so backsolve. If the original trip takes 10 hours, the speed is \\(160/10 = 16\\) km/h; at \\(16 + 4 = 20\\) km/h the trip takes \\(160/20 = 8\\) hours — 2 hours less. ✓\n" +
    "Start with the choice that divides 160 most cleanly; 10 is the obvious first candidate and it lands immediately.",
  traps: "(B) 12 and (E) 14 divide into 160 untidily, which is a hint they were never meant to work.\n" +
    "(C) 9 is a near-miss for anyone who solves for the [[new]] time and adjusts in the wrong direction — the new time is 8, not 9.\n" +
    "(D) 13 exists purely to make the list look uniform.",
  take: "When the answer choices are times or speeds and the algebra is a quadratic, backsolve. One substitution takes about fifteen seconds; the quadratic takes a minute and invites sign errors."
},

"quant-speed-ex#12": {
  steps: "Step 1 — At 80% of the usual speed, the time is \\(\\dfrac{1}{0.8} = 1.25\\) times the usual time — speed and time are inverses.\n" +
    "Step 2 — So the trip takes 25% longer than usual, and that extra 25% equals 10 minutes.\n" +
    "Step 3 — Usual time \\(= \\dfrac{10}{0.25} = 40\\) minutes \\(= \\dfrac23\\) hour.\n" +
    "Step 4 — Usual speed \\(= \\dfrac{480}{2/3} = 480 \\times \\dfrac32 = 720\\) km/h.",
  fast: "\\(80\\% = \\dfrac45\\), so the time factor is \\(\\dfrac54\\) — a quarter longer. A quarter of the usual time is 10 minutes, so the usual time is 40 minutes, i.e. \\(\\tfrac23\\) hour. \\(480 \\div \\tfrac23 = 720\\).\n" +
    "Converting the percentage to a fraction first is what makes \"a quarter longer\" jump out; \\(0.8\\) hides it.",
  traps: "(A) 240 and (D) 360 come from treating the 10 minutes as the whole journey time or as half of it.\n" +
    "(B) 480 is the distance reused as a speed — a number lifted straight from the stem.\n" +
    "(E) 840 overshoots; a check is quick, since \\(480/840\\) is not a tidy time.",
  take: "Speed \\(\\times \\tfrac45\\) → time \\(\\times \\tfrac54\\). The delay is the extra \\(\\tfrac14\\), so the usual time is four times the delay. Convert percentages of speed into fractions before doing anything else."
},

"quant-speed-ex#13": {
  steps: "Step 1 — The speed rises 10% each hour, and the bus travels for one hour at each speed, so each hour's distance equals that hour's speed.\n" +
    "Step 2 — Hour 1: 45 km.\n" +
    "Step 3 — Hour 2: \\(45 \\times 1.1 = 49.5\\) km.\n" +
    "Step 4 — Hour 3: \\(49.5 \\times 1.1 = 54.45\\) km.\n" +
    "Step 5 — Total: \\(45 + 49.5 + 54.45 = 148.95\\) km.",
  fast: "Factor out the 45: the total is \\(45(1 + 1.1 + 1.21) = 45 \\times 3.31\\).\n" +
    "\\(45 \\times 3.31 = 45 \\times 3 + 45 \\times 0.31 = 135 + 13.95 = 148.95\\).\n" +
    "Because each leg lasts exactly one hour, distance and speed are numerically identical — that is the shortcut the question is built on.",
  traps: "Every choice ends in \\(.95\\), so the decimal gives you nothing — the question is testing whether you compound correctly, and all five are two or three units apart.\n" +
    "(A) 140.95 and (B) 145.95 sit [[below]] the answer — under-compounding territory, where one of the later hours grew by less than its full 10%.\n" +
    "(D) 150.95 and (E) 153.95 sit [[above]] it — the over-compounding side, where an extra 10% has crept into one of the hours.\n" +
    "Simple growth (\\(45 + 4.5 + 4.5\\) each hour) gives 148.5 — within half a kilometre of the right answer, so only the exact third hour (\\(54.45\\), not 54) separates them.",
  take: "\"Increases by 10% each hour\" is geometric: \\(1 + 1.1 + 1.21\\). Factor the first term out and you replace three multiplications with one."
},

"quant-speed-ex#14": {
  steps: "Step 1 — Let the bus's speed be \\(b\\); the train's is \\(1.2b\\).\n" +
    "Step 2 — Same distance, so times differ: \\(\\dfrac{120}{b} - \\dfrac{120}{1.2b} = 0.5\\) hours.\n" +
    "Step 3 — \\(\\dfrac{120}{1.2b} = \\dfrac{100}{b}\\), so the equation becomes \\(\\dfrac{120 - 100}{b} = \\dfrac{20}{b} = 0.5\\).\n" +
    "Step 4 — \\(b = 40\\) km/h.\n" +
    "Step 5 — Check: bus takes \\(120/40 = 3\\) hours; train at 48 km/h takes \\(120/48 = 2.5\\) hours. ✓",
  fast: "Speeds are \\(6 : 5\\) (train : bus), so times are \\(5 : 6\\). The 1-part difference is 30 minutes, so the bus's time is 6 parts \\(= 180\\) minutes \\(= 3\\) hours.\n" +
    "\\(120 \\div 3 = 40\\) km/h. No algebra at all.",
  traps: "(C) 60 km/h is a round number that would make the bus's time 2 hours and the train's 100 minutes — a 20-minute gap, not 30.\n" +
    "(D) 50 km/h is the midpoint decoy.\n" +
    "(A) 20 km/h doubles the time difference; (E) 70 is the train-ish speed for anyone answering for the wrong vehicle. The train's actual speed, 48, is not offered — the question wants the bus.",
  take: "\"20% more\" is the ratio \\(6:5\\). Convert every percentage in a speed question to a small whole-number ratio, invert it for times, and price one part with the stated difference."
},

"quant-speed-ex#15": {
  steps: "Step 1 — P's speed is half Q's: \\(P = 0.5Q\\).\n" +
    "Step 2 — Over the same 120 km, P takes 4 hours longer:\n" +
    "\\(\\dfrac{120}{0.5Q} - \\dfrac{120}{Q} = 4\\).\n" +
    "Step 3 — \\(\\dfrac{240}{Q} - \\dfrac{120}{Q} = \\dfrac{120}{Q} = 4\\), so \\(Q = 30\\) km/h and \\(P = 15\\) km/h.\n" +
    "Step 4 — The question defines the average as total distance ÷ total time. Total distance \\(= 120 + 120 = 240\\) km.\n" +
    "Step 5 — Total time \\(= \\dfrac{120}{15} + \\dfrac{120}{30} = 8 + 4 = 12\\) hours.\n" +
    "Step 6 — Average \\(= \\dfrac{240}{12} = 20\\) km/h.",
  fast: "Half the speed means double the time, so P's time is exactly Q's plus Q's again — and that extra copy is the 4 hours. So Q takes 4 hours, P takes 8, and \\(Q = 120/4 = 30\\), \\(P = 15\\).\n" +
    "Then the combined average is \\(240/12 = 20\\). Recognising \"half the speed → the difference equals the faster time\" removes the algebra entirely.",
  traps: "(E) 50 is \\(15 + 30\\); (B) 40 is a scaled version of the same slip.\n" +
    "(C) 30 is Q's speed on its own.\n" +
    "The plain average of 15 and 30 is 22.5 — not offered, because the correct combined figure is the harmonic mean, 20, which always sits [[below]] the arithmetic mean.\n" +
    "(A) 10 is below both speeds, which no average can be.",
  take: "Equal distances at two speeds always average to the harmonic mean, which is strictly less than the arithmetic mean. If your answer equals the plain average, you have made the standard mistake."
},

"quant-speed-ex#16": {
  steps: "Step 1 — Convert the time to a single unit. 2 hours 30 minutes \\(= 2.5\\) hours.\n" +
    "Step 2 — Average speed \\(= \\dfrac{150}{2.5}\\).\n" +
    "Step 3 — \\(\\dfrac{150}{2.5} = \\dfrac{300}{5} = 60\\) km/h.",
  fast: "Doubling both parts clears the decimal: 150 km in 2.5 h is the same as 300 km in 5 h, which is 60 km/h at a glance.\n" +
    "Doubling to kill a \\(.5\\) is quicker and safer than dividing by a decimal.",
  traps: "(C) 62.5 km/h is \\(150 \\div 2.4\\) — the result of reading \"2 hours 30 minutes\" as 2.4 hours. This is the single most common error in the topic: 30 minutes is 0.5 hours, not 0.3.\n" +
    "(A) 55 and (E) 50 are what appear if you round the time up to 3 hours.\n" +
    "(D) 75 is \\(150 \\div 2\\), dropping the 30 minutes altogether.",
  take: "Minutes convert by dividing by 60, never by moving a decimal point. 15 min = 0.25 h, 20 min = \\(\\tfrac13\\) h, 40 min = \\(\\tfrac23\\) h — know these before test day."
},

"quant-speed-ex#17": {
  steps: "Step 1 — Passing a [[pole]] (a point object) means the train covers exactly its own length.\n" +
    "Step 2 — Speed \\(= \\dfrac{120 \\text{ m}}{6 \\text{ s}} = 20\\) m/s.\n" +
    "Step 3 — Convert to km/h by multiplying by \\(\\dfrac{18}{5}\\): \\(20 \\times \\dfrac{18}{5} = 72\\) km/h.",
  fast: "\\(20\\) m/s \\(\\times \\dfrac{18}{5} = 72\\) km/h. Worth memorising the anchor: [[18 m/s = 64.8 km/h]] is awkward, but \\(5\\) m/s \\(= 18\\) km/h and \\(20\\) m/s \\(= 72\\) km/h are clean and come up constantly.\n" +
    "The conversion factor is \\(\\times \\tfrac{18}{5}\\) going m/s → km/h, and \\(\\times \\tfrac{5}{18}\\) coming back.",
  traps: "(D) 20 km/h is the speed in m/s reported without converting — the trap the question is built on.\n" +
    "(A) 60 km/h and (B) 66 km/h come from multiplying by 3 or 3.3 instead of 3.6.\n" +
    "(E) 80 km/h rounds \\(\\tfrac{18}{5}\\) up to 4.",
  take: "Train-passes-a-pole → distance = train length. Train passes a platform or another train → distance = the sum of the lengths. And always check the units the choices are in."
},

"quant-speed-ex#18": {
  steps: "Step 1 — To \"completely pass each other\", the trains must together cover the sum of their lengths: \\(100 + 120 = 220\\) m.\n" +
    "Step 2 — Moving toward each other, the relative speed is the sum: \\(40 + 32 = 72\\) km/h.\n" +
    "Step 3 — Convert to m/s: \\(72 \\times \\dfrac{5}{18} = 20\\) m/s.\n" +
    "Step 4 — Time \\(= \\dfrac{220}{20} = 11\\) seconds.",
  fast: "72 km/h is exactly 20 m/s — worth knowing by sight. Then \\(220/20 = 11\\).\n" +
    "Two decisions carry the whole question: add the lengths, add the speeds. Both follow from \"toward each other\" and \"completely pass\".",
  traps: "(E) 8 s uses only the longer train's length (\\(160/20\\)); (A) 9 s uses only the shorter one plus a rounding.\n" +
    "(B) 10 s is \\(200/20\\) — the sum of the lengths rounded down, or a dropped 20 metres.\n" +
    "(D) 12 s comes from a relative speed of about 66 km/h, i.e. subtracting somewhere it should have added.",
  take: "Opposite directions → add the speeds. \"Completely passes\" → add the lengths. Convert km/h to m/s with \\(\\times \\tfrac{5}{18}\\) and remember that 72 km/h = 20 m/s."
},

"quant-speed-ex#19": {
  steps: "Step 1 — Compute each leg's speed separately.\n" +
    "Step 2 — Downstream: \\(\\dfrac{12}{2} = 6\\) km/h. This equals boat + current.\n" +
    "Step 3 — Upstream: \\(\\dfrac{12}{3} = 4\\) km/h. This equals boat − current.\n" +
    "Step 4 — Adding the two equations cancels the current: \\(2 \\times \\text{boat} = 6 + 4 = 10\\).\n" +
    "Step 5 — Boat speed in still water \\(= 5\\) km/h. (The current is \\((6-4)/2 = 1\\) km/h.)",
  fast: "Still-water speed is the [[average]] of the downstream and upstream speeds; the current is [[half their difference]].\n" +
    "\\((6 + 4)/2 = 5\\) and \\((6 - 4)/2 = 1\\). Both come out of one addition and one subtraction.",
  traps: "(A) 4 and (C) 6 are the upstream and downstream speeds themselves — correct intermediate values reported as the final answer.\n" +
    "(E) 1 km/h is the current, the other quantity these questions usually ask for.\n" +
    "(D) 10 km/h is the sum \\(6 + 4\\) without the halving.",
  take: "Downstream \\(= b + c\\), upstream \\(= b - c\\). So \\(b\\) is their average and \\(c\\) is half their difference — the same structure as any sum-and-difference pair."
},

"quant-speed-ex#20": {
  steps: "Step 1 — Speed and time are inverses over a fixed distance. At \\(\\tfrac34\\) of the usual speed, the time becomes \\(\\tfrac43\\) of the usual time.\n" +
    "Step 2 — So the trip takes an extra \\(\\tfrac43 - 1 = \\tfrac13\\) of the usual time.\n" +
    "Step 3 — That extra third is the 20 minutes he is late.\n" +
    "Step 4 — Usual time \\(= 3 \\times 20 = 60\\) minutes.",
  fast: "Flip the fraction: \\(\\tfrac34\\) speed → \\(\\tfrac43\\) time → \\(\\tfrac13\\) extra. The lateness is that third, so multiply by 3: 60 minutes.\n" +
    "The general form is worth memorising: at \\(\\tfrac{a}{b}\\) of the usual speed, the delay is \\(\\dfrac{b-a}{a}\\) of the usual time.",
  traps: "(D) 80 minutes is the [[new]] journey time (\\(60 \\times \\tfrac43\\)), not the usual one — a correct value answering the wrong question.\n" +
    "(A) 40 and (B) 45 come from taking the delay as a quarter rather than a third, i.e. flipping \\(\\tfrac34\\) to \\(\\tfrac14\\) instead of \\(\\tfrac43\\).\n" +
    "(E) 90 triples the wrong quantity.",
  take: "Speed \\(\\times \\tfrac34\\) → time \\(\\times \\tfrac43\\). The delay is the [[excess over 1]], which is \\(\\tfrac13\\), not \\(\\tfrac14\\). Getting that one fraction right is the whole question."
}

});
