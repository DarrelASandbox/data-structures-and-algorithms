/*
https://leetcode.com/problems/partition-labels/
https://leetcode.com/problems/partition-labels/discuss/1398189/Easy-to-read-O(n)-JavaScript-solution

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
Return a list of integers representing the size of these parts.

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Input: s = "ababcbacadefegdehijhklija"
Output: [25]
*/

// Runtime: 71 ms	Memory: 44.8 MB
// Time: O(N) & Space: O(1)
const partitionLabels = (s) => {
  const lastIndices = {}; // {key: value} as {letter: last index}
  const result = [];

  for (let i = 0; i < s.length; i++) {
    lastIndices[s[i]] = i;
  }

  for (let i = 0, start = 0, last = 0; i < s.length; i++) {
    last = Math.max(last, lastIndices[s[i]]);
    if (i === last) {
      result.push(last - start + 1);
      start = last + 1;
    }
  }

  return result;
};

// Runtime: 89 ms	Memory: 42.9 MB
// Time: O(N) & Space: O(1)
const partitionLabels2 = (s) => {
  if (!s || !s.length) return null;

  const result = [];
  const lastIndices = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    lastIndices[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    console.log(lastIndices);
  }

  for (let i = 0, start = 0, end = 0; i < s.length; i++) {
    end = Math.max(end, lastIndices[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
    if (i == end) {
      result.push(end - start + 1); // partition
      start = end + 1;
    }
  }
  return result;
};

// Runtime: 103 ms	Memory: 42.1 MB
const partitionLabels3 = (s) => {
  const res = [];
  let left = 0;
  let last = -1;
  for (let i = 0; i < s.length; i++) {
    last = Math.max(s.lastIndexOf(s[i]), last);
    if (i === last) {
      res.push(i - left + 1);
      left = i + 1;
    }
  }
  return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
