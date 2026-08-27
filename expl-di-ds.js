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

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-datasufficiency-ex#17": {
  steps: "Step 1 — Statement (1): the primes strictly between 20 and 30 are 23 and 29. Two candidates, so no unique value — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(n\\) is odd. That admits infinitely many integers — [[not sufficient]].\n" +
    "Step 3 — Together: both 23 and 29 are odd, so statement (2) eliminates neither candidate.\n" +
    "Step 4 — Two values still survive — [[not sufficient]].",
  fast: "List the candidates from the restrictive statement first — there are only two — then ask whether the second statement removes either. It does not, because every prime above 2 is odd.\n" +
    "That observation is the whole question: \"odd\" is implied by \"prime in this range\" and therefore adds no information at all.",
  traps: "(C) is the intended trap: a narrow list plus an extra condition normally resolves to one value. Here the extra condition is redundant.\n" +
    "(A) assumes there is only one prime in the twenties; there are two.\n" +
    "(B) treats \"odd\" as narrowing.\n" +
    "(D) is stronger still.\n" +
    "The primes in the twenties are worth knowing cold: 23 and 29 (21 is \\(3 \\times 7\\), 25 is \\(5^2\\), 27 is \\(3^3\\)).",
  take: "Enumerate the candidates the restrictive statement allows, then test whether the second statement removes any. A condition already implied by the first adds nothing."
},

"di-datasufficiency-ex#18": {
  steps: "Step 1 — Both \\(x\\) and \\(y\\) are positive, which is what makes both statements usable.\n" +
    "Step 2 — Statement (1): \\(\\dfrac xy = 1.2\\), so \\(x = 1.2y\\). Since \\(y > 0\\), multiplying by \\(1.2\\) increases it, so \\(x > y\\) — a definite yes, [[sufficient]].\n" +
    "Step 3 — Statement (2): \\(x - y = 5\\), so \\(x = y + 5 > y\\) — a definite yes, [[sufficient]].\n" +
    "Step 4 — Each statement alone answers the question.",
  fast: "Both statements say \\(x\\) exceeds \\(y\\) in a different currency: one multiplicatively, one additively. Neither needs the actual values.\n" +
    "The positivity in the stem matters only for statement (1): if \\(y\\) could be negative, \\(x = 1.2y\\) would be *smaller* than \\(y\\), and the ratio would decide nothing.",
  traps: "(C) is the reflex pairing when both statements point the same way.\n" +
    "(A) and (B) reject one, usually (1), because a ratio feels like it needs a scale. For a yes/no comparison it does not.\n" +
    "(E) misses that both are decisive.\n" +
    "The instructive variant: drop the positivity condition and statement (1) becomes insufficient while statement (2) stays sufficient — the answer would be B. Always check which givens each statement leans on.",
  take: "A ratio above 1 proves \\(x > y\\) only when the quantities are positive; a positive difference proves it unconditionally."
},

"di-datasufficiency-ex#19": {
  steps: "Step 1 — The area of a rectangle is length times width, so both dimensions are needed.\n" +
    "Step 2 — Statement (1): the length is 8. The width is free, so the area could be anything — [[not sufficient]].\n" +
    "Step 3 — Statement (2): the perimeter is 28, so \\(2(l + w) = 28\\) and \\(l + w = 14\\). Many pairs sum to 14, with areas ranging from near 0 to 49 — [[not sufficient]].\n" +
    "Step 4 — Together: \\(l = 8\\) and \\(l + w = 14\\) give \\(w = 6\\).\n" +
    "Step 5 — Area \\(= 8 \\times 6 = 48\\) — [[sufficient]].",
  fast: "Convert the perimeter to \\(l + w = 14\\) immediately; a sum plus one value gives the other in one subtraction.\n" +
    "The general point is that a perimeter constrains the *sum* of the dimensions while the area needs their *product*, and a sum alone never determines a product.",
  traps: "(B) treats the perimeter as determining the area. It does not: a \\(7 \\times 7\\) rectangle and a \\(1 \\times 13\\) rectangle share a perimeter of 28 but have areas of 49 and 13.\n" +
    "(A) gives one dimension only.\n" +
    "(D) accepts either.\n" +
    "(E) misses that one dimension plus the sum gives the other.\n" +
    "A square is a rectangle, so nothing in the stem forces \\(l \\ne w\\) — which is precisely why statement (2) alone spans such a wide range of areas.",
  take: "Perimeter fixes \\(l + w\\); area needs \\(lw\\). A sum plus one term gives the other, but a sum alone never determines a product."
},

"di-datasufficiency-ex#20": {
  steps: "Step 1 — Divisibility by 6 means divisibility by both 2 and 3.\n" +
    "Step 2 — Statement (1): \\(k\\) is divisible by 3. But \\(k = 3\\) is not divisible by 6 while \\(k = 6\\) is — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(k\\) is divisible by 4, hence by 2. But \\(k = 4\\) is not divisible by 6 while \\(k = 12\\) is — [[not sufficient]].\n" +
    "Step 4 — Together: \\(k\\) is divisible by both 3 and 4, which are coprime, so \\(k\\) is divisible by \\(\\operatorname{lcm}(3,4) = 12\\).\n" +
    "Step 5 — Every multiple of 12 is a multiple of 6, so the answer is a definite yes — [[sufficient]].",
  fast: "Break the target into its prime requirements: 6 needs one factor of 2 and one of 3. Statement (2) supplies the 2 (in fact two of them) and statement (1) supplies the 3.\n" +
    "Neither alone covers both primes, which is what makes this a clean C.",
  traps: "(A) treats divisibility by 3 as enough, forgetting the factor of 2.\n" +
    "(B) treats divisibility by 4 as enough, forgetting the 3.\n" +
    "(D) accepts either.\n" +
    "(E) misses that combining coprime divisors multiplies them.\n" +
    "One caution on the general rule: divisibility by \\(a\\) and by \\(b\\) gives divisibility by \\(\\operatorname{lcm}(a,b)\\), not by \\(ab\\) — here 3 and 4 are coprime so the two coincide, but for 4 and 6 the lcm is 12, not 24.",
  take: "Factor the divisor into primes and check each is covered. Divisibility by \\(a\\) and \\(b\\) gives divisibility by \\(\\operatorname{lcm}(a,b)\\)."
},

"di-datasufficiency-ex#21": {
  steps: "Step 1 — Let \\(a\\) be the number of 15-cent stamps and \\(b\\) the number of 29-cent stamps, both non-negative integers.\n" +
    "Step 2 — Statement (1): \\(a = b\\). With no total, any equal pair works — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(15a + 29b = 440\\). This is one equation in two unknowns, but the integer requirement makes it a Diophantine problem with possibly few solutions.\n" +
    "Step 4 — Since \\(29b \\le 440\\), \\(b\\) runs from 0 to 15. Test which values make \\(440 - 29b\\) a multiple of 15.\n" +
    "Step 5 — Working modulo 15: \\(29 \\equiv 14 \\equiv -1\\), and \\(440 \\equiv 5\\). So \\(-b \\equiv 5\\), i.e. \\(b \\equiv -5 \\equiv 10 \\pmod{15}\\).\n" +
    "Step 6 — In the range 0 to 15 the only such value is \\(b = 10\\), giving \\(15a = 440 - 290 = 150\\) and \\(a = 10\\).\n" +
    "Step 7 — A unique solution — [[sufficient]].",
  fast: "Do not dismiss a single equation in two unknowns when the unknowns must be non-negative integers — count the solutions instead.\n" +
    "Reducing modulo the smaller coefficient is the quick route: \\(29 \\equiv -1 \\pmod{15}\\) turns the condition into \\(b \\equiv 10\\), and the range 0–15 admits exactly one such \\(b\\).",
  traps: "(C) is the intended trap: one equation with two unknowns *looks* insufficient, so pairing it with the ratio feels necessary. The integrality does the work instead.\n" +
    "(A) treats a bare equality of counts as informative without a total.\n" +
    "(D) accepts either.\n" +
    "(E) dismisses the equation entirely.\n" +
    "The coincidence that \\(a = b = 10\\) makes statement (1) *true* is a consistency check, not evidence that (1) was needed.",
  take: "A single linear equation in non-negative integers may have exactly one solution. Reduce modulo the smaller coefficient and count the candidates before judging sufficiency."
},

"di-datasufficiency-ex#22": {
  steps: "Step 1 — Let \\(a\\) be the number of 23-cent pencils and \\(b\\) the number of 21-cent pencils, both non-negative integers.\n" +
    "Step 2 — Statement (1): \\(a + b = 6\\). Then the total value is \\(23a + 21(6-a) = 126 + 2a\\), which varies with \\(a\\); the split could be any of seven combinations — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(23a + 21b = 130\\). Since \\(23a \\le 130\\), \\(a\\) runs from 0 to 5.\n" +
    "Step 4 — Test each: \\(a = 0\\) leaves 130 (not a multiple of 21); \\(a = 1\\) leaves 107; \\(a = 2\\) leaves \\(84 = 21 \\times 4\\) ✓; \\(a = 3\\) leaves 61; \\(a = 4\\) leaves 38; \\(a = 5\\) leaves 15.\n" +
    "Step 5 — Only \\(a = 2\\) works, with \\(b = 4\\) — a unique solution, [[sufficient]].",
  fast: "The small range is what makes brute force fast: \\(a\\) can only be 0 through 5, so six subtractions settle it.\n" +
    "Notice also that statement (1) is *not* consistent with statement (2): six pencils would cost between 126 and 138, and 130 is in that range only for \\(a = 2\\) — in fact the two statements agree, since \\(2 + 4 = 6\\).",
  traps: "(C) is the trap of assuming one equation cannot pin two unknowns. With small non-negative integers it often can.\n" +
    "(A) treats the count as determining the composition; \\(126 + 2a\\) shows the value depends on the split.\n" +
    "(D) accepts either.\n" +
    "(E) dismisses the value equation.\n" +
    "The efficient check in Step 4 is to test divisibility by 21 rather than solving; the multiples of 21 below 130 are 0, 21, 42, 63, 84, 105 and 126, and only 84 differs from 130 by a multiple of 23.",
  take: "With a small non-negative integer range, enumerate. A total value can determine the split even when a total count cannot."
},

