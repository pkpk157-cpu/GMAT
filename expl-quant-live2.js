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
