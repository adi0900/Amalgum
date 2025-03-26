import React, { useEffect, useRef, useState } from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosPerson } from "react-icons/io";
import gsap from "gsap";

const Navbar = ({ heroRef }) => {
  const navRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);

  let mm = gsap.matchMedia();

  mm.add("(min-width: 599px)", () => {
    useEffect(() => {
      if (!heroRef?.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      observer.observe(heroRef.current);

      return () => {
        if (heroRef.current) observer.unobserve(heroRef.current);
      };
    }, [heroRef]);

    // Handle Navbar Hide/Show on Scroll
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    // GSAP Animation for Navbar
    useEffect(() => {
      gsap.to(navRef.current, {
        y: isVisible ? "0%" : "-100%",
        backgroundColor: isHeroVisible ? "transparent" : "#1C4734",
        willChange: "transform, background-color",
        padding: "24px 48px",
        duration: 0.3,
        ease: "power1.out",
      });
    }, [isHeroVisible, isVisible]);
  });

  mm.add("(max-width: 599px)", () => {
    useEffect(() => {
      if (!heroRef?.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      observer.observe(heroRef.current);

      return () => {
        if (heroRef.current) observer.unobserve(heroRef.current);
      };
    }, [heroRef]);

    // Handle Navbar Hide/Show on Scroll
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    // GSAP Animation for Navbar
    useEffect(() => {
      gsap.to(navRef.current, {
        y: isVisible ? "0%" : "-100%",
        backgroundColor: isHeroVisible ? "transparent" : "#1C4734",
        willChange: "transform, background-color",
        padding: "20px 16px",
        duration: 0.3,
        ease: "power1.out",
      });
    }, [isHeroVisible, isVisible]);
  });

  return (
    <nav
      ref={navRef}
      className="w-full px-12 max-[599px]:px-4 py-8 max-[599px]:py-4 flex items-center justify-between fixed top-0 left-0 z-20 transition-all duration-300"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="logo">
        <h1 className="text-white text-[2vw] max-[599px]:text-[6vw] font-semibold cursor-pointer">
          AMALGUM
        </h1>
      </div>
      <div className="links flex gap-6 max-[599px]:gap-4">
        <button className="border-[1px] border-white text-white rounded-full px-4 max-[599px]:px-2 py-2 flex items-center gap-2 cursor-pointer">
          <span className="max-[599px]:hidden">Menu</span>{" "}
          <HiOutlineMenuAlt4 size={22} />
        </button>
        <button className="px-4 max-[599px]:px-2 py-2 rounded-full bg-[#42FF00] flex items-center gap-2 cursor-pointer duration-500 hover:bg-[#002B04] hover:text-white">
          <span className="max-[599px]:hidden">Profile</span>{" "}
          <IoIosPerson size={24} />
        </button>
        <button className="px-4 max-[599px]:px-2 py-2 rounded-full bg-[#002B04] text-white flex items-center gap-2 cursor-pointer">
          <FaEarthAsia /> Hindi
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
