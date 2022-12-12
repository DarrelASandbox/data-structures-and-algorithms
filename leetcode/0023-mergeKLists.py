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
