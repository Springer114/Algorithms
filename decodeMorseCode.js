function decodeMorse(morseCode) {

    const morse = {
        ".-" : "A",
        "-..." : "B",
        "-.-." : "C",
        "-.." : "D",
        "." : "E",
        "..-." : "F",
        "--." : "G",
        "...." : "H",
        ".." : "I",
        ".---" : "J",
        "-.-" : "K",
        ".-.." : "L",
        "--" : "M",
        "-." : "N",
        "---" : "O",
        ".--." : "P",
        "--.-" : "Q",
        ".-." : "R",
        "..." : "S",
        "-" : "T",
        "..-" : "U",
        "...-" : "V",
        ".--" : "W",
        "-..-" : "X",
        "-.--" : "Y",
        "--.." : "Z",
        ".----" : "1",
        "..---" : "2",
        "...--" : "3",
        "....-" : "4",
        "....." : "5",
        "-...." : "6",
        "--..." : "7",
        "---.." : "8",
        "----." : "9",
        "-----" : "0"
    }

    let words = morseCode.split("   ")
    let string = ""

    for (let i in words) {
        if (words[i] !== "") {
            let word = words[i].split(" ")
            for (let j in word) {
                if (word[j] !== "") {
                    string += morse[word[j]]
                }
            }
            if (i < words.length - 1) {
                string += " "
            }
        }
    }
    return string

//     const decodeLetter = letter => {
//         return morse[letter];
//     }

//     const decodeWord = word => {
//         return word.split(' ').map(decodeLetter).join('');
//     }
    
//     return morseCode.trim().split('   ').map(decodeWord).join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
console.log(decodeMorse('-- -.--   -. .- -- .   .. ...   --.. .- -.-. -.-'))