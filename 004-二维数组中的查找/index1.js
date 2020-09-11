/**
 * 暴力解法 时间复杂度 O(n^2)
 * @param {*} target
 * @param {*} array
 */
function Find(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}
