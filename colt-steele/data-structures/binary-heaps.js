class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] <= this.values[parentIndex]) break;
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
    }
    return this.values;
  }

  extractMax() {
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
        this.values[right] > this.values[left] ? right : left;
      if (this.values[maxChildIndex] > this.values[i]) {
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

  extractMax2() {
    const sinkDown = () => {
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild > element) swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          (swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > leftChild.priority);
        }

        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    };

    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      sinkDown();
    }
    return max;
  }
}

class MinBinaryNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new MinBinaryNode(value, priority);
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

  dequeue2() {
    sinkDown = () => {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    };

    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
}

let heaps = new MaxBinaryHeap();
let priorityQueue = new MinBinaryHeap();

priorityQueue.enqueue('Homework', 6);
priorityQueue.enqueue('Sleep', 1);
priorityQueue.enqueue('Eat', 2);
priorityQueue.enqueue('Exercise', 5);
priorityQueue.enqueue('Toilet', 30);
priorityQueue.enqueue('Dance', 17);

/************************
 WRITE YOUR CODE BELOW!
************************/
