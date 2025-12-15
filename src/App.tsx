import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeaturesCards from "./sections/FeaturesCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      {/* <LogoSection /> */}
      <FeaturesCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
