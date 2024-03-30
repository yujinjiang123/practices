import { buildTree } from "@/algorithm/tree/util";
import BinaryTree from "@/components/BinaryTree";
import JsonInput from "@/components/JsonInput";
import { Form } from "antd";

const BuildTree = () => {
  const [form] = Form.useForm();
  const preorder = Form.useWatch("preorder", form) as number[];
  const inorder = Form.useWatch("inorder", form) as number[];
  const tree = buildTree(preorder, inorder);
  console.log(tree);
  return (
    <div>
      <Form
        form={form}
        initialValues={{
          preorder: [1, 2, 3],
          inorder: [2, 1, 3],
        }}
      >
        <Form.Item name="preorder" label="先序序列">
          <JsonInput height={40} />
        </Form.Item>
        <Form.Item name="inorder" label="中序序列">
          <JsonInput height={40} />
        </Form.Item>
      </Form>
      <BinaryTree tree={tree} />
    </div>
  );
};

export default BuildTree;
