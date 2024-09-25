- [Analysis of Algorithms](#analysis-of-algorithms)
  - [Observations](#observations)
    - [Log log plot](#log-log-plot)
    - [Doubling hypothesis](#doubling-hypothesis)
    - [Experimental Algorithmic](#experimental-algorithmic)
  - [Mathematical Models](#mathematical-models)
    - [Arithmetic Series Sum Formula](#arithmetic-series-sum-formula)
    - [Triple `for` loops](#triple-for-loops)
      - [Key Observations](#key-observations)
      - [Total Number of Array Accesses](#total-number-of-array-accesses)
  - [Order-of-Growth Classifications](#order-of-growth-classifications)
    - [Cost of basic operations](#cost-of-basic-operations)
    - [Problems size solvable in minutes](#problems-size-solvable-in-minutes)
  - [Theory of Algorithms](#theory-of-algorithms)
    - [Types of Analysis](#types-of-analysis)
    - [Algorithm Design Approach](#algorithm-design-approach)
    - [Which of the following functions is $O(n^3)$?](#which-of-the-following-functions-is-on3)
  - [Memory](#memory)
    - [Typical memory usage for primitive types and arrays](#typical-memory-usage-for-primitive-types-and-arrays)
    - [Typical memory usage for objects in Java](#typical-memory-usage-for-objects-in-java)
    - [Typical memory usage summary](#typical-memory-usage-summary)
- [Union-Find](#union-find)
  - [Summary](#summary)
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
  - [Quick Union with Path Compression](#quick-union-with-path-compression)
  - [Union-find applications](#union-find-applications)

# Analysis of Algorithms

- **Reasons**:
  - Predict performance
  - Compare algorithms
  - Provide guarantees
- **Fast Fourier Transform (FFT) algorithm**: N log N steps
- **Barnes-Hut algorithm**: N log N steps
- **Scientific method**
  - Observe some feature of the natural world.
  - Hypothesize a model that is consistent with the observations.
  - Predict events using the hypothesis.
  - Verify the predictions by making further observations.
  - Validate by repeating until the hypothesis and observations agree.
- **Principles**
  - Experiments must be reproducible.
  - Hypotheses must be falsifiable.
- Suppose that n equals 1 million. Approximately how much faster is an algorithm that performs n lg⁡ n operations versus one that performs n<sup>2</sup> operations? Recall that lg⁡ is the base-2 logarithm function.
  - n<sup>2</sup>/(n lg n)= n/lg n = 1,000,000 / lg(1,000,000).
  - Since 2<sup>20</sup> is approximately 1 million, we obtain approximately 50,000.

## Observations

- 3-sum
  - brute force using 3 for loops
  - Empirical Analysis

|   N   | time(seconds) |
| :---: | :-----------: |
|  250  |      0.0      |
|  500  |      0.0      |
| 1,000 |      0.1      |
| 2,000 |      0.8      |
| 4,000 |      6.4      |
| 8,000 |     51.1      |

### Log log plot

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

### Doubling hypothesis

|   N   | time (seconds) | ratio | lg ratio |
| :---: | :------------: | :---: | :------: |
|  250  |      0.0       |   -   |    -     |
|  500  |      0.0       |  4.8  |   2.3    |
| 1,000 |      0.1       |  6.9  |   2.8    |
| 2,000 |      0.8       |  7.7  |   2.9    |
| 4,000 |      6.4       |  8.0  |   3.0    |
| 8,000 |      51.1      |  8.0  |   3.0    |

The Doubling Hypothesis is a technique used in algorithm analysis to estimate time complexity when you’re unsure of the exact relationship between input size and execution time. The method involves running an algorithm with input sizes that double each time and observing how the running time changes. It assumes that the time complexity follows a power-law relationship, typically of the form T(n) = O(n<sup>k</sup>).

- How the Doubling Hypothesis Works:
  1. Run the algorithm with an input size n, and record the running time T(n).
  2. Double the input size to 2n, and record the new running time T(2n).
  3. Compare the two running times:
     - If T(2n) is approximately 2T(n), the time complexity is likely O(n).
     - If T(2n) is approximately 4T(n), the time complexity is likely O(n<sup>2</sup>).
     - If T(2n) is approximately 8T(n), the time complexity is likely O(n<sup>3</sup>), etc.
- The Key Idea
  - The doubling hypothesis assumes a polynomial relationship between input size and execution time. By doubling the input size and examining how the running time changes, you can infer the degree of the polynomial that governs the time complexity.
- Example: Let’s analyze an algorithm with the following running times:
  - For input size n = 100, the time is T(100) = 1 second.
  - For input size n = 200, the time is T(200) = 2 seconds.
  - For input size n = 400, the time is T(400) = 4 seconds.
- Here, the running time doubles when the input size doubles, suggesting a time complexity of approximately O(n).
  - However, if you observe:
    - T(100) = 1 second.
    - T(200) = 4 seconds.
    - T(400) = 16 seconds.
  - This suggests that the running time quadruples when the input size doubles, implying a time complexity of O(n<sup>2</sup>).
- Why Use the Doubling Hypothesis?
  1. **Empirical Estimation**: It’s a practical way to estimate time complexity based on empirical observations, especially when formal analysis is difficult.
  2. **Benchmarking Algorithms**: Provides a quick way to compare the performance of different algorithms by observing how they scale as input sizes grow.
  3. **Handling Unknown Complexities**: When theoretical time complexity is unknown, the doubling hypothesis gives an approximate understanding of the algorithm’s performance.
- Limitations
  - **Non-polynomial Complexities**: The method works best for polynomial complexities. It might not be accurate for logarithmic (O(log n)) or exponential (O(2<sup>n</sup>)) complexities.
  - **Irregular Behavior**: If the algorithm has irregular performance across different input sizes due to factors like caching, the results may not accurately reflect the true time complexity.

### Experimental Algorithmic

- System independent effects
  - Algorithms
  - Input data
- System dependent effects
  - Hardware: CPU, memory, cache, …
  - Software: compiler, interpreter, garbage collector, …
  - System: operating system, network, other apps, …
- Bad news: Difficult to get precise measurements.
- Good news: Much easier and cheaper than other sciences.

---

Suppose that you make the following observations of the running time T(n) (in seconds) of a program as a function of the input size n. Which of the following functions best models the running time T(n)?

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

Given the observation that the running time roughly quadruples every time n doubles, it indicates that the best model for the running time T(n) is likely a quadratic function of the form T(n) = O(n<sup>2</sup>).

We assume T(n)=a n<sup>b</sup> for some constants a and b.

As we double the input size n, the running time approximately quadruples, indicating a quadratic algorithm or b=2. Plugging in T(64000)=20.5 and solving for a, we obtain a=20.5/64000<sup>2</sup>≈5.0×10<sup>−9</sup>.

## Mathematical Models

- Total running time: sum of cost × frequency for all operations.
  - Need to analyze program to determine set of operations.
  - Cost depends on machine, compiler.
  - Frequency depends on algorithm, input data.

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

Conclusion:

The total number of array accesses made by this code is approximately ￼. This matches the formula you provided.

## Order-of-Growth Classifications

| order of growth |     name     |    description     |      example      | T(2N)/T(N) |
| :-------------: | :----------: | :----------------: | :---------------: | :--------: |
|        1        |   constant   |     statement      |  add two numbers  |     1      |
|      log N      | logarithmic  |   divide in half   |   binary search   |     ~1     |
|        N        |    linear    |        loop        | find the maximum  |     2      |
|     N log N     | linearithmic | divide and conquer |    merge sort     |     ~2     |
|  N<sup>2</sup>  |   quadric    |    double loop     |  check all pairs  |     4      |
|  N<sup>3</sup>  |    cubic     |    triple loop     | check all triples |     8      |
|  2<sup>N</sup>  | exponential  | exhaustive search  | check all subsets |    T(N)    |

### Cost of basic operations

|      operation       |       example       |   nanoseconds   |
| :------------------: | :-----------------: | :-------------: |
| variable declaration |        int a        |        c        |
| assignment statement |        a = b        |        c        |
|   integer compare    |        a < b        |        c        |
| array element access |        a[i]         |        c        |
|     array length     |      a.length       |        c        |
| 1D array allocation  |     new int[N]      |       c N       |
| 2D array allocation  |    new int[N][N]    | c N<sup>2</sup> |
|    string length     |     s.length()      |        c        |
| substring extraction | s.substring(N/2, N) |        c        |
| string concatenation |        s + t        |       c N       |

### Problems size solvable in minutes

|  growth rate  |         1970s         |      1980s       |        1990s         |        2000s         |
| :-----------: | :-------------------: | :--------------: | :------------------: | :------------------: |
|       1       |          any          |       any        |         any          |         any          |
|     log N     |          any          |       any        |         any          |         any          |
|       N       |       millions        | tens of millions | hundreds of millions |       billions       |
|    N log N    | hundreds of thousands |     millions     |       millions       | hundreds of millions |
| N<sup>2</sup> |       hundreds        |    thousands     |      thousands       |  tens of thousands   |
| N<sup>3</sup> |        hundred        |     hundreds     |       thousand       |      thousands       |
| 2<sup>N</sup> |          20           |       20s        |         20s          |          30          |

**Need linear or linearithmic algorithms to keep pace with Moore's law.**

## Theory of Algorithms

- **Goals**
  - Establish “difficulty” of a problem.
  - Develop “optimal” algorithms.
- **Approach**
  - Suppress details in analysis: analyze “to within a constant factor”.
  - Eliminate variability in input model by focusing on the worst case.
- **Optimal Algorithm**
  - Performance guarantee (to within a constant factor) for any input.
  - No algorithm can provide a better performance guarantee.

### Types of Analysis

- **Best case**: Lower bound on cost.
  - Determined by “easiest” input.
  - Provides a goal for all inputs.
- **Worst case**: Upper bound on cost.
  - Determined by “most difficult” input.
  - Provides a guarantee for all inputs.
- **Average case**: Expected cost for random input.
  - Need a model for “random” input.
  - Provides a way to predict performance.

| notation  |          provides          | example |                shorthand for                |          used to          |
| :-------: | :------------------------: | :-----: | :-----------------------------------------: | :-----------------------: |
|   Tilde   |        leading term        | ~10 N²  | 10 N², 10 N² + 22 N log N, 10 N² + 2 N + 37 | provide approximate model |
| Big Theta | asymptotic order of growth |  Θ(N²)  |     ½ N², 10 N², 5N² + 22 N log N + 3N      |    classify algorithms    |
|  Big Oh   |     Θ(N²) and smaller      |  O(N²)  |        10 N², 100 N, 22 N log N + 3N        |   develop upper bounds    |
| Big Omega |      Θ(N²) and larger      |  Ω(N²)  |       ½ N², N⁵, N³ + 22 N log N + 3N        |   develop lower bounds    |

- These describe different forms of quadratic growth, with constants and lower-order terms removed when simplifying to Θ(N²).
- This shows that even functions with slower growth rates (like O(N) or O(N log N) ) can still be represented by O(N²) as an upper bound.
- These functions either grow at least as fast as N^2 , or faster.
- In asymptotic analysis, constants and lower-order terms don’t matter for very large N , so when classifying algorithms, we simplify functions into standard forms using these notations.
- **Common mistake**: Interpreting big-Oh as an approximate model
- This course focuses on approximate models: use Tilde-notation

> Using big-O notation as an approximate model is a common mistake because big-O notation provides an upper bound on the running time of an algorithm. It does not give an exact measure of the algorithm's performance. Big-O notation only tells us how the running time grows as the input size increases. It ignores constant factors and lower-order terms, which can significantly affect the actual running time.
>
> In other words, big-O notation provides a worst-case scenario for the algorithm's performance, but it does not capture the nuances of the algorithm's behavior in different situations. It is important to remember that big-O notation is a tool for classifying algorithms based on their growth rates, not for precise performance prediction.
>
> To accurately predict performance and compare algorithms, a closer analysis is required, taking into account constant factors and lower-order terms. This analysis goes beyond the scope of big-O notation and requires a more detailed understanding of the algorithm and the specific problem it solves.

### Algorithm Design Approach

- **Start**
  - Develop an algorithm.
  - Prove a lower bound.
- **Gap?**
  - Lower the upper bound (discover a new algorithm).
  - Raise the lower bound (more difficult).
- **Golden Age of Algorithm Design**
  - 1970s-.
  - Steadily decreasing upper bounds for many important problems.
  - Many known optimal algorithms.
- **Caveats**
  - Overly pessimistic to focus on worst case?
  - Need better than “to within a constant factor” to predict performance.

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

- **Bit**: 0 or 1
- **Byte**: 8 bits
- **Megabyte (MB)**: 1 million or 220 bytes (NIST or most computer scientist)
- **Gigabyte (GB)**: 1 billion or 230 bytes (NIST or most computer scientist)
- **64-bit machine**: We assume a 64-bit machine with 8 byte pointers.
  - Can address more memory.
  - Pointers use more space.

### Typical memory usage for primitive types and arrays

|  type   | bytes |
| :-----: | :---: |
| boolean |   1   |
|  byte   |   1   |
|  char   |   2   |
|   int   |   4   |
|  float  |   4   |
|  long   |   8   |
| double  |   8   |

for one-dimensional arrays

|   type   |  bytes  |
| :------: | :-----: |
|  char[]  | 2N + 24 |
|  int[]   | 4N + 24 |
| double[] | 8N + 24 |

for two-dimensional arrays

|  char[][]  | ~ 2 M N |
| :--------: | :-----: |
|  int[][]   | ~ 4 M N |
| double[][] | ~8 M N  |

### Typical memory usage for objects in Java

- **Object overhead**: 16 bytes
- **Reference**: 8 bytes
- **Padding**: Each object uses a multiple of 8 bytes
- Ex 1: A Date object uses 32 bytes of memory

```java
public class Date
{
  private int day;
  private int month;
  private int year;
...
}
```

```
 ----------
|  object  |    16 bytes (object overhead)
| overhead |
|   day    |    4 bytes (int)
|  month   |    4 bytes (int)
|   year   |    4 bytes (int)
| padding  |    4 bytes (padding)
 ----------    --------------------
                32 bytes
```

- Ex 2: A virgin String of length $N$ uses ~ $2N$ bytes of memory.

```java
public class Date
{
  private char[] value;
  private int offset;
  private int count;
  private int hash;
...
}
```

```
 ----------
|  object  |    16 bytes (object overhead)
| overhead |
|  value   |    8 bytes (reference to array) 2N + 24 bytes (char[] array)
|  offset  |    4 bytes (int)
|  count   |    4 bytes (int)
|   hash   |    4 bytes (int)
| padding  |    4 bytes (padding)
 ----------    --------------------
                2N + 64 bytes
```

### Typical memory usage summary

- **Total memory usage for a data type value**:
  - **Primitive type**: 4 bytes for int, 8 bytes for double, …
  - **Object reference**: 8 bytes.
  - **Array**: 24 bytes + memory for each array entry.
  - **Object**: 16 bytes + memory for each instance variable + 8 bytes if inner class (for pointer to enclosing class).
  - **Padding**: round up to multiple of 8 bytes.
- **Shallow memory usage**: Don't count referenced objects.
- **Deep memory usage**: If array entry or instance variable is a reference, add memory (recursively) for referenced object.
- How much memory (in bytes) does a `WeightedQuickUnionUF` object use as a function of the number of elements $n$?
  - $\sim8 n$
  - It contains two integer arrays as instance variables, each of which consumes $\sim4 n$ bytes. (The object overhead is negligible as $n$ gets large.)

# Union-Find

- **Steps to developing a usable algorithm**
  - Model the problem.
  - Find an algorithm to solve it.
  - Fast enough? Fits in memory?
  - If not, figure out why.
  - Find a way to address the problem.
  - Iterate until satisfied.

## Summary

- Ex. [109 unions and finds with 109 objects]
- WQUPC reduces time from 30 years to 6 seconds.

|           algorithm            | initialize | union | find | worst-case time |
| :----------------------------: | :--------: | :---: | :--: | :-------------: |
|           quick-find           |     N      |   N   |  1   |       M N       |
|          quick-union           |     N      |   N   |  N   |       M N       |
|          Weighted QU           |     N      | lg N  | lg N |   N + M lg N    |
|     QU + path compression      |     N      |       |      |   N + M lg N    |
| Weighted QU + path compression |     N      |       |      |  N + M lg\* N   |

- **Quick-find defect**.
  - Union too expensive (N array accesses).
  - Trees are flat, but too expensive to keep them flat.
- **Quick-union defect**.
  - Trees can get tall.
  - Find too expensive (could be N array accesses).

## Derivation of Modern Computational Capability

The derivation of modern computational capability, particularly the approximation of 10<sup>9</sup> operations per second, comes from a combination of observations regarding advancements in hardware, specifically in processors, memory, and overall system architecture. Let’s break down how we arrive at this rough estimate of 10<sup>9</sup> (1 billion) operations per second.

### Factors in Deriving Modern Computational Capability

#### 1. Processor Speeds (Clock Frequency)

- **Clock frequency** refers to how many cycles a processor can execute per second, typically measured in **Hertz (Hz)**. Modern processors (as of 2020s) typically have clock frequencies ranging between **2 GHz to 5 GHz**, which means they execute between 2 billion to 5 billion clock cycles per second.
  - 1 GHz = 10^9 cycles per second.
- While not every clock cycle directly translates to a complete operation (some operations take more than one cycle), for rough estimates, we assume **1 operation per clock cycle** on average for simplicity.

#### 2. Multi-core Processors

- Most modern processors have **multiple cores** (typically between 4 and 64 for consumer-grade processors), which allows them to perform multiple operations simultaneously. In **high-performance computing (HPC)** or **cloud-based servers**, systems often use processors with **hundreds of cores**.

  For example, with an **8-core** processor, if each core operates at **2 GHz**, the system can theoretically perform 8 times 2 times 10^9 = 16 times 10^9 operations per second. Even for a single-core processor operating at 2-5 GHz, we still approach the rough standard of 10^9 operations per second.

#### 3. Memory Access and Bandwidth

- Modern systems have **memory access speeds** that allow reading and writing large amounts of data in very short time intervals. Main memory bandwidth (RAM) is measured in **gigabytes per second (GB/s)**, and high-end systems can achieve **up to 100 GB/s** or more.
  - A typical word in memory is 4 bytes (32-bit) or 8 bytes (64-bit), so accessing **1 billion 8-byte words** requires **8 GB** of memory bandwidth.
  - If the memory subsystem can handle 100 GB/s, it can touch **all 1 billion words** (8 GB) in a fraction of a second.

#### 4. Parallelism and Pipelining

- Modern processors use techniques such as **instruction pipelining**, **superscalar execution**, and **out-of-order execution** to improve efficiency, effectively allowing multiple instructions (operations) to be processed at the same time, which boosts the number of operations executed per second.
  - **Pipelining** breaks down instructions into smaller steps, and while one instruction is executing, another can begin, improving throughput.
  - **Parallelism** (including vectorized operations, multiple cores, and specialized hardware like GPUs) enables systems to execute many operations concurrently.

### Summary of Derivation

1. **Processor Clock Speed**: Modern CPUs run at 2-5 GHz, meaning 2-5 times 10^9 clock cycles per second.
2. **Multi-core and Parallelism**: With multi-core processors, multiple operations can be executed simultaneously. A typical system can achieve around 10^9 effective operations per second (more in high-performance systems).
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

## Weighting

- **Weighted quick-union.**
  - Modify quick-union to avoid tall trees.
  - Keep track of size of each tree (number of objects).
  - Balance by linking root of smaller tree to root of larger tree.
- **Data structure**.
  - Same as quick-union, but maintain extra array sz[i] to count number of objects in the tree rooted at i.
- **Find**: Identical to quick-union.
- **Union**: Modify quick-union to:
  - Link root of smaller tree to root of larger tree.
  - Update the sz[] array.

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

## Quick Union with Path Compression

- Just after computing the root of p, set the id of each examined node to point to that root.
- **Two-pass implementation**: add second loop to root() to set the id[] of each examined node to the root.
- **Simpler one-pass variant**: Make every other node in path point to its grandparent (thereby halving path length).

## Union-find applications

- Percolation.
  - When opening one new site in the percolation simulation, how many times is union()union() called?
  - 0, 1, 2, 3, or 4
  - It is called for each neighboring site that is already open. There are 4 possible neighbors, but some of them may not already be open.
- Games (Go, Hex).
- Dynamic connectivity.
- Least common ancestor.
- Equivalence of finite state automata.
- Hoshen-Kopelman algorithm in physics.
- Hinley-Milner polymorphic type inference.
- Kruskal's minimum spanning tree algorithm.
- Compiling equivalence statements in Fortran.
- Morphological attribute openings and closings.
- Matlab's bwlabel() function in image processing.
