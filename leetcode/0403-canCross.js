/*
https://leetcode.com/problems/frog-jump/

A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.
Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.
If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.

Input: stones = [0,1,3,5,6,8,12,17]
Output: true
Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.

Input: stones = [0,1,2,3,4,8,9,11]
Output: false
Explanation: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.
*/

// Runtime: 137 ms	Memory: 51.9 MB
// Time: O(N^2) & Space: O(N^2)
// each idx + k combo is only visited once, and idx and k has N complexity
const canCross = (stones) => {
  const memo = new Set(); // {key: value} as {k: idx}
  const dp = (k, idx) => {
    if (idx === stones.length - 1) return true; // reach last stone
    let key = k + ',' + idx;
    // key is added after looping all currIdx without return true
    if (memo.has(key)) return false;

    // stones[currIdx] - stones[idx] = distance in k units from previous jump
    for (let currIdx = idx + 1; currIdx < stones.length; currIdx++) {
      if (stones[currIdx] - stones[idx] > k + 1) break;
      if (stones[currIdx] - stones[idx] === k && dp(k, currIdx)) return true;
      if (stones[currIdx] - stones[idx] === k - 1 && dp(k - 1, currIdx)) return true;
      if (stones[currIdx] - stones[idx] === k + 1 && dp(k + 1, currIdx)) return true;
    }

    // add key that cannot reach last stone
    memo.add(key);
    return false;
  };

  return dp(0, 0);
};

// Runtime: 184 ms	Memory: 51.1 MB
const helper = (pos, end, curr = 0, jump = 1, memo = new Map()) => {
  if (!pos.has(curr)) return false;
  let key = curr + ',' + jump;
  if (memo.has(key)) return memo.get(key);
  if (curr === end) return true;
  let less = jump > 1 ? helper(pos, end, curr + jump, jump - 1, memo) : false;
  memo.set(
    key,
    less ||
      helper(pos, end, curr + jump, jump, memo) ||
      helper(pos, end, curr + jump, jump + 1, memo)
  );
  return memo.get(key);
};

const canCross2 = (stones) => {
  const pos = new Set(stones);
  return helper(pos, stones[stones.length - 1]);
};

// Runtime: 105 ms	Memory: 51.1 MB
const canCross3 = (stones) => {
  const target = stones[stones.length - 1];
  const set = new Set(stones);
  const helper = (pos = 0, k = 1, memo = new Map()) => {
    const key = `${pos}|${k}`;
    if (pos === target) return true;
    if (memo.has(key)) return memo.get(key);
    if (pos > target || !set.has(pos) || k <= 0) return false;

    memo.set(
      key,
      pos === 0
        ? helper(pos + 1, 1, memo)
        : helper(pos + k - 1, k - 1, memo) ||
            helper(pos + k, k, memo) ||
            helper(pos + k + 1, k + 1, memo)
    );
    return memo.get(key);
  };
  return helper(0, 1);
};

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]));
