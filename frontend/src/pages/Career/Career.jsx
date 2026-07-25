import { useState, useEffect,  useRef } from "react";
import "./Career.css";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";


import {
   FaHeartbeat,
  FaChartLine,
   FaGift,
  FaGraduationCap,
   FaUmbrellaBeach,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaAward,
} from "react-icons/fa";

import {
  FaMapMarkerAlt,
  FaBriefcase
} from "react-icons/fa";

// Images
import career1 from "../../assets/images/career/ca-1.jpg";
import career2 from "../../assets/images/career/ca-2.jpg";
import career3 from "../../assets/images/career/ca-3.jpg";
import career4 from "../../assets/images/career/ca-4.jpg";
import career5 from "../../assets/images/career/ca-5.jpg";

import lifeImg from "../../assets/images/career/ct-6.jpg";

const images = [
  career1,
  career2,
  career3,
  career4,
  career5,
];


const jobData = [

  {
    title:"Project Engineer",
    location:"Rajkot",
    experience:"2-5 Years",
    department:"Steel Structures & Infrastructure"
  },

  {
  title:"IT Engineer",
  location:"Rajkot",
  experience:"Freshers Can Apply",
  department:"IT Support & Software Management"
},

  {
    title:"Site Engineer",
    location:"Rajkot",
    experience:"Freshers Can Apply",
    department:"Site Execution"
  },

  {
    title:"QA/QC Engineer",
    location:"Rajkot",
    experience:"2-4 Years",
    department:"Quality Assurance"
  },

  {
    title:"Fabrication Engineer",
    location:"Rajkot",
    experience:"3-5 Years",
    department:"Steel Fabrication"
  },
  

];



const whyJoinData = [

  {

    icon: <FaChartLine />,
    title: "Career Growth",
    desc: "Build a rewarding career with exciting opportunities, leadership development and continuous professional growth.",

  },

  {

    icon: <FaGraduationCap />,
    title: "Learning",
    desc: "Enhance your skills through technical training, mentoring and real-world engineering projects.",

  },

  {

    icon: <FaShieldAlt />,
    title: "Safety",
    desc: "Work in a safe environment where employee wellbeing and quality standards are our top priorities.",

  },

  {

    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "Be part of innovative engineering solutions that shape India's infrastructure and future.",

  },

  {

    icon: <FaUsers />,
    title: "Team Culture",
    desc: "Collaborate with experienced professionals in a supportive, inclusive and growth-oriented workplace.",

  },

  {

    icon: <FaAward />,
    title: "Rewards",
    desc: "Get recognized for your dedication through performance-based  rewards and career achievements.",
  },

];


