/* GMAT Prep — Practice Sets repository
   ------------------------------------------------------------------
   Sets defined here appear in the app under "Practice sets". You feed
   your answers in the app; it scores them and auto-logs each question
   into the tagged topic's accuracy.

   Schema for each set:
   {
     id, title, section: "quant"|"data"|"rc"|"cr", source, sample?,
     questions: [ { n, topic:"<exact topic name>", correct:"C", options:5, flag? } ]
   }
   options defaults to 5 (A-E). flag:true = answer inferred without a key.
   ------------------------------------------------------------------ */
window.GMAT_SETS = [
  {
    id: "quant-numbersystem-2-2",
    title: "Number System & Simplification — Exercise",
    section: "quant",
    source: "2.2 Number System Exercise (with answer key)",
    questions: [
      { n:1, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:2, topic:"Divisibility & remainders", correct:"B", options:4 },
      { n:3, topic:"Odd / even & sign rules", correct:"A", options:4 },
      { n:4, topic:"Integers, factors & multiples", correct:"C", options:4 },
      { n:5, topic:"Divisibility & remainders", correct:"B", options:4 },
      { n:6, topic:"Integers, factors & multiples", correct:"B", options:4 },
      { n:7, topic:"Divisibility & remainders", correct:"B", options:4 },
      { n:8, topic:"Divisibility & remainders", correct:"D", options:4 },
      { n:9, topic:"Divisibility & remainders", correct:"D", options:4 },
      { n:10, topic:"Fractions & decimals", correct:"B", options:4 },
      { n:11, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:12, topic:"Integers, factors & multiples", correct:"B", options:4 },
      { n:13, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:14, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:15, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:16, topic:"Fractions & decimals", correct:"D", options:4 },
      { n:17, topic:"Fractions & decimals", correct:"C", options:4 },
      { n:18, topic:"Divisibility & remainders", correct:"D", options:4 },
      { n:19, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:20, topic:"Divisibility & remainders", correct:"B", options:4 },
      { n:21, topic:"Divisibility & remainders", correct:"B", options:4 },
      { n:22, topic:"Exponent rules", correct:"A", options:4 },
      { n:23, topic:"Divisibility & remainders", correct:"C", options:4 },
      { n:24, topic:"Divisibility & remainders", correct:"C", options:4 },
      { n:25, topic:"Integers, factors & multiples", correct:"D", options:4 },
      { n:26, topic:"Fractions & decimals", correct:"A", options:4 },
      { n:27, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:28, topic:"Divisibility & remainders", correct:"C", options:4 },
      { n:29, topic:"Divisibility & remainders", correct:"D", options:4 },
      { n:30, topic:"Fractions & decimals", correct:"B", options:4 },
      { n:31, topic:"Fractions & decimals", correct:"B", options:4 },
      { n:32, topic:"Divisibility & remainders", correct:"C", options:4 },
      { n:33, topic:"Integers, factors & multiples", correct:"A", options:4 },
      { n:34, topic:"Prime numbers & factorization", correct:"B", options:4 },
      { n:35, topic:"Exponent rules", correct:"B", options:4 },
      { n:36, topic:"Prime numbers & factorization", correct:"C", options:4 },
      { n:37, topic:"Expressions & factoring", correct:"D", options:4 },
      { n:38, topic:"Divisibility & remainders", correct:"A", options:4 },
      { n:39, topic:"Fractions & decimals", correct:"B", options:4 },
      { n:40, topic:"Sequences & series", correct:"B", options:4 },
      { n:41, topic:"Prime numbers & factorization", correct:"D", options:4 },
      { n:42, topic:"Roots & radicals", correct:"B", options:4 },
      { n:43, topic:"Exponent rules", correct:"B", options:4 },
      { n:44, topic:"Exponent rules", correct:"A", options:4 },
      { n:45, topic:"Fractions & decimals", correct:"B", options:4 },
      { n:46, topic:"Roots & radicals", correct:"D", options:4 },
      { n:47, topic:"Roots & radicals", correct:"D", options:4 },
      { n:48, topic:"Roots & radicals", correct:"D", options:4 },
      { n:49, topic:"Roots & radicals", correct:"C", options:4 },
      { n:50, topic:"Roots & radicals", correct:"C", options:4 },
      { n:51, topic:"Sequences & series", correct:"B", options:4 },
      { n:52, topic:"Fractions & decimals", correct:"A", options:4 },
      { n:53, topic:"Fractions & decimals", correct:"B", options:4 },
      { n:54, topic:"Fractions & decimals", correct:"D", options:4 },
      { n:55, topic:"Fractions & decimals", correct:"C", options:4 },
      { n:56, topic:"Linear equations", correct:"A", options:4 },
      { n:57, topic:"Exponent rules", correct:"B", options:4 },
      { n:58, topic:"Prime numbers & factorization", correct:"B", options:4 },
      { n:59, topic:"Linear equations", correct:"D", options:4 }
    ]
  }
];
