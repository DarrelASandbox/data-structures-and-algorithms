// Time Complexity - N^2 because of indexOf()
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // console.log(`same arr2: ${arr2}`);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Time Complexity - O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // console.log('same2 frequencyCounter1:', frequencyCounter1);
  // console.log('same2 frequencyCounter2:', frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

function same3(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const compare = {};
  for (const value of arr2) {
    compare[value] ? (compare[value] = +1) : (compare[value] = 1);
  }
  for (const value of arr1) {
    if (!compare[value ** 2]) return false;
    compare[value] -= 1;
  }
  return true;
}

// This is not a frequency counter.
// Flawed because of how numbers work. See last 2 test cases.
const same4 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let isZero = 0;
  for (let i = 0; i < arr1.length; i++) {
    isZero += arr1[i] ** 2 - arr2[i];
    console.log({ isZero });
  }
  return isZero === 0 ? true : false;
};

validAnagram1 = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // console.log('validAnagram1 lookup:', lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

validAnagram2 = (num1, num2) => {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

const validAnagram3 = (str1, str2) => {
  let compare = {};
  if (str1.length !== str2.length) return false;
  for (const char of str1) {
    compare[char] ? (compare[char] += 1) : (compare[char] = 1);
  }

  for (const char of str2) {
    if (compare[char]) {
      compare[char] -= 1;
    } else return false;
  }
  return true;
};

const sameFrequency1 = (num1, num2) => {
  let compare = {};

  if (num1.length !== num2.length) return false;
  for (const num of num1.toString()) {
    compare[num] ? compare[num]++ : (compare[num] = 1);
  }

  for (const num of num2.toString()) {
    if (!compare[num]) return false;
    else compare[num]--;
  }
  return true;
};

const sameArr = [
  { arr1: [1, 2, 3, 2], arr2: [9, 1, 4, 4] },
  { arr1: [1, 2, 3, 2, 5], arr2: [9, 1, 4, 4, 11] },
  { arr1: [8, 3, 2, 7, 3, 2, 8, 5, 7], arr2: [9, 8, 4, 4, 11, 42, 64, 64] },
  { arr1: [4, 4, 4, 3, 3, 3], arr2: [9, 16, 9, 16, 9, 16] },
  { arr1: [4, 4, 4, 3, 3, 3], arr2: [9, 9, 9, 16, 16, 16] },
  { arr1: [8, 8, 4, 13, 13], arr2: [144, 25, 144, 25, 144] },
  { arr1: [4, 4, 4, 4, 5, 5, 5], arr2: [64, 9, 16, 9, 16, 9, 16] },
];

const validAnagramArr = [
  ['', ''],
  ['aaz', 'zza'],
  ['anagram', 'nagaram'],
  ['rat', 'car'],
  ['awesomne', 'awesom'],
  ['amanaplanacanalpanama', 'acanalmanplanpamana'],
  ['qwerty', 'qeywrt'],
  ['texttwisttime', 'timetwisttext'],
  ['santa', 'satan'],
  ['evilasantagentleman', 'elegantsatanmanvile'],
  ['evilasantagentleman', 'lntsaanaitmveaenelg'],
];

const sameFrequencyArr = [
  [182, 281], // true
  [34, 14], // false
  [3589578, 5879385], // true
  [22, 222], // false
];

// sameArr.map(({ arr1, arr2 } = twoArr) =>
//   console.log('same3:', same3([...arr1], [...arr2]))
// );
// console.log('\n');
// sameArr.map(({ arr1, arr2 } = twoArr) =>
//   console.log('s:', s([...arr1], [...arr2]))
// );

// validAnagramArr.map((arrOfTwoStrings) =>
//   console.log('validAnagram3:', validAnagram3(...arrOfTwoStrings))
// );
// console.log('\n');
// validAnagramArr.map((arrOfTwoStrings) =>
//   console.log('va:', va(...arrOfTwoStrings))
// );

// sameFrequencyArr.map((arrOfTwoNums) =>
//   console.log('sameFrequency1:', sameFrequency1(...arrOfTwoNums))
// );
// console.log('\n');

/************************
 WRITE YOUR CODE BELOW!
 ************************/

// sameFrequencyArr.map((arrOfTwoNums) => console.log('sf:', sf(...arrOfTwoNums)));
