/* Subtracks the index number of the first zero from the length of the array and returns it.  The differenece is the number of zeros in the []*/

function countZeroes(arr) {
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;
    return arr.length - firstZero
};

/* Find index of the first zero and return it if it exists.  If not, return -1 */

function findFirst(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
        if ((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
            return midIdx;
        } else if (arr[midIdx] === 1) {
            return findFirst(arr, midIdx + 1, rightIdx)
        }
        return findFirst(arr, leftIdx, midIdx - 1)
    }
    return -1;
}

module.exports = countZeroes