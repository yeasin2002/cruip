import React from "react";
import { interFont, RedHatDisplay } from "@/fonts";
interface Props extends React.ComponentProps<"div"> {}

export const Statistics = ({ ...props }: Props) => {
  const list = [
    { label: "Days turn around", value: "2.4M" },
    { label: "Days turn around", value: "7M" },
    { label: "Days turn around", value: "7.5%" },
    { label: "Days turn around", value: "49K" },
  ];
  return (
    <div
      {...props}
      className="grid grid-cols-2 md:grid-cols-4 gap-4  border-[#a2a2a8]/30 border-b pb-20 mb-3 "
    >
      {list.map((item) => {
        return (
          <div
            key={item.value}
            className={`  bg-[#ffffff] shadow-lg dark:bg-[#2f2e33] flex items-center justify-center flex-col py-11     size-full  `}
          >
            <p
              className={` text-5xl font-black tracking-[-0.8416px] leading-10 m-0 mb-1 text-center ${RedHatDisplay.className} `}
            >
              {item.value}
            </p>
            <p
              className={`  tracking-[-0.16px] leading-6 text-center ${interFont.className} font-normal	`}
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};
