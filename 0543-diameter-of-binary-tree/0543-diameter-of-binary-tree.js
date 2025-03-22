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
    let highestD = [0]

    function height(root){
        if(!root) return 0
       let  leftH = height(root.left)
        let rightH = height(root.right)
        let diam = leftH + rightH
        highestD[0] = Math.max(highestD[0] ,diam)

        return 1 + Math.max(leftH,rightH)
    }
    height(root)
    return highestD[0]
    
};