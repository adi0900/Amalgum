import React from "react";
import Swiper from "../components/Swiper";

const Hero = () => {
  const images = [
    {
      url: "/bg1.png",
      text: "Legacy of 54 Years of Past, Abundance of the Future",
    },
    {
      url: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Innovation in Agriculture for a Sustainable Future",
    },
    {
      url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Empowering Farmers with Advanced Technology",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1669122601993-449a0a3b70c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Growing Together for a Greener Tomorrow",
    },
  ];

  return (
    <section>
      <Swiper images={images} />
    </section>
  );
};

export default Hero;
