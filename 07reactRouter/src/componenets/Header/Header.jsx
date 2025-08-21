import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to=''
               
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
              >
                GitHub
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Login Button */}
         {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/login"
            className="text-sm font-semibold text-gray-900 hover:text-orange-700 duration-200"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
