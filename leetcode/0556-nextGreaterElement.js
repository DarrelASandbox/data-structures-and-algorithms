/*
https://leetcode.com/problems/next-greater-element-iii/
https://leetcode.com/problems/next-greater-element-iii/discuss/896546/O(N)-JS-Solution-with-explanation

Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.
Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

Input: n = 12
Output: 21

Input: n = 21
Output: -1
*/

// Runtime: 60 ms	Memory: 41.8 MB
// Time: O(N) & Space: O(N)
// For any sequence that is in descending order, there is no larger permutation.
const nextGreaterElement = (n) => {
  const arr = n.toString().split('');
  let pivot = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      pivot = i - 1;
      break;
    }
  }
  // console.log(pivot, arr[pivot]);
  // array is in descending order
  if (pivot === -1) return -1;

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
      break;
    }
  }

  const left = arr.slice(0, pivot + 1);
  const right = arr.slice(pivot + 1).reverse();
  const res = Number(left.join('') + right.join(''));
  return res > Math.pow(2, 31) - 1 ? -1 : res;
};

// Math.pow(2, 31) - 1 = 2147483647
console.log(nextGreaterElement(123456789));
console.log(nextGreaterElement(2147418999));
