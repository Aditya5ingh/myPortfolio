import React from "react";
import Navbar from "../../assets/components/navbar/Navbar";
import Hero from "../../assets/components/heroBanner/Hero";
import { Outlet } from "react-router-dom";

const Skill = () => {
  return (
    <div>
      <Navbar />
      <Hero title="All projects are here" />
      AllProjects
      <Outlet />
    </div>
  );
};

export default Skill;
