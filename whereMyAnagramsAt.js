function anagrams(word, words) {
    let arr = []
    let sortedWord = word.split("").sort().join("");
    for (let i = 0; i < words.length; i++) {
        let sortedWords = words[i].split("").sort().join("");
        if (sortedWord === sortedWords) {
            arr.push(words[i]);
        }
    }
    return arr
}
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]))
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]))
console.log(anagrams("laser", ["lazing", "lazy", "lacer"]))