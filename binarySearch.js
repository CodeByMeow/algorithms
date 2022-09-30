/*
 * Time compflexity: O(log n)
 * Description: Step:
 *       1.Begin with the mid element of array.
 *       2.If the value of the search key is equal to the item then return an index of the search key.
 *       3.Or if the value of the search key is less than the item middle, narrow the interval to the lower half.
 *       4.Otherwise, narrow the interval to the upper half
 *       5.Repeatedly check from the second point until the value is found or the interval is empty.
 */
function binarySearch(arr, left, right, x) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      return mid;
    }
    if (arr[mid] > x) {
      return binarySearch(arr, left, mid - 1, x);
    }

    return binarySearch(arr, mid + 1, right, x);
  }

  return -1;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array1, 0, array1.length - 1, 4));
