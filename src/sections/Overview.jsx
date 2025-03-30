import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import Box from "../components/Box";

const Overview = () => {
  const box = useRef([]);
  const img = useRef([]);
  const btn = useRef([]);

  const products = [
    {
      id: 1,
      title: "Agricultural Products",
      description:
        "We aim to increase the productivity and quality of Indian agriculture with our rich AI use cases. We provide reliable and innovative products for bountiful harvests by offering solutions suitable for all types of plants and soil, from classic to special.",
      imgSrc: "/images/box1.webp",
      logoSrc: "/images/farm.svg",
      altText: "Farm Logo",
      buttonText: "REVIEW",
    },
    {
      id: 2,
      title: "Industry Ready",
      description:
        "With our extensive range of industrial products, we continue to support Turkish industry.",
      imgSrc: "/images/box2.webp",
      logoSrc: "/images/industry.svg",
      altText: "Industry Logo",
      buttonText: "REVIEW",
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

  useEffect(() => {
    if (box.current.length > 0) {
      box.current.forEach((el, index) => {
        if (!el) return;

        el.addEventListener("mouseenter", () => {
          gsap.to(img.current[index], { scale: 1.2 });
          gsap.to(btn.current[index], {
            backgroundColor: "#003D23",
            color: "#fff",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(img.current[index], { scale: 1 });
          gsap.to(btn.current[index], {
            backgroundColor: "#fff",
            color: "#003D23",
          });
        });
      });

      return () => {
        box.current.forEach((el, index) => {
          if (!el) return;
          el.removeEventListener("mouseenter", () => {});
          el.removeEventListener("mouseleave", () => {});
        });
      };
    }
  }, []);

  return (
    <section className="overview-section w-full bg-white px-12 max-[599px]:px-4 py-6 font-medium overflow-hidden">
      <div className="main-text w-full py-10">
        <h2
          ref={textRef}
          className="text-[4.5vw] max-[599px]:text-[8vw] leading-tight text-[#002B04]"
        >
          We preserve the power of nature, adding abundance to the future.
        </h2>
      </div>
      <div className="products flex gap-5 max-[599px]:flex-col mt-10 max-[599px]:mt-6">
        {products.map((product, index) => (
          <Box
            ref={(el) => (box.current[index] = el)}
            refImg={(el) => (img.current[index] = el)}
            refBtn={(el) => (btn.current[index] = el)}
            product={product}
            key={index}
            index={index}
            logo={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Overview;
