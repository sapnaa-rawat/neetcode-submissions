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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        // Store inorder value -> index
        let map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        let preorderIndex = 0;

        function dfs(left, right) {

            // No elements in this subtree
            if (left > right) {
                return null;
            }

            // Preorder gives us the root
            let rootValue = preorder[preorderIndex];
            preorderIndex++;

            let root = new TreeNode(rootValue);

            // Find root position in inorder
            let index = map.get(rootValue);

            // Build left subtree
            root.left = dfs(left, index - 1);

            // Build right subtree
            root.right = dfs(index + 1, right);

            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}

