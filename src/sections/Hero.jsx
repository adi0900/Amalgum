import React from "react";
import Swiper from "../components/Swiper";

const Hero = () => {
  const images = [
    {
      url: "/images/bg1.png",
      text: "Legacy of Innovation, Future of Prosperity",
    },
    {
      url: "/images/bg2.png",
      text: "Smart insights for a sustainable future",
    },
    {
      url: "/images/bg3.png",
      text: "AI-driven solutions for better yields & profits.",
    },
    {
      url: "/images/bg4.png",
      text: "Real-time data, local insights, better harvests.",
    },
    {
      url: "/images/bg5.png",
      text: "Bridging tradition with technology for growth.",
    },
  ];

  return (
    <section>
      <Swiper images={images} />
    </section>
  );
};

export default Hero;
