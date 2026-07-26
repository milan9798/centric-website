import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./FAQ.css";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


const faqData = [
  {
    question: "What services does Centrique Infratech provide?",
    answer:
      "Centrique InfraTech specializes in a wide range of commercial steel work services, including fabrication, welding, machining, shot blasting and painting. We work with RDSO projects released by Indian Railways and also take up private projects from general contractors like L&T and GE. Our expertise lies in fabrication of heavy steel structures, with a particular focus on large-scale projects such as bridges and commercial real estate developments, including buildings and skyscrapers.",
      
  },
  {
    question: "Do you execute projects across India?",
    answer:
      "The turnaround time for each project at Centrique Industries varies depending on the scope and complexity of the work. Our team works diligently with general contractors and engineers to ensure that all projects are completed in a timely manner, while maintaining the highest standards of quality and attention to detail. We guarantee to provide solutions faster than anyone else..",
  },
  {
    question: "Are you ISO Certified?",
    answer:
      "Yes, Centrique Infratech follows internationally recognized quality standards and safety procedures.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "To obtain a quote for your commercial steel work project, please provide us with detailed information about your project requirements, including the scope of work, timeline, and any specific materials or specifications. Our team will review the details and provide you with a comprehensive quote tailored to your needs. You can submit those details here! You can also send an inquiry to info@centrique-india.com. Our team will answer all your questions..",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Railways, Metro, Industrial Plants, Infrastructure, Commercial Buildings, and Heavy Engineering Projects.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "Every project undergoes strict quality checks, modern fabrication processes, and experienced engineering supervision.",
  },
];

function FAQ() {
   
   const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="faq-hero">

        <div className="faq-container">

          <span className="faq-tag">
            FAQ
          </span>

          <h1>
            Frequently Asked
            <br />
            Questions
          </h1>

          <p>
            Find answers to the most common questions about
            Centrique Infratech and our engineering services.
          </p>

        </div>
      </section>


      {/* Next Section yaha banega */}

       <section className="faq-section">

      <div className="faq-title">

        <span>COMMON QUESTIONS</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know about our services,
          project execution and quality standards.
        </p>

      </div>

      <div className="faq-list">

        {faqData.map((item, index) => (
          <div
            className={`faq-item ${
              active === index ? "active" : ""
            }`}
            key={index}
          >
            
            <button
  className="faq-question"
  onClick={() => toggle(index)}
>
  {item.question}

  <FiChevronDown
    className={active === index ? "rotate" : ""}
  />
</button>

            <div
              className={`faq-answer ${
                active === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>

          </div>
        ))}

      </div>

    </section>



{/* ==========================================
        STILL HAVE QUESTIONS
========================================== */}

<section className="faq-cta">

  <div className="faq-cta-content">

    <span className="faq-cta-tag">
      NEED MORE HELP?
    </span>

    <h2>
      Still Have Questions?
    </h2>

    <p>
      Our experts are always ready to assist you with project
      requirements, technical queries, quotations and engineering
      solutions. Feel free to contact our team anytime.
    </p>

    <div className="faq-contact-info">

      <div className="contact-box">

        <FaPhoneAlt />

        <div>

          <h4>Call Us</h4>

          <span>+91 98765 43210</span>

        </div>

      </div>

      <div className="contact-box">

        <FaEnvelope />

        <div>

          <h4>Email Us</h4>

          <span>info@centriqueinfratech.com</span>

        </div>

      </div>

    </div>

    <div className="faq-cta-buttons">

      <Link to="/request-quote" className="faq-btn-orange">
        Request A Quote
      </Link>

      <Link to="/contact" className="faq-btn-white">
        Contact Us
      </Link>

    </div>

  </div>

</section>


      <Footer />

    </>
  );
}

export default FAQ;