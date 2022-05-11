/*
https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
*/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// Runtime: 90 ms	Memory: 48.6 MB
const connect = (root) => {
  let node = root;
  while (node && node.left) {
    let currNode = node;
    while (currNode) {
      currNode.left.next = currNode.right;
      if (!currNode.next) break;
      currNode.right.next = currNode.next.left;
      currNode = currNode.next;
    }
    node = node.left;
  }
  return root;
};

// Runtime: 101 ms	Memory: 48.4 MB
const connect2 = (root) => {
  if (!root || !root.left) return root;
  if (!root.next) root.next = null;
  root.left.next = root.right; // Every parent has two children
  root.right.next = root.next ? root.next.left : null; // 2 to 5 to 6 = 2 to 3 to 6
  connect(root.left);
  connect(root.right);
  return root;
};

// Runtime: 105 ms	Memory: 48.4 MB
const connect3 = (root) => {
  let curr = root,
    head = null,
    prev = null;
  while (curr) {
    // traversing each level
    while (curr) {
      // traversing each node at a level
      if (curr.left) {
        if (!prev) head = curr.left; // first node at the level
        else prev.next = curr.left;

        prev = curr.left;
        prev.next = curr.right; // perfect BT - if left node exist, right node must exist
        prev = curr.right;
      }
      curr = curr.next; // move to the sibling node
    }

    curr = head; // first node of the next level
    head = null;
    prev = null;
  }
  return root;
};
