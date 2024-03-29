import { TreeNode } from "@/types/tree";

// 通过先序序列和中序序列生成树
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  const rootValue = preorder[0];
  const index = inorder.indexOf(rootValue);
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);
  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);
  const root = new TreeNode(
    rootValue,
    buildTree(leftPreorder, leftInorder),
    buildTree(rightPreorder, rightInorder)
  );
  return root;
}
