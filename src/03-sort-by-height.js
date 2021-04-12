/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) { newArr.push(array[i]); }
  }
  const n = newArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (newArr[j + 1] < newArr[j]) {
        const t = newArr[j + 1]; newArr[j + 1] = newArr[j]; newArr[j] = t;
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      array[i] = newArr.shift();
    }
  }
  return array;
}

module.exports = sortByHeight;
