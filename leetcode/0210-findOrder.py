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
