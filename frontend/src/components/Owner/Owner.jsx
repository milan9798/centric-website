// // import "./Owner.css";
// // import ownerImg from "../../assets/images/owner.png";

// // function Owner() {
// //   return (
// //     <section className="owner">

// //       <div className="owner-left">

// //         <p className="owner-subtitle">
// //           MESSAGE FROM
// //         </p>

// //         <h2>
// //           Managing Director
// //         </h2>

// //         <p>
// //           Welcome to Centrique Infratech Pvt. Ltd.
// //           For over 15 years, we have been committed to delivering
// //           high-quality steel fabrication and infrastructure
// //           solutions across India.
// //         </p>

// //         <p>
// //           Our mission is to provide innovative engineering
// //           solutions with quality, safety and customer
// //           satisfaction as our highest priorities.
// //         </p>

// //         <h3>
// //           Mr. Milan Kalaria
// //         </h3>

// //         <span>Managing Director</span>

// //       </div>

// //       <div className="owner-right">

// //         <div className="owner-image">
// //           <img src={ownerImg} alt="Managing Director" />
// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Owner;



// import "./Owner.css";
// import ownerImg from "../../assets/images/owner.png";

// function Owner() {
//   return (
//     <section className="owner">

//       {/* Left Side */}
//       <div className="owner-left">

//         <p className="owner-subtitle">
//           MESSAGE FROM
//         </p>

//         <h2>
//           Managing Director
//         </h2>

//         <p>
//           Welcome to Centrique Infratech Pvt. Ltd. For over 15 years, we have
//           been committed to delivering high-quality steel fabrication and
//           infrastructure solutions across India.
//         </p>

//         <p>
//           Our mission is to provide innovative engineering solutions with
//           quality, safety and customer satisfaction as our highest priorities.
//         </p>

//         <h3>
//           Mr. Milan Kalaria
//         </h3>

//         <span>Managing Director</span>

//       </div>

//       {/* Right Side */}
//       <div className="owner-right">

//         {/* Image */}
//         <div className="owner-image">
//           <img src={ownerImg} alt="Managing Director" />
//         </div>

//         {/* Feature Cards */}
//         <div className="owner-features">

//           <div className="feature-card">
//             <div className="feature-icon">✔</div>

//             <div>
//               <h4>Quality Assured</h4>
//               <p>
//                 World-class steel fabrication with international standards.
//               </p>
//             </div>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">👷</div>

//             <div>
//               <h4>Experienced Team</h4>
//               <p>
//                 Professional engineers using modern technology.
//               </p>
//             </div>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">⭐</div>

//             <div>
//               <h4>Customer Focused</h4>
//               <p>
//                 Delivering quality work with complete customer satisfaction.
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Owner;





// import "./Owner.css";
// import ownerImg from "../../assets/images/owner.png";

// import {
//   FaAward,
//   FaUsers,
//   FaHandshake,
// } from "react-icons/fa";

// function Owner() {
//   return (
//     <section className="owner">

//       {/* Left */}
//       <div className="owner-left">

//         <p className="owner-subtitle">MESSAGE FROM</p>

//         <h2>Managing Director</h2>

//         <div className="owner-line"></div>

//         <p>
//           Welcome to Centrique Infratech Pvt. Ltd. For over 15 years,
//           we have been committed to delivering high-quality steel
//           fabrication and infrastructure solutions across India.
//         </p>

//         <p>
//           Our mission is to provide innovative engineering solutions
//           with quality, safety and customer satisfaction as our
//           highest priorities.
//         </p>

//         <h3>Mr. Meet Sir</h3>

//         <span>Managing Director</span>

//       </div>

//       {/* Center Image */}

//    {/* Center Image */}

// <div className="owner-center">

//     <div className="owner-image">
//         <img src={ownerImg} alt="Managing Director" />
//     </div>

// </div>

//       {/* Right Cards */}

//       <div className="owner-right">

//         <div className="feature-card">

//           <div className="feature-icon">
//             <FaAward />
//           </div>

//           <div>

//             <h4>Quality Assured</h4>

//             <div className="feature-line"></div>

//             <p>
//               World-class steel fabrication with strict quality control
//               and International Standards.
//             </p>

//           </div>

//         </div>

//         <div className="feature-card">

//           <div className="feature-icon">
//             <FaUsers />
//           </div>

//           <div>

//             <h4>Experienced Team</h4>

//             <div className="feature-line"></div>

//             <p>
//               Professional engineers and skilled workforce with rich
//               industry experience.
//             </p>

//           </div>

//         </div>

//         <div className="feature-card">

//           <div className="feature-icon">
//             <FaHandshake />
//           </div>

//           <div>

//             <h4>Customer Focused</h4>

//             <div className="feature-line"></div>

//             <p>
//               Committed to delivering the best quality and ensuring
//               complete customer satisfaction.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Owner;






  import "./Owner.css";

import { FaArrowRight } from "react-icons/fa";
import {
  FaCertificate,
  FaShieldAlt,
  FaHardHat,
  FaIndustry,
} from "react-icons/fa";

import ownerImg from "../../assets/images/bn-1.jpg";

function Owner() {
  return (
    <section className="owner">

      <div className="owner-container">

        {/* LEFT CONTENT */}

        <div className="owner-left">

          <span className="owner-tag">
            WHY CHOOSE CENTRIQUE
          </span>

          <h2>
            Engineering Excellence
            <br />
            <span>Built For Tomorrow.</span>
          </h2>

          <p>
            Centrique Infratech is one of India's leading steel fabrication
            companies delivering world-class bridge structures,
            industrial projects and infrastructure solutions with
            unmatched quality, innovation and engineering excellence.
          </p>

          <div className="owner-points">

            <div className="point">

              <FaCertificate />

              <span>ISO Certified Company</span>

            </div>

            <div className="point">

              <FaShieldAlt />

              <span>100% Safety Standards</span>

            </div>

            <div className="point">

              <FaIndustry />

              <span>Advanced Steel Fabrication</span>

            </div>

            <div className="point">

              <FaHardHat />

              <span>Experienced Engineering Team</span>

            </div>

          </div>

          <button className="owner-btn">

            Explore Projects

            <FaArrowRight />

          </button>

        </div>

        {/* RIGHT IMAGE */}

        <div className="owner-right">

          <img
            src={ownerImg}
            alt="Centrique"
            className="owner-image"
          />

          {/* Floating Card */}

          <div className="experience-card">

            <h2>15+</h2>

            <span>Years Experience</span>

          </div>

          {/* Floating Card */}

          <div className="iso-card">

            <FaCertificate />

            <div>

              <h4>ISO Certified</h4>

              <p>International Standards</p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="owner-bottom">

        <div className="owner-box">

          <FaIndustry />

          <h3>100+</h3>

          <p>Projects Delivered</p>

        </div>

        <div className="owner-box">

          <FaShieldAlt />

          <h3>100%</h3>

          <p>Safety Commitment</p>

        </div>

        <div className="owner-box">

          <FaHardHat />

          <h3>24×7</h3>

          <p>Technical Support</p>

        </div>

      </div>

    </section>
  );
}
export default Owner;   
          

       