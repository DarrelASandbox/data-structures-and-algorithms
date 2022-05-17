/*
https://leetcode.com/problems/longest-common-subsequence/
https://leetcode.com/problems/longest-common-subsequence/discuss/598306/javascript-DP-(beats-92100)-w-comments-and-explanation
https://www.youtube.com/watch?v=LAKWWDX3sGw

https://www.youtube.com/watch?v=Ua0GhsJSlWM
https://stackoverflow.com/questions/6164629/what-is-the-difference-between-bottom-up-and-top-down
Great solution, as always, but even if you solve this starting at the first cell of the table, it would still be a bottom-up approach. Tabulation is called bottom-up because we are starting from a smaller problem and we are building up to the larger problem's solution. Memoization is called a top-down approach because we start from the larger problem and break into smaller problems using recursion (something like recursiveFunction(n - 1)). So, basically, tabulation DP, which is what is done here, is bottom-up.
Memoization DP is top-down.

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

/*
	  0 x y z   	  0 x y z   	  0 a c e  
	 --------      --------      --------
0   0 0 0 0   0   0 0 0 0   0   0 0 0 0
x   0 0 0 0   x   0 1 1 1   a   0 1 1 1
z   0 0 0 0   z   0 1 1 2   b   0 1 1 1
y   0 0 0 0   y   0 1 2 2   c   0 1 2 2
l   0 0 0 0   l   0 1 2 2   d   0 1 2 2
                            e   0 1 2 0

*/

// Runtime: 163 ms	Memory: 59.1 MB
// Bottom-up Dynamic Programming
// Time: O(N * M)
const longestCommonSubsequence = (text1, text2) => {
  const dp = [...Array(text1.length + 1)].map(() =>
    Array(text2.length + 1).fill(0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[text1.length][text2.length];
};

// Runtime: 168 ms	Memory: 52.5 MB
const longestCommonSubsequence2 = (text1, text2) => {
  // create dp array of size text1+1 x text2+1 filled w/ zeros
  const dp = [...Array(text1.length + 1)].map(() => Array(text2.length + 1)); // Avoid out of bound with + 1

  // iterate i by j
  for (let i = 0; i <= text1.length; i++) {
    for (let j = 0; j <= text2.length; j++) {
      // if this is first row, make it a 0 (impossible to have substring here)
      console.log(dp);
      if (i === 0 || j === 0) dp[i][j] = 0;
      else if (text1.charCodeAt(i - 1) === text2.charCodeAt(j - 1)) {
        // last characters match in both strings,
        // so this is a value substring, take length from last (if any)
        // and add 1
        dp[i][j] = dp[i - 1][j - 1] + 1; // diagonal dp[i][j] + 1
      } else {
        // take max of top or left (longer substring)
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // compare left and top of dp[i][j]
      }
    }
  }
  // result is in bottom right cell
  return dp[text1.length][text2.length];
};

console.log(longestCommonSubsequence2('xzyl', 'xyz')); // 2
console.log(longestCommonSubsequence2('abcde', 'ace')); // 2
