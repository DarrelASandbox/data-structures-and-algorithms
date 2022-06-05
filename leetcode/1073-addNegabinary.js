/*
https://leetcode.com/problems/adding-two-negabinary-numbers/
https://en.wikipedia.org/wiki/Negative_base#Addition
https://math.stackexchange.com/questions/3251605/how-to-add-negabinary-numbers

// ***************************** Normal *****************************
     sign     -   -       -   -     -   -   -       -   -   -
    carry     1   1       1   1     1 1 1 1 1     1 1 1 1 1 1
            1 1	1	1	1   1 1 1 1 1   1 1 0 1 0 1       1 0 1 0 1
        +       1 0 1       1 1 1         1 0 1           1 0 1
---------------------------------------------------------------------
remainder   1 0 0 0 0   1 0 0 1 0   0 0 1 1 1 0   1 1 0 1 1 1 0

if sum = -1, remainder = 1, carry 1
if sum =  1, remainder = 1, carry 0
if sum =  2, remainder = 0, carry -1
if sum =  3, remainder = 1, carry -1

// *********************** With reverse for idx ***********************
      idx   0 1 2 3 4 5    0 1 2 3 4 5
     sign     -   -   -      -   -   -
    carry     1 1 1 1 1      1 1 1 1 1 1
            1 0 1 0 1 1    1 0 1 0 1 
            1 0 1          1 0 1     
------------------------------------------------------------------------
remainder   0 1 1 1 0 0    0 1 1 1 0 1 1

*****************************************************************************************************************************

Given two numbers arr1 and arr2 in base -2, return the result of adding them together.

Each number is given in array format:  as an array of 0s and 1s, from most significant bit to least significant bit.  For example, arr = [1,1,0,1] represents the number (-2)^3 + (-2)^2 + (-2)^0 = -3.  A number arr in array, format is also guaranteed to have no leading zeros: either arr == [0] or arr[0] == 1.

Return the result of adding arr1 and arr2 in the same format: as an array of 0s and 1s with no leading zeros.

Input: arr1 = [1,1,1,1,1], arr2 = [1,0,1]
Output: [1,0,0,0,0]
Explanation: arr1 represents 11, arr2 represents 5, the output represents 16.
*/

// Runtime: 81 ms	Memory: 44.6 MB
const addNegabinary = (arr1, arr2) => {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];
  let carry = 0;

  // reverse arrays for easier indexing
  arr1.reverse();
  arr2.reverse();

  for (let i = 0; i < maxLength; i++) {
    const val1 = arr1[i] || 0;
    const val2 = arr2[i] || 0;
    let sum = val1 + val2 - carry;
    let remainder;

    if (sum < 0) {
      // prevent pushing negative remainder into result
      sum += 2;
      carry = -1;
      remainder = sum % 2;
    } else {
      remainder = sum % 2;
      if (sum >= 2) carry = 1;
      else carry = 0;
    }
    result.push(remainder);
    // console.log(i, remainder, carry, result);
  }

  // When carry = -1 & sum is 0 + 0
  if (carry) result.push(1, 1);
  // Clear leading ZEROs
  while (result.length > 1 && result[result.length - 1] === 0) result.pop();
  return result.reverse();
};

// Runtime: 118 ms	Memory: 46.7 MB
const addNegabinary2 = (arr1, arr2) => {
  let sum = cal(arr1) + cal(arr2);
  return ToNegabinary(sum)
    .split('')
    .map((x) => Number(x));
};

const cal = (a) => {
  let n = BigInt(a.length);
  let result = 0n;
  for (let i = 0n; i < n; i++) {
    if (a[i] == 1n) {
      let tmp = (-2n) ** (n - i - 1n);
      result += tmp;
    }
  }
  console.log(result);
  return result;
};

const ToNegabinary = (num) => {
  let result = '';
  while (num != 0n) {
    let remainder = num % -2n;
    num /= -2n;
    if (remainder < 0n) {
      remainder += 2n;
      num++;
    }
    result = remainder.toString() + result;
  }
  return result.length == 0n ? '0' : result;
};

console.log(addNegabinary([1, 1, 1, 1, 1], [1, 1, 1]));
console.log(addNegabinary([1, 1, 0, 1, 0, 1], [1, 0, 1]));
console.log(addNegabinary([1, 0, 1, 0, 1], [1, 0, 1]));
