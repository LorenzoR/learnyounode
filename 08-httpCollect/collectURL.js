var http = require('http');

var resp = '';
var count = 0;

http.get(process.argv[2], function(res) {
    //console.log(res.statusCode);
    res.setEncoding('utf8');
    
    res.on('data', function(data) {
        //console.log(data);
        count += data.length;
        resp += data;
    });
    
    res.on('error', console.error);
    
    res.on('end', function() {
        console.log(count);
        console.log(resp);
    });
    
});