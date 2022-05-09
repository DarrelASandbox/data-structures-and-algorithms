function memoizationFib(n, memo = [undefined, 1, 1]) {
  // if (n <= 2) return BigInt(1); // refers to memo = [undefined, 1, 1]
  if (memo[n] !== undefined) return BigInt(memo[n]);
  return (memo[n] = memoizationFib(n - 1, memo) + memoizationFib(n - 2, memo));
}

function tabulatedFib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

function fibT(n) {
  let pair = [BigInt(1), BigInt(1)];
  for (let i = 3; i <= n; i++) {
    const sum = pair[0] + pair[1];
    pair[0] = pair[1];
    pair[1] = sum;
  }
  return pair[1];
}

// console.log(memoizationFib(6000));
// console.log(tabulatedFib(7000));
// console.log(fibT(7000));

/************************
 WRITE YOUR CODE BELOW!
 ************************/
