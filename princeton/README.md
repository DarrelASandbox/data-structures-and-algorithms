- [About The Project](#about-the-project)
- [Textbook TOC](#textbook-toc)
- [Assignments](#assignments)
- [Course Overview](#course-overview)
- [Derivation of Modern Computational Capability](#derivation-of-modern-computational-capability)
  - [Factors in Deriving Modern Computational Capability](#factors-in-deriving-modern-computational-capability)
    - [1. **Processor Speeds (Clock Frequency)**](#1-processor-speeds-clock-frequency)
    - [2. **Multi-core Processors**](#2-multi-core-processors)
    - [3. **Memory Access and Bandwidth**](#3-memory-access-and-bandwidth)
    - [4. **Parallelism and Pipelining**](#4-parallelism-and-pipelining)
  - [Summary of Derivation](#summary-of-derivation)
- [Union-Find](#union-find)
- [Summary](#summary)
  - [Dynamic Connectivity](#dynamic-connectivity)
  - [Quick Find (eager approach)](#quick-find-eager-approach)
    - [Illustration 1](#illustration-1)
    - [Illustration 2](#illustration-2)
      - [Explanation of Operations:](#explanation-of-operations)
      - [Detailed Breakdown of Steps:](#detailed-breakdown-of-steps)
    - [Quadratic algorithms do not scale](#quadratic-algorithms-do-not-scale)
  - [Quick Union (lazy approach)](#quick-union-lazy-approach)
    - [Illustration 1](#illustration-1-1)
    - [Illustration 2](#illustration-2-1)

# About The Project

- [Princeton University - Algorithms, Part I](https://www.coursera.org/learn/algorithms-part1)
- [Algorithms, 4th Edition](https://algs4.cs.princeton.edu/home/)
- Setup for external library **VSCode (manual)**:
  - Download `algs4.jar`.
  - `Referenced Libraries` and select `algs4.jar`.
  - CD to `princeton` folder and use `Makefile` commands.
- [Java Algorithms and Clients](https://algs4.cs.princeton.edu/code/)

# Textbook TOC

<ol>
  <li><strong>Fundamentals</strong>
    <ol>
      <li>Programming Model</li>
      <li>Data Abstraction</li>
      <li>Stacks and Queues</li>
      <li>Analysis of Algorithms</li>
      <li>Illustration: Union-Find</li>
    </ol>
  </li>
</ol>

# Assignments

1. [hello](https://coursera.cs.princeton.edu/algs4/assignments/hello/specification.php)

# Course Overview

- **What is this course?**
  - Intermediate-level survey course.
  - Programming and problem solving, with applications.
  - **Algorithm**: method for solving a problem.
  - **Data structure**: method to store information.

|   topic    |                        DSA                         |
| :--------: | :------------------------------------------------: |
| data types |   stack, queue, bag, union-find, priority queue    |
|  sorting   |           quicksort, mergesort, heapsort           |
| searching  |           BST, red-black BST, hash table           |
|   graphs   |         BFS, DFS, Prim, Kruskal, Dijkstra          |
|  strings   | radix sorts, tries, KMP, regexps, data compression |
|  advanced  |           B-tree, suffix array, maxflow            |

- **Why study algorithms?**
  - **Internet**: Web search, packet routing, distributed file sharing, ...
  - **Biology**: Human genome project, protein folding, ...
  - **Computers**: Circuit layout, file system, compilers, ...
  - **Computer graphics**: Movies, video games, virtual reality, ...
  - **Security**: Cell phones, e-commerce, voting machines, ...
  - **Multimedia**: MP3, JPG, DivX, HDTV, face recognition, ...
  - **Social networks**: Recommendations, news feeds, advertisements, ...
  - **Physics**: N-body simulation, particle collision simulation, ...

# Derivation of Modern Computational Capability

The derivation of modern computational capability, particularly the approximation of \(10^9\) operations per second, comes from a combination of observations regarding advancements in hardware, specifically in processors, memory, and overall system architecture. Let’s break down how we arrive at this rough estimate of \(10^9\) (1 billion) operations per second.

## Factors in Deriving Modern Computational Capability

### 1. **Processor Speeds (Clock Frequency)**

- **Clock frequency** refers to how many cycles a processor can execute per second, typically measured in **Hertz (Hz)**. Modern processors (as of 2020s) typically have clock frequencies ranging between **2 GHz to 5 GHz**, which means they execute between 2 billion to 5 billion clock cycles per second.
  - 1 GHz = 10^9 cycles per second.
- While not every clock cycle directly translates to a complete operation (some operations take more than one cycle), for rough estimates, we assume **1 operation per clock cycle** on average for simplicity.

### 2. **Multi-core Processors**

- Most modern processors have **multiple cores** (typically between 4 and 64 for consumer-grade processors), which allows them to perform multiple operations simultaneously. In **high-performance computing (HPC)** or **cloud-based servers**, systems often use processors with **hundreds of cores**.

  For example, with an **8-core** processor, if each core operates at **2 GHz**, the system can theoretically perform 8 times 2 times 10^9 = 16 times 10^9 operations per second. Even for a single-core processor operating at 2-5 GHz, we still approach the rough standard of 10^9 operations per second.

### 3. **Memory Access and Bandwidth**

- Modern systems have **memory access speeds** that allow reading and writing large amounts of data in very short time intervals. Main memory bandwidth (RAM) is measured in **gigabytes per second (GB/s)**, and high-end systems can achieve **up to 100 GB/s** or more.
  - A typical word in memory is 4 bytes (32-bit) or 8 bytes (64-bit), so accessing **1 billion 8-byte words** requires **8 GB** of memory bandwidth.
  - If the memory subsystem can handle 100 GB/s, it can touch **all 1 billion words** (8 GB) in a fraction of a second.

### 4. **Parallelism and Pipelining**

- Modern processors use techniques such as **instruction pipelining**, **superscalar execution**, and **out-of-order execution** to improve efficiency, effectively allowing multiple instructions (operations) to be processed at the same time, which boosts the number of operations executed per second.
  - **Pipelining** breaks down instructions into smaller steps, and while one instruction is executing, another can begin, improving throughput.
  - **Parallelism** (including vectorized operations, multiple cores, and specialized hardware like GPUs) enables systems to execute many operations concurrently.

## Summary of Derivation

1. **Processor Clock Speed**: Modern CPUs run at 2-5 GHz, meaning 2-5 times 10^9 clock cycles per second.
2. **Multi-core and Parallelism**: With multi-core processors, multiple operations can be executed simultaneously. A typical system can achieve around 10^9 effective operations per second (more in high-performance systems).
3. **Memory Bandwidth**: With main memory bandwidths reaching 100 GB/s or more, systems can touch all 1 billion words of memory in roughly 1 second.

# Union-Find

- **Steps to developing a usable algorithm**
  - Model the problem.
  - Find an algorithm to solve it.
  - Fast enough? Fits in memory?
  - If not, figure out why.
  - Find a way to address the problem.
  - Iterate until satisfied.

# Summary

|  algorithm  | initialize | union | find |
| :---------: | :--------: | :---: | :--: |
| quick-find  |     N      |   N   |  1   |
| quick-union |     N      |   N   |  N   |

- **Quick-find defect**.
  - Union too expensive (N array accesses).
  - Trees are flat, but too expensive to keep them flat.
- **Quick-union defect**.
  - Trees can get tall.
  - Find too expensive (could be N array accesses).

## Dynamic Connectivity

> How many connected components result after performing the following sequence of union operations on a set of 10 items?
>
> `1–2    3–4    5–6    7–8    7–9    2–8    0–5    1–9`

| Step | Description                                                                                          | Components                                     |
| ---- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1    | Merge 1 and 2 into a single component.                                                               | {0}, {1, 2}, {3}, {4}, {5}, {6}, {7}, {8}, {9} |
| 2    | Merge 3 and 4 into a single component.                                                               | {0}, {1, 2}, {3, 4}, {5}, {6}, {7}, {8}, {9}   |
| 3    | Merge 5 and 6 into a single component.                                                               | {0}, {1, 2}, {3, 4}, {5, 6}, {7}, {8}, {9}     |
| 4    | Merge 7 and 8 into a single component.                                                               | {0}, {1, 2}, {3, 4}, {5, 6}, {7, 8}, {9}       |
| 5    | Merge 7 and 9 (since 7 and 8 are already in the same component, 9 joins them).                       | {0}, {1, 2}, {3, 4}, {5, 6}, {7, 8, 9}         |
| 6    | Merge 2 and 8 (since 1, 2 are already together and 7, 8, 9 are together, this merges them into one). | {0}, {1, 2, 7, 8, 9}, {3, 4}, {5, 6}           |
| 7    | Merge 0 and 5 (5 and 6 are already together, so 0, 5, 6 join into a single component).               | {0, 5, 6}, {1, 2, 7, 8, 9}, {3, 4}             |
| 8    | No effect since 1 and 9 are already in the same component.                                           | {0, 5, 6}, {1, 2, 7, 8, 9}, {3, 4}             |

- **Final Components**
  - {0, 5, 6}
  - {1, 2, 7, 8, 9}
  - {3, 4}

## Quick Find (eager approach)

- It takes N<sup>2</sup> array accesses to process a sequence of N union commands on N objects

- **Data Structure**
  - Integer array id[] of size N.
  - Interpretation: p and q are connected iff (if and only if) they have the same id.
- **Find**: Check if p and q have the same id
- **Union**: To merge components containing p and q, change all entries whose id equals id[p] to id[q].

### Illustration 1

```
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 1 | 8 | 8 | 0 | 0 | 1 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|


0       1---2   3---4
|           |   |   |
5---6       7   8   9
```

- Connected:
  - 0, 5 & 6
  - 1, 2 & 7
  - 3, 4, 8 & 9

### Illustration 2

```
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
     |---|---|---|---|---|---|---|---|---|---|

union(4,3)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 2 | 3 | 3 | 5 | 6 | 7 | 8 | 9 |
     |---|---|---|---|---|---|---|---|---|---|

union(3,8)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 2 | 8 | 8 | 5 | 6 | 7 | 8 | 9 |
     |---|---|---|---|---|---|---|---|---|---|

union(6,5)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 2 | 8 | 8 | 5 | 5 | 7 | 8 | 9 |
     |---|---|---|---|---|---|---|---|---|---|

union(9,4)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 2 | 8 | 8 | 5 | 5 | 7 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|

union(2,1)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 1 | 8 | 8 | 5 | 5 | 7 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|

connected(8,9) -> True
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 1 | 8 | 8 | 5 | 5 | 7 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|

connected(5,0) -> False
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 1 | 8 | 8 | 5 | 5 | 7 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|

union(5,0)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 1 | 8 | 8 | 0 | 0 | 7 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|

union(7,2)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 0 | 1 | 1 | 8 | 8 | 0 | 0 | 1 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|

union(6,1)
       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 1 | 1 | 1 | 8 | 8 | 1 | 1 | 1 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|
```

The Quick-Find algorithm represents a way to solve the dynamic connectivity problem by using an array `id[]` where the index represents the object, and the value at each index represents the component identifier (or root) that object belongs to.

#### Explanation of Operations:

1. **Initial state**: Each element is its own component. Hence, `id[]` values start as equal to their index.
2. **Union operations**: `union(p, q)` connects elements `p` and `q` by making the value of `id[p]` equal to `id[q]`. To achieve this, every index in the `id[]` array that currently has the value `id[p]` must be changed to `id[q]`.
3. **Connected operations**: `connected(p, q)` checks whether `p` and `q` are in the same component by comparing `id[p]` and `id[q]`. If they are equal, `p` and `q` are connected.

#### Detailed Breakdown of Steps:

1. **union(4, 3)**:
   - Make `id[4]` equal to `id[3]`, which results in `id[4] = 3`. Change `id[4]` to `id[3]`, making both `3` and `4` part of the same component.
2. **union(3, 8)**:

   - Make `id[3]` and `id[4]` (since they are in the same component) equal to `id[8]`, so both become `id[3] = id[8] = 8`.

3. **union(6, 5)**:

   - Make `id[6] = id[5]`, so `id[6] = 5`.

4. **union(9, 4)**:

   - Make `id[9]` equal to `id[4]`, but since `id[4] = 8`, set `id[9] = 8`.

5. **union(2, 1)**:

   - Make `id[2] = id[1]`, so `id[2] = 1`.

6. **connected(8, 9)**:

   - Check if `id[8] = id[9]`. Both are `8`, so they are connected.

7. **connected(5, 0)**:

   - Check if `id[5] = id[0]`. `id[5] = 5` and `id[0] = 0`, so they are not connected.

8. **union(5, 0)**:

   - Make `id[5] = id[0]`, so all occurrences of `id[5] = 5` must change to `0`. This affects both `id[5]` and `id[6]`.

9. **union(7, 2)**:

   - Make `id[7] = id[2]`, so `id[7] = 1`.

10. **union(6, 1)**:
    - Make `id[6] = id[1]`, so all elements with `id[6] = 0` now become `1`.

In the final state, `id[]` looks like this:

```
id[] | 1 | 1 | 1 | 8 | 8 | 1 | 1 | 1 | 8 | 8 |
```

- All elements with `1` form one connected component.
- All elements with `8` form another connected component.

### Quadratic algorithms do not scale

- Rough standard (for now).
  - 10^9 operations per second.
  - 10^9 words of main memory.
  - Touch all words in approximately 1 second.
- Ex. Huge problem for quick-find.
  - 10^9 union commands on 10^9 objects.
  - Quick-find takes more than 10^18 operations.
  - 30+ years of computer time!

$$
\frac{10^{18} \text{ operations}}{10^9 \text{ operations per second}} = 10^9 \text{ seconds.}
$$

Convert to years:

$$
10^9 \text{ seconds} \div (60 \times 60 \times 24 \times 365) \approx 31.7 \text{ years.}
$$

> What is the maximum number of id[]id[] array entries that can change (from one value to a different value) during one call to union when using the quick-find data structure on nn elements?
> In the worst case, all of the entries except id[q]id[q] are changed from id[p]id[p] to id[q]id[q].

## Quick Union (lazy approach)

- **Data structure**.
  - Integer array id[] of length N.
  - Interpretation: id[i] is parent of i.
  - Root of i is id[id[id[...id[i]...]]].
- **Find**: Check if p and q have the same root.
- **Union**: To merge components containing p and q, set the id of p's root to the id of q's root.

### Illustration 1

Suppose that in a quick-union data structure on 10 elements that the id[] array is

```
   i    0   1   2   3   4   5   6   7   8   9
      |---|---|---|---|---|---|---|---|---|---|
id[i] | 0 | 9 | 6 | 5 | 4 | 2 | 6 | 1 | 0 | 5 |
      |---|---|---|---|---|---|---|---|---|---|
```

- `i = 0` → `id[0] = 0`: Element 0 is its own root.
- `i = 1` → `id[1] = 9`: Element 1's parent is 9.
- `i = 2` → `id[2] = 6`: Element 2's parent is 6.
- `i = 3` → `id[3] = 5`: Element 3's parent is 5.
- `i = 4` → `id[4] = 4`: Element 4 is its own root.
- `i = 5` → `id[5] = 2`: Element 5's parent is 2.
- `i = 6` → `id[6] = 6`: Element 6 is its own root.
- `i = 7` → `id[7] = 1`: Element 7's parent is 1.
- `i = 8` → `id[8] = 0`: Element 8's parent is 0.
- `i = 9` → `id[9] = 5`: Element 9's parent is 5.

- The root of 3 is 6:   3→5→2→6.
- The root of 7 is 6:   7→1→9→5→2→6.

### Illustration 2

```
   i    0   1   2   3   4   5   6   7   8   9

union(4,3)
   i    0   1   2   3 → 4   5   6   7   8   9

union(3,8)
   i    0   1   2   5   6   7   8 → 3 → 4   9

union(6,5)
   i    0   1   2   5 → 6   7   8 → 3 → 4   9

union(9,4)
   i    0   1   2   5 → 6   7   8 → 3 → 4
                                  → 9

union(2,1)
   i    0   1 → 2   5 → 6   7   8 → 3 → 4
                                  → 9

connected(8,9) True
   i    0   1 → 2   5 → 6   7   8 → 3 → 4
                                  → 9

connected(5,4) False
   i    0   1 → 2   5 → 6   7   8 → 3 → 4
                                  → 9

union(5,0)
   i    0 → 5 → 6   1 → 2   7   8 → 3 → 4
                                  → 9

union(7,2)
   i    0 → 5 → 6   1 → 2   8 → 3 → 4
                      → 7     → 9

union(6,1)
   i    1 → 2           8 → 3 → 4
          → 7             → 9
          → 0 → 5 → 6

union(7,3)
   i    8 → 3 → 4
          → 9
          → 1 → 2
              → 7
              → 0 → 5 → 6

       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 1 | 8 | 1 | 8 | 3 | 0 | 5 | 1 | 8 | 8 |
     |---|---|---|---|---|---|---|---|---|---|
```
