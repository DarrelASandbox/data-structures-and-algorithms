
/* 
Knuth's method refers to a variety of techniques developed by Donald Knuth, one of the most influential figures in computer science. One specific technique commonly referred to as "Knuth's method" is related to **random sampling without replacement**. Here’s a detailed explanation of that specific method, often called **Knuth’s Algorithm S**:

### Knuth's Method for Random Sampling (Algorithm S)

**Problem**: Given a large population of `N` items, how do you randomly select `k` items (where `k <= N`) without replacement in an efficient way, such that each subset of `k` items has an equal probability of being selected?

### Traditional Approach:
A brute-force approach would involve generating a list of all `N` items, randomly shuffling them, and then selecting the first `k` items. This method is not efficient when `N` is very large, because it requires either shuffling the entire array or keeping track of all the selected items.

### Knuth's Algorithm S (Sampling Without Replacement):
Knuth developed a more efficient algorithm for random sampling from a large set, ensuring that each subset of `k` items is equally likely to be chosen. His method eliminates the need to shuffle the entire dataset.

#### Step-by-Step Process:
Let’s consider how Knuth’s method works for random sampling:

1. **Input**: 
   - Population size: `N`
   - Number of items to select: `k`
   
2. **Initialization**:
   - Start with an empty sample list `S`.

3. **Loop through each item in the population** (i.e., for `i = 1` to `N`):
   - For each item `i` in the population, randomly decide whether to include it in the sample.
   
4. **Random Decision**:
   - For each item `i`, generate a random number `r` between `0` and `1`.
   - If the probability of adding the item to the sample is greater than a computed threshold, add it to the sample. Specifically, add item `i` to the sample if:
     \[
     r \leq \frac{k}{N - i + 1}
     \]
     Where `N - i + 1` is the number of remaining unprocessed items, and `k` is the number of items still needed.

5. **Update the Sample Size**:
   - After adding an item to the sample, decrease `k` by 1 (i.e., reduce the number of items you need to sample).
   
6. **Stop Early**:
   - If `k` reaches 0 (i.e., you've already selected all `k` items), the algorithm terminates early, without needing to process the rest of the population.

### Why Knuth’s Method is Efficient:
- **Early Termination**: Once the desired sample size `k` is reached, the algorithm can terminate early without examining the entire population.
- **Linear Time Complexity**: The method only requires a single pass through the population (O(N)), unlike shuffling which has O(N log N) time complexity.
- **Memory Efficiency**: It does not require maintaining an additional array of selected or unselected items; instead, it selects items as it processes the population.

### Example:
Suppose you want to sample `k = 3` items from a population of `N = 10`.

1. Start with an empty sample list `S`.
2. Process the first item, deciding whether to add it based on the probability `3 / 10`.
3. If it’s added, reduce the required sample size `k` by 1.
4. Continue processing each item in the population, adjusting the probability of selection as the population decreases and fewer items need to be selected.
5. Once the sample size is complete (`k = 0`), stop.

### Other Knuth-Related Concepts:

**Knuth-Morris-Pratt (KMP) Algorithm**:
- This is another famous algorithm by Knuth (along with Morris and Pratt) for string pattern matching, which efficiently finds occurrences of a pattern in a string in O(n) time, where `n` is the length of the text.

**Knuth's Up-Arrow Notation**:
- This is used to describe very large numbers, often encountered in computational number theory.

**The Art of Computer Programming (TAOCP)**:
- Knuth is well known for his monumental multi-volume book series *The Art of Computer Programming*, where he discusses a vast range of algorithms, including random sampling, searching, sorting, and more.

### Conclusion:
Knuth’s method for random sampling without replacement is a simple yet powerful technique for efficiently selecting a random sample from a large population. The approach is widely regarded as a classic in algorithm design due to its elegance and efficiency.
 */

import java.util.ArrayList;
import java.util.List;

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
  public static void main(String[] args) {
    double p = 0.7;
    List<String> words = new ArrayList<>();

    while (!StdIn.isEmpty()) {
      words.add(StdIn.readString());
    }

    for (String word : words) {
      if (StdRandom.bernoulli(p)) {
        StdOut.println(word);
      }
    }
  }
}
