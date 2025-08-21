import React from "react";
import Header from './componenets/Header/Header.jsx'
import Footer from './componenets/Footer/Footer.jsx'
import { Outlet } from "react-router-dom";
import Home from "./componenets/Home/Home.jsx";

function Layout() {
 return (
<>
<Header />
<Home />
<Footer />
</>
 )
}
   export default Layout; 
