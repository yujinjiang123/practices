import { ListNode } from "@/types/list";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let p = l1;
  let q = l2;
  const h = new ListNode(-1);
  let flag = false;
  let pre = h;
  while (p && q) {
    let value = p.val + q.val + (flag ? 1 : 0);
    if (value >= 10) {
      value = value % 10;
      flag = true;
    } else {
      flag = false;
    }
    p.val = value;
    pre.next = p;
    p = p.next;
    q = q.next;
    pre = p!;
  }
  while (p) {
    let value = p.val + (flag ? 1 : 0);
    if (value >= 10) {
      value = value % 10;
      flag = true;
    } else {
      flag = false;
    }
    pre.next = p;
    p = p.next;
    pre = p!;
  }
  while (q) {}
  return h.next;
}
