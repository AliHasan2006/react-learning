import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified Cart Count (In a real app, this would come from Redux or Context)
  const cartCount = 2; 

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 
      ${isScrolled 
        ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-50' 
        : 'py-8 bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        
        {/* --- BRAND LOGO --- */}
        <Link 
          to="/" 
          className="text-3xl md:text-4xl font-serif italic font-bold tracking-tighter text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
        >
          MODE 24
        </Link>

        {/* --- CENTRAL NAVIGATION --- */}
        <div className="hidden lg:flex space-x-10 uppercase text-[10px] font-bold tracking-[0.3em] text-gray-500">
          {[
            { name: 'Home', path: '/' },
            { name: 'Best Selling', path: '/best' },
            { name: 'Shop All', path: '/shop' },
            { name: 'Our Story', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ].map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`hover:text-[#4A0404] transition-all relative group
                ${location.pathname === link.path ? 'text-[#4A0404]' : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full
                ${location.pathname === link.path ? 'w-full' : ''}`}>
              </span>
            </Link>
          ))}
        </div>

        {/* --- UTILITY ICONS --- */}
        <div className="flex items-center space-x-8">
          {/* Search Icon (Hidden on very small screens) */}
          <button className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition">
            Search
          </button>

          {/* Cart Functionality */}
          <Link to="/cart" className="relative group">
            <div className="flex items-center space-x-3 bg-[#1A1A1A] text-white px-6 py-3 rounded-full hover:bg-[#4A0404] transition-all duration-300 shadow-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Bag</span>
              <span className="bg-[#C5A059] text-[#4A0404] w-5 h-5 flex items-center justify-center rounded-full text-[9px] font-black">
                {cartCount}
              </span>
            </div>
          </Link>

          {/* Mobile Menu Trigger (Hamburger) */}
          <button className="lg:hidden text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;