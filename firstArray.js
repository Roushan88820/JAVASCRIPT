let clargs = process.argv;
let n = parseInt(clargs[2],10);

//initialization of an array in javascript;

let arr = [];

// random access and value filling of an array

for(let i = 0; i<n; i++) {
 let value = parseInt(clargs[i+3]);
  arr.push(value);
       or
  // arr[i] = value;     
}

for(let i = 0;i<arr.length;i++) {
    console.log(arr[i]);
}
console.log(arr);


                                                                  RESULT
                                                                  

PS C:\Users\91888\Desktop\javascript\lecture 22> node firstArray.js 5 10 20 30 40 50 
10
20
30
40
50
[ 10, 20, 30, 40, 50 ]                                                                  
