//Day 27 1/27/2022

/*
Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

    arr.length >= 3
    There exists some i with 0 < i < arr.length - 1 such that:
        arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
        arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false

Example 2:

Input: arr = [3,5,5]
Output: false

Example 3:

Input: arr = [0,3,2,1]
Output: true

*/

const validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false;
  }

  let peak = Math.max(...arr);
  let index = arr.indexOf(peak);
  if (peak == arr[arr.length - 1] || peak === arr[0]) {
    return false;
  }
  let arr1 = [...arr.slice(0, index + 1)];
  let arr2 = [...arr.slice(index)];
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i - 1] >= arr1[i]) {
      return false;
    }
  }

  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i - 1] <= arr2[i]) {
      return false;
    }
  }

  return true;
};

/*
Replace Elements with Greatest Element on Right Side
Replace Elements with Greatest Element on Right Side

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

*/

var replaceElements = function(arr) {
  let newArr = [];
  newArr[arr.length - 1] = -1;
  for (i = arr.length - 2; i >= 0; i--) {
    newArr[i] = Math.max(newArr[i + 1], arr[i + 1]);
  }
  return newArr;
};
