// import "./Hero.css";
// import heroBg from "../../assets/images/hero/hero-bg.jpg";


// function Hero() {
//   return (
//     <section
//       className="hero"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       <div className="overlay">
//         <h4>LEADING STEEL FABRICATOR</h4>

//         <h1>
//           FABRICATING <br />
//           THE FUTURE OF <span>INDIA</span>
//         </h1>

//         <p>
//           Delivering innovative steel structures with unmatched quality,
//           safety and reliability.
//         </p>

//         <div className="hero-btns">
//           <button className="orange-btn">Explore Projects</button>
//           <button className="white-btn">Get A Quote</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;     



import "./Hero.css";
import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

import hero1 from "../../assets/images/hero/hero-bg.jpg";
import hero2 from "../../assets/images/hero/hero-bg1.jpg";
import hero3 from "../../assets/images/hero/hero-bg2.jpg";
import hero4 from "../../assets/images/hero/hero-bg3.jpg";
import hero5 from "../../assets/images/hero/hero-bg4.jpg";

function Hero() {

   const navigate = useNavigate();

  const slides = [
    {
      image: hero1,
      title: "FABRICATING THE FUTURE OF INDIA",
      desc:
        "Delivering innovative steel structures with unmatched quality, safety and reliability.",
        
    },
    {
      image: hero2,
      title: "BUILDING WORLD CLASS INFRASTRUCTURE",
      desc:
        "Engineering excellence with modern steel fabrication solutions.",
    },
    {
      image: hero3,
      title: "TRUSTED STEEL SOLUTIONS",
      desc:
        "Providing end-to-end fabrication services across multiple industries.",
    },
    {
      image: hero4,
      title: "LEADING STEEL FABRICATOR",
      desc:
        "Committed to innovation, quality and customer satisfaction.",
    },
    {
      image: hero5,
      title: "STEEL STRUCTURES FOR TOMORROW",
      desc:
        "Creating innovative and sustainable infrastructure across India.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(slider);
  }, [slides.length]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      <div className="overlay">
        <h4>LEADING STEEL FABRICATOR</h4>

        <h1>
          {slides[current].title
            .split(" ")
            .slice(0, -1)
            .join(" ")}
          <br />
          <span>
            {
              slides[current].title.split(" ")[
                slides[current].title.split(" ").length - 1
              ]
            }
          </span>
        </h1>

        <p>{slides[current].desc}</p>

        <div className="hero-btns">
         
          <button className="orange-btn" 
          onClick={() => navigate("/projects#featured-projects")}>
            Explore Projects
          </button>
          

          <button className="white-btn">
            Get A Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;