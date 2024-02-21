"use client";
import { Variants, motion } from "framer-motion";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const animation = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity: Variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
    },
    exit: { opacity: 1 },
  };

  const slide: Variants = {
    initial: { top: "100vh" },
    enter: {
      top: "100vh",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      top: "0vh",
    },
  };

  return (
    <motion.div>
      <motion.div {...animation(slide)} className="fixed top-0 left-0 bg-background w-[100vw] h-[100vh] z-[30]"></motion.div>
      <motion.main className="w-full px-4 py-8">{children}</motion.main>
    </motion.div>
  );
};

export default Template;
