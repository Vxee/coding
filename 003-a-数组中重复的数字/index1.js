function swap(array, a, b) {
  let index = array[a];
  array[a] = array[b];
  array[b] = index;
}

/**
 * 利用数组中的每一项都 在 0 ～ n-1 区间内，可以通过交换位置，如果交换时发现已经存在了数值如 a[1] = 1,那么此时 1 是重复的数字
 * 时间复杂度 o(n)
 * 空间复杂度 o(1)
 * @param {*} array
 */
function Find(array) {
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num !== array[num]) {
      swap(array, i, num);
    } else {
      return num;
    }
  }
  return -1;
}

const arr = [2, 3, 1, 0, 2, 5, 3];
console.log(Find(arr));
