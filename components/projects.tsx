"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/libs/data";
import Project from "./project";
import { useSectionInView } from "@/libs/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
