class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //brute force
    isPalindrome(s) {
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let newS = cleaned.split('').reverse().join('');
        if(cleaned==newS){
            return true;
        }else{
            return false
        }
    }
}
