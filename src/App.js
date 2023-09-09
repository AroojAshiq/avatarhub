import "./App.css";
import { Element } from "react-scroll";
import Contact from "./components/LandingPage/contactUs/Contact";
import Rights from "./components/LandingPage/endbar/Rights";
import HeroSection from "./components/LandingPage/heroSection/HeroSection";
import AboutUs from "./components/LandingPage/AboutUs";
import Featured from "./components/LandingPage/Featured";

function App() {
  return (
    <>
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="aboutus">
        <AboutUs />
      </Element>
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Rights />
    </>
  );
}

export default App;
