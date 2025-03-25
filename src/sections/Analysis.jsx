import React from "react";
import Box from "../components/Box";

const Analysis = () => {
    const products = [
        {
          id: 1,
          title: "Expert Analysis",
          description:
            "In this series, where you can find answers to the most frequently asked questions about agriculture and soil from our experts, you will discover the secrets of efficient agriculture and receive guidance on correct fertilization and soil care.",
          altText: "Agriculture Icon",
          buttonText: "DISCOVER",
        },
        {
          id: 2,
          title: "Geospatial analytics",
          description:
            "With our rich and diverse range of agricultural fertilizers, we aim to increase the productivity and quality of Turkish agriculture. We ensure that Turkish farmers have instant access to the information they need on this path.",
          imgSrc: "/images/product-1.png",
          logoSrc: "/images/farm.svg",
          altText: "Geospatial Icon",
          buttonText: "FERTILIZATION RECOMMENDATIONS",
        },
      ];
      
      

  return (
    <section className="w-full h-screen px-12 py-20">
      <div className="h-full w-full flex gap-5 max-[599px]:flex-col">
        {products.map((product, index) => (
          <Box key={index} product={product} logo={index === 1 ? true : false} />
        ))}
      </div>
    </section>
  );
};

export default Analysis;
