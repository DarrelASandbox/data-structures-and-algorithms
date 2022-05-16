/*

https://leetcode.com/problems/course-schedule-ii/

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Input: numCourses = 1, prerequisites = []
Output: [0]
*/

// Runtime: 100 ms	Memory: 47 MB
const findOrder = (numCourses, prerequisites) => {
  const graph = new Map(); // {key: value} as {vertex: [] of edges}
  const visiting = new Set();
  const visited = new Set();

  const containsCycle = (vertex = 0) => {
    visiting.add(vertex);
    const edges = graph.get(vertex);

    if (edges) {
      for (const edge of edges) {
        if (visited.has(edge)) continue;
        if (visiting.has(edge)) return true;
        if (containsCycle(edge)) return true;
      }
    }

    visiting.delete(vertex);
    visited.add(vertex);
    return false;
  };

  for (const [vertex, edge] of prerequisites) {
    !graph.has(vertex)
      ? graph.set(vertex, [edge])
      : graph.get(vertex).push(edge);
  }

  for (let i = 0; i < numCourses; i++) {
    if (containsCycle(i)) return [];
  }

  return [...visited];
};

// Runtime: 84 ms	Memory: 46.5 MB
// BFS
const findOrder2 = (numCourses, prerequisites) => {
  const graph = new Map();
  const indegrees = new Array(numCourses).fill(0);

  const bfs = () => {
    let result = [];
    let queue = [];

    for (let i = 0; i < indegrees.length; i++) {
      if (indegrees[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
      let curr = queue.shift();

      if (graph.has(curr)) {
        for (let neighbour of graph.get(curr)) {
          indegrees[neighbour]--;
          if (indegrees[neighbour] === 0) queue.push(neighbour);
        }
      }
      result.push(curr);
    }
    return result.length === numCourses ? result : [];
  };

  const buildGraph = () => {
    for (let [edge, vertex] of prerequisites) {
      if (graph.has(vertex)) graph.get(vertex).push(edge);
      else graph.set(vertex, [edge]);

      indegrees[edge]++;
    }
  };

  buildGraph();
  return bfs(graph, indegrees);
};
