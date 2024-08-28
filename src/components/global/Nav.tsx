import React from "react";
import { Logo } from "./Logo";

import { Button, ToggleInput } from "@/components/ui";
import { cn } from "@/utils";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { interFont } from "@/fonts";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props extends React.ComponentProps<"div"> {}

export const Nav = ({ className, ...props }: Props) => {
  const navItem = ["About", "Blog", "Testimonials", "Resources"];

  return (
    <nav
      {...props}
      className={cn(
        "flex justify-between  items-center py-6 px-4 container",
        className
      )}
    >
      <div className="flex items-center gap-x-4">
        <Logo />
        <div className="md:flex items-center  gap-x-3  hidden">
          {navItem.map((item) => (
            <p
              className={`${interFont.className}   dark:text-[#F4F4F5]   text-[#1D1D20] cursor-pointer flex items-center font-inter font-medium tracking-[-0.16px] leading-6 p-2 px-5]`}
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeSwitcher />
        <Button className="hidden lg:block">Request Code</Button>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side={"left"} className="bg-[#212024] lg:hidden">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="md:flex items-center  gap-x-3  mt-4">
              {navItem.slice(0, 3).map((item) => (
                <p
                  className={`${interFont.className}   dark:text-[#F4F4F5]   text-[#1D1D20] cursor-pointer flex items-center font-inter font-medium tracking-[-0.16px] leading-6 p-2 px-5]`}
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="text-[#a2a2a8] border-[#a2a2a8]/60 py-2 border-y my-2 ">
              <p>Resources</p>
              <div className="pl-5 space-y-2 mt-2 ">
                <p>Help Center </p>
                <p>404</p>
              </div>
            </div>
            <Button className="w-full">Request Code</Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
