import React from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full px-12 py-4 flex items-center justify-between fixed top-0 left-0 z-10">
      <div className="logo">
        <h1 className="text-white text-[2vw] cursor-pointer">AMALGUM</h1>
      </div>
      <div className="links flex gap-6">
        <button className="border-[1px] border-white text-white rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer">Menu <HiOutlineMenuAlt4 size={22} /></button>
        <button className="px-4 py-2 rounded-full bg-[#42FF00] flex items-center gap-2 cursor-pointer">Profile <IoIosPerson size={24} /></button>
        <button className="px-4 py-2 rounded-full bg-[#002B04] text-white flex items-center gap-2 cursor-pointer"><FaEarthAsia /> Hindi</button>
      </div>
    </nav>
  );
};

export default Navbar;
