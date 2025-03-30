import React, { useState } from "react";
import Button from "./Button";

const Box = ({ ref, refImg, product, logo }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div
      ref={ref}
      key={product?.id}
      className="product bg-cover relative w-1/2 max-[599px]:w-full bg-[#003D23] text-white rounded-4xl cursor-pointer overflow-hidden"
    >
      {/* Product Image */}
      <div className="w-full h-full">
        {logo && (
          <img
            ref={refImg}
            className="w-full h-full object-cover"
            src={product?.imgSrc}
            alt={product?.title || "Product Image"}
          />
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute w-full h-full top-0 left-0 p-8 max-[599px]:p-4 flex justify-between flex-col gap-4 max-[599px]:gap-2 pointer-events-none">
        {/* Logo and Heading */}
        <div className="logo-group flex flex-col gap-6">
          {logo && product?.logoSrc && (
            <div className="logo w-[12%]">
              <img
                className="w-full h-full object-cover"
                src={product?.logoSrc}
                alt={product?.altText || "Logo"}
              />
            </div>
          )}
          <div className="heading">
            <h4 className="text-[3vw] max-[599px]:text-[10vw] leading-[1] font-semibold -tracking-tighter">
              {product?.title}
            </h4>
          </div>
        </div>

        {/* Description and Button */}
        <div className="desc-group flex flex-col gap-10 max-[599px]:gap-6">
          <div
            className={`description leading-tight ${
              showFullDesc
                ? "text-[2.1vw] max-[599px]:text-[5vw]"
                : "text-[1.8vw] max-[599px]:text-[4vw]"
            }`}
          >
            <p>{showFullDesc ? product?.description : product?.description?.slice(0, 120) + "..."}</p>
          </div>

          <Button text={product?.buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Box;
