// https://leetcode.cn/problems/remove-linked-list-elements/

import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  let myHead: ListNode | null = new ListNode(-1);
  myHead.next = head;
  let p = myHead;
  while (p.next) {
    if (p.next && p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return myHead.next;
}

export function removeElements2(
  head: ListNode | null,
  val: number
): ListNode | null {
  const h = new ListNode(-1);
  h.next = head;
  let p = h;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return h.next;
}

const list2 = tailInsert(new ListNode(7), [7, 7, 7]);
console.log(list2.next + "");
console.log(removeElements2(list2.next, 7) + "");
