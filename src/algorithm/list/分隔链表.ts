import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

function partition(head: ListNode | null, x: number): ListNode | null {
  const h = new ListNode(-1);
  h.next = head;
  let pre = h;
  let p = head;
  while (p && p.val < x) {
    p = p.next;
    pre = pre.next!;
  }
  while (p?.next) {
    if (p.next.val < x) {
      const next = p.next;
      p.next = next.next;
      next.next = pre.next;
      pre.next = next;
      pre = next;
    } else {
      p = p.next;
    }
  }
  return h.next;
}

const list = tailInsert([2, 1]);
console.log(list + "");
const l = partition(list.next, 2);
console.log(l + "");
