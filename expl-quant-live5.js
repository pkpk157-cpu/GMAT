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

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-5b#1": {
  steps: "Step 1 — \"Neither event occurs\" is the complement of \"at least one occurs\": \\(P(\\text{neither}) = 1 - P(A \\cup B)\\).\n" +
    "Step 2 — To make that as large as possible, make the union as small as possible.\n" +
    "Step 3 — The union can never be smaller than the larger of the two events, since \\(B \\subseteq A \\cup B\\). So \\(P(A \\cup B) \\ge 0.68\\).\n" +
    "Step 4 — That floor is attainable: put the whole of event \\(A\\) inside event \\(B\\), which is consistent because \\(0.54 \\le 0.68\\). Then \\(P(A \\cup B) = 0.68\\) exactly.\n" +
    "Step 5 — \\(P(\\text{neither}) = 1 - 0.68 = 0.32\\).",
  fast: "Maximum overlap means minimum union, and the minimum union is just the larger probability. So the answer is \\(1 - 0.68\\) — one subtraction, no formula.\n" +
    "The companion bound is worth knowing at the same time: the union is at most \\(\\min(1,\\ 0.54 + 0.68) = 1\\), which would make \\(P(\\text{neither})\\) as small as 0.\n" +
    "Note that the question says \"greatest possible\", which signals a bounding problem rather than a computation.",
  traps: "(A) 0.22 is \\(1 - (0.54 + 0.68 - 0.68 \\times 0.54)\\)-flavoured — the answer under an *independence* assumption, which the question never grants and which \"greatest possible\" explicitly rules out.\n" +
    "(D) 0.46 is \\(1 - 0.54\\), using the smaller event as the union.\n" +
    "(C) 0.37 and (E) 0.63 come from adding or averaging the two probabilities.\n" +
    "The habit worth building: when a probability question says \"greatest possible\" or \"least possible\", it is asking about the range of dependence structures, not about independent events.",
  take: "For two events, \\(\\max(P_A, P_B) \\le P(A \\cup B) \\le \\min(1, P_A + P_B)\\). \"Greatest possible\" for the complement means minimising the union — maximum overlap."
},

"quant-live-5b#2": {
  steps: "Step 1 — The probability wanted is \\(\\dfrac{\\text{number of elements of } T \\text{ that are} \\le 5}{|T|}\\). Both the numerator and the denominator are unknown.\n" +
    "Step 2 — Statement (1): \\(|T| = 8\\). That fixes the denominator and says nothing about how many elements are at most 5 — [[not sufficient]].\n" +
    "Step 3 — Statement (2): \\(T \\subseteq \\{1, 2, \\dots, 25\\}\\). That bounds the values but leaves both the size and the composition open — [[not sufficient]].\n" +
    "Step 4 — Together: \\(T\\) is an 8-element subset of \\(\\{1, \\dots, 25\\}\\). Take \\(T = \\{1,2,3,4,5,6,7,8\\}\\): five of the eight satisfy \\(x \\le 5\\), giving \\(\\tfrac58\\).\n" +
    "Step 5 — Now take \\(T = \\{18, 19, \\dots, 25\\}\\): none satisfies it, giving \\(0\\).\n" +
    "Step 6 — Two different probabilities from admissible sets — [[not sufficient]] even together.",
  fast: "Write the probability as a fraction and check whether each statement pins the numerator, the denominator, or neither. Statement (1) gives only the denominator; statement (2) gives only a range for the values.\n" +
    "Then produce two extreme sets — one clustered low, one clustered high — and you are done. Constructing counterexamples at the boundaries is almost always the fastest route on \"together still not sufficient\" questions.",
  traps: "(C) is the natural guess: two statements that each fill a gap in the other *feel* like they should combine. But knowing the size and the value range still leaves the composition entirely free.\n" +
    "(A) treats a fixed denominator as sufficient.\n" +
    "(B) treats the value bound as if it forced a uniform spread across 1 to 25 — the set need not be spread at all.\n" +
    "(D) is stronger than either.\n" +
    "The lesson: a probability needs a numerator *and* a denominator, and a range constraint supplies neither.",
  take: "A probability is a ratio; check whether the statements determine both parts. A bound on the possible values never determines how many elements actually fall in a sub-range."
},

