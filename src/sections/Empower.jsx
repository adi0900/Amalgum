import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Empower = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 30,
      willChange: "transform",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "0% 50%",
        end: "bottom 0%",
        scrub: 0.3,
      },
    });

    numberRefs.current.forEach((el) => {
      const endValue = parseInt(el.dataset.value);
      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            el.innerHTML = Math.floor(this.targets()[0].textContent) + "+";
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section ref={containerRef} className="containers w-full min-h-screen max-[599px]:h-[110vh] flex items-center justify-center overflow-hidden relative">
      <div className="w-full h-full overflow-hidden absolute top-0 left-0">
      <img
        ref={imageRef}
        className="w-full h-full object-cover"
        src="/images/Backlines.svg"
        alt=""
        
      />
      </div>
      <div className="w-full h-full">
        <div className="absolute top-0 left-0 px-12 max-[599px]:px-4 py-6 max-[599px]:py-4">
          <div className="heading pb-10">
            <h2 className="text-[4.5vw] max-[599px]:text-[10vw] leading-tight">
              Empowering Farmers, Enriching India
            </h2>
          </div>
          <div className="w-full flex max-[599px]:flex-col-reverse gap-10 max-[599px]:gap-6">
            <div className="left w-1/2 max-[599px]:w-full">
              <p className="text-[2.1vw] max-[599px]:text-[6vw]">
                India, with its deep-rooted reliance on agriculture, lacks
                affordable, advanced tools— hindering farmers from maximizing
                productivity and sustaining livelihoods.
              </p>
              <div className="data w-full flex flex-wrap">
                {[
                  { value: "2000000", label: "Farmers Impacted" },
                  { value: "10", label: "Regional Markets Analyzed" },
                  { value: "3", label: "AI & Geospatial Integrations" },
                  { value: "2", label: "Local Languages Supported" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-1/2 h-1/2 py-8 max-[599px]:py-4"
                  >
                    <h4
                      ref={(el) => (numberRefs.current[index] = el)}
                      data-value={item.value}
                      className="text-[3vw] max-[599px]:text-[9vw]"
                    >
                      0+
                    </h4>
                    <p className="text-[1.2vw] max-[599px]:text-[3.2vw]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="right w-1/2 max-[599px]:w-full flex justify-end relative pt-6">
              <h4 className="absolute left-18 max-[599px]:left-0 top-30 max-[599px]:top-24 text-[1.8vw] max-[599px]:text-[3.8vw] w-[55%]">
                Imported from outside of India and is Costly for Rural Peoples
              </h4>
              <div className="img w-[70%] max-[599px]:w-full">
                <img
                  className="w-full h-full object-cover"
                  src="/images/percent.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
