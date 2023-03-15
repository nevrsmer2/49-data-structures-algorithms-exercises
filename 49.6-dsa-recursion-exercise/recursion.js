/** product: calculate the product of an array of numbers. */

function product(arr, i = 0) {
    if (i === arr.length) return 1;
    return arr[i] * product(arr, i + 1);
};


/** longest: return the length of the longest word in an array of words. */

function longest(arr, i = 0, currentLongest = 0) {
    if (i === arr.length) return currentLongest;
    currentLongest = Math.max(arr[i].length, currentLongest);
    return longest(arr, i + 1, currentLongest);
};


/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
    if (i >= str.length) return newStr;
    newStr += str[i];
    return everyOther(str, i + 2, newStr);
};


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
    if (str.length % 2 === 0) {
        return false;
    } else {
        let rightI = i;
        let leftI = str.length - i - 1;
        if (rightI >= leftI) return true;
        if (str[rightI] !== str[leftI]) return false;
        return isPalindrome(str, i + 1);
    };
};


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
    if (idix === arr.length) return -1;
    if (arr[i] === val) return i;
    return findIndex(arr, val, i + 1);
};


/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, newStr = "") {
    if (newStr.length === str.length) return newStr;
    newStr += str[str.length - 1 - i];
    return revString(str, i + 1, newStr);
};


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let stringArr = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") stringArr.push(obj[key]);
        if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
    };
    return stringArr;
};


//FURTHER STUDY
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {

// }

// module.exports = {
//     product,
//     longest,
//     everyOther,
//     isPalindrome,
//     findIndex,
//     revString,
//     gatherStrings,
//     binarySearch
// };