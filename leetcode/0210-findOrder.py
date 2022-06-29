# https://leetcode.com/problems/course-schedule-ii/

# There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
# For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
# Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

# Input: numCourses = 2, prerequisites = [[1,0]]
# Output: [0,1]
# Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

# Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
# Output: [0,2,1,3]
# Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
# So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

# Input: numCourses = 1, prerequisites = []
# Output: [0]

from typing import List

#  Runtime: 140 ms	Memory: 17.7 MB
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:

        # Build an adj list for the prerequisities
        preq = {i: [] for i in range(numCourses)}

        for c, p in prerequisites:
            preq[c].append(p)

        # A course has three possible outcomes

        # visited --> c has been added to the output
        # visiting --> c has not been added but added to cycle
        # unvisited --> c has not been added to the output or cycle

        output = []
        visit = set()
        cycle = set()

        def dfs(c):
            if c in visit:
                return True
            if c in cycle:
                return False

            cycle.add(c)

            for pre in preq[c]:
                if dfs(pre) == False:
                    return False

            cycle.remove(c)
            visit.add(c)
            output.append(c)
            return True

        for i in range(numCourses):
            if dfs(i) == False:
                return []

        return output


# Working on bug
# class Solution:
#     def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
#         graph = dict()  # {key: value} as {vertex: [] of edges}
#         visiting = set()
#         visited = set()
#         result = []

#         def containsCycle(vertex):
#             visiting.add(vertex)
#             edges = graph.get(vertex)

#             if edges:
#                 for edge in edges:
#                     if edge in visited:
#                         continue
#                     if edge in visiting:
#                         return True
#                     if containsCycle(edge):
#                         return True

#             visiting.remove(vertex)
#             visited.add(vertex)
#             result.append(vertex)
#             return False

#         for vertex, edge in prerequisites:
#             graph.get(vertex).append(edge) if vertex in graph else graph.update(
#                 {vertex: [edge]}
#             )

#         for course in range(numCourses):
#             if containsCycle(course):
#                 return []

#         return result

