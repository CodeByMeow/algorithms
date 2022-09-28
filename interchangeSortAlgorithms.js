/**
 * input: array number need sorting ascending
 * output: array sorted
 * Time complexity worst case: O(n²)
 * Description: Iterate from arrray[1] to array[N] over the array.
 *              Compare current element with other element in array.
 *              If the current element is smaller, swapped and keep compares to end array.
 */

function interchangeSortAlgorithms(array) {
  if (array.length < 2) return array;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }

  return array;
}
const array1 = [];
const array2 = [0];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const array5 = [8, 3, 5, 1, 4, 2];
const array6 = [8, 8, 3, 5, 5, 1, 4, 2];
console.log(interchangeSortAlgorithms(array5));
