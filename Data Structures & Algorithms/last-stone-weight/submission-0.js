class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue()
for(const num of stones){
    maxHeap.enqueue(num)
}
while(maxHeap.size()>1){
    let val1 = maxHeap.dequeue()
    let val2 = maxHeap.dequeue()
    if(val1 !==val2){
        maxHeap.enqueue(val1-val2)
    }
}
return maxHeap.size()==1? maxHeap.dequeue():0;

    }
}
