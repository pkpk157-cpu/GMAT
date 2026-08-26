/* GMAT Prep — in-depth explanations for the live-exam Quant sets 5a and 5b.
   Every answer was independently re-derived before the explanation was
   written; no stored key was changed. Keys are "setId#n"; index.html merges
   these over the transcribed question files at load. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-5a#1": {
  steps: "Step 1 — The question asks for \\(\\binom{x}{5}\\), which is determined the moment \\(x\\) is known. So the real question is whether each statement pins down \\(x\\).\n" +
    "Step 2 — Statement (1): \\(\\binom{x+2}{5} = 126\\). Compute a few: \\(\\binom{8}{5} = 56\\), \\(\\binom{9}{5} = 126\\), \\(\\binom{10}{5} = 252\\).\n" +
    "Step 3 — \\(\\binom{n}{5}\\) is strictly increasing in \\(n\\) for \\(n \\ge 5\\), so 126 occurs for exactly one \\(n\\): \\(x + 2 = 9\\), giving \\(x = 7\\) — [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(\\binom{x+1}{3} = 56\\). Compute: \\(\\binom{7}{3} = 35\\), \\(\\binom{8}{3} = 56\\), \\(\\binom{9}{3} = 84\\).\n" +
    "Step 5 — Again strictly increasing, so \\(x + 1 = 8\\) and \\(x = 7\\) — [[sufficient]].\n" +
    "Step 6 — Each statement alone determines \\(x\\), and hence the answer.",
  fast: "You never need to compute \\(\\binom{7}{5}\\) — sufficiency only requires that \\(x\\) be uniquely determined. And because \\(\\binom{n}{k}\\) strictly increases in \\(n\\) for fixed \\(k\\), any equation \\(\\binom{n}{k} = c\\) has at most one solution.\n" +
    "That monotonicity argument settles both statements without listing values, though \\(\\binom{9}{5} = 126\\) and \\(\\binom{8}{3} = 56\\) are worth recognising.",
  traps: "(C) is the cautious answer of someone who wants both statements to cross-check each other — they happen to agree on \\(x = 7\\), but each was already enough.\n" +
    "(A) and (B) reject one statement, usually because the binomial in it looks less familiar.\n" +
    "(E) worries that a combination equation might have several solutions. For a fixed lower index it cannot, since the function is strictly increasing.\n" +
    "The efficiency trap is computing \\(\\binom{7}{5} = 21\\) — a fine number, but Data Sufficiency never asks for it.",
  take: "\\(\\binom{n}{k}\\) is strictly increasing in \\(n\\), so \\(\\binom{n}{k} = c\\) has at most one solution. For sufficiency, establishing uniqueness is enough — never compute the final value."
},

"quant-live-5a#2": {
  steps: "Step 1 — Count the legal coordinates. \\(x\\) runs over the integers \\(-4\\) to \\(5\\): that is \\(5 - (-4) + 1 = 10\\) values. \\(y\\) runs \\(6\\) to \\(16\\): \\(11\\) values.\n" +
    "Step 2 — Place \\(P\\) first: \\(10 \\times 11 = 110\\) positions.\n" +
    "Step 3 — \\(PR\\) is parallel to the \\(x\\)-axis, so \\(R\\) shares \\(P\\)'s \\(y\\)-coordinate and must differ in \\(x\\): \\(10 - 1 = 9\\) choices.\n" +
    "Step 4 — The right angle is at \\(P\\), so \\(PQ\\) is perpendicular to \\(PR\\) — that is, vertical. \\(Q\\) shares \\(P\\)'s \\(x\\)-coordinate and must differ in \\(y\\): \\(11 - 1 = 10\\) choices.\n" +
    "Step 5 — Multiply: \\(110 \\times 9 \\times 10 = 9{,}900\\).",
  fast: "The two constraints — right angle at \\(P\\), and \\(PR\\) horizontal — force \\(PQ\\) to be vertical, so each vertex is determined by one free coordinate. That turns a geometry question into three independent counts.\n" +
    "Count inclusively: from \\(-4\\) to \\(5\\) is 10 integers, not 9 — the classic place to lose the question.",
  traps: "(D) 10,000 is \\(110 \\times 10 \\times 10\\)-flavoured, or \\(100 \\times 100\\): it forgets that \\(R\\) must differ from \\(P\\) in \\(x\\) (a degenerate triangle otherwise).\n" +
    "(E) 12,100 is \\(110^2\\), treating both \\(Q\\) and \\(R\\) as freely placeable.\n" +
    "(A) 110 counts only the positions of \\(P\\).\n" +
    "(B) 1,100 stops after placing \\(P\\) and one other vertex.\n" +
    "Note that \\(Q\\) and \\(R\\) are distinguishable — the labels are fixed by the problem — so no division by 2 is needed.",
  take: "Count coordinate ranges inclusively (\\(b - a + 1\\)). A right angle at a named vertex with one leg axis-parallel forces the other leg to be axis-parallel too, making the vertices independent."
},

"quant-live-5a#3": {
  steps: "Step 1 — Label the heights \\(1\\) through \\(6\\). Let the front row be \\(a_1 < a_2 < a_3\\) and the back row \\(b_1 < b_2 < b_3\\), with \\(a_i < b_i\\) in every column.\n" +
    "Step 2 — Person 1, the shortest, cannot stand behind anyone, so \\(a_1 = 1\\). Person 6 cannot stand in front of anyone, so \\(b_3 = 6\\).\n" +
    "Step 3 — Once the front-row set is chosen, both rows are determined, since each must be in increasing order. So we are counting valid front-row sets.\n" +
    "Step 4 — Test each three-element set containing 1: \\(\\{1,2,3\\}\\) leaves \\(\\{4,5,6\\}\\) ✓; \\(\\{1,2,4\\}\\) leaves \\(\\{3,5,6\\}\\) ✓; \\(\\{1,2,5\\}\\) leaves \\(\\{3,4,6\\}\\) ✓; \\(\\{1,3,4\\}\\) leaves \\(\\{2,5,6\\}\\) ✓; \\(\\{1,3,5\\}\\) leaves \\(\\{2,4,6\\}\\) ✓.\n" +
    "Step 5 — The remaining candidates fail: \\(\\{1,2,6\\}\\) puts 6 in front; \\(\\{1,4,5\\}\\) leaves \\(\\{2,3,6\\}\\) and needs \\(4 < 3\\) ✗.\n" +
    "Step 6 — Exactly 5 arrangements.",
  fast: "Fix the two forced positions (1 at front-left, 6 at back-right) and the search collapses to choosing two more front-row members from \\(\\{2,3,4,5\\}\\) — only six candidate sets, and one of them fails.\n" +
    "A useful check: reading the front row then the back row must produce a sequence where each person is taller than everyone above and to the left, which is exactly the standard \"ballot\" condition; the count for a \\(2 \\times 3\\) grid is the Catalan number 5.",
  traps: "(B) 6 counts \\(\\{1,4,5\\}\\) as valid, forgetting the column condition in the second position.\n" +
    "(C) 9 comes from choosing the front row as any 3-subset containing 1 (\\(\\binom{5}{2} = 10\\)) with a rough correction.\n" +
    "(D) 24 and (E) 36 apply factorials, ignoring that the increasing-height rules leave no freedom once the sets are chosen.\n" +
    "The key realisation is that ordering within each row is forced, so the whole problem is a set-selection count rather than a permutation count.",
  take: "When ordering within groups is forced by a monotonicity rule, count the possible groupings, not the arrangements. Fix the extreme elements first to shrink the search."
},

"quant-live-5a#4": {
  steps: "Step 1 — A five-digit palindrome has the form \\(\\overline{abcba}\\): the last two digits are copies of the first two.\n" +
    "Step 2 — Only \\(a\\), \\(b\\) and \\(c\\) are free; the fourth and fifth digits are forced to equal \\(b\\) and \\(a\\).\n" +
    "Step 3 — \\(a\\) is the leading digit of a five-digit number, so it cannot be 0: 9 choices.\n" +
    "Step 4 — \\(b\\) can be any digit: 10 choices. \\(c\\) can be any digit: 10 choices.\n" +
    "Step 5 — \\(9 \\times 10 \\times 10 = 900\\).",
  fast: "Count only the free positions. A palindrome of length \\(n\\) has \\(\\lceil n/2 \\rceil\\) independent digits — here three — and the leading one cannot be zero, giving \\(9 \\times 10^{2}\\).\n" +
    "The same reasoning gives 90 four-digit palindromes and 9,000 seven-digit ones.",
  traps: "(A) 720 is \\(9 \\times 8 \\times 10\\)-flavoured, from imposing a \"digits must differ\" rule the question never states — palindromes like 11111 are perfectly valid.\n" +
    "(B) 800 and (E) 950 are near-misses from miscounting one of the three free digits.\n" +
    "(C) 890 comes from subtracting a set of cases that were never included.\n" +
    "The one genuine constraint is the leading digit, and it applies to \\(a\\) only — \\(b\\) and \\(c\\) may both be zero.",
  take: "A palindrome is determined by its first half. Count \\(\\lceil n/2 \\rceil\\) free digits, with 9 choices for the leading one and 10 for each other."
},

"quant-live-5a#5": {
  steps: "Step 1 — All digits are nonzero and distinct, and the number exceeds 700, so the hundreds digit is 7, 8 or 9.\n" +
    "Step 2 — The number is odd, so the units digit lies in \\(\\{1, 3, 5, 7, 9\\}\\) and must differ from the hundreds digit.\n" +
    "Step 3 — Case hundreds \\(= 8\\) (even, so it competes with nothing): the units digit has all 5 odd choices. The tens digit is any nonzero digit other than the two used: \\(9 - 2 = 7\\). That gives \\(5 \\times 7 = 35\\).\n" +
    "Step 4 — Case hundreds \\(= 7\\) (odd, so it removes one odd option): the units digit has 4 choices, the tens digit 7. That gives \\(28\\).\n" +
    "Step 5 — Case hundreds \\(= 9\\): identically \\(28\\).\n" +
    "Step 6 — Total \\(35 + 28 + 28 = 91\\).",
  fast: "Split on whether the hundreds digit is odd, because that is the only thing that changes the count. An even hundreds digit leaves all five odd units digits available; an odd one leaves four.\n" +
    "The tens digit is always 7 choices regardless — nine nonzero digits minus the two already used — so the whole computation is \\(5 \\times 7 + 2 \\times (4 \\times 7)\\).",
  traps: "(D) 105 is \\(3 \\times 5 \\times 7\\), treating all three hundreds digits as though they left five odd units digits free. That overcounts the cases where the hundreds digit is itself odd.\n" +
    "(A) 84 is \\(3 \\times 4 \\times 7\\), the opposite error: assuming the hundreds digit always removes an odd option, which is false when it is 8.\n" +
    "(C) 100 and (E) 243 come from ignoring the distinctness requirement.\n" +
    "The case split on the parity of the hundreds digit is the entire difficulty — the two natural uniform answers bracket the truth.",
  take: "When one restricted digit may or may not collide with another restriction, split into cases on that collision. Count the freest position last."
},

"quant-live-5a#6": {
  steps: "Step 1 — The numbers run from 701 to 999, so the hundreds digit \\(h\\) is 7, 8 or 9.\n" +
    "Step 2 — \"Exactly two digits equal\" gives three position patterns: hundreds = tens, hundreds = units, or tens = units — with the third digit different.\n" +
    "Step 3 — Hundreds = tens: the units digit can be any of the other 9 digits — 9 numbers per \\(h\\).\n" +
    "Step 4 — Hundreds = units: the tens digit can be any of the other 9 — another 9.\n" +
    "Step 5 — Tens = units: the shared digit can be any of the 9 digits other than \\(h\\) — another 9. Note this pattern allows 0, as in 800.\n" +
    "Step 6 — That is 27 numbers for each hundreds digit, so \\(27 \\times 3 = 81\\) across 700–999.\n" +
    "Step 7 — But the question says *greater than* 700, and 700 (digits 7, 0, 0) was counted in the tens = units pattern. Subtract it: \\(81 - 1 = 80\\).",
  fast: "Count patterns rather than numbers: for each hundreds digit there are three ways to place the matching pair and 9 ways to choose the odd digit out, giving a uniform 27 per hundred.\n" +
    "Then handle the single boundary case. \"Greater than 700\" excludes exactly one number that the clean count includes — and that one-number adjustment is what the answer choices are built around.",
  traps: "(A) 90 counts 30 per hundred, which happens if you allow the odd-one-out digit to equal the repeated digit in one of the patterns.\n" +
    "(B) 82 and (D) 45 come from other pattern miscounts — 45 is half the count, as though the patterns were being double-counted.\n" +
    "(E) 36 counts only one or two of the three patterns.\n" +
    "The boundary is the sharpest trap: 81 is the count for \\(700 \\le n \\le 999\\), and the strict inequality removes 700 itself.",
  take: "For \"exactly two equal digits\", count the position patterns separately and multiply by the free digit's choices. Then check the range endpoints against the pattern that produces them."
},

"quant-live-5a#7": {
  steps: "Step 1 — The single-digit primes are 2, 3, 5 and 7 — four of them.\n" +
    "Step 2 — Whether a number qualifies depends only on its last two digits, and there are \\(4 \\times 4 = 16\\) qualifying two-digit endings.\n" +
    "Step 3 — Every complete block of 100 consecutive integers contains each ending exactly once, so each contributes 16.\n" +
    "Step 4 — From 0 to 1499 there are 15 complete blocks: \\(15 \\times 16 = 240\\).\n" +
    "Step 5 — The remainder is 1500 to 1569. Here the tens digit runs only from 0 to 6, so the available prime tens digits are 2, 3 and 5 — three of them.\n" +
    "Step 6 — Each pairs with any of the 4 prime units digits: \\(3 \\times 4 = 12\\).\n" +
    "Step 7 — Total \\(240 + 12 = 252\\).",
  fast: "Reduce the problem to the last two digits and the count becomes \"16 per hundred\". Then the only work is splitting the range into whole hundreds plus a partial one.\n" +
    "The partial block is where the answer is decided: 1570 stops the tens digit at 6, which admits 2, 3 and 5 but not 7.",
  traps: "(A) 295 comes from treating the range as roughly 15.7 hundreds and scaling 16 proportionally — but the leftover block is not proportional, since the tens digit is truncated.\n" +
    "(C) 236 undercounts the partial block or drops a whole hundred.\n" +
    "(D) 96 and (E) 76 count only the numbers below 600 or so, or count qualifying two-digit numbers only.\n" +
    "Two details decide it: 1 is not prime (so 1 is not an allowed digit), and the block 1500–1569 is truncated mid-tens.",
  take: "When a condition depends only on the last \\(k\\) digits, count qualifying endings and multiply by the number of complete blocks — then handle the partial block by hand."
},

"quant-live-5a#8": {
  steps: "Step 1 — Digits one and two are fixed as 1 and 2: one way.\n" +
    "Step 2 — The third digit is bigger than 6 and lies in 1–9: \\(\\{7, 8, 9\\}\\) — 3 ways.\n" +
    "Step 3 — The fourth digit is divisible by 3 and lies in 1–9: \\(\\{3, 6, 9\\}\\) — 3 ways. (Zero is excluded because the digits run from 1 to 9.)\n" +
    "Step 4 — The fifth digit is three times the sixth, with both in 1–9. The sixth can be 1, 2 or 3, giving fifth digits 3, 6 or 9 — 3 ways. A sixth digit of 4 would need a fifth digit of 12.\n" +
    "Step 5 — Multiply the independent choices: \\(3 \\times 3 \\times 3 = 27\\).",
  fast: "Each condition constrains its own position, and nothing forbids repeats between positions, so the counts simply multiply. List the allowed values position by position and the answer is \\(3^3\\).\n" +
    "The one position needing care is the fifth-and-sixth pair: they are linked, so together they contribute 3 ways, not \\(3 \\times 3\\).",
  traps: "(C) 72 comes from treating the fifth and sixth digits as independent — for instance 3 choices each — which double-counts a linked pair.\n" +
    "(B) 36 arises from allowing 0 as a digit divisible by 3, giving 4 choices in position four.\n" +
    "(D) 112 and (E) 422 come from allowing digits outside the stated range or from adding rather than multiplying.\n" +
    "The stem's phrase \"each from 1 to 9\" is doing real work: it removes 0 from the divisible-by-3 list and caps the fifth digit at 9.",
  take: "Multiply independent position counts, but treat linked positions as a single joint choice. Re-read the allowed digit range before listing candidates."
},

"quant-live-5a#9": {
  steps: "Step 1 — Count all committees first, ignoring the restriction: \\(\\binom{10}{3} = 120\\).\n" +
    "Step 2 — Now count the forbidden ones — those containing at least one married pair.\n" +
    "Step 3 — Choose the couple: 5 ways. Then choose the third member from the remaining 8 people: 8 ways.\n" +
    "Step 4 — That gives \\(5 \\times 8 = 40\\) bad committees, with no double counting, since a 3-person committee cannot contain two complete couples.\n" +
    "Step 5 — Subtract: \\(120 - 40 = 80\\).",
  fast: "Complementary counting is much cleaner than building good committees directly, and the reason it is safe here is that three people cannot contain two couples — so the bad cases do not overlap.\n" +
    "The direct route also works: choose 3 of the 5 couples (\\(\\binom53 = 10\\)) and one person from each (\\(2^3 = 8\\)), giving \\(10 \\times 8 = 80\\). Getting the same answer two ways is a strong check.",
  traps: "(B) 40 is the count of *forbidden* committees — the intermediate value, and the most likely wrong answer.\n" +
    "(E) 120 is the unrestricted total.\n" +
    "(C) 50 and (A) 20 come from partial subtractions or from choosing couples without then choosing which spouse attends.\n" +
    "A subtle point worth internalising: complementary counting requires the bad cases to be countable without overlap. Had the committee been four people, two couples could both appear and inclusion–exclusion would be needed.",
  take: "Count the complement when the restriction is \"no forbidden pair\", and check the bad cases cannot overlap. Verify with the direct count when it is cheap."
},

"quant-live-5a#10": {
  steps: "Step 1 — The identification number has four positions, all digits distinct, and the first cannot be 0.\n" +
    "Step 2 — First digit: any of 1 through 9 — 9 choices.\n" +
    "Step 3 — Second digit: any digit except the one already used. Zero is allowed here, so from 10 digits minus 1 used — 9 choices.\n" +
    "Step 4 — Third digit: 8 remaining.\n" +
    "Step 5 — Fourth digit: 7 remaining.\n" +
    "Step 6 — \\(9 \\times 9 \\times 8 \\times 7 = 4{,}536\\).",
  fast: "Fill the most constrained position first — the leading digit — and then count downward. The second position is the one that surprises people: it also has 9 options, because losing the first digit is offset by gaining 0.\n" +
    "An alternative route: all four-digit distinct-digit strings number \\(10 \\times 9 \\times 8 \\times 7 = 5040\\), and those starting with 0 number \\(1 \\times 9 \\times 8 \\times 7 = 504\\); the difference is 4,536.",
  traps: "(C) 5,040 is \\(10 \\times 9 \\times 8 \\times 7\\) — the count with no restriction on the leading digit.\n" +
    "(A) 3,024 is \\(9 \\times 8 \\times 7 \\times 6\\), which double-penalises the leading digit by never restoring 0 to the pool.\n" +
    "(D) 9,000 counts all four-digit numbers with a nonzero lead but allows repeats.\n" +
    "(E) 10,000 is \\(10^4\\), with neither restriction applied.\n" +
    "The pivot is the second position: distinctness removes one digit, but the leading-zero rule no longer applies, so the count stays at 9.",
  take: "Handle the most restricted position first. After a leading-digit restriction, the next position often has the same number of options, since 0 re-enters the pool."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-5a#11": {
  steps: "Step 1 — With no restriction, six people can line up in \\(6! = 720\\) ways.\n" +
    "Step 2 — In any one of those lines, exactly one of two things is true: Frankie stands somewhere behind Joey, or Frankie stands somewhere ahead of him. There is no third case, since no two people share a position.\n" +
    "Step 3 — Swapping Frankie and Joey turns any line of the first kind into a line of the second kind, and vice versa. That is a perfect pairing between the two groups.\n" +
    "Step 4 — So the two groups are equal in size, each holding half the total.\n" +
    "Step 5 — \\(720 \\div 2 = 360\\).",
  fast: "A symmetry argument replaces all the counting: for any two named people, exactly half of all arrangements put one before the other. Compute \\(6!\\) and halve it.\n" +
    "The same reasoning generalises — with three people required in a fixed relative order, the fraction is \\(\\tfrac1{3!}\\), and so on.",
  traps: "(E) 720 is the unrestricted total, chosen by anyone who reads the condition as automatically satisfied.\n" +
    "(C) 120 is \\(5!\\), which treats Frankie and Joey as a glued pair — but the condition says \"somewhere behind\", not \"immediately behind\", so the other four people may stand between them.\n" +
    "(B) 24 is \\(4!\\), removing both men from the count entirely.\n" +
    "(A) 6 counts something much smaller still.\n" +
    "The word \"somewhere\" is what rules out the adjacency reading and licenses the clean halving.",
  take: "For any two people, exactly half of all arrangements place one before the other. \"Somewhere behind\" is an ordering condition, not an adjacency condition."
},

"quant-live-5a#12": {
  steps: "Step 1 — After discarding, Sammy has \\(x - y\\) flavours, and the number of 10-flavour bags is \\(\\binom{x-y}{10}\\). So the question needs only the difference \\(x - y\\).\n" +
    "Step 2 — Statement (1): discarding two more would leave \\(x - y - 2\\) flavours and \\(\\binom{x-y-2}{10} = 3003\\).\n" +
    "Step 3 — \\(\\binom{15}{10} = \\binom{15}{5} = 3003\\), and \\(\\binom{n}{10}\\) is strictly increasing in \\(n\\), so \\(x - y - 2 = 15\\) and \\(x - y = 17\\) — [[sufficient]].\n" +
    "Step 4 — Statement (2): \\(x = y + 17\\) says exactly that \\(x - y = 17\\) — [[sufficient]].\n" +
    "Step 5 — Each alone determines the difference, and hence \\(\\binom{17}{10}\\).",
  fast: "Identify the quantity the answer depends on — here the single difference \\(x - y\\), not \\(x\\) and \\(y\\) separately. Both statements deliver it, one directly and one through a strictly increasing binomial.\n" +
    "You never need \\(\\binom{17}{10}\\) itself; sufficiency is about determinacy, not about the number.",
  traps: "(C) is the answer of someone trying to find \\(x\\) and \\(y\\) individually. Neither statement does that, and neither needs to — the two statements even say the same thing.\n" +
    "(A) and (B) reject one statement, usually (1), on the grounds that a binomial equation might have several solutions. For a fixed lower index it cannot.\n" +
    "(E) rejects both.\n" +
    "The framing move is Step 1: writing the target as \\(\\binom{x-y}{10}\\) makes the shared dependence obvious.",
  take: "Express the target in terms of the smallest set of unknowns first. Here it depends on \\(x - y\\) alone, so any statement fixing that difference is sufficient."
},

"quant-live-5a#13": {
  steps: "Step 1 — The noun template is C V C V C: three consonant slots and two vowel slots, in that fixed order.\n" +
    "Step 2 — Nothing forbids reusing a letter, so each slot is filled independently.\n" +
    "Step 3 — Each consonant slot has 3 options and each vowel slot has 2.\n" +
    "Step 4 — Multiply: \\(3 \\times 2 \\times 3 \\times 2 \\times 3 = 3^3 \\times 2^2\\).\n" +
    "Step 5 — \\(27 \\times 4 = 108\\).",
  fast: "Group the slots by type: \\(3^3\\) for the consonants and \\(2^2\\) for the vowels, so \\(27 \\times 4 = 108\\). Writing it that way is faster than multiplying five factors in sequence and makes the structure visible.\n" +
    "The assumption doing the work is that letters may repeat — the question describes a template, not a selection.",
  traps: "(D) 72 comes from treating one slot as having fewer options, typically by forbidding a repeat somewhere.\n" +
    "(C) 36 is \\(3 \\times 2 \\times 3 \\times 2\\), dropping the final consonant slot — an easy miscount of a five-letter template.\n" +
    "(B) 12 and (A) 9 count only part of the pattern, or count \\(3 \\times 2\\) and \\(3^2\\).\n" +
    "If repetition were forbidden the count would be \\(3 \\times 2 \\times 2 \\times 1 \\times 1 = 12\\), which is exactly why (B) is offered — but the language has only three consonants and five slots to fill across two of the letters' types, so repetition must be allowed.",
  take: "Fixed-pattern counting multiplies the options at each slot. Group identical slot types as powers, and check whether repetition is permitted."
},

"quant-live-5a#14": {
  steps: "Step 1 — Count all seatings of the seven people: \\(7!\\).\n" +
    "Step 2 — Now count the forbidden ones, in which all three men occupy adjacent seats.\n" +
    "Step 3 — Treat the three men as a single block. That block plus the four women makes 5 items to arrange in the row: \\(5!\\) ways.\n" +
    "Step 4 — Within the block the three men can be ordered in \\(3!\\) ways.\n" +
    "Step 5 — So the forbidden count is \\(5! \\times 3!\\).\n" +
    "Step 6 — The answer is \\(7! - 5!\\,3!\\).",
  fast: "The glue-them-together technique is the standard move for adjacency: \\(k\\) people who must sit together become one item, so \\(n\\) people become \\(n - k + 1\\) items, arranged in \\((n-k+1)!\\) ways with \\(k!\\) internal orders.\n" +
    "Here \\(7 - 3 + 1 = 5\\), giving \\(5!\\,3!\\) — and the question wants the complement, so subtract from \\(7!\\).",
  traps: "(B) \\(7! - 4!\\,3!\\) uses 4 items instead of 5 — it forgets that the block itself counts as one of the items alongside the four women.\n" +
    "(A) and (E) use \\(2!\\,3!\\,2!\\), which counts arrangements within some other grouping entirely.\n" +
    "(D) multiplies rather than subtracts, giving a count of forbidden seatings scaled by 7.\n" +
    "The check is a quick sanity comparison: \\(5!\\,3! = 720\\) out of \\(7! = 5040\\), so about a seventh of all seatings are forbidden — plausible for three specific people out of seven landing together.",
  take: "For \\(k\\) people who must be adjacent among \\(n\\), the count is \\((n-k+1)!\\,k!\\). Subtract from \\(n!\\) when the condition is that they must *not* be adjacent."
},

"quant-live-5a#15": {
  steps: "Step 1 — Count the distinct codes. Ten letters with the letter I repeated twice give \\(\\dfrac{10!}{2!}\\) distinguishable arrangements, since swapping the two I's changes nothing.\n" +
    "Step 2 — Count the favourable codes, where the two I's are adjacent. Glue them into one unit.\n" +
    "Step 3 — That leaves 9 units, all distinct, arranged in \\(9!\\) ways. No division by 2 is needed here, because the two I's inside the glued unit are identical and their order does not create a new code.\n" +
    "Step 4 — Probability \\(= \\dfrac{9!}{10!/2!} = \\dfrac{2 \\times 9!}{10!} = \\dfrac{2}{10} = \\dfrac15\\).",
  fast: "Skip the factorials entirely with a positional argument: place the eight other letters and the pair, or simply note that among the 10 positions the two I's occupy a random 2-subset, of which \\(\\binom{10}{2} = 45\\) exist and 9 are adjacent — \\(\\tfrac9{45} = \\tfrac15\\).\n" +
    "That version is faster and avoids the repeated-letter division altogether.",
  traps: "(A) \\(\\tfrac1{10}\\) comes from dividing 9 adjacent pairs by 90 ordered pairs instead of 45 unordered ones — a double-count in the denominator.\n" +
    "(E) \\(\\tfrac12\\) and (D) \\(\\tfrac14\\) come from forgetting the \\(2!\\) in the total or applying it twice.\n" +
    "(B) \\(\\tfrac18\\) is a near-miss from counting 8 adjacent positions rather than 9.\n" +
    "The repeated letter is the trap: it divides the total count by 2 but does *not* divide the glued count, and skipping either adjustment gives a wrong ratio.",
  take: "With one repeated letter, total arrangements are \\(n!/2!\\) but glued arrangements are \\((n-1)!\\). Or bypass both: the pair occupies a random 2-subset of positions, and \\(n-1\\) of the \\(\\binom n2\\) subsets are adjacent."
},

"quant-live-5a#16": {
  steps: "Step 1 — There are five people and five seats: two in front (one of which is the driver's) and three across the back.\n" +
    "Step 2 — A parent must drive: 2 choices. The other four people fill the remaining four seats in \\(4! = 24\\) ways, giving \\(2 \\times 24 = 48\\) arrangements before the restriction.\n" +
    "Step 3 — Identify the adjacent seat pairs. The two front seats are adjacent, and in the back row the left–middle and middle–right pairs are adjacent.\n" +
    "Step 4 — The daughters cannot occupy the front pair, since one of those seats is the driver's and a parent is in it. So only the two back-row pairs are forbidden.\n" +
    "Step 5 — Count the bad arrangements: 2 forbidden pairs \\(\\times\\) 2 orders for the daughters \\(\\times\\) 2 ways to seat the remaining parent and the son in the leftover seats \\(= 8\\), and that is per driver choice, so \\(8 \\times 2 = 16\\).\n" +
    "Step 6 — \\(48 - 16 = 32\\).",
  fast: "Fix the driver first — it is the most constrained seat — and everything downstream is a small permutation. Then note that the front pair is automatically safe, so only two adjacent pairs matter.\n" +
    "Counting the bad cases (16) is quicker than counting the good ones directly, because the daughters' forbidden placements are so few.",
  traps: "(C) 48 is the unrestricted total, forgetting the daughters' condition entirely.\n" +
    "(A) 28 subtracts too much, usually by counting the front pair as a third forbidden adjacency — but a daughter cannot sit in the driver's seat, so that pair can never hold both.\n" +
    "(D) 60 and (E) 120 ignore the driver restriction and use \\(5!\\)-scale counts.\n" +
    "The seat geometry matters: three back seats give two adjacent pairs, not three, since the left and right seats are not neighbours.",
  take: "Seat the most constrained person first, then count forbidden adjacencies against the actual seat layout. A row of \\(k\\) seats has \\(k-1\\) adjacent pairs."
},

"quant-live-5a#17": {
  steps: "Step 1 — \"At least one letter repeated\" is much easier to count as a complement.\n" +
    "Step 2 — Total passwords with repetition allowed: each of the 4 positions has 6 choices, so \\(6^4 = 1296\\).\n" +
    "Step 3 — Passwords with all four letters distinct: \\(6 \\times 5 \\times 4 \\times 3 = 360\\).\n" +
    "Step 4 — Subtract: \\(1296 - 360 = 936\\).",
  fast: "\"At least one\" almost always signals complementary counting — compute everything, subtract the case where nothing repeats. Two short products and one subtraction.\n" +
    "Direct counting here would require splitting into exactly-one-pair, two-pairs, three-of-a-kind and four-of-a-kind cases, which is far more work and far more error-prone.",
  traps: "(E) 1,296 is the unrestricted total, the answer if you forget to subtract.\n" +
    "(A) 720 is \\(6!\\), which counts arrangements of all six letters rather than four-letter passwords.\n" +
    "(B) 864 and (C) 900 come from subtracting a wrong distinct-letter count, such as \\(6^4 - 6 \\times 5 \\times 4 \\times 4\\) or \\(1296 - 396\\).\n" +
    "The distinct count must be a falling product \\(6 \\times 5 \\times 4 \\times 3\\); using \\(\\binom64\\) instead would count sets rather than ordered passwords.",
  take: "\"At least one repeat\" = (all arrangements) − (all distinct). Passwords are ordered, so the distinct count is the falling product \\(n(n-1)(n-2)\\dots\\), not a combination."
},

"quant-live-5a#18": {
  steps: "Step 1 — Handle the positive requirement first. Jeong must sit next to Leila, so glue them into one unit.\n" +
    "Step 2 — That leaves 5 units to arrange: \\(5! = 120\\) orders, times \\(2\\) for Jeong and Leila's internal order — \\(240\\) arrangements satisfying the Jeong–Leila condition.\n" +
    "Step 3 — From those, remove the ones in which Gita and Inge are also adjacent.\n" +
    "Step 4 — Glue both pairs: now 4 units, arranged in \\(4! = 24\\) ways, times 2 for the Jeong–Leila order and 2 for the Gita–Inge order: \\(24 \\times 2 \\times 2 = 96\\).\n" +
    "Step 5 — Subtract: \\(240 - 96 = 144\\).",
  fast: "Apply the must-sit-together condition first to shrink the universe, then subtract the must-not cases from *that* smaller universe — not from \\(6!\\). Getting the order of operations right is the whole technique.\n" +
    "Each gluing step reduces the item count by one and multiplies in a factor of 2 for the internal order.",
  traps: "(B) 240 stops after the Jeong–Leila condition and never applies the Gita–Inge restriction.\n" +
    "(A) 288 comes from subtracting a Gita–Inge count computed against all \\(6!\\) arrangements rather than against the 240 that already satisfy the first condition.\n" +
    "(D) 120 forgets the factor of 2 for Jeong and Leila's internal order.\n" +
    "(E) 96 reports the subtracted quantity itself.\n" +
    "The disciplined phrasing is: within the set where JL are together, how many also have GI together? That framing prevents mixing universes.",
  take: "Impose the \"must be together\" condition first to define the universe, then subtract the \"must not be together\" cases computed inside that same universe."
},

"quant-live-5a#19": {
  steps: "Step 1 — Count the distinct outfits: \\(3\\) shirts \\(\\times\\ 2\\) sweaters \\(\\times\\ 4\\) hats \\(= 24\\).\n" +
    "Step 2 — He starts wearing them the day after Tuesday, so day 1 is Wednesday.\n" +
    "Step 3 — The 24th distinct outfit is worn on day 24, which is \\(23\\) days after Wednesday.\n" +
    "Step 4 — \\(23 = 3 \\times 7 + 2\\), so day 24 falls two weekdays past Wednesday: Friday.\n" +
    "Step 5 — On the following day he has no unused combination left, so the first day he must repeat is Saturday.",
  fast: "Two small computations: \\(3 \\times 2 \\times 4 = 24\\) outfits, and \\(24 \\bmod 7 = 3\\). Starting Wednesday, 24 days later brings you to Wednesday \\(+\\) 3 \\(=\\) Saturday — which is exactly the day the supply runs out.\n" +
    "That shortcut works because day \\(n+1\\) after a Wednesday start is Wednesday shifted by \\(n\\), and \\(n = 24\\) here.",
  traps: "(D) Friday is the last day he can still wear a *new* outfit — the off-by-one the question is built around. Read the question as asking for the first day he cannot.\n" +
    "(B) Wednesday takes the start day as the answer.\n" +
    "(A) Tuesday is the purchase day, explicitly before he starts.\n" +
    "(C) Thursday comes from a second off-by-one in the modular arithmetic.\n" +
    "Two separate off-by-ones lurk here: whether day 1 is Tuesday or Wednesday, and whether the answer is the 24th day or the 25th.",
  take: "Multiply independent wardrobe choices for the outfit count, then reduce the day offset modulo 7 — and check carefully which day the question calls day one and whether it wants the last success or the first failure."
}

});
