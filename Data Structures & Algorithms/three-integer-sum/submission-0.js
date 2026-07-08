class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /*
    brute froce method
    
        let result =[];
        let newArr= nums.sort((b,a)=>b-a)
        for(let i=0;i<newArr.length;i++){
            if(newArr[i]==newArr[i-1]){
                continue;
                }
            for(let j=i+1;j<newArr.length;j++){
                if(j>i+1 && newArr[j]==newArr[j-1]){
                continue;
                }
                for(let k=j+1;k<newArr.length;k++){
                    if(k>j+1 && newArr[k]==newArr[k-1]){
                continue;
                }else if(newArr[i] + newArr[j] + newArr[k] == 0){
                    console.log("inside eleseif")
                        result.push([newArr[i],newArr[j],newArr[k]])                                                
                    }
                }
            }            
        }
        return result
    */
    threeSum(nums) {
        //check it once again 
        let result = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    // skip duplicates for left and right
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum < 0) {
                    left++;  // sum too small, need bigger number → move left up
                } else {
                    right--; // sum too big, need smaller number → move right down
                }
            }
        }
        return result;
    }
}