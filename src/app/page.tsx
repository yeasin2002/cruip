import React from "react";

import { Nav } from "@/components/global";
import { Hero, Statistics } from "@/components/Home";

const RootPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Statistics />
    </>
  );
};

export default RootPage;
