//Day 4 1/4/2022

/*
Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its node's values
Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]

*/

var inorderTraversal = function(root) {
  let stack = [];
  let res = [];

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

/*
Symmetric Tree

Given the root of a binary tree, check wheather it is a mirror of itself.
Exmaple 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

*/

var isSymmetric = function(root) {
  return isSameTree(root, root);
};

function isSameTree(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  return (
    t1.val === t2.val &&
    isSameTree(t1.left, t2.right) &&
    isSameTree(t1.right, t2.left)
  );
}
