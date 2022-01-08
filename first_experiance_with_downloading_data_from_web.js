// npm install minimist

// npm install axios

// node first_experiance_with_downloading_data_from_web.js --dest="download.html" --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results"

let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");
let args = minimist(process.argv);

// console.log(args.dest);
// console.log(args.url);

let downloadka_Promise = axios.get(args.url);

downloadka_Promise.then(function (response){

    let html = response.data;
    fs.writeFileSync(args.dest, html, "utf-8");
 //   console.log(html)

}).catch(function (error){

    console.log(error);
})
