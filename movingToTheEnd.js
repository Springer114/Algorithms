function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[count++] = arr[i];
        }
    }

    for (let i = count; i < arr.length; i++){
        arr[i] = 0;
    }
    return arr
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))