"di-datasufficiency-ex#23": {
  steps: "Step 1 — Revenue is 500,000 and the only costs are labour \\(L\\) and materials \\(M\\), so profit \\(= 500{,}000 - L - M\\).\n" +
    "Step 2 — Statement (1): total cost \\(= 3M\\), so \\(L + M = 3M\\) and \\(L = 2M\\). Profit \\(= 500{,}000 - 3M\\), but \\(M\\) is unknown, so the profit could be almost anything — [[not sufficient]].\n" +
    "Step 3 — Statement (2): profit exceeds labour cost. With no absolute figures, this fixes nothing — [[not sufficient]].\n" +
    "Step 4 — Together: profit \\(= 500{,}000 - 3M\\) and the condition profit \\(> L = 2M\\) gives \\(500{,}000 - 3M > 2M\\).\n" +
    "Step 5 — So \\(500{,}000 > 5M\\), i.e. \\(M < 100{,}000\\).\n" +
    "Step 6 — Then profit \\(= 500{,}000 - 3M > 500{,}000 - 300{,}000 = 200{,}000\\).\n" +
    "Step 7 — Since \\(200{,}000 > 150{,}000\\), the answer is a definite yes — [[sufficient]].",
  fast: "Reduce everything to one variable. Statement (1) makes labour \\(2M\\) and profit \\(500{,}000 - 3M\\); statement (2) then becomes an inequality in \\(M\\) alone, which bounds it.\n" +
    "The elegance is that the bound on \\(M\\) translates into a bound on profit that clears the threshold with room to spare — you never need the exact figures.",
  traps: "(E) is the natural guess: an inequality plus a ratio rarely pins a value. But a yes/no question needs only a bound, not a value.\n" +
    "(A) treats the cost structure as enough without any scale.\n" +
    "(B) treats a comparison as enough without any figures.\n" +
    "(D) is stronger still.\n" +
    "The habit to build: on yes/no questions, ask whether the statements *bound* the quantity on the right side of the threshold — determination of the exact value is not required.",
  take: "For yes/no questions, a bound can be sufficient where a value is not. Reduce to one variable, then check whether the resulting inequality clears the threshold."
},

"di-datasufficiency-ex#24": {
  steps: "Step 1 — Cows plus pigs make \\(\\tfrac23 \\times 60 = 40\\) animals, so \\(C + P = 40\\) and \\(C = 40 - P\\).\n" +
    "Step 2 — Statement (1): \\(C > 2P\\). Substituting, \\(40 - P > 2P\\), so \\(40 > 3P\\) and \\(P < 13.33\\). With \\(P\\) an integer, \\(P \\le 13\\) — a range, [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(P > 12\\), so \\(P \\ge 13\\) — also a range, [[not sufficient]].\n" +
    "Step 4 — Together: \\(12 < P < 13.33\\), and since \\(P\\) counts animals it must be an integer.\n" +
    "Step 5 — The only integer in that interval is \\(P = 13\\).\n" +
    "Step 6 — So \\(C = 40 - 13 = 27\\) — [[sufficient]].",
  fast: "Two inequalities can pin a value exactly when the interval between them contains a single integer — and that is what makes this a C rather than an E.\n" +
    "Reduce both statements to bounds on the same variable (\\(P\\)) and check the width of the overlap: from just above 12 to just below 13.34 leaves only 13.",
  traps: "(E) is the intended trap: two inequalities normally leave a range, and this looks like the classic insufficient pairing. The integrality of an animal count is what closes it.\n" +
    "(A) and (B) each give one loose bound.\n" +
    "(D) is stronger still.\n" +
    "Watch the strictness in Step 2: \\(P < 13.33\\) admits \\(P = 13\\), whereas an inequality of \\(C \\ge 2P\\) would have given \\(P \\le 13.33\\) — same integer conclusion here, but the reasoning must be exact.\n" +
    "Note also that the remaining third of the farm — 20 other animals — plays no part in the calculation.",
  take: "Two bounds on an integer are sufficient when only one integer lies between them. Always convert both statements into bounds on the same variable."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-ds-traps#1": {
  steps: "Step 1 — Find the benchmark. The question asks whether \\(r > 8\\), and over two years the growth factor is \\(\\left(1 + \\tfrac{r}{100}\\right)^2\\). At exactly \\(r = 8\\) that factor is \\(1.08^2 = 1.1664\\).\n" +
    "Step 2 — So the question is really: is \\(\\left(1 + \\tfrac{r}{100}\\right)^2 > 1.1664\\)?\n" +
    "Step 3 — Statement (1): \\(210 = 1000\\left[\\left(1+\\tfrac{r}{100}\\right)^2 - 1\\right]\\), so the factor is \\(1.21\\) and \\(1 + \\tfrac{r}{100} = 1.1\\), giving \\(r = 10\\).\n" +
    "Step 4 — \\(10 > 8\\), a definite yes — [[sufficient]]. (Even before computing, a single equation in \\(r\\) guarantees a definite answer either way.)\n" +
    "Step 5 — Statement (2): the factor exceeds \\(1.15\\). But \\(1.15 < 1.1664\\), so the permitted range straddles the benchmark: \\(1.155\\) corresponds to \\(r \\approx 7.5\\) (no) and \\(1.21\\) to \\(r = 10\\) (yes) — [[not sufficient]].",
  fast: "Convert the \\(8\\%\\) threshold into the two-year factor \\(1.08^2 = 1.1664\\) before reading either statement — everything then reduces to comparing numbers against that one value.\n" +
    "Statement (1) is decisive because it fixes the factor exactly; statement (2) fails because its bound of \\(1.15\\) sits just *below* the benchmark rather than above it.",
  traps: "(D) accepts statement (2) by treating \\(1.15\\) as though it were the \\(8\\%\\) threshold. It is not — \\(1.08^2 = 1.1664\\), and the gap between 1.15 and 1.1664 is exactly where the counterexample lives.\n" +
    "(B) inverts the two.\n" +
    "(C) is over-cautious; statement (1) alone closes it.\n" +
    "(E) misses that a single equation determines \\(r\\).\n" +
    "The near-miss is deliberate: \\(1.15\\) looks like \"a bit more than 15% over two years\", which feels like more than 8% a year — but compounding makes the true threshold 16.64%.",
  take: "Convert a rate threshold into the compounded factor before comparing: \\(r\\%\\) per year over \\(n\\) years is \\((1+r/100)^n\\). A bound just below the benchmark is never sufficient."
},

"di-ds-traps#2": {
  steps: "Step 1 — Both \\(x\\) and \\(y\\) are positive integers. That constraint does most of the work.\n" +
    "Step 2 — Statement (1): \\(|x - 2| < 2 - y\\). The left side is at least 0, so the right side must be strictly positive: \\(2 - y > 0\\), giving \\(y < 2\\).\n" +
    "Step 3 — Since \\(y\\) is a positive integer, \\(y = 1\\). Then \\(|x - 2| < 1\\), so \\(1 < x < 3\\), and the only integer is \\(x = 2\\).\n" +
    "Step 4 — 2 is prime, so the answer is a definite yes — [[sufficient]].\n" +
    "Step 5 — Statement (2): \\(x + y - 3 = |1 - y|\\). Since \\(y \\ge 1\\), \\(1 - y \\le 0\\) and \\(|1 - y| = y - 1\\).\n" +
    "Step 6 — So \\(x + y - 3 = y - 1\\), and the \\(y\\) terms cancel: \\(x = 2\\) — prime again, [[sufficient]].",
  fast: "In statement (1), use the fact that an absolute value is non-negative to bound the *other* side — that single move collapses \\(y\\) to 1 and then \\(x\\) to 2.\n" +
    "In statement (2), resolve the absolute value by sign first: \\(y\\) is a positive integer so \\(1 - y\\) is never positive, and \\(|1-y| = y-1\\) makes the \\(y\\) terms cancel outright.",
  traps: "(C) is the reflex pairing when two statements point at the same value; each is independently complete.\n" +
    "(A) and (B) reject one, usually (2), because the absolute value looks like it should split into cases. The domain restriction removes one case before you start.\n" +
    "(E) dismisses both.\n" +
    "The positive-integer condition is load-bearing in both statements: without it, statement (1) would allow \\(y\\) anywhere below 2 and \\(x\\) anywhere in \\((1,3)\\), and 2.5 is not prime.",
  take: "An absolute value is \\(\\ge 0\\), so it bounds whatever it is compared against. Resolve \\(|a-b|\\) by determining the sign of \\(a-b\\) from the stated domain."
},

