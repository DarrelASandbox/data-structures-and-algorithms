# https://leetcode.com/problems/valid-parentheses/

# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:
# - Open brackets must be closed by the same type of brackets.
# - Open brackets must be closed in the correct order.

import math

# Runtime: 57 ms    Memory: 13.7 MB
class Solution:
    def isValid(self, s: str) -> bool:
        length = math.inf
        while length != len(s):
            length = len(s)
            s = s.replace("()", "")
            s = s.replace("[]", "")
            s = s.replace("{}", "")
        return len(s) == 0


# Runtime: 72 ms	Memory: 13.9 MB
class Solution2:
    def isValid(self, s: str) -> bool:
        parentheses = {"(": ")", "[": "]", "{": "}"}
        stack = []

        for i in range(len(s)):
            if len(stack) == 0:
                stack.append(s[i])
            else:
                if s[i] != parentheses.get(stack[len(stack) - 1]):
                    stack.append(s[i])
                else:
                    stack.pop()

        return len(stack) == 0


class Solution3(object):
    def isValid(self, s: str) -> bool:
        parentheses = {"(": ")", "{": "}", "[": "]"}
        stack = []

        for i in s:
            if i in parentheses:  # 1
                stack.append(i)
            elif len(stack) == 0 or parentheses[stack.pop()] != i:  # 2
                return False
        return len(stack) == 0  # 3


# 1. if it's the left bracket then we append it to the stack
# 2. else if it's the right bracket and the stack is empty(meaning no matching left bracket), or the left bracket doesn't match
# 3. finally check if the stack still contains unmatched left bracket

print(Solution2().isValid("()[]{}][(}"))

