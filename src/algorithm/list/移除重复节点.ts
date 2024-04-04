import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

// https://leetcode.cn/problems/remove-duplicate-node-lcci/
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  const map: Record<number, any> = {};
  let h = new ListNode(-1);
  h.next = head;
  let pre = h;
  let p = h.next;
  while (p) {
    if (!map[p.val]) {
      map[p.val] = 1;
      pre.next = p;
      pre = p;
      p = p.next;
    } else {
      pre.next = p.next;
      p = p.next;
    }
  }
  return h.next;
}

const list = tailInsert([1, 2, 3, 2, 1, 2, 1, 1, 1]);
const res = removeDuplicateNodes(list.next);

console.log(res + "");
