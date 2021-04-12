/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const numDigits = n.toString();
  for (let i = 0; i < numDigits.length; i++) {
    let num = '';
    for (let j = 0; j < numDigits.length; j++) {
      if (j !== i) {
        num += numDigits[j];
      }
    }
    result = Math.max(result, num);
  }
  return result;
}

module.exports = deleteDigit;
