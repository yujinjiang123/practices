import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

// 删除带头节点的链表的最小元素
export function removeMin(head: ListNode) {
  let pre = head;
  let minPre = head;
  let p = head?.next;
  let minP = p;
  while (p) {
    if (p.val < minP!.val) {
      minP = p;
      minPre = pre;
    }
    pre = p;
    p = p.next;
  }
  minPre.next = minPre.next?.next ?? null;
  return head;
}

const testData = [[], [1, 2, 3, 5, 6], [1, 2, 3, -3, 4], [1, 2, 6, 3, 4, -3]];

testData.forEach((data) => {
  const list = tailInsert(new ListNode(-1), data);
  const h = removeMin(list);
  console.log(h.next + "");
});
