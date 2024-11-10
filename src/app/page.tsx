"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row h-screen px-4 sm:px-8 md:px-12 lg:px-10 xl:px-24 ">
        <div className="lg:w-1/2 h-full relative">
          <img
            src="/hero1.png"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <div className="  lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center p-4 sm:p-8 lg:p-10">
          <h1 className=" same text-3xl sm:text-4xl  md:text-4xl lg:text-5xl font-bold  ">
            Frontend to Backend Solutions <br /> in TS and Python
          </h1>

          <p className="desc text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed tracking-wide space-y-4">
           hey I am fardan khan and my aim is to convert my ideas into reality
          </p>

          <div className=" same flex flex-col sm:flex-row gap-4 w-full px-20 ">
            <Link href={"/projects"}>
            <button className="rounded ring-1 ring-black px-6 py-3 bg-black text-white hover:bg-gray-800 transition duration-200">
              View My Work
            </button>
            </Link>
            <Link href={"/contact"}>
            <button className="rounded ring-1 ring-black px-6 py-3 hover:bg-[#E2F1E7] transition duration-200">
              Contact Me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
