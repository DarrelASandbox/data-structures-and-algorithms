# https://leetcode.com/problems/squares-of-a-sorted-array/solutions/310865/python-a-comparison-of-lots-of-approaches-sorting-two-pointers-deque-iterator-generator/?orderBy=most_votes&languageTags=python

from typing import List

# Runtime: 368 ms  Memory: 16.2 MB
# Time: O(n) & Space: O(1)
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        return_array = [0] * len(nums)
        write_pointer = len(nums) - 1
        left_read_pointer = 0
        right_read_pointer = len(nums) - 1
        left_square = nums[left_read_pointer] ** 2
        right_square = nums[right_read_pointer] ** 2
        while write_pointer >= 0:
            if left_square > right_square:
                return_array[write_pointer] = left_square
                left_read_pointer += 1
                left_square = nums[left_read_pointer] ** 2
            else:
                return_array[write_pointer] = right_square
                right_read_pointer -= 1
                right_square = nums[right_read_pointer] ** 2
            write_pointer -= 1
        return return_array
