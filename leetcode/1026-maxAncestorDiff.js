/*
https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
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

// Runtime: 65 ms	Memory: 45.2 MB
const maxAncestorDiff = (root) => {
  let result = 0;

  // traverse down to Leaf node
  // update difference as we traverse down the tree
  const dfs = (node, min, max) => {
    // if leaf, calculate max result
    if (!node) return (result = Math.max(result, max - min));
    min = Math.min(min, node.val);
    max = Math.max(max, node.val);
    dfs(node.left, min, max);
    dfs(node.right, min, max);
  };

  dfs(root, root.val, root.val);
  return result;
};
