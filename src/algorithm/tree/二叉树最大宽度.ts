import { TreeNode } from "@/types/tree";
import { buildTree } from "./util";

function widthOfBinaryTree(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const queue: (TreeNode | null | undefined)[] = [root];
  let maxWidth = 1;
  while (queue.length) {
    let size = queue.length;
    if (!queue.some((e) => Boolean(e))) {
      break;
    }
    while (size--) {
      const node = queue.shift();
      queue.push(node?.left);
      queue.push(node?.right);
    }
    let i = 0;
    let j = queue.length;
    console.log(queue.length);
    while (!queue[i] && i < queue.length) {
      i++;
    }
    while (!queue[j - 1] && j > 0) {
      j--;
    }
    maxWidth = Math.max(maxWidth, j - i);
  }
  return maxWidth;
}

const tree = buildTree([1, 3, 5, 6, 2, 9, 7], [6, 5, 3, 1, 2, 7, 9]);

const width = widthOfBinaryTree(tree);

console.log(width);
