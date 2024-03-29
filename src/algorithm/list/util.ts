import { ListNode } from "@/types/list";

export function generateList(arr: number[]) {
  let head = new ListNode();
  let p = head;
  for (let i of arr) {
    const node = new ListNode(i);
    p.next = node;
    p = p.next;
  }
  return head;
}

console.log(generateList([1, 2, 3]));
