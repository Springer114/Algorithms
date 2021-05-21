function persistence(num) {
    let count = 0;
    let digits = num.toString().split("")
    let total;
    while (digits.length > 1) {
        total = digits.reduce(function (sum, currentValue) {
            return sum * currentValue;
        })
        count++
        digits = total.toString().split("")
    }
    return count;
}
console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))
console.log(persistence(999))
console.log(persistence(94114454))