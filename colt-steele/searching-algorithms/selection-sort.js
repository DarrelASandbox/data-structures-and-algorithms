const selectionSort = (arr) => {
  let result = Array(arr.length);
  let i = 0;
  let num;

  while (arr.length > 0) {
    num = Math.min(...arr);
    result[i] = num;
    arr.splice(arr.indexOf(num), 1);
    i++;
  }

  return result;
};

const selectionSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    //optimization with if statement
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

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
//   console.log('selectionSort: ', selectionSort([...arr]))
// );
// console.log('\n');
// sortingArr.map((arr) =>
//   console.log('selectionSort2: ', selectionSort2([...arr]))
// );
// console.log('\n');

/************************
 WRITE YOUR CODE BELOW!
************************/

// sortingArr.map((arr) => console.log('ss: ', ss([...arr])));
