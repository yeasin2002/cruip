import React from "react";
import "react-device-frameset/styles/marvel-devices.min.css";

import heroMockup from "@/assets/mockup/bowling-portrait.png";
import Image from "next/image";
import { Button } from "../ui";
import { Checkmark } from "../icons";
import { Check } from "lucide-react";
import { interFont } from "@/fonts";
import { FramesetColors } from "../global/FramesetColors";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
  const list = [
    "Lorem ipsum dolor sit amet consectetur",
    "adipisicing elit. Natus nobis ",
    "tempore tenetur quibusdam suscipit",
    "praesentium hic beatae omnis?",
  ];

  return (
    <div
      {...props}
      className="flex items-center  gap-x-10 gap-y-10 md:container py-16 flex-col  lg:flex-row min-h-screen px-4 relative left-0 top-0"
    >
      <div className="space-y-6 text-center md:text-start">
        <h1 className="text-foreground text-5xl md:text-8xl font-black tracking-tighter md:leading-[97.68px]  ">
          Your website, <br /> reimagined
        </h1>
        <p
          className={`${interFont.className} text-lg sm:text-xl  text-[#a2a2a8] md:tracking-wide leading-7   tracking-normal `}
        >
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="flex items-center flex-col  gap-y-2  lg:flex-row lg:w-2/3">
          <input
            type="text"
            placeholder="Phone Number"
            className="dark:bg-[#2E2E33] border  border-[#6E6E76] rounded-md shadow-none cursor-text m-0 mr-2 overflow-hidden p-3  px-4 w-full  flex-grow"
          />
          <Button className="w-full py-4 lg:w-1/3 lg:h-full">
            Request Code
          </Button>
        </div>

        <div className="space-y-1  ">
          {list.map((item) => (
            <p key={item} className="flex items-center gap-x-1 ">
              <Check className="size-6 text-mainGreen" />
              <span className="text-[#52525A] font-inter tracking-[-0.16px] leading-6 ">
                {item}
              </span>
            </p>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3   overflow-y-hidden ">
        <Image src={heroMockup} alt="Hero Mockup" className="z-30" />
      </div>
    </div>
  );
};
