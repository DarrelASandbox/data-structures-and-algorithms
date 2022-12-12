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
