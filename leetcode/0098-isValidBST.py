# https://leetcode.com/problems/validate-binary-search-tree/

# Given the root of a binary tree, determine if it is a valid binary search tree (BST).

# A valid BST is defined as follows:
# - The left subtree of a node contains only nodes with keys less than the node's key.
# - The right subtree of a node contains only nodes with keys greater than the node's key.
# - Both the left and right subtrees must also be binary search trees.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional

#  Runtime: 62 ms	Memory: 16.5 MB
class Solution:
    def isValidBST(
        self, root: Optional[TreeNode], min: int = None, max: int = None
    ) -> bool:
        if max is not None and root.val >= max:
            return False
        if min is not None and root.val <= min:
            return False
        if root.left and not self.isValidBST(root.left, min, root.val):
            return False
        if root.right and not self.isValidBST(root.right, root.val, max):
            return False
        return True


# There are duplicates input so >= and <=

# Testcase: [1,1] Expected: false
# Testcase: [1,null,1] Expected: false
