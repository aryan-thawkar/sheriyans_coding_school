const prompt = require('prompt-sync')();
do{
    var isbn = prompt("Enter Isbn number : ").trim();
}while(isbn.length !== 10 || isNaN(isbn))
sum = 0;
for(let i = 10 ; i >= 1 ; i--){
    rem = isbn % 10;
    sum = sum + (rem * i) ;
    isbn = Math.floor(isbn / 10);
}

if (sum % 11 === 0){
    console.log("valid ISBN ");
}
else{
    console.log("invalid ISBN ");
}