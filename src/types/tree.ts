import { isUndefined } from "lodash-es";

export class TreeNode<T = number> {
  val: T | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  next: TreeNode<T> | null;

  constructor(val?: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.val = isUndefined(val) ? null : val;
    this.left = isUndefined(left) ? null : left;
    this.right = isUndefined(left) ? null : right;
  }
}
