// node firstBigfile.js  --source=big_file.txt
let minimist = require("minimist");
let args = minimist(process.argv);
let fs = require("fs"); // file system library is already present in node RTE

//console.log(args.source);

//MAKING OF AN ARRAY

let arr = [] ;
for(let i = 1;i<= 5000000;i++) {
    arr.push(i);  // putting values in an array
}

//console.log(arr);

let string = arr.join(" \n ");

//console.log(string);

fs.writeFileSync(args.source,  string, "utf-8");  // USED TO WRITE A NEW FILE
fs.appendFileSync(args.source, string, "utf-8");  // USED TO ADD CONTENT IN
fs.appendFileSync(args.source, string, "utf-8");
fs.appendFileSync(args.source, string, "utf-8");
