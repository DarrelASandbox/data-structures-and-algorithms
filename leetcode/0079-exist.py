# https://leetcode.com/problems/word-search/

# Given an m x n grid of characters board and a string word, return true if word exists in the grid.

# The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

# A B C E   A* B* C* E
# S F C S   S  F  C* S
# A D E E   A  D* E* E

# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
# Output: true

# A  B  C  E
# S  F  C  S*
# A  D  E* E*

# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
# Output: true

# A  B  C  E
# S  F  C  S
# A  D  E  E

# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
# Output: false

from typing import List

# Runtime: 6716 ms	Memory: 14 MB
# only visit 3 directions after first loop - Time: O(M * N * 4^L) & Space: O(MN + L)
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        if len(board) == 0:
            return False
        m = len(board)
        n = len(board[0])
        # left, down, right & top
        directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        def dfs(x, y, k):
            if board[x][y] != word[k]:
                return False
            if k == len(word) - 1:
                return True

            board[x][y] = "*"
            # mark as visited
            for (dx, dy) in directions:
                row = x + dx
                col = y + dy

                if (
                    row >= 0
                    and row < m
                    and col >= 0
                    and col < n
                    and dfs(row, col, k + 1)
                ):
                    return True

            board[x][y] = word[k]  # reset board
            return False

        for row in range(0, m):
            for col in range(0, n):
                if dfs(row, col, 0):
                    return True


print(Solution().exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"],], "AAB"))

