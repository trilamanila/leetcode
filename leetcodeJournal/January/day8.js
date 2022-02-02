// Day 8 1/8/2022

/*
Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -231 <= nums[i] <= 231 - 1


*/
var majorityElement = function(nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

/*
Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

*/

var reverseList = function(head) {
  // empty or only one node
  if (head === null || head.next === null) return head;

  let newHead = new ListNode();
  let next = new ListNode();
  while (head !== null) {
    // next helper create
    next = head.next;
    // disconnect, and point to newHead.next
    head.next = newHead.next;
    // move newHead.next to head
    newHead.next = head;
    // move head to next location
    head = next;
  }
  return newHead.next;
};
