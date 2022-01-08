// Day 7 1/7/2022
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.Node = function(val) {
    this.val = val;
    this.min = 0;
    this.next = null;
  };
  this.head = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  var node = new this.Node(x);
  if (this.head) {
    node.next = this.head;
    node.min = Math.min(x, this.head.min);
  } else {
    node.min = x;
  }
  this.head = node;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.head) this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.head ? this.head.val : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.head ? this.head.min : 0;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*
Intersection of Two Linked Lists
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

    intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
    listA - The first linked list.
    listB - The second linked list.
    skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
    skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.

The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
*/
var getIntersectionNode = function(headA, headB) {
  var lenA = getLen(headA);
  var lenB = getLen(headB);
  let diff = Math.abs(lenA - lenB);

  if (lenA > lenB) {
    while (diff--) headA = headA.next;
  } else {
    while (diff--) headB = headB.next;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

var getLen = function(head) {
  var len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
};
