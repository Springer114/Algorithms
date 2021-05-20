function tribonacci(signature, n) {
    let tribArr = []
    for (i = 0; i < n; i++) {
        if (n === 0) {
            return;
        }
        tribArr.push(signature[i])
        let newTribNum = signature[i] + signature[i + 1] + signature[i + 2]
        signature.push(newTribNum)
    }
    return tribArr
}

console.log(tribonacci([1,1,1], 10))
console.log(tribonacci([0,0,1], 10))
console.log(tribonacci([0,1,1], 10))
console.log(tribonacci([1,0,0], 10))
console.log(tribonacci([0,0,0], 10))
console.log(tribonacci([1,2,3], 10))
console.log(tribonacci([3,2,1], 10))
console.log(tribonacci([1,1,1], 1))
console.log(tribonacci([300,200,100], 0))
console.log(tribonacci([0.5,0.5,0.5], 30))