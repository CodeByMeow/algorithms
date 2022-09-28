/**
 * input: array number need sort
 * output: array sorted
 * Time complexity worst case: O(log n)
 * description: Pick a element as a pivot.
 *              Partition array to 2 array has elements smaller on left pivot and greater on right pivot.
 *              Recursion ultil left and right array only have one element.
 */
function quickSort(array) {
  if (array.length < 2) return array;
  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];

  const left = [];
  const right = [];
  let currentItem;
  for (let i = 0; i < pivotIndex; i++) {
    currentItem = array[i];
    if (currentItem < pivot) {
      left.push(currentItem);
    } else {
      right.push(currentItem);
    }
  }
  console.log({ left, pivot, right });

  return [...quickSort(left), pivot, ...quickSort(right)];
}
const array1 = [];
const array2 = [0];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const array5 = [8, 3, 5, 1, 4, 4, 2];
const array6 = [8, 8, 3, 5, 5, 1, 4, 2];
const array7 = [9, 9, 9, 9, 1, 1, 1, 1];

console.log(quickSort(array5));
