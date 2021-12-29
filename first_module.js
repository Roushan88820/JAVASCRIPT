                                                                      CODE 
                                                                      
// npm install minimist :- this is to install a library from npm , "minimist is the name of library present in package"

let parser = require('minimist');
let args = parser(process.argv);

console.log(args);

 /* 
 {syntax of writing command line arguments if you are using minimist library}

// node first_module.js --name "roushan kumar" --age 21
// node first_module.js --name="roushan kumar" --age=21
*/

                                                                   RESULTS
                                                                   
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.


PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js -x 10 -y 20
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js'
  x: 10,
  y: 20
}
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js "x = 20" " y=30"
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js',
  'x = 20',
]
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --x 20 --y 30
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js',
  '--x',
  '20',
  '--y',
  '30'
]
PS C:\Users\91888\Desktop\javascript\lecture 22>  node first_module.js --x 20 --y 30
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js'
  ],
}
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --name = "roushan kumar" --age = 
21
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js',
    'roushan kumar',
    21
  name: '=',
  age: '='
}
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --name = "roushan kumar" --age = 

{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js',
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --name="roushan kumar" --age=34
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js'
  ],
  name: 'roushan kumar',
  age: 34
}
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --name="roushan kumar" --age 21
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js'
  ],
  name: 'roushan kumar',
  age: 21
}
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --name "roushan kumar" --age 21  
{
  _: [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\91888\\Desktop\\javascript\\lecture 22\\first_module.js'
  ],
  name: 'roushan kumar',
  age: 21
}
PS C:\Users\91888\Desktop\javascript\lecture 22>                                                                   

  *****************************************************************************************************************************************************************************
  
  //                   (NEW EXAMPLE) 

 let minimist = require('minimist');
 let args = minimist(process.argv);

 let name = args.name;
 let age =  args.age;

 if(age>30) {

 console.log("hello " + name + " mummy bulaa rhii hai" );

 } else {
         
console.log("heyy " + name + " where is the party tonight?");

 }
                                      RESULT

 PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --name="roushan" --age=21  

heyy roushan where is the party tonight?
  
PS C:\Users\91888\Desktop\javascript\lecture 22> node first_module.js --name="roushan" --age=50        

hello roushan mummy bulaa rhii hai



  
