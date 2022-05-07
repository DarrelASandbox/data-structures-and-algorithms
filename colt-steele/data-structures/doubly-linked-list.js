class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let oldTail = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    let oldHead = this.head;
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    let newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let current;
    if (index < 0 || index >= this.length) return null;
    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      for (let i = 0; i !== index; i++) current = current.next;
    } else {
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) current = current.prev;
    }
    return current;
  }

  get2(index) {
    let current, counter;
    if (index < 0 || index >= this.length) return null;
    if (index <= Math.floor(this.length / 2)) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, value) {
    if (this.get(index)) {
      this.get(index).value = value;
      return true;
    }
    return false;
  }

  set2(index, value) {
    return this.get(index) ? ((this.get(index).value = value), true) : false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    this.get(index - 1).next = this.get(index).next;
    this.get(index + 1).prev = this.get(index).prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prevNode = null;
    let nextNode;
    for (let counter = 0; counter < this.length; counter++) {
      (nextNode = node.next), (node.next = prevNode);
      node.prev = nextNode;
      (prevNode = node), (node = nextNode);
    }
    return this;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push('FIRST');
doublyLinkedList.push('SECOND');
doublyLinkedList.push('THIRD');

/************************
 WRITE YOUR CODE BELOW!
************************/

// let dll = new DLL();
// dll.push(4);
// dll.push(5);
// dll.push(6);
// console.log('push', dll.push(4));
// console.log('pop', dll.pop());
// console.log('unshift', dll.unshift(0));
// console.log('shift', dll.shift());
// dll.unshift(3);
// dll.unshift(2);
// console.log('unshift', dll.unshift(1));
// console.log('get:', dll.get(5));
// console.log('set:', dll.set(4, -50));
// console.log(dll.insert(5, -5));
// console.log(dll.remove(5));
