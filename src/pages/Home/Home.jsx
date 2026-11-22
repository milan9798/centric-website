import Navbar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import Owner from "../../components/Owner/Owner";
import Footer from "../../components/Footer/Footer";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Owner />
      <Footer />
     
    </>
  );
}

export default Home;