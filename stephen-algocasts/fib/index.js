// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fib1 = (n) => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let prevNum = 0;
  let currNum = 1;
  let nextNum = 0;

  for (let i = 2; i <= n; i++) {
    nextNum = prevNum + currNum;
    currNum = prevNum;
    prevNum = nextNum;
  }
  return nextNum;
};

const fib2 = (n) => {
  let prevNum = 0;
  let lastNum = 1;

  for (let i = 2; i <= n; i++) {
    lastNum = lastNum + prevNum;
    prevNum = lastNum - prevNum;
  }

  return n === 0 ? 0 : lastNum;
};

const fib3 = (n) => {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }
  return result[n];
};

const fib4 = (n, i = 1, currNum = 1, prevNum = 0) => {
  if (n === i) return currNum;
  return fib(n, i + 1, currNum + prevNum, currNum);
};

// Exponential Time
const fib5 = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// Memoize
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args); // or fn(...args)
    cache[args] = result;
    return result;
  };
};

const fib = memoize(fib5);
console.log(fib(100));

/************************
 WRITE YOUR CODE BELOW!
************************/

module.exports = fib;
