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
var middleNode = function(head) {
    let count = 0;
    
    const newHead = new ListNode(null);
    newHead.next = head;
    let head1 = newHead;
    let head2 = newHead;
    
    while(head1.next !== null) {
        count++;
        head1 = head1.next;
    }
    
    let mid = Math.floor(count * 0.5);
    let i = 0;
    
    while (i <= mid) {
        head2 = head2.next;
        i++
    }
    return head2
};