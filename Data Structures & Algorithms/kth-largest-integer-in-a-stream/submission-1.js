class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.queue = [];

        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.queue.push(val);

        // Sort descending
        this.queue.sort((a, b) => b - a);

        return this.queue[this.k - 1];
    }
}

/*
constructor(k, nums):

    this.k = k
    create minHeap

    for each num in nums:
        add(num)


add(val):

    minHeap.push(val)

    if minHeap.size > k:
        minHeap.popMin()

    return minHeap.peek()
*/

