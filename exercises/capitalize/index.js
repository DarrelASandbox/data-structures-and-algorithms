// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string#character_access
const capitalize1 = (str) => {
  let newStr = str.charAt(0).toUpperCase();
  for (let i = 0; i < str.length; i++) {
    str.charAt(i) === ' '
      ? (newStr += str.charAt(i + 1).toUpperCase())
      : (newStr += str.charAt(i + 1));
  }

  return newStr;
};

const capitalize = (str) => {
  let result = str[0].toUpperCase();
  for (let i = 0; i < str.length - 1; i++) {
    str[i] === ' '
      ? (result += str[i + 1].toUpperCase())
      : (result += str[i + 1]);
  }

  return result;
};

const capitalize3 = (str) =>
  str
    .split(' ')
    .map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(' ');

module.exports = capitalize;
