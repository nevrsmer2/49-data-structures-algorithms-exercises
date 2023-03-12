function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1);
    };
};

/* Search the subarray for num and return its index number */
function binarySearch(arr, num, startIdx, endIdx) {
    if (arr.length === 0) return -1;
    if (num < arr[startIdx] || num > arr[endIdx]) return -1;

    while (startIdx <= endIdx) {
        let midIdx = Math.floor((startIdx + endIdx) / 2);
        if (arr[mid] === num) {
            return midIdx;
        } else if (num < arr[midIdx]) {
            endIdx = midIdx - 1;
        } else {
            start = midIdx + 1;
        };
    };
    return -1;
};

/* Find the pivot point to divide the array in two based on the pivot point*/
function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (startIdx <= endIdx) {
        let midIdx = Math.floor((startIdx + endIdx) / 2);
        if (arr[midIdx] > arr[midIdx + 1]) return midIdx + 1
        else if (arr[startIdx] <= arr[midIdx]) {
            startIdx = midIdx + 1
        } else {
            endIdx = midIdx - 1
        };
    };
};

module.exports = findRotatedIndex