import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Empower from "./sections/Empower";
import Farmers from "./sections/Farmers";
import Analysis from "./sections/Analysis";
import News from "./sections/News";
import Footer from "./sections/Footer";

const App = () => {
  const heroRef = useRef(null);

  return (
    <>
      <Navbar heroRef={heroRef} />
      <Hero ref={heroRef} />
      <Overview />
      <Empower />
      <Farmers />
      <News />
      <Analysis />
      <Footer />
    </>
  );
};

export default App;
