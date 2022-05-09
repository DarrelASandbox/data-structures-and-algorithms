/*
https://leetcode.com/problems/spiral-matrix-ii/

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

// Runtime: 85 ms	Memory: 42.3 MB
const generateMatrix = (n) => {
  let num = 1;
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // North
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = num;
      num++;
    }

    // East
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = num;
      num++;
    }

    // South
    colEnd--;
    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = num;
      num++;
    }

    // West
    rowEnd--;
    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = num;
      num++;
    }
    colStart++;
  }

  return result;
};

console.log(generateMatrix(3));
