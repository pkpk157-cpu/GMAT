/* GMAT Prep — Data Insights expansion, second instalment.
   Source: "DS Traps.pdf" in the user's Drive (01. GMAT / 04. Study Content /
   03. Data Insights) — 30 questions chosen to cover the standard Data
   Sufficiency traps, with a printed answer key. Every key below was
   independently re-derived by exhaustive search or case analysis before the
   question was accepted (see verify/ds-traps-derive.py); the two agree
   throughout.
   Eleven of the thirty were dropped: the source's geometry items are redacted
   in the PDF itself, and OCR flattened the absolute-value bars and exponents
   in several others past safe recovery.
   Appends to window.GMAT_SETS_NEW, which index.html merges into GMAT_SETS. */
(function () {
  var DS = [
    "(1) ALONE sufficient, (2) alone not",
    "(2) ALONE sufficient, (1) alone not",
    "BOTH together sufficient, neither alone",
    "EACH alone sufficient",
    "Together still NOT sufficient"
  ];
  var Q = function (n, topic, correct, text, hint, expl, level) {
    return { n: n, topic: topic, correct: correct, options: 5, level: level || "hard",
             text: text, choices: DS, hint: hint, expl: expl };
  };
  var VAL = "Value questions", YN = "Yes / No questions", TRAP = "Common traps & C-trap";

  window.GMAT_SETS_NEW = (window.GMAT_SETS_NEW || []).concat([{
    id: "di-ds-traps",
    title: "Data Sufficiency — Traps & Techniques",
    section: "data",
    source: "DS Traps (printed key, every answer independently re-derived)",
    questions: [

      Q(1, YN, "A",
        "If $1,000 is deposited in a certain bank account and remains there along with any accrued interest, the dollar amount of interest \\(I\\) earned in the first \\(n\\) years is \\(I = 1000\\left[\\left(1+\\tfrac{r}{100}\\right)^{n} - 1\\right]\\), where \\(r\\) percent is the annual rate. Is the annual interest rate greater than 8%?\n(1) The deposit earns a total of $210 in interest in the first 2 years.\n(2) \\(\\left(1+\\tfrac{r}{100}\\right)^{2} > 1.15\\)",
        "You never have to find \\(r\\) — only whether it clears 8%. What is \\(1.08^2\\)?",
        "The benchmark is \\(1.08^2 = 1.1664\\).\n(1) \\(210 = 1000[(1+\\tfrac{r}{100})^2 - 1]\\) gives \\((1+\\tfrac{r}{100})^2 = 1.21\\), so \\(r = 10\\). Whatever that number had turned out to be, one value of \\(r\\) settles the question — a definite answer. Sufficient.\n(2) \"Greater than 1.15\" straddles the benchmark: 1.155 puts \\(r\\) below 8%, 1.17 puts it above. Not sufficient.\nThe trap is treating 1.15 as though it were the 8% threshold; the threshold is 1.1664.\nAnswer: A."),

      Q(2, YN, "D",
        "If \\(x\\) and \\(y\\) are positive integers, is \\(x\\) a prime number?\n(1) \\(|x-2| < 2-y\\)\n(2) \\(x + y - 3 = |1-y|\\)",
        "An absolute value is never negative. What does that force on the other side?",
        "(1) The left side is at least 0, so \\(2 - y > 0\\) and \\(y < 2\\). Since \\(y\\) is a positive integer, \\(y = 1\\). Then \\(|x-2| < 1\\) gives \\(1 < x < 3\\), so \\(x = 2\\) — prime. A definite YES. Sufficient.\n(2) \\(y\\) is a positive integer, so \\(1 - y \\le 0\\) and \\(|1-y| = y - 1\\). Then \\(x + y - 3 = y - 1\\), so \\(x = 2\\) — prime again. Sufficient.\nBoth statements pin \\(x\\) to the same value, which is what a well-formed question does.\nAnswer: D."),

      Q(3, YN, "D",
        "If \\(y\\) is an integer and \\(y = x + |x|\\), is \\(y = 0\\)?\n(1) \\(x < 0\\)\n(2) \\(y < 1\\)",
        "Work out the range of \\(x + |x|\\) before reading either statement.",
        "For \\(x \\le 0\\), \\(x + |x| = 0\\); for \\(x > 0\\) it is \\(2x > 0\\). So \\(y\\) is never negative.\n(1) \\(x < 0\\) gives \\(y = 0\\) directly. Sufficient.\n(2) \\(y\\) is a non-negative integer less than 1, so \\(y = 0\\). Sufficient.\nStatement (2) looks weaker than it is — the work done on the stem is what makes it decisive.\nAnswer: D."),

      Q(4, YN, "A",
        "The integers \\(m\\) and \\(p\\) are such that \\(p > m > 2\\) and \\(m\\) is not a factor of \\(p\\). If \\(r\\) is the remainder when \\(p\\) is divided by \\(m\\), is \\(r > 1\\)?\n(1) The greatest common factor of \\(m\\) and \\(p\\) is 2.\n(2) The least common multiple of \\(m\\) and \\(p\\) is 30.",
        "If both numbers are even, what can the remainder be?",
        "(1) A greatest common factor of 2 makes both \\(m\\) and \\(p\\) even, so \\(r = p - qm\\) is even. It cannot be 0, because \\(m\\) is not a factor of \\(p\\). The smallest even remainder left is 2, so \\(r > 1\\) — a definite YES. Sufficient.\n(2) Pairs with a least common multiple of 30 behave differently: 6 divided by 5 leaves 1 (NO), while 15 divided by 10 leaves 5 (YES). Not sufficient.\nAnswer: A."),

      Q(5, YN, "A",
        "If \\(x\\), \\(y\\) and \\(z\\) are integers and \\(xy + z\\) is an odd integer, is \\(x\\) an even integer?\n(1) \\(xy + xz\\) is an even integer.\n(2) \\(y + xz\\) is an odd integer.",
        "Combine each statement with the stem by subtracting or adding, then read the parity.",
        "(1) Subtract the stem from the statement: \\((xy + xz) - (xy + z) = z(x-1)\\), which is even minus odd, so odd. A product is odd only when both factors are odd, so \\(x - 1\\) is odd and \\(x\\) is even — a definite YES. Sufficient.\n(2) Add instead: \\((xy+z) + (y+xz) = (x+1)(y+z)\\), which is odd plus odd, so even. An even product tells you one factor is even, not which — \\(x\\) can be either parity. Not sufficient.\nAnswer: A."),

      Q(6, YN, "B",
        "At least 100 students at a certain high school study Japanese. If 4 percent of the students at the school who study French also study Japanese, do more students study French than Japanese?\n(1) 16 students at the school study both French and Japanese.\n(2) 10 percent of the students who study Japanese also study French.",
        "The overlap can be written from either side. Setting the two expressions equal gives a ratio.",
        "Write the overlap two ways: it is \\(0.04F\\) from the stem.\n(1) \\(0.04F = 16\\) gives \\(F = 400\\), but \\(J\\) is only known to be at least 100 — it could be 200 or 2,000. Not sufficient.\n(2) The overlap is also \\(0.10J\\), so \\(0.04F = 0.10J\\) and \\(F = 2.5J\\). The actual counts never matter: \\(F > J\\) is a definite YES. Sufficient.\nThe question asks which is larger, not by how much, so a ratio is enough and a raw count is not.\nAnswer: B."),

      Q(7, YN, "C",
        "Is \\(x\\) negative?\n(1) \\(x^{2}\\) is positive.\n(2) \\(x^{3}\\) is non-positive.",
        "\"Non-positive\" includes zero. Which statement rules zero out?",
        "(1) \\(x^2 > 0\\) only tells you \\(x \\ne 0\\); it could be 3 or −3. Not sufficient.\n(2) \\(x^3 \\le 0\\) means \\(x \\le 0\\), which still allows \\(x = 0\\). Not sufficient.\n(1)+(2) \\(x \\ne 0\\) and \\(x \\le 0\\) leave \\(x < 0\\) — a definite YES.\nThe trap is reading \"non-positive\" as \"negative\"; the single value they differ on is what makes (2) fall short alone.\nAnswer: C."),

      Q(8, VAL, "D",
        "If \\(n\\) is a positive integer, what is the greatest common factor of \\(n\\) and 64?\n(1) No two different factors of \\(n\\) sum to a prime number.\n(2) The greatest common factor of \\(n\\) and 2,310 is 165.",
        "64 is \\(2^{6}\\), so the only question is whether \\(n\\) is even.",
        "\\(64 = 2^6\\), so its only odd factor is 1. If \\(n\\) is odd the greatest common factor is 1; if \\(n\\) is even it is larger.\n(1) Every number has 1 as a factor. If \\(n\\) were even, 2 would also be a factor, and \\(1 + 2 = 3\\) is prime — which the statement forbids. So \\(n\\) is odd and the answer is 1. Sufficient.\n(2) 2,310 is even. If \\(n\\) were even, the greatest common factor of \\(n\\) and 2,310 would be even; it is 165, which is odd. So \\(n\\) is odd and again the answer is 1. Sufficient.\nNeither statement gives \\(n\\), and neither needs to.\nAnswer: D."),

      Q(9, YN, "C",
        "Is \\(\\tfrac{n}{18}\\) an integer?\n(1) \\(\\tfrac{5n}{18}\\) is an integer.\n(2) \\(\\tfrac{3n}{18}\\) is an integer.",
        "Nothing says \\(n\\) is an integer. That is the whole question.",
        "(1) \\(\\tfrac{5n}{18} = k\\) gives \\(n = \\tfrac{18k}{5}\\). With \\(k = 5\\), \\(n = 18\\) and the answer is YES; with \\(k = 1\\), \\(n = 3.6\\) and the answer is NO. Not sufficient.\n(2) \\(\\tfrac{3n}{18} = \\tfrac{n}{6} = m\\) gives \\(n = 6m\\). With \\(m = 3\\), \\(n = 18\\), YES; with \\(m = 1\\), \\(n = 6\\), NO. Not sufficient.\n(1)+(2) From (2), \\(n = 6m\\). Substituting into (1), \\(\\tfrac{30m}{18} = \\tfrac{5m}{3}\\) is an integer, so \\(m\\) is a multiple of 3 and \\(n\\) is a multiple of 18 — a definite YES.\nAssuming \\(n\\) is an integer makes both statements look sufficient on their own.\nAnswer: C."),

      Q(10, VAL, "E",
        "The sum of \\(n\\) consecutive positive integers is 45. What is the value of \\(n\\)?\n(1) \\(n\\) is even.\n(2) \\(n < 9\\)",
        "List the runs that actually sum to 45 before touching the statements.",
        "Two runs work: \\(22 + 23 = 45\\) with \\(n = 2\\), and \\(5+6+7+8+9+10 = 45\\) with \\(n = 6\\). There is also \\(n = 3\\) (14+15+16), \\(n = 5\\) (7+8+9+10+11) and \\(n = 9\\) (1 through 9).\n(1) Both 2 and 6 are even. Not sufficient.\n(2) Both 2 and 6 are under 9. Not sufficient.\n(1)+(2) Both survive the pair of conditions, so \\(n\\) is still not determined.\nAnswer: E."),

      Q(11, YN, "E",
        "Is \\(x\\) a negative number?\n(1) \\(x^{2}\\) is a positive number.\n(2) \\(x \\cdot |y|\\) is not a positive number.",
        "\"Not positive\" allows zero — and \\(|y|\\) can be zero.",
        "(1) \\(x \\ne 0\\), but the sign is open. Not sufficient.\n(2) \\(x|y| \\le 0\\). If \\(y \\ne 0\\) then \\(x \\le 0\\); but if \\(y = 0\\) the product is 0 for [[any]] \\(x\\), including positive ones. Not sufficient.\n(1)+(2) Take \\(x = 5\\), \\(y = 0\\): \\(x^2 > 0\\) and \\(x|y| = 0\\), which is not positive — the answer is NO. Take \\(x = -5\\), \\(y = 2\\): both statements hold and the answer is YES.\nThe zero case in \\(|y|\\) is the whole trap.\nAnswer: E."),

      Q(12, VAL, "B",
        "What is \\(x\\)?\n(1) \\(|x| < 2\\)\n(2) \\(|x| = 3x - 2\\)",
        "Split the absolute value into its two cases, then check each root against its own condition.",
        "(1) An inequality gives a range, not a value. Not sufficient.\n(2) If \\(x \\ge 0\\): \\(x = 3x - 2\\), so \\(x = 1\\), which satisfies \\(x \\ge 0\\) — valid. If \\(x < 0\\): \\(-x = 3x - 2\\), so \\(x = \\tfrac12\\), which contradicts \\(x < 0\\) — rejected. Only \\(x = 1\\) survives. Sufficient.\nDiscarding the root that fails its own case is the step people skip.\nAnswer: B."),

      Q(13, VAL, "C",
        "What is the value of \\(y\\)?\n(1) \\(3|x^{2}-4| = y - 2\\)\n(2) \\(|3-y| = 11\\)",
        "Statement (1) has two variables — but it still tells you something about \\(y\\).",
        "(1) Two variables, so no value for \\(y\\). But the left side is at least 0, so \\(y - 2 \\ge 0\\) and \\(y \\ge 2\\). Not sufficient on its own.\n(2) \\(3 - y = 11\\) gives \\(y = -8\\); \\(3 - y = -11\\) gives \\(y = 14\\). Two values. Not sufficient.\n(1)+(2) Only 14 satisfies \\(y \\ge 2\\).\nA statement that cannot produce a value can still eliminate one.\nAnswer: C."),

      Q(14, VAL, "D",
        "If the average (arithmetic mean) of four distinct positive integers is 60, how many of these four are less than 50?\n(1) The median of the three largest integers is 51 and the sum of the two largest is 190.\n(2) The median of the four integers is 50.",
        "Turn the average into a sum straight away.",
        "The four distinct integers \\(a<b<c<d\\) sum to 240.\n(1) The median of \\(\\{b,c,d\\}\\) is \\(c = 51\\), and \\(c + d = 190\\). Then \\(a + b = 240 - 190 = 50\\), and since both are positive with \\(a < b\\), both are under 50. Exactly two. Sufficient.\n(2) The median of four terms is \\(\\tfrac{b+c}{2} = 50\\), and \\(b < c\\), so \\(b < 50 < c\\). Then \\(a < b < 50\\) while \\(c\\) and \\(d\\) exceed 50. Exactly two again. Sufficient.\nAnswer: D."),

      Q(15, YN, "B",
        "One kilogram of a certain coffee blend consists of \\(X\\) kilogram of type I and \\(Y\\) kilogram of type II. The cost of the blend is \\(C\\) dollars per kilogram, where \\(C = 6.5X + 8.5Y\\). Is \\(X < 0.8\\)?\n(1) \\(Y > 0.15\\)\n(2) \\(C \\ge 7.30\\)",
        "The stem hides an equation: the two parts make one kilogram.",
        "Since \\(X + Y = 1\\), the cost is \\(C = 6.5X + 8.5(1-X) = 8.5 - 2X\\).\n(1) \\(Y > 0.15\\) gives \\(X < 0.85\\). That allows \\(X = 0.84\\) (NO) and \\(X = 0.5\\) (YES). Not sufficient.\n(2) \\(8.5 - 2X \\ge 7.30\\) gives \\(X \\le 0.6\\), which is under 0.8 — a definite YES. Sufficient.\nStatement (1) lands just outside the threshold, which is exactly how a near-miss statement is built.\nAnswer: B."),

      Q(16, VAL, "B",
        "Marta bought several pencils. If each pencil was either a 23-cent pencil or a 21-cent pencil, how many 23-cent pencils did Marta buy?\n(1) Marta bought a total of 6 pencils.\n(2) The total value of the pencils Marta bought was 130 cents.",
        "One equation in two integer unknowns sometimes has exactly one solution.",
        "(1) Six pencils split many ways — 0 through 6 of them at 23 cents. Not sufficient.\n(2) \\(21a + 23b = 130\\) with \\(a, b\\) non-negative integers. Testing \\(b = 0,1,2,3,4,5\\) leaves only \\(b = 2\\), \\(a = 4\\). A unique answer. Sufficient.\nThe instinct that one equation cannot fix two unknowns is wrong once the unknowns must be non-negative integers.\nAnswer: B."),

      Q(17, VAL, "B",
        "Joanna bought only $0.15 stamps and $0.29 stamps. How many $0.15 stamps did she buy?\n(1) She bought an equal number of $0.15 stamps and $0.29 stamps.\n(2) She bought $4.40 worth of stamps.",
        "Same shape as the pencils — check whether the integer solution is unique.",
        "(1) Equal numbers could be 5 and 5, or 100 and 100; without a total there is nothing to pin down. Not sufficient.\n(2) \\(15a + 29b = 440\\). Working modulo 15, \\(29b \\equiv -b\\) and \\(440 \\equiv 5\\), so \\(b \\equiv 10 \\pmod{15}\\). The only value small enough is \\(b = 10\\), which gives \\(a = 10\\). Unique. Sufficient.\nNote how (1) becomes tempting once you know the answer is 10 and 10 — but it could not have told you that.\nAnswer: B."),

      Q(18, YN, "E",
        "If \\(x\\) is a non-negative integer, is \\(x! + x + 1\\) a prime number?\n(1) \\(x < 10\\)\n(2) \\(x\\) is even.",
        "Test the small cases, and do not stop at the first three.",
        "(1) \\(x = 2\\) gives \\(2 + 2 + 1 = 5\\), prime (YES); \\(x = 3\\) gives \\(6 + 3 + 1 = 10\\), not prime (NO). Not sufficient.\n(2) \\(x = 2 \\to 5\\), \\(x = 4 \\to 29\\), \\(x = 6 \\to 727\\) — all prime, which is exactly the point at which people stop. But \\(x = 8\\) gives \\(40320 + 8 + 1 = 40329\\), and both \\(8!\\) and 9 are divisible by 3, so the sum is too. Not prime. Not sufficient.\n(1)+(2) \\(x\\) even and under 10 still admits \\(x = 2\\) (YES) and \\(x = 8\\) (NO).\nAnswer: E."),

      Q(19, YN, "E",
        "Is \\(|x-1| < 1\\)?\n(1) \\((x-1)^{2} \\le 1\\)\n(2) \\(x^{2} - 1 > 0\\)",
        "Note the difference between \\(\\le\\) and \\(<\\).",
        "(1) Taking square roots of a non-negative inequality gives \\(|x-1| \\le 1\\). That is compatible with \\(|x-1| < 1\\) (YES) and with \\(|x-1| = 1\\), at \\(x = 0\\) or \\(x = 2\\) (NO). Not sufficient.\n(2) \\(x^2 > 1\\) means \\(|x| > 1\\). At \\(x = 1.5\\), \\(|x-1| = 0.5 < 1\\) (YES); at \\(x = 3\\), \\(|x-1| = 2\\) (NO). Not sufficient.\n(1)+(2) \\(x = 1.5\\) and \\(x = 2\\) both satisfy the pair and answer differently.\nOne symbol — \\(\\le\\) rather than \\(<\\) — is the entire difference between sufficient and not.\nAnswer: E.")
    ]
  }]);
})();
