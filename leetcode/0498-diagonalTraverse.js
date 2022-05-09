/*
https://leetcode.com/problems/diagonal-traverse/
https://leetcode.com/problems/diagonal-traverse/discuss/581868/Easy-Python-NO-DIRECTION-CHECKING

Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
*/

// Runtime: 123 ms	Memory: 48.4 MB
const findDiagonalOrder = (mat) => {
  if (!mat.length) return [];
  let idx = 0; // to keep track of odd and even diagonal
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = mat.length;
  let colEnd = mat[0].length;
  const result = [];
  const reverse = [];

  while (rowStart < rowEnd || colStart < colEnd) {
    for (
      let row = rowStart, col = colStart;
      row < rowEnd && col >= 0;
      row++, col--
    ) {
      // console.log(rowStart, colStart, row, col);
      if (idx % 2 === 0) reverse.push(mat[row][col]);
      else result.push(mat[row][col]);
    }

    // console.log('breakout');

    idx++;
    while (reverse.length) result.push(reverse.pop());
    colStart++;

    if (rowStart < rowEnd && colStart > colEnd - 1) {
      // console.log('reset');
      rowStart++;
      colStart = colEnd - 1;
    }
  }

  return result;
};

// Runtime: 123 ms	Memory: 47.6 MB
const findDiagonalOrder2 = (mat) => {
  let increasing = true;
  let result = [];
  let rows = mat.length - 1;
  let columns = mat[0].length - 1;
  let row = 0;
  let column = 0;

  while (row <= rows && column <= columns) {
    result.push(mat[row][column]);
    if (increasing) {
      if (row - 1 >= 0 && column + 1 <= columns) {
        column++;
        row--;
      } else {
        increasing = false;
        column != columns ? column++ : row++;
      }
    } else {
      if (row + 1 <= rows && column - 1 >= 0) {
        row++;
        column--;
      } else {
        increasing = true;
        row != rows ? row++ : column++;
      }
    }
  }
  return result;
};

// Runtime: 159 ms	Memory: 48.2 MB
const findDiagonalOrder3 = (mat) => {
  let row = 1;
  let column = -1;

  const rowLength = mat.length;
  const columnLength = mat[0].length;
  let maxElement = rowLength * columnLength;
  let directions = [
    [-1, 1],
    [1, -1],
  ];
  // direction up right (row - 1, column + 1)
  // direciton down left (row + 1, column - 1)

  let currDirection = 0;
  let res = [];
  while (maxElement > 0) {
    const [addRow, addCol] = directions[currDirection];
    row += addRow;
    column += addCol;

    if (row < 0 || row >= rowLength || column < 0 || column >= columnLength) {
      if (row < 0 && column >= columnLength) row++; // top right out of bound
      else if (row < 0 || row >= rowLength)
        column++; // top or bottom out of bound
      else if (column < 0 || column >= columnLength) row++; // left or right out of bound

      row -= addRow;
      column -= addCol;
      currDirection = (currDirection + 1) % 2;
    }

    res.push(mat[row][column]);
    maxElement--;
  }

  return res;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
