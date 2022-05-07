<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#data-structures">Data Structures</a>
      <ol>
        <li><a href="#stacks--queues">Stacks & Queues</a></li>
        <li><a href="#singly-linked-list">Singly Linked List</a></li>
        <li><a href="#doubly-linked-list">Doubly Linked List</a></li>
        <li><a href="#trees">Trees</a></li>
      </ol>
    </li>
  </ol>
</details>

&nbsp;

## About The Project

- JavaScript Algorithms and Data Structures Masterclass
- The Missing Computer Science and Coding Interview Bootcamp
- [Colt Steele](https://github.com/Colt)
- [Colt Steele Slides](https://cs.slides.com/colt_steele/)
- [Function Timer Demo](https://rithmschool.github.io/function-timer-demo/)
- Went through this course way before I actively use GitHub. So I will be porting in notes from my pc from time to time.

&nbsp;

---

&nbsp;

## Data Structures

[MDN JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.
- Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

<table>
  <tr>
    <th colspan="5">Data Structures</th>
  </tr>
  <tr>
    <th>Data Structures</th>
    <th>Insertion</th>
    <th>Removal</th>
    <th>Searching</th>
    <th>Access</th>
  </tr>
  <tr>
    <td>Singly Linked Lists</td>
    <td>O(1)</td>
    <td>O(1) or O(n)</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Doubly Linked Lists</td>
    <td>O(1)</td>
    <td>O(1)</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Stacks</td>
    <td>O(1)</td>
    <td>O(1)</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Queues</td>
    <td>O(1)</td>
    <td>O(1)</td>
    <td>O(n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Binary Search Tree</td>
    <td>O(log n)</td>
    <td></td>
    <td>O(log n)</td>
    <td></td>
  </tr>
  <tr>
    <td>Binary Heaps</td>
    <td>O(log n)</td>
    <td>O(log n)</td>
    <td>O(n)</td>
    <td></td>
  </tr>
  <tr>
    <td>Binary Heaps</td>
    <td>O(1)</td>
    <td>O(1)</td>
    <td></td>
    <td>O(1)</td>
  </tr>
</table>

&nbsp;

---

&nbsp;

### Stacks & Queues

- <b>Stacks: </b>LIFO
  - Managing function invocations
  - Undo / Redo
  - Routing (the history object)
  - Array/ Linked List Implementation

&nbsp;

> <b>Anne: </b>You did not set the .next of the popped value to null, is there a reason why?
>
> In your solution the popped node still has a connection to the stack via its next property right? I am a bit confused because when doing the linked list we always made sure to severe all connections

> <b>William: </b>Using pop you are severing the last node and that nodes next property is already null since nothing follows it.

> <b>Anne: </b>But it is never set to null, so it still points to the list!

> <b>Alan: </b>You're right in that the popped node object will have a reference to the next item in the stack But since we're returning its value--and not the node object itself--the object will never be referenced again (by a variable or as a property in another object). This means that it'll get picked up by the engine's garbage collector! So it can never affect the stack once popped (only its value property is returned), and <b>no memory leak takes place (there's no longer a reference to the node object)</b>

- <b>Queue: </b>FIFO

&nbsp;

---

&nbsp;

### Singly Linked List

```js
let first = new SinglyLinkedListNode('Hi');
first.next = new SinglyLinkedListNode('How');
first.next.next = new SinglyLinkedListNode('Are');
first.next.next.next = new SinglyLinkedListNode('You');
```

![singly-linked-list](0-slides/singly-linked-list.png)

- A data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
- For removal, it will be the best at the start as compared to the end.
- Singly linked list is strong in insertion and removal. Arrays are good for random acccess.

![reverse-singly-linked-list](0-slides/reverse-singly-linked-list.png)

&nbsp;

---

&nbsp;

### Doubly Linked List

- Almost identical to singly linked list except there is an additional pointer to previous nodes.
- Better than singly linked list for finding nodes and can be done in half the time!
- However, they do take up more memory considering the extra pointer.
- Doubly linked lists are used to implement other data structures and certain types of caches.

&nbsp;

---

&nbsp;

### Trees

```js
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
```

- <b>Trees: </b>A data structure that consists of nodes in a parent / child relationship.
  - <b>Lists: </b> linear & Trees - nonlinear.
  - <b>Root: </b> The top node in a tree.
  - <b>Child: </b>A node directly connected to another node when moving away from the Root.
  - <b>Parent: </b> The converse notion of a child.
  - <b>Siblings: </b>A group of nodes with the same parent.
  - <b>Leaf: </b> A node with no children.
  - <b>Edge: </b> The connection between one node and another.
    - Applications:
      - HTML DOM
      - Network Routing
      - Abstract Syntax Tree
      - Artificial Intelligence
      - Folders in Operating Systems
      - Computer File Systems

&nbsp;

- <b>Binary Trees</b>
  - Decision Trees (true / false)
  - Database Indicies
  - Sorting Algorithms

&nbsp;

- <b>Binary Search Trees</b>
  - Every parent node has at most two children.
  - Every node to the left of a parent node is always less than the parent.
  - Every node to the right of a parent node is always greater than the parent.

&nbsp;

- <b>Tree Traversal</b>
  - Visit every node once.
  - Breadth First Search
  - Depth First Search: PreOrder, PostOrder & InOrder

&nbsp;

- <b>Breath-First-Search VS Depth-First-Search:</b>
  - Time complexity is the same, space complexity depends on how wide is the tree.
  - BFS will take up a lot more space for queue is the tree is wide.
  - If it is a deep tree then DFS will take up more space.
  - InOrder: Used commonly with BST
  - PreOrder: Can be used to 'export' a tree strcture so that it is easily reconstructed or copied.

&nbsp;

---

&nbsp;
