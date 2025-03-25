import React from "react";

const Empower = () => {
  return (
    <section className="w-full h-fit px-12 py-6">
      <div className="heading pb-10">
        <h2 className="text-[4.5vw]">Empowering Farmers, Enriching India</h2>
      </div>
      <div className="w-full flex gap-10">
        <div className="left w-1/2">
          <p className="text-[2.1vw]">
            India, with its deep-rooted reliance on agriculture, lacks
            affordable, advanced tools— hindering farmers from maximizing
            productivity and sustaining livelihoods.
          </p>
          <div className="data w-full flex flex-wrap">
            <div className="w-1/2 h-1/2 py-8">
              <h4 className="text-[3vw]">2M+</h4>
              <p className="text-[1.2vw]">Farmers Impacted</p>
            </div>
            <div className="w-1/2 h-1/2 py-8">
              <h4 className="text-[3vw]">10+</h4>
              <p className="text-[1.2vw]">Regional Markets Analyzed</p>
            </div>
            <div className="w-1/2 h-1/2 py-8">
              <h4 className="text-[3vw]">3+</h4>
              <p className="text-[1.2vw]">AI & Geospatial Integrations</p>
            </div>
            <div className="w-1/2 h-1/2 py-8">
              <h4 className="text-[3vw]">2+</h4>
              <p className="text-[1.2vw]">Local Languages Supported</p>
            </div>
          </div>
        </div>
        <div className="right w-1/2 flex justify-end relative pt-6">
          <h4 className="absolute left-18 top-30 text-[1.8vw] w-[55%]">
            Imported from outside of India and is Costly for Rural Peoples
          </h4>
          <div className="img w-[70%]">
            <img
              className="w-full h-full object-cover"
              src="/images/percent.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
