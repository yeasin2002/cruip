"use client";

import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { interFont, RedHatDisplay } from "@/fonts";
import { serviceSliderData } from "@/data";
interface Props extends React.ComponentProps<"div"> {}

export const ServerSliders = ({ ...props }: Props) => {
  const settings = {
    centerMode: true, // Enable center mode
    centerPadding: "0", // Padding around the center slide
    slidesToShow: 3, // Number of slides to show
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    arrows: false, // Show navigation arrows
    responsive: [
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          centerMode: true, // Keep center mode enabled
          centerPadding: "0", // No padding around the center slide
        },
      },
    ],
  };

  //     const settings = {
  //     className: "center",
  //     centerMode: true,
  //     infinite: true,
  //     centerPadding: "100px",
  //     slidesToShow: 1,
  //     arrow: false,
  //   };

  return (
    <div {...props} className=" space-y-6">
      <div className="max-w-3xl mx-auto">
        <h2
          className={` text-4xl  md:text-6xl font-black   tracking-wide leading-[52.1792px]  md:tracking-[-1.12px] md:leading-[66.08px] m-0 mb-4 text-center ${RedHatDisplay.className} font-black`}
        >
          From rough <br className="sm:hidden" /> design files, to powerful
          products
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
                className="min-h-80    relative"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="size-full absolute top-0 left-0 object-cover"
                />

                <h3> {index} </h3>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
