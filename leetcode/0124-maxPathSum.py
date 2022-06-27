# https://leetcode.com/problems/binary-tree-maximum-path-sum/

# A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
# The path sum of a path is the sum of the node's values in the path.
# Given the root of a binary tree, return the maximum path sum of any non-empty path.

# Input: root = [1,2,3]
# Output: 6
# Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

# Input: root = [-10,9,20,null,null,15,7]
# Output: 42
# Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional

# Runtime: 167 ms	Memory: 21.4 MB
# Time: O(N) & Space: O(N)
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_path = float("-inf")

        def dfs(node):
            nonlocal max_path  # This tells that max_path is not a local variable
            if not node:
                return 0
            left_max = max(dfs(node.left), 0)
            right_max = max(dfs(node.right), 0)
            path = left_max + right_max + node.val
            max_path = max(max_path, path)
            return max(left_max, right_max) + node.val

        dfs(root)
        return max_path


# Testcase: [-10,9,20,1,null,15,7,30,10] Expected: 65
#                        Change 30 to 0  Expected: 45
#              Change 9 & 1 to - 9 & -1  Expected: 45

#          -10
#         /  \
#       9    20
#      /    /  \
#     1   15    7
#   /  \
# 30    10

