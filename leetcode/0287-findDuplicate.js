/*
https://leetcode.com/problems/find-the-duplicate-number/
https://www.youtube.com/watch?v=wjYnzkAhcNk

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Input: nums = [1,3,4,2,2]
Output: 2
*/

// Runtime: 150 ms	Memory: 49.8 MB
// Floyd’s Cycle Finding Algorithm
// 1 -> 3 -> 2 <-> 4 Multiple node pointing at node 2
// Use the number in the array as idx
const findDuplicate = (nums) => {
  let slow = nums[0];
  let fast = nums[nums[0]];

  // cycle-detection
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

/*
Floyd’s Cycle Finding Algorithm:
- Two While-Loops:
  - cycle-detection
  - index-location
- Loop 1:
  - Rabbit jumps two-steps like array[array[index]]
  - Tortoise is a simple guy, one-step-at-a-time
  - Retrieve a number of an array which can be use as an idx
- Loop2:
  - Both move one-step-at-a-time where next step is array[index]
  - If at any point they both are walking on a same number, return number.

Runtime: 112 ms	Memory: 49.4 MB
*/
const findDuplicate2 = (nums) => {
  //define
  let rabbit = 0;
  let tortoise = 0;
  let round1 = true;
  let round2 = false;

  //detect
  while (round1) {
    if (nums[tortoise] === nums[rabbit] && round2) {
      tortoise = 0;
      round1 = false;
    } else {
      tortoise = nums[tortoise];
      rabbit = nums[nums[rabbit]];
      round2 = true;
    }
  }

  //locate
  while (round2) {
    if (nums[tortoise] === nums[rabbit]) return nums[tortoise];
    tortoise = nums[tortoise];
    rabbit = nums[rabbit];
  }
};

// Runtime: 94 ms	Memory: 50.1 MB
// Time: O(N) & Space: O(1)
// Modified array which is not allowed
const findDuplicate3 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let absNum = Math.abs(nums[i]); // The the absolute value of an element i was saved in absNum
    if (nums[absNum] >= 0) nums[absNum] *= -1; // If not seen yet
    else return absNum; // Already seen
  }
};

// Runtime: 204 ms Memory: 50.4 MB
// Binary Search
const findDuplicate4 = (nums) => {
  let low = 1;
  let high = nums.length - 1;

  while (low < high) {
    let count = 0;
    const mid = low + (high - low) / 2;
    for (let num of nums) {
      if (num <= mid) count++;
    }
    if (count <= mid) low = mid + 1;
    else high = mid;
  }
  return Math.floor(low);
};
