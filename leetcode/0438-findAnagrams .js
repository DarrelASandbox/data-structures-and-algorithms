/*
https://leetcode.com/problems/find-all-anagrams-in-a-string/
https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/473716/JavaScript-Solution
https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/1025753/Simplest-Sliding-Window-Solution-O(N)-Heavily-Commented-JavaScript

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

// Runtime: 142 ms	Memory: 46.4 MB
// Time: O(N) & Space: O(1)
const findAnagrams = (s, p) => {
  const neededChars = {}; // {key: value} as {char: count}
  const result = [];
  let uniqueChars = 0;

  for (const char of p) {
    if (!neededChars[char]) {
      neededChars[char] = 1;
      uniqueChars++;
    } else neededChars[char]++;
  }

  for (let left = 0, right = 0; right < s.length; right++) {
    // console.log('left', left, neededChars, uniqueChars);
    if (neededChars[s[right]] !== null) neededChars[s[right]]--;
    if (neededChars[s[right]] === 0) uniqueChars--;
    if (uniqueChars === 0) result.push(left);
    if (right - left === p.length - 1) {
      // console.log('right', right, neededChars, uniqueChars);
      if (neededChars[s[left]] !== null) neededChars[s[left]]++;
      if (neededChars[s[left++]] === 1) uniqueChars++;
    }
  }

  return result;
};

// Runtime: 141 ms	Memory: 46.5 MB
// Time: O(N) & Space: O(1)
const findAnagrams2 = (s, p) => {
  // initialize result array to be returned at the end and neededChars object to store the chars in p.
  const result = [];
  const neededChars = {};

  // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
  for (let char of p) {
    if (char in neededChars) {
      neededChars[char]++;
    } else neededChars[char] = 1;
  }

  // initialize window pointers and the total number of chars needed to form an anagram.
  let left = 0;
  let right = 0;
  let count = p.length;

  // start sliding the window
  while (right < s.length) {
    // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0),
    // then decrease the count which is the total number of chars that are needed and that still haven't been found.
    if (neededChars[s[right]] > 0) count--;

    // decrease the needed amount for the current char and move the window's right end one step forward.
    neededChars[s[right]]--;
    right++;

    // if the count is 0, this means that there is an anagram starting at the left index so push left into the result array.
    if (count === 0) result.push(left);

    // at first, the window will increase its length by taking steps forward with its right end.
    // after the window length reaches p's length for the first time,
    // the window will start moving forward like a caterpillar with the left end moving first.
    // finding the substring in s that match's with p, so the window length should be equal to p length
    if (right - left === p.length) {
      // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
      if (neededChars[s[left]] >= 0) count++;

      // the lines below are the most important to understand:
      // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string,
      // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
      neededChars[s[left]]++;
      left++;
    }
  }
  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
