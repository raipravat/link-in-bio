import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Toggle from "../components/Toggle.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 👈 New state
  const navLinksRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle("menu-open");
  };

  // 👉 Handle nav scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navLinks = navLinksRef.current;

    const handleLinkClick = () => {
      if (window.innerWidth <= 768) {
        setMenuOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    const links = navLinks.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <ul
          className={`nav-links ${menuOpen ? "active" : ""}`}
          ref={navLinksRef}
        >
          <li>
            <a href="#hero" className="nav-link active">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#links" className="nav-link">
              Links
            </a>
          </li>
          <li>
            <a href="#Journey" className="nav-link">
              Journey
            </a>
          </li>
          <li>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
          </li>
         {/* <li>
            <a href="#blog" className="nav-link">
              Blogs
            </a>
          </li> */}
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <Toggle />

        <button
          className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
          aria-label="Toggle mobile menu"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
