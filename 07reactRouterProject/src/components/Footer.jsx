import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Links and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          
          {/* Logo/Brand */}
          <Link to="/" className="text-2xl font-bold text-blue-400 mb-4 md:mb-0 hover:text-blue-300 transition">
            My App
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center space-x-6 text-lg">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            
            {/* External Link */}
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {currentYear} My App. All rights reserved. Built with React and Tailwind CSS.
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;