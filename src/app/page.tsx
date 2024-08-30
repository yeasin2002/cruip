import React from "react";

import { Nav } from "@/components/global";
import { Hero, Statistics } from "@/components/Home";

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

      {/* client components */}
      <ServiceSlider2 />
      <ListFilters />
    </>
  );
};

export default RootPage;
