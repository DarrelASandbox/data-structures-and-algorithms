# https://leetcode.com/problems/binary-tree-level-order-traversal/

# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import List, Optional

#  Runtime: 31 ms	Memory: 14.1 MB
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        q = [root]
        result = []
        while q and root is not None:
            qLength = len(q)
            level = []
            for _ in range(qLength):
                node = q.pop(0)
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            result.append(level)
        return result
