// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const levelWidth = (root) => {
  const arr = [root, 'end'];
  const levelWidth = [0];

  while (arr.length > 1) {
    const node = arr.shift();
    if (node === 'end') {
      levelWidth.push(0);
      arr.push('end');
    } else {
      arr.push(...node.children);
      levelWidth[levelWidth.length - 1]++;
    }
  }

  return levelWidth;
};

const levelWidth2 = (root) => {
  const counters = [];
  let arr = [root];
  while (arr.length) {
    counters.push(arr.length);
    arr.forEach((node) => arr.push(...node.children));
    arr = arr.slice(counters[counters.length - 1]);
  }
  return counters;
};

module.exports = levelWidth;
