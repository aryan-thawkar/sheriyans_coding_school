let arr = [10, 20, 30, 40];
arr.push(100);
console.log(arr);

// arr.push(val)  -> insert at last
//  arr.pop(val)  -> delete at last
// arr.unshift(val) -> insert at first
//  arr.shift(val)  -> delete at first
// arr.length  -> length of array

let arr1 = new Array(4);
console.log(arr1);



arr = [10, 56, 59, 85, 74, 62, 53, 95, 85, 32, 55, 6];
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];

    }
}

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    
    }
}
console.log("max = " + max);
console.log("min = " + min);
