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
