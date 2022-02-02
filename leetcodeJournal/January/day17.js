//Day 17 1/17/2022

/*
Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is impossible, it must rearrange it to the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

*/
var nextPermutation = function(nums) {
  if (nums.length <= 1) return;

  let leftHandSwap;

  // Loop through the provided numbers from right to left (excluding the first as we need something to compare it to)
  for (let i = nums.length - 2; i >= 0; i--) {
    // Check if this number is lower than the previous one (marks our left-hand swap)
    if (nums[i] < nums[i + 1]) {
      leftHandSwap = i;
      break;
    }
  }

  // Loop through the provided numbers from right to left
  for (let i = nums.length - 1; i > leftHandSwap; i--) {
    // If the number is bigger than the left-hand one
    if (nums[i] > nums[leftHandSwap]) {
      // Swap the numbers round
      [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

      // Reverse the rest of the array
      let chopped = nums.splice(leftHandSwap + 1);
      chopped.sort((a, b) => a - b);
      nums.push(...chopped);
      return;
    }
  }

  // Right-hand swap not found, return lowest permutation instead
  nums.sort((a, b) => a - b);
};

/*
Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

*/

var combinationSum = function(nums, target) {
  let combinations = [];
  nums.sort((a, b) => a - b);

  function backtrack(tempList, remaining, start) {
    for (let i = start; i < nums.length && nums[i] <= remaining; i++) {
      if (nums[i] === remaining) {
        combinations.push([...tempList, nums[i]]);
      } else {
        backtrack([...tempList, nums[i]], remaining - nums[i], i);
      }
    }
  }
  backtrack([], target, 0);
  return combinations;
};
