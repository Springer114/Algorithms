
function toJadenCase(str) {
    var stringArr = str.toLowerCase().split(" ")
    var newArr = []
    for (let i = 0; i < stringArr.length; i++) {
        if (str === "") {
            return null;
        } else {
            let word = stringArr[i]
            newArr.push(word[0].toUpperCase() + word.slice(1))
        }
    }
    return newArr.join(" ")
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
console.log(toJadenCase("How cAn mirRors Be reAl If oUr eYEs arEn't reaL"))
console.log(toJadenCase(""))
console.log(toJadenCase("    "))