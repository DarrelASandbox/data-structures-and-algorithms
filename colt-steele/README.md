<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#big-o-notation">Big O Notation</a></li>
    <li><a href="#problem-solving">Problem Solving</a></li>
    <li><a href="#problem-solving-patterns">Problem Solving Patterns</a></li>
    <li>
      <a href="#data-structures">Data Structures</a>
      <ol>
        <li><a href="#stacks--queues">Stacks & Queues</a></li>
        <li><a href="#singly-linked-list">Singly Linked List</a></li>
        <li><a href="#doubly-linked-list">Doubly Linked List</a></li>
        <li><a href="#trees">Trees</a></li>
        <li><a href="#binary-heaps">Binary Heaps</a></li>
        <li><a href="#hash-tables">Hash Tables</a></li>
        <li><a href="#graphs">Graphs</a></li>
      </ol>
    </li>
    <li><a href="#searching-algorithms">Searching Algorithms</a></li>
    <li><a href="#sorting-algorithms">Sorting Algorithms</a></li>
  </ol>
</details>

&nbsp;

## About The Project

- JavaScript Algorithms and Data Structures Masterclass
- The Missing Computer Science and Coding Interview Bootcamp
- [Colt Steele](https://github.com/Colt)
- [Colt Steele Slides](https://cs.slides.com/colt_steele/)
- [Function Timer Demo](https://rithmschool.github.io/function-timer-demo/)
- Went through this course way before I actively use GitHub. So I will be porting in notes from my pc from time to time. (Completed)

&nbsp;

---

&nbsp;

## Big O Notation

- <b>Counting Operations: </b>The number of operations grows roughly proportionally with n.
- We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is
  eventually less than a constant times f(n), as n increases.
- <code>performance.now()</code>

&nbsp;

- f(n) could be constant (f(n) = 1)
- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n<sup>2</sup>)
- f(n) could be something entirely different!

&nbsp;

- <b>Time complexity: </b>How we can analyze the runtime of an algorithm as the size of the inputs increases.
- <b>Space complexity: </b>How much additional memory do we need to allocate in order to run the code in our algorithm.
- Auxiliary space complexity refers to the space required by the algorithm, not including space taken up by the inputs.

&nbsp;

- <b>Big O Shorthands/ Asymptotic Analysis</b>
  - Arithmetic operations are constant
  - Variable assignment is constant
  - Accessing elements in an array (by index) or object (by key) is constant
  - In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

&nbsp;

- <b>Space Complexity in JS</b>
  - Most primitives (booleans, numbers, undefined, null) are constant space.
  - Strings require O(n) space (where n is the string length).
  - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

&nbsp;

- <b>When to use objects?</b>
  - When you don't need order
  - When you need fast access, insertion or removal

<table align="center">
  <tr>
    <th>Big O of Objects</th>
    <th>Big O of Object methods</th>
  </tr>
  <tr>
    <td>O(1) - Insertion</td>
    <td>O(N) - Object.keys</td>
  </tr>
  <tr>
    <td>O(1) - Removal</td>
    <td>O(N) - Object.values</td>
  </tr>
  <tr>
    <td>O(1) - Access</td>
    <td>O(N) - Object.entries</td>
  </tr>
  <tr>
    <td>O(N) - Searching</td>
    <td>O(1) - hasOwnProperty</td>
  </tr>
</table>

&nbsp;

- <b>When to use Arrays?</b>
  - When you need order
  - When you need fast access / insertion and removal (sort of....)

<table align="center">
  <tr><th>Big O of Arrays</th></tr>
  <tr><td>Depends - Insertion</td></tr>
  <tr><td>Depends - Removal</td></tr>
  <tr><td>O(N) - Access</td></tr>
  <tr><td>O(1) - Searching</td></tr>
</table>

- Adding an element at the beginning of an array means the new element will have an index of 0.
- Which means that the index of every other element must be incremented by 1. So Array.unshift() has a Linear Time Complexity and is O(n).

&nbsp;

<table align="center">
  <tr><th colspan="4">Big O of Array Operations</th></tr>
  <tr>
    <td>O(1) - push</td>
    <td>O(1) - pop</td>
    <td>O(N) - shift</td>
    <td>O(N) - unshift</td>
  </tr>
  <tr>
    <td>O(N) - concat</td>
    <td>O(N) - slice</td>
    <td>O(N) - splice</td>
    <td>O(N) - forEach</td>
  </tr>
  <tr>
    <td>O(N) - map</td>
    <td>O(N) - filter</td>
    <td>O(N) - reduce</td>
    <td>O(N * log N) - sort</td>
  </tr>
</table>

&nbsp;

- <b>How do you improve?</b>
  - Devise a plan for solving problems
  - Master common problem solving patterns

&nbsp;

---

&nbsp;

## Problem Solving

1. Understand the problem
   - Can I restate the problem in my own words?
   - What are the inputs that go into the problem?
   - What are the outputs that should come from the solution to the problem?
   - Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about - solving the problem. That's okay; it's still worth considering the question at this early stage.)
   - How should I label the important pieces of data that are a part of the problem?
2. Explore concrete examples
   - Examples provide sanity checks that your eventual solution works how it should
   - User stories
   - Unit tests
   - Examples: Simple > Complex > Empty Inputs > Invalid Inputs
3. Break it down
   - Explicitly write out the steps you need to take.
   - This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or
     misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.
4. Solve/ Simplify
   - Find the core difficulty in what you're trying to do.
   - Temporarily ignore that difficulty.
   - Write a simplified solution.
   - Then incorporate that difficulty back in.
5. Look back and refactor
   - Can you check the result?
   - Can you derive the result differently?
   - Can you understand it at a glance?
   - Can you use the result or method for some other problem?
   - Can you improve the performance of your solution?
   - Can you think of other ways to refactor?
   - How have other people solved this problem?

&nbsp;

- <b>Interview tips</b>
  - It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.

&nbsp;

---

&nbsp;

## Problem Solving Patterns

- <b>Frequency Counter:</b>
  - This pattern uses objects or sets to collect values/ frequencies of values.
  - This can often avoid the need for nested loops or O(N<sup>2</sup>) operations with arrays/ strings.
- <b>Multiple Pointers:</b>
  - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
  - Very efficient for solving problems with minimal space complexity as well.
- <b>Sliding Window:</b>
  - This pattern involves creating a window which can either be an array or number from one position to another.
  - Depending on a certain condition, the window either increases or closes (and a new window is created).
  - Very useful for keeping track of a subset of data in an array/ string etc.
- <b>Divide and Conquer:</b>
  - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
  - This pattern can tremendously decrease time complexity.
- <b>Recursion</b>
  - TWO Essential Parts: <b>Base Case & Different Input</b>
  - Pure Recursion Tips
    - For arrays, use methods like <code>slice</code>, the <code>spread operator</code>, and <code>concat</code> that make copies of arrays so you do not mutate them.
    - Remember that strings are <b>immutable</b> so you will need to use methods like <code>slice, substr, or substring</code> to make copies of strings. To make copies of objects use <code>Object.assign</code>, or the <code>spread operator</code>.
  - Measuring <b>time complexity</b> is relatively simple.
    - You can measure the time complexity of a recursive function as then number of recursive calls you need to make relative to the input.
  - Measuring <b>space complexity</b> is a bit more challenging.
    - You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time, since the call stack requires memory.

```js
// Helper Method Recursion
function outer(input) {
  var outerScopedVariable = [];
  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}
```

- <b>Dynamic Programming</b>
  - Overlapping Sub-problems
  - Optimal Substructure
  - Recursive vs Dynamic Programming
  - Recursion + Memoization
  - Top-down VS Bottom-up
  - Tabulation:
    - Storing the result of a previous result in a "table" (usually an array)
    - Usually done using iteration. Better space complexity can be achieved using tabulation
- <b>Greedy Algorithms</b>
- <b>Backtracking</b>

```js
// same code output
(frequencyCounter2[val] || 0) + 1;

if (frequencyCounter1[val]) frequencyCounter1[val] += 1;
else frequencyCounter1[val] = 1;
```

&nbsp;

---

&nbsp;

## Data Structures

- [MDN JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.
- Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

<table align="center">
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
- Singly linked list is strong in insertion and removal. Arrays are good for random access.

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
  - Database Indices
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
  - PreOrder: Can be used to 'export' a tree structure so that it is easily reconstructed or copied.

&nbsp;

---

&nbsp;

### Binary Heaps

- <b>Math</b>
  - For any index of an array n...
  - The left child is stored at 2n + 1
  - The right child is at 2n + 2
- <b>Finding the parent using the child node</b>
  - For any child node at index n...
  - Its parent is at index (n-1)/2
- In a <b>MaxBinaryHeap</b>, parent nodes are always larger than child nodes.
- In a <b>MinBinaryHeap</b>, parent nodes are always smaller than child nodes.
- Commonly used to implement Priority Queues.
- Also used in graph traversal algorithms.
- Construct it using a list/ array.

```js
// There is some magic ?. in dequeue
const maxChildIndex =
  this.values[right]?.priority < this.values[left]?.priority ? right : left;
if (this.values[maxChildIndex]?.priority < this.values[i]?.priority) {
  {...};
}
```

&nbsp;

---

&nbsp;

### Hash Tables

- Hash tables are used to store key-value pairs.
- They are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!
- <b>What makes a good hash?</b>
  - Fast (i.e. constant time)
  - Doesn't cluster outputs at specific indices, but distributes uniformly
  - Deterministic (same input yields same output)
- <b>Dealing with collisions</b>
  - With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
  - This allows us to store multiple key-value pairs at the same index.
  - With linear probing, when we find a collision, we search through the array to find the next empty slot.
  - Unlike with separate chaining, this allows us to store a single key-value at each index.

&nbsp;

---

&nbsp;

### Graphs

- Use for Social Networks, Recommendations, Location / Mapping, Routing Algorithms, Visual Hierarchy, File System Optimizations & etc...
- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distanced between vertices

&nbsp;

- Differences & Big O
- | V | - number of vertices
- | E | - number of edges

&nbsp;

<table align="center">
  <tr>
    <th>Operation</th>
    <th>Adjacency List</th>
    <th>Adjacency Matrix</th>
  </tr>
  <tr>
    <td>Add Vertex</td>
    <td>O(1)</td>
    <td>O ( | V^2 | )</td>
  </tr>
  <tr>
    <td>Add Edge</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Remove Vertex</td>
    <td>O ( | V | + | E | )</td>
    <td>O ( | V^2 | )</td>
  </tr>
  <tr>
    <td>Remove Edge</td>
    <td>O( | E | )</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Query</td>
    <td>O ( | V | + | E | )</td>
    <td>O (1)</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>O ( | V | + | E | )</td>
    <td>O ( | V^2 | )</td>
  </tr>
</table>

&nbsp;

<table align="center">
  <tr>
    <th>Adjacency List</th>
    <th>Adjacency Matrix</th>
  </tr>
  <tr>
    <td>Can take up less space (in sparse graphs)</td>
    <td>Takes up more space (in sparse graphs)</td>
  </tr>
  <tr>
    <td>Faster to iterate over all edges</td>
    <td>Slower to iterate over all edges</td>
  </tr>
  <tr>
    <td>Can be slower to lookup specific edge</td>
    <td>Faster to lookup specific edge</td>
  </tr>
</table>

&nbsp;

```js
// nodes
Tokyo: ['Dallas', 'Hong Kong'],
Dallas: ['Tokyo', 'Aspen', 'Hong Kong', 'Los Angeles'],
Aspen: ['Dallas'],
'Hong Kong': ['Tokyo', 'Dallas', 'Los Angeles'],
'Los Angeles': ['Hong Kong', 'Dallas'],

A: ['B', 'C'],
B: ['A', 'D'],
C: ['A', 'E'],
D: ['B', 'E', 'F'],
E: ['C', 'D', 'E'],
F: ['D', 'F'],
```

&nbsp;

- Graphs Traversal
  - Peer to peer networking, Web crawlers
  - Finding "closest" matches/recommendations
  - Shortest path problems
  - GPS Navigation
  - Solving mazes
  - AI (shortest path to win the game)

&nbsp;

---

&nbsp;

## Searching Algorithms

- <b>Linear Search</b>
  - indexOf
  - includes
  - find
  - findIndex

&nbsp;

<table align="center">
  <tr><th colspan="3">Linear Search Big O</th></tr>
  <tr>
    <td>O(1) Best</td>
    <td>O(n) Average</td>
    <td>O(n) Worst</td>
  </tr>
  <tr><th colspan="3">Binary Search Big O</th></tr>
  <tr>
    <td>O(1) Best</td>
    <td colspan="2">O(log n) Worst and Average</td>
  </tr>
  <tr><th colspan="3"></th></tr>
  <tr><th colspan="3">Naive String Search O(nm)</th></tr>
  <tr><th colspan="3">KMP O(n + m) time, O(m) space</th></tr>
</table>

&nbsp;

- <b>Binary Search</b>
  - Binary search is a much faster form of search
  - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
  - Binary search only works on sorted arrays!

&nbsp;

- Why is Dijkstra Algorithm useful?
  - GPS - finding fastest route
  - Network Routing - finds open shortest path for data
  - Biology - used to model the spread of viruses among humans
  - Airline tickets - finding cheapest route to your destination
  - Many other uses!

&nbsp;

---

&nbsp;

## Sorting Algorithms

<table align="center">
  <tr><th colspan='5'>Elementary Sorting Algorithms</th></tr>
  <tr>
    <th>Algorithm</th>
    <th>Time Complexity (Best)</th>
    <th>Time Complexity (Average)</th>
    <th>Time Complexity (Worst)</th>
    <th>Space Complexity</th>
  </tr>
  <tr>
    <td>Bubble Sort</td>
    <td>O(n)</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Insertion Sort</td>
    <td>O(n)</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Selection Sort</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(1)</td>
  </tr>
</table>

&nbsp;

- <b>Elementary Sorting Algorithms</b>
  - <b>Bubble Sort:</b> A sorting algorithm where the largest values bubble up to the top!
  - <b>Selection Sort:</b> Similar to Bubble Sort, but instead of first placing large values into sorted position, it places small values into sorted position.
    - Selection Sort > Bubble Sort if you are in a situation whereby you want to <b>minimize the number of swaps.</b>
  - <b>Insertion Sort:</b> Builds up the sort by gradually creating a larger left half which is always sorted.
    - Insertion Sort is good for <b>online algorithm</b> to process input piece by piece.

```js
// Optimize BubbleSort with the outer loop starting from the end.
// And use noSwaps for almost sorted array.

// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

<table align="center">
  <tr><th colspan='5'>Intermediate Sorting Algorithms</th></tr>
  <tr>
    <th>Algorithm</th>
    <th>Time Complexity (Best)</th>
    <th>Time Complexity (Average)</th>
    <th>Time Complexity (Worst)</th>
    <th>Space Complexity</th>
  </tr>
  <tr>
    <td>Merge Sort</td>
    <td>O(n log n)</td>
    <td>O(n log n)</td>
    <td>O(n log n)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Quick Sort</td>
    <td>O(n log n)</td>
    <td>O(n log n)</td>
    <td>O(n<sup>2</sup>)</td>
    <td>O(log n)</td>
  </tr>
  <tr>
    <td>Radix Sort</td>
    <td>O(nk)</td>
    <td>O(nk)</td>
    <td>O(nk)</td>
    <td>O(n + k)</td>
  </tr>
</table>

&nbsp;

- <b>Intermediate Sorting Algorithms</b>
  - <b>Merge Sort: </b>It's a combination of two things - merging and sorting!
    - Exploits the fact that arrays of 0 or 1 element are always sorted.
    - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
  - <b>Quick Sort:</b> Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
    - Works by selecting one element (called the <b>"pivot"</b>) and finding the index where the pivot should end up in the sorted array.
    - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
    - The runtime of quick sort depends in part on how one selects the pivot.
    - Ideally, the <b>pivot should be chosen so that it's roughly the median value in the data set you're sorting.</b>
    - For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)
    - Worse Case [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    - [Stackoverflow - Quicksort: Choosing the pivot](https://stackoverflow.com/a/164205/13009010)
    - For most data, picking the first or last is sufficient. But, if you find that you're running into worst case scenarios often (partially sorted input), first option would be to pick the central value (Which is a statistically good pivot for partially sorted data) If you're still running into problems, then go the median route.
  - <b>Radix Sort:</b>
    - Is a special sorting algorithm that works on lists of numbers.
    - It never makes comparisons between elements!
    - It exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number!
    - It is a integer sort.
    - In <b>O(nk) n</b> refers to the length of array & <b>k</b> refers to the number of digits(average).
    - No recursion & need to deal with negative numbers separately.

&nbsp;

---

&nbsp;
