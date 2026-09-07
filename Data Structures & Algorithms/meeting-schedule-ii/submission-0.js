/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a,b)=>a.start-b.start);
        const minHeap = new MinPriorityQueue();
        for(const interval of intervals){
            let start = interval.start;
            let end = interval.end;
            if(!minHeap.isEmpty() && minHeap.front() <= start){
                minHeap.dequeue()
            }
            minHeap.enqueue(end);
        }
        return minHeap.size();
    }
}
