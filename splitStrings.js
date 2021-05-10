function solution(str){
    var strArr = str.split("")
    var newArr = []
    for (var i = 0; i < strArr.length; i+=2) {
        if (strArr[i + 1] === undefined) {
            newArr.push(strArr[i] + "_")
        } else {
            newArr.push(strArr[i] + strArr[i + 1])
        }
    }
    return newArr
}
console.log(solution("abcdef"))
console.log(solution("abcdefg"))
console.log(solution(""))