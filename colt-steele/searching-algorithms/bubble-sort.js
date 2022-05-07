function slowBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //   console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1])
        [[arr[j + 1]], [arr[j]]] = [[arr[j]], [arr[j + 1]]];
    }
  }
  return arr;
};

// ES2015 with noSwap Optimization
function newBubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let noSwaps;

  for (let i = arr.length - 1; i > 0; i--) {
    // deal with undefined using i--
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const sortingArr = [
  [173, 880, 624, 290, 459, 874, 183, 741],
  [214, 62, 1, 3567, 36, 37, 37, 45, 29, 8],
  [5, 3, 4, 1, 2],
  [53, 33234, 3534],
  [0, 2, 34, -22, 10, 19, -17],
  [2, 1, 9, 76, 4],
  [223, 1223, 12, 1, 45, 979, 3453],
  [120, -5, 1, 150, 120, 120, -77, -3, 2, 120, -3, 121],
];

// sortingArr.map((arr) =>
//   console.log('slowBubbleSort: ', slowBubbleSort([...arr]))
// );
// console.log('\n');
// sortingArr.map((arr) => console.log('bubbleSort: ', bubbleSort([...arr])));
// console.log('\n');
// sortingArr.map((arr) =>
//   console.log('newBubbleSort: ', newBubbleSort([...arr]))
// );
// console.log('\n');

/************************
 WRITE YOUR CODE BELOW!
************************/

// sortingArr.map((arr) => console.log('bs: ', bs([...arr])));
