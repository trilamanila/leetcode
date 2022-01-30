//Day 29 1/29/2022

/*
Sort Array By Parity

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]
*/

var sortArrayByParity = function(nums) {
  let odds = [];
  let evens = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }
  return [...evens, ...odds];
};

/*
Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

var removeElement = function(nums, val) {
  var len = nums.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] !== val) nums[count++] = nums[i];
  }
  return count;
};
