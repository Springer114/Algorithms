// MON
/* 
  Given an array of strings
  return an object to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: dict.has_key(key)
*/
function frequencyTable(arr) {
    var obj = {}
        for (var i = 0; i < arr.length; i++) {
            if (obj.hasOwnProperty(arr[i])) {
                obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
      }
    return obj
}
console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
console.log(frequencyTable(['A','C','C','C','D','D','A','B']))
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){
    var arr = string.split(" ")
    for (var i = 0; i < arr.length/2; i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr.join(" ")
}
console.log(reverseWordOrder("This is a Test"))
// EX. "THIS IS A TEST" => "TEST A IS THIS"



//-----------------------------------------------------------------------------------------------------//
// TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){
  var obj = {}
  for (var i = 0; i < string.length; i++) {
    if (!obj.hasOwnProperty(string[i])) {
      obj[string[i]] = 0
    }
  }
  var returnString = ""
  for (var [key, value] of Object.entries(obj)) {
    returnString += key
  }
  return returnString
}

console.log(dedupeString("aabacecbedd"))
console.log(dedupeString("bbbbaaaaffff"))

function dedupe(a) {
  return a.filter((element, index) => a.indexOf(element) === index);
}

console.log(dedupe("aabacecbedd"))
console.log(dedupe("bbbbaaaaffff"))

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    var arr = string.split(" ")
    var returnString = ""
    for(var word of arr) {
      returnString += word.split("").reverse().join("")
      returnString += " "
    }
    return returnString
}
console.log(reverseWord("Hello"))
console.log(reverseWord("hello world"))
console.log(reverseWord("abc def ghi"))
console.log(reverseWord("THIS IS A TEST"))


// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"


//-----------------------------------------------------------------------------------------------------//
// WED
/* 
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/
function encode(string){
  var obj = {}
  for (var i = 0; i < string.length; i++) {
    if (!obj.hasOwnProperty(string[i])) {
      obj[string[i]] = 1
    } else {
        obj[string[i]]++
      }
    
  }
  var returnString = ""
  for (var [key, value] of Object.entries(obj)) {
    returnString += key
    returnString += value
  }
  return returnString
}

console.log(encode("aaaabbcddd"))
console.log(encode(""))
console.log(encode("bbcc"))

function encode2(string) {
  var encoded = ""
  var currentChar = string[0]
  var charCount = 0
  for (var i = 0; i < string.length; i++) {
    if (string[i] == currentChar) {
      charCount++
    }
    if (string[i] != currentChar || i == string.length - 1) {
      encoded += currentChar + charCount
      currentChar = string[i]
      charCount = 1
    }
  }
  if (encoded.length < string.length) {
    return encoded
  } else {
    return string
  }
}

console.log(encode2("aaaabbcddd"))
console.log(encode2(""))
console.log(encode2("bbcc"))
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){
  var decoded = ""
  for (var i = 0; i < string.length; i++) {
    if(isNaN(string[i])) {
      var char = string[i]
      i++
      for (j = 0; j < parseInt(string[i]); j++) {
        decoded += char
      }
    }
  }
  return decoded
}

console.log(decode("a3b2c1d3"))
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"

//-----------------------------------------------------------------------------------------------------//
// THUR
/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
  right by that given integer amount.
*/

function rotateString(string, n){
  var newStr = ""
  for (i = 0; i < string.length; i++) {
    if (i<n) {
      newStr += string[string.length - n + i]
    } else {
    newStr += string[i-n]
    }
  }
  return newStr
}

console.log(rotateString("HELLO WORLD", 1))
console.log(rotateString("HELLO WORLD", 2))
console.log(rotateString("HELLO WORLD", 5))
console.log(rotateString("HELLO WORLD", 6))
// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"

//-----------------------------------------------------------------------------------------------------//
// FRI
/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

function updateInv(newInv, currInv){

}

const newInv = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
/* 
    Output: [
      { name: "Peanut Butter", quantity: 70 },
      { name: "Grain of Rice", quantity: 90001 },
      { name: "Royal Jelly", quantity: 20 },
    ]
*/

/*
    Given a string, return the first non-repeating character
    within string
    // EX. "stress" => "t"
    // EX. "moonmen" => "e"
*/
function firstNonRepeatingChar(string) {
  var obj = {}
  for (i=0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i])) {
      obj[string[i]] = {
        "repeat" : true,
        "index" : i
      }
    } else {
      obj[string[i]] = {
        "repeat" : false,
        "index" : i
      }
    }
  }

  for (var [key, value] of Object.entries(obj)) {
    if (value.repeat) {
      continue
    } else {
      if (value.index < lowestInd) {
        lowestInd = value.index
        returnChar = key
      }
    }
  }
  return returnChar
}

console.log(firstNonRepeatingChar("stress"))
console.log(firstNonRepeatingChar("moonmen"))