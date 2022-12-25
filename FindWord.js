/**
 * After catching your classroom students cheating before,
 * you realize your students are getting craftier and hiding words in 2D grids of letters.
 * The word may start anywhere in the grid, and consecutive letters can be either immediately below or
 * immediately to the right of the previous letter.
 * Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates.
 * If there are multiple matches, return any one. Implement in Javascript
 */

/**
 grid1 = [
['c', 'c', 't', 'n', 'a', 'x'],
['c', 'c', 'a', 't', 'n', 't'],
['a', 'c', 'n', 'n', 't', 't'],
['t', 'n', 'i', 'i', 'p', 'p'],
['a', 'o', 'o', 'o', 'a', 'a'],
['s', 'a', 'a', 'a', 'o', 'o'],
['k', 'a', 'i', 'o', 'k', 'i'],
]
word1 = "catnip"

 */

const findWord = (board, word) => {
  // use backTracking
  // need to store the rows and cols
  const ROWLLEN = board.length;
  const COLLEN = board[0].length;
  const DIR = [
    [0, 1],
    [1, 0],
  ];
  const backTrack = (row, col, index) => {
    if (index >= word.length) {
      return;
    }
    if (
      row < 0 ||
      row >= ROWLLEN ||
      col < 0 ||
      col >= COLLEN ||
      board[row][col] != word[index]
    ) {
      return null;
    }

    // marking the visited cell
    let tempChar = board[row][col];
    board[row][col] = '#';

    for (let [r, c] of DIR) {
      backTrack(row + r, col + c, index + 1);
    }

    board[row][col] = tempChar;

    return res;
  }; // backTrack;

  let res = [];
  for (let i = 0; i < ROWLLEN; i++) {
    for (let j = 0; j < COLLEN; j++) {
      if (backTrack(i, j, 0)) {
        res.push([i, j].concat(backTrack(i, j, 0)));
      }
    }
  }
  return res;
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
word = 'ABCCED';

console.log(findWord(board, word));
