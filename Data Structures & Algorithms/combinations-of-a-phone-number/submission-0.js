class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits){
            return []
        }
        let res = []
        let subset =[]
        let mapTable ={
            2:'abc',
            3:'def',
            4:'ghi',
            5:'jkl',
            6:'mno',
            7:'pqrs',
            8:'tuv',
            9:'wxyz'
        }
        function dfs(index){
            if(index == digits.length){
                res.push(subset.join(""))
                return
            }
            let digit =digits[index]
            let letters = mapTable[digit]
            for(let letter of letters){

                // choose
                subset.push(letter)

                // explore
                dfs(index+1)

                // backtrack
                subset.pop();
            }

        }
        dfs(0)
        return res;
    }
}
