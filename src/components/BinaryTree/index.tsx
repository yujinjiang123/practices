import { TreeNode } from "@/types/tree";
import { useRef } from "react";
import { useMount } from "ahooks";
import * as echarts from "echarts";

type Props = {
  tree?: TreeNode | null;
};

const BinaryTree = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { tree } = props;
  console.log(tree);
  useMount(() => {
    const chart = echarts.init(ref.current);
    chart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  });
  return (
    <>
      <div ref={ref} style={{ width: 600, height: 400 }}></div>
    </>
  );
};

export default BinaryTree;
