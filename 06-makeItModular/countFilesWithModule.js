    var myModule = require('./countFilesModule.js');
    
    myModule(process.argv[2], process.argv[3], function(err, data) {
        
        if ( err ) {
            return null;
        }
        
        for ( var i = 0; i < data.length; i++ ) {
            console.log(data[i]);
        }
    });