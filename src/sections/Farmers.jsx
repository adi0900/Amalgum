import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../components/Button";

const Farmers = () => {
  const slidesData = [
    {
      url: "/images/slide1.webp",
      title: "Empowering Farmers with AI",
      heading: "Smart Crop Advisory, Market Insights & Precision Farming",
      description:
        "Agriculture in India faces challenges due to a lack of affordable, real-time advisory tools. By integrating AI, geospatial analytics, and multilingual support, farmers can optimize yields, tackle climate uncertainties, and access fair market prices—driving sustainable growth.",
      buttonText: "READ MORE",
    },
    {
      url: "/images/slide2.webp",
      title: "AI-Driven Farming Revolution",
      heading: "Real-Time Insights for Smarter Agriculture",
      description:
        "Indian farmers struggle with unpredictable weather and market fluctuations. With AI-powered geospatial analytics and voice-based advisory, they can make informed decisions, improve yields, and maximize profits—ensuring a resilient future.",
      buttonText: "READ MORE",
    },
    {
      url: "/images/slide3.webp",
      title: "Sustainable Agriculture with AI",
      heading: "Climate-Resilient Farming Solutions",
      description:
        "Climate change threatens traditional farming. AI-powered weather predictions and adaptive farming strategies help mitigate risks, optimize water usage, and enhance productivity—ensuring long-term sustainability.",
      buttonText: "READ MORE",
    },
    {
      url: "/images/slide4.webp",
      title: "Market Intelligence for Farmers",
      heading: "Real-Time Price Forecasts & Demand Trends",
      description:
        "Farmers lack access to real-time market trends, leading to unfair pricing. AI-driven market analysis helps predict demand, optimize crop selection, and ensure better earnings—empowering farmers with data-backed decisions.",
      buttonText: "DISCOVER",
    },
    {
      url: "/images/slide5.webp",
      title: "AI-Powered Pest & Disease Control",
      heading: "Early Detection & Prevention for Healthier Crops",
      description:
        "Pests and diseases cause major yield losses. With AI-enabled image recognition and satellite-based monitoring, farmers can detect threats early, take preventive actions, and reduce chemical overuse—ensuring safer, healthier crops.",
      buttonText: "DISCOVER",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ height: "100vh" }}
    >
      <Swiper
        className="w-full h-full"
        style={{ height: "100vh" }}
        modules={[Navigation]}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {slidesData.map((dets, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <div className="contain w-full h-full max-[599px]:h-[90%] flex max-[599px]:flex-col items-center justify-center gap-10 px-12 max-[599px]:px-6">
              <div className="left w-[33%] max-[599px]:w-full h-[75%] max-[599px]:h-1/2 rounded-t-[444px] max-[599px]:rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={dets.url}
                  alt=""
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="right w-[60%] max-[599px]:w-full h-auto flex flex-col justify-between gap-6 text-black">
                <h4 className="text-[3vw] max-[599px]:text-[5vw] leading-tight">
                  {dets.title}
                </h4>
                <h2 className="text-[4.5vw] max-[599px]:text-[6vw] font-semibold leading-tight">
                  {dets.heading}
                </h2>
                <p className="text-[1.5w] max-[599px]:text-[3.5vw]">
                  {dets.description}
                </p>
                <Button text={dets.buttonText} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="px-12 max-[599px]:px-4 absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-between">
        <div className="flex gap-4 text-white">
          <button
            className="border border-black text-[#002B04] p-4 rounded-full cursor-pointer custom-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft size={26} />
          </button>
          <button
            className="border border-black text-[#002B04] p-4 rounded-full cursor-pointer custom-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Farmers;
