//Day 16 1/16/2022

/*
Remove the Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

*/

var removeNthFromEnd = function(head, n) {
  //Two pointers - fast and slow
  let slow = head;
  let fast = head;
  //Move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (fast.next === null) {
      //If n is equal to the number of nodes, delete the head node
      if (i === n - 1) {
        head = head.next;
      }
      return head;
    }
    fast = fast.next;
  }
  //Loop until we reach to the end.
  //Now we will move both fast and slow pointers
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  //Delink the nth node from last
  if (slow.next !== null) {
    slow.next = slow.next.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

*/

var generateParenthesis = function(n) {
  //Resultant list
  const result = [];
  //Recursively generate parentheses
  generate(result, "", 0, 0, n);
  return result;
};

function generate(result, s, open, close, n) {
  //Base condition
  if (open === n && close === n) {
    result.push(s);
    return;
  }
  //If the number of open parentheses is less than the given n
  if (open < n) {
    generate(result, s + "(", open + 1, close, n);
  }
  //If we need more close parentheses to balance
  if (close < open) {
    generate(result, s + ")", open, close + 1, n);
  }
}
