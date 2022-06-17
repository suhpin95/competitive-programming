/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rowLen = board.length;
    const colLen = board[0].length;
    const DIR = [[0, 1], [0, -1], [1,0], [-1, 0]];

    const backTrack = (startIndex, row, col) => {
        if(startIndex >= word.length)return true;
        if(row >= rowLen || col >= colLen || row < 0 || col < 0 || board[row][col] != word.charAt(startIndex)){
            return false;
        }
        board[row][col] = '#';

        for(let [r, c] of DIR){
            if(backTrack(startIndex + 1, row + r, col + c))return true;
        }
        board[row][col] = word.charAt(startIndex);
    }// backTrack

    // loop through the matrix to perform DFS
    for(let row= 0; row < rowLen; row++){
        for(let col = 0; col < colLen; col++){
            if(backTrack(0, row, col))return true;
        }
    }
    return false;
};

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
console.log(exist(board, word))