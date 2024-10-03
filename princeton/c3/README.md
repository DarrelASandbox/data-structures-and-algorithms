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
- [Geometric Applications of BSTs](#geometric-applications-of-bsts)
  - [1D Range Search](#1d-range-search)
  - [Line Segment Intersection](#line-segment-intersection)
  - [KD Trees](#kd-trees)
  - [Interval Search Trees](#interval-search-trees)
  - [Rectangle Intersection](#rectangle-intersection)
- [Hash Tables](#hash-tables)
  - [Hash Functions](#hash-functions)
  - [Separate Chaining](#separate-chaining)
  - [Linear Probing](#linear-probing)
  - [Context](#context)
- [Symbol Table Applications](#symbol-table-applications)
  - [Sets](#sets)
  - [Dictionary Clients](#dictionary-clients)
  - [Indexing Clients](#indexing-clients)
  - [Sparse Vectors](#sparse-vectors)

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

# Geometric Applications of BSTs

## 1D Range Search

- What is the worst-case number of compares to perform a 1d range count if the keys are stored in an ordered array and the 1d range search is performed efficiently?
- constant
- logarithmic
- linear
- linearithmic
- Ans: 2
  - It can be done with two binary searches: one for the left endpoint and one for the right endpoint.

## Line Segment Intersection

- What is the worst-case running time of the sweep-line algorithm to find all $R$ intersections among $n$ orthogonal line segments?
- constant + $R$
- $\log⁡n$ + $R$
- $n\log⁡n$ + $R$
- $n\log⁡n$ + $R\log⁡n$
- Ans: 3

## KD Trees

- Suppose that the point 11 is inserted into the kd-tree below. Where is the new node inserted?
- Right child of 6
- Left child of 7
- Left child of 10
- Right child of 10
- Ans: 4
  - Starting from the root, here are the sequence of nodes examined:
    - Point 11 is to the right of point 1, so we take the right branch of 1.
    - Point 11 is below point 2, so we take the left branch of 2.
    - Point 11 is to the right of point 7, so we take the right branch of 7.
    - Point 11 is above point 10, so we take the right branch of 10.
  - We've reached a null link, so this is where we insert 11.

![kdtree-insert](/princeton/c3/assets/kdtree-insert.jpg)

- When performing nearest neighbor search, we organize the recursive method so that when there are two possible subtrees to go down, we always choose the subtree that is on the same side of the splitting line as the query point as the first subtree to explore. What is the main reason for doing so?
- simplify code
- ensure correctness
- improve performance in practice
- improve performance in the worst case
- Ans: 3
  - It is a crucial performance optimization because the points encountered while exploring the first subtree may enable pruning of the second subtree. For typical inputs, choosing the direction that goes toward the query point makes it more likely that we will encounter points close to the query point.

## Interval Search Trees

- What is the worst case running time of deleting an interval using an interval search tree?
- constant
- logarithmic
- linearithmic
- quadratic
- Ans: 2
  - Using a red-black BST, we can delete the interval in logarithmic time (using the left endpoint as the key).

## Rectangle Intersection

- What is the worst-case running time of the sweep-line algorithm to find all $R$ intersections among $n$ rectangles?
- constant + $R$
- $\log⁡n$ + $R$
- $n\log⁡n$ + $R$
- $n\log⁡N$ + $R\log⁡n$
- Ans: 4

# Hash Tables

## Hash Functions

- Which of the following is not a property of Java's `hashCode()` for the `String` data type?
- can return a negative integer
- can take time proportional to the length of the string to compute
- a string and its reverse will have the same `hashCode()` value
- two strings with different `hashCode()` values are different strings
- Ans: 3
  - There is no reason to expect this. For example, the strings `ab` and `ba` have different hash codes.

## Separate Chaining

- What is the average running time of a random search miss in a separate-chaining hash table? Assume that your hash function satisfies the uniform hashing assumption and that there are $m=n/8$ chains.
- constant
- logarithmic
- linear
- linearithmic
- Ans: 1
  - This is one of the key properties of a separate-chaining hash table.

## Linear Probing

- What is the average running time of delete in a linear-probing hash table? Assume that your hash function satisfies the uniform hashing assumption and that the hash table is at most 50% full.
- constant
- logarithmic
- linear
- linearithmic
- Ans: 1
  - The easiest way to implement delete is to find and remove the key–value pair and then to reinsert all of the key–value pairs in the same cluster that appear after the deleted key–value pair. If the hash table doesn't get too full, the expected number of key–value pairs to reinsert will be a small constant.
  - An alternative is to flag the deleted linear-probing table entry so that it is skipped over during a search but is used for an insertion. If there are too many flagged entries, create a new hash table and rehash all key–value pairs.

## Context

- Which is the main reason to use a hash table instead of a red–black BST?
- supports more operations efficiently
- better worst-case performance guarantee
- better performance in practice on typical inputs
- implementation included in Java libraries
- Ans: 3

# Symbol Table Applications

## Sets

- Suppose that you implement a set using a red–black BST. Which of the following operations cannot be implemented in logarithmic time (or better) in the worst case?
- add an element to the set (if it is not already in the set)
- does the set contain a given element?
- return the set of all elements contained in two given sets
- remove an element from the set (if it is in the set)
- Ans: 3
  - Computing the intersection of two sets takes time proportional to the size of the smaller set (since we need to iterate over all elements in the smaller set and check whether they are contained in the large set). Note also that computing the intersection takes extra space proportional to the size of the intersection.

## Dictionary Clients

- Among the following symbol-table implementations, which would be most suitable for use in the LookupCSV client? Assume that the Key type implements the `compareTo()`, `equals()`, and `hashCode()` methods.
- unordered array
- ordered linked list
- binary search tree
- linear-probing hash table
- Ans: 4
  - Ordered operations (such as rank and ordered iteration) are not needed, so a hash table is probably most suitable.

## Indexing Clients

- Suppose that you are creating a book index which contains a set of keywords and there is a set of page numbers associated with each keyword (the pages on which the keyword appears). Which data type below would be the best choice to represent the book index?
- `ST<Integer, SET<String>>`
- `ST<String, SET<Integer>>`
- `SET<ST<Integer, String>>`
- `SET<ST<String, Integer>>`
- Ans: 2
  - Use a symbol table, where the key is the keyword (a `String`) and the value is the set of pages on which the keyword appears (a `SET<Integer>`). If the symbol table is implemented with a red–black BST, then the keywords and page numbers will appear in sorted order.

## Sparse Vectors

- Consider an $n$-by-$n$ matrix $A$ such that each row has 5 nonzero entries. Suppose that you represent $A$ using a sparse matrix (each row is represented as a sparse vector). What is the running time of multiplying the matrix $A$ with a dense vector $x$ of length $n$?
- $n$
- $n\log⁡n$
- $n^2$
- $n^3$
- Ans: 1
  - It takes constant time to compute the dot product of $x$ with a row of $A$. This must be done for each of the $n$ rows of $A$.
