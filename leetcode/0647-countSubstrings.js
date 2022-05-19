/*
https://leetcode.com/problems/palindromic-substrings/
https://www.youtube.com/watch?v=4RACzI5-du8
https://leetcode.com/problems/palindromic-substrings/discuss/1129426/JS-Python-Java-C%2B%2B-or-Optimized-Mathematical-Solution-w-Explanation
https://leetcode.com/problems/palindromic-substrings/discuss/589576/javascript-DP-w-comments-and-explanation

Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

/*
// Runtime: 84 ms	Memory: 43 MB
Pointers
There are N possible odd centers & N-1 possible even centers. In total, 2N-1 centers and each center can possible grow as long as N.
Time: O(N * 2N-1) => O(N^2) & Space: O(1)
Brute Force method will be N^3:  Iterate through substring + determine palindrome (N^2 * N)
*/
const countSubstrings = (s) => {
  let count = 0;

  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right])
      count++, left--, right++;
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i); // odd length
    expand(i, i + 1); // even length
  }

  return count;
};

// Runtime: 68 ms	Memory: 42.5 MB
// Pointers, Nth triangular number (defined as N * (N + 1) / 2) & Bitwise NOT (~)
const countSubstrings2 = (s) => {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i - 1;
    while (left < s.length - 1 && s[left] === s[left + 1]) left++;
    result += ((left - right) * (left - right + 1)) / 2;
    i = left++;
    // For integers, a 0 is falsy (meaning it evaluates to false in a conditional expression) and any non-zero value is truthy.
    // With a bitwise NOT operator (~), a 0 turns into a -1 and a -1 turns into a 0. So while (~j) will continue until j = -1.
    // It's a convenient way to deal with iterating backwards through a 0-indexed array.
    // In this case, it's the functional equivalent to while (right >= 0), but it's both shorter and faster.
    while (~right && left < s.length && s[left] === s[right])
      left++, right--, result++;
  }

  return result;
};

// Runtime: 119 ms	Memory: 69 MB
// Dynamic Programming
const countSubstrings3 = (s) => {
  // count of palindromic substrings
  let count = 0;
  // dp array (size of string) (filled with 0s initially)
  const dp = [...Array(s.length)].map(() => Array(s.length).fill(0));
  // outer loop is to go through all substring lengths
  for (let l = 0; l < s.length; l++) {
    // inner loop is to get all substrings of those lengths
    for (let i = 0; i + l < s.length; i++) {
      // get j, which is left pointer plus length
      const j = i + l;
      if (l === 0) {
        // this means we're on the diagonal, everything is palindrome
        dp[i][j] = 1;
        count++;
      } else if (l === 1) {
        // only check if characters at end are same
        if (s.charAt(i) === s.charAt(j)) {
          dp[i][j] = 1;
          count++;
        }
      } else {
        // check if characters at ends are equal
        // AND check if substring in between them is palindrome
        if (s.charAt(i) === s.charAt(j) && dp[i + 1][j - 1] === 1) {
          dp[i][j] = 1;
          count++;
        }
      }
    }
  }
  return count;
};

// Runtime: 145 ms	Memory: 68.8 MB
// Dynamic Programming
const countSubstrings4 = (s) => {
  const dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = Array(s.length).fill(0);
  }
  let result = 0;
  //Note that dp[i][j] came from dp[i + 1][j - 1]
  //so the loop for i is from s.length - 1 to 0
  //the loop for j is i to s.length - 1
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      //when s[i] === s[j], there are 3 cases
      //case1: j == i,  i.e. 'a', dp[i][j] = true
      //case2: j - 1 == 1, i.e. 'aa', dp[i][j] = true
      //case2: 'a***a' dp[i][j] = dp[i + 1][j - 1]
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        result++;
      }
    }
  }
  return result;
};

console.log(countSubstrings('abc'));
