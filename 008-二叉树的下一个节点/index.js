/* function node(x) {
    this.val = x;
    this.left = null;
    this.right = null;
    this.parent = null;
} */
function findNextNode(node) {
  if (node === null) {
    return;
  }

  if (node.right !== null) {
    let pRight = node.right;
    while (pRight.left !== null) {
      pRight = pRight.left;
    }
    return pRight;
  } else if (node.parent !== null) {
    const pCurrent = node;
    let pParent = node.parent;
    while (pParent !== null && pCurrent === pParent.right) {
      pCurrent = pParent;
      pParent = pParent.right;
    }
    return pParent;
  }
  return false;
}
