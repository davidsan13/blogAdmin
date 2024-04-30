import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import CreateBlog from "../pages/CreateBlog";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";


const Router =  () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "blog/create",
          element: <CreateBlog/>
        },
        {
          path:"blog/:blogId/edit",
          element: <Edit/>
        }

  
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default Router