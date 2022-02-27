//Feb 13 2/13/2022
/*
Binary Tree Postorder Traversal

Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

Example 1:

Input: root = [1,null,2,3]
Output: [3,2,1]

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [1]
Output: [1]
*/

var postorderTraversal = function (root) {
  if (!root) return [];
  var res = [];
  var stack = [];
  var node = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      res.unshift(node.val);
      node = node.right;
    } else {
      node = stack.pop();
      node = node.left;
    }
  }
  return res;
};
