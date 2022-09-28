/**
 * input: array number need sorting ascending
 * output: array sorted
 * Time complexity worst case: O(n²)
 * Description: Iterate from arrray[1] to array[N] over the array.
 *              Compare the current element (key) to its predecessor.
 *              If the key element is smaller than its predecessor, compare it to the elements before.
 *              Move the greater elements to once position up to make space for swapped element.
 */
function insertionSortAlgorithms(array) {
  if (array.length < 2) return array;
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      } else {
        break;
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
console.log(insertionSortAlgorithms(array6));
