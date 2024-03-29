import { TreeNode } from "@/types/tree";

// https://leetcode.cn/problems/balanced-binary-tree/
export function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

function height(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return Math.max(height(root.left), height(root.right)) + 1;
}