import { ListNode } from "@/types/list";

export function middleNode(head: ListNode | null): ListNode | null {
  let p = head;
  let q = head;
  while (q?.next) {
    p = p?.next!;
    q = q.next?.next!;
  }
  return p;
}
