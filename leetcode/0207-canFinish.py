from typing import List

# What is topological sort: It is a permutation of vertices such that for all the edges in the graph (u - v), u must appear before v.

# Approach: We are simply going do a dfs on every vertex and check for cycle

# Why are we checking for a cycle in graph?
# The questions says we will be given courses where to take course 1 we have to finish course 2, so we can say course 1 is dependent on course 2, that is to go on course 1 we have to move from course 2, but if there is a cycle that will ultimately mean course 2 is dependent on course 1 which is wrong. So we check for a cycle in graph, if there are no cycle we can take all course.

# Runtime: 230 ms	Memory: 17.4 MB
# Topological Sort + DFS
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = dict()  # {key: value} as {vertex: [] of edges}
        visiting = set()
        visited = set()

        def containsCycle(vertex):
            visiting.add(vertex)
            edges = graph.get(vertex)

            if edges:
                for edge in edges:
                    if edge in visited:
                        continue
                    if edge in visiting:
                        return True
                    if containsCycle(edge):
                        return True

            visiting.remove(vertex)
            visited.add(vertex)
            return False

        for vertex, edge in prerequisites:
            graph.get(vertex).append(edge) if vertex in graph else graph.update(
                {vertex: [edge]}
            )

        for vertex in graph:
            if containsCycle(vertex):
                return False

        return True
