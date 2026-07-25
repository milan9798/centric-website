import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="privacy-hero">

        <div className="privacy-container">

          <span className="privacy-tag">
            PRIVACY POLICY
          </span>

          <h1>
            Your Privacy
            <br />
            Is Our Priority
          </h1>

          <p>
            At Centrique Infratech Pvt. Ltd., we are committed to protecting
            your personal information and ensuring transparency in how we
            collect, use, and safeguard your data.
          </p>

        </div>

      </section>

      {/* Privacy Content */}

      <section className="privacy-content">

        <div className="privacy-box">

          <h2>Privacy Policy</h2>

          <p>
            This Privacy Policy explains how Centrique Infratech Pvt. Ltd.
            collects, uses, and protects your information when you visit
            our website or contact us through our services.
          </p>

          <h3>Information We Collect</h3>

          <p>
            We may collect your name, email address, phone number,
            company details, and project-related information submitted
            through contact forms or quotation requests.
          </p>

          <h3>How We Use Your Information</h3>

          <ul>

            <li>Respond to your inquiries.</li>

            <li>Prepare quotations and project proposals.</li>

            <li>Improve our website and services.</li>

            <li>Provide customer support.</li>

          </ul>

          <h3>Data Security</h3>

          <p>
            We implement appropriate security measures to protect your
            personal information against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h3>Contact Us</h3>

          <p>
            If you have any questions regarding our Privacy Policy,
            please contact Centrique Infratech Pvt. Ltd.
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;