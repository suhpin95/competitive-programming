/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    if(!heights || heights[0].length == 0 || heights.length == 0)return [];
    const ROWLEN = heights.length;
    const COLLEN = heights[0].length;
    // we need to keep the track of all the elements present individually for the oceans
    let pacificSet = new Set();
    let atlanticSet = new Set();
    
    const DFS = (row, col, prevHeight, visitedSet) => {
        if(visitedSet.has(`${row}:${col}`) || row < 0 || row >= ROWLEN || col < 0 || col >= COLLEN || heights[row][col] < prevHeight)return;
        visitedSet.add(`${row}:${col}`);
        DFS(row + 1, col, prevHeight, visitedSet);
        DFS(row - 1, col, prevHeight, visitedSet);
        DFS(row, col + 1, prevHeight, visitedSet);
        DFS(row, col - 1, prevHeight, visitedSet);
    }
    
    // traverse the pacific and atlantic
    for(let row = 0; row < ROWLEN; row++){
        DFS(0, row, heights[row][0], pacificSet);
        DFS(ROWLEN-1, row, heights[row][ROWLEN-1], atlanticSet);
    }
    
    for(let col = 0; col < COLLEN; col++){
        DFS(col, 0, heights[0][col], pacificSet);
        DFS(col, COLLEN-1, heights[COLLEN-1][col], atlanticSet);
    }
};

let graph = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
pacificAtlantic(graph)