const Career = () => {

  const formRef = useRef(null);

  
  const [currentImage, setCurrentImage] = useState(0);
    const [showLifeMore, setShowLifeMore] = useState(false);
    const [showForm, setShowForm] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <Navbar />

      {/* hero section  */}

      <section className="careerHero">

        <div className="careerHeroOverlay"></div>

        <div className="careerHeroContainer">

          {/* LEFT */}

          <div className="careerHeroContent">

            <span className="careerTag">
              CAREERS AT HM CENTRIC
            </span>

            <h1>
              Build Your Future
              <br />
              With HM Centric Engineering
            </h1>

            <p>
              Join our passionate team of engineers,
              innovators and professionals working on
              landmark infrastructure, bridge, metro,
              steel fabrication and industrial projects
              across India.
            </p>

            <div className="careerButtons">

              <button className="applyBtn">
                Apply Now
              </button>

              <button className="exploreBtn">
                Explore Openings
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="careerHeroSlider">

            <div className="careerImageWrapper">

              <img
                src={images[currentImage]}
                alt="Career"
                className="careerSliderImage"
              />

            </div>

            <div className="sliderDots">

              {images.map((_, index) => (

                <span
                  key={index}
                  className={
                    currentImage === index
                      ? "dot activeDot"
                      : "dot"
                  }
                  onClick={() => setCurrentImage(index)}
                ></span>

              ))}

            </div>

          </div>

        </div>

        <div className="scrollDown">

          <span>Scroll Down</span>

          <div className="mouse">

            <div className="wheel"></div>

          </div>

        </div>

      </section>

      {/* why choose centric */}

         {/* ================= WHY JOIN HM CENTRIC ================= */}

<section className="whyJoinSection">

  <div className="whyJoinContainer">

    <div className="whyJoinHeading">

      <span>WHY JOIN HM CENTRIC</span>

      <h2>
       Join Our Team and Build the 
        <br />
        Future Build Your Dream Career!
      </h2>

      <p>
        Welcome to Centrique Infratech Pvt. Ltd., where we are dedicated to 
        excellence in structural steel fabrication and construction. Our team of
        
      </p>

    </div>

    <div className="whyJoinGrid">

      {whyJoinData.map((item, index) => (

        <div className="whyJoinCard" key={index}>

          <div className="whyJoinIcon">
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <p>{item.desc}</p>

        </div>

      ))}

    </div>

  </div>

</section>



{/* ================= LIFE AT HM CENTRIC ================= */}

<section className="lifeCentricSection">

  <div className="lifeCentricContainer">


    {/* LEFT IMAGE */}

    <div className="lifeCentricImage">

      <img
        src={lifeImg}
        alt="Life at HM Centric"
      />

    </div>


    {/* RIGHT CONTENT */}

    <div className="lifeCentricContent">


      <span>
        LIFE AT HM CENTRIC
      </span>


      <h2>
        Engineering Excellence
        <br />
        With A Better Workplace
      </h2>

      <p>
        At HM Centric Engineering, we believe our people are
        the foundation of our success. We provide a professional
        environment where engineers can learn, innovate and grow
        while working on challenging infrastructure projects.
      </p>


      <ul>

        <li>
          ✔ Modern Workplace
        </li>


        <li>
          ✔ Skilled Engineers
        </li>


        <li>
          ✔ Safety First
        </li>

        <li>
          ✔ Career Growth
        </li>

      </ul>


      <button 
onClick={() => setShowLifeMore(!showLifeMore)}
>
{
showLifeMore 
? "Show Less ↑" 
: "Learn More →"
}

</button>
{
showLifeMore && (

<div className="lifeMoreText">

<p>
At HM Centric Engineering, employees get opportunities
to work on advanced steel structures, railway bridges,
metro projects and industrial solutions. We encourage
continuous learning through practical exposure,
technical training and teamwork.
</p>

<p>
Our workplace focuses on safety, innovation and
professional growth where every team member gets
the chance to contribute and build a successful career.
</p>

</div>

)
}

    </div>

  </div>

</section>



{/* ================= OPEN POSITIONS ================= */}


<section className="openPositionSection">

<div className="openPositionContainer">

<div className="openPositionHeading">

<span>
OPEN POSITIONS
</span>


<h2>
Build Your Career With HM Centric
</h2>


<p>
Explore opportunities and become part of
our growing engineering team.
</p>


</div>


<div className="jobGrid">

{
jobData.map((job,index)=>(

<div className="jobCard" key={index}>


<h3>
{job.title}
</h3>


<div className="jobDepartment">

{job.department}

</div>


<div className="jobDetails">


<p>
<FaMapMarkerAlt/>
{job.location}
</p>


<p>
<FaBriefcase/>
{job.experience}
</p>

</div>

<a
href="https://www.linkedin.com/company/centrique-infratech-pvt-ltd"
target="_blank"
rel="noopener noreferrer"
className="applyLinkedinBtn"
>

Apply on LinkedIn →

</a>

</div>


))
}



</div>


</div>


</section>


{/* hiring  process  */}

<section className="hiringSection">

  <div className="hiringContainer">

    <div className="hiringHeading">
      <span>HIRING PROCESS</span>

      <h2>Our Recruitment Journey</h2>

      <p>
        We believe in a transparent and efficient hiring process to help
        you showcase your skills and become a part of HM Centric.
      </p>
    </div>

    <div className="hiringTimeline">

      <div className="processCard">
        <div className="processNumber">01</div>
        <h3>Apply</h3>
        <p>Submit your application through our Careers page or LinkedIn.</p>
      </div>

      <div className="timelineArrow">→</div>

      <div className="processCard">
        <div className="processNumber">02</div>
        <h3>Screening</h3>
        <p>Our HR team reviews your profile and qualifications.</p>
      </div>

      <div className="timelineArrow">→</div>

      <div className="processCard">
        <div className="processNumber">03</div>
        <h3>Interview</h3>
        <p>Meet our technical and leadership team for discussions.</p>
      </div>

      <div className="timelineArrow">→</div>

      <div className="processCard">
        <div className="processNumber">04</div>
        <h3>Offer</h3>
        <p>Selected candidates receive an official offer letter.</p>
      </div>

      <div className="timelineArrow">→</div>

      <div className="processCard">
        <div className="processNumber">05</div>
        <h3>Join</h3>
        <p>Welcome to HM Centric and begin your exciting journey.</p>
      </div>

    </div>

  </div>

</section>



{/* Employee benefit  */}


<section className="benefitsSection">

  <div className="benefitsContainer">

    <div className="benefitsHeading">

      <span>EMPLOYEE BENEFITS</span>

      <h2>Why You'll Love Working With Us</h2>

      <p>

        At HM Centric, we value our people. We provide benefits that

        support your growth, well-being, and long-term success.

      </p>

    </div>

    <div className="benefitsGrid">

      <div className="benefitCard">

        <FaHeartbeat className="benefitIcon"/>

        <h3>Medical</h3>

        <p>Comprehensive healthcare support for employees.</p>

      </div>

      <div className="benefitCard">

        <FaGraduationCap className="benefitIcon"/>

        <h3>Training</h3>

        <p>Continuous learning and professional development.</p>

      </div>

      <div className="benefitCard">

        <FaGift className="benefitIcon"/>

        <h3>Bonus</h3>

        <p>Performance rewards and annual bonuses.</p>

      </div>

      <div className="benefitCard">

        <FaUmbrellaBeach className="benefitIcon"/>

        <h3>Leave</h3>

        <p>Paid holidays and flexible leave policies.</p>

      </div>

      <div className="benefitCard">

        <FaShieldAlt className="benefitIcon"/>

        <h3>Insurance</h3>

        <p>Life and accident insurance for added security.</p>

      </div>

      <div className="benefitCard">

        <FaAward className="benefitIcon"/>

        <h3>Recognition</h3>

        <p>Employee appreciation and achievement awards.</p>

      </div>

    </div>


  </div>
</section>


{/* CTA banner  */}

{/* ================= FINAL CTA ================= */}

{/* <section className="career-cta">

  <div className="career-cta-overlay"></div>

  <div className="career-cta-content">

    <span className="cta-tag">
      JOIN OUR TEAM
    </span>

    <h2>
      Ready To Build India's Future?
    </h2>

    <p>
      Join Centrique InfraTech and become part of a team delivering
      innovative steel fabrication and infrastructure projects across India.
      Your career starts here.
    </p>

    <button className="career-cta-btn">
      Apply Now →
    </button>

  </div>

</section> */}





      {/* ================= FINAL CTA ================= */}



      <section className="career-cta">

        <div className="career-cta-overlay"></div>



        <div className="career-cta-content">

          <span className="cta-tag">JOIN OUR TEAM</span>



          <h2>Join Our Team and Build the Future
            Build Your Dream Career!</h2>


          <p>
           Welcome to Centrique Infratech Pvt. Ltd., where we are 
           dedicated to excellence in structural steel fabrication 
           and construction. Our team of professionals works collaboratively
            
          </p>



          <button className="career-cta-btn"
            onClick={() => setShowForm(true)}
           >

            Apply Now →

          </button>

        </div>

      </section>



      {/* ================= APPLICATION FORM ================= */}

          {showForm && (

      <section className="career-form-section" >

        <div className="career-form-container">

          <h2>Application Form</h2>



          <form className="career-form">

            <div className="form-group">

              <input type="text" placeholder="Full Name" required />

            </div>



            <div className="form-group">

              <input type="email" placeholder="Email Address" required />

            </div>



            <div className="form-group">

              <input type="tel" placeholder="Phone Number" required />

            </div>



            <div className="form-group">

              <input

                type="text"

                placeholder="Position Applied For"

                required

              />

            </div>


            <div className="form-group">

              <select required>

                <option value="">Experience</option>

                <option>Fresher</option>

                <option>1-3 Years</option>

                <option>3-5 Years</option>

                <option>5+ Years</option>

              </select>

            </div>


            <div className="form-group">
              <input type="file" />
            </div>


            <div className="form-group">

              <textarea

                rows="5"

                placeholder="Tell us about yourself..."

              ></textarea>

            </div>

            <button type="submit" className="submit-btn">

              Submit Application

            </button>

          </form>

        </div>

      </section>

      )}

      <Footer />

    </>
  );
};

export default Career;