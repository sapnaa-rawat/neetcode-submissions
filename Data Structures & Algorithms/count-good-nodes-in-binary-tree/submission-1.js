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
    goodNodes(root) {
        if(!root){
            return 0
        }
        let count=0;
        function dfs(node,maxvalue){  
            if(node === null){
                return 0;
            }
            if(node.val>=maxvalue) 
            count++
            maxvalue = Math.max(maxvalue,node.val)
            dfs(node.left,maxvalue);
            dfs(node.right,maxvalue)
        }
        dfs(root,root.val);
        return count;
    }    
}
