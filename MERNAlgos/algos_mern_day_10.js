/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time

    EXAMPLE:
    let arr = [2, 11, 7, 15];
    let target = 9;

    twoSum(arr, target) should return [0, 2] (or [2,0], the order of the output is irrelevant) because 
    nums[0] + nums[2] => 2 + 7 = 9, which is our target
*/
function twoSum(nums, targetSum) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === targetSum) {
                return [i,j]
            }
        }
    }
}
console.log(twoSum([2,11,7,15], 9));

function twoSum2(nums, targetSum) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[targetSum - nums[i]] !== undefined) {
            return [obj[targetSum - nums[i]], i];
        }
        obj[nums[i]] = i;
    }
    return false;
}
console.log(twoSum2([2,11,7,15], 9));



/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time

    EXAMPLE:
    let arr1 = [0,0,0,2,2,3];
    let k1 = 1;

    kMostFrequent(arr1,k1) should return [0]

    let arr2 = [1,1,1,2,2,3];
    let k2 = 2

    kMostFrequent(arr2, k2) should return [1, 2]
*/
function kMostFrequent(nums, k) {
    const elementFreq = {};
    const freqTable = {};
    const output = [];
    let maxFreq = 0;

    for (let num of nums) {
        if (elementFreq[num] === undefined) {
            elementFreq[num] = 1;
        } else {
            elementFreq[num]++;
        }
        if (elementFreq[num] > maxFreq) {
            maxFreq = elementFreq[num];
        }
    }
    for (let key in elementFreq) {
        let frequency = elementFreq[key];
        if (freqTable[frequency] === undefined) {
            freqTable[frequency] = [parseInt(key)];
        } else {
            freqTable[frequency].push(parseInt(key));
        }
    }
    while(output.length < k) {
        if(freqTable[maxFreq] !== undefined && freqTable[maxFreq].length > 0) {
            output.push(freqTable[maxFreq].pop());
        } else {
            maxFreq--;
        }
    }
    return output;
}
console.log(kMostFrequent([0,0,0,2,2,3], 1));
console.log(kMostFrequent([1,1,1,2,2,3], 2));