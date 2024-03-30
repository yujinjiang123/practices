import { TreeNode } from "@/types/tree";

// 2: or  3: and
function evaluateTree(root: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return Boolean(root.val);
  }
  const leftValue = evaluateTree(root.left);
  const rightValue = evaluateTree(root.right);
  return root.val === 2 ? leftValue || rightValue : leftValue && rightValue;
}
