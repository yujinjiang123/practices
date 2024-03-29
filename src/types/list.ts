export class ListNode<T = number> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }

  toString(): string {
    const res: T[] = [];
    let p: ListNode<T> | null = this;
    while (p) {
      res.push(p.val);
      p = p.next;
    }
    return res.join(" => ");
  }
}
