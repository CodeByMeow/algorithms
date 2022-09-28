/**
 * Input: array number need sort
 * Output: array sorted
 * Time complexity worst case: O(n²)
 * Description: After every loop, one element in array was sorted.
 *             The algorithm compares 2 adjacent element and swap them if conditions to be true (array ascending)
 */
function bubbleSortAlgorithms(array) {
  if (array.length < 2) return array;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
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

console.log(bubbleSortAlgorithms(array2));
