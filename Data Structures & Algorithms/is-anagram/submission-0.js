class Solution {
    /**
     * @param {string} s
     * @param {string} t 
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false;
        }
        let seen = new Set();
        let s1=s.split("").sort().join("")
        let s2=t.split("").sort().join("")
        if(s1===s2){
            return true
        }
        return false
    }
}
