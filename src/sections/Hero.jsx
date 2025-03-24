import React from "react";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src="/bg1.png" alt="" />
      </div>
      <div className="absolute bottom-5 left-0 w-full flex items-center justify-between px-12">
        <div className="arrows-left flex gap-4 text-white">
          <button className="border-[1px] border-white p-4 rounded-full cursor-pointer">
            <FaArrowLeft size={26} />
          </button>
          <button className="border-[1px] border-white p-4 rounded-full cursor-pointer">
            <FaArrowRight size={26} />
          </button>
        </div>
    <div className="arrow-right border-[1px] border-white text-white p-6 rounded-full cursor-pointer">
    <FaArrowDown size={30} color="#42FF00" />
    </div>
      </div>
    </section>
  );
};

export default Hero;
