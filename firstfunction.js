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