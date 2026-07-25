// import { useParams } from "react-router-dom";

// import Navbar from "../../components/Navbar/navbar";
// import Footer from "../../components/Footer/Footer";
// import "./ProjectDetails.css";

// import project1 from "../../assets/images/Projects/featured/ft-1.jpg";
// import project2 from "../../assets/images/Projects/featured/ft-2.jpg";
// import project3 from "../../assets/images/Projects/featured/ft-3.jpg";
// import project4 from "../../assets/images/Projects/featured/ft-4.jpg";
// import project5 from "../../assets/images/Projects/featured/ft-5.jpg";
// import project6 from "../../assets/images/Projects/featured/ft-6.jpg";

// export default function ProjectDetails() {

//   const { id } = useParams();

//   const projects = {
//     1: {
//       image: project1,
//       title: "Industrial Manufacturing Unit",
//     },
//     2: {
//       image: project2,
//       title: "Warehouse Building",
//     },
//     3: {
//       image: project3,
//       title: "Commercial Building",
//     },
//     4: {
//       image: project4,
//       title: "Metro Infrastructure",
//     },
//     5: {
//       image: project5,
//       title: "Heavy Engineering Plant",
//     },
//     6: {
//       image: project6,
//       title: "Cold Storage Facility",
//     },
//   };

//   const project = projects[id];

//   return (
//     <>
//       <Navbar />

//       <section className="project-details">

//         <div className="project-container">

//           <img
//             src={project.image}
//             alt={project.title}
//           />

//           <h1>{project.title}</h1>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );
// }

import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./ProjectDetails.css";

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


export default function ProjectDetails() {
             
  const { id } = useParams();     
            const navigate = useNavigate();
           const [showImage, setShowImage] = useState(false);
  const projects = {
    "1": {
      image: project1,
      title: "Industrial Manufacturing Unit",
      description: "Premium industrial steel building solution."
    },

    "2": {
      image: project2,
      title: "Warehouse Building",
      description: "Modern warehouse with high durability."
    },

    "3": {
      image: project3,
      title: "Commercial Building",
      description: "Commercial PEB solution with modern design."
    },

    "4": {
      image: project4,
      title: "Metro Infrastructure",
      description: "Steel infrastructure for metro projects."
    },

    "5": {
      image: project5,
      title: "Heavy Engineering Plant",
      description: "Heavy-duty industrial fabrication project."
    },

    "6": {
      image: project6,
      title: "Cold Storage Facility",
      description: "Energy-efficient cold storage building."
    },

    "7": {
      image: project7,
      title: "Cold Storage Facility",
      description: "Energy-efficient cold storage building."
    },

    "8": {
      image: project6,
      title: "Cold Storage Facility",
      description: "Energy-efficient cold storage building."
    },
      
   "9": {
      image: project6,
      title: "Cold Storage Facility",
      description: "Energy-efficient cold storage building."
    },

    "10": {
      image: project6,
      title: "Cold Storage Facility",
      description: "Energy-efficient cold storage building."
    },

    "11": {
      image: project6,
      title: "Cold Storage Facility",
      description: "Energy-efficient cold storage building."
    },

    "12": {
      image: project6,
      title: "Cold Storage Facility",
      description: "Energy-efficient cold storage building."
    }


  };

//   const project = projects[id];

//   if (!project) {
//     return <h1>Project Not Found</h1>;
//   }

//   return (
//     <>
//       <Navbar />

//       <section className="project-details">

//         <div className="project-container">

//           <img src={project.image} alt={project.title} />

//           <h1>{project.title}</h1>

//           <p>{project.description}</p>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );
// }

const project = projects[id];

if (!project) {
  return <h1>Project Not Found</h1>;
}

return (
  <>
    <Navbar />

    <section className="project-details">

      <button
  className="project-close-btn"
  onClick={() => navigate(-1)}
>
  <FaTimes />
</button>
         
         <div className="project-container">

  {/* Main Image */}
  <img
    src={project.image}
    alt={project.title}
    className="project-img"
  />

  <h1>{project.title}</h1>

  <p>{project.description}</p>

  {/* Open Image Button */}
  <div className="view-image-btn">
    <button onClick={() => setShowImage(true)}>
      View Full Image
    </button>
  </div>

  {/* Image Popup */}
  {showImage && (
    <div className="image-popup">

      {/* Close Button */}
      <button
        className="close-btn"
        onClick={() => setShowImage(false)}
      >
        <FaTimes />
      </button>

      {/* Full Image */}
      <img
        src={project.image}
        alt={project.title}
        className="popup-img"
      />

    </div>
  )}

</div>
      
      

      

    </section>

    <Footer />
  </>
);
}