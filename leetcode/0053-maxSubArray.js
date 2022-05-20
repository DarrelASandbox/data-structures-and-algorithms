/*
https://leetcode.com/problems/maximum-subarray/
https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
https://leetcode.com/problems/maximum-subarray/discuss/364839/Divide-and-Conquer-Commented-Explanation-and-Big-O-(JS)

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1]
Output: 1

Input: nums = [5,4,-1,7,8]
Output: 23
*/

// Runtime: 150 ms	Memory: 50.4 MB
// Kadane’s Algorithm
const maxSubArray = (nums) => {
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    maxSum = Math.max(maxSum, nums[i]);
  }
  return maxSum;
};

// Runtime: 105 ms	Memory: 50.2 MB
const maxSubArray2 = (nums) => {
  let prev = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]; // set our current value as a variable to make it easy to understand
    prev = Math.max(prev + curr, curr); // basically poses the question: build or start over?
    max = Math.max(prev, max); // basically poses the question: update max or not?
  }
  return max;
};

// Runtime: 317 ms	Memory: 72.6 MB
// Divide and Conquer
const maxSubArray3 = (nums) => {
  // Return the results of the recursive function
  return findMaxSumInArr(nums);

  // Recursive function that will divide and conquer to find the maximum sum from a subarray of the array provided as a parameter
  function findMaxSumInArr(arr) {
    // BASE CASES:
    // if there is only one arr item, then you can simply return that value
    if (arr.length === 1) {
      return arr[0];
    }

    /* if there isn't an arr item, then return -Infinity (we need a valid number for the calculations below. 
		Since JS can only store numbers > -Infinity, -Infinity will never be the max) */
    if (arr.length === 0) {
      return -Infinity;
    }

    // Declare zero-indexed length and midpoint
    let length = arr.length - 1;
    let mid = Math.floor(length / 2);

    // DIVIDE: Recursively find max sum in the left and right sub arrays
    let lMaxSumInSubArr = findMaxSumInArr(arr.slice(0, mid));
    let rMaxSumInSubArr = findMaxSumInArr(arr.slice(mid + 1, length + 1));

    /* MERGE: The divide step gave use the max sum on the left and right side, but we still need to account
		for the possibility of a contiguous array that goes from left to right through the midpoint */

    // Declare variables to record the maximum contiguous sums for each side
    let lMaxContiguousSum = 0,
      rMaxContiguousSum = 0;

    // On the left side, find sum of contiguous array and keep an updated record of the maximum
    /* (NOTE: in order to account for contiguous arrays that traverse the midpoint, start the search from
		the midpoint - 1 index and traverse leftwards towards index 0. This directionality guarantees that
		a contiguous array traversing the midpoint will be able to add the midpoint itself and the right side's
		contiguous arr [this is exactly what is checked in the final return statement below]) */
    for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--) {
      currContiguousSum += arr[i];
      lMaxContiguousSum = Math.max(lMaxContiguousSum, currContiguousSum);
    }

    // On the left side, find sum of contiguous array and keep an updated record of the maximum
    /* (NOTE: in accordance with the last note, to account for sub arrays that traverse the midpoint, 
		start the search from the midpoint + 1 index and traverse rightwards */
    for (let i = mid + 1, currContiguousSum = 0; i <= length; i++) {
      currContiguousSum += arr[i];
      rMaxContiguousSum = Math.max(rMaxContiguousSum, currContiguousSum);
    }

    /* RETURN the max sum from the current array: either from the left side, right side, or a contiguous
		sub arrary traversing from left to right through the midpoint */
    return Math.max(
      // The maximum sum from a contiguous subarray that traverses the midpoint
      lMaxContiguousSum + arr[mid] + rMaxContiguousSum,
      // The max sum from each side (whether it was a single value or a contiguous sum)
      lMaxSumInSubArr,
      rMaxSumInSubArr
    );
  }
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
