"use client";
import AnimatedSectionContainer from "@/components/common/AnimatedSectionContainer/AnimatedSectionContainer";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Mesh1 from "@/lib/assets/images/mesh-1.webp";

const OverviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const opacity1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"]);
  const y6 = useTransform(scrollYProgress, [0, 1], ["40%", "-160%"]);

  return (
    <div ref={containerRef} className="w-full h-[200vh] relative mb-8 md:mb-16">
      <motion.div style={{ opacity: opacity1 }} className="text-center sticky w-full h-[100vh] flex items-center justify-center flex-col top-0 left-0 z-[1]">
        <p>My projects</p>
        <h3 className="text-4xl font-bold tracking-tight">Overview</h3>
      </motion.div>
      <AnimatedSectionContainer className="max-w-[1280px] w-full h-full absolute overflow-hidden top-0 left-[50%] translate-x-[-50%]">
        <motion.div className="absolute left-[50%] top-[50%] w-full" style={{ y: yBg, translateX: "-50%" }}>
          <Image src={Mesh1} alt="mesh" className="w-auto mx-auto h-full opacity-[0.5]" />
        </motion.div>
        <div className="grid grid-cols-3 w-full z-[1] relative gap-y-8">
          <motion.div style={{ y: y1 }} className="w-[215px] h-[466px] bg-default-200 rounded-xl col-span-1"></motion.div>
          <motion.div style={{ y: y2 }} className="w-[615px] h-[466px] bg-default-300 rounded-xl col-span-2"></motion.div>
          <motion.div style={{ y: y3 }} className="w-[615px] h-[466px] bg-default-400 rounded-xl col-span-2"></motion.div>
          <motion.div style={{ y: y4 }} className="w-[215px] h-[466px] bg-default-500 rounded-xl col-span-1"></motion.div>
          <motion.div style={{ y: y5 }} className="w-[215px] h-[466px] bg-default-600 rounded-xl col-span-1"></motion.div>
          <motion.div style={{ y: y6 }} className="w-[615px] h-[466px] bg-default-700 rounded-xl col-span-2"></motion.div>
        </div>
      </AnimatedSectionContainer>
    </div>
  );
};

export default OverviewSection;
