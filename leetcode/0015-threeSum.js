/*
https://leetcode.com/problems/3sum/
https://leetcode.com/problems/3sum/discuss/2014947/JavaScript-solution-with-explanation-and-code-comments

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/

// Runtime: 163 ms 	Memory: 52.2 MB
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      const target = 0 - nums[i];

      // nums[i] + nums[left] + nums[right] = 0 means nums[left] + nums[right] = -nums[i]
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      }
      // since nums is sorted we can increment left or decrement right based on sums value in relation to target
      else if (sum < target) left++;
      else right--;
    }
  }

  return result;
};

// Runtime: 199 ms 	Memory: 52.4 MB
const threeSum2 = (nums) => {
  const result = [];

  // use two pointers solution from sorted two sum problem
  function twoSum(i, nums) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]); // add valid combo to our result

        while (nums[left] === nums[left + 1]) {
          left += 1; // skip over duplicates from left
        }
        while (nums[right] === nums[right - 1]) {
          right -= 1; // skip over duplicates from right
        }

        left += 1; // move onto next numbers
        right -= 1;
      } else if (sum > 0) right -= 1;
      else left += 1;
    }
  }

  // sort incoming array
  const sortedNums = nums.sort((a, b) => a - b);

  // skip last two bc we have the two sum helper to go over those
  for (let i = 0; i < sortedNums.length - 2; i += 1) {
    // skip over duplicates here as well
    // we will start at 0 but start checking duplicates once
    // we reach index 1 since we are looking behind
    if (i === 0 || sortedNums[i - 1] !== sortedNums[i]) {
      twoSum(i, sortedNums, result);
    }
  }

  return result;
};

// Runtime: 251 ms 	Memory: 53 MB
const threeSum3 = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // we don't want to consider any triplets where the first and second elements are the same

    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        while (nums[start] == nums[start - 1] && start < end) {
          start++;
        }
      } else if (sum < 0) start++;
      else end--;
    }
  }

  return result;
};
