import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";
import ReactDOM from 'react-dom/client';

function Header() {
  const linkClass = ({ isActive }) =>
    `hover:text-blue-600 transition ${
      isActive ? "text-blue-700 font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src = 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' alt="Logo" className="h-10 w-10 rounded-full" />
        <span className="text-xl font-bold text-blue-700">Zennex</span>
      </div>
      <nav className="space-x-6">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
