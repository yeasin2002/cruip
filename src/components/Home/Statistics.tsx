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
      className="grid grid-cols-4 gap-10 sm:container border-[#a2a2a8]/30 border-b pb-20 mb-3"
    >
      {list.map((item) => {
        return (
          <div
            key={item.value}
            className={` bg-[#2f2e33] flex items-center justify-center flex-col py-11     size-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] `}
          >
            <p
              className={`text-primary   text-5xl font-black tracking-[-0.8416px] leading-10 m-0 mb-1 text-center ${RedHatDisplay.className} `}
            >
              {item.value}
            </p>
            <p
              className={`text-primary    tracking-[-0.16px] leading-6 text-center ${interFont.className} font-normal	`}
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};
