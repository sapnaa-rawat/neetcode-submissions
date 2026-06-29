class Solution {
    /**
     * @param {string} s
     * @param {string} t 
     * @return {boolean}
     */
    isAnagram(s, t) {
        let seen = new Map();
        if(s.length!=t.length){
            return false;
        }
        for(let char of s){
            if(seen.has(char)){
                seen.set(char,seen.get(char)+1)
            }else
            seen.set(char,1)
        }
        for(let char of t){
            if(!seen.has(char)){
                return false
            }
            seen.set(char,seen.get(char)-1)
            if(seen.get(char)<0){
                return false;
            }
        }
        return true
    }
}
