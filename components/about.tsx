"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/libs/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With over{" "}
        <span className="font-medium">
          8 years of experience as a Full-Stack Developer and Onsite Coordinator
        </span>
        , I excel in delivering complex, high-quality web solutions. My passion
        for coding drives me to create scalable and efficient applications using
        a diverse set of technologies,
        <span className="font-medium">
          including JavaScript, HTML, CSS, Node.js, and React
        </span>
        .{" "}
        <span className="italic">I possess a deep understanding of both </span>
        <span className="font-medium">
          front-end and back-end development,{" "}
        </span>{" "}
        allowing for seamless integration of various components. My core stack
        includes{" "}
        <span className="font-medium">React, Node.js, and MongoDB</span>. I am
        also familiar with TypeScript.
      </p>
      <p className="mb-3">
        My role involves{" "}
        <span className="font-medium">
          managing projects on-site, ensuring effective communication between
          teams and stakeholders, and exceeding client expectations
        </span>{" "}
        . I thrive on solving challenging problems and am committed to
        continuous learning and innovation as a developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy working
        out, watching movies, and cooking. I am also passionate about{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">GraphQL with Apollo Server</span>. I'm
        also learning how to play tennis.
      </p>
    </motion.section>
  );
};

export default About;
