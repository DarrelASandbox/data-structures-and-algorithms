// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels1 = (str) => {
  let vowelsNum = 0;
  for (const char of str.toLowerCase()) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    )
      vowelsNum++;
  }

  return vowelsNum;
};

const vowels = (str) => {
  let vowelsNum = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];
  for (const char of str.toLowerCase()) {
    if (checker.includes(char)) vowelsNum++;
  }
  return vowelsNum;
};

const vowels3 = (str) => str.match(/[aeiou]/gi)?.length || 0;

const vowels4 = (str) =>
  str
    .toLowerCase()
    .split('')
    .filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char)).length;

const vowels5 = (str) =>
  str
    .toLowerCase()
    .split('')
    .reduce(
      (acc, char) => (['a', 'e', 'i', 'o', 'u'].includes(char) ? acc + 1 : acc),
      0
    );

module.exports = vowels;
