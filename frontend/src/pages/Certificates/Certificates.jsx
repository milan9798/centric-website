import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./Certificates.css";

// import heroBg from "../../assets/images/certificates/ft-1.jpg";
import certificate1 from "../../assets/images/certificates/ct-1.jpg";
import certificate2 from "../../assets/images/certificates/ct-3.jpg";
import certificate3 from "../../assets/images/certificates/ct-2.jpg";

import { useState } from "react";

import { FaArrowRight } from "react-icons/fa";

export default function Certificates() {

    const [showCertificate, setShowCertificate] = useState(null);

  return (
    <>
      <Navbar />

      {/* ===========================
            HERO SECTION
      ============================ */}

   {/* ================= OUR CERTIFICATION ================= */}

<section className="certificate-showcase">

    <div className="certificate-heading">

        <span>OUR CERTIFICATION</span>

        <h2>
            Internationally Certified
            <br />
            <span>Quality Standards</span>
        </h2>

        <p>
            Our certifications demonstrate our commitment towards
            quality management, safety standards and engineering
            excellence in every project we deliver.
        </p>

    </div>


    <div className="certificate-card">

        <div className="certificate-image">

            <img
                src={certificate1}
                alt="ISO Certificate"
            />

        </div>


        <div className="certificate-content">

            <div className="certificate-badge">

                VERIFIED CERTIFICATE

            </div>

            <h3>ISO 9001 : 2015</h3>

            <h4>Quality Management System</h4>

            <p>

                This certification confirms that Centrique
                Infratech follows internationally recognized
                quality management practices to ensure
                consistency, customer satisfaction and
                continuous improvement.

            </p>

            <div className="certificate-buttons">

                <button className="view-btn"
                onClick={() => setShowCertificate(certificate1)} 
                >

                    👁 View Full

                </button>

                <a
                    href={certificate1}
                    download
                    className="download-btn"
                >

                    ⬇ Download

                </a>

            </div>

        </div>

    </div>


    {/* second certificate  */}

    <div className="certificate-card">

  <div className="certificate-image">

    <img
      src={certificate2}
      alt="RDSO Approval Certificate"
    />

  </div>

  <div className="certificate-content">

    <div className="certificate-badge">
      VERIFIED CERTIFICATE
    </div>

    <h3>RDSO Approved Vendor</h3>

    <h4>Research Designs & Standards Organisation</h4>

    <p>
      Centrique Infratech is an approved vendor of RDSO,
      demonstrating compliance with Indian Railways'
      quality, safety and technical standards for
      bridge fabrication and railway infrastructure
      projects.
    </p>

    <div className="certificate-buttons">

      <button
        className="view-btn"
        onClick={() => setShowCertificate(certificate2)}
      >
        👁 View Full
      </button>

      <a
        href={certificate2}
        download
        className="download-btn"
      >
        ⬇ Download
      </a>

    </div>

  </div>

</div>

    {/* third certificate  */}


  <div className="certificate-card">

  <div className="certificate-image">

    <img
      src={certificate3}
      alt="BHEL Registration Certificate"
    />

  </div>

  <div className="certificate-content">

    <div className="certificate-badge">
      VERIFIED CERTIFICATE
    </div>

    <h3>BHEL Registered Vendor</h3>

    <h4>Bharat Heavy Electricals Limited</h4>

    <p>
      Centrique Infratech is registered with BHEL for
      delivering high-quality fabrication and engineering
      solutions while maintaining strict quality,
      reliability and project execution standards.
    </p>

    <div className="certificate-buttons">

      <button
        className="view-btn"
        onClick={() => setShowCertificate(certificate3)}
      >
        👁 View Full
      </button>

      <a
        href={certificate3}
        download
        className="download-btn"
      >
        ⬇ Download
      </a>

    </div>

  </div>

  </div>


</section>


{/* light box  */}

  {showCertificate && (

  <div
    className="certificate-modal"
    onClick={() => setShowCertificate(null)}
  >

    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="close-btn"
        onClick={() => setShowCertificate(null)}
      >
        ✕
      </button>

      <img
        src={showCertificate}
        alt="Certificate"
      />

    </div>

  </div>

)}



{/* ================= WHY CERTIFICATIONS MATTER ================= */}

<section className="cert-benefits">

  <div className="benefits-heading">

    <span>WHY OUR CERTIFICATIONS MATTER</span>

    <h2>
      Building Trust Through
      {/* <span> Certified Excellence</span> */}
    </h2>

    <p>
      Our certifications reflect our commitment to quality, safety,
      and continuous improvement, giving clients complete confidence
      in every project we deliver.
    </p>

  </div>

  <div className="benefits-grid">

    <div className="benefit-card">

      <div className="benefit-icon">🌍</div>

      <h3>International Standards</h3>

      <p>
        Every project follows globally recognized quality standards
        to ensure reliability and long-term performance.
      </p>

    </div>

    <div className="benefit-card">

      <div className="benefit-icon">🛡</div>

      <h3>Quality Assurance</h3>

      <p>
        Strict inspection and quality control processes are followed
        at every stage of project execution.
      </p>

    </div>

    <div className="benefit-card">

      <div className="benefit-icon">🏗</div>

      <h3>Trusted Engineering</h3>

      <p>
        Delivering infrastructure solutions with precision,
        durability and complete client satisfaction.
      </p>

    </div>

    <div className="benefit-card">

      <div className="benefit-icon">📈</div>

      <h3>Continuous Improvement</h3>

      <p>
        We continuously improve our systems and processes to
        deliver better quality and greater efficiency.
      </p>

    </div>

  </div>

</section>




{/* ================= CTA SECTION ================= */}

<section className="certificate-cta">

  <div className="certificate-cta-content">

    <span>LET'S BUILD WITH CONFIDENCE</span>

    <h2>
      Need Certified
      <br />
      Infrastructure Solutions?
    </h2>

    <p>
      Partner with <strong>Centrique Infratech Pvt. Ltd.</strong> for
      quality, safety, and trusted engineering solutions backed by
      internationally recognized certification standards.
    </p>

    <div className="certificate-cta-buttons">

      <a
        href="/request-quote"
        className="cta-orange-btn"
      >
        Request A Quote
      </a>

      <a
        href="/contact"
        className="cta-outline-btn"
      >
        Contact Us
      </a>

    </div>

  </div>

</section>



{/* ================= QUALITY PROMISE ================= */}

<section className="quality-promise">

    <div className="quality-left">

        <span>OUR QUALITY PROMISE</span>

        <h2>
            Delivering Quality,
            Safety & Excellence
        </h2>

        <p>
            At Centrique Infratech, quality is more than a certification.
            It is our commitment to delivering safe, durable and reliable
            infrastructure solutions that exceed client expectations.
        </p>

        <ul>

            <li>✔ ISO Certified Quality Management</li>

            <li>✔ Strict Safety Compliance</li>

            <li>✔ Experienced Engineering Team</li>

            <li>✔ Continuous Quality Inspection</li>

            <li>✔ Client Satisfaction Focused</li>

        </ul>

    </div>

    <div className="quality-right">

        <div className="quality-box">

            <h3>100%</h3>
            <p>Quality Commitment</p>

        </div>

        <div className="quality-box">

            <h3>Safety</h3>
            <p>Always Our Priority</p>

        </div>

        <div className="quality-box">

            <h3>Trusted</h3>
            <p>Engineering Partner</p>

        </div>

        <div className="quality-box">

            <h3>Certified</h3>
            <p>International Standards</p>

        </div>

    </div>

</section>




      <Footer />
    </>
  );
}