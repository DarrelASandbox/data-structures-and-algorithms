- [Elementary Sort](#elementary-sort)
  - [Selection Sort](#selection-sort)
  - [Insertion Sort](#insertion-sort)
  - [Shellsort](#shellsort)
  - [Shuffling](#shuffling)
  - [Convex Hull](#convex-hull)

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
    - Since successive increment values of hh differ by at least a factor of 3, there are $\sim log⁡3n$ increment values. For each increment value $h$, the array is already $h$-sorted so it will make $\sim n$ compares.

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
