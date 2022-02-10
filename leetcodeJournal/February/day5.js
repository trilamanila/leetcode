//Feb 5th 2/5/2022
/*
Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
var longestCommonPrefix = function (strs) {
  // Return early on empty input
  if (!strs.length) return "";

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!strs.every((string) => string[i] === strs[0][i])) {
      // If not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
};

/*
Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/* Exmaple 
    function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
    
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
    
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
}
*/

var reverseString = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
};
