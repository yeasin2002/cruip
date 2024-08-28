"use client";

import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { interFont } from "@/fonts";
import { serviceSliderData } from "@/data";
interface Props extends React.ComponentProps<"div"> {}

export const ServerSliders = ({ ...props }: Props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    arrow: false,
  };

  return (
    <div {...props} className="md:container space-y-6">
      <div className="max-w-3xl mx-auto">
        <h2
          className={` text-xl md:text-6xl font-black tracking-[-1.12px] leading-[66.08px] m-0 mb-4 text-center ${interFont.className} font-black`}
        >
          From rough design files, to powerful products
        </h2>
        <p
          className={`text-[20px] tracking-[-0.16px] leading-[30px] text-center`}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat
        </p>
      </div>

      <div className="slider-container ">
        <Slider {...settings} className="">
          {serviceSliderData.map((item, index) => {
            return (
              <div
                key={item.title + item.ctaLink}
                className="min-h-80   border border-teal-400    "
              >
                {/* <Image src={item.img} alt={item.title} width={500} height={500} className="size-full absolute top-0 left-0"/> */}

                <h3> {index} </h3>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
