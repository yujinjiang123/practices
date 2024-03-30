import { TreeNode } from "@/types/tree";

export function increasingBST(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  let current: TreeNode | null = root;
  let stack: TreeNode[] = [];
  let p: TreeNode = new TreeNode();
  const res: TreeNode = p;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop()!;
    current = node.right;
    p.right = node;
    node.left = null;
    p = node;
  }
  return res.right;
}
