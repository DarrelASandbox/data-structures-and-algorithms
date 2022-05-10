/*
https://leetcode.com/problems/fibonacci-number/

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
*/

// Runtime: 60 ms	Memory: 42.1 MB
const memoize = (fn) => {
  const cache = {};
  return (...args) => (cache[args] ? cache[args] : (cache[args] = fn(...args))); // or fn.apply(this, args)
};

const fibFn = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

const fib = memoize(fibFn);

console.log(fib(999));
