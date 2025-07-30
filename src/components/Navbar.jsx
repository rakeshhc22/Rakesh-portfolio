import React, { useState, useEffect } from "react";
import "../styles/navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="logo">Portfolio</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          id="hamburger"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`} id="nav-links">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li>
            <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
