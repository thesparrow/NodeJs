//var fiz = require('./mymodule.js').fiz;
//console.log(process.argv[1]);
//fiz(process.argv[1], process.argv[2]);
var modularFile = require('./mymodule.js');

modularFile(process.argv[2], process.argv[3], function(err,data){
        data.forEach(function(file){
            console.log(file); 
    });
});