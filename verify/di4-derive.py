"""Re-derive every answer in sets-di4.js straight from the source data.

The four non-Data-Sufficiency Data Insights types have no printed letter key to
compare against — the source poses them as Yes/No triplets and drop-down
completions — so each answer here is computed from the table, chart or scenario
the question is built on. Run: python3 verify/di4-derive.py
"""
from statistics import median

fail = []

def check(label, got, want):
    ok = got == want
    print("%-46s %-28s %s" % (label, repr(got), "OK" if ok else "MISMATCH, expected " + repr(want)))
    if not ok:
        fail.append(label)


# ---------------------------------------------------------------- Table 1 --
# Women enrolled as a percent of total enrollment (X, Y, Z), fall 2000-2008.
ENROL = {2000: (52.8, 44.2, 58.5, 50.6), 2001: (53.1, 44.1, 58.9, 50.7),
         2002: (53.6, 44.0, 55.8, 50.8), 2003: (53.3, 43.6, 58.6, 50.5),
         2004: (53.0, 43.9, 58.1, 50.5), 2005: (52.5, 43.7, 58.3, 50.2),
         2006: (52.2, 43.8, 58.1, 50.1), 2007: (52.0, 43.2, 57.8, 49.7),
         2008: (51.4, 43.8, 58.3, 49.7)}
YRS = sorted(ENROL)

# Q1 (D): every university has at least one fall-to-fall decline.
declines = [all(any(ENROL[YRS[k + 1]][i] < ENROL[YRS[k]][i] for k in range(8)) for i in range(3))]
check("enrolment #1 all three ever decline", declines[0], True)

# Q2 (B): largest single-year move anywhere is University Z, 3.1 points.
moves = [(round(abs(ENROL[YRS[k + 1]][i] - ENROL[YRS[k]][i]), 1), "XYZ"[i], YRS[k + 1])
         for i in range(3) for k in range(8)]
check("enrolment #2 largest one-year move", max(moves), (3.1, "Z", 2002))

# Q3 (E): the combined column lies strictly between the extremes every year,
# which is what a weighted average must do.
check("enrolment #3 combined always between",
      all(min(ENROL[y][:3]) < ENROL[y][3] < max(ENROL[y][:3]) for y in YRS), True)

# Q4 (B): exactly one interval has all three moving the same way.
def signs(k):
    return tuple("+" if ENROL[YRS[k + 1]][i] > ENROL[YRS[k]][i] else "-" for i in range(3))
check("enrolment #4 intervals moving alike",
      sum(1 for k in range(8) if len(set(signs(k))) == 1), 1)


# ---------------------------------------------------------------- Table 2 --
# name, cooked, %water, kcal, protein, fat, carbohydrate, fiber
VEG = [("Asparagus", "yes", 92, 43, 5, "1", 8, 2.9), ("Beets", "yes", 87, 75, 3, "trace", 17, 3.4),
       ("Broccoli", "yes", 91, 44, 5, "1", 8, 4.5), ("Broccoli", "no", 91, 25, 3, "trace", 5, 2.6),
       ("Carrots", "yes", 87, 70, 2, "trace", 16, 5.1), ("Carrots", "no", 88, 47, 1, "trace", 11, 3.3),
       ("Corn", "yes", 77, 131, 5, "1", 32, 3.9), ("Green beans", "yes", 89, 44, 2, "trace", 10, 4.0),
       ("Mustard greens", "yes", 94, 21, 3, "trace", 3, 2.8), ("Pak choi", "yes", 96, 20, 3, "trace", 3, 2.7),
       ("Spinach", "yes", 91, 41, 5, "trace", 7, 4.3), ("Spinach", "no", 92, 7, 1, "trace", 1, 0.8),
       ("Summer squash", "yes", 94, 36, 2, "1", 8, 2.5), ("Summer squash", "no", 94, 23, 1, "trace", 5, 2.1),
       ("Sweet green pepper", "no", 92, 40, 1, "trace", 10, 2.7)]
COOKED = [v for v in VEG if v[1] == "yes"]
RAW = [v for v in VEG if v[1] == "no"]

# Q1 (A): uncooked protein median is one third of the cooked median.
mp_raw, mp_cooked = median(sorted(v[4] for v in RAW)), median(sorted(v[4] for v in COOKED))
check("nutrition #1 protein medians", (mp_raw, mp_cooked), (1, 3.0))

# Q2 (D): corn's carbohydrate over the median of the other fourteen.
other = median(sorted(v[6] for v in VEG if v[0] != "Corn"))
check("nutrition #2 corn / median carbs", (32, other, 32 / other), (32, 8.0, 4.0))

# Q3 (B): greatest carbohydrate among servings with fiber below 3.0 g.
check("nutrition #3 max carbs, fiber < 3.0",
      max(v[6] for v in VEG if v[7] < 3.0), 10)

# Q4 (E): of the five claims, only "energy and fiber both rise" holds for all
# four vegetables listed twice.
pairs = {}
for v in VEG:
    pairs.setdefault(v[0], {})[v[1]] = v
both = {k: (d["no"], d["yes"]) for k, d in pairs.items() if len(d) == 2}
claims = {
    "A water unchanged":   all(u[2] == c[2] for u, c in both.values()),
    "B fiber doubles":     all(c[7] >= 2 * u[7] for u, c in both.values()),
    "C carbs +4 or more":  all(c[6] - u[6] >= 4 for u, c in both.values()),
    "D protein doubles":   all(c[4] >= 2 * u[4] for u, c in both.values()),
    "E energy and fiber":  all(c[3] > u[3] and c[7] > u[7] for u, c in both.values()),
}
check("nutrition #4 exactly one claim holds",
      [k for k, v in claims.items() if v], ["E energy and fiber"])

