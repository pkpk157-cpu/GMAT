/* GMAT Prep — fast routes and takeaways for the 700-level Critical Reasoning
   assumption set. No `steps`: the transcribed explanations already give
   conclusion, support, the gap, the negation test and every wrong option, so
   they are kept as the full solution. Added here is the ⚡ fast route and the
   transferable rule.
   Keys are "setId#n"; index.html merges these over the question files. */
window.GMAT_EXPL = Object.assign(window.GMAT_EXPL || {}, {

"cr-700-assumption#1": {
  fast: "The plan halves the number of [[truckloads]] incinerated; the goal is halving the [[ash]]. Between them sits ash per truckload.\n" +
    "Prephrase \"the remaining refuse doesn't produce more ash per load\" and take it. Recycling removes non-burnable material, so the refuse left over could easily be ashier — which is exactly the risk the assumption closes.",
  take: "When a plan controls one quantity and the goal is stated in another, the assumption is that the conversion rate between them holds steady."
},

"cr-700-assumption#2": {
  fast: "Inmates [[chose]] to take the courses, so the comparison is between self-selected groups. That single word makes the answer a selection assumption.\n" +
    "Prephrase \"the course-takers weren't already less likely to reoffend\" and take it. Negate it and the lower reoffending rate becomes a fact about who signed up, not about what the courses did.",
  take: "Voluntary participation destroys a comparison unless the volunteers were like everyone else to begin with. Look for \"chose to\" in the stimulus."
},

"cr-700-assumption#3": {
  fast: "Sales in Borodia are flat and Borodian assemblers are fewer, so the argument infers imports rose. But fewer assemblers only means less domestic output if each one still assembles the same number of sets.\n" +
    "Prephrase \"productivity per assembler hasn't jumped\" and take it. Options about Vernland's assembler count or output describe the supply side, which the conclusion does not need.",
  take: "Headcount is not output. An argument that reads falling employment as falling production assumes productivity per worker is unchanged."
},

"cr-700-assumption#4": {
  fast: "Supply is capped, population is rising, so demand outruns supply — unless demand per person falls.\n" +
    "Prephrase \"per capita rice demand isn't about to drop\" and take it. Every other option adds detail about acreage, strains or other crops that the two-line supply-and-demand argument never uses.",
  take: "Total demand is population times demand per head. An argument driven by population growth assumes per-head consumption holds."
},

"cr-700-assumption#5": {
  fast: "Both fuels are produced domestically and production is rising, so imports fall — provided consumption does not rise faster.\n" +
    "Prephrase \"consumption isn't outpacing production\" and take it. Solar heating, new homes and the relative growth of gas versus oil all refine the picture without being needed for the conclusion.",
  take: "Self-sufficiency arguments compare two growth rates. Rising production only reduces imports if it grows at least as fast as use."
},

"cr-700-assumption#6": {
  fast: "The small firms are wiped out because they cannot afford to [[convert]] their lines. That only bites if they would actually have to convert.\n" +
    "Prephrase \"none of them already meets the coming specifications\" and take it. A small firm that already complies faces no conversion cost at all, and the conclusion fails.",
  take: "Before accepting that a new requirement imposes a cost, check that the affected parties do not already satisfy it."
},

"cr-700-assumption#7": {
  fast: "The evidence is the proportion of children [[sent to the nurse]], and the conclusion is about actual exposure or sensitivity. Reporting sits between them.\n" +
    "Prephrase \"referral practice hasn't changed\" and take it. If teachers now send allergic children to the nurse more readily than a decade ago, the figures move with no change in chemistry.",
  take: "A trend in recorded cases can be a trend in recording. Rule out changes in detection or referral before accepting a change in the underlying rate."
},

"cr-700-assumption#8": {
  fast: "The argument compares first-time jobs with rework jobs and concludes the difference is concentration, not competence. That comparison only isolates concentration if the same people do both.\n" +
    "Prephrase \"the mechanics doing rework aren't a different, better group\" and take it. Negate it and the whole competence conclusion collapses.",
  take: "To attribute a difference in results to the conditions, you must assume the people are the same. Check who performs each side of the comparison."
},

"cr-700-assumption#9": {
  fast: "The research covers old [[oil paint]]; the conclusion covers the [[paintings]]. A painting is paint plus everything holding it together.\n" +
    "Prephrase \"nothing else in the painting is vulnerable\" and take it. The near-miss option talks about other items in the museum's collection, which the conclusion never mentions.",
  take: "When evidence is about one component and the conclusion about the whole object, the assumption is that no other component is the weak point."
},

"cr-700-assumption#10": {
  fast: "Higher premiums plus slightly fewer collisions gives higher profit only if payouts per collision are not higher too.\n" +
    "Prephrase \"repairs don't cost more in Greatport\" and take it. Profit is premium minus claims, and the argument only ever examines the premium side.",
  take: "Profit needs both revenue and cost. An argument that compares prices and volumes while ignoring unit cost assumes that cost is equal."
},

"cr-700-assumption#11": {
  fast: "The premium for degrees is observed [[while degrees are scarce]]. Flood the workforce with graduates and the premium may simply shrink.\n" +
    "Prephrase \"the premium isn't just scarcity\" and take it. Negate it: if the higher salary comes from scarcity, more graduates means a smaller gap and no rise in the average.",
  take: "A price premium observed under scarcity need not survive an increase in supply. Projecting it forward assumes it is not scarcity-driven."
},

"cr-700-assumption#12": {
  fast: "The inference is: no impairment after a serious left-side stroke, therefore the language centre is on the right. That requires a left-side centre to be unmissable by such a stroke.\n" +
    "Prephrase \"a serious left-side stroke would have hit a left-side language centre\" and take it. Otherwise the stroke could have spared the centre entirely and proved nothing.",
  take: "\"No symptom, therefore no organ there\" assumes the test would have hit the organ. Check that the evidence had to detect what it claims to exclude."
},

"cr-700-assumption#13": {
  fast: "Two rival explanations for a false gold reading: bad assay methods, or samples that were tampered with. The argument picks the first, so it must rule out the second.\n" +
    "Prephrase \"nobody salted the samples\" and take it. Salting was a standard sixteenth-century fraud and is exactly the alternative the conclusion needs closed off.",
  take: "\"The measurement was wrong\" assumes the sample was genuine. Before blaming the method, rule out contamination of what was measured."
},

"cr-700-assumption#14": {
  fast: "The goal was halving the [[total yearly amount]]; the figures given are [[per production worker]]. From 90 to 40 per worker halves the total only if the workforce did not grow.\n" +
    "Prephrase \"there weren't far more workers last year\" and take it. This is the same per-capita-versus-total trap that runs through the whole set.",
  take: "A per-unit figure does not settle a total. When the goal is a total and the evidence is a ratio, the assumption pins down the denominator."
},

"cr-700-assumption#15": {
  fast: "The mice got an injection and ate less. The argument credits the blocking of cannabinoids, so it must assume the chemical has no appetite effect of its own.\n" +
    "Prephrase \"the blocker doesn't suppress appetite by itself\" and take it. That is the standard side-effect assumption whenever an intervention is used to knock out a mechanism.",
  take: "When a substance is used to disable a pathway, assume nothing until you rule out its direct effects. The tool must not cause the outcome it is testing."
},

"cr-700-assumption#16": {
  fast: "Tax revenue held steady at a lower rate, so room-nights must have risen. But room-nights are tourists times length of stay.\n" +
    "Prephrase \"stays didn't get longer\" and take it. Fewer tourists staying longer produces the same revenue with no increase in visitors, which is exactly what the conclusion claims.",
  take: "Total usage splits into number of users and usage per user. A conclusion about the first assumes the second held constant."
},

"cr-700-assumption#17": {
  fast: "A substantial portion [[tuned in]], and the conclusion is that many are interested in [[lengthy]] messages. Tuning in is not staying.\n" +
    "Prephrase \"they didn't switch off after a few minutes\" and take it. Ratings at the start of a programme say nothing about appetite for its length.",
  take: "Distinguish starting from finishing. A claim about interest in long-form content needs evidence that the audience stayed."
},

"cr-700-assumption#18": {
  fast: "The plants switched two years ago and diagnoses have not fallen, so the argument concludes either the old chemical was innocent or the new ones are guilty too.\n" +
    "That reasoning needs the effect to show up within two years. Prephrase \"damage from the old chemical appears in under two years\" and take it — otherwise the current cases are legacy cases.",
  take: "When an intervention's effect is judged after a fixed interval, the argument assumes the interval is long enough for the effect to appear."
},

"cr-700-assumption#19": {
  fast: "The winemakers [[add]] no sulfites, and the conclusion is that the wine is safe for sulfite-allergic drinkers. Sulfites also arise naturally in fermentation.\n" +
    "Prephrase \"natural sulfites aren't present in dangerous amounts\" and take it. Options about other allergens or other beverages widen a conclusion that is only about sulfites in these wines.",
  take: "\"None added\" is not \"none present\". When a conclusion about safety rests on what was not added, rule out the substance arising naturally."
},

"cr-700-assumption#20": {
  fast: "The stockpile is worth 25 percent more than the debt at [[current market prices]]. Selling a government-sized stockpile is exactly the thing that moves market prices.\n" +
    "Prephrase \"the sale won't crash the price by more than 25 percent\" and take it. The margin in the premise is the size of the price fall the plan can absorb.",
  take: "Valuing a large holding at the current price assumes selling it does not move that price. The stated margin tells you how much movement the argument can survive."
},

"cr-700-assumption#21": {
  fast: "The reassurance covers leaks only, and the conclusion is that the fears are groundless. A pipeline can pollute in other ways — construction disturbance, for one.\n" +
    "Prephrase \"a leak is the only pollution risk from this pipeline\" and take it. The option about the technology being effective merely restates the argument's own stated proviso.",
  take: "A safeguard against one hazard makes fears groundless only if that hazard is the whole risk. Beware options that repeat a proviso the argument already states."
},

"cr-700-assumption#22": {
  fast: "The historical relationship is between [[price]] and sales; the change being made is to [[tax]]. Nine cents on a ninety-cent pack is a ten percent price rise only if it is passed through.\n" +
    "Prephrase \"the tobacco companies won't absorb it\" and take it. Absorb the tax and the shelf price never moves, so neither do sales.",
  take: "A tax change becomes a price change only if it is passed on to buyers. Check the pass-through before applying a price elasticity."
},

"cr-700-assumption#23": {
  fast: "The plan puts out-of-shape people through rigorous jogging and weight lifting to cut medical bills. Ask what strenuous exercise does to unfit bodies.\n" +
    "Prephrase \"the programme won't generate injuries costing more than it saves\" and take it. The tempting option about participants' expenses being lower is close to the conclusion itself rather than a required assumption.",
  take: "A plan can create the very cost it is meant to reduce. Ask whether the remedy has its own downside before accepting the net saving."
},

"cr-700-assumption#24": {
  fast: "Tetracycline is found in the skeletons, and the argument says it was in the diet during life. Anything found in a buried skeleton could have arrived after burial.\n" +
    "Prephrase \"the deposits didn't form post-burial\" and take it. Soil bacteria are named in the passage itself, which makes the alternative route to the bones especially live.",
  take: "Evidence recovered from a burial must be shown to date from life. Post-depositional contamination is the standard assumption in archaeological arguments."
},

"cr-700-assumption#25": {
  fast: "Local customers are disappearing, so the wholesaler's sales will fall — but only if local customers are most of its business.\n" +
    "Prephrase \"it isn't mainly selling outside the county\" and take it. The premise says the Bolt Barn supplies virtually all of the county's fasteners, which says nothing about what share of [[its own]] revenue that is.",
  take: "\"X supplies nearly all of Y\" does not mean Y is nearly all of X's business. Read which way round a market-share statement runs."
},

"cr-700-assumption#26": {
  fast: "The rebuttal is built entirely on an [[average]] of a little over 30 minutes. An average is compatible with plenty of children doing three hours.\n" +
    "Prephrase \"assignments don't vary widely around the average\" and take it. If they do, the editorials' concern survives untouched for the children at the top end.",
  take: "An average cannot answer a worry about extremes. Rebutting a concern with a mean assumes the distribution is tight around it."
},

"cr-700-assumption#27": {
  fast: "The conclusion is that information services give a more [[balanced]] picture. Many groups posting directly only produces balance if they do not all lean the same way.\n" +
    "Prephrase \"the groups don't share one bias\" and take it. Access, reach and how accurately traditional sources report are all beside a conclusion about balance.",
  take: "Many voices produce balance only if the voices differ. An argument from diversity of sources assumes diversity of viewpoint."
},

"cr-700-assumption#28": {
  fast: "Identical motifs in distant cities is read as evidence of travelling artisans. The obvious rival is a shared pattern book that local artisans everywhere could work from.\n" +
    "Prephrase \"there was no common repertory of designs\" and take it. Negate it and local craftsmen explain the mosaics perfectly well without anybody travelling.",
  take: "Shared designs across regions can come from travelling makers or from circulating templates. An argument for the first must exclude the second."
}

});
