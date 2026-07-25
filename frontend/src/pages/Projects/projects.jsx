
import { useEffect,  useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CountUp from "react-countup";


import {
  FaIndustry,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";

import {
  GiCrane,
  GiFactory,
} from "react-icons/gi";







  // 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./Projects.css";

import heroImg from "../../assets/images/Projects/hero/hero.jpg";
import { FaArrowRight } from "react-icons/fa";
// new vala likha hai import
import { useLocation } from "react-router-dom";



import project1 from "../../assets/images/Projects/featured/ft-1.jpg";
import project2 from "../../assets/images/Projects/featured/ft-2.jpg";
import project3 from "../../assets/images/Projects/featured/ft-3.jpg";
import project4 from "../../assets/images/Projects/featured/ft-4.jpg";
import project5 from "../../assets/images/Projects/featured/ft-5.jpg";
import project6 from "../../assets/images/Projects/featured/ft-6.jpg";

import project7 from "../../assets/images/Projects/featured/ft-7.jpg";
import project8 from "../../assets/images/Projects/featured/ft-8.jpg";
import project9 from "../../assets/images/Projects/featured/ft-9.jpg";
import project10 from "../../assets/images/Projects/featured/ft-10.jpg";
import project11 from "../../assets/images/Projects/featured/ft-11.jpg";
import project12 from "../../assets/images/Projects/featured/ft-12.jpg";



export default function Projects() {
     
const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
];

const [selectedImage, setSelectedImage] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);
 
 
  const openImage = (index) => {
  setCurrentIndex(index);
  setSelectedImage(projectImages[index]);
};

const nextImage = () => {
  const next = (currentIndex + 1) % projectImages.length;
  setCurrentIndex(next);
  setSelectedImage(projectImages[next]);
};

const prevImage = () => {
  const prev =
    (currentIndex - 1 + projectImages.length) %
    projectImages.length;

  setCurrentIndex(prev);
  setSelectedImage(projectImages[prev]);
};










// new components likha hai hmne bhai 
     const location = useLocation();

useEffect(() => {
  if (location.hash === "#featured-projects") {
    const section = document.getElementById("featured-projects");

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
}, [location]);


 
    const [showProjects, setShowProjects] = useState(false);
    const navigate = useNavigate();

    const ongoingRef = useRef(null);

    // sucess Metrics function 

     useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

const metrics = [
  {
    icon: <GiFactory />,
    number: 12000,
    suffix: "+",
    title: "Tons / Year",
  },
  {
    icon: <GiCrane />,
    number: 100,
    suffix: "+",
    title: "Bridges Delivered",
  },
  {
    icon: <FaIndustry />,
    number: 10,
    suffix: "+",
    title: "Projects In Hand",
  },
  {
    icon: <FaBriefcase />,
    number: 6000,
    suffix: "+",
    title: "Order Book (MT)",
  },
];

// ongoing section 

const projects = [
  {
    id: 1,
    project: "Chandlodiya B Station under Amrit Bharat Station Scheme",
    tonnage: "250 MT",
    structure: "Foot Over Bridge – Composite Girder",
    client: "Western Railway – Ahmedabad Division",
    completion: "January 2026",
  },
  {
    id: 2,
    project: "Chandlodiya B2 Station under Amrit Bharat Station Scheme",
    tonnage: "748 MT",
    structure: "Foot Over Bridge – Composite Girder",
    client: "Western Railway – Ahmedabad Division",
    completion: "March 2026",
  },
  {
    id: 3,
    project: "ROB Bridge 1A – 60M Bow String Arch Girder & 18M Composite Steel Girder",
    tonnage: "820 MT",
    structure: "Bow String Arch Grider",
    client: "Northeast Frontier Railway",
    completion: "March 2026",
  },
  {
    id: 4,
    project: "Ankleshwar FOB Station under Amrit Bharat Station Scheme",
    tonnage: "400 MT",
    structure: "Foot Over Bridge - composite Girder",
    client: "Western Railway-Vadodara Division",
    completion: "April 2026",
  },
   {
    id: 5,
    project: "Nandurbar FOB Station under Amrit Bharat Station Scheme",
    tonnage: "150 MT",
    structure: "Foot Over Bridge - composite Girder",
    client: "Western Railway-Mumbai Division",
    completion: "February 2026",
  },
  {
    id: 6,
    project: "Conveyor Gallery",
    tonnage: "715 MT",
    structure: "Conveyor Gallery",
    client: "AM/NS Hazira,surat",
    completion: "August 2025",
  },

  

];

  return (

    <>
      <Navbar />

    {/* =========================
        PROJECTS HERO
========================= */}

<section
  className="projects-banner"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="projects-overlay">
    <div className="projects-banner-container">

      <div className="projects-left">

        <span className="projects-tag fade-up delay-1">
          OUR PROJECTS
        </span>

        <h1 className="fade-up delay-2">
          Building Excellence <br />
          Through Innovation
        </h1>

        <p className="fade-up delay-3">
          Explore our diverse portfolio of Pre-Engineered Building
          projects delivered with precision, quality and commitment.
        </p>

        <a
          href="#featured-projects"
          className="view-projects fade-up delay-4"
        >
          <span>View All Projects</span>
          <FaArrowRight />
        </a>

      </div>

    </div>
  </div>
</section>


{/* features section  */}

   <section id="featured-projects" className="featured-projects">

  <div className="featured-heading">

    <div className="projects-filter">

      <button
  className="project-btn active"
  onClick={() => setShowProjects(true)}
>
  Completed Projects
</button>

      <button
  className="project-btn active"
  onClick={() =>
    ongoingRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Ongoing Projects
</button>

    </div>

    

  </div>
   {/* {showProjects && ( */}
   
  <div className="projects-grid">

    <div className="project-card">
      <img src={project1} alt="AM/NS Hazira"
       onClick={() => openImage(0)} />

      <h3>AMNS Conveyor Gallery Structure (GJ) </h3>

      <p>Premium industrial steel building solution.</p>

      <Link to="/projects/1" className="view-project-btn">
        View Project →
      </Link>
    </div>

    <div className="project-card">
      <img src={project2} alt="Warehouse Building"
       onClick={() => openImage(1)} />

      <h3>Miyagam FOB Station (GJ)</h3>

      <p>Modern warehouse with high durability.</p>

      <Link to="/projects/2" className="view-project-btn">
        View Project →
      </Link>
    </div>

    <div className="project-card">
      <img src={project3} alt="Commercial Building"
        onClick={() => openImage(2)}/>

      <h3>Amalner FOB Station (MH)</h3>

      <p>Commercial PEB solution with modern design.</p>

      <Link to="/projects/3" className="view-project-btn">
        View Project →
      </Link>
    </div>

    <div className="project-card">
      <img src={project4} alt="Metro Infrastructure"
       onClick={() => openImage(3)} />

      <h3>Metro Infrastructure</h3>

      <p>Steel infrastructure for metro projects.</p>

      <Link to="/projects/4" className="view-project-btn">
        View Project →
      </Link>
    </div>

    <div className="project-card">
      <img src={project5} alt="Heavy Engineering Plant"
       onClick={() => openImage(4)} />

      <h3>Heavy Engineering Plant</h3>

      <p>Heavy-duty industrial fabrication project.</p>

      <Link to="/projects/5" className="view-project-btn">
        View Project →
      </Link>
    </div>

    <div className="project-card">
      <img src={project6} alt="Cold Storage Facility"
       onClick={() => openImage(5)} />

      <h3>Cold Storage Facility</h3>

      <p>Energy-efficient cold storage building.</p>

      <Link to="/projects/6" className="view-project-btn">
        View Project →
      </Link>
    </div>


     <div className="project-card">
      <img src={project7} alt="Cold Storage Facility"
       onClick={() => openImage(6)} />

      <h3>Cold Storage Facility</h3>

      <p>Energy-efficient cold storage building.</p>

      <Link to="/projects/7" className="view-project-btn">
        View Project →
      </Link>
    </div>


     <div className="project-card">
      <img src={project8} alt="Cold Storage Facility" 
       onClick={() => openImage(7)}/>

      <h3>Cold Storage Facility</h3>

      <p>Energy-efficient cold storage building.</p>

      <Link to="/projects/8" className="view-project-btn">
        View Project →
      </Link>
    </div>


     <div className="project-card">
      <img src={project9} alt="Cold Storage Facility"
       onClick={() => openImage(8)} />

      <h3>Cold Storage Facility</h3>

      <p>Energy-efficient cold storage building.</p>

      <Link to="/projects/9" className="view-project-btn">
        View Project →
      </Link>
    </div>


     <div className="project-card">
      <img src={project10} alt="Cold Storage Facility"
       onClick={() => openImage(9)} />

      <h3>Cold Storage Facility</h3>

      <p>Energy-efficient cold storage building.</p>

      <Link to="/projects/10" className="view-project-btn">
        View Project →
      </Link>
    </div>


     <div className="project-card">
      <img src={project11} alt="Cold Storage Facility"
       onClick={() => openImage(10)} />

      <h3>Cold Storage Facility</h3>

      <p>Energy-efficient cold storage building.</p>

      <Link to="/projects/11" className="view-project-btn">
        View Project →
      </Link>
    </div>


     <div className="project-card">
      <img src={project12} alt="Cold Storage Facility" 
       onClick={() => openImage(11)}/>

      <h3>Cold Storage Facility</h3>

      <p>Energy-efficient cold storage building.</p>

      <Link to="/projects/12" className="view-project-btn">
        View Project →
      </Link>
    </div>

  </div>

  {/* // )} */}

</section>




{/* ongoing projects  */}
  
      <section  ref={ongoingRef} className="ongoing-hero">
        <div className="ongoing-container">
          <span className="hero-tag">OUR PROJECTS</span>

          <h1>Ongoing Projects</h1>

          <p>
            Explore our ongoing infrastructure and steel fabrication projects
            being executed with quality, safety and engineering excellence.
          </p>
        </div>
      </section>

      <section className="ongoing-table-section">
        <div className="ongoing-container">

          <div className="table-wrapper">

            <table className="ongoing-table">

   

             <thead>
                <tr>
              <th>Sr. No.</th>
             <th>Project</th>
             <th>Tonnage</th>
              <th>Structure</th>
               <th>Client</th>
              
              <th>Completion</th>
                  </tr>
                   </thead>

              <tbody>

                {projects.map((item) => (
                  <tr key={item.id}>

                    <td>{item.id}</td>

                    <td>{item.project}</td>

                    <td>{item.tonnage}</td>

                    <td>{item.structure}</td>

                    <td>{item.client}</td>

                    <td>{item.completion}</td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      
      </section>


{/*project ko add krne ke liye   */}

{selectedImage && (
  <div
    className="lightbox"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="lightbox-content"
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="close-btn"
        onClick={() => setSelectedImage(null)}
      >
        ×
      </span>

      <div className="counter">
        {currentIndex + 1} / {projectImages.length}
      </div>

      <button
        className="prev-btn"
        onClick={prevImage}
      >
        ❮
      </button>

      <img
        src={selectedImage}
        alt=""
        className="lightbox-image"
      />

      <button
        className="next-btn"
        onClick={nextImage}
      >
        ❯
        
      </button>
    </div>
  </div>
)}




{/* Sucess Metrics  */}

   <section className="success-section">

  <div className="success-heading">
    <span>OUR ACHIEVEMENTS</span>

    <h2>Success Metrics</h2>

    <p>
      Numbers that reflect our commitment to engineering excellence.
    </p>
  </div>

  <div className="metrics-grid">

    {metrics.map((item, index) => (

      <div
        className="metric-card"
        key={index}
        data-aos="zoom-in"
        data-aos-delay={index * 150}
      >

        <div className="metric-circle">

          

          <div className="metric-content">

            <div className="metric-icon">
              {item.icon}
            </div>

            <h3>
              {item.number.toLocaleString()}
              {item.suffix}
            </h3>

            <p>{item.title}</p>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>


     <Footer />
    </>
  
);
}


