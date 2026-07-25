// import "./About.css";
// import aboutImg from "../../assets/images/about.jpg";
// import { FaCheckCircle } from "react-icons/fa";

// function About() {
//   return (
//     <section className="about">

//       {/* Left Image */}
//       <div className="about-left">

//         <img src={aboutImg} alt="About Company" />

//         <div className="experience-box">
//           <h2>15+</h2>
//           <p>Years Experience</p>
//         </div>

//       </div>

//       {/* Right Content */}
//       <div className="about-right">

//         <p className="about-subtitle">
//           ABOUT COMPANY
//         </p>

//         <h2>
//           Building India's Future Through Steel Excellence
//         </h2>

//         <div className="about-line"></div>

//         <p>
//           Centrique Infratech Pvt. Ltd. is a trusted name in steel
//           fabrication and infrastructure development, delivering
//           high-quality engineering solutions across India.
//         </p>

//         <p>
//           We are committed to innovation, quality, safety and
//           customer satisfaction while executing every project with
//           precision and excellence.
//         </p>

//         <div className="about-features">

//           <div>
//             <FaCheckCircle />
//             <span>15+ Years Experience</span>
//           </div>

//           <div>
//             <FaCheckCircle />
//             <span>120+ Projects Completed</span>
//           </div>

//           <div>
//             <FaCheckCircle />
//             <span>ISO Certified Company</span>
//           </div>

//           <div>
//             <FaCheckCircle />
//             <span>Skilled Engineering Team</span>
//           </div>

//         </div>

//         <button>
//           Read More
//         </button>

//       </div>

//     </section>
//   );
// }

// export default About;





import "./About.css";
// import logo from "../../assets/logos/ind.png";

function About() {
  return (
    <section className="about-page">

      {/* Hero Section */}
      <div className="about-hero">
        <div className="overlay">
          <h4>ABOUT US</h4>
          <h1>Building Stronger Foundations For A Better Tomorrow</h1>
          <p>
            One of India's leading steel fabrication companies delivering
            industrial, commercial and infrastructure projects.
          </p>
        </div>
      </div>

      {/* Company Section */}
      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
            alt="Company"
          />
        </div>

        {/* Right Side */}
        <div className="about-right">

          <span className="subtitle">ABOUT COMPANY</span>

          <h2>
            We Deliver High Quality Steel Fabrication Solutions
          </h2>

          <p>
            Centrique InfraTech Pvt. Ltd. is one of India's leading steel
            fabrication companies with expertise in industrial buildings,
            warehouses, bridge structures and commercial projects.
          </p>

          <div className="stats">

            <div className="card">
              <h3>2008</h3>
              <p>Established</p>
            </div>

            <div className="card">
              <h3>12000+</h3>
              <p>MT Capacity</p>
            </div>

            <div className="card">
              <h3>120+</h3>
              <p>Projects</p>
            </div>

            <div className="card">
              <h3>500+</h3>
              <p>Clients</p>
            </div>

            <div className="card">
              <h3>15+</h3>
              <p>Experience</p>
            </div>

          </div>

          <div className="values">
            <div>✓ Quality</div>
            <div>✓ Integrity</div>
            <div>✓ Safety</div>
            <div>✓ Innovation</div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;