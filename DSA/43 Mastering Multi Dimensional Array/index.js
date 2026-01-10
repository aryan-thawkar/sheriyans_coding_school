const prompt = require("prompt-sync")()
let size = Number(prompt("Enter outer array length : "));
let innerSize = Number(prompt("Enter inner array length : "));
let arr = new Array(size);

for(i = 0 ; i< size ; i++){
    arr[i] = new Array(innerSize)
    for(j = 0 ; j < innerSize ; j++){
        arr[i][j] = Number(prompt(`enter value for ${i} ${j} : `));
    }
}

console.log(arr);