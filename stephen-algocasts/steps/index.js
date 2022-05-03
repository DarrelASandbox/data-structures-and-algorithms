// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n) => {
  let step = 1;
  while (step <= n) {
    let str = '';
    for (let i = 0; i < n; i++) {
      step > i ? (str += '#') : (str += ' ');
    }
    console.log(str);
    step++;
  }
};

const steps2 = (n, row = 0, column = '') => {
  if (row === n) return;
  if (column.length === n) {
    console.log(column);
    return steps(n, row + 1);
  }
  column.length <= row ? (column += '#') : (column += ' ');
  return steps(n, row, column);
};

const steps3 = (n) => {
  let i = 1;
  let steps = '';

  while (i <= n) {
    console.log(steps.padStart(i, '#').padEnd(n, ' '));
    i++;
  }
};

const steps4 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
};

const steps5 = (n, counter = 1) => {
  if (counter === n + 1) return;
  console.log('#'.repeat(counter) + ' '.repeat(n - counter));
  steps(n, counter + 1);
};

module.exports = steps;
