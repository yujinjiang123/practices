import { TreeNode } from "@/types/tree";
import { buildTree } from "./util";

function kthSmallest(root: TreeNode | null, k: number): number {
  let current = root;
  let stack = [];
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop()!;
    if (--k === 0) {
      return node.val!;
    }
    current = node.right;
  }
  return -1;
}

const tree = buildTree([5, 3, 2, 1, 4, 6], [1, 2, 3, 4, 5, 6]);
console.log(kthSmallest(tree, 5));
