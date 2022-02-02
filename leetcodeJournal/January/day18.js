//Day 18 1/18/2022

/*
Jump Game II

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

*/

var jump = function(nums) {
  let newMax = 0;
  let jump = 0;
  let oldMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    //Keep track of the farthest jump
    newMax = Math.max(newMax, i + nums[i]);
    //When we get to the index where we had our previous farther jump, we can increase our jump count by 1
    if (i === oldMax) {
      jump++;
      oldMax = newMax;
    }
  }
  return jump;
};

/*
Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

*/

var permute = function(choices, temp = [], permutations = []) {
  //Base case
  if (choices.length === 0) {
    permutations.push([...temp]);
  }

  for (let i = 0; i < choices.length; i++) {
    //Create new array without current letter
    let newChoices = choices.filter((choice, index) => index !== i);
    //Add current to the temp array which is our current position
    temp.push(choices[i]);
    permute(newChoices, temp, permutations);
    // Once we have explored options remove the current letter
    temp.pop();
  }

  return permutations;
};
