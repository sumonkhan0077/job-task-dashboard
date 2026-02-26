import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Setting from "../Pages/Setting";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      {
        index: true,
        element:<Dashboard/>,
      },
      {
        path: "setting",
        element: <Setting/>,
      },
    ],
  },
]);

export default router;
