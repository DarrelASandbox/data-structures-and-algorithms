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
