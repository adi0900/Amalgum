import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import SplitType from "split-type";
import Box from "../components/Box";

const Overview = () => {
  const products = [
    {
      id: 1,
      title: "Agricultural Products",
      description:
        "We aim to increase the productivity and quality of Indian agriculture with our rich AI use cases. We provide reliable and innovative products for bountiful harvests by offering solutions suitable for all types of plants and soil, from classic to special.",
      imgSrc: "/images/product-1.png",
      logoSrc: "/images/farm.svg",
      altText: "Farm Logo",
      buttonText : "REVIEW"
    },
    {
      id: 2,
      title: "Industry Ready",
      description:
        "With our extensive range of industrial products, we continue to support Turkish industry.",
      imgSrc: "/images/product-2.png",
      logoSrc: "/images/industry.svg",
      altText: "Industry Logo",
      buttonText : "REVIEW"
    },
  ];

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: "words, chars" });

      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        text.chars,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "none",
          willChange: "transform, opacity",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 50%",
            end: "120% 50%",
            scrub: 0.3,
          },
        }
      );
    }
  }, []);

  return (
    <section className="overview-section w-full min-h-screen bg-white px-12 max-[599px]:px-4 py-6 font-medium">
      <div className="main-text w-full py-10">
        <h2
          ref={textRef}
          className="text-[4.5vw] max-[599px]:text-[8vw] leading-tight text-[#002B04]"
        >
          We preserve the power of nature, adding abundance to the future.
        </h2>
      </div>
      <div className="products h-full w-full flex gap-5 max-[599px]:flex-col mt-10 max-[599px]:mt-6">
        {/* Product 1 */}
        {products.map((product,index) => (
          <Box product={product} key={index} logo={true}/>
        ))}
      </div>
    </section>
  );
};

export default Overview;
