const prompt = require('prompt-sync')();
// left shift array by k elements (by brute force)

let arr = [1, 2, 3, 4, 5];
let k = 3;
k = k % arr.length;
for (let j = 1; j <= k; j++) {
    let copy = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy

}
console.log(arr);


// left shift array by k elements (not space efficient)
arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length)
k = 5;
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
}
console.log(temp)


// left shift array by k elements(block swap reverse algorithm)

arr = [1,2,3,4,5];
k = Number(prompt("Enter a number : "));
k  = k % arr.length;
reverse(arr , 0 , k-1);
reverse(arr , k , arr.length-1);
reverse(arr , 0 , arr.length-1);
console.log(arr);
function reverse (arr ,i , j ){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;

    }
}

let abc = [1,2,3,4,5,6,7,8,9];



// linear search

arr = [23,56,85,74,8,45,95,36,85];
let target = Number(prompt("Enter Target value :"))
let index = -1;
for(i = 0 ; i< arr.length; i++){
    if (arr[i] == target){
        index = i ;
        break;
    }
}
if(index != -1){
    console.log(`element found at ${index} index`);
}
else{
    console.log("element not found");
}