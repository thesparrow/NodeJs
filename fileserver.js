/*
   stream the file contents to the response 
*/

var http = require('http');
var fs = require('fs'); 

var port = process.argv[2]; 
var file = process.argv[3];


var server = http.createServer(function (request, response){
//logic to hadle it 
    var stream = fs.createReadStream(file); 
    //write the appropriate header
    //200: the request has succeeded 
    response.writeHead(200,{ 'content-type': 'text-plain'}); 
    stream.pipe(response);
});

server.listen(port); 