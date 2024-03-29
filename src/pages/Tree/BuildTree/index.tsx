import { buildTree } from "@/algorithm/tree/util";
import BinaryTree from "@/components/BinaryTree";

const tree = buildTree([1, 2, 3], [2, 1, 3]);

const BuildTree = () => {
  return (
    <div>
      <BinaryTree tree={tree} />
    </div>
  );
};

export default BuildTree;
