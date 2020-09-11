function binarySearch(target, array) {
  let s = 0;
  let e = array.length - 1;
  while (e >= s) {
    const i = Math.floor((s + e) / 2);
    if (array[i] === target) {
      return i;
    } else if (array[i] > target) {
      e = i - 1;
    } else {
      s = i + 1;
    }
  }
  return -1;
}

/**
 * 二分查找 时间复杂度 O(nlogn)
 * @param {*} target
 * @param {*} array
 */
function Find(target, array) {
  // write code here
  for (let i = 0; i < array.length; i++) {
    const val = binarySearch(target, array[i]);
    if (val !== -1) {
      return true;
    }
  }
  return false;
}
