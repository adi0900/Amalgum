import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import SplitType from "split-type";

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
    },
    {
      id: 2,
      title: "Industry Ready",
      description:
        "With our extensive range of industrial products, we continue to support Turkish industry.",
      imgSrc: "/images/product-2.png",
      logoSrc: "/images/industry.svg",
      altText: "Industry Logo",
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
        <h2 ref={textRef} className="text-[4.5vw] max-[599px]:text-[8vw] leading-tight text-[#002B04]">
          We preserve the power of nature, adding abundance to the future.
        </h2>
      </div>
      <div className="products h-full w-full flex gap-5 max-[599px]:flex-col mt-10 max-[599px]:mt-6">
        {/* Product 1 */}
        {products.map((product) => (
          <div
            key={product.id}
            className="product bg-cover relative w-1/2 max-[599px]:w-full h-[35rem] bg-black/50 text-white rounded-4xl overflow-hidden"
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                src={product.imgSrc}
                alt=""
              />
            </div>
            <div className="absolute w-full h-full top-0 left-0 p-8 flex justify-between flex-col gap-4 pointer-events-none">
              <div className="logo-group flex flex-col gap-6">
                <div className="logo w-[12%]">
                  <img
                    className="w-full h-full object-cover"
                    src={product.logoSrc}
                    alt={product.altText}
                  />
                </div>
                <div className="heading">
                  <h4 className="text-[3vw] max-[599px]:text-[10vw] leading-[1] font-semibold -tracking-tighter">
                    {product.title}
                  </h4>
                </div>
              </div>
              <div className="desc-group flex flex-col gap-10 max-[599px]:gap-6">
                <div className="description text-[2.1vw] max-[599px]:text-[5vw] leading-tight">
                  <p>{product.description}</p>
                </div>
                <button className="flex pointer-events-auto gap-4 hover:scale-x-110 duration-500 hover:bg-[#002B04] hover:text-white origin-left bg-[#42FF00] text-black font-semibold text-[1.3vw] max-[599px]:text-[4vw] w-fit px-8 py-4 rounded-full">
                  Review <FaArrowRight size={26} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