"di-ds-traps#3": {
  steps: "Step 1 — Analyse the stem first: \\(y = x + |x|\\). If \\(x \\ge 0\\) then \\(|x| = x\\) and \\(y = 2x \\ge 0\\). If \\(x < 0\\) then \\(|x| = -x\\) and \\(y = 0\\).\n" +
    "Step 2 — So \\(y\\) is never negative — it is 0 for every non-positive \\(x\\) and positive for every positive \\(x\\).\n" +
    "Step 3 — Statement (1): \\(x < 0\\) puts us in the second branch, so \\(y = 0\\) — a definite yes, [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(y < 1\\). Combined with the stem's conclusion that \\(y \\ge 0\\), and with \\(y\\) an integer, the only possibility is \\(y = 0\\) — a definite yes, [[sufficient]].",
  fast: "The work happens in the stem, not the statements: \\(x + |x|\\) is a function that returns 0 for non-positive inputs and doubles positive ones, so its range is \\([0, \\infty)\\).\n" +
    "Once you know \\(y \\ge 0\\), statement (2)'s \\(y < 1\\) plus integrality squeezes \\(y\\) to a single value — which is why a statement that looks weak turns out decisive.",
  traps: "(A) accepts only the statement that constrains \\(x\\), dismissing (2) as a mere bound. The bound is enough because the stem already floors \\(y\\) at 0 and the stem also says \\(y\\) is an integer.\n" +
    "(C) pairs them unnecessarily.\n" +
    "(B) inverts.\n" +
    "(E) misses the range analysis.\n" +
    "Note the boundary at \\(x = 0\\): it belongs to the first branch (\\(y = 2 \\times 0 = 0\\)) and to the answer yes either way, so it causes no trouble here.",
  take: "Analyse the stem's function before the statements. \\(x + |x|\\) is 0 for \\(x \\le 0\\) and \\(2x\\) for \\(x > 0\\), so it is never negative."
},

"di-ds-traps#4": {
  steps: "Step 1 — We are told \\(p > m > 2\\), that \\(m\\) does not divide \\(p\\), and \\(r\\) is the remainder of \\(p\\) divided by \\(m\\). Because \\(m\\) is not a factor, \\(r \\ne 0\\), so \\(r \\ge 1\\).\n" +
    "Step 2 — Statement (1): \\(\\gcd(m, p) = 2\\), so both \\(m\\) and \\(p\\) are even.\n" +
    "Step 3 — Write \\(p = qm + r\\). Since \\(p\\) and \\(qm\\) are both even, \\(r = p - qm\\) is even.\n" +
    "Step 4 — An even remainder that is not 0 must be at least 2, so \\(r > 1\\) — a definite yes, [[sufficient]].\n" +
    "Step 5 — Statement (2): \\(\\operatorname{lcm}(m, p) = 30\\). Take \\(m = 5, p = 6\\): the lcm is 30 ✓ and \\(6 \\div 5\\) leaves \\(r = 1\\) — answer no.\n" +
    "Step 6 — Take \\(m = 10, p = 15\\): the lcm is 30 ✓ and \\(15 \\div 10\\) leaves \\(r = 5\\) — answer yes. Two opposite answers, [[not sufficient]].",
  fast: "Statement (1) is a parity argument in disguise: a common factor of 2 makes both numbers even, and the remainder inherits that parity. An even non-zero remainder cannot be 1.\n" +
    "Statement (2) is best attacked by listing the \\((m,p)\\) pairs whose lcm is 30 — there are few, and two of them give opposite answers.",
  traps: "(D) accepts statement (2) by assuming the lcm pins the pair. It does not: \\(\\{5,6\\}\\), \\(\\{10,15\\}\\), \\(\\{6,10\\}\\) and others all have lcm 30.\n" +
    "(C) is over-cautious; statement (1) alone closes it.\n" +
    "(B) inverts the two.\n" +
    "(E) misses the parity argument.\n" +
    "Note that \\(\\gcd = 2\\) says more than \"both even\" — it also says they share no odd factor — but only the evenness is needed here.",
  take: "If two numbers share a factor \\(d\\), their remainder on division is a multiple of \\(d\\). A non-zero multiple of 2 is at least 2."
},

"di-ds-traps#5": {
  steps: "Step 1 — The stem says \\(xy + z\\) is odd. Combine that with each statement rather than analysing the statement alone.\n" +
    "Step 2 — Statement (1): \\(xy + xz\\) is even. Subtract the stem's expression: \\((xy + xz) - (xy + z) = xz - z = z(x - 1)\\).\n" +
    "Step 3 — That difference is even minus odd, hence odd. A product is odd only when both factors are odd, so \\(z\\) is odd and \\(x - 1\\) is odd.\n" +
    "Step 4 — \\(x - 1\\) odd means \\(x\\) is even — a definite yes, [[sufficient]].\n" +
    "Step 5 — Statement (2): \\(y + xz\\) is odd. Add the stem's expression: \\((xy + z) + (y + xz) = y(x+1) + z(x+1) = (x+1)(y+z)\\).\n" +
    "Step 6 — Odd plus odd is even, so \\((x+1)(y+z)\\) is even. That only tells you *one* of the two factors is even, not which.\n" +
    "Step 7 — Test both: \\(x = 2, y = 1, z = 1\\) satisfies stem and statement with \\(x\\) even; \\(x = 1, y = 1, z = 0\\) satisfies both with \\(x\\) odd — [[not sufficient]].",
  fast: "Add or subtract the stem's expression from the statement's — that is the whole technique for parity questions with a shared structure.\n" +
    "Subtracting gives a *product* that must be odd, which forces both factors odd and settles \\(x\\). Adding gives a product that must be even, which forces only one factor even and settles nothing.",
  traps: "(D) accepts statement (2) by reasoning that an even product implies \\(x + 1\\) is even. It implies only that \\(x+1\\) or \\(y+z\\) is even — the asymmetry between \"odd product\" and \"even product\" is the entire question.\n" +
    "(B) inverts the two.\n" +
    "(C) is over-cautious.\n" +
    "(E) misses the subtraction trick.\n" +
    "The rule to hold: an odd product pins *both* factors odd; an even product pins neither individually.",
  take: "Combine the stem with a statement by adding or subtracting. An odd product forces both factors odd; an even product forces only that at least one is even."
},

"di-ds-traps#6": {
  steps: "Step 1 — Let \\(F\\) study French and \\(J\\) study Japanese. The stem says \\(4\\%\\) of the French students also study Japanese, so the overlap is \\(0.04F\\).\n" +
    "Step 2 — The question is whether \\(F > J\\) — a comparison, not a count.\n" +
    "Step 3 — Statement (1): the overlap is 16, so \\(0.04F = 16\\) and \\(F = 400\\). But \\(J\\) is only known to be at least 100, so it could be 200 (yes) or 2,000 (no) — [[not sufficient]].\n" +
    "Step 4 — Statement (2): \\(10\\%\\) of the Japanese students also study French, so the overlap is also \\(0.10J\\).\n" +
    "Step 5 — Setting the two expressions for the overlap equal: \\(0.04F = 0.10J\\), so \\(F = 2.5J\\).\n" +
    "Step 6 — Since \\(J\\) is positive, \\(F = 2.5J > J\\) — a definite yes, [[sufficient]].",
  fast: "Write the overlap two ways and equate them; that converts the two percentages into a ratio between \\(F\\) and \\(J\\) with the overlap cancelling out.\n" +
    "Because the question asks which group is larger — not by how much — a ratio is exactly the right currency and a raw count is the wrong one.",
  traps: "(A) is the trap for anyone who reaches for the concrete number 400. Knowing \\(F\\) exactly is useless without \\(J\\), and the stem's \"at least 100\" deliberately leaves \\(J\\) unbounded above.\n" +
    "(C) is the cautious pairing; statement (2) alone closes it.\n" +
    "(D) accepts both.\n" +
    "(E) misses the double-counting identity.\n" +
    "The structural insight is that one overlap can be expressed as a percentage of either group, and equating the two expressions always yields their ratio.",
  take: "An overlap expressed as a percentage of each group yields the ratio of the groups. For \"which is larger\", a ratio suffices where a count does not."
},

"di-ds-traps#7": {
  steps: "Step 1 — Statement (1): \\(x^2 > 0\\). Since squares are non-negative and only \\(0\\) squares to \\(0\\), this says exactly \\(x \\ne 0\\). It could be \\(3\\) or \\(-3\\) — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(x^3\\) is non-positive, i.e. \\(x^3 \\le 0\\). Cubing preserves sign, so \\(x \\le 0\\).\n" +
    "Step 3 — That still allows \\(x = 0\\), which is not negative — [[not sufficient]].\n" +
    "Step 4 — Together: \\(x \\ne 0\\) from (1) and \\(x \\le 0\\) from (2) leave \\(x < 0\\) — a definite yes, [[sufficient]].",
  fast: "Each statement excludes exactly one thing: (1) excludes zero, (2) excludes positives. Neither alone gives \"negative\", but the intersection does.\n" +
    "The word to read slowly is \"non-positive\" — it means \\(\\le 0\\), not \\(< 0\\), and that single value is what makes statement (2) fall short on its own.",
  traps: "(B) reads \"non-positive\" as \"negative\". Those differ on exactly one number, and that number is the counterexample.\n" +
    "(A) treats \\(x^2 > 0\\) as a sign statement; an even power destroys sign information.\n" +
    "(D) accepts both.\n" +
    "(E) misses that the two exclusions combine.\n" +
    "The vocabulary is worth fixing: non-positive means \\(\\le 0\\); non-negative means \\(\\ge 0\\); the GMAT uses both precisely.",
  take: "\"Non-positive\" means \\(\\le 0\\) and includes zero. An even power tells you only whether the value is zero; an odd power carries the sign."
},

