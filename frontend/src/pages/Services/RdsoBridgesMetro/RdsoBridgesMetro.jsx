import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/Footer";
import "./RdsoBridgesMetro.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



import {
  FaCheckCircle,
  FaAward,
  FaIndustry,
  FaShieldAlt,
  FaUsers,
  FaClock
} from "react-icons/fa";



import heroBridge from "../../../assets/images/RdsoBridgesMetro/mt-1.jpg";
import aboutBridge from "../../../assets/images/RdsoBridgesMetro/mt-3.jpg";

import fob from "../../../assets/images/RdsoBridgesMetro/ft-1.jpg";
import bowstring from "../../../assets/images/RdsoBridgesMetro/ft-2.jpg";
import composite from "../../../assets/images/RdsoBridgesMetro/ft-3.jpg";



import rdsoLogo from "../../../assets/logos/ind.png";
import railwayLogo from "../../../assets/logos/logo-2.jpg";
import rvnlLogo from "../../../assets/logos/logo-1.jpg";
import irconLogo from "../../../assets/logos/logo-3.jpg";
import dfccilLogo from "../../../assets/logos/logo-4.jpg";



function RdsoBridgesMetro() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="rdso-hero"
        style={{
          backgroundImage: `url(${heroBridge})`,
        }}
      >
        <div className="rdso-overlay">

          <div className="rdso-content">

            <span className="hero-tag">
              RDSO COMPLIANT INFRASTRUCTURE
            </span>

            <h1>
              RDSO BRIDGES &
              <br />
              <span>METRO SOLUTIONS</span>
            </h1>

            <p>
              Engineering world-class steel bridges for railways and
              metro infrastructure projects under stringent RDSO
              guidelines with precision, quality, and reliability.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Explore Projects
              </button>

              <button className="secondary-btn">
                Get A Quote
              </button>

            </div>

          </div>

        </div>
      </section>

       {/* rdso-about */}


  <section className="rdso-about">

  {/* LEFT SIDE CONTENT */}
  <div className="rdso-about-content">

    <span className="about-tag">
      ABOUT CENTRIQUE
    </span>

    <h2>
      Engineering Excellence
      Under RDSO Guidelines
    </h2>

    <p>
      As a proud subsidiary of Topland Engines Pvt. Ltd.,
      Centrique InfraTech specializes in the design and
      fabrication of world-class bridges under stringent
      Research Designs and Standards Organisation (RDSO)
      guidelines.

      Our commitment to quality, innovation, and precision
      ensures every bridge is engineered for safety,
      durability, and long-term performance.
    </p>

    <div className="about-features">

      <div className="feature-box">
        <div className="feature-icon">
          <FaCheckCircle />
        </div>

        <div className="feature-text">
          <h4>RDSO Compliant</h4>
          <p>Certified engineering standards</p>
        </div>
      </div>

      <div className="feature-box">
        <div className="feature-icon">
          <FaAward />
        </div>

        <div className="feature-text">
          <h4>High Quality Standards</h4>
          <p>Strict inspection procedures</p>
        </div>
      </div>

      <div className="feature-box">
        <div className="feature-icon">
          <FaIndustry />
        </div>

        <div className="feature-text">
          <h4>Advanced Manufacturing</h4>
          <p>Modern fabrication facilities</p>
        </div>
      </div>

      <div className="feature-box">
        <div className="feature-icon">
          <FaClock />
        </div>

        <div className="feature-text">
          <h4>Timely Delivery</h4>
          <p>Efficient project execution</p>
        </div>
      </div>

    </div>

  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="rdso-about-image">
    <img
      src={aboutBridge}
      alt="RDSO Bridge"
      className="about-bridge-img"
    />
  </div>
</section> 



<section className="bridge-solutions">

  <div className="bridge-heading">
    <span>OUR BRIDGE SOLUTIONS</span>
    <h2>Bridges We Specialize In</h2>
  </div>

  <div className="bridge-grid">

    {/* Card 1 */}
    <div className="bridge-card">
      <div className="bridge-img">
        <img src={fob} alt="Foot Over Bridge" />
      </div>

      <div className="bridge-content">
        <h3>Foot Over Bridges (FOBs)</h3>

        <ul>
          <li>Safe pedestrian crossing over railway tracks</li>
          <li>RDSO compliant design & construction</li>
          <li>Steel fabrication & erection with precision</li>
          <li>Enhances station connectivity & safety</li>
        </ul>

        <a href="#">Learn More →</a>
      </div>
    </div>

    {/* Card 2 */}

    <div className="bridge-card">
      <div className="bridge-img">
        <img src={bowstring} alt="Bowstring Bridge" />
      </div>

      <div className="bridge-content">
        <h3>Bowstring Arch Truss Bridges</h3>

        <ul>
          <li>High load carrying capacity</li>
          <li>Modern steel arch design</li>
          <li>Engineered for strength & stability</li>
          <li>Long service life with low maintenance</li>
        </ul>

        <a href="#">Learn More →</a>
      </div>
    </div>

    {/* Card 3 */}

    <div className="bridge-card">
      <div className="bridge-img">
        <img src={composite} alt="Composite Steel Girder Bridge" />
      </div>

      <div className="bridge-content">
        <h3>Composite Steel Girder Bridges</h3>

        <ul>
          <li>Composite steel & concrete technology</li>
          <li>Suitable for railway & metro applications</li>
          <li>Faster construction with high durability</li>
          <li>Cost-effective & RDSO approved solutions</li>
        </ul>

        <a href="#">Learn More →</a>
      </div>
    </div>

  </div>

