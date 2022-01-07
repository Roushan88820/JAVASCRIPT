// first_lack_of_callback.js --source=big_file.txt

// task 1:- file reading ; (hardisk kaa kaam) ;

// task 2:- print prime numbers till the given number "n"; (cpu kaa  kaam) ;

// task 2 will be done only when task 1 will be completed(which is not good);

let minimist = require("minimist");
let args = minimist(process.argv);
let fs = require("fs");

// console.log(args.source);
function Is_prime(x) {

let isPrime = true;

for(let div = 2; div<= x-1 ; div++) {
    let rem  = x % div;

  if( rem == 0) {
      isPrime = false;
      break;
  }

}
return isPrime;

}



//                 TASK_1 ARENA

let time_1 = Date.now();
console.log("task 1 started at " + time_1 % 1000000);

let stext = fs.readFileSync(args.source,"utf-8");

let time_2 = Date.now();

console.log("task 1 finished at " + time_2 % 10000000)

console.log( time_2 - time_1);



//                  TASK_2 ARENA

 let time_3 = Date.now();
 let array = [];

for(let i = 2; i<=50000; i++) {

    let is_prime = Is_prime(i);
    if(is_prime==true) {
       
        array.push(i);

    }
}
 let time_4 = Date.now();
 console.log("task 2 started at " + time_3 % 10000000);
 console.log("task 2 finished at " + time_4 % 10000000);
 
console.log( time_4 - time_3);
console.log( time_4 - time_1);