"di-ds-traps#8": {
  steps: "Step 1 — \\(64 = 2^6\\), so its only odd factor is 1. That means \\(\\gcd(n, 64) = 1\\) exactly when \\(n\\) is odd, and is at least 2 when \\(n\\) is even.\n" +
    "Step 2 — So the question reduces to: is \\(n\\) odd?\n" +
    "Step 3 — Statement (1): no two different factors of \\(n\\) sum to a prime. Every positive integer has 1 as a factor. If \\(n\\) were even, 2 would also be a factor, and \\(1 + 2 = 3\\) is prime — which the statement forbids.\n" +
    "Step 4 — So \\(n\\) is odd, and \\(\\gcd(n, 64) = 1\\) — [[sufficient]]. (Consistently, for odd \\(n\\) every factor is odd, so any two distinct factors sum to an even number of at least 4 — never prime.)\n" +
    "Step 5 — Statement (2): \\(\\gcd(n, 2310) = 165\\). Note \\(2310 = 2 \\times 3 \\times 5 \\times 7 \\times 11\\) is even, while \\(165 = 3 \\times 5 \\times 11\\) is odd.\n" +
    "Step 6 — If \\(n\\) were even, then 2 would divide both \\(n\\) and 2,310, making their gcd even. It is odd, so \\(n\\) is odd and \\(\\gcd(n, 64) = 1\\) — [[sufficient]].",
  fast: "Reduce the question to a parity question: since 64 is a pure power of 2, the gcd is 1 for odd \\(n\\) and more for even \\(n\\). Then each statement only has to settle whether \\(n\\) is odd.\n" +
    "Statement (1) does it with the factors 1 and 2 summing to the prime 3; statement (2) does it because an even \\(n\\) would force an even gcd with an even number.",
  traps: "(C) is the reflex pairing when neither statement names \\(n\\). Neither needs to — the question asks for a gcd, not for \\(n\\).\n" +
    "(A) and (B) reject one statement, usually (1), because its condition looks exotic. It is exotic, but it resolves in one line.\n" +
    "(E) treats the absence of \\(n\\) as fatal.\n" +
    "The reduction in Step 1 is the whole question: without it, both statements look like they are about unrelated properties.",
  take: "\\(\\gcd(n, 2^k) = 1\\) exactly when \\(n\\) is odd. Reduce a gcd question to a parity or prime-coverage question before testing statements."
},

"di-ds-traps#9": {
  steps: "Step 1 — Note carefully: the stem never says \\(n\\) is an integer. That omission is the trap.\n" +
    "Step 2 — Statement (1): \\(\\tfrac{5n}{18} = k\\) for some integer \\(k\\), so \\(n = \\tfrac{18k}{5}\\). With \\(k = 5\\), \\(n = 18\\) and \\(\\tfrac n{18} = 1\\) — yes. With \\(k = 1\\), \\(n = 3.6\\) and \\(\\tfrac n{18} = 0.2\\) — no. [[Not sufficient]].\n" +
    "Step 3 — Statement (2): \\(\\tfrac{3n}{18} = \\tfrac n6 = m\\) for some integer \\(m\\), so \\(n = 6m\\). With \\(m = 3\\), \\(n = 18\\) — yes. With \\(m = 1\\), \\(n = 6\\) — no. [[Not sufficient]].\n" +
    "Step 4 — Together: from (2), \\(n = 6m\\) with \\(m\\) an integer. Substituting into (1): \\(\\tfrac{5(6m)}{18} = \\tfrac{30m}{18} = \\tfrac{5m}{3}\\) must be an integer.\n" +
    "Step 5 — Since 5 and 3 are coprime, \\(3\\) must divide \\(m\\), so \\(m = 3j\\) and \\(n = 18j\\).\n" +
    "Step 6 — Then \\(\\tfrac n{18} = j\\), an integer — a definite yes, [[sufficient]].",
  fast: "Statement (2) is the more informative one because \\(\\tfrac{3n}{18}\\) simplifies to \\(\\tfrac n6\\), which forces \\(n\\) to be an integer multiple of 6. Substituting that into statement (1) supplies the remaining factor of 3.\n" +
    "Together the two say \\(n\\) is divisible by 6 and by \\(\\tfrac{18}{\\gcd(5,18)} = 18\\)-worth of structure — the clean way to see it is that (2) gives the factor 6 and (1) then gives the extra 3.",
  traps: "(D) is the trap for anyone who assumes \\(n\\) is an integer. Under that assumption statement (1) alone would work, since 5 and 18 are coprime — which is exactly why the assumption must be checked.\n" +
    "(A) and (B) make the same assumption for one statement.\n" +
    "(E) misses that the combination forces integrality and then divisibility.\n" +
    "Watch also that statement (2) is not simply \"\\(n\\) is divisible by 18\": \\(\\tfrac{3n}{18}\\) reduces to \\(\\tfrac n6\\), a weaker condition.",
  take: "Simplify each fraction to lowest terms first, and never assume a variable is an integer unless the stem says so."
},

"di-ds-traps#10": {
  steps: "Step 1 — Find every way to write 45 as a sum of consecutive positive integers.\n" +
    "Step 2 — \\(n = 1\\): 45. \\(n = 2\\): \\(22 + 23\\). \\(n = 3\\): \\(14+15+16\\). \\(n = 5\\): \\(7+8+9+10+11\\). \\(n = 6\\): \\(5+6+7+8+9+10\\). \\(n = 9\\): \\(1+2+\\dots+9\\).\n" +
    "Step 3 — Statement (1): \\(n\\) is even. Both \\(n = 2\\) and \\(n = 6\\) qualify — [[not sufficient]].\n" +
    "Step 4 — Statement (2): \\(n < 9\\). That admits 1, 2, 3, 5 and 6 — [[not sufficient]].\n" +
    "Step 5 — Together: \\(n\\) even and under 9 leaves both 2 and 6 — [[not sufficient]].",
  fast: "Enumerate the possible \\(n\\) *before* reading the statements — with 45 the list is short, and once you see two even values below 9 the answer is E immediately.\n" +
    "The structural fact behind the list: a run of \\(n\\) consecutive integers starting at \\(a\\) sums to \\(n a + \\tfrac{n(n-1)}{2}\\), so \\(n\\) must divide \\(45\\) when \\(n\\) is odd, and \\(\\tfrac n2\\) must divide 45 in a related way when \\(n\\) is even.",
  traps: "(C) is the intended trap: two conditions that each narrow the list feel like they should intersect in one value. They leave two.\n" +
    "(A) assumes only one even run exists.\n" +
    "(B) assumes only one run below 9 exists.\n" +
    "(D) is stronger still.\n" +
    "The commonest incomplete enumeration finds \\(n = 2\\) and \\(n = 9\\) and stops, missing \\(n = 6\\) — which is exactly the value that defeats the combination.",
  take: "Enumerate all possibilities before testing the statements. For sums of consecutive integers, expect several representations, not one."
},

"di-ds-traps#11": {
  steps: "Step 1 — Statement (1): \\(x^2\\) is positive, which says only \\(x \\ne 0\\). Both \\(3\\) and \\(-3\\) qualify — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(x \\cdot |y|\\) is not positive, i.e. \\(x|y| \\le 0\\).\n" +
    "Step 3 — If \\(y \\ne 0\\) then \\(|y| > 0\\), and dividing gives \\(x \\le 0\\). But if \\(y = 0\\), the product is 0 for *every* \\(x\\), including positive ones — [[not sufficient]].\n" +
    "Step 4 — Together: take \\(x = 5\\), \\(y = 0\\). Then \\(x^2 = 25 > 0\\) ✓ and \\(x|y| = 0\\), which is not positive ✓ — yet \\(x\\) is positive, so the answer is no.\n" +
    "Step 5 — Take \\(x = -5\\), \\(y = 2\\). Then \\(x^2 = 25 > 0\\) ✓ and \\(x|y| = -10 \\le 0\\) ✓ — and \\(x\\) is negative, so the answer is yes.\n" +
    "Step 6 — Both answers survive both statements — [[not sufficient]].",
  fast: "The whole question hinges on whether \\(y\\) can be zero. Nothing forbids it, and \\(|y| = 0\\) makes the product zero regardless of \\(x\\) — so statement (2) collapses.\n" +
    "Whenever a statement involves a product with a variable that might be zero, test that case first; it usually breaks the statement.",
  traps: "(C) is the intended trap: statement (1) rules out \\(x = 0\\) and statement (2) *appears* to rule out positive \\(x\\), which together would give \"negative\". The appearance fails at \\(y = 0\\).\n" +
    "(B) accepts statement (2) alone by dividing through by \\(|y|\\) without checking it is non-zero.\n" +
    "(A) treats a square's positivity as a sign statement.\n" +
    "(D) is stronger still.\n" +
    "Compare with the earlier question in this set where \\(x^3 \\le 0\\) paired with \\(x \\ne 0\\) *was* sufficient — there the second statement had no hidden zero case.",
  take: "Never divide by a variable that might be zero. In a product \\(a \\cdot b \\le 0\\), the case \\(b = 0\\) makes the inequality hold for every \\(a\\)."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-ds-traps#12": {
  steps: "Step 1 — Statement (1): \\(|x| < 2\\) means \\(-2 < x < 2\\). That is a range, not a value — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(|x| = 3x - 2\\). Split on the sign of \\(x\\).\n" +
    "Step 3 — Case \\(x \\ge 0\\): \\(x = 3x - 2\\), so \\(2x = 2\\) and \\(x = 1\\). That satisfies \\(x \\ge 0\\) ✓ — a valid root.\n" +
    "Step 4 — Case \\(x < 0\\): \\(-x = 3x - 2\\), so \\(4x = 2\\) and \\(x = \\tfrac12\\). But \\(\\tfrac12\\) is not negative, so this root contradicts its own case and is discarded.\n" +
    "Step 5 — Only \\(x = 1\\) survives — a unique value, [[sufficient]].\n" +
    "Step 6 — Sanity check: \\(|1| = 1\\) and \\(3(1) - 2 = 1\\) ✓.",
  fast: "An absolute-value equation normally yields two candidates, and the discipline is to test each against the case that produced it. Here one root fails its own condition, leaving exactly one value.\n" +
    "A second guard is worth applying: the right side \\(3x - 2\\) must be non-negative (it equals an absolute value), so \\(x \\ge \\tfrac23\\) — which independently kills the \\(x < 0\\) branch before any algebra.",
  traps: "(C) is the trap for anyone who finds both roots and reaches for statement (1) to choose between them. Statement (1) would indeed exclude nothing here (both candidates lie in \\((-2,2)\\)) — the case check is what does the work.\n" +
    "(A) treats a range as a value.\n" +
    "(D) accepts both.\n" +
    "(E) misses that one root is extraneous.\n" +
    "Extraneous roots are the signature of absolute-value and radical equations; always substitute back.",
  take: "Solve \\(|f(x)| = g(x)\\) by cases and discard roots that violate their own case — or note that \\(g(x) \\ge 0\\) is required and use that to prune first."
},

