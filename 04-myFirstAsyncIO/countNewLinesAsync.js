var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, fileContents) {
	var str = fileContents.toString();
	var lines = str.split('\n');

	console.log(lines.length - 1);


})
