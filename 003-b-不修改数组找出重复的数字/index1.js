function binarySearch(array, start, end) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= start && array[i] <= end) {
      count++;
    }
  }
  if (count > end - start + 1) {
    return true;
  }

  return false;
}

/**
 * 通过二分法确定重复的数字在哪个范围区间内
 * 时间复杂度 O(nlogn)
 * @param {*} array
 */
function Find(array) {
  let start = 1;
  let end = array.length - 1;

  while (start < array.length && end > 0 && start <= end) {
    const mid = Math.floor((end + start) / 2);
    const flag = binarySearch(array, start, mid);

    if (flag && start === end) {
      return start;
    }

    if (flag) {
      // 注意这里不能 mid - 1，因为 mid 也是在范围内的
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

const arr = [4, 3, 1, 6, 5, 2, 3];
console.log(Find(arr));