"di-ds-traps#13": {
  steps: "Step 1 — Statement (1): \\(3|x^2 - 4| = y - 2\\). Two variables appear, so no value of \\(y\\) follows — [[not sufficient]].\n" +
    "Step 2 — But it does carry information: the left side is a non-negative multiple of an absolute value, so \\(y - 2 \\ge 0\\), i.e. \\(y \\ge 2\\).\n" +
    "Step 3 — Statement (2): \\(|3 - y| = 11\\) gives \\(3 - y = 11\\) (so \\(y = -8\\)) or \\(3 - y = -11\\) (so \\(y = 14\\)). Two values — [[not sufficient]].\n" +
    "Step 4 — Together: the constraint \\(y \\ge 2\\) from statement (1) eliminates \\(y = -8\\).\n" +
    "Step 5 — Only \\(y = 14\\) survives — [[sufficient]].",
  fast: "Statement (1) cannot produce a value, but it can produce a *bound* — and a bound is exactly what is needed to choose between two candidates.\n" +
    "The habit worth building: when a statement contains an absolute value or a square, extract the sign information even if the statement looks useless for finding a value.",
  traps: "(B) treats statement (2) as complete, forgetting that an absolute-value equation gives two roots.\n" +
    "(E) is the trap for anyone who dismisses statement (1) as \"two variables, therefore nothing\". It constrains \\(y\\) even though it cannot determine it.\n" +
    "(A) treats a two-variable equation as sufficient.\n" +
    "(D) accepts both.\n" +
    "The general lesson: an insufficient statement can still be decisive in combination, precisely because it rules something out.",
  take: "A statement that cannot determine a value may still supply a bound that eliminates a candidate. Extract sign information from every absolute value and square."
},

"di-ds-traps#14": {
  steps: "Step 1 — Four distinct positive integers \\(a < b < c < d\\) averaging 60 sum to \\(240\\).\n" +
    "Step 2 — Statement (1): the median of the three largest, \\(\\{b, c, d\\}\\), is \\(c = 51\\), and \\(c + d = 190\\), so \\(d = 139\\).\n" +
    "Step 3 — Then \\(a + b = 240 - 51 - 139 = 50\\). Since both are positive and \\(a < b\\), the largest \\(b\\) can be is 49 — so both are under 50.\n" +
    "Step 4 — And \\(c = 51\\), \\(d = 139\\) are both above 50. Exactly two of the four are less than 50 — [[sufficient]].\n" +
    "Step 5 — Statement (2): the median of four values is \\(\\dfrac{b + c}{2} = 50\\), so \\(b + c = 100\\). Since \\(b < c\\), we get \\(b < 50 < c\\).\n" +
    "Step 6 — Then \\(a < b < 50\\), while \\(c > 50\\) and \\(d > c > 50\\). Again exactly two are below 50 — [[sufficient]].",
  fast: "Both statements work by locating 50 relative to the ordering rather than by finding the actual numbers — you never need \\(a\\) or \\(b\\) individually.\n" +
    "In statement (2), the key move is that two distinct integers averaging 50 must straddle it, which immediately splits the four into two below and two above.",
  traps: "(C) is the reflex pairing when neither statement names all four integers. Neither needs to — the question asks only how many fall below 50.\n" +
    "(A) and (B) reject one statement, usually (2), because a median of 50 looks less informative than the explicit sums in (1).\n" +
    "(E) treats the missing values as fatal.\n" +
    "The distinctness matters in statement (2): if ties were allowed, \\(b = c = 50\\) would put two values *at* 50 rather than straddling it, and the count would change.",
  take: "Two distinct values averaging \\(m\\) must straddle \\(m\\). Answer counting questions by locating the threshold in the ordering, not by finding every value."
},

"di-ds-traps#15": {
  steps: "Step 1 — The blend weighs one kilogram, so \\(X + Y = 1\\) and \\(Y = 1 - X\\).\n" +
    "Step 2 — Substitute into the cost: \\(C = 6.5X + 8.5(1 - X) = 8.5 - 2X\\). So the cost is a decreasing linear function of \\(X\\) alone.\n" +
    "Step 3 — Statement (1): \\(Y > 0.15\\) means \\(X < 0.85\\). That allows \\(X = 0.84\\), which is not less than 0.8 (no), and \\(X = 0.5\\), which is (yes) — [[not sufficient]].\n" +
    "Step 4 — Statement (2): \\(C \\ge 7.30\\) means \\(8.5 - 2X \\ge 7.30\\), so \\(2X \\le 1.2\\) and \\(X \\le 0.6\\).\n" +
    "Step 5 — Every value at or below 0.6 is below 0.8, so the answer is a definite yes — [[sufficient]].",
  fast: "Use the one-kilogram condition to eliminate \\(Y\\) immediately; the cost formula then becomes \\(8.5 - 2X\\), and both statements become bounds on \\(X\\) to compare against 0.8.\n" +
    "Statement (1) gives \\(X < 0.85\\) — just past the threshold — and statement (2) gives \\(X \\le 0.6\\), comfortably inside it.",
  traps: "(D) accepts statement (1), whose bound of 0.85 lands just above 0.8. That 0.05 gap is the entire question, and it is engineered to look negligible.\n" +
    "(C) is over-cautious; statement (2) alone closes it.\n" +
    "(A) inverts the two.\n" +
    "(E) misses that a bound below the threshold settles a \"less than\" question.\n" +
    "The other trap is forgetting \\(X + Y = 1\\) and treating \\(C = 6.5X + 8.5Y\\) as a two-variable expression; the one-kilogram condition is stated in the first sentence.",
  take: "Use a stated total to reduce two variables to one. A bound is sufficient only when it falls entirely on one side of the threshold — check the gap, however small."
},

"di-ds-traps#16": {
  steps: "Step 1 — Let \\(b\\) be the number of 23-cent pencils and \\(a\\) the number of 21-cent pencils, both non-negative integers.\n" +
    "Step 2 — Statement (1): \\(a + b = 6\\). The value would then be \\(21(6) + 2b = 126 + 2b\\), which varies with \\(b\\); seven splits are possible — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(21a + 23b = 130\\). Since \\(23b \\le 130\\), \\(b\\) can only be 0 through 5.\n" +
    "Step 4 — Test each: \\(b = 0\\) leaves 130 (not divisible by 21); \\(b = 1\\) leaves 107; \\(b = 2\\) leaves \\(84 = 21 \\times 4\\) ✓; \\(b = 3\\) leaves 61; \\(b = 4\\) leaves 38; \\(b = 5\\) leaves 15.\n" +
    "Step 5 — Only \\(b = 2\\) works, with \\(a = 4\\) — a unique answer, [[sufficient]].",
  fast: "Since the two prices differ by only 2 cents, the total value is roughly 21 or 23 times the pencil count — so the count is about 6, and \\(b\\) is whatever pushes the total from a multiple of 21 up to 130.\n" +
    "Formally, \\(130 = 21(a+b) + 2b\\), so \\(2b\\) is the excess of 130 over a multiple of 21. The multiples of 21 near 130 are 126 and 105; only \\(130 - 126 = 4\\) gives an integer \\(b = 2\\).",
  traps: "(C) is the standard trap: one equation with two unknowns *feels* insufficient, so it seems natural to add the count. Non-negativity and integrality make the equation far more restrictive than it looks.\n" +
    "(A) treats the pencil count as fixing the composition; the value depends on the split.\n" +
    "(D) accepts either.\n" +
    "(E) dismisses the value equation.\n" +
    "Note that the two statements happen to be consistent — \\(a + b = 4 + 2 = 6\\) — which is reassuring but not why (2) is sufficient.",
  take: "\\(21a + 23b = 130\\) rewrites as \\(21(a+b) + 2b = 130\\), so \\(2b\\) is the remainder above a multiple of 21. Small integer ranges reward enumeration."
},

"di-ds-traps#17": {
  steps: "Step 1 — Let \\(a\\) be the number of 15-cent stamps and \\(b\\) the number of 29-cent stamps.\n" +
    "Step 2 — Statement (1): \\(a = b\\). Equal counts could be 5 and 5, or 100 and 100 — nothing fixes the scale, [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(15a + 29b = 440\\). Reduce modulo 15: since \\(29 \\equiv 14 \\equiv -1 \\pmod{15}\\) and \\(440 = 15 \\times 29 + 5\\), the equation becomes \\(-b \\equiv 5\\), i.e. \\(b \\equiv 10 \\pmod{15}\\).\n" +
    "Step 4 — Also \\(29b \\le 440\\) forces \\(b \\le 15\\), so \\(b = 10\\) is the only candidate.\n" +
    "Step 5 — Then \\(15a = 440 - 290 = 150\\), giving \\(a = 10\\) — a unique solution, [[sufficient]].",
  fast: "Reducing modulo the smaller coefficient turns a two-variable equation into a single congruence: \\(29 \\equiv -1 \\pmod{15}\\) makes the arithmetic trivial.\n" +
    "Then the size bound \\(b \\le 15\\) leaves exactly one residue class member, which is what makes the statement sufficient.",
  traps: "(C) is the intended trap, and it is sharpened by the fact that the answer turns out to be \\(a = b = 10\\) — so statement (1) is *true*, which makes it feel necessary. It is not: it could never have produced 10 on its own.\n" +
    "(A) treats an equality of counts as informative without a total.\n" +
    "(D) accepts either.\n" +
    "(E) dismisses the equation.\n" +
    "The general caution: a statement being consistent with the answer is not the same as a statement being needed to reach it.",
  take: "Reduce a two-variable integer equation modulo the smaller coefficient. A statement that merely agrees with the answer was not necessarily required to find it."
},

