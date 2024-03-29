import { TreeNode } from "@/types/tree";

export function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  // 说明有一个为空
  if (root.left === null || root.right === null) {
    return Math.max(left, right) + 1;
  }
  return Math.min(left, right) + 1;
}
