import React from "react";
import Button from "./Button";

const Box = ({ ref, refImg, product, logo }) => {
  return (
    <div
      ref={ref}
      key={product?.id}
      className="product bg-cover relative w-1/2 max-[599px]:w-full h-[35rem] bg-[#003D23] text-white rounded-4xl cursor-pointer overflow-hidden"
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
      <div className="absolute w-full h-full top-0 left-0 p-8 flex justify-between flex-col gap-4 pointer-events-none">
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
          <div className="description text-[2.1vw] max-[599px]:text-[5vw] leading-tight">
            <p>{product?.description}</p>
          </div>
          <Button text={product?.buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Box;
