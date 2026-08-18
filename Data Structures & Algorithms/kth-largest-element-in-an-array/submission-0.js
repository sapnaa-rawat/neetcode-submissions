class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinPriorityQueue();
        for(const num of nums){
            minHeap.push(num);
            if(minHeap.size()>k){
                minHeap.pop();
            }
        }
        return minHeap.front();
    }
}
