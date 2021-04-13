/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        var mockHead = new ListNode(0);
        var i = l1;
        var j = l2;
        var carry = 0;
        ListNode current = mockHead;
        while(i != null || j != null)
        {
            var i2 = i != null ? i.val : 0;
            var j2 = j != null ? j.val : 0;
            var t = i2 + j2 + carry;
            carry = t / 10 > 0 ? 1 : 0;
            current.next = new ListNode(t % 10);
            current = current.next;
            i = i?.next;
            j = j?.next;
        }
        if(carry != 0)
        {
            current.next = new ListNode(carry);
        }
        return mockHead.next;
    }
}