/* GMAT Prep — fast routes and takeaways for the Critical Reasoning weaken set.
   These records deliberately carry no `steps`: the transcribed explanation
   already lays out conclusion, support, the gap and every wrong option, so it
   is kept and shown as the full solution. What is added is the ⚡ fast route —
   how to reach the answer under time pressure — and the transferable rule.
   Keys are "setId#n"; index.html merges these over the question files. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"cr-weaken#1": {
  fast: "The conclusion is about a *number* of deaths; the evidence is a *rate* among reported cases. Whenever a percentage is used to argue about a count, attack the denominator before reading the options.\n" +
    "Prephrase: \"something made reported cases fall.\" Then scan for the option that shrinks the pool of reported cases — mild cases dropping out of the statistics — rather than one that changes deaths.",
  take: "A rate can rise because the numerator grew or because the denominator shrank. When a count-conclusion rests on a rate, the denominator is where the answer lives."
},

"cr-weaken#2": {
  fast: "Same shape as any percentage-to-quantity argument: the premise is a share of total waste, the conclusion is an absolute tonnage. Attack the total.\n" +
    "Prephrase before looking at the options — \"the rest of the waste shrank\" — and then the option about non-plastic waste being diverted to recycling identifies itself immediately.",
  take: "A rising share does not mean a rising amount. If the rest of the mix falls, one component's percentage climbs while its quantity stays flat."
},

"cr-weaken#4": {
  fast: "Notice the word \"only\" in the conclusion: firms can gain share *only* through acquisition. An \"only by X\" claim is the weakest kind of conclusion, because a single alternative route destroys it.\n" +
    "So do not look for something that makes acquisitions unattractive — look for any other way share could move. Rivals being driven out of the market entirely is exactly that.",
  take: "Conclusions containing \"only\", \"must\" or \"the sole way\" fall to one counterexample. Hunt for an alternative route, not for a flaw in the stated one."
},

"cr-weaken#5": {
  fast: "The premise gives a falling *percentage* of interstate retirees choosing Florida; the conclusion is about the *number* of retirees arriving. That mismatch is the whole question.\n" +
    "Prephrase \"the pie got bigger\", then pick the option saying interstate retirement moves rose overall — a smaller slice of a much larger pie can still be more people.",
  take: "A share and a count move independently. When the conclusion is about how many, ask what happened to the total the percentage is taken from."
},

"cr-weaken#6": {
  fast: "The evidence is a raw injury count and the conclusion is about danger *per ride*. Any count depends on risk multiplied by exposure, so attack exposure.\n" +
    "Prephrase: \"there is simply far more sledding now.\" The option about plastic sleds working in a wider range of snow conditions is that idea in disguise.",
  take: "Total incidents = risk per exposure × number of exposures. A conclusion about risk drawn from a raw count is vulnerable on the exposure side."
},

"cr-weaken#7": {
  fast: "This is a prediction from precedent: it worked twice, so it will work again. Attack what has changed since those episodes rather than the mechanism itself.\n" +
    "Prephrase \"conditions are different now\", and the option about manufacturing running at near-peak capacity stands out — cheap goods cannot become exports if there is no spare capacity to make them.",
  take: "When an argument projects a past result forward, the strongest attack is a change in the starting conditions that made the past result possible."
},

"cr-weaken#8": {
  fast: "The conclusion is about *urban unemployment*, which depends on jobs in the city and on how many people move there. The argument only counts jobs, so attack the migration side.\n" +
    "Prephrase \"fewer people would move to the cities\", and the option about unprofitable farming driving small farmers into the cities is the one that turns the argument on its head.",
  take: "Unemployment has two inputs: jobs available and people seeking them. An argument that tracks only one of them is open on the other."
},

"cr-weaken#9": {
  fast: "The comparison is made on exactly one dimension — speed of retrieving stories on chosen topics. Ask what else a newspaper does that the new service structurally cannot.\n" +
    "Prephrase \"people browse for things they weren't looking for\", and the option about idly scanning headlines for unfamiliar stories is exactly that gap: a subscription service only delivers topics you already named.",
  take: "When a substitute is praised on one dimension, weaken by naming a different function the substitute cannot perform at all."
},

"cr-weaken#10": {
  fast: "The passage supplies its own definition — navigation means finding the way from *unfamiliar* territory. Whenever an argument opens with a definition, check that the evidence actually satisfies it.\n" +
    "Prephrase \"the release site wasn't unfamiliar\", and the option putting it on the bear's annual migration route is precisely that.",
  take: "When a term is explicitly defined, test the evidence against every element of the definition. Evidence that misses one element proves nothing."
},

"cr-weaken#11": {
  fast: "This is a two-hypothesis question, so the answer must move both ways: support one and undermine the other. Any finding that damages both, or bears on neither, is out.\n" +
    "Check each option twice — once against fatigue, once against blindness. A beetle that changes course while running is clearly seeing (blindness down), and pauses growing more frequent as the chase wears on is exactly what tiring predicts (fatigue up).",
  take: "For \"supports one and undermines the other\", evaluate every option against both hypotheses. An option that hurts both is a common and attractive wrong answer."
},

"cr-weaken#12": {
  fast: "Post hoc reasoning: a change, then an effect, therefore causation. The standard weakener is a rival cause operating over the same period.\n" +
    "Prephrase \"something else changed too\", then scan only for another intervention in that same year. Lower speed limits and speed cameras fit before you finish reading the option.",
  take: "\"X happened, then Y improved, so X caused Y\" is weakened by any other change in the same window. Look for a rival cause, not for a flaw in X."
},

"cr-weaken#13": {
  fast: "The groups were self-selected — nobody assigned anyone to take the vitamin. That single observation tells you the answer will be a confounding variable.\n" +
    "Prephrase \"the two groups differ in some other way\", and the option about vitamin-takers also exercising and sleeping more is the confounder written out.",
  take: "Self-selected groups invite confounding. When a study compares people who chose a behaviour with people who did not, weaken with a trait the two groups differ on."
},

"cr-weaken#14": {
  fast: "The claim is \"saves money with *no downside*\", which is two claims in one. Attack either the saving or the downside — and the strongest options attack both at once.\n" +
    "Prephrase \"there's a hidden cost\", then look for something the chemical-identity premise does not cover. Fit with existing equipment is the classic uncovered dimension.",
  take: "\"Identical except cheaper\" arguments ignore everything outside the compared attribute. Compatibility, training and switching costs are where the hidden downside usually sits."
}

});
