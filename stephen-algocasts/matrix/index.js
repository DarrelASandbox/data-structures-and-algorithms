// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = (n) => {
  const results = [];
  let num = 1;
  let startRow = 0;
  let startCol = 0;
  let endRow = n - 1;
  let endCol = n - 1;

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  while (startRow <= endRow && startCol <= endCol) {
    // North
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = num;
      num++;
    }

    // East
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = num;
      num++;
    }

    // South
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = num;
      num++;
    }

    // West
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = num;
      num++;
    }
    startCol++;
  }

  return results;
};

/************************
 WRITE YOUR CODE BELOW!
************************/

module.exports = matrix;

/*

        startCol           endCol
startRow
        ###################
        #     #     #     #
        #  1  #  2  #  3  #
        #     #     #     #
        ###################
        #     #     #     #
        #  8  #  9  #  4  #
        #     #     #     #
        ###################
        #     #     #     #
        #  7  #  6  #  5  #
        #     #     #     #
        ###################
  endRow

Create empty array of arrays called 'results'
Create a counter variable, starting at 1
As long as (start column <= end column) AND (start row <= end row)
    Loop from start column to end column
        At results[start_row][i] assign counter variable
        Increment counter
    Increment start row
    Loop from start row to end row
        At results[i][end_column] assign counter variable
        Increment counter
    Decrement end column
    ...repeat for other two sides
*/
