import React from "react";
import HeroCarousel from "../components/Home/HeroCarousel";
import AboutSection from "../components/Home/AboutSection";
import WhatWeDo from "../components/Home/WhatWeDo";
import CoreTeam from "../components/Home/CoreTeam";
import Partners from "../components/Home/Partners";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <WhatWeDo />
      <CoreTeam />
      <Partners />
    </div>
  );
};

export default Home;
