class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        const zeros = [];

        // Find all zero positions
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    zeros.push([i, j]);
                }
            }
        }

        // Set corresponding rows and columns to zero
        for (const [r, c] of zeros) {

            for (let j = 0; j < cols; j++) {
                matrix[r][j] = 0;
            }

            for (let i = 0; i < rows; i++) {
                matrix[i][c] = 0;
            }
        }

        return matrix;
    }
}
