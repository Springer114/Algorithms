/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    let nums1 = [1,4,5,7,7,8,9,9,10,12];
    let nums2 = [2,3,3,6,7,9,9,9,11,13];

    orderedIntersection(nums1, nums2) should return [7,9] because 7 and 9 are the only values
    in both sets, and only appear once because we want the output to be the shared deduped values
*/

function orderedIntersection(sortedA, sortedB){
    var indexA=0;
    var indexB=0;
    const result = [];

    while (indexA < sortedA.length && indexB < sortedB.length) {
        if(sortedA[indexA] < sortedB[indexB]) {
            indexA ++;
        }
        else if(sortedA[indexA] > sortedB[indexB]) {
            indexB ++;
        }
        else {
            if(result[result.length-1] !== sortedA[indexA]) {
                result.push(sortedA[indexA]);
            }
            indexA ++;
            indexB ++;
        }
    }
    return result;

}

console.log(orderedIntersection([1,4,5,7,7,8,9,9,10,12], [2,3,3,6,7,9,9,9,11,13]));