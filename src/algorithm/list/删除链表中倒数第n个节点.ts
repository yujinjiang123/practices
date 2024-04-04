import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null;
  }
  const h = new ListNode(-1);
  h.next = head;
  let p: ListNode = h.next;
  let pre: ListNode = h;
  while (n > 0) {
    p = p.next!;
    n--;
  }
  while (p) {
    p = p.next!;
    pre = pre.next!;
  }
  pre.next = pre.next?.next ?? null;
  return h.next;
}

const list = tailInsert([1, 2, 3]);
const res = removeNthFromEnd(list.next, 3);

console.log(res + "");
