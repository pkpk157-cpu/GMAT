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
