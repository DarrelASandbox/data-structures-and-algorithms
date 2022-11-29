# https://leetcode.com/problems/two-sum/

# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

from typing import List

# Runtime: 107 ms  Memory: 15.2 MB
# Time: O(n) & Space: O(n)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i, n in enumerate(nums):
            m = target - n
            if m in d:
                return [d[m], i]
            else:
                d[n] = i


# Runtime: 110 ms  Memory: 42.7 MB
class Solution2:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        compliments = {}  # {key: value} as {compliment: index}
        for i in range(len(nums)):
            compliment = target - nums[i]
            if compliment in compliments:
                return [compliments[compliment], i]
            else:
                compliments[nums[i]] = i


print(Solution().twoSum(nums=[0, 4, 3, 0], target=0))
print(Solution().twoSum(nums=[1, 3, 6, 4, 9], target=8))

