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
          url: "/images/seeds.png",
          title: "Empowering Farmers with AI",
          heading: "Smart Crop Advisory, Market Insights & Precision Farming",
          description:
            "Agriculture in India faces challenges due to a lack of affordable, real-time advisory tools. By integrating AI, geospatial analytics, and multilingual support, farmers can optimize yields, tackle climate uncertainties, and access fair market prices—driving sustainable growth.",
          buttonText: "READ MORE",
        },
        {
          url: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Innovation in Agriculture",
          heading: "Transforming Farming with AI-Powered Solutions",
          description:
            "Advanced AI-driven analytics help farmers make data-driven decisions, ensuring better productivity and sustainable agricultural practices.",
          buttonText: "LEARN MORE",
        },
        {
          url: "/bg1.png",
          title: "Empowering Farmers with Technology",
          heading: "Precision Farming with Real-Time Insights",
          description:
            "Technology-driven solutions enable farmers to monitor soil health, predict weather patterns, and optimize resource utilization effectively.",
          buttonText: "EXPLORE MORE",
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1669122601993-449a0a3b70c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Sustainable Farming for the Future",
          heading: "Growing Together for a Greener Tomorrow",
          description:
            "Eco-friendly farming techniques and innovative solutions are driving the future of sustainable agriculture worldwide.",
          buttonText: "DISCOVER",
        },
      ];
      

  const swiperRef = useRef(null);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ height: "100vh" }} // Ensures full viewport height
    >
      <Swiper
        className="w-full h-full"
        style={{ height: "100vh" }} // Ensures Swiper takes full height
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
            <div className="contain w-full h-full flex items-center justify-center gap-10 px-12">
              <div className="left w-[33%] h-[70%] flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-t-[444px]"
                  src={dets.url}
                  alt=""
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="right w-[60%] h-auto flex flex-col justify-between gap-6 text-black">
                <h4 className="text-[3vw]">{dets.title}</h4>
                <h2 className="text-[4.5vw] font-semibold leading-tight">
                  {dets.heading}
                </h2>
                <p className="text-[1.5w]">
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
