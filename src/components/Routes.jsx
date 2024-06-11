import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Delete from "../pages/Delete";
import CreateBlog from "../pages/CreateBlog";
import Blog from "../pages/Blog"
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Cookies from 'js-cookie'

const Router =  () => {
  const [token, setToken] = React.useState()
  // setToken(Cookies.get('access_token'))

 
  
  React.useEffect(() => {
    setToken(Cookies.get('access_token'))

  },[])
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
          path: "/login",
          element: <Login/>
        },
        {
          path:'/logout',
          element: <Logout/>
        },
        {
          path: "blog/create",
          element: <CreateBlog/>
        },
        {
          path:"blog/:blogId/edit",
          element: <Edit/>
        },
        {
          path: "blog/:blogId/delete",
          element: <Delete/>
        },
        {
          path: "blog/:blogId",
          element: <Blog/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  ) 
}

export default Router