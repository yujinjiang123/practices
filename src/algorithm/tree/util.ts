import { TreeNode } from "@/types/tree";
import { isNull, isUndefined } from "lodash-es";

export function buildTree(
  preorder: number[],
  inorder?: number[]
): TreeNode | null;
export function buildTree(order: (number | null)[]): TreeNode | null;
export function buildTree(...args: any[]): TreeNode | null {
  if (args.length === 2) {
    const [preorder, inorder] = args;
    return buildTreeByPreorderAndInorder(preorder, inorder);
  } else {
    const [order] = args;
    return buildTreeByOrder(order);
  }
}

// 由先序序列&中序序列建立二叉树
function buildTreeByPreorderAndInorder(
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
    buildTreeByPreorderAndInorder(leftPreorder, leftInorder),
    buildTreeByPreorderAndInorder(rightPreorder, rightInorder)
  );
  return root;
}

const a = [3, 9, 20, null, null, 15, 7];
function buildTreeByOrder(order: (number | null)[]): TreeNode | null {
  if (!Array.isArray(order) || order.length === 0) {
    return null;
  }
  let level = 1;
  while (true) {
    
  }
}

console.log(buildTree(a));
debugger;
