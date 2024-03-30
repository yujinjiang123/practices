import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

export function removeMin(head: ListNode) {
  let p = head.next;
  while (p?.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
}

const testData = [
  [],
  [1, 2, 3, 3, 4, 4, 4, 7, 7, 8, 9, 9],
  [1, 1, 1],
  [1, 1, 2, 3, 5],
];

testData.forEach((data) => {
  const list = tailInsert(new ListNode(-1), data);
  const h = removeMin(list);
  console.log(h.next + "");
});
