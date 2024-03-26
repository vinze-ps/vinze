"use client";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import { opacityPageVariants, perspectivePageVariants, slidePageVariants } from "@/lib/transitions";
import { motion } from "framer-motion";

export default function Template({ children }: any) {
  return (
    <motion.div className="dark w-full h-full">
      <motion.div
        variants={slidePageVariants}
        className="fixed top-[0vh] left-0 text-foreground bg-background w-[100vw] h-[100vh] z-[50] shadow-2xl"
        initial="exit"
        exit="exit"
        animate="enter"
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        key="page"
      ></motion.div>
      <motion.div className="text-foreground bg-background" initial="initial" exit="exit" animate="enter" variants={perspectivePageVariants}>
        <motion.div initial="initial" exit="exit" animate="enter" variants={opacityPageVariants}>
          <Navbar />
          <div className="z-[1] text-foreground bg-background relative w-full mx-auto min-h-[calc(100vh-4rem)]">
            <main className="w-full">{children}</main>
          </div>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
