/* GMAT Prep — Data Insights: the non-Data-Sufficiency question types.

   Source: "IR Basics" and "IR Basics Solutions" (Sandeep Gupta) in the user's
   Drive, 01. GMAT / 04. Study Content / 03. Data Insights. That deck gives the
   composition of the Data Insights section as 8 Data Sufficiency, 4 Two-part
   Reasoning, 5 Graph and Table, and 3 Multi-source Reasoning questions — so
   roughly 60% of the section is the four types collected here, which the bank
   had barely covered.

   Every table, chart and scenario below is the source's own data. The export of
   the deck carries the tables verbatim; where a chart's values had to be read
   off its printed data labels, the reconstruction was cross-checked against the
   arithmetic in the source's published solutions and agrees exactly (the
   noncash-transaction figures reproduce both of that question's solutions, and
   the commute-distance counts reproduce the source's own tabulation).

   The real section poses these types as Yes/No triplets, drop-down completions
   and two-column selections, which this app does not render. Each question here
   is therefore posed as a five-choice question over the same data and the same
   reasoning — for the two-part items, as a single choice among candidate pairs.
   Every answer was computed directly from the data in verify/di4-derive.py.
   Appends to window.GMAT_SETS_NEW, which index.html merges into GMAT_SETS. */
(function () {
  var LV = null;
  var Q = function (n, topic, correct, text, choices, hint, expl) {
    return { n: n, topic: topic, correct: correct, options: choices.length,
             level: LV[n - 1], text: text, choices: choices, hint: hint, expl: expl };
  };
  var sets = [];
  var SRC = "IR Basics (Sandeep Gupta) — source data; answers computed from it";

  /* ------------------------------------------------ 1. Table Analysis ---- */
  LV = ["medium", "medium", "hard", "medium"];
  sets.push({
    id: "di-700-enrolment",
    title: "Table Analysis — Women Enrolled by University",
    section: "data",
    source: SRC,
    passage: {
      label: "📊 Data",
      title: "Women enrolled, as a percent of total enrollment",
      paras: [
        "The table lists women enrolled as a percent of total enrollment at each of three universities — University X, University Y and University Z — in Province A, for the fall term of nine consecutive years. The final column gives women enrolled at the three universities combined as a percent of the combined total enrollment.",
        "The table gives percentages only. It reports no enrollment counts for any university in any year."
      ],
      tables: [{
        head: ["Fall", "University X", "University Y", "University Z", "Province A"],
        rows: [
          ["2000", "52.8", "44.2", "58.5", "50.6"],
          ["2001", "53.1", "44.1", "58.9", "50.7"],
          ["2002", "53.6", "44.0", "55.8", "50.8"],
          ["2003", "53.3", "43.6", "58.6", "50.5"],
          ["2004", "53.0", "43.9", "58.1", "50.5"],
          ["2005", "52.5", "43.7", "58.3", "50.2"],
          ["2006", "52.2", "43.8", "58.1", "50.1"],
          ["2007", "52.0", "43.2", "57.8", "49.7"],
          ["2008", "51.4", "43.8", "58.3", "49.7"]
        ]
      }]
    },
    questions: [
      Q(1, "Sorting & filtering", "D",
        "Which of the following must be true, based only on the table?",
        ["University Y had the smallest total fall enrollment of the three universities in every year shown.",
         "Fewer women were enrolled in Province A in 2008 than in 2000.",
         "University Z enrolled more women than University X in every year shown.",
         "Each of the three universities had at least one fall-to-fall decline in women as a percent of total enrollment.",
         "The combined enrollment of the three universities fell every year from 2000 to 2008."],
        "Every figure here is a percentage. Anything about counts needs a total the table does not give.",
        "Reading down each column for a year-on-year drop: University X falls from 53.6 in 2002 to 53.3 in 2003; University Y falls from 44.2 in 2000 to 44.1 in 2001; University Z falls from 58.9 in 2001 to 55.8 in 2002.\nWhy (D) — all three show at least one decline, so this must be true.\n(A) A high or low percentage of women says nothing about how large a university is.\n(B) Province A's percentage fell from 50.6 to 49.7, but total enrollment could have grown enough to make the number of women larger. Percentages alone cannot settle a count.\n(C) Same problem: Z has the higher [[percentage]] every year, but X could be much the larger university.\n(E) The table reports no enrollment totals at all."),
      Q(2, "Statistics from a table", "B",
        "Which university's figure changed by the largest amount from one fall to the next fall, and how large was that change?",
        ["University X, 1.4 percentage points", "University Z, 3.1 percentage points",
         "University Y, 1.0 percentage point", "University Z, 2.8 percentage points",
         "University X, 2.2 percentage points"],
        "Scan each column for the single biggest jump between adjacent rows, in either direction.",
        "University Z drops from 58.9 in 2001 to 55.8 in 2002 — a change of 3.1 points, and the largest single-year move anywhere in the table.\nWhy (B) — no other adjacent pair in any column differs by as much.\n(A) 1.4 points is University X's change across the whole nine years (52.8 to 51.4), not a one-year change.\n(C) 1.0 point is University Y's full-period range (44.2 down to 43.2), and its largest single-year move is only 0.6.\n(D) 2.8 points is Z's rebound from 55.8 to 58.6 the following year — real, but smaller than the 3.1 drop before it.\n(E) University X never moves more than 0.6 points in a single year."),
      Q(3, "Interpreting relationships", "E",
        "The Province A figure for each year lies strictly between the lowest and the highest of the three university figures for that year. Which of the following best explains why that had to happen?",
        ["The three universities have enrollments of roughly equal size.",
         "Province A contains no universities other than X, Y and Z.",
         "Each university's percentage changed by less than one point per year.",
         "University Y's percentage was the lowest in every year shown.",
         "The combined figure is a weighted average of the three university figures."],
        "Ask what the Province A column actually is, given how it is defined.",
        "The Province A column is women at all three universities divided by total enrollment at all three — that is, the three university percentages averaged with weights equal to their enrollments.\nWhy (E) — a weighted average of several numbers always falls between the smallest and the largest of them, whatever the weights are, so the pattern is guaranteed.\n(A) Equal sizes would put the figure near the plain average, but the between-ness holds for any sizes at all.\n(B) The column is defined as the three universities combined, so other universities are irrelevant either way.\n(C) Year-to-year movement has nothing to do with where the combined figure sits within a given year.\n(D) True of this table, but it explains which figure is the lower bound, not why the combined figure lies between the bounds."),
      Q(4, "Sorting & filtering", "B",
        "In how many of the eight fall-to-fall intervals shown did all three universities move in the same direction?",
        ["None", "One", "Two", "Three", "Four"],
        "Write the sign of each change for each university, then look for an interval where all three signs match.",
        "Signs of the change for (X, Y, Z), interval by interval:\n2000→2001 (+, −, +) · 2001→2002 (+, −, −) · 2002→2003 (−, −, +) · 2003→2004 (−, +, −) · 2004→2005 (−, −, +) · 2005→2006 (−, +, −) · 2006→2007 (−, −, −) · 2007→2008 (−, +, +).\nWhy (B) — exactly one interval, 2006 to 2007, has all three moving the same way, and all three fall.\n(A) 2006→2007 is a clear case: 52.2→52.0, 43.8→43.2 and 58.1→57.8.\n(C), (D) and (E) Every other interval mixes at least one rise with at least one fall — most often University Y or University Z moving against University X."),
    ]
  });

  /* ------------------------------------------------ 2. Table Analysis ---- */
  LV = ["medium", "medium", "medium", "hard", "medium"];
  sets.push({
    id: "di-700-nutrition",
    title: "Table Analysis — Vegetable Nutrition",
    section: "data",
    source: SRC,
    passage: {
      label: "📊 Data",
      title: "Nutrition per 240 mL serving, selected vegetables",
      paras: [
        "The table gives nutrition data per 240 mL serving for selected vegetables, cooked or uncooked: percent water, energy in kilocalories (kcal), and protein, total fat, carbohydrate and total fiber in grams (g). Each serving is 240 mL of finely chopped raw vegetable (uncooked) or 240 mL of thoroughly drained steamed vegetable (cooked).",
        "\"trace\" means an amount too small to report."
      ],
      tables: [{
        head: ["Vegetable", "Cooked", "% water", "Energy (kcal)", "Protein (g)", "Total fat (g)", "Carbohydrate (g)", "Total fiber (g)"],
        rows: [
          ["Asparagus", "yes", "92", "43", "5", "1", "8", "2.9"],
          ["Beets", "yes", "87", "75", "3", "trace", "17", "3.4"],
          ["Broccoli", "yes", "91", "44", "5", "1", "8", "4.5"],
          ["Broccoli", "no", "91", "25", "3", "trace", "5", "2.6"],
          ["Carrots", "yes", "87", "70", "2", "trace", "16", "5.1"],
          ["Carrots", "no", "88", "47", "1", "trace", "11", "3.3"],
          ["Corn", "yes", "77", "131", "5", "1", "32", "3.9"],
          ["Green beans", "yes", "89", "44", "2", "trace", "10", "4.0"],
          ["Mustard greens", "yes", "94", "21", "3", "trace", "3", "2.8"],
          ["Pak choi", "yes", "96", "20", "3", "trace", "3", "2.7"],
          ["Spinach", "yes", "91", "41", "5", "trace", "7", "4.3"],
          ["Spinach", "no", "92", "7", "1", "trace", "1", "0.8"],
          ["Summer squash", "yes", "94", "36", "2", "1", "8", "2.5"],
          ["Summer squash", "no", "94", "23", "1", "trace", "5", "2.1"],
          ["Sweet green pepper", "no", "92", "40", "1", "trace", "10", "2.7"]
        ]
      }]
    },
    questions: [
      Q(1, "Statistics from a table", "A",
        "The median amount of protein for the uncooked servings listed is what fraction of the median amount of protein for the cooked servings listed?",
        ["1/3", "1/2", "2/3", "1", "3/2"],
        "Pull out the five uncooked rows and the ten cooked rows, then take each median separately.",
        "The five uncooked servings give protein 3, 1, 1, 1, 1; sorted, that is 1, 1, 1, 1, 3, so the median is the third value, 1 g.\nThe ten cooked servings give 5, 3, 5, 2, 5, 2, 3, 3, 5, 2; sorted, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, so the median is the average of the fifth and sixth values, both 3, giving 3 g.\nWhy (A) — 1 g is one third of 3 g.\n(B), (C), (D) and (E) all misread one of the two medians; note in particular that the cooked median is not the mean of the cooked values (3.3), and the uncooked median is not their mean (1.4)."),
      Q(2, "Statistics from a table", "D",
        "Cooked corn provides the most carbohydrate of any serving listed. Its carbohydrate is how many times the median carbohydrate of the other fourteen servings?",
        ["2", "2.5", "3", "4", "5"],
        "Take corn out first, then find the median of the fourteen values that remain.",
        "Excluding corn, the fourteen carbohydrate values sorted are 1, 3, 3, 5, 5, 7, 8, 8, 8, 10, 10, 11, 16, 17. With fourteen values the median is the average of the seventh and eighth, both 8, so the median is 8 g.\nWhy (D) — corn's 32 g is 32 ÷ 8 = 4 times that median.\n(C) 3 is the trap: it is what you get if you slip on the position of the median or use a nearby value such as 10 or 11.\n(A), (B) and (E) do not match any plausible reading of the middle of that list."),
      Q(3, "Sorting & filtering", "B",
        "Among the servings for which total fiber is less than 3.0 g, what is the greatest amount of carbohydrate?",
        ["8 g", "10 g", "11 g", "16 g", "17 g"],
        "Sort on fiber, take everything under 3.0, then read the carbohydrate column for just those rows.",
        "Fiber under 3.0 g picks out eight servings: cooked asparagus (8 g carbohydrate), uncooked broccoli (5), cooked mustard greens (3), cooked pak choi (3), uncooked spinach (1), cooked summer squash (8), uncooked summer squash (5) and uncooked sweet green pepper (10).\nWhy (B) — the largest of those is the sweet green pepper's 10 g.\n(A) 8 g is the largest among the cooked members of that group, but the pepper beats it.\n(C) 11 g belongs to uncooked carrots, whose fiber is 3.3 — above the cut-off.\n(D) 16 g is cooked carrots, fiber 5.1.\n(E) 17 g is beets, fiber 3.4."),
      Q(4, "Interpreting relationships", "E",
        "For each vegetable listed both cooked and uncooked, which of the following holds without exception?",
        ["Cooking leaves the percent water unchanged.",
         "Cooking at least doubles the total fiber.",
         "Cooking adds at least 4 g of carbohydrate.",
         "Cooking at least doubles the protein.",
         "Cooking raises both the energy and the total fiber."],
        "Four vegetables appear twice: broccoli, carrots, spinach and summer squash. One counterexample kills a choice.",
        "The four paired vegetables, uncooked → cooked:\nbroccoli — water 91→91, energy 25→44, protein 3→5, carbohydrate 5→8, fiber 2.6→4.5\ncarrots — 88→87, 47→70, 1→2, 11→16, 3.3→5.1\nspinach — 92→91, 7→41, 1→5, 1→7, 0.8→4.3\nsummer squash — 94→94, 23→36, 1→2, 5→8, 2.1→2.5\nWhy (E) — energy rises in all four and fiber rises in all four.\n(A) Carrots drop 88→87 and spinach 92→91.\n(B) Spinach's fiber more than quintuples, but summer squash goes only 2.1→2.5.\n(C) Spinach gains 6 g and carrots 5, but broccoli and summer squash gain exactly 3.\n(D) Spinach's protein quintuples, but broccoli goes only 3→5."),
      Q(5, "Statistics from a table", "C",
        "How many of the fifteen servings listed provide at least 50 kcal of energy?",
        ["One", "Two", "Three", "Four", "Five"],
        "Sort on the energy column and count down from the top until you cross 50.",
        "Reading the energy column, only cooked corn (131), cooked beets (75) and cooked carrots (70) reach 50 kcal. The next highest is uncooked carrots at 47.\nWhy (C) — exactly three servings clear the bar.\n(A) and (B) Undercount; corn is not alone above 50.\n(D) Adding uncooked carrots at 47 would give four, but 47 is below 50.\n(E) Five would require reaching down to cooked broccoli or green beans at 44."),
    ]
  });

  /* ------------------------------------------------- 3. Two-part -------- */
  LV = ["hard", "medium", "medium", "hard", "medium", "medium", "medium"];
  sets.push({
    id: "di-700-twopart",
    title: "Two-Part Analysis — Paired Selections",
    section: "data",
    source: SRC,
    passage: {
      label: "📌 Note",
      title: "About this set",
      paras: [
        "On the real exam a Two-Part Analysis question shows one scenario and a two-column table, and you make one selection in each column. Both selections must be right to earn the point.",
        "Each question below carries its own scenario and asks for the same two answers at once, as a single choice among candidate pairs. The reasoning is unchanged: work out both parts, then find the pair that matches."
      ]
    },
    questions: [
      Q(1, "Quantitative two-part", "D",
        "Eureka Airlines operates five daylong flight sequences among Cities A, B, C, D and E. Sequence 1: A-B-C-A (3 flights). Sequence 2: A-D-B-A (3 flights). Sequence 3: A-E-D-A (3 flights). Sequence 4: A-E-B-D-A (4 flights). Sequence 5: A-C-B-D-A (4 flights). Eureka can operate only 3 sequences on any given day, and exactly 10 flights are flown each day. No sequence is used more than 2 consecutive days, and no sequence is idle 2 consecutive days. Over any 3-day period, select the number of flights arriving in City A and the number arriving in City D, in that order.",
        ["(9, 9)", "(10, 6)", "(9, 6)", "(9, 7)", "(10, 7)"],
        "Ten flights from three sequences forces the daily mix. Then ask which sequences never visit D.",
        "Ten flights a day from three sequences can only be 3 + 3 + 4, so each day uses two of Sequences 1–3 and one of Sequences 4–5.\nCity A: every sequence begins and ends at A, so each of the three sequences flown contributes exactly one arrival in A. That is 3 a day, or 9 over three days.\nCity D: Sequence 1 (A-B-C-A) never reaches D; each of the other four reaches it once. Among Sequences 1–3 exactly one sits idle each day, and since none may be idle two days running, each of the three is idle exactly once across the three days. So Sequence 1 flies on two of the days, and on those days D receives 2 arrivals; on the day Sequence 1 is idle, D receives 3. That totals 2 + 2 + 3 = 7.\nWhy (D) — (9, 7).\n(A) and (C) get City A right but miscount D by treating every day alike.\n(B) and (E) give A ten arrivals, which would need four sequences a day."),
      Q(2, "Quantitative two-part", "B",
        "At a company, employees buy from vending machines with small tokens and large tokens; one large token equals five small tokens. The XJ100 sells one beverage at a price of 3 small tokens; if 1 large token is inserted, 2 small tokens are returned with the beverage. Employees are equally likely to pay with 1 large token as with 3 small tokens. When the XJ100 is serviced all tokens are removed except for 50 small tokens, and that is the only time tokens are removed. Since it was last serviced, 400 beverages have been sold. Select the expected number of small tokens and the expected number of large tokens in the machine today, in that order.",
        ["(150, 400)", "(250, 200)", "(650, 200)", "(250, 400)", "(450, 200)"],
        "Split the 400 sales evenly, then track small tokens in and small tokens out separately.",
        "Equally likely means 200 beverages paid with 3 small tokens and 200 paid with 1 large token.\nSmall tokens: the 200 small-token purchases put in 200 × 3 = 600; the 200 large-token purchases take out 200 × 2 = 400 as change. Starting from 50, the machine holds 50 + 600 − 400 = 250 small tokens.\nLarge tokens: the machine started with none and received one per large-token purchase, so 200.\nWhy (B) — (250, 200).\n(A) Uses 400 large tokens, as if every sale were paid that way.\n(C) Adds the 600 in without subtracting the 400 paid out in change.\n(D) Correct on small tokens, wrong on large.\n(E) Miscounts the change returned."),
      Q(3, "Quantitative two-part", "A",
        "A portion of a test track is divided into Segment A, Segment B and Segment C, in that order. A car travelled Segment A at a constant 140 km/h, slowed rapidly on Segment B, then travelled Segment C at a constant 70 km/h. Segment C is 3 times as long as Segment A, and the car took 42 minutes in total to cover Segments A and C. Select the length of Segment A and the length of Segment C, in kilometers, in that order.",
        ["(14, 42)", "(7, 21)", "(21, 63)", "(10, 30)", "(12, 36)"],
        "Half the speed over three times the distance means six times the time. Split 42 minutes in that ratio.",
        "At half the speed, Segment C takes twice as long per kilometer; being three times as long, it takes 6 times the time of Segment A. So the 42 minutes split 6 minutes to A and 36 minutes to C.\nSegment A: 140 km/h for 6 minutes (0.1 h) is 14 km. Segment C: 70 km/h for 36 minutes (0.6 h) is 42 km — and 42 is indeed 3 × 14.\nWhy (A) — (14, 42).\n(B), (C), (D) and (E) all keep the 1 : 3 length ratio but fail the time check: (B) totals 21 minutes, (C) totals 63, (D) totals 30 and (E) totals 36."),
      Q(4, "Quantitative two-part", "E",
        "Over five academic years from Fall 1999 to Spring 2004, the number of faculty at a college increased while student enrollment fell from its Fall 1999 level of 5,500. Let F and S be the percent change over those five years in the number of faculty and of students, and let R be the number of students per faculty member in Fall 1999. Select the expression for the number of faculty in Fall 1999 and the expression for students per faculty member in Spring 2004, in that order.",
        ["(5,500R, R(100 + F)/(100 + S))", "(5,500/R, R(100 + F)/(100 + S))",
         "(5,500R, R(100 + S)/(100 + F))", "(R/5,500, (100 + S)/(100 + F))",
         "(5,500/R, R(100 + S)/(100 + F))"],
        "R is students per faculty member, so faculty is students divided by R. Then apply each percent change to its own count.",
        "Fall 1999: R = 5,500 ÷ faculty, so faculty = 5,500/R.\nSpring 2004: students = 5,500(100 + S)/100 and faculty = (5,500/R)(100 + F)/100. Dividing, the 5,500 and the 100 cancel and the R comes up into the numerator, leaving R(100 + S)/(100 + F).\nWhy (E) — (5,500/R, R(100 + S)/(100 + F)).\n(A) and (C) multiply by R instead of dividing, which would give students per faculty member the wrong way up.\n(B) Has the ratio inverted: the student change belongs in the numerator.\n(D) Inverts the first expression as well."),
      Q(5, "Verbal / logical two-part", "C",
        "A store has cell phones in stock. Of all phones in stock: most are sold at a discount with a new or renewed service contract; more are dial pad phones than touch-screen-only phones. Of the dial pad phones: most have screens smaller than 8 cm, and most are packaged with two or more accessories. Of the touch-screen-only phones: most have screens 8 cm or larger, and most are packaged with two or more accessories. Complete this statement: \"Of those phones that ___, fewer than half ___.\" Select the pair that completes it accurately.",
        ["(are dial pad phones, are packaged with two or more accessories)",
         "(are sold at a discount with a service contract, are touch-screen-only phones)",
         "(are touch-screen-only phones, are packaged with fewer than two accessories)",
         "(have screens 8 cm or larger, are dial pad phones)",
         "(are packaged with two or more accessories, have screens smaller than 8 cm)"],
        "\"Most are X\" gives you \"fewer than half are not-X\" — but only within the group that sentence is about.",
        "Of the touch-screen-only phones, most are packaged with two or more accessories. \"Most\" means more than half, so fewer than half of that same group are packaged with fewer than two accessories.\nWhy (C) — both halves refer to the touch-screen-only group, and the stated fact converts directly into the required \"fewer than half\".\n(A) Reverses the given: most dial pad phones are packaged with two or more accessories, so [[more]] than half are, not fewer.\n(B) The discount group is described relative to all phones; nothing tells us how it splits between the two phone types.\n(D) Screen size is given within each phone type, not the other way round, so the composition of the large-screen group is unknown.\n(E) Nothing is stated about the composition of the two-or-more-accessories group."),
      Q(6, "Verbal / logical two-part", "A",
        "Researcher: Soil samples from highway medians and salt storage yards showed chloride 11–160 times, and sodium 15–200 times, the level sufficient to inhibit bacterial growth in soil; inhibited bacterial growth greatly inhibits plant growth. An agriculture official wants to use this to argue that sand, not road salt, should be the winter road treatment, eliminating the need for salt yards. Select the fact that would most strengthen the official's case and the fact that would most weaken it, in that order.",
        ["(Runoff from roads is often absorbed by farmland; sand is much less effective than salt at making roads safe in winter)",
         "(Removing salts from abandoned salt yards is very costly; road accidents on untreated roads rise sharply in winter)",
         "(Sand is much less effective than salt at making roads safe in winter; runoff from roads is often absorbed by farmland)",
         "(Drinking water near highways shows elevated chloride; removing salts from abandoned salt yards is very costly)",
         "(Road accidents on untreated roads rise sharply in winter; drinking water near highways shows elevated chloride)"],
        "The official's case is about protecting soil that grows things. The counter has to attack sand as a substitute.",
        "Strengthening: the official needs the salt damage to reach land that matters. Runoff being absorbed by farmland connects road salt directly to food production, which is exactly the harm the proposal would avert.\nWeakening: the official proposes sand as the replacement, so the sharpest objection is that sand does the job much less well — a cost the argument never addresses.\nWhy (A) — those are the two.\n(B) The cost of cleaning abandoned salt yards only strengthens the case with extra assumptions, and accidents on [[untreated]] roads miss the proposal, which treats roads with sand.\n(C) Has the right two facts in the wrong roles.\n(D) Drinking water is never linked to the official's agricultural argument, and the salt-yard cost is the weaker strengthener.\n(E) Neither item plays the role assigned to it."),
      Q(7, "Verbal / logical two-part", "B",
        "Archaeologist: Several porcelain-production centers operated in 18th-century Britain, each with a unique recipe that might include flint glass, soapstone, bone ash, clay or quartz. We will therefore be able to determine, from compositional analysis, where the next cup we recover from this site was made. Select the assumption the argument requires and the fact that, if true, would most strengthen that assumption, in that order.",
        ["(All cups previously recovered here were porcelain; the next cup recovered will be porcelain)",
         "(The next cup recovered will be porcelain; all cups previously recovered here were porcelain)",
         "(Compositional analysis is inexpensive; the site has yielded many cups)",
         "(No two centers used the same recipe; each center's recipe is documented)",
         "(The next cup recovered will be porcelain; compositional analysis can distinguish soapstone from bone ash)"],
        "The conclusion is about the next cup. Ask what has to be true of that cup, then what would make it likely.",
        "The recipes are unique to porcelain centers, so the method identifies the origin only of a porcelain cup. The argument therefore assumes the next cup recovered will be porcelain.\nWhat would make that assumption more secure is a track record: if every cup recovered here so far has been porcelain, the next one probably will be too.\nWhy (B) — the assumption first, then the fact that supports it.\n(A) Reverses the two roles: the past record is the supporting fact, not the assumption the argument needs.\n(C) Cost and quantity bear on feasibility, not on whether the method identifies an origin.\n(D) Uniqueness of recipes is given in the passage, so it is a premise rather than an assumption, and documentation is a separate requirement.\n(E) The assumption is right, but distinguishing two ingredients is a capability of the technique rather than support for the assumption about the cup."),
    ]
  });

  /* ---------------------------------------- 4. Multi-source reasoning ---- */
  LV = ["medium", "medium", "hard", "medium"];
  sets.push({
    id: "di-700-msr-gold",
    title: "Multi-Source Reasoning — Gold Mining",
    section: "data",
    source: SRC,
    passage: {
      label: "🗂 Two sources",
      title: "Prospector and Environmental Scientist",
      paras: [
        "[[Source 1 — Prospector.]] Gold is typically mined from two types of geologic formation, known as deposits: lode deposits and placer deposits. Lode deposits are what prospectors dream of finding: large deposits of nearly pure gold, located where they were originally laid down by the mineral-bearing solutions that carried the gold up from the earth's interior. Placer deposits come from preexisting lode deposits exposed at the earth's surface; exposure to the weather releases gold from the surrounding rock, and rivers transport it as dust or flakes. When a stream carrying the gold slows, the gold collects in pockets of sand. Placer-deposit mines have historically been the source of about 35 percent of all gold mined in the US, but in recent years output from such deposits has fallen as the readily accessible ones have been exhausted. Despite an increase in net gold mined, placer-deposit mining now accounts for only a few percent of the US total.",
        "[[Source 2 — Environmental Scientist.]] Because — unlike mining lode deposits — mining placer deposits does not usually involve crushing rock and using chemicals to extract gold, its environmental impacts are generally less than those of lode-deposit mining. The primary impacts of placer-deposit mining are habitat destruction and sediment release. Habitat destruction results from river diversions and disruption of river bottoms and banks, and the large amounts of silt and sediment released can severely affect water quality. Modern commercial operations tend to use settling ponds to prevent this discharge.",
        "Mining lode deposits has a much larger environmental impact by virtue of the size of such operations, the generation of waste material, and the use of toxic chemicals. The gold comes out of the ground as raw ore — gold aggregated with other minerals. On average, such mining operations process approximately 130 kilograms of raw ore to produce 1 gram of pure gold. Unlike placer-deposit mines, modern commercial lode-deposit mines are massive operations, some displacing and processing up to 180,000 metric tons (1 metric ton = 1,000 kilograms) of raw ore per day."
      ]
    },
    questions: [
      Q(1, "Synthesizing multiple sources", "B",
        "The Grasberg mine in Papua, Indonesia is the largest gold mine in the world, producing over 57,000 kilograms of pure gold per year. Which of the following is most strongly implied about the Grasberg mine by the two sources together?",
        ["It is located at or adjacent to a river.",
         "It works a lode deposit rather than a placer deposit.",
         "It processes about 130 kilograms of raw ore per gram of gold produced.",
         "It uses settling ponds to prevent sediment discharge.",
         "It accounts for a few percent of the gold mined in the United States."],
        "One source says which kind of mine is a massive operation; the other says where placer gold is found.",
        "The environmental scientist contrasts placer-deposit mines with modern commercial lode-deposit mines, which are \"massive operations\". The world's largest gold mine is therefore far more likely to be a lode-deposit mine.\nWhy (B) — the size of the operation is exactly the feature the sources tie to lode deposits.\n(A) The prospector links placer deposits, not lode deposits, to rivers; no such relationship is stated for lode deposits.\n(C) 130 kg per gram is an average across lode operations. Nothing says Grasberg is near that average, and its enormous output suggests it may not be.\n(D) Settling ponds are described as a practice of placer-deposit operations.\n(E) Grasberg is in Indonesia, so it contributes nothing to the United States total."),
      Q(2, "Reading across tabs", "D",
        "Which of the following claims made by the environmental scientist is backed with specific evidence in that source?",
        ["Placer-deposit mining causes habitat destruction through river diversions.",
         "Placer-deposit mining has generally smaller environmental impacts than lode-deposit mining.",
         "Modern commercial placer operations tend to use settling ponds.",
         "Modern commercial lode-deposit mines are massive operations.",
         "Lode-deposit mining uses toxic chemicals."],
        "\"Specific evidence\" means a figure or a case, not a further assertion.",
        "The claim that lode-deposit mines are massive is immediately followed by a number: some displace and process up to 180,000 metric tons of raw ore per day.\nWhy (D) — that figure is the only quantity offered in direct support of a claim.\n(A) Habitat destruction is asserted and its mechanism named, but no evidence is cited for it.\n(B) This is the scientist's headline comparison and it is explained by a reason, not supported by evidence.\n(C) The settling-pond practice is simply reported.\n(E) The use of toxic chemicals is listed among the reasons for the larger impact, with no supporting data."),
      Q(3, "Inference from combined data", "C",
        "Suppose a mine is opened on a lode deposit whose ore contains 20 times the average proportion of gold. Working at the fastest rate described in the sources, about how many days would it take that mine to produce 100 metric tons of pure gold?",
        ["Less than 1 day", "More than 1 but less than 2 days", "More than 3 but less than 4 days",
         "More than 10 but less than 20 days", "More than 100 days"],
        "Scale the ore-per-gram figure down by 20, then divide the daily throughput by it.",
        "At the average concentration, 130 kg of ore yields 1 g of gold. At 20 times that concentration, 130 ÷ 20 = 6.5 kg of ore yields 1 g.\nThe fastest rate given is 180,000 metric tons — 180,000,000 kg — of ore per day, which at 6.5 kg per gram gives 180,000,000 ÷ 6.5 ≈ 27,700,000 g, or about 27.7 metric tons of gold per day.\nProducing 100 metric tons therefore takes about 100 ÷ 27.7 ≈ 3.6 days.\nWhy (C) — more than 3 but less than 4.\n(A) and (B) Would need daily output above 50 metric tons of gold.\n(D) and (E) Would follow from forgetting the 20-fold enrichment, or from a slip in converting metric tons to kilograms."),
      Q(4, "Synthesizing multiple sources", "A",
        "According to the sources, which of the following best explains why placer-deposit mining now accounts for only a few percent of gold mined in the United States, even though it once accounted for about 35 percent?",
        ["The accessible placer deposits have been used up while total gold output has risen.",
         "Placer-deposit mining was banned because of its effect on water quality.",
         "Lode deposits contain nearly pure gold and so are cheaper to work.",
         "Settling ponds made placer operations too expensive to run.",
         "Rivers no longer transport gold from exposed lode deposits."],
        "The prospector gives both halves of the answer in one sentence: what fell and what rose.",
        "The prospector says output from placer deposits has fallen as the readily accessible ones have been exhausted, and adds that this share shrank \"despite an increase in net gold mined\". A smaller numerator against a larger denominator is what drives the share down.\nWhy (A) — it captures both movements.\n(B) No ban is mentioned; water quality is raised only as an impact.\n(C) Lode deposits are described as nearly pure gold, but the sources say lode mining processes 130 kg of ore per gram and is enormously more disruptive, so cheapness is not established.\n(D) Settling ponds are described as a preventive measure, not a cost that closed operations.\n(E) The weathering-and-transport process is described as ongoing."),
    ]
  });

  /* ------------------------------------------- 5. Graphs and tables ----- */
  LV = ["easy", "medium", "hard"];
  sets.push({
    id: "di-700-noncash",
    title: "Graphics Interpretation — Noncash Transactions",
    section: "data",
    source: SRC,
    passage: {
      label: "📈 Graphs",
      title: "Noncash transactions in Country C",
      paras: [
        "The graphs show the number of transactions, in millions, made by each noncash method in Country C in 2006 and in 2009. All other transactions were made with cash."
      ],
      charts: [
        { type: "bar", title: "2006 — transactions by method (millions)",
          xLabel: "Method", yLabel: "millions", yMax: 45,
          points: [{ x: "debit", y: 17 }, { x: "check", y: 24 }, { x: "credit", y: 22 }, { x: "auto", y: 20 }] },
        { type: "bar", title: "2009 — transactions by method (millions)",
          xLabel: "Method", yLabel: "millions", yMax: 45,
          points: [{ x: "debit", y: 39 }, { x: "check", y: 30 }, { x: "credit", y: 20 }, { x: "auto", y: 24 }] }
      ]
    },
    questions: [
      Q(1, "Bar & line graphs", "B",
        "The number of which type of transaction increased by 25 percent from 2006 to 2009?",
        ["Debit card", "Paper check", "Credit card", "Auto transfer", "None of them"],
        "Compute the percent change for each method, not the size of the change.",
        "Method by method: debit card 17 → 39 is a rise of 22 on a base of 17, about 129%; paper check 24 → 30 is a rise of 6 on a base of 24, exactly 25%; credit card 22 → 20 is a fall; auto transfer 20 → 24 is a rise of 4 on 20, exactly 20%.\nWhy (B) — paper check is the 25% riser.\n(A) Debit card grows by far the most, which is why it is the tempting pick, but the percentage is nowhere near 25.\n(C) Credit card transactions went down.\n(D) Auto transfer rises by 4 million — a bigger jump than paper check in nothing but appearance; as a percentage it is 20.\n(E) Paper check matches exactly."),
      Q(2, "Interpreting relationships", "D",
        "Which method accounted for the largest share of noncash transactions in 2006, and which accounted for the largest share in 2009?",
        ["Debit card in both years", "Paper check in both years",
         "Credit card in 2006 and debit card in 2009", "Paper check in 2006 and debit card in 2009",
         "Auto transfer in 2006 and paper check in 2009"],
        "The four bars are the whole of noncash, so the largest bar is the largest share.",
        "In 2006 the bars are debit 17, check 24, credit 22, auto 20 — paper check is the tallest. In 2009 they are debit 39, check 30, credit 20, auto 24 — debit card is the tallest by a wide margin.\nWhy (D) — paper check leads in 2006, debit card in 2009.\n(A) Debit card is the smallest of the four in 2006.\n(B) Paper check does grow, but debit card overtakes it.\n(C) Credit card is second in 2006, behind paper check, and it is the only method that shrinks.\n(E) Auto transfer never leads in either year."),
      Q(3, "Ratios & proportions in tables", "C",
        "If the total value of all credit card transactions in 2009 was 10 percent greater than in 2006, by approximately what percent did the average (arithmetic mean) value of a credit card transaction increase from 2006 to 2009?",
        ["2%", "10%", "21%", "17%", "22%"],
        "Average value is total value divided by number of transactions. Both parts changed.",
        "Let the 2006 total value be V. The 2009 total value is 1.1V. The transaction counts are 22 million in 2006 and 20 million in 2009.\nAverage in 2006 is V/22; average in 2009 is 1.1V/20. The ratio is (1.1V/20) ÷ (V/22) = 1.1 × 22/20 = 1.21, an increase of about 21%.\nWhy (C) — 21%.\n(B) 10% is the growth in total value, which ignores that the transactions were spread over fewer payments.\n(A) 2% treats the count as essentially unchanged, so only the 10% would show through — and even then not as 2%.\n(D) 17% and (E) 22% are near misses: they survive only if the 1.1 and the 22/20 are combined by something other than multiplication."),
    ]
  });

  /* ------------------------------------------- 6. Graphs and tables ----- */
  LV = ["medium", "medium", "medium"];
  sets.push({
    id: "di-700-commute",
    title: "Graphics Interpretation — Commute Distance by Mode",
    section: "data",
    source: SRC,
    passage: {
      label: "📈 Graphs",
      title: "Round-trip commute distance, by mode of travel",
      paras: [
        "For one recent workday, the graphs show the round-trip distance travelled to work, in kilometers, for everyone who walked and for everyone who took public transit in a medium-sized city. Each bar gives the number of people whose round-trip distance d falls in that range."
      ],
      charts: [
        { type: "bar", title: "Walking — number of people by distance range",
          xLabel: "round-trip distance (km)", yLabel: "people", yMax: 40,
          points: [{ x: "≤2", y: 30 }, { x: "2–5", y: 10 }, { x: "5–10", y: 6 }, { x: "10–15", y: 0 }, { x: ">15", y: 0 }] },
        { type: "bar", title: "Public transit — number of people by distance range",
          xLabel: "round-trip distance (km)", yLabel: "people", yMax: 40,
          points: [{ x: "≤2", y: 2 }, { x: "2–5", y: 17 }, { x: "5–10", y: 30 }, { x: "10–15", y: 17 }, { x: ">15", y: 37 }] }
      ]
    },
    questions: [
      Q(1, "Statistics from a table", "A",
        "For everyone who walked to work, the median round-trip distance x, in kilometers, satisfies which of the following?",
        ["x ≤ 2", "2 < x ≤ 5", "5 < x ≤ 10", "10 < x ≤ 15", "x > 15"],
        "Add up the walkers, find which position the median occupies, then see which bar that position falls in.",
        "The walkers number 30 + 10 + 6 = 46. With an even count the median is the average of the 23rd and 24th values in order.\nThe first bar alone holds 30 people, so both the 23rd and the 24th walker fall in the range d ≤ 2. The average of two values that are each at most 2 is itself at most 2.\nWhy (A) — the median sits in the lowest band.\n(B) and (C) Would require fewer than 23 people in the first bar.\n(D) and (E) No walker at all travelled more than 10 km."),
      Q(2, "Statistics from a table", "D",
        "For everyone who took public transit, the median round-trip distance x, in kilometers, satisfies which of the following?",
        ["x ≤ 2", "2 < x ≤ 5", "5 < x ≤ 10", "10 < x ≤ 15", "x > 15"],
        "Build the running total across the bars until you pass the middle position.",
        "Transit riders number 2 + 17 + 30 + 17 + 37 = 103. With an odd count the median is the 52nd value.\nRunning totals: 2 through the first band, 19 through the second, 49 through the third, 66 through the fourth. The 52nd rider therefore falls in the fourth band.\nWhy (D) — 10 < x ≤ 15.\n(C) The third band ends at the 49th rider, three short of the median.\n(E) The last band starts at the 67th rider.\n(A) and (B) Are far below the middle of the distribution."),
      Q(3, "Interpreting relationships", "E",
        "Which of the following is best supported by the two graphs?",
        ["More people walked to work than took public transit.",
         "Every transit rider travelled farther than every walker.",
         "The mean round-trip distance is greater for walkers than for transit riders.",
         "No transit rider travelled 2 km or less.",
         "More than a third of transit riders travelled more than 15 km."],
        "Read the counts off both charts before comparing anything.",
        "Transit riders in the top band number 37 out of 103, which is about 36% — more than a third.\nWhy (E) — the arithmetic is direct from the bars.\n(A) 46 walked and 103 took transit, so transit is more than twice as common.\n(B) Two transit riders travelled 2 km or less, which is within the walkers' own range.\n(C) The walkers are concentrated in the shortest band while most transit riders are in the longest bands, so the comparison runs the other way.\n(D) The first transit bar holds 2 people."),
    ]
  });

  window.GMAT_SETS_NEW = (window.GMAT_SETS_NEW || []).concat(sets);
})();
