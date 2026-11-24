
//  ye shi code hai brother smjh gye na bhai isko mere ko comment kr rha hu bhai smjh gye na bhai 








import "./navbar.css";

import logo1 from "../../assets/images/ct-logo.jpg";
import logo2 from "../../assets/images/Ce-logo.jpg";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const searchItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Gallery", path: "/gallery" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
    { name: "Leadership", path: "/leadership" },
    { name: "Our Message", path: "/message" },
    { name: "Core Values", path: "/values" },
    { name: "RDSO Bridges Metro", path: "/rdso-bridges-metro" },
    { name: "PEB Structures", path: "/peb-structures" },
    { name: "Global Presence", path: "/global-presence" },
    { name: "Request Quote", path: "/request-quote" },
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  // Close menu and reset dropdown states
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  // Close search
  const closeSearch = () => {
    setShowSearch(false);
    setSearch("");
  };

  // Search page
  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim().toLowerCase();

    if (!query) {
      return;
    }

    const page = searchItems.find(
      (item) => item.name.toLowerCase() === query
    );

    if (page) {
      navigate(page.path);
      closeSearch();
      closeMobileMenu();
    } else {
      alert("Page not found. Please enter a valid page name.");
    }
  };

  // Focus input when search opens
  useEffect(() => {
    if (showSearch) {
      searchRef.current?.focus();
    }
  }, [showSearch]);

  // Close search and mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeSearch();
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Reset dropdowns when mobile menu closes
  useEffect(() => {
    if (!menuOpen) {
      setAboutOpen(false);
      setServicesOpen(false);
    }
  }, [menuOpen]);

  return (
    <header className="navbar">
      {/* Logos */}
      <div className="logo">
        <Link to="/" onClick={closeMobileMenu} aria-label="Home">
          <img
            src={logo1}
            alt="Centrique Infratech Logo"
            className="logo-one"
          />
        </Link>

        <div className="logo-divider" />

        <Link to="/" onClick={closeMobileMenu} aria-label="Home">
          <img
            src={logo2}
            alt="Centrique Logo"
            className="logo-two"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Main navigation">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* About dropdown */}
          <li className="dropdown">
            <Link to="/about">
              About Us <span className="arrow">▼</span>
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/leadership">Leadership</Link>
              </li>
              <li>
                <Link to="/message">Our Message</Link>
              </li>
              <li>
                <Link to="/values">Core Values</Link>
              </li>
            </ul>
          </li>

          {/* Services dropdown */}
          <li className="dropdown">
            <Link to="/services">
              Services <span className="arrow">▼</span>
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/rdso-bridges-metro">
                  RDSO Bridges &amp; Metro
                </Link>
              </li>
              <li>
                <Link to="/peb-structures">PEB Structures</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/certificates">Certificates</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Right Actions */}
      <div className="navbar-actions">
        <div className="navbar-social-icons">
          <a
            href="https://www.instagram.com/centrique.infratech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/centrique-infratech-pvt-ltd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/your-page-name"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Search toggle */}
        <button
          type="button"
          className="search-icon"
          aria-label={showSearch ? "Close search" : "Open search"}
          aria-expanded={showSearch}
          onClick={() => {
            setShowSearch((prev) => !prev);
            setSearch("");
          }}
        >
          {showSearch ? <FaTimes /> : <FaSearch />}
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((prev) => !prev);
            closeSearch();
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Search Form */}
      {showSearch && (
        <form className="search-box" onSubmit={handleSearch}>
          <input
            ref={searchRef}
            type="search"
            placeholder="Search pages (e.g. Projects)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search website pages"
          />

          <button type="submit" aria-label="Submit search">
            <FaSearch />
          </button>
        </form>
      )}

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>

          {/* About */}
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-title">
              <Link to="/about" onClick={closeMobileMenu}>
                About Us
              </Link>

              <button
                type="button"
                aria-label="Toggle About submenu"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((prev) => !prev)}
              >
                {aboutOpen ? "▲" : "▼"}
              </button>
            </div>

            {aboutOpen && (
              <div className="mobile-submenu">
                <Link to="/leadership" onClick={closeMobileMenu}>
                  Leadership
                </Link>
                <Link to="/message" onClick={closeMobileMenu}>
                  Our Message
                </Link>
                <Link to="/values" onClick={closeMobileMenu}>
                  Core Values
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-title">
              <Link to="/services" onClick={closeMobileMenu}>
                Services
              </Link>

              <button
                type="button"
                aria-label="Toggle Services submenu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                {servicesOpen ? "▲" : "▼"}
              </button>
            </div>

            {servicesOpen && (
              <div className="mobile-submenu">
                <Link
                  to="/rdso-bridges-metro"
                  onClick={closeMobileMenu}
                >
                  RDSO Bridges &amp; Metro
                </Link>
                <Link to="/peb-structures" onClick={closeMobileMenu}>
                  PEB Structures
                </Link>
              </div>
            )}
          </div>

          <Link to="/projects" onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link to="/career" onClick={closeMobileMenu}>
            Career
          </Link>
          <Link to="/gallery" onClick={closeMobileMenu}>
            Gallery
          </Link>
          <Link to="/certificates" onClick={closeMobileMenu}>
            Certificates
          </Link>
          <Link to="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
