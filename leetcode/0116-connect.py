# Definition for a Node.
class Node:
    def __init__(
        self,
        val: int = 0,
        left: "Node" = None,
        right: "Node" = None,
        next: "Node" = None,
    ):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


from typing import Optional

#  Runtime: 92 ms	Memory: 15.4 MB
class Solution:
    def connect(self, root: "Optional[Node]") -> "Optional[Node]":
        node = root
        while node and node.left:
            next = node.left
            while node:
                node.left.next = node.right
                node.right.next = node.next and node.next.left
                node = node.next
            node = next
        return root
