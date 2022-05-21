/*
https://leetcode.com/problems/add-two-numbers/
https://leetcode.com/problems/add-two-numbers/discuss/1835873/JavaScript-Easy-to-understand-detailed-explanation
https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value
https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600#:~:text=TL%3BDR%3A%20There%20are%20NO,can%20be%20assigned%20by%20reference.

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Runtime: 137 ms 	Memory: 46.9 MB
const addTwoNumbers = (l1, l2) => {
  const head = new ListNode(); // dummy node
  let currNode = head;
  let carry = 0;

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    currNode.next = new ListNode(sum % 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    currNode = currNode.next;
  }

  if (carry) currNode.next = new ListNode(carry);
  return head.next;
};

// Runtime: 150 ms 	Memory: 47.6 MB
const addTwoNumbers2 = (l1, l2) => {
  let sumListHead = new ListNode(0); // Dummy node to initiate returned linked list
  let sumList = sumListHead; // sumList points at sumListHead memory address (assign-by-reference)
  let carry = 0;

  while (l1 || l2) {
    let sum;
    if (l1 && l2) {
      let val1 = l1.val;
      let val2 = l2.val;
      sum = val1 + val2 + carry;
    } else sum = l1 ? l1.val + carry : l2.val + carry; // If only one list has nodes left

    let newNodeVal = sum % 10; // New node for results list will have only 1's place
    carry = Math.floor(sum / 10); // Carry will be the integer representing 10's place, which will be added to next sum
    sumList.next = new ListNode(newNodeVal); // Add new node to results list (To use .next, dummy node sumListHead is needed)
    sumList = sumList.next;

    if (l1) l1 = l1.next; //If the lists exist, increment node
    if (l2) l2 = l2.next;
  }

  //If carry still exists, add the carry as the final node of return list
  if (carry) sumList.next = new ListNode(carry);
  // In the LeetCode compiler, there is some instruction: @return {ListNode}. This indicates you only need to return the first node of the output.
  // To avoid losing the pointer to the sumListHead node, we need to use a pointer (sumList).
  return sumListHead.next; // Refer to the beginning of linked list.
};

// Runtime: 158 ms 	Memory: 47.3 MB
const addTwoNumbers3 = (l1, l2) => {
  let dummy = new ListNode();
  let temp = dummy;
  let sum = 0;

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    const remainder = sum % 10;
    sum = Math.floor(sum / 10);
    temp.next = new ListNode(remainder);
    temp = temp.next;
  }
  return dummy.next;
};

// Runtime: 180 ms 	Memory: 47.5 MB
const addTwoNumbers4 = (l1, l2) => {
  let node = new ListNode();
  let copy = node;
  let digits = 0;
  let carry = 0;

  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    digits = sum % 10;
    carry = Math.floor(sum / 10);

    node.next = new ListNode(digits);
    node = node.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) node.next = new ListNode(carry);

  return copy.next;
};

// l1 & l2 are singly-linked lists so reverse() is not a function.
/*
const addTwoNumbers = (l1, l2) =>
  (+l1.reverse().join('') + +l2.reverse().join(''))
    .toString()
    .split('')
    .reverse();
*/
