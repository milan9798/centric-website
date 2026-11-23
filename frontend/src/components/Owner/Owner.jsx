

// import "./Owner.css";

// import { FaArrowRight } from "react-icons/fa";
// import {
//   FaCertificate,
//   FaShieldAlt,
//   FaHardHat,
//   FaIndustry,
// } from "react-icons/fa";

// import ownerImg from "../../assets/images/bn-1.jpg";

// function Owner() {
//   return (
//     <section className="owner">

//       <div className="owner-container">

//         {/* LEFT CONTENT */}

//         <div className="owner-left">

//           <span className="owner-tag">
//             WHY CHOOSE CENTRIQUE
//           </span>

//           <h2>
//             Engineering Excellence
//             <br />
//             <span>Built For Tomorrow.</span>
//           </h2>

//           <p>
//             Centrique Infratech is one of India's leading steel fabrication
//             companies delivering world-class bridge structures,
//             industrial projects and infrastructure solutions with
//             unmatched quality, innovation and engineering excellence.
//           </p>

//           <div className="owner-points">

//             <div className="point">

//               <FaCertificate />

//               <span>ISO Certified Company</span>

//             </div>

//             <div className="point">

//               <FaShieldAlt />

//               <span>100% Safety Standards</span>

//             </div>

//             <div className="point">

//               <FaIndustry />

//               <span>Advanced Steel Fabrication</span>

//             </div>

//             <div className="point">

//               <FaHardHat />

//               <span>Experienced Engineering Team</span>

//             </div>

//           </div>

//           <button className="owner-btn">

//             Explore Projects

//             <FaArrowRight />

//           </button>

//         </div>

//         {/* RIGHT IMAGE */}

//         <div className="owner-right">

//           <img
//             src={ownerImg}
//             alt="Centrique"
//             className="owner-image"
//           />

//           {/* Floating Card */}

//           <div className="experience-card">

//             <h2>15+</h2>

//             <span>Years Experience</span>

//           </div>

//           {/* Floating Card */}

//           <div className="iso-card">

//             <FaCertificate />

//             <div>

//               <h4>ISO Certified</h4>

//               <p>International Standards</p>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Bottom Cards */}

//       <div className="owner-bottom">

//         <div className="owner-box">

//           <FaIndustry />

//           <h3>100+</h3>

//           <p>Projects Delivered</p>

//         </div>

//         <div className="owner-box">

//           <FaShieldAlt />

//           <h3>100%</h3>

//           <p>Safety Commitment</p>

//         </div>

//         <div className="owner-box">

//           <FaHardHat />

//           <h3>24×7</h3>

//           <p>Technical Support</p>

//         </div>

//       </div>

//     </section>
//   );
// }
// export default Owner;   
          

       










import "./Owner.css";

import {
  FaArrowRight,
  FaCertificate,
  FaShieldAlt,
  FaHardHat,
  FaIndustry,
} from "react-icons/fa";

import ownerImg from "../../assets/images/bn-1.jpg";

function Owner() {
  return (
    <section className="owner" aria-labelledby="owner-heading">
      <div className="owner-container">

        {/* LEFT CONTENT */}
        <div className="owner-left">
          <span className="owner-tag">
            WHY CHOOSE CENTRIQUE
          </span>

          <h2 id="owner-heading">
            Engineering Excellence
            <br />
            <span>Built For Tomorrow.</span>
          </h2>

          <p className="owner-description">
            Centrique Infratech is one of India's leading steel fabrication
            companies delivering world-class bridge structures,
            industrial projects and infrastructure solutions with
            unmatched quality, innovation and engineering excellence.
          </p>

          <div className="owner-points">
            <div className="point">
              <FaCertificate aria-hidden="true" />
              <span>ISO Certified Company</span>
            </div>

            <div className="point">
              <FaShieldAlt aria-hidden="true" />
              <span>100% Safety Standards</span>
            </div>

            <div className="point">
              <FaIndustry aria-hidden="true" />
              <span>Advanced Steel Fabrication</span>
            </div>

            <div className="point">
              <FaHardHat aria-hidden="true" />
              <span>Experienced Engineering Team</span>
            </div>
          </div>

          <a
            href="/projects"
            className="owner-btn"
            aria-label="Explore Centrique projects"
          >
            <span>Explore Projects</span>
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="owner-right">
          <div className="owner-image-wrapper">
            <img
              src={ownerImg}
              alt="Centrique steel fabrication and infrastructure work"
              className="owner-image"
              loading="lazy"
            />
          </div>

          {/* EXPERIENCE CARD */}
          <div className="experience-card">
            <h3>15+</h3>
            <span>Years Experience</span>
          </div>

          {/* ISO CARD */}
          <div className="iso-card">
            <FaCertificate aria-hidden="true" />

            <div>
              <h4>ISO Certified</h4>
              <p>International Standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="owner-bottom">
        <div className="owner-box">
          <FaIndustry aria-hidden="true" />
          <h3>100+</h3>
          <p>Projects Delivered</p>
        </div>

        <div className="owner-box">
          <FaShieldAlt aria-hidden="true" />
          <h3>100%</h3>
          <p>Safety Commitment</p>
        </div>

        <div className="owner-box">
          <FaHardHat aria-hidden="true" />
          <h3>24×7</h3>
          <p>Technical Support</p>
        </div>
      </div>
    </section>
  );
}

export default Owner;    
