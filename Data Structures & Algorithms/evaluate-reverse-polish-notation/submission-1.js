class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack =[]
        for(const token of tokens){
            const num = Number(token)
            if(!Number.isNaN(num)){
                stack.push(num)
            }else{
                const v1 = stack.pop()
                const v2 = stack.pop()
                if(token == "+"){
                    stack.push(v2+v1)
                }else if(token == "-"){
                    stack.push(v2-v1)
                }else if(token == "*"){
                    stack.push(v2*v1)
                }else{
                   stack.push(Math.trunc((v2/v1)))
                }
            }
        }
        return stack.pop()
    }
}
// // algo:
// stack 1 - ush integer
// stac 2 - push 

