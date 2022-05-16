/*

https://leetcode.com/problems/custom-sort-string/

You are given two strings order and s. All the words of order are unique and were sorted in some custom order previously.
Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
Return any permutation of s that satisfies this property.

Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Input: order = "cbafg", s = "abcd"
Output: "cbad"
*/

// Runtime: 71 ms	Memory: 42.1 MB
// indexOf will search same char repeatedly.
// use a map to save char => index from order will improve the speed.
const customSortString = (order, s) =>
  s
    .split('')
    .sort((x, y) => order.indexOf(x) - order.indexOf(y))
    .join('');

// Runtime: 79 ms	Memory: 42.4 MB
const customSortString2 = (order, s) => {
  const map = {};
  let result = '';

  for (let i = 0; i < s.length; i++) map[s[i]] = (map[s[i]] || 0) + 1;
  for (let i = 0; i < order.length; i++) {
    result += order[i].repeat(map[order[i]]);
    delete map[order[i]];
  }

  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) result += keys[i].repeat(map[keys[i]]);
  return result;
};

console.log(customSortString2('cbafg', 'abcd'));
console.log(customSortString2('exv', 'xwvee'));
