/*
https://leetcode.com/problems/remove-duplicate-letters/
https://leetcode.com/problems/remove-duplicate-letters/discuss/977608/Use-stack-to-solve-by-JS-94.89-fast-100-less-memory-with-explaination

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Input: s = "bcabc"
Output: "abc"

Input: s = "cbacdcbc"
Output: "acdb"
*/

// Runtime: 86 ms	Memory: 42.4 MB
const removeDuplicateLetters = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    console.log(stack.indexOf(char), stack, char);
    // if s[i] already appears in stack, jump to next loop
    if (stack.includes(char)) continue;
    while (
      stack.length &&
      // when top of stack letter dictionary order is greater than s[i](z > a)
      stack[stack.length - 1] > char &&
      // when the letter at the top of the stack has duplicate letter that has yet to be iterated
      s.indexOf(stack[stack.length - 1], i) > i
    ) {
      console.log(
        stack[stack.length - 1],
        char,
        s.indexOf(stack[stack.length - 1], i)
      );
      stack.pop();
    }
    // put s[i] into top of stack
    stack.push(char);
  }
  return stack.join('');
};

console.log(removeDuplicateLetters('cbacdcbc'));
console.log(removeDuplicateLetters('cbacbcdc'));
console.log(removeDuplicateLetters('cbad'));
