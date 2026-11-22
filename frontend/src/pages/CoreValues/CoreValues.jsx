import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./CoreValues.css";

import quality from "../../assets/images/quality1.png";
import innovation from "../../assets/images/transformation.png";
import trust from "../../assets/images/trust-1.png";
import excellence from "../../assets/images/high-quality-2.jpg";

function CoreValues() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="core-hero">
        <div className="core-content">
          <div className="vertical-line"></div>

          <div className="quote-content">
            <h1>
              Excellence In Every Beam:
              <br />
              High Performance,
              <br />
              Relentless Drive
            </h1>
          </div>
        </div>

        <div className="wave"></div>
      </section>

      {/* Quality Section */}
      <section className="value-section">
        <div className="value-container">
          <div
            className="value-image"
            data-aos="fade-right"
          >
            <img src={quality} alt="Quality" />
          </div>

          <div
            className="value-content"
            data-aos="fade-left"
          >
            <h2>Quality</h2>

            <p>
              Ensuring superior quality in every product and service we offer
              is our top priority. From selecting raw materials to the final
              finishing touches, our meticulous attention to detail guarantees
              that every piece meets the highest standards of craftsmanship and
              durability.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="value-section">
        <div className="value-container">
          <div
            className="value-image"
            data-aos="fade-right"
          >
            <img src={innovation} alt="Innovation" />
          </div>

          <div
            className="value-content"
            data-aos="fade-left"
          >
            <h2>Innovation</h2>

            <p>
              Innovation drives everything we do at Centrique InfraTech. We
              continuously embrace modern technologies, advanced engineering
              practices, and creative solutions to redefine steel fabrication
              standards and deliver exceptional value to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="value-section">
        <div className="value-container">
          <div
            className="value-image"
            data-aos="fade-right"
          >
            <img src={trust} alt="Trust" />
          </div>

          <div
            className="value-content"
            data-aos="fade-left"
          >
            <h2>Trust</h2>

            <p>
              Trust is the foundation of every relationship we build. We
              believe in transparency, reliability, and honoring our
              commitments to clients, partners, and employees. Through honesty
              and consistent performance, we create long-term relationships
              based on confidence and mutual respect.
            </p>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="value-section">
        <div className="value-container">
          <div
            className="value-image"
            data-aos="fade-right"
          >
            <img src={excellence} alt="Excellence" />
          </div>

          <div
            className="value-content"
            data-aos="fade-left"
          >
            <h2>Excellence</h2>

            <p>
              Excellence is our commitment to delivering the highest standards
              in everything we do. From innovation and quality to customer
              service and execution, we continuously strive to exceed
              expectations and set new benchmarks in the steel fabrication
              industry.
            </p>
          </div>
        </div>
      </section>

      <section className="value-section dark-section"></section>

      <Footer />
    </>
  );
}

export default CoreValues;