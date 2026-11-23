









import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./Certificates.css";

import certificate1 from "../../assets/images/certificates/ct-1.jpg";
import certificate2 from "../../assets/images/certificates/ct-3.jpg";
import certificate3 from "../../assets/images/certificates/ct-2.jpg";

const certificates = [
  {
    id: 1,
    image: certificate1,
    title: "Quality Certification",
    description:
      "Our commitment to quality is reflected in our processes, standards and approach to every project.",
  },
  {
    id: 2,
    image: certificate2,
    title: "Industry Certification",
    description:
      "We focus on maintaining professional standards and delivering reliable engineering solutions.",
  },
  {
    id: 3,
    image: certificate3,
    title: "Compliance Certification",
    description:
      "Our work is guided by quality, safety and compliance requirements across our operations.",
  },
];

const benefits = [
  {
    title: "Quality Assurance",
    description:
      "We focus on consistent quality throughout our project execution process.",
  },
  {
    title: "Industry Standards",
    description:
      "Our processes are aligned with applicable industry standards and requirements.",
  },
  {
    title: "Reliable Execution",
    description:
      "We work to deliver dependable engineering and infrastructure solutions.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We continuously work to improve our processes, performance and quality.",
  },
];

const qualityPoints = [
  "Quality-focused processes",
  "Professional project execution",
  "Safety-conscious operations",
  "Continuous improvement",
];

export default function Certificates() {
  const [showCertificate, setShowCertificate] = useState(null);

  useEffect(() => {
    if (!showCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowCertificate(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [showCertificate]);

  return (
    <>
      <Navbar />

      <main className="certificates-page">
        <section className="certificate-showcase">
          <div className="certificate-heading">
            <span className="certificate-eyebrow">OUR CREDENTIALS</span>
            <h1>
              Certificates & <span>Accreditations</span>
            </h1>
            <p>
              Our certifications reflect our commitment to quality,
              professional standards and reliable project execution.
            </p>
          </div>

          <div className="certificate-list">
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.id}>
                <div className="certificate-image">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                  />
                </div>

                <div className="certificate-content">
                  <span className="certificate-number">
                    CERTIFICATE 0{certificate.id}
                  </span>

                  <h2>{certificate.title}</h2>
                  <p>{certificate.description}</p>

                  <div className="certificate-actions">
                    <button
                      type="button"
                      className="view-btn"
                      onClick={() => setShowCertificate(certificate)}
                    >
                      View Full
                    </button>

                    <a
                      href={certificate.image}
                      download
                      className="download-btn"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cert-benefits">
          <div className="benefits-heading">
            <span className="certificate-eyebrow">OUR COMMITMENT</span>
            <h2>Standards That Build <span>Trust</span></h2>
            <p>
              We believe that quality and reliability are essential to
              successful engineering projects.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-icon" aria-hidden="true">
                  ✓
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="certificate-cta">
          <div className="certificate-cta-content">
            <span className="certificate-eyebrow">LET'S WORK TOGETHER</span>
            <h2>Looking for a Reliable Engineering Partner?</h2>
            <p>
              Connect with our team to discuss your next project.
            </p>

            <div className="certificate-cta-actions">
              <a href="/request-quote" className="cta-orange-btn">
                Request A Quote
              </a>

              <a href="/contact" className="cta-outline-btn">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <section className="quality-promise">
          <div className="quality-promise-content">
            <span className="certificate-eyebrow">OUR QUALITY PROMISE</span>
            <h2>Committed to Quality at Every Stage</h2>
            <p>
              We aim to maintain high standards through responsible planning,
              professional execution and continuous improvement.
            </p>
          </div>

          <div className="quality-points">
            {qualityPoints.map((point) => (
              <div className="quality-point" key={point}>
                <span aria-hidden="true">✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setShowCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`${showCertificate.title} preview`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              aria-label="Close certificate preview"
              onClick={() => setShowCertificate(null)}
            >
              ×
            </button>

            <img
              src={showCertificate.image}
              alt={showCertificate.title}
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}