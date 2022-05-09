function pivotHelper1(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort1(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper1(arr, left, right);
    // left
    quickSort1(arr, left, pivotIndex - 1);
    // right
    quickSort1(arr, pivotIndex + 1, right);
  }
  return arr;
}

const quickSort2 = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)];
};

const quickSort3 = (arr) => {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  let pivot = arr[arr.length - 1];

  arr
    .slice(0, arr.length - 1)
    .forEach((num) => (num < pivot ? left.push(num) : right.push(num)));

  return [...quickSort3(left), pivot, ...quickSort3(right)];
};

// console.log('pivotHelper1: ', pivotHelper1([5, 6, 8, 2, 1]));
// console.log('pivotHelper1: ', pivotHelper1([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log('ph: ', ph([4, 8, 2, 1, 5, 7, 6, 3]));

// sortingArr.map((arr) => console.log('quickSort1: ', quickSort1([...arr])));
// console.log('\n');
// sortingArr.map((arr) => console.log('quickSort2: ', quickSort2([...arr])));
// console.log('\n');
// sortingArr.map((arr) => console.log('quickSort3: ', quickSort3([...arr])));
// console.log('\n');

/************************
 WRITE YOUR CODE BELOW!
************************/

// sortingArr.map((arr) => console.log('qs: ', qs([...arr])));
