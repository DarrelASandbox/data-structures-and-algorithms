// Time Complexity - O(N^2)
// Space Complexity - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Time Complexity - O(N)
// Space Complexity - O(1)
sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else left++;
  }
};

const sumZero3 = (sortedArr) => {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    if (sortedArr[left] + sortedArr[right] === 0)
      return [sortedArr[left], sortedArr[right]];
    if (sortedArr[left] + sortedArr[right] < 0) left++;
    else right--;
  }
  return undefined;
};

countUniqueValues1 = (arr) => {
  return [...new Set(arr)].length;
};

countUniqueValues2 = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

const areThereDuplicates1 = (arr) => {
  return [...new Set(arr)].length < arr.length;
};

// frequency counter
function areThereDuplicates2(arguments) {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// multiple pointers
// doesnt sort alphabets check test cases.
function areThereDuplicates3(args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// uses set.prototype.size
function areThereDuplicates4(arguments) {
  return new Set(arguments).size !== arguments.length;
}

averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else left++;
  }
  return false;
};

const averagePair2 = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === num) return true;
    if ((arr[left] + arr[right]) / 2 < num) left++;
    else right--;
  }
  return false;
};

isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) return false;

  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
  }
  return false;
};

const isSubsequence2 = (str1, str2) => {
  if (str1.length > str2.length) return false;

  let firstPointer = 0;
  let secondPointer = 0;
  while (secondPointer < str2.length) {
    if (str1[firstPointer] !== str2[secondPointer]) secondPointer++;
    else {
      // else is important here for test cases with less than 3 chars
      firstPointer++;
      secondPointer++;
    }
    if (firstPointer === str1.length) return true;
  }
  return false;
};

// Recursive but not O(1) Space
function isSubsequence3(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence3(str1.slice(1), str2.slice(1));
  return isSubsequence3(str1, str2.slice(1));
}

const multiplePointersSection = document.querySelector('#multiple-pointers');

const countUniqueValuesArr = [
  [1, 1, 1, 1, 1, 2], // 2
  [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], // 7
  [], // 0
  [-2, -1, -1, 0, 1], // 4
];

const areThereDuplicatesArr = [
  [1, 2, 3], // false
  [1, 2, 2], // true
  ['a', 'b', 'c', 'a'], // true
  ['a', 'b', 'c', '1', '2'], // false
];

const averagePairArr = [
  { arr: [1, 2, 3], num: 2.5 }, // true
  { arr: [1, 3, 3, 5, 6, 7, 10, 12, 19], num: 8 }, // true
  { arr: [-1, 0, 3, 4, 5, 6], num: 4.1 }, // false
  { arr: [], num: 4 }, // false
  { arr: [10, 20, 20, 30, 40], num: 30 }, // true
];

const isSubsequenceArr = [
  ['hello', 'hello world'], // true
  ['sing', 'sting'], // true
  ['whytellmewhy', 'whytellmey'], // false
  ['abc', 'abracadabra'], // true
  ['abc', 'acb'], // false (order matters)
  ['yz', 'zy'], // false (order matters)
  ['z', 'y'], // false
  ['aa', 'abc'], // false
  ['hakls38rhaowdfho23rbf', 'hakl4asv3s38rhaowdfsdfh34g53go2dfg3rbf'], // true
];

// console.log('sumZero2: ', sumZero2([-4, -3, -2, -1, 0, 4, 2, 5]));
// console.log('\n');
// console.log('sumZero3: ', sumZero3([-4, -3, -2, -1, 0, 4, 2, 5]));
// console.log('\n');
// console.log('sz: ', sz([-4, -3, -2, -1, 0, 4, 2, 5]));

// countUniqueValuesArr.map((arr) =>
//   console.log('countUniqueValues1: ', countUniqueValues1([...arr]))
// );
// console.log('\n');
// countUniqueValuesArr.map((arr) =>
//   console.log('countUniqueValues3: ', countUniqueValues3([...arr]))
// );
// console.log('\n');
// countUniqueValuesArr.map((arr) => console.log('cuv: ', cuv([...arr])));

// areThereDuplicatesArr.map((arr) =>
//   console.log('areThereDuplicates1: ', areThereDuplicates1([...arr]))
// );
// console.log('\n');
// areThereDuplicatesArr.map((arr) => console.log('atd: ', atd([...arr])));

// averagePairArr.map(({ arr, num } = arrWithNum) =>
//   console.log('averagePair', averagePair([...arr], num))
// );
// console.log('\n');
// averagePairArr.map(({ arr, num } = arrWithNum) =>
//   console.log('averagePair2', averagePair2([...arr], num))
// );
// console.log('\n');
// averagePairArr.map(({ arr, num } = arrWithNum) =>
//   console.log('ap', ap([...arr], num))
// );

// isSubsequenceArr.map((arr) =>
//   console.log('isSubsequence: ', isSubsequence(...arr))
// );
// console.log('\n');
// isSubsequenceArr.map((arr) =>
//   console.log('isSubsequence2:', isSubsequence2(...arr))
// );
// console.log('\n');
// isSubsequenceArr.map((arr) => console.log('isS:', isS(...arr)));

/************************
 WRITE YOUR CODE BELOW!
************************/
