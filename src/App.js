import "./App.css";
import Contact from "./components/LandingPage/contactUs/Contact";
import Rights from "./components/LandingPage/endbar/Rights";
import HeroSection from "./components/LandingPage/heroSection/HeroSection";
import AboutUs from "./components/LandingPage/AboutUs";
import Featured from "./components/LandingPage/Featured";

function App() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Featured />
      <Contact />
      <Rights />
    </>
  );
}

export default App;
