class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
findDuplicate(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j])
        return nums[i]
        }        
    }
    return false
}
}
