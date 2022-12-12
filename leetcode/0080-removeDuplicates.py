from typing import List

# Runtime: 148 ms  Memory: 14 MB
# Time: O(n) & Space: O(n)
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # Edge Condition
        if len(nums) < 3:
            return len(nums)

        # Main Logic
        slow = 2  # Pointer from where we need to replace elements
        for fast in range(2, len(nums)):
            if nums[fast] != nums[slow - 2]:
                nums[slow] = nums[fast]
                slow += 1
        return slow
