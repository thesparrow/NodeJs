//HTTP server receives only post requests and converts incoming POST body characters 
//to UPPER case and returns it to the client 
/*
    var map = require('through2-map')
    inStream.pipe(map(function (chunk) {
      return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)
*/

var http = require('http');
var port = process.argv[2];
var map = require('through2-map');

function handleRequest(request, response){
    //logic to handle the request 
    if(request.method != 'POST'){
        console.info('Send me a post!');
    }
    request.pipe(map(function (chunk){
        return chunk.toString().toUpperCase()
    }))
    //send it back to the client 
    .pipe(response)
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(port)