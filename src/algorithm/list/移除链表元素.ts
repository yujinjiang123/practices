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

const list = tailInsert(new ListNode(7), [7, 7, 7]);

console.log(removeElements(list, 7) + "");
