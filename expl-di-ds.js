/* GMAT Prep — in-depth explanations for the Data Insights / Data Sufficiency
   sets. Every answer was independently re-derived before the explanation was
   written; no stored key was changed. Keys are "setId#n"; index.html merges
   these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-ds-extra#1": {
  steps: "Step 1 — Name the unknowns: \\(t\\) tulips and \\(r\\) roses, and the vase holds nothing else.\n" +
    "Step 2 — Statement (1): \\(r = 4t\\). This is a ratio with no scale — \\(t\\) could be 1 (with 4 roses), 5 (with 20 roses) or 100. [[Not sufficient]].\n" +
    "Step 3 — Statement (2): \\(r + t = 20\\). This is a total with no split — 10 and 10, or 19 and 1, both fit. [[Not sufficient]].\n" +
    "Step 4 — Together: substitute \\(r = 4t\\) into \\(r + t = 20\\) to get \\(5t = 20\\), so \\(t = 4\\) and \\(r = 16\\). A single value — [[sufficient]].",
  fast: "This is the archetype of the C pattern: one statement gives a ratio, the other gives a total, and a ratio plus a total always determines the parts.\n" +
    "You can see it without algebra — 4 tulips to 16 roses is the only 1:4 split of 20 — so there is no need to write the equations out at all.",
  traps: "(A) and (B) each treat half the information as the whole. A ratio fixes proportions but not size; a total fixes size but not proportions.\n" +
    "(D) would require each alone to work, which neither does.\n" +
    "(E) understates the pair — two independent linear equations in two unknowns have a unique solution unless they are multiples of each other, and these are not.\n" +
    "The discipline that prevents all of these: before reading the statements, note that the question has two unknowns and so needs two independent facts.",
  take: "Count the unknowns first. A ratio and a total are exactly the two facts needed to split a group — each alone is never enough."
},

"di-ds-extra#2": {
  steps: "Step 1 — The stem gives one equation: \\(10a + 2g = 12\\), where \\(a\\) and \\(g\\) are the prices per pound. The question asks for \\(a\\).\n" +
    "Step 2 — With two unknowns and one equation, one more independent equation would settle it.\n" +
    "Step 3 — Statement (1): \\(g = 2\\). Substituting, \\(10a + 4 = 12\\), so \\(a = 0.80\\) — [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(2a < g\\). This is an inequality, not an equation, so it carves out a range rather than a point.\n" +
    "Step 5 — Combining with the stem, \\(g = 6 - 5a\\), so \\(2a < 6 - 5a\\) gives \\(a < \\tfrac67\\). Values like \\(a = 0.50\\) and \\(a = 0.80\\) both qualify — [[not sufficient]].",
  fast: "Count what each statement supplies. Statement (1) is a second equation, which closes a two-unknown system. Statement (2) is an inequality, and an inequality almost never pins a single value.\n" +
    "That reasoning answers the question before any substitution — the arithmetic in Step 3 is only confirmation.",
  traps: "(D) treats the inequality as decisive. It does narrow the range of \\(a\\), but Data Sufficiency for a \"what is the value\" question demands a single number.\n" +
    "(C) is the cautious pairing, but statement (1) already suffices on its own.\n" +
    "(B) inverts the two.\n" +
    "(E) ignores that statement (1) closes the system.\n" +
    "The general rule: for value questions, inequalities are sufficient only in rare cases where they trap exactly one admissible value — usually via an integer constraint, which is absent here.",
  take: "For \"what is the value\", you need a unique number. Equations close systems; inequalities give ranges and are rarely sufficient without an integrality constraint."
},

"di-ds-extra#3": {
  steps: "Step 1 — The median of a list is a position, and finding it requires both the count and the actual values around that position.\n" +
    "Step 2 — Statement (1): there were 29 employees, so the median is the 15th salary in order. But no salary figures are given at all — [[not sufficient]].\n" +
    "Step 3 — Statement (2): 12 employees earned \\(24{,}000\\). Without the total headcount, the 15th position is not even located — [[not sufficient]].\n" +
    "Step 4 — Together: 29 employees, 12 of them at \\(24{,}000\\). The position of those 12 in the ordered list is unknown.\n" +
    "Step 5 — If they are the 12 lowest-paid, positions 1–12, the 15th salary is some higher, unknown figure.\n" +
    "Step 6 — If they occupy positions 9–20, the 15th salary is \\(24{,}000\\).\n" +
    "Step 7 — Two different medians are consistent with both statements — [[not sufficient]].",
  fast: "A median needs the count *and* the value sitting at the middle position. Statement (1) gives only the count and statement (2) only some values, so ask whether the combination locates the middle value.\n" +
    "It does not, because 12 is fewer than 15 — the block of known salaries can sit entirely below the median or straddle it. Had the statement said 15 or more employees earned \\(24{,}000\\), the median would be forced.",
  traps: "(C) is the intended trap: two complementary-looking statements feel like they should combine. The missing piece is *where* the 12 known salaries fall in the ordering, which neither statement supplies.\n" +
    "(B) treats a block of identical salaries as automatically central.\n" +
    "(A) treats a headcount as enough to find a median.\n" +
    "(D) is stronger than either.\n" +
    "The number to watch is 12 against the median position 15 — a block of 15 or more identical salaries in a list of 29 would guarantee the median.",
  take: "A median requires the count and the value at the middle position. A block of \\(k\\) identical values in a list of \\(n\\) forces the median only when \\(k\\) exceeds half of \\(n\\)."
},

"di-ds-extra#4": {
  steps: "Step 1 — The question asks how many units of X equal 250 units of Y, which depends only on the exchange rate between them.\n" +
    "Step 2 — Statement (1): \\(100X = 625Y\\). Dividing, \\(1X = 6.25Y\\), so \\(250Y = \\dfrac{250}{6.25} = 40X\\) — [[sufficient]].\n" +
    "Step 3 — Statement (2): \\(2000X = 12500Y\\). Dividing, \\(1X = 6.25Y\\) again, giving the same answer of 40 — [[sufficient]].\n" +
    "Step 4 — Each statement alone determines the rate, so each alone answers the question.",
  fast: "Recognise that the question needs only a rate, not any absolute quantity, and both statements are rates in disguise.\n" +
    "The two statements are in fact the same rate scaled by 20 — \\(2000 = 20 \\times 100\\) and \\(12500 = 20 \\times 625\\) — so once you have checked one, the other follows by inspection.",
  traps: "(C) is the reflex answer when both statements look like they are \"about the same thing\", but each is independently complete.\n" +
    "(A) and (B) pick one statement and dismiss the other, usually because the larger numbers in (2) look like they might carry extra information. They do not.\n" +
    "(E) misreads a rate as insufficient for a quantity conversion.\n" +
    "Worth noting: Data Sufficiency statements never contradict each other, so if two statements give the same rate that is a consistency check, not a redundancy problem.",
  take: "A conversion question needs only a rate. Two statements that reduce to the same rate are each independently sufficient — the answer is D, not C."
},

"di-ds-extra#5": {
  steps: "Step 1 — Let \\(s\\) be the scanner's price and \\(p\\) the price of each printer. The purchase is 3 printers and 1 scanner.\n" +
    "Step 2 — Statement (1): \\(3p + s = 1300\\). One equation, two unknowns — the scanner could cost 100 (printers 400 each) or 400 (printers 300 each) — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(p = 4s\\). A ratio with no amounts attached — [[not sufficient]].\n" +
    "Step 4 — Together: substitute to get \\(3(4s) + s = 13s = 1300\\), so \\(s = 100\\) — [[sufficient]].",
  fast: "Same structure as the flowers question: a total plus a ratio determines the parts. Substituting turns the purchase into 13 scanner-equivalents, and \\(1300 / 13 = 100\\) falls out immediately.\n" +
    "Counting in units of the smallest item — here the scanner — is the quickest way to handle any \"one thing costs \\(k\\) times another\" problem.",
  traps: "(A) and (B) each supply only one of the two facts a two-unknown system needs.\n" +
    "(D) requires both to work alone.\n" +
    "(E) understates the pair; the two equations are independent, so they intersect in one point.\n" +
    "The only real risk in the combination step is arithmetic: three printers at \\(4s\\) each is \\(12s\\), so the total is \\(13s\\), not \\(5s\\) — a slip that would give 260.",
  take: "Express every quantity in units of the smallest one, then a total collapses to a single division. A ratio plus a total is the classic C pattern."
},

"di-ds-extra#6": {
  steps: "Step 1 — Let \\(b\\), \\(g\\) and \\(p\\) be the counts of blue, green and purple marbles, with \\(b + g + p = 256\\) from the stem. The question asks for \\(b : p\\).\n" +
    "Step 2 — Statement (1): \\(g = 4b\\). That leaves \\(b\\) free and \\(p\\) determined by it, but the ratio still varies — with \\(b = 10\\) the ratio is \\(10 : 206\\); with \\(b = 20\\) it is \\(20 : 156\\) — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(g = 192\\). Then \\(b + p = 64\\), but the split is unknown — [[not sufficient]].\n" +
    "Step 4 — Together: \\(192 = 4b\\) gives \\(b = 48\\).\n" +
    "Step 5 — Then \\(p = 256 - 192 - 48 = 16\\).\n" +
    "Step 6 — The ratio is \\(48 : 16 = 3 : 1\\) — [[sufficient]].",
  fast: "Notice that the question asks for a ratio, not for counts — so it might have been answerable with less. Here it is not: the stem's total is doing real work, and both statements are needed to pin \\(b\\).\n" +
    "Once \\(g = 192\\) and \\(g = 4b\\) are combined, \\(b = 48\\) and everything else follows by subtraction from 256.",
  traps: "(A) and (B) each leave one degree of freedom in the blue–purple split.\n" +
    "(D) requires each alone to work.\n" +
    "(E) is the trap for anyone who forgets that the stem itself supplies the third equation, \\(b + g + p = 256\\). Without it the system would indeed be under-determined.\n" +
    "The lesson is to count the stem as a statement: three unknowns need three independent equations, and the stem supplies one of them.",
  take: "Information in the stem counts toward closing the system. Three unknowns need three independent relations — check the stem before declaring a pair insufficient."
},

"di-ds-extra#7": {
  steps: "Step 1 — The question is a yes/no: is Group A's average higher than Group B's?\n" +
    "Step 2 — Statement (1): the group sizes are 10 and 12. Sizes alone say nothing about scores — [[not sufficient]].\n" +
    "Step 3 — Statement (2): the top scorer is in Group B and the bottom scorer in Group A. Knowing the two extremes constrains neither average — [[not sufficient]].\n" +
    "Step 4 — Together, build both answers. For a YES: Group A has one student at 0 and nine at 99, averaging \\(89.1\\); Group B has one at 100 and eleven at 50, averaging \\(54.2\\). Both statements hold, and A is higher.\n" +
    "Step 5 — For a NO: Group A has one student at 0 and nine at 50, averaging \\(45\\); Group B has one at 100 and eleven at 90, averaging \\(90.8\\). Both statements still hold, and A is lower.\n" +
    "Step 6 — Two opposite answers survive both statements — [[not sufficient]].",
  fast: "Extremes constrain almost nothing about an average, because the other members of each group are free. That intuition points straight at E, and the job is then to build two explicit scenarios.\n" +
    "The efficient construction: fix the required extremes, then push the *rest* of one group high and the rest of the other low — then swap.",
  traps: "(C) is the natural guess: one statement describes the sizes and the other the extremes, so they feel complementary. But nothing constrains the 9 and 11 middle students, who dominate both averages.\n" +
    "(B) treats \"holds the highest score\" as evidence of a higher average. A single top score can sit above a group of very low ones.\n" +
    "(A) treats group size as relevant to an average, which it is not by itself.\n" +
    "The habit worth building on yes/no questions: aim to produce one YES and one NO rather than trying to compute an answer.",
  take: "Knowing the extreme values of two groups constrains neither average. On yes/no questions, try to construct one YES scenario and one NO scenario."
},

"di-ds-extra#8": {
  steps: "Step 1 — Let \\(c\\) be the total cans and \\(s\\) the number of students. The question asks for \\(c/s\\).\n" +
    "Step 2 — Statement (1): \\(c = 56\\). Without \\(s\\), the average is unknown — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(c = s + 40\\). One equation, two unknowns; the average could be \\(41/1\\) or \\(60/20\\) — [[not sufficient]].\n" +
    "Step 4 — Together: substitute \\(c = 56\\) into \\(c = s + 40\\) to get \\(s = 16\\).\n" +
    "Step 5 — The average is \\(\\dfrac{56}{16} = 3.5\\) cans per student — [[sufficient]].",
  fast: "An average is a quotient, so ask whether each statement supplies the numerator, the denominator, or a relation between them. Statement (1) is the numerator; statement (2) is a relation. Together they close the system.\n" +
    "Note that a fractional answer is perfectly acceptable — an average need not be a whole number even when the underlying counts are.",
  traps: "(A) treats a total as an average.\n" +
    "(B) treats a relation between two unknowns as determining their quotient. It does not: \\(c = s + 40\\) allows the ratio to be anything above 1.\n" +
    "(D) requires each alone to work.\n" +
    "(E) misses that the two facts are independent and close the system.\n" +
    "One subtlety worth noticing: the phrase \"some students donated\" might suggest that not every student donated, but the question asks for the average per student *in the class*, so \\(s\\) is the class size throughout.",
  take: "An average is a quotient — check whether the statements give the numerator, the denominator, or a relation linking them. Two independent facts about two unknowns close the system."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-ds-extra#9": {
  steps: "Step 1 — Statement (1): if the median sits at the 15th position of an ordered list, the list has \\(2(15) - 1 = 29\\) entries. That locates the median but names no salary — [[not sufficient]].\n" +
    "Step 2 — Statement (2): the salaries total \\(600{,}000\\). A sum never determines a median; the same total can be distributed in countless ways — [[not sufficient]].\n" +
    "Step 3 — Together: 29 distinct salaries summing to \\(600{,}000\\).\n" +
    "Step 4 — Make them nearly equal, all clustered around \\(20{,}690\\), and the median is about \\(20{,}690\\).\n" +
    "Step 5 — Or make fourteen of them tiny and the top fifteen large: the 15th salary can be pushed far above or far below that figure while the total stays fixed.\n" +
    "Step 6 — The median is not determined — [[not sufficient]].",
  fast: "A sum constrains the *mean*, never the median, and the two are independent once the values are free to move. So the moment you see a total offered against a median question, expect it to fail.\n" +
    "Statement (1) is worth decoding — the 15th position implies \\(n = 29\\) — but a position without values is still nothing.",
  traps: "(C) is the standard trap: a count and a total feel like a complete description, but a list is not determined by its length and its sum.\n" +
    "(A) mistakes locating the median for knowing it.\n" +
    "(B) mistakes a total for an average, and an average for a median.\n" +
    "(D) is stronger than either.\n" +
    "The distinctness condition in the stem is a red herring here — it rules out ties but does nothing to pin the middle value.",
  take: "A sum determines the mean, not the median. Knowing which position is the median tells you the list length, not the value sitting there."
},

"di-ds-extra#10": {
  steps: "Step 1 — Let \\(a\\) and \\(b\\) be the class sizes. Each A student handed in 7 assignments and each B student 5.\n" +
    "Step 2 — Statement (1): \\(7a + 5b = 85\\). This is one equation in two unknowns, but both must be non-negative integers, so the solutions are limited.\n" +
    "Step 3 — Those solutions include \\((a, b) = (5, 10)\\) and \\((10, 3)\\), which give different answers — [[not sufficient]].\n" +
    "Step 4 — Statement (2): \\(b = 10\\) says nothing about \\(a\\) — [[not sufficient]].\n" +
    "Step 5 — Together: \\(7a + 5(10) = 85\\), so \\(7a = 35\\) and \\(a = 5\\) — [[sufficient]].",
  fast: "The integrality is the reason statement (1) deserves a second look rather than instant dismissal — a single Diophantine equation sometimes has a unique non-negative solution.\n" +
    "Here it does not: since \\(7 \\times 5 = 35\\) and \\(5 \\times 7 = 35\\), you can trade 5 A-students for 7 B-students and stay at 85. Finding that trade is the quickest way to prove insufficiency.",
  traps: "(A) is the trap for anyone who assumes one equation in two unknowns is automatically insufficient *or* automatically sufficient once integers are involved — the honest approach is to hunt for a second solution.\n" +
    "(B) treats one class size as determining the other.\n" +
    "(D) requires each alone to work.\n" +
    "(E) understates the pair.\n" +
    "Note the trade structure: whenever the two coefficients are \\(m\\) and \\(n\\), swapping \\(n\\) of one for \\(m\\) of the other preserves the total, so multiple solutions are the norm.",
  take: "A single equation with integer unknowns may still have several solutions — look for the trade that preserves the total (swap \\(n\\) of one for \\(m\\) of the other) before ruling either way."
},

"di-ds-extra#11": {
  steps: "Step 1 — The quantity wanted is \\(50 - |F \\cup P|\\), so the question reduces to finding the size of the union.\n" +
    "Step 2 — Statement (1): \\(|F \\cup P| < 50\\). An inequality, so \"neither\" could be anything from 1 to 50 — [[not sufficient]].\n" +
    "Step 3 — Statement (2): the overlap is 15. Inclusion–exclusion gives \\(|F \\cup P| = |F| + |P| - 15\\), and neither individual total is known — [[not sufficient]].\n" +
    "Step 4 — Together: the union is at least 15 (it contains the overlap) and less than 50.\n" +
    "Step 5 — With a union of 20, \"neither\" is 30; with a union of 45, \"neither\" is 5. Both are consistent with an overlap of 15 — [[not sufficient]].",
  fast: "Rewrite the target as \\(50 - |F \\cup P|\\) and the question becomes \"do the statements determine the union?\". Statement (1) bounds it and statement (2) constrains only the overlap, so neither gives a number.\n" +
    "The overlap is the least useful single piece of set information: it appears in inclusion–exclusion alongside two unknown totals.",
  traps: "(C) is the natural pairing, but a bound plus an overlap still leaves the union free across a wide range.\n" +
    "(B) treats the overlap as though it determined the union.\n" +
    "(A) treats a strict inequality as a value — the most it yields is \"at least one household owns neither\".\n" +
    "(D) is stronger still.\n" +
    "Compare this with the cats-and-dogs question in the same set, where the *union* is given directly; that is the piece of information this question deliberately withholds.",
  take: "\"Neither\" = total − union. The overlap alone never determines the union; you need it alongside both group totals, or the union itself."
},

"di-ds-extra#12": {
  steps: "Step 1 — With principal \\(P\\) and a fixed \\(4\\%\\) compounded annually, the interest earned in year 1 is \\(0.04P\\).\n" +
    "Step 2 — By year 3 the balance has grown to \\(P(1.04)^2\\), so that year's interest is \\(0.04P(1.04)^2\\).\n" +
    "Step 3 — The difference is \\(0.04P\\big[(1.04)^2 - 1\\big]\\), which depends only on \\(P\\). So the question reduces to finding the principal.\n" +
    "Step 4 — Statement (1): the balance entering year 2 is \\(1.04P = 4160\\), so \\(P = 4000\\) — [[sufficient]].\n" +
    "Step 5 — Statement (2): the balance entering year 3 is \\((1.04)^2 P = 4326.40\\). Since \\((1.04)^2 = 1.0816\\), \\(P = 4326.40 / 1.0816 = 4000\\) — [[sufficient]].\n" +
    "Step 6 — Each statement alone pins the principal, so each alone answers the question.",
  fast: "Reduce the target first: with the rate fixed, every year's interest is a known multiple of \\(P\\), so the whole question is \"what is the principal?\".\n" +
    "Then each statement is a balance at a known point in the compounding schedule, and dividing back by the appropriate power of 1.04 recovers \\(P\\). You never need to compute the difference itself.",
  traps: "(C) is the reflex answer when both statements describe the same investment at different times. Each is independently invertible.\n" +
    "(A) and (B) reject one statement, usually (2), because dividing by \\(1.0816\\) looks laborious. Laborious is not insufficient.\n" +
    "(E) misses that a balance plus a known rate determines the principal.\n" +
    "The efficiency point is that Data Sufficiency asks only whether the value is determined — computing \\(P = 4000\\) is optional and computing the final difference is a waste of time.",
  take: "When a rate is fixed, any single balance determines the principal and therefore every other year's figure. Reduce the target to its one unknown before reading the statements."
},

"di-ds-extra#13": {
  steps: "Step 1 — Write the total: parts \\(50\\), labour \\(L\\), and \\(6\\%\\) tax on both. Total \\(= 50 + L + 0.06(50 + L)\\).\n" +
    "Step 2 — Everything depends on the single unknown \\(L\\), so the question is whether each statement pins it.\n" +
    "Step 3 — Statement (1): the tax on labour alone is \\(9.60\\), so \\(0.06L = 9.60\\) and \\(L = 160\\). The total is \\(210 + 12.60 = 222.60\\) — [[sufficient]].\n" +
    "Step 4 — Statement (2): the total tax is \\(12.60\\), so \\(0.06(50 + L) = 12.60\\), giving \\(50 + L = 210\\) and \\(L = 160\\) — the same value, [[sufficient]].\n" +
    "Step 5 — Each alone determines the total charge.",
  fast: "Statement (2) is the quicker of the two: dividing the total tax by the tax rate gives the pre-tax subtotal directly (\\(12.60 / 0.06 = 210\\)), and the total charge is that subtotal plus the tax.\n" +
    "Once you see that the parts charge is already given, the only missing quantity is labour — and any tax figure recovers it.",
  traps: "(C) is the standard over-caution when two statements happen to agree.\n" +
    "(B) rejects statement (1), perhaps on the grounds that it covers only part of the tax; but the parts charge is already known, so labour tax is exactly the missing piece.\n" +
    "(A) rejects statement (2) for the mirror-image reason.\n" +
    "(E) misses that a tax amount and a tax rate together give a base amount.\n" +
    "The one genuine arithmetic risk is treating the \\(6\\%\\) as applying to the total *including* tax; the stem is explicit that it applies to parts plus labour.",
  take: "A tax amount divided by the tax rate recovers the taxed base. Identify the single unknown in the target expression before evaluating any statement."
},

"di-ds-extra#14": {
  steps: "Step 1 — The donation is \\(p\\%\\) of profits, with \\(p\\) the same in every year. To answer, we need both \\(p\\) and last year's profits.\n" +
    "Step 2 — Statement (1): two years ago, \\(15{,}000\\) was donated out of \\(3\\) million, so \\(p = \\dfrac{15{,}000}{3{,}000{,}000} = 0.5\\%\\). But last year's profits are unknown, and the donation could be above or below \\(10{,}000\\) — [[not sufficient]].\n" +
    "Step 3 — Statement (2): last year's profits were \\(2.5\\) million, but \\(p\\) is unknown — a rate of \\(0.1\\%\\) gives \\(2{,}500\\) and a rate of \\(1\\%\\) gives \\(25{,}000\\) — [[not sufficient]].\n" +
    "Step 4 — Together: \\(0.5\\%\\) of \\(2.5\\) million is \\(12{,}500\\).\n" +
    "Step 5 — That exceeds \\(10{,}000\\), so the answer is a definite yes — [[sufficient]].",
  fast: "A percentage question needs the rate and the base; each statement supplies exactly one, so C is the shape to expect and the only job is confirming the arithmetic falls decisively on one side of the threshold.\n" +
    "\\(0.5\\%\\) of \\(2.5\\) million is a half-percent of two and a half million — \\(12{,}500\\), comfortably above \\(10{,}000\\), so there is no borderline worry.",
  traps: "(A) uses the rate with the wrong year's profits — the \\(15{,}000\\) figure belongs to two years ago and says nothing directly about last year.\n" +
    "(B) uses the base without a rate.\n" +
    "(D) accepts either alone.\n" +
    "(E) is the answer if you doubt that a yes/no question can be settled by a computed value; it can, and here the value clears the threshold decisively.\n" +
    "The phrase doing the work is \"in each of the last five years\" — that is what licenses carrying \\(p\\) from two years ago into last year.",
  take: "A percentage question needs both the rate and the base. Check whether the stem lets you carry a rate between years, then confirm the result clears the threshold."
},

"di-ds-extra#15": {
  steps: "Step 1 — Set up the line: \\(f\\) people in front of Adam, then Adam, then \\(m\\) people between, then Beth, then \\(b\\) people behind Beth.\n" +
    "Step 2 — The stem gives \\(f + b = 18\\), and the line's total length is \\(f + m + b + 2\\).\n" +
    "Step 3 — Statement (1): the line has 32 people, so \\(f + m + b = 30\\). Subtracting the stem's \\(f + b = 18\\) gives \\(m = 12\\). But \\(b\\) is still free — [[not sufficient]].\n" +
    "Step 4 — Statement (2): the people behind Adam are the \\(m\\) between, Beth herself, and the \\(b\\) behind her: \\(m + 1 + b = 23\\), so \\(m + b = 22\\). Two unknowns remain — [[not sufficient]].\n" +
    "Step 5 — Together: \\(m = 12\\) and \\(m + b = 22\\) give \\(b = 10\\) — [[sufficient]].",
  fast: "Draw the line as five blocks — \\(f\\), Adam, \\(m\\), Beth, \\(b\\) — and every statement becomes one linear equation. Counting Adam and Beth themselves is the only place to slip.\n" +
    "\"Behind Adam\" includes Beth, so it is \\(m + 1 + b\\), not \\(m + b\\); that single \\(+1\\) is what statement (2) is testing.",
  traps: "(A) stops at \\(m = 12\\) and mistakes it for the answer to a question about \\(b\\).\n" +
    "(B) treats \\(m + b = 22\\) as enough, which it is not without a second relation.\n" +
    "(D) accepts either alone.\n" +
    "(E) understates the pair; two independent equations plus the stem's third close the system.\n" +
    "The recurring counting error is forgetting to include Adam and Beth in the line's total — the length is \\(f + m + b + 2\\), not \\(f + m + b\\).",
  take: "Model a queue as blocks separated by the named people, and remember to count those people themselves. \"Behind X\" includes everyone after X, named individuals included."
},

"di-ds-extra#16": {
  steps: "Step 1 — \"At least one cat or at least one dog, but not both\" is the exactly-one region: \\(|C \\cup D| - |C \\cap D|\\).\n" +
    "Step 2 — Statement (1): the overlap is 4. Without the union, exactly-one is unknown — [[not sufficient]].\n" +
    "Step 3 — Statement (2): 14 households have neither, so the union is \\(50 - 14 = 36\\). But the overlap is unknown, so exactly-one could be 36 (no overlap) or 20 (overlap 16) — [[not sufficient]].\n" +
    "Step 4 — Together: union \\(= 36\\) and overlap \\(= 4\\).\n" +
    "Step 5 — Exactly one \\(= 36 - 4 = 32\\) — [[sufficient]].",
  fast: "Translate the wording into regions before touching the statements: \"or but not both\" is the union minus the intersection. Then the question needs exactly two numbers, and the statements supply one each.\n" +
    "\"Neither\" converts to the union in one subtraction from the total, which is why statement (2) is more useful than it first looks.",
  traps: "(B) treats the union as the answer, forgetting the \"but not both\" clause that removes the overlap.\n" +
    "(A) gives only the overlap.\n" +
    "(D) accepts either alone.\n" +
    "(E) misses that \"neither\" and the total together give the union.\n" +
    "Contrast this with the fax-and-printer question in the same set: there the union was only bounded, so no number emerged. Here it is pinned exactly, which is the whole difference.",
  take: "\"A or B but not both\" = union − intersection. \"Neither\" plus the total gives the union, so those two statements together supply exactly what is needed."
},

"di-ds-extra#17": {
  steps: "Step 1 — The pricing has two regimes: a flat \\(92\\) for a job of 4 hours or less, and \\(23\\) per hour for a job over 4 hours. The two jobs together took 7 hours.\n" +
    "Step 2 — Statement (1): one job was charged \\(92\\), so it took 4 hours or less — but the exact time is not fixed.\n" +
    "Step 3 — If that job took 4 hours, the other took 3, also under the threshold and also \\(92\\): total \\(184\\).\n" +
    "Step 4 — If that job took 1 hour, the other took 6, which is over the threshold and costs \\(6 \\times 23 = 138\\): total \\(230\\). Two totals — [[not sufficient]].\n" +
    "Step 5 — Statement (2): one job was charged \\(138\\). That can only be hourly billing, and \\(138 / 23 = 6\\) hours — consistent, since 6 exceeds 4.\n" +
    "Step 6 — The other job then took \\(7 - 6 = 1\\) hour, under the threshold, so it cost \\(92\\).\n" +
    "Step 7 — Total \\(138 + 92 = 230\\), a single value — [[sufficient]].",
  fast: "The two statements differ in how much they reveal. A charge of \\(92\\) is a flat fee that hides the duration; a charge of \\(138\\) is an hourly bill that reveals it exactly.\n" +
    "That asymmetry is the whole question: dividing \\(138\\) by \\(23\\) recovers 6 hours, which fixes the second job at 1 hour and therefore at the flat rate.",
  traps: "(D) accepts statement (1), which is the intended trap: a known charge feels like a known job. But the flat fee covers a whole range of durations, and the *other* job's cost depends on which duration it was.\n" +
    "(A) inverts the two statements.\n" +
    "(C) is over-cautious; statement (2) alone closes it.\n" +
    "(E) misses that hourly billing is invertible.\n" +
    "Check the consistency in Step 5: a charge of \\(138\\) must correspond to more than 4 hours, and 6 does — had the arithmetic given 3 hours, the statement would have been self-contradictory.",
  take: "A flat fee hides the underlying quantity; a per-unit charge reveals it. Verify that a recovered value is consistent with the regime that produced it."
},

"di-ds-extra#18": {
  steps: "Step 1 — The question compares two rates of return, so it needs a rate for each type.\n" +
    "Step 2 — Statement (1): type J returns \\(115\\) per \\(1{,}000\\), a rate of \\(11.5\\%\\). Type K returns \\(300\\) per \\(2{,}500\\), a rate of \\(\\dfrac{300}{2500} = 12\\%\\).\n" +
    "Step 3 — \\(12\\% > 11.5\\%\\), so type K has the greater rate — a definite answer, [[sufficient]].\n" +
    "Step 4 — Statement (2): type K returns \\(12\\%\\), but nothing at all is said about type J — [[not sufficient]].",
  fast: "Convert both figures to rates before comparing; the raw dollar returns are misleading because they apply to different investment sizes.\n" +
    "\\(300\\) on \\(2{,}500\\) is easiest as \\(\\tfrac{3}{25} = \\tfrac{12}{100}\\), and \\(115\\) on \\(1{,}000\\) is \\(11.5\\%\\) by inspection.",
  traps: "(D) accepts statement (2), which supplies one rate and leaves the comparison open — a comparison always needs both sides.\n" +
    "(C) is over-cautious: statement (1) already gives both rates, and statement (2) merely repeats one of them.\n" +
    "(B) inverts the two.\n" +
    "(E) misses that (1) is complete.\n" +
    "The trap inside statement (1) is the raw dollar figures: \\(300\\) exceeds \\(115\\), which might suggest K wins on size alone — true here, but only because the rate comparison happens to agree. Always divide by the investment.",
  take: "Compare rates, not dollar returns, when the investment sizes differ. A comparison question needs information about both sides."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-ds-extra#19": {
  steps: "Step 1 — Let \\(x\\) be the price of the 5 pounds of regular and \\(y\\) the price of the 3 pounds of decaf. The stem gives \\(x + y = 21.50\\).\n" +
    "Step 2 — Note that the question asks for \\(x\\) as a bundle price, not a per-pound price, so no division by 5 is needed.\n" +
    "Step 3 — Statement (1): \\(0.9x + 0.8y = 18.45\\). Substitute \\(y = 21.50 - x\\): \\(0.9x + 17.20 - 0.8x = 18.45\\), so \\(0.1x = 1.25\\) and \\(x = 12.50\\) — [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(x = y + 3.50\\). With \\(x + y = 21.50\\), substituting gives \\(2y + 3.50 = 21.50\\), so \\(y = 9\\) and \\(x = 12.50\\) — [[sufficient]].\n" +
    "Step 5 — Each statement supplies a second independent equation, so each alone determines \\(x\\).",
  fast: "The stem already gives one equation in two unknowns, so the only question is whether each statement supplies a second *independent* one. Both do, and both are linear — so both are sufficient without computing anything.\n" +
    "Statement (1) simplifies beautifully: the two discount factors differ by \\(0.1\\), so after substitution the \\(y\\) terms almost cancel and a single \\(0.1x\\) survives.",
  traps: "(C) is the reflex when two statements happen to yield the same value; each was already enough.\n" +
    "(A) and (B) reject one statement, usually (1), because the discount arithmetic looks messy. Messy is not insufficient — the substitution collapses it in one line.\n" +
    "(E) misses that both are genuine equations.\n" +
    "One reading trap in the stem: \\(x\\) is the price of *5 pounds*, not of one pound, so no per-pound conversion belongs anywhere in this problem.",
  take: "With one equation from the stem and two unknowns, any statement giving a second independent linear equation is sufficient. Check what unit the question asks about."
},

"di-ds-extra#20": {
  steps: "Step 1 — The three paints total 12 quarts: \\(g + y + w = 12\\).\n" +
    "Step 2 — Statement (1): green to (yellow plus white) is \\(1 : 3\\). Those two groups together are the entire mixture, so green is 1 part out of 4.\n" +
    "Step 3 — That gives green \\(= \\tfrac14 \\times 12 = 3\\) quarts — [[sufficient]].\n" +
    "Step 4 — Statement (2): yellow to green is \\(3 : 2\\), but white is entirely unconstrained.\n" +
    "Step 5 — With \\(w = 2\\), the remaining 10 quarts split \\(6 : 4\\), so green is 4. With \\(w = 7\\), the remaining 5 split \\(3 : 2\\), so green is 2 — [[not sufficient]].",
  fast: "The decisive feature of statement (1) is that its two groups are exhaustive — green versus everything else. A ratio against the complement always fixes the share of the whole.\n" +
    "Statement (2) compares green against only one of the other two colours, leaving the third free, which is exactly why it fails.",
  traps: "(D) accepts statement (2), which looks structurally similar but is not: it constrains two of three quantities, leaving one degree of freedom.\n" +
    "(C) is the over-cautious pairing; statement (1) alone closes it.\n" +
    "(B) inverts the two.\n" +
    "(E) misses that a part-to-whole ratio plus a total is always enough.\n" +
    "The distinction worth internalising is part-to-part versus part-to-whole: \\(1 : 3\\) against the complement means \\(\\tfrac14\\) of the total, not \\(\\tfrac13\\).",
  take: "A ratio of one part to *all the rest* fixes that part's share of the whole; a ratio between two parts of three leaves the third free."
},

"di-ds-extra#21": {
  steps: "Step 1 — Within each size the colours split evenly, so green small \\(= \\tfrac12 \\times\\) small, and green large \\(= \\tfrac12 \\times\\) large.\n" +
    "Step 2 — The question asks for \\(\\dfrac{\\text{green large}}{\\text{green total}} = \\dfrac{\\tfrac12 L}{\\tfrac12 (S + L)} = \\dfrac{L}{S + L}\\).\n" +
    "Step 3 — So the answer is simply the large toys' share of the whole lot — the colour split cancels out entirely.\n" +
    "Step 4 — Statement (1): 400 small toys are green, so there are 800 small toys. But the number of large toys is unknown, so the share is not determined — [[not sufficient]].\n" +
    "Step 5 — Statement (2): small is \\(\\tfrac23\\) of the lot, so large is \\(\\tfrac13\\). The answer is \\(\\tfrac13\\) — [[sufficient]].",
  fast: "Simplify the target before reading the statements. Because the red–green split is the same within every size, the green large fraction reduces to the large fraction of the whole lot — a fraction, not a count.\n" +
    "Once you see that, statement (2) is visibly exactly what is needed, and statement (1)'s absolute count is visibly the wrong kind of information.",
  traps: "(A) is the trap for anyone who reaches for the concrete number. 400 is a count, and the question wants a fraction — a count fixes nothing without the other size's count.\n" +
    "(C) is the cautious pairing; statement (2) alone closes it.\n" +
    "(D) accepts both.\n" +
    "(E) misses the cancellation.\n" +
    "The reason the cancellation works is the phrase \"for each size\": if the colour split differed between sizes, statement (2) alone would not suffice.",
  take: "Simplify the requested ratio first — shared factors often cancel. A question wanting a fraction is usually answered by proportions, not by counts."
},

"di-ds-extra#22": {
  steps: "Step 1 — The answer is (total attendances across all 8 performances) divided by 8. So the question reduces to finding the total number of attendances.\n" +
    "Step 2 — Statement (1): every student attended at least one performance. That is a lower bound of 200 attendances, but the true total could be 200 or 1,600 — [[not sufficient]].\n" +
    "Step 3 — Statement (2): students averaged 4 performances each. With 200 students, the total attendances are \\(200 \\times 4 = 800\\).\n" +
    "Step 4 — The average per performance is \\(\\dfrac{800}{8} = 100\\) — [[sufficient]].",
  fast: "The same pool of attendances can be averaged two ways — per student or per performance — and knowing one average plus both counts gives the other.\n" +
    "Formally: (attendances) = (students) × (average per student) = (performances) × (average per performance). Statement (2) fills in three of the four quantities.",
  traps: "(A) treats a lower bound as a value. \"At least one\" is the classic insufficiency signal on Data Sufficiency.\n" +
    "(C) is the cautious pairing; statement (2) alone closes it, and statement (1) adds nothing (it is even implied by an average of 4 in most, though not all, distributions).\n" +
    "(D) accepts both.\n" +
    "(E) misses the double-counting identity.\n" +
    "The number 200 comes from the stem, and it is essential — without the student count, an average per student would convert to nothing.",
  take: "Total attendances = (people) × (average per person) = (events) × (average per event). One average plus both counts determines the other average."
},

"di-ds-extra#23": {
  steps: "Step 1 — The question is a yes/no: can at least 1,000 jackets be made from 3,000 pounds of wool and 2,000 pounds of cotton?\n" +
    "Step 2 — Statement (1): a wool jacket takes 4 pounds of wool and no cotton, so the wool alone yields \\(3000 / 4 = 750\\) jackets. But nothing is known about what the cotton can produce — [[not sufficient]].\n" +
    "Step 3 — Statement (2): a cotton jacket takes 6 pounds of cotton and no wool, so the cotton alone yields \\(\\lfloor 2000/6 \\rfloor = 333\\) jackets. The wool is unaccounted for — [[not sufficient]].\n" +
    "Step 4 — Together: making only pure jackets gives \\(750 + 333 = 1083\\) jackets.\n" +
    "Step 5 — That already exceeds 1,000, so the answer is a definite yes — [[sufficient]].",
  fast: "The two statements describe *disjoint* uses of the two materials — wool jackets consume no cotton and vice versa — so the yields simply add. No optimisation over combination jackets is needed.\n" +
    "And because the question asks only whether 1,000 is reachable, finding one workable production plan is enough; \\(750 + 333\\) clears the bar with room to spare.",
  traps: "(D) accepts one statement alone, but each covers only one material and the question concerns both.\n" +
    "(A) and (B) do the same in one direction.\n" +
    "(E) is the trap for anyone who worries about the combination jackets mentioned in the stem. Those are an *option*, not a requirement — ignoring them is legitimate, since we only need to show 1,000 is achievable.\n" +
    "Note the floor in Step 3: 2,000 pounds at 6 pounds each gives 333 whole jackets, not \\(333.\\overline{3}\\).",
  take: "When statements describe disjoint uses of separate resources, the yields add. For a \"can we reach \\(N\\)\" question, one feasible plan settles it."
},

"di-ds-extra#24": {
  steps: "Step 1 — Let \\(P\\) be the pre-sale price and \\(D\\) the discounted price. The discount percentage is \\(\\dfrac{P - D}{P}\\).\n" +
    "Step 2 — Statement (1): \\(P = 1.25D\\). Substitute: \\(\\dfrac{1.25D - D}{1.25D} = \\dfrac{0.25D}{1.25D} = \\dfrac{0.25}{1.25} = 20\\%\\).\n" +
    "Step 3 — The unknown \\(D\\) cancels entirely, so the percentage is determined without knowing either price — [[sufficient]].\n" +
    "Step 4 — Statement (2): the discount was 60 dollars. Without a base price this is no percentage at all: 60 off 200 is \\(30\\%\\), 60 off 600 is \\(10\\%\\) — [[not sufficient]].",
  fast: "A percentage is a ratio, so any statement giving a *ratio* of the two prices is sufficient and any statement giving an absolute difference is not.\n" +
    "Statement (1) is a ratio in disguise, and the arithmetic \\(\\tfrac{0.25}{1.25} = \\tfrac15\\) is worth knowing on sight: a \\(25\\%\\) markup corresponds to a \\(20\\%\\) discount going the other way.",
  traps: "(C) adds the dollar figure to the ratio, which would let you find both prices — far more than the question needs.\n" +
    "(D) accepts the dollar amount alone.\n" +
    "(B) inverts the two.\n" +
    "(E) misses the cancellation.\n" +
    "The subtler trap sits inside statement (1): the \\(25\\%\\) is measured *from the discounted price upward*, so the discount is not \\(25\\%\\). Percentage increases and decreases between the same two numbers always differ, because the bases differ.",
  take: "A percentage question needs a ratio, not an absolute amount. Going up \\(25\\%\\) and coming back down are different percentages — \\(P = 1.25D\\) means a \\(20\\%\\) discount."
},

"di-ds-extra#25": {
  steps: "Step 1 — Let the mixture total \\(T\\) gallons. Then \\(0.01xT = 1\\) (blue) and \\(0.01zT = 3\\) (red).\n" +
    "Step 2 — Dividing those, \\(\\dfrac{z}{x} = 3\\), so \\(z = 3x\\) — a relation that holds regardless of the statements.\n" +
    "Step 3 — Also \\(x + y + z = 100\\), since the three percentages exhaust the mixture.\n" +
    "Step 4 — Statement (1): \\(x = y\\). Then \\(x + x + 3x = 100\\), so \\(x = 20\\), \\(y = 20\\), \\(z = 60\\). From \\(0.01(20)T = 1\\), \\(T = 5\\), and green is \\(20\\%\\) of 5 \\(= 1\\) gallon — [[sufficient]].\n" +
    "Step 5 — Statement (2): \\(z = 60\\). Then \\(x = 20\\) from \\(z = 3x\\), and \\(y = 100 - 20 - 60 = 20\\), giving the same 1 gallon — [[sufficient]].",
  fast: "The stem already carries a hidden relation: 3 gallons of red to 1 of blue means \\(z = 3x\\), whatever the total is. That plus \\(x + y + z = 100\\) leaves a single degree of freedom, so any one more fact closes it.\n" +
    "Both statements supply exactly one such fact, which is why the answer is D rather than C.",
  traps: "(C) is the reflex when two statements point to the same configuration; each was independently enough once the stem's relation is extracted.\n" +
    "(A) and (B) reject one statement, usually because the connection \\(z = 3x\\) was not noticed and the system looked under-determined.\n" +
    "(E) misses that relation entirely.\n" +
    "The habit to build: mine the stem for relations before testing statements. Here the gallon figures are not decoration — they encode a ratio between two of the percentages.",
  take: "Extract every relation the stem implies before evaluating statements. Fixed volumes of two components fix the ratio of their percentages."
},

"di-ds-extra#26": {
  steps: "Step 1 — The charge is \\(T = F + xM\\), where \\(x\\) is the number of minutes *beyond* the 420-minute allowance. So \\(x = 0\\) whenever usage is 420 minutes or less.\n" +
    "Step 2 — Statement (1): 450 minutes means \\(x = 30\\), giving \\(13{,}755 = F + 30M\\). One equation, two unknowns — [[not sufficient]].\n" +
    "Step 3 — Statement (2): 400 minutes is *within* the allowance, so \\(x = 0\\) and the equation collapses to \\(T = F\\).\n" +
    "Step 4 — Therefore \\(F = 13{,}125\\) directly — [[sufficient]].",
  fast: "The whole question turns on comparing each month's usage against the 420-minute threshold. A month under the cap bills the flat fee and nothing else, so it reveals \\(F\\) immediately; a month over the cap mixes \\(F\\) and \\(M\\) together.\n" +
    "Check the threshold before doing any algebra — that single comparison decides both statements.",
  traps: "(A) treats the over-cap month as more informative because it produces a richer-looking equation. Richer is worse here: two unknowns in one equation determine neither.\n" +
    "(C) is the cautious pairing, and it would indeed give both \\(F\\) and \\(M\\) — but the question asks only for \\(F\\), which statement (2) supplies alone.\n" +
    "(D) accepts both.\n" +
    "(E) misses that under-cap usage isolates the fixed fee.\n" +
    "The reading error to avoid is treating \\(x\\) as total minutes rather than overage minutes; the stem defines it as \"each of \\(x\\) additional minutes\".",
  take: "In a tiered plan, usage below the allowance isolates the fixed fee. Compare each data point against the threshold before writing equations."
},

"di-ds-extra#27": {
  steps: "Step 1 — Profit per unit: P earns \\(10.00 - 8.00 = 2.00\\); Q earns \\(13.00 - 9.50 = 3.50\\).\n" +
    "Step 2 — With \\(p + q = 834\\), total profit is \\(2p + 3.5q = 2(834 - q) + 3.5q = 1668 + 1.5q\\).\n" +
    "Step 3 — That exceeds 2,000 exactly when \\(1.5q > 332\\), i.e. \\(q > 221.3\\), so from \\(q \\ge 222\\) upward.\n" +
    "Step 4 — Statement (1): more P than Q means \\(q \\le 416\\). With \\(q = 100\\) the profit is \\(1{,}818\\) (no); with \\(q = 400\\) it is \\(2{,}268\\) (yes) — [[not sufficient]].\n" +
    "Step 5 — Statement (2): \\(q \\ge 100\\) admits exactly the same two cases — [[not sufficient]].\n" +
    "Step 6 — Together: \\(100 \\le q \\le 416\\), a range that straddles the threshold of 222 — [[not sufficient]].",
  fast: "Reduce the profit to a single variable first: \\(1668 + 1.5q\\). Then the question becomes \"is \\(q\\) above 222?\", and each statement is just an interval to compare against that number.\n" +
    "Both intervals contain 222 in their interior, so neither decides — and their intersection still does. Finding the threshold once replaces all the case testing.",
  traps: "(C) is the natural guess: two bounds from opposite directions feel like they should pin the answer. They do bound \\(q\\), but the bounds are far too loose — 100 to 416 spans the critical value comfortably.\n" +
    "(A) and (B) each treat one loose bound as decisive.\n" +
    "(D) is stronger still.\n" +
    "The reliable method for yes/no threshold questions: compute the exact break-even value, then check whether each statement's range lies entirely on one side of it.",
  take: "Reduce a yes/no quantity to one variable and find its break-even value. A statement is sufficient only if its whole range sits on one side of that value."
},

"di-ds-extra#28": {
  steps: "Step 1 — The three outcomes — both offers, exactly one, neither — are mutually exclusive and exhaustive, so \\(P_2 + P_1 + P_0 = 1\\).\n" +
    "Step 2 — Statement (1): \\(P_0 = 0.3\\), so \\(P_2 + P_1 = 0.7\\). That leaves \\(P_2\\) anywhere from 0 to 0.7 — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(P_1 = 0.5\\), so \\(P_2 + P_0 = 0.5\\). Again \\(P_2\\) is free — [[not sufficient]].\n" +
    "Step 4 — Together: \\(P_2 = 1 - P_1 - P_0 = 1 - 0.5 - 0.3 = 0.2\\) — [[sufficient]].",
  fast: "Partition the sample space into exactly three cases and the arithmetic is a single subtraction. No independence assumption is needed, and none is available — the two job offers may well be correlated.\n" +
    "Naming the three probabilities before reading the statements is what makes the combination obvious.",
  traps: "(A) and (B) each fix one of the three pieces and leave two unknown.\n" +
    "(D) accepts either alone.\n" +
    "(E) misses that three exhaustive cases summing to 1 need only two known values.\n" +
    "The tempting shortcut is to assume the two offers are independent and multiply individual probabilities. Nothing in the question supports that, and the partition method needs no such assumption.",
  take: "Partition an outcome space into mutually exclusive, exhaustive cases summing to 1. Knowing all but one determines the last — no independence assumption required."
},

"di-ds-extra#29": {
  steps: "Step 1 — Convert the speed: \\(120\\) cm per second is \\(1.2\\) metres per second.\n" +
    "Step 2 — At that speed, 90 metres takes \\(90 / 1.2 = 75\\) seconds.\n" +
    "Step 3 — So the distance is under 90 metres exactly when the travel time is under 75 seconds. That is the threshold to test.\n" +
    "Step 4 — Statement (1): less than \\(1.2\\) minutes is less than \\(72\\) seconds. Every value under 72 is also under 75, so the answer is a definite yes — [[sufficient]].\n" +
    "Step 5 — Statement (2): more than \\(1.1\\) minutes is more than \\(66\\) seconds. That allows 70 seconds (distance 84 m, yes) and 80 seconds (distance 96 m, no) — [[not sufficient]].",
  fast: "Convert the target distance into a time threshold once — 75 seconds — and then each statement is a one-line comparison.\n" +
    "The trap is the units: \\(1.2\\) minutes is 72 seconds, not 120 seconds, and \\(1.1\\) minutes is 66. Converting minutes to seconds before comparing is the whole exercise.",
  traps: "(D) accepts statement (2), whose lower bound of 66 seconds sits *below* the 75-second threshold and therefore decides nothing.\n" +
    "(B) inverts the two.\n" +
    "(C) is the cautious pairing; statement (1) alone closes it, since an upper bound below the threshold settles the question.\n" +
    "(E) misses that.\n" +
    "The structural rule: an upper bound is decisive when it falls below the threshold; a lower bound is decisive when it falls above it. Here only the first applies.",
  take: "Convert the target into a threshold in the statements' own units. An upper bound settles a \"less than\" question only if it lies below the threshold."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-datasufficiency-ex#1": {
  steps: "Step 1 — Let \\(P\\) be the price two years ago. Today's price is 3,600.\n" +
    "Step 2 — Statement (1): the price rose \\(10\\%\\) per year for two years, so \\(3600 = P(1.1)^2 = 1.21P\\). That is a single linear equation in \\(P\\), with the unique solution \\(P = 3600/1.21\\) — [[sufficient]].\n" +
    "Step 3 — Statement (2): today's price is \\(1.21\\) times the price two years ago, i.e. \\(3600 = 1.21P\\) — the identical equation, [[sufficient]].\n" +
    "Step 4 — Each statement alone determines \\(P\\).",
  fast: "Both statements say the same thing: \\((1.1)^2 = 1.21\\), so \"ten percent per year for two years\" and \"1.21 times\" are two descriptions of one growth factor.\n" +
    "For sufficiency you never need the value — noting that each statement yields one equation in one unknown is enough.",
  traps: "(C) is the reflex answer when two statements look like they describe the same situation. Redundancy is not a reason to require both; each is complete.\n" +
    "(A) and (B) reject one statement, usually (1), because compounding looks like it might introduce a second unknown. It does not — the rate is given.\n" +
    "(E) misses that a known growth factor inverts.\n" +
    "The efficiency trap is computing \\(3600/1.21 \\approx 2975.21\\), which Data Sufficiency never asks for.",
  take: "Two years at \\(r\\%\\) is a factor of \\((1+r)^2\\). One equation in one unknown is sufficient — stop before computing the value."
},

"di-datasufficiency-ex#2": {
  steps: "Step 1 — Statement (1): \\(x^2 = 36\\) gives \\(x = 6\\) or \\(x = -6\\). Two values, so no unique answer — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(x\\) is negative. That is an entire half-line, not a value — [[not sufficient]].\n" +
    "Step 3 — Together: the two candidates from (1) are \\(6\\) and \\(-6\\), and (2) eliminates the positive one.\n" +
    "Step 4 — So \\(x = -6\\), a single value — [[sufficient]].",
  fast: "An even power always produces two candidate roots, and a sign condition is exactly the tool that selects between them. Recognising that pairing makes this a C answer on sight.\n" +
    "The general shape: statement (1) narrows to a finite set, statement (2) filters that set to one member.",
  traps: "(A) forgets the negative root — the single most common error in Data Sufficiency, and the reason \\(x^2 = k\\) is such a frequent setup.\n" +
    "(B) treats a sign as a value.\n" +
    "(D) accepts either alone.\n" +
    "(E) misses that two candidates plus a filter leave one.\n" +
    "Note that had statement (1) been \\(x^3 = 36\\), an odd power, it would have been sufficient by itself — the parity of the exponent is what matters.",
  take: "\\(x^2 = k\\) yields two roots; \\(x^3 = k\\) yields one. A sign condition is worth exactly as much as the number of candidates it eliminates."
},

"di-datasufficiency-ex#3": {
  steps: "Step 1 — Statement (1): \\(n\\) times some nonzero number equals 0. A product is zero only when one factor is zero, and the other factor is stated to be nonzero.\n" +
    "Step 2 — Therefore \\(n = 0\\) — a definite yes, [[sufficient]].\n" +
    "Step 3 — Statement (2): \\(n + 0 = 0\\). Adding zero changes nothing, so this says \\(n = 0\\) directly — a definite yes, [[sufficient]].\n" +
    "Step 4 — Each statement alone answers the question.",
  fast: "Both statements are restatements of \\(n = 0\\) wrapped in different arithmetic. The zero-product property handles the first; the additive identity handles the second.\n" +
    "The word \"nonzero\" in statement (1) is what makes it work — without it, the equation would be satisfied by any \\(n\\) paired with a zero multiplier.",
  traps: "(C) is the habit of pairing statements that look like they cover the same ground.\n" +
    "(A) and (B) each dismiss one, usually (2), because it looks too trivial to be informative. Triviality is not insufficiency — \\(n + 0 = 0\\) genuinely pins \\(n\\).\n" +
    "(E) rejects both.\n" +
    "The one thing to check in statement (1) is that the other factor really is nonzero; if it could be zero, \\(n\\) would be unconstrained.",
  take: "A product is zero only if a factor is zero — so with the other factor known nonzero, the remaining one must vanish. Trivial-looking statements can still be sufficient."
},

"di-datasufficiency-ex#4": {
  steps: "Step 1 — \"Even\" is a property of integers, and nothing in the stem says \\(x\\) is an integer. That is the crux.\n" +
    "Step 2 — Statement (1): \\(7x\\) is even. Take \\(x = 2\\) — even, answer yes. Take \\(x = \\tfrac27\\) — then \\(7x = 2\\), even, but \\(x\\) is not an integer, so it is not even. Two different answers — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(5x\\) is even. The same argument with \\(x = \\tfrac25\\) — [[not sufficient]].\n" +
    "Step 4 — Together: \\(7x\\) and \\(5x\\) are both even integers, so their difference \\(7x - 5x = 2x\\) is an even integer, which forces \\(x\\) to be an integer.\n" +
    "Step 5 — Then \\(5x\\) even with 5 odd requires \\(x\\) itself to be even — a definite yes, [[sufficient]].",
  fast: "Ask first whether \\(x\\) is guaranteed to be an integer. It is not, and one fraction — \\(\\tfrac27\\) or \\(\\tfrac25\\) — dispatches each statement alone.\n" +
    "The combination works by subtraction: \\(7x - 5x = 2x\\) must be an even integer, which drags \\(x\\) into the integers, after which the odd multiplier 5 preserves parity.",
  traps: "(D) is the trap for anyone who silently assumes \\(x\\) is an integer. Under that assumption each statement alone *would* work, since 7 and 5 are odd — which is exactly why the assumption must be tested.\n" +
    "(A) and (B) make the same assumption for one statement.\n" +
    "(E) misses that the pair forces integrality.\n" +
    "The general warning: parity, divisibility and \"even/odd\" language all presuppose integers, and Data Sufficiency routinely withholds that word deliberately.",
  take: "Parity arguments need integers. If the stem does not say \"integer\", test a fraction before concluding anything about even or odd."
},

"di-datasufficiency-ex#5": {
  steps: "Step 1 — The box has four categories: red spheres, green spheres, red cubes, green cubes. The total is their sum.\n" +
    "Step 2 — Statement (1): 6 cubes and 5 green objects. Cubes plus spheres is the total, but the sphere count is unknown; the green count overlaps both shapes — [[not sufficient]].\n" +
    "Step 3 — Statement (2): 2 red spheres. That is one of four cells — [[not sufficient]].\n" +
    "Step 4 — Together: cubes \\(= 6\\), green \\(= 5\\), red spheres \\(= 2\\). Let \\(g_s\\) be the green spheres.\n" +
    "Step 5 — Then spheres \\(= 2 + g_s\\), and the total is \\(6 + 2 + g_s = 8 + g_s\\).\n" +
    "Step 6 — Green cubes are \\(5 - g_s\\), which only requires \\(0 \\le g_s \\le 5\\). So the total ranges from 8 to 13 — [[not sufficient]].",
  fast: "A two-by-two table has four cells, and knowing a row total, a column total and one cell still leaves one degree of freedom — you need one more cell or one more margin.\n" +
    "Draw the grid, mark what is known, and count the unknowns: one free variable survives, so the total is not determined.",
  traps: "(C) is the natural guess: three facts about four cells feels like enough. It is not — the grid needs four independent pieces, and the missing one is the sphere or green-cube count.\n" +
    "(A) treats a shape count and a colour count as spanning the box.\n" +
    "(B) treats one cell as informative about the whole.\n" +
    "(D) is stronger still.\n" +
    "Note what *would* have sufficed: the total number of spheres, or the number of green spheres, or the number of red cubes.",
  take: "A two-by-two table needs enough facts to fill every cell. A row total, a column total and one cell leave one degree of freedom."
},

"di-datasufficiency-ex#6": {
  steps: "Step 1 — The units digit of a product depends only on the units digits of the factors.\n" +
    "Step 2 — Statement (1): the units digit of \\(a\\) is 4. Multiplied by an unknown units digit, the result varies: \\(4 \\times 1 = 4\\) (units 4, not \\(> 5\\)) and \\(4 \\times 2 = 8\\) (units 8, \\(> 5\\)) — [[not sufficient]].\n" +
    "Step 3 — Statement (2): the units digit of \\(b\\) is 7, and by the same argument it varies — [[not sufficient]].\n" +
    "Step 4 — Together: the units digit of the product is the units digit of \\(4 \\times 7 = 28\\), which is 8.\n" +
    "Step 5 — \\(8 > 5\\), a definite yes — [[sufficient]].",
  fast: "Units digits multiply independently of everything else in the numbers, so the three-digit framing is decoration. Once both units digits are known, the answer is one multiplication.\n" +
    "Each statement alone fails for the obvious reason that one factor is still free.",
  traps: "(D) accepts one statement alone, forgetting that a product needs both factors' units digits.\n" +
    "(E) is the trap for anyone who thinks the hundreds and tens digits might interfere. They cannot — only the units column feeds the units column.\n" +
    "(A) and (B) each pick one statement.\n" +
    "A useful check: the answer is a definite *yes* here, but a definite *no* would have been equally sufficient — the question is whether the answer is determined, not whether it is affirmative.",
  take: "The units digit of a product depends only on the units digits of the factors. A definite \"no\" is as sufficient as a definite \"yes\"."
},

"di-datasufficiency-ex#7": {
  steps: "Step 1 — Translate the relationship: \\(M - J = 2(M - K)\\).\n" +
    "Step 2 — Expand: \\(M - J = 2M - 2K\\), so \\(-J = M - 2K\\), i.e. \\(M + J = 2K\\).\n" +
    "Step 3 — The average of the three salaries is \\(\\dfrac{M + J + K}{3}\\). Substituting \\(M + J = 2K\\) gives \\(\\dfrac{2K + K}{3} = K\\).\n" +
    "Step 4 — So the average equals Kate's salary exactly, whatever the individual figures.\n" +
    "Step 5 — Statement (2) gives \\(K = 40{,}000\\), so the average is \\(40{,}000\\) — [[sufficient]].\n" +
    "Step 6 — Statement (1) gives \\(J = 30{,}000\\), which leaves \\(M\\) and \\(K\\) linked but unknown — [[not sufficient]].",
  fast: "Simplify the stem's relation before touching the statements — that is the whole question. \\(M - J = 2(M-K)\\) collapses to \\(M + J = 2K\\), which says Kate's salary is the average of the other two, and therefore the average of all three.\n" +
    "Once the target is identified as \"Kate's salary\", the statements answer themselves.",
  traps: "(A) picks the statement that names a salary, without noticing the algebra points at the other person.\n" +
    "(C) is the cautious pairing; statement (2) alone closes it.\n" +
    "(D) accepts either.\n" +
    "(E) misses the simplification.\n" +
    "The detail that makes the algebra work is the direction of the differences — both are measured from Mary downward, which is consistent with the stem saying her salary is highest.",
  take: "Simplify a stem's relation into its cleanest form before reading the statements. \\(M + J = 2K\\) means \\(K\\) is the mean of all three."
},

"di-datasufficiency-ex#8": {
  steps: "Step 1 — The question asks for \\(a - b\\), a single combination, not for \\(a\\) and \\(b\\) individually.\n" +
    "Step 2 — Statement (1): \\(a + 2b = 11\\). Then \\(a = 11 - 2b\\), so \\(a - b = 11 - 3b\\), which varies with \\(b\\) — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(4a + b = 5b + 8\\). Collect terms: \\(4a - 4b = 8\\).\n" +
    "Step 4 — Divide by 4: \\(a - b = 2\\) — exactly the quantity asked for, [[sufficient]].",
  fast: "Rearrange each statement toward the target combination rather than solving for the variables. Statement (2) is \\(a - b\\) in disguise, scaled by 4.\n" +
    "This is the recurring Data Sufficiency lesson: a statement can determine a *combination* of unknowns without determining either one — here \\(a\\) and \\(b\\) remain individually unknown.",
  traps: "(C) is the trap for anyone who solves for both variables. Together the statements do give \\(a\\) and \\(b\\), but that is more than the question needs.\n" +
    "(A) treats any linear equation in two unknowns as equivalent to any other; \\(a + 2b\\) is not a multiple of \\(a - b\\).\n" +
    "(D) accepts either.\n" +
    "(E) misses the rearrangement.\n" +
    "The test to apply: can the statement be scaled into exactly the requested expression? \\(4a - 4b = 8\\) can; \\(a + 2b = 11\\) cannot.",
  take: "Ask whether a statement can be rescaled into the exact expression requested. Determining a combination does not require determining each variable."
},

"di-datasufficiency-ex#9": {
  steps: "Step 1 — Factor the target: \\(a^2 - b^2 = (a + b)(a - b)\\).\n" +
    "Step 2 — Statement (1): \\(a + b = 16\\). The other factor is unknown, so the product could be anything — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(a - b = 0\\). Then the product is \\((a+b) \\times 0 = 0\\), no matter what \\(a + b\\) turns out to be.\n" +
    "Step 4 — The value is uniquely 0 — [[sufficient]].",
  fast: "Factor the difference of squares first and the question becomes \"do we know both factors, or does one of them vanish?\".\n" +
    "A factor of zero annihilates the product regardless of the other factor, which is why statement (2) alone suffices while a non-zero value there would not.",
  traps: "(C) is the cautious pairing — with both statements you could find \\(a = b = 8\\), but statement (2) already fixed the value at 0.\n" +
    "(A) treats one factor as enough; \\(16 \\times (a-b)\\) is undetermined.\n" +
    "(D) accepts either.\n" +
    "(E) misses the annihilation.\n" +
    "Compare with a variant where statement (2) read \\(a - b = 2\\): then neither alone would work, and the answer would be C. The zero is doing all the work.",
  take: "Factor the requested expression first. A factor of zero determines a product outright; any other single factor does not."
},

"di-datasufficiency-ex#10": {
  steps: "Step 1 — Simplify the question. \\(\\dfrac{5^{x+2}}{25} = \\dfrac{5^{x+2}}{5^2} = 5^{x}\\).\n" +
    "Step 2 — So the question is simply: is \\(5^x < 1\\)?\n" +
    "Step 3 — Statement (1) says exactly that — a definite yes, [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(x < 0\\). Since \\(5 > 1\\), the function \\(5^x\\) is increasing and equals 1 at \\(x = 0\\), so \\(x < 0\\) gives \\(5^x < 1\\) — a definite yes, [[sufficient]].\n" +
    "Step 5 — Each statement alone answers the question.",
  fast: "Simplify the target before reading the statements — the \\(25\\) in the denominator cancels the \\(+2\\) in the exponent, leaving a bare \\(5^x\\).\n" +
    "After that, both statements are just two phrasings of \"\\(x\\) is negative\": for a base above 1, \\(b^x < 1\\) and \\(x < 0\\) are equivalent.",
  traps: "(C) pairs two statements that are logically identical once the expression is simplified.\n" +
    "(A) and (B) reject one, usually (2), on the grounds that a condition on \\(x\\) is not a condition on \\(5^x\\). For a base above 1 it is exactly that.\n" +
    "(E) misses the simplification entirely and treats \\(5^{x+2}/25\\) as a new unknown.\n" +
    "Careful with the base: if the base were between 0 and 1, the equivalence would reverse and \\(x < 0\\) would give a value *above* 1.",
  take: "Simplify the question stem first. For a base \\(b > 1\\), \\(b^x < 1\\) is equivalent to \\(x < 0\\); for \\(0 < b < 1\\) the direction flips."
},

"di-datasufficiency-ex#11": {
  steps: "Step 1 — Statement (1): \\(6a - 14b = 10\\). Divide through by 2: \\(3a - 7b = 5\\). One equation, two unknowns — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(21b = 9a - 15\\). Rearrange to \\(9a - 21b = 15\\), then divide by 3: \\(3a - 7b = 5\\) — [[not sufficient]].\n" +
    "Step 3 — The two statements reduce to the *same* equation, so combining them adds nothing.\n" +
    "Step 4 — Together we still have one equation in two unknowns, and \\(a\\) can be anything — \\((a,b) = (4,1)\\) and \\((11,4)\\) both work — [[not sufficient]].",
  fast: "Reduce both statements to lowest terms before comparing them. Two equations are only useful together if they are independent, and here one is a scalar multiple of the other in disguise.\n" +
    "The tell is that dividing (1) by 2 and (2) by 3 produces identical lines — so their graphs coincide rather than intersecting at a point.",
  traps: "(C) is the intended trap and by far the most chosen: two linear equations in two unknowns *usually* determine both, and it takes a moment's work to notice these are dependent.\n" +
    "(A) and (B) each treat one equation as enough.\n" +
    "(D) is stronger still.\n" +
    "The habit that catches this: always simplify each statement to lowest terms and compare the coefficient ratios. Here \\(6:14:10\\) and \\(9:21:15\\) are both \\(3:7:5\\).",
  take: "Two linear equations determine two unknowns only if they are independent. Reduce both to lowest terms and compare coefficient ratios before combining."
},

"di-datasufficiency-ex#12": {
  steps: "Step 1 — The question is a yes/no: is \\(a > 5\\)?\n" +
    "Step 2 — Statement (1): \\(a < 6\\). That range includes \\(5.5\\) (yes) and \\(4\\) (no) — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(a < 4\\). Every value below 4 is also below 5, so the answer is a definite no — [[sufficient]].",
  fast: "For a threshold question, a bound is sufficient exactly when it lies entirely on one side of the threshold. Compare each statement's boundary with 5: \\(6\\) is above it, \\(4\\) is below it.\n" +
    "The narrower statement is the sufficient one here, which is the opposite of the usual instinct that the wider range is more informative.",
  traps: "(A) treats \\(a < 6\\) as decisive because 6 is close to 5, but the interval \\((-\\infty, 6)\\) straddles the threshold.\n" +
    "(D) accepts both.\n" +
    "(C) is the cautious pairing, but the combination is just \\(a < 4\\), which statement (2) already gave.\n" +
    "(E) misses that a definite \"no\" is a sufficient answer.\n" +
    "The point worth internalising: sufficiency means the answer is determined, not that the answer is yes.",
  take: "An upper bound settles \"is \\(a > k\\)?\" only when it is at or below \\(k\\). A definite \"no\" counts as sufficient."
},

"di-datasufficiency-ex#13": {
  steps: "Step 1 — Statement (1): \\(-4a + 2b < b - 3a\\). Bring everything to one side: \\(-4a + 2b - b + 3a < 0\\), which simplifies to \\(-a + b < 0\\), i.e. \\(b < a\\).\n" +
    "Step 2 — That is exactly the question, answered yes — [[sufficient]].\n" +
    "Step 3 — Statement (2): \\(ca > cb\\), i.e. \\(c(a - b) > 0\\).\n" +
    "Step 4 — If \\(c > 0\\), dividing gives \\(a > b\\) — yes. If \\(c < 0\\), dividing reverses the inequality and gives \\(a < b\\) — no.\n" +
    "Step 5 — The sign of \\(c\\) is unknown, so both answers survive — [[not sufficient]].",
  fast: "Statement (1) is an algebraic disguise: collecting like terms turns it straight into the question. Do the collection before judging it.\n" +
    "Statement (2) is the classic \"never divide by a variable of unknown sign\" trap — factoring it as \\(c(a-b) > 0\\) makes the dependence on \\(c\\) explicit.",
  traps: "(D) accepts statement (2) by dividing both sides by \\(c\\) as if it were positive. Nothing in the question says it is.\n" +
    "(B) inverts the two.\n" +
    "(C) pairs them, but (1) alone is decisive and (2) adds only the sign of \\(c\\) — which is not needed.\n" +
    "(E) rejects (1), usually by mis-collecting terms; note that \\(2b - b = b\\) and \\(-4a + 3a = -a\\), so the simplification is short.\n" +
    "The rule to hold: dividing an inequality by a variable is only legal when that variable's sign is known.",
  take: "Collect terms before judging an inequality statement. Never divide an inequality by a variable of unknown sign — factor instead and read off the cases."
},

"di-datasufficiency-ex#14": {
  steps: "Step 1 — Three books averaging 15 dollars means the three prices sum to 45.\n" +
    "Step 2 — Statement (1): one book cost 13. The other two sum to 32, but their split is free. With \\(\\{13, 16, 16\\}\\) the median is 16; with \\(\\{1, 13, 31\\}\\) the median is 13 — [[not sufficient]].\n" +
    "Step 3 — Statement (2): one book cost 15, which is exactly the mean. The other two sum to \\(45 - 15 = 30\\).\n" +
    "Step 4 — If one of those two is below 15, the other must be above 15 to keep the sum at 30 — and vice versa. Either way, 15 sits between them.\n" +
    "Step 5 — So 15 is always the middle value, and the median is 15 — [[sufficient]].",
  fast: "The key is that statement (2) names a price equal to the mean. Whenever one of three values equals their average, the other two are symmetric about it and it must be the median.\n" +
    "Statement (1) names a price below the mean, which forces the other two to average above it — but says nothing about how they straddle.",
  traps: "(D) accepts statement (1) by assuming the prices are \"reasonably\" spread; nothing constrains them, and the median moves freely.\n" +
    "(A) inverts the two.\n" +
    "(C) is the cautious pairing; statement (2) alone closes it.\n" +
    "(E) misses the symmetry argument.\n" +
    "The edge case worth checking in Step 4 is a tie: if both remaining books cost 15, the median is still 15. The conclusion holds either way.",
  take: "If one of three values equals their mean, the other two straddle it, so that value is the median. A value below the mean fixes nothing about the ordering."
},

"di-datasufficiency-ex#15": {
  steps: "Step 1 — Let \\(C\\) be the cost. The first asking price gives a \\(40\\%\\) profit, so it is \\(1.4C\\).\n" +
    "Step 2 — Statement (1): the asking price was cut by \\(10\\%\\), so the sale price is \\(0.9 \\times 1.4C = 1.26C\\).\n" +
    "Step 3 — The profit is then \\(1.26C - C = 0.26C\\), and we are told that equals 403.\n" +
    "Step 4 — So \\(C = 403 / 0.26 = 1550\\) — a unique value, [[sufficient]].\n" +
    "Step 5 — Statement (2): the bracelet sold for 1,953, but the statement does not say at what discount. If it sold at the original asking price, \\(1.4C = 1953\\) gives \\(C = 1395\\); if at \\(10\\%\\) off, \\(1.26C = 1953\\) gives \\(C = 1550\\) — [[not sufficient]].",
  fast: "Carry \\(C\\) through as a multiplier: \\(C \\to 1.4C \\to 1.26C\\), so the realised profit is \\(0.26C\\). Statement (1) equates that to a number and inverts in one step.\n" +
    "Statement (2) gives a sale price without saying which price it is — the discount from statement (1) belongs to statement (1) only, and Data Sufficiency statements must be evaluated independently.",
  traps: "(D) accepts statement (2) by importing the \\(10\\%\\) discount from statement (1). That is the cardinal Data Sufficiency error: each statement must stand on its own.\n" +
    "(C) is the cautious pairing; statement (1) alone closes it.\n" +
    "(B) inverts the two.\n" +
    "(E) misses that a profit figure plus a profit *rate* determines the cost.\n" +
    "As a consistency check, the two statements agree: \\(1.26 \\times 1550 = 1953\\) ✓ — which is reassuring but not what makes (1) sufficient.",
  take: "Evaluate each statement in isolation — never carry a detail from statement (1) into statement (2). A profit amount plus a profit rate determines the cost."
},

"di-datasufficiency-ex#16": {
  steps: "Step 1 — Statement (1): \\(x^2 = 9\\) gives \\(x = 3\\) or \\(x = -3\\). One is positive and one is not, so the answer is undetermined — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(x^3 = 27\\). Cubing preserves sign, so a positive cube comes only from a positive number.\n" +
    "Step 3 — The unique real solution is \\(x = 3\\), which is positive — a definite yes, [[sufficient]].",
  fast: "Parity of the exponent decides everything. An even power destroys sign information and yields two roots; an odd power preserves it and yields exactly one real root.\n" +
    "So \\(x^2 = 9\\) can never settle a sign question, while \\(x^3 = 27\\) always can.",
  traps: "(D) accepts \\(x^2 = 9\\) by taking only the positive square root — the most common Data Sufficiency slip of all.\n" +
    "(C) is the cautious pairing; statement (2) alone closes it, and statement (1) adds nothing beyond what (2) already implies.\n" +
    "(A) inverts the two.\n" +
    "(E) misses that an odd power has a unique real root.\n" +
    "The same principle extends: \\(x^4 = 16\\) leaves two candidates, \\(x^5 = 32\\) leaves one.",
  take: "Even powers lose sign information and give two real roots; odd powers preserve it and give one. That parity alone often decides a sign question."
}

});
