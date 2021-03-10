/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
    EXAMPLE: merge([1,4,5], [2,3,6]) will return [1,2,3,4,5,6]
*/

function merge(nums1, nums2) {
    var arr = [];
    var index1 = 0, index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            arr.push(nums1[index1])
            index1++;
        } else if (nums1[index1] > nums2[index2]) {
            arr.push(nums2[index2])
            index2++;
        } else {
            arr.push(nums1[index1]);
            arr.push(nums2[index2]);
            index1++;
            index2++;
        }
    }
    while (index1 < nums1.length) {
        arr.push(nums1[index1]);
        index1++;
    }
    while (index2 < nums2.length) {
        arr.push(nums2[index2]);
        index2++;
    }
    return arr;
}

function merge2(nums1, nums2) {
    let arr = [];
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            arr.push(nums1.shift())
        } else {
            arr.push(nums2.shift())
        }
    }
    return [...arr, ...nums1, ...nums2]
}
console.log(merge([1,4,5], [2,3,6]));
console.log(merge([1,7,4,5], [2,3,6])); // Does not work with uneven arrays
console.log(merge([3,7,2,4], [5,1,6])); // Does not work with uneven arrays

console.log(merge2([1,4,5], [2,3,6]));
console.log(merge2([1,7,4,5], [2,3,6])); // Does not work with uneven arrays
console.log(merge2([3,7,2,4], [5,1,6])); // Does not work with uneven arrays
/*
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function mergeSort(array){
    const mid = array.length / 2
    if (array.length < 2) {
        return array
    }
    const nums1 = array.splice(0, mid)
    return merge(mergeSort(nums1), mergeSort(array))
}
console.log(mergeSort([1,9,4,11,5,8,2,10,3,6,7]))