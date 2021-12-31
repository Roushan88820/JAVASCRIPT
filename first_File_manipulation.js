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


