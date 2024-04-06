import { TreeNode } from "@/types/tree";

class Node<T = number> extends TreeNode<T> {
  random: Node<T> | null = null;
}
function copyRandomList(head: Node | null): Node | null {
  const res = new Node();
}
// s = "egg", t = "add"
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const smap: Map<string, number> = new Map();
  const tmap: Map<string, number> = new Map();
  for (const [i, ch] in [...s].entries) {
    if(smap.has(ch)&&!tmap.has(ch))
  }
}
