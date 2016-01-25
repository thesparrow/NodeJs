//use the asynchronous read file method to grab contents of the file 
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function (err, contents){
    if(err) throw err; 
    var lines = contents.toString().split('\n').length - 1; 
    console.log(lines); 
}); 

