import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let res = new ListNode(-1);
  let p = list1;
  let q = list2;
  let pre = res;
  while (p && q) {
    if (p.val < q.val) {
      pre.next = p;
      p = p.next;
    } else {
      pre.next = q;
      q = q.next;
    }
    pre = pre.next;
  }
  if (p) {
    pre.next = p;
  }
  if (q) {
    pre.next = q;
  }
  return res.next;
}

const list1 = tailInsert([1, 2, 3]);
const list2 = tailInsert([3, 5, 6]);
const res = mergeTwoLists(list1.next, list2.next);
console.log(res + "");
