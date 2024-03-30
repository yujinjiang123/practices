import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
