import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({text}) => {
  return (
    <button className="flex pointer-events-auto cursor-pointer gap-4 hover:scale-x-110 duration-500 hover:bg-[#002B04] hover:text-white origin-left bg-[#42FF00] text-black font-semibold text-[1.3vw] max-[599px]:text-[4vw] w-fit px-8 py-4 rounded-full">
      {text} <FaArrowRight size={26} />
    </button>
  );
};

export default Button;
