module.exports = function(dirName, extensionFilter, callback) {

    var fs = require('fs');
    var resp = new Array();
    
    fs.readdir(dirName, function doneReading(err, data) {

        if ( err ) {
            return callback(err);
        }

        for (var i = 0; i < data.length; i++) {
            var file = data[i].split('.');

            if (file.length > 1 && extensionFilter === file[file.length - 1]) {
                resp.push(data[i]);
            }
        }
        
        callback(null, resp);

    });

    return resp;
};