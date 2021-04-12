/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const array = n.split('-');
  let count = 0;
  const validate = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 2) {
      return false;
    }
  }
  if (array.length !== 6) return false;

  for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < validate.length; j++) {
      if (array[i][0] === validate[j]) count++;
      if (array[i][1] === validate[j]) count++;
    }
    if (count !== 2) return false;
  }
  return true;
}

module.exports = isMAC48Address;
