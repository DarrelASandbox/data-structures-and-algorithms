// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
  for (let start = 0; start < str.length / 2 - 1; start++) {
    if (str[start] !== str[str.length - start - 1]) return false;
  }
  return true;
};

const palindrome2 = (str) => str === str.split('').reverse().join('');

// Not the best way as it will run through the entire array
const palindrome3 = (str) =>
  str.split('').every((char, idx) => char === str[str.length - idx - 1]);

module.exports = palindrome;
