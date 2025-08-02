import React from "react";
import Header from './componenets/Header/Header.jsx'
import Footer from "./componenets/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
