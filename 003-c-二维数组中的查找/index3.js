/**
 * 时间复杂度 O(n)
 * @param {*} target
 * @param {*} array
 */
function Find(target, array) {
  const rowNum = array.length;
  const colNum = array[0].length;
  let a = rowNum - 1;
  let b = 0;

  while (a >= 0 && b < colNum) {
    const num = array[a][b];
    if (num === target) {
      return true;
    } else if (num > target) {
      a--;
    } else {
      b++;
    }
  }
  return false;
}

const target = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(Find(10, target));