"quant-live-5b#3": {
  steps: "Step 1 — Count all ways to draw two animals from five: \\(\\binom{5}{2} = 10\\).\n" +
    "Step 2 — Count matched pairs. Two doves: \\(\\binom{3}{2} = 3\\).\n" +
    "Step 3 — Two rabbits: \\(\\binom{2}{2} = 1\\).\n" +
    "Step 4 — Favourable total: \\(3 + 1 = 4\\).\n" +
    "Step 5 — Probability \\(= \\dfrac{4}{10} = \\dfrac25\\).",
  fast: "Sequential reasoning is just as quick: the second animal must match the first. If the first is a dove (probability \\(\\tfrac35\\)), 2 of the remaining 4 are doves; if it is a rabbit (\\(\\tfrac25\\)), 1 of the remaining 4 is a rabbit.\n" +
    "That gives \\(\\tfrac35 \\cdot \\tfrac24 + \\tfrac25 \\cdot \\tfrac14 = \\tfrac{6}{20} + \\tfrac{2}{20} = \\tfrac25\\) — the same answer, and a useful cross-check.",
  traps: "(B) \\(\\tfrac35\\) is the complement — the probability of a *mismatched* pair, which is \\(\\tfrac{6}{10}\\).\n" +
    "(C) \\(\\tfrac15\\) counts only one of the two matching cases, typically the rabbits.\n" +
    "(D) \\(\\tfrac12\\) comes from treating the two outcomes (match, no match) as equally likely.\n" +
    "(E) \\(\\tfrac75\\) exceeds 1 and cannot be a probability at all — a free elimination worth taking.\n" +
    "The two-case structure is the point: a matched pair can be doves *or* rabbits, and both must be counted.",
  take: "Count favourable outcomes case by case when \"match\" can happen in more than one way. Any answer choice above 1 is not a probability."
},

"quant-live-5b#4": {
  steps: "Step 1 — Count the pairs: \\(\\binom{4}{2} = 6\\) ways to choose two of the four expressions.\n" +
    "Step 2 — The target form \\(x^2 - (by)^2\\) has no \\(xy\\) term and a leading coefficient of exactly 1 on \\(x^2\\). That is the difference-of-squares pattern, which requires a conjugate pair.\n" +
    "Step 3 — Check each pair. \\((x+y)(x-y) = x^2 - y^2\\) ✓ with \\(b = 1\\).\n" +
    "Step 4 — Any pair involving \\(5x - y\\) produces a leading \\(5x^2\\), which cannot match \\(x^2\\).\n" +
    "Step 5 — \\((x + 5y)\\) has no conjugate \\((x - 5y)\\) in the list, so every pair containing it leaves an \\(xy\\) term: for example \\((x+5y)(x-y) = x^2 + 4xy - 5y^2\\).\n" +
    "Step 6 — Exactly one of the six pairs works: probability \\(\\dfrac16\\).",
  fast: "Scan for conjugates rather than multiplying. A product equals \\(x^2 - (by)^2\\) exactly when the two factors are \\(x + by\\) and \\(x - by\\) — same leading coefficient 1, opposite signs, matching \\(y\\) coefficients.\n" +
    "Reading the list with that template in mind, only \\(x+y\\) and \\(x-y\\) pair up, and \\(5x - y\\) is disqualified on its leading coefficient alone.",
  traps: "(B) \\(\\tfrac13\\) counts two successful pairs, usually by admitting \\((x+5y)(5x-y)\\) on the false grounds that the coefficients \"cancel\" — expanding gives \\(5x^2 + 24xy - 5y^2\\).\n" +
    "(C) \\(\\tfrac14\\) uses a denominator of 4 (the number of expressions) rather than 6 (the number of pairs).\n" +
    "(A) \\(\\tfrac12\\) treats half the pairs as successful.\n" +
    "(D) \\(\\tfrac15\\) miscounts the pairs as 5.\n" +
    "Two things to get right: the denominator is \\(\\binom42 = 6\\), and the required form fixes the \\(x^2\\) coefficient at 1.",
  take: "\\((x + by)(x - by) = x^2 - (by)^2\\) requires a genuine conjugate pair. Check leading coefficients before expanding anything."
},

