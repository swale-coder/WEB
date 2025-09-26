import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>Catalyst Digital</h2>
          <p>Crafting innovative web solutions that elevate your business..</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Email: support@Catalyst Digital.com</p>
          <p>Phone: +91 6352781785</p>
          <p>Address: 123 Builder Street, Ahmedabad, Gujarat, India</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Catalyst Digital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
