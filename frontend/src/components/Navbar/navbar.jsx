import "./Navbar.css";
import logo1 from "../../assets/images/ct-logo.jpg";
import logo2 from "../../assets/images/Ce-logo.jpg";

import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const [showSearch, setShowSearch] = useState(false);
const [search, setSearch] = useState("");
const [menuOpen, setMenuOpen] = useState(false)
;
const [servicesOpen, setServicesOpen] = useState(false);
const [aboutOpen, setAboutOpen] = useState(false);

const searchItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Career", path: "/career" },
  { name: "Gallery", path: "/gallery" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

const handleSearch = (e) => {

  if (e.key !== "Enter") return;

  const page = searchItems.find((item) =>
    item.name.toLowerCase() === search.toLowerCase().trim()
  );

  if (page) {

    navigate(page.path);

    setSearch("");

    setShowSearch(false);

  } else {

    alert("Page Not Found");

  }

};


  return (
    <header className="navbar">
     
   <div className="logo">
<Link to="/">
  <img
    src={logo1}
    alt="HM Centric Engineering Logo"
    className="logo-one"
  />
</Link>

  <div className="logo-divider"></div>
<Link to="/">
  <img
    src={logo2}
    alt="Second Logo" 
    className="logo-two"
  />
  </Link>

</div>

      <nav>
        <ul className="nav-links">

          {/* Home */}
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* About Dropdown */}
          <li className="dropdown">
            <Link to="/about">
              About Us <span className="arrow">v</span>
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/leadership">LEADERSHIP</Link>
              </li>

              <li>
                <Link to="/message">OUR MESSAGE</Link>
              </li>

              <li>
                <Link to="/values">CORE VALUES</Link>
              </li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <Link to="/services">
              Services <span className="arrow">v</span>
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/rdso-bridges-metro">
                  RDSO BRIDGES <br />
                  & METRO
                </Link>
              </li>

              <li>
                <Link to="/peb-structures">
                  PEB STRUCTURES
                </Link>
              </li>
            </ul>
          </li>

          {/* Projects */}
          <li>
            <Link to="/projects">Projects</Link>
          </li>

          {/* Career */}
          <li>
            <Link to="/career">Career</Link>
          </li>

          {/* Gallery */}
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          {/* Certificates */}
          <li>
            <Link to="/certificates">Certificates</Link>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </nav>

      {/* <button className="quote-btn">
        Get A Quote
      </button> */}

    <div className="social-icons">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/centrique.infratech/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/centrique-infratech-pvt-ltd"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  {/* facebook  */}

   <a
  href="https://www.facebook.com/your-page-name"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebookF />
</a>

  {/* Search Icon */}
  <div
    className="search-icon"
    onClick={() => setShowSearch(!showSearch)}
  >
    <FaSearch />
  </div>

  {/* Hamburger Menu */}
  <div
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </div>

</div>

{/* Search Box */}

{showSearch && (
  <div className="search-box">
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleSearch}
    />
  </div>
)}

{/* Mobile Menu */}

{/* {menuOpen && (
  <div className="mobile-menu">

    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

    <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>

    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>

    <Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link>

    <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>

    <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link>

    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

  </div>
)} */}


{menuOpen && (
  <div className="mobile-menu">

    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    {/* ABOUT */}
    {/* <div className="mobile-dropdown">

      <div
        className="mobile-dropdown-title"
        onClick={() => setAboutOpen(!aboutOpen)}
      >
        About Us {aboutOpen ? "▲" : "▼"}
      </div>  */}


      <div className="mobile-dropdown">

  <div className="mobile-dropdown-title">

    <Link 
      to="/about"
      onClick={() => setMenuOpen(false)}
    >
      About Us
    </Link>

    <span 
      onClick={() => setAboutOpen(!aboutOpen)}
    >
      {aboutOpen ? "▲" : "▼"}
    </span>

  </div>

      {aboutOpen && (
        <div className="mobile-submenu">
          <Link to="/leadership" onClick={() => setMenuOpen(false)}>
            Leadership
          </Link>

          <Link to="/message" onClick={() => setMenuOpen(false)}>
            Our Message
          </Link>

          <Link to="/values" onClick={() => setMenuOpen(false)}>
            Core Values
          </Link>
        </div>
      )}
    </div>

    {/* SERVICES */}
    {/* <div className="mobile-dropdown">

      <div
        className="mobile-dropdown-title"
        onClick={() => setServicesOpen(!servicesOpen)}
      >
        Services {servicesOpen ? "▲" : "▼"}
      </div> */}


      <div className="mobile-dropdown">

  <div className="mobile-dropdown-title">

    <Link 
      to="/services"
      onClick={() => setMenuOpen(false)}
    >
      Services
    </Link>

    <span 
      onClick={() => setServicesOpen(!servicesOpen)}
    >
      {servicesOpen ? "▲" : "▼"}
    </span>

  </div>  

      

      {servicesOpen && (
        <div className="mobile-submenu">

          <Link
            to="/rdso-bridges-metro"
            onClick={() => setMenuOpen(false)}
          >
            RDSO Bridges & Metro
          </Link>

          <Link
            to="/peb-structures"
            onClick={() => setMenuOpen(false)}
          >
            PEB Structures
          </Link>

        </div>
      )}
    </div>

    <Link to="/projects" onClick={() => setMenuOpen(false)}>
      Projects
    </Link>

    <Link to="/career" onClick={() => setMenuOpen(false)}>
      Career
    </Link>

    <Link to="/gallery" onClick={() => setMenuOpen(false)}>
      Gallery
    </Link>

    <Link to="/certificates" onClick={() => setMenuOpen(false)}>
      Certificates
    </Link>

    <Link to="/contact" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>

  </div>
)}
       
    
    </header>
  );
}

export default Navbar;