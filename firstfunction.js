                                                           EXAMPLE  (print all prime numbers between given number by user)

let nums = process.argv;
let num = parseInt(nums[2],10);

for(let i = 2;i<= num;i++) {
  

  let isprime = Is_prime(i); 
  if (isprime == true) {
      console.log(i);
  }

}
function Is_prime(x) {
isprime = true;
for(let div = 2; div*div<=x;div++) {
  let rem = x%div;
  if(rem==0) {
      isprime = false;
      break;
  }

}
return isprime;

}

                                                                                 RESULT
                                                                                 
PS C:\Users\91888\Desktop\javascript\lecture 22> node firstfunction.js 100
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
                                                                                
                                                                                 
                                                                                 
