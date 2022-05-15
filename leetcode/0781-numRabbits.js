/*
https://leetcode.com/problems/rabbits-in-forest/

There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.
Given the array answers, return the minimum number of rabbits that could be in the forest.

Input: answers = [1,1,2]
Output: 5
Explanation:
The two rabbits that answered "1" could both be the same color, say red.
The rabbit that answered "2" can't be red or the answers would be inconsistent.
Say the rabbit that answered "2" was blue.
Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

Input: answers = [10,10,10]
Output: 11
*/

// Runtime: 78 ms	Memory: 41.9 MB
const numRabbits = (answers) => {
  const map = {}; // {key: value} as {answer: count}
  let result = 0;
  for (const answer of answers) {
    if (!map[answer]) {
      map[answer] = answer;
      result += answer + 1;
    } else map[answer] -= 1;
    // console.log(map, result);
  }
  return result;
};

/*
When I saw this problem, I knew that there would be some mathematical solution to it. However, I could not figure it out. Therefore, I tried to take a logical approach. When a rabbit says that it has 5 other rabbits with the same color, we want to count the number of other rabbits that also says they have 5 other rabbits with the same color. If there are 2 other rabbits that says they also have 5 other rabbits with the same color, then these two rabbits are part of the 5 other rabbits mentioned by the first rabbit. The remaining 3 rabbits are in the forest (a.k.a not present in the array). However, if there are total of 7 rabbits that says that they have 5 other rabbits with the same color, the 7th rabbit is not part of this group. Therefore, we need to reset our counting.

Runtime: 84 ms	Memory: 43.9 MB
*/
const numRabbits2 = (answers) => {
  const map = new Map();
  let result = 0;

  for (const answer of answers) {
    if (answer === 0) {
      result++;
      continue;
    }

    if (!map.has(answer)) {
      map.set(answer, answer);
      result += answer + 1; // Include the rabbit that you're talking to
    } else {
      map.set(answer, map.get(answer) - 1); // Exclude the rabbit(s) that you have already spoken to
      if (map.get(answer) === 0) map.delete(answer);
    }
  }
  return result;
};

console.log(numRabbits([0, 0, 1, 1, 1]));
console.log(numRabbits([1, 1, 1]));
console.log(numRabbits([10, 10, 10]));
