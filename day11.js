//Day 11 1/11/2022

/*
Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3]

*/

var diameterOfBinaryTree = function(root) {
  let res = 0;
  function depth(root) {
    if (!root) return 0;
    let left = depth(root.left);
    let right = depth(root.right);
    res = Math.max(res, right + left);
    return Math.max(right, left) + 1;
  }
  depth(root);
  return res;
};

/*

Merge Two Binary Trees
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

 

Example 1:

Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]

*/

var mergeTrees = function(t1, t2) {
  // If any of the nodes is null then use the other node as the merged node
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  // Add the vals of current node for each step if they are not null
  t1.val += t2.val;
  // Explore remaining children in the trees
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
