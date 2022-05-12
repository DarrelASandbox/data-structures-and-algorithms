/*
https://leetcode.com/problems/binary-tree-level-order-traversal/
https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/1782669/JAVASCRIPT-2-solutions-(Iterative-BFS-%2B-explanation)-vs-Recursive-DFS

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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
 * @return {number[][]}
 */

// Runtime: 69 ms	Memory: 44 MB
const levelOrder = (root) => {
  const q = [root];
  const result = [];
  while (q[0]) {
    const qLength = q.length;
    const level = [];
    for (let i = 0; i < qLength; i++) {
      const node = q.shift();
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    result.push(level);
  }
  return result;
};

// Runtime: 85 ms	Memory: 44.1 MB
// Queue
const levelOrder2 = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    let currentLevelLen = queue.length;
    let currentLevel = [];
    for (let i = 0; i < currentLevelLen; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
};

// Runtime: 105 ms	Memory: 44.4 MB
// Recursion
const levelOrder3 = (root) => {
  if (!root) return [];
  const result = [];
  const traversal = (node, level, result) => {
    if (!node) return;
    if (result[level]) result[level].push(node.val);
    else result[level] = [node.val];
    if (node.left) traversal(node.left, level + 1, result);
    if (node.right) traversal(node.right, level + 1, result);
  };

  traversal(root, 0, result);
  return result;
};
