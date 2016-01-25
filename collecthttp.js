var http = require('http'); 
var file = process.argv[2]; 
var data = "";
var size = 0; 

http.get(file,function(response){
    response.setEncoding('utf8'); 
    
    response.on('data', function (chunk){
        data += chunk; 
        size += chunk.toString().length; 
    });
    
    response.on("error", function(error) {
        console.log("Error =" + error);
    });
    
    response.on('end', function(end){
        //var obj = JSON.parse(data); 
        //console.log( obj.buck.email); 
        console.log(size);
        console.log(data); 
    })
});