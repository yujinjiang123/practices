import { ListNode } from "@/types/list";
import { tailInsert } from "./util";
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 10^9
// 链表中节点的数目在范围 [0, 500] 内
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return null;
  }
  let p: ListNode | null = head;
  let length = 0;
  while (p) {
    p = p.next;
    length++;
  }
  let realK = k % length;
  if (realK === 0) {
    return head;
  }
  const h = new ListNode(-1, head);
  h.next = head;
  p = head;
  let q = head;
  while (realK--) {
    p = p.next!;
  }
  while (p.next) {
    p = p.next;
    q = q.next!;
  }
  h.next = q.next;
  q.next = null;
  p.next = head;
  return h.next;
}
const list = tailInsert([1, 2, 3, 4, 5]);
const res = rotateRight(list.next, 6);
console.log(res + "");
