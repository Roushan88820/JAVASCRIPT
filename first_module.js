// npm install minimist :- this is to install a library from npm

let parser = require('minimist');
let args = parser(process.argv);

console.log(args);

 /* 
 {syntax of writing command line arguments if you are using minimist library}

// node first_module.js --name "roushan kumar" --age 21
// node first_module.js --name="roushan kumar" --age=21
*/