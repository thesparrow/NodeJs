//does the order of the functions matter? 

var fs = require('fs');

function finishedReading(error, fileContent) {
	if(error) return console.error(error);

	console.log(fileContent.split('\n').length - 1); 

}

fs.readFile(process.argv[2], 'utf8', finishedReading); 



 
