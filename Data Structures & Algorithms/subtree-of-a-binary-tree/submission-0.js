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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(root,subRoot){
            if(root==null && subRoot == null){
                return true
            }
            if(root==null || subRoot == null){
                return false
            }
            if(root.val != subRoot.val){
                return false
            }
            return (isSameTree(root.left,subRoot.left) &&
                    isSameTree(root.right,subRoot.right))
        }
        if(root==null){
            return false;
        }
        if(isSameTree(root,subRoot)){
            return true;
        }
        return(
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        )
        
    }
}
