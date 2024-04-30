import React from 'react'
import { Outlet } from "react-router-dom";

import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import SideBar from '../components/SideBar';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <SideBar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default Layout