"quant-live-5b#5": {
  steps: "Step 1 — \\(n\\) and \\(n+1\\) are consecutive, so one is even and one is odd, and they share no common factor.\n" +
    "Step 2 — The odd one contributes no factor of 2 at all. So for the product to be divisible by \\(4 = 2^2\\), the even one must itself be a multiple of 4.\n" +
    "Step 3 — That happens when \\(n \\equiv 0 \\pmod 4\\) (making \\(n\\) the multiple of 4) or \\(n \\equiv 3 \\pmod 4\\) (making \\(n+1\\) the multiple of 4).\n" +
    "Step 4 — In 1 to 100 there are 25 integers with \\(n \\equiv 0\\) (namely \\(4, 8, \\dots, 100\\)) and 25 with \\(n \\equiv 3\\) (namely \\(3, 7, \\dots, 99\\)).\n" +
    "Step 5 — That is 50 of 100, a probability of \\(\\dfrac12\\).",
  fast: "Work modulo 4 and only four cases exist. \\(n \\equiv 0\\): works. \\(n \\equiv 1\\): \\(n+1 \\equiv 2\\), only one factor of 2 — fails. \\(n \\equiv 2\\): \\(n\\) itself has one factor of 2 — fails. \\(n \\equiv 3\\): \\(n+1 \\equiv 0\\) — works.\n" +
    "Two of the four residues succeed, and since 100 is a multiple of 4 the residues are perfectly balanced, giving \\(\\tfrac12\\) immediately.",
  traps: "(A) \\(\\tfrac14\\) counts only the case \\(n \\equiv 0\\), forgetting that \\(n+1\\) can be the multiple of 4 instead.\n" +
    "(E) \\(\\tfrac34\\) counts every case where the product is even, which is when \\(n\\) is even or odd — that is, always — or counts three residues.\n" +
    "(D) \\(\\tfrac23\\) and (B) \\(\\tfrac13\\) come from treating the divisibility as a one-in-three or two-in-three event.\n" +
    "The crucial structural fact is that consecutive integers cannot both be even, so the two factors of 2 must come from a single term.",
  take: "For consecutive integers, all factors of 2 come from one term. Classify \\(n\\) by residue modulo 4 and count how many residues succeed."
},

"quant-live-5b#6": {
  steps: "Step 1 — Total ways to choose 2 apples from 5: \\(\\binom{5}{2} = 10\\).\n" +
    "Step 2 — Count the selections containing the spoiled apple: fix it, then choose one of the 4 good apples — 4 ways.\n" +
    "Step 3 — Probability \\(= \\dfrac{4}{10} = \\dfrac25\\).",
  fast: "Think about it from the spoiled apple's point of view: 2 of the 5 apples are chosen, so the chance that any particular apple is among them is \\(\\tfrac25\\). No counting at all.\n" +
    "That symmetry argument generalises: choosing \\(k\\) from \\(n\\) gives each specific item probability \\(k/n\\) of being selected.",
  traps: "(A) \\(\\tfrac15\\) is the probability that a single randomly drawn apple is the spoiled one — the answer if only one apple were selected.\n" +
    "(E) \\(\\tfrac35\\) is the complement, the chance the spoiled apple is *not* selected.\n" +
    "(B) \\(\\tfrac3{10}\\) comes from counting 3 favourable pairs instead of 4.\n" +
    "(D) \\(\\tfrac12\\) treats the two outcomes as equally likely.\n" +
    "The \"simultaneously\" in the stem simply means order does not matter — it changes nothing about the answer, but it tells you to use combinations rather than sequences.",
  take: "When \\(k\\) items are chosen from \\(n\\), any specific item is selected with probability \\(k/n\\). That symmetry shortcut beats counting."
},

"quant-live-5b#7": {
  steps: "Step 1 — July 4 through July 8 inclusive is \\(8 - 4 + 1 = 5\\) days.\n" +
    "Step 2 — Each day rains with probability \\(\\tfrac12\\), independently, so every one of the \\(2^5 = 32\\) rain/no-rain patterns is equally likely.\n" +
    "Step 3 — Count the patterns with exactly 3 rainy days: choose which 3 of the 5 days rain, \\(\\binom{5}{3} = 10\\).\n" +
    "Step 4 — Probability \\(= \\dfrac{10}{32} = \\dfrac{5}{16}\\).",
  fast: "Because the probability is exactly \\(\\tfrac12\\), every pattern is equally likely and the whole question becomes a count: \\(\\binom53\\) out of \\(2^5\\).\n" +
    "That shortcut only works at \\(p = \\tfrac12\\); for any other \\(p\\) you would need \\(\\binom53 p^3 (1-p)^2\\).",
  traps: "(A) \\(\\tfrac1{32}\\) is the probability of one specific pattern, with the \\(\\binom53\\) count of arrangements never applied. This is the central trap.\n" +
    "(E) \\(\\tfrac34\\) has no basis in the count and simply reads as \"quite likely\".\n" +
    "(B) \\(\\tfrac2{25}\\) and (D) \\(\\tfrac8{25}\\) use a denominator of 25, from \\(5^2\\) rather than \\(2^5\\).\n" +
    "The inclusive date count is the other place to slip: July 4 to July 8 is five days, not four.",
  take: "Binomial probability multiplies the count of arrangements by the probability of one arrangement. At \\(p = \\tfrac12\\) it reduces to \\(\\binom nk / 2^n\\)."
},

