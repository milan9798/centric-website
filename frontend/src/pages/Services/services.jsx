import { useState } from "react";
import { FaTimes , FaGripLines  } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";

  import {
  GiSteelClaws,
  GiFactory,
  GiLadder,
  GiRailRoad,
  GiBeamWake
} from "react-icons/gi"; 
 

import {
  FaDraftingCompass,
  FaTools,
  FaSearch,
  FaPaintRoller,
  FaTruck
} from "react-icons/fa";


import {
  FaAward,
  FaBuilding,
  FaUsers,
  FaClock
} from "react-icons/fa";


import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./Services.css";

import heroImage from "../../assets/images/services/fa-1.AVIF";
import fabrication from "../../assets/images/services/fa-6.Png";
import painting from "../../assets/images/services/shot-blasting.jpg";
import engineering from "../../assets/images/services/fa-5.png";
import management from "../../assets/images/services/pm.jpeg";


import railwayImg from "../../assets/images/industries/Id-1.jpg";
import metroImg from "../../assets/images/industries/Id-2.jpg";
import powerImg from "../../assets/images/industries/Id-3.jpg";
import industrialImg from "../../assets/images/industries/Id-4.jpg";
import bridgeImg from "../../assets/images/industries/Id-5.jpg";
import infraImg from "../../assets/images/industries/Id-6.jpg";




