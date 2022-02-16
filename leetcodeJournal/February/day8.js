//Feb 8 2/8/2022
/*
Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

var minSubArrayLen = function (s, nums) {
  if (nums.length === 0) return 0;

  let currentLen = 0;
  let currentSum = 0;

  let minLen = Infinity;

  let start = 0;
  let end = 0;

  while (end < nums.length) {
    currentLen += 1;
    currentSum += nums[end];
    if (currentSum >= s) {
      do {
        minLen = Math.min(minLen, end - start + 1);
        currentSum -= nums[start];
        start += 1;
      } while (currentSum >= s);
    }
    end += 1;
  }
  return minLen === Infinity ? 0 : minLen;
};

/*
Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

const revNums = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;

  nums.reverse();
  revNums(nums, 0, k - 1);
  revNums(nums, k, nums.length - 1);
};
