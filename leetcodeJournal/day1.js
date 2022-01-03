//Day 1 1/1/2022

/*
Build Array from Permutation
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
*/
var buildArray = function(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
};

/*
TWO SUM
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Constraints

  2 <= nums.length <= 105
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.
*/
var twoSum = function(nums, target) {
  // Array to store the result
  result = [];
  // Map to store the difference and its index
  index_map = new Map();
  // Loop for each element in the array
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (index_map.has(difference)) {
      result[0] = i;
      result[1] = index_map.get(difference);
      break;
    } else {
      index_map.set(nums[i], i);
    }
  }
  return result;
};
