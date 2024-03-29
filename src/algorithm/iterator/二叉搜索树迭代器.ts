import { TreeNode } from "@/types/tree";

function* generateBstIterator(root: TreeNode | null) {
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop()!;
    current = node.right;
    yield node.val;
  }
}

export class BSTIterator {
  iterator?: Generator<number | null>;
  nextValue?: {
    done?: boolean;
    value?: number | null;
  };
  constructor(root: TreeNode | null) {
    if (root === null) {
      return;
    }
    this.iterator = generateBstIterator(root);
    this.nextValue = this.iterator.next();
  }

  next(): number {
    const { value } = this.nextValue ?? {};
    this.nextValue = this.iterator?.next();
    return value as any;
  }

  hasNext(): boolean {
    return !this.nextValue?.done;
  }
}
