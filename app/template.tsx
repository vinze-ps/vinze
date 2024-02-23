"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: "100vh" },
  enter: { opacity: 1, x: 0, y: "0vh" },
};

export default function Template({ children }: any) {
  return (
    <motion.div className="w-full h-full">
      <motion.div
        className="fixed top-[0vh] left-0 bg-[red] w-[100vw] h-[100vh] z-[50]"
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate="enter"
        transition={{ type: "linear", duration: 0.25 }}
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

// "use client";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import FrozenRoute from "./FrozenRoute";

// const PageAnimatePresence = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div key={pathname} className="w-full h-full">
//         <FrozenRoute>
//           <motion.div
//             animate={{
//               top: "30vh",
//               transition: { duration: 1, ease: "easeInOut" },
//             }}
//             exit={{ top: "100vh", transition: { duration: 0 } }}
//             className="fixed top-[100vh] left-0 bg-[red] w-[100vw] h-[100vh] z-[50]"
//           ></motion.div>
//         </FrozenRoute>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default PageAnimatePresence;
