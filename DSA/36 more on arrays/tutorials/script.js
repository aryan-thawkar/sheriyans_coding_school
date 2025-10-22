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




// 