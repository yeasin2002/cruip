import React from "react";

import { Nav } from "@/components/global";
import { Hero, Statistics } from "@/components/Home";

import { ServiceSlider2 } from "@/components/Home/ServiceSlider2";

const RootPage = () => {
  return (
    <>
      <div className="sm:container">
        <Nav />
        <Hero />
        <Statistics />
      </div>

      <ServiceSlider2 />
    </>
  );
};

export default RootPage;
