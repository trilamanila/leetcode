//Day 22 1/22/2022

/*
Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

*/

var sortColors = function(nums) {
  var j = 0;
  var k = nums.length - 1;
  for (var i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      swap(nums, i, j++);
    } else if (nums[i] === 2) {
      swap(nums, i--, k--);
    }
  }
};

var swap = function(arr, a, b) {
  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

/* 
Sort Colors

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

*/

var subsets = function(nums) {
  var res = [];
  helper(nums, res, [], 0);
  return res;
};

var helper = function(nums, res, arr, start) {
  var len = nums.length;

  res.push(Array.from(arr));

  if (start === len) return;

  for (var i = start; i < len; i++) {
    arr.push(nums[i]);
    helper(nums, res, arr, i + 1);
    arr.pop();
  }
};
