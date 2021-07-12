/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  return n === 0 ? 0 : sumNums(n-1) + n;
};
console.log(sumNums(3))