"quant-live-5b#8": {
  steps: "Step 1 — Convert everything to working probabilities. Engine one fails with probability \\(\\tfrac13\\), so it works with probability \\(\\tfrac23\\). Engine two works with probability \\(\\tfrac34\\). Engine three works with probability \\(\\tfrac12\\).\n" +
    "Step 2 — The plane crashes when fewer than two engines work — that is, zero or exactly one.\n" +
    "Step 3 — All three fail: \\(\\tfrac13 \\times \\tfrac14 \\times \\tfrac12 = \\tfrac1{24}\\).\n" +
    "Step 4 — Exactly one works, taking each engine in turn as the survivor:\n" +
    "engine one only: \\(\\tfrac23 \\times \\tfrac14 \\times \\tfrac12 = \\tfrac2{24}\\);\n" +
    "engine two only: \\(\\tfrac13 \\times \\tfrac34 \\times \\tfrac12 = \\tfrac3{24}\\);\n" +
    "engine three only: \\(\\tfrac13 \\times \\tfrac14 \\times \\tfrac12 = \\tfrac1{24}\\).\n" +
    "Step 5 — Those sum to \\(\\tfrac6{24}\\).\n" +
    "Step 6 — Total crash probability: \\(\\tfrac1{24} + \\tfrac6{24} = \\tfrac7{24}\\).",
  fast: "Put everything over a denominator of 24 from the start — \\(\\tfrac13, \\tfrac14, \\tfrac12\\) multiply to \\(\\tfrac1{24}\\), and every case is a small multiple of that. Then each scenario is just a numerator: 1, 2, 3, 1.\n" +
    "The engines have *different* reliabilities, so the four crash scenarios must be enumerated separately — there is no binomial shortcut here.",
  traps: "(E) \\(\\tfrac{17}{24}\\) is the complement, the probability the plane stays airborne.\n" +
    "(B) \\(\\tfrac14\\) is \\(\\tfrac6{24}\\), counting only the \"exactly one works\" cases and forgetting the total failure.\n" +
    "(A) \\(\\tfrac7{12}\\) doubles the answer, from a denominator slip.\n" +
    "(C) \\(\\tfrac12\\) is a guess anchored on engine three.\n" +
    "The two conversions to watch: \"a \\(\\tfrac13\\) chance engine one fails\" is a *failure* probability while \"75% probability engine two works\" is a success probability — the stem deliberately mixes the two framings.",
  take: "Convert every stated probability into the same direction (all failures or all successes) before combining. With unequal probabilities, enumerate the qualifying cases individually."
},

"quant-live-5b#9": {
  steps: "Step 1 — Find the fleet size. The 40 air-conditioned cars are \\(80\\%\\) of the total, so the total is \\(40 \\div 0.80 = 50\\).\n" +
    "Step 2 — The customer will buy a car that is a convertible *or* has air conditioning, so we want the size of the union.\n" +
    "Step 3 — Inclusion–exclusion: \\(|AC \\cup \\text{convertible}| = 40 + 15 - 14\\), subtracting the 14 cars counted in both groups.\n" +
    "Step 4 — That is \\(41\\).\n" +
    "Step 5 — Probability \\(= \\dfrac{41}{50}\\).",
  fast: "Add the two groups and subtract the overlap once: \\(40 + 15 - 14 = 41\\). Equivalently, the 40 air-conditioned cars plus the single convertible that lacks air conditioning — \\(15 - 14 = 1\\) — gives 41 directly, which is the quicker mental route.\n" +
    "The fleet size comes from one division: 40 is \\(\\tfrac45\\) of 50.",
  traps: "(B) \\(\\tfrac{31}{50}\\) subtracts the overlap twice (\\(40 + 15 - 14 - 10\\)-style), or uses \\(40 - 14 + 5\\).\n" +
    "(C) \\(\\tfrac{37}{50}\\) and (A) \\(\\tfrac{21}{50}\\) come from mis-sizing the fleet — for instance treating 40 as the total or as \\(80\\%\\) of 40.\n" +
    "(E) \\(\\tfrac{47}{50}\\) adds the two groups without subtracting the overlap at all: \\(40 + 15 = 55\\) exceeds the fleet, which should immediately signal a double count.\n" +
    "The sanity check that catches most of these: the answer must be at least \\(\\tfrac{40}{50}\\), since every air-conditioned car qualifies.",
  take: "\"Either A or B\" is the union: \\(|A| + |B| - |A \\cap B|\\). Recover a total from a percentage by dividing, and check the union against the group sizes."
}

});

