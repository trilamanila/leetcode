//Day 19 1/19/2022

/*
Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

*/

var rotate = function(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  for (let row of matrix) {
    row.reverse();
  }
};

/*
Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

var groupAnagrams = function(strs) {
  // define output array
  const output = [];
  // define map
  const map = {};
  // loop through strs
  for (let i = 0; i < strs.length; i++) {
    // sort current str
    const strSorted = strs[i]
      .split("")
      .sort()
      .join("");
    // if sorted string is present in map
    if (map[strSorted] !== undefined) {
      // get index of output array to push current str
      output[map[strSorted]].push(strs[i]);
    } else {
      // push current str into output array
      output.push([strs[i]]);
      // add sorted str to map
      // set map[sorted str] = output array length - 1
      map[strSorted] = output.length - 1;
    }
  }

  // return output array
  return output;
};
