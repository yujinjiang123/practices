import { TreeNode } from "@/types/tree";
import { useRef } from "react";
import { useMount } from "ahooks";
import { TreeGraph } from "@antv/g6";

type Props = {
  tree?: TreeNode | null;
};

const data = {
  id: "Modeling Methods",
  children: [
    {
      id: "Classification",
      children: [
        {
          id: "Logistic regression",
        },
        {
          id: "Linear discriminant analysis",
        },
        {
          id: "Rules",
        },
        {
          id: "Decision trees",
        },
        {
          id: "Naive Bayes",
        },
        {
          id: "K nearest neighbor",
        },
        {
          id: "Probabilistic neural network",
        },
        {
          id: "Support vector machine",
        },
      ],
    },
    {
      id: "Consensus",
      children: [
        {
          id: "Models diversity",
          children: [
            {
              id: "Different initializations",
            },
            {
              id: "Different parameter choices",
            },
            {
              id: "Different architectures",
            },
            {
              id: "Different modeling methods",
            },
            {
              id: "Different training sets",
            },
            {
              id: "Different feature sets",
            },
          ],
        },
        {
          id: "Methods",
          children: [
            {
              id: "Classifier selection",
            },
            {
              id: "Classifier fusion",
            },
          ],
        },
        {
          id: "Common",
          children: [
            {
              id: "Bagging",
            },
            {
              id: "Boosting",
            },
            {
              id: "AdaBoost",
            },
          ],
        },
      ],
    },
    {
      id: "Regression",
      children: [
        {
          id: "Multiple linear regression",
        },
        {
          id: "Partial least squares",
        },
        {
          id: "Multi-layer feedforward neural network",
        },
        {
          id: "General regression neural network",
        },
        {
          id: "Support vector regression",
        },
      ],
    },
  ],
};

const BinaryTree = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { tree } = props;
  useMount(() => {
    const container = ref.current!;
    const graph = new TreeGraph({
      container, // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: 800, // Number，必须，图的宽度
      height: 500, // Number，必须，图的高度
      linkCenter: true,
      modes: {
        default: [
          {
            type: "collapse-expand",
            onChange: function onChange(item, collapsed) {
              const data = item?.get("model");
              data.collapsed = collapsed;
              return true;
            },
          },
          "drag-canvas",
          "zoom-canvas",
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: "cubic-vertical",
      },
      layout: {
        type: "dendrogram",
        direction: "TB", // H / V / LR / RL / TB / BT
        nodeSep: 40,
        rankSep: 100,
      },
    });
    graph.node(function (node) {
      let position = "right";
      let rotate = 0;
      if (!node.children) {
        position = "bottom";
        rotate = Math.PI / 2;
      }
      return {
        label: node.id,
        labelCfg: {
          position,
          offset: 5,
          style: {
            rotate,
            textAlign: "start",
          },
        },
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();
    if (typeof window !== "undefined") {
      window.onresize = () => {
        if (!graph || graph.get("destroyed")) return;
        if (!container || !container.scrollWidth || !container.scrollHeight)
          return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };
    }
  });
  return (
    <>
      <div id="1" ref={ref} style={{ width: 600, height: 400 }}></div>
    </>
  );
};

export default BinaryTree;
