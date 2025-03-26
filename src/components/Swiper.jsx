import React, { useEffect, useRef } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ImageSlider = ({ images }) => {
  gsap.registerPlugin(ScrollTrigger);
  const swiperRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(".slide-image").forEach((image) => {
      gsap.to(image, {
        yPercent: 30,
        willChange: "transform",
        ease: "none",
        scrollTrigger: {
          trigger: ".containers",
          start: "50% 50%",
          end: "bottom top",
          scrub: 0.3,
        },
      });
    });
  }, []);

  return (
    <section className="containers relative h-screen w-full overflow-hidden">
      <Swiper
        className="w-full h-full"
        modules={[Navigation]}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full relative">
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              className="w-full h-full object-cover slide-image"
              src={image.url}
              alt=""
            />
            <div className="absolute bottom-36 max-[599px]:bottom-28 left-15 max-[599px]:left-5 font-semibold text-[5vw] max-[599px]:text-[13vw] w-[60%] max-[599px]:w-[90%] text-white leading-tight">
              <h1>{image.text}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full px-12 max-[599px]:px-4 absolute bottom-5 left-0 z-10 flex items-center justify-between">
        <div className="flex gap-4 text-white">
          <button
            className="border border-white p-4 rounded-full cursor-pointer custom-prev transition-all duration-500 hover:bg-white hover:text-[#002B04]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft size={26} />
          </button>
          <button
            className="border border-white p-4 rounded-full cursor-pointer custom-next transition-all duration-500 hover:bg-white hover:text-[#002B04]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight size={26} />
          </button>
        </div>
        <div className="arrow-right border-[1px] max-[599px]:hidden border-white text-white p-6 rounded-full cursor-pointer">
          <FaArrowDown size={30} color="#42FF00" />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
