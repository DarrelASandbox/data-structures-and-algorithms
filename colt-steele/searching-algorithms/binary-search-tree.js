class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new BinarySearchTreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // recursive
  insert2(value) {
    const newNode = new BinarySearchTreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    const inserted = (value, current = this.root) => {
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
        } else return inserted(value, current.right);
      } else {
        if (!current.left) {
          current.left = newNode;
        } else return inserted(value, current.left);
      }
      return this;
    };
    return inserted(value);
  }

  find1(value) {
    let current = this.root;
    if (this.root === null) return undefined;
    if (value === current.value) return current;
    while (true) {
      if (value < current.value) {
        if (value === current.left.value) return current.left;
        else current = current.left;
      } else {
        if (value === current.right.value) return current.right;
        else current = current.right;
      }
    }
  }

  // USE THIS!!!
  find2(value) {
    if (this.root === null) return undefined;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  breathFirstSearch() {
    if (this.root === null) return [];
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value); // remove .value if you want ot push entire node.
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return data;
  }

  depthFirstSearchPreOrder() {
    let node = this.root, // Can specify which node to start with.
      data = [];

    const nodePusher = (node) => {
      data.push(node.value); // remove .value if you want ot push entire node.
      node.left && nodePusher(node.left);
      node.right && nodePusher(node.right);
    };

    nodePusher(node);
    return data;
  }

  depthFirstSearchPostOrder() {
    let data = [];

    const nodePusher = (node) => {
      node.left && nodePusher(node.left);
      node.right && nodePusher(node.right);
      data.push(node.value); // remove .value if you want ot push entire node.
    };

    nodePusher(this.root);
    return data;
  }

  depthFirstSearchInOrder() {
    let data = [];

    const nodePusher = (node) => {
      node.left && nodePusher(node.left);
      data.push(node.value); // remove .value if you want ot push entire node.
      node.right && nodePusher(node.right);
    };

    nodePusher(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// tree.insert(14);
// tree.insert(13);
// tree.insert(16);

// console.log(tree);

/************************
 WRITE YOUR CODE BELOW!
************************/
