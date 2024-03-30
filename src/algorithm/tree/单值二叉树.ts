import { TreeNode } from "@/types/tree";

function isUnivalTree(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if (root.left && root.left.val !== root.val) {
    return false;
  }
  if (root.right && root.right.val !== root.val) {
    return false;
  }

  return isUnivalTree(root.left && root.right);
}

function isUnivalTree2(root: TreeNode | null): boolean {
  let current: TreeNode | null = root;
  const stack = [];
  let p = new TreeNode(root?.val);
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop()!;
    current = node.right;
    if (node.val !== p.val) {
      return false;
    }
  }
  return true;
}
