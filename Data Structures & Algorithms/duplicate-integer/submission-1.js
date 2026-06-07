class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result =[]
        let sort=nums.sort((a,b)=>a-b)
        console.log(sort)
        for(let i=0;i<nums.length;i++){
            if(nums[i]===nums[i+1]){
                return true
            }
        }
        return false
    }
}

let nums = [1, 3, 3, 2]
let obj = new Solution;
console.log(obj.hasDuplicate(nums))