/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   let newHead = null
   if(!head || !head.next) return head

   newHead = reverseList(head.next)
   head.next.next = head
   head.next = null
   return newHead
    
};