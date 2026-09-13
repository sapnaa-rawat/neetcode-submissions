class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let n = s.length;
        let dp = new Array(s.length + 1).fill(0);
        dp[0] = 1;
        if( s[0] != '0'){
            dp[1] = 1;
        }
        for(let i =2; i<n+1; i++){

            //for one digit
            if(s[i-1] != '0'){
                dp[i] += dp[i-1];
            }

            let digit = s.slice(i-2, i)
            if (digit >= 10 && digit <= 26){
                dp[i] +=dp[i-2];
            }
        }
        return dp[n]
    }
}
