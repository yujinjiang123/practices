import { ListNode } from "@/types/list";

// 头插法
export function headInsert<T = number>(head: ListNode<T>, arr: T[]) {
  for (let i of arr) {
    const node = new ListNode(i);
    node.next = head.next;
    head.next = node;
  }
  return head;
}

// 尾插法
export function tailInsert<T = number>(head: ListNode<T>, arr: T[]) {
  let p = head; // 尾部指针
  for (let i of arr) {
    const node = new ListNode(i);
    p.next = node;
    p = node;
  }
  return head;
}
