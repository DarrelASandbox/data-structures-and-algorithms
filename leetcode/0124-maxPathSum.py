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
