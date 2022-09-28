/**
 * input: array number need sorting ascending
 * output: array sorted
 * Time complexity worst case: O(n²)
 * Description: Set the min is first position in array.
 *              Compare current the "min" element with other element in array.
 *              If the "min" element is greater, set min = current position.
 *              At the end of each compares loop, swap the "min" element and current posstion element.
 */
function selectionSortAlgorithms(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    [array[min], array[i]] = [array[i], array[min]];
  }

  return array;
}

const array1 = [];
const array2 = [0];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const array5 = [8, 3, 5, 1, 4, 2];
const array6 = [8, 8, 3, 5, 5, 1, 4, 2];

console.log(selectionSortAlgorithms(array4));
