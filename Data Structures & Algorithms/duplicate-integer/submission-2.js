class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size<nums.length
    }
}

let nums = [1, 3, 3, 2]
let obj = new Solution;
console.log(obj.hasDuplicate(nums))