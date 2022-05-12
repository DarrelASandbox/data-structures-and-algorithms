/*
https://leetcode.com/problems/linked-list-cycle/

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

// Runtime: 78 ms	Memory: 44.9 MB
// Time: O(N) & Space: O(1)
const hasCycle = (head) => {
  if (!head) return false;
  let pointer1 = head;
  let pointer2 = head.next;

  while (pointer2 && pointer2.next) {
    if (pointer1 === pointer2) return true;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }

  return false;
};
