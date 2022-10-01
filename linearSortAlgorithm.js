/*
 * Linear search x in array.
 * Start from leftmost element of array and one by one compare x with x element of array.
 * If x matches with an element, return the index.
 * If x doesn't match with any of the elements, return -1.
 */
function linearSearch(array, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) return i;
  }

  return -1;
}

const array1 = [2, 5, 6, 19, 8];
const array2 = [];
console.log(linearSearch(array2, 6));
