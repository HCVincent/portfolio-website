"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]  leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>{" "}
      <ul className="mb-3 list-decimal ">
        <li>
          Educational Background in Politics and Administration: Obtained an
          undergraduate degree in Politics and Administration, providing a
          foundation in analytical thinking and structured problem-solving.
        </li>
        <li>
          Transition to Programming: In 2022, demonstrated adaptability and
          self-motivation by transitioning to programming, independently
          acquiring front-end web development skills through courses on Coursera
          and educational videos on YouTube.
        </li>
        <li>
          Proficiency in Modern Web Technologies: Skilled in a core set of web
          technologies, including React, Next.js, Node.js, and Firebase. Also
          adept in TypeScript and Prisma, showcasing an ability to adapt to and
          master evolving development tools and languages.
        </li>
        <li>
          Commitment to Continuous Learning: Continually seeks opportunities to
          expand technical knowledge and skills, underlining a dedication to
          staying abreast of the latest trends and advancements in the tech
          industry.
        </li>
        <li>
          Career Aspiration: Actively seeking a full-time position as a software
          developer, aiming to leverage a unique blend of academic background
          and self-taught technical expertise in a dynamic software development
          environment.
        </li>
      </ul>{" "}
    </motion.section>
  );
}
