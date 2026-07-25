import "./Footer.css";
import logo1 from "../../assets/images/ct-logo.jpg";
// import logo2 from "../../assets/images/Ce-logo.jpg";

// import logo from "../../assets/logos/ind.png";

import { FaInstagram, FaLinkedin,FaFacebookF} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo1} alt="Centrique Infratech" />
           {/* <img src={logo2} alt="second logo" /> */}

          <h3>Centrique Infratech Pvt. Ltd</h3>
          <p>
            Building excellence with innovation, precision, and
            world-class infrastructure solutions.
          </p>
        </div>

        {/* Navigate */}
        <div className="footer-column">
          <h3>NAVIGATE</h3>

          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Information */}
       <div className="footer-column">
  <h3>INFORMATION</h3>

  <Link to="/global-presence">
    Global Presence
  </Link>

  <Link to="/request-quote">
    Request a Quote
  </Link>

  <Link to="/faq">
    FAQ
  </Link>

  <Link to="/privacy-policy">
    Privacy Policy
  </Link>

</div>

        {/* Career */}
        <div className="footer-column">
          <h3>CAREERS</h3>

          <Link to="/career">Career Opportunities</Link>
          <p>
            Join our team and build the future of infrastructure with us.
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2026 Centrique Infratech Pvt. Ltd. All Rights Reserved.
        </p>


        <div className="social-icons">
          <a href="#">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/company/centrique-infratech-pvt-ltd">
            <FaLinkedin />
          </a>

           <a
            href="https://www.facebook.com/your-page-name"
           
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;