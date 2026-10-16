class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let freq = new Map();
        let res = []
        let n = nums.length

        for(let num of nums){
            freq.set(num,(freq.get(num) || 0) + 1);
        }

        for(let[nums,count] of freq){
            if(count > Math.floor(n/3)){
                res.push(nums)
            }
        }
        return res
    }
}
