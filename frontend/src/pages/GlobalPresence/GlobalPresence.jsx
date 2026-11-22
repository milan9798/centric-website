import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./GlobalPresence.css";


import { FaArrowRight, FaPlay } from "react-icons/fa";
import heroImage from "../../assets/images/global/g-2.jpg";


import {
  FaMapMarkerAlt,
  FaCertificate,
  FaShieldAlt,
  FaIndustry,
  FaUsers,
  FaBuilding,
  FaProjectDiagram
} from "react-icons/fa";

import {
  FaAward,
  FaUserTie,
  
  FaClock,
  FaHandshake,
  FaTools,
} from "react-icons/fa";

import indiaMap from "../../assets/images/global/g-1.jpg";


function GlobalPresence() {

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="globalHero">

        <div className="heroOverlay"></div>

        <div className="heroContainer">

          <span className="heroTag">
            GLOBAL PRESENCE
          </span>

          <h1>
            Engineering <br />
            Excellence Across <br />
            India
          </h1>

          <p>
            HM Centric Engineering Pvt. Ltd. delivers world-class steel
            fabrication, railway infrastructure, bridges, metro projects
            and industrial engineering solutions across India with
            innovation, precision and uncompromising quality.
          </p>

          <div className="heroButtons">

            <a href="/projects" className="primaryBtn">
              View Projects
              <FaArrowRight />
            </a>

            <a href="/request-quote" className="secondaryBtn">
              <FaPlay />
              Request Quote
            </a>

          </div>

        </div>

        <div className="scrollDown">

          <span></span>

        </div>

      </section>


{/* =========================================
      OUR PRESENCE ACROSS INDIA
========================================= */}

<section className="presence-section">

  <div className="presence-container">

    {/* Left Content */}

    <div className="presence-content">

      <span className="presence-tag">
        OUR PRESENCE
      </span>

      <h2>
        Engineering Excellence
        <br />
        Across <span>India</span>
      </h2>

      <p>
        Centrique Infratech has established a strong presence across
        India by delivering high-quality steel fabrication, railway
        bridges, metro structures, industrial projects and
        infrastructure solutions with precision and reliability.
      </p>

      <div className="presence-list">

        <div className="presence-item">
          ✅ Railway Bridge Projects
        </div>

        <div className="presence-item">
          ✅ Metro Infrastructure
        </div>

        <div className="presence-item">
          ✅ Industrial Steel Structures
        </div>

        <div className="presence-item">
          ✅ Pan India Project Execution
        </div>

      </div>

      <button className="presence-btn">
        Explore Our Projects →
      </button>

    </div>

    {/* Right Image */}

    <div className="presence-image">

      <img
        src={heroImage}
        alt="Centrique Project"
      />

      {/* Floating Card */}

      <div className="presence-card card-one">

        <h3>120+</h3>

        <span>Projects Completed</span>

      </div>

      {/* Floating Card */}

      <div className="presence-card card-two">

        <h3>15+</h3>

        <span>Years Experience</span>

      </div>

    </div>

  </div>

</section>


{/* =====================================
        PROJECT NETWORK
===================================== */}

<section className="network-section">

  <div className="network-title">

    <span>OUR NETWORK</span>

    <h2>
      Delivering Projects Across
      <span> India</span>
    </h2>

    <p>
      From railway bridges to industrial infrastructure,
      Centrique Infratech has successfully executed projects
      across multiple states with the highest standards of
      engineering and quality.
    </p>

  </div>

  <div className="network-grid">

    <div className="network-card">

      <h3>Gujarat</h3>

      <p>
        Railway Bridges, Steel Structures,
        Industrial Fabrication
      </p>

    </div>

    <div className="network-card">

      <h3>Maharashtra</h3>

      <p>
        Metro Infrastructure,
        Heavy Steel Fabrication
      </p>

    </div>

    <div className="network-card">

      <h3>Rajasthan</h3>

      <p>
        Industrial Plants,
        Bridge Projects
      </p>

    </div>

    <div className="network-card">

      <h3>Delhi NCR</h3>

      <p>
        Infrastructure &
        Commercial Steel Works
      </p>

    </div>

    <div className="network-card">

      <h3>Madhya Pradesh</h3>

      <p>
        Railway Engineering &
        Structural Fabrication
      </p>

    </div>

   
  </div>

</section>



{/* ===========================

      PAN INDIA PRESENCE

=========================== */}

<section className="india-presence">

  <div className="india-heading">

    <span>OUR PAN INDIA PRESENCE</span>

    <h2>

      Engineering Excellence

      <br />

      Across <span>India</span>

    </h2>

    <p>

      Centrique Infratech proudly delivers high-quality infrastructure,

      railway bridges, metro projects and steel fabrication solutions

      across multiple states in India.

    </p>

  </div>

  <div className="india-wrapper">

    {/* LEFT */}

    <div className="india-left">

      <div className="feature-card">

        <FaCertificate />

        <div>

          <h3>ISO Certified</h3>

          <p>International Quality Standards</p>

        </div>

      </div>

      <div className="feature-card">

        <FaShieldAlt />

        <div>

          <h3>Safety First</h3>

          <p>Zero Compromise on Safety</p>

        </div>

      </div>

      <div className="feature-card">

        <FaIndustry />

        <div>

          <h3>Modern Infrastructure</h3>

          <p>Latest Fabrication Facilities</p>

        </div>

      </div>

    </div>

    {/* CENTER */}

    <div className="india-map">

      <img src={indiaMap} alt="India Map" />

      <span className="pin gujarat"></span>

      <span className="pin maharashtra"></span>

      <span className="pin rajasthan"></span>

      <span className="pin delhi"></span>

      <span className="pin mp"></span>

    </div>

    {/* RIGHT */}

    <div className="india-right">

      <div className="stat-card">

        <FaProjectDiagram />

        <h2>120+</h2>

        <p>Completed Projects</p>

      </div>

      <div className="stat-card">

        <FaMapMarkerAlt />


        <h2>25+</h2>

        <p>Cities Covered</p>

      </div>

      <div className="stat-card">


        <FaUsers />

        <h2>500+</h2>

        <p>Skilled Workforce</p>

      </div>

      <div className="stat-card">

        <FaBuilding />

        <h2>15+</h2>

        <p>Years Experience</p>

      </div>

    </div>

  </div>

</section>


   {/* why choose centric  */}

   <section className="trust-section">

  <div className="trust-heading">

    <span>WHY CLIENTS TRUST US</span>

    <h2>
      Building Long-Term Relationships
      <br />
      Through <span>Quality & Excellence</span>
    </h2>

    <p>
      Our commitment to engineering excellence, timely delivery and
      uncompromising quality has earned the trust of clients across India.
    </p>

  </div>

  <div className="trust-grid">

    <div className="trust-card">

      <FaAward />

      <h3>Premium Quality</h3>

      <p>
        Delivering projects with international quality standards and
        superior workmanship.
      </p>

    </div>

    <div className="trust-card">

      <FaShieldAlt />

      <h3>Safety First</h3>

      <p>
        Every project follows strict safety procedures and compliance
        standards.
      </p>

    </div>

    <div className="trust-card">

      <FaClock />

      <h3>On-Time Delivery</h3>

      <p>
        We complete projects within committed timelines without
        compromising quality.
      </p>

    </div>

    <div className="trust-card">

      <FaUserTie />

      <h3>Expert Engineers</h3>

      <p>
        Highly experienced professionals with expertise in steel
        fabrication and infrastructure.
      </p>

    </div>

    <div className="trust-card">

      <FaHandshake />

      <h3>Trusted Partnership</h3>

      <p>
        Long-lasting client relationships built on transparency,
        reliability and trust.
      </p>

    </div>

  </div>

</section>




{/* ==========================================
            CALL TO ACTION
========================================== */}

<section className="global-cta">

  <div className="global-cta-overlay">

    <span className="cta-tag">
      LET'S BUILD TOGETHER
    </span>

    <h2>
      Ready To Build Your
      <br />
      Next Landmark Project?
    </h2>

    <p>
      Partner with Centrique Infratech for world-class steel fabrication,
      bridge construction and infrastructure solutions across India.
    </p>

    <div className="cta-buttons">

      <button className="cta-orange">
        Request A Quote
      </button>

      <button className="cta-white">
        Contact Us
      </button>

    </div>

  </div>

</section>


       


      <Footer />
    </>
  );
}

export default GlobalPresence;