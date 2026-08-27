/* GMAT Prep — fast routes and takeaways for the Critical Reasoning assumption
   and strengthen sets. No `steps`: the transcribed explanations already give
   conclusion, support, the gap, the negation test and every wrong option, so
   they are kept as the full solution. Added here is the ⚡ fast route and the
   transferable rule.
   Keys are "setId#n"; index.html merges these over the question files. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"cr-assumption#5": {
  fast: "The credit has an eligibility threshold — more than 20 workers — and the prediction is about [[most]] manufacturers. Any time an incentive has a qualifying bar, the assumption is that the people it is meant to move can actually clear it.\n" +
    "Prephrase \"most of them can reach 20 workers\" before reading. Then negate your candidate: if most cannot, the credit is unreachable and nobody moves.",
  take: "An incentive with a threshold assumes the target group qualifies. Find the bar in the premise and ask who is on the wrong side of it."
},

"cr-assumption#6": {
  fast: "The premise is about [[current]] supply and demand; the conclusion is about the future. That tense shift is the gap in almost every plan question.\n" +
    "Prephrase \"demand won't outrun supply\" and take the option that freezes consumption growth relative to production. Options about electric power, home heating or mileage all compare ethanol to something the argument never claims it beats.",
  take: "When present-tense evidence supports a future-tense conclusion, the assumption is that nothing relevant changes in between — usually that demand does not grow faster than supply."
},

"cr-assumption#7": {
  fast: "Split the causal chain into links: warming → higher seas → coastal cities destroyed. The evidence covers the first two links; only the last one is asserted.\n" +
    "So the assumption protects the last link: nothing stands between rising water and destroyed cities. Prephrase \"no sea defences\" and the option about technology diverting the seas is exactly that.",
  take: "Attack or defend the weakest link, not the whole chain. The assumption sits at the step the evidence stops short of."
},

"cr-assumption#8": {
  fast: "Read the conclusion's exact adjective: supplies will be [[stable]]. The premises are all about cost, not steadiness — that mismatch is the question.\n" +
    "Wind and solar depend on weather, so prephrase \"the weather cooperates reliably\" and take it. Public opinion, new fossil deposits and comparative technology costs are all about cost or popularity, which the conclusion never mentions.",
  take: "Match the conclusion's key word against the premises. When the premises prove cost and the conclusion claims reliability, the assumption bridges that exact word."
},

"cr-assumption#9": {
  fast: "A quantity went missing and the argument names one culprit. The assumption is always that no other explanation accounts for the shortfall.\n" +
    "Here the obvious rival is that the lobsters simply weren't there — a collapsed population produces the same shortfall with no theft at all. Prephrase \"stocks didn't crash\" and take it.",
  take: "\"Output fell, so X took it\" assumes the output existed to be taken. Rule out the supply itself shrinking before blaming any actor."
},

"cr-assumption#10": {
  fast: "The conclusion is that dating rice and yams gives the [[earliest possible]] date for agriculture. That only works if no staple crop was ever available before them.\n" +
    "The passage carefully says all [[recorded]] staple crops came from elsewhere — that word is the crack. Prephrase \"no unrecorded staple existed earlier\" and the option about crops abandoned after rice and yams arrived is precisely it.",
  take: "Watch qualifiers like \"recorded\", \"known\" or \"documented\" in the premises. A conclusion stated without the qualifier assumes the record is complete."
},

"cr-assumption#11": {
  fast: "The evidence is medical, but the conclusion is about whether a [[ban on sales]] will change behaviour. Jump straight to the mechanism: does the ban actually stop children playing?\n" +
    "Prephrase \"children can't get the games another way\" and the option about parents refusing to buy them is that hole plugged. The option requiring games to be the only cause of the condition is too strong — the claim is only that a ban would help.",
  take: "A policy argument needs the policy to work, not just the problem to be real. Ask how the rule could be circumvented, and the assumption appears."
},

"cr-assumption#12": {
  fast: "This is a causal-direction question wearing a genetics costume. The mutation is found in survivors' descendants; the claim is the mutation caused survival.\n" +
    "Run the reverse before reading: could surviving the Plague have produced the mutation? Prephrase \"the Plague didn't cause Delta-32\" and take it. Options about other bacterial diseases are outside a conclusion that only concerns the Plague.",
  take: "For any \"A is found with B, so A caused B\", one required assumption is that B did not cause A. Test the reverse arrow first."
},

"cr-assumption#13": {
  fast: "A 98% accurate test has two ways to be wrong, and the conclusion tolerates only one of them. Unnecessary surgeries fall and necessary ones do not — so the 2% of errors must never say \"no appendicitis\" to someone who has it.\n" +
    "That means every error must be the other kind: a false positive. Prephrase it before reading the options, then match wording carefully — one option is the exact negation of the right one.",
  take: "Test-accuracy questions turn on which direction the errors run. Sort them into false positives and false negatives, then ask which kind the conclusion can survive."
},

"cr-assumption#14": {
  fast: "The conclusion is about public-health benefit; the evidence is only about harm to [[children themselves]]. Vaccination also protects other people from the vaccinated.\n" +
    "Prephrase \"children aren't spreading it to adults\" and take it. Negation confirms instantly: if adults mostly catch influenza from children, vaccinating children is a major public-health benefit.",
  take: "For a vaccine, a benefit argument that counts only the recipient's own risk assumes away transmission. Ask who else is protected."
},

"cr-assumption#15": {
  fast: "The data covers only what happens where officers are [[added]]. The plan also takes officers away from somewhere, and the conclusion is about the city as a whole.\n" +
    "Prephrase \"crime doesn't jump in the districts we strip\" and take it. Options about severity, district counts or another city all answer a question the argument never asked.",
  take: "When a plan moves a resource, the evidence usually covers only the gaining side. The assumption is that the losing side does not lose more than the gainer gains."
},

"cr-assumption#16": {
  fast: "The method extrapolates one century's rate backwards over all of history. Any extrapolation assumes the sample period is representative.\n" +
    "Prephrase \"the last hundred years were normal\" and take the option saying recent salt deposits have not been unusually large. The option about salts being consumed by biological activity is tempting but would only make the estimate a maximum — which is exactly what is claimed.",
  take: "Extrapolating a recent rate over a long past assumes the recent rate is typical. That assumption is nearly always the answer on rate-extrapolation arguments."
},

"cr-assumption#17": {
  fast: "The height difference is measured [[today]], between island and mainland. The conclusion attributes it to change on the island — which assumes the mainland did not change instead.\n" +
    "Prephrase \"the mainland plants didn't grow taller\" before reading. Then reject the option demanding that height be the [[only]] difference between the populations; \"at least partially attributable\" needs nothing that strong.",
  take: "A difference between two groups can come from either group moving. When the conclusion blames one side, the assumption is that the other side stayed put."
},

"cr-assumption#18": {
  fast: "The evidence is a [[fragment]] with four holes matching four notes; the conclusion is about the whole seven-note scale. Ask whether the object could ever have carried the rest.\n" +
    "Prephrase \"the bone was long enough for the full scale\" and take it. Negate it: if the bone was too short, the four holes are a coincidence of spacing and prove nothing about a diatonic scale.",
  take: "When evidence is a fragment and the conclusion is about the whole, the assumption is that the whole could have existed. Check the physical object before the interpretation."
},

"cr-assumption#19": {
  fast: "One student, two things happening at once, and a causal conclusion. Reverse causation is the first thing to test on any single-case correlation.\n" +
    "Prephrase \"the falling GPA didn't cause the arguments\" — which is exactly what a parent-child conflict over grades would look like — and take it. Options about intellectual ability or irreversibility describe consequences, not requirements.",
  take: "Before accepting cause from co-occurrence, ask whether the supposed effect could be the cause. With families and grades, the reverse story is always available."
},

"cr-assumption#20": {
  fast: "The defence mechanism has a stated limit: reviewers catch biases they do [[not share]]. So the argument only works if the biases in question are not universal.\n" +
    "Prephrase \"biases aren't shared by all scientists\" and take it. One option says reviewers do not [[always]] have biases, which is far weaker than what the argument needs, and another makes shared bias harmless — a comfort, not a requirement.",
  take: "When the premise describes a filter with a stated blind spot, the assumption is that the thing being filtered does not fall into that blind spot."
},

"cr-assumption#21": {
  fast: "The stated rule is about [[serious]] newspapers, and the conclusion is about [[our]] newspaper. A conditional whose antecedent is never asserted is a five-second question.\n" +
    "Prephrase \"we are a serious newspaper\" and take it. Reader preference, cost and competitors' choices are all reasons a newspaper might drop horoscopes, but none of them is the reason this argument gives.",
  take: "When a principle applies to a category, the argument assumes its subject is in that category. Check that the antecedent is actually satisfied."
},

"cr-assumption#22": {
  fast: "Bare post hoc: profits rose after the move, therefore because of the move. There is only one assumption such an argument ever makes.\n" +
    "Prephrase \"nothing else caused the rise\" and take it. Cheaper overseas labour would be a strengthener, and continued future profit is a prediction the conclusion never makes.",
  take: "\"Y happened after X, so X caused Y\" assumes no alternative cause. That is the required assumption every time, no matter the subject matter."
},

"cr-assumption#23": {
  fast: "A shorter route only saves time for people who take it. The gap between \"the road exists\" and \"commute times fall\" is adoption.\n" +
    "Prephrase \"commuters will actually use it\" and take it. Construction cost, parking and suburban growth are all real-world concerns and none of them is required for the stated conclusion.",
  take: "Infrastructure and product arguments assume uptake. Between building the thing and getting the benefit sits the question of whether anyone uses it."
}

});
