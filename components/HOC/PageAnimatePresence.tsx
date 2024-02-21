"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const PageAnimatePresence = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div key={pathname} className="w-full h-full">
        <motion.div
          initial={{ height: "100vh" }}
          animate={{ height: "0vh" }}
          exit={{ height: "0vh" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed top-0 left-0 bg-[red] w-[100vw] h-[100vh] z-[30]"
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
