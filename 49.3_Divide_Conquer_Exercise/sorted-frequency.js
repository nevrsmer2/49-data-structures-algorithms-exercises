/* Calculate the number of instances of num in the [] based on the index number of the first isntance  and last instance of num if num is neither only the first or last element*/
function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
};

/* Find the index number of the first instance of num in the [] */
function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high)
        } else {
            return findFirst(arr, num, low, mid - 1)
        };
    };
    return -1;
};

/* Find the index number of the last instance of num in the [] */
function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1)
        } else {
            return findLast(arr, num, mid + 1, high)
        };
    };
    return -1;
};

module.exports = sortedFrequency