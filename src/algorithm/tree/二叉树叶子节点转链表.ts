import { TreeNode } from "@/types/tree";

function listLeaf(tree: TreeNode | null): TreeNode | null {
  if (tree === null) {
    return null;
  }
  if (tree.left === null && tree.right === null) {
  }
  return tree;
}
