// node first_File_manipulation.js --source=file1.txt  --dest=file2.txt

let minimist = require("minimist");
let args = minimist(process.argv);
let fs = require("fs");
console.log(args.source);
console.log(args.dest);

// read file1.txt :- file reading

let stext = fs.readFileSync(args.source,'utf-8');
console.log(stext);

// capitalize all letters of file

let words = [];
words = stext.split(" ");
console.log(words);

for(let i = 0;i<words.length;i++) {

    words[i] = words[i].toUpperCase();
}
console.log(words);

 //MOVING DATA INTO ANOTHER FILE


let dest = words.join(" ");
 console.log(dest);

fs.writeFileSync(args.dest,dest,"utf-8");

 //  MODIFIED METHOD               

// node first_File_manipulation.js --source=file1.txt  --dest=file2.txt

let minimist = require("minimist");
let args = minimist(process.argv);
let fs = require("fs");   


let stext = fs.readFileSync(args.source,'utf-8');
// console.log(stext);

let dest = stext.toUpperCase(" ")

fs.writeFileSync(args.dest,dest,"utf-8");




                                                 RESULT
                                                 

PS C:\Users\91888\Desktop\javascript\lecture 22> node first_File_manipulation.js --source=file1.txt  --dest=file2.txt
file1.txt
file2.txt
this year was not that much great as was last year;
butt i got one beautiful thing in
this year and that is coding,
i will succeed and in the age of 24 i will be in the
company like google,microsoft,amazon,facebook,adobe;
i know i can make it.

[
  'this',
  'year',
  'was',
  'not',
  'that',
  'much',
  'great',
  'as',
  'was',
  'last',
  'year;\r\nbutt',
  'i',
  'got',
  'one',
  'beautiful',
  'thing',
  'in',
  '\r\nthis',
  'year',
  'and',
  'that',
  'is',
  'coding,\r\ni',
  'will',
  'succeed',
  'and',
  'in',
  'the',
  'age',
  'of',
  '24',
  'i',
  'will',
  'be',
  'in',
  'the',
  '\r\ncompany',
  'like',
  'google,microsoft,amazon,facebook,adobe;\r\ni',
  'know',
  'i',
  'can',
  'make',
  'it.\r\n'
]
[
  'THIS',
  'YEAR',
  'WAS',
  'NOT',
  'THAT',
  'MUCH',
  'GREAT',
  'AS',
  'WAS',
  'LAST',
  'YEAR;\r\nBUTT',
  'I',
  'GOT',
  'ONE',
  'BEAUTIFUL',
  'THING',
  'IN',
  '\r\nTHIS',
  'YEAR',
  'AND',
  'THAT',
  'IS',
  'CODING,\r\nI',
  'WILL',
  'SUCCEED',
  'AND',
  'IN',
  'THE',
  'AGE',
  'OF',
  '24',
  'I',
  'WILL',
  'BE',
  'IN',
  'THE',
  '\r\nCOMPANY',
  'LIKE',
  'GOOGLE,MICROSOFT,AMAZON,FACEBOOK,ADOBE;\r\nI',
  'KNOW',
  'I',
  'CAN',
  'MAKE',
  'IT.\r\n'
]
THIS YEAR WAS NOT THAT MUCH GREAT AS WAS LAST YEAR;
BUTT I GOT ONE BEAUTIFUL THING IN
THIS YEAR AND THAT IS CODING,
I WILL SUCCEED AND IN THE AGE OF 24 I WILL BE IN THE
COMPANY LIKE GOOGLE,MICROSOFT,AMAZON,FACEBOOK,ADOBE;
I KNOW I CAN MAKE IT.

file2 meii chize gyii

