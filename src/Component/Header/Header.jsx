import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Catalyst Digital logo.png";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-brand">
        <a href="/" className="logo-link">
          <img src={logo} alt="Catalyst Digital Logo" className="logo-image" />
          <span className="logo-text">Catalyst Digital</span>
        </a>
      </div>

      <button
        className={`hamburger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="hamburger-line line1"></span>
        <span className="hamburger-line line2"></span>
        <span className="hamburger-line line3"></span>
      </button>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/testimonial">Testimonial</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="header-buttons">
        <button className="btn secondary">Login</button>
        <button className="btn primary">Get Started</button>
      </div>
    </header>
  );
}

export default Header;
