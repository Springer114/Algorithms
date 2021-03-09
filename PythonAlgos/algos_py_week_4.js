// MON

// 1, BASE CASE
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
    if (n == 0) {
        return n
    }
    return n + recursiveSigma(n - 1)
}

console.log(recursiveSigma(5))
console.log(recursiveSigma(3))
// 5 => 5 + 4 + 3 + 2 + 1 => 15

/* 
  Recursively sum an arr of ints
*/

function sumArr(arr, i = 0) {
    if (i == arr.length - 1) {
        return arr[i]
    }
    return arr[i] + sumArr(arr, i + 1)
}

console.log(sumArr([1,2,3]))
// [1,2,3] => 6

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will be useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false
*/

function recFlatten(arr){
    var newArr = []
    for (var i=0; i<arr.length; i++){
      if (Array.isArray(arr[i])){
        newArr = newArr.concat(recFlatten(arr[i]))
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
}

console.log(recFlatten([1,[2,3,[4]],5]))

function recFlatten(arr) {
    if(Array.isArray(arr) == false) {
      return [arr]
    }
    var array = []
    for (var i = 0; i < arr.length; i++) {
      array = array.concat(recFlatten(arr[i]))
    }
    return array
}

console.log(recFlatten([1,[2,3,[4]],5]))

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED


/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

function recursiveBinary(arr, target){
    if (arr.length == 1) {
        if (arr[0] == target) {
            return true
        }
        return false
    }
    var midInd = Math.floor((arr.length - 1) / 2)
    if (target == arr[midInd]) {
        return true
    } else if (target < arr[midInd]) {
        return recursiveBinary(arr.slice(0, midInd), target)
    }else {
        return recursiveBinary(arr.slice(midInd + 1, arr.length), target)
    }
}
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 7))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 2))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 14))
console.log(recursiveBinary([1,5,14,21,34,56,88,99], 88))

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR

/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSquares(num) {
    if (num == 1) {
        var arr = []
        arr.push(1)
        return arr
    }
    var arr = risingSquares(num - 1)
    arr.push(num * num)
    return arr
}

console.log(risingSquares(10))
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]

/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common
*/

function LCM(a,b, aMult=a, bMult=b){

}


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI

/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
*/


function stringSubset(string, arr){

}

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]