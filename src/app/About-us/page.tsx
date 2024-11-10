"use client";
import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const skills: string[] = [
    "Html",
    "Css",
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl same">BIOGRAPHY</h1>
            <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide space-y-4">
              I&apos;m{" "}
              <span className="bg-[#243642] rounded font-serif px-2 py-1 text-white inline-block hover:scale-105">
                Fardan Khan
              </span>{" "}
              an undergraduate programmer skilled in HTML, CSS, JavaScript,
              React, Next.js, TypeScript, Python, and C++. Currently pursuing a
              Data Science certification, I&apos;m passionate about AI and
              Machine Learning. My goal is to build a humanoid robot powered by
              AI that responds intelligently to complex instructions. Driven by
              innovation, I aim to push technology&apos;s boundaries.
            </p>
            <span className="italic">
              &quot;Web development success lies in curiosity, persistence, and
              the courage to build what others haven&apos;t imagined yet.&quot;
            </span>
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl same"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((link, index) => (
                <div
                  key={index}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black same"
                >
                  {link}
                </div>
              ))}
            </motion.div>
          </div>
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl same"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg same">
                    Senior JavaScript Engineer
                  </div>

                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>

                  <div className="p-3 text-[#243642] text-sm font-semibold font-serif">
                    2024 - Present
                  </div>

                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit same">
                    Apple
                  </div>
                </div>

                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#243642] bg-[#629584] -left-2"></div>
                  </div>
                </div>

                <div className="w-1/3 "></div>
              </div>

              <div className="flex justify-between h-48">
                <div className="w-1/3 "></div>

                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#243642] bg-[#629584] -left-2"></div>
                  </div>
                </div>

                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg same ">
                    Senior React Developer
                  </div>

                  <div className="p-3 text-sm italic font-serif">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-[#243642] text-sm font-semibold font-serif">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit same">
                    Microsoft
                  </div>
                </div>
              </div>

              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 same rounded-b-lg rounded-s-lg font-semibold">
                    Freelancer{" "}
                  </div>

                  <div className="p-3 text-sm italic font-serif ">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>

                  <div className="p-3 text-[#243642] text-sm font-semibold font-serif ">
                    2010 - 2019{" "}
                  </div>
                </div>

                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#243642] bg-[#629584] -left-2"></div>
                  </div>
                </div>

                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:flex items-center lg:w-1/3 xl:w-1/2 p-10">
          <Image
            src="/biography.jpeg"
            alt="Fardan Khan"
            width={500}
            height={750}
            className="w-[60%] object-cover rounded-lg pb-[85rem] ml-[14.5rem]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
