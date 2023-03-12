/* Find value of the first number that is immediately less than the number passed as an argument*/

function findFloor(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx > rightIdx) return -1;
    if (num >= arr[rightIdx]) return arr[rightIdx];

    let mid = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[mid] === num) return arr[mid];

    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
        return arr[mid - 1];
    };

    if (num < arr[mid]) {
        return findFloor(arr, num, leftIdx, mid - 1);
    };

    return findFloor(arr, num, mid + 1, rightIdx);
};

module.exports = findFloor