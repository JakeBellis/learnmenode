var fs = require('fs');
FILE_ARG = 2;
fileText = fs.readFileSync(process.argv[FILE_ARG]);
fileText = fileText.toString();

splitText = fileText.split('\n');
console.log(splitText.length - 1); //subtract 1 for first line