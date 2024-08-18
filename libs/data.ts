import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import caffeineCuddlesImg from "@/public/caffine-cuddles.png";
import elitefitnessImg from "@/public/elite-fitness.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated - Computer Science & Engineering",
    company: "KLS Gogte Institute of Technology",
    location: "Karnataka, India",
    description:
      "Completed my 4 years of Engineering and Immediately found a job as Software developer",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2012 - Jun 2016",
  },
  {
    title: "Software Engineer",
    company: "Mindtree",
    location: "Bengaluru, Karnataka, India",
    description:
      "Developed and enhanced APIs for various channels, ensuring reliability and performance through design, implementation, testing, and collaboration.",
    icon: React.createElement(FaNodeJs),
    date: "Jul 2016 - Jul 2018",
  },
  {
    title: "Senior Software Engineer",
    company: "Mindtree",
    location: "Bengaluru, Karnataka, India",
    description:
      "Developed and integrated APIs, resolved critical issues, contributed to brand mergers, optimized performance, managed urgent updates, conducted code reviews, and improved accessibility and user experience.",
    icon: React.createElement(FaReact),
    date: "Jul 2018 - Jul 2020",
  },
  {
    title: "Module Lead",
    company: "Ltimindtree",
    location: "Toronto, Ontario, Canada",
    description:
      "Developed client POCs by upgrading applets to React and RESTful services, reviewed peer code, and took on an additional role as an onsite coordinator after relocating to Canada in December 2021.",
    icon: React.createElement(FaReact),
    date: "Jul 2020 - Nov 2022",
  },
  {
    title: "Lead Full Stack Engineer",
    company: "Ltimindtree",
    location: "Toronto, Ontario, Canada",
    description:
      "Worked as an onsite lead and full-stack developer, managing client interactions, coordinating cross-functional and offshore teams, and overseeing both development and release activities.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - Mar 2023",
  },
  {
    title: "Software Engineering Specialist",
    company: "Ltimindtree",
    location: "Toronto, Ontario, Canada",
    description:
      "Managed brand mergers, critical production issues, and launches as an onsite/offshore lead, provided project estimations, and handled multiple POCs, upgrades, and migration projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "elite-fitness",
    description:
      "Developed an app with exercise categories, over a thousand exercises, detailed info, pagination, related YouTube videos, and similar exercises.",
    tags: ["React", "Material-Ui", "Rapid-API", "React-Router"],
    imageUrl: elitefitnessImg,
    github: "https://github.com/AishwaryaBongale/project-fitness-app",
    siteLink: "https://elitesfitness.netlify.app/",
  },
  {
    title: "caffeine cuddles",
    description:
      "Personal Project -  Built a simple coffee house website using react to show animation",
    tags: ["React", "Tailwind", "Framer Motion"],
    imageUrl: caffeineCuddlesImg,
    github: "https://github.com/AishwaryaBongale/coffee-house-website",
    siteLink: "https://caffeinecuddles.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Handlebars",
  "Jquery",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Framer Motion",
  "Next.js",
  "MongoDB",
  "Git",
  "Postman",
  "Splunk",
  "Glassbox",
  "Dynatrace",
  "Apollo Studio",
  "React-Testing-Library",
  "Jest",
  "OSE",
  "Agile",
  "Jira",
  "Confluence",
] as const;
