import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logowhitepace.png" alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Products</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="primary-btn">Try Whitepace free</button>
      </div>
    </nav>
  );
}

export default Navbar;
