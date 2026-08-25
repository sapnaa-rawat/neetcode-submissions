class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

        let res = [];
        let part = [];

        function isPalindrome(l, r) {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false;
                }
                l++;
                r--;
            }
            return true;
        }

        function dfs(start) {

            if (start === s.length) {
                res.push([...part]);
                return;
            }

            for (let end = start; end < s.length; end++) {

                if (isPalindrome(start, end)) {

                    part.push(
                        s.substring(start, end + 1)
                    );

                    dfs(end + 1);

                    part.pop();
                }
            }
        }

        dfs(0);

        return res;
    }
}