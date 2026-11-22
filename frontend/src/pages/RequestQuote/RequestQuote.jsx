import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./abc.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";


function RequestQuote() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

     <section className="quoteHero">

  <div className="quoteOverlay"></div>

  <div className="quoteContainer">

    <div className="quoteContent">

      <span className="quoteTag">
        REQUEST A QUOTE
      </span>

      <h1>
        Let's Build Your Next
        <span> Engineering Project</span>
      </h1>

      <p>
        Get a customized quotation from our engineering experts
        for railway, metro, bridges, PEB structures and industrial
        fabrication projects.
      </p>

      <div className="quoteButtons">

        <button className="primaryBtn">
          Request Quote
        </button>

        <button className="secondaryBtn">
          Call Now
        </button>

      </div>

    </div>

  </div>
</section>

      
     {/* ================= REQUEST FORM SECTION ================= */}

<section className="quoteSection">

    <div className="quoteWrapper">
        <div className="quoteFormBox">

            <span className="sectionTag">
                GET A FREE QUOTE
            </span>

            <h2>
                Request Your Project Quotation
            </h2>

            <form>

                <div className="inputGrid">

                    <input
                        type="text"
                        placeholder="Full Name"
                    />

                    <input
                        type="text"
                        placeholder="Company Name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                    />

                    <input
                        type="text"
                        placeholder="Project Location"
                    />

                    <select>

                        <option>Select Service</option>

                        <option>Steel Fabrication</option>

                        <option>Bridge Engineering</option>

                        <option>Metro Projects</option>

                        <option>PEB Structures</option>

                        <option>Industrial Projects</option>

                    </select>

                </div>

                <textarea
                    rows="6"
                    placeholder="Tell us about your project..."
                ></textarea>

                <button className="submitBtn">

                    Submit Request

                </button>

            </form>

        </div>


        {/* Right Side */}


        <div className="quoteInfo">

            <span className="sectionTag">

                WHY HM CENTRIC

            </span>

            <h2>

                Trusted Engineering Partner

            </h2>

            <p>

                We deliver high-quality fabrication and
                infrastructure engineering solutions with
                safety, precision and timely execution.

            </p>

            <div className="featureList">

                <div>✔ 15+ Years Experience</div>

                <div>✔ ISO Quality Standards</div>

                <div>✔ RDSO Certified</div>

                <div>✔ 120+ Successful Projects</div>

                <div>✔ Fast Technical Support</div>

                <div>✔ Pan India Service</div>

            </div>

        </div>

    </div>

</section> 


{/* ================= OFFICE CONTACT ================= */}

<section className="officeSection">

    <div className="officeHeader">

        <span className="sectionTag">
            OUR OFFICE
        </span>

        <h2>
            Let's Connect With Our Engineering Team
        </h2>

        <p>
            Whether you have a new project, require technical assistance,
            or need a customized quotation, our team is always ready to help.
        </p>

    </div>

    <div className="officeGrid">

        <div className="officeCard">

            <div className="officeIcon">
                <i className="fas fa-map-marker-alt"></i>
            </div>

            <h3>Head Office</h3>

            <p>
                HM Centric Engineering Pvt. Ltd.
                <br />
                Rajkot, Gujarat, India
            </p>

        </div>

        <div className="officeCard">

            <div className="officeIcon">
                <i className="fas fa-phone-alt"></i>
            </div>

            <h3>Call Us</h3>

            <p>
                +91 XXXXX XXXXX
                <br />
                Mon - Sat : 9:00 AM - 6:00 PM
            </p>

        </div>

        <div className="officeCard">

            <div className="officeIcon">
                <i className="fas fa-envelope"></i>
            </div>

            <h3>Email</h3>

            <p>
                info@hmcentric.com
                <br />
                sales@hmcentric.com
            </p>

        </div>

    </div>

</section>


  
  {/* ================= GOOGLE MAP ================= */}

<section className="mapSection">

    <div className="mapHeading">

        <span className="sectionTag">
            FIND US
        </span>

        <h2>
            Visit Our Corporate Office
        </h2>

        <p>
            We welcome you to visit our office for project discussions,
            technical consultations and business meetings.
        </p>

    </div>

    <div className="mapWrapper">

        <iframe
            title="HM Centric Engineering"
            src="https://www.google.com/maps?q=Rajkot,Gujarat&output=embed"
            loading="lazy"
            allowFullScreen
        ></iframe>

    </div>

    <div className="mapBottom">

        <div className="locationCard">

            <h3>HM Centric Engineering Pvt. Ltd.</h3>

            <p>
                Rajkot, Gujarat, India
            </p>

        </div>

        <div className="mapButtons">

            <a
                href="https://maps.google.com/maps?ll=22.391513,70.653359&z=16&t=m&hl=en&gl=US&mapclient=embed&q=9MR3%2BJ85%20Taraghadi%2C%20Gujarat%20360110"
                target="_blank"
                rel="noreferrer"
                className="directionBtn"
            >
                Get Directions
            </a>

            <a
                href="tel:+919798882322 "
                className="callBtn"
            >
                Call Office
            </a>

        </div>

    </div>

</section>


{/* ================= FINAL CTA ================= */}

<section className="quoteCTA">

    <div className="ctaOverlay"></div>

    <div className="ctaContent">

        <span className="ctaTag">
            START YOUR PROJECT TODAY
        </span>

        <h2>
            Looking for a Reliable Engineering Partner?
        </h2>

        <p>
            From steel fabrication and railway infrastructure to metro,
            bridges and industrial projects, HM Centric Engineering delivers
            quality, precision and on-time execution across India.
        </p>

        <div className="ctaButtons">

            <button className="ctaPrimaryBtn">
                Request a Quote
            </button>

            <button className="ctaSecondaryBtn">
                Contact Us
            </button>

        </div>

    </div>

</section>
   

 
     
      <Footer />

    </>
  );
}

export default RequestQuote;