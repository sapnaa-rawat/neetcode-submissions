/*
    brute force method
    for (let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if((nums[i]+nums[j])==target){
                    return [i,j]
                }
            }
         }
    }
    */
class Solution   {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen =new Map()
        for(let i=0;i<nums.length;i++){
            const remain = target - nums[i];
            if(seen.has(remain)){
                return[seen.get(remain),i]
            }
            seen.set(nums[i],i)
        }
    }         
}
 
