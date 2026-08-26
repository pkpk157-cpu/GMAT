/* GMAT Prep — Data Insights expansion.
   Source: "Data Sufficiency Basics Extra Questions.pdf" in the user's Drive
   (01. GMAT / 04. Study Content / 03. Data Insights). That document prints its
   own answer key; every key below was independently re-derived by case analysis
   before the question was accepted, and the two agree throughout.
   Eleven of the source's forty questions were dropped: PDF extraction lost the
   numerator/denominator of a stacked fraction in each of them (e.g. "the 3/4
   amount of time" came through as "the 34 amount of time"), which changes what
   the question asks. Those are listed in verify/source-keys.js as unrecovered.
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
    return { n: n, topic: topic, correct: correct, options: 5, level: level || "medium",
             text: text, choices: DS, hint: hint, expl: expl };
  };
  var VAL = "Value questions", YN = "Yes / No questions";

  window.GMAT_SETS_NEW = (window.GMAT_SETS_NEW || []).concat([{
    id: "di-ds-extra",
    title: "Data Sufficiency — Core Drill",
    section: "data",
    source: "Data Sufficiency Basics Extra Questions (printed key, independently re-derived)",
    questions: [

      Q(1, VAL, "C",
        "If a certain vase contains only roses and tulips, how many tulips are there in the vase?\n(1) The number of roses in the vase is 4 times the number of tulips in the vase.\n(2) There are a total of 20 flowers in the vase.",
        "A ratio fixes the split; a total fixes the size. You need both.",
        "Let \\(t\\) be tulips and \\(r\\) roses.\n(1) \\(r = 4t\\) — a ratio with no total, so \\(t\\) could be 1, 5, 100. Not sufficient.\n(2) \\(r + t = 20\\) — a total with no split. Not sufficient.\n(1)+(2) \\(4t + t = 20\\), so \\(t = 4\\). A unique value.\nAnswer: C."),

      Q(2, VAL, "A",
        "The cost of 10 pounds of apples and 2 pounds of grapes was $12. What was the cost per pound of apples?\n(1) The cost per pound of grapes was $2.\n(2) The cost of 2 pounds of apples was less than the cost of 1 pound of grapes.",
        "The stem already gives one equation in two unknowns.",
        "From the stem, \\(10a + 2g = 12\\).\n(1) \\(g = 2\\) gives \\(10a + 4 = 12\\), so \\(a = 0.80\\). Sufficient.\n(2) \\(2a < g\\) is an inequality. Combined with the stem it leaves a range — \\(a\\) could be 0.50 or 0.80. Not sufficient.\nAnswer: A."),

      Q(3, VAL, "E",
        "What was the median annual salary for the employees at Company X last year?\n(1) Last year there were 29 employees at Company X.\n(2) Last year 12 employees at Company X had an annual salary of $24,000.",
        "The median of 29 values is the 15th. Do you know what the 15th is?",
        "(1) 29 employees means the median is the 15th salary when they are ordered — but no salary figures are given. Not sufficient.\n(2) 12 employees earned $24,000, with no count of the rest. Not sufficient.\n(1)+(2) The 12 known salaries could sit anywhere in the ordered list of 29. If they are the 12 lowest, the median is some unknown higher salary; if they straddle position 15, the median is $24,000. Not sufficient.\nAnswer: E."),

      Q(4, VAL, "D",
        "How many basic units of currency X are equivalent to 250 basic units of currency Y?\n(1) 100 basic units of currency X are equivalent to 625 basic units of currency Y.\n(2) 2,000 basic units of currency X are equivalent to 12,500 basic units of currency Y.",
        "Both statements are exchange rates. Compare them.",
        "The question needs only the exchange rate.\n(1) \\(100X = 625Y\\), so \\(1X = 6.25Y\\) and \\(250Y = 40X\\). Sufficient.\n(2) \\(2000X = 12500Y\\), so \\(1X = 6.25Y\\) — the same rate, giving the same 40. Sufficient.\nThe two statements never contradict each other, and here they carry identical information.\nAnswer: D."),

      Q(5, VAL, "C",
        "A company bought 3 printers and 1 scanner. What was the price of the scanner?\n(1) The total price of the printers and the scanner was $1,300.\n(2) The price of each printer was 4 times the price of the scanner.",
        "One statement gives a total, the other a relationship.",
        "Let \\(s\\) be the scanner price and \\(p\\) each printer.\n(1) \\(3p + s = 1300\\) — one equation, two unknowns. Not sufficient.\n(2) \\(p = 4s\\) — a ratio with no amounts. Not sufficient.\n(1)+(2) \\(3(4s) + s = 13s = 1300\\), so \\(s = 100\\).\nAnswer: C."),

      Q(6, VAL, "C",
        "Each of the 256 solid-coloured marbles in a box is either blue, green, or purple. What is the ratio of the number of blue marbles to the number of purple marbles in the box?\n(1) The number of green marbles in the box is 4 times the number of blue marbles in the box.\n(2) There are 192 green marbles in the box.",
        "The stem's total is doing real work here — use it.",
        "Let \\(b\\), \\(g\\), \\(p\\) be the counts, with \\(b + g + p = 256\\).\n(1) \\(g = 4b\\) leaves \\(b\\) and \\(p\\) free. Not sufficient.\n(2) \\(g = 192\\) gives \\(b + p = 64\\) but no split. Not sufficient.\n(1)+(2) \\(192 = 4b\\) so \\(b = 48\\), and \\(p = 256 - 192 - 48 = 16\\). The ratio is \\(48 : 16 = 3 : 1\\).\nAnswer: C."),

      Q(7, YN, "E",
        "There are 2 groups of students who took a history test. Was the average (arithmetic mean) score of the students in Group A higher than the average score of the students in Group B?\n(1) Of the students who took the test, 10 were in Group A and 12 were in Group B.\n(2) On the test, the highest score was achieved by a Group B student and the lowest score was achieved by a Group A student.",
        "Extremes are not averages. Try to build both a YES and a NO.",
        "(1) Group sizes say nothing about scores. Not sufficient.\n(2) Knowing who holds the top and bottom score does not fix either average. Not sufficient.\n(1)+(2) Build both cases. Give Group A one student at 0 and nine at 100 (average 90), and Group B one at 100 and eleven at 50 (average about 54) — A is higher, YES. Now give Group A one at 0 and nine at 50 (average 45) and Group B one at 100 and eleven at 90 (average about 91) — A is lower, NO. Both cases satisfy the statements.\nAnswer: E."),

      Q(8, VAL, "C",
        "In a certain class, some students donated cans of food to a local food bank. What was the average (arithmetic mean) number of cans donated per student in the class?\n(1) The students donated a total of 56 cans of food.\n(2) The total number of cans donated was 40 greater than the total number of students in the class.",
        "An average needs a total and a count.",
        "Let \\(c\\) be cans and \\(s\\) students; the question asks for \\(c/s\\).\n(1) \\(c = 56\\), with \\(s\\) unknown. Not sufficient.\n(2) \\(c = s + 40\\) — one equation, two unknowns. Not sufficient.\n(1)+(2) \\(56 = s + 40\\) so \\(s = 16\\), and the average is \\(56/16 = 3.5\\).\nAnswer: C."),

      Q(9, VAL, "E",
        "Each of the \\(n\\) employees at a certain company has a different annual salary. What is the median of the annual salaries of the \\(n\\) employees?\n(1) When the annual salaries of the \\(n\\) employees are listed in increasing order, the median is the 15th salary.\n(2) The sum of the annual salaries of the \\(n\\) employees is $600,000.",
        "Knowing which position is the median is not knowing its value.",
        "(1) If the median is the 15th of an ordered list, then \\(n = 29\\). That locates the median but gives no salary figure. Not sufficient.\n(2) A sum does not determine a median — the same total can be split many ways. Not sufficient.\n(1)+(2) 29 distinct salaries summing to $600,000 can be arranged with the 15th at almost any plausible value. Not sufficient.\nAnswer: E."),

      Q(10, VAL, "C",
        "Last semester, Professor K taught two classes, A and B. Each student in class A handed in 7 assignments, and each student in class B handed in 5 assignments. How many students were in class A?\n(1) The students in both classes combined handed in a total of 85 assignments.\n(2) There were 10 students in class B.",
        "Write the total as one equation in two unknowns, then look for the second.",
        "Let \\(a\\) and \\(b\\) be the class sizes.\n(1) \\(7a + 5b = 85\\). Integer solutions include \\((a,b) = (5,10)\\) and \\((10,3)\\). Not sufficient.\n(2) \\(b = 10\\) alone says nothing about \\(a\\). Not sufficient.\n(1)+(2) \\(7a + 50 = 85\\), so \\(a = 5\\).\nAnswer: C."),

      Q(11, VAL, "E",
        "How many people in a group of 50 own neither a fax machine nor a laser printer?\n(1) The total number of people in the group who own a fax machine or a laser printer or both is less than 50.\n(2) The total number of people in the group who own both a fax machine and a laser printer is 15.",
        "\"Neither\" is 50 minus the union. Do you know the union exactly?",
        "Neither \\(= 50 - |F \\cup P|\\).\n(1) \\(|F \\cup P| < 50\\) is an inequality, so neither is somewhere from 1 to 50. Not sufficient.\n(2) The overlap alone does not give the union without the individual totals. Not sufficient.\n(1)+(2) Still only a bound on the union. With 15 in the overlap the union could be 20 (neither = 30) or 45 (neither = 5).\nAnswer: E."),

      Q(12, VAL, "D",
        "A certain investment earned a fixed rate of 4 percent interest per year, compounded annually, for five years. The interest earned for the third year of the investment was how many dollars greater than that for the first year?\n(1) The amount of the investment at the beginning of the second year was $4,160.00.\n(2) The amount of the investment at the beginning of the third year was $4,326.40.",
        "Any single balance plus the known rate gives the principal.",
        "With principal \\(P\\) and a fixed 4%, the first year's interest is \\(0.04P\\) and the third year's is \\(0.04P(1.04)^2\\). The difference depends only on \\(P\\).\n(1) The balance entering year 2 is \\(1.04P = 4160\\), so \\(P = 4000\\). Sufficient.\n(2) The balance entering year 3 is \\((1.04)^2 P = 4326.40\\), so \\(P = 4000\\) again. Sufficient.\nEither statement alone pins the principal, so either alone answers the question.\nAnswer: D."),

      Q(13, VAL, "D",
        "For a certain car repair, the total charge consisted of a charge for parts, a charge for labour, and a 6 percent sales tax on both the charge for parts and the charge for labour. If the charge for parts, excluding sales tax, was $50.00, what was the total charge for the repair?\n(1) The sales tax on the charge for labour was $9.60.\n(2) The total sales tax was $12.60.",
        "The only unknown is the labour charge.",
        "Total \\(= 50 + L + 0.06(50 + L)\\), so everything turns on \\(L\\).\n(1) \\(0.06L = 9.60\\) gives \\(L = 160\\), and the total is \\(210 + 12.60 = 222.60\\). Sufficient.\n(2) \\(0.06(50 + L) = 12.60\\) gives \\(50 + L = 210\\), so \\(L = 160\\) — the same. Sufficient.\nAnswer: D."),

      Q(14, YN, "C",
        "In each of the last five years, Company K donated \\(p\\) percent of its annual profits to a certain scholarship fund. Did Company K donate more than $10,000 to the scholarship fund last year?\n(1) Two years ago, Company K had annual profits of $3 million and donated $15,000 to the scholarship fund.\n(2) Last year, Company K had annual profits of $2.5 million.",
        "The rate is the same every year. Which statement gives the rate, and which the base?",
        "(1) \\(15{,}000 / 3{,}000{,}000 = 0.5\\%\\), so \\(p = 0.5\\). But last year's profit is unknown. Not sufficient.\n(2) Last year's profit is $2.5 million, but \\(p\\) is unknown. Not sufficient.\n(1)+(2) \\(0.5\\%\\) of $2.5 million is $12,500, which is more than $10,000 — a definite YES.\nAnswer: C."),

      Q(15, VAL, "C",
        "The people in a line waiting to buy tickets are standing one behind the other. Adam and Beth are among them, and Beth is standing behind Adam with a number of people between them. If the number of people in front of Adam plus the number of people behind Beth is 18, how many people in the line are behind Beth?\n(1) There are a total of 32 people in the line.\n(2) 23 people in the line are behind Adam.",
        "Name the three groups and count the whole line in terms of them.",
        "Let \\(f\\) be in front of Adam, \\(m\\) between them, \\(b\\) behind Beth. The stem gives \\(f + b = 18\\), and the whole line is \\(f + 1 + m + 1 + b\\).\n(1) \\(f + m + b = 30\\), so \\(m = 12\\) — but \\(b\\) is still free. Not sufficient.\n(2) Behind Adam is \\(m + 1 + b = 23\\), so \\(m + b = 22\\) — two unknowns. Not sufficient.\n(1)+(2) From \\(m = 12\\) and \\(m + b = 22\\), \\(b = 10\\).\nAnswer: C."),

      Q(16, VAL, "C",
        "Of a group of 50 households, how many have at least one cat or at least one dog, but not both?\n(1) The number of households that have at least one cat and at least one dog is 4.\n(2) The number of households that have no cats and no dogs is 14.",
        "\"Exactly one\" is the union minus the overlap.",
        "(1) The overlap is 4, but without the union that gives nothing. Not sufficient.\n(2) 14 have neither, so the union is 36 — but the overlap is unknown, and exactly-one could be 36 (no overlap) or less. Not sufficient.\n(1)+(2) Union \\(= 50 - 14 = 36\\); exactly one \\(= 36 - 4 = 32\\).\nAnswer: C."),

      Q(17, VAL, "B",
        "A certain plumber charges $92 for each job completed in 4 hours or less, and $23 per hour for each job completed in more than 4 hours. If it took the plumber a total of 7 hours to complete two separate jobs, what was the total amount charged for the two jobs?\n(1) The plumber charged $92 for one of the two jobs.\n(2) The plumber charged $138 for one of the two jobs.",
        "$138 at $23 an hour is a specific number of hours. What does that leave for the other job?",
        "The two jobs take 7 hours in total.\n(1) $92 means that job took 4 hours or less. If it took 4 hours the other took 3 and also cost $92, for $184; if it took 1 hour the other took 6 and cost \\(6 \\times 23 = \\$138\\), for $230. Not sufficient.\n(2) $138 at $23 per hour is exactly 6 hours, which leaves 1 hour for the other job — under 4 hours, so $92. The total is $230, a unique value. Sufficient.\nAnswer: B."),

      Q(18, VAL, "A",
        "For which type of investment, J or K, is the annual rate of return greater?\n(1) Type J returns $115 per $1,000 invested for any one-year period, and type K returns $300 per $2,500 invested for any one-year period.\n(2) The annual rate of return for an investment of type K is 12%.",
        "A rate of return is return divided by amount invested — compare, don't compute precisely.",
        "(1) J returns \\(115/1000 = 11.5\\%\\) and K returns \\(300/2500 = 12\\%\\). K is greater — a definite answer. Sufficient.\n(2) K is 12%, but nothing is said about J. Not sufficient.\nAnswer: A."),

      Q(19, VAL, "D",
        "The total price of 5 pounds of regular coffee and 3 pounds of decaffeinated coffee was $21.50. What was the price of the 5 pounds of regular coffee?\n(1) If the price of the 5 pounds of regular coffee had been reduced 10 percent and the price of the 3 pounds of decaffeinated coffee had been reduced 20 percent, the total price would have been $18.45.\n(2) The price of the 5 pounds of regular coffee was $3.50 more than the price of the 3 pounds of decaffeinated coffee.",
        "Treat \"5 pounds of regular\" as one quantity, not five times a unit price.",
        "Let \\(x\\) be the price of the 5 pounds of regular and \\(y\\) the price of the 3 pounds of decaf; the stem gives \\(x + y = 21.50\\).\n(1) \\(0.9x + 0.8y = 18.45\\). Substituting \\(y = 21.50 - x\\) gives \\(0.1x + 17.20 = 18.45\\), so \\(x = 12.50\\). Sufficient.\n(2) \\(x = y + 3.50\\) with \\(x + y = 21.50\\) gives \\(2y = 18\\), so \\(y = 9\\) and \\(x = 12.50\\). Sufficient.\nAnswer: D."),

      Q(20, VAL, "A",
        "A certain painting job requires a mixture of yellow, green, and white paint. If 12 quarts of paint are needed for the job, how many quarts of green paint are needed?\n(1) The ratio of the amount of green paint to the amount of yellow and white paint combined needs to be 1 to 3.\n(2) The ratio of the amount of yellow paint to the amount of green paint needs to be 3 to 2.",
        "One statement splits green against everything else; the other does not.",
        "(1) Green : (yellow + white) \\(= 1 : 3\\) means green is one part in four of the whole 12 quarts, so green \\(= 3\\) quarts. Sufficient.\n(2) Yellow : green \\(= 3 : 2\\) says nothing about white, so the 12 quarts can be split many ways. With white at 2 quarts green is 4; with white at 7 quarts green is 2. Not sufficient.\nAnswer: A."),

      Q(21, VAL, "B",
        "A company produces a certain toy in only 2 sizes, small or large, and in only 2 colours, red or green. If, for each size, there are equal numbers of red and green toys in a certain production lot, what fraction of the total number of green toys is large?\n(1) In the production lot, 400 of the small toys are green.\n(2) In the production lot, \\(\\tfrac{2}{3}\\) of the toys produced are small.",
        "The question asks for a fraction, so a proportion may be enough and a raw count may not.",
        "Within each size the colours split evenly, so green small is half of small and green large is half of large.\n(1) 400 small toys are green, so there are 800 small toys — but nothing fixes how many large toys there are. Not sufficient.\n(2) Small is \\(\\tfrac23\\) of the lot and large \\(\\tfrac13\\). Then green small is \\(\\tfrac13\\) of the lot and green large \\(\\tfrac16\\), so total green is \\(\\tfrac12\\) and the large share is \\(\\tfrac{1/6}{1/2} = \\tfrac13\\). Sufficient.\nAnswer: B."),

      Q(22, VAL, "B",
        "Last school year, each of the 200 students at a certain high school attended the school for the entire year. If there were 8 cultural performances at the school during the last school year, what was the average (arithmetic mean) number of students attending each cultural performance?\n(1) Last school year, each student attended at least one cultural performance.\n(2) Last school year, the average number of cultural performances attended per student was 4.",
        "Total attendances can be counted from either end — by performance or by student.",
        "The answer is total attendances divided by 8.\n(1) \"At least one\" is a lower bound, so total attendances could be 200 or 1,600. Not sufficient.\n(2) An average of 4 performances per student over 200 students means \\(200 \\times 4 = 800\\) attendances in total, so the average per performance is \\(800/8 = 100\\). Sufficient.\nAnswer: B."),

      Q(23, YN, "C",
        "A clothing manufacturer makes jackets that are wool or cotton or a combination of wool and cotton. The manufacturer has 3,000 pounds of wool and 2,000 pounds of cotton on hand. Is this enough wool and cotton to make at least 1,000 jackets?\n(1) Each wool jacket requires 4 pounds of wool, and no cotton.\n(2) Each cotton jacket requires 6 pounds of cotton, and no wool.",
        "Each statement covers only one of the two materials.",
        "(1) 3,000 pounds of wool at 4 pounds each makes 750 wool jackets, but nothing is known about what the cotton can produce. Not sufficient.\n(2) 2,000 pounds of cotton at 6 pounds each makes 333 cotton jackets, with the wool unaccounted for. Not sufficient.\n(1)+(2) \\(750 + 333 = 1083 \\ge 1000\\) — a definite YES.\nAnswer: C."),

      Q(24, VAL, "A",
        "By what percent was the price of a certain television set discounted for a sale?\n(1) The price of the television set before it was discounted for the sale was 25 percent greater than the discounted price.\n(2) The price of the television set was discounted by $60 for the sale.",
        "A percent discount is measured against the original price. Which statement lets you set that up?",
        "Let \\(P\\) be the original price and \\(D\\) the discounted price; the question asks for \\((P - D)/P\\).\n(1) \\(P = 1.25D\\), so \\((P - D)/P = 0.25D / 1.25D = 20\\%\\). The unknown cancels. Sufficient.\n(2) A $60 reduction with no original price gives no percentage — $60 off $200 is 30%, off $600 is 10%. Not sufficient.\nAnswer: A."),

      Q(25, VAL, "D",
        "A paint mixture was formed by mixing exactly 3 colours of paint. By volume, the mixture was \\(x\\%\\) blue paint, \\(y\\%\\) green paint, and \\(z\\%\\) red paint. If exactly 1 gallon of blue paint and 3 gallons of red paint were used, how many gallons of green paint were used?\n(1) \\(x = y\\)\n(2) \\(z = 60\\)",
        "Blue is 1 gallon and red is 3, so red's percentage is three times blue's.",
        "If the mixture totals \\(T\\) gallons, then \\(0.01xT = 1\\) and \\(0.01zT = 3\\), so \\(z = 3x\\). Also \\(x + y + z = 100\\).\n(1) \\(x = y\\) gives \\(x + x + 3x = 100\\), so \\(x = 20\\), \\(T = 5\\), and green \\(= 0.20 \\times 5 = 1\\) gallon. Sufficient.\n(2) \\(z = 60\\) gives \\(x = 20\\), then \\(y = 20\\) and again 1 gallon. Sufficient.\nAnswer: D."),

      Q(26, VAL, "B",
        "For a basic monthly fee of \\(F\\) yen, Naoko's cell phone plan allowed a maximum of 420 minutes on calls during the month. For each of \\(x\\) additional minutes used on calls, he was charged \\(M\\) yen, making the total charge for the month \\(T\\), where \\(T = F + xM\\). What is the value of \\(F\\)?\n(1) Naoko used 450 minutes on calls the first month and the total charge for the month was ¥13,755.\n(2) Naoko used 400 minutes on calls the second month and the total charge for the month was ¥13,125.",
        "\\(x\\) counts minutes [[beyond]] 420. What is \\(x\\) in each statement?",
        "\\(x\\) is the overage, so \\(x = \\max(0, \\text{minutes} - 420)\\).\n(1) 450 minutes means \\(x = 30\\), giving \\(13{,}755 = F + 30M\\) — one equation, two unknowns. Not sufficient.\n(2) 400 minutes is under the 420 allowance, so \\(x = 0\\) and \\(T = F\\). Then \\(F = 13{,}125\\) directly. Sufficient.\nAnswer: B."),

      Q(27, YN, "E",
        "A company makes and sells two products, P and Q. The costs per unit of making and selling P and Q are $8.00 and $9.50, and the selling prices per unit are $10.00 and $13.00, respectively. In one month the company sold a total of 834 units of these products. Was the total profit on these items more than $2,000?\n(1) During the month, more units of P than units of Q were sold.\n(2) During the month, at least 100 units of Q were sold.",
        "Work out the profit per unit for each product first, then find the range.",
        "P earns \\(10 - 8 = \\$2\\) per unit and Q earns \\(13 - 9.50 = \\$3.50\\). With \\(p + q = 834\\), total profit is \\(2p + 3.5q = 1668 + 1.5q\\). Profit passes $2,000 when \\(q > 221\\).\n(1) \\(p > q\\) means \\(q \\le 416\\). Then \\(q\\) could be 100 (profit $1,818, NO) or 400 (profit $2,268, YES). Not sufficient.\n(2) \\(q \\ge 100\\) allows the same two cases. Not sufficient.\n(1)+(2) \\(100 \\le q \\le 416\\) still spans the $2,000 threshold at \\(q = 221\\).\nAnswer: E."),

      Q(28, VAL, "C",
        "Jill has applied for a job with each of two different companies. What is the probability that she will get job offers from both companies?\n(1) The probability that she will get a job offer from neither company is 0.3.\n(2) The probability that she will get a job offer from exactly one of the two companies is 0.5.",
        "Both, exactly one, and neither are the only outcomes — they sum to 1.",
        "Let \\(P_2\\), \\(P_1\\), \\(P_0\\) be the probabilities of both, exactly one, and neither. These are exhaustive and mutually exclusive, so \\(P_2 + P_1 + P_0 = 1\\).\n(1) \\(P_0 = 0.3\\) gives \\(P_2 + P_1 = 0.7\\), with \\(P_2\\) still free. Not sufficient.\n(2) \\(P_1 = 0.5\\) gives \\(P_2 + P_0 = 0.5\\). Not sufficient.\n(1)+(2) \\(P_2 = 1 - 0.5 - 0.3 = 0.2\\).\nAnswer: C."),

      Q(29, YN, "A",
        "A conveyor belt moves bottles at a constant speed of 120 centimetres per second. If the conveyor belt moves a bottle from a loading dock to an unloading dock, is the distance that the belt moves the bottle less than 90 metres? (1 metre = 100 centimetres)\n(1) It takes the belt less than 1.2 minutes to move the bottle from the loading dock to the unloading dock.\n(2) It takes the belt more than 1.1 minutes to move the bottle from the loading dock to the unloading dock.",
        "Convert the 90 metres into the time it would take, then compare.",
        "120 cm/s is 1.2 m/s, so 90 metres takes \\(90 / 1.2 = 75\\) seconds. The distance is under 90 metres exactly when the time is under 75 seconds.\n(1) Less than 1.2 minutes is less than 72 seconds, which is less than 75 — a definite YES. Sufficient.\n(2) More than 1.1 minutes is more than 66 seconds, which could be 70 seconds (YES) or 80 seconds (NO). Not sufficient.\nAnswer: A.")
    ]
  }]);
})();
