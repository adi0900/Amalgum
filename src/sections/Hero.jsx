import React from "react";
import Swiper from "../components/Swiper";

const Hero = ({ ref }) => {
  const images = [
    {
      url: "/images/bg1.webp",
      text: "Legacy of Innovation, Future of Prosperity",
    },
    {
      url: "/images/bg2.webp",
      text: "Smart insights for a sustainable future",
    },
    {
      url: "/images/bg3.webp",
      text: "AI-driven solutions for better yields & profits.",
    },
    {
      url: "/images/bg4.webp",
      text: "Real-time data, local insights, better harvests.",
    },
    {
      url: "/images/bg5.webp",
      text: "Bridging tradition with technology for growth.",
    },
  ];

  return (
    <section ref={ref}>
      <Swiper images={images} />
    </section>
  );
};

export default Hero;
