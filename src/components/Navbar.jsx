import React, { useEffect, useRef } from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosPerson } from "react-icons/io";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(navRef.current, {
      backgroundColor: "#002B04",
      padding: "20px 48px",
      ease: "none"
    });
    tl.current.to(navRef.current, {
      y: -100,
      ease: "none"
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full px-12 max-[599px]:px-4 py-8 flex items-center justify-between fixed top-0 left-0 z-10 bg-transparent "
    >
      <div className="logo">
        <h1 className="text-white text-[2vw] font-semibold cursor-pointer">
          AMALGUM
        </h1>
      </div>
      <div className="links flex gap-6">
        <button className="border-[1px] border-white text-white rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer">
          Menu <HiOutlineMenuAlt4 size={22} />
        </button>
        <button className="px-4 py-2 rounded-full bg-[#42FF00] flex items-center gap-2 cursor-pointer duration-500 hover:bg-[#002B04] hover:text-white">
          Profile <IoIosPerson size={24} />
        </button>
        <button className="px-4 py-2 rounded-full bg-[#002B04] text-white flex items-center gap-2 cursor-pointer">
          <FaEarthAsia /> Hindi
        </button>
      </div>
    </nav>
  );
};

export default Navbar;