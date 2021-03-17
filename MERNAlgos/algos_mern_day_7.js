/* 
    https://www.hackerrank.com/challenges/diagonal-difference/problem
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal
    
    EXAMPLE
    let nums = [
        [ 1, 2, 3 ],
        [ 5, 3, 2 ],
        [ 9, 7, 1 ]
    ]
    diagonalDifference(nums) should return 10, because (1 + 3 + 1) - (3 + 3 + 9)
    is 5 - 15, which is -10, whose absolute value is 10
*/
function diagonalDifference(matrix){
    let diag1 = 0
    let diag2 = 0
    for (let i = 0; i < matrix.length; i++) {
        diag1 += matrix[i][i];
        diag2 += matrix[i][matrix.length - 1 - i];
    }
    return Math.abs(diag1 - diag2);
}

let nums = [
    [ 1, 2, 3 ],
    [ 5, 3, 2 ],
    [ 9, 7, 1 ]
]
console.log(diagonalDifference(nums));
/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE
    let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
    let nums2 = [2, 3, 5, 6, 6, 7, 9 ];

    orderedMultisetUnion(sortedA, sortedB) should return:
    [1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 9]
*/

function orderedMultisetUnion(sortedA, sortedB) {
    const union = [];
    for (var indexA = 0, indexB = 0; indexA < sortedA.length && indexB < sortedB.length;) {
        if (sortedA[indexA] === sortedB[indexB]) {
            union.push(sortedA[indexA]);
            indexA++;
            indexB++;
        } else if (sortedA[indexA] < sortedB[indexB]) {
            union.push(sortedA[indexA]);
            indexA++
        } else {
            union.push(sortedB[indexB]);
        }
    }
    while(indexA < sortedA.length){
        union.push(sortedA[indexA]);
        indexA++;
    }
    while(indexB < sortedB.length){
        union.push(sortedB[indexB]);
        indexB++;
    }
    return union;
}

let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
let nums2 = [2, 3, 5, 6, 6, 7, 9 ];
console.log(orderedMultisetUnion(nums1, nums2));


function orderedMultisetUnion2(sortedA, sortedB){
    let x = 0;
    let y = 0;
    let result = [];
    while (x < sortedA.length || y < sortedB.length) {
        if (sortedA[x] && sortedA[x] < sortedB[y]) {
            result.push(sortedA[x]);
            x++;
        } else if (sortedB[y] && sortedA[x] > sortedB[y]) {
            result.push(sortedB[y]);
            y++;
        } else if (sortedA[x] == sortedB[y]) {
            result.push(sortedA[x]);
            x++;
            y++;
        } else if (sortedA[x]) {
            result.push(sortedA[x]);
            x++;
        } else {
            result.push(sortedB[y]);
            y++;
        }
    }
    return result;
}
let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
let nums2 = [2, 3, 5, 6, 6, 7, 9 ];
console.log(orderedMultisetUnion2(nums1, nums2));