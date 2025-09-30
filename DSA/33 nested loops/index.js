const prompt = require('prompt-sync')();
for(let i = 1 ; i <= 5 ; i++){
    for(let j = 1; j <=5 ; j++){
        process.stdout.write("* ");
    }
    console.log();
}

let n = prompt("enter a number : ");
for(let i = 1 ; i <= n ; i++){
    for(let j = 1; j <=n ; j++){
        process.stdout.write("* ");
    }
    console.log();
}
console.log();


// right angle triangle
for(let i = 1 ; i <= n ; i++){
    for(let j = 1; j <=i ; j++){
        process.stdout.write("* ");
    }
    console.log();
}

console.log();
// right angle triangle with numbers
for(let i = 1 ; i <= n ; i++){
    for(let j = 1; j <=i ; j++){
        process.stdout.write(j+" ");
    }
    console.log();
}


// console.log();
// var a = A;
// // right angle triangle with alphabets
// for(let i = 1 ; i <= n ; i++){
//     for(let j = 1; j <=i ; j++){
//         process.stdout.write(a+" ");
//         a++
//     }
//     console.log();
// }


console.log();
let temp = n;
// inverted right angle triangle
for(let i = 1 ; i <= n ; i++){
    for(let j = 1; j <=temp ; j++){
        process.stdout.write("* ");
    }
    temp--;
    console.log();
}