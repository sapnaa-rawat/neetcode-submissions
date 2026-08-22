class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
const res = [];
        candidates.sort((a, b) => a - b);

        const dfs = (i, cur, total) => {
            if (total === target) {
                res.push([...cur]);
                return;
            }

            for (let j = i; j < candidates.length; j++) { 
                if(j>i && candidates[j] === candidates[j-1]){
                    continue
                }
                if (total + candidates[j] > target) {
                    break;
                }
                cur.push(candidates[j]);
                dfs(j+1, cur, total + candidates[j]);
                cur.pop();
            }
        };

        dfs(0, [], 0);
        return res;
    }    
}
