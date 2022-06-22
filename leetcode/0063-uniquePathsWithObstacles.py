# https://leetcode.com/problems/unique-paths-ii/

# You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

# An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
# Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
# The testcases are generated so that the answer will be less than or equal to 2 * 109.

#   0 1 2     0 1 2     0 1 2     0 1 2
# 0 R 0 0   0 R 0 0   0 R 0 0   0 R 0 0
# 1 0 0 0   1 0 1 0   1 1 1 0   1 1 1 1
# 2 0 0 E   2 0 0 E   2 0 0 E   2 0 0 E

# 6 ways    2 ways    1 way     0 way

#   0 1 2     0 1 2     0 1 2     0 1 2
# 0 R 1 1   0 R 1 1   0 R 1 1   0 R 0 0
# 1 1 2 3   1 1 0 1   1 0 0 1   1 0 0 0
# 2 1 3 6   2 1 1 2   2 0 0 1   2 0 0 E

# Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
# Output: 2
# Explanation: There is one obstacle in the middle of the 3x3 grid above.
# There are two ways to reach the bottom-right corner:
# 1. Right -> Right -> Down -> Down
# 2. Down -> Down -> Right -> Right

# Input: obstacleGrid = [[0,1],[0,0]]
# Output: 1

from typing import List

# Runtime: 93 ms	Memory: 14.1 MB
# Time Complexity: O(N * M) where N and M are the dimensions of the input matrix
# Space Complexity: O(N * M) for the DP matrix
# Dynamic Programming
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        if obstacleGrid[0][0]:
            return 0

        m = len(obstacleGrid)
        n = len(obstacleGrid[0])
        dp = [[0 for _ in range(n)] for _ in range(m)]

        dp[0][0] = 1
        for row in range(0, m):
            for col in range(0, n):
                if obstacleGrid[row][col] or (not row and not col):
                    continue
                else:
                    dp[row][col] = (dp[row - 1][col] if row else 0) + (
                        dp[row][col - 1] if col else 0
                    )

        return dp[m - 1][n - 1]


print(Solution().uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))

