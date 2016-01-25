/* TCP Time server: write current date & 24 hour time YYYY-MM-DD hh:mm*/
/* socket metadata
    
*/
var net = require('net');
var port = process.argv[2]; 
function fillZero(i){
    return ( i < 10 ? '0' : '') + i
}

function time() {
    var time = new Date();
        var year = fillZero(time.getFullYear());
        var month = fillZero(time.getMonth()+ 1);
        var day = fillZero(time.getDate());
        var hour = fillZero(time.getHours());
        var min = fillZero(time.getMinutes());
        var form = year + '-' + month + '-' + day + ' '
        + hour + ':' + min;
        
    return form; 
}

var server = net.createServer(function (socket) {
      // socket handling logic
        socket.end(time() + '\n'); 
}); 

server.listen(port); 

