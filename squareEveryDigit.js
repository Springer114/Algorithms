function squareDigits(num) {
    let digit = num.toString()
    let newNum = []
    for (i = 0; i < digit.length; i++) {
        newNum[i] = digit[i] * digit[i]
    }
    return +newNum.join("")
}
console.log(squareDigits(3212))
console.log(squareDigits(2112))
console.log(squareDigits(0))
console.log(squareDigits(9119))
console.log(squareDigits(114114117114))