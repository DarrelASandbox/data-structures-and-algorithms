- [Elementary Sort](#elementary-sort)
  - [Selection Sort](#selection-sort)
  - [Insertion Sort](#insertion-sort)
  - [Shellsort](#shellsort)
  - [Shuffling](#shuffling)
  - [Convex Hull](#convex-hull)
- [Mergesort](#mergesort)
  - [Bottom-Up Mergesort](#bottom-up-mergesort)
  - [Sorting Complexity](#sorting-complexity)
    - [Upper Bound and Lower Bound](#upper-bound-and-lower-bound)
  - [Comparators](#comparators)
  - [Stability](#stability)
    - [Goal: Removing Duplicates in an Array of Points](#goal-removing-duplicates-in-an-array-of-points)
      - [Understanding "Usefulness" in Terms of Stability and Ordering](#understanding-usefulness-in-terms-of-stability-and-ordering)
      - [Analyzing Each Approach](#analyzing-each-approach)
      - [Summary](#summary)
- [Quicksort](#quicksort)
  - [Selection](#selection)
  - [Duplicate Keys](#duplicate-keys)
  - [System Sorts](#system-sorts)

# Elementary Sort

- Consider the data type `Temperature` defined below. Which of the following required properties of the `Comparable` interface does the `compareTo()` method violate?
  - Antisymmetry
  - Transitivity
  - Totality
  - None of the above
  - Ans: 2
    - Transitivity is violated. Suppose that $a$, $b$, and $c$ refer to objects corresponding to temperatures of ${10.16}^\circ$, ${10.08}^\circ$, and ${10.00}^\circ$, respectively. Then, $a.compareTo(b) <= 0$ and $b.compareTo(c) <= 0$, but $a.compareTo(c) > 0$. For this reason, you must not introduce a fudge factor when comparing two floating-point numbers if you want to implement the `Comparable` interface.

```java
public class Temperature implements Comparable<Temperature> {
    private final double degrees;

    public Temperature(double degrees) {
        if (Double.isNaN(degrees))
            throw new IllegalArgumentException();
        this.degrees = degrees;
    }

    public int compareTo(Temperature that) {
        double EPSILON = 0.1;
        if (this.degrees < that.degrees - EPSILON) return -1;
        if (this.degrees > that.degrees + EPSILON) return +1;
        return 0;
    }
    ...
}
```

- The compareTo() method violates the transitivity property of the Comparable interface.
- **Explanation**:
  - **Transitivity**: If x.compareTo(y) ≤ 0 and y.compareTo(z) ≤ 0, then x.compareTo(z) ≤ 0 should also hold true. However, in the provided implementation, the use of EPSILON could lead to a situation where x.compareTo(y) == 0 and y.compareTo(z) == 0, but x.compareTo(z) != 0. For instance:
    - Let x.degrees = 20.0, y.degrees = 20.05, and z.degrees = 20.1.
    - x.compareTo(y) will return 0 because the difference is less than EPSILON (0.1).
    - y.compareTo(z) will also return 0 for the same reason.
    - However, x.compareTo(z) will return -1 because the difference is greater than EPSILON, violating transitivity.
  - **Antisymmetry**: If x.compareTo(y) == 0, then y.compareTo(x) == 0. The implementation does not violate this rule, as comparisons are based on the degree values, and any symmetrical comparison should yield the same result.
  - **Totality**: For any two Temperature objects x and y, either x.compareTo(y) <= 0 or y.compareTo(x) <= 0 must hold. The implementation also does not violate this property.

## Selection Sort

- How many compares does selection sort make when the input array is already sorted?
  - logarithmic
  - linear
  - quadratic
  - exponential
  - Ans: 3
    - The number of compares and exchanges made by selection sort does not depend on the order of the input.

## Insertion Sort

- How many compares does insertion sort make on an input array that is already sorted?
  - constant
  - logarithmic
  - linear
  - quadratic
  - Ans: 3
    - Each item (except the first) is compared against the item to its left (and to no other items), for a total of $n−1$ compares.

## Shellsort

- How many compares does shellsort (using the $3x+1$ increment sequence) make on an input array that is already sorted?
  - constant
  - logarithmic
  - linear
  - linearithmic
  - Ans: 4
    - Since successive increment values of hh differ by at least a factor of 3, there are $\sim log_{3}n$ increment values. For each increment value $h$, the array is already $h$-sorted so it will make $\sim n$ compares.

## Shuffling

- How many possible permutations are there of a deck of 52 playing cards?
  - $2^{52}$
  - $52⋅52$
  - $52!$
  - $52^{52}$
  - Ans: 3
    - The number of permutations of nn distinct elements is $n!=1×2×…×n$.

## Convex Hull

- What is the maximum number of vertices that can be on the convex hull of a set of $n$ points?
  - constant
  - logarithmic
  - linear
  - linearithmic
  - Ans: 3
    - If the input points are points on the circumference of a circle (or vertices of a regular $n$-gon), then all $n$ points will be on the convex hull.

# Mergesort

- How many compares does mergesort—the pure version without any optimizations—make to sort an input array that is already sorted?
  - constant
  - logarithmic
  - linear
  - linearithmic
  - Ans: 4
    - It makes $\sim \frac{1}{2}n\log_{2}n$ compares, which is the best case for mergesort. We note that the optimized version that checks whether $a[mid]≤a[mid+1]a[mid]≤a[mid+1]$ requires only $n−1$ compares.

## Bottom-Up Mergesort

- How many passes (over the input array) does bottom-up mergesort make in the worst case?
  - constant
  - logarithmic
  - linear
  - linearithmic

## Sorting Complexity

- Under which of the following scenarios does the $Nlg⁡N$ lower bound for sorting apply? Assume that the keys are accessed only through the compareTo() method unless otherwise specified.
  - five distinct keys
  - no two keys are equal
  - keys in descending order
  - keys are strings and accessed via charAt() instead of compareTo()
  - Ans: 2

### Upper Bound and Lower Bound

To determine the **upper bound** and **lower bound** of an algorithm, you can follow these steps:

- **Understand the Algorithm's Structure**
  - Identify the primary operations the algorithm performs (e.g., comparisons, assignments).
  - Break down the algorithm into its **core steps** and **loops**, noting how many times each core operation is likely to execute relative to the input size $N$.
- **Define the Cost Model**
  - Choose a **cost model** based on the primary operations relevant to the problem (e.g., comparisons in sorting, arithmetic operations in mathematical algorithms).
  - Decide which operations to count (like comparisons or additions) as the cost metric for the algorithm.
- **Analyze the Upper Bound**
  - **Identify the Worst Case**: Determine the input size and conditions that make the algorithm perform the **maximum number of operations**.
  - **Use Asymptotic Analysis**: Apply Big-O notation to describe how the time or space complexity grows as $N$ becomes large.
  - **Calculate Complexity**:
    - For loops, analyze the complexity by summing or multiplying the cost of repeated operations.
    - For recursive algorithms, derive a recurrence relation (e.g., $T(N) = 2T(N/2) + O(N)$ for divide-and-conquer) and solve it using methods like the **Master theorem**, **recurrence tree**, or **substitution method**.
  - The result is an **upper bound**, which represents the maximum cost the algorithm incurs in the worst case.
- **Example for Upper Bound**:
  - In a nested loop where each loop iterates $N$ times, the upper bound complexity is $O(N^2)$.
  - For a recursive divide-and-conquer algorithm (e.g., Mergesort), the recurrence relation $T(N) = 2T(N/2) + O(N)$ yields an upper bound of $O(N \log N)$.
- **Analyze the Lower Bound**
  - **Identify the Best Case**: Determine the conditions that make the algorithm perform the **minimum number of operations**.
  - Calculate the **minimum work** required, either by analyzing best-case inputs or by proving a **lower limit** on operations for any possible input.
  - A **proof of the lower bound** typically involves showing that no algorithm in the given model (e.g., comparison-based sorting) can do better than the bound you are proposing.
- **Example for Lower Bound**:
  - In comparison-based sorting, the lower bound is $\Omega(N \log N)$ because any sorting algorithm needs at least $N \log N$ comparisons in the worst case to order $N$ elements.
  - For algorithms with simple iteration or traversal, the lower bound is often $\Omega(N)$ since each element must be processed at least once.
- **Check for Optimality**
  - Once you have the upper and lower bounds, determine if they match. If they are the same (e.g., both $O(N \log N)$ and $\Omega(N \log N)$ for sorting), the algorithm is **optimal** within that cost model.
- **Techniques to Aid Complexity Analysis**
  - **Amortized Analysis**: For algorithms where the cost per operation varies, use amortized analysis to determine the average cost over a sequence of operations.
  - **Master Theorem**: Useful for analyzing divide-and-conquer algorithms.
  - **Big-O Notation**: For upper bound; **Big-Ω Notation**: For lower bound; **Big-Θ Notation**: For exact complexity (when upper and lower bounds match).
- **Practical Example: Finding Bounds for Binary Search**
  - **Upper Bound**:
    - Each step divides the array size $N$ by 2, leading to a recurrence $T(N) = T(N/2) + O(1)$.
    - This resolves to $O(\log N)$, making $O(\log N)$ the upper bound.
  - **Lower Bound**:
    - Binary search must check at least one element per step and requires $\log N$ steps in the worst case, so the lower bound is $\Omega(\log N)$.
  - **Optimality**:
    - Since the upper and lower bounds match at $\Theta(\log N)$, binary search is optimal for searching a sorted array.

## Comparators

- Which of the following is a compelling reason to implement the Comparator interface instead of the ComparableComparable interface in Java?
  - easier to use `Comparator` with `Arrays.sort()`
  - `Comparator` supports multiple orderings of a given data type
  - easier to implement a total order with `Comparator` than `Comparable`
  - All of the above
  - Ans: 2

## Stability

- Given an array of points, which of the following approaches would be least useful for removing duplicate points? Assume the point data type has the following three orders:
  - A natural order that compares by $x$-coordinate and breaks ties by $y$-coordinate.
  - One comparator that compares by $x$-coordinate; another by $y$-coordinate.
- Note: quicksort is an efficient, but unstable, sorting algorithm.
  - quicksort by the natural order
  - quicksort by $x$-coordinate; mergesort by $y$-coordinate
  - mergesort by $x$-coordinate; quicksort by $y$-coordinate
  - mergesort by $x$-coordinate; mergesort by $y$-coordinate
  - Ans: 3
    - Since quicksort is not stable, if you mergesort by $x$-coordinate and then quicksort by $y$-coordinate, there is no guarantee that equal points will be adjacent in the sorted order.

Great question! Let's break down what "least useful" means in this context, as well as how to evaluate the usefulness of each approach.

### Goal: Removing Duplicates in an Array of Points

The task is to remove duplicate points from an array. For duplicates to be easily identified and removed, the array needs to be sorted in a way that places identical points next to each other. The "usefulness" of each sorting approach depends on how effectively it groups duplicates together.

#### Understanding "Usefulness" in Terms of Stability and Ordering

- **Stability**: A stable sorting algorithm keeps the relative order of elements that are considered equal. This is important for duplicate detection because, if we sort the points by one property and then sort by another, we want points with identical values to stay together in a predictable order.
- **Ordering**: Since we’re dealing with points in two dimensions ($x$- and $y$-coordinates), our goal is to find an order that brings identical points (same $x$ and $y$ values) next to each other in the sorted list.

An approach is "useful" if it **keeps all duplicates adjacent** in the final sorted order, making it easy to detect and remove duplicates. An approach is "least useful" if it **fails to consistently place duplicates next to each other** due to the lack of stability or improper ordering.

#### Analyzing Each Approach

1. **Quicksort by Natural Order**:

   - **Natural order** compares first by $x$-coordinate, then by $y$-coordinate.
   - **Quicksort** is not stable, so points with the same $x$- and $y$-coordinates may not end up adjacent.
   - **Usefulness**: Low. Quicksort’s instability can scatter duplicates.

2. **Quicksort by $x$-coordinate; Mergesort by $y$-coordinate**:

   - Sorting by $x$-coordinate first using **quicksort** is unstable, meaning points with the same $x$-coordinate may not be grouped together reliably.
   - **Mergesort** by $y$-coordinate, which is stable, doesn’t help if the points were already scattered by the initial quicksort.
   - **Usefulness**: Low, for similar reasons to approach 1.

3. **Mergesort by $x$-coordinate; Quicksort by $y$-coordinate**:

   - Sorting by $x$-coordinate first using **mergesort** groups points by $x$-coordinate in a stable manner.
   - However, **quicksort** on $y$-coordinate is unstable, meaning points with identical $x$ and $y$ coordinates may not stay adjacent.
   - **Usefulness**: Low, because quicksort on $y$-coordinate undoes the grouping of duplicates, making it the **least useful** approach.

4. **Mergesort by $x$-coordinate; Mergesort by $y$-coordinate**:
   - Both **mergesorts** are stable, so sorting by $x$-coordinate first will keep points with the same $x$-coordinate together.
   - Sorting by $y$-coordinate next will maintain the relative order of points with the same $x$-coordinate, ensuring that duplicates end up adjacent.
   - **Usefulness**: High. This approach reliably places duplicates next to each other, making it easy to identify and remove them.

#### Summary

The "least useful" approach is the one that fails to group duplicates consistently due to **instability** or improper ordering.

**Answer**: Approach **3** is the least useful because it uses mergesort (stable) for the $x$-coordinate but then quicksort (unstable) for the $y$-coordinate, which can scatter duplicates, defeating the purpose of sorting for duplicate removal.

# Quicksort

- What is the expected running time of randomized quicksort to sort an array of $n$ distinct keys when the array is already sorted?
  - linear
  - linearithmic
  - quadratic
  - exponential
  - Ans: 2
    - The expected number of compares is $\sim 2nlnn$.
    - Without shuffling, the worst case will be quadratic

## Selection

- What is the expected running time to find the median of an array of $n$ distinct keys using randomized quickselect?
  - constant
  - linear
  - linearithmic
  - quadratic
  - Ans: 2
    - This is the main advantage of quickselect over quicksort—the expected number of compares is linear instead of linearithmic.

## Duplicate Keys

- Using 3-way partitioning with quicksort is most effective when the input array has which of the following properties?
  - all items distinct
  - a few distinct items
  - items in strictly increasing order
  - items in strictly decreasing order
  - Ans: 2
    - The goal of 3-way partitioning is to speed up quicksort in the presence of duplicate keys.

## System Sorts

- Why does `Arrays.sort()` in Java use mergesort instead of quicksort when sorting reference types?
  - stability
  - $nlog⁡n$ guaranteed performance
  - both A and B
  - neither A nor B
  - Ans: 2
    - The Java API for `Arrays.sort()` for reference types requires that it is stable and guarantees `nlog⁡n` performance. Neither of these are properties of standard quicksort.
    - Quicksort uses less memory and is faster in practice on typical inputs (and is typically used by `Arrays.sort()` when sorting primitive types, where stability is not relevant).
- Why does `Arrays.sort()` in Java use quicksort instead of mergesort when sorting primitive types?
  - uses less memory on typical inputs
  - faster on typical inputs
  - both A and B
  - neither A nor B
  - Ans: 3
    - Quicksort is in-place and is typically the fastest general-purpose sorting algorithm in practice.
