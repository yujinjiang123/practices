import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const h = new ListNode(-1);
  h.next = head;
  let p = h.next;
  let pre = h;
  while (p && p.next) {
    if (p.val === p.next.val) {
      const val = p.val;
      while (p && p.val === val) {
        p = p.next!;
      }
      pre.next = p;
    } else {
      pre = p;
      p = p.next;
    }
  }
  return h.next;
}

const list = tailInsert([1, 1, 2, 3, 4, 5, 5, 9, 9]);
const result = deleteDuplicates(list.next);
console.log(result + "");
