import React from "react";
import Navbar from "../../assets/components/navbar/Navbar";
import Hero from "../../assets/components/heroBanner/Hero";
import { Outlet, useLocation } from "react-router-dom";

const Skill = () => {
  const loc = useLocation();
  const isRouted =
    loc.pathname.includes("skill1") +
    loc.pathname.includes("skill2") +
    loc.pathname.includes("skill3") +
    loc.pathname.includes("skill4");
  return (
    <div>
      {!isRouted && (
        <div>
          <Navbar />
          <Hero title="All projects are here" />
          AllProjects
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Skill;
