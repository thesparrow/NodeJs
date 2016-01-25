var http = require('http'); 

var file = process.argv[2]; 

http.get(file,function(response){
    response.setEncoding('utf8'); 
    var data = "";
    
    response.on('data', function (chunk){
       data += chunk; 
        console.log(chunk); 
        data = '';
    });
    
    response.on("error", function(error) {
        console.log("Error =" + error);
    });
    
    response.on('end', function(end){
        //var obj = JSON.parse(data); 
        //console.log( obj.buck.email); 
    })
});
