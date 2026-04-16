import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function Layout (){

    return(
        <>
        <Header/>
        <Outlet />
        <Footer />
        
        </>
    )
}
export default Layout