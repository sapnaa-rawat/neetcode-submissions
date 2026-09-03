class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {

        let res = 0;

        while (x !== 0) {

            let digit = x % 10;
            x = Math.trunc(x / 10);

            if (
                res > Math.floor(2147483647 / 10) ||
                res < Math.ceil(-2147483648 / 10)
            ) {
                return 0;
            }

            res = res * 10 + digit;
        }

        return res;
    }
}