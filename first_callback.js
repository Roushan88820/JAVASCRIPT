//  node first_callback.js --source=big_file.txt --n=70000;

// first_lack_of_callback.js --source=big_file.txt

// task 1:- file reading (hardisk);  

// task 2:- print prime numbers till the given number "n";

// task 2 will be done in parallel with task 1 (which is good);


let minimist = require("minimist");
let fs = require("fs"); 
let args = minimist(process.argv);

// TASK 1 ARENA 

let time_1 = Date.now();
console.log("task 1 started at "+ time_1 % 100000);

fs.readFile(args.source, function (error,data){

let time_2 = Date.now();    
console.log("task 1 finished at " + time_2 % 100000 );

})


// TASK 1 ARENA ENDS

// TASK 2 AREA STARTS 
let time_3 = Date.now();
console.log("task_2 started at " + time_3 % 100000000);

function Is_prime(x) {
  let isPrime = true;
    for(let div = 2; div<= x-1; div++) {

        if(x % div == 0) {
            isPrime=false;
            break;
        }

    }

    return isPrime;
}

let array = [];
 
for(let i = 2; i<=70000; i++) {

    let Isprime = Is_prime(i);
    
    if(Isprime==true) {
        array.push(i);
    }

}

let time_4 = Date.now();

console.log("task_2 finished at " + time_4 % 100000000) ;
console.log("task 2 take " + time_4 - time_3 + " time");

 *******************************************************************************************************************************************************************************
 
                                                                                RESULTS

# result without using callback

PS C:\Users\91888\Desktop\javascript\lecture 23> node first_lack_of_callback.js --source=big_file.txt     
task 1 started at 639626
task 1 finished at 8639820
task 2 started at 8639821
task 2 finished at 8640060
239
434

# result with using callback

PS C:\Users\91888\Desktop\javascript\lecture 23> node first_callback.js --source=big_file.txt --n=70000;  
task 1 started at 19603
task_2 started at 48819609
task_2 finished at 48820043
NaN time
task 1 finished at 20215
PS C:\Users\91888\Desktop\javascript\lecture 23> node first_callback.js --source=big_file.txt --n=70000;  
task 1 started at 32957
task_2 started at 48832972
task_2 finished at 48833401
NaN time
task 1 finished at 33571