window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"quant-live-5b#10": {
  steps: "Step 1 — The three picks are independent, each from \\(\\{1, 2, 3, 4\\}\\), so there are \\(4^3 = 64\\) equally likely ordered triples.\n" +
    "Step 2 — Three lengths form a triangle exactly when the two shorter ones sum to *more* than the longest — equality gives a flat, degenerate figure, not a triangle.\n" +
    "Step 3 — Work through the multisets that fail, with the number of ordered triples each represents:\n" +
    "\\(\\{1,1,2\\}\\) (3), \\(\\{1,1,3\\}\\) (3), \\(\\{1,1,4\\}\\) (3) — the two 1s can never reach the third side.\n" +
    "Step 4 — \\(\\{1,2,3\\}\\) (6) and \\(\\{1,3,4\\}\\) (6) fail on equality: \\(1+2 = 3\\) and \\(1+3 = 4\\).\n" +
    "Step 5 — \\(\\{1,2,4\\}\\) (6) fails outright, and \\(\\{2,2,4\\}\\) (3) fails on equality.\n" +
    "Step 6 — Total failures: \\(3+3+3+6+6+6+3 = 30\\).\n" +
    "Step 7 — Probability \\(= \\dfrac{30}{64} = \\dfrac{15}{32}\\).",
  fast: "Enumerate by multiset, not by ordered triple — there are only twenty multisets, and each carries a multiplicity of 1, 3 or 6 depending on how many of its entries repeat.\n" +
    "Then apply one test per multiset: does the sum of the two smaller entries exceed the largest? The equality cases (\\(1{+}2{=}3\\), \\(1{+}3{=}4\\), \\(2{+}2{=}4\\)) are where this question is won, since they *fail*.",
  traps: "(B) \\(\\tfrac{13}{32}\\) counts 26 failures — it treats the three equality cases as valid triangles, which is the intended trap. A degenerate \"triangle\" with zero area is not a triangle.\n" +
    "(D) \\(\\tfrac{17}{32}\\) and (E) \\(\\tfrac{19}{32}\\) overcount, usually by mishandling the multiplicities: a triple with all three entries distinct represents 6 ordered outcomes, not 3.\n" +
    "(A) \\(\\tfrac{11}{32}\\) misses one of the failing multisets.\n" +
    "Note also that the three bags are separate, so repeats are allowed — \\(\\{1,1,2\\}\\) is a legitimate outcome.",
  take: "The triangle inequality is strict: \\(a + b > c\\), with equality failing. Enumerate multisets and weight each by its number of ordered arrangements (1, 3 or 6 for three picks)."
},

"quant-live-5b#11": {
  steps: "Step 1 — Among the integers 1 to 100 there are exactly 50 odd and 50 even, so each chosen integer is odd or even with probability \\(\\tfrac12\\).\n" +
    "Step 2 — Condition on the operation, each with probability \\(\\tfrac12\\).\n" +
    "Step 3 — If they are added, the sum is even exactly when the two parities match — both even or both odd. That is \\(\\tfrac14 + \\tfrac14 = \\tfrac12\\).\n" +
    "Step 4 — If they are multiplied, the product is odd only when both are odd, which happens with probability \\(\\tfrac14\\). So the product is even with probability \\(\\tfrac34\\).\n" +
    "Step 5 — Combine: \\(\\tfrac12 \\times \\tfrac12 + \\tfrac12 \\times \\tfrac34 = \\tfrac14 + \\tfrac38 = \\tfrac58\\).",
  fast: "Reduce everything to parity — the actual values are irrelevant, and 1 to 100 splits evenly. Then it is a two-branch weighted average of \\(\\tfrac12\\) and \\(\\tfrac34\\).\n" +
    "Since the two operations are equally likely, the answer is simply the midpoint of \\(\\tfrac12\\) and \\(\\tfrac34\\), which is \\(\\tfrac58\\) — no arithmetic beyond averaging.",
  traps: "(E) \\(\\tfrac78\\) comes from taking the product branch as \"even unless both odd\" and then adding rather than averaging the two branches.\n" +
    "(B) \\(\\tfrac12\\) uses only the addition branch, which is the more familiar parity rule.\n" +
    "(D) \\(\\tfrac23\\) and (A) \\(\\tfrac13\\) come from treating the parity outcomes as three equally likely cases (both odd, both even, mixed) — but \"mixed\" is twice as likely as either pure case.\n" +
    "The parity table is the safeguard: odd+odd and even+even are each \\(\\tfrac14\\), while mixed pairs total \\(\\tfrac12\\).",
  take: "Parity questions reduce to a four-cell table of (odd, even) pairs, each with probability \\(\\tfrac14\\). Weight the branches by the probability of each operation."
},

