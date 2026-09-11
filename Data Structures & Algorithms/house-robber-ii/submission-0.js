class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return Math.max(
            nums[0],
            Math.max(
                this.helper(nums.slice(1)),
                this.helper(nums.slice(0, -1)),
            )
        )        
    }
    helper(nums){
        let sum1 = 0;
        let sum2 = 0;
        for(let num of nums){
            let temp = Math.max(sum1+ num, sum2);
            sum1 = sum2;
            sum2 = temp;
        }
        return sum2;
    }
}
