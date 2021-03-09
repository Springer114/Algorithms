
//MON

// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]

function acronyms(string){
    var stringArr = string.split("")
    var newString = ""
    for (var i = 0; i < stringArr.length; i++){
        newString += stringArr[i][0]
    }
    return newString
}
acronyms("Live From Saturday Night Live")

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING

function stringReverse(string){
    var newString = ""
    for (var i = string.length-1; i >= 0; i--){
        newString += string[i]
    }
    return newString
}
console.log(stringReverse("Hello"))

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function parensValid(x){
    if (string.length % 2 != 0){
        return false
    }
    var count = 0;
    for (var char of string){
        if (char == "("){
            count++
        }
        else if (char == ")"){
            count--
        }
        if (count < 0){
            return false
        }
    }
    if (count == 0){
        return true
    }
    else {
        return false
    }
}

// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION

function bracesValid(string){
    var braceStack = []
    var checker = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    for (var char of string){
        if (char == "(" || char == "{" || char == "["){
            braceStack.push(char)
        }
        else {
            if (checker[braceStack[braceStack.length - 1]] == char) {
                braceStack.pop()
            }
            else {
                return false
            }
        }
    }
}

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED

function isPalindrome(string){
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - i - 1]) {
            return false
        } 
    } 
    return true
}

console.log(isPalindrome("HELLO"))
console.log(isPalindrome("KAYAK"))
console.log(isPalindrome("TACOCAT"))
console.log(isPalindrome("aklj;hfsd"))

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2){

    if (string1.length != string2.length) {
        return false
    }

    let dict = {}
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] in dict) {
            dict[string1[i]] += 1
        }
        else {
            dict[string1[i]] = 1
        }
    }
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] in dict) {
            dict[string2[i]] -= 1
            if (dict[string2[i]] < 0) {
                return false
            }
        }
        else {
            return false
        }
    }
    return true
}

console.log(string1("ATE"), string2("TEA"))

// HINT: YOU WANT TO USE A DICTIONARY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
function bookIndex(array) {
    let newArr = []
    for (let i=0; i < array.length; i++) {
        if ((array[i + 1] - array[i]) == 1) {
            let dash = ""
            dash += array[i]
            while((array[i + 1] - array[i]) == 1) {
                i++
            }
            dash += "-"
            dash += array[i]
            newArr.push(dash)
        } else {
            newArr.push(array[i].toString())
        }
    }
    return newArr
}

console.log(bookIndex([1,13,14,15,16,17,36,37,38,70]))

// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// FRI

function invertObj(obj) {
    for (let [key, value] of Object.defineProperties(obj)) {
        invertObj[value] = key
    }
    return invertObj
}

console.log(invertObj({
        'A':"ONE",
        'B':"TWO",
        'C':"THREE"
    }));

// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED
// EX.
// {
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }

function minCoinChange(num) {
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    
    if (num >= 25) {
        q = Math.floor(num / 25);
        num = num - (q * 25);
    }
    if (num >= 10) {
        d = Math.floor(num / 10);
        num = num - (d * 10);
    }
    if (num >= 5) {
        n = Math.floor(num / 5);
        num = num - (n * 5);
    }
    if (num >= 1) {
        p = Math.floor(num / 1);
        num = num - (p * 1);
    }
    console.log({"quarters":q, "dimes":d, "nickels":n, "pennies":p});
    console.log(num);
}
minCoinChange(321);

// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':3
// }