/*Read content of the file synchronously, and parse based on newline*/

var fs = require('fs'); 

console.log(fs.readFileSync(process.argv[2],'utf8').split('\n').length - 1); 


