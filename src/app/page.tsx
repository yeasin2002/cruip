import React from "react";

import { Nav } from "@/components/global";
import { Hero, Statistics } from "@/components/Home";

import { ServerSliders } from "@/components/Home/ServerSliders";

const RootPage = () => {
  return (
    <>
      <div className="sm:container">
        <Nav />
        <Hero />
        <Statistics />
      </div>
      <ServerSliders />
    </>
  );
};

export default RootPage;
