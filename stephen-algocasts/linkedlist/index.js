// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    return (this.head = null);
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (this.head.next === null) return (this.head = null);
    let node = this.head;
    let prevNode = null;
    while (node.next) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
    node = null;
  }

  insertLast(data) {
    let lastNode = this.getLast();
    !lastNode ? (this.head = new Node(data)) : (lastNode.next = new Node(data));
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) return node;
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.getAt(index)) return null;
    if (index === 0) return this.removeFirst();

    let prevNode = this.getAt(index - 1);
    !prevNode.next ? null : (prevNode.next = prevNode.next.next);
  }

  insertAt(data, index) {
    if (index < 0 || index === 0) return this.insertFirst(data);
    if (index > this.size()) return this.insertLast(data);

    let newNode = new Node(data);
    let prevNode = this.getAt(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  forEach(fn) {
    if (typeof fn != 'function') return;

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
