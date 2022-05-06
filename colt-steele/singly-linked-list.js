class SinglyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let lostHead = this.head;
    this.head = this.head.next; // or lostHead.next
    lostHead.next = null; // remove the bond between lostHead and the new head.f
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return lostHead;
  }

  unshift(value) {
    let newNode = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    else {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  set(index, value) {
    if (this.get(index)) {
      this.get(index).value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new SinglyLinkedListNode(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prevNode = null;
    let nextNode;

    for (let counter = 0; counter < this.length; counter++) {
      (nextNode = node.next), (node.next = prevNode);
      (prevNode = node), (node = nextNode);
    }
    return this;
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push('FIRST');
singlyLinkedList.push('SECOND');
singlyLinkedList.push('THIRD');

/************************
 WRITE YOUR CODE BELOW!
************************/

// let sll = new SLL();
// sll.push(1);
// sll.push(2);
// sll.push(3);
// console.log(sll.push(4));
// console.log(sll.pop(4));
// console.log(sll.shift());
// console.log(sll.unshift(1));
// console.log(sll.push(40));
// console.log(sll.set(3, 4));
// console.log(sll.insert(2, 20));
// console.log(sll.remove(2));
// console.log(sll.reverse());
