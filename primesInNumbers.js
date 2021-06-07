function primeFactors(n) {
    let denominator = 1
    let decomposition = ""
    while (n > 1) {
        let count = 0
        denominator += 1
        while (n % denominator === 0) {
            n /= denominator
            count += 1
        }
        if (count === 1) {
            decomposition += `(${denominator})`
        } 
        if (count > 1) {
            decomposition += `(${denominator}**${count})`
        }
    }
    return decomposition
}
console.log(primeFactors(7775460))
console.log(primeFactors(86240))