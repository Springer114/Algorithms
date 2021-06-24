function searchSuggestion(searchList, searchFor) {
    let arr1 = []
    if (searchList === null || searchList === [] || searchFor === null || searchFor.length === 0) {
        return arr1
    }
    let newSearchList = []
    for (let j of searchList) {
        newSearchList.push(j.toString().toLowerCase())
    }
    newSearchList.sort()
    for (let i = 2; i <= searchFor.length; i++) {
        let temp = searchFor.substring(0, i)
        let result = []
        for (let word of newSearchList) {
            if (word.startsWith(temp) && result.length < 3) {
                result.push(word)
            }
        }
        arr1.push(result)
    }
    return arr1
}

console.log(searchSuggestion(["twenty", "three", "two", "fourteen", "ten", "two-hundred", "twentyfour"], "twenty"))
console.log(searchSuggestion([], ""))