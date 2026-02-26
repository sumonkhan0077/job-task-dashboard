import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: "",
      },
      {
        path: "home",
        element: "",
      },
    ],
  },
]);

export default router;
