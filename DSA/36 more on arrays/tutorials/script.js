// second max no in array 

let arr = [28 , 6,74,48,84,79];
if (arr[0] > arr[1]){
    max = arr[0];
    sMax = arr[1]
}
else{
    max = arr[1];
    sMax = arr[0]
}

for(let i = 2 ; i < arr.length ; i++){
    if(arr[i] > max ){
        sMax = max;
        max = arr[i];
    }else if (arr[i] > sMax){
        if(arr[i] != max){

            sMax = arr[i];
        }
    }
}

console.log(sMax)




// reverse array by creating new array
arr = [1,2,3,4,5,6,7,8,9]
rev = new Array(arr.length)
i = 0;

for(let j = arr.length-1 ; j>= 0 ; j--){
    rev[i] = arr[j];
    i++;
}

console.log(rev)



// rev of array by temp variable
// (two pointer algorithm) 
arr = [1,2,3,4,5,6,7,8,9]
i = 0 ;
j = arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);

// all 0 to left and 1 to right in arr 

arr = [0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];
i = 0;
j = 0;

while(i < arr.length){
    if(arr[i] == 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log(arr)


// left shift arr by 1

arr = [23,56,96,85,74,67,56,74,58];
temp = arr[0];
for(let i = 0;i<arr.length-1;i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = temp ;
console.log(arr);


// right shift arr by 1

arr = [23,56,96,85,74,67,56,74,58];
temp = arr[arr.length-1];
for(let i = arr.length-1;i>0;i--){
    arr[i] = arr[i-1];
}
arr[0] = temp ;
console.log(arr);


