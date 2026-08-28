class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {

        function dfs(x, n) {

            if (n === 0) {
                return 1;
            }

            if (x === 0) {
                return 0;
            }

            const half = dfs(x, Math.floor(n / 2));

            if (n % 2 === 0) {
                return half * half;
            }

            return x * half * half;
        }

        if (n < 0) {
            return 1 / dfs(x, -n);
        }

        return dfs(x, n);
    }
}