/*
https://leetcode.com/problems/validate-binary-search-tree/

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
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
 * @return {boolean}
 */

// Runtime: 104 ms	Memory: 46.5 MB
const isValidBST = (root, min = null, max = null) => {
  if (max !== null && root.val >= max) return false;
  if (min !== null && root.val <= min) return false;
  if (root.left && !isValidBST(root.left, min, root.val)) return false;
  if (root.right && !isValidBST(root.right, root.val, max)) return false;
  return true;
};

// There are duplicates input so >= and <=

// Testcase: [1,1] Expected: false
// Testcase: [1,null,1] Expected: false
