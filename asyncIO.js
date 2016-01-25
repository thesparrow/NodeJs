/*use the non-blocking async model to read and split it 
based on endline character */

//wrapper for file system: both synchronous and asynchronous methods
var fs = require('fs');

//callback function
function finishedReading(error, fileContent) {
	if(error) return console.error(error);

	console.log(fileContent.split('\n').length - 1); 
}

fs.readFile(process.argv[2], 'utf8', finishedReading); 



 
