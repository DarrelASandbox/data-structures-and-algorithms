// From Stephen Course
const mergeHelper = (arr1, arr2) => {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) results.push(left.shift());
    else results.push(right.shift());
  }
  return [...results, ...left, ...right];
};

const mergeHelper1 = (arr1, arr2) => {
  let left = 0;
  let right = 0;
  let sortedArr = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      sortedArr.push(arr1[left]);
      left++;
    } else {
      sortedArr.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    sortedArr.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    sortedArr.push(arr2[right]);
    right++;
  }
  return sortedArr;
};

function mergeHelper2(arr1, arr2) {
  let i = 0,
    j = 0,
    newArr = [];
  while (i < arr1.length && j < arr2.length) {
    arr1[i] < arr2[j]
      ? (newArr.push(arr1[i]), ++i)
      : (newArr.push(arr2[j]), ++j);
  }
  i === arr1.length && j < arr2.length
    ? newArr.push(...arr2.slice(j))
    : newArr.push(...arr1.slice(i));
  return newArr;
}

// Together concat and slice give us a combined O(N^2).
const mergeHelper3 = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  return arr1[0] <= arr2[0]
    ? [arr1[0]].concat(mergeHelper3(arr1.slice(1), arr2))
    : [arr2[0]].concat(mergeHelper3(arr1, arr2.slice(1)));
};

// doesn't work with mergeSort()
function mergeHelper4(nums1, nums2) {
  const sorted = [];
  let i = 0,
    j = 0;
  while (i < nums1.length || j < nums2.length) {
    sorted.push(!nums1[i] || nums1[i] >= nums2[j] ? nums2[j++] : nums1[i++]);
  }
  return sorted;
}

const mergeHelper5 = (arr1, arr2) => {
  const arr = [];

  while (arr1.length && arr2.length) {
    arr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
  }

  while (arr1.length) {
    arr.push(arr1.shift());
  }
  while (arr2.length) {
    arr.push(arr2.shift());
  }

  return arr;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeHelper(left, right);
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

// console.log(
//   'mergeHelper: ',
//   mergeHelper([120, -5, 1, 150, 120, 120], [-77, -3, 2, 120, -3, 121])
// );
// console.log(
//   'mergeHelper2: ',
//   mergeHelper2([120, -5, 1, 150, 120, 120], [-77, -3, 2, 120, -3, 121])
// );
// console.log(
//   'mergeHelper3: ',
//   mergeHelper3([120, -5, 1, 150, 120, 120], [-77, -3, 2, 120, -3, 121])
// );
// console.log(
//   'mergeHelper4: ',
//   mergeHelper4([120, -5, 1, 150, 120, 120], [-77, -3, 2, 120, -3, 121])
// );
// console.log(

// sortingArr.map((arr) => console.log('mergeSort: ', mergeSort([...arr])));

/************************
 WRITE YOUR CODE BELOW!
************************/

// console.log(
//   'msh: ',
//   msh([120, -5, 1, 150, 120, 120], [-77, -3, 2, 120, -3, 121])
// );

// sortingArr.map((arr) => console.log('ms: ', ms([...arr])));
