class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let op=[];
        let counts = {};
        for (let num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }
        
        let sortedElements = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
        
        for (let i = 0; i < k; i++) {
            op.push(Number(sortedElements[i]));
        }
        return op;
    }
}
