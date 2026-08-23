class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        let res = [];
        let subset = [];

        function dfs(start) {
            res.push([...subset]);

            for (let i = start; i < nums.length; i++) {

                // Skip duplicates at the same level
                if (i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                subset.push(nums[i]);

                dfs(i + 1);

                subset.pop();
            }
        }

        dfs(0);

        return res;
    }
}