class PriorityNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new PriorityNode(value, priority);
    if (!this.values) return (this.root = newNode);

    this.values.push(newNode);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].priority >= this.values[parentIndex].priority)
        break;
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
    }
    return this.values;
  }

  dequeue() {
    const last = this.values.pop();
    if (!this.values.length) {
      return last;
    }
    const max = this.values[0];
    this.values[0] = last;
    let i = 0;
    while (true) {
      const left = 2 * i + 1;
      const right = left + 1;
      const maxChildIndex =
        this.values[right]?.priority < this.values[left]?.priority
          ? right
          : left;
      if (this.values[maxChildIndex]?.priority < this.values[i]?.priority) {
        const temp = this.values[i];
        this.values[i] = this.values[maxChildIndex];
        this.values[maxChildIndex] = temp;
        i = maxChildIndex;
      } else {
        break;
      }
    }
    return max;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {
      // A: [{ vertex: 'B', weight: 4 }],
      // B: [{ vertex: 'A', weight: 4 }],
    };
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return Object.keys(this.adjacencyList);
    } else return Object.keys(this.adjacencyList);
  }

  // No idea why it doesnt work in this code
  addEdge(vertex1, vertex2, weight) {
    for (const vertex in this.adjacencyList) {
      if (vertex === vertex1)
        this.adjacencyList[vertex].push({ node: vertex2, weight });
      if (vertex === vertex2)
        this.adjacencyList[vertex].push({ node: vertex1, weight });
    }
    return Object.values(this.adjacencyList);
  }

  calculate(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = undefined;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === end) {
        // console.log(distances);
        // console.log(previous);
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            // updating new smallest distance to neighbor
            distances[nextNode.node] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }

  shortestPath(start, end) {
    let node = new PriorityQueue();
    let distances = {};
    let previous = {};
    let path = [];
    let currentVertex;
    node.enqueue(start, distances[start]);

    for (let vertex in this.adjacencyList) {
      vertex === start
        ? (distances[vertex] = 0)
        : (distances[vertex] = Infinity);
      previous[vertex] = null;
    }

    while (node.values.length) {
      currentVertex = node.dequeue().value;
      if (currentVertex === end) {
        path.push(currentVertex);
        while (previous[currentVertex]) {
          path.push(previous[currentVertex]);
          currentVertex = previous[currentVertex];
        }
        return path.reverse();
      }

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        let potential = distances[currentVertex] + neighbor.weight;
        if (potential < distances[neighbor.node]) {
          distances[neighbor.node] = potential;
          previous[neighbor.node] = currentVertex;
          node.enqueue(neighbor.node, potential);
        }
      });
    }
  }
}

let weightedGraph = new WeightedGraph();
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addVertex('E');
weightedGraph.addVertex('F');

weightedGraph.addEdge('A', 'B', 4);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.addEdge('B', 'E', 3);
weightedGraph.addEdge('C', 'D', 2);
weightedGraph.addEdge('C', 'F', 4);
weightedGraph.addEdge('D', 'E', 3);
weightedGraph.addEdge('D', 'F', 1);
weightedGraph.addEdge('E', 'F', 1);

// console.log('calculate', weightedGraph.calculate('A', 'E'));
// console.log('shortestPath', weightedGraph.shortestPath('A', 'E'));

/************************
 WRITE YOUR CODE BELOW!
 ************************/
