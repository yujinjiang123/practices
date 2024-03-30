// https://leetcode.cn/problems/linked-list-cycle/
import { ListNode } from "@/types/list";

function hasCycle(head: ListNode | null): boolean {
  let p = head;
  let q = head;
  while (p) {
    p = p.next;
    q = q?.next?.next || null;
    if (p && q && p === q) {
      return true;
    }
  }
  return false;
}
