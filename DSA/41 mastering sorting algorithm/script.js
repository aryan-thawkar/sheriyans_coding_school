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