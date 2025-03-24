/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let hiestD = [0]
  function height(root){
    if (!root) return null
   let leftH = height(root.left)
   let rightH = height(root.right)
   let diam = leftH + rightH
   hiestD[0] = Math.max(hiestD[0],diam)

   return 1 + Math.max(leftH,rightH)

  }
  height(root)

  return hiestD[0]
    
};
