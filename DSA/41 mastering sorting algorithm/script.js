// bubble sort 

let arr = [1, 4, 3, 2, 9, 10];
let n = arr.length
for (let i = 0 ; i<n-1;i++){
    for(let j = 0 ; j<n-i-1; j++){
        if(arr[j]>arr[j+1]){
            [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
        }
    }
}
console.log(arr)


// selection sort
let arr2 = [1,4,11,2,9,10];
for(i = 0 ; i< arr2.length -1 ; i++){
    let small = i;
    for (j= i+1 ; j<arr2.length ;j++){
        if( arr2[small] > arr2[j]){
            small = j;
        }
    }
    if (i != small){
        let temp = arr2[i];
        arr2[i] = arr2[small];
        arr2[small] = temp;
    }
   
}

console.log(arr2);
