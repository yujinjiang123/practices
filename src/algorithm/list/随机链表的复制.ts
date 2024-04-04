import { TreeNode } from "@/types/tree";

class Node<T = number> extends TreeNode<T> {
  random: Node<T> | null = null;
}
function copyRandomList(head: Node | null): Node | null {
  const res = new Node();
}
