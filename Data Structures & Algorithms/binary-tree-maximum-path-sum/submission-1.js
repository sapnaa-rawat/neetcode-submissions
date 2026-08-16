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
     * @return {number}
     */
    maxPathSum(root) {
        let MaxSum = -Infinity;
        function dfs(root){
            if(!root){
                return 0;
            }
            let leftMax = Math.max(0,dfs(root.left))
            let rightMax = Math.max(0,dfs(root.right))

            let currentPath = leftMax + rightMax + root.val;

            // Update global maximum
            MaxSum = Math.max(MaxSum,currentPath)

            return root.val+ Math.max(leftMax, rightMax)    
        }
        dfs(root);
        return MaxSum;
    }
}
