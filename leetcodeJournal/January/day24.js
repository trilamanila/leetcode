//Day 24 1/24/2022

/*
Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

*/

var sortedSquares = function(A) {
  let result = [];
  // Left and right pointer
  let l = 0;
  let r = A.length - 1;
  // Position to add squared number to A
  let p = r;

  // Add the higher number to the array and then decrease the pointer
  while (l <= r) {
    if (A[l] ** 2 > A[r] ** 2) {
      result[p--] = A[l++] ** 2;
    } else {
      result[p--] = A[r--] ** 2;
    }
  }

  return result;
};

/*
Duplicate Zeros

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

*/

var duplicateZeros = function(arr) {
  const N = arr.length;
  for (let i = 0; i < N - 1; i++) {
    if (arr[i] === 0) {
      let prev = arr[i + 1];
      for (let j = i + 2; j < N; j++) {
        let temp = arr[j];
        arr[j] = prev;
        prev = temp;
      }
      arr[++i] = 0;
    }
  }
};
