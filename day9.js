// Day 9 1/9/2022

/*

Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

*/
var invertTree = function(root) {
  if (root === null) return root;

  let temp = new TreeNode();
  temp = root.right;
  root.right = root.left;
  root.left = tmp;

  root.left = invertTree(root.left);
  root.right = invertTree(root.right);
  return root;
};

/*

Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:

Input: head = [1,2,2,1]
Output: true

*/

var isPalindrome = function(head) {
  let values = [];
  // push all node values into an array
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }
  // iterate over array and compare values
  for (let i = 0; i < values.length >> 1; i++) {
    // (values.length - i - 1) is our virtual pointer
    if (values[i] !== values[values.length - i - 1]) return false;
  }
  return true;
};
