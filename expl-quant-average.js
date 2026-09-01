/* Rewritten explanations — averages and weighted averages.

   One idea does most of the work: an average is a total in disguise. Convert
   every average into "count × average = total", and nearly every question here
   becomes one subtraction. The second idea is the deviation method — track how
   far each item sits from the average rather than the values themselves — which
   is what makes the cricket-average and new-member questions instant. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-average-ex#1": {
  steps: "Step 1 — Convert each average into a total, since only totals can be added.\n" +
    "Step 2 — First group: \\(30 \\times 60 = 1800\\) kg.\n" +
    "Step 3 — Second group: \\(10 \\times 56 = 560\\) kg.\n" +
    "Step 4 — Combined total: \\(1800 + 560 = 2360\\) kg over 40 boys.\n" +
    "Step 5 — \\(\\dfrac{2360}{40} = 59\\) kg.",
  fast: "Use deviations from the larger group's average. Take 60 as the baseline: the 10 lighter boys are 4 kg below it, a total deficit of 40 kg spread over 40 boys — exactly 1 kg each.\n" +
    "So the average is \\(60 - 1 = 59\\). One multiplication, one division.",
  traps: "(B) 58 is the plain average of 60 and 56, which would be right only if the groups were the same size. Since three-quarters of the boys are in the 60 kg group, the answer must sit much closer to 60.\n" +
    "(A) 58.5 and (C) 57 push further in the same wrong direction.\n" +
    "(E) 59.5 overshoots — it would need the light group to be smaller than it is.",
  take: "A weighted average always lies between the two averages and nearer the bigger group. Bounding first tells you the answer is between 58 and 60, which alone eliminates three choices."
},

"quant-average-ex#2": {
  steps: "Step 1 — Turn every average into a total.\n" +
    "Step 2 — All six: \\(6 \\times 3.95 = 23.7\\).\n" +
    "Step 3 — First pair: \\(2 \\times 3.4 = 6.8\\). Second pair: \\(2 \\times 3.85 = 7.7\\).\n" +
    "Step 4 — Remaining pair's total: \\(23.7 - 6.8 - 7.7 = 9.2\\).\n" +
    "Step 5 — Their average: \\(\\dfrac{9.2}{2} = 4.6\\).",
  fast: "Work in deviations from 3.95. The first pair is \\(0.55\\) below it each (\\(-1.10\\) in total); the second pair is \\(0.10\\) below each (\\(-0.20\\)). The deviations must sum to zero, so the last pair is \\(+1.30\\) between them, i.e. \\(+0.65\\) each.\n" +
    "\\(3.95 + 0.65 = 4.6\\). No large numbers at any point.",
  traps: "(A) 4.5 and (C) 4.7 straddle the answer, punishing anyone who works in decimals and drops a digit.\n" +
    "(D) 4.8 and (E) 4.9 are what you get by forgetting to halve the remaining total of 9.2.\n" +
    "A quick sanity check: the last pair must be above 3.95 because both other pairs are below it — that alone rules nothing out here, but it confirms the direction.",
  take: "Averages cannot be added; totals can. Alternatively track deviations from the overall mean — they must sum to exactly zero, which is often the fastest route of all."
},

"quant-average-ex#3": {
  steps: "Step 1 — Let the original group have \\(n\\) people, averaging 16 years, so their total age is \\(16n\\).\n" +
    "Step 2 — The 20 newcomers total \\(20 \\times 15 = 300\\) years.\n" +
    "Step 3 — The combined average is 15.5: \\(\\dfrac{16n + 300}{n + 20} = 15.5\\).\n" +
    "Step 4 — Cross-multiply: \\(16n + 300 = 15.5n + 310\\).\n" +
    "Step 5 — \\(0.5n = 10\\), so \\(n = 20\\).",
  fast: "Alligation on the two averages. The blend at 15.5 sits 0.5 above the newcomers' 15 and 0.5 below the original group's 16 — equal distances, so the two groups must be the [[same size]].\n" +
    "There are 20 newcomers, so there were 20 originally. No equation at all.",
  traps: "(C) 22, (D) 24 and (E) 26 all assume the original group is larger, which would drag the blend above the midpoint of 15.5.\n" +
    "(B) 18 assumes it is smaller, dragging the blend below.\n" +
    "The blend landing exactly halfway is the giveaway, and it is the one thing you can read off before doing any arithmetic.",
  take: "When the combined average lands exactly midway between two group averages, the groups are equal in size. More generally, the group sizes are in the ratio of the [[opposite]] distances from the blend."
},

"quant-average-ex#4": {
  steps: "Step 1 — Students' total age: \\(36 \\times 14 = 504\\) years.\n" +
    "Step 2 — With the teacher there are 37 people averaging \\(14 + 1 = 15\\) years.\n" +
    "Step 3 — New total: \\(37 \\times 15 = 555\\) years.\n" +
    "Step 4 — The teacher's age is the difference: \\(555 - 504 = 51\\).",
  fast: "Think of it as the teacher paying for the raise. The teacher must supply the new average, 15, [[plus]] one extra year for each of the 36 students whose average has just risen by 1.\n" +
    "\\(15 + 36 = 51\\). One addition.",
  traps: "(B) 36 is the number of students reused as an age.\n" +
    "(A) 31 comes from adding the students' old average to the count incorrectly (\\(14 + 17\\)-style arithmetic).\n" +
    "(D) 48 and (E) 56 bracket the answer; note that the teacher must be older than 15 by exactly the number of students, so 51 is forced once you see the structure.",
  take: "New member raises the average by \\(d\\): their value is (new average) + \\(d \\times\\) (old count). This one line replaces the whole two-total calculation."
},

"quant-average-ex#5": {
  steps: "Step 1 — Let the average after 12 innings be \\(x\\). Before the 12th it was \\(x - 2\\), over 11 innings.\n" +
    "Step 2 — Runs before: \\(11(x - 2)\\). Runs after: \\(12x\\).\n" +
    "Step 3 — The 12th innings added 65: \\(11(x - 2) + 65 = 12x\\).\n" +
    "Step 4 — \\(11x - 22 + 65 = 12x\\), so \\(x = 43\\).",
  fast: "The 65 has two jobs: cover the new average of \\(x\\) for this innings, and pay for the 2-run rise across the 11 earlier innings.\n" +
    "So \\(65 = x + 11 \\times 2\\), giving \\(x = 65 - 22 = 43\\).\n" +
    "Every \"raises his average by \\(d\\)\" question is this one line: score = new average + \\(d \\times\\) (previous innings).",
  traps: "(A) 42 splits the difference between the old average (41) and the new (43) — the sign of muddling [[which]] average the question asks for. Using 12 innings in the surcharge (\\(65 - 24 = 41\\)) lands on the old one.\n" +
    "(D) 45 and (E) 46 come from adding the 2 rather than subtracting the surcharge.\n" +
    "(C) 44 is the near-miss for a slip of one innings.",
  take: "Score in the new innings = new average + (rise × number of previous innings). Count the [[previous]] innings, not the total — that off-by-one is what the wrong answers are for."
},

"quant-average-ex#6": {
  steps: "Step 1 — Run rate is runs per over, so runs = rate × overs.\n" +
    "Step 2 — Runs so far: \\(10 \\times 3.2 = 32\\).\n" +
    "Step 3 — Runs still needed: \\(282 - 32 = 250\\).\n" +
    "Step 4 — Overs remaining: 40.\n" +
    "Step 5 — Required rate: \\(\\dfrac{250}{40} = 6.25\\).",
  fast: "\\(32\\) scored, \\(250\\) to get, \\(40\\) overs left. \\(250/40 = 25/4 = 6.25\\).\n" +
    "Turning the division into a fraction and cancelling by 10 is faster than long division, and 25/4 is instantly recognisable.",
  traps: "(B) 6.50 would need 260 runs; (C) 6.75 would need 270. The choices step by 10 runs each, so a single arithmetic slip in \\(282 - 32\\) lands you on one of them.\n" +
    "(D) 7.00 is \\(280/40\\), what you get by forgetting the 32 already scored and rounding.\n" +
    "(E) 7.25 would need 290 runs — the top of the ten-run staircase, forty runs beyond the true 250. It is the farthest decoy, there to reward computing \\(282 - 32\\) exactly rather than roughly.\n" +
    "The overall required rate is \\(282/50 = 5.64\\) — the answer must be above that, since the first 10 overs came in below it.",
  take: "Rate questions are total questions: multiply out what has happened, subtract from the target, divide by what is left. And the required rate always exceeds the overall rate if you have started slowly."
},

"quant-average-ex#7": {
  steps: "Step 1 — Convert both averages into totals.\n" +
    "Step 2 — First 4 days: \\(4 \\times 30 = 120\\).\n" +
    "Step 3 — First 5 days: \\(5 \\times 32 = 160\\).\n" +
    "Step 4 — The 5th day is the difference: \\(160 - 120 = 40\\).",
  fast: "The 5th day must supply the new average of 32 plus the 2-per-day rise for the 4 earlier days: \\(32 + 4 \\times 2 = 40\\).\n" +
    "Same structure as the batting-average questions, and it avoids both multiplications.",
  traps: "(A) 32 is the new average reported as the day's figure — it ignores that the average [[rose]], which requires the new day to be above it.\n" +
    "(D) 36 and (C) 38 undershoot by counting fewer earlier days.\n" +
    "(E) 42 counts five earlier days instead of four.",
  take: "A new value that lifts the average by \\(d\\) must be (new average) + \\(d \\times\\) (number of earlier items). If the average rose, the new item is necessarily above the new average."
},

"quant-average-ex#8": {
  steps: "Step 1 — Let the average after 17 innings be \\(x\\); before it was \\(x - 3\\) over 16 innings.\n" +
    "Step 2 — \\(16(x - 3) + 87 = 17x\\).\n" +
    "Step 3 — \\(16x - 48 + 87 = 17x\\).\n" +
    "Step 4 — \\(x = 39\\).",
  fast: "\\(87 = x + 16 \\times 3\\), so \\(x = 87 - 48 = 39\\).\n" +
    "The score covers the new average once, plus the 3-run rise for each of the 16 innings that came before.",
  traps: "(A) 36 is \\(87 - 51\\), using 17 innings in the surcharge instead of 16.\n" +
    "(C) 42 and (D) 45 add the rise rather than subtracting the surcharge.\n" +
    "(E) 48 is the surcharge itself — a number that appears in the working and is easy to grab by mistake.",
  take: "The same one-liner as question 5 in this set. Once you recognise the shape, these take about eight seconds: score minus (rise × previous innings)."
},

"quant-average-ex#9": {
  steps: "Step 1 — Let there be \\(n\\) papers. Current total: \\(63n\\).\n" +
    "Step 2 — The extra marks are \\(20 + 2 = 22\\), which would lift the total to \\(63n + 22\\).\n" +
    "Step 3 — The new average would be 65: \\(\\dfrac{63n + 22}{n} = 65\\).\n" +
    "Step 4 — \\(63n + 22 = 65n\\), so \\(2n = 22\\).\n" +
    "Step 5 — \\(n = 11\\).",
  fast: "Extra marks ÷ rise in average = number of papers. \\(22 \\div 2 = 11\\).\n" +
    "This works because the extra marks are shared out equally across every paper: 22 more marks lifting each of \\(n\\) papers by 2 means \\(2n = 22\\).",
  traps: "(E) 12 and (C) 10 sit either side for anyone dividing 22 by the wrong figure.\n" +
    "(A) 8 comes from using only the 20-mark increase and a rise of 2.5.\n" +
    "(B) 9 is \\((20 - 2) \\div 2\\) — [[subtracting]] the History marks instead of adding them. Both extra scores push the total the same way, so they add.\n" +
    "The 63 and 65 themselves never enter the calculation — only their [[difference]] does, which is a useful signal that the shortcut exists.",
  take: "Total extra marks ÷ increase in average = number of items. The averages themselves cancel; only the gap between them matters."
},

"quant-average-ex#10": {
  steps: "Step 1 — Let the original daily expenditure be \\(E\\), shared by 35 students, so the average is \\(\\dfrac{E}{35}\\).\n" +
    "Step 2 — After 7 more join there are 42 students and the expenditure is \\(E + 42\\).\n" +
    "Step 3 — The new average is $1 lower: \\(\\dfrac{E + 42}{42} = \\dfrac{E}{35} - 1\\).\n" +
    "Step 4 — Multiply through by 210 (the LCM of 42 and 35): \\(5(E + 42) = 6E - 210\\).\n" +
    "Step 5 — \\(5E + 210 = 6E - 210\\), so \\(E = \\$420\\).",
  fast: "Test the choices — they are all round and the arithmetic is one division each.\n" +
    "Try $420: the old average is \\(420/35 = \\$12\\); the new spend is \\(420 + 42 = \\$462\\) over 42 students, i.e. \\(462/42 = \\$11\\). That is exactly $1 lower. ✓\n" +
    "Backsolving beats clearing an LCM here, because 35 and 42 both divide the candidate values cleanly.",
  traps: "(A) $400 gives averages of \\(11.43\\) and \\(10.52\\) — a drop of about $0.91, close enough to $1 to catch anyone estimating.\n" +
    "(C) $445 and (D) $465 are not divisible by 35, so they cannot give a tidy original average — a quick way to skip them.\n" +
    "(E) $485 is the outer decoy.",
  take: "When the choices are round and the equation involves two awkward denominators, backsolve. Start with the choice that divides both head counts."
},

"quant-average-ex#11": {
  steps: "Step 1 — The class size does not change: five leave and five join, so it stays at 45.\n" +
    "Step 2 — Original total: \\(45 \\times 52 = 2340\\) kg.\n" +
    "Step 3 — Remove the leavers: \\(2340 - 5 \\times 48 = 2340 - 240 = 2100\\).\n" +
    "Step 4 — Add the joiners: \\(2100 + 5 \\times 54 = 2100 + 270 = 2370\\).\n" +
    "Step 5 — New average: \\(\\dfrac{2370}{45} = 52\\tfrac23\\) kg.",
  fast: "Only the [[net change]] matters. The five joiners are 6 kg heavier each than the five leavers, adding \\(5 \\times 6 = 30\\) kg to the class total.\n" +
    "Spread over 45 students that is \\(\\dfrac{30}{45} = \\dfrac23\\) kg per student, so the average rises from 52 to \\(52\\tfrac23\\).\n" +
    "Two small numbers instead of four four-digit ones.",
  traps: "(A) 52.6 is \\(52\\tfrac35\\) — the result of dividing 30 by 50 rather than 45.\n" +
    "(C) \\(52\\tfrac13\\) halves the true rise.\n" +
    "(E) 52 assumes the swap cancels out, which it would only if the two groups had the same average.\n" +
    "(D) 53 rounds up and overshoots.",
  take: "When a group swaps members and keeps its size, work with the net change in total, then divide by the (unchanged) count. The original total never needs computing."
},

"quant-average-ex#12": {
  steps: "Step 1 — Convert both averages into totals of three days each.\n" +
    "Step 2 — Mon + Tue + Wed \\(= 3 \\times 55 = 165\\).\n" +
    "Step 3 — Tue + Wed + Thu \\(= 3 \\times 60 = 180\\).\n" +
    "Step 4 — Thursday is 56, so Tue + Wed \\(= 180 - 56 = 124\\).\n" +
    "Step 5 — Monday \\(= 165 - 124 = 41°\\).",
  fast: "The two windows overlap on Tue and Wed, so subtracting them isolates the endpoints:\n" +
    "\\(\\text{Thu} - \\text{Mon} = 180 - 165 = 15\\).\n" +
    "So Monday \\(= 56 - 15 = 41\\). One subtraction each way, and Tue and Wed never need to be known separately.",
  traps: "(D) 43 and (C) 45 come from subtracting in the wrong direction — Thursday's window has the [[higher]] average, so Thursday must be the warmer end and Monday the cooler one.\n" +
    "(A) 39 and (E) 47 sit either side for anyone mishandling the 3× conversion.\n" +
    "A sanity check: Monday must be below 56, since replacing it with Thursday raised the three-day average.",
  take: "Two overlapping windows of the same length: their difference is just (last day − first day). Subtract the totals and the shared middle vanishes."
},

"quant-average-ex#13": {
  steps: "Step 1 — Convert to totals. Section one: \\(20 \\times 66 = 1320\\).\n" +
    "Step 2 — Section two: \\(15 \\times 70 = 1050\\).\n" +
    "Step 3 — Combined: \\(1320 + 1050 = 2370\\) across \\(20 + 15 = 35\\) students.\n" +
    "Step 4 — \\(\\dfrac{2370}{35} = 67.714\\ldots \\approx 67.7\\%\\).",
  fast: "Deviations from 66: the second section is 4 points above, and there are 15 of them, so the surplus is 60 points spread over 35 students — \\(\\dfrac{60}{35} = 1.71\\).\n" +
    "\\(66 + 1.71 = 67.7\\%\\).\n" +
    "You can also bound it in two seconds: the answer must lie between 66 and 70, closer to 66 because that group is larger — which leaves only (A) and (B), and (A) is barely above 66.",
  traps: "(C) 68.7 would be the answer if the sections were the same size (the midpoint is 68).\n" +
    "(D) 69.7 and (E) 70.7 sit at or above the higher average, which no weighted average of 66 and 70 can reach.\n" +
    "(A) 66.7 is too close to the lower average for a group that is 15/35 of the class.",
  take: "Bound before you compute: a weighted average lies strictly between the two rates and leans toward the larger group. That alone usually leaves two choices."
},

"quant-average-ex#14": {
  steps: "Step 1 — The percentages describe [[distance]], not time, so this is a harmonic-style average and the plain average of the speeds is wrong.\n" +
    "Step 2 — Let the total distance be \\(D\\) and compute the time on each leg.\n" +
    "Step 3 — \\(\\dfrac{0.6D}{40} = 0.015D\\); \\(\\dfrac{0.2D}{30} = 0.00667D\\); \\(\\dfrac{0.2D}{10} = 0.02D\\).\n" +
    "Step 4 — Total time \\(= 0.04167D\\).\n" +
    "Step 5 — Average speed \\(= \\dfrac{D}{0.04167D} = 24\\) km/h.",
  fast: "Pick \\(D = 600\\) km so every leg divides cleanly: 360 km at 40 (9 hours), 120 km at 30 (4 hours), 120 km at 10 (12 hours).\n" +
    "Total: 600 km in 25 hours \\(= 24\\) km/h.\n" +
    "Choosing a distance that is a multiple of the speeds turns the whole question into three easy divisions.",
  traps: "(D) 30 km/h is the plain average of 40, 30 and 10 — wrong because the slowest leg eats a disproportionate share of the [[time]] (12 of the 25 hours) even though it is only 20% of the distance.\n" +
    "(E) 31 sits just under the distance-weighted average (\\(0.6 \\times 40 + 0.2 \\times 30 + 0.2 \\times 10 = 32\\)) — the natural but incorrect move, offset slightly so that even the wrong method needs a second slip to land on it.\n" +
    "(A) 25 and (B) 26 sit just above the answer to punish rounding.",
  take: "Percentages of [[distance]] → average with times (harmonic). Percentages of [[time]] → average with speeds (arithmetic). The slow leg always drags the answer down more than it looks like it should."
},

"quant-average-ex#15": {
  steps: "Step 1 — Five consecutive integers averaging \\(n\\) are symmetric about \\(n\\): they are \\(n-2, n-1, n, n+1, n+2\\).\n" +
    "Step 2 — Their sum is \\(5n\\).\n" +
    "Step 3 — The next two integers are \\(n+3\\) and \\(n+4\\).\n" +
    "Step 4 — New sum: \\(5n + (n+3) + (n+4) = 7n + 7\\).\n" +
    "Step 5 — New average: \\(\\dfrac{7n + 7}{7} = n + 1\\), an increase of 1.",
  fast: "For any evenly spaced list, the average is the middle term. The original middle term is the 3rd of 5; adding two more makes it a list of 7 whose middle term is the 4th — one place further along, i.e. one greater.\n" +
    "Or test it: \\(1,2,3,4,5\\) averages 3; \\(1,\\ldots,7\\) averages 4. Increase of 1.",
  traps: "(C) \"remain the same\" is the instinct that adding items either side keeps the balance — but both new items are on the [[high]] side only.\n" +
    "(A) \"increase by 2\" is the gap between the two new terms.\n" +
    "(D) 1.4 comes from \\(7/5\\), and (E) 0.5 from halving. Picking concrete numbers disposes of all four in ten seconds.",
  take: "For consecutive (or any evenly spaced) integers, the average is the middle term, so mean = median. Adding terms at one end moves the middle by half the number added."
},

"quant-average-ex#16": {
  steps: "Step 1 — Total of the five: \\(5 \\times 27 = 135\\).\n" +
    "Step 2 — Remove 35: \\(135 - 35 = 100\\).\n" +
    "Step 3 — Average of the remaining four: \\(\\dfrac{100}{4} = 25\\).",
  fast: "The removed number is 8 above the old average of 27. Taking it out removes a surplus of 8, shared across the 4 that remain: \\(\\dfrac84 = 2\\) each.\n" +
    "\\(27 - 2 = 25\\). No totals needed.",
  traps: "(E) 27 assumes removing a number leaves the average untouched — true only if that number equalled the average.\n" +
    "(C) 26 shares the surplus over 5 rather than the 4 that are left.\n" +
    "(A) 24 and (D) 23 overshoot. The direction is fixed and worth checking first: removing an [[above-average]] value must pull the average down.",
  take: "Remove a value \\(v\\) from \\(n\\) items averaging \\(a\\): the new average shifts by \\(\\dfrac{a - v}{n - 1}\\). Deviation thinking makes this a one-step adjustment."
},

"quant-average-ex#17": {
  steps: "Step 1 — Students' total: \\(30 \\times 12 = 360\\) years.\n" +
    "Step 2 — With the teacher: 31 people at 13 years \\(= 403\\).\n" +
    "Step 3 — Teacher's age: \\(403 - 360 = 43\\).",
  fast: "Teacher \\(=\\) new average \\(+\\) (rise \\(\\times\\) old count) \\(= 13 + 30 \\times 1 = 43\\).\n" +
    "This is the same one-liner as question 4 in this set, with different numbers — recognising the repeat is worth more than the arithmetic.",
  traps: "(A) 40 and (B) 42 undercount the number of students whose average had to be lifted.\n" +
    "(D) 45 and (E) 44 overshoot by one or two students.\n" +
    "The choices are one year apart, so this is precisely a test of whether you use 30 or 31 in the surcharge — it is the [[old]] count, 30.",
  take: "New member lifting an average of \\(n\\) items by \\(d\\): their value is (new average) \\(+\\ nd\\), with \\(n\\) the count [[before]] they joined."
},

"quant-average-ex#18": {
  steps: "Step 1 — Runs after 10 innings: \\(10 \\times 40 = 400\\).\n" +
    "Step 2 — Target after 11 innings: \\(11 \\times 42 = 462\\).\n" +
    "Step 3 — Required score: \\(462 - 400 = 62\\).",
  fast: "He needs the new average once, plus 2 extra runs for each of the 10 innings already played: \\(42 + 10 \\times 2 = 62\\).\n" +
    "Same structure again — new average plus rise times previous innings.",
  traps: "(A) 52 is \\(42 + 10\\), applying the rise only once.\n" +
    "(E) 42 is the target average reported as the score, which would leave the average unchanged.\n" +
    "(D) 64 uses 11 innings in the surcharge instead of 10.\n" +
    "(B) 60 is the round-number decoy between the two most likely errors.",
  take: "Raising an average is always paid for twice: once for the new item itself, and once for every item already in the set. That is the whole family of average questions in one sentence."
},

"quant-average-ex#19": {
  steps: "Step 1 — The first 20 positive even integers are \\(2, 4, 6, \\ldots, 40\\) — evenly spaced with a common difference of 2.\n" +
    "Step 2 — For any evenly spaced list, the average equals the average of the first and last terms.\n" +
    "Step 3 — \\(\\dfrac{2 + 40}{2} = 21\\).",
  fast: "First plus last, halved: \\(\\dfrac{2 + 40}{2} = 21\\). Two seconds.\n" +
    "The long way — summing \\(2 + 4 + \\cdots + 40 = 420\\) and dividing by 20 — gives the same 21, but there is no reason to do it.",
  traps: "(A) 20 is the [[count]] of numbers, sitting right there in the stem.\n" +
    "(E) 40 is the last term.\n" +
    "(C) 22 and (D) 19 are off-by-one errors from mis-identifying the endpoints — note that the average of an even-length evenly spaced list is not itself a term in the list, which is why 21 looks slightly odd here.",
  take: "Evenly spaced list → average = (first + last) ÷ 2 = median. It never matters how many terms there are, which is why this shortcut is worth reaching for first."
}

});