"quant-live-5b#12": {
  steps: "Step 1 — She splits her money into three equal thirds, so losing \"no more than \\(\\tfrac13\\)\" means at most one investment becomes worthless.\n" +
    "Step 2 — Each investment survives with probability \\(0.8\\) and fails with probability \\(0.2\\), independently.\n" +
    "Step 3 — None fails: \\(0.8^3 = 0.512\\).\n" +
    "Step 4 — Exactly one fails: choose which one (3 ways), times \\(0.2 \\times 0.8^2 = 0.2 \\times 0.64 = 0.128\\), giving \\(3 \\times 0.128 = 0.384\\).\n" +
    "Step 5 — Total: \\(0.512 + 0.384 = 0.896\\), approximately \\(90\\%\\).",
  fast: "Translate the money condition into a count first — equal thirds means \"at most one failure\" — and the rest is a two-term binomial.\n" +
    "For a rough check, the expected number of failures is \\(0.6\\), so two or more failures should be fairly unlikely; the complement \\(3(0.04)(0.8) + 0.008 = 0.104\\) confirms about \\(10\\%\\), leaving \\(90\\%\\).",
  traps: "(B) 80% is \\(0.8\\) itself — the survival probability of a single investment, mistaken for the portfolio outcome.\n" +
    "(D) 60% and (C) 70% come from counting only the \"none fails\" case (\\(51\\%\\)) and rounding upward, or from a partial binomial.\n" +
    "(E) 40% has no basis in the computation.\n" +
    "The step people misread is the money-to-count translation: losing exactly \\(\\tfrac13\\) is *allowed* by \"no more than \\(\\tfrac13\\)\", so the one-failure case must be included.",
  take: "Convert a fractional-loss condition into a count of failures, then sum the binomial terms. \"No more than\" is inclusive."
},

"quant-live-5b#13": {
  steps: "Step 1 — Let \\(u\\) be the number of up days out of 5; the other \\(5 - u\\) are down days.\n" +
    "Step 2 — The net change is \\(u - (5 - u) = 2u - 5\\) dollars.\n" +
    "Step 3 — Set that equal to 3: \\(2u - 5 = 3\\), so \\(u = 4\\).\n" +
    "Step 4 — Count the paths with exactly 4 up days: \\(\\binom{5}{4} = 5\\).\n" +
    "Step 5 — All \\(2^5 = 32\\) up/down paths are equally likely, so the probability is \\(\\dfrac{5}{32}\\).",
  fast: "The net-change equation \\(2u - n\\) is the key: with 5 steps of \\(\\pm 1\\), the reachable net changes are \\(-5, -3, -1, 1, 3, 5\\), and \\(+3\\) corresponds to 4 ups. Then it is \\(\\binom54 / 2^5\\).\n" +
    "Notice that the parity of the net change must match the parity of the number of steps — with 5 steps you can never end up an even number of dollars from where you started.",
  traps: "(A) \\(\\tfrac1{16}\\) is \\(2/32\\), and (B) \\(\\tfrac18\\) is \\(4/32\\) — both from miscounting \\(\\binom54\\), which is 5, not 2 or 4.\n" +
    "(D) \\(\\tfrac9{32}\\) and (E) \\(\\tfrac38\\) come from solving for the wrong \\(u\\), usually \\(u = 3\\) (which gives a net of \\(+1\\), not \\(+3\\)) — \\(\\binom53 = 10\\), giving \\(\\tfrac{10}{32}\\).\n" +
    "The equation \\(2u - 5 = 3\\) is what prevents that: \"up by 3\" does not mean \"3 up days\".",
  take: "With \\(n\\) steps of \\(\\pm 1\\), the net displacement is \\(2u - n\\). Solve for \\(u\\) first, then count \\(\\binom nu\\) out of \\(2^n\\)."
},

"quant-live-5b#14": {
  steps: "Step 1 — Total reassignments of 4 keys to 4 locks: \\(4! = 24\\), all equally likely.\n" +
    "Step 2 — For exactly two keys to fit, choose which two are correct: \\(\\binom{4}{2} = 6\\) ways.\n" +
    "Step 3 — The remaining two keys must *both* be wrong. With two items there is exactly one way for neither to be in its own place — they swap.\n" +
    "Step 4 — So the favourable count is \\(6 \\times 1 = 6\\).\n" +
    "Step 5 — Probability \\(= \\dfrac{6}{24} = \\dfrac14\\).",
  fast: "\"Exactly \\(k\\) correct\" always factors as (choose which \\(k\\) are correct) × (derangements of the rest). Here the second factor is the number of derangements of 2, which is 1.\n" +
    "Knowing the small derangement values — \\(D_1 = 0\\), \\(D_2 = 1\\), \\(D_3 = 2\\), \\(D_4 = 9\\) — makes every question of this family a ten-second computation.",
  traps: "(D) \\(\\tfrac38\\) counts 9 favourable outcomes, which is \\(\\binom42 \\times\\) something larger — it comes from allowing the other two keys to be assigned freely (\\(2! = 2\\) ways), which double-counts the case where all four are correct.\n" +
    "(E) \\(\\tfrac12\\) is the same over-count taken one step further, treating half of all reassignments as favourable.\n" +
    "(A) \\(\\tfrac18\\) and (B) \\(\\tfrac16\\) come from miscounting the total as 16 or from using \\(\\binom42\\) alone over 24.\n" +
    "The word \"exactly\" is what forces the derangement condition on the remaining keys — \"at least two\" would be a different count.",
  take: "\"Exactly \\(k\\) fixed points\" = \\(\\binom nk \\times D_{n-k}\\). The small derangement numbers are \\(D_2 = 1\\), \\(D_3 = 2\\), \\(D_4 = 9\\)."
},

