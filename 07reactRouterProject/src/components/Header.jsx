import React from 'react';
import { NavLink } from 'react-router-dom';

// Simple styling to make it look decent
const headerStyle = {
  display: 'flex',
  gap: '20px',
  padding: '10px 20px',
  backgroundColor: '#282c34',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const getLinkStyle = ({ isActive }) => ({
  color: isActive ? '#61dafb' : 'white',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px',
  transition: 'color 0.3s',
});

function Header() {
  return (
    <nav style={headerStyle}>
      {/* Internal Links using NavLink */}
      <NavLink to="/" style={getLinkStyle} end>
        Home
      </NavLink>
      <NavLink to="/about" style={getLinkStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={getLinkStyle}>
        Contact
      </NavLink>
       <NavLink to="/github" style={getLinkStyle}>
        Github
      </NavLink>

      {/* External Link using a standard <a> tag */}
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...getLinkStyle({ isActive: false }), marginLeft: 'auto' }} // Added marginLeft for spacing
      >
        GitHub 🐙
      </a>
    </nav>
  );
}

export default Header;