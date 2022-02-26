//Feb 12 2/12/2022
/*
Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [1]
Output: [1]
*/

var preorderTraversal = function (root) {
  if (!root) return [];
  var res = [];
  var queue = [root];
  var node = null;
  while (queue.length) {
    node = queue.pop();
    res.push(node.val);
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }
  return res;
};

/*
Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [1]
Output: [1]
*/

var inorderTraversal = function (root) {
  var stack = [];
  var now = root;
  var res = [];

  while (now || stack.length) {
    while (now) {
      stack.push(now);
      now = now.left;
    }
    now = stack.pop();
    res.push(now.val);
    now = now.right;
  }

  return res;
};
