import Navbar from "../../../components/Navbar/navbar";
import Footer from "../../../components/Footer/Footer";
import "./PebStructures.css";

import {
   FaWarehouse,
  FaCheckCircle,
  FaIndustry,
  FaHardHat,
  FaTruck,
   FaBuilding,
    FaPlane,
     FaSnowflake,
  FaTools
} from "react-icons/fa";


import heroImage from "../../../assets/images/PebStructures/hero/bn-1.jpg";
import aboutImg from "../../../assets/images/PebStructures/about/bn-2.jpg";


import warehouseImg from "../../../assets/images/Pebstructures/solutions/pb-1.jpg";
import factoryImg from "../../../assets/images/Pebstructures/solutions/pb-2.jpg";
import logisticsImg from "../../../assets/images/Pebstructures/solutions/pb-3.jpg";
import commercialImg from "../../../assets/images/Pebstructures/solutions/pb-4.jpg";
import hangarImg from "../../../assets/images/Pebstructures/solutions/pb-5.jpg"; 
import coldStorageImg from "../../../assets/images/Pebstructures/solutions/pb-6.jpg";



function PebStructures() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="peb-hero">

        <img
          src={heroImage}
          alt="PEB Structure"
          className="peb-hero-image"
        />

        <div className="peb-overlay">

          <div className="peb-content">

            <span className="peb-tag">
              PRE-ENGINEERED BUILDING SOLUTIONS
            </span>

            <h1>
              Engineering Modern
              <br />
              Steel Structures
            </h1>

            <p>
              Centrique InfraTech delivers world-class
              Pre-Engineered Building (PEB) solutions for
              industrial warehouses, factories, logistics
              parks, commercial buildings and infrastructure
              projects with unmatched quality and precision.
            </p>

            <div className="peb-buttons">

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


      {/* about section  */}

      <section className="peb-about">

    <div className="peb-about-container">

    {/* Left Image */}

    <div className="peb-about-image">

      <img src={aboutImg} alt="PEB Structure" />

    </div>

    {/* Right Content */}

    <div className="peb-about-content">

      <span className="about-tag">
        ABOUT PEB STRUCTURES
      </span>

      <h2>
        Building Future-Ready
        Steel Structures
      </h2>

      <p>
        Centrique InfraTech specializes in the design,
        fabrication and installation of premium
        Pre-Engineered Buildings (PEB) for industrial,
        commercial and infrastructure projects across India.
      </p>

      <p>
        We combine cutting-edge engineering,
        advanced manufacturing and strict quality
        standards to deliver durable, efficient
        and cost-effective steel building solutions.
      </p>

      <div className="about-features">

        <div className="feature-card">
          <FaIndustry />
          <span>Modern Manufacturing</span>
        </div>

        <div className="feature-card">
          <FaHardHat />
          <span>Experienced Engineers</span>
        </div>

        <div className="feature-card">
          <FaTools />
          <span>Precision Fabrication</span>
        </div>

        <div className="feature-card">
          <FaCheckCircle />
          <span>Quality Assured</span>
        </div>

      </div>

      <button className="about-btn">
        Explore More
      </button>

    </div>

  </div>

</section>




{/* Solution section  */}


    <section className="solutions-section">

  <div className="solutions-container">

    <span className="section-tag">
      OUR PEB SOLUTIONS
    </span>

    <h2 className="section-title">
      Solutions For Every Industry
    </h2>

    <div className="solutions-grid">

      <div className="solution-card">
        <img src={warehouseImg} alt="Warehouse" />
        <div className="solution-content">
          <FaWarehouse className="solution-icon" />
          <h3>Industrial Warehouses</h3>
        </div>
      </div>

      <div className="solution-card">
        <img src={factoryImg} alt="Factory" />
        <div className="solution-content">
          <FaIndustry className="solution-icon" />
          <h3>Factory Buildings</h3>
        </div>
      </div>

      <div className="solution-card">
        <img src={logisticsImg} alt="Logistics" />
        <div className="solution-content">
          <FaTruck className="solution-icon" />
          <h3>Logistics Parks</h3>
        </div>
      </div>

      <div className="solution-card">
        <img src={commercialImg} alt="Commercial" />
        <div className="solution-content">
          <FaBuilding className="solution-icon" />
          <h3>Commercial Buildings</h3>
        </div>
      </div>

      <div className="solution-card">
        <img src={hangarImg} alt="Hangar" />
        <div className="solution-content">
          <FaPlane className="solution-icon" />
          <h3>Aircraft Hangars</h3>
        </div>
      </div>

      <div className="solution-card">
        <img src={coldStorageImg} alt="Cold Storage" />
        <div className="solution-content">
          <FaSnowflake className="solution-icon" />
          <h3>Cold Storage</h3>
        </div>
      </div>

    </div>

  </div>

</section>





      <Footer />
    </>
  );
}

export default PebStructures;