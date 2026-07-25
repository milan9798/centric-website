import { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./Leadership.css";
import director1 from "../../assets/images/pankaj bhanderi.png";
import shayam from "../../assets/images/shayam bhanderi.png";
import meet from "../../assets/images/Meet bhanderi.jpg";

function Leadership() {

    const [showInfo, setShowInfo] = useState(false);
    const [showShyamInfo, setShowShyamInfo] = useState(false);
    const [showMeetInfo, setShowMeetInfo] = useState(false);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="leadership-hero">
        <div className="hero-content">
          <span className="hero-tag">
            OUR LEADERSHIP
          </span>

          <h1 className="hero-heading">
            Guiding with vision,
            <br />
            building with strength.
          </h1>

          <p className="hero-description">
            Meet the leadership driving innovation,
            precision, and excellence at Centrique InfraTech.
          </p>

          <div className="scroll-down">
            <span></span>
          </div>
        </div>
      </section>


      <section className="leader-section">
  <div className="leader-container">

    {/* Left Side Image */}
    <div className="leader-image">
      <img
        src={director1}
        alt="Mr. Pankaj Govindbhai Bhanderi"
      />
    </div>

    {/* Right Side Content */}
    <div className="leader-content">

      {/* <span className="leader-tag">
        OUR LEADERSHIP
      </span> */}

      <h2>
        Mr. Pankaj Bhanderi 
      </h2>

      <h4>
         Director
      </h4>

      <p>
       Mr. Pankaj Bhanderi, the esteemed Chief Marketing Officer 
       and Managing Director of Topland Engines Pvt. Ltd., commands an 
       illustrious career spanning over three decades. With an exceptional 
       track record in market development, both domestically within India and 
       internationally across more than 40 countries, Mr. Bhanderi has been 
       instrumental in solidifying the formidable reputation of the Topland brand. 
       His unwavering dedication and strategic acumen have been the cornerstone of Topland’s enduring success.
      </p>

      <p>
        In his latest entrepreneurial endeavor, Centrique, Mr. Pankaj brings
         the same visionary leadership and relentless pursuit of excellence. 
         His ambition for Centrique is nothing short of transformative. By 2030, 
         he envisions Centrique as the preeminent supplier of fabricated steel products 
         and a leading force within the steel industry in India. Under his guidance, 
         Centrique aims to set new benchmarks in quality and innovation, thereby becoming 
         a beacon for the steel lobby in the region.

      </p>

      <blockquote>
        Mr. Pankaj’s unparalleled experience and commitment to excellence are
         poised to propel Centrique to unprecedented heights, mirroring the
          triumphs he has achieved with Topland. His leadership continues to 
          inspire and drive the company towards realizing its ambitious goals,
           securing a legacy of success and industry leadership.
      </blockquote>



      <button 
  className="more-btn"
  onClick={() => setShowInfo(!showInfo)}
>
  More Info <span>↓</span>
</button>


{showInfo && (
  <div className="contact-info">

    <h3>Contact Information</h3>

    <p>
      📧 Email:
      <a href="mailto:pankaj@centrique.com">
          info@centrique-india.com
      </a>
    </p>

    <p>
      🔗 LinkedIn:
      <a 
        href=" Centrique InfraTech Pvt. Ltd"
        target="_blank"
        rel="noreferrer"
      >
        View LinkedIn Profile
      </a>
    </p>

  </div>
)}  

    </div>

  </div>
</section>


{/* Shyam Bhanderi Section */}


<section className="leader-section">
  <div className="leader-container">

    {/* Left Side Image */}
    <div className="leader-image">
      <img
        src={shayam}
        alt="Mr. Shyam Bhanderi"
      />
    </div>

    {/* Right Side Content */}
    <div className="leader-content">

      <h2>Mr. Shyam Bhanderi</h2>

      <h4>General Manager of Operations</h4>

      <p>
        Mr. Shyam Bhanderi, the esteemed Chief Executive Officer and General
         Manager of Centrique Infratech, serves as the steadfast cornerstone
          of the company’s daily operations. A distinguished alumnus of Pennsylvania
           State University, Mr. Shyam Bhanderi holds a Bachelor’s degree in Mechatronics,
            a testament to his profound technical expertise. Further augmenting his academic
             prowess, he pursued a rigorous Master’s degree in Electrical Engineering from Florida
              Atlantic University, thereby solidifying his foundation in advanced engineering principles.
      </p>

      <p>
       Mr. Bhanderi’s professional journey is marked by a wealth of experience
        garnered during his tenure at Anton Paar, a renowned Swedish electronics
         manufacturer. This experience has equipped him with a profound understanding 
         of the industry’s intricacies and cutting-edge technologies. His tenure at Anton
          Paar has imbued him with a keen insight into the precision and innovation required 
          in modern manufacturing.
      </p>


      <p>
        Driven by a relentless passion for innovation, Mr. Shyam Bhanderi 
        is fervently committed to revolutionizing the steel manufacturing industry.
         His visionary approach focuses on the integration of robotic manufacturing 
         and welding technologies, positioning Centrique Infratech at the forefront of
          technological advancement. This ambition fuels his determination to elevate 
          Centrique Infratech to the zenith of the steel fabrication sector in India.
      </p>

      <blockquote>
        Mr. Shyam Bhanderi’s leadership is characterized by an unwavering dedication to excellence
         and a transformative vision. His strategic initiatives are poised to redefine industry standards 
         and propel Centrique Infratech to unprecedented heights, establishing it as the premier steel 
         fabrication company in the nation.
      </blockquote>

      <button
  className="more-btn"
  onClick={() => setShowShyamInfo(!showShyamInfo)}
>
  More Info <span>↓</span>
</button>

{showShyamInfo && (
  <div className="contact-info">
    <h3>Contact Information</h3>

    <p>
      📧 Email:
      <a href="mailto:info@centrique-india.com">
        info@centrique-india.com
      </a>
    </p>

    <p>
      🔗 LinkedIn:
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        View LinkedIn Profile
      </a>
    </p>
  </div>
)}



    </div>

  </div>
</section>


{/* Meet Bhanderi Section */}

<section className="leader-section">
  <div className="leader-container">

    {/* Left Side Image */}
    <div className="leader-image">
      <img
        src={meet}
        alt="Mr. Meet Bhanderi"
      />
    </div>

    {/* Right Side Content */}
    <div className="leader-content">

      <h2>Mr. Meet Bhanderi</h2>

      <h4>HoD – Commerial</h4>

      <p>
       Mr. Meet Bhanderi, the distinguished Chief Information Officer 
       and Chief Financial Officer of Centrique Infratech, is a proud alumnus
        of Pennsylvania State University, where he earned the prestigious Bachelor’s 
        degree in Computer Science. Demonstrating a commitment to academic excellence
         and personal growth, Mr. Bhanderi further pursued a Master’s degree in Computer Science, 
         complemented by a Minor in Business, thereby honing his expertise at the intersection of 
         technology and commerce.
      </p>

      <p>
       Mr. Bhanderi’s profound interest in entrepreneurship and innovation 
       has driven him to seamlessly integrate his extensive IT experience into 
       the commercial realm. His strategic acumen is exemplified through his 
       pioneering efforts to amalgamate Generative AI and Business Intelligence, 
       facilitating data-driven and informed commercial decisions. This unique approach 
       underscores his commitment to leveraging cutting-edge technologies to enhance
        business operations and outcomes.
      </p>

      <p>
        In his visionary capacity, Mr. Meet Bhanderi aspires to position Centrique Infratech 
        at the vanguard of technological advancement within the steel fabrication industry. 
        His ambition is to establish Centrique as the first steel fabrication company in India
         to fully integrate the burgeoning capabilities of Artificial Intelligence. This forward-thinking
          vision not only aims to revolutionize the industry but also to set new benchmarks for innovation 
          and efficiency.

      </p>



      <blockquote>
        Under Mr. Meet Bhanderi’s astute leadership, Centrique Infratech is poised to achieve
         unparalleled success, driven by a synthesis of technological prowess and strategic 
         insight. His dedication to fostering an environment of innovation ensures that Centrique 
         will remain at the forefront of the industry, pioneering new advancements and setting the 
         standard for excellence in steel fabrication.
      </blockquote>

      <button
        className="more-btn"
        onClick={() => setShowMeetInfo(!showMeetInfo)}
      >
        More Info <span>↓</span>
      </button>

      {showMeetInfo && (
        <div className="contact-info">
          <h3>Contact Information</h3>

          <p>
            📧 Email:
            <a href="mailto:info@centrique-india.com">
              info@centrique-india.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn Profile
            </a>
          </p>
        </div>
      )}

    </div>

  </div>
</section>
  

      <Footer />
    </>
  );
}

export default Leadership;