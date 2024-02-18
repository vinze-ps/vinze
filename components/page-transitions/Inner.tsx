import { Variants, motion } from "framer-motion";
import React from "react";

const Inner = ({ children }: { children: React.ReactNode }) => {
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
    enter: { opacity: 1 },
    exit: { opacity: 1 },
  };

  const slide: Variants = {
    initial: { top: "100vh" },
    enter: { top: "100vh" },
    exit: {
      top: "0vh",
      transition: {
        duration: 1,
        ease: [0, 76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div>
      <motion.div {...animation(slide)} className="fixed top-0 left-0 bg-[red] w-[100vw] h-[100vh]"></motion.div>
      <motion.main {...animation(opacity)} className="w-full px-4 py-8">
        {children}
      </motion.main>
    </div>
  );
};

export default Inner;
