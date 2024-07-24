// src/components/Navbar.js

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TOILETID</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        &#9776; {/* Icon hamburger */}
      </div>
      <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
        <div className="navbar-close" onClick={toggleNavbar}>
          &times; {/* Icon close */}
        </div>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={toggleNavbar}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={toggleNavbar}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
            onClick={toggleNavbar}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={toggleNavbar}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
