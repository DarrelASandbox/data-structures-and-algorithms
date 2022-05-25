/*
https://leetcode.com/problems/find-k-closest-elements/
https://leetcode.com/problems/find-k-closest-elements/discuss/536245/JavaScript-Binary-Search-O(log-N)-Stack-O(N-K)

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
An integer a is closer to x than an integer b if:
  |a - x| < |b - x|, or
  |a - x| == |b - x| and a < b

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
*/

/*
Runtime: 108 ms	Memory: 48.1 MB
Time: O(N - K) & Space: O(1)
Pointers

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 4, x = 5 

Given the above example, we only need to care about 3,4,5,6 and 4,5,6,7 because at a glance we know that the values before 3 or after 9 is further from x.
The Pointers strategy is to maintain a sliding window of k length throughout the loop.
Let's focus on integers 3 and 7, so for comparison we will need to keep track of the furthest number from the right of x which we will name last.
We also need to keep track of the furthest number from the left of x by using a index variable.
Notice that we can keep track of both numbers while iterating through the loop using the index variable as well.
In other words, arr[idx], x, last variables act as left, middle and right pointers respectively.

Since arr is sorted that means as the left pointer gets closer to target x in terms of index position, the value gets bigger.
On the other hand as the right pointer gets closer to target x, the value gets smaller.
Target x remains the same. 

We will compare the difference of the 2 values below as we iterate through the array.
The difference in value between left pointer and x gets smaller as the sliding window moves. Likewise for the right pointer.
Remember that we have already store the furthest number in last variable so we are always comparing 2 numbers which are furthest left and furthest right.
We will move the sliding window from index 0 to find the index whereby "right side" is greater than "left side" before we slice from the index.
Looking at the console.log, at the second last loop that has the last trigger for the if statement;
We will pop() the last integer from the array to get the correct k length then follow by an idx++. 
Thereafter exit the last while loop as index is too big due to second last loop.
*/
const findClosestElements = (arr, k, x) => {
  let idx = 0;
  while (k < arr.length - idx) {
    const last = arr.pop();
    // console.log(k < arr.length - idx, arr[idx], last, arr);
    if (x - arr[idx] > last - x) {
      idx++;
      arr.push(last);
    }
  }
  return arr.slice(idx);
};

// Runtime: 106 ms	Memory: 48.3 MB
// Time: O(logN) & Space: O(1)
// Binary Search
const findClosestElements2 = (arr, k, x) => {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    const mid = parseInt((low + high) / 2);
    x - arr[mid] > arr[mid + k] - x ? (low = mid + 1) : (high = mid);
  }
  return arr.slice(low, low + k);
};

console.log(findClosestElements((arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]), (k = 4), (x = 5))); // Expected: 3, 4, 5, 6
// console.log(findClosestElements((arr = [1, 2, 7, 8, 9]), (k = 4), (x = 7))); // Expected: 2, 7, 8, 9
// console.log(findClosestElements((arr = [-3, -2, -1, 3, 4, 5]), (k = 4), (x = 3))); // Expected: -1, 3, 4, 5
