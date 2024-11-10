"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png.png";
import Navlink from "./navlinks";
import { motion } from "framer-motion";

interface links{
  url: string;
  title: string;
  localPath?: string;
}
const socialLinks:links[] = [
  { localPath: "github.png", title: "Github", url: "https://github.com/Fardankhan12" },
  { localPath: "facebook.png", title: "Facebook", url: "https://www.facebook.com/arish.mohammad.1?mibextid=LQQJ4d" },
  { localPath: "instagram.png", title: "Instagram", url: "https://www.instagram.com/mr_fardan_khan12/" },
  { localPath: "linkedin.png", title: "LinkedIn", url: "https://www.linkedin.com/in/fardankhan/" },
];

const navLinks:links[] = [
  { url: "/", title: "Home" },
  { url: "/About-us", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/projects", title: "Project" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const topVariant = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: 45, y: 6 },
  };
  const centreVariant = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const endVariant = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: -45, y: -6 },
  };
  const listVariant = {
    closed: { x: "100vw" },
    opened: { x: "0", transition: { staggerChildren: 0.2, when: "beforeChildren" } },
  };

  const listItemVariant = {
    closed: { x: "-10px", opacity: 0 },
    opened: { x: "0", opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-8 md:px-12 lg:px-18 xl:px-48 h-16 ">
      <div className="flex justify-center items-center w-1/3 pt-6 ">
        <Link href="/">
          <Image src={Logo} alt="Website Logo" width={180} height={100} priority />
        </Link>
      </div>
      <div className="hidden md:flex gap-6 same">
        {navLinks.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {socialLinks.map((icon) => (
          <Link href={icon.url} key={icon.title} target="_blank" rel="noopener noreferrer">
            <Image src={`/${icon.localPath}`} alt={`${icon.title} icon`} width={26} height={26} loading="lazy" />
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center same ">
        <button
          className="flex flex-col items-center justify-center w-10 h-10 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            variants={topVariant}
            animate={isMenuOpen ? "opened" : "closed"}
            transition={{ duration: 0.3 }}
            className="w-8 h-1 bg-black origin-center"
          />
          <motion.div
            variants={centreVariant}
            animate={isMenuOpen ? "opened" : "closed"}
            transition={{ duration: 0.3 }}
            className="w-8 h-1 bg-black my-1"
          />
          <motion.div
            variants={endVariant}
            animate={isMenuOpen ? "opened" : "closed"}
            transition={{ duration: 0.3 }}
            className="w-8 h-1 bg-black origin-center"
          />
        </button>

        {isMenuOpen && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#243642] text-[#E2F1E7] text-4xl gap-8 z-40 "
          >
            {navLinks.map((item) => (
              <motion.div
                variants={listItemVariant}
                key={item.url}
                className="cursor-pointer"
              >
                <Link href={item.url} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
