var http = require('http');


http.get(process.argv[2], function(res) {
    //console.log(res.statusCode);
    res.setEncoding('utf8');
    
    res.on('data', function(data) {
        console.log(data);
    });
    
    res.on('error', console.error);
    
});