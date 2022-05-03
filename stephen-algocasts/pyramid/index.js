// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n) => {
  let level = 1;
  let length = n * 2 - 1;
  const midpoint = (length - 1) / 2; // or n -1

  while (level <= n) {
    let str = '';
    for (let i = 0; i < length; i++) {
      midpoint - level < i && midpoint + level > i // between
        ? (str += '#')
        : (str += ' ');
    }
    console.log(str);
    level++;
  }
};

const pyramid2 = (n) => {
  for (let row = 0; row < n; row++) {
    let string = '';

    for (let col = 1; col < n * 2; col++) {
      col < n - row || col > n + row ? (string += ' ') : (string += '#');
    }
    console.log(string);
  }
};

const pyramid3 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(
      ' '.repeat(n - i - 1) + '#'.repeat(2 * i + 1) + ' '.repeat(n - i - 1)
    );
  }
};

const pyramid4 = (n, row = 0, column = '') => {
  const midpoint = n - 1;

  if (row === n) return;
  if (column.length === n * 2 - 1) {
    console.log(column);
    return pyramid(n, row + 1);
  }

  midpoint - row <= column.length && midpoint + row >= column.length
    ? (column += '#')
    : (column += ' ');

  return pyramid(n, row, column);
};

console.log(pyramid(10));

module.exports = pyramid;
