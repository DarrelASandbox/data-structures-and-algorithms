// J is outside of scope" replace let with var or replace for loop with while and adjust accordingly.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentNum; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentNum;
  }
  return arr;
}

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curVal;
  }
  return arr;
}

// sortingArr.map((arr) =>
//   console.log('insertionSort: ', insertionSort([...arr]))
// );
// console.log('\n');
// sortingArr.map((arr) =>
//   console.log('insertionSort2: ', insertionSort2([...arr]))
// );
// console.log('\n');

/************************
 WRITE YOUR CODE BELOW!
************************/

// sortingArr.map((arr) => console.log('is: ', is([...arr])));
