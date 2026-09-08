class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let res = [];
        for(let interval of intervals){

            // current interval before newInterval
            if(interval[1]<newInterval[0]){
                res.push(interval)
            }

            // current interval after newInterval
            else if(newInterval[1]<interval[0]){
                res.push(newInterval);
                newInterval = interval;
            }

            else{
                newInterval =[
                    Math.min(newInterval[0],interval[0]),
                    Math.max(newInterval[1],interval[1])
                ]
            }
        }
        res.push(newInterval)

        return res;

    }
}