function Services() {

  const [activeCard, setActiveCard] = useState(null);
   
  const handleScroll = () => {

    document
      .getElementById("our-services")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };


  const servicesData = [

    {
      id:1,
      image:fabrication,
      title:"Fabrication & Welding",
      description:
      "From custom steel fabrication to intricate welding projects, Centrique InfraTech offers comprehensive services to bring your steelwork visions to life. Our state-of-the-art facilities and cutting-edge equipment ensure precision and attention to detail in every project we undertake."
    },


    {
      id:2,
      image:painting,
      title:"Shot Blasting & Painting",
      description:
      "Centrique InfraTech offers comprehensive solutions to enhance the durability and aesthetics of your steel components. With our state-of-the-art shot blasting technology, we efficiently remove rust, scale, and contaminants, preparing the surface for optimal paint adhesion."
    },


    {
      id:3,
      image:engineering,
      title:"Design & Engineering",
      description:
      "Our in-house design and engineering team collaborates closely with clients to develop innovative steelwork solutions that meet their specific requirements. We leverage the latest CAD software and industry-leading techniques to create custom designs that are both aesthetically pleasing and structurally sound."
    },


    {
      id:4,
      image:management,
      title:"Project Management",
      description:
      "Centrique InfraTech’s project management experts ensure seamless coordination and timely delivery of all our metalwork projects. From initial planning to final installation, we provide comprehensive project management services to ensure successful completion of every undertaking."
    }

  ];



  return (

    <>

      <Navbar />



      {/* HERO SECTION */}

      <section
        className="services-hero"
        style={{
          backgroundImage:`url(${heroImage})`
        }}
      >

        <div className="hero-overlay">


          <div className="hero-content">


            <h1>
              Engineering Excellence Through
              <br />
              Innovative Steel Solutions
            </h1>


            <p>
              Delivering world-class fabrication, design, coating,
              and project management services across industries.
            </p>



            <button
              className="hero-btn"
              onClick={handleScroll}
            >

              Explore Our Services

            </button>



          </div>


        </div>


      </section>





      {/* SERVICES SECTION */}


      <section
        className="services-section"
        id="our-services"
      >

        <div className="section-heading">

          <h2>
            Our Services
          </h2>

          <p>
            Delivering innovative steel fabrication and engineering
            solutions with precision, quality, and reliability.
          </p>

        </div>

        <div className="services-grid">

          {
            servicesData.map((service)=>(

              <div

                key={service.id}

                className={`service-card ${
                  activeCard === service.id
                  ? "active"
                  : ""
                }`}

                onClick={()=>{

                  setActiveCard(
                    activeCard === service.id
                    ? null
                    : service.id
                  );

                }}

              >

                <div className="card-image">


                  <img

                    src={service.image}

                    alt={service.title}

                  />

                </div>

                <div className="card-content">

                  <h3>

                    {service.title}

                  </h3>


                  <div className="card-description">


                    <p>

                      {service.description}

                    </p>


                  </div>

                  {
                    activeCard === service.id && (


                      <button

                        className="close-card-btn"


                        onClick={(e)=>{

                          e.stopPropagation();

                          setActiveCard(null);

                        }}

                      >

                        <FaTimes />

                      </button>


                    )
                  }


                </div>


              </div>


            ))
          }


        </div>

      </section>

      {/* OUR STEEL PRODUCTS */}

<section className="steel-products">

  <div className="steel-title">

    <span>OUR STEEL PRODUCTS</span>

    <h2>Manufactured Steel Components</h2>

  </div>

   <div className="steel-products-row">

  <div className="steel-item">
    <GiSteelClaws className="steel-icon" />
    <h4>Structural Frames</h4>
  </div>

  <div className="steel-item">
    <GiBeamWake className="steel-icon" />
    <h4>Steel Beams</h4>
  </div>

  <div className="steel-item">
    <FaGripLines className="steel-icon" />
    <h4>Steel Sections</h4>
  </div>

  <div className="steel-item">
    <GiRailRoad className="steel-icon" />
    <h4>Rail Structures</h4>
  </div>

  <div className="steel-item">
    <GiLadder className="steel-icon" />
    <h4>Ladders & Stairs</h4>
  </div>

  <div className="steel-item">
    <GiFactory className="steel-icon" />
    <h4>Industrial Units</h4>
  </div>

</div>

</section>


  {/* OUR PROCESS */}
     
     <section className="process-section">

  <div className="process-title">
    <span>OUR PROCESS</span>
    <h2>From Concept to Completion</h2>
  </div>

  <div className="process-timeline">

    <div className="process-step">
      <div className="process-icon">
        <FaDraftingCompass />
      </div>
      <span className="process-number">01</span>
      <h4>Design & Engineering</h4>
    </div>

    <div className="process-step">
      <div className="process-icon">
        <FaTools />
      </div>
      <span className="process-number">02</span>
      <h4>Fabrication</h4>
    </div>

    <div className="process-step">
      <div className="process-icon">
        <FaSearch />
      </div>
      <span className="process-number">03</span>
      <h4>Quality Inspection</h4>
    </div>

    <div className="process-step">
      <div className="process-icon">
        <FaPaintRoller />
      </div>
      <span className="process-number">04</span>
      <h4>Surface Treatment</h4>
      <p>(Blasting & Painting)</p>
    </div>

    <div className="process-step">
      <div className="process-icon">
        <FaTruck />
      </div>
      <span className="process-number">05</span>
      <h4>Dispatch & Delivery</h4>
    </div>

  </div>

</section>



{/* WHY CHOOSE US */}

<section className="why-choose-section">

  <div className="why-title">
    <span>WHY CHOOSE CENTRIQUE</span>
  </div>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">
        <FaAward />
      </div>

      <div className="why-content">
        <h3>RDSO Certified</h3>
        <p>
          Certified by RDSO and compliant with all quality standards.
        </p>
      </div>
    </div>

    <div className="why-card">
      <div className="why-icon">
        <FaBuilding />
      </div>

      <div className="why-content">
        <h3>Modern Infrastructure</h3>
        <p>
          Advanced machinery and world-class manufacturing facilities.
        </p>
      </div>
    </div>

    <div className="why-card">
      <div className="why-icon">
        <FaUsers />
      </div>

      <div className="why-content">
        <h3>Experienced Team</h3>
        <p>
          Skilled engineers and professionals with years of experience.
        </p>
      </div>
    </div>

    <div className="why-card">
      <div className="why-icon">
        <FaClock />
      </div>

      <div className="why-content">
        <h3>On-Time Delivery</h3>
        <p>
          Strong planning and execution to deliver every commitment.
        </p>
      </div>
    </div>

  </div>
</section>


{/* INDUSTRIES WE SERVE */}

<section className="industries-section">

  <div className="industries-title">
    <span>INDUSTRIES WE SERVE</span>
  </div>

  <div className="industries-grid">

    <div className="industry-card">
      <img src={railwayImg} alt="Railways" />
      <h4>Railways</h4>
    </div>

    <div className="industry-card">
      <img src={metroImg} alt="Metro" />
      <h4>Metro</h4>
    </div>

    <div className="industry-card">
      <img src={powerImg} alt="Power Plants" />
      <h4>Power Plants</h4>
    </div>

    <div className="industry-card">
      <img src={industrialImg} alt="Industrial Buildings" />
      <h4>Industrial Buildings</h4>
    </div>

    <div className="industry-card">
      <img src={bridgeImg} alt="Bridges" />
      <h4>Bridges</h4>
    </div>

    <div className="industry-card">
      <img src={infraImg} alt="Infrastructure" />
      <h4>Infrastructure</h4>
    </div>

  </div>

  {/* CTA */}

  <div className="project-banner">

    <div className="banner-left">

      <div className="banner-icon">
        <FaHardHat />
      </div>

      <div>
        <h3>Have a Project in Mind?</h3>
        <p>Let's Build Something Great Together.</p>
      </div>

    </div>

    <button className="banner-btn">
      GET A QUOTE
    </button>

  </div>

</section>
 
    
 
 

      <Footer />


    </>

  );

}


export default Services;