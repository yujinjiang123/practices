import { isUndefined } from "lodash-es";

export class TreeNode<T = number> {
  val: T | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  next: TreeNode<T> | null;

  constructor(val?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = isUndefined(val) ? null : val;
    this.left = isUndefined(left) ? null : left;
    this.right = isUndefined(right) ? null : right;
    this.next = null;
  }
}
