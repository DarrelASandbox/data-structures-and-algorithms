// Time Complexity O(N) same as array.findIndex()
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Time Complexity - Log(N) - Binary Search!
function search2(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

const search3 = (arr, num) => {
  return arr.findIndex((value) => value === num);
};

const divideAndConquerSection = document.querySelector('#divide-and-conquer');

const searchArr = [
  { arr: [1, 2, 3, 4, 5, 6], num: 4 }, // 3
  { arr: [1, 2, 3, 4, 5, 6], num: 6 }, // 5
  { arr: [1, 2, 3, 4, 5, 6], num: 11 }, // -1
];

// console.log('\n')
// searchArr.map(({ arr, num } = arrWithNum) =>
//   console.log('search2', search2([...arr], num))
// );
// console.log('\n')
// searchArr.map(({ arr, num } = arrWithNum) =>
//   console.log('search3', search3([...arr], num))
// );
// console.log('\n')

/************************
 WRITE YOUR CODE BELOW!
 ************************/
