import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import Leadership from "./pages/Leadership/Leadership";
import OurMessage from "./pages/OurMessage/OurMessage";
import CoreValues from "./pages/CoreValues/CoreValues";
import Services from "./pages/Services/services";
import RdsoBridgesMetro from "./pages/Services/RdsoBridgesMetro/RdsoBridgesMetro";
import PebStructures from "./pages/Services/PebStructures/PebStructures";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/projectDetails";
// import OngoingProjects from "./pages/OngoingProjects/OngoingProjects";
import Career from "./pages/Career/Career";
import Gallery from "./pages/Gallery/Gallery";
import Certificates from "./pages/Certificates/Certificates";


import GlobalPresence from "./pages/GlobalPresence/GlobalPresence";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
import FAQ from "./pages/FAQ/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

import Contact from "./pages/Contact/Contact";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/message" element={<OurMessage />} />
        <Route path="/values" element={<CoreValues />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route
          path="/rdso-bridges-metro"
          element={<RdsoBridgesMetro />}
        />
        <Route
          path="/peb-structures"
          element={<PebStructures />}
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* Project Details */}
        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

      {/* </Routes> */}

        {/* ongoing projects  */}
    
        {/* <Route
  path="/ongoing-projects"
  element={<OngoingProjects />}
/>  */}

  {/* career section  */}

    <Route path="/career" element={<Career />}
     />


     <Route path="/gallery" element={<Gallery />} />

     <Route path="/certificates" element={<Certificates />} />

   
     <Route path="/global-presence" element={<GlobalPresence />} />

   <Route path="/request-quote" element={<RequestQuote />} />

   <Route path="/faq" element={<FAQ />} />

    <Route path="/privacy-policy" element={<PrivacyPolicy />} />


     <Route path="/contact" element={<Contact />} />
     
     


   </Routes>
    
    </BrowserRouter>
  );
}

export default App;