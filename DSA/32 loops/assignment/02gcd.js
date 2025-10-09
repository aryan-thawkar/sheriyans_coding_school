const prompt = require('prompt-sync')();
let a = Number(prompt('Enter a number : '));
let b = Number(prompt('Enter another number : '));
// gretest common divisor using euclidean algorithm
 function gcd(a , b ){
    if(b === 0){
        return a;
    }
    return gcd( b , a%b);
 }

 console.log(gcd(a,b));