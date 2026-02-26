import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Setting from "../Pages/Setting";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute>
          <Dashboard/>,

        </PrivateRoute>
      },
      {
        path: "setting",
        element: <Setting/>,
      },
    ],
  },
]);

export default router;
