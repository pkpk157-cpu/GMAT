/* GMAT Prep — in-depth explanations for the 700-800 level Arithmetic & Word
   Problems set. Every answer was independently re-derived before the
   explanation was written; no stored key was changed. Keys are "setId#n";
   index.html merges these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-700-arith#1": {
  steps: "Step 1 — Split the 40 films by genre. Comedies: \\(60\\%\\) of 40 \\(= 24\\). Horror: the rest, \\(40 - 24 = 16\\).\n" +
    "Step 2 — Profitable comedies: \\(75\\%\\) of 24 \\(= 18\\).\n" +
    "Step 3 — Read the horror sentence carefully — it gives the *unprofitable* share. \\(75\\%\\) of the horror films lost money, so \\(25\\%\\) made money.\n" +
    "Step 4 — Profitable horror: \\(25\\%\\) of 16 \\(= 4\\).\n" +
    "Step 5 — Nothing broke even, so every film is either profitable or not, with no third bucket. Total profitable \\(= 18 + 4 = 22\\).",
  fast: "Both genres split 75/25, so the only thing to track is which side of the split each one is on: comedies are 75% profitable, horror films are 75% *un*profitable. That makes the answer \\(0.75(24) + 0.25(16)\\), and since 24 and 16 are both multiples of 4 the arithmetic is instant — 18 and 4.",
  traps: "(A) 18 is the profitable comedies alone, with the horror films never added. When a choice matches an intermediate quantity, suspect that you stopped early.\n" +
    "(C) 20 is \\(0.75(24) + 0.75(16) - 6\\)-style arithmetic; more commonly it comes from taking 75% of the horror films as profitable and then correcting once.\n" +
    "(D) 21 and (B) 19 are near-misses from mis-splitting 40 into 25/15 or 23/17.\n" +
    "The sentence \"75% of the horror movies were unprofitable\" is the entire difficulty — read it as 25% profitable before you compute anything.",
  take: "In two-category percent problems, write down for each category whether the given percentage is the one you want or its complement, before doing any arithmetic."
},

"quant-700-arith#2": {
  steps: "Step 1 — Take 100 interns so percentages are counts.\n" +
    "Step 2 — \\(80\\) sleep fewer than 6 hours; the other \\(20\\) sleep 6 or more.\n" +
    "Step 3 — The 75% figure is a percentage of *all* interns, not of the short sleepers: 75 interns both sleep fewer than 6 hours and feel tired.\n" +
    "Step 4 — So among the 80 short sleepers, \\(80 - 75 = 5\\) report no tiredness.\n" +
    "Step 5 — Among the 20 long sleepers, \\(70\\%\\) report no tiredness: \\(0.70 \\times 20 = 14\\).\n" +
    "Step 6 — Total reporting no tiredness: \\(5 + 14 = 19\\), i.e. \\(19\\%\\).",
  fast: "Draw the two-by-two box: rows for sleep, columns for tiredness. Two of the four cells are handed to you (75 and 14) and the row totals are 80 and 20, so the remaining cells fall out by subtraction. Adding the \"not tired\" column gives \\(5 + 14\\) in about fifteen seconds.",
  traps: "(B) 14 is the long sleepers' contribution alone — it forgets the 5 short sleepers who are somehow not tired.\n" +
    "(D) 20 comes from reading the 75% as a share of the 80 short sleepers, which would leave 20 of them untired and no room for the rest of the arithmetic.\n" +
    "(A) 6 is \\(20 - 14\\), the long sleepers who *are* tired.\n" +
    "(E) 81 is the complement of 19 misread as the answer, or the percentage who report *some* tiredness read off the wrong column.\n" +
    "The pivotal wording is \"75% of the interns\" versus \"75% of the interns who…\" — the first is a share of the whole, the second of a subgroup.",
  take: "Set the total to 100 and build a two-by-two table. Watch whether each percentage is of the whole population or of a subgroup — that single distinction decides the problem."
},

"quant-700-arith#3": {
  steps: "Step 1 — Everyone is in at least one group, and \\(80\\%\\) are in exactly one, so \\(20\\%\\) are in both.\n" +
    "Step 2 — Band only is \\(50\\%\\), so orchestra only is \\(80\\% - 50\\% = 30\\%\\).\n" +
    "Step 3 — The band total is band-only plus both: \\(50\\% + 20\\% = 70\\%\\).\n" +
    "Step 4 — That \\(70\\%\\) equals 119 students, so the school has \\(119 \\div 0.70 = 170\\) students.\n" +
    "Step 5 — Orchestra only: \\(30\\%\\) of 170 \\(= 51\\).",
  fast: "Work entirely in percentages until the very last line. Both \\(= 20\\%\\), orchestra-only \\(= 30\\%\\), band-total \\(= 70\\%\\). Then one division converts 119 into the school size, and one multiplication finishes it. Notice \\(119 = 7 \\times 17\\), so \\(119/0.7 = 170\\) needs no long division at all.",
  traps: "(E) 119 restates the band count, which is the number the question hands you rather than the one it asks for.\n" +
    "(D) 85 is \\(50\\%\\) of 170 — the band-only count, not the orchestra-only count.\n" +
    "(A) 30 mistakes the *percentage* for the number of students; the question asks how many, and 30 is the percent.\n" +
    "(C) 60 comes from taking 119 as the band-only figure, which would make the school \\(238\\) and the orchestra-only count 71 — but the given 119 covers the whole band, both groups included.\n" +
    "The subtle step is Step 3: \"119 students in the band\" includes the students in both groups.",
  take: "\"In the band\" always means band-only plus both. Solve the whole overlap in percentages first, then convert once using the single count you are given."
},

"quant-700-arith#4": {
  steps: "Step 1 — Let the total be \\(T\\). Females \\(= \\tfrac{2T}{3}\\), students \\(= \\tfrac{T}{3}\\), female students \\(= \\tfrac{T}{6}\\).\n" +
    "Step 2 — Use inclusion–exclusion for \"female or student\": \\(\\tfrac{2T}{3} + \\tfrac{T}{3} - \\tfrac{T}{6}\\).\n" +
    "Step 3 — Over sixths: \\(\\tfrac{4T}{6} + \\tfrac{2T}{6} - \\tfrac{T}{6} = \\tfrac{5T}{6}\\).\n" +
    "Step 4 — The attendees who are neither are the rest: \\(T - \\tfrac{5T}{6} = \\tfrac{T}{6}\\).\n" +
    "Step 5 — That equals 150, so \\(T = 900\\).",
  fast: "The three fractions are all sixths in disguise: \\(\\tfrac46 + \\tfrac26 - \\tfrac16 = \\tfrac56\\) in one line. So \"neither\" is exactly one sixth of the convention, and \\(150 \\times 6 = 900\\). The overlap subtraction is the only place a mistake can hide.",
  traps: "(C) 600 is what you get by forgetting to subtract the overlap: \\(\\tfrac23 + \\tfrac13 = 1\\) leaves no one in the \"neither\" group at all, which is why that route feels wrong immediately — but a partial correction lands here.\n" +
    "(A) 300 and (B) 450 come from setting \\(150\\) equal to \\(\\tfrac T2\\) or \\(\\tfrac T3\\), i.e. mis-combining the fractions.\n" +
    "(D) 800 is not a multiple of 6, so it cannot make \\(\\tfrac T6\\) a whole number of attendees — a useful one-second screen on this question.\n" +
    "Note the trap of adding \"neither\" into the union: the 150 are outside both circles and must be added at the end, not inside the inclusion–exclusion sum.",
  take: "Total = (A) + (B) − (both) + (neither). Put every fraction over a common denominator first; the \"neither\" group is what is left after the union."
},

"quant-700-arith#5": {
  steps: "Step 1 — Take 100 lights and let \\(S\\) be the number *supposed* to be on. Then \\(100 - S\\) are supposed to be off.\n" +
    "Step 2 — Of the ones supposed to be on, \\(10\\%\\) are actually off, so \\(90\\%\\) of \\(S\\) are actually on.\n" +
    "Step 3 — Of the ones supposed to be off, \\(40\\%\\) are actually on: \\(0.40(100 - S)\\).\n" +
    "Step 4 — Total actually on is 80: \\(0.9S + 0.4(100 - S) = 80\\).\n" +
    "Step 5 — Simplify: \\(0.5S + 40 = 80\\), so \\(S = 80\\).\n" +
    "Step 6 — Lights supposed to be off: \\(20\\). Of those, \\(40\\%\\) are on: \\(8\\) lights.\n" +
    "Step 7 — The question asks what percent of the lights that are *on* are supposed to be off: \\(\\dfrac{8}{80} = 10\\%\\).",
  fast: "Set up the single equation \\(0.9S + 0.4(100-S) = 80\\) — the coefficients collapse to \\(0.5S\\), so \\(S = 80\\) in one line. Then the last step is the whole trick: the denominator is the 80 lights that are on, not the 20 supposed to be off and not the 100 total.",
  traps: "(A) \\(22\\tfrac29\\%\\) and (C) \\(11\\tfrac19\\%\\) both use 72 or 9 in the wrong place — they come from mixing up which group the \\(10\\%\\) and \\(40\\%\\) apply to, so the counts land near but not on 8 and 80.\n" +
    "(B) \\(16\\tfrac23\\%\\) is \\(\\tfrac8{48}\\)-flavoured, the result of a denominator built from the wrong subgroup.\n" +
    "(E) \\(5\\%\\) is \\(\\tfrac{8}{160}\\) or \\(\\tfrac 5{100}\\) — the lights that are supposed to be on but are off, expressed against the whole.\n" +
    "Every wrong answer here is a right numerator over a wrong denominator. Underline the phrase \"of the lights that are on\" before computing.",
  take: "\"What percent of X is Y\" puts X in the denominator. In misclassification problems, build one equation for the observed total, then re-read which group the final ratio is taken over."
},

"quant-700-arith#6": {
  steps: "Step 1 — Let the female speckled trout number \\(f\\). Males are \\(2f + 45\\), and together they make 645.\n" +
    "Step 2 — \\(f + 2f + 45 = 645\\), so \\(3f = 600\\) and \\(f = 200\\).\n" +
    "Step 3 — Female speckled : male rainbow \\(= 4 : 3\\). With 200 female speckled, male rainbow \\(= 200 \\times \\tfrac34 = 150\\).\n" +
    "Step 4 — Male rainbow : all trout \\(= 3 : 20\\). With 150 male rainbow, all trout \\(= 150 \\times \\tfrac{20}{3} = 1000\\).\n" +
    "Step 5 — The fishery holds only speckled and rainbow, so rainbow \\(= 1000 - 645 = 355\\).\n" +
    "Step 6 — Female rainbow \\(= 355 - 150 = 205\\).",
  fast: "It is a four-link chain and each link is one multiplication, so the discipline is simply to move in order: \\(f = 200 \\to\\) male rainbow \\(150 \\to\\) total \\(1000 \\to\\) rainbow \\(355 \\to\\) female rainbow \\(205\\). Never skip to the end — every intermediate value is used by the next step.",
  traps: "(C) 200 is the female *speckled* count, computed in Step 2 and then mistaken for the answer — the classic \"first number I derived\" error on a chained problem.\n" +
    "(A) 192 and (B) 195 come from an arithmetic slip in the 4:3 or 3:20 conversion, most often inverting one of the two ratios.\n" +
    "(E) 208 comes from subtracting 645 from 1000 and then removing a slightly wrong male-rainbow count.\n" +
    "The step people misread is \"the number of males is 45 more than twice the number of females\" — it is \\(2f + 45\\), not \\(2(f + 45)\\), and the second reading gives \\(f = 185\\) and derails everything downstream.",
  take: "Translate \"45 more than twice\" as \\(2f + 45\\), and work chained ratios strictly in order. On a multi-link chain, the trap answers are the intermediate values."
},

"quant-700-arith#7": {
  steps: "Step 1 — Let \\(W\\) be the wireless group (\\(30\\%\\)) and \\(S\\) the snack group (\\(70\\%\\)).\n" +
    "Step 2 — The overlap can never exceed either group on its own, since it is a subset of both. So the overlap is at most \\(30\\%\\).\n" +
    "Step 3 — Check that \\(30\\%\\) is actually reachable: put all of the wireless airlines inside the snack group. Then the union is \\(70\\%\\), which is at most \\(100\\%\\), so nothing is violated.\n" +
    "Step 4 — Therefore the greatest possible overlap is \\(30\\%\\).",
  fast: "The maximum overlap of two groups is always the smaller group, provided it fits — and here \\(30 + 70 = 100\\), so it fits comfortably. One comparison, no arithmetic.\n" +
    "The companion fact is worth knowing at the same time: the *minimum* overlap is \\(W + S - 100\\), which here is \\(0\\).",
  traps: "(A) \\(21\\%\\) is \\(0.30 \\times 0.70\\) — the overlap you would get if the two properties were independent. Independence is an assumption the question never makes, and \"greatest possible\" explicitly rules it out.\n" +
    "(E) \\(70\\%\\) takes the larger group as the cap; the overlap sits inside both groups, so it is bounded by the smaller.\n" +
    "(C) \\(40\\%\\) is \\(70 - 30\\) and (D) \\(50\\%\\) is the average of the two — both are arithmetic on the two percentages with no set-theoretic meaning.\n" +
    "The word to notice is \"greatest possible\": it signals a bounding question, not a computation.",
  take: "Maximum overlap of two sets = the smaller set (when it fits). Minimum overlap = \\(A + B - \\text{total}\\), or zero if that is negative. Multiplying the percentages assumes independence, which these questions never grant."
},

"quant-700-arith#8": {
  steps: "Step 1 — Take 100 people. \\(40\\) have the job of their choice; \\(60\\) do not.\n" +
    "Step 2 — \\(25\\%\\) of the 60 without their chosen job have a diploma: \\(0.25 \\times 60 = 15\\).\n" +
    "Step 3 — \\(10\\) people have no diploma but do have the job of their choice. That 10 is a percentage of *all* people, not of the 40.\n" +
    "Step 4 — So of the 40 with their chosen job, \\(40 - 10 = 30\\) have a diploma.\n" +
    "Step 5 — Total with a diploma: \\(30 + 15 = 45\\), i.e. \\(45\\%\\).",
  fast: "Two-by-two box again: rows job / no job (40 and 60), columns diploma / no diploma. You are given one cell outright (10) and one as a share of a row (15), so the diploma column is \\(30 + 15\\). The whole problem is filling four cells from two clues and two row totals.",
  traps: "(A) \\(35\\%\\) drops one of the two contributions or reads the 10 as a share of the 40 (giving 4 without a diploma and 36 with, then mis-adding).\n" +
    "(C) \\(55\\%\\) is the complement of 45 — the percentage *without* a diploma, read off the wrong column.\n" +
    "(D) \\(65\\%\\) and (E) \\(75\\%\\) come from treating the \\(25\\%\\) as applying to the whole population rather than to the 60 who lack their chosen job.\n" +
    "As in the intern question, the deciding detail is \"10% of the people\" (whole population) against \"25% of the people who do not…\" (subgroup).",
  take: "Draw the two-by-two grid and label each given as a share of the whole or of a row. Percentages of the whole go straight into a cell; percentages of a subgroup must be multiplied by that row's total."
},

"quant-700-arith#9": {
  steps: "Step 1 — Split by sex: males \\(= 70\\%\\) of 800 \\(= 560\\); females \\(= 240\\).\n" +
    "Step 2 — \"At least ten percent of the female students participate\" means at most \\(90\\%\\) do not: \\(0.90 \\times 240 = 216\\) non-participating females, and that maximum is attainable.\n" +
    "Step 3 — \"Fewer than thirty percent of the male students do not participate\" means non-participating males \\(< 0.30 \\times 560 = 168\\).\n" +
    "Step 4 — Strictly fewer than 168 and a whole number of students means at most \\(167\\).\n" +
    "Step 5 — Maximum total not participating: \\(216 + 167 = 383\\).",
  fast: "Convert both constraints into upper bounds on non-participants, one line each: females at most \\(0.9(240) = 216\\), males strictly under \\(0.3(560) = 168\\). The only subtlety is that \"fewer than\" is strict, so the male count tops out at 167 rather than 168 — and the answer choices are built to punish exactly that one-student difference.",
  traps: "(C) 384 is \\(216 + 168\\), taking \"fewer than thirty percent\" as \"at most thirty percent\". It sits exactly one student above the true maximum, and that one-student gap — strict versus inclusive — is the entire point of the question.\n" +
    "(A) 216 is the female contribution alone.\n" +
    "(D) 416 and (E) 417 come from applying the \\(30\\%\\) bound to the whole school (\\(0.3 \\times 800 = 240\\)) or from adding \\(216 + 200\\)-style figures.\n" +
    "Read \"at least\" and \"fewer than\" as the strict/non-strict signals they are, and decide which direction each pushes the count you want to maximise.",
  take: "To maximise a total under constraints, push each part to its own extreme — but respect strict inequalities: \"fewer than \\(k\\)\" caps a whole-number count at \\(k-1\\)."
},

"quant-700-arith#10": {
  steps: "Step 1 — Take 100 rooms. \\(75\\) have queen beds, \\(25\\) have king beds.\n" +
    "Step 2 — Among the non-smoking rooms, \\(60\\%\\) are queen, so \\(40\\%\\) are king.\n" +
    "Step 3 — Non-smoking rooms with a king bed are \\(10\\%\\) of all rooms, i.e. 10 rooms.\n" +
    "Step 4 — Those 10 rooms are \\(40\\%\\) of the non-smoking rooms, so the non-smoking rooms number \\(10 \\div 0.40 = 25\\).\n" +
    "Step 5 — Rooms that permit smoking: \\(100 - 25 = 75\\), i.e. \\(75\\%\\).",
  fast: "The 75% queen figure is a decoy for this particular question — everything you need is in the non-smoking column. Ten rooms are 40% of the non-smoking rooms, so there are 25 non-smoking rooms and 75 smoking ones. Two lines.",
  traps: "(A) \\(25\\%\\) is the non-smoking share — the complement of what is asked. Circle whether the question wants smoking or non-smoking before you answer.\n" +
    "(C) \\(50\\%\\) and (D) \\(55\\%\\) come from using the \\(75\\%\\) queen figure as though it constrained the non-smoking rooms, which it does not.\n" +
    "(B) \\(30\\%\\) arises from computing \\(10 \\div 0.60\\) — dividing by the queen share instead of the king share.\n" +
    "The genuinely useful observation is that the overall 75/25 queen–king split never enters the calculation; recognising an unused given is a skill these questions test deliberately.",
  take: "Anchor on the one cell given as a percent of the whole (10 rooms) and the one given as a percent of a subgroup (40%). Dividing the first by the second sizes the subgroup — and check whether the question wants that group or its complement."
},

"quant-700-arith#11": {
  steps: "Step 1 — Let \\(e_1, e_2, e_3\\) be the fractions of students in exactly one, exactly two and exactly three clubs.\n" +
    "Step 2 — Every student is in at least one club, so \\(e_1 + e_2 + e_3 = 1\\).\n" +
    "Step 3 — Adding the three club memberships counts a one-club student once, a two-club student twice and a three-club student three times: \\(e_1 + 2e_2 + 3e_3 = \\tfrac12 + \\tfrac58 + \\tfrac34\\).\n" +
    "Step 4 — Over eighths: \\(\\tfrac48 + \\tfrac58 + \\tfrac68 = \\tfrac{15}{8}\\).\n" +
    "Step 5 — Subtract the first equation from the second: \\(e_2 + 2e_3 = \\tfrac{15}{8} - 1 = \\tfrac78\\).\n" +
    "Step 6 — With \\(e_3 = \\tfrac38\\): \\(e_2 = \\tfrac78 - \\tfrac68 = \\tfrac18\\).",
  fast: "Use the two-equation form of three-set inclusion–exclusion and skip Venn diagrams entirely. Sum of the club sizes \\(= e_1 + 2e_2 + 3e_3\\); total students \\(= e_1 + e_2 + e_3\\). Subtracting gives \\(e_2 + 2e_3 = \\tfrac78\\) directly, and \\(e_3\\) is handed to you.\n" +
    "The sanity check: \\(e_1 = 1 - \\tfrac18 - \\tfrac38 = \\tfrac12\\), and \\(\\tfrac12 + 2(\\tfrac18) + 3(\\tfrac38) = \\tfrac{15}8\\) ✓.",
  traps: "(C) \\(\\tfrac38\\) restates the three-club fraction the question gave you.\n" +
    "(D) \\(\\tfrac12\\) is \\(e_1\\), the exactly-one-club fraction — also a genuine quantity here, just not the one asked for.\n" +
    "(B) \\(\\tfrac14\\) comes from using \\(e_2 + e_3 = \\tfrac78 - \\tfrac38\\) style arithmetic, i.e. subtracting \\(e_3\\) once where the double-count requires subtracting it twice.\n" +
    "(E) \\(\\tfrac58\\) is one of the given club sizes, repeated.\n" +
    "The coefficient 2 on \\(e_3\\) in Step 5 is where this question is won: a three-club student is over-counted twice, not once.",
  take: "For three sets: (sum of set sizes) = \\(e_1 + 2e_2 + 3e_3\\), and (total) = \\(e_1 + e_2 + e_3\\). Subtracting gives \\(e_2 + 2e_3\\) — note the 2."
},

"quant-700-arith#12": {
  steps: "Step 1 — Let \\(D\\) be the percentage of couples who order dessert.\n" +
    "Step 2 — \\(20\\%\\) of the dessert-orderers skip coffee, so \\(80\\%\\) of them order coffee too.\n" +
    "Step 3 — The couples who order both are therefore \\(0.80 \\times D\\), and the question tells us that is \\(60\\%\\).\n" +
    "Step 4 — \\(0.8D = 60\\), so \\(D = 75\\).\n" +
    "Step 5 — Couples who do not order dessert: \\(100 - 75 = 25\\%\\).",
  fast: "The 60% is a share of *all* couples; the 20% is a share of the dessert-orderers. So 60 is four-fifths of the dessert group, making the dessert group 75 and the answer 25. One division and one subtraction.",
  traps: "(E) \\(75\\%\\) is the dessert-ordering share itself — the question asks for its complement, and this is the most-chosen wrong answer.\n" +
    "(A) \\(20\\%\\) copies the given percentage straight out of the stem.\n" +
    "(C) \\(40\\%\\) is \\(100 - 60\\), which would be right only if the 60% were the whole dessert group rather than the dessert-and-coffee overlap.\n" +
    "(D) \\(60\\%\\) repeats the other given.\n" +
    "Notice that three of the four distractors are numbers lifted from the question. On percent problems, an answer identical to a given quantity deserves a second look.",
  take: "When a percentage is given \"of the couples who order dessert\", it scales the subgroup, not the whole. Solve for the subgroup, then answer the question actually asked — often the complement."
},

"quant-700-arith#13": {
  steps: "Step 1 — Take 100 apartments. \\(40\\) have no hardwood, so \\(60\\) have hardwood.\n" +
    "Step 2 — \\(50\\) apartments have both windows and hardwood, so hardwood-without-windows \\(= 60 - 50 = 10\\).\n" +
    "Step 3 — Those 10 are \\(25\\%\\) of the apartments without windows, so apartments without windows \\(= 10 \\div 0.25 = 40\\).\n" +
    "Step 4 — Apartments with windows: \\(100 - 40 = 60\\).\n" +
    "Step 5 — Of those 60, the number with hardwood is 50, so the answer is \\(\\dfrac{50}{60} = 83.33\\%\\).",
  fast: "Fill the two-by-two grid in this order: hardwood total 60, both 50, so hardwood-no-window is 10; that 10 is a quarter of the no-window row, so the row is 40 and the window row is 60. Then read off \\(50/60\\). Every step is a subtraction or a single division.\n" +
    "A rough check before computing: \\(50\\) of the \\(60\\) window apartments is clearly above \\(80\\%\\), which already isolates the answer among the choices.",
  traps: "(D) \\(50\\%\\) treats the 50 as a percentage of all apartments rather than of the windowed ones — the denominator error the question is built to catch.\n" +
    "(C) \\(40\\%\\) restates the no-hardwood share.\n" +
    "(B) \\(16.66\\%\\) is \\(\\tfrac{10}{60}\\), the windowed apartments *without* hardwood, i.e. the complement of the answer.\n" +
    "(A) \\(10\\%\\) is the hardwood-without-windows count read as a percentage of the whole.\n" +
    "Each distractor is a legitimate cell of the grid — the question is testing whether you can name the right numerator and the right denominator, not whether you can do arithmetic.",
  take: "In two-by-two percent questions, compute every cell, then match the question's wording to one numerator and one denominator. \"Of the apartments with windows\" fixes the denominator at the window row."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-700-arith#14": {
  steps: "Step 1 — Note that \"cross-pollinated\" and \"pure Fuji\" are disjoint groups, so their percentages add.\n" +
    "Step 2 — Cross-pollinated \\(= 10\\%\\); pure Fuji \\(= \\tfrac34 = 75\\%\\). Together \\(85\\%\\).\n" +
    "Step 3 — That \\(85\\%\\) is the 187 trees given, so the orchard has \\(187 \\div 0.85 = 220\\) trees.\n" +
    "Step 4 — Every tree is pure Fuji, pure Gala, or cross-pollinated, so pure Gala is the remaining \\(100\\% - 85\\% = 15\\%\\).\n" +
    "Step 5 — \\(15\\%\\) of 220 \\(= 33\\).",
  fast: "Do not chase counts — the whole question lives in percentages. Fuji plus cross-pollinated is \\(75 + 10 = 85\\%\\), so pure Gala is the leftover \\(15\\%\\), which is \\(\\tfrac{15}{85}\\) of 187. That ratio is \\(\\tfrac3{17}\\), and \\(187 = 11 \\times 17\\), so the answer is \\(11 \\times 3 = 33\\) with no division at all.",
  traps: "(A) 22 is the cross-pollinated count (\\(10\\%\\) of 220) — a real quantity in the problem, but not the one asked for.\n" +
    "(C) 55 is \\(25\\%\\) of 220, the answer if you forget that the cross-pollinated trees are already excluded from \"pure Gala\".\n" +
    "(D) 77 and (E) 88 come from taking \\(35\\%\\) or \\(40\\%\\) of the total, which is what happens if you subtract only one of the two given groups.\n" +
    "The load-bearing word is \"pure\": a cross-pollinated tree is neither pure Fuji nor pure Gala, so it must be removed alongside the Fujis.",
  take: "When groups are stated as disjoint, add their percentages and subtract from 100. Keep the whole problem in percentages and convert to counts exactly once."
},

"quant-700-arith#15": {
  steps: "Step 1 — Let \\(e_1, e_2, e_3\\) be the numbers of students in exactly one, exactly two and exactly three classes.\n" +
    "Step 2 — Everyone takes at least one class, so \\(e_1 + e_2 + e_3 = 68\\).\n" +
    "Step 3 — Adding the three class rosters counts a two-class student twice and a three-class student three times: \\(e_1 + 2e_2 + 3e_3 = 25 + 25 + 34 = 84\\).\n" +
    "Step 4 — Subtract the first equation from the second: \\(e_2 + 2e_3 = 84 - 68 = 16\\).\n" +
    "Step 5 — Given \\(e_3 = 3\\): \\(e_2 = 16 - 6 = 10\\).",
  fast: "Only two numbers matter: the sum of the rosters (84) and the number of students (68). Their difference, 16, is the total over-count, and each triple-enrolled student contributes 2 of it while each double-enrolled student contributes 1. With three triples eating 6, ten doubles account for the rest.",
  traps: "(A) 13 is \\(16 - 3\\), the result of subtracting \\(e_3\\) once instead of twice — the single most common error in this problem type, because it forgets that a three-class student is over-counted *two* extra times.\n" +
    "(C) 9 and (D) 8 come from mis-adding the rosters (\\(25 + 25 + 34\\)) or from using 67 rather than 68.\n" +
    "(E) 7 is \\(16 - 9\\), treating \\(e_3\\) as contributing three to the over-count rather than two.\n" +
    "The coefficient is the whole question: appearing in three lists means being counted three times, which is two times too many.",
  take: "(Sum of set sizes) − (number of people) = \\(e_2 + 2e_3\\). A member of all three sets is over-counted twice, not three times."
},

"quant-700-arith#16": {
  steps: "Step 1 — The rule \"minimum one, maximum three\" means every student is in exactly one, two or three clubs.\n" +
    "Step 2 — So \\(e_1 + e_2 + e_3 = 59\\).\n" +
    "Step 3 — Sum of the three club rosters: \\(22 + 27 + 28 = 77 = e_1 + 2e_2 + 3e_3\\).\n" +
    "Step 4 — Subtracting: \\(e_2 + 2e_3 = 77 - 59 = 18\\).\n" +
    "Step 5 — Given \\(e_2 = 6\\): \\(2e_3 = 12\\), so \\(e_3 = 6\\).",
  fast: "Same two-line machine as any three-set count: rosters total 77, students total 59, over-count 18. Six two-club students absorb 6 of it, leaving 12, and each three-club student absorbs 2 — so six of them.\n" +
    "Here the unknown is \\(e_3\\) rather than \\(e_2\\), which is exactly why the coefficient 2 has to be handled deliberately rather than by pattern-matching.",
  traps:     "(A) 2 comes from \\(18 - 6 = 12\\) then dividing by 6 instead of 2, or from another mis-scaled step.\n" +
    "(B) 5 and (D) 8 bracket the answer and arise from mis-adding \\(22 + 27 + 28\\) as 75 or 79.\n" +
    "(E) 9 is \\(18 \\div 2\\) with the six two-club students never subtracted — the error of applying the coefficient but forgetting \\(e_2\\).\n" +
    "Note that the phrase \"a minimum of one\" is what licenses \\(e_1 + e_2 + e_3 = 59\\); without it there would be a fourth group of students in no club and the system would be under-determined.",
  take: "Over-count \\(= e_2 + 2e_3\\) works in either direction — solve for whichever of the two is unknown, and never drop the 2."
},

"quant-700-arith#17": {
  steps: "Step 1 — Let \\(p\\) be the number of bags with only peanuts. Translate each sentence into \\(p\\).\n" +
    "Step 2 — Only raisins \\(= 10p\\).\n" +
    "Step 3 — \"Only peanuts is one-fifth of only almonds\" gives only almonds \\(= 5p\\).\n" +
    "Step 4 — \"Only almonds is 20 times only-raisins-and-peanuts\" gives only raisins and peanuts \\(= \\dfrac{5p}{20} = \\dfrac{p}{4}\\).\n" +
    "Step 5 — The 210 almond bags cover only-almonds plus all the other almond-containing regions, so those other regions total \\(210 - 5p\\).\n" +
    "Step 6 — Now every one of the 435 bags is accounted for exactly once: \\(10p + 5p + p + \\dfrac{p}{4} + (210 - 5p) = 435\\).\n" +
    "Step 7 — Combine: \\(11p + \\dfrac{p}{4} = 225\\), so \\(\\dfrac{45p}{4} = 225\\) and \\(p = 20\\).\n" +
    "Step 8 — Bags with exactly one kind of item: \\(10p + 5p + p = 16p = 320\\).",
  fast: "Name the smallest quantity — only-peanuts — and express everything in it, so the seven Venn regions collapse to a single variable. The clever move is Step 5: you never need to know how the 210 almond bags split among their regions, only that the non-only-almond part is \\(210 - 5p\\), which lets one equation close the whole diagram.\n" +
    "The finish is then a single line: exactly-one is \\(16p\\), and \\(16 \\times 20 = 320\\).",
  traps: "(E) 350 is what you get by adding the \\(p/4\\) region (which is a two-item region) into the exactly-one total.\n" +
    "(C) 316 and (A) 256 come from an error in the chain of translations — most often reading \"only almonds is 20 times only-raisins-and-peanuts\" backwards, which makes that region \\(100p\\) and destroys the arithmetic.\n" +
    "(B) 260 is \\(200 + 60\\)-flavoured: the only-raisins and only-peanuts counts with a wrong only-almonds figure.\n" +
    "The reliable defence is to check that your regions sum to 435 and that the almond regions sum to 210 before answering.",
  take: "Express every Venn region in terms of the smallest one. You rarely need to split a given total across its regions — knowing the remainder is enough to close the system."
},

"quant-700-arith#18": {
  steps: "Step 1 — Each of the five children starts with \\(20\\%\\) of the fortune, so work in units where each child begins at 20.\n" +
    "Step 2 — Alice: \\(20 \\times 1.5 \\times 1.1 = 33\\).\n" +
    "Step 3 — Bob: the same path, \\(33\\).\n" +
    "Step 4 — Carol: up \\(50\\%\\) then down \\(60\\%\\): \\(20 \\times 1.5 \\times 0.4 = 12\\).\n" +
    "Step 5 — Dave: down \\(40\\%\\) then up \\(25\\%\\): \\(20 \\times 0.6 \\times 1.25 = 15\\).\n" +
    "Step 6 — Errol: down \\(40\\%\\) then lost everything: \\(0\\).\n" +
    "Step 7 — Total: \\(33 + 33 + 12 + 15 + 0 = 93\\), i.e. \\(93\\%\\) of the original fortune.",
  fast: "Multiply factors, never percentages. Each child is one product of two multipliers applied to 20: \\(1.5 \\times 1.1\\), \\(1.5 \\times 0.4\\), \\(0.6 \\times 1.25\\), and zero. Dave's pair is worth noticing — \\(0.6 \\times 1.25 = 0.75\\), so he ends below where he started despite a \"profit\" in year two.\n" +
    "A quick estimate also works: two children are well up, two are well down and one is wiped out, so the total should land just under 100 — and only one choice sits there.",
  traps: "(C) 100% is the trap of assuming the gains and losses cancel, which they never do when percentages are applied to different bases.\n" +
    "(D) 107% and (E) 120% come from adding percentage changes instead of multiplying factors: \\(+50 + 10\\) treated as \\(+60\\), and so on.\n" +
    "(B) 97% is a near-miss that arises from giving Errol a small residue or from mis-computing Dave as \\(20 \\times 0.6 \\times 1.25 = 18\\).\n" +
    "The single most instructive line is Carol's: a \\(50\\%\\) gain followed by a \\(60\\%\\) loss leaves \\(0.6\\) of the original, not \\(0.9\\).",
  take: "Chain percent changes as multiplicative factors on a common base. Gains and losses of equal size never cancel — \\(1.5 \\times 0.4 \\ne 1\\)."
},

"quant-700-arith#19": {
  steps: "Step 1 — Original lot: \\(30\\%\\) of 40 are silver, so \\(12\\) silver cars.\n" +
    "Step 2 — Read the shipment carefully: \\(40\\%\\) of the 80 new cars are *not* silver, so \\(60\\%\\) are silver.\n" +
    "Step 3 — Silver in the shipment: \\(0.60 \\times 80 = 48\\).\n" +
    "Step 4 — Total silver: \\(12 + 48 = 60\\).\n" +
    "Step 5 — Total cars: \\(40 + 80 = 120\\).\n" +
    "Step 6 — \\(\\dfrac{60}{120} = 50\\%\\).",
  fast: "The entire question is the word \"not\" in the second sentence — flip 40% to 60% and everything else is one-line arithmetic. Then notice the numbers are built to be clean: \\(12 + 48 = 60\\) out of 120 is exactly half.",
  traps: "(A) 35% is what you get by taking the shipment as \\(40\\%\\) silver: \\((12 + 32)/120 = 36.7\\%\\)-flavoured arithmetic, and 35% is the nearby trap.\n" +
    "(B) 37.5% is \\(45/120\\), another version of the same misread.\n" +
    "(C) 45% and (D) 47.5% come from averaging the two percentages (\\(30\\%\\) and \\(60\\%\\)) instead of weighting them by lot size — the shipment is twice as large, so it dominates.\n" +
    "Two habits defend this question: circle the word \"not\", and never average percentages that come from groups of different sizes.",
  take: "Convert every \"percent that are not\" into its complement immediately. Combine two groups by adding counts, never by averaging percentages."
},

"quant-700-arith#20": {
  steps: "Step 1 — Set Rex's income at 100, since every other income is defined from his.\n" +
    "Step 2 — Paul is \\(40\\%\\) less than Rex: \\(0.6 \\times 100 = 60\\).\n" +
    "Step 3 — Quentin is \\(20\\%\\) less than *Paul*: \\(0.8 \\times 60 = 48\\).\n" +
    "Step 4 — Sam is \\(40\\%\\) less than *Paul*: \\(0.6 \\times 60 = 36\\).\n" +
    "Step 5 — Rex gives away percentages of *his own* income: \\(60\\%\\) of 100 is 60 to Sam, and \\(40\\%\\) of 100 is 40 to Quentin.\n" +
    "Step 6 — New incomes: Quentin \\(48 + 40 = 88\\); Sam \\(36 + 60 = 96\\).\n" +
    "Step 7 — \\(\\dfrac{88}{96} = \\dfrac{11}{12}\\).",
  fast: "Anchor at 100 for Rex and every figure becomes a small whole number: 60, 48, 36. The only reading trap is whose income each percentage refers to — Quentin and Sam are both measured against Paul, while the gifts are measured against Rex.\n" +
    "Sanity check before dividing: Sam receives more and started lower, so the ratio should be just under 1 — which already narrows the choices to one.",
  traps: "(B) 13/17, (C) 13/19, (D) 12/19 and (E) 11/19 all come from measuring Quentin or Sam against Rex instead of Paul: taking Sam as \\(0.6 \\times 100 = 60\\) or Quentin as \\(0.8 \\times 100 = 80\\) produces exactly these fractions.\n" +
    "The denominators 17 and 19 are the fingerprint of that error — the correct totals are 88 and 96, both divisible by 8, so a prime denominator like 17 or 19 signals a wrong base somewhere.\n" +
    "The other slip is applying the gift percentages to Paul's or Sam's income rather than Rex's; the sentence says \"Rex gave 60% of his income\".",
  take: "In chained percent-of-someone-else problems, write each person's base explicitly before computing. Set the root person to 100 and the rest fall out as whole numbers."
},

"quant-700-arith#21": {
  steps: "Step 1 — The number of computers bought is budget divided by price.\n" +
    "Step 2 — This year's budget is \\(1.60\\) times last year's; this year's price is \\(1.20\\) times last year's.\n" +
    "Step 3 — So this year's quantity is \\(\\dfrac{1.60}{1.20}\\) times last year's quantity.\n" +
    "Step 4 — \\(\\dfrac{1.60}{1.20} = \\dfrac{16}{12} = \\dfrac43\\).\n" +
    "Step 5 — A factor of \\(\\tfrac43\\) is an increase of \\(\\tfrac13\\), i.e. \\(33\\tfrac13\\%\\).",
  fast: "Quantity is a ratio, so the two percentage changes become a single fraction: \\(1.6/1.2 = 4/3\\). Read the increase off the fraction — a factor of \\(4/3\\) is \"one third more\", never \"40% more\" from subtracting \\(60 - 20\\).",
  traps: "(B) 40% is exactly that subtraction, \\(60\\% - 20\\%\\), which treats multiplicative changes as if they added. It is the intended trap.\n" +
    "(E) 60% repeats the budget increase and ignores the price rise entirely.\n" +
    "(C) 42% and (D) 48% come from compounding in the wrong direction — computing \\(1.6 \\times 1.2\\)-style products, or \\(1.6 \\times 0.8\\).\n" +
    "The check that catches all of them: a \\(60\\%\\) budget rise against a \\(20\\%\\) price rise must buy less than \\(60\\%\\) more but more than nothing extra, and only one choice near a third fits cleanly.",
  take: "When a quantity equals one changing amount divided by another, divide the growth factors — do not subtract the percentages."
},

"quant-700-arith#22": {
  steps: "Step 1 — Let today's population be \\(p\\).\n" +
    "Step 2 — Two years of \\(10\\%\\) growth: \\(p \\times 1.1 \\times 1.1 = 1.21p\\).\n" +
    "Step 3 — That figure is double the population of one year ago, so one year ago the population was \\(\\dfrac{1.21p}{2} = 0.605p\\).\n" +
    "Step 4 — The increase over the last year runs from \\(0.605p\\) up to \\(p\\).\n" +
    "Step 5 — Percent increase \\(= \\dfrac{p - 0.605p}{0.605p} = \\dfrac{0.395}{0.605} \\approx 0.653\\).\n" +
    "Step 6 — About \\(65\\%\\).",
  fast: "Everything hangs on picking today as the anchor rather than \"one year ago\". Then two forward steps give \\(1.21p\\), halving gives \\(0.605p\\) backwards, and the growth factor over the last year is \\(1/0.605 \\approx 1.65\\).\n" +
    "Estimate rather than divide: \\(0.605 \\times 1.6 = 0.968\\) and \\(0.605 \\times 1.7 = 1.03\\), so the factor is between 1.6 and 1.7 and much closer to 1.65 — enough to pick the answer outright.",
  traps: "(C) 50% is what you get by comparing against the wrong base — \\(0.395/p\\) rather than \\(0.395/0.605p\\) gives about \\(40\\%\\), and rounding that upward lands here.\n" +
    "(B) 40% is that base error left uncorrected.\n" +
    "(A) 20% comes from reading \"double in two years\" as roughly \\(10\\%\\) a year each way and mixing the directions.\n" +
    "(E) 75% overshoots, typically from taking one year ago as \\(0.55p\\) (halving \\(1.1\\) instead of \\(1.21\\)).\n" +
    "The trap the question is built on is the direction of time: the growth to compute runs from a year ago *to today*, so today is the new value and last year the base.",
  take: "Anchor the variable at the moment that makes both directions easy, then divide by the *earlier* value when computing a percent increase."
},

"quant-700-arith#23": {
  steps: "Step 1 — An \\(80\\%\\) markup means retail \\(= 1.8 \\times\\) wholesale.\n" +
    "Step 2 — So \\(1.8W = 45\\), giving \\(W = 25\\).\n" +
    "Step 3 — A \\(100\\%\\) markup means retail \\(= 2 \\times 25 = 50\\).\n" +
    "Step 4 — The extra needed is \\(50 - 45 = 5\\) dollars.",
  fast: "Markup is always measured against the *wholesale* cost, so the wholesale price is the number to find first: \\(45 / 1.8 = 25\\). Then note that going from an 80% markup to a 100% markup adds 20% of wholesale — that is \\(0.20 \\times 25 = 5\\), which you can compute without ever finding the new retail price.",
  traps: "(A) 1, (B) 2, (C) 3 and (D) 4 are all small enough to look plausible if you measure the extra markup against the retail price instead of the wholesale price — \\(20\\%\\) of 45 would be 9, and partial corrections of that land anywhere in this range.\n" +
    "The most specific error is computing wholesale as \\(45 \\times 0.8 = 36\\) or \\(45 - 0.8(45) = 9\\); both come from treating the markup as a discount off retail rather than an addition to cost.\n" +
    "Check your wholesale figure by running it forwards: \\(25 \\times 1.8 = 45\\) ✓.",
  take: "Markup is a percentage of cost, not of price. Find the cost first, and note that the gap between two markups is that percentage difference applied to cost."
},

"quant-700-arith#24": {
  steps: "Step 1 — The tank holds 20 gallons at \\(5\\%\\) ethanol, so it contains \\(0.05 \\times 20 = 1\\) gallon of ethanol.\n" +
    "Step 2 — Adding \\(x\\) gallons of pure ethanol raises the ethanol to \\(1 + x\\) and the total volume to \\(20 + x\\) — both numerator and denominator change.\n" +
    "Step 3 — Set the new concentration to \\(10\\%\\): \\(\\dfrac{1 + x}{20 + x} = 0.10\\).\n" +
    "Step 4 — Cross-multiply: \\(10(1 + x) = 20 + x\\), so \\(10 + 10x = 20 + x\\).\n" +
    "Step 5 — \\(9x = 10\\), giving \\(x = \\dfrac{10}{9}\\) gallons.",
  fast: "The trick that makes this quick is to track the thing that does *not* change: gasoline stays at 19 gallons. If gasoline must end up as \\(90\\%\\) of the mixture, the final volume is \\(19 / 0.9 = \\tfrac{190}{9}\\), and the ethanol added is \\(\\tfrac{190}{9} - 20 = \\tfrac{10}{9}\\).\n" +
    "That constant-component method avoids the two-sided equation entirely and generalises to every \"add pure X\" problem.",
  traps: "(B) 1 is the answer to \"how much ethanol is already there\" and also what you get from the wrong equation \\(\\dfrac{1+x}{20} = 0.10\\), which forgets that adding ethanol also increases the total volume. This is the intended trap.\n" +
    "(E) 2 comes from doubling the ethanol because the target percentage is double the current one — but the denominator grows too, so doubling overshoots.\n" +
    "(A) 9/10 and (D) 20/19 are the near-misses produced by inverting a fraction in the final step.\n" +
    "Sanity check the answer: \\(\\dfrac{1 + 10/9}{20 + 10/9} = \\dfrac{19/9}{190/9} = \\dfrac{19}{190} = 0.10\\) ✓.",
  take: "When you add a pure component, both numerator and denominator change. Either write \\(\\frac{a+x}{T+x}\\), or — usually faster — hold the untouched component fixed and solve for the new total."
},

"quant-700-arith#25": {
  steps: "Step 1 — Put all three quantities into the same form. Decimals are easiest here.\n" +
    "Step 2 — \\(\\tfrac13 \\approx 0.333\\).\n" +
    "Step 3 — \\(0.4\\) is already a decimal.\n" +
    "Step 4 — \\(65\\% = 0.65\\).\n" +
    "Step 5 — Add: \\(0.333 + 0.4 + 0.65 = 1.383\\).\n" +
    "Step 6 — The choices are spaced 0.1 apart, and 1.383 is 0.017 from 1.4 but 0.083 from 1.3, so 1.4 is closest.",
  fast: "Round in a controlled direction: \\(\\tfrac13\\) is a little over \\(0.33\\), so the sum is a little over \\(1.38\\) — clearly nearer \\(1.4\\) than \\(1.3\\). The word \"closest\" means you never need the exact value, only enough precision to beat the 0.05 midpoint between adjacent choices.",
  traps: "(C) 1.3 is the trap of truncating \\(\\tfrac13\\) to \\(0.3\\), which drags the sum down to \\(1.35\\) and leaves the comparison genuinely ambiguous. Keep two decimal places at minimum.\n" +
    "(E) 1.5 comes from rounding \\(\\tfrac13\\) up to \\(0.5\\) — treating the fraction as \"about a half\" rather than \"about a third\".\n" +
    "(A) 1.1 and (B) 1.2 arise from converting \\(65\\%\\) as \\(0.065\\) or from dropping one of the three terms.\n" +
    "Note that the midpoint between the two plausible choices is \\(1.35\\); the sum only has to clear that to settle the question.",
  take: "Convert fractions, decimals and percents to one form before adding. On \"closest to\" questions, decide how much precision you need by looking at the gap between adjacent choices."
},

"quant-700-arith#26": {
  steps: "Step 1 — The tank is filled to one quarter of 24 gallons: \\(6\\) gallons of mixture.\n" +
    "Step 2 — Sodium chloride is \\(40\\%\\) of that: \\(0.40 \\times 6 = 2.4\\) gallons. Water is the other \\(3.6\\) gallons.\n" +
    "Step 3 — Over 2 hours at \\(0.5\\) gallons per hour, \\(1\\) gallon of water evaporates.\n" +
    "Step 4 — Water remaining: \\(3.6 - 1 = 2.6\\) gallons. Salt is unchanged at \\(2.4\\) gallons.\n" +
    "Step 5 — New total volume: \\(2.6 + 2.4 = 5.0\\) gallons.\n" +
    "Step 6 — Concentration of water: \\(\\dfrac{2.6}{5.0} = 52\\%\\).",
  fast: "The salt is the constant — 2.4 gallons before and after — so anchor on it. Only water leaves, so the new total is \\(6 - 1 = 5\\) gallons, and water is \\(5 - 2.4 = 2.6\\). One subtraction each and the division \\(2.6/5\\) is immediate.\n" +
    "The 24-gallon capacity is a decoy beyond its role in Step 1; the tank is never filled further.",
  traps: "(A) 43% is \\(2.6/6\\) — using the *original* total volume as the denominator and forgetting that the tank now holds less liquid.\n" +
    "(B) 50% assumes the evaporation is split between water and salt, or simply eyeballs \"about half\".\n" +
    "(D) 54% and (E) 56% come from removing the gallon from the wrong component or from computing \\(2.4/5 = 48\\%\\) and then taking a mis-stated complement.\n" +
    "Both the numerator and the denominator shrink here, and each distractor updates only one of them.",
  take: "In evaporation problems, the dissolved solid is constant — anchor on it. When one component leaves, the total volume falls too, so update numerator and denominator together."
}

});
