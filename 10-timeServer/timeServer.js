var net = require('net');

var server = net.createServer(function(socket) {

    var d = new Date();

    var dateString = d.getFullYear() + "-" + pad(d.getMonth() + 1, 2) + "-" + d.getDate() + " " + pad(d.getHours(), 2) + ":" + d.getMinutes();

    socket.write(dateString);

    socket.end();

});

server.listen(process.argv[2]);

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}