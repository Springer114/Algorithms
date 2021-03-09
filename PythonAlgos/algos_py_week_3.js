// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr) {
  if(arr.length < 2) return false
  var leftInd = 0;
  var rightInd = arr.length-1;
  var leftSum = 0
  var rightSum = 0
  while(leftInd <= rightInd){
      if(leftSum <= rightSum){
          leftSum += arr[leftInd]
          leftInd++
      }
      else {
          rightSum += arr[rightInd]
          rightInd--
      }
  }
  // console.log("LEFT SUM: ", leftSum)
  // console.log("RIGHT SUM: ", rightSum)
  return (leftSum == rightSum) ? true : false
}
console.log(balancePoint([1,2,3,4,10]))
console.log(balancePoint([1,2,4,2,1]))
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE

function balanceIndex(arr){
    if (arr.length % 2 == 0) {
        return -1
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                var sumLeft = 0
                var sumRight = 0
                for (var l = 0; l < i; l++) {
                    sumLeft += arr[l]
                }
                for (var r = i + 1; r < arr.length; r++) {
                    sumRight += arr[r]
                }
                if (sumLeft == sumRight) {
                    return i
                }
            }
        }
    }
}
console.log(balanceIndex([-2,5,7,0,3]))
console.log(balanceIndex([9,0,9]))
console.log(balanceIndex([9,9]))
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target) {
  var leftIndex = 0
  var rightIndex = arr.length - 1
  while(leftIndex <= rightIndex) {
    var midIndex = Math.floor((rightIndex + leftIndex / 2))
    if(target == arr[midIndex]) {
      return true
    } else if (target < arr[midIndex]) {
      rightIndex = midIndex - 1
    } else {
      leftIndex = midIndex + 1
    }
  }
  return false
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7))
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2))
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 14))
console.log(binarySearch([1,5,14,21,34,56,88,99], 88))



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
/* 
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
*/
function dedupeArr(arr){

}
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]
// DO ALGO WITH ONE FOR LOOP AND NO OBJECT TO KEEP TRACK OF FREQUENCY

/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/
function mode(arr){

}
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){
  var len = arr.length - 1
  for(var i = 0; i < arr.length; i++){
      if((arr[i] > len) || (arr[i] < 0)){
          return true
      }
  }
  return false
}

console.log(missingValue([3,0,1,2]))
console.log(missingValue([4,0,2,1]))
// [3,0,1,2] => False
// [4,0,2,1] => True

/*
  Given two arrays, return an array filled with the sum of
  each combination of numbers from the arrays
*/

function twoNumSum(arr1, arr2) {
  var newArr = []
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      newArr.push(arr1[j] + arr2[i])
    }
  }
  return newArr
}
console.log(twoNumSum([1,2,3],[4,5,6]))

// EX. [1,2,3], [4,5,6] => [5,6,7,6,7,8,7,8,9]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI

// Given a sequence of integers as an array, determine whether 
// it is possible to obtain a strictly increasing sequence by 
// removing no more than one element from the array.
function almostIncreasingSequence(arr){

}

// EX. [1, 3, 2, 1] => FALSE
// EX. [1, 2, 3, 4, 3, 6] => TRUE