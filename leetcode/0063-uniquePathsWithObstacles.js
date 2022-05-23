/*
https://leetcode.com/problems/unique-paths-ii/
https://leetcode.com/problems/unique-paths-ii/discuss/1180311/JS-Python-Java-C%2B%2B-or-Easy-DP-Solution-w-Explanation
https://leetcode.com/problems/unique-paths-ii/discuss/1232747/DP-O(1)-space-JS-Solution
https://stackoverflow.com/questions/12236271/is-true-1-and-false-0-in-javascript
https://www.youtube.com/watch?v=z6kelCB0ww4

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The testcases are generated so that the answer will be less than or equal to 2 * 109.

  0 1 2     0 1 2     0 1 2     0 1 2
0 R 0 0   0 R 0 0   0 R 0 0   0 R 0 0
1 0 0 0   1 0 1 0   1 1 1 0   1 1 1 1
2 0 0 E   2 0 0 E   2 0 0 E   2 0 0 E  

6 ways    2 ways    1 way     0 way

  0 1 2     0 1 2     0 1 2     0 1 2
0 R 1 1   0 R 1 1   0 R 1 1   0 R 0 0
1 1 2 3   1 1 0 1   1 0 0 1   1 0 0 0
2 1 3 6   2 1 1 2   2 0 0 1   2 0 0 E  

Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
*/
/*
Runtime: 72 ms	Memory: 43.2 MB
Time Complexity: O(N * M) where N and M are the dimensions of the input matrix
Space Complexity: O(N * M) for the DP matrix
Dynamic Programming
*/
const uniquePathsWithObstacles = (obstacleGrid) => {
  if (obstacleGrid[0][0]) return 0;

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = [...Array(m)].map(() => Array(n).fill(0));
  // number in each cell of dp matrix represent the number of path(s) to itself
  dp[0][0] = 1;
  for (let row = 0; row < m; row++)
    for (let col = 0; col < n; col++)
      // check OG cell for 1 (obstacle) and skip starting cell row === 0 && col === 0
      if (obstacleGrid[row][col] || (!row && !col)) continue;
      // sum of paths to DP cell = left cell + top cell
      // check dp[row][col] is a valid cell (not out of bound e.g. dp[-1][1])
      else dp[row][col] = (row ? dp[row - 1][col] : 0) + (col ? dp[row][col - 1] : 0);

  return dp[m - 1][n - 1];
};

const uniquePathsWithObstacles2 = (obstacleGrid) => {
  if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0) return 0;

  let height = obstacleGrid.length;
  let width = obstacleGrid[0].length;
  // If there is an obstacle at the starting point (0,0) or the target point (m-1,n-1), there is zero path because we can't either start or reach the target.
  if (obstacleGrid[0][0] === 1 || obstacleGrid[height - 1][width - 1] === 1) return 0;

  for (let row = height - 1; row >= 0; row--) {
    for (let col = width - 1; col >= 0; col--) {
      if (row === height - 1 && col === width - 1) {
        obstacleGrid[row][col] = 1;
        continue;
      }
      let right = col < width - 1 ? obstacleGrid[row][col + 1] : 0;
      let bottom = row < height - 1 ? obstacleGrid[row + 1][col] : 0;
      obstacleGrid[row][col] = obstacleGrid[row][col] === 0 ? right + bottom : 0;
    }
  }
  return obstacleGrid[0][0];
};

// Runtime: 72 ms	Memory: 43.2 MB
// Memoization
const uniquePathsWithObstacles3 = (obstacleGrid) => {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const memo = new Map();

  const topDown = (row, col) => {
    // base case
    if (row < 0 || col < 0 || obstacleGrid[row][col] === 1) return 0;
    if (row === 0 && col === 0) return 1;

    const key = row + ',' + col;
    if (memo.has(key)) return memo.get(key);

    const res = topDown(row - 1, col) + topDown(row, col - 1);
    memo.set(key, res);

    return res;
  };

  return topDown(m - 1, n - 1);
};
