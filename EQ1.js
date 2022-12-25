/**
 *
 * @param {*} board
 * @returns
 */

const findPath = (board) => {
  const ROWLLEN = board.length;
  const COLLEN = board[0].length;

  const rows = [];
  const cols = [];
  let isPassable;

  // check for the rows
  for (let row = 0; row < ROWLLEN; row++) {
    isPassable = true;
    for (let col = 0; col < COLLEN; col++) {
      if (board[row][col] === '+') {
        isPassable = false;
        break;
      }
    }
    if (isPassable) {
      rows.push(row);
    }
  }

  // check for the cols

  for (let col = 0; col < COLLEN; col++) {
    isPassable = true;
    for (let row = 0; row < ROWLLEN; row++) {
      if (board[row][col] === '+') {
        isPassable = false;
      }
    }
    if (isPassable) {
      cols.push(col);
    }
  }

  // return result as an array
  return [rows, cols];
};

const board = [
  ['+', '+', '+', '0', '+', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '+', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '+', '0', '0'],
  ['+', '+', '+', '0', '0', '0', '+'],
];

console.log(findPath(board));

/**
 *
 */
