- [Symbol Tables](#symbol-tables)
  - [API](#api)
  - [Elementary Implementations](#elementary-implementations)
  - [Ordered Operations](#ordered-operations)
- [Binary Search Trees](#binary-search-trees)
  - [BSTs](#bsts)
  - [Ordered Operations](#ordered-operations-1)
  - [Deletion](#deletion)
- [Balanced Search Trees](#balanced-search-trees)
  - [2-3 Search Trees](#2-3-search-trees)
  - [Red-black BSTs](#red-black-bsts)
  - [B-Trees](#b-trees)

# Symbol Tables

## API

```java
ST<String, Integer> st = new ST<String, Integer>();
st.put("Hello", 12);
st.put("World", 21);
st.put("Hello", 49);
```

- Which value is associated with the key HelloHello after executing the following code fragment:
  - 12
  - 49
  - Both 12 and 49
  - Either 12 or 49, depending on the implementation
  - Ans: 2
    - The ST API specifies that `put()` overwrites the old value with the new value when called on a key already in the symbol table.

## Elementary Implementations

- What is the maximum number of array accesses needed to search for a key in a symbol table that is implemented with a sorted array?
  - constant
  - logarithmic
  - linear
  - linearithmic
  - Ans: 2
    - Use binary search

## Ordered Operations

- What is the maximum number of compares to determine the rank of a key in a symbol table that is implemented using a sorted array?
  - constant
  - logarithmic
  - linear
  - linearithmic
  - Ans: 2
    - Use binary search

# Binary Search Trees

## BSTs

- Suppose that nn distinct keys are inserted into a binary search tree in random order. What is the expected number of compares to search for one of the nn keys?
  - constant
  - logarithmic
  - linear
  - linearithmic
  - Ans: 2

## Ordered Operations

```
        R
      /   \
     /     \
    E       X
   / \     /
  C   M   S
 /   / \
A   H   P
```

- A BST is uniquely defined by its level-order traversal, a breadth-first traversal where the root is visited first, then all nodes at depth 1 (going from left to right), then all nodes at depth 2 (going from left to right), and so forth. What is the level-order traversal of the BST drawn below?
  - A C E H M P R S X
  - A C H P M E S X R
    - This is the postorder traversal. The root node (R) is always the first node visited in a level-order traversal.
  - R E C A M H P X S
    - This is the preorder traversal.
  - R E X C M S A H P
  - Ans: 4
    - To code up a level-order traversal, you would use a queue instead of a (function-call) stack.

## Deletion

- What is the order of growth of the expected height of a binary search tree with nn keys after a long intermixed sequence of random insertions and random Hibbard deletions?
  - $\log n$
  - $\sqrt{n}$
  - $n$
  - $n\log n$
  - Ans: 2
    - The main defect of Hibbard deletion is that it unbalances the tree, leading to $\sqrt{n}$​ height.
    - If instead of replacing the node to delete with its successor, you flip a coin and replace it with either its successor or predecessor, then, in practice, the height becomes logarithmic (but nobody has been able to prove this fact mathematically).

# Balanced Search Trees

## 2-3 Search Trees

- Suppose that you are inserting a new key into a 2–3 tree. Under which one of the following scenarios must the height of the 2–3 tree increase by one?
  - When the number of keys equals one less than a power of 2
  - When the number of nodes equals one less than a power of 2
  - When the final node on the search path from the root is a 3-node
  - When every node on the search path from the root is a 3-node
  - Ans: 4
    - The height of a 2–3 tree increases only when the root node splits, and this happens only when every node on the search path from the root to the leaf where the new key should be inserted is a 3-node.

## Red-black BSTs

- Suppose that you left rotate the node containing E in the BST below. Which is the level-order traversal of the resulting red–black BST?
  - R E X C M S Y A H P F
  - R M X E H S Y C F P AR M X E H S Y C F P A
  - R M X E P S Y C H A FR M X E P S Y C H A F
  - R C X A E S Y M H P FR C X A E S Y M H P F
  - Ans: 3

```
double lines = red
                        R
                      /   \
                     /     \
                    /       \
rotate E left      E         X
                  / \\      / \
                 C   M     S   Y
               //   / \
               A   H   P
                 //
                 F


                        R
                      /   \
                     M     X
                   /   \  / \
                  E     P S   Y
                 / \
                C   H
               /
              A
             /
            F
```

- Suppose that you insert nn keys in ascending order into a red–black BST. What is the height of the resulting tree?
  - constant
  - logarithmic
  - linear
  - linearithmic
  - Ans: 2
    - The height of any red–black BST on nn keys (regardless of the order of insertion) is guaranteed to be between $\log_{⁡2}n$ and $2log⁡_{2}n$.

## B-Trees

- How many probes does a search in a B-tree of order mm with nn keys require in the worst case?
- constant
- $\log⁡m$
- $\log⁡_{m/2}n$
- $\log⁡_{2}n$
- Ans: 3
  - This is the worst-case height, when every node has $m/2$ children.
