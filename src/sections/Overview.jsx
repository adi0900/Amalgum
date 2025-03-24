import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Overview = () => {
  return (
    <section className="overview-section w-full min-h-screen bg-white px-12 py-6 font-medium">
      <div className="main-text w-full py-10">
        <h2 className="text-[4.5vw] leading-tight text-[#002B04]">
          We preserve the power of nature, adding abundance to the future.
        </h2>
      </div>
      <div className="products h-full w-full flex gap-5 mt-10">
        <div className="product-1 bg-[url('./images/product-1.png')] bg-cover w-1/2 h-[35rem] bg-black/50 text-white p-8 flex justify-between flex-col gap-4 rounded-4xl">
          <div className="logo-group flex flex-col gap-6">
            <div className="logo w-[12%]">
              <img
                className="w-full h-full object-cover"
                src="./images/farm.svg"
                alt=""
              />
            </div>
            <div className="heading">
              <h4 className="text-[3vw] font-semibold -tracking-tighter">
                Agricultural Products
              </h4>
            </div>
          </div>
          <div className="desc-group flex flex-col gap-10">
            <div className="description text-[2.1vw] leading-tight">
              <p>
                We aim to increase the productivity and quality of Indian
                agriculture with our rich Ai use cases. We provide reliable and
                innovative products for bountiful harvests by offering solutions
                suitable for all types of plants and soil, from classic to
                special.
              </p>
            </div>
            <button className="flex gap-4 bg-[#42FF00] text-black font-semibold text-[1.3vw] w-fit px-8 py-4 rounded-full">
              Review <FaArrowRight size={26} />
            </button>
          </div>
        </div>
        <div className="product-2 bg-[url('./images/product-2.png')] bg-cover w-1/2 h-[35rem] bg-black/50 text-white p-8 flex justify-between flex-col gap-4 rounded-4xl">
          <div className="logo-group desc-group flex flex-col gap-6">
            <div className="logo w-[10%]">
              <img
                className="w-full h-full object-cover"
                src="./images/industry.svg"
                alt=""
              />
            </div>
            <div className="heading">
              <h4 className="text-[3vw] font-semibold -tracking-tighter">
                Industry Ready
              </h4>
            </div>
          </div>
          <div className="desc-group desc-group flex flex-col gap-10">
            <div className="description text-[2.1vw] leading-tight">
              <p>
                With our extensive range of industrial products, we continue to
                support Turkish industry.
              </p>
            </div>
            <button className="flex gap-4 bg-[#42FF00] text-black font-semibold text-[1.3vw] w-fit px-8 py-4 rounded-full">
              Review <FaArrowRight size={26} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
