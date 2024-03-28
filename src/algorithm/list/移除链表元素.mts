// https://leetcode.cn/problems/remove-linked-list-elements/

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let p = head;
  let pre = head;
  while (p) {
    if (p.val === val) {
      p = p.next;
      pre!.next = p;
    } else {
      pre = p;
      p = p.next;
    }
  }
  return head;
}
