    // Input: arr, callback
    // Output: arr (with elements removed)
    // Remove every element in the array, starting from idx 0,
    // until the callback function returns true when passed the
    // iterated element.
    // Return an empty array if the callback never returns true

    // EXAMPLE:
    const nums = [1, 4, 3, 6, 9, 15];

    const callback1 = (elem) => {
        return elem > 5;
    };

    // dropIt(nums, callback1) should return [6,9,15] because 6, 9, and 15 are the elements that,
    // when passed into callback1, will result in the function returning true.

function dropIt(arr, callback) {
    while (arr.length > 0 && !callback(arr[0])) {
        arr.shift();
    }
    return arr;
}
console.log(dropIt(nums, callback1));
/* 
    Given to Neil in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?

    Palindrome - a word/phrase that is spelled the same way forwards and backwards

    EXAMPLE:
    const str1 = "dda";

    const str2 = "aaadd";

    const str3 = "acdd";

    canStringBecomePalindrome(str1) should return true, because "dda" can be rearranged as "dad", 
    which is the same forwards and backwards.

    canStringBecomePalindrome(str2) should return true, because "aaadd" can be rearranged as "daaad"
    or "adada", which are both the same forwards and backwards.

    canStringBecomePalindrome(str3) should return false, because "acdd" cannot be rearranged in any
    way that would make it the same forwards and backwards
*/
function canStringBecomePalindrome(str) {

}