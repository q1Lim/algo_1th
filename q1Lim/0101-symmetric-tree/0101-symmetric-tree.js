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
 * @return {boolean}
 */

var isLeftRightSame = (left, right) => {
    if(left === null && right === null) return true
    if((left !== null && right === null) || (left === null && right !== null)) return false
    if(left.val !== right.val) return false

    return isLeftRightSame(left.left, right.right) && isLeftRightSame(left.right, right.left)
}

var isSymmetric = function(root) {
    if(!root) return true


    return isLeftRightSame(root.left, root.right)
};