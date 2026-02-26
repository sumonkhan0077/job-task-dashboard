import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Setting from "../Pages/Setting";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      {
        index: true,
        element:<Login/>,
      },
      {
        path:"dashboard",
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
