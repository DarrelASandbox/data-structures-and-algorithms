/*
https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).
The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.
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

// Runtime: 79 ms	Memory: 44 MB
// Time: O(N logN) & Space: O(N)
const verticalTraversal = (root) => {
  if (!root) return;
  const result = [];

  const dfs = (node, row, col) => {
    result.push([node.val, row, col]);
    if (node.left) dfs(node.left, row + 1, col - 1);
    if (node.right) dfs(node.right, row + 1, col + 1);
  };

  const comparator = ([val1, row1, col1], [val2, row2, col2]) => {
    if (col1 !== col2) return col1 - col2;
    if (row1 !== row2) return row1 - row2;
    return val1 - val2;
  };

  dfs(root, 0, 0); // Set coordinates
  result.sort(comparator); // Sort by col, row & val

  const map = new Map(); // {key: value} as {col: [] of values}
  for (const [val, row, col] of result) {
    if (!map.has(col)) map.set(col, [val]);
    else map.get(col).push(val);
  }

  return [...map.values()];
};

// Runtime: 88 ms	Memory: 44.2 MB
const verticalTraversal2 = (root) => {
  let visited = {},
    minX = 1,
    maxX = -1,
    result = [];

  const dfs = (node, x = 0, y = 0) => {
    if (node) {
      visited[x]
        ? visited[x].push({ val: node.val, y: y })
        : (visited[x] = [{ val: node.val, y: y }]);
      dfs(node.left, x - 1, y - 1);
      dfs(node.right, x + 1, y - 1);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
    }
  };

  dfs(root);

  for (i = minX; i <= maxX; i++) {
    let values = [];
    let column = visited[i].sort((a, b) =>
      a.y == b.y ? a.val - b.val : b.y - a.y
    );
    for (n of column) {
      values.push(n.val);
    }
    result.push(values);
  }
  return result;
};

// Runtime: 65 ms	Memory: 45.2 MB
const verticalTraversal3 = (root) => {};
