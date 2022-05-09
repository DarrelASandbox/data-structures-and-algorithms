class Graph {
  constructor() {
    // this.adjacencyList = {
    //   Tokyo: ['Dallas', 'Hong Kong'],
    //   Dallas: ['Tokyo', 'Aspen', 'Hong Kong', 'Los Angeles'],
    //   Aspen: ['Dallas'],
    //   'Hong Kong': ['Tokyo', 'Dallas', 'Los Angeles'],
    //   'Los Angeles': ['Hong Kong', 'Dallas'],
    // };

    this.adjacencyList = {
      A: ['B', 'C'],
      B: ['A', 'D'],
      C: ['A', 'E'],
      D: ['B', 'E', 'F'],
      E: ['C', 'D', 'E'],
      F: ['D', 'F'],
    };
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return Object.keys(this.adjacencyList);
    } else return Object.keys(this.adjacencyList);
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].map((subVertex) =>
        this.removeEdge(subVertex, vertex)
      );
      // delete this.adjacencyList[vertex];
    }
    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2) {
    for (const vertex in this.adjacencyList) {
      if (vertex === vertex1) this.adjacencyList[vertex].push(vertex2);
      if (vertex === vertex2) this.adjacencyList[vertex].push(vertex1);
    }
    return Object.values(this.adjacencyList);
  }

  removeEdge(vertex1, vertex2) {
    for (const vertex in this.adjacencyList) {
      if (vertex === vertex1)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          (vertex) => vertex !== vertex2
        );
      if (vertex === vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          (vertex) => vertex !== vertex1
        );
    }

    return Object.values(this.adjacencyList);
  }

  depthFirstSearch1(start) {
    const result = [];
    const visited = {};
    // Use helper so that your result and visited won't be resetted.
    this.depthFirstSearchHelper1(start, visited, result);
    return result;
  }

  depthFirstSearchHelper1(vertex, visited, result) {
    if (!vertex.length) return null;
    visited[vertex] = true;
    result.push(vertex);
    this.adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor])
        return this.depthFirstSearchHelper1(neighbor, visited, result);
    });
  }

  depthFirstSearch2(vertex) {
    const visited = { [vertex]: true };
    const queue = [vertex];
    const result = [];
    // visited[vertex] = true;

    while (queue.length) {
      let currentVertex = queue.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }

  breathFirstSearch1(vertex) {
    const visited = { [vertex]: true };
    const queue = [vertex];
    const result = [];
    this.breathFirstSearchHelper1(visited, queue, result);
    return result;
  }

  breathFirstSearchHelper1(visited, queue, result) {
    let currentVertex;
    if (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
      return this.breathFirstSearchHelper1(visited, queue, result);
    }
  }

  breathFirstSearch2(vertex) {
    const visited = { [vertex]: true };
    const queue = [vertex];
    const result = [];

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }

  BFS(vertex) {
    const results = [],
      visited = {},
      queue = [vertex];
    let helper;
    visited[vertex] = true;

    (helper = () => {
      if (queue.length) {
        let current = queue.shift();
        results.push(current);
        this.adjacencyList[current].forEach((n) => {
          if (!visited[n]) {
            visited[n] = true;
            queue.push(n);
          }
        });
        helper();
      }
    })();

    return results;
  }

  // From Colt
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let graph = new Graph();

/************************
 WRITE YOUR CODE BELOW!
************************/
