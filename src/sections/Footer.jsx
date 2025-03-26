import React from 'react'
import { FaArrowRight, FaArrowUp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='w-full h-screen bg-[#003D23] text-white px-12 py-6'>
      <div className='w-full h-[80%] py-10 flex justify-between'>
      <div className="first h-full flex flex-col justify-between">
        <h1 className='text-[4vw]'>AMALGUM</h1>
        <div>
          <p className='mb-4 text-[2vw]'>Subscribe to newsletter</p>
          <div className="flex items-center border-2 border-white rounded-full px-4 py-1 w-[350px] bg-[#013220] relative">
      <input
        type="email"
        placeholder="Please enter e-mail address."
        className="bg-transparent text-white placeholder-white/50 w-full outline-none placeholder:text-[1vw]"
      />
      <button className="p-3 flex items-center justify-between rounded-full bg-[#42FF00] text-black">
        <FaArrowRight size={16} />
      </button>
    </div>
        </div>
      </div>
      <div className="second h-full flex flex-col gap-30 pt-6 justify-between text-[1.5vw]">
        <h6 className='cursor-pointer'>MENU</h6>
       <div className='flex flex-col gap-6 h-full'>
       <h6 className='cursor-pointer'>Home</h6>
        <h6 className='cursor-pointer'>Products</h6>
        <h6 className='cursor-pointer'>Services</h6>
        <h6 className='cursor-pointer'>About</h6>
        <h6 className='cursor-pointer'>Contact</h6>
       </div>
      </div>
      <div className="third flex flex-col justify-between h-[70%] pt-6 text-[1.5vw]">
        <h6>CONTACT US</h6>
        <div className='flex flex-col gap-4'>
        <h6>adi1423tya@gmail.com</h6>
        <h6>+91-9695882854 (IND)</h6>
        </div>
        <div className='flex gap-4 text-[2.5vw] cursor-pointer'>
          <FaInstagram/>
          <FaYoutube/>
          <FaLinkedin/>
        </div>
      </div>
      <div className="fourth flex items-start justify-end">
      <button className="p-4 bg-[#42FF00] text-black w-fit rounded-full cursor-pointer">
              <FaArrowUp size={24} />
            </button>
      </div>
      </div>
      <div className='w-full py-8 border-b-2 border-white flex items-center justify-evenly'>
        <p>Team Members: Aditya(UI/UX)</p>
        <p>Sameer (Web developer) </p>
        <p>Vanjul (AI/ML Lead)</p>
        <p>Himesh (Web developer)</p>
      </div>
      <p className='text-center pt-8 leading-0 text-[2vw]'>Copyright &copy; 2025 Amalgum. All rights reserved.</p>
    </footer>
  )
}

export default Footer