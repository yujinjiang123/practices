import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

// https://leetcode.cn/problems/reverse-nodes-in-k-group/description/?envType=study-plan-v2&envId=top-interview-150
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return null;
  }
  const h = new ListNode(-1, head);
  let p = h.next;
  let pre = h;
  while (p) {
    let i = 0;
    while (p && i < k) {
      i++;
      const next: ListNode | null = p.next;
      pre.next = p;
      p.next = next;
      p = next;
    }
    console.log(p + "", pre + "");
    pre = p!;
    p = p?.next!;
  }
  return h.next;
}

const list = tailInsert([1, 2, 3, 4, 5, 6]);
const res = reverseKGroup(list.next, 3);
console.log(res?.next + "");
