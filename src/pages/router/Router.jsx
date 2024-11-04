
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../root/Root";
import Home from "../Home/Home";
import Statistic from "../Statistic/Statistic";
import Dashboard from "../Dashboard/Dashboard";
import Blogs from "../Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          children: [
              {
                  path: "/",
                  element: <Home/>
              },
              {
                  path: "/statistics",
                  element: <Statistic/>
              },
              {
                  path: "/dashboard",
                  element: <Dashboard/>
              },
              {
                  path: "/blogs",
                  element: <Blogs/>
              },
          ]
        },
      ],
    },
  ]);

export default router;