/*
https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
*/

// Runtime: 648 ms	Memory: 103 MB
// length - 1 - k = endPointer (count = 1 + 6)
const swapNodes = (head, k) => {
  let startPointer = head;
  let endPointer = head;
  let node = head;
  let count = 1;

  while (node.next) {
    if (count < k) startPointer = startPointer.next;
    if (count >= k) endPointer = endPointer.next;
    node = node.next;
    count++;
  }

  let temp = startPointer.val;
  startPointer.val = endPointer.val;
  endPointer.val = temp;
  return head;
};

// Runtime: 654 ms	Memory: 102.1 MB
const swapNodes2 = (head, k) => {
  let firstNode = head;
  let secondNode = head;
  let node = head;
  let counter = 1;

  while (node !== null) {
    if (counter === k) {
      firstNode = node;
      secondNode = head;
    } else secondNode = secondNode.next;
    counter++;
    node = node.next;
  }

  let temp = firstNode.val;
  firstNode.val = secondNode.val;
  secondNode.val = temp;
  return head;
};

// Runtime: 713 ms	Memory: 102.2 MB
// approach: loop
// first try to get the length of the linkedlist
// while getting the length of the linkedlist, we will mark the lPtr which will be equal to the node which index number is equal to k
// then we loop again for swapping the value between the lPtr and the node from the other direction
// (len-k) + 1 --> gives us the node point where the ptr should be if coming from the opposite direction of the linkedlist
// then if we swap between the lPtr node value and the node value from the opposite direction
const swapNodes3 = (head, k) => {
  let len = 0;
  let ptr = head;
  let lPtr = null;
  while (ptr != null) {
    len++;
    if (len == k) lPtr = ptr;
    ptr = ptr.next;
  }

  ptr = head; //reset ptr
  let count = 0;

  while (ptr != null) {
    count++;
    if (count == len - k + 1) {
      //if the count = opposite direction of 'k' value we swap
      [lPtr.val, ptr.val] = [ptr.val, lPtr.val];
      return head;
    }
    ptr = ptr.next;
  }

  return head;
};
