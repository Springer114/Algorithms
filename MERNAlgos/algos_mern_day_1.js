/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums;
}
console.log(bubbleSort([14, 2, 7, 9, 11, 1, 8, 10]));


/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
function selectionSort(nums){
    for(var i = 0; i < nums.length; i++){
        var minIdx = i;
        for(var j = i+1; j < nums.length; j++) {
            if(nums[j] < nums[minIdx]){
                minIdx = j;
            }
        }
        var temp = nums[minIdx];
        nums[minIdx] = nums[i];
        nums[i] = temp;
    }
    return nums;
}
console.log(selectionSort([14, 2, 7, 9, 11, 1, 8, 10]));