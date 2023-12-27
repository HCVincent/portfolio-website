"use client";

import { useSectionInView } from "@/lib/hooks";
import backEnd from "@/public/coursera/coursera-back-1.png";
import frontEnd from "@/public/coursera/coursera-front-1.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const reference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <motion.div
        ref={reference}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className=" mb-3 sm:mb-8 last:mb-0 flex w-full justify-center items-center "
      >
        <div
          className="relative group w-1/2"
          onClick={() =>
            window.open(
              "https://coursera.org/share/bfc22b31ec5434843a4d6021661d50e1",
              "_blank"
            )
          }
        >
          <Image
            src={frontEnd}
            alt="coursera certification"
            className="rounded-md group-hover:scale-105 group-hover:opacity-10  transition-all cursor-pointer"
            width={500}
            height={300}
          />
          <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-lg font-bold">
            Check Front-End certificate on Coursera
          </div>
        </div>

        <div
          className="ml-10 relative group w-1/2"
          onClick={() =>
            window.open(
              "https://coursera.org/share/51e53a0141ecd876f07b4647c49a96df",
              "_blank"
            )
          }
        >
          <Image
            src={backEnd}
            alt="coursera certification"
            className="rounded-md group-hover:scale-105 group-hover:opacity-10  transition-all cursor-pointer"
            width={500}
            height={300}
          />
          <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-lg font-bold">
            Check Back-End certificate on Coursera
          </div>
        </div>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name}>
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <div>{technology.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
