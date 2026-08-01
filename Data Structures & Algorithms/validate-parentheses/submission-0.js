class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * push,pop,= end of stack 
     * shift,unshift = from start of stack
     */
    isValid(s) {
        const parn =[];
        const mapArr ={
            ')':'(',
            ']':'[',
            '}':'{'
        }
        for(let char of s){
            if(Object.values(mapArr).includes(char)){
                parn.push(char)
            }else{
                if(parn.length===0)return false
                const popval= parn.pop();
                if(popval!= mapArr[char]){
                    return false
                }
            }
        }
        return(parn.length ===0)
    }
}
