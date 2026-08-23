class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = []
        function dfs(openN,closeN,stack){
            if(openN==closeN && openN ==n){
                res.push(stack)
                return
            }
            if(openN < n){
                dfs(openN+1, closeN, stack + '(')
            }   
            if(closeN < openN){
                dfs(openN, closeN+1, stack + ')')
            }            
        }
        dfs(0,0, '')
        return res
    }
}
