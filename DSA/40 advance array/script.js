// left shift array by k elements (by brute force)

let arr = [1,2,3,4,5];
let k = 3;
for(let j = 1 ; j<=k; j++){
    let copy = arr[0];
    for(let i = 0 ; i< arr.length ; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = copy

}
console.log(arr);