"di-ds-traps#18": {
  steps: "Step 1 — Compute the expression \\(x! + x + 1\\) for small non-negative integers.\n" +
    "Step 2 — \\(x = 0\\): \\(1 + 0 + 1 = 2\\), prime. \\(x = 1\\): \\(1 + 1 + 1 = 3\\), prime. \\(x = 2\\): \\(2 + 2 + 1 = 5\\), prime.\n" +
    "Step 3 — \\(x = 3\\): \\(6 + 3 + 1 = 10 = 2 \\times 5\\), not prime.\n" +
    "Step 4 — Statement (1): \\(x < 10\\) admits \\(x = 2\\) (prime, yes) and \\(x = 3\\) (not prime, no) — [[not sufficient]].\n" +
    "Step 5 — Statement (2): \\(x\\) is even. Checking \\(x = 2 \\to 5\\), \\(x = 4 \\to 29\\), \\(x = 6 \\to 727\\) — all prime, which is where most people stop.\n" +
    "Step 6 — But \\(x = 8\\) gives \\(40320 + 8 + 1 = 40329\\), whose digits sum to 18, so it is divisible by 9 — not prime. [[Not sufficient]].\n" +
    "Step 7 — Together: \\(x\\) even and under 10 still admits \\(x = 2\\) (yes) and \\(x = 8\\) (no) — [[not sufficient]].",
  fast: "Do not stop testing after three agreeing cases. The structural reason \\(x = 8\\) fails is that \\(8!\\) contains the factors 3 and 6, so \\(8!\\) is divisible by 9, and \\(8 + 1 = 9\\) is too — making the sum divisible by 9.\n" +
    "That divisibility argument generalises: whenever \\(x + 1\\) is a composite whose factors all appear inside \\(x!\\), the sum is composite.",
  traps: "(B) is the intended trap and catches almost everyone who tests only \\(x = 2, 4, 6\\). Three confirmations are not a proof, and the counterexample is the very next even value.\n" +
    "(C) is the same error with an extra condition attached.\n" +
    "(A) assumes the small-\\(x\\) range is uniform.\n" +
    "(D) accepts both.\n" +
    "The lesson for \"is it prime?\" questions: look for a divisibility argument rather than trusting a run of examples, and test one case beyond where the pattern seems settled.",
  take: "A pattern holding for three cases is not a proof. For \\(x! + x + 1\\), check whether \\(x+1\\) shares a factor with \\(x!\\) — if so, the sum is composite."
},

