/*
https://leetcode.com/problems/binary-tree-maximum-path-sum/
https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/982696/JavaScript-O(n)-time-greater-Easy-to-Understand-with-explanation

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Runtime: 103 ms	Memory: 51.7 MB
// Time: O(N) & Space: O(N)
const maxPathSum = (root) => {
  let max = -Infinity;

  const dfs = (node) => {
    if (!node) return 0; // otherwise NaN
    // update and return leftMax or rightMax sum
    // ignore negative subtrees
    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);
    const path = leftMax + rightMax + node.val;
    max = Math.max(max, path);
    // return a combined value connected by an edge that is part of a path
    // recursion will sum all the values up till before the node shared by left and right nodes (single path)
    return Math.max(leftMax, rightMax) + node.val;
  };

  dfs(root);
  return max;
};

// Runtime: 97 ms	Memory: 51.9 MB
const maxPathSum2 = (root) => {
  let max = -Infinity;

  const findSums = (node) => {
    if (!node) return 0; // Base case / hit a null

    let left = findSums(node.left),
      right = findSums(node.right),
      allSum = left + right + node.val,
      leftNodeSum = left + node.val,
      rightNodeSum = right + node.val;

    // Max is all possible combinations
    max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);
    // Return the MAX path, which can be node.val, left + node.val, or right + node.val
    return Math.max(leftNodeSum, rightNodeSum, node.val);
  };

  findSums(root);
  return max;
};

/* 
Testcase: [-10,9,20,1,null,15,7,30,10] Expected: 65
                       Change 30 to 0  Expected: 45
             Change 9 & 1 to - 9 & -1  Expected: 45

         -10
        /  \
      9    20
     /    /  \
    1   15    7
  /  \
30    10 
*/
