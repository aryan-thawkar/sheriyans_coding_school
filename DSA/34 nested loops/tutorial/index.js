// mirrored right aligned triangle

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



// triangle pattern 
for(i = 1 ; i <= n ; i++){
    for(j = 1 ; j <= n-i ; j++){
        process.stdout.write(" ");
    }
    for(k = 1 ; k<= i; k++){
        process.stdout.write(" *");
    }
    console.log();
}

// v shape

for(i = 1 ; i <= n ; i++){
        for (j = 1 ; j <= n*2  ; j++){
            if (i == j || i+j == n*2 ){
                process.stdout.write("*");
            }
            else{
                process.stdout.write(" ");
            }
        }
        console.log(" ");
    }



// X pattern 
for (let i = 1; i <= n; i++) { 
        for (let j = 1; j < n+1; j++) { 
            if(i == j || i+j == n+1)
               process.stdout.write("*"); 
            else
              process.stdout.write(" "); 
        }
        console.log();
    }