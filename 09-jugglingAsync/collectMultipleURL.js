var http = require('http');

var resp1 = '';
var resp2 = '';
var resp3 = '';

http.get(process.argv[2], function(res) {

    res.setEncoding('utf8');

    res.on('data', function(data) {
        resp1 += data;
    });

    res.on('error', console.error);

    res.on('end', function() {
        console.log(resp1);

        http.get(process.argv[3], function(res) {

            res.setEncoding('utf8');

            res.on('data', function(data) {
                resp2 += data;
            });

            res.on('error', console.error);

            res.on('end', function() {
                console.log(resp2);

                http.get(process.argv[4], function(res) {

                    res.setEncoding('utf8');

                    res.on('data', function(data) {
                        resp3 += data;
                    });

                    res.on('error', console.error);

                    res.on('end', function() {
                        console.log(resp3);
                    });

                });

            });

        });

    });
});