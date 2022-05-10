/*
https://leetcode.com/problems/partition-array-into-disjoint-intervals/

Given an integer array nums, partition it into two (contiguous) subarrays left and right so that:

- Every element in left is less than or equal to every element in right.
- left and right are non-empty.
- left has the smallest possible size.

Return the length of left after such a partitioning.
Test cases are generated such that partitioning exists.

Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
*/

// Runtime: 107 ms	Memory: 52.5 MB
const partitionDisjoint = (nums) => {
  let leftMax = nums[0];
  let currMax = nums[0];
  let pivot = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currMax) currMax = nums[i];
    if (nums[i] < leftMax) {
      leftMax = currMax;
      pivot = i;
    }
  }

  return pivot + 1;
};

// Runtime: 106 ms	Memory: 56.4 MB
const partitionDisjoint2 = (nums) => {
  let n = nums.length;

  let prefixMax = [...nums];
  for (let i = 1; i < n; i++) {
    prefixMax[i] = Math.leftMax(nums[i], prefixMax[i - 1]);
  }

  let suffixMin = [...nums];
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }

  for (let i = 0; i < n; i++) {
    if (prefixMax[i] <= suffixMin[i + 1]) {
      return i + 1;
    }
  }
};

console.log(partitionDisjoint([2, 1, 3, 1, 4, 5, 9, 8, 9]));
console.log(partitionDisjoint([2, 1, 2, 1, 2, 2]));
