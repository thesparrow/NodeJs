
var fs = require('fs'); 

//var buff = fs.readFileSync(process.argv[2]);
//console.log(process.argv[2]); 
//var fileString = buff.toString(); 
//var numberOfNewlines = fileString.split('\n');

//console.log(numberOfNewlines.length); 

//console.log(numberOfNewlines.length - 1);

console.log(fs.readFileSync(process.argv[2],'utf8').split('\n').length - 1); 


