/*
https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.
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
 * @return {TreeNode}
 */

// Runtime: 93 ms	Memory: 41.8 MB
const bstToGst = (root) => {
  let sum = 0;

  const dfs = (node) => {
    if (!node) return 0;
    dfs(node.right);
    sum += node.val;
    node.val = sum;
    dfs(node.left);
  };

  dfs(root);
  return root;
};

// Since it is BST, node.val with the greatest value will be at bottom right so DFS from right before left.
