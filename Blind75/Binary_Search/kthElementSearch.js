/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // get the lowestVal and highestVal
    const rowLen = matrix.length;
    const colLen = matrix[0].length;

    let lowVal = matrix[0][0] - 1,
        highVal = matrix[rowLen - 1][colLen - 1];

    //Binary search using concept similar to search and prune
    while(lowVal+1 < highVal){
        let midVal = lowVal + Math.floor((highVal - lowVal) / 2)
        let count = belowMidCount(matrix, midVal);
        count >= k ? highVal = midVal : lowVal = midVal;
    }
    return highVal;
}
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */

const belowMidCount = (matrix, target) => {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;

    let row = rowLen - 1,
        col = 0,
        count = 0;
    while(row >= 0 && col < colLen ){
        if(matrix[row][col] <= target){
            count += row + 1;
            col++;
        } else {
            row--;
        }
    }
    return count;
}
