// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  const compare = {};
  const strA = stringA.replace(/[^\w]/gi, '').toLowerCase();
  const strB = stringB.replace(/[^\w]/gi, '').toLowerCase();

  if (strA.length !== strB.length) return false;

  for (const char of strA) {
    compare[char] = compare[char] + 1 || 1;
  }

  for (const char of strB) {
    if (compare[char]) compare[char] -= 1;
    else return false;
  }

  return true;
};

const buildCharMap = (str) => {
  const charMap = {};
  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

const anagrams2 = (stringA, stringB) => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }

  return true;
};

const anagrams3 = (stringA, stringB) =>
  stringA.replace(/\W/g, '').toLowerCase().split('').sort().join() ===
  stringB.replace(/\W/g, '').toLowerCase().split('').sort().join();

module.exports = anagrams;
