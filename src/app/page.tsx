import React from "react";

import { Nav } from "@/components/global";
import { Hero, Statistics } from "@/components/Home";

import { ServerSliders } from "@/components/Home/ServerSliders";

const RootPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Statistics />
      <ServerSliders />
    </>
  );
};

export default RootPage;
