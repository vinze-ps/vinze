"use client";
import AnimatedSectionContainer from "@/components/common/AnimatedSectionContainer/AnimatedSectionContainer";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";

const CurrentlyWorkingOnSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="w-full h-[200vh] relative mb-8 md:mb-16">
      <AnimatedSectionContainer className="bg-default-50 w-full h-[100vh] overflow-hidden sticky top-0 left-0">
        <div>test</div>
      </AnimatedSectionContainer>
    </div>
  );
};

export default CurrentlyWorkingOnSection;
