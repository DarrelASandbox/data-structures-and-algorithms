## Instructions

- The runtime reflected in the solutions is inaccurate. You are better off with asymptotic analysis (Big-O Notation).
- Refer to the respective link to leetcode website to get the full problem information including constraint, diagram, etc.
- Use [blank.page](https://blank.page/) and compare.txt to check against the solution using VSCode compare tool.
  - May want to change the padding of the textarea if the width is too short.

## References

- [Time complexity of accessing a Python dict](https://stackoverflow.com/questions/1963507/time-complexity-of-accessing-a-python-dict)

## Patterns

1. Sliding Window
2. Two Pointers or Iterators
3. Fast and Slow pointers
4. Merge Intervals
5. Cyclic sort
6. In-place reversal of linked list
7. Tree Breadth First Search (BFS)
8. Tree Depth First Search (DFS)
9. Two heaps
10. Subsets
11. Modified binary search
12. Top K elements
13. K-way Merge
14. Topological sort

&nbsp;

## Problems

|                                   |      |
| :-------------------------------: | :--: |
|        Dynamic Programming        |  DP  |
|        Divide and Conquer         | D&C  |
|       Level Order Traversal       | LOT  |
|     Vertical Order Traversal      | VOT  |
|        Binary Search Tree         | BST  |
|       Breadth First Search        | BFS  |
|        Depth First Search         | DFS  |
|        Doubly Linked List         | DLL  |
| Floyd’s Cycle Detection Algorithm | FCDA |

&nbsp;

|  No  |                                                               Title                                                               | Difficulty |                                 Pattern                                  |
| :--: | :-------------------------------------------------------------------------------------------------------------------------------: | :--------: | :----------------------------------------------------------------------: |
| 0001 |                                         [Two Sum](https://leetcode.com/problems/two-sum/)                                         |    Easy    |                                 Hashmap                                  |
| 0002 |                                 [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)                                 |   Medium   |                               Linked List                                |
| 0015 |                                            [3Sum](https://leetcode.com/problems/3sum/)                                            |   Medium   |                                 Pointers                                 |
| 0020 |                               [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)                               |    Easy    |                                  Stack                                   |
| 0023 |                            [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)                            |    Hard    |                    Linked List, Priority Queue & D&C                     |
| 0053 |                                [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)                                |    Easy    |                       Kadane’s Algorithm, D&C & DP                       |
| 0059 |                                [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)                                |   Medium   |                                  Matrix                                  |
| 0063 |                                 [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)                                 |   Medium   |                         Matrix, DP & Memoization                         |
| 0079 |                                     [Word Search](https://leetcode.com/problems/word-search/)                                     |   Medium   |                Matrix, Recursion, DFS, BFS & Backtracking                |
| 0098 |                     [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)                     |   Medium   |                                   BST                                    |
| 0102 |               [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)               |   Medium   |                       LOT, BFS, Queue & Recursion                        |
| 0116 |     [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)     |   Medium   |                       LOT, BFS, Queue & Recursion                        |
| 0124 |                    [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)                    |    Hard    |                       Binary Tree, DFS & Recursion                       |
| 0141 |                               [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)                               |    Easy    |                          Linked List & Pointers                          |
| 0146 |                                       [LRU Cache](https://leetcode.com/problems/lru-cache/)                                       |   Medium   |                          Design, DLL & Hashmap                           |
| 0207 |                                 [Course Schedule](https://leetcode.com/problems/course-schedule/)                                 |   Medium   | Topological Sort, Graph, DFS, BFS, Recursion, Backtracking & Memoization |
| 0210 |                              [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)                              |   Medium   |              Topological Sort, Graph, DFS, BFS & Recursion               |
| 0232 |                    [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)                    |    Easy    |                          Design, Queue & Stack                           |
| 0283 |                                     [Move Zeroes](https://leetcode.com/problems/move-zeroes/)                                     |    Easy    |                                 Pointers                                 |
| 0287 |                       [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)                       |   Medium   |                            Linked List & FCDA                            |
| 0295 |                    [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)                    |    Hard    |                     Design, Binary Search & Min Heap                     |
| 0316 |                        [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)                        |   Medium   |                    Greedy Algorithm & Monotonic Stack                    |
| 0403 |                                       [Frog Jump](https://leetcode.com/problems/frog-jump/)                                       |    Hard    |                       DP, Recursion & Memoization                        |
| 0438 |                   [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)                   |   Medium   |                         Hashmap & Sliding Window                         |
| 0498 |                               [Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/)                               |   Medium   |                                  Matrix                                  |
| 0509 |                                [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)                                |    Easy    |                       Recursion, Memoization & DP                        |
| 0556 |                        [Next Greater Element III](https://leetcode.com/problems/next-greater-element-iii/)                        |   Medium   |                                 Pointers                                 |
| 0560 |                           [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)                           |   Medium   |                                 Hashmap                                  |
| 0647 |                          [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)                          |   Medium   |                     Pointers, Triangular Number & DP                     |
| 0658 |                         [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)                         |   Medium   |                         Pointers & Binary Search                         |
| 0706 |                                  [Design HashMap](https://leetcode.com/problems/design-hashmap/)                                  |    Easy    |                             Design & Hashmap                             |
| 0763 |                                [Partition Labels](https://leetcode.com/problems/partition-labels/)                                |   Medium   |                   Greedy Algorithm, Pointers & Hashmap                   |
| 0781 |                               [Rabbits in Forest](https://leetcode.com/problems/rabbits-in-forest/)                               |   Medium   |                                 Hashmap                                  |
| 0791 |                              [Custom Sort String](https://leetcode.com/problems/custom-sort-string/)                              |   Medium   |                              Sort & Hashmap                              |
| 0915 |         [Partition Array into Disjoint Intervals](https://leetcode.com/problems/partition-array-into-disjoint-intervals/)         |   Medium   |                                 Pointers                                 |
| 0946 |                        [Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/)                        |   Medium   |                                  Stack                                   |
| 0987 |       [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)       |    Hard    |                          VOT, DFS, & Recursion                           |
| 1026 |    [Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)    |   Medium   |                       Binary Tree, DFS & Recursion                       |
| 1038 |          [Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/)          |   Medium   |                           BST, DFS & Recursion                           |
| 1073 |                   [Adding Two Negabinary Numbers](https://leetcode.com/problems/adding-two-negabinary-numbers/)                   |   Medium   |                                   Bit                                    |
| 1254 |                        [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)                        |   Medium   |                         Matrix & DFS & Recursion                         |
| 1375 | [Number of Times Binary String Is Prefix-Aligned](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/) |   Medium   |                            Binary & Recursion                            |
| 1143 |                      [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)                      |   Medium   |                             Tabulation & DP                              |
| 1721 |                 [Swapping Nodes in a Linked List](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/)                 |   Medium   |                          Linked List & Pointers                          |
