# https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

# You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
# Merge all the linked-lists into one sorted linked-list and return it.

# Input: lists = [[1,4,5],[1,3,4],[2,6]]
# Output: [1,1,2,3,4,4,5,6]
# Explanation: The linked-lists are:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# merging them into one sorted list:
# 1->1->2->3->4->4->5->6

# Input: lists = []
# Output: []

# Input: lists = [[]]
# Output: []

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


from typing import List, Optional

# Runtime: 104 ms	Memory: 18.4 MB
# Time: O(N logN)
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        mergedList = []
        for list_head in lists:
            while list_head:
                mergedList.append(list_head.val)
                list_head = list_head.next

        mergedList.sort()

        head = ListNode()
        node = head
        for val in mergedList:
            node.next = ListNode(val)
            node = node.next

        return head.next
