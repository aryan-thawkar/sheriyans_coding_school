// right aligned triangle

const prompt = require('prompt-sync')();
var n = prompt("enter a number : ");
for(i = 1 ; i <= n ; i++){
    for(j = 1 ; j <= n-i ; j++){
        process.stdout.write("  ");
    }
    for(k = 1 ; k<= i; k++){
        process.stdout.write(" *");
    }
    console.log();
}