"quant-live-5b#15": {
  steps: "Step 1 — The 99 uniform numbers and the exact identities of the first four players are irrelevant. Condition on *which* four players leave first — whatever that set is, the argument is the same.\n" +
    "Step 2 — Those four players leave in some order, and all \\(4! = 24\\) orders are equally likely because the whole run-off is uniformly random.\n" +
    "Step 3 — Exactly one of those 24 orders lists them by increasing uniform number.\n" +
    "Step 4 — Probability \\(= \\dfrac{1}{24}\\).",
  fast: "Conditioning on the set is the whole technique: once you fix which four players are involved, their relative order is uniform over \\(4!\\) possibilities, and precisely one is increasing.\n" +
    "Because the answer is the same for every possible set of four, it is the answer overall — the 99 never enters the calculation.",
  traps: "(E) \\(\\tfrac1{16}\\) is \\(\\tfrac1{2^4}\\), from treating each of four comparisons as an independent coin flip. The comparisons are not independent.\n" +
    "(A) \\(\\tfrac1{64}\\) is \\(\\tfrac1{4^3}\\) or \\(\\tfrac1{2^6}\\), from a related over-counting.\n" +
    "(B) \\(\\tfrac1{48}\\) and (C) \\(\\tfrac1{36}\\) come from mixing \\(4!\\) with an extra factor.\n" +
    "The instinct to fight is the feeling that 99 players must matter. They do not — only the relative order of the four who happen to leave first.",
  take: "For \\(k\\) randomly ordered items, the probability they appear in one specific order is \\(1/k!\\). Condition on the set to make the population size irrelevant."
},

"quant-live-5b#16": {
  steps: "Step 1 — Option one wins with probability \\(p\\).\n" +
    "Step 2 — Option two wins if he makes at least 2 of 3: \\(3p^2(1-p) + p^3 = 3p^2 - 3p^3 + p^3 = 3p^2 - 2p^3\\).\n" +
    "Step 3 — Three throws is better when \\(3p^2 - 2p^3 > p\\). Divide by \\(p\\) (positive): \\(3p - 2p^2 > 1\\).\n" +
    "Step 4 — Rearrange: \\(2p^2 - 3p + 1 < 0\\), which factors as \\((2p - 1)(p - 1) < 0\\).\n" +
    "Step 5 — That holds exactly when \\(\\tfrac12 < p < 1\\). So the answer to the question is yes precisely on that interval.\n" +
    "Step 6 — Statement (1): \\(p < 0.7\\) allows \\(p = 0.3\\) (answer no) and \\(p = 0.6\\) (answer yes) — [[not sufficient]].\n" +
    "Step 7 — Statement (2): \\(p > 0.6\\) places \\(p\\) above the \\(\\tfrac12\\) threshold, so for any genuine shooting percentage the answer is yes — [[sufficient]].",
  fast: "Do the algebra once and the whole question becomes \"is \\(p\\) above \\(\\tfrac12\\)?\". The factorisation \\((2p-1)(p-1) < 0\\) makes the threshold visible without any case testing.\n" +
    "Then each statement is a single comparison against \\(0.5\\): \\(p < 0.7\\) straddles it, \\(p > 0.6\\) clears it.",
  traps: "(A) inverts the statements — \\(p < 0.7\\) is the one that straddles the threshold and so decides nothing.\n" +
    "(C) is the answer of someone who solves the inequality but then insists on narrowing \\(p\\) to a single value; a yes/no question needs only a consistent answer.\n" +
    "(D) accepts (1) as well.\n" +
    "(E) rejects both.\n" +
    "One technical note on the upper end: at \\(p = 1\\) the two options are exactly equal rather than one being better, which is why the interval is open at 1. The question treats \\(p\\) as a genuine shooting percentage below certainty, so statement (2) resolves it.",
  take: "Turn a comparison of two probability expressions into a single inequality and factor it. The threshold, not the value of \\(p\\), is what each statement must clear."
},

