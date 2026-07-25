
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import logo from "../../assets/images/ct-logo.jpg";

function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <img
            src={logo}
            alt="Centrique Logo"
            className="hero-logo"
          />

          <h1 className="hero-title">
            Centrique InfraTech: Strength In Every Piece
          </h1>
        </div>
      </section>

      {/* About Description */}
      <section className="about-page">
        <div className="about-content">
          <p>
            Nestled amidst the vibrant industrial landscape of Rajkot, Gujarat,
            India, CENTRIQUE InfraTech stands tall as a beacon of excellence in the
            realm of steel fabrication. Guided by the principles of precision,
            innovation, and unwavering commitment to quality, we have carved a niche
            for ourselves as a premier ISO 9001:2015 certified entity, renowned for
            our prowess in crafting heavy steel structural marvels.
          </p>

          <p>
            With a meticulous focus on every facet of the fabrication process,
            we specialize in the design, manufacturing, assembly, and fabrication
            of a diverse array of colossal steel structural items and parts.
            From the majestic sweep of beams to the steadfast solidity of girders,
            from the towering presence of columns to the resilient angles and channels,
            our repertoire encompasses a spectrum of components tailored to adorn the
            grandeur of bridges for roads and railways, and monumental structures alike.
          </p>

          <p>
            Our legacy of excellence is woven through collaborations with a myriad
            of esteemed entities, both domestically and on the global stage.
            Embracing the diversity of challenges presented by our clientele,
            we tailor our offerings with an unwavering commitment to delivering
            stellar quality products and services that transcend expectations.
          </p>

          <p>
            At the helm of our enterprise stands the visionary leadership of
            Mr. Pankaj Govindbhai Bhanderi, whose astute guidance has propelled
            CENTRIQUE InfraTech to the pinnacles of success. Under his stewardship,
            our ambit has expanded manifold, culminating in the establishment of a
            sprawling manufacturing facility over 20 acres.
          </p>

          <p>
            However, our most prized asset remains our team of dedicated professionals –
            a cadre of highly qualified engineers, designers, technicians, and managers,
            whose collective expertise forms the bedrock of our endeavors.
          </p>

          <h1 className="global">Global Footprint</h1>

          <p>
            Indeed, the adage rings true: “One’s product speaks for itself.”
            At CENTRIQUE InfraTech, this axiom is not merely a sentiment,
            but a guiding principle etched into the very fabric of our ethos.
          </p>

          <p>
            It is this steadfast commitment to excellence that has propelled us
            to expand our horizons beyond the confines of our native shores.
            Today, our reach extends across the globe, spanning continents from
            North America to Central America and the Middle East.
          </p>

          <p>
            Through trust, transparency, and unwavering commitment, we have built
            enduring relationships with clients and vendors worldwide and continue
            to uphold the principles that have guided us thus far.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default AboutPage;