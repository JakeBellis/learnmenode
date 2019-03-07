var ARG_START = 2;
var count = 0;
for(var i = ARG_START; i < process.argv.length; i++){
    count += parseInt(process.argv[i]);
}
console.log(count);
return count;