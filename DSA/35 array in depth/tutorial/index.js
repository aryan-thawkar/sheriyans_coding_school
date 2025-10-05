// strong Number
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
let a = n;

let ans = 0;
while (n > 0){
    let dig = n % 10;
    let fact = 1;
    for(i = 1 ; i <= dig ; i++){
        fact = fact * i;
    }
    ans = ans + fact;
    n = Math.floor(n/10);
}

if(a == ans ){
    console.log("strong no");
}
else{
    console.log("not a strong no");
}