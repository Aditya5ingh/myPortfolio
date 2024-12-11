import React from "react";
import Hero from "../../assets/components/heroBanner/Hero";
import Navbar from "../../assets/components/navbar/Navbar";
import Card from "../../assets/components/card/Card";
import ProjectCard from "../../assets/components/projectCard/ProjectCard";

const AllProjects = () => {
  return (
    <div>
      <Navbar />
      <Hero title="All projects are here" />
      AllProjects
      <ProjectCard />
    </div>
  );
};

export default AllProjects;
