import { ListNode } from "@/types/list";
import { tailInsert } from "./util";

export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return true;
  }
  let p: ListNode = head;
  let q: ListNode = head;
  const stack: number[] = [];
  while (q?.next) {
    stack.push(p!.val);
    p = p.next!;
    q = q.next.next!;
  }
  if (q) {
    p = p.next!;
  }
  while (stack.length) {
    const v = stack.pop();
    if (v !== p.val) {
      return false;
    }
    p = p.next!;
  }
  return true;
}

const list = tailInsert([1, 2, 3, 2, 2, 1]);

console.log(isPalindrome(list.next));
