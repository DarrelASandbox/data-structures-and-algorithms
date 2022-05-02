// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar1 = (str) => {
  const frequencyCounter = {};

  for (let char of str) {
    frequencyCounter[char] = frequencyCounter[char] + 1 || 1;
  }

  return Object.keys(frequencyCounter).reduce((a, b) =>
    frequencyCounter[a] > frequencyCounter[b] ? a : b
  );
};

const maxChar = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let c of str) {
    charMap[c] = charMap[c] ? charMap[c] + 1 : 1;

    if (charMap[c] > +max) {
      max = charMap[c];
      maxChar = c;
    }
  }

  return maxChar;
};

module.exports = maxChar;
