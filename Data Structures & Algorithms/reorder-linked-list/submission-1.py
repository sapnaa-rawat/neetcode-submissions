# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow = fast =  head
        # find the middle
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # cut the list and reverse the second half
        second = slow.next
        slow.next = None
        prev = None

        while second:
            nxt = second.next
            second.next = prev
            prev = second
            second = nxt
        second = prev

        # merge by altering
        first = head
        while second:
            temp1, temp2 = first.next, second.next
            first.next = second
            second.next = temp1
            first,second = temp1, temp2


        