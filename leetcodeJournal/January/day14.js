//Day 14 1/14/22
/*
Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

*/

var longestPalindrome = function(s) {
  let res = "";

  if (!s) return res;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;

      while (left >= 0 && right <= s.length && s[left] == s[right]) {
        left--;
        right++;
      }

      let start = left + 1;
      let end = right;

      let subString = s.slice(start, end);
      if (res.length < subString.length) {
        res = subString;
      }
    }
  }
  return res;
};

/*
Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

*/

var maxArea = function(height) {
  let area = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    const temp = (j - i) * Math.min(height[i], height[j]);
    area = Math.max(area, temp);
    if (height[i] > height[j]) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return area;
};
