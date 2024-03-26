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

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);

  return (
    <div ref={containerRef} className="w-full h-[200vh] relative mb-8 md:mb-16">
      <div></div>
      <AnimatedSectionContainer className="mx-auto max-w-[1024px] h-[100vh] sticky overflow-hidden top-0 left-0">
        <motion.div>
          <Image src={Mesh1} alt="mesh" className="w-auto mx-auto h-full opacity-[0.5]" />
        </motion.div>
        <motion.div
          style={{ y: y1 }}
          className="w-[215px] h-[466px] bg-default-300 absolute left-[30px] top-[50px] rounded-xl"
        ></motion.div>
        <motion.div
          style={{ y: y2 }}
          className="w-[615px] h-[466px] bg-default-300 absolute right-[30px] top-[250px] rounded-xl"
        ></motion.div>
        <div className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <p>My projects</p>
          <h3 className="text-4xl font-bold tracking-tight">Overview</h3>
        </div>
      </AnimatedSectionContainer>
    </div>
  );
};

export default OverviewSection;
