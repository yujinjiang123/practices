import { TreeNode } from "@/types/tree";

function removeTreeNode(tree: TreeNode | null, v: number): TreeNode | null {
  if (tree === null) {
    return null;
  }
  removeTreeNode(tree.left ?? null, v);
  removeTreeNode(tree.right ?? null, v);
  if (tree.val === v) {
    return null;
  }
  if (tree.left?.val === v) {
    tree.left = null;
  }
  if (tree.right?.val === v) {
    tree.left = null;
  }
  return tree;
}
