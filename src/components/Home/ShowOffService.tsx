import Image from "next/image";
import React from "react";

import { RedHatDisplay } from "@/fonts";
import leftBallMesh from "@/assets/mesh-gradient/ball-right.svg";

import el1 from "@/assets/mockup/showOff-element1.png";
import el2 from "@/assets/mockup/showOff-element2.png";
import el3 from "@/assets/mockup/showOff-element3.png";
import { HomeMain } from "./HomeMain";
const list = [el1, el2, el3];

interface Props extends React.ComponentProps<"div"> {}

export const ShowOffService = ({ ...props }: Props) => {
  return (
    <div className="md:py-14" {...props}>
      <HomeMain
        heading="Build and style every element to perfection"
        desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          excepteur sint occaecat cupidatat."
      />

      <div className="relative overflow-x-hidden">
        <div className="z-20 mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-4 sm:container *:z-20 sm:w-3/5 md:w-full md:grid-cols-3 xl:px-8">
          {list.map((item, index) => {
            return (
              <div key={index} className="relative flex flex-col items-center">
                <div className="relative mx-auto flex size-7 items-center justify-center rounded-full bg-mainGreen p-6 text-[#4FD1C5] dark:bg-[#31979540]">
                  {index + 1}
                </div>
                <Image src={item} alt="Frame" className="mt-5" />
              </div>
            );
          })}
        </div>
        <Image src={leftBallMesh} alt="Hero Mockup" className="absolute bottom-4 left-10 z-10 opacity-45" />
      </div>
    </div>
  );
};
