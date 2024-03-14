"use client";
import { motion, useScroll } from "framer-motion";
import { animatedSectionChildVariants } from "@/lib/transitions";
import { useRef } from "react";
import HeroSection from "@/containers/home-page/hero-section";
import CardSection from "@/containers/home-page/cards-section";
import MarqueesSection from "@/containers/home-page/marquees-section";

export default function Home() {
  const abstractObjectsBgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: abstractObjectsBgRef,
    offset: ["end end", "end start"],
  });

  return (
    <>
      <HeroSection />
      <CardSection />
      <MarqueesSection />
      <div className="w-full h-[200vh] relative">
        <div className="w-full h-[100vh] overflow-hidden sticky top-0 left-0">
          <motion.h1
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
      <div className="w-full h-[100vh] relative"></div>
    </>
  );
}
