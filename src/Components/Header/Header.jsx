// src/Header.jsx
import React from 'react';
import './Header.css';
import logo from '../Svgs/H_Logo.svg'; // Update with the path to your logo

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-circle">
          <img src={logo} alt="Perfect Creation Logo" className="logo-img" />
        </div>
        <span className="logo-text">Perfect Creation</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#service">Service</a></li>
        </ul>
      </nav>
      <button className="contact-button">Contact Us</button>
    </header>
  );
}

export default Header;
