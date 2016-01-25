/*
    HTTP server:
        Receives only POST requests
        Converts them to Uppercase 
*/ 
var http = require('http'); 

var port = process.argv[2]; 
console.log(port); 

var server = http.createServer(function(request, response){
//handle it 
    if(request == 'POST')
    {
        console.log(request.body);
        //response.pipe(request.body
        req.on('data', function(chunk){
            console.log(chunck.toString().toUpperCase()); 
        });
    }
});

server.listen(port); 

