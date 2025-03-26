import React from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-screen max-[599px]:h-fit bg-[#003D23] text-white px-12 max-[599px]:px-4 py-6 overflow-hidden">
      <div className="w-full h-[80%] py-10 max-[599px]:py-6 flex justify-between max-[599px]:flex-col">
        <div className="first h-full flex flex-col justify-between">
          <h1 className="text-[4vw] max-[599px]:text-[10vw]">AMALGUM</h1>
          <div>
            <p className="mb-4 text-[2vw] max-[599px]:text-[6vw]">
              Subscribe to newsletter
            </p>
            <div className="flex items-center border-2 border-white rounded-full px-4 py-1 w-[350px] bg-[#013220] relative">
              <input
                type="email"
                placeholder="Please enter e-mail address."
                className="bg-transparent text-white placeholder-white/50 w-full outline-none placeholder:text-[1vw] max-[599px]:placeholder:text-[3vw]"
              />
              <button className="p-3 cursor-pointer flex items-center justify-between rounded-full bg-[#42FF00] text-black">
                <FaArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="second h-full flex flex-col gap-30 max-[599px]:gap-6 pt-6 max-[599px]:pt-10 justify-between text-[1.5vw] max-[599px]:text-[3.5vw]">
          <h6 className="cursor-pointer max-[599px]:text-center">MENU</h6>
          <div className="flex flex-col max-[599px]:justify-center max-[599px]:flex-row gap-6 max-[599px]:gap-3 h-full">
            <h6 className="cursor-pointer">Home</h6>
            <h6 className="cursor-pointer">Products</h6>
            <h6 className="cursor-pointer">Services</h6>
            <h6 className="cursor-pointer">About</h6>
            <h6 className="cursor-pointer">Contact</h6>
          </div>
        </div>
        <div className="third flex flex-col justify-between h-[70%] max-[599px]:gap-4 pt-6 text-[1.5vw] max-[599px]:text-[3.6vw]">
          <h6 className="max-[599px]:text-center">CONTACT US</h6>
          <div className="flex flex-col max-[599px]:flex-row gap-4 max-[599px]:justify-center">
            <h6>adi1423tya@gmail.com</h6>
            <h6>+91-9695882854 (IND)</h6>
          </div>
          <div className="flex gap-4 max-[599px]:justify-center text-[2.5vw] max-[599px]:text-[6.5vw] cursor-pointer">
            <FaInstagram className="hover:text-[#42FF00] duration-500" />
            <FaYoutube className="hover:text-[#42FF00] duration-500" />
            <FaLinkedin className="hover:text-[#42FF00] duration-500" />
          </div>
        </div>
        <div className="fourth flex items-start justify-end">
          <button className="p-4 bg-[#42FF00] hover:bg-white duration-500 text-black w-fit rounded-full cursor-pointer">
            <FaArrowUp size={24} />
          </button>
        </div>
      </div>
      <div className="w-full py-8 max-[599px]:py-4 border-b-2 text-[1.5vw] max-[599px]:text-[3.5vw] border-white flex items-center justify-evenly max-[599px]:flex-col">
        <p>Team Members: Aditya(UI/UX)</p>
        <p>Sameer (Web developer) </p>
        <p>Vanjul (AI/ML Lead)</p>
        <p>Himesh (Web developer)</p>
      </div>
      <p className="text-center pt-8 leading-0 text-[2vw] max-[599px]:text-[4vw]">
        Copyright &copy; 2025 Amalgum. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
