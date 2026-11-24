
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./gallery.css";


import heroImage from "../../assets/Gallery/g-1.jpg";

import {
  FaIndustry,
  FaUsers,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";

// Bridges
import bridge1 from "../../assets/Gallery/bridges/ca-1.jpg";
import bridge2 from "../../assets/Gallery/bridges/ca-2.jpg";
import bridge3 from "../../assets/Gallery/bridges/ca-3.jpg";
import bridge4 from "../../assets/Gallery/bridges/ca-5.jpg";

// Metro
import metro1 from "../../assets/Gallery/metro/mt-1.jpg";
import metro2 from "../../assets/Gallery/metro/mt-2.jpg";
import metro3 from "../../assets/Gallery/metro/mt-3.jpg";
import metro4 from "../../assets/Gallery/metro/mt-4.jpg";

// Steel Fabrication
import steel1 from "../../assets/Gallery/steelfabrication/tt-1.jpg";
import steel2 from "../../assets/Gallery/steelfabrication/tt-2.jpg";
import steel3 from "../../assets/Gallery/steelfabrication/tt-3.jpg";
import steel4 from "../../assets/Gallery/steelfabrication/tt-4.jpg";

// Painting
import paint1 from "../../assets/Gallery/painting/p-1.jpg";
import paint2 from "../../assets/Gallery/painting/ft-3.jpg";
import paint3 from "../../assets/Gallery/painting/p-2.jpg";
import paint4 from "../../assets/Gallery/painting/p-3.jpg";

// Industrial
import industrial1 from "../../assets/Gallery/industrial/i-1.jpg";
import industrial2 from "../../assets/Gallery/industrial/i-2.jpg";
import industrial3 from "../../assets/Gallery/industrial/r-3.jpg";
import industrial4 from "../../assets/Gallery/industrial/r-4.jpg";

const filters = [
  "All Projects",
  "Bridges",
  "Metro",
  "Steel Fabrication",
  "Painting",
  "Industrial",
];

const galleryImages = [
  {
    id: 1,
    title: "Railway Bridge Project",
    location: "Rajkot, Gujarat",
    category: "Bridges",
    image: bridge1,
  },
  {
    id: 2,
    title: "Steel Bridge Construction",
    location: "Ahmedabad, Gujarat",
    category: "Bridges",
    image: bridge2,
  },
  {
    id: 3,
    title: "Highway Flyover Bridge",
    location: "Surat, Gujarat",
    category: "Bridges",
    image: bridge3,
  },
  {
    id: 4,
    title: "River Bridge Fabrication",
    location: "Vadodara, Gujarat",
    category: "Bridges",
    image: bridge4,
  },
  {
    id: 5,
    title: "Metro Viaduct Project",
    location: "Ahmedabad, Gujarat",
    category: "Metro",
    image: metro1,
  },
  {
    id: 6,
    title: "Metro Steel Structure",
    location: "Surat, Gujarat",
    category: "Metro",
    image: metro2,
  },
  {
    id: 7,
    title: "Metro Corridor Work",
    location: "Nagpur, Maharashtra",
    category: "Metro",
    image: metro3,
  },
  {
    id: 8,
    title: "Elevated Metro Bridge",
    location: "Pune, Maharashtra",
    category: "Metro",
    image: metro4,
  },
  {
    id: 9,
    title: "Industrial Steel Fabrication",
    location: "Rajkot, Gujarat",
    category: "Steel Fabrication",
    image: steel1,
  },
  {
    id: 10,
    title: "Heavy Steel Structure",
    location: "Jamnagar, Gujarat",
    category: "Steel Fabrication",
    image: steel2,
  },
  {
    id: 11,
    title: "Structural Steel Works",
    location: "Vadodara, Gujarat",
    category: "Steel Fabrication",
    image: steel3,
  },
  {
    id: 12,
    title: "Factory Steel Assembly",
    location: "Bhavnagar, Gujarat",
    category: "Steel Fabrication",
    image: steel4,
  },
  {
    id: 13,
    title: "Protective Coating Project",
    location: "Rajkot, Gujarat",
    category: "Painting",
    image: paint1,
  },
  {
    id: 14,
    title: "Industrial Painting Work",
    location: "Ankleshwar, Gujarat",
    category: "Painting",
    image: paint2,
  },
  {
    id: 15,
    title: "Bridge Surface Coating",
    location: "Surat, Gujarat",
    category: "Painting",
    image: paint3,
  },
  {
    id: 16,
    title: "Steel Protective Painting",
    location: "Ahmedabad, Gujarat",
    category: "Painting",
    image: paint4,
  },
  {
    id: 17,
    title: "Industrial Infrastructure",
    location: "Vadodara, Gujarat",
    category: "Industrial",
    image: industrial1,
  },
  {
    id: 18,
    title: "Heavy Engineering Facility",
    location: "Hazira, Gujarat",
    category: "Industrial",
    image: industrial2,
  },
  {
    id: 19,
    title: "Manufacturing Plant Project",
    location: "Sanand, Gujarat",
    category: "Industrial",
    image: industrial3,
  },
  {
    id: 20,
    title: "Factory Construction Project",
    location: "Mundra, Gujarat",
    category: "Industrial",
    image: industrial4,
  },
];


const statistics = [
  {
    id: "projects",
    icon: FaIndustry,
    number: "150+",
    title: "Projects Completed",
    description: "Across India",
  },
  {
    id: "engineers",
    icon: FaUsers,
    number: "100+",
    title: "Skilled Engineers",
    description: "Expert Team",
  },
  {
    id: "experience",
    icon: FaCalendarAlt,
    number: "10+",
    title: "Years Experience",
    description: "Since 2014",
  },
  {
    id: "quality",
    icon: FaShieldAlt,
    number: "100%",
    title: "Quality Assurance",
    description: "Every Project",
  },
];


function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedImage, setSelectedImage] = useState(null);

  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const filteredImages =
    activeFilter === "All Projects"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeFilter
        );

  // Modal keyboard and scroll handling

  useEffect(() => {
    if (!selectedImage) return;

    previousFocusRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        return;
      }

      // Keep keyboard focus inside the modal

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      previousFocusRef.current?.focus?.();
    };

  }, [selectedImage]);

  // Explore projects

  const handleExplore = () => {
    document.getElementById("gallery-projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Open image preview

  const openImage = (item) => {
    setSelectedImage(item);
  };

  // Close image preview

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />

      <main className="gallery-page">

        {/* HERO SECTION */}

        <section
          className="gallery-hero"
          style={{
            backgroundImage: `url("${heroImage}")`,
          }}
        >
          <div className="gallery-overlay" />

          <div className="gallery-hero-content">
            <span className="gallery-tag">
              OUR GALLERY
            </span>

            <h1>
              Building Excellence
              <br />
              Through Our Work
            </h1>

            <p>
              Explore our comprehensive gallery showcasing innovative
              infrastructure projects, precision steel fabrication,
              and excellence in every detail.
            </p>

            <button
              type="button"
              className="explore-btn"
              onClick={handleExplore}
            >
              Explore Projects
            </button>
          </div>
        </section>

        {/* FILTER SECTION */}

        <section
          id="gallery-projects"
          className="gallery-filter-section"
          aria-label="Filter gallery projects"
        >
          <div className="gallery-filter-container">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  activeFilter === item
                    ? "filter-btn active"
                    : "filter-btn"
                }
                aria-pressed={activeFilter === item}
                onClick={() => setActiveFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* GALLERY GRID */}

        <section
          className="gallery-grid"
          aria-label={`${activeFilter} gallery projects`}
        >
          {filteredImages.length > 0 ? (
            filteredImages.map((item) => (
              <button
                key={item.id}
                type="button"
                className="gallery-card"
                onClick={() => openImage(item)}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="gallery-view-label">
                    View Project
                  </span>
                </div>

                <div className="gallery-content">
                  <span className="gallery-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.location}</p>
                </div>
              </button>
            ))
          ) : (
            <p className="gallery-empty">
              No projects found in this category.
            </p>
          )}
        </section>

        {/* PROJECT STATISTICS */}

        <section className="gallery-stats">
          <div className="gallery-stats-container">
            {statistics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="gallery-stat-box"
                  key={item.id}
                >
                  <div className="gallery-stat-icon">
                    <Icon aria-hidden="true" />
                  </div>

                  <h2>{item.number}</h2>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* IMAGE PREVIEW MODAL */}

      {selectedImage && (
        <div
          className="gallery-modal"
          onClick={closeImage}
        >
          <div
            className="gallery-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="gallery-modal-close"
              aria-label="Close image preview"
              onClick={closeImage}
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              decoding="async"
            />

            <div className="gallery-modal-caption">
              <h2 id="gallery-modal-title">
                {selectedImage.title}
              </h2>

              <p>
                {selectedImage.category} · {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />

    </>
  );
}


export default Gallery;
