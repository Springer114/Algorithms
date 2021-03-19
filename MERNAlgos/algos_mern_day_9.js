/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
    
    EXAMPLE:
    let arr = [1,3,4,5,6,8,9,11];

    allNonConsecutive(arr) should return:
    [
        { i: 1, n: 3 },
        { i: 5, n: 8 },
        { i: 7, n: 11 }
    ]
*/
function allNonConsecutive(sortedNums) {
    const arr = [];
    for (var i = 1; i < sortedNums.length; i++) {
        if (sortedNums[i] - 1 !== sortedNums[i - 1]) {
            arr.push({i: i, n: sortedNums[i]});
        }
    }
    return arr;
}
console.log(allNonConsecutive([1,3,4,5,6,8,9,11]));


/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.

    EXAMPLE:
    let arr = [2, 5, 3, 6, 7, 23, 12];
    let targetSum = 16;

    findConsqSums(arr, targetSum) should return:
    [
        [2, 5, 3, 6],
        [3, 6, 7]
    ] 
*/
function findConsqSums(nums, sum) {
    const arr = [];
    for (var i = 0; i < nums.length; i++) {
        let curSum = nums[i];
        let curNums = [nums[i]];
        let curIndex = i + 1;
        while (curSum < sum && curIndex < nums.length) {
            curSum += nums[curIndex];
            curNums.push(nums[curIndex]);
            curIndex++
        }
        if (curSum === sum) {
            arr.push(curNums);
        }
    }
    return arr;
}

let arr = [2, 5, 3, 6, 7, 23, 12];
let targetSum = 16;
console.log(findConsqSums(arr, targetSum));