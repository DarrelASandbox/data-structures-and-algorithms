/*
https://leetcode.com/problems/subarray-sum-equals-k/
https://stackoverflow.com/questions/18541940/map-vs-object-in-javascript

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

Input: nums = [1,1,1], k = 2
Output: 2
*/

// Runtime: 96 ms	Memory: 49.1 MB
const subarraySum = (nums, k) => {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.get(sum - k)) result += map.get(sum - k);
    if (map.get(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }

  return result;
};

// Runtime: 127 ms	Memory: 54.2 MB
const subarraySum2 = (nums, k) => {
  // {key: value} as {sum: occurrence}
  const map = { 0: 1 }; // First occurrence when sum - k = 0 which means result++;
  let sum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k]) result += map[sum - k]; // Found value equals to key in map && add occurrences to result
    if (map[sum]) map[sum] += 1; // Increment occurrence of key already in map
    else map[sum] = 1;
  }

  return result;
};

console.log(subarraySum2([2, 3, 4, 1, 7, 5], 5));
console.log(subarraySum2([1, -1, 0], 0));
