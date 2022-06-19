/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
*/

// Runtime: 93 ms	Memory: 47.6 MB
const isValid = (s) => {
  let length = Infinity;

  while (length !== s.length) {
    length = s.length;
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');
  }

  return s.length === 0;
};

// Runtime: 59 ms	Memory: 42.3 MB
const isValid2 = (s) => {
  const parentheses = { '(': ')', '[': ']', '{': '}' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) stack.push(s[i]);
    else {
      // console.log(i, stack.length - 1, stack[stack.length - 1], stack);
      if (s[i] !== parentheses[stack[stack.length - 1]]) stack.push(s[i]);
      else stack.pop();
    }
  }

  return stack.length === 0;
};

// Runtime: 61 ms	Memory: 42.7 MB
const isValid3 = (s) => {
  const parentheses = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  /*
    for s to be valid, every opening bracket must have a 
    corresponding closing bracket. 
    
    therefore, a valid s must have an even length.
  */
  if (s.length % 2 !== 0) return false;

  // to hold any unclosed brackets as we iterate
  const unclosed = [];

  for (let char of s) {
    const openingBracket = parentheses[char];
    const lastUnclosed = unclosed[unclosed.length - 1];

    if (openingBracket) {
      // we've found a match for our latest opening bracket, pop the stack
      if (openingBracket === lastUnclosed) unclosed.pop();
      // otherwise, we've encountered a closing bracket for which there is no opening bracket
      else return false;
    } else {
      // if there is no defined opening bracket for char in our map, it must be an opening bracket
      unclosed.push(char);
    }
  }

  // we've traversed the entire string. for s to be valid, we must have no remaining unclosed.
  return unclosed.length === 0;
};

console.log(isValid2('()[]{}][(}'));
