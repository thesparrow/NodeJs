var fs = require('fs'), 
	path = require('path'),
	ext = process.argv[3], 
	fileToRead = process.argv[2];

function extension(element){
	var extName = path.extname(element);
	return (extName === "." + ext); 
};

fs.readdir(fileToRead, function(err,files){

	if(err) throw err; 

	files.filter(extension).forEach(function(value){
		console.log(value);
	});
}); 


