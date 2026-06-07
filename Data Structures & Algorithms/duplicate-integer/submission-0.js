class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result =[]
        for(let i=0;i<nums.length;i++){
            if(result.includes(nums[i])){
                return true
            }else{                
                result.push(nums[i])
            }
        }
        return false
    }
}

let nums = [1, 2, 3, 3]
let obj = new Solution;
console.log(obj.hasDuplicate(nums))