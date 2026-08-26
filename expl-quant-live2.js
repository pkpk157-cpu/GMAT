/* GMAT Prep — in-depth explanations for the live-exam Quant set 2.
   Every answer was independently re-derived before the explanation was
   written; no stored key was changed. Keys are "setId#n"; index.html merges
   these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-2#1": {
  steps: "Step 1 — Find Lexy's total time. Walking: 5 miles in 1 hour. Cycling back: 5 miles at 15 mph takes \\(\\tfrac{5}{15} = \\tfrac13\\) hour.\n" +
    "Step 2 — Total time \\(= 1 + \\tfrac13 = \\tfrac43\\) hours for \\(10\\) miles.\n" +
    "Step 3 — Lexy's average speed is total distance over total time: \\(10 \\div \\tfrac43 = 7.5\\) mph. Note this is *not* the average of 5 and 15.\n" +
    "Step 4 — Ben travels at half that: \\(3.75\\) mph.\n" +
    "Step 5 — Ben's time for the same 10 miles: \\(10 \\div 3.75 = \\tfrac83\\) hours.\n" +
    "Step 6 — Convert: \\(\\tfrac83 \\times 60 = 160\\) minutes.",
  fast: "Half the speed over the same distance always means double the time, so you never need Ben's speed at all — Lexy takes \\(\\tfrac43\\) hours, so Ben takes \\(\\tfrac83\\) hours, which is 160 minutes. That shortcut turns the last three steps into one.\n" +
    "The only real work is Lexy's average: total distance over total time, \\(10 \\div \\tfrac43\\).",
  traps: "(B) 80 is Lexy's own round-trip time in minutes — the intermediate value, and the trap for anyone who forgets to double it.\n" +
    "(C) 120 comes from averaging 5 and 15 to get 10 mph for Lexy, halving to 5 mph for Ben, and dividing 10 miles by that. Averaging the two speeds is the classic error, and it always overstates the true average.\n" +
    "(A) 40 is Lexy's cycling leg alone.\n" +
    "(E) 180 comes from treating Lexy's average as 10 mph but keeping her walking hour intact.\n" +
    "Average speed is never the average of the speeds unless the *times* are equal — here the times are 1 hour and 20 minutes.",
  take: "Average speed = total distance ÷ total time. At half the speed over the same route, the time exactly doubles."
},

"quant-live-2#2": {
  steps: "Step 1 — Compute each leg's time. Running: \\(\\tfrac{2}{10} = \\tfrac15\\) hour. Swimming: \\(\\tfrac{2}{6} = \\tfrac13\\) hour.\n" +
    "Step 2 — Total time: \\(\\tfrac15 + \\tfrac13 = \\tfrac{3 + 5}{15} = \\tfrac{8}{15}\\) hour.\n" +
    "Step 3 — Total distance: \\(2 + 2 = 4\\) miles.\n" +
    "Step 4 — Average rate: \\(4 \\div \\tfrac{8}{15} = 4 \\times \\tfrac{15}{8} = 7.5\\) mph.\n" +
    "Step 5 — The question wants miles per *minute*: \\(7.5 \\div 60 = \\tfrac18\\).",
  fast: "For equal distances at two speeds, the average is the harmonic mean \\(\\dfrac{2ab}{a+b} = \\dfrac{2(10)(6)}{16} = 7.5\\) mph — one formula, no leg times.\n" +
    "Then the unit conversion is the step that decides the answer: dividing 7.5 by 60 gives \\(\\tfrac18\\), and forgetting it leaves you with a number that matches no choice.",
  traps: "(D) \\(\\tfrac14\\) is \\(15/60\\) — using 15 mph (the sum of the speeds, or a mis-taken average) instead of 7.5.\n" +
    "(B) \\(\\tfrac2{15}\\) is \\(8/60\\)-flavoured: the reciprocal of the total time treated as a rate per minute.\n" +
    "(C) \\(\\tfrac3{15}\\) reduces to \\(\\tfrac15\\), which is the *running* leg's time in hours reappearing as a rate — a units confusion.\n" +
    "(E) \\(\\tfrac38\\) is the answer multiplied by 3, from mis-scaling the conversion.\n" +
    "Every wrong choice here is a units error rather than an arithmetic one, so write the units beside each number as you go.",
  take: "Equal distances at two speeds average to the harmonic mean \\(\\frac{2ab}{a+b}\\). Then check the units the question asks for — per hour and per minute differ by a factor of 60."
},

"quant-live-2#3": {
  steps: "Step 1 — The question asks for a distance, which needs both a rate and a time.\n" +
    "Step 2 — Statement (1) gives the average speed, 30 mph, and nothing about duration. The distance could be anything — [[not sufficient]].\n" +
    "Step 3 — Statement (2): doubling the speed halves the time, so the trip would take half as long. The saving is therefore half the original time.\n" +
    "Step 4 — That saving is 15 minutes, so half the original time is 15 minutes and the trip took 30 minutes. But (2) gives no speed, so the distance is still unknown — [[not sufficient]].\n" +
    "Step 5 — Together: 30 mph for \\(\\tfrac12\\) hour gives \\(15\\) miles — [[sufficient]].",
  fast: "Notice what each statement supplies: (1) is a rate with no time, (2) is a time with no rate. Distance needs both, so neither can work alone and together they must. Recognising the statements as complementary halves of \\(d = rt\\) settles the question before you do any algebra.\n" +
    "The one genuine insight is in (2): doubling a speed halves the time, so a 15-minute saving means the original trip was 30 minutes.",
  traps: "(A) treats a speed as enough to fix a distance, which it never is without a duration.\n" +
    "(B) is the more interesting trap: statement (2) *feels* self-contained because it yields a concrete number, 30 minutes. But a time alone gives no distance.\n" +
    "(D) requires each to work alone, and neither does.\n" +
    "(E) understates the pair — once you have 30 mph and half an hour, the distance is pinned exactly.\n" +
    "The habit that protects you: name what each statement gives in the language of the formula you need, here \\(d = rt\\).",
  take: "For \\(d = rt\\), any two of the three determine the third. Doubling the rate halves the time, so a stated time saving is half the original duration."
},

"quant-live-2#4": {
  steps: "Step 1 — Bill's speed relative to the group is his \\(6\\) ft/sec minus the group's \\(3\\) ft/sec (they ride the belt): a closing rate of \\(3\\) ft/sec.\n" +
    "Step 2 — Closing a 120-foot gap at 3 ft/sec takes \\(120 \\div 3 = 40\\) seconds.\n" +
    "Step 3 — In those 40 seconds Bill himself moves \\(6 \\times 40 = 240\\) feet along the walkway.\n" +
    "Step 4 — That leaves \\(300 - 240 = 60\\) feet, which he covers standing still at the belt's 3 ft/sec: \\(60 \\div 3 = 20\\) seconds.\n" +
    "Step 5 — Total: \\(300\\) feet in \\(40 + 20 = 60\\) seconds.\n" +
    "Step 6 — Average rate: \\(300 \\div 60 = 5\\) ft/sec.",
  fast: "Two rates matter and they must not be confused: 3 ft/sec is how fast Bill *gains on the group*, while 6 ft/sec is how fast he *moves along the walkway*. Use the first to get the 40 seconds, the second to get the 240 feet.\n" +
    "After that the total time is 60 seconds for the full 300 feet, and the average falls out with no further arithmetic.",
  traps: "(D) 4 is the simple average of Bill's two speeds, \\(6\\) and \\(3\\) — wrong because he spends twice as long at 6 ft/sec as at 3, and averaging speeds ignores that weighting.\n" +
    "(C) 3 is the belt's own speed, the answer if you assume Bill's walking makes no difference.\n" +
    "(A) 2 and (B) 2.5 come from using the 3 ft/sec closing rate as Bill's actual speed for the first stage, which would have him travel only 120 feet in 40 seconds.\n" +
    "The relative-speed value is a tool for finding the *time*; it is never the distance-covering speed.",
  take: "Relative speed gives the time to close a gap; the object's own speed gives the ground it covers. Average speed weights by time, so compute total distance ÷ total time."
},

"quant-live-2#5": {
  steps: "Step 1 — In the first 40 minutes (\\(\\tfrac23\\) hour) John rides \\(15 \\times \\tfrac23 = 10\\) miles and Jacob rides \\(12 \\times \\tfrac23 = 8\\) miles.\n" +
    "Step 2 — John then stops for one hour. Jacob keeps going and adds \\(12\\) miles, reaching \\(8 + 12 = 20\\) miles.\n" +
    "Step 3 — At the moment John resumes, he is at 10 miles and Jacob is at 20 — a gap of \\(10\\) miles.\n" +
    "Step 4 — John closes that gap at \\(15 - 12 = 3\\) mph.\n" +
    "Step 5 — Time to catch up: \\(\\dfrac{10}{3} \\approx 3.33\\) hours.",
  fast: "Only the gap at the restart matters, and it has two sources: the 2 miles John gained in the first 40 minutes, and the 12 miles Jacob gained during the repair. Net gap \\(= 12 - 2 = 10\\) miles. Divide by the 3 mph closing rate and you are done — no need to track either rider's absolute position.",
  traps: "(D) 4 comes from taking the gap as 12 miles (Jacob's hour of riding) and forgetting that John was already 2 miles ahead when he stopped.\n" +
    "(A) 3 uses a 9-mile gap, or rounds \\(\\tfrac{10}{3}\\) down.\n" +
    "(C) 3.5 and (E) 4.5 come from adding the repair hour or the initial 40 minutes into the answer — but the question asks for the time *once he resumes*.\n" +
    "Read the final sentence carefully: it measures from the restart, not from the beginning of the ride.",
  take: "Track the gap, not the positions. Net gap ÷ relative speed gives the catch-up time — and check which moment the question measures from."
},

"quant-live-2#6": {
  steps: "Step 1 — Write both times. Actual: \\(\\dfrac{y}{x} + \\dfrac{40 - y}{1.25x}\\). Reference (whole trip at \\(x\\)): \\(\\dfrac{40}{x}\\).\n" +
    "Step 2 — Form the ratio the question asks for: \\(\\dfrac{\\frac{y}{x} + \\frac{40-y}{1.25x}}{\\frac{40}{x}}\\).\n" +
    "Step 3 — Every term carries \\(\\tfrac1x\\), so \\(x\\) cancels completely: the ratio is \\(\\dfrac{y + 0.8(40 - y)}{40}\\).\n" +
    "Step 4 — So the answer depends on \\(y\\) alone. Statement (2) gives \\(y = 20\\), which pins it: \\(\\dfrac{20 + 16}{40} = 90\\%\\) — [[sufficient]].\n" +
    "Step 5 — Statement (1) gives \\(x = 48\\), which the ratio does not involve at all — [[not sufficient]].",
  fast: "Before testing either statement, simplify the quantity being asked for. It is a *ratio of two times over the same distance*, so the common speed factor \\(x\\) divides out — and once you see that, the value of \\(x\\) is visibly irrelevant no matter what it is.\n" +
    "This is the single most valuable Data Sufficiency habit: reduce the question to its essential unknowns first, then look at the statements.",
  traps: "(A) picks the statement that supplies the variable appearing most prominently in the stem — but \\(x\\) cancels, so knowing it adds nothing.\n" +
    "(C) is the cautious answer of someone who never simplified: with both values in hand you can certainly compute the ratio, but that overstates what is needed.\n" +
    "(D) would require \\(x\\) alone to work, which it cannot.\n" +
    "(E) understates the pair — one statement is genuinely enough.\n" +
    "The trap is doing the work in the wrong order: testing statements against an unsimplified expression makes both look necessary.",
  take: "Simplify the target expression before reading the statements. In ratio-of-times questions over the same distance, the speed variable usually cancels."
},

"quant-live-2#7": {
  steps: "Step 1 — Convert the target into feet per second so it can be compared with the statements. Six miles is \\(6 \\times 5280 = 31{,}680\\) feet; half an hour is \\(1800\\) seconds.\n" +
    "Step 2 — The threshold speed is \\(31{,}680 \\div 1800 = 17.6\\) ft/sec. The distance exceeds 6 miles exactly when the average speed exceeds 17.6 ft/sec.\n" +
    "Step 3 — Statement (1): speed \\(> 16\\). That range includes 17 (distance under 6 miles) and 20 (distance over 6 miles) — [[not sufficient]].\n" +
    "Step 4 — Statement (2): speed \\(< 18\\). That range includes 10 (under) and 17.9 (over) — [[not sufficient]].\n" +
    "Step 5 — Together: \\(16 < \\text{speed} < 18\\). The critical value 17.6 sits strictly inside that interval, so both answers remain possible — [[not sufficient]].",
  fast: "Convert once, at the start: 6 miles in 30 minutes is 12 mph, and 12 mph is \\(\\tfrac{12 \\times 5280}{3600} = 17.6\\) ft/sec. Then the whole question is whether the statements' interval excludes 17.6 — and \\((16, 18)\\) plainly contains it.\n" +
    "The trap this question sets is that 16 and 18 straddle 17.6 so narrowly that the interval *looks* decisive.",
  traps: "(A) and (B) each treat a one-sided bound as decisive, but a bound only settles the question if it sits on the far side of 17.6 — \"greater than 16\" and \"less than 18\" both leave 17.6 inside the permitted range.\n" +
    "(C) is the answer most people choose, because combining two tight bounds feels conclusive. Test the endpoints: at 16.5 ft/sec the distance is about 5.6 miles; at 17.9 it is about 6.1. Both satisfy both statements and give opposite answers.\n" +
    "(D) requires each alone to work, which is even stronger than (C).\n" +
    "Always compute the critical value first, then ask whether the statements' range lies wholly on one side of it.",
  take: "For yes/no questions with inequalities, find the threshold value, then check whether each statement's range falls entirely on one side. A range containing the threshold is never sufficient."
},

"quant-live-2#8": {
  steps: "Step 1 — Work out where each person is when the cyclist stops. In 5 minutes \\(= \\tfrac1{12}\\) hour:\n" +
    "Step 2 — The cyclist covers \\(20 \\times \\tfrac1{12} = \\tfrac53\\) miles past the point where he passed her.\n" +
    "Step 3 — The hiker covers \\(4 \\times \\tfrac1{12} = \\tfrac13\\) mile in the same 5 minutes.\n" +
    "Step 4 — The gap between them is \\(\\tfrac53 - \\tfrac13 = \\tfrac43\\) miles.\n" +
    "Step 5 — The cyclist is now stationary, so the hiker closes the gap at her full 4 mph: \\(\\dfrac{4/3}{4} = \\dfrac13\\) hour.\n" +
    "Step 6 — That is \\(20\\) minutes.",
  fast: "Build the gap with relative speed: while both move, the cyclist gains at \\(20 - 4 = 16\\) mph for 5 minutes, which is \\(16 \\times \\tfrac1{12} = \\tfrac43\\) miles. Then the closing rate is 4 mph because only the hiker is moving.\n" +
    "A neat proportional check: the gap was opened at 16 mph and is closed at 4 mph, so closing takes four times as long as opening — \\(4 \\times 5 = 20\\) minutes.",
  traps: "(B) 15 comes from using a relative closing speed of 16 mph for the second phase too, forgetting that the cyclist has stopped.\n" +
    "(D) 25 and (E) 26.66 add the original 5 minutes onto the answer; the question asks how long the cyclist must *wait*, which begins when he stops.\n" +
    "(A) 6.66 uses the cyclist's distance of \\(\\tfrac53\\) miles with the wrong divisor.\n" +
    "The two phases have different relative speeds — 16 mph while both move, 4 mph once one stops — and mixing them is the whole difficulty.",
  take: "Relative speed changes when one party stops. Opened at rate \\(a\\) and closed at rate \\(b\\), a gap takes \\(\\frac ab\\) times as long to close as it took to open."
},

"quant-live-2#9": {
  steps: "Step 1 — Write both times: upstream \\(\\dfrac{90}{v-3}\\), downstream \\(\\dfrac{90}{v+3}\\).\n" +
    "Step 2 — The upstream trip is half an hour longer: \\(\\dfrac{90}{v-3} - \\dfrac{90}{v+3} = \\dfrac12\\).\n" +
    "Step 3 — Combine over the common denominator \\(v^2 - 9\\): the numerator is \\(90\\big[(v+3) - (v-3)\\big] = 90 \\times 6 = 540\\).\n" +
    "Step 4 — So \\(\\dfrac{540}{v^2 - 9} = \\dfrac12\\), giving \\(v^2 - 9 = 1080\\).\n" +
    "Step 5 — \\(v^2 = 1089\\), so \\(v = 33\\).\n" +
    "Step 6 — Downstream time: \\(\\dfrac{90}{33 + 3} = \\dfrac{90}{36} = 2.5\\) hours.",
  fast: "The difference-of-two-fractions collapses beautifully because the numerators match: subtracting gives \\(\\dfrac{90 \\cdot 6}{v^2 - 9}\\) in one line, with no expansion needed. Then recognise \\(1089 = 33^2\\) (it is \\(33 \\times 33\\), and \\(3^2 \\times 11^2\\)) and the rest is arithmetic.\n" +
    "Back-solving works too: the choices are downstream times, so each gives \\(v + 3 = 90/t\\) directly — test \\(t = 2.5\\), get \\(v = 33\\), and check that \\(90/30 - 90/36 = 3 - 2.5 = 0.5\\) ✓.",
  traps: "The five choices are spaced only 0.1 apart, so estimation cannot separate them — this question rewards exact algebra or a clean back-solve.\n" +
    "(B) 2.4 corresponds to \\(v + 3 = 37.5\\), which makes the upstream time \\(90/31.5 \\approx 2.857\\) and a difference of about 0.46 hours, not 0.5.\n" +
    "(C) 2.3, (D) 2.2 and (E) 2.1 fail the same check by progressively wider margins.\n" +
    "A common algebraic slip is expanding \\((v-3)(v+3)\\) as \\(v^2 + 9\\) or subtracting the fractions in the wrong order, which yields a negative \\(v^2\\) and no valid answer.",
  take: "\\(\\frac{d}{v-c} - \\frac{d}{v+c} = \\frac{2cd}{v^2-c^2}\\) — the numerators cancel cleanly. With numeric answer choices, back-solving is often faster than solving."
},

"quant-live-2#10": {
  steps: "Step 1 — Let \\(x\\) be the miles driven at 55 mph; the remaining \\(500 - x\\) miles are at 60 mph.\n" +
    "Step 2 — Fuel used is miles divided by miles-per-gallon: \\(\\dfrac{x}{4.5} + \\dfrac{500 - x}{3.5} = 120\\).\n" +
    "Step 3 — Clear the decimals by multiplying through by \\(31.5\\) (which is \\(4.5 \\times 7 = 3.5 \\times 9\\)): \\(7x + 9(500 - x) = 3780\\).\n" +
    "Step 4 — Expand: \\(7x + 4500 - 9x = 3780\\), so \\(-2x = -720\\).\n" +
    "Step 5 — \\(x = 360\\) miles at 55 mph.\n" +
    "Step 6 — Check: \\(360/4.5 = 80\\) gallons and \\(140/3.5 = 40\\) gallons, totalling 120 ✓.",
  fast: "Use a weighted-average shortcut instead of algebra. Overall the truck got \\(500/120 \\approx 4.167\\) miles per gallon — but mileage does not average by distance, so work in gallons per mile instead: \\(\\tfrac1{4.5}\\) and \\(\\tfrac1{3.5}\\) against an overall \\(\\tfrac{120}{500} = 0.24\\).\n" +
    "In practice the cleanest route is Step 3: multiplying by 31.5 turns awkward decimals into the integers 7 and 9, and the rest is one line.",
  traps: "(A) 140 is the distance driven at 60 mph — the complement of the answer, and the trap for anyone who solves for the wrong variable.\n" +
    "(C) 250 splits the trip evenly, which would use \\(250/4.5 + 250/3.5 \\approx 127\\) gallons, not 120.\n" +
    "(D) 300 and (B) 200 come from setting up the equation with the mileages multiplied rather than divided — \\(4.5x + 3.5(500-x)\\) has no sensible units.\n" +
    "Remember that miles per gallon sits in the denominator: gallons \\(=\\) miles \\(\\div\\) mpg.",
  take: "Fuel consumed = distance ÷ mpg. Clear decimal denominators by multiplying through by their least common multiple, and check which of the two distances the question wants."
},

"quant-live-2#11": {
  steps: "Step 1 — Let the city mileage be \\(m\\) miles per gallon; the highway mileage is \\(m + 6\\).\n" +
    "Step 2 — The tank is the same size in both cases, and tank size \\(=\\) miles per tankful \\(\\div\\) miles per gallon.\n" +
    "Step 3 — So \\(\\dfrac{336}{m} = \\dfrac{462}{m + 6}\\).\n" +
    "Step 4 — Cross-multiply: \\(336(m + 6) = 462m\\), i.e. \\(336m + 2016 = 462m\\).\n" +
    "Step 5 — \\(126m = 2016\\), so \\(m = 16\\).\n" +
    "Step 6 — Check: a 16 mpg city rate means a \\(336/16 = 21\\)-gallon tank, and \\(21 \\times 22 = 462\\) highway miles ✓.",
  fast: "The tank size is the hidden constant — that is the equation. Notice also that \\(462 - 336 = 126\\) miles is the extra range the 6 extra mpg buys, so the tank holds \\(126 \\div 6 = 21\\) gallons. Then the city mileage is \\(336 \\div 21 = 16\\) with no algebra at all.\n" +
    "That difference trick works whenever two totals share a common multiplier.",
  traps: "(D) 22 is the *highway* mileage, \\(m + 6\\) — the other half of the solved pair, and the answer to a question the stem did not ask.\n" +
    "(C) 21 is the tank size in gallons, which appears prominently in the fast route and is easy to grab.\n" +
    "(A) 14 and (E) 27 come from setting the equation up with the 6 on the wrong side — using \\(m - 6\\) for the highway rate reverses the relationship, since highway mileage is the larger one.\n" +
    "Three of the five choices are genuine quantities in this problem; label each number with what it measures before answering.",
  take: "When two scenarios share a constant (here the tank), set the two expressions for it equal. The difference of the totals divided by the difference of the rates gives that constant directly."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-2#12": {
  steps: "Step 1 — Driving time is distance divided by speed, so track what happens to each.\n" +
    "Step 2 — Distance falls by \\(20\\%\\): a factor of \\(0.80\\).\n" +
    "Step 3 — Speed rises by \\(25\\%\\): a factor of \\(1.25\\).\n" +
    "Step 4 — New time factor: \\(\\dfrac{0.80}{1.25} = 0.64\\).\n" +
    "Step 5 — The time is \\(64\\%\\) of what it was, so the reduction is \\(100 - 64 = 36\\%\\).",
  fast: "Both factors are friendly fractions: \\(0.8 = \\tfrac45\\) and \\(1.25 = \\tfrac54\\). Dividing gives \\(\\tfrac45 \\times \\tfrac45 = \\tfrac{16}{25} = 0.64\\) — the two changes happen to compound into a clean square. Read the reduction as \\(1 - 0.64\\).",
  traps: "(C) 37% is a decoy for anyone who estimates rather than computes; the true figure is exactly 36, and the near-miss punishes rounding.\n" +
    "(D) 45% comes from adding the two percentages (\\(20 + 25\\)) — the standard additive error with multiplicative changes.\n" +
    "(A) 16% comes from reporting \\(0.8 \\times 1.25 = 1.0\\)-style arithmetic gone slightly wrong, or from \\(1 - 0.84\\).\n" +
    "(E) 56% overshoots, typically from computing \\(1 - 0.8 \\times 0.55\\) or from dividing the wrong way round.\n" +
    "The direction matters too: a higher speed *reduces* time, so speed belongs in the denominator.",
  take: "Time = distance ÷ speed, so combine the change factors as a quotient. A resulting factor of \\(k\\) means a reduction of \\((1-k)\\), not of \\(k\\)."
},

"quant-live-2#13": {
  steps: "Step 1 — Work in rates, in widgets per hour. Let \\(a\\) and \\(b\\) be the two machines' rates.\n" +
    "Step 2 — Together they make 1 widget in 3 hours: \\(a + b = \\tfrac13\\).\n" +
    "Step 3 — With A doubled, 1 widget takes 2 hours: \\(2a + b = \\tfrac12\\).\n" +
    "Step 4 — Subtract the first equation from the second: \\(a = \\tfrac12 - \\tfrac13 = \\tfrac16\\).\n" +
    "Step 5 — A rate of \\(\\tfrac16\\) widget per hour means A alone takes \\(6\\) hours.",
  fast: "Doubling A's rate adds exactly one more \\(a\\) to the combined rate, so the *increase* in combined rate is \\(a\\) itself: \\(\\tfrac12 - \\tfrac13 = \\tfrac16\\). One subtraction gives A's rate directly, and the reciprocal gives the time.\n" +
    "That is the general move: whenever a problem doubles one worker, the change in the joint rate is that worker's rate.",
  traps: "(B) 2 and (C) 3 are the two times quoted in the stem, repeated as answers — always suspect a choice that simply restates a given.\n" +
    "(A) \\(\\tfrac12\\) is A's rate mistaken for a time, or the reciprocal taken at the wrong moment.\n" +
    "(D) 5 comes from working in times rather than rates: subtracting \\(3 - 2 = 1\\) and building from there, which is invalid because times do not add.\n" +
    "The single rule that prevents all of these: rates add, times do not.",
  take: "Convert every work statement into a rate before combining. Doubling one worker's rate raises the joint rate by exactly that worker's original rate."
},

"quant-live-2#14": {
  steps: "Step 1 — Rates per hour: Tom \\(\\tfrac16\\), Peter \\(\\tfrac13\\), John \\(\\tfrac12\\).\n" +
    "Step 2 — Hour 1, Tom alone: \\(\\tfrac16\\) of the room is painted.\n" +
    "Step 3 — Hour 2, Tom and Peter: they add \\(\\tfrac16 + \\tfrac13 = \\tfrac12\\). Running total \\(\\tfrac16 + \\tfrac12 = \\tfrac23\\).\n" +
    "Step 4 — The remaining \\(\\tfrac13\\) is done by all three at \\(\\tfrac16 + \\tfrac13 + \\tfrac12 = 1\\) room per hour, which takes \\(\\tfrac13\\) hour.\n" +
    "Step 5 — Peter worked in hour 2 and in that final \\(\\tfrac13\\) hour: \\(1 + \\tfrac13 = \\tfrac43\\) hours.\n" +
    "Step 6 — Peter's share: \\(\\tfrac43 \\times \\tfrac13 = \\tfrac49\\) of the job.",
  fast: "The three rates sum to exactly 1 room per hour, which makes the final stage trivial — the leftover \\(\\tfrac13\\) takes \\(\\tfrac13\\) hour. Spot that first and the timeline collapses.\n" +
    "Then the question is only about Peter: hours worked times his rate. Do not compute anyone else's share.",
  traps: "(C) \\(\\tfrac13\\) is Peter's hourly rate, mistaken for his fraction of the job — the most natural slip.\n" +
    "(D) \\(\\tfrac7{18}\\) is what you get by giving Peter only the second hour plus a mis-sized slice of the final stage.\n" +
    "(B) \\(\\tfrac16\\) is Tom's rate, and (A) \\(\\tfrac19\\) is a fraction of the last stage alone.\n" +
    "The two things to track carefully are *how long* Peter worked (\\(\\tfrac43\\) hours, not 1 and not 2) and the fact that his share is rate × time, not time ÷ total time.",
  take: "Build a stage-by-stage timeline, then compute the person's share as their rate times the hours they actually worked."
},

"quant-live-2#15": {
  steps: "Step 1 — The question is a yes/no: are the two rates equal, i.e. is \\(a = b\\)? Both \\(a\\) and \\(b\\) are even integers.\n" +
    "Step 2 — Statement (1): noon to 4:48 p.m. is \\(4.8 = \\tfrac{24}{5}\\) hours, so \\(\\tfrac1a + \\tfrac1b = \\tfrac{5}{24}\\).\n" +
    "Step 3 — Equal rates would require \\(\\tfrac2a = \\tfrac5{24}\\), i.e. \\(a = 9.6\\) — not an integer, let alone an even one. So the answer is a definite [[no]].\n" +
    "Step 4 — For completeness, the even-integer pairs that do work are \\((6, 24)\\) and \\((8, 12)\\) with their reverses, and in every one the rates differ. Statement (1) is [[sufficient]].\n" +
    "Step 5 — Statement (2): \\((a+b)^2 = 400\\) gives \\(a + b = 20\\) (times are positive). That allows \\(a = b = 10\\) — rates equal, answer yes — and \\(a = 8, b = 12\\) — rates unequal, answer no. Both are even integers, so [[not sufficient]].",
  fast: "For a yes/no question you do not need to find \\(a\\) and \\(b\\) — you only need to know whether \"equal\" is possible. Test the equal case directly: if \\(a = b\\) then \\(\\tfrac2a = \\tfrac5{24}\\), giving \\(a = 9.6\\), which the even-integer condition forbids. Statement (1) is settled in one line.\n" +
    "Statement (2) falls to one counterexample pair, and \\(10 + 10\\) versus \\(8 + 12\\) is the obvious pair to try.",
  traps: "(B) inverts the two statements, and it is tempting because (2) looks more algebraic and (1) looks like mere scheduling detail.\n" +
    "(C) is the answer of someone who insists on finding \\(a\\) and \\(b\\) uniquely — but a yes/no question needs only a consistent answer, not unique values. Statement (1) never pins down which pair it is, and it does not have to.\n" +
    "(D) would require (2) to work alone, and the pair \\((10,10)\\) versus \\((8,12)\\) kills it.\n" +
    "(E) understates (1).\n" +
    "The \"even integers\" constraint is not decoration — it is what makes 9.6 inadmissible and turns (1) into a definite no.",
  take: "A definite \"no\" is just as sufficient as a definite \"yes\". Test the equality case directly instead of solving for the variables, and use every stated constraint on the domain."
},

"quant-live-2#16": {
  steps: "Step 1 — Measure the job in machine-days. Six machines for 12 days is \\(6 \\times 12 = 72\\) machine-days of work.\n" +
    "Step 2 — To finish in 8 days you need \\(72 \\div 8 = 9\\) machines.\n" +
    "Step 3 — You already have 6, so you need \\(9 - 6 = 3\\) additional machines.",
  fast: "Machines and days are inversely proportional for a fixed job, so cutting the time from 12 days to 8 — a factor of \\(\\tfrac23\\) — requires multiplying the machines by \\(\\tfrac32\\): \\(6 \\times \\tfrac32 = 9\\). Then subtract the six you have.\n" +
    "The machine-days product \\(6 \\times 12 = 72\\) is the same idea and is worth writing down; it stays constant.",
  traps: "(D) 6 is the total number of machines you would need if you doubled the fleet, and also just the given count repeated.\n" +
    "(C) 4 comes from computing \\(12 - 8 = 4\\) — subtracting days and reporting the result as machines, which mixes units.\n" +
    "(E) 7 and (A) 2 come from arithmetic slips in \\(72 \\div 8\\).\n" +
    "The word that decides this question is \"additional\": 9 is the total needed, and 3 is the answer. Whenever a work question asks for \"how many more\", finish with the subtraction.",
  take: "For a fixed job, (machines) × (days) is constant. Solve for the total needed, then subtract what you already have if the question says \"additional\"."
},

"quant-live-2#17": {
  steps: "Step 1 — Convert each pair's time into a combined rate (tanks per hour):\n" +
    "\\(a + b = \\dfrac{1}{6/5} = \\dfrac56\\); \\(a + c = \\dfrac{1}{3/2} = \\dfrac23\\); \\(b + c = \\dfrac12\\).\n" +
    "Step 2 — Add all three equations. Each pump appears in exactly two of them, so the sum is \\(2(a + b + c)\\).\n" +
    "Step 3 — Right side: \\(\\tfrac56 + \\tfrac23 + \\tfrac12 = \\tfrac{5 + 4 + 3}{6} = \\tfrac{12}{6} = 2\\).\n" +
    "Step 4 — So \\(2(a + b + c) = 2\\), giving \\(a + b + c = 1\\) tank per hour.\n" +
    "Step 5 — Time for all three together: \\(1 \\div 1 = 1\\) hour.",
  fast: "Never solve for the individual rates. Adding the three pair-rates counts every pump twice, so halving the sum gives the three-pump rate immediately. That trick works for any \"three pairs, find the trio\" problem.\n" +
    "Here the sum is exactly 2, so the trio's rate is exactly 1 — the numbers were chosen to make the final division disappear.",
  traps: "(B) \\(\\tfrac12\\) is the *rate* halved rather than the sum halved — that is, \\(a+b+c\\) computed as \\(\\tfrac12 \\times\\) something, or the reciprocal taken twice.\n" +
    "(A) \\(\\tfrac13\\) and (C) \\(\\tfrac23\\) come from averaging the three given times (\\(\\tfrac65, \\tfrac32, 2\\)) instead of adding rates — times never average like that.\n" +
    "(D) \\(\\tfrac56\\) is the rate of pumps A and B, quoted as a time.\n" +
    "The unit slip to guard against: \\(\\tfrac65\\) hours corresponds to a rate of \\(\\tfrac56\\), and mixing the two up flows through the whole problem.",
  take: "Sum the pair-rates and halve: \\((a{+}b) + (a{+}c) + (b{+}c) = 2(a{+}b{+}c)\\). Convert times to rates before combining anything."
},

"quant-live-2#18": {
  steps: "Step 1 — Work out loads per machine over the 2 hours. A large machine takes 30 minutes per load, so it does \\(4\\) loads. A small one takes 20 minutes, so it does \\(6\\).\n" +
    "Step 2 — Total loads \\(= 4m + 6n\\).\n" +
    "Step 3 — Factor it: \\(4m + 6n = 2(2m + 3n)\\). The total depends only on the combination \\(2m + 3n\\).\n" +
    "Step 4 — Statement (2) gives \\(2m + 3n = 55\\) exactly, so the total is \\(110\\) — [[sufficient]], with no need to know \\(m\\) or \\(n\\) individually.\n" +
    "Step 5 — Statement (1) gives \\(n = 3m\\), a ratio only. With \\(m = 1\\) the total is \\(4 + 18 = 22\\); with \\(m = 2\\) it is \\(44\\) — [[not sufficient]].",
  fast: "Write the target expression and factor it *before* looking at the statements. Once you see \\(4m + 6n = 2(2m+3n)\\), statement (2) is visibly the exact quantity you need, doubled.\n" +
    "This is the recurring Data Sufficiency pattern: you rarely need each variable, only the specific combination the question asks about.",
  traps: "(A) picks the statement that looks like it relates the machines, but a ratio alone can never fix a total.\n" +
    "(C) is the trap for anyone who tries to solve for \\(m\\) and \\(n\\) individually — the two statements together do give \\(m = 5, n = 15\\), but that is far more than the question needs.\n" +
    "(D) would require the ratio alone to work.\n" +
    "(E) understates (2).\n" +
    "The habit worth building: ask \"what expression do I actually need?\" and check whether a statement hands you that expression whole.",
  take: "Factor the target expression first. A statement that supplies the needed *combination* of variables is sufficient even when neither variable is determined."
},

"quant-live-2#19": {
  steps: "Step 1 — Machine X's rate is \\(\\tfrac19\\) job per hour.\n" +
    "Step 2 — In its first 3 hours alone, X completes \\(3 \\times \\tfrac19 = \\tfrac13\\) of the job.\n" +
    "Step 3 — The remaining \\(\\tfrac23\\) is done by both machines in 4 hours, so their combined rate is \\(\\dfrac{2/3}{4} = \\dfrac16\\).\n" +
    "Step 4 — Y's rate is the difference: \\(\\tfrac16 - \\tfrac19\\).\n" +
    "Step 5 — Over eighteenths: \\(\\tfrac3{18} - \\tfrac2{18} = \\tfrac1{18}\\).\n" +
    "Step 6 — A rate of \\(\\tfrac1{18}\\) means Y alone would take \\(18\\) hours.",
  fast: "Two subtractions carry the whole problem: work remaining (\\(1 - \\tfrac13\\)) and rate remaining (\\(\\tfrac16 - \\tfrac19\\)). Take eighteenths as your working denominator from the start — X is \\(\\tfrac2{18}\\), the pair is \\(\\tfrac3{18}\\), so Y is \\(\\tfrac1{18}\\) by inspection.\n" +
    "Note the sanity check: Y is slower than X, so its solo time must exceed 9 hours.",
  traps: "(D) \\(4\\tfrac12\\) and (E) \\(3\\tfrac23\\) are both *shorter* than X's 9 hours, which is impossible — the pair together takes 6 hours' worth of rate, so Y must be the slower machine. That single observation eliminates two choices instantly.\n" +
    "(C) \\(7\\tfrac15\\) is the time for the two machines working together on the whole job from the start, a genuine quantity but not the one asked.\n" +
    "(B) \\(13\\tfrac12\\) comes from computing the joint rate as \\(\\tfrac23 \\div 4\\) but then subtracting times rather than rates.\n" +
    "Rates subtract; times never do.",
  take: "Joint rate minus known rate gives the unknown rate. Sanity-check the direction: if the pair is only slightly faster than one machine, the other must be much slower."
},

"quant-live-2#20": {
  steps: "Step 1 — Let Tom take \\(t\\) hours to type 20 pages, so his rate is \\(\\tfrac{20}{t}\\) pages per hour. Jack takes \\(t + 2\\) hours, a rate of \\(\\tfrac{20}{t+2}\\).\n" +
    "Step 2 — Together they type 25 pages in 3 hours, a combined rate of \\(\\tfrac{25}{3}\\) pages per hour.\n" +
    "Step 3 — So \\(\\dfrac{20}{t} + \\dfrac{20}{t+2} = \\dfrac{25}{3}\\).\n" +
    "Step 4 — Test \\(t = 4\\): \\(\\tfrac{20}{4} + \\tfrac{20}{6} = 5 + \\tfrac{10}{3} = \\tfrac{25}{3}\\) ✓.\n" +
    "Step 5 — Jack's time is \\(t + 2 = 6\\) hours.\n" +
    "Step 6 — Check the rates: Tom 5 pages/hour, Jack \\(\\tfrac{10}{3}\\); together \\(\\tfrac{25}{3}\\), and \\(3 \\times \\tfrac{25}{3} = 25\\) pages ✓.",
  fast: "The answer choices *are* Jack's time, so back-solve rather than expanding the quadratic. Take (A) 6: Jack does \\(\\tfrac{20}{6}\\) pages an hour, Tom takes 4 hours and does 5 — together \\(\\tfrac{25}{3}\\), which is 25 pages in 3 hours. First candidate, done.\n" +
    "Clearing the denominators algebraically leads to \\(5t^2 - 14t - 24 = 0\\), which is solvable but slower than one substitution.",
  traps: "(C) 8 and (D) 10 assume a much slower Jack; testing either shows the pair could not reach 25 pages in 3 hours.\n" +
    "(E) 5 is Tom's *rate* in pages per hour, not a time — a units confusion the numbers invite.\n" +
    "(B) 7 comes from solving the quadratic with a sign slip, giving \\(t = 5\\).\n" +
    "The other frequent error is answering with Tom's time, 4 hours, which is not offered — a reminder to check whose time the question wants before scanning the list.",
  take: "When the choices are the unknown itself, substitute them into the rate equation rather than solving. Confirm whose time or rate the question asks for."
},

"quant-live-2#21": {
  steps: "Step 1 — The question wants the total time for 400 km.\n" +
    "Step 2 — Statement (1) covers only the first 200 km, in 2.5 hours. The second 200 km could take any amount of time, so the total is unknown — [[not sufficient]].\n" +
    "Step 3 — Statement (2): let the actual time be \\(t\\), so the average speed is \\(\\tfrac{400}{t}\\). A speed 20 km/h greater would give a time of \\(t - 1\\): \\(\\dfrac{400}{t} + 20 = \\dfrac{400}{t - 1}\\).\n" +
    "Step 4 — Multiply through by \\(t(t-1)\\): \\(400(t-1) + 20t(t-1) = 400t\\), which simplifies to \\(20t^2 - 20t - 400 = 0\\), i.e. \\(t^2 - t - 20 = 0\\).\n" +
    "Step 5 — Factor: \\((t - 5)(t + 4) = 0\\). Time must be positive, so \\(t = 5\\) hours — [[sufficient]].",
  fast: "You do not have to solve the quadratic to answer a Data Sufficiency question — you only have to know it has exactly one positive root. A quadratic with a negative constant term has roots of opposite signs, so precisely one is admissible. That reasoning settles (2) in seconds.\n" +
    "Statement (1) fails on an even simpler observation: it describes half the journey and says nothing about the other half.",
  traps: "(A) treats a partial-journey speed as though it applied throughout — the stem never says the speed was constant.\n" +
    "(C) is the cautious choice of someone who does not trust (2) to pin a unique value. It does: the negative root is inadmissible for a time.\n" +
    "(D) would need (1) alone to work.\n" +
    "(E) understates (2).\n" +
    "The general caution runs the other way too — a quadratic yielding two *positive* roots would be insufficient, so always check the signs rather than assuming uniqueness.",
  take: "For Data Sufficiency, establishing that an equation has exactly one admissible solution is enough — you need not compute it. Check the signs of a quadratic's roots against the physical domain."
},

"quant-live-2#22": {
  steps: "Step 1 — Average speed for the round trip is total distance ÷ total time, so you need the return speed, not the distance.\n" +
    "Step 2 — Statement (1): the return took \\(50\\%\\) longer over the same distance, so the return time is \\(1.5\\) times the outbound time and the return speed is \\(\\tfrac{40}{1.5} = \\tfrac{80}{3}\\) mph.\n" +
    "Step 3 — Let the one-way distance be \\(d\\). Outbound time \\(\\tfrac{d}{40}\\); return time \\(\\tfrac{1.5d}{40}\\); total \\(\\tfrac{2.5d}{40}\\).\n" +
    "Step 4 — Average \\(= \\dfrac{2d}{2.5d/40} = \\dfrac{80}{2.5} = 32\\) mph. The \\(d\\) cancels, so no distance is needed — [[sufficient]].\n" +
    "Step 5 — Statement (2) gives the distance, 165 miles, but nothing about the return speed or time — [[not sufficient]].",
  fast: "Average speed over a there-and-back trip depends only on the two speeds, never on the distance. Once you see that, statement (1) — which fixes the return speed relative to the outbound one — must be sufficient, and statement (2) — which fixes only the distance — cannot be.\n" +
    "You never have to compute the 32 mph to answer the question.",
  traps: "(B) picks the statement that supplies a concrete number, which is a persistent Data Sufficiency temptation; a distance alone tells you nothing about how fast the return leg was driven.\n" +
    "(C) is the trap for anyone who believes the distance is needed to compute an average speed. It cancels — try it with \\(d = 60\\) and \\(d = 120\\) and you get 32 mph both times.\n" +
    "(D) would require the distance alone to work.\n" +
    "(E) understates (1).\n" +
    "The related trap inside statement (1) is answering \\(\\tfrac{40 + 80/3}{2}\\) — averaging the two speeds gives about 33.3, not 32, because the legs take different times.",
  take: "Round-trip average speed depends only on the two leg speeds; the distance always cancels. And it is the harmonic mean, never the arithmetic mean, of those speeds."
}

});
