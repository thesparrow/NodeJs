//HTTP server serves JSON data upon a GET request 
//JSON response contains 'hour', 'minute', 'second'
//Second response returns unixtime with milliseconds 
//Both responses should be in JSON format 


var http = require('http');
var url = require('url');
var S = require('string');

//helper methods 
function parsetime(time){
    return { 
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds() 
   }
}

function parseunixtime(time){
    return  { 
        unixtime: time.getTime()
    }
}

function handleRequest(request, response){
    var reqObj = url.parse(request.url,true);
    var date = new Date(reqObj.query["iso"]);
    var result
    
    if(request.method != 'GET'){
        console.info('Send me a get!');
    }
    
    if(S(request.url).contains('/api/parsetime'))
    {
        result = parsetime(date)  
    }
    
    if(S(request.url).contains('/api/unixtime'))
    {       
        result = parseunixtime(date)
    }
    //create response 
    if(result){
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(result))    
    }
    else {
        response.writeHead(404) //unable to communicate with server
        response.end()
    } 
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(Number(process.argv[2]))