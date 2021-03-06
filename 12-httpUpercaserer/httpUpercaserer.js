var http = require('http');

var map = require('through2-map');

var uc = map(function(chunk) {
    return chunk.toString().toUpperCase();
});

var server = http.createServer(function(request, response) {
    if (request.method == 'POST') {
        request.pipe(uc).pipe(response);
    }
});
server.listen(process.argv[2]);

    // var map = require('through2-map')
    // inStream.pipe(map(function (chunk) {
    //   return chunk.toString().split('').reverse().join('')
    // })).pipe(outStream)
    
// Official Solution
    // var http = require('http')
    // var map = require('through2-map')
    
    // var server = http.createServer(function (req, res) {
    //   if (req.method != 'POST')
    //     return res.end('send me a POST\n')
    
    //   req.pipe(map(function (chunk) {
    //     return chunk.toString().toUpperCase()
    //   })).pipe(res)
    // })
    
    // server.listen(Number(process.argv[2]))