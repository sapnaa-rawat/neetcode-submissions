class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {

    let result = 0;
    let sign = (x < 0)? -1 :1;
    x = Math.abs(x)

    while (x !== 0) {
        let digit = x % 10;
        x = Math.trunc(x / 10);

        result = result * 10 + digit;
    }
    result *= sign;

    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
        return 0;
    }

    return result;
    }
}

// function reverse(x) {
//     let result = 0;
//     let sign = (x < 0)? -1 :1;
//     let x = Math.abs(x)

//     while (x !== 0) {
//         let digit = x % 10;
//         x = Math.trunc(x / 10);

//         result = result * 10 + digit;
//     }
//     x *= sign;

//     if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
//         return 0;
//     }

//     return result;
// }