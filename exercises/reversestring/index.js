// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse1 = (str) => {
  const reverseStr = [];
  str.split('').forEach((char) => reverseStr.unshift(char));
  return reverseStr.join('');
};

const reverse2 = (str) => str.split('').reverse().join('');

const reverse3 = (str) => {
  let reverseStr = '';
  for (const char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
};

const reverse = (str) =>
  str.split('').reduce((reverseStr, char) => char + reverseStr, '');

module.exports = reverse;
