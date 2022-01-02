//Day 1 1/1/2022
//Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

//A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

var buildArray = function(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
};

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
//Constraints

//  2 <= nums.length <= 105
//  -109 <= nums[i] <= 109
//  -109 <= target <= 109
//  Only one valid answer exists.

var twoSum = function(nums, target) {
  // Array to store the result
  result = [];
  // Map to store the difference and its index
  index_map = new Map();
  // Loop for each element in the array
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (index_map.has(difference)) {
      result[0] = i;
      result[1] = index_map.get(difference);
      break;
    } else {
      index_map.set(nums[i], i);
    }
  }
  return result;
};

//Day 2 1/2/2022
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//  Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.

//Constraints

//  1 ≤ s.length ≤ 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
  // Stack to store left symbols
  const leftSymbols = [];
  // Loop for each character of the string
  for (let i = 0; i < s.length; i++) {
    // If left symbol is encountered
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      leftSymbols.push(s[i]);
    }
    // If right symbol is encountered
    else if (
      s[i] === ")" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "("
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "}" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "{"
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "]" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "["
    ) {
      leftSymbols.pop();
    }
    // If none of the valid symbols is encountered
    else {
      return false;
    }
  }
  return leftSymbols.length === 0;
};

//Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
//Constraints:

//  The number of nodes in both lists is in the range [0, 50].
//-100 ≤ Node.val ≤ 100
//Both l1 and l2 are sorted in non-decreasing order.

var mergeTwoLists = function(l1, l2) {
  // Check if either of the lists is null
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  // Head of the new linked list - this is the head of the resultant list
  let head = null;
  // Reference of head which is null at this point
  let temp = head;
  // Choose head which is smaller of the two lists
  if (l1.val < l2.val) {
    temp = head = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    temp = head = new ListNode(l2.val);
    l2 = l2.next;
  }
  // Loop until any of the list becomes null
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = new ListNode(l1.val);
      l1 = l1.next;
      temp = temp.next;
    } else {
      temp.next = new ListNode(l2.val);
      l2 = l2.next;
      temp = temp.next;
    }
  }
  // Add all the nodes in l1, if remaining
  while (l1) {
    temp.next = new ListNode(l1.val);
    l1 = l1.next;
    temp = temp.next;
  }
  // Add all the nodes in l2, if remaining
  while (l2) {
    temp.next = new ListNode(l2.val);
    l2 = l2.next;
    temp = temp.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//Day 3
//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
