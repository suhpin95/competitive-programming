/**
 * After catching your classroom students cheating before,
 * you realize your students are getting craftier and hiding words in 2D grids of letters.
 * The word may start anywhere in the grid, and consecutive letters can be either immediately below or
 * immediately to the right of the previous letter.
 * Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates.
 * If there are multiple matches, return any one. Implement in Javascript
 */
let result = [];
let hashSet = new Set();
const findWord = (grid, word) => {
  // if word len == 0
  if (word.length === 0) return [];

  const backTracking = (row, col, index) => {
    if (index >= word.length) {
      return true;
    }
    // traversal conditions
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      grid[row][col] != word[index]
    ) {
      return false;
    }

    if (grid[row][col] == word[index] && !hashSet.has(grid[row][col])) {
      hashSet.add(grid[row][col]);
      result.push([row, col]);
    }

    return (
      backTracking(row + 1, col, index + 1) ||
      backTracking(row, col + 1, index + 1)
    );
  };

  // traversal of grid

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === word[0]) {
        if (backTracking(i, j, 0)) return result;
      }
    }
  }
  return result;
};

const grid = [
  ['c', 'c', 't', 'n', 'a', 'x'],
  ['c', 'c', 'a', 't', 'n', 't'],
  ['a', 'c', 'n', 'n', 't', 't'],
  ['t', 'n', 'i', 'i', 'p', 'p'],
  ['a', 'o', 'o', 'o', 'a', 'a'],
  ['s', 'a', 'a', 'a', 'o', 'o'],
  ['k', 'a', 'i', 'o', 'k', 'i'],
];
console.log(findWord(grid, 'catnip')); // [(1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4) ]
