function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
var t1 = performance.now();
// addUpTo(1000000000);
addUpTo(100);
var t2 = performance.now();

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
var time1 = performance.now();
// addUpTo2(1000000000);
addUpTo2(100);
var time2 = performance.now();

// console.log((t2 - t1) / 1000);
// console.log((time2 - time1) / 1000);
