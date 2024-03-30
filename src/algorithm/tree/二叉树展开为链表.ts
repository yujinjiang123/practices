import { TreeNode } from "@/types/tree";

function flatten(root: TreeNode | null): void {
  let current = root;
  let stack = [];
  let order = [];
  while (current || stack.length) {
    while (current) {
      //visit
      stack.push(current);
      order.push(current);
      current = current.left;
    }
    const node = stack.pop()!;
    current = node.right;
  }
  for (let i = 0, length = order.length; i < length; i++) {
    order[i].right = order[i + 1] || null;
    order[i].left = null;
  }
}
