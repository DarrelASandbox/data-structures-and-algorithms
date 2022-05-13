/*
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

// Runtime: 71 ms 	Memory: 42.7 MB
const twoSum = (nums, target) => {
  const checkObj = {}; // {key: value} as {compliment: i}
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (compliment in checkObj) return [checkObj[compliment], i];
    checkObj[nums[i]] = i;
  }

  return null;
};

// Runtime: 76 ms 	Memory: 44 MB
const twoSum2 = (nums, target) => {
  const sorted = [...nums].sort((a, b) => a - b);

  let start = 0;
  let end = sorted.length - 1;

  while (start < end) {
    const sum = sorted[start] + sorted[end];
    if (sum === target)
      return [nums.indexOf(sorted[start]), nums.lastIndexOf(sorted[end])];
    // lastIndexOf => to avoid the case that numbers are half of the target so they point to the same index
    sum < target ? start++ : end--;
  }
};

// Runtime: 102 ms 	Memory: 42.9 MB
const twoSum3 = (nums, target) => {
  const ref = {}; // Hash table
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remainder = target - current;
    if (remainder in ref) return [ref[remainder], i]; // If the map already contains the compliment we will return the solution
    ref[current] = i; // If does not exist we add current and continue to the next number
  }

  return null;
};

// Runtime: 101 ms 	Memory: 43.5 MB
const twoSum4 = (nums, target) => {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (map.has(compliment)) return [map.get(compliment), i];
    map.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([0, 4, 3, 0], 0));
console.log('\n');
console.log(twoSum([1, 3, 6, 4, 9], 8));
