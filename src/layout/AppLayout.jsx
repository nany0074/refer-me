import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from '../common/navbar/Navbar';
import AppSidebar from '../common/sidebar/AppSidebar';
import Footer from '../common/footer/Footer';

const AppLayout = () => {
  return (
    <>
    <ScrollRestoration/>
    <Navbar/>
    {/* <AppSidebar/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout