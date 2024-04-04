import { ListNode } from "@/types/list";

// 头插法
export function headInsert<T = number>(arr: T[]) {
  const head = new ListNode(Infinity);
  for (let i of arr) {
    const node = new ListNode(i);
    node.next = head.next as any;
    head.next = node as any;
  }
  return head;
}

// 尾插法
export function tailInsert<T = number>(arr: T[]) {
  const head = new ListNode(Infinity);
  let p: ListNode<T> = head as any; // 尾部指针
  for (let i of arr) {
    const node = new ListNode(i);
    p.next = node;
    p = node;
  }
  return head;
}
