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
fs.appendFileSync(args.source, string, "utf-8");  // PEHLEE WAALI FILE MEI LAST CONTENT JAHA PDAA HOTA HAII USKE JUST BAAD YEE FUNCTION ADD KARR DETAA HAI NYAA CONTENT
fs.appendFileSync(args.source, string, "utf-8");  // AURR "AppendFileSync" FUNCTION NYII FILE NHII HOGII TO WOO BHI BNAA DEGAA
fs.appendFileSync(args.source, string, "utf-8");

                                                    RESULT
                                                    
arr.push(i)  iseyy array meii values dall jaati haii 

fs:- file system ek library hotii haii joo read and write karne ke kaam aati hai, yee node ki in built library haiii jiseyy direct use karr letee haii download nhii karna padtaa 

npm install "library name" :- yee karnee see koii v library download hoo jaati hai 

npm :- node package manager :- ismee libraries hotii haii 

args.source meii usmee padii huyi file mil jaati hai jaise usmee padii huyii file mill jaati hai jaise ismee big_file mil gyii iskaa use abb code mei khii v karr loo

array.join see koii v array kee saare element ekk saath aakee string bnn jaatee haii 

