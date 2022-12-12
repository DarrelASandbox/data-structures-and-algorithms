from typing import List

# Runtime: 104 ms  Memory: 15.5 MB
# Time: O(n) & Space: O(1)
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        slow = 0
        for fast in range(len(nums) - 1):
            if nums[fast] != nums[fast + 1]:
                nums[slow] = nums[fast + 1]
                slow += 1
        return slow