"di-ds-traps#19": {
  steps: "Step 1 — The question asks whether \\(|x - 1| < 1\\), i.e. whether \\(0 < x < 2\\).\n" +
    "Step 2 — Statement (1): \\((x-1)^2 \\le 1\\). Taking square roots gives \\(|x - 1| \\le 1\\), i.e. \\(0 \\le x \\le 2\\).\n" +
    "Step 3 — That is compatible with a yes (\\(x = 1\\), where \\(|x-1| = 0 < 1\\)) and with a no (\\(x = 0\\) or \\(x = 2\\), where \\(|x-1| = 1\\), not strictly less) — [[not sufficient]].\n" +
    "Step 4 — Statement (2): \\(x^2 - 1 > 0\\) means \\(|x| > 1\\), so \\(x > 1\\) or \\(x < -1\\). At \\(x = 1.5\\), \\(|x-1| = 0.5\\) (yes); at \\(x = 3\\), \\(|x-1| = 2\\) (no) — [[not sufficient]].\n" +
    "Step 5 — Together: \\(0 \\le x \\le 2\\) and \\(|x| > 1\\) intersect in \\(1 < x \\le 2\\).\n" +
    "Step 6 — At \\(x = 1.5\\) the answer is yes; at \\(x = 2\\) it is no — [[not sufficient]].",
  fast: "Translate everything into intervals and overlay them. The combined range is \\((1, 2]\\), and the single point \\(x = 2\\) is what keeps the answer undetermined.\n" +
    "The whole question turns on \\(\\le\\) versus \\(<\\): statement (1) permits equality, the question demands strict inequality, and that one endpoint survives the intersection.",
  traps: "(C) is the intended answer for anyone who intersects the ranges but rounds \\(\\le\\) to \\(<\\). The endpoint \\(x = 2\\) satisfies both statements and answers no.\n" +
    "(A) reads \\((x-1)^2 \\le 1\\) as \\(|x-1| < 1\\), dropping the equality.\n" +
    "(B) treats \\(|x| > 1\\) as bounding \\(|x-1|\\).\n" +
    "(D) accepts both.\n" +
    "Whenever a statement uses \\(\\le\\) or \\(\\ge\\) and the question uses a strict inequality, check the boundary point explicitly — it is almost always the counterexample.",
  take: "\\(u^2 \\le k\\) gives \\(|u| \\le \\sqrt k\\), with equality allowed. When the question is strict and a statement is not, test the boundary point."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"di-ds-realexam#1": {
  steps: "Step 1 — Statement (1): \\(x^3\\) is a two-digit positive odd integer. That allows \\(x^3 = 27\\) (so \\(x = 3\\)) but also \\(x^3 = 11\\) (so \\(x = \\sqrt[3]{11}\\)) and many others — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(x^4\\) is a two-digit odd integer, allowing \\(x^4 = 81\\) (so \\(x = 3\\)) as well as \\(x^4 = 11\\) and others — [[not sufficient]].\n" +
    "Step 3 — Together: \\(x = \\dfrac{x^4}{x^3}\\), so \\(x\\) is a ratio of two integers and hence rational.\n" +
    "Step 4 — But if a rational \\(x = p/q\\) in lowest terms has an integer cube, then \\(q^3\\) must divide \\(p^3\\), which forces \\(q = 1\\). So \\(x\\) is an integer.\n" +
    "Step 5 — Now find the integers with both \\(x^3\\) and \\(x^4\\) two-digit: \\(x^3 \\le 99\\) gives \\(x \\le 4\\), and \\(x^4 \\ge 10\\) gives \\(x \\ge 2\\).\n" +
    "Step 6 — Test: \\(x = 2\\) gives \\(8\\) (one digit) ✗; \\(x = 3\\) gives \\(27\\) and \\(81\\), both two-digit and both odd ✓; \\(x = 4\\) gives \\(64\\) and \\(256\\) (three digits) ✗.\n" +
    "Step 7 — Only \\(x = 3\\) survives — [[sufficient]].",
  fast: "The combination is what forces integrality: dividing \\(x^4\\) by \\(x^3\\) makes \\(x\\) rational, and a rational number with an integer cube must be an integer.\n" +
    "After that the search is tiny — only \\(x = 2, 3, 4\\) can give a two-digit cube — and 3 is the only one whose fourth power is also two-digit and odd.",
  traps: "(D) accepts one statement alone by silently assuming \\(x\\) is an integer. The stem says only that \\(x\\) is positive, so a cube root of 11 is admissible.\n" +
    "(A) and (B) make the same assumption for one statement.\n" +
    "(E) misses that the ratio \\(x^4/x^3\\) forces rationality and then integrality.\n" +
    "The wider lesson: when a stem says only \"positive number\", the integrality must be *derived*, not assumed — and here deriving it is the entire question.",
  take: "\\(x = x^{n+1}/x^n\\), so two integer powers make \\(x\\) rational; a rational with an integer power is an integer. Derive integrality rather than assuming it."
},

"di-ds-realexam#2": {
  steps: "Step 1 — Evaluate \\(z! + (z+1)\\) for small non-negative integers.\n" +
    "Step 2 — \\(z = 0\\): \\(1 + 1 = 2\\), prime. \\(z = 2\\): \\(2 + 3 = 5\\), prime. \\(z = 4\\): \\(24 + 5 = 29\\), prime. \\(z = 6\\): \\(720 + 7 = 727\\), prime.\n" +
    "Step 3 — Statement (1): \\(z\\) is even. The run above is encouraging, but \\(z = 8\\) gives \\(40320 + 9 = 40329\\), whose digits sum to 18, so it is divisible by 9 — not prime.\n" +
    "Step 4 — Yes and no both occur — [[not sufficient]].\n" +
    "Step 5 — Statement (2): \\(z < 10\\). Here \\(z = 0\\) gives 2 (prime) and \\(z = 3\\) gives \\(6 + 4 = 10\\) (not prime) — [[not sufficient]].\n" +
    "Step 6 — Together: \\(z\\) even and under 10 still admits \\(z = 0\\) (yes) and \\(z = 8\\) (no) — [[not sufficient]].",
  fast: "Look for a structural reason before trusting a run of primes. Here \\(z + 1 = 9\\) at \\(z = 8\\), and \\(8!\\) contains both 3 and 6, so it is divisible by 9 — which makes the whole sum divisible by 9.\n" +
    "That divisibility test is far faster than factoring 40,329, and it tells you exactly where to look for the counterexample.",
  traps: "(A) is the trap the question is built around: four consecutive even values give primes, and the fifth does not. A pattern is not a proof.\n" +
    "(C) attaches an extra condition to the same faulty reasoning.\n" +
    "(B) assumes the small range is uniform.\n" +
    "(D) accepts both.\n" +
    "On any \"is it prime?\" question, look for a shared factor between the terms being added; a run of examples should raise suspicion, not confidence.",
  take: "For \\(z! + (z+1)\\), check whether \\(z+1\\) shares a factor with \\(z!\\). Test at least one case beyond where the pattern seems settled."
},

"di-ds-realexam#3": {
  steps: "Step 1 — The recurrence \\(a_n = a_{n-1} + k\\) with \\(k \\ne 0\\) makes the sequence arithmetic and strictly monotonic — increasing if \\(k > 0\\), decreasing if \\(k < 0\\).\n" +
    "Step 2 — Statement (1): \\(a_1 = 24\\). If \\(k > 0\\), every term exceeds 24 and all 15 are above 10. If \\(k = -1\\), the terms run \\(24, 23, \\dots, 10\\), and the last equals 10 — so only 14 exceed 10. Two answers — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(a_8 = 10\\). With 15 terms, position 8 is exactly the middle: 7 terms before it and 7 after.\n" +
    "Step 4 — If \\(k > 0\\), the 7 terms after \\(a_8\\) exceed 10 and the 7 before are below it; \\(a_8 = 10\\) itself is not greater than 10. Count: 7.\n" +
    "Step 5 — If \\(k < 0\\), the 7 terms before \\(a_8\\) exceed 10 and the 7 after are below. Count: 7 again.\n" +
    "Step 6 — Either way the answer is 7 — [[sufficient]].",
  fast: "The symmetry of position 8 in a 15-term list is the whole point: it splits the rest into two equal halves, and monotonicity puts exactly one half above the pivot whichever way the sequence runs.\n" +
    "You never need \\(k\\) or any actual term — only that the sequence is strictly monotonic and that \\(a_8\\) sits at the threshold.",
  traps: "(D) accepts statement (1), where the direction of the sequence changes the count.\n" +
    "(A) inverts the two.\n" +
    "(C) is over-cautious; statement (2) alone closes it.\n" +
    "(E) misses the symmetry.\n" +
    "The detail that matters is the strictness of \"greater than 10\": \\(a_8 = 10\\) is *not* counted, which is what makes the answer exactly 7 rather than 8.",
  take: "In a strictly monotonic list, a term equal to the threshold splits the rest symmetrically. Note whether the threshold itself counts."
},

"di-ds-realexam#4": {
  steps: "Step 1 — Work out the stem's function. If \\(x \\ge 0\\), \\(|x| = x\\) and \\(y = 2x \\ge 0\\). If \\(x < 0\\), \\(|x| = -x\\) and \\(y = 0\\).\n" +
    "Step 2 — So \\(y\\) is never negative, and it is exactly 0 for every \\(x \\le 0\\).\n" +
    "Step 3 — Statement (1): \\(x < 0\\) lands in the second branch, giving \\(y = 0\\) — a definite yes, [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(y < 1\\). Since \\(y \\ge 0\\) from the stem and \\(y\\) is an integer, the only possibility is \\(y = 0\\) — a definite yes, [[sufficient]].",
  fast: "Sketch the function \\(x + |x|\\): it is flat at 0 for all \\(x \\le 0\\) and rises as \\(2x\\) thereafter. Its range is \\([0, \\infty)\\), and that range is what makes statement (2) work.\n" +
    "Statement (2) looks weaker than it is — a bound plus a floor plus integrality squeezes \\(y\\) to a single value.",
  traps: "(A) accepts only the statement about \\(x\\), dismissing the bound on \\(y\\) as too loose. It is not, once the stem's floor of 0 and the integrality of \\(y\\) are in hand.\n" +
    "(C) pairs them unnecessarily.\n" +
    "(B) inverts.\n" +
    "(E) misses the range analysis.\n" +
    "The word \"integer\" in the stem is doing real work in statement (2): without it, \\(y\\) could be \\(0.5\\) and the answer would be no.",
  take: "\\(x + |x|\\) equals 0 for \\(x \\le 0\\) and \\(2x\\) for \\(x > 0\\) — its range is \\([0,\\infty)\\). A floor plus a ceiling plus integrality can pin a single value."
},

"di-ds-realexam#5": {
  steps: "Step 1 — The list has nine distinct integers with at least one negative, so the median is the 5th value in order.\n" +
    "Step 2 — Statement (1): the product of all nine equals the median \\(m\\). Suppose \\(0 \\notin S\\). Then the product is non-zero, and dividing by \\(m\\) (which is one of the nine) leaves the other eight multiplying to 1.\n" +
    "Step 3 — Eight *distinct* integers multiplying to 1 is impossible: the only integers of absolute value 1 are \\(1\\) and \\(-1\\), which gives at most two distinct values.\n" +
    "Step 4 — So \\(0 \\in S\\), the product is 0, and therefore \\(m = 0\\) — not positive, a definite no, [[sufficient]].\n" +
    "Step 5 — Statement (2): the sum equals the median. Take \\(\\{-6,-5,-3,0,1,2,3,4,5\\}\\): the sum is 1 and the median is 1 — positive, yes.\n" +
    "Step 6 — Take \\(\\{-4,-3,-2,-1,0,1,2,3,4\\}\\): the sum is 0 and the median is 0 — not positive, no. Two answers, [[not sufficient]].",
  fast: "Statement (1) rests on a counting impossibility rather than arithmetic: eight distinct integers cannot multiply to 1, so zero must be in the list, which forces the median to 0.\n" +
    "For statement (2), symmetric lists centred on 0 give a sum and median of 0, while shifting one element upward can make both positive — two constructions and you are done.",
  traps: "(D) accepts statement (2), perhaps by reasoning that a sum equalling a median is a strong coincidence. It is easy to arrange, in more than one way.\n" +
    "(C) is over-cautious; statement (1) alone closes it.\n" +
    "(B) inverts the two.\n" +
    "(E) misses the impossibility argument in statement (1).\n" +
    "The distinctness condition is essential in Step 3: without it, eight copies of 1 would multiply to 1 and the argument would collapse.",
  take: "Distinct integers multiplying to 1 are limited to \\(\\pm 1\\), so more than two of them is impossible. A product equal to a member of the list usually forces a zero into the list."
},

"di-ds-realexam#6": {
  steps: "Step 1 — A run of \\(n\\) consecutive positive integers starting at \\(a\\) sums to \\(na + \\dfrac{n(n-1)}{2} = 45\\).\n" +
    "Step 2 — Enumerate the runs: \\(n = 1\\) (45); \\(n = 2\\) (\\(22+23\\)); \\(n = 3\\) (\\(14+15+16\\)); \\(n = 5\\) (\\(7\\) through \\(11\\)); \\(n = 6\\) (\\(5\\) through \\(10\\)); \\(n = 9\\) (\\(1\\) through \\(9\\)).\n" +
    "Step 3 — Statement (1): \\(n\\) is even. Both \\(n = 2\\) and \\(n = 6\\) qualify — [[not sufficient]].\n" +
    "Step 4 — Statement (2): \\(n < 9\\). That leaves \\(1, 2, 3, 5, 6\\) — [[not sufficient]].\n" +
    "Step 5 — Together: even and under 9 leaves \\(n = 2\\) and \\(n = 6\\) — still two values, [[not sufficient]].",
  fast: "Build the full list of admissible \\(n\\) before touching the statements. With a target of 45 the list is short, and spotting two even values below 9 answers the question instantly.\n" +
    "A quick way to generate it: for odd \\(n\\), the run's middle term is \\(45/n\\), so \\(n\\) must divide 45 — giving \\(n = 1, 3, 5, 9\\). For even \\(n\\), the two central terms average \\(45/n\\), which must be a half-integer — giving \\(n = 2, 6\\).",
  traps: "(C) is the intended trap: two narrowing conditions feel as though they must intersect in one value.\n" +
    "(A) finds only \\(n = 2\\) among the even runs and misses \\(n = 6\\) — which is precisely the value that defeats the combination.\n" +
    "(B) assumes uniqueness below 9.\n" +
    "(D) is stronger still.\n" +
    "The most common incomplete enumeration stops at \\(n = 2\\), \\(n = 3\\) and \\(n = 9\\); \\(5+6+7+8+9+10\\) is the one people overlook.",
  take: "For sums of consecutive integers, odd \\(n\\) must divide the total and even \\(n\\) must make \\(\\text{total}/n\\) a half-integer. Enumerate fully before judging."
},

"di-ds-realexam#7": {
  steps: "Step 1 — No positivity or integrality is stated, so the variables range over all reals — and values just above 1 are where fourth powers behave differently from squares.\n" +
    "Step 2 — Take \\(x = y = 1\\), \\(z = 1\\). Then \\(x^2 + y^2 = 2 > 1 = z^2\\) ✓ and \\(x + y = 2 > 1 = z\\) ✓, while \\(x^4 + y^4 = 2 > 1 = z^4\\) — answer yes.\n" +
    "Step 3 — Now take \\(x = y = 1\\), \\(z = 1.3\\). Then \\(x^2 + y^2 = 2 > 1.69\\) ✓ and \\(x + y = 2 > 1.3\\) ✓ — both statements still hold.\n" +
    "Step 4 — But \\(x^4 + y^4 = 2\\) while \\(z^4 = 2.8561\\), so \\(x^4 + y^4 < z^4\\) — answer no.\n" +
    "Step 5 — The same pair of examples satisfies statement (1) alone, statement (2) alone, and both together, while giving opposite answers — [[not sufficient]] in every case.",
  fast: "Raising an inequality to a higher power does not preserve it when the two sides are close and above 1: \\(z\\) grows much faster than the sum of two fixed terms.\n" +
    "Fixing \\(x = y = 1\\) and sliding \\(z\\) upward through the interval \\((1, \\sqrt2)\\) breaks everything at once — a single family of counterexamples covering all three cases.",
  traps: "(C) is the natural guess: two inequalities pointing the same way feel like they should compound. They do not, because the exponents change the balance.\n" +
    "(A) assumes squaring an inequality preserves it. It preserves \\(a > b\\) for non-negative \\(a, b\\), but \\(x^2 + y^2 > z^2\\) does not imply \\(x^4 + y^4 > z^4\\) — sums of powers do not behave like single powers.\n" +
    "(B) makes the same error one level lower.\n" +
    "(D) accepts both.\n" +
    "The tell is that the statements constrain *sums* of powers, and sums do not scale uniformly when raised to a power.",
  take: "\\(a^n + b^n > c^n\\) does not follow from \\(a^m + b^m > c^m\\) for \\(n > m\\). Slide one variable through a narrow interval above 1 to break such claims."
},

"di-ds-realexam#8": {
  steps: "Step 1 — Statement (1): \\(x^2 > 0\\) says only that \\(x \\ne 0\\); both \\(3\\) and \\(-3\\) satisfy it — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(x \\cdot |y|\\) is not positive, i.e. \\(x|y| \\le 0\\).\n" +
    "Step 3 — If \\(y \\ne 0\\), then \\(|y| > 0\\) and dividing gives \\(x \\le 0\\). But if \\(y = 0\\), the product is 0 for every \\(x\\), positive ones included — [[not sufficient]].\n" +
    "Step 4 — Together: take \\(x = 5\\), \\(y = 0\\). Then \\(x^2 = 25 > 0\\) ✓ and \\(x|y| = 0\\), which is not positive ✓ — yet \\(x\\) is positive, so the answer is no.\n" +
    "Step 5 — Take \\(x = -5\\), \\(y = 2\\). Both statements hold and \\(x\\) is negative — the answer is yes.\n" +
    "Step 6 — Both answers survive — [[not sufficient]].",
  fast: "Ask immediately whether \\(y\\) can be zero. Nothing forbids it, and \\(|y| = 0\\) makes the product zero regardless of \\(x\\) — which empties statement (2) of content about the sign of \\(x\\).\n" +
    "Any statement of the form \\(a \\cdot b \\le 0\\) should prompt the question \"can \\(b\\) be zero?\" before anything else.",
  traps: "(C) is the intended trap: (1) rules out zero and (2) *appears* to rule out positives, which together would give \"negative\". The appearance breaks at \\(y = 0\\).\n" +
    "(B) divides by \\(|y|\\) without checking it is non-zero.\n" +
    "(A) treats a square's positivity as sign information.\n" +
    "(D) is stronger still.\n" +
    "The phrase \"not a positive number\" means \\(\\le 0\\), which explicitly includes zero — that inclusion is what the trap exploits.",
  take: "Never divide by a quantity that might be zero. \"Not positive\" means \\(\\le 0\\), and the zero case usually breaks the statement."
},

"di-ds-realexam#9": {
  steps: "Step 1 — Let \\(L\\) and \\(S\\) be the head counts and \\(m\\) the overall mean salary. The question asks for \\(\\dfrac{S}{L+S}\\).\n" +
    "Step 2 — Statement (1): line-workers average \\(m - 10{,}000\\) and staff average \\(m + 30{,}000\\).\n" +
    "Step 3 — In any weighted average, the deviations from the mean must balance: \\(L(-10{,}000) + S(30{,}000) = 0\\).\n" +
    "Step 4 — So \\(10{,}000L = 30{,}000S\\), giving \\(L = 3S\\).\n" +
    "Step 5 — Then \\(\\dfrac{S}{L+S} = \\dfrac{S}{4S} = 25\\%\\) — [[sufficient]], with the mean \\(m\\) never needed.\n" +
    "Step 6 — Statement (2): \\(L = S + 500\\). That is a difference, not a ratio: \\(S = 100\\) gives \\(\\tfrac{100}{700}\\) while \\(S = 500\\) gives \\(\\tfrac{500}{1500}\\) — [[not sufficient]].",
  fast: "The weighted-average lever does this in one line: the group sizes are inversely proportional to their distances from the overall mean. Distances 10,000 and 30,000 give a ratio of \\(3 : 1\\), so staff are one part in four.\n" +
    "The question asks for a percentage, so a ratio is exactly the right currency and an absolute difference is exactly the wrong one.",
  traps: "(D) accepts statement (2), which fixes a difference in head count but not a proportion — the very thing a percentage needs.\n" +
    "(C) is the cautious pairing; statement (1) alone closes it.\n" +
    "(B) inverts the two.\n" +
    "(E) misses that the unknown mean cancels.\n" +
    "The direction of the lever is the place to slip: the group *further* from the mean is the *smaller* one, so a distance of 30,000 means fewer staff, not more.",
  take: "In a two-group weighted average, group sizes are inversely proportional to their distances from the overall mean. A percentage needs a ratio, not a difference."
},

"di-ds-realexam#10": {
  steps: "Step 1 — Statement (1): \\(|z| < 2\\) gives the range \\(-2 < z < 2\\), not a value — [[not sufficient]].\n" +
    "Step 2 — Statement (2): \\(|z| = 3z - 2\\). Note first that the right side must be non-negative, so \\(z \\ge \\tfrac23\\) — which already rules out the negative branch.\n" +
    "Step 3 — Case \\(z \\ge 0\\): \\(z = 3z - 2\\), so \\(2z = 2\\) and \\(z = 1\\) ✓ consistent.\n" +
    "Step 4 — Case \\(z < 0\\): \\(-z = 3z - 2\\), so \\(4z = 2\\) and \\(z = \\tfrac12\\) — which contradicts \\(z < 0\\) and is discarded.\n" +
    "Step 5 — A unique value \\(z = 1\\) — [[sufficient]].",
  fast: "The pre-check is the fastest route: an absolute value equals \\(3z - 2\\), so \\(3z - 2 \\ge 0\\) and \\(z \\ge \\tfrac23\\). Only the non-negative branch can survive, and it gives \\(z = 1\\) in one line.\n" +
    "Without that pre-check you must solve both branches and then discard the inconsistent root — the same answer, slightly more work.",
  traps: "(C) is the trap for anyone who finds two roots and reaches for statement (1) to choose. Both candidate roots lie inside \\((-2, 2)\\), so statement (1) would not have helped — the case check is what resolves it.\n" +
    "(A) treats a range as a value.\n" +
    "(D) accepts both.\n" +
    "(E) misses the extraneous root.\n" +
    "Extraneous roots are the hallmark of absolute-value and radical equations; substituting back is not optional.",
  take: "For \\(|f(z)| = g(z)\\), require \\(g(z) \\ge 0\\) first — it often eliminates a branch before any algebra."
},

"di-ds-realexam#11": {
  steps: "Step 1 — Statement (2): \\(q\\) is a positive integer and \\(q^4\\) is a two-digit odd number. Test small values: \\(2^4 = 16\\) (even), \\(3^4 = 81\\) (two-digit and odd ✓), \\(4^4 = 256\\) (three digits).\n" +
    "Step 2 — So \\(q = 3\\) and \\(q^2 = 9\\). But alone this says nothing about \\(p\\) — [[not sufficient]].\n" +
    "Step 3 — Statement (1): \\(p\\) is divisible by \\(q^2\\), with \\(q\\) unknown. Any two-digit \\(p\\) is divisible by \\(1^2\\), so this constrains nothing — [[not sufficient]].\n" +
    "Step 4 — Together: \\(p\\) is a two-digit multiple of 9 below 99 — namely \\(18, 27, 36, 45, 54, 63, 72, 81, 90\\).\n" +
    "Step 5 — Every multiple of 9 has a digit sum that is a multiple of 9, and for two-digit multiples of 9 that sum is exactly 9 in each case.\n" +
    "Step 6 — So the digit sum is 9 regardless of which \\(p\\) it is — [[sufficient]].",
  fast: "You never need to identify \\(p\\). Once \\(q^2 = 9\\), the divisibility rule for 9 says the digit sum is a multiple of 9, and a two-digit number's digits sum to at most 18 — so 9 or 18, and 18 requires \\(p = 99\\), which the stem excludes.\n" +
    "That reasoning gives the answer without listing a single multiple.",
  traps: "(E) is the trap for anyone who insists that \\(p\\) must be pinned to a single value. It need not be — every candidate shares the same digit sum, which is all the question asks for.\n" +
    "(B) treats a fact about \\(q\\) as a fact about \\(p\\).\n" +
    "(A) treats an unconstrained divisibility as informative.\n" +
    "Note the stem's \"less than 99\": that is what excludes \\(p = 99\\), whose digits sum to 18 rather than 9.",
  take: "A digit sum is determined whenever all candidates share it — the value itself need not be. Two-digit multiples of 9 all have digit sum 9, since 99 is the only one reaching 18."
},

"di-ds-realexam#12": {
  steps: "Step 1 — Four distinct positive integers \\(a < b < c < d\\) averaging 60 sum to \\(240\\).\n" +
    "Step 2 — Statement (1): the median of the three largest, \\(\\{b, c, d\\}\\), is \\(c = 51\\); and \\(c + d = 190\\), so \\(d = 139\\).\n" +
    "Step 3 — Then \\(a + b = 240 - 190 = 50\\), and since \\(a < b\\) with both positive, \\(b \\le 49\\) — so both are below 50.\n" +
    "Step 4 — With \\(c = 51\\) and \\(d = 139\\) above 50, exactly two of the four are less than 50 — [[sufficient]].\n" +
    "Step 5 — Statement (2): the median of four values is \\(\\dfrac{b+c}{2} = 50\\), so \\(b + c = 100\\). Distinctness forces \\(b < 50 < c\\).\n" +
    "Step 6 — Then \\(a < b < 50\\) and \\(d > c > 50\\), so again exactly two fall below 50 — [[sufficient]].",
  fast: "Neither statement requires finding the four numbers — each only has to place 50 within the ordering.\n" +
    "Statement (2) is the more elegant: two distinct integers averaging 50 must sit on opposite sides of it, which splits the four into two and two immediately.",
  traps: "(C) is the reflex pairing when neither statement identifies all four integers. Neither needs to.\n" +
    "(A) and (B) reject one statement, usually (2), because it looks like less information than the two explicit sums in (1).\n" +
    "(E) treats the unknown values as fatal.\n" +
    "The word \"distinct\" carries weight in statement (2): with ties allowed, \\(b = c = 50\\) would put two values exactly at 50, and \"less than 50\" would then count differently.",
  take: "Two distinct values averaging \\(m\\) straddle \\(m\\). Counting questions are answered by locating the threshold in the ordering, not by finding every value."
}

});
