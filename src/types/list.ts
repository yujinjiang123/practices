export class ListNode<T = number> {
  val: T | null;
  next: ListNode | null;
  constructor(val?: T, next?: ListNode | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}
