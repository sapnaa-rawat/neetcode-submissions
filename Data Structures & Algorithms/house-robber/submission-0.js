class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let sum1 = 0
        let sum2 = 0;
        for(let num of nums){
            const temp = Math.max(num+ sum1, sum2);
            sum1 = sum2;
            sum2 = temp;
        }
        return sum2;
    }
}
