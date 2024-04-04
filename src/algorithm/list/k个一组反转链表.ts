import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

function reverse(head: ListNode, k: number) {
  let p = head.next;
  head.next = null;
  while (p) {
    let next = p.next;
    p.next = head.next;
    head.next = p;
    p = next;
  }
  return head;
}

const testData = [[], [1, 2, 3, 4, 5, 6], [1, 2], [1]];

testData.forEach((data) => {
  const list = tailInsert(data);
  reverse(list, 1);
  console.log(list + "");
});
