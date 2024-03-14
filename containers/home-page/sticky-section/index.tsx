import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { animatedSectionChildVariants } from "@/lib/transitions";

const StickySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full h-[300vh] relative">
      <div className="w-full h-[100vh] overflow-hidden sticky top-0 left-0">
        <motion.h1
          style={{ opacity }}
          variants={animatedSectionChildVariants}
          className="text-6xl font-extrabold tracking-tight lg:text-8xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[1] text-default"
        >
          Hello.
        </motion.h1>
        <video
          className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-h-full min-w-full max-w-[none]"
          muted
          autoPlay
          loop
          preload="auto"
        >
          <source src="/videos/Abstract_objects_dark.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default StickySection;
