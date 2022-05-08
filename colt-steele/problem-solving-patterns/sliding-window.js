// Time Complexity - O(N^2)
function maxSubarraySum1(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

const maxSubarraySum3 = (arr, num) => {
  let sum = 0;
  let maxSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  sum = maxSum;

  // sum -smaller index value +bigger index value
  for (let i = num; i < arr.length; i++) {
    sum -= arr[i - num] - arr[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

// non-contiguous
function minSubarrayLen(arr, num) {
  const sortedArr = arr.sort((a, b) => {
    return b - a;
  });
  let sum = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sum < num) {
      sum += sortedArr[i];
    } else {
      return i;
    }
  }
  return 0;
}

// contiguous
const minSubarrayLen2 = (arr, num) => {
  let sum = 0;
  let minLength = Infinity;
  let left = 0;
  let right = 0;

  while (left < arr.length) {
    if (sum < num && right < arr.length) sum += arr[right++];
    else if (sum >= num) {
      minLength = Math.min(minLength, right - left);
      sum -= arr[left++];
    } else break;
  }
  return minLength === Infinity ? 0 : minLength;
};

function minSubarrayLen3(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {
  let longestSubStr = -Infinity;
  let subStrKeys = {};

  if (str.length === 0) return 0;

  let pos = 0;
  let subStrLen = 0;

  while (pos < str.length) {
    if (!(str[pos] in subStrKeys)) {
      subStrKeys[str[pos]] = pos;
      pos++;
      subStrLen++;
    } else {
      if (longestSubStr < subStrLen) longestSubStr = subStrLen;
      const newPos = subStrKeys[str[pos]] + 1;
      subStrKeys = {};
      pos = newPos;
      subStrLen = 0;
    }
  }

  if (longestSubStr < subStrLen) longestSubStr = subStrLen;
  return longestSubStr;
}

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

const findLongestSubstring3 = (str) => {
  let max = 0;
  let start = 0;
  let set = new Set();

  for (let end = 0; end < str.length; end++) {
    while (set.has(str[end])) {
      set.delete(str[start]);

      // while loop will stop when the initial repeated char is deleted.
      // then start will be 1 passed the repeated char
      start = start + 1;
    }
    set.add(str[end]);
    max = Math.max(max, end - start + 1);
    // console.log(str.substring(start, end + 1), ':', set);
  }
  return max;
};

const slidingWindowSection = document.querySelector('#sliding-window');

const maxSubarrayArr = [
  { arr: [2, 6, 9, 2, 1, 8, 5, 6, 3], num: 3 }, // 19
  { arr: [2, 6, 9, 5, 1, 8, 5, 6, 3], num: 4 }, // 23
  { arr: [1, 4, 16, 22, 5, 7, 8, 9, 10], num: 4 }, // 50
  { arr: [100, 200, 300, 400], num: 2 }, // 700
  { arr: [1, 4, 2, 10, 23, 3, 1, 0, 20], num: 4 }, // 39
  { arr: [-3, 4, 0, -2, 6, -1], num: 2 }, // 5
  { arr: [3, -2, 7, -4, 1, -1, 4, -2, 1], num: 2 }, // 5
  { arr: [2, 3], num: 3 }, // null
  { arr: [1, 2, 5, 2, 8, 1, 5], num: 2 }, // 10
  { arr: [1, 2, 5, 2, 8, 1, 5], num: 4 }, // 17
  { arr: [4, 2, 1, 6], num: 1 }, // 6
  { arr: [4, 2, 1, 6, 2], num: 4 }, // 13
  { arr: [], num: 4 }, // null
];

const minSubarrayLenArr = [
  { arr: [2, 3, 1, 2, 4, 3], num: 7 }, // 2 -> because [4,3] is the smallest subarray
  { arr: [2, 1, 6, 5, 4], num: 9 }, // 2 -> because [5,4] is the smallest subarray
  { arr: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], num: 52 }, // 1 -> because [62] is greater than 52
  { arr: [1, 4, 16, 22, 5, 7, 8, 9, 10], num: 39 }, // 3
  { arr: [1, 4, 16, 22, 5, 7, 8, 9, 10], num: 55 }, // 5
  { arr: [4, 3, 3, 8, 1, 2, 3], num: 11 }, // 2
  { arr: [1, 4, 16, 22, 5, 7, 8, 9, 10], num: 95 }, // 0
  { arr: [1, 2], num: 1 }, // 1
  { arr: [1], num: 1 }, // 1
  { arr: [2, 1], num: 1 }, // 1
  { arr: [1, 1, 1, 1, 1, 1, 1, 3], num: 2 }, // 1
];

const findLongestSubstringArr = [
  '', // 0
  'ab0c0ed', // 4
  'rithmschool', // 7
  'thisisawesome', // 6
  'thecatinthehat', // 7
  'bbbbbb', // 1
  'longestsubstring', // 8
  'thisishowwedoit', // 6
  'yeswhatismercy', // 11
  'abcxyzdexfghijxklmopc', // 12
];

// maxSubarrayArr.map(({ arr, num } = arrWithNum) =>
//   console.log('maxSubarraySum1: ', maxSubarraySum1([...arr], num))
// );
// console.log('\n');
// maxSubarrayArr.map(({ arr, num } = arrWithNum) =>
//   console.log('maxSubarraySum3: ', maxSubarraySum3([...arr], num))
// );
// console.log('\n');
// maxSubarrayArr.map(({ arr, num } = arrWithNum) =>
//   console.log('msa: ', msa([...arr], num))
// );

// Copy the objects for test cases so the arr does not get mutated.
// minSubarrayLenArr.map(({ arr, num } = arrWithNum) =>
//   console.log('minSubarrayLen2: ', minSubarrayLen2([...arr], num))
// );
// console.log('\n');
// minSubarrayLenArr.map(({ arr, num } = arrWithNum) =>
//   console.log('minSubarrayLen3: ', minSubarrayLen3([...arr], num))
// );
// console.log('\n');
// minSubarrayLenArr.map(({ arr, num } = arrWithNum) =>
//   console.log('msl: ', msl([...arr], num))
// );

// findLongestSubstringArr.map((str) =>
//   console.log('findLongestSubstring: ', findLongestSubstring(str))
// );
// console.log('\n');
// findLongestSubstringArr.map((str) =>
//   console.log('findLongestSubstring2: ', findLongestSubstring2(str))
// );
// console.log('\n');
// findLongestSubstringArr.map((str) =>
//   console.log('findLongestSubstring3: ', findLongestSubstring3(str))
// );
// console.log('\n');

/************************
 WRITE YOUR CODE BELOW!
 ************************/

// findLongestSubstringArr.map((str) => console.log('fls: ', fls(str)));
