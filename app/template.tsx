"use client";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import { variantsOpacity, variantsPerspective, variantsSlide } from "@/utils/transitions";
import { motion } from "framer-motion";

export default function Template({ children }: any) {
  return (
    <motion.div className="w-full h-full">
      <motion.div
        variants={variantsSlide}
        className="fixed top-[0vh] left-0 bg-background w-[100vw] h-[100vh] z-[50]"
        initial="exit"
        exit="exit"
        animate="enter"
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        key="page"
      ></motion.div>
      <motion.div initial="initial" exit="exit" animate="enter" variants={variantsPerspective}>
        <motion.div initial="initial" exit="exit" animate="enter" variants={variantsOpacity}>
          <Navbar />
          <div className="w-full mx-auto min-h-[calc(100vh-4rem)]">
            <main className="w-full">{children}</main>
          </div>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
