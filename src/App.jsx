import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Empower from "./sections/Empower";
import Farmers from "./sections/Farmers";
import Analysis from "./sections/Analysis";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Empower/>
      <Farmers/>
      <Analysis/>
    </>
  );
};

export default App;