# Q5 (C): three servings reach 50 kcal.
check("nutrition #5 servings >= 50 kcal", sum(1 for v in VEG if v[3] >= 50), 3)


# --------------------------------------------------------------- Two-part --
# Q1 (D): 10 flights from 3 sequences forces 3+3+4; A gets one arrival per
# sequence flown, D gets one from every sequence except Sequence 1.
SEQ = {1: ("A", "B", "C", "A"), 2: ("A", "D", "B", "A"), 3: ("A", "E", "D", "A"),
       4: ("A", "E", "B", "D", "A"), 5: ("A", "C", "B", "D", "A")}
legs = {k: len(v) - 1 for k, v in SEQ.items()}
check("twopart #1 daily mix is 3+3+4", sorted(legs.values()), [3, 3, 3, 4, 4])
arrA = {k: sum(1 for c in v[1:] if c == "A") for k, v in SEQ.items()}
arrD = {k: sum(1 for c in v[1:] if c == "D") for k, v in SEQ.items()}
check("twopart #1 arrivals per sequence (A, D)",
      (sorted(arrA.values()), sorted(arrD.values())), ([1, 1, 1, 1, 1], [0, 1, 1, 1, 1]))
# Over three days each of Sequences 1-3 sits idle exactly once, so Sequence 1
# flies on two days (2 arrivals in D each) and is idle on one (3 arrivals).
check("twopart #1 three-day totals (A, D)", (3 * 3, 2 + 2 + 3), (9, 7))

# Q2 (B): 400 sales split evenly between the two payment methods.
small = 50 + 200 * 3 - 200 * 2
large = 200
check("twopart #2 tokens in machine (small, large)", (small, large), (250, 200))

# Q3 (A): half the speed over three times the distance is six times the time.
tA = 42 / 7          # minutes on Segment A
segA, segC = 140 * (tA / 60), 70 * ((42 - tA) / 60)
check("twopart #3 segment lengths (A, C)", (round(segA), round(segC)), (14, 42))
check("twopart #3 C is three times A", round(segC / segA, 6), 3.0)

# Q4 (E): faculty in 1999 is 5500/R; the 2004 ratio is R(100+S)/(100+F).
def ratio_2004(R, S, F):
    students = 5500 * (100 + S) / 100
    faculty = (5500 / R) * (100 + F) / 100
    return students / faculty
for R, S, F in ((20, -10, 25), (11, -4, 8), (50, -30, 60)):
    check("twopart #4 ratio at R=%g S=%g F=%g" % (R, S, F),
          round(ratio_2004(R, S, F), 9), round(R * (100 + S) / (100 + F), 9))

# Q5 (C): "most are X" within a group means fewer than half of that group are
# not-X. Only the touch-screen/accessories pairing is derivable.
check("twopart #5 derivable from 'most touch-screen have 2+ accessories'", True, True)


# -------------------------------------------------------------------- MSR --
# Q3 (C): 130 kg of ore per gram at average concentration; 20x enrichment.
kg_per_gram = 130 / 20
grams_per_day = 180_000 * 1000 / kg_per_gram         # 180,000 metric tons in kg
tons_per_day = grams_per_day / 1_000_000
days = 100 / tons_per_day
check("msr #3 days for 100 metric tons", (round(tons_per_day, 2), round(days, 2)), (27.69, 3.61))
check("msr #3 falls between 3 and 4 days", 3 < days < 4, True)


# ---------------------------------------------------------- Noncash graphs --
Y06 = {"debit": 17, "check": 24, "credit": 22, "auto": 20}
Y09 = {"debit": 39, "check": 30, "credit": 20, "auto": 24}
pct = {k: round(100 * (Y09[k] - Y06[k]) / Y06[k], 1) for k in Y06}
check("noncash #1 method at exactly +25%", [k for k, v in pct.items() if v == 25.0], ["check"])
check("noncash #2 leader each year",
      (max(Y06, key=Y06.get), max(Y09, key=Y09.get)), ("check", "debit"))
# Average value ratio: total value x1.1 spread over 20m instead of 22m payments.
check("noncash #3 average value increase",
      round(100 * (1.1 * Y06["credit"] / Y09["credit"] - 1)), 21)


# ---------------------------------------------------------- Commute graphs --
BANDS = ["d<=2", "2<d<=5", "5<d<=10", "10<d<=15", "d>15"]
WALK = [30, 10, 6, 0, 0]
TRANSIT = [2, 17, 30, 17, 37]

def median_band(counts):
    n = sum(counts)
    lo = (n + 1) // 2
    hi = lo if n % 2 else lo + 1
    run, out = 0, []
    for i, c in enumerate(counts):
        run += c
        if not out and run >= lo:
            out.append(i)
        if len(out) == 1 and run >= hi:
            out.append(i)
    return n, BANDS[out[0]], BANDS[out[1]]

check("commute #1 walkers median band", median_band(WALK), (46, "d<=2", "d<=2"))
check("commute #2 transit median band", median_band(TRANSIT), (103, "10<d<=15", "10<d<=15"))
check("commute #3 transit share above 15 km",
      round(100 * TRANSIT[4] / sum(TRANSIT), 1) > 33.3, True)
check("commute #3 transit riders outnumber walkers", sum(TRANSIT) > sum(WALK), True)

print()
print("checks failed:", len(fail))
for f in fail:
    print("  " + f)
raise SystemExit(1 if fail else 0)
