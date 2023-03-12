/* Find lowest value and return its index number */
function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2);

    /* If the vlaue of arr[mid+1] is the lowest value, return that value. */
    if (mid < high && arr[mid + 1] < arr[mid])
        return mid + 1;

    /* If the value of arr[mid] is lowest value, return that value. */
    if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid;
    };

    /* Determine which half of [] to search for lowest value */
    if (arr[high] > arr[mid]) {
        return findRotationCount(arr, low, mid - 1);
    };
    return findRotationCount(arr, mid + 1, high);
};

module.exports = findRotationCount