</section>


{/* our capabilities  */}

<section className="capabilities">
  <div className="capabilities-heading">
    <span>OUR CAPABILITIES</span>
  </div>

  <div className="capabilities-grid">

    <div className="capability-card">
      <i className="fa-solid fa-compass-drafting"></i>
      <h3>Design & Engineering</h3>
    </div>

    <div className="capability-card">
      <i className="fa-solid fa-industry"></i>
      <h3>Precision Fabrication</h3>
    </div>

    <div className="capability-card">
      <i className="fa-regular fa-circle-check"></i>
      <h3>Quality Inspection</h3>
    </div>

    <div className="capability-card">
      <i className="fa-solid fa-truck"></i>
      <h3>Logistics Management</h3>
    </div>

    <div className="capability-card">
      <i className="fa-solid fa-gears"></i>
      <h3>Advanced Manufacturing</h3>
    </div>

    <div className="capability-card">
      <i className="fa-solid fa-file-circle-check"></i>
      <h3>RDSO Compliance</h3>
    </div>

  </div>
</section>


{/* our project workflow */}

<section className="workflow">
  <div className="workflow-container">

    <div className="workflow-heading">
      <span>OUR PROJECT WORKFLOW</span>
    </div>

    <div className="workflow-line"></div>

    <div className="workflow-grid">

      <div className="workflow-card">
        <div className="workflow-icon">
          <i className="fa-solid fa-drafting-compass"></i>
        </div>
        <h4>01</h4>
        <h3>Design & Engineering</h3>
        <p>Conceptualization and detailed engineering.</p>
      </div>

      <div className="workflow-card">
        <div className="workflow-icon">
          <i className="fa-solid fa-file-signature"></i>
        </div>
        <h4>02</h4>
        <h3>RDSO Approval</h3>
        <p>Compliance standards and approvals.</p>
      </div>

      <div className="workflow-card">
        <div className="workflow-icon">
          <i className="fa-solid fa-industry"></i>
        </div>
        <h4>03</h4>
        <h3>Fabrication</h3>
        <p>Precision fabrication with strict quality control.</p>
      </div>

      <div className="workflow-card">
        <div className="workflow-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <h4>04</h4>
        <h3>Inspection</h3>
        <p>Quality inspections for safety assurance.</p>
      </div>

      <div className="workflow-card">
        <div className="workflow-icon">
          <i className="fa-solid fa-truck-fast"></i>
        </div>
        <h4>05</h4>
        <h3>Delivery</h3>
        <p>Safe delivery and on-site installation support.</p>
      </div>

    </div>

  </div>
</section>



{/* Trusted section */}

<section className="trusted-section">

  <div className="trusted-container">

    <div className="trusted-heading">
      <span>TRUSTED BY LEADING ORGANIZATIONS</span>
    </div>

    <div className="trusted-strip">

      <div className="logo-box">
        <img src={rdsoLogo} alt="RDSO" />
        <h4>Western Railways</h4>
      </div>

      <div className="logo-box">
        <img src={railwayLogo} alt="Indian Railways" />
         <h4>NHSRCL</h4>
      </div>

      <div className="logo-box">
        <img src={rvnlLogo} alt="RVNL" />
         <h4>INDIAN RAILWAYS</h4>
      </div>

      <div className="logo-box">
        <img src={irconLogo} alt="IRCON" />
           <h4>METRO </h4>
             
      </div>

      <div className="logo-box">
        <img src={dfccilLogo} alt="DFCCIL" />
           <h4>MAKE IN INDIA</h4>
      </div>

    </div>

  </div>

</section>


{/*  STATS section  */}
<section className="stats-section">

  <div className="stats-container">

    <div className="stat-box">
      <FaAward className="stat-icon" />
      <h2>15+</h2>
      <p>YEARS OF EXPERIENCE</p>
    </div>

    <div className="stat-box">
      {/* <FaBridge className="stat-icon" /> */}
      <FaIndustry className="stat-icon" />
      <h2>200+</h2>
      <p>PROJECTS DELIVERED</p>
    </div>

    <div className="stat-box">
      <FaShieldAlt className="stat-icon" />
      <h2>100%</h2>
      <p>QUALITY & SAFETY COMPLIANCE</p>
    </div>

    <div className="stat-box">
      <FaUsers className="stat-icon" />
      <h2>50+</h2>
      <p>EXPERT ENGINEERS</p>
    </div>

  </div>
</section>




      <Footer />
    </>
  );
}

export default RdsoBridgesMetro;