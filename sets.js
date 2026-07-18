/* GMAT Prep — Practice Sets repository
   ------------------------------------------------------------------
   Sets defined here appear in the app under "Practice sets". You feed
   your answers in the app; it scores them and auto-logs each question
   into the tagged topic's accuracy.

   Schema for each set:
   {
     id:      "unique-string",          // stable id (don't reuse)
     title:   "Shown to the user",
     section: "quant" | "data" | "rc" | "cr",
     source:  "optional document name",
     sample:  true,                     // optional — marks demo sets
     questions: [
       // topic MUST match a topic name in that section (see index.html SECTIONS).
       // options defaults to 5 (A–E). flag:true = answer inferred without a key (double-check).
       { n:1, topic:"Assumption", correct:"B", options:5, flag:false }
     ]
   }
   ------------------------------------------------------------------ */
window.GMAT_SETS = [
  {
    id: "sample-cr-1",
    title: "Sample set — Critical Reasoning",
    section: "cr",
    source: "Demo (remove anytime)",
    sample: true,
    questions: [
      { n: 1, topic: "Assumption",       correct: "B" },
      { n: 2, topic: "Weaken",           correct: "D" },
      { n: 3, topic: "Strengthen",       correct: "A" },
      { n: 4, topic: "Identify the flaw", correct: "C" },
      { n: 5, topic: "Assumption",       correct: "E" }
    ]
  }
];
