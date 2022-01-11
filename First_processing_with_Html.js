// npm install jsdom
// npm install minimist
// node First_processing_with_Html.js --source="sample.html"

let minimist = require("minimist");
let jsdom = require("jsdom");
let fs = require("fs");

let args = minimist(process.argv);


fs.readFile(args.source,"utf-8", function (error,html){

let JSDOM = jsdom.JSDOM;
let dom = new JSDOM(html);
let document = dom.window.document;

console.log(document.title);

let button_1 = document.querySelector(".b");

console.log(button_1.textContent);

let elements = document.querySelectorAll(".b");


// console.log(elements[0].textContent);
// console.log(elements[1].textContent);

for(let i = 0; i<elements.length; i++) {

    console.log(elements[i].textContent);

}

})
