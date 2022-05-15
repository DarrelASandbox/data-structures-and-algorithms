/*
https://leetcode.com/problems/number-of-closed-islands/
https://www.youtube.com/watch?v=QcY61aBwibI&t=833s

Given a 2D grid consists of 0s (land) and 1s (lava).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
Return the number of closed islands.

[1,1,1,1,1,1,1,0]
[1,0,0,0,0,1,1,0]
[1,0,1,0,1,1,1,0]
[1,0,0,0,0,1,0,1]
[1,1,1,1,1,1,1,0]

Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by lava (group of 1s).

[0,0,1,0,0]
[0,1,0,1,0]
[0,1,1,1,0]

Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
*/

// Runtime: 92 ms	Memory: 47.1 MB
// Time: O(N x M) & Space: O(N x M)
const closedIsland = (grid) => {
  let result = 0;
  // left, right, down, up
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const dfs = (x, y) => {
    // handles validity of respective index in the matrix
    if (x < 0 || x >= grid.length) return 0;
    if (y < 0 || y >= grid[0].length) return 0;
    if (grid[x][y] === 1) return 1;
    grid[x][y] = 1; // mark visited
    let valid = 1; // if invalid island return 0
    directions.forEach(([dx, dy]) => (valid *= dfs(x + dx, y + dy)));
    return valid;
  };

  // traverse all cell
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // Look for land which is grid[row][col] === 0
      if (grid[row][col] === 0) {
        const valid = dfs(row, col);
        if (valid) result++; // if valid 1 else 0
      }
    }
  }

  return result;
};

/*
An island must be sorunded from all 4 directions.

When finding land we can concluds the following:
 - if the border of the grid is reached it is not an island
 - if water is reached that direction satisfies the requirement.
 - we must satisfy the requirment for all 4 directions.
The function isIsland will test those constraints.
Runtime: 109 ms	Memory: 44.5 MB
*/
const reachedBorder = (grid, i, j) =>
  i === 0 || i === grid.length - 1 || j === 0 || j === grid[0].length - 1;
const isLand = (grid, i, j) => grid[i][j] === 0;
const isWater = (grid, i, j) => grid[i][j] === 1;
const isIsland = (grid, i, j) => {
  if (reachedBorder(grid, i, j) && isLand(grid, i, j)) return false;
  if (isWater(grid, i, j)) return true;
  grid[i][j] = 1;
  const left = isIsland(grid, i - 1, j);
  const right = isIsland(grid, i + 1, j);
  const down = isIsland(grid, i, j - 1);
  const up = isIsland(grid, i, j + 1);
  return left && right && down && up;
};

const closedIsland2 = (grid) => {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (isLand(grid, i, j) && isIsland(grid, i, j)) {
        islands++;
      }
    }
  }

  return islands;
};

console.log(
  closedIsland([
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
