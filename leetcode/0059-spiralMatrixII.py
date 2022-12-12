from typing import List

# Runtime: 73 ms	Memory: 13.9 MB
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        idx = 1
        row_start = 0
        col_start = 0
        row_end = n - 1
        col_end = n - 1
        result = [[None] * n for _ in range(n)]
        print(result)

        while row_start <= row_end and col_start <= col_end:
            # North
            for col in range(col_start, col_end + 1):
                result[row_start][col] = idx
                idx += 1

            # East
            row_start += 1
            for row in range(row_start, row_end + 1):
                result[row][col_end] = idx
                idx += 1

            # South
            col_end -= 1
            for col in range(col_end, col_start - 1, -1):
                result[row_end][col] = idx
                idx += 1

            # West
            row_end -= 1
            for row in range(row_end, row_start - 1, -1):
                result[row][col_start] = idx
                idx += 1
            col_start += 1

        return result


print(Solution().generateMatrix(3))
