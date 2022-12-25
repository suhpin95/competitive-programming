/**
 * After catching your classroom students cheating before,
 * you realize your students are getting craftier and hiding words in 2D grids of letters.
 * The word may start anywhere in the grid, and consecutive letters can be either immediately below or
 * immediately to the right of the previous letter.
 * Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates.
 * If there are multiple matches, return any one. Implement in Javascript
 */

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

    return (
      backTracking(row + 1, col, index + 1) ||
      backTracking(row, col + 1, index + 1)
    );
  };

  // traversal of grid

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === word[0]) {
        if (backTracking(i, j, 0)) return getCoordinates(i, j, word.length, 0);
      }
    }
  }
  return [];
};

// Recursive helper function to check if the word is present in the grid starting from a given cell

// Helper function to generate a list of coordinates for the given word
function getCoordinates(row, col, length, direction) {
  const coordinates = [];
  for (let i = 0; i < length; i++) {
    coordinates.push([row, col]);
    if (direction === 0) {
      row++;
    } else {
      col++;
    }
  }
  return coordinates;
}
const grid = [
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L'],
  ['M', 'N', 'O', 'P'],
];
console.log(findWord(grid, 'ABCG')); // [[0, 0], [1, 0], [2, 0], [3, 0]]
