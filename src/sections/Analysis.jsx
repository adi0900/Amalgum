import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";

const Analysis = () => {
  const products = [
    {
      id: 1,
      title: "Expert Analysis",
      logoSrc: "/images/industry.svg",
      description:
        "Get expert analysis using Google Earth Engine & Gemini AI for smarter farming.",
      altText: "Agriculture Icon",
      buttonText: "DISCOVER",
    },
    {
      id: 2,
      title: "Geospatial analytics",
      description:
        "Optimize soil health using Google Earth Engine & AI-driven geospatial analytics.",
      imgSrc: "/images/6.png",
      logoSrc: "/images/farm.svg",
      altText: "Geospatial Icon",
      buttonText: "FERTILIZATION RECOMMENDATIONS",
    },
  ];

  return (
    <section className="w-full h-auto px-12 max-[599px]:px-4 py-20 max-[599px]:py-4 overflow-hidden">
      <div className="h-full w-full flex gap-5 max-[599px]:flex-col cursor-pointer">
        {products.map((product, index) => (
          <div
            key={index}
            className="product bg-cover relative w-1/2 max-[599px]:w-full h-[20rem] max-[599px]:h-[25rem] bg-[#003D23] text-white rounded-4xl overflow-hidden"
          >
            {/* Product Image */}
            <div className="w-full h-full">
              {index === 1 && (
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  src={product?.imgSrc}
                  alt={product?.title || "Product Image"}
                />
              )}
            </div>

            {/* Content Overlay */}
            <div className="absolute w-full h-full top-0 left-0 p-8 flex justify-between flex-col gap-4 pointer-events-none">
              {/* Logo and Heading */}
              <div className="logo-group flex items-center justify-between gap-6">
                <div className="logo w-[12%]">
                  <img
                    className="w-full h-full object-cover"
                    src={product?.logoSrc}
                    alt={product?.altText || "Logo"}
                  />
                </div>
                <div className="heading">
                  <h4 className="text-[3vw] max-[599px]:text-[10vw] leading-[1] font-semibold -tracking-tighter">
                    {product?.title}
                  </h4>
                </div>
              </div>

              {/* Description and Button */}
              <div className="desc-group flex flex-col gap-10 max-[599px]:gap-6">
                <div className="description text-[2.1vw] max-[599px]:text-[5vw] leading-tight">
                  <p>{product?.description}</p>
                </div>
                <Button text={product?.buttonText} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Analysis;
