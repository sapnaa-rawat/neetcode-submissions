/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root){
            return true;
        }
        // let heightL = isBalanced(root.left);
        // let heightR =isBalanced(root.right)
        // if(heightL==false || heightR== false) return false;
        // if(Math.abs(heightL-heightR>1)){
        //     return false
        // }
        // return 1+ Math.max(heightL,heightR)
        function helper(node) {

        // Empty tree has height 0
        if (node === null) {
            return 0;
        }

        // Get left subtree height
        const leftHeight = helper(node.left);

        // If left subtree is unbalanced
        if (leftHeight === -1) {
            return -1;
        }

        // Get right subtree height
        const rightHeight = helper(node.right);

        // If right subtree is unbalanced
        if (rightHeight === -1) {
            return -1;
        }

        // Check current node
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return height of current subtree
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return helper(root) !== -1;

    }
}
