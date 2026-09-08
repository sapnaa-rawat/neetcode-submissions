class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0] - b[0]);

        const res = [];

        for(const [start,end] of intervals){

            if(res.length == 0 || res[res.length - 1][1]< start){
                res.push([start,end]);
            }

            else{
                res[res.length - 1][1] = 
                Math.max(res[res.length - 1][1], end);
            }
        }
        return res;
    }
}

// function merge(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);

//     const result = [];

//     for (const [start, end] of intervals) {

//         // No overlap
//         if (result.length === 0 || result[result.length - 1][1] < start) {
//             result.push([start, end]);
//         }

//         // Overlap
//         else {
//             result[result.length - 1][1] =
//                 Math.max(result[result.length - 1][1], end);
//         }
//     }

//     return result;
// }