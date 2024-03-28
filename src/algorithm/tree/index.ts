import { TreeNode } from "../../types/tree";


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
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
    buildTree(rightPreorder, rightInorder),
  );
  return root;
}

function connect(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const node = queue.shift()!;
      const next = size === 0 ? null : queue[0];
      node.next = next;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
}

function flatten(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  while (!current || stack.length) {
    if (current) {
      //   visit(current);
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop()!;
      current = current.right;
    }
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }
  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

function averageOfLevels(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) {
    return res;
  }
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    let sum = 0;
    let total = size;
    while (size--) {
      const node = queue.shift()!;
      sum += node?.val;
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
    res.push(sum / total);
  }
  return res;
}

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (root === null) {
    return res;
  }
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    const level: number[] = [];
    while (size--) {
      let node = queue.shift()!;
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(level);
  }
  return res;
}

function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) {
    return res;
  }
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      let node = queue.shift()!;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      if (size === 0) {
        res.push(node.val);
      }
    }
  }
  return res;
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (root === null) {
    return res;
  }
  const queue = [root];
  let flag = false;
  while (queue.length) {
    let size = queue.length;
    const level: number[] = [];
    flag = !flag;
    while (size--) {
      let node = queue.shift()!;
      flag ? level.push(node.val) : level.unshift(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(level);
  }
  return res;
}

//TODO:
function sumNumbers(root: TreeNode | null): number {
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  let sum = 0;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      if (!current.left && !current.right) {
        sum += Number(stack.map((e) => e.val).join(""));
      }
      current = current.left;
    }
    const node = stack.pop()!;
    current = node.right;
  }
  return sum;
}

function* generateBstIterator(root: TreeNode | null) {
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop()!;
    current = node.right;
    if (current || stack.length) {
      yield node.val;
    } else {
      return node.val;
    }
  }
}

class BSTIterator {
  done: boolean = true;
  iterator?: Iterator<number>;
  constructor(root: TreeNode | null) {
    this.done = root === null;
    this.iterator = generateBstIterator(root);
  }

  next(): number {
    const { value, done = false } = this.iterator?.next() ?? {};
    this.done = done;
    return value;
  }

  hasNext(): boolean {
    return !this.done;
  }
}

// 二叉搜索树中第K小的元素。val>0
function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) {
    return 0;
  }
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop()!;
    k--;
    if (k === 0) {
      return node.val;
    }
    current = node.right;
  }
  return 0;
}

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if (root.left && root.left.val > root.val) {
    return false;
  }
  if (root.right && root.right.val < root.val) {
    return false;
  }
  
  return isValidBST(root.left) && isValidBST(root.right);
}
