/*
https://leetcode.com/problems/find-median-from-data-stream/

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.
- For example, for arr = [2,3,4], the median is 3.
- For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.

Implement the MedianFinder class:
- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

*/

// Runtime: 1552 ms	Memory: 87.4 MB
// Time: O(log N) & Space: O(1)
// Binary Search + Min Heap
const MedianFinder = function () {
  this.minHeap = [];
};

/**
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function (num) {
  const bs = (num) => {
    let start = 0;
    let end = this.minHeap.length;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (num > this.minHeap[mid]) start = mid + 1;
      else end = mid;
    }
    // insert num into heap
    this.minHeap.splice(start, 0, num);
  };

  if (this.minHeap.length === 0) this.minHeap.push(num);
  else bs(num);
};

/**
 * @return {number}
 */

MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor(this.minHeap.length / 2);
  return this.minHeap.length % 2 === 0
    ? (this.minHeap[mid - 1] + this.minHeap[mid]) / 2
    : this.minHeap[mid];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
