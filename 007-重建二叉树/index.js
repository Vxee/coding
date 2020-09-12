/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }
  let index = vin.indexOf(pre[0]);
  let left = vin.slice(0, index);
  let right = vin.slice(index + 1);
  return {
    val: pre[0],
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right),
  };
}
