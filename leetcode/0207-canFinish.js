/*
https://leetcode.com/problems/course-schedule/
https://www.geeksforgeeks.org/topological-sorting/
https://stackoverflow.com/questions/2218322/what-is-better-adjacency-lists-or-adjacency-matrices-for-graph-problems-in-c

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/

/*
What is topological sort: It is a permutation of vertices such that for all the edges in the graph (u - v), u must appear before v.

Approach: We are simply going do a dfs on every vertex and check for cycle

Why are we checking for a cycle in graph?
The questions says we will be given courses where to take course 1 we have to finish course 2, so we can say course 1 is dependent on course 2, that is to go on course 1 we have to move from course 2, but if there is a cycle that will ultimately mean course 2 is dependent on course 1 which is wrong. So we check for a cycle in graph, if there are no cycle we can take all course.

Runtime: 121 ms	Memory: 49.2 MB
Topological Sort + DFS
*/
const canFinish = (numCourses, prerequisites) => {
  const graph = new Map(); // {key: value} as {vertex: [edges]}
  const visiting = new Set();
  const visited = new Set();

  const containsCycle = (vertex) => {
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

  for (const [vertex, edge] of graph) {
    if (containsCycle(vertex)) return false;
  }
  // This is for input (1, [])
  return true;
};

// Runtime: 137 ms	Memory: 48.4 MB
// Topological Sort + BFS
const canFinish2 = (numCourses, prerequisites) => {
  // track topological order
  let order = [];
  // track adjList, directed
  let adjList = new Map();
  // track inDegree for each node
  let inDegree = [];
  // queue for BFS
  let queue = [];

  // init inDegree and adjList for each 'node'
  for (let i = 0; i < numCourses; i++) {
    inDegree[i] = 0;
    adjList[i] = [];
  }

  // populate the adjList and inDegree
  for (let [course, pre] of prerequisites) {
    adjList[pre].push(course);
    inDegree[course]++;
  }

  // check for first values with inDegree of 0, meaning no prereqs for these courses
  for (let index in inDegree) {
    if (inDegree[index] === 0) queue.push(index);
  }

  // iterate through queue
  while (queue.length > 0) {
    // takes first value of queue, no pre-reqs
    let course = queue.shift();
    // adds this to the top order
    order.push(course);
    // base case, meaning we added all values to our order, can also use an index since order is not requested for return
    if (order.length === numCourses) return true;
    // check all of the directed edge nodes stemming from the value with no pre-reqs. can reduce indegree for those nodes
    for (let edge of adjList[course]) {
      inDegree[edge]--;
      // if inDegree for those nodes is now 0, it means we can process it and add to our top order
      if (inDegree[edge] === 0) {
        queue.push(edge);
      }
    }
  }
  // if we never hit our base case in our BFS loop, it means we hit a cycle since there are nodes that don't have 0 as indegrees
  // BFS finished prematurely
  return false;
};

// Runtime: 138 ms	Memory: 46.2 MB
// Backtracking + Memoization
const canFinish3 = (numCourses, prerequisites) => {
  if (!prerequisites.length) return true;
  let al = {};

  // create adjacency list with course numbers from 0 to numCourses-1
  for (let i = 0; i < numCourses; i++) al[i] = [];
  for (let i = 0; i < prerequisites.length; i++) {
    let node1 = prerequisites[i][0];
    let node2 = prerequisites[i][1];
    al[node1].push(node2);
  }

  // declare memo to track all already traversed paths
  let memo = {};

  for (let i = 0; i < numCourses; i++) {
    // skip all courses that can be taken without prereqs
    if (!al[i]) return;
    // check to see if we can take course i
    if (!explore(al, i, new Set(), memo)) return false;
  }

  return true;
};

const explore = (al, node, vis, memo) => {
  if (memo[node]) return true; // if already fully explored, dont explore again, return true
  if (vis.has(node)) return false; // if already visited, there is a cycle, return false
  vis.add(node); // add node to visited

  // explore all neighbors of current node to see if they lead to cycles
  for (let i = 0; i < al[node].length; i++) {
    let neighbor = al[node][i];
    // check path to see if a cycle is discovered, return false
    if (!explore(al, neighbor, vis, memo)) return false;
    // otherwise we've fully explored the path, mark it as good path.
    memo[neighbor] = true;
    // backtrack out to allow diff paths to traverse through the same node
    vis.delete(neighbor);
  }

  // no paths lead to cycles, cool.
  return true;
};
