/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n+m)
 * @param {*} str
 * @param {*} targetStr
 */
function replaceBlank(str, targetStr) {
  let arrLen = str.length;
  const tarLen = targetStr.length;
  let totalLen = 0;
  for (let i = 0; i < arrLen; i++) {
    if (str[i] === " ") {
      totalLen += tarLen;
    } else {
      totalLen += 1;
    }
  }

  const resStr = new Array(totalLen);

  while (totalLen && arrLen) {
    if (str[arrLen - 1] !== " ") {
      resStr[totalLen - 1] = str[arrLen - 1];
      totalLen--;
    } else {
      let l = tarLen;
      while (l) {
        resStr[--totalLen] = targetStr[--l];
      }
    }
    arrLen--;
  }
  return resStr.join("");
}

console.log(replaceBlank("We are family.", "%20"));
