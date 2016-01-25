var net = require('net'); 
var strftime = require('strftime');

// Works fine
//console.log(strftime('%F %T', new Date()));

var port = process.argv[2]; 

function time(){
    var d = new Date();
    d.strftime('%Y-%m-%d: %H:%M'); 
    //console.log(strftime('%Y-%m-%d: %H:%M', d)); 
    //return strftime('%Y-%m-%d: %H:%M', d); 
}

var server = net.createServer(function (socket) {
      // socket handling logic
        socket.end(time() + '\n'); 
}); 

server.listen(port); 