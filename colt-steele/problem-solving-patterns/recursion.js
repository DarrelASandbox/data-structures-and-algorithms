function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

const power1 = (base, exponential) => {
  if (exponential === 0) return 1;
  if (exponential === 1) return base;
  return base * power1(base, exponential - 1);
};

function power2(base, exponent) {
  if (exponent === 0) return 1;
  return base * power2(base, exponent - 1);
}

const power3 = (base, exp) => (!exp && 1) || base * power2(base, --exp);
const power4 = (num, pow) => (pow === 0 ? 1 : num * power3(num, --pow));

const factorial1 = (num) => (num === 0 ? 1 : num * factorial1(--num));

function factorial2(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial2(x - 1);
}

const productOfArray1 = (arr) =>
  arr.length === 1 ? arr[0] : arr[0] * productOfArray1(arr.slice(1));

function productOfArray2(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray2(arr.slice(1));
}

const recursiveRange1 = (num) => (num === 0 ? 0 : num + recursiveRange1(--num));

function recursiveRange2(x) {
  if (x === 0) return 0;
  return x + recursiveRange2(x - 1);
}

const fib1 = (num) => (num <= 1 ? num : fib1(num - 2) + fib1(--num));

function fib2(n) {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
}

const reverse1 = (str) => {
  let reverseStr = [];

  const reverse1Helper = (input) => {
    if (!input.length) return;
    reverseStr.unshift(input[0]);
    reverse1Helper(input.slice(1));
  };
  reverse1Helper(str);
  return reverseStr.join('');
};

// Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters;
// if all values are truthy, the value of the last operand is returned.
// Examples of expressions that can be converted to false are:
// false; null; NaN; 0; empty string ("" or '' or ``); undefined.
// Short-circuit evaluation: (some falsy expression) && expr
const reverse2 = (str) => str && reverse2(str.slice(1)) + str[0];

function reverse3(str) {
  if (str.length <= 1) return str;
  return reverse3(str.slice(1)) + str[0];
}

const isPalindrome1 = (str) => {
  if (str.length <= 1) return true;
  return (
    str[0] === str.slice(-1) && isPalindrome1(str.substring(1, str.length - 1))
  );
};

const isPalindrome2 = (str) =>
  str.length > 1
    ? str[0] === str[--str.length] && isPalindrome2(str.slice(1, -1))
    : true;

function isPalindrome3(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome3(str.slice(1, -1));
  return false;
}

// Working on getting callback to work in the map()
const isOdd = (val) => val % 2 !== 0;
const someRecursive1 = (arr, callback) =>
  arr.length
    ? callback(arr.slice(-1)) || someRecursive1(arr.slice(0, -1), callback)
    : false;

function someRecursive2(array, callback) {
  return array.length
    ? callback(array.slice(-1)) || someRecursive2(array.slice(0, -1), callback)
    : false;
}

function someRecursive3(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive3(array.slice(1), callback);
}

const flatten1 = (arr) => arr.flat(9);

function flatten2(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten2(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}

const capitalizeFirst1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr;
};

function capitalizeFirst2(arr) {
  return arr.length > 0
    ? [
        arr[0].charAt(0).toUpperCase() + arr[0].slice(1),
        ...capitalizeFirst2(arr.slice(1)),
      ]
    : [];
}

function nestedEvenSum(val) {
  if (typeof val !== 'object') return val;
  return Object.values(val)
    .map(nestedEvenSum)
    .filter((v) => v % 2 === 0)
    .reduce((sum, v) => sum + v, 0);
}

const capitalizeWords = (arr) => {
  return arr.length > 0
    ? [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))]
    : [];
};

function stringifyNumbers1(obj) {
  if (!Object.keys(obj).length) return {};

  const key = Object.keys(obj)[0];
  const { [key]: val, ...left } = obj;

  if (Number.isInteger(val)) {
    obj[key] = String(val);
  } else if (typeof val === 'object') {
    obj[key] = stringifyNumbers1(val);
  }

  return {
    ...obj,
    ...stringifyNumbers1(left),
  };
}

function stringifyNumbers2(obj) {
  var newObj = {};

  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

function collectStrings1(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

function collectStrings2(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings2(obj[key]));
    }
  }

  return stringsArr;
}

function collectStrings3(obj) {
  if (typeof obj === 'string') return [obj];
  return Object.values(obj).reduce(
    (arr, v) => [...arr, ...collectStrings3(v)],
    []
  );
}

const powerArr = [
  [2, 0], // 1
  [2, 2], // 4
  [2, 4], // 16
];

const productOfArrayArr = [
  [1, 2, 3], // 6
  [1, 2, 3, 10], // 60
];

const numArr = [1, 2, 4, 7, 6, 10, 28, 35];

const stringArr = [
  'rithmschool', // false
  'awesome', // false
  'foobar', // false
  'tacocat', // true
  'amanaplanacanalpanama', // true
  'amanaplanacanalpandemonium', // false
];

const someRecursiveArr = [
  { arr: [1, 2, 3, 4], callback: 'isOdd' }, // true
  { arr: [4, 6, 8, 9], callback: 'isOdd' }, // true
  { arr: [4, 6, 8], callback: 'isOdd' }, // false
  { arr: [4, 6, 8], callback: 'val => val > 10' }, // false
];

const flattenArr = [
  [[1, 2, 3, [4, 5]]], // [1, 2, 3, 4, 5]
  [[1, [2, [3, 4], [[5]]]]], // [1, 2, 3, 4, 5]
  [[[1], [2], [3]]], // [1,2,3]
  [[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]], // [1,2,3
];

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

const stringifyNumbersObj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const collectStringsObj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

// powerArr.map((arr) => console.log('power1', power1(...arr)));
// powerArr.map((arr) => console.log('power2', power2(...arr)));

// numArr.map((num) => console.log('factorial1', factorial1(num)));

// productOfArrayArr.map((arr) =>
//   console.log('productOfArray1', productOfArray1(arr))
// );

// numArr.map((num) =>
//   console.log('recursiveRange1', recursiveRange1(num))
// );
// numArr.map((num) => console.log('fib1', fib1(num)));

// stringArr.map((str) => console.log('reverse1', reverse1(str)));
// stringArr.map((str) => console.log('reverse2', reverse2(str)));

// stringArr.map((str) => console.log('isPalindrome1', isPalindrome1(str)));
// console.log('\n');
// stringArr.map((str) => console.log('isPalindrome2', isPalindrome2(str)));

// stringArr.map((str) => console.log('isPalindrome2', isPalindrome2(str)));

// HOW DO PASS callback AS A FUNCTION into my map()?
// someRecursiveArr.map(({ arr, callbackStr } = arrWithCallback) =>
//   console.log(
//     'someRecursive1',
//     someRecursive1([...arr], new Function(callbackStr))
//   )
// );

// console.log(someRecursive2([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive2([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive2([4, 6, 8], isOdd)); // false
// console.log(someRecursive2([4, 6, 8], (val) => val > 10)); // false

// flattenArr.map((arr) => console.log('flatten1', flatten1(...arr)));
// flattenArr.map((arr) => console.log('flattenDeep', flattenDeep(...arr)));

// console.log(capitalizeFirst1(['car', 'taco', 'banana']));
// console.log(capitalizeFirst2(['car', 'taco', 'banana']));

// console.log(nestedEvenSum(obj1));
// console.log(nestedEvenSum(obj2));

// console.log(capitalizeWords(['car', 'taco', 'banana']));

/************************
 WRITE YOUR CODE BELOW!
************************/
