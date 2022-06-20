# https://leetcode.com/problems/maximum-subarray/

# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
# A subarray is a contiguous part of an array.

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.

# Input: nums = [1]
# Output: 1

# Input: nums = [5,4,-1,7,8]
# Output: 23

from typing import List

# Runtime: 1343 ms	Memory: 27.9 MB
# Kadane’s Algorithm
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        for i, _ in enumerate(nums[1:], 1):
            nums[i] = max(nums[i], nums[i] + nums[i - 1])
            max_sum = max(max_sum, nums[i])

        return max_sum


class Solution2:
    def maxSubArray(self, nums: List[int]) -> int:
        newNum = maxTotal = nums[0]
        for i in range(1, len(nums)):
            newNum = max(nums[i], nums[i] + newNum)
            maxTotal = max(newNum, maxTotal)

        return maxTotal


print(Solution().maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

