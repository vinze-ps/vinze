"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 1, x: 0, y: "0vh", transitionEnd: { opacity: 0, transitionDuration: "0" } },
  enter: { x: 0, y: "100vh", transitionEnd: { opacity: 1, transitionDuration: "0" } },
};

export default function Template({ children }: any) {
  return (
    <motion.div className="w-full h-full">
      <motion.div
        className="fixed top-[0vh] left-0 bg-background w-[100vw] h-[100vh] z-[50]"
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate="enter"
        transition={{ ease: "easeInOut", duration: 1 }}
        key="LandingPage"
      ></motion.div>
      <Navbar />
      <div className="w-full mx-auto min-h-[calc(100vh-4rem)]">
        <motion.main className="w-full px-4 py-8">{children}</motion.main>
      </div>
      <Footer />
    </motion.div>
  );
}
