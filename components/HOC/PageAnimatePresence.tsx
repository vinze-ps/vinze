"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const PageAnimatePresence = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="w-full h-full">
        <motion.div
          animate={{
            top: "0vh",
            transitionEnd: {
              display: "none",
            },
            transition: { duration: 1, ease: "easeInOut" },
          }}
          exit={{ top: "100vh", transition: { duration: 0 } }}
          className="fixed top-[100vh] left-0 bg-background w-[100vw] h-[100vh] z-[50]"
        ></motion.div>
        <Navbar />
        <div className="w-full mx-auto min-h-[calc(100vh-4rem)]">
          <motion.main className="w-full px-4 py-8">{children}</motion.main>
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
