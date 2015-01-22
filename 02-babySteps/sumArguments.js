var length = process.argv.length;
var resp = 0;

for (var i = 2; i < length; i++ ) {
	resp += Number(process.argv[i]); 
}

console.log(resp);