"quant-live-5b#17": {
  steps: "Step 1 — Let there be \\(n\\) stones, with \\(\\tfrac{2n}{3}\\) diamonds and \\(\\tfrac n3\\) rubies. \\(n\\) must be a multiple of 3.\n" +
    "Step 2 — The chance of drawing two diamonds without replacement is \\(\\dfrac{\\binom{2n/3}{2}}{\\binom n2}\\), and we are told it equals \\(\\tfrac5{12}\\).\n" +
    "Step 3 — Test the small multiples of 3. \\(n = 6\\) gives \\(\\dfrac{\\binom42}{\\binom62} = \\dfrac{6}{15} = \\tfrac25\\) — too big.\n" +
    "Step 4 — \\(n = 9\\) gives \\(\\dfrac{\\binom62}{\\binom92} = \\dfrac{15}{36} = \\dfrac5{12}\\) ✓.\n" +
    "Step 5 — So the bag holds 6 diamonds and 3 rubies.\n" +
    "Step 6 — Two rubies: \\(\\dfrac{\\binom32}{\\binom92} = \\dfrac{3}{36} = \\dfrac1{12}\\).",
  fast: "Sequential probabilities are quicker than binomials here: \\(\\tfrac{2}{3} \\times \\tfrac{2n/3 - 1}{n - 1} = \\tfrac{5}{12}\\) forces \\(\\tfrac{2n/3 - 1}{n-1} = \\tfrac58\\), and \\(n = 9\\) satisfies it.\n" +
    "Testing \\(n = 6, 9, 12\\) takes about twenty seconds and is more reliable than solving the quadratic — and the without-replacement structure means the answer really does depend on \\(n\\), not just on the two-thirds ratio.",
  traps: "(A) \\(\\tfrac5{36}\\) and (B) \\(\\tfrac5{24}\\) carry the 5 from the given probability, as though the ruby answer were a simple rescaling of the diamond one. It is not — the counts enter quadratically.\n" +
    "(D) \\(\\tfrac16\\) is \\(\\left(\\tfrac13\\right)^2 \\times \\tfrac32\\)-flavoured, or the *with*-replacement answer \\(\\left(\\tfrac13\\right)^2 = \\tfrac19\\) adjusted.\n" +
    "(E) \\(\\tfrac14\\) is \\(\\tfrac13 \\times \\tfrac34\\)-style arithmetic.\n" +
    "The reason \\(n\\) must be found at all is the \"without replacement\": with replacement the answer would be \\(\\tfrac49\\) regardless of bag size, and \\(\\tfrac5{12} \\ne \\tfrac49\\) is precisely the clue that the bag is small.",
  take: "Without replacement, probabilities depend on the actual counts, not just the ratio. Use the given probability to pin the bag size, then recompute for the other colour."
},

"quant-live-5b#18": {
  steps: "Step 1 — Factor the quadratic: \\(p^2 - 13p + 40 = (p - 5)(p - 8)\\), since \\(5 \\times 8 = 40\\) and \\(5 + 8 = 13\\).\n" +
    "Step 2 — A product of two factors is negative exactly when they have opposite signs, which for \\((p-5)(p-8)\\) happens strictly between the roots.\n" +
    "Step 3 — So \\(q < 0\\) exactly when \\(5 < p < 8\\).\n" +
    "Step 4 — The integers strictly between 5 and 8 are 6 and 7 — two values.\n" +
    "Step 5 — \\(p\\) ranges over the 10 integers from 1 to 10, so the probability is \\(\\dfrac{2}{10} = \\dfrac15\\).",
  fast: "An upward parabola is negative only between its roots, so factoring is the entire calculation: roots at 5 and 8, and the integers in between are 6 and 7.\n" +
    "There is no need to evaluate \\(q\\) for any value of \\(p\\) — the sign chart does it all.",
  traps: "(C) \\(\\tfrac25\\) counts four values, typically by including the roots 5 and 8 themselves. At those points \\(q = 0\\), which is not less than zero.\n" +
    "(E) \\(\\tfrac3{10}\\) counts three, usually by including one endpoint.\n" +
    "(D) \\(\\tfrac35\\) counts the values *outside* the roots, where the parabola is positive.\n" +
    "(A) \\(\\tfrac1{10}\\) finds only one qualifying integer.\n" +
    "The strictness of \\(q < 0\\) is what excludes the endpoints — a boundary check worth making explicitly.",
  take: "An upward parabola is negative strictly between its roots. Factor, mark the roots, and count the integers inside — excluding the roots when the inequality is strict."
}

});
