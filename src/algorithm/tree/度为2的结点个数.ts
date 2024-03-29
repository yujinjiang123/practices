import { TreeNode } from "@/types/tree";

export function dsonNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return root.left && root.right
    ? 1 + dsonNodes(root.left) + dsonNodes(root.right)
    : dsonNodes(root.left) + dsonNodes(root.right);
}
