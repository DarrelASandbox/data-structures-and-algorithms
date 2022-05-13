/*
https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Input: lists = []
Output: []

Input: lists = [[]]
Output: []
*/

// Runtime: 92 ms	Memory: 47.1 MB
// Time: O(N logN)
const mergeKLists = (lists) => {
  // Merge the lists then sort
  const mergeList = [];
  lists.forEach((list) => {
    while (list) {
      mergeList.push(list.val);
      list = list.next;
    }
  });

  mergeList.sort((a, b) => a - b);

  const head = new ListNode();
  let node = head;
  mergeList.map((val) => {
    node.next = new ListNode(val);
    node = node.next;
  });
  return head.next;
};

// Runtime: 120 ms	Memory: 47.1 MB
// Priority Queue Time: O(KN logK)
const mergeKLists2 = (lists) => {
  // Initialize the linked list, and a helper to follow the linked list as it grows
  const lList = new ListNode();
  let lListEnd = lList;

  // Initialize the queue, with higher priority given to smaller values.
  // Each entry is an array containing [the list id the value came from, the value].
  // This helps us keep track of which value each list came from, which is important later on.
  const queue = new PriorityQueue((a, b) => a[1] < b[1]);

  // Go through each list and add an initial smallest value.
  lists.forEach((list, index) => {
    if (list) {
      queue.push([index, list.val]);
      lists[index] = list.next;
    }
  });

  // While we still have values to sort, pop off the smallest value from the queue, and then replace it
  // with another from that values initial list. This ensures we keep one value from each list in the queue.
  // Since each list is already sorted, this ensures the next smallest value is in the queue, regardless
  // of which list it was in originally.
  while (!queue.isEmpty()) {
    [smallestIndex, smallestVal] = queue.pop();
    if (lists[smallestIndex]) {
      queue.push([smallestIndex, lists[smallestIndex].val]);
      lists[smallestIndex] = lists[smallestIndex].next;
    }
    const newListNode = new ListNode(smallestVal);
    lListEnd.next = newListNode;
    lListEnd = lListEnd.next;
  }

  // Return the linked list.
  // The initial node used to create the linked list should not be returned, so return the next node.
  return lList.next;
};

// Priority Queue implementation using a heap.
class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._heap = [];
    this._comparator = comparator;
  }

  push(...values) {
    for (const value of values) {
      this._heap.push(value);
      this._shiftUp();
    }
  }

  pop() {
    const poppedValue = this.peek();
    const bottom = this._heap.length - 1;
    if (bottom > 0) {
      this._swap(bottom, 0);
    }
    this._heap.pop();
    this._shiftDown();
    return poppedValue;
  }

  peek() {
    return this._heap[0];
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  //Take the bottom node and place it as high up in the heap as possible.
  _shiftUp() {
    let node = this.size() - 1;
    while (node > 0 && this._lesser(node, this._parent(node))) {
      this._swap(node, this._parent(node));
      node = this._parent(node);
    }
  }

  _parent(i) {
    return i == 0 ? 0 : Math.floor((i - 1) / 2);
  }

  _getNode(i) {
    return this.heap[i];
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _left(i) {
    return i * 2 + 1;
  }

  _right(i) {
    return i * 2 + 2;
  }

  _lesser(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  // Take the top node and place it as low as possible.
  _shiftDown() {
    let node = 0;
    while (
      (this._left(node) < this.size() &&
        this._lesser(this._left(node), node)) ||
      (this._right(node) < this.size() && this._lesser(this._right(node), node))
    ) {
      let maxChild =
        this._right(node) < this.size() &&
        this._lesser(this._right(node), this._left(node))
          ? this._right(node)
          : this._left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
