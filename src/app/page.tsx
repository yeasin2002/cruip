import React from "react";

import { Nav } from "@/components/global";
import { Hero, Statistics, ShowOffService, Pricing, Testimonial } from "@/components/Home";

import { ServiceSlider2 } from "@/components/Home/ServiceSlider2";
import { ListFilters } from "@/components/Home/ListFilters";

const RootPage = () => {
  return (
    <>
      <div className="sm:container">
        <Nav />
        <Hero />
        <Statistics />
      </div>

      <ServiceSlider2 />
      <ListFilters />

      <ShowOffService />
      <Pricing />
      <Testimonial />
    </>
  );
};

export default RootPage;
