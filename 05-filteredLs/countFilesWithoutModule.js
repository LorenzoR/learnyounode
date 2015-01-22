var fs = require('fs');

var extension = process.argv[3];

fs.readdir(process.argv[2], function doneReading(err, list) {

	for ( var i = 0; i < list.length; i++ ) {
		var file = list[i].split('.');
		
		if ( file.length > 1 && extension === file[file.length - 1]) {
			console.log(list[i]);
		}
	}

})
