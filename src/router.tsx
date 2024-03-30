import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BuildTree from "@/pages/Tree/BuildTree";

const router = createBrowserRouter([
  {
    path: "/algorithm",
    element: <App />,
    children: [
      {
        path: "tree",
        children: [
          {
            path: "buildTree",
            element: <BuildTree />,
          },
        ],
      },
    ],
  },
]);

export default router;
