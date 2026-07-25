import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-tag">
            CONTACT US
          </span>

          <h1>
            Let's Build
            <br />
            <span>Something Great Together</span>
          </h1>

          <p>
            We'd love to hear from you. Whether you have a project inquiry,
            business proposal, or need expert engineering support,
            our team is always ready to help.
          </p>

          <div className="contact-buttons">

            <a href="#contact-form" className="contact-btn">
              Get In Touch
            </a>

          </div>

        </div>

        {/* Right Side Premium Card */}

        <div className="contact-info-card">

          <h3>Head Office</h3>

          <div className="info-item">
            <span>📍</span>
            <p>Rajkot, Gujarat, India</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 94093 05355</p>
          </div>

          <div className="info-item">
            <span>✉</span>
            <p>info@centriqueinfratech.com</p>
          </div>

          <div className="info-item">
            <span>🕒</span>
            <p>Mon - Sat | 9:00 AM - 6:00 PM</p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT INFO ================= */}

<section className="contact-info-section">

  <div className="contact-info-heading">

    <span>GET IN TOUCH</span>

    <h2>We're Always Ready To Help</h2>

    <p>
      Reach out to us through any of the following channels.
      Our team will get back to you as soon as possible.
    </p>

  </div>

  <div className="contact-info-grid">

    <div className="contact-card">

      <div className="contact-icon">📍</div>

      <h3>Head Office</h3>

      <p>
        Rajkot, Gujarat<br />
        India
      </p>

    </div>

    <div className="contact-card">

      <div className="contact-icon">📞</div>

      <h3>Call Us</h3>

      <p>
        +91 94093 05355
      </p>

    </div>

    <div className="contact-card">

      <div className="contact-icon">✉</div>

      <h3>Email Us</h3>

      <p>
        info@centriqueinfratech.com
      </p>

    </div>

    <div className="contact-card">

      <div className="contact-icon">🕒</div>

      <h3>Working Hours</h3>

       <p>
    Monday – Saturday : 9:00 AM – 6:00 PM <br />
    <span className="closed-day">Wednesday : Closed</span> <br />
   
    
  </p>
    </div>

  </div>

</section>



{/* ================= CONTACT FORM ================= */}

<section id="contact-form" className="contact-form-section">

  <div className="contact-form-container">

    {/* LEFT SIDE */}

    <div className="contact-form-left">

      <span>GET IN TOUCH</span>

      <h2>Send Us A Message</h2>

      <p>
        Have a project requirement or business inquiry?
        Fill out the form below and our team will contact you shortly.
      </p>

      <form>

        <div className="form-row">

          <input
            type="text"
            placeholder="First Name"
          />

          <input
            type="text"
            placeholder="Last Name"
          />

        </div>

        <div className="form-row">

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

        </div>

        <input
          type="text"
          placeholder="Company Name"
        />

        <select>

          <option>Select Service</option>

          <option>Steel Bridge</option>

          <option>PEB Structure</option>

          <option>Industrial Building</option>

          <option>Fabrication</option>

          <option>Painting</option>

        </select>

        <textarea
          rows="6"
          placeholder="Write Your Message..."
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>

    {/* RIGHT SIDE */}

    <div className="contact-form-right">

      <div className="contact-image-card">

        <h3>Why Choose Centrique?</h3>

        <ul>

          <li>✔ ISO Certified Company</li>

          <li>✔ Experienced Engineering Team</li>

          <li>✔ PAN India Projects</li>

          <li>✔ On Time Delivery</li>

          <li>✔ Premium Quality Assurance</li>

          <li>✔ Customer First Approach</li>

        </ul>

      </div>

    </div>

  </div>

</section>


 {/* ================= LOCATION SECTION ================= */}

<section className="location-section">

  <div className="location-container">


    {/* LEFT CONTENT */}

    <div className="location-content">

      <span>
        OUR LOCATION
      </span>

      <h2>
        Visit Our Head Office
      </h2>


      <p>
        We are located in Rajkot, Gujarat.
        Our team is always available to discuss
        your engineering and infrastructure requirements.
      </p>


      <div className="location-details">


        <div className="location-item">

          <h4>
            📍 Address
          </h4>

          <p>
            Centrique InfraTech Pvt Ltd
            <br/>
            Rajkot, Gujarat, India
          </p>

        </div>



        <div className="location-item">

          <h4>
            📞 Contact
          </h4>

          <p>
            +91 94093 05355
            <br/>
            info@centriqueinfratech.com
          </p>

        </div>


      </div>


      <a 
        href="#"
        className="map-btn"
      >
        Get Directions
      </a>


    </div>



    {/* RIGHT MAP CARD */}


    <div className="map-box">


      <iframe
        title="Centrique Location"
        src="https://www.google.com/maps?q=Rajkot,Gujarat,India&output=embed"
        loading="lazy"
      >
      </iframe>


    </div>



  </div>


</section>


{/* ================= FAQ SECTION ================= */}

<section className="faq-section">

  <div className="faq-heading">

    <span>
      FAQ
    </span>

    <h2>
      Frequently Asked Questions
    </h2>

    <p>
      Find answers to common questions about our
      services, projects, and support.
    </p>

  </div>



  <div className="faq-container">


    <div className="faq-card">

      <h3>
        What services does Centrique InfraTech provide?
      </h3>

      <p>
        We provide steel bridge fabrication, PEB structures,
        industrial buildings, metro infrastructure,
        painting and engineering solutions.
      </p>

    </div>



    <div className="faq-card">

      <h3>
        How can I start a project with Centrique?
      </h3>

      <p>
        You can contact our team through the inquiry form,
        email or phone. Our engineers will connect with you
        for further discussion.
      </p>

    </div>



    <div className="faq-card">

      <h3>
        Do you handle PAN India projects?
      </h3>

      <p>
        Yes, we execute infrastructure and fabrication
        projects across different locations in India.
      </p>

    </div>



    <div className="faq-card">

      <h3>
        What is your project delivery approach?
      </h3>

      <p>
        We follow quality control, safety standards and
        timely execution for every project.
      </p>

    </div>


  </div>


</section>


{/* ================= FINAL CTA SECTION ================= */}

<section className="contact-cta-section">


  <div className="contact-cta-content">


    <span>
      HAVE A PROJECT IN MIND?
    </span>


    <h2>
      Let's Build Something
      <br />
      Great Together
    </h2>


    <p>
      From steel bridges to industrial structures,
      Centrique InfraTech delivers reliable engineering
      solutions with quality and precision.
    </p>



    <div className="cta-buttons">


      <a 
        href="#contact-form"
        className="cta-primary"
      >
        Get A Quote
      </a>


      <a 
        href="tel:+919409305355"
        className="cta-secondary"
      >
        Call Us Now
      </a>


    </div>


  </div>


</section>



      <Footer />
    </>
  );
}

export default Contact;