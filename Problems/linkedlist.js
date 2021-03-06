/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Delete Node in a Linked List
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
var deleteNode = function (node) {
    node.val = node.next.val;
    let nextNode = node.next;
    node.next = node.next.next;
    nextNode.next = null;
};

// Reverse a linked list
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
var reverseList = function (head) {
    let prev = null, node = head;
    while (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
};

// Palindrome linked list
// Input: head = [1,2,2,1]
// Output: true
var isPalindrome = function (head) {
    let stack = [];

    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < stack.length / 2; i++) {
        if (stack[i] !== stack[stack.length - 1 - i]) return false;
    }
    return true;
};

// Intersection of Two Linked Lists
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
// Output: Intersected at '8'
var getIntersectionNode = function (headA, headB) {
    var currA = headA;
    var currB = headB
    while(currA != currB) {
        currA = currA === null ? headB : currA.next;
        currB = currB === null ? headA : currB.next;
    }
    return currA;
};

// Merge 2 linked list
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    const temp = new ListNode(0);
    let curr = temp;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (l1) curr.next = l1;
    if (l2) curr.next = l2;
    return temp.next;
};

// Linked List Cycle
// Input: head = [3,2,0,-4], pos = 1
// Output: true
var hasCycle = function (head) {
    let fast = head.next;
    let slow = head;

    while (fast && fast.next && slow) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) return true;
    }
    return false;
};

//Input: head = [1,1,2]
//Output: [1,2]
var deleteDuplicates = function(head) {
     var current = head;    
    while(current) {
        if(current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }    
    return head;    
};

//Remove Linked List Elements
//Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5]
//Input: head = [7,7,7,7], val = 7 Output: []
var removeElements = function(head, value) {
    if(!head) return null;
   while(head && head.val === value) {
            head = head.next;
        }
        var curr = head;
        while(curr) {
            if(curr.next && curr.next.val === value) {
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
        }
        return head;
};
