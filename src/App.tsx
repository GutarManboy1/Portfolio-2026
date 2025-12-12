import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import LogoSection from "./sections/LogoSection";
import FeaturesCards from "./sections/FeaturesCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

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
    </>
  );
};

export default App;
