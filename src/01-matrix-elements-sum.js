/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function belowZero(j, array) {
  for (let i = 0; i < array.length; i++) {
    if (j === array[i]) return false;
  }

  return true;
}

function getMatrixElementsSum(matrix) {
  let sum = 0;
  const array = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) array.push(j);
      if (belowZero(j, array)) sum += matrix[i][j];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
