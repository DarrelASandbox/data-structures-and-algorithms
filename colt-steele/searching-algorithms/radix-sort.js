function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

function radixSort2(arr) {
  for (let k = 0; k < mostDigits2(arr); k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      buckets[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = buckets.flat();
  }
  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

const countDigit2 = (num) => +num.toString().length;
const mostDigits2 = (nums) => +countDigit2(Math.max(...nums));

// console.log('getDigit2: ', getDigit2(13_514_623_457_859, 3));
// console.log('countDigit2: ', countDigit2(123456));
// console.log(
//   'mostDigits2: ',
//   mostDigits2([46, 8234, 3362, 631, 375, 562371347, 566, 3])
// );

// sortingArr.map((arr) => console.log('radixSort2: ', radixSort2([...arr])));

// console.log('gd: ', gd(13_514_623_457_859, 3));
// console.log('cd: ', cd(123456));
// console.log('md: ', md([46, 8234, 3362, 631, 375, 562371347, 566, 3]));

/************************
 WRITE YOUR CODE BELOW!
************************/

// sortingArr.map((arr) => console.log('rs: ', rs([...arr])));
