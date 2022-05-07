linearSearch = (arr, num) => {
  let index = 0;

  while (index < arr.length) {
    if (arr[index] === num) return index;
    index++;
  }
  return -1;
};

function binarySearch1(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

const binarySearch2 = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);

  while (left <= right && arr[middle] !== num) {
    num < arr[middle] ? (right = --middle) : (left = ++middle);
    middle = Math.floor((right + left) / 2);
  }
  return arr[middle] === num ? middle : -1;
};

naiveStringSearch = (longStr, shortStr) => {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < longStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) break;
      if (j === shortStr.length - 1) count++;
    }
  }
  return count;
};

const linearSearchArr = [
  { arr: [10, 15, 20, 25, 30], num: 15 },
  { arr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], num: 4 },
  { arr: [100], num: 100 },
  { arr: [1, 2, 3, 4, 5], num: 6 },
  { arr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], num: 10 },
  { arr: [100], num: 200 },
  { arr: [24523, 477357, 654726, 7867, 143, 7567, 7000], num: 7000 },
];

const binarySearchArr = [
  { arr: [1, 2, 3, 4, 5], num: 2 },
  { arr: [1, 2, 3, 4, 5], num: 3 },
  { arr: [1, 2, 3, 4, 5], num: 5 },
  { arr: [1, 2, 3, 4, 5], num: 6 },
  {
    arr: [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    num: 10,
  },
  {
    arr: [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    num: 95,
  },
  {
    arr: [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    num: 100,
  },
];

// linearSearchArr.map(({ arr, num } = arrWithNum) =>
//   console.log('linearSearch: ', linearSearch([...arr], num))
// );

// binarySearchArr.map(({ arr, num } = arrWithNum) =>
//   console.log('binarySearch1: ', binarySearch1([...arr], num))
// );
// console.log('\n');
// binarySearchArr.map(({ arr, num } = arrWithNum) =>
//   console.log('binarySearch2: ', binarySearch2([...arr], num))
// );

// console.log('naiveStringSearch: ', naiveStringSearch('something', 'some'));

/************************
 WRITE YOUR CODE BELOW!
************************/
