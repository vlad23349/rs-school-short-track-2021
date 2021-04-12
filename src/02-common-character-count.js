/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function repeat(j, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === j) return false;
  }
  return true;
}

function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let str1 = s1;
  let str2 = s2;
  const array = [];
  if (str1.length === 0 || str2.length === 0) return 0;
  if (str2.length > str1.length) {
    str1 = s2;
    str2 = s1;
  }
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j] && repeat(j, array)) {
        array.push(j);
        sum++;
        break;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
