class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //brute force
    // isPalindrome(s) {
    //     let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    //     let newS = cleaned.split('').reverse().join('');
    //     if(cleaned==newS){
    //         return true;
    //     }else{
    //         return false
    //     }
    // }
    isPalindrome(s){
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g,'')
        let left =0;
        let right = cleaned.length-1
        console.log("left",cleaned[left])
        console.log("right",cleaned[right])
        while(right>left){
            if(cleaned[left]==cleaned[right]){
                left++;
                right--;
            }else{
                return false
            }
        }
        return true
    }
}
