//Feb 4 2/4/2022
/*
Add Binary

Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

var addBinary = function (a, b) {
  //Resultant string
  let result = "";
  //Indices for a and b
  let i = a.length - 1;
  let j = b.length - 1;
  //Carry
  let carry = 0;
  while (i >= 0 || j >= 0) {
    //Sum of two bits
    let sum = carry;
    if (i >= 0) {
      sum += a[i--] - "0";
    }
    if (j >= 0) {
      sum += b[j--] - "0";
    }
    //Add the bit to the result
    result = (sum % 2) + result;
    //Modify carry
    carry = parseInt(sum / 2);
  }
  //Final check if carry exists
  if (carry > 0) {
    result = 1 + result;
  }
  return result;
};

/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:

Input: haystack = "", needle = ""
Output: 0
*/

var strStr = function (haystack, needle) {
  var len1 = haystack.length;
  var len2 = needle.length;
  if (!len2) return 0;
  for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len1; j++) {
      if (i + j === len1) return -1;
      if (haystack[i + j] !== needle[j]) break;
      if (j === len2 - 1) return i;
    }
  }
  return -1;
};
