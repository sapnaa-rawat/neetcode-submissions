class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        
        function dfs(index,row,col){
            if(index === word.length) return true;
            if(row < 0 || col<0 || row >=ROWS || col >= COLS
              || board[row][col] !== word[index]){
                return false;
            }
            const temp = board[row][col]
            board[row][col] = '#'
            const res = 
                dfs(index+1, row+1,col) ||
                dfs(index+1, row-1, col) ||
                dfs(index+1, row, col+1) ||
                dfs(index+1, row, col-1);
            board[row][col] = temp;
            return res;
        }
        for(let row = 0; row<ROWS; row++){
            for(let col =0; col<COLS; col++){
                if(dfs(0, row, col))
                return true
            }
        }
        return false;
    }
}