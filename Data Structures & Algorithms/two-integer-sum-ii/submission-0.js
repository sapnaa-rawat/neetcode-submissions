class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1]; // convert to 1-indexed
        } else if (sum < target) {
            left++;  // need a bigger sum, move left forward
        } else {
            right--; // need a smaller sum, move right backward
        }
    }
    
    return []; // won't actually reach here per problem guarantee
};
}
