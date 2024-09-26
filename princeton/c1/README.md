- [Stacks and Queues](#stacks-and-queues)
  - [Stacks](#stacks)
  - [Resizing Arrays](#resizing-arrays)
    - [Logarithm functions](#logarithm-functions)
      - [Definition of a Logarithm](#definition-of-a-logarithm)
      - [Understanding Logarithmic Growth](#understanding-logarithmic-growth)
      - [Why Are Logarithms Important in Algorithms?](#why-are-logarithms-important-in-algorithms)
      - [Logarithmic Function Examples](#logarithmic-function-examples)
      - [Properties of Logarithms](#properties-of-logarithms)
      - [Real-World Example](#real-world-example)
      - [Summary](#summary)
    - [Logarithmic Time](#logarithmic-time)
      - [1. Dividing the Problem Space](#1-dividing-the-problem-space)
      - [2. Repeated Doubling or Halving](#2-repeated-doubling-or-halving)
      - [3. Tree-Like Structures](#3-tree-like-structures)
      - [4. Mathematical Growth Pattern](#4-mathematical-growth-pattern)
      - [5. Examples of Logarithmic Time Complexity](#5-examples-of-logarithmic-time-complexity)
      - [Conclusion](#conclusion)
  - [Queue](#queue)
  - [Generics](#generics)
  - [Iterators](#iterators)
  - [Applications](#applications)
- [Analysis of Algorithms](#analysis-of-algorithms)
  - [Log log plot](#log-log-plot)
  - [Doubling hypothesis](#doubling-hypothesis)
  - [Mathematical Models](#mathematical-models)
    - [Arithmetic Series Sum Formula](#arithmetic-series-sum-formula)
    - [Triple `for` loops](#triple-for-loops)
      - [Key Observations](#key-observations)
      - [Total Number of Array Accesses](#total-number-of-array-accesses)
  - [Theory Of Algorithms](#theory-of-algorithms)
    - [Commonly-Used Notations](#commonly-used-notations)
    - [Common Mistake](#common-mistake)
    - [Which of the following functions is $O(n^3)$?](#which-of-the-following-functions-is-on3)
  - [Memory](#memory)
- [Union-Find](#union-find)
  - [Derivation of Modern Computational Capability](#derivation-of-modern-computational-capability)
    - [Factors in Deriving Modern Computational Capability](#factors-in-deriving-modern-computational-capability)
      - [1. Processor Speeds (Clock Frequency)](#1-processor-speeds-clock-frequency)
      - [2. Multi-core Processors](#2-multi-core-processors)
      - [3. Memory Access and Bandwidth](#3-memory-access-and-bandwidth)
      - [4. Parallelism and Pipelining](#4-parallelism-and-pipelining)
    - [Summary of Derivation](#summary-of-derivation)
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
  - [Weighting](#weighting)
    - [Illustration 1](#illustration-1-2)

# Stacks and Queues

## Stacks

- Which of the following inputs to our stack test client does not produce the output: 5 4 3 2 1

```
1. 1 2 3 4 5 - - - - -
2. 1 2 5 - 3 4 - - - -
3. 5 - 1 2 3 - 4 - - -
4. 5 - 4 - 3 - 2 - 1 -
```

- Ans: 3

```
Output:
5
-
1
1 2
1 2 3
1 2
1 2 4
1 2
1
-
```

- Given a reference `first` to the first node of a null-terminated linked list with at least two nodes, what does the code fragment below do?

```java
Node x = first;
while (x.next.next != null) {
    x = x.next;
}
x.next = null;
```

- Ans: deletes the last node in the list
- Upon termination of the loop, xx is a reference to the second to last node. The final statement deletes the last node from the list.

## Resizing Arrays

- Suppose that, starting from an empty data structure, we perform `n` push operations in our resizing-array implementation of a stack. How many times is the `resize()` method called?
  - constant
  - logarithmic
  - linear
  - quadratic
  - Ans: The `resize()` method is called only when the size of the stack is a power of 2. There are $\sim log_2 n$ powers of 2 between 1 and $n$.

### Logarithm functions

Logarithmic functions are mathematical functions that essentially do the reverse of exponentiation. In simpler terms, if you understand how exponentiation works (raising a number to a power), logarithms are the opposite of that.

#### Definition of a Logarithm

The **logarithm** of a number $n$ with a base $b$ (written as $\log_b(n)$) answers the question:
**"To what power should $b$ be raised to get $n$?"**

For example:

- $\log_2(8) = 3$ because $2^3 = 8$.
- $\log_{10}(100) = 2$ because $10^2 = 100$.
- $\log_3(27) = 3$ because $3^3 = 27$.

#### Understanding Logarithmic Growth

Logarithmic functions grow **very slowly** compared to linear or polynomial functions. This is a crucial property in computer science because it allows algorithms to handle large inputs efficiently.

- **Linear Growth:** If you double the input size $n$, the number of operations also doubles (e.g., $2n$).
- **Logarithmic Growth:** If you double the input size $n$, the number of operations only increases by a small, constant amount (e.g., $\log_2(n)$ becomes $\log_2(2n) = \log_2(n) + 1$).

#### Why Are Logarithms Important in Algorithms?

In many algorithms, especially those that divide the problem space, you encounter logarithmic behavior. Here’s why:

1. **Exponential Inverses:**

   - If doubling a quantity is an exponential operation, then halving a quantity repeatedly is a logarithmic operation.
   - For example, in **binary search**, you start with $n$ elements and eliminate half of them with each comparison, leading to $\log_2(n)$ comparisons in total.

2. **Efficient Processing:**
   - Logarithmic functions are powerful because they allow us to handle very large inputs with a small number of operations. Consider searching in a sorted list of 1,000,000 elements:
     - A linear search would need up to 1,000,000 comparisons in the worst case.
     - A binary search only needs about $\log_2(1,000,000) \approx 20$ comparisons.
   - The difference is huge when dealing with large data sets, making logarithmic algorithms very efficient.

#### Logarithmic Function Examples

1. **$\log_2(16) = 4$**:

   - This means $2^4 = 16$.
   - In binary search, after 4 comparisons, we can narrow down from 16 elements to just 1.

2. **$\log_{10}(1000) = 3$**:

   - This means $10^3 = 1000$.

3. **General Formula:**
   - $\log_b(x) = y$ implies that $b^y = x$.

#### Properties of Logarithms

1. **Product Rule:**
   - $\log_b(x \cdot y) = \log_b(x) + \log_b(y)$
2. **Quotient Rule:**
   - $\log_b(x / y) = \log_b(x) - \log_b(y)$
3. **Power Rule:**
   - $\log_b(x^y) = y \cdot \log_b(x)$
4. **Change of Base:**
   - $\log_b(x) = \frac{\log_c(x)}{\log_c(b)}$ for any valid base $c$.

#### Real-World Example

Imagine you have a 1000-page book, and you are trying to find a word:

- **Linear Search:** Flip through each page one by one. If the word is on the last page, you’ll have flipped through 1000 pages.
- **Logarithmic Search (Binary Search):** Open the book to the middle, and decide if the word comes before or after this page. Then repeat the process on the appropriate half. This means you only need about $\log_2(1000) \approx 10$ comparisons to find the page.

#### Summary

- **Logarithmic functions** grow very slowly and are the opposite of exponential functions.
- Logarithmic algorithms can handle very large inputs efficiently because the number of operations grows slowly relative to the input size.

### Logarithmic Time

A process or algorithm takes **logarithmic time** if the time it takes to complete the task grows proportionally to the **logarithm** of the size of the input. In other words, as the input size $n$ increases, the number of operations needed grows roughly like $\log n$. Here are some key characteristics to help you identify if an operation or algorithm is logarithmic:

#### 1. Dividing the Problem Space

- **Logarithmic time** often occurs when an algorithm reduces the size of the input by a consistent fraction (e.g., half) with each step.
- A classic example is **binary search**:
  - Given a sorted array, each comparison allows you to discard half of the remaining elements. This means after each operation, the problem size is halved.
  - The total number of steps needed to find an element or determine it's not present is $O(\log n)$.

#### 2. Repeated Doubling or Halving

- If the algorithm involves **repeatedly doubling** or **halving** the size of something, it usually runs in logarithmic time.
- Examples:
  - **Binary Search Tree (BST)** operations: In a balanced BST, searching, inserting, and deleting are logarithmic because each step narrows down the search space by half.
  - **Dynamic resizing of arrays**: If an array doubles its size when it fills up (e.g., a resizing array-based stack), the resizing operations themselves happen $\log n$ times over `n` insertions.

#### 3. Tree-Like Structures

- Many data structures that form a **balanced tree** exhibit logarithmic time behavior for operations. This is because trees grow exponentially with depth. Therefore, the time to reach a specific node (the height of the tree) is proportional to $\log n$.
- Examples:
  - **Balanced BSTs** like AVL trees or Red-Black trees.
  - **Heaps** (e.g., in heap sort, inserting and extracting the minimum/maximum takes $O(\log n)$).
  - **B-trees** or **B+ trees** often used in databases for fast searching, insertion, and deletion.

#### 4. Mathematical Growth Pattern

- An algorithm that processes **exponentially decreasing chunks** of the input typically has logarithmic time complexity.
- Mathematically, if you have an algorithm that works like:
  - After each step, the input size is reduced from $n$ to $n/2$, the number of steps taken would be $\log_2 n$.
- The general pattern:
  - $n, n/2, n/4, n/8, \ldots, 1$ equates to $\log n$ steps.

#### 5. Examples of Logarithmic Time Complexity

- **Binary Search**: Splitting the search range in half each time. $O(\log n)$.
- **Finding the height of a balanced binary tree**: Height is $\log n$, where $n$ is the number of nodes.
- **Dynamic array resizing**: If the array doubles its size each time it fills, resizing calls are logarithmic with respect to the total number of inserts.

#### Conclusion

If an algorithm **divides** the problem or input space by a constant factor (like half) each step, or if it **narrows down** its search by a constant fraction repeatedly, it will likely run in **logarithmic time**. This is often represented as $O(\log n)$, where the base of the logarithm (e.g., 2) is not crucial for Big-O notation, as it only affects the constant factor.

If you're seeing a process that looks like it is **halving** or **doubling** at each step, there's a good chance you're dealing with a logarithmic time algorithm.

## Queue

- Suppose that you implement a queue using a null-terminated singly-linked list, maintaining a reference to the item least recently added (the front of the list) but not maintaining a reference to the item most recently added (the end of the list). What are the worst-case running times for enqueue and dequeue?
  - constant time for both enqueue and dequeue
  - constant time for enqueue and linear time for dequeue
  - linear time for enqueue and constant time for dequeue
  - linear time for both enqueue and dequeue
  - Ans: 3
    - Removing a node from the front of a linked list takes constant time. However, it takes linear time to find the last node of a linked list (unless we maintain an explicit reference to it, which is not done here).

## Generics

- Which of the following statements is a type safe way to declare and initialize a `Stack` of integers?
  - `Stack<int> stack = new Stack<int>();`
  - `Stack<Integer> stack = new Stack();`
  - `Stack stack = new Stack<Integer>();`
  - `Stack<Integer> stack = new Stack<Integer>();`
  - Ans: 4
    - In Java 6, you must specify the concrete type both in the variable declaration (left-hand side) and the constructor call (right-hand side). Starting in Java 7, you can use the diamond operator instead:
    - `Stack<Integer> stack = new Stack<>();`

## Iterators

- Suppose that we copy the iterator code from our linked list and resizing array implementations of a stack to the corresponding implementations of a queue.
- Which queue iterator(s) will correctly return the items in FIFO order?
  - neither
  - linked-list iterator only
  - array iterator only
  - both
  - Ans: 2
    - The linked-list iterator will work without modification because the items in the linked list are ordered in FIFO order (which is the main reason we dequeue from the front and enqueue to the back instead of vice versa).
    - The array iterator will fail for two reasons. First, the the items should be iterated over in the opposite order. Second, the items won't typically be stored in the array as entries $0$ to $n−1$.

## Applications

- What does the following code fragment print?
  - 010011
  - 010111
  - 111010
  - 110010
  - Ans: 4
    - It prints the binary representation of n (110010 when n is 50). Note that our stack iterator returns the items in LIFO order, whereas `java.util.Stackjava.util.Stack` returns them in FIFO order.

```java
int n = 50;

Stack<Integer> stack = new Stack<Integer>();
while (n > 0) {
    stack.push(n % 2);
    n = n / 2;
}

for (int digit : stack) {
    StdOut.print(digit);
}

StdOut.println();
```

# Analysis of Algorithms

Suppose that you make the following observations of the running time $T(n)$ (in seconds) of a program as a function of the input size n. Which of the following functions best models the running time $T(n)$?

|   n    | T(n) |
| :----: | :--: |
| 1,000  | 0.0  |
| 2,000  | 0.0  |
| 4,000  | 0.1  |
| 8,000  | 0.3  |
| 16,000 | 1.3  |
| 32,000 | 5.1  |
| 64,000 | 20.5 |

$$
\frac{T(64,000)}{T(32,000)} \approx 4  (20.5 / 5.1 ≈ 4)
$$

$$
\frac{T(32,000)}{T(16,000)} \approx 4  (5.1 / 1.3 ≈ 4)
$$

$$
\frac{T(16,000)}{T(8,000)} \approx 4  (1.3 / 0.3 ≈ 4)
$$

This pattern suggests that the running time follows a quadratic growth pattern because in a quadratic function, the running time scales by a factor of 4 when the input size doubles. A quadratic time complexity would take the form:

$$
T(n) = c \cdot n^2
$$

Given the observation that the running time roughly quadruples every time $n$ doubles, it indicates that the best model for the running time $T(n)$ is likely a quadratic function of the form $T(n) = O(n2)$.

We assume $T(n)=a n^b$ for some constants $a$ and $b$.

As we double the input size $n$, the running time approximately quadruples, indicating a quadratic algorithm or $b=2$. Plugging in $T(64000)=20.5$ and solving for $a$, we obtain $a=20.5/640002≈5.0×10−9$.

## Log log plot

- A **log-log plot** is useful in data analysis for algorithms when you want to reveal certain types of relationships between variables, particularly **power-law relationships** or scaling behavior. Here are a few specific reasons why you might use a log-log plot in algorithm analysis:
  - **Detecting Power-Law Relationships**:
    - Many algorithms exhibit behavior where one variable scales as a power of another, i.e., y = kx<sup>n</sup>. A log-log plot linearizes power-law relationships. This is especially common when analyzing algorithms in fields like complexity theory, machine learning, and network analysis.
    - **Example**: In sorting algorithms, if you suspect the time complexity is O(n^k) for some k, plotting execution time vs. input size on a log-log scale can show a straight line, where the slope corresponds to the exponent.
  - **Understanding Algorithmic Scaling**:
    - For algorithms with large input sizes, it’s important to understand how they scale. A log-log plot allows you to easily visualize how a change in input size affects the outcome (e.g., time complexity, memory usage) over several orders of magnitude. This is particularly useful for:
      - Analyzing time complexity: Algorithms with complexities like O(n), O(n log n), and ￼O(n<sup>2</sup>) can be visually distinguished.
      - Memory usage scaling: You can analyze how memory requirements increase as a function of input size on large scales.
  - **Handling Large Ranges of Data**:
    - When algorithm performance varies significantly across different input sizes, a log-log plot can compress the data range, making trends easier to observe.
    - For example: If you have data points ranging from very small to very large input sizes, a log-log plot helps to clearly visualize patterns that might be hard to see on a linear scale.
  - **Analyzing Asymptotic Behavior**:
    - For asymptotic analysis, where you care about how the algorithm behaves as the input size grows very large, a log-log plot can provide insight into the “tail” behavior of the algorithm. If you want to compare actual algorithm performance with theoretical complexity estimates (e.g., O(n)￼vs. O(n<sup>2</sup>)), log-log plots can help you see whether the algorithm behaves as expected for large inputs.
  - **Visualizing Differences in Algorithmic Growth Rates**:
    - Log-log plots can help compare different algorithms by plotting their execution times or memory usages as functions of input size. This makes it easy to visually identify:
      - Algorithms that grow faster or slower than others.
      - Breakpoints where one algorithm becomes more efficient than another as input size increases.

## Doubling hypothesis

The Doubling Hypothesis is a technique used in algorithm analysis to estimate time complexity when you’re unsure of the exact relationship between input size and execution time. The method involves running an algorithm with input sizes that double each time and observing how the running time changes. It assumes that the time complexity follows a power-law relationship, typically of the form $T(n) = O(nk)$.

- How the Doubling Hypothesis Works:
  1. Run the algorithm with an input size $n$, and record the running time $T(n)$.
  2. Double the input size to $2n$, and record the new running time $T(2n)$.
  3. Compare the two running times:
     - If $T(2n)$ is approximately $2T(n)$, the time complexity is likely $O(n)$.
     - If $T(2n)$ is approximately $4T(n)$, the time complexity is likely $O(n2)$.
     - If $T(2n)$ is approximately $8T(n)$, the time complexity is likely $O(n3)$, etc.
- The Key Idea
  - The doubling hypothesis assumes a polynomial relationship between input size and execution time. By doubling the input size and examining how the running time changes, you can infer the degree of the polynomial that governs the time complexity.
- Example: Let’s analyze an algorithm with the following running times:
  - For input size $n = 100$, the time is $T(100) = 1$ second.
  - For input size $n = 200$, the time is $T(200) = 2$ seconds.
  - For input size $n = 400$, the time is $T(400) = 4$ seconds.
- Here, the running time doubles when the input size doubles, suggesting a time complexity of approximately $O(n)$.
  - However, if you observe:
    - $T(100)$ = 1 second.
    - $T(200)$ = 4 seconds.
    - $T(400)$ = 16 seconds.
  - This suggests that the running time quadruples when the input size doubles, implying a time complexity of $O(n^2)$.
- Why Use the Doubling Hypothesis?
  1. **Empirical Estimation**: It’s a practical way to estimate time complexity based on empirical observations, especially when formal analysis is difficult.
  2. **Benchmarking Algorithms**: Provides a quick way to compare the performance of different algorithms by observing how they scale as input sizes grow.
  3. **Handling Unknown Complexities**: When theoretical time complexity is unknown, the doubling hypothesis gives an approximate understanding of the algorithm’s performance.
- Limitations
  - **Non-polynomial Complexities**: The method works best for polynomial complexities. It might not be accurate for logarithmic ($O(log n)$) or exponential ($O(2^n)$) complexities.
  - **Irregular Behavior**: If the algorithm has irregular performance across different input sizes due to factors like caching, the results may not accurately reflect the true time complexity.

## Mathematical Models

### Arithmetic Series Sum Formula

The sum of an arithmetic series with consecutive numbers is given by the formula:

$$
S = \frac{n}{2} \times (a + l)
$$

- where:
  - n is the number of terms,
  - a is the first term,
  - l is the last term.

$$
S = \frac{N}{2} \times (0 + (N-1)) = \frac{1}{2}N(N-1)
$$

The formula $\frac{1}{2}N(N-1)$ is also the same as the binomial coefficient $\binom{N}{2}$ , which counts the number of ways to choose 2 items from N distinct items. The binomial coefficient is calculated as:

$$
\binom{N}{2} = \frac{N(N-1)}{2}
$$

Hence

$$
0 + 1 + 2 + ... + (N - 1) = \frac{1}{2}N(N-1) = \binom{N}{2}
$$

### Triple `for` loops

How many array accesses does the following code fragment make as a function of n?
(Assume the compiler does not optimize away any array accesses in the innermost loop.)

```java
int sum = 0;
for (int i = 0; i < n; i++)                 // Loop 1: runs n times
    for (int j = i+1; j < n; j++)            // Loop 2: runs (n - i - 1) times
        for (int k = 1; k < n; k = k*2)      // Loop 3: runs log₂(n) times
            if (a[i] + a[j] >= a[k]) sum++;  // Three array accesses in this statement
```

$$
\frac{3}{2}n^2lgn
$$

Not all triple loops have cubic running times. For a given value of i and j, the kk-loop requires only $3lg ⁡n$ array access. As in the 2-SUM and 3-SUM analysis, the number of times the kk-loop is executed is $\binom{N}{2}∼\frac{1}{2}n^2$.

#### Key Observations

1.  Outer Loop (i-loop): This runs from i = 0 to i = n - 1, which means it runs n times.
2.  Middle Loop (j-loop): For each value of i, this loop runs from j = i + 1 to j = i + 1. Therefore, the number of iterations of this loop for a given i is n - i - 1. Summing over all values of i, the total number of times the j-loop runs is the sum of￼(n - i - 1) for i = 0 to i = n-1, which is equivalent to $\binom{n}{2} \approx \frac{1}{2} n^2$.
3.  Inner Loop (k-loop): For each combination of i and j, the ￼k-loop runs from k=1 to k&lt;n, where k doubles in each iteration. So, it runs $log_2(n)$ times (specifically, $\lfloor \log_2(n) \rfloor$).

- Array Accesses:
  - Inside the innermost loop, we have a statement:
  - `if (a[i] + a[j] >= a[k]) sum++;`
- This statement involves three array accesses:
  - One access for $a[i]$,
  - One for $a[j]$,
  - One for $a[k]$.
- So, every time the innermost loop runs, there are 3 array accesses.

#### Total Number of Array Accesses

- Now, let’s calculate the total number of array accesses based on how many times each loop runs.
  - The outer i-loop runs n times.
  - For each iteration of the i-loop, the j-loop runs $\frac{n(n-1)}{2}$ times, or approximately $\frac{1}{2} n^2$ times.
  - For each combination of i and j, the k-loop runs $\log_2(n)$ times.

Thus, the total number of innermost loop executions is approximately $\frac{1}{2} n^2 \log_2(n)$. Since each execution of the innermost loop performs 3 array accesses, the total number of array accesses is:
￼

$$
\text{Total Array Accesses} \approx 3 \times \frac{1}{2} n^2 \log_2(n) = \frac{3}{2} n^2 \log_2(n)
$$

## Theory Of Algorithms

### Commonly-Used Notations

| notation  |          provides          | example |                shorthand for                |          used to          |
| :-------: | :------------------------: | :-----: | :-----------------------------------------: | :-----------------------: |
|   Tilde   |        leading term        | ~10 N²  | 10 N², 10 N² + 22 N log N, 10 N² + 2 N + 37 | provide approximate model |
| Big Theta | asymptotic order of growth |  Θ(N²)  |     ½ N², 10 N², 5N² + 22 N log N + 3N      |    classify algorithms    |
|  Big Oh   |     Θ(N²) and smaller      |  O(N²)  |        10 N², 100 N, 22 N log N + 3N        |   develop upper bounds    |
| Big Omega |      Θ(N²) and larger      |  Ω(N²)  |       ½ N², N⁵, N³ + 22 N log N + 3N        |   develop lower bounds    |

- The table describes different forms of quadratic growth, with constants and lower-order terms removed when simplifying to $Θ(N^2)$.
- This shows that even functions with slower growth rates (like $O(N)$ or $O(N log N)$) can still be represented by $O(N^2)$ as an upper bound.
- These functions either grow at least as fast as $N^2$ , or faster.
- In asymptotic analysis, constants and lower-order terms don’t matter for very large N , so when classifying algorithms, we simplify functions into standard forms using these notations.
- **Common mistake**: Interpreting big-Oh as an approximate model
- This course focuses on approximate models: use Tilde-notation

### Common Mistake

- Using big-O notation as an approximate model is a common mistake because big-O notation provides an upper bound on the running time of an algorithm. It does not give an exact measure of the algorithm's performance. Big-O notation only tells us how the running time grows as the input size increases. It ignores constant factors and lower-order terms, which can significantly affect the actual running time.
- In other words, big-O notation provides a worst-case scenario for the algorithm's performance, but it does not capture the nuances of the algorithm's behavior in different situations. It is important to remember that big-O notation is a tool for classifying algorithms based on their growth rates, not for precise performance prediction.
- To accurately predict performance and compare algorithms, a closer analysis is required, taking into account constant factors and lower-order terms. This analysis goes beyond the scope of big-O notation and requires a more detailed understanding of the algorithm and the specific problem it solves.

### Which of the following functions is $O(n^3)$?

1.  $11n + 15 \log n + 100$
2.  $\frac{1}{3}n^2$:
3.  $25,000n^3$

Ans: All of the above
Recall that big-Oh notation provides only an upper bound on the growth rate of a function as n gets large. In this course, we primarily use tilde notation because it more accurately describes the function—it provides both an upper and lower bound on the function as well as the coefficient of the leading term.

- Explanation:
  - Big-O notation is used to provide an upper bound on the growth rate of a function as the input size ￼ becomes large. It describes the worst-case scenario, helping us understand the maximum time or space an algorithm might need.
  - For example, if an algorithm has a time complexity of $O(n^2)$, it means the time required will not grow faster than $O(n^2)$￼for large $n$, though it could be smaller.
- The Multiple-Choice Question:

1. ￼$11n + 15 \log n + 100$: This function grows linearly in $n$ with a logarithmic component $\log n$. This is an example of a time complexity that could be expressed as $O(n)$ because the linear term dominates as $n$ grows large.
2. $\frac{1}{3}n^2$: This is a quadratic function, so its growth rate is proportional to $n^2$. The constant $\frac{1}{3}$￼is ignored in Big-O notation, so this function is $O(n^2)$.
3. $25,000n^3$: This is a cubic function, which means its growth is proportional to $n^2$. Even though the constant 25,000 is large, in Big-O notation, we drop constants, so the complexity is $O(n^3)$.
4. All of the above (the correct answer): All the given functions represent valid examples of Big-O notation. Even though they have different leading terms (linear, quadratic, and cubic), they can all be expressed in Big-O notation, and each has an upper bound related to their leading term. For the first function, the leading term is linear, so it’s $O(n)$. For the second, it’s quadratic, so it’s O(n^2). For the third, it’s cubic, so it’s O(n^3).

- The Big-O notation provides an upper bound on the growth rate of a function. This means it captures the worst-case performance as ￼ gets large, disregarding constants and lower-order terms.
- It also mentions tilde notation, which is more precise because it gives both an upper and lower bound on the function, taking into account the exact coefficient of the leading term. For example, $\tilde{O}(n^2)$ would include the exact factors like $\frac{1}{3}$ in $\frac{1}{3}n^2$, while Big-O only gives $O(n^2)$.

## Memory

- How much memory (in bytes) does a `WeightedQuickUnionUF` object use as a function of the number of elements $n$?
  - $\sim8 n$
  - It contains two integer arrays as instance variables, each of which consumes $\sim4 n$ bytes. (The object overhead is negligible as $n$ gets large.)

# Union-Find

## Derivation of Modern Computational Capability

The derivation of modern computational capability, particularly the approximation of $10^9$ operations per second, comes from a combination of observations regarding advancements in hardware, specifically in processors, memory, and overall system architecture. Let’s break down how we arrive at this rough estimate of $10^9$ (1 billion) operations per second.

### Factors in Deriving Modern Computational Capability

#### 1. Processor Speeds (Clock Frequency)

- **Clock frequency** refers to how many cycles a processor can execute per second, typically measured in **Hertz (Hz)**. Modern processors (as of 2020s) typically have clock frequencies ranging between **$2 GHz$ to $5 GHz$**, which means they execute between 2 billion to 5 billion clock cycles per second.
  - $1 GHz = 10^9$ cycles per second.
- While not every clock cycle directly translates to a complete operation (some operations take more than one cycle), for rough estimates, we assume **1 operation per clock cycle** on average for simplicity.

#### 2. Multi-core Processors

- Most modern processors have **multiple cores** (typically between 4 and 64 for consumer-grade processors), which allows them to perform multiple operations simultaneously. In **high-performance computing (HPC)** or **cloud-based servers**, systems often use processors with **hundreds of cores**.

  For example, with an **8-core** processor, if each core operates at **$2 GHz$**, the system can theoretically perform 8 times 2 times $10^9 = 16$ times $10^9$ operations per second. Even for a single-core processor operating at $2-5 GHz$, we still approach the rough standard of $10^9$ operations per second.

#### 3. Memory Access and Bandwidth

- Modern systems have **memory access speeds** that allow reading and writing large amounts of data in very short time intervals. Main memory bandwidth (RAM) is measured in **gigabytes per second (GB/s)**, and high-end systems can achieve **up to 100 GB/s** or more.
  - A typical word in memory is 4 bytes (32-bit) or 8 bytes (64-bit), so accessing **1 billion 8-byte words** requires **8 GB** of memory bandwidth.
  - If the memory subsystem can handle 100 GB/s, it can touch **all 1 billion words** (8 GB) in a fraction of a second.

#### 4. Parallelism and Pipelining

- Modern processors use techniques such as **instruction pipelining**, **superscalar execution**, and **out-of-order execution** to improve efficiency, effectively allowing multiple instructions (operations) to be processed at the same time, which boosts the number of operations executed per second.
  - **Pipelining** breaks down instructions into smaller steps, and while one instruction is executing, another can begin, improving throughput.
  - **Parallelism** (including vectorized operations, multiple cores, and specialized hardware like GPUs) enables systems to execute many operations concurrently.

### Summary of Derivation

1. **Processor Clock Speed**: Modern CPUs run at $2-5 GHz$, meaning $2-5 \text{times} 10^9$ clock cycles per second.
2. **Multi-core and Parallelism**: With multi-core processors, multiple operations can be executed simultaneously. A typical system can achieve around $10^9$ effective operations per second (more in high-performance systems).
3. **Memory Bandwidth**: With main memory bandwidths reaching 100 GB/s or more, systems can touch all 1 billion words of memory in roughly 1 second.

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

- It takes $N^2$ array accesses to process a sequence of N union commands on N objects

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
  - $10^9$ operations per second.
  - $10^9$ words of main memory.
  - Touch all words in approximately 1 second.
- Ex. Huge problem for quick-find.
  - $10^9$ union commands on $10^9$ objects.
  - Quick-find takes more than $10^18$ operations.
  - 30+ years of computer time!

$$
\frac{10^{18} \text{ operations}}{10^9 \text{ operations per second}} = 10^9 \text{ seconds.}
$$

Convert to years:

$$
10^9 \text{ seconds} \div (60 \times 60 \times 24 \times 365) \approx 31.7 \text{ years.}
$$

## Quick Union (lazy approach)

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

## Weighting

### Illustration 1

```
   i    0   1   2   3   4   5   6   7   8   9

union(4,3)
        0   1   2   4       5   6   7   8   9
                      → 3

union(3,8)
        0   1   2   4       5   6   7   9
                      → 3
                      → 8

union(6,5)
        0   1   2   4       6       7   9
                      → 3     → 5
                      → 8

union(9,4)
        0   1   2   4       6       7
                      → 3     → 5
                      → 8
                      → 9

union(2,1)
        0   2       4       6       7
              → 1     → 3     → 5
                      → 8
                      → 9

union(5,0)
        2       4       6       7
         → 1      → 3     → 5
                  → 8     → 0
                  → 9

union(7,2)
        2       4       6
         → 1      → 3     → 5
         → 7      → 8     → 0
                  → 9

union(6,1)
        4       6
          → 3     → 5
          → 8     → 0
          → 9     → 2
                      → 1
                      → 7

union(7,3)
        6
          → 5
          → 0
          → 2
              → 1
              → 7
          → 4
              → 3
              → 8
              → 9

       0   1   2   3   4   5   6   7   8   9
     |---|---|---|---|---|---|---|---|---|---|
id[] | 6 | 2 | 6 | 4 | 6 | 6 | 6 | 2 | 4 | 4 |
     |---|---|---|---|---|---|---|---|---|---|
```
