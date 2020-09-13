/**
 * [13,14,15,16, 1,2,3,4,5]
 * @param {*} rotateArray
 */
function minNumberInRotateArray2(rotateArray) {
  let left = 0,
    right = rotateArray.length - 1;
  while (right - left > 1) {
    let mid = (left + (right - left)) >> 1;
    mid = left + ((right - left) >> 1);
    if (rotateArray[mid] >= rotateArray[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return Math.min(rotateArray[left], rotateArray[right]);
}
console.log(minNumberInRotateArray2([1, 1, 1, 0, 1]));
