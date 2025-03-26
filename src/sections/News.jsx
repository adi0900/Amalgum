import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

const News = () => {
  const newsData = [
    {
      date: "February 22, 2024",
      image: "/images/1.png",
      description:
        "Our initiative was honored with the 'Sustainable Agriculture Impact Award' for pioneering AI-driven precision farming, empowering rural communities with accessible, data-backed insights.",
    },
    {
      date: "January 17, 2024",
      image: "/images/4.png",
      description:
        "With AI, geospatial analytics, and multilingual support, our platform has reached over 5 million farmers—helping them make informed decisions and improve yield sustainability.",
    },
  ];

  const boxRefs = useRef([]);
  const imgRefs = useRef([]);
  const btnRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      if (!box) return;

      box.addEventListener("mouseenter", () => {
        gsap.to(imgRefs.current[index], { scale: 1.2 });
        gsap.to(btnRefs.current[index], {
          backgroundColor: "#003D23",
          color: "#fff",
        });
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(imgRefs.current[index], { scale: 1 });
        gsap.to(btnRefs.current[index], {
          backgroundColor: "#fff",
          color: "#003D23",
        });
      });
    });
  }, []);

  return (
    <section className="w-full min-h-screen px-12 max-[599px]:px-4 py-10 overflow-hidden">
      <div className="containers w-full h-full flex justify-between items-center max-[599px]:flex-col gap-10">
        <div className="left w-[30%] max-[599px]:w-full h-full bg-[#003D23] text-white rounded-4xl px-8 py-6 flex flex-col gap-72 justify-between cursor-pointer">
          <div className="flex flex-col gap-6 max-[599px]:gap-4">
            <h5 className="text-[1.1vw] max-[599px]:text-[3.1vw]">
              Monday, March 4, 2024
            </h5>
            <h3 className="text-[2vw] max-[599px]:text-[6vw] leading-tight">
              AI-Powered Agri-Advisory Revolutionizes Farming
            </h3>
          </div>
          <div className="flex flex-col gap-6 max-[599px]:gap-4">
            <p className="text-[1.2vw] max-[599px]:text-[3.2vw]">
              Our hyperlocal AI platform is set to transform Indian agriculture
              by providing real-time crop insights, pest control solutions, and
              market price forecasts—helping farmers maximize productivity and
              profitability.
            </p>
            <button className="p-4 bg-[#42FF00] hover:bg-white duration-500 cursor-pointer text-black w-fit rounded-full">
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="right w-[70%] max-[599px]:w-full h-full ">
          <div className="flex flex-col gap-4">
            <h4 className="text-[3vw] max-[599px]:text-[6vw] font-semibold">
              Recent News
            </h4>
            <button className="flex mb-6 pointer-events-auto cursor-pointer gap-4 hover:scale-x-110 duration-500 hover:bg-[#FCC066] origin-left bg-[#FFEFD8] text-black font-semibold text-[1.3vw] max-[599px]:text-[4vw] w-fit px-8 py-4 rounded-full">
              ALL <FaArrowRight size={26} />
            </button>
          </div>
          <div className="flex max-[599px]:flex-col gap-6">
            {newsData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
                className="box-1 w-1/2 max-[599px]:w-full h-full cursor-pointer"
              >
                <div className="img w-full h-full rounded-[4rem] max-[599px]:rounded-xl overflow-hidden">
                  <img
                    ref={(el) => (imgRefs.current[index] = el)}
                    className="w-full h-full object-cover origin-center"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 max-[599px]:gap-4 mt-4">
                  <h6 className="text-[1vw] max-[599px]:text-[4vw]">
                    {item.date}
                  </h6>
                  <p className="text-[1.3vw] max-[599px]:text-[3.3vw]">
                    {item.description}
                  </p>
                  <button
                    ref={(el) => (btnRefs.current[index] = el)}
                    className="p-4 border-2 text-black w-fit rounded-full cursor-pointer"
                  >
                    <FaArrowRight size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
