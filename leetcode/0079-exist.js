/*
https://leetcode.com/problems/word-search/
https://leetcode.com/problems/word-search/discuss/133078/Clean-JavaScript-solution
https://leetcode.com/problems/word-search/discuss/408943/JavaScript-Recursive-Solution-w-Explanation
https://leetcode.com/problems/word-search/discuss/1941240/Simple-JS-Solution-w-Comments
https://leetcode.com/problems/word-search/discuss/1860718/JAVASCRIPT-recursive-dfs-solution-%2B-explanation

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

A B C E   A* B* C* E
S F C S   S  F  C* S
A D E E   A  D* E* E

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

A  B  C  E
S  F  C  S*
A  D  E* E*

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

A  B  C  E
S  F  C  S
A  D  E  E

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

// Runtime: 806 ms	Memory: 43 MB
// only visit 3 directions after first loop - Time: O(M * N * 4^L) & Space: O(MN + L)
const exist = (board, word) => {
  if (board.length === 0) return false;

  const m = board.length;
  const n = board[0].length;
  // left, down, right & top
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const dfs = (x, y, k) => {
    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[x][y] = '*'; // mark as visited
    for (const [dx, dy] of directions) {
      const row = x + dx;
      const col = y + dy;
      if (row >= 0 && row < m && col >= 0 && col < n && dfs(row, col, k + 1)) return true;
    }

    board[x][y] = word[k]; // reset board
    return false;
  };

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }

  return false;
};

// Runtime: 1323 ms	Memory: 50.3 MB
// Time: O(N x 3^L) & Space: O(L)
const exist2 = (board, word) => {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let result = false;

  // build string starting at index 0
  const bfs = (x, y, i, prefix) => {
    if (prefix === word) result = true;
    if (result) return;

    // handle invalids
    if (x < 0 || x >= board.length) return;
    if (y < 0 || y >= board[0].length) return;
    if (board[x][y] !== word[i]) return;

    // save current char and mark as visited
    const cv = board[x][y];
    board[x][y] = '';

    // increment index by 1 to look for next char and build string
    directions.forEach(([dx, dy]) => {
      bfs(x + dx, y + dy, i + 1, prefix + cv);
    });

    board[x][y] = cv; // reset board to clear marked cells for next recursion run
  };

  // bfs all cell
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      bfs(r, c, 0, '');
    }
  }

  return result;
};

console.log(
  exist(
    [
      ['C', 'A', 'A'],
      ['A', 'A', 'A'],
      ['B', 'C', 'D'],
    ],
    'AAB'
  )
);
