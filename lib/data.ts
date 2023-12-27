import React from "react";
import { FaStore } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import vrgamesImg from "@/public/vrgames.png";
import redditImg from "@/public/reddit.png";
import coursesImg from "@/public/courses.png";

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
    title: "Front-end Developer",
    location: "Wuhan, China",
    description: "Develop and Maintain Reusable Components and Libraries: Expertly crafted reusable UI components and front-end libraries, emphasizing modularity and scalability. Full-stack Development with Next.js and Firebase: This combination allowed for the rapid development of robust, scalable applications with real-time data capabilities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Launching a venture",
    location: "Beijing, China",
    description:
      "Run an Amazon online store.",
    icon: React.createElement(FaStore),
    date: "2017 - 2023",
  },
  {
    title: "Android Developer",
    location: "Shanghai Haoxi Industrial Co., Ltd., China",
    description:
      "Develop and maintain a CRM application that visualizes employee performance and their relationship status with customers. Be responsible for integrating mobile application code with back-end services",
    icon: React.createElement(ImAndroid),
    date: "2015 - 2016",
  },
] as const;

export const projectsData = [
  {
    title: "FreeVRGames",
    description:
      "Users can browse, search, and download games, while administrators can CRUD data. I worked as a full-stack developer on this project. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase", "Recoil"],
    imageUrl: vrgamesImg,
    codeUrl: "https://github.com/HCVincent/free-games-firebase",
    liveUrl: "https://freevrgames.vercel.app/"
  },
  {
    title: "Reddit Clone",
    description:
      "A forum website where users can create and join communities, as well as post and comment. ",
    tags: ["React", "TypeScript", "Next.js", "Chakra UI", "Recoil", "Firebase"],
    imageUrl: redditImg,
    codeUrl: "https://github.com/HCVincent/reddit-my",
    liveUrl: "https://reddit-my.vercel.app/"
  },
  {
    title: "Courses Online",
    description:
      "An online education website where users can purchase courses and get access to videos and materials. Administrators can CRUD data, as well as manage permissions.",
    tags: ["React", "Next.js", "Tailwind", "Stripe", "Prisma", "Mysql"],
    imageUrl: coursesImg,
    codeUrl: "https://github.com/HCVincent/lms",
    liveUrl: "https://course-online-livid.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Framer Motion",
